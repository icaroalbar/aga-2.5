import styled from "styled-components";

export const NavStyle = styled.nav`
    display: flex;
    gap: 0.5rem;
    width: 100%;
    height: 150px;
    background-color: var(--primary);
    border-bottom: solid 5px var(--secondary);
`;

export const NavInfo = styled.div`
    width: 70%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .logo {
        display: flex;
        margin-top: 4rem;
        z-index: 1000;
    }

    @media (max-width: 768px) {
        .hidden {
            display: none;
        }
    }

    ul {
        display: flex;
        justify-content: space-between;

        @media (max-width: 768px) {
            display: block;
            position: absolute;
            width: 100%;
            right: 0;
            top: 5.5rem;
            background-color: var(--primary);
            z-index: 1000;
            padding: .5rem;
            height: calc(100vh - 120px);
        }

        li {
            text-transform: uppercase;
            list-style: none;
            font-weight: bold;

            a {
                color: var(--gray);
                margin: 0 0.5rem;
                cursor: pointer;
                display: block;
                
                &:hover {
                    color: var(--secondary) 
                }
                
                @media (max-width: 768px) {
                    padding: 1.3rem 2rem;
                    border-bottom: solid 1px rgba(250,250,250,0.5);

                    &:hover {
                        background-color: var(--secondary);
                        color: var(--primary);
                        transition: .3s;
                    }
                }
                
            }
        }
        
    }
`;

export const Toogle = styled.button`
    color: var(--secondary);
    font-size: 1.5rem;
    font-weight: 800;
    display: none;
    background-color: transparent;
    border: none;

    @media (max-width: 768px) {
        display: flex;

        &:active {
            height: calc(100vh - 120px);
            visibility: visible;
        }
    }
`;