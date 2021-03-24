exports.createPages = async ({ actions, graphql, reporter }) => {
  const result = await graphql(`
    query{
      allMdx {
        nodes{
          frontmatter {
            slug
          }
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panic('failed to create post', result.errors);
  }

  const posts = result.data.allMdx.nodes;

  posts.forEach(post => {
    //using forEach because we aren't returning a value.  map is better when you need to return a value
    actions.createPage({
      path: post.frontmatter.slug, //where we want it to live
      component: require.resolve('./src/templates/post.js'), //which component it should use
      context: {
        slug: post.frontmatter.slug
      },
    })
  })
}