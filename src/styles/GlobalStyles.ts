import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    @font-face {
        font-family: 'Obviously';
        src: url('../fonts/Obviously-Regular.otf') format('opentype');
    }

    @font-face {
        font-family: 'ObviouslyNarrow';
        src: url('../fonts/ObviouslyNarrow-Regular.otf') format('opentype');
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    #root {
        width: 100vw;
        height: 100vh;
        overflow-x: hidden;
        font-family: 'Rubik', sans-serif;
        font-size: 15px;
        position: relative;
    }

    h1,
    h2,
    h3 {
        font-family: Helvetica, sans-serif;
    }
`;
