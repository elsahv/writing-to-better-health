import React from 'react'
import ContactForm from '../components/ContactForm'
import {
  Wrapper,
  Grid,
  Title,
  About,
  SquareB,
  SquareC,
  Email
} from '../components/styles/Contact.styled'




const contact = () => {
  return (
    <>
    <Wrapper>
      <Grid>
        <About>
          <Title>
          About
          </Title>
          <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, rfsdfecusandae.</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae, nemo. Facere ex doloribus cupiditate accusantium! Incidunt placeat, fuga eos delectus at corrupti pariatur ducimus exercitationem repudiandae, esse vitae numquam fugiat.</p>
        </About>

              <SquareB>  
              Photo
              </SquareB>  
                  <SquareC>
                  Photo
                </SquareC>
                    <Email>  
                      <Title>
                      <ContactForm /> 
                      </Title>
                      Email form
                    </Email>  

      </Grid>
      </Wrapper>
    </>
  )
}

export default contact