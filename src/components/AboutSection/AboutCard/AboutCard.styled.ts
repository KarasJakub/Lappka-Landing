import { styled } from "styled-components"
import { ReactComponent as ApproveIcon } from "assets/AboutIcons/ApproveIcon.svg";

export const CardWrapper = styled.div`
    padding: 3rem;
    box-shadow: 0px 0px 16px -10px rgba(119, 131, 143, 1);
    max-width: 58rem;
    border-radius: 1rem;
    display: flex;
`

export const TextWrapper = styled.div`
`

export const IconImage = styled(ApproveIcon)`
    width: 100%;
    max-width: 2rem;
    margin-right: 1.7rem;
    transform: translateY(70%);
`

export const Title = styled.h3`
    font-weight: ${({ theme }) => theme.weight.extraBold};
    font-size: 1.6rem;
    letter-spacing: 1px;
    line-height: 3rem;
    padding-bottom: 1rem;

    ${({ theme }) => theme.MQ.tablet} {
        font-size: 2rem;
        letter-spacing: 1px;
        line-height: 4.8rem;
        padding-bottom: unset;
    }
`

export const Paragraph = styled.p`
    font-weight: ${({ theme }) => theme.weight.regular};
    color: ${({ theme }) => theme.color.textGrey};
    font-size: 1.5rem;
`