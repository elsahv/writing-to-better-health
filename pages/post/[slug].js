
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
  image,
  body,
  publishedAt
 
}) => {
  return (
    <Wrapper>
      <ImageSection>
              <img
                 src={urlFor(image)}
                 alt=""
                 className="img"
                 />
      </ImageSection>
          <BodyContent>
          <Title>{title}</Title>
            <DateSection>
            Published on: <div>{new Date(publishedAt).toDateString()}</div>
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

  const query = `*[_type in ["blogPosts", "biochemistry", "cookingNotes"] && slug.current == $pageSlug][0]{
    title,
    image,
    body,
    publishedAt
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
        image: post.image,
        body: post.body,
        publishedAt: post.publishedAt
      },
    }
  }
}

export default Post