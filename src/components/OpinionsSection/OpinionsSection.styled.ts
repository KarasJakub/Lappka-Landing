import { styled } from "styled-components";

export const OpinionsWrapper = styled.section`
    width: 100%;
    background-color: #F7FAFD;
    padding: 4rem;
    border-radius: 100% 0% 51% 49% / 0% 90% 70% 100% ;
    overflow-x: hidden;
    position: relative;
    margin: 0 auto;

    ${({ theme }) => theme.MQ.tablet} {
        padding: 7rem;
    }

    ${({ theme }) => theme.MQ.desktop} {
        padding: 7rem;
    }
`
export const OpinionsInnerWrapper = styled.div`
    position: relative;
    max-width: 170rem;
    margin: 0 auto;
`

export const Title = styled.h6`
    font-weight: ${({ theme }) => theme.weight.bold};
    font-size: 4rem;
    letter-spacing: 2px;
    line-height: 4.8rem;
    text-align: center;
    margin-bottom: 4rem;
`

export const FirstWomenImage = styled.img`
    position: absolute;
    top: 20%;
    left: 7%;
    display: none;

    ${({ theme }) => theme.MQ.largeLaptop} {
        display: block;
    }

    ${({ theme }) => theme.MQ.desktop} {
        left: 17%;
    }
`
export const SecondWomenImage = styled.img`
    position: absolute;
    top: 20%;
    right: 8%;
    display: none;

    ${({ theme }) => theme.MQ.largeLaptop} {
        display: block;
    }

    ${({ theme }) => theme.MQ.desktop} {
        right: 18%;
    }
`

export const FirstManImage = styled.img`
    position: absolute;
    top: 60%;
    left: 7%;
    display: none;

    ${({ theme }) => theme.MQ.largeLaptop} {
        display: block;
    }

    ${({ theme }) => theme.MQ.desktop} {
        left: 16%;
    }
`

export const SecondManImage = styled.img`
    position: absolute;
    top: 70%;
    right: 7%;
    display: none;

    ${({ theme }) => theme.MQ.largeLaptop} {
        display: block;
    }

    ${({ theme }) => theme.MQ.desktop} {
        right: 16%;
    }
`
