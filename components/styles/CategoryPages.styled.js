import styled from 'styled-components'

export const Wrapper = styled.div`
// background: teal;
margin-top: 35px;
width: 100%;  
display: flex;
justify-content: center;
`

export const Grid = styled.div`
display: grid;
grid-template-columns: 200px 1fr;
grid-template-areas: 
'a b';

@media only screen and (max-width: 531px) {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr;
  grid-template-areas: 
  'a' 
  'b';
}
`
export const NavbarWrapper = styled.div`
grid-area: a;
// background: coral;
display: flex;
justify-content: center;
padding-top: 100px; 
`
export const ImageWrapper = styled.div`
display: flex;
justify-content: center;
 .img {
  border: solid 2px black;
 }
`

export const PostsContainer = styled.div`
// background: teal;
 display: grid;
 grid-template-columns: repeat(3, 400px);
 grid-area: b;
 cursor: pointer;
`

export const PostTitle = styled.h3`
text-align: center;
padding: 5px 10px;
color: aquamarine;
background: teal;
border-top: solid 2px black;
border-left: solid 2px black;
border-right: solid 2px black;
margin: 30px 25px 0 25px;
text-transform: capitalize; 
font-size: 22px;
`