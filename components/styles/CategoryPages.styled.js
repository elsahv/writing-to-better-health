import styled from 'styled-components'


export const BlogTitle = styled.h2`
display: flex;
justify-content: center;
font-size: 30px;
margin-top: 90px;
margin-bottom: 5px;
padding: 10px;
text-decoration: underline;
`
 



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
 grid-template-columns: repeat(3, 1fr);
 cursor: pointer;
 grid-gap: 1em;

@media only screen and (max-width: 1024px) {
grid-template-columns: repeat(2, 1fr);
}

@media only screen and (max-width: 810px) {
  grid-template-columns: repeat(2, 1fr);
  }

  @media only screen and (max-width: 600px) {
    grid-template-columns: repeat(1, 1fr);
    }
`

export const PostTitle = styled.h3`
text-align: center;
text-transform: capitalize;
background: teal;
border-top: solid 2px black;
border-left: solid 2px black;
border-right: solid 2px black;
margin-top: 15px;
padding: 10px;
color: aquamarine;

@media only screen and (max-width: 1024px) {
font-size: 15px;
}
`
 

export const ImageWrapper = styled.div`
  position: relative;
 .img {
  border: solid 2px black;
  width: 350px;
  height: 270px;
 }

 @media only screen and (max-width: 1024px) {
  .img {
    width: 310px;
    height: 270px;
   }
}

@media only screen and (max-width: 834px) {
  .img {
    width: 270px;
    height: 250px;
   }
}

@media only screen and (max-width: 768px) {
  .img {
    width: 250px;
    height: 230px;
   }
}

@media only screen and (max-width: 600px) {
  .img {
    width: 320px;
    height: 300px;
   }
}
`
 