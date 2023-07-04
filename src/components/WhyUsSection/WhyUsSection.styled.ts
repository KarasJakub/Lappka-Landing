import { styled } from "styled-components"

export const WhyUsWrapper = styled.section`
    width: 100%;
    background-color: #F7FAFD;
    padding: 5rem;
`

export const Title = styled.h1`
    font-weight: ${({ theme }) => theme.weight.bold};
    font-size: 4rem;
    letter-spacing: 2px;
    line-height: 4.8rem;
    text-align: center;

& strong {
    color: ${({ theme }) => theme.color.primary};
}
`

export const ContentWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 4rem;
    padding: 2.5rem;
    max-width: 170rem;
    margin: 0 auto;

    ${({ theme }) => theme.MQ.tablet} {
        padding: 5rem;
    }
`