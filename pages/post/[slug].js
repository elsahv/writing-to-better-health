import { sanityClient, urlFor } from "../../client"
import { PortableText } from '@portabletext/react'
import {
  Wrapper,
  ImageSection,
  Title,
  DateSection,
  BodyContent,
} from '../../components/styles/Post.styled'


const Post = ({
  title,
  mainImage,
  body,
 
}) => {
  return (
    <Wrapper>
   
      <ImageSection>
              <img
                 src={urlFor(mainImage)}
                 alt=""
                 className="img"
          
                 />
      </ImageSection>

      <BodyContent>

      <Title>{title}</Title>
      <DateSection>
      Published on: date
      </DateSection>
      <hr />
         <PortableText value={body} />
        </BodyContent>
      <hr />

    </Wrapper>
  )
}

export const getServerSideProps = async (pageContext) => {
  const pageSlug = pageContext.query.slug

  const query = `*[_type in ["portionCtrl", "nutritionalBiochemistry", "cookingNotes"] && slug.current == $pageSlug][0]{
    title,
    mainImage,
    body
  }`

  const post = await sanityClient.fetch(query, { pageSlug })

  if (!post) {
    return {

      props: null,
      notFound: true,
    }
  } else {
    return {
      props: {
        title: post.title,
        mainImage: post.mainImage,
        body: post.body,
      },
    }
  }
}

export default Post
