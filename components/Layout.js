 

import GlobalStyles from './styles/Global'
import styled from 'styled-components'
import Header from './Header'
import Sidebar from './Sidebar'




const Wrapper = styled.div`
display: flex;
justify-content: center;
align-items: flex-end;
margin-left: 302px;
margin-bottom: 55px;
padding-top: 55px;
cursor: pointer;
@media only screen and (max-width: 768px) {
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