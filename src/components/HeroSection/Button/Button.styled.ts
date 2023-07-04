import { styled } from "styled-components"

export const Button = styled.button`
    background-color: ${({ theme }) => theme.color.primary};
    padding: .5rem 2rem;
    border-radius: 3rem;
    color: ${({ theme }) => theme.color.white};
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
`

export const RightContainter = styled.div``

export const ParagraphTop = styled.p`
    font-weight: ${({ theme }) => theme.weight.regular};
    font-size: 1rem;
`

export const ParagraphBottom = styled.p`
    font-weight: ${({ theme }) => theme.weight.regular};
    font-size: 1.8rem;
`