import Link from 'next/link'
import MailchimpForm from './MailchimpForm'
import { FaFacebookF,
    FaInstagram,
    FaPinterestP } from "react-icons/fa";
import {
  NavSection,
  NavLinks,
  Menu,
  Logo,
  Quote,
  SmIcons,
  FooterSection
} from './styles/Header.styled'


const Header = () => {
  return (
    <NavSection>
<MailchimpForm />
<Menu>
 <Logo> 
 <Link href="/">
   Writing to Better Health
   </Link>
   </Logo> 
   <Quote> 
   An illustrative blog about food and mental wellness...
   </Quote> 
   <NavLinks>
       <Link href="/nutritional-biochemistry">Nutritional Biochemistry</Link>
       <Link href="/blog">Blog</Link>
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
    Copyright @2022<br /> 
    <a href="https://www.elsahovey.com"> 
    site developed by Elsa Hovey
 </a>
    </FooterSection>
    
    </Menu>
     </NavSection>
  )
}

export default Header