import { styled } from "styled-components"

export const CTAWrapper = styled.aside`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
    padding: 4rem;
    background-color: ${({ theme }) => theme.color.primary};
    max-width: 115rem;
    max-height: 25rem;
    margin: 0 auto;
    margin-bottom: 4rem;
    border-radius: 2rem;
    width: 90%;

    ${({ theme }) => theme.MQ.laptop} {
        flex-direction: row;
        padding: 7rem;
        transform: translateY(-30%);
    }
`

export const Paragraph = styled.p`
    font-size: 2rem;
    color: ${({ theme }) => theme.color.white};
    font-weight: ${({ theme }) => theme.weight.light};
    text-align: center;
    font-family: 'Ubuntu', sans-serif;

    & strong {
        font-weight: ${({ theme }) => theme.weight.extraBold};
    }

    ${({ theme }) => theme.MQ.laptop} {
        width: 40%;
        text-align: unset;
    }
`

export const FormSection = styled.div`
    display: flex;
    flex-direction: column;
`

export const SmallParagraph = styled.p`
    font-size: 1.8rem;
    color: ${({ theme }) => theme.color.white};
    font-weight: ${({ theme }) => theme.weight.light};
    padding-bottom: 1rem;
    text-align: center;
    font-family: 'Ubuntu', sans-serif;

    & strong {
        font-weight: ${({ theme }) => theme.weight.bold};
    }

    ${({ theme }) => theme.MQ.laptop} {
        text-align: unset;
    }
`

export const Form = styled.form`
    color: white;
`

export const InputWrapper = styled.div`
    background-color: #60c390;
    padding: 1rem 1rem 1rem 2rem;
    border-radius: .5rem;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
    max-width: 52rem;

    ${({ theme }) => theme.MQ.laptop} {
        flex-direction: row;
    }
`

export const Input = styled.input`
    color: rgba(255, 255, 255, .1);
    color: white;
    font-size: 1.6rem;
    text-align: center;

    &::placeholder {
        color: white;
        text-align: center;
        color: rgba(255, 255, 255, .5);

        ${({ theme }) => theme.MQ.laptop} {
            text-align: unset;
       }
    }

    &:focus {
        outline: none;
    }

    ${({ theme }) => theme.MQ.laptop} {
        text-align: unset;
    }
`

export const CTAButton = styled.button`
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
`