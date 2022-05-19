 

import GlobalStyles from './styles/Global'
import Header from './Header'


 

export default function Layout({ children }) {
  return (
    <>
      <GlobalStyles />
    <Header />
      <main>{children}</main>

    </>
  )
}