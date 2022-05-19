import styled from 'styled-components'



export const Wrapper = styled.div`
width: 100%;
@media only screen and (max-width: 1024px) {
}
 `

export const ImageSection = styled.div`
display: flex;
justify-content: center;
.img {
  border: solid 3px black;

}
@media only screen and (max-width: 1024px) {
  .img {
    width: 600px;
    height: 400px;
  }
}
@media only screen and (max-width: 1024px) {
  .img {
    width: 350px;
    height: 200px;
  }
}
`

export const Title = styled.h2`
text-align: center;
font-size: 23px;
@media only screen and (max-width: 1024px) {
}
`

export const BodyContent = styled.div`
 text-align: left;
 margin: 170px;
 font-size: 18px;
 @media only screen and (max-width: 1024px) {
   margin: 50px;
   padding-left: 35px;
}
@media only screen and (max-width: 768px) {
 margin: 10px;
 padding: 0;

}
`