import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: sans-serif;
    };

    body{
        background-color: var(--gray)
    }

    button {
        cursor: pointer;
    }

    a {
        text-decoration: none;
    }

    li {
        list-style: none;
    }

    :root {
        --primary: #0F1A2E;
        --secondary: #BE8F41;
        --gray: #e7e7e7;
        --white: #FFF;
    }
`


