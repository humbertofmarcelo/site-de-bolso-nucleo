import { readFileSync, writeFileSync } from "node:fs";
import { execSync } from "node:child_process";

const modelos = [
  "silvia-volpatto",
  "gabriela-alcantara",
  "amanda-botelho",
  "leticia-malta",
  "ricardo-costa",
  "bruno-freitas"
];

const clientePath = "src/content/cliente.json";
const originalCliente = readFileSync(clientePath, "utf8");

try {
  for (const mod of modelos) {
    console.log(`\n========================================`);
    console.log(`Testando modelo: ${mod}`);
    console.log(`========================================`);

    const clienteObj = JSON.parse(originalCliente);
    clienteObj.modelo = mod;
    delete clienteObj.paleta; // testa a paleta padrão de cada modelo
    delete clienteObj.secoes; // testa as seções padrão de cada modelo

    writeFileSync(clientePath, JSON.stringify(clienteObj, null, 2), "utf8");

    execSync("npm run check", { stdio: "inherit" });
    execSync("npm run build", { stdio: "inherit" });
    console.log(`✓ Modelo ${mod} compilou com sucesso!`);
  }
} finally {
  writeFileSync(clientePath, originalCliente, "utf8");
  execSync("npm run check", { stdio: "inherit" });
  execSync("npm run build", { stdio: "inherit" });
  console.log(`\n✓ Restaurado cliente.json original e reconstruído com sucesso!`);
}

