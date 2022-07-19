  

import GlobalStyles from './styles/Global'
import styled from 'styled-components'
import Header from './Header'
import Sidebar from './Sidebar'




const Wrapper = styled.div`
// background: maroon;
padding-top: 10px;
padding-bottom: 55px;
margin-left: 360px;
margin-right: 10px;

 

@media only screen and (max-width: 1024px) {
 padding: auto;
 margin-left: 260px;
}

@media only screen and (max-width: 531px) {
 display: flex;
 justify-content: center;
 padding: auto;
 margin: auto;
}
`


 

export default function Layout({ children }) {
  return (
    <>
      <GlobalStyles />
    <Header />
    <Sidebar />
    <Wrapper>
      <main>{children}</main>
      </Wrapper>

    </>
  )
}