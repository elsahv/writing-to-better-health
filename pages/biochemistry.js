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
                        <h1>{post.biochemTitle}</h1>
                        <div>{post.biochemDescription}</div>
                      <img src={urlFor(post.biochemImage)} />

                        </div>
                      ))
                      }
                    </CookingNotesWrapper>
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

export default cookingNotes