import styled from 'styled-components'



//STYLES

export const Wrapper = styled.div`
display: flex;
justify-content: center;
padding: 25px;
@media only screen and (max-width: 1024px) {
  padding-left: 255px;
}
`


export const Grid = styled.div`
padding-top: 20px;
display: grid;
grid-template-columns: repeat(2, 1fr);
grid-template-rows: repeat(2, 1fr);
grid-template-areas: 
'a b'
'c d';
grid-gap: 1em;
@media only screen and (max-width: 1024px) {
display: grid;
grid-template-columns: 1fr;
grid-template-areas: 
'a'
'b'
'c'
'd'
;
}
`
export const Title = styled.h2`
 
@media only screen and (max-width: 1024px) {
}
`

export const About = styled.div`
grid-area: a;
background: teal;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
padding: 10px;
height: 450px;
width: 650px;
`

export const SquareB = styled.div`
grid-area: b;
background-image: url('/images/plants.jpg');
`
export const SquareC = styled.div`
grid-area: c;
background-image: url('/images/plants.jpg');
`
export const Email = styled.div`
grid-area: d;
background: maroon;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
`


//END STYLES

