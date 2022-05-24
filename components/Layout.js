  

import GlobalStyles from './styles/Global'
import styled from 'styled-components'
import Header from './Header'
import Sidebar from './Sidebar'




const Wrapper = styled.div`
margin-left: 450px;
margin-bottom: 55px;
padding-top: 56px;
cursor: pointer;
@media only screen and (max-width: 1024px) {
  padding: auto;
  margin: auto;
}
@media only screen and (max-width: 768px) {
 display: flex;
 justify-content: center;
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