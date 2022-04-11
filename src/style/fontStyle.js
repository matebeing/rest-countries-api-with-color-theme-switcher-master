import { createGlobalStyle } from "styled-components";

const fontStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;600;800&display=swap');

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        font-family: 'Nunito Sans', sans-serif;
        background-color: pink;
    }
`;

export default fontStyle;