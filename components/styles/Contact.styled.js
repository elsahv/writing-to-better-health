import styled from 'styled-components'



export const Grid = styled.div`
padding-top: 20px;
border-radius: 45px;
width: 1300px;
height: 600px;
display: grid;
grid-template-columns: repeat(2, 1fr);
grid-template-areas: 
'a b';

@media only screen and (max-width: 1024px) {
  display: grid;
grid-template-columns: 1fr;
grid-template-areas: 
'a'
'b';
}
`


export const BusinessCardSection = styled.div`
grid-area: a;
display: flex;
justify-content: center;
align-items: center;
`

export const CTA = styled.div`
grid-area: b;
height: 650px;
background: orange;
border: solid 2px black;

`


