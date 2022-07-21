export default {
    name: 'biochemistry',
    title: 'Biochemistry',
    type: 'document',
    fields: [
      {
        name: 'biochemTitle',
        title: 'Biochemistry Title',
        type: 'string',
      },
      {
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options: {
          source: 'biochemTitle',
          maxLength: 96,
        },
      },
      {
        name: 'biochemDescription',
        title: 'Biochemistry Description',
        type: 'string'
      },
      {
        name: 'biochemImage',
        title: 'Biochemistry image',
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