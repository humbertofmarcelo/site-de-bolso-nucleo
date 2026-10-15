import Hero from "./sections/Hero.astro";
import Sobre from "./sections/Sobre.astro";
import Servicos from "./sections/Servicos.astro";
import Faq from "./sections/Faq.astro";
import Contato from "./sections/Contato.astro";
import Formacao from "./sections/Formacao.astro";
import HeroEditorial from "./sections/editorial/HeroEditorial.astro";
import HeroOverlay from "./sections/editorial/HeroOverlay.astro";
import DemandasEditorial from "./sections/editorial/DemandasEditorial.astro";
import ServicosEditorial from "./sections/editorial/ServicosEditorial.astro";
import SobreEditorial from "./sections/editorial/SobreEditorial.astro";
import ModalidadesEditorial from "./sections/editorial/ModalidadesEditorial.astro";
import FaqEditorial from "./sections/editorial/FaqEditorial.astro";
import ContatoEditorial from "./sections/editorial/ContatoEditorial.astro";

// Seções compartilhadas padrão
export const secoesCompartilhadas: Record<string, any> = {
  hero: Hero,
  sobre: Sobre,
  servicos: Servicos,
  faq: Faq,
  contato: Contato,
  formacao: Formacao,
  demandas: DemandasEditorial,
  modalidades: ModalidadesEditorial,
  "hero-overlay": HeroOverlay,
  "hero-editorial": HeroEditorial,
};

// Catálogo de variantes por seção (permite alternar layouts por prop "variante" no site.json)
export const variantesSecoes: Record<string, Record<string, any>> = {
  hero: {
    padrao: Hero,
    editorial: HeroEditorial,
    overlay: HeroOverlay,
  },
  sobre: {
    padrao: Sobre,
    editorial: SobreEditorial,
  },
  servicos: {
    padrao: Servicos,
    editorial: ServicosEditorial,
  },
  demandas: {
    editorial: DemandasEditorial,
  },
  modalidades: {
    editorial: ModalidadesEditorial,
  },
  faq: {
    padrao: Faq,
    editorial: FaqEditorial,
  },
  contato: {
    padrao: Contato,
    editorial: ContatoEditorial,
  },
  formacao: {
    padrao: Formacao,
  },
};

// Variantes específicas registradas por coleção visual
export const variantesColecoes: Record<string, Record<string, any>> = {
  editorial: {
    hero: HeroEditorial,
    demandas: DemandasEditorial,
    servicos: ServicosEditorial,
    sobre: SobreEditorial,
    modalidades: ModalidadesEditorial,
    faq: FaqEditorial,
    contato: ContatoEditorial,
  },
};

/**
 * Resolve o componente Astro apropriado com base na coleção, tipo e variante opcional.
 * Prioridades:
 * 1. Variante explícita (ex.: tipo: "hero", variante: "overlay")
 * 2. Tipo composto direto (ex.: tipo: "hero-overlay")
 * 3. Especialização da coleção ativa (ex.: coleção "editorial" -> HeroEditorial)
 * 4. Variante com o mesmo nome da coleção
 * 5. Variante padrão
 * 6. Fallback compartilhado
 */
export function obterComponenteSecao(colecao: string, tipo: string, variante?: string): any {
  // 1. Variante explícita no item (ex.: { tipo: "hero", variante: "overlay" })
  if (variante && variantesSecoes[tipo]?.[variante]) {
    return variantesSecoes[tipo][variante];
  }

  // 2. Tipo composto direto (ex.: "hero-overlay")
  if (tipo.includes("-")) {
    const [secaoPai, varNome] = tipo.split("-");
    if (variantesSecoes[secaoPai]?.[varNome]) {
      return variantesSecoes[secaoPai][varNome];
    }
    if (secoesCompartilhadas[tipo]) {
      return secoesCompartilhadas[tipo];
    }
  }

  // 3. Especialização da coleção ativa
  if (variantesColecoes[colecao]?.[tipo]) {
    return variantesColecoes[colecao][tipo];
  }

  // 4. Se a seção tiver variante com nome da coleção
  if (variantesSecoes[tipo]?.[colecao]) {
    return variantesSecoes[tipo][colecao];
  }

  // 5. Variante padrão da seção
  if (variantesSecoes[tipo]?.padrao) {
    return variantesSecoes[tipo].padrao;
  }

  // 6. Recorre ao catálogo compartilhado
  return secoesCompartilhadas[tipo] ?? null;
}
