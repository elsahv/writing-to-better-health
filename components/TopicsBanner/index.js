import Image from "next/image";
import Link from "next/link";

import ImgOne from "../../public/images/sketch1.jpg";
import ImgTwo from "../../public/images/sketch2.jpg";
import ImgThree from "../../public/images/sketch3.jpg";
 
import {
  Wrapper,
  Grid,
  TopicWrapper,
  TopicTitle,
  ImageWrapper
} from './topicsBanner.styled'

  
const TopicsBannerCTA = () => {
  return (
    <>
      <Wrapper> 
        <Grid>
          {/* motion up */}
        <Link href="/cooking-notes">
          <TopicWrapper>
            <TopicTitle>Cooking Notes</TopicTitle>
            <ImageWrapper>
              <Image src={ImgOne} layout="fill" />
            </ImageWrapper>
          </TopicWrapper>
          </Link>

          {/* motion right*/}
          <Link href="/biochemistry">
          <TopicWrapper>
            <TopicTitle>Biochemistry</TopicTitle>
            <ImageWrapper>
              <Image src={ImgTwo} layout="fill" />
            </ImageWrapper>
          </TopicWrapper>
          </Link>

          {/* motion down*/}
          <Link href="/blog">
          <TopicWrapper>
            <TopicTitle>Blog</TopicTitle>
            <ImageWrapper>
              <Image src={ImgThree} layout="fill" />
            </ImageWrapper>
          </TopicWrapper>
          </Link>
        </Grid>
      </Wrapper>
    </>
  );
};

export default TopicsBannerCTA;
