import { styled } from "styled-components"

export const CardWrapper = styled.div`
    display: flex;
    max-width: 54rem;
    /* height: 10rem; */
    align-items: self-start;
`

export const Description = styled.p`
    font-weight: ${({ theme }) => theme.weight.regular};
    color: ${({ theme }) => theme.color.textGrey};
    font-size: 1.5rem;
`

export const Image = styled.img`
    max-width: 3.6rem;
    margin-right: 1rem;
`