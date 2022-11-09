import styled from "styled-components";

export const PolicyStyle = styled.div`
    
    .concordo {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        gap: 0 .5rem;
        align-items: center;
        width: 100%;
        position: fixed;
        bottom: 2.5rem;
        background-color: var(--white);
        z-index: 1000;
        border-top: solid 6px var(--primary);
        opacity: 0;
        transform: translateY(1rem);
        animation: slideUp 0.5s forwards;
        animation-delay: 2.5s;
        color: var(--primary);
        padding: 1.3rem;
        filter: drop-shadow(0 4px 3px rgb(0 0 0 / 0.07)) drop-shadow(0 2px 2px rgb(0 0 0 / 0.06));

    }
    .hidden {
        display: none;
    }

    @media (max-width: 992px) {
        gap: 1rem .5rem;
        justify-content: center;
    }

    @keyframes slideUp {
        to {
            transform: initial;
            opacity: initial;
        }
}
`;

interface Props {
    width?: string;
}

export const FlexPolicy = styled.div`
    display: flex;
    width: ${(props: Props) => props.width};
    text-align: justify;
    line-height: 1.4;

    a {
        font-weight: 800;
        color: var(--primary);

        &:hover {
            border-bottom: solid 2px;
        }

        &:visited {
            color: var(--primary)
        }
    }

    @media (max-width: 992px) {
        width: 100%;
    }
`;

export const Button = styled.button`
    border: none;
    padding: .7rem 1.3rem;
    background-color: var(--primary);
    color: var(--white);
    font-weight: 800;
    text-transform: uppercase;
    border-radius: .3rem;
    transition: .4s;
    margin: 10px auto;

    &:hover {
        background-color: var(--primaryHover)
    }
`;