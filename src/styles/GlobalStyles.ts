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
        background-color: ${(props) => props.theme.colors.black};
        & > svg  {
            position: fixed;
            z-index: 1000;
            top: 20px;
            left: 50%;
            transform: translate(-50%, 0);
            & > path {
                fill: #fff6f6;
            }
        }
        @media (max-width: 768px ) {
            & > svg {
                width: 120px;
            }
        }
        @media (min-width: 769px) {
            & > svg {
                width: 181px;
            }
        }
    }

    h1,
    h2,
    h3 {
        font-family: 'Obviously', Helvetica, sans-serif;
    }
`;
