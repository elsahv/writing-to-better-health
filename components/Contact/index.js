import { 
  FaLinkedin,
  FaInstagram,
  FaGithub
 } from 'react-icons/fa'; 

 import {
  Title,
  EmailCTA,
  EmailCTAtagline,
  SmIcons,
  Wrapper,
  SmWrapper
 } from './Contact.styled.js'

 
const ContactForm = () => {
  return (
    <>
    <Wrapper>
        
      <Title>
        <div id="contact">
      Contact Info
      </div>
      </Title>


        <EmailCTA>
          <EmailCTAtagline>I am currently available for work, you can reach me at:</EmailCTAtagline>
            <a href="mailto:elsahoveydevdesigns@gmail.com">elsahoveydevdesigns@gmail.com</a>
            </EmailCTA>
            


         <SmWrapper>
        <span>You can also find me on:</span>
          <SmIcons>
          <a className="sm-icon" href="http://github.com/elsahv"> 
                <FaGithub />
                </a>
          <a className="sm-icon" href="https://linkedin.com/in/elsa-hovey"> 
                <FaLinkedin />
                </a>
          <a className="sm-icon" href="https://www.instagram.com/elsahoveydevdesign/"> 
                <FaInstagram />
                </a>
            </SmIcons>
            </SmWrapper>


            </Wrapper>
    </>
  )
}
export default ContactForm