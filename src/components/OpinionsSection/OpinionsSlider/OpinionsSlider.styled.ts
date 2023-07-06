import styled from "styled-components"

export const SliderWrapperOuter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  overflow-x: hidden;
`

export const SliderWrapperInner = styled.div`
  width: 100%;
  max-width: 70rem;

  ${({ theme }) => theme.MQ.laptop} {
    width: 100%;
    overflow-x: hidden;
  }
`

export const ButtonsWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 3rem;
`