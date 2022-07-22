import styled from 'styled-components'



export const Wrapper = styled.div`
// background: teal;
margin-top: 35px;
width: 100%;  
display: flex;
justify-content: center;
`

export const Grid = styled.div`
// background: maroon;
display: grid;
grid-template-columns: 250px 1fr;
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
padding-top: 100px; 
  // border-right: solid 2px black;
`


export const ImageWrapper = styled.div`
  position: relative;
 .img {
  border: solid 2px black;
  width: 280px;
  height: 270px;
 }
`

export const PostsContainer = styled.div`
// background: teal;
 display: grid;
 grid-template-columns: repeat(4, 300px);
 grid-area: b;
 cursor: pointer;
//  padding-left: 40px;
`

export const PostTitle = styled.h3`
// text-align: center;
margin-top: 25px;
margin-bottom: 5px;
padding-left: 5px;
text-transform: capitalize;
`