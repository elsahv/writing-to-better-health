import styled from 'styled-components'

export const Wrapper = styled.div`
width: 1000px;
.nav-menu {
  background-color: #fff;
  width: 100%;
  height: 60vh; 
  display: flex;
  justify-content: flex-start;
  position: fixed;
  top: 0;
  right: 100%;
  transition: 850ms;
  background: teal;
  z-index: 1000;

}
.nav-menu.active {
    right: 0;
    transition: 350ms;
  }
    
  .navbar-toggle {
    width: 100%;
    height: 80px;
    display: flex;
    justify-content: start;
    align-items: center;
  }
  
@media only screen and (min-width: 769px) {
    display: none;
}
`

export const NavLinks = styled.div`
display: flex;
justify-content: center;
flex-direction: column;
font-size: 25px;  
a {
  color: #fff;
  text-decoration: none;
}
@media only screen and (max-width: 768px) {
padding-left: 20px;
margin: auto;
}
`


export const MenuOpen = styled.div`
font-size: 2rem;
padding: 15px;
display: flex;
background: teal;
cursor: pointer;
 `
 export const MenuClose = styled.div`
 font-size: 2rem;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  margin-right: 335px;
  padding: 10px;
  cursor: pointer;
@media only screen and (max-width: 768px) {
 
}
 `
 

 export const SidebarLogo = styled.div`
font-size: 25px;
padding: 0 25px;
color:  #fff;
`
