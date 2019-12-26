export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '5e04544264a22c63f09759de',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-jv1xyx4g',
                  apiId: '9fd473e5-c8ec-4652-bf57-4f0a8284ff46'
                },
                {
                  buildHookId: '5e045442e9ce84bccd2ae234',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-ttato3t9',
                  apiId: 'ca8305f9-f4d1-4fb1-8fb3-0635709a0a81'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/cyber-k/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-ttato3t9.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
