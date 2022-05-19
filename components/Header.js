import Link from 'next/link'
import { FaFacebookF,
    FaInstagram,
    FaPinterestP } from "react-icons/fa";
import Sidebar from './Sidebar';
import {
  NavSection,
   NavLinks,
    Logo, SmIcons
} from './styles/Header.styled'


const Header = () => {
  return (
    <NavSection>
<Sidebar />
     <NavLinks>
 <Logo> 
 <Link href="/">
   Writing to Better Health
   </Link>
   </Logo> 
       <Link href="/portion-ctrl">Portion Ctrl</Link>
       <Link href="/nutritional-biochemistry">Nutritional Biochemistry</Link>
       <Link href="/cooking-notes">Cooking Notes</Link>
          <SmIcons> 
          <a href="http://pinterest.com"> 
        <FaPinterestP />
        </a>  
        <a href="http://facebook.com"> 
        <FaFacebookF />
        </a>
      <a href="https://www.instagram.com"> 
        <FaInstagram />
        </a>
        </SmIcons>
     </NavLinks>
     </NavSection>
  )
}

export default Header