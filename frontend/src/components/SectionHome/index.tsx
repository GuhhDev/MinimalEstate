import * as S from "./styles"

export default function SectionHome() {

  return (
    <S.HomeSection>
      <S.ContentSection>
        <S.Title>Descubra Seu Lar Perfeito</S.Title>
        <S.Subtitle>
          Na Imobiliária Sonho Real, transformamos suas aspirações em endereços. Explore nossa coleção exclusiva de
          propriedades e encontre o lugar ideal para chamar de seu.
        </S.Subtitle>
        <S.CTAButton onClick={() => console.log("Botão clicado!")}>Ver Imóveis Disponíveis</S.CTAButton>
      </S.ContentSection>
    </S.HomeSection>
  )
}
