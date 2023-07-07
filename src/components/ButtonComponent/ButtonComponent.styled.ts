import { styled } from "styled-components"

export const Button = styled.button`

    &.primary {
        background-color: ${({ theme }) => theme.color.primary};
        padding: .5rem 2rem;
        border-radius: 3rem;
        color: ${({ theme }) => theme.color.white};
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 1rem;
    }

    &.secondary {
        padding: 2rem 4rem;
        background-color: ${({ theme }) => theme.color.white};
        border-radius: .5rem;
        color: ${({ theme }) => theme.color.primary};
        font-weight: ${({ theme }) => theme.weight.medium};
        line-height: 1.8rem;
        font-size: 1.8rem;
        margin-top: 1.5rem;

        ${({ theme }) => theme.MQ.laptop} {
            margin-left: 5rem;
            margin-top: unset;
        }
    }
`