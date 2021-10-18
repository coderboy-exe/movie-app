import styled from 'styled-components';

export const Wrapper = styled.div`
    background: linear-gradient(
        to bottom, rgba(0, 0, 0, 0)
        41%, rgba(0, 0, 0, 0.65)
        100%
    ),
    url(${({image}) => image}), var(--darkGrey);
    background-size: 100%, cover;
    background-position: center;
    height: 600px;
    position: relative;
    animation: animateHeroImage .7s;

    @keyframes animateHeroImage {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }

`;

export const Content = styled.div`
    padding: 20px;
    max-width: var(--maxWidth);
    margin: 0 auto;

`;

export const Text = styled.div`
    z-index: 100;
    max-width: 700px;
    position: absolute;
    bottom: 50px;
    margin-right: 20px;
    min-height: 100px;
    color: var(--white);

    h1 {
        font-size: var(--fontVeryLarge);

        @media screen and (max-width: 720px) {
            font-size: var(--fontLarge)
        }
    }

    p {
        font-size: var(--fontMid);

        @media screen and (max-width: 720px) {
            font-size: var(--fontSmall);
        }
    }

    @media screen and (max-width: 720px) {
        max-width: 100%
    }

`;

