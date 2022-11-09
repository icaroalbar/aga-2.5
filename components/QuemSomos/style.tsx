import styled from "styled-components";

export const SectionStyle = styled.section`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 0 2rem;
    width: 100%;
    justify-content: center;
    padding: 4rem;
    background-image: url(quemSomosF.png);
    background-size: cover;
    background-position: right;
`;

export const FlexStyle = styled.div`
    display: flex;
    flex-wrap: wrap;
    background-color: transparent;
    font-size: 1rem;
    font-weight: 200;
    line-height: 1.4;
    text-align: justify;
`;

interface Props {
    width?: string;
    color?: string;
}

export const FlexStyleOne = styled(FlexStyle)`
    width: 40%;
    color: ${(props) => props.color || "var(--primary)"};

    .hidden {
        display: flex;
    }

    p {
        font-size: 1.5rem;
        margin-top: 1rem;
    }

    h1 {
        color: var(--secondary);
        text-transform: uppercase;
        font-family: serif;
        font-size: 2rem;
    }

    @media (max-width: 1500px) {
        width: 60%;
        p {
            font-size: 1.2rem;
        }
    }

    @media (max-width: 992px) {
        width: 50%;

        .hidden {
            display: none;
        }
    }

    @media (max-width: 768px) {
        width: 100%;
    }

    @media (max-width: 576px) {
        p {
            font-size: 0.9rem;
        }
    }
`;

export const FlexStyleTwo = styled(FlexStyle)`
    width: 40%;

    @media (max-width: 1500px) {
        width: 30%;
    }

    @media (max-width: 992px) {
        width: 40%;
    }

    @media (max-width: 768px) {
        width: 100%;
    }
`;

export const FlexStyleThree = styled(FlexStyle)`
    width: 95%;
    color: ${(props) => props.color || "var(--primary)"};
    display: none;

    p {
        font-size: 1.5rem;
        margin-top: 1rem;
    }

    @media (max-width: 1500px) {
        p {
            font-size: 1.2rem;
        }
    }

    @media (max-width: 992px) {
        display: flex;
    }

    @media (max-width: 768px) {
        width: 100%;
    }   
    
    @media (max-width: 576px) {
        p {
            font-size: 0.9rem;
        }
    }
`;