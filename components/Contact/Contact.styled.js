import styled from 'styled-components'

 
export const Wrapper = styled.div`
// background: pink;
text-align: center;
font-weight: bold;
 
@media only screen and (max-width: 1024px) {
margin-top: 0;
}
`

export const Title = styled.h2`  
margin: 25px 0 0 0;
font-size: 35px;

@media only screen and (max-width: 1024px) {
  font-size: 20px;
}
 
`



export const EmailCTA = styled.div`
display: flex;
justify-content: center;
flex-direction: column;
padding: 50px 0;
a {
  font-size: 25px;
  margin: 20px 0px;
  color: #007ba5;
}

@media only screen and (max-width: 1024px) {
a { 
  font-size: 20px;
}
}

@media only screen and (max-width: 600px) {
  margin: 0;
  a { 
    font-size: 18px;
  }
}
`

export const EmailCTAtagline = styled.div`
font-size: 20px;

@media only screen and (max-width: 600px) {
font-size: 17px;
}
`

export const SmIcons = styled.div`
font-size: 35px;
padding: 10px;
a {
  color: #000;
  margin: 5px;
  &:hover{
    color: #3aa1aa;
    transition: 1s;
  }
}
`

export const SmWrapper = styled.div`
// background: green;

@media only screen and (max-width: 600px) {
span {
  font-size: 18px;
  // color: blue;
}
}
 `