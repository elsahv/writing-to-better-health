export default {
    name: 'cookingNotes',
    title: 'Cooking Notes',
    type: 'document',
    fields: [
      {
        name: 'cookTitle',
        title: 'Cooking Title',
        type: 'string',
      },
      {
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options: {
          source: 'cookTitle',
          maxLength: 96,
        },
      },
      {
        name: 'cookDescription',
        title: 'Cooking Description',
        type: 'string'
      },
      {
        name: 'cookImage',
        title: 'Cooking Note Image',
        type: 'image',
        options: {
          hotspot: true,
        },
      },
      {
        name: 'publishedAt',
        title: 'Published at',
        type: 'datetime',
        options: {
          dateFormat: 'YYYY-MM-DD',
          // calendarTodayLabel: 'Today'
        }
      },
      {
        name: 'body',
        title: 'Body',
        type: 'blockContent',
      },
    ],
  

  }