import { styled } from "styled-components"

export const FooterWrapper = styled.footer`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    max-width: 150rem;
    margin: 0 auto;
    padding: 5rem 0;

    ${({ theme }) => theme.MQ.tablet} {
        flex-direction: row;
        justify-content: space-evenly;
    }
`

export const Paragraph = styled.p`
    color: #616161;
    font-family: "Ubuntu", sans-serif;
    font-size: 1.6rem;
    order: 1;

    ${({ theme }) => theme.MQ.tablet} {
        order: unset;
    }
`

export const RightSectionWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
`