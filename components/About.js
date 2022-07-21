import styled from 'styled-components'



//STYLES
const Wrapper = styled.div`
background: pink;
display: flex;
justify-content: center;
margin: 120px 0 0 0;
font-size: 25px;
height: 500px;
`


//END STYLES


const About = () => {
  return (
    <Wrapper>
      <div id="about">
      About
      </div>
      </Wrapper>
  )
}

export default About