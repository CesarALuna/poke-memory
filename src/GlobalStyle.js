import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    :root {
        --maxWidth: 1280px;
        --white: #f9fbff;
        --lightGrey: #eee;
        --medGrey: #353535;
        --darkGrey: #1c1c1c;
        --fontSuperBig: 2.5rem;
        --fontBig: 1.5rem;
        --fontMed: 1.2rem;
        --fontSmall: 1rem;
    }
    * {
        box-sizing: border-box;
        font-family: 'VT323', monospace;
    }
    body {
        margin: 0; 
        padding: 0;
        box-sizing: border-box;
        background-color: #3c5aa6;
    }

    h1 {2
        font-weight: 600;
        color: var(--white);
    }
    h3 {
        font-size: 1.1rem;
        font-weight: 600;
    }
    p {
        font-size: 1rem;
        color: var(--white);
    }
}
`
