import styled from 'styled-components'

//STYLES
 export const NavSection = styled.nav`
width: 420px;
height: 100%;
position: fixed;    
left: 0;
border-right: solid 3px black;
background: teal;
z-index: 1000;
text-decoration: none;  

@media only screen and (max-width: 1024px) {
  height: 100%;
  width: 250px;
  position: fixed;
  left: 0;
  top: 0;
}

@media only screen and (max-width: 768px) {
display: none;
  }

`

export const FormSection = styled.div`
@media only screen and (max-width: 768px) {
  display: none;
  }
`


export const Menu = styled.div`
display: flex;
justify-content: center;
flex-direction: column;
margin-top: 355px;
margin-left: 20px;
@media only screen and (max-width: 768px) {
 
}
`


export const Logo = styled.h1`
font-size: 25px;
 a{
   color:  #f6bea5;
   text-decoration: none;
}
@media only screen and (max-width: 768px) {
 
}
`

export const Quote = styled.span`
 width: 100%;
 display: flex;
 justify-content: flex-start;
@media only screen and (max-  width: 768px) {
 
}
`


export const NavLinks = styled.li`
font-size: 22px;
display: flex;
flex-direction: column;
text-transform: capitalize;
text-decoration: none;  
  a {
  text-decoration: none;  
  color: #fff;
  &:hover{
    color: aquamarine;
    transition: 1s;
  }
}
 

@media only screen and (max-width: 1024px) {
font-size: 18px;
}
`
 

export const SmIcons = styled.div`
font-size: 23px;
width: 100px;
text-decoration: none;  
 a {
   color: #fff;
   &:hover{
    color: #f6bea5;
    transition: 1s;
  }
 }
 @media only screen and (max-width: 768px) {
  display: none;
  }
`

export const FooterSection = styled.footer`
width: 200px;
color: #fff;
a {
  color: aquamarine;
  text-decoration: none;
 
}
a:hover {
  text-decoration: underline;
}

@media only screen and (max-width: 1024px) {
  font-size: 16px;
  }

@media only screen and (max-width: 768px) {
  display: none;
  }
`
//END STYLES