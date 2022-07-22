import styled from 'styled-components'



export const Wrapper = styled.div`
// background: teal;
margin-top: 35px;
width: 100%;  
display: flex;
justify-content: center;
`

export const PostsContainer = styled.div`
// background: teal;
 display: grid;
 grid-template-columns: repeat(3, 350px);
 cursor: pointer;
//  grid-gap: 1em;

@media only screen and (max-width: 1024px) {
grid-template-columns: repeat(2, 300px);
}

@media only screen and (max-width: 800px) {
  grid-template-columns: repeat(2, 250px);
  }
`

export const PostTitle = styled.h3`
margin-top: 25px;
margin-bottom: 5px;
padding-left: 5px;
text-transform: capitalize;
`
 

export const ImageWrapper = styled.div`
  position: relative;
 .img {
  border: solid 2px black;
  width: 330px;
  height: 300px;
 }

 @media only screen and (max-width: 1024px) {
  .img {
    width: 290px;
    height: 270px;
   }
}

@media only screen and (max-width: 800px) {
  .img {
    width: 230px;
    height: 190px;
   }
}
`
 