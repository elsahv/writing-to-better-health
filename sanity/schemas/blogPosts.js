export default {
    name: 'blogPosts',
    title: 'Blog Posts',
    type: 'document',
    fields: [
      {
        name: 'postTitle',
        title: 'Post Title',
        type: 'string'
      },
      {
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options: {
          source: 'postTitle',
          maxLength: 96
        }
      },
      {
        name: 'mainImage',
        title: 'Main image',
        type: 'image',
        options: {
          hotspot: true
        }
      },
      {
        name: 'postDescription',
        title: 'Post Description',
        type: 'string'
      },
      {
        name: 'categories',
        title: 'Categories',
        type: 'array',
        of: [{type: 'reference', to: {type: 'category'}}]
      },
      {
        name: 'publishedAt',
        title: 'Published at',
        type: 'datetime'
      },
      {
        name: 'body',
        title: 'Body',
        type: 'blockContent'
      }
    ],
  }