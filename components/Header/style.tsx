import styled from "styled-components";

export const HeaderStyle = styled.header`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 0 .5rem;
    width: 100%;
    height: 80vh;
    background-image: url(header.png);
    background-size: cover;
    background-position: right;
    border-bottom: solid 5px var(--secondary);
`;

export const FlexStyle = styled.div`
    display: flex;
    background-color: transparent;
    color: ${(props) => props.color || "#fff"};
    padding: 1rem;
    align-items: center;
    text-transform: uppercase;
    font-size: 3.5rem;
    font-weight: 200;
    line-height: 1.4;
`;

export const FlexStyleTwo = styled(FlexStyle)`
    order: 2;
    animation: textHeader 1.5s ease;
    width: 30%;

    @media (max-width: 992px) {
        width: 90%;
        text-align: center;
        font-size: 2.7em;
    }

    @keyframes textHeader {
        0% {
            transform: translateX(5000px)
        }

        100% {
            transform: translateX(0px)
        }
    }
`;

export const FlexStyleOne = styled(FlexStyle)`
    order: 1;
    animation: imageHeader 1.5s ease;
    width: 30%;

    @media (max-width: 992px) {
        display: none;
    }

    @keyframes imageHeader {
        0% {
            transform: translateY(5000px)
        }

        100% {
            transform: translateY(0px)
        }
    }
`;