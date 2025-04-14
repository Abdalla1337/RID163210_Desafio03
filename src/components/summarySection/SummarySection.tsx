import { SummaryButton, SummaryText, SummaryTitle } from "./styles";
import { CenterContentOnScreen } from "../CenterContentOnScreen";

const SummarySection = () => {
  return (
    <CenterContentOnScreen>
      <SummaryTitle>
        Olá, eu sou Marcelo <br /> Desenvolvedor Full-stack
      </SummaryTitle>
      <SummaryText>
        Com mais de um ano de experiência na area de TI, adquiri <br /> diversos conhecimentos como Desenvolvedor Web.
        Criando projetos usando HTML5,CSS,JAVASCRIPT,TYPESCRIPT,NODEJS,REACT <br /> e algumas outras ferramentas do ramo.
      </SummaryText>
      <SummaryButton>Download resumo</SummaryButton>
    </CenterContentOnScreen>
  );
};

export default SummarySection;
