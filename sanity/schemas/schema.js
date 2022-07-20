// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'
import blockContent from './blockContent'
import category from './category'
import blogPosts from './blogPosts'
import biochemistry from './biochemistry'
import cookingNotes from './cookingNotes'
 
// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    category,
    blogPosts,
    blockContent,
    biochemistry,
    cookingNotes
  ]),
})
