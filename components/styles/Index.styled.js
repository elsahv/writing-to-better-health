import styled from 'styled-components'




export const PageTitle = styled.div` 
display: flex;
justify-content: center;
font-size: 35px;
padding-top: 25px;  
padding-right: 100px;
@media only screen and (max-width: 1024px) {
 margin-left: 195px;
}
@media only screen and (max-width: 768px) {
    margin-left: 310px;
`



export const Wrapper = styled.div`
margin-left: 10px;
@media only screen and (max-width: 1024px) {
    margin-left: 40px;
}
@media only screen and (max-width: 768px) {
    display: flex;
    background: pink;
}
`

export const PostLinks = styled.div`
margin: 100px;
@media only screen and (max-width: 1024px) {
    margin-left: 250px;
}
@media only screen and (max-width: 768px) {
    margin-left: 0;
}
`

export const PostTitle = styled.h2`
text-decoration: underline; 
font-size: 40px;
margin: 65px 125px 25px 125px;
@media only screen and (max-width: 1024px) {
font-size: 35px;
}
@media only screen and (max-width: 768px) {

}
`

export const ImgWrapper = styled.div`
.image {
    width: 1100px;
    height: 600px;
}
@media only screen and (max-width: 1024px) {
    .image {
        width: 550px;
        height: 300px;
    }
}
@media only screen and (max-width: 500px) {
    .image {
        width: 400px;
        height: 250px;
    }
}
`


export const SplicedContent = styled.div`
width: 900px;
margin: 20px 100px;
font-size: 20px;
@media only screen and (max-width: 1024px) {
margin: 20px;
width: 600px;
font-size: 18px;
}
@media only screen and (max-width: 768px) {
}
`

export const CTA = styled.button`
 margin-left: 100px;
 margin-bottom: 45px;
 padding: 10px 20px;
 background: teal;
 color: aquamarine;
 cursor: pointer;
 border: solid 1px aquamarine;

 &:hover {
     transition: 2s;
     background: aquamarine; 
     color: teal;
     border: solid 1px teal;
 }
@media only screen and (max-width: 1024px) {
  margin: 15px 0;
}
@media only screen and (max-width: 768px) {
    margin-left: 30px;
  }
`