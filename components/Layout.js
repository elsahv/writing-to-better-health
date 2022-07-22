import GlobalStyles from './styles/Global'
import styled from 'styled-components'
import Header from './Header'
import Sidebar from './Sidebar'




const Wrapper = styled.div`
// background: maroon;
padding-top: 10px;
padding-bottom: 55px;
padding-left: 340px;
// padding-right: 10px;

 

@media only screen and (max-width: 1024px) {
  padding-left: 200px;
}



@media only screen and (max-width: 531px) {
 display: flex;
 justify-content: center;
 padding: 0;
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