import styled from 'styled-components'



export const PageTitle = styled.div` 
text-align: center;
font-size: 25px;
padding: 35px 0;  
@media only screen and (max-width: 768px) {
}
`

export const Wrapper = styled.div`
 padding-left: 195px;
@media only screen and (max-width: 768px) {
padding: 0;
}
`

export const PostLinks = styled.div`
width: 1200px;
margin: 20px;
@media only screen and (max-width: 1024px) {
margin: 0 100px;
width: 700px;
}
@media only screen and (max-width: 768px) {
    margin: auto;
    background: green;
    }
 `

export const PostTitle = styled.h2`
font-size: 20px;
margin: 25px 125px; 
`

export const SpliceContent = styled.div`
 border-left: solid 2px black;
p {
    padding-left: 10px;
}
span {
    padding-left: 5px;
    &:hover {
        text-decoration: underline;
        color: teal;
        transition: 1s;
        padding-left: 10px;
    }
}
@media only screen and (max-width: 768px) {
}
 `

export const ImgWrapper = styled.div`
margin: 15px;
display: flex;
.image {
    width: 290px;
    height: 300px;
}
`