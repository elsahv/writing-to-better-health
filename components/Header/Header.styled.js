import styled from 'styled-components'

//STYLES
 export const NavSection = styled.nav`
width: 350px;
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

@media only screen and (max-width: 1024px) {
  width: 200px;
}

@media only screen and (max-width: 531px) {
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
margin-top: 305px;
margin-left: 20px;
@media only screen and (max-width: 768px) {
 
}
`


export const Logo = styled.h1`
font-size: 30px;
margin: 10px 0;
 a{
   color:  aquamarine;  
   text-decoration: none;
}
@media only screen and (max-width: 768px) {
 
}
`

export const Quote = styled.span`
 width: 100%;
 display: flex;
 justify-content: flex-start;
margin: 5px 0;
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
  color: #f6bea5;
  &:hover{
    color: #fff;
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
margin: 10px 0;
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
color: #fff;
margin: 25px 0;
a {
  color: aquamarine;
  text-decoration: none;
  margin: 10px 0;
 
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