export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e542699357a0b8a75e54beb',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-i5uxjkfb',
                  apiId: 'aaa05f1f-37e9-4060-bfa9-17cb5ac334e7'
                },
                {
                  buildHookId: '5e54269a95a85e90385acefa',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-8d9rxbv3',
                  apiId: '49b79af4-67ab-4f9c-a661-46bc91226fe8'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/mansoor292/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-8d9rxbv3.netlify.com', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
