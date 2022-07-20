import styled from 'styled-components'
 
//STYLES
export const BlogWrapper = styled.div`
 display: flex;
 justify-content: center;
 margin: 40px 150px;
`

 




export const BlogTitle = styled.h2`
display: flex;
justify-content: center;
background: coral;
margin-top: 450px;
font-size: 30px;
padding: 10px;
`

export const PostsWrapper = styled.div`
// background: green;
display: grid;
grid-template-columns: 1fr 1fr;
grid-gap: 1em;  
`

export const SinglePost = styled.div`
background: teal;
border: solid 2px black;
display: flex;
margin-top: 20px;
 
`


export const ImageWrapper = styled.div`
.blog-img {
  border: solid 2px black;
}
`


export const Content = styled.div`
 h2 {
  text-align: center;
  padding: 10px;
 }

`
export const Description = styled.div`
 padding: 25px;
`

//END STYLES