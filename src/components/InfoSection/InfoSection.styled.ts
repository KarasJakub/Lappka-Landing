import { styled } from "styled-components"

export const InfoWrapper = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 120rem;
    margin: 0 auto;
    padding: 2.5rem;

    ${({ theme }) => theme.MQ.laptop} {
        gap: 2rem;
        flex-direction: row;
        padding: 10rem 0;
    }
`

export const TextSection = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;

    ${({ theme }) => theme.MQ.laptop} {
        width: 45%;
    }

    ${({ theme }) => theme.MQ.largeLaptop} {
        margin-right: 10rem;
    }
`

export const Image = styled.img`
    margin: 3rem 0;

    ${({ theme }) => theme.MQ.tablet} {
        max-width: 50%;
        align-self: center;
    }

    ${({ theme }) => theme.MQ.laptop} {
        margin: unset;
    }
`

export const Title = styled.h5`
    font-weight: ${({ theme }) => theme.weight.bold};
    font-size: 4rem;
    letter-spacing: 2px;
    line-height: 4.8rem;
    text-align: center;

    ${({ theme }) => theme.MQ.tablet} {
        text-align: unset;
    }

    ${({ theme }) => theme.MQ.largeLaptop} {
        padding-bottom: 2rem;
    }
`

export const Paragraph = styled.p`
    font-weight: ${({ theme }) => theme.weight.regular};
    color: ${({ theme }) => theme.color.textGrey};
    font-size: 1.7rem;
`

export const SubParagraph = styled.p`
    font-weight: ${({ theme }) => theme.weight.regular};
    color: ${({ theme }) => theme.color.textGrey};
    font-size: 1.5rem;
    font-weight: ${({ theme }) => theme.weight.bold};
`