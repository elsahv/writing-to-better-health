import Image from "next/image"
import ImgOne from '../public/images/sketch1.jpg'
import ImgTwo from '../public/images/sketch2.jpg'
import ImgThree from '../public/images/sketch3.jpg'
import styled from 'styled-components'




//STYLES 
const Topic = styled.div`
// background: maroon;
margin: 55px 25px 0 25px;
`
const TopicsCTABanner = styled.div`
// background: teal;
height: 500px;
display: flex;
justify-content: center;
`
const TopicTitle = styled.h2`
text-align: center;
color: #fff;
background: teal;
padding: 10px;
border-top: solid 2px black;
border-left: solid 2px black;
border-right: solid 2px black;
`
const ImageWrapper = styled.div`
width: 400px;
height: 350px;
position: relative;
border: solid 2px black;
`
//END STYLES


const TopicsBannerCTA = () => {
  return (
    <>
      <TopicsCTABanner>

        <Topic>
        <TopicTitle>
        Cooking Notes 
        </TopicTitle>  
        <ImageWrapper>
        <Image
            src={ImgOne}
            layout="fill"
            className="topic-img"
            />
            </ImageWrapper>
        </Topic>

                <Topic>
                <TopicTitle>
                Nutritional Biochemistry
                </TopicTitle>
                    <ImageWrapper>
                    <Image
                        src={ImgTwo}
                        layout="fill"
                        className="topic-img"
                        />
                        </ImageWrapper>
                      </Topic>

                                <Topic>
                                <TopicTitle>
                                Blog
                                </TopicTitle>
                                <ImageWrapper>
                                <Image
                                    src={ImgThree}
                                    layout="fill"
                                    className="topic-img"
                                    />
                                </ImageWrapper>
                                </Topic>                            

                </TopicsCTABanner>
    </>
  )
}

export default TopicsBannerCTA