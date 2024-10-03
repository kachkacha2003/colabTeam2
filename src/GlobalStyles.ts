import { createGlobalStyle } from "styled-components";
export const Global = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Manrope:wght@200..800&display=swap');
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}
html{
    font-size: 52.5%;
}
body{
    font-family: "Manrope", sans-serif;
}
`;
