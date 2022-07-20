import Image from "next/image"
import Link from "next/link"

import ImgOne from '../public/images/sketch1.jpg'
import ImgTwo from '../public/images/sketch2.jpg'
import ImgThree from '../public/images/sketch3.jpg'
import styled from 'styled-components'




//STYLES 
const Wrapper = styled.div`
margin-top: 70px;
width: 100%;
display: flex;
justify-content: center;
// background: teal;
`

const Grid = styled.div`
display: grid;
grid-template-columns: 1fr 1fr 1fr;
grid-gap: 2em;

@media only screen and (max-width: 1024px) {
grid-template-columns: 1fr;
}
`

 const TopicWrapper = styled.div`
// background: maroon;
 `

 const ImageWrapper = styled.div`
 background: maroon;
 width: 440px;
 height: 330px;
 position: relative;
 border: solid 2px black;
  `

 
 const TopicTitle = styled.h2`
 text-align: center;  
background: teal;
border-top: solid 2px black;
border-left: solid 2px black;
border-right: solid 2px black;
padding: 5px 10px;
color: #fff;
 `


//END STYLES



const TopicsBannerCTA = () => {
  return (
    <>
     <Wrapper>

        <Grid>
            <TopicWrapper>
                <TopicTitle>
                Cooking Notes
                </TopicTitle>
                <ImageWrapper>
                   <Image
                    src={ImgOne}
                    layout="fill" 
                    />
                </ImageWrapper>
                </TopicWrapper>

            <TopicWrapper>
            <TopicTitle>
                Nutritional Biochemistry
                </TopicTitle>
                <ImageWrapper>
                 <Image src={ImgTwo}
                    layout="fill"
                    />
                    </ImageWrapper>
                </TopicWrapper>

            <TopicWrapper>
            <TopicTitle>
                Blog
                </TopicTitle>
                <ImageWrapper>
                  <Image src={ImgThree}
                    layout="fill"
                    />
                    </ImageWrapper>
                </TopicWrapper>
      </Grid>

      </Wrapper>
    </>
  )
}

export default TopicsBannerCTA