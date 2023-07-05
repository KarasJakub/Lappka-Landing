import * as S from "./CTA.styled";

const CTA = () => {
  return (
    <S.CTAWrapper>
      <S.Paragraph>
        Chciałbyś włączyć się w naszą społeczność <strong>„Łapkowców”</strong> i
        być na bieżąco z najnowszymi informacjami?
      </S.Paragraph>
      <S.FormSection>
        <S.SmallParagraph>
          Zapraszamy do zapisania się do naszego newslettera!
        </S.SmallParagraph>
        <S.Form>
          <S.InputWrapper>
            <S.Input placeholder="Enter your email" />
            <S.CTAButton>Subscribe Now</S.CTAButton>
          </S.InputWrapper>
        </S.Form>
      </S.FormSection>
    </S.CTAWrapper>
  );
};

export default CTA;
