import { styled } from "styled-components"
import BackSquare from "assets/Opinions/Photos/BackSquare.png";

export const CardRootWrapper = styled.div`
    position: relative;
`

export const CardWrapper = styled.div`
    background-color: ${({ theme }) => theme.color.white};
    max-width: 73rem;
    padding: 7rem 4rem 3rem 4rem;
    text-align: center;
    position: relative;
    overflow: hidden;
    border-radius: 2rem;

    /* &:after {
        content: url(${BackSquare});
        overflow: visible;
        position: absolute;
        top: 20%;
        display: block;
        width: 100%;
    } */

    ${({ theme }) => theme.MQ.tablet} {
        padding: 7rem 7rem 5rem 7rem;
    }
`

export const BackgroundImage = styled.img`
    position: absolute;
    left: 20%;
    top: 5%;

    ${({ theme }) => theme.MQ.tablet} {
        left: 35%;
    }
`

export const Description = styled.p`
    font-weight: ${({ theme }) => theme.weight.regular};
    color: ${({ theme }) => theme.color.textGrey};
    font-size: 1.5rem;
    padding-bottom: 2rem;
`

export const Name = styled.p`
    font-weight: ${({ theme }) => theme.weight.bold};
    color: #616161;
    font-size: 1.8rem;
`
export const AgeParagraph = styled.p`
    font-weight: ${({ theme }) => theme.weight.regular};
    color: ${({ theme }) => theme.color.textGrey};
    font-size: 1.5rem;
`
