import { styled } from "styled-components"

export const CardWrapper = styled.div`
    background-color: ${({ theme }) => theme.color.white};
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
    overflow: hidden;
    text-align: center;
    max-width: 73rem;
    padding: 4rem 4rem 3rem 4rem;
    border-radius: 2rem;
    margin-top: 7rem;
    height: 57rem;

    ${({ theme }) => theme.MQ.tablet} {
        padding: 10.5rem 8rem 5rem 8rem;
        height: 40rem;
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

export const IdentityWrapper = styled.div`
    display: flex;
    flex-direction: column;
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