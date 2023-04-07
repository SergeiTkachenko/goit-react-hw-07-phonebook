import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';

export const GlobalStyle = createGlobalStyle`
 body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}

#root {
  background: repeating-linear-gradient(45deg, black 1% 3%, #280569 5% 1%);
  min-height: 100vh;
  padding: 50px;
}

ul {
    list-style: none;
    margin: 0;
    padding: 0;
}

img {
    display: block;
}

p {
    padding: 0;
    margin: 0;
}

h1, h2, h3 {
  margin: 5px;
}
`;
