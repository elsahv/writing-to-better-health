
import React, {useState} from 'react'
import Link from 'next/link'

import { FaBars } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';
import {
    Wrapper,
    NavLinks,
    MenuOpen,
    MenuClose,
    SidebarLogo
  } from './styles/Sidebar.styled'



  const Sidebar = () => {
    const [sidebar, setSidebar] = useState(false)
    const showSidebar = () => setSidebar(!sidebar)

  return (
    <>
        <Wrapper>
            <MenuOpen>
            <FaBars onClick={showSidebar} />
            <SidebarLogo>
           Writing to Better Health
            </SidebarLogo>
            </MenuOpen>

    <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
        <div className="nav-menu-items" onClick={showSidebar}>
          <div className="navbar-toggle">
          <MenuClose>
              <AiOutlineClose />
          </MenuClose>  
            </div>

            <NavLinks>
             <h2>Navigation</h2>
            <Link href="/portion-ctrl">
                  <a>Portion Ctrl</a>
                </Link>

                <Link href="/nutritional-biochemistry">
                  <a>Nutritional Biochemistry</a>
                </Link>

                <Link href="/cooking-notes">
                  <a>Cooking Notes</a>
                </Link>
             
                <Link href="/contact">
                  <a>Contact</a>
                </Link>
                
              </NavLinks>

          </div>
      
    </nav>

        </Wrapper>

 

    </>
  )
}

export default Sidebar