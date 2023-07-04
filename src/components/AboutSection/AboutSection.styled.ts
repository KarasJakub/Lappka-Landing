import { styled } from "styled-components";

export const AboutWrapper = styled.section`
    width: 100%;
    margin: 0 auto;
    margin-top: 15rem;
    max-width: 170rem;
`

export const Title = styled.h1`
    font-weight: ${({ theme }) => theme.weight.bold};
    font-size: 4rem;
    letter-spacing: 2px;
    line-height: 4.8rem;
    text-align: center;
    /* margin-bottom: 5rem; */
`

export const ContentWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 2.5rem;
    padding: 2.5rem;

    ${({ theme }) => theme.MQ.tablet} {
        padding: 5rem;
    }
`