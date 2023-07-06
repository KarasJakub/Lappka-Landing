import { styled } from "styled-components"
import BackSquare from "assets/Opinions/Photos/BackSquare.png";

export const CardRootWrapper = styled.div`
/* z-index: 9;
    &:before {
        content: url(${BackSquare});
        overflow: visible;
        position: absolute;
        top: 20%;
        display: block;
        width: 100%;
        z-index: -3;
    } */
`


export const CardWrapper = styled.div`
    background-color: ${({ theme }) => theme.color.white};
    max-width: 73rem;
    padding: 7rem 4rem 3rem 4rem;
    text-align: center;
    position: relative;
    overflow: hidden;
    border-radius: 2rem;
    margin-top: 7rem;



    ${({ theme }) => theme.MQ.tablet} {
        padding: 10.5rem 8rem 5rem 8rem;
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
    font-size: 1.7rem;
    padding-bottom: 2rem;
    z-index: 9;
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
