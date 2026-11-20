// Modelo 1 (Silvia Volpatto / Editorial Terroso)
import HeroEditorial from "./modelos/silvia-volpatto/HeroEditorial.astro";
import HeroOverlay from "./modelos/silvia-volpatto/HeroOverlay.astro";
import DemandasEditorial from "./modelos/silvia-volpatto/DemandasEditorial.astro";
import ServicosEditorial from "./modelos/silvia-volpatto/ServicosEditorial.astro";
import SobreEditorial from "./modelos/silvia-volpatto/SobreEditorial.astro";
import ModalidadesEditorial from "./modelos/silvia-volpatto/ModalidadesEditorial.astro";
import FaqEditorial from "./modelos/silvia-volpatto/FaqEditorial.astro";
import ContatoEditorial from "./modelos/silvia-volpatto/ContatoEditorial.astro";
import FormacaoEditorial from "./modelos/silvia-volpatto/FormacaoEditorial.astro";

// Modelo 2 (Gabriela Alcântara / Editorial P&B)
import HeroPb from "./modelos/gabriela-alcantara/HeroPb.astro";
import ParaQuemPb from "./modelos/gabriela-alcantara/ParaQuemPb.astro";
import ServicosPb from "./modelos/gabriela-alcantara/ServicosPb.astro";
import PassosPb from "./modelos/gabriela-alcantara/PassosPb.astro";
import FaqPb from "./modelos/gabriela-alcantara/FaqPb.astro";
import ContatoPb from "./modelos/gabriela-alcantara/ContatoPb.astro";

// Modelo 3 (Amanda Botelho / Lúdico Lilás)
import HeroLudico from "./modelos/amanda-botelho/HeroLudico.astro";
import PorQueTerapia from "./modelos/amanda-botelho/PorQueTerapia.astro";
import AbordagemLudica from "./modelos/amanda-botelho/AbordagemLudica.astro";
import StepperLudico from "./modelos/amanda-botelho/StepperLudico.astro";
import MiniCtaLudico from "./modelos/amanda-botelho/MiniCtaLudico.astro";
import FaqLudico from "./modelos/amanda-botelho/FaqLudico.astro";
import ContatoLudico from "./modelos/amanda-botelho/ContatoLudico.astro";

// Modelo 4 (Letícia Malta / Orgânico Sálvia)
import HeroOrganico from "./modelos/leticia-malta/HeroOrganico.astro";
import ApresentacaoOrganica from "./modelos/leticia-malta/ApresentacaoOrganica.astro";
import ServicosOrganicos from "./modelos/leticia-malta/ServicosOrganicos.astro";
import ConviteOrganico from "./modelos/leticia-malta/ConviteOrganico.astro";
import FaqOrganico from "./modelos/leticia-malta/FaqOrganico.astro";
import RodapeOrganico from "./modelos/leticia-malta/RodapeOrganico.astro";

// Modelo 5 (Ricardo Costa / Estruturado Azul)
import HeroEstruturado from "./modelos/ricardo-costa/HeroEstruturado.astro";
import MotivosGrid from "./modelos/ricardo-costa/MotivosGrid.astro";
import SobreEstruturado from "./modelos/ricardo-costa/SobreEstruturado.astro";
import AgendamentoInfo from "./modelos/ricardo-costa/AgendamentoInfo.astro";
import FaqEstruturado from "./modelos/ricardo-costa/FaqEstruturado.astro";
import ContatoEstruturado from "./modelos/ricardo-costa/ContatoEstruturado.astro";

// Modelo 6 (Bruno Freitas / Vibrante Roxo)
import HeroVibrante from "./modelos/bruno-freitas/HeroVibrante.astro";
import ComoAjudarVibrante from "./modelos/bruno-freitas/ComoAjudarVibrante.astro";
import QuandoBuscarVibrante from "./modelos/bruno-freitas/QuandoBuscarVibrante.astro";
import SobreVibrante from "./modelos/bruno-freitas/SobreVibrante.astro";
import ProcessoVibrante from "./modelos/bruno-freitas/ProcessoVibrante.astro";
import FaqVibrante from "./modelos/bruno-freitas/FaqVibrante.astro";
import ContatoVibrante from "./modelos/bruno-freitas/ContatoVibrante.astro";

// Modelo 7 (Silvia & Letícia / Editorial & Orgânico)
import HeroSilviaLeticia from "./modelos/silvia-leticia/HeroSilviaLeticia.astro";
import FraseSilviaLeticia from "./modelos/silvia-leticia/FraseSilviaLeticia.astro";
import ServicosSilviaLeticia from "./modelos/silvia-leticia/ServicosSilviaLeticia.astro";
import SobreSilviaLeticia from "./modelos/silvia-leticia/SobreSilviaLeticia.astro";
import ModalidadesSilviaLeticia from "./modelos/silvia-leticia/ModalidadesSilviaLeticia.astro";
import FaqSilviaLeticia from "./modelos/silvia-leticia/FaqSilviaLeticia.astro";
import ContatoSilviaLeticia from "./modelos/silvia-leticia/ContatoSilviaLeticia.astro";

// Catálogo de seções diretas por identificador de tipo
export const secoesCompartilhadas: Record<string, any> = {
  // Modelo 1 (Silvia Volpatto)
  hero: HeroEditorial,
  "hero-overlay": HeroOverlay,
  "hero-editorial": HeroEditorial,
  demandas: DemandasEditorial,
  servicos: ServicosEditorial,
  sobre: SobreEditorial,
  modalidades: ModalidadesEditorial,
  faq: FaqEditorial,
  contato: ContatoEditorial,
  formacao: FormacaoEditorial,

  // Modelo 2 (Gabriela Alcântara)
  "hero-pb": HeroPb,
  "para-quem-pb": ParaQuemPb,
  "servicos-pb": ServicosPb,
  "passos-pb": PassosPb,
  "faq-pb": FaqPb,
  "contato-pb": ContatoPb,

  // Modelo 3 (Amanda Botelho)
  "hero-ludico": HeroLudico,
  "por-que-terapia": PorQueTerapia,
  "abordagem-ludica": AbordagemLudica,
  "stepper-ludico": StepperLudico,
  "mini-cta-ludico": MiniCtaLudico,
  "faq-ludico": FaqLudico,
  "contato-ludico": ContatoLudico,

  // Modelo 4 (Letícia Malta)
  "hero-organico": HeroOrganico,
  "apresentacao-organica": ApresentacaoOrganica,
  "servicos-organicos": ServicosOrganicos,
  "convite-organico": ConviteOrganico,
  "faq-organico": FaqOrganico,
  "rodape-organico": RodapeOrganico,

  // Modelo 5 (Ricardo Costa)
  "hero-estruturado": HeroEstruturado,
  "motivos-grid": MotivosGrid,
  "sobre-estruturado": SobreEstruturado,
  "agendamento-info": AgendamentoInfo,
  "faq-estruturado": FaqEstruturado,
  "contato-estruturado": ContatoEstruturado,

  // Modelo 6 (Bruno Freitas)
  "hero-vibrante": HeroVibrante,
  "como-ajudar-vibrante": ComoAjudarVibrante,
  "quando-buscar-vibrante": QuandoBuscarVibrante,
  "sobre-vibrante": SobreVibrante,
  "processo-vibrante": ProcessoVibrante,
  "faq-vibrante": FaqVibrante,
  "contato-vibrante": ContatoVibrante,

  // Modelo 7 (Silvia & Letícia)
  "hero-silvia-leticia": HeroSilviaLeticia,
  "frase-silvia-leticia": FraseSilviaLeticia,
  "servicos-silvia-leticia": ServicosSilviaLeticia,
  "sobre-silvia-leticia": SobreSilviaLeticia,
  "modalidades-silvia-leticia": ModalidadesSilviaLeticia,
  "faq-silvia-leticia": FaqSilviaLeticia,
  "contato-silvia-leticia": ContatoSilviaLeticia,
};

// Catálogo de variantes por seção base
export const variantesSecoes: Record<string, Record<string, any>> = {
  hero: {
    padrao: HeroOverlay,
    editorial: HeroOverlay,
    overlay: HeroOverlay,
    nenhum: HeroOverlay,
    pb: HeroPb,
    ludico: HeroLudico,
    organico: HeroOrganico,
    estruturado: HeroEstruturado,
    vibrante: HeroVibrante,
    "silvia-leticia": HeroSilviaLeticia,
  },
  "hero-silvia-leticia": {
    padrao: HeroSilviaLeticia,
    editorial: HeroSilviaLeticia,
    overlay: HeroSilviaLeticia,
    nenhum: HeroSilviaLeticia,
  },
  sobre: {
    padrao: SobreEditorial,
    editorial: SobreEditorial,
    organico: ApresentacaoOrganica,
    estruturado: SobreEstruturado,
    vibrante: SobreVibrante,
    "silvia-leticia": SobreSilviaLeticia,
  },
  servicos: {
    padrao: ServicosEditorial,
    editorial: ServicosEditorial,
    pb: ServicosPb,
    organico: ServicosOrganicos,
    "como-ajudar": ComoAjudarVibrante,
    "silvia-leticia": ServicosSilviaLeticia,
  },
  demandas: {
    padrao: DemandasEditorial,
    editorial: DemandasEditorial,
    pb: ParaQuemPb,
    ludico: PorQueTerapia,
    estruturado: MotivosGrid,
    vibrante: QuandoBuscarVibrante,
  },
  modalidades: {
    padrao: ModalidadesEditorial,
    editorial: ModalidadesEditorial,
    estruturado: AgendamentoInfo,
    processo: ProcessoVibrante,
    passos: PassosPb,
    "silvia-leticia": ModalidadesSilviaLeticia,
  },
  faq: {
    padrao: FaqEditorial,
    editorial: FaqEditorial,
    pb: FaqPb,
    ludico: FaqLudico,
    organico: FaqOrganico,
    estruturado: FaqEstruturado,
    vibrante: FaqVibrante,
    "silvia-leticia": FaqSilviaLeticia,
  },
  contato: {
    padrao: ContatoEditorial,
    editorial: ContatoEditorial,
    pb: ContatoPb,
    ludico: ContatoLudico,
    organico: RodapeOrganico,
    estruturado: ContatoEstruturado,
    vibrante: ContatoVibrante,
    "silvia-leticia": ContatoSilviaLeticia,
  },
  formacao: {
    padrao: FormacaoEditorial,
    editorial: FormacaoEditorial,
  },
};

/**
 * Resolve o componente Astro apropriado com base no tipo e variante opcional.
 */
export function obterComponenteSecao(_colecao: string, tipo: string, variante?: string): any {
  // 1. Variante explícita no item (ex.: { tipo: "hero", variante: "overlay" })
  if (variante && variantesSecoes[tipo]?.[variante]) {
    return variantesSecoes[tipo][variante];
  }

  // 1b. Suporte universal à variante "overlay" (Item 6) para qualquer Hero
  if (variante === "overlay" && (tipo.startsWith("hero") || tipo === "inicio")) {
    return HeroOverlay;
  }

  // 2. Tipo direto em seções registradas (ex.: "sobre", "hero-pb", "motivos-grid", etc.)
  if (secoesCompartilhadas[tipo]) {
    return secoesCompartilhadas[tipo];
  }

  // 3. Tipo composto direto (ex.: "hero-overlay")
  if (tipo.includes("-")) {
    const [secaoPai, varNome] = tipo.split("-");
    if (variantesSecoes[secaoPai]?.[varNome]) {
      return variantesSecoes[secaoPai][varNome];
    }
  }

  // 4. Variante padrão da seção
  if (variantesSecoes[tipo]?.padrao) {
    return variantesSecoes[tipo].padrao;
  }

  return null;
}
