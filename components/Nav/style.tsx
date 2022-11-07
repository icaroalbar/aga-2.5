import styled from "styled-components";

export const NavStyle = styled.nav`
    width: 100%;
    height: 150px;
    background-color: var(--primary);
    border-bottom: solid 5px var(--secondary);
    display: flex;
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
    }

    ul {
        display: flex;
        justify-content: space-between;

        li {
            text-transform: uppercase;
            list-style: none;
            font-weight: bold;

            a {
                color: var(--gray);
                margin: 0 10px;
                cursor: pointer;
                
                &:hover {
                    color: var(--secondary)
                }
            }
        }
    }
`;