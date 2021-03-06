import Head from 'next/head'
import Link from "next/link"
import { sanityClient, urlFor } from "../client"

import {
  BlogTitle,
  Wrapper,
  ImageWrapper,
  PostsContainer,
  PostTitle
} from '../components/styles/CategoryPages.styled.js'

 


const Biochemistry = ({ posts }) => {
  return (
    <>
      <Head>
        <title>Writing to Better Health | Cooking Notes</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <BlogTitle>Biochemistry</BlogTitle>
                   <Wrapper> 
                   <PostsContainer>
                   {posts &&
                    posts.map((post, index) => (
                      <Link href={`post/${post.slug.current}`}>
                      <span key={index}>
                      <PostTitle>{post.title}</PostTitle>
                   
                      <ImageWrapper>
                      <img
                       src={urlFor(post.image)}
                       className="img"
                      //  width={350}
                      //  height={300}
                      layout="fill"
                       />
                      </ImageWrapper>
                      </span>
                      </Link>

                    ))
                    }
                    </PostsContainer>
                   </Wrapper>
    </>
  )
}
 
export const getServerSideProps = async () => {
  const query = '*[_type == "biochemistry"]'
  const posts = await sanityClient.fetch(query)

  if(!posts.length) {
    return {
      props: {
        posts: [],
      },
    }
  } else {
    return {
      props: {
        posts,
      },
    }
  }
}

export default Biochemistry
