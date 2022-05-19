import styled from 'styled-components'

//STYLES
 export const NavSection = styled.nav`
width: 300px;
height: 1200px;
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

export const Logo = styled.h1`
padding-top: 200px;
margin-left: 12px;
font-size: 25px;
font-weight: 900;
// background: green;
 a{
   color: #fff;
   text-decoration: none;
}
@media only screen and (max-width: 768px) {
 
}
`

export const NavLinks = styled.li`
// background: blue;
padding-top: 10px;
font-size: 22px;
display: flex;
flex-direction: column;
text-transform: capitalize;
text-decoration: none;  
  a {
  margin:0 10px;
  text-decoration: none;  
  color:  #f6bea5;
  font-weight: 500;
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
padding-left: 10px;
padding-top: 10px;
 a {
   margin: 3px;
   color: aquamarine;
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
padding-left: 20px;
margin-top: 25px;
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
  padding: none;
  }

@media only screen and (max-width: 768px) {
  display: none;
  }
`
//END STYLES