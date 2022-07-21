import { sanityClient, urlFor } from "../client"
import {
  ContentWrapper,  
  BlogWrapper,
  CookingNotesWrapper,
  BiochemistryWrapper,
  TopicTitle
} from '../components/styles/Index.styled'

const cookingNotes = ({posts}) => {
  return (
    <>
    
                    <CookingNotesWrapper> 
                    <TopicTitle id="cooking-notes">
                      Cooking Notes
                      </TopicTitle>
                    {posts &&
                      posts.map((post) => (
                        <div>
                        <h1>{post.cookTitle}</h1>
                        <div>{post.cookDescription}</div>
                      <img src={urlFor(post.cookImage)} />

                        </div>
                      ))
                      }
                    </CookingNotesWrapper>
    </>
  )
}


export const getServerSideProps = async () => {
  const query = '*[_type == "cookingNotes"]'
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

export default cookingNotes