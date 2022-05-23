

import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100&display=swap');
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Poppins', sans-serif;
  }

  body {
    color: hsl(192, 100%, 9%);
    
   
  }

  p {
    opacity: 0.6;
    line-height: 1.5;
  }


  
`




export default GlobalStyles
