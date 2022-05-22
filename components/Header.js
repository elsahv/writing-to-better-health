import Link from 'next/link'
import MailchimpForm from './MailchimpForm';

import { FaFacebookF,
    FaInstagram,
    FaPinterestP } from "react-icons/fa";
import {
  NavSection,
   NavLinks,
    Logo, SmIcons,
    FooterSection
} from './styles/Header.styled'


const Header = () => {
  return (
    <NavSection>

      <MailchimpForm />

 <Logo> 
 <Link href="/">
   Writing to Better Health
   </Link>
   </Logo> 
   <NavLinks>

       <Link href="/portion-ctrl">Portion Ctrl</Link>
       <Link href="/nutritional-biochemistry">Nutritional Biochemistry</Link>
       <Link href="/cooking-notes">Cooking Notes</Link>
       <Link href="/contact">Contact</Link>
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


     <FooterSection>
    Copyright @2022- <br />
    <a href="https://www.elsahovey.com"> 
    created by Elsa Hovey
 </a>
    </FooterSection>
     </NavSection>
  )
}

export default Header