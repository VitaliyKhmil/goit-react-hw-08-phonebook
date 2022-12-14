import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}
    body {
        margin: 0;
        font-family: Georgia, 'Times New Roman', Times, serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;     
  letter-spacing: -0.2px;
  background-color: rgb(21, 188, 194);
    }
    ul {
        padding: 0;
        margin: 0;
        list-style: none;
    }
    p,
    li,
    ul,
    ol{
  padding: 0;
  margin: 0;
}
    h1,
    h2
    {
        padding: 0;
        margin: 0;
        font-size: medium;
         text-align: center;
         color: gray;
    }
 
li{
  display: flex;
}
img{
background-color: #31f589;
}
`;
