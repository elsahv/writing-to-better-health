import styled from 'styled-components'



//STYLES
const Wrapper = styled.div`
background: teal;
border-top: solid 2px black;
border-bottom: solid 2px black;
display: flex;
justify-content: center;
padding: 90px 50px 450px;
`

const Title = styled.h3`
font-size: 25px;
text-align: center;
padding: 15px;
`
const Content = styled.p`
font-size: 20px;
text-align: center;
padding: 15px;
`
//END STYLES


const About = () => {
  return (
    <Wrapper>
      <div id="about">
      <Title>About</Title>
      <Content>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam inventore ratione, est similique molestiae eius esse sit ea assumenda architecto aperiam nihil, doloribus quae debitis rerum quidem! Eaque, itaque quibusdam.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam inventore ratione, est similique molestiae eius esse sit ea assumenda architecto aperiam nihil, doloribus quae debitis rerum quidem! Eaque, itaque quibusdamLorem ipsum dolor sit amet consectetur adipisicing elit. Quam inventore ratione, est similique molestiae eius esse sit ea assumenda architecto aperiam nihil, doloribus quae debitis rerum quidem! Eaque, itaque quibusdamLorem ipsum dolor sit amet consectetur adipisicing elit. Quam inventore ratione, est similique molestiae eius esse sit ea assumenda architecto aperiam nihil, doloribus quae debitis rerum quidem! Eaque, itaque quibusdam</Content>
      </div>
      </Wrapper>
  )
}

export default About