import styled from 'styled-components'



export const Wrapper = styled.div`
width: 100%;
// background: green;
margin: 0 45px;  
padding-left: 200px;

@media only screen and (max-width: 1024px) {
  margin: auto;
}
 `

export const ImageSection = styled.div`
display: flex;
justify-content: center;  
.img {
  border: solid 3px black;
  width: 600px;
  height: 400px;

@media only screen and (max-width: 1024px) {
  background: green;    
  .img {
    width: 450px;
    height: 250px;
  }
}

@media only screen and (max-width: 600px) {
  .img {
    width: 350px;
    height: 250px;
  }
}
`

export const Title = styled.h2`
text-align: center;
font-size: 25px;
@media only screen and (max-width: 1024px) {
}
`

export const DateSection = styled.div`
margin: 10px 0;
@media only screen and (max-width: 1024px) {
}
`



export const BodyContent = styled.div`
 text-align: left;
 margin: 100px;
 font-size: 18px;
 @media only screen and (max-width: 1024px) {
  margin: auto;

}
@media only screen and (max-width: 768px) {
 margin: auto;
}
`