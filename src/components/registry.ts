// Modelo 1 (Silvia Volpatto / Editorial Padrão)
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

// Seções compartilhadas e tipos diretos
export const secoesCompartilhadas: Record<string, any> = {
  // Modelo 1 (Silvia Volpatto)
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
};

// Catálogo de variantes por seção base
export const variantesSecoes: Record<string, Record<string, any>> = {
  hero: {
    padrao: Hero,
    editorial: HeroEditorial,
    overlay: HeroOverlay,
    pb: HeroPb,
    ludico: HeroLudico,
    organico: HeroOrganico,
    estruturado: HeroEstruturado,
    vibrante: HeroVibrante,
  },
  sobre: {
    padrao: Sobre,
    editorial: SobreEditorial,
    organico: ApresentacaoOrganica,
    estruturado: SobreEstruturado,
    vibrante: SobreVibrante,
  },
  servicos: {
    padrao: Servicos,
    editorial: ServicosEditorial,
    pb: ServicosPb,
    organico: ServicosOrganicos,
    "como-ajudar": ComoAjudarVibrante,
  },
  demandas: {
    editorial: DemandasEditorial,
    pb: ParaQuemPb,
    ludico: PorQueTerapia,
    estruturado: MotivosGrid,
    vibrante: QuandoBuscarVibrante,
  },
  modalidades: {
    editorial: ModalidadesEditorial,
    estruturado: AgendamentoInfo,
    processo: ProcessoVibrante,
    passos: PassosPb,
  },
  faq: {
    padrao: Faq,
    editorial: FaqEditorial,
    pb: FaqPb,
    ludico: FaqLudico,
    organico: FaqOrganico,
    estruturado: FaqEstruturado,
    vibrante: FaqVibrante,
  },
  contato: {
    padrao: Contato,
    editorial: ContatoEditorial,
    pb: ContatoPb,
    ludico: ContatoLudico,
    organico: RodapeOrganico,
    estruturado: ContatoEstruturado,
    vibrante: ContatoVibrante,
  },
  formacao: {
    padrao: Formacao,
  },
};

// Variantes registradas por coleção visual
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
 */
export function obterComponenteSecao(colecao: string, tipo: string, variante?: string): any {
  // 1. Variante explícita no item (ex.: { tipo: "hero", variante: "overlay" })
  if (variante && variantesSecoes[tipo]?.[variante]) {
    return variantesSecoes[tipo][variante];
  }

  // 1b. Suporte universal à variante "overlay" (Item 6) para qualquer Hero
  if (variante === "overlay" && (tipo.startsWith("hero") || tipo === "inicio")) {
    return HeroOverlay;
  }

  // 2. Tipo direto em seções registradas (ex.: "hero-pb", "motivos-grid", etc.)
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

  // 4. Especialização da coleção ativa
  if (variantesColecoes[colecao]?.[tipo]) {
    return variantesColecoes[colecao][tipo];
  }

  // 5. Se a seção tiver variante com nome da coleção
  if (variantesSecoes[tipo]?.[colecao]) {
    return variantesSecoes[tipo][colecao];
  }

  // 6. Variante padrão da seção
  if (variantesSecoes[tipo]?.padrao) {
    return variantesSecoes[tipo].padrao;
  }

  return null;
}
