import { styled } from "styled-components";

export const AboutWrapper = styled.section`
    width: 100%;
    margin: 0 auto;
    margin-top: 4rem;
    max-width: 170rem;

    ${({ theme }) => theme.MQ.laptop} {
        margin-top: 15rem;
    }
`

export const Title = styled.h2`
    font-weight: ${({ theme }) => theme.weight.bold};
    font-size: 4rem;
    letter-spacing: 2px;
    line-height: 4.8rem;
    font-weight: ${({theme}) => theme.weight.bold};
    text-align: center;
`

export const ContentWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 3rem;
    padding: 2.5rem;
    margin: 6rem 0 10rem 0;
`