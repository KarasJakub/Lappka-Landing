import { styled } from "styled-components"

export const HeroWrapper = styled.header`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 0 auto;

    ${({ theme }) => theme.MQ.tablet} {
        flex-direction: row;
    }

    ${({ theme }) => theme.MQ.largeLaptop} {
        gap: 3rem;
    }
`

export const HeroHeading = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-self: center;
    padding: 3rem;

    ${({ theme }) => theme.MQ.tablet} {
        width: 50%;
    }

    ${({ theme }) => theme.MQ.largeLaptop} {
        max-width: 67rem;
        margin-left: 7%;
    }

    ${({ theme }) => theme.MQ.desktop} {
        max-width: 70rem;
        margin-left: 20rem;
    }
`

export const TextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`

export const HeadingCompanyImage = styled.img`
    max-width: 30rem;
`

export const Title = styled.h1`
    font-weight: ${({ theme }) => theme.weight.bold};
    font-size: 4rem;
    letter-spacing: 2px;
    line-height: 4.8rem;
    font-weight: ${({theme}) => theme.weight.bold};

& strong {
    color: ${({ theme }) => theme.color.primary};
}
`

export const Paragraph = styled.p`
    font-weight: ${({ theme }) => theme.weight.regular};
    color: ${({ theme }) => theme.color.textGrey};
    font-size: 2rem;
    margin: 2rem 0 4rem 0;
    font-weight: ${({theme}) => theme.weight.regular};
`

export const ButtonsWrapper = styled.div`
    display: flex;
    gap: 2rem;
`
export const ImagesSection = styled.div`
    display: flex;
    justify-content: center;
    margin: 4rem 0;


    ${({ theme }) => theme.MQ.laptop} {
        margin: unset;
        position: relative;
    }
`

export const DesktopDashbordImage = styled.img`
    position: absolute;
    left: -20%;
    display: none;

    ${({ theme }) => theme.MQ.largeLaptop} {
        display: block;
        left: -10%;
    }

    ${({ theme }) => theme.MQ.desktop} {
        left: -15%;
    }
`

export const DesktopAdoptImage = styled.img`
    position: absolute;
    display: none;

    ${({ theme }) => theme.MQ.laptop} {
        display: block;
    }

    ${({ theme }) => theme.MQ.largeLaptop} {
        right: 15%;
    }

    ${({ theme }) => theme.MQ.desktop} {
        right: 20%;
    }
`

export const DesktopDogImage = styled.img`
    position: absolute;
    bottom: -20%;
    display: none;

    ${({ theme }) => theme.MQ.laptop} {
        display: block;
    }

    ${({ theme }) => theme.MQ.largeLaptop} {
        right: 15%;
    }

    ${({ theme }) => theme.MQ.desktop} {
        bottom: -15%;
        right: 20%;
    }
`

export const MobileImagesSection = styled.div`
    display: flex;
    justify-content: center;

    ${({ theme }) => theme.MQ.tablet} {
        max-width: 40rem;
    }

    ${({ theme }) => theme.MQ.laptop} {
        display: none;
    }
`

export const MobileFirstImage = styled.img`
    width: 50%;
    transform: rotate(-15deg) translateX(35%);
    z-index: 2;
    max-width: 35rem;
`

export const MobileSecondImage = styled.img`
    width: 50%;
    transform: rotate(15deg) translateX(-35%);
    max-width: 35rem;
`

export const ImageBackground = styled.img`
    width: 100%;
    height: 100%;
    display: none;

    ${({ theme }) => theme.MQ.laptop} {
        display: block;
    }
`