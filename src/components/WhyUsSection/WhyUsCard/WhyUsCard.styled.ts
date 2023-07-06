import { styled } from "styled-components"

export const CardWrapper = styled.div`
    display: flex;
    max-width: 54rem;
    align-items: self-start;
`

export const Description = styled.p`
    font-weight: ${({ theme }) => theme.weight.regular};
    color: ${({ theme }) => theme.color.textGrey};
    font-size: 1.5rem;
    width: 100%;

    ${({ theme }) => theme.MQ.tablet} {
        width: 50rem;
    }
`

export const IconWrapper = styled.div`
    width: 100%;
    max-width: 3rem;
    margin-right: 1.5rem;
`