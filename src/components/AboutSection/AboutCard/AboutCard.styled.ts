import { styled } from "styled-components"

export const CardWrapper = styled.div`
    padding: 2.5rem;
    box-shadow: 0px 0px 16px -10px rgba(119, 131, 143, 1);
    max-width: 58rem;
    border-radius: 1rem;
    display: flex;
`

export const TextWrapper = styled.div`

`

export const IconImage = styled.img`
margin-right: 2rem;
    max-width: 2rem;
    transform: translateY(-30%);
`

export const Title = styled.h3`
    font-weight: ${({ theme }) => theme.weight.extraBold};
    font-size: 1.6rem;
    letter-spacing: 1px;
    line-height: 3rem;
    padding-bottom: 1rem;

    ${({ theme }) => theme.MQ.tablet} {
        font-size: 2rem;
        letter-spacing: 1px;
        line-height: 4.8rem;
        padding-bottom: unset;
    }
`

export const Paragraph = styled.p`
    font-weight: ${({ theme }) => theme.weight.regular};
    color: ${({ theme }) => theme.color.textGrey};
    font-size: 1.5rem;
`