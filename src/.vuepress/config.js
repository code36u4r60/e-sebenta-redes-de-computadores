const { description } = require('../../package')

module.exports = {
  theme: 'yuu',
  title: 'Redes de Computadores',
  description: 'Aqui podes encontrar alguns resumos, exercícios teóricos e práticos...🚀',


  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  themeConfig: {
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    nav: [
      {
        text: 'Resumos',
        link: '/resumos/',
      },
      {
        text: 'Exercícios',
        link: '/exercicios/',
      },
      {
        text: 'Github',
        link: 'https://github.com/code36u4r60/redes-de-computadores'
      }
    ],
    sidebar: {
      '/resumos/': [
        {
          title: 'Resumos',
          collapsable: false,
          children: [
            '',
            'ospf',
            'icmp',
            'socket',
            'rpc',
            'transport_layer_protocols',
            'util',
          ]
        }
      ],
      '/exercicios/': [
        {
          title: 'Resumos',
          collapsable: false,
          sidebarDepth: 0,
          children: [
            '',
            'true-or-false',
            'multiple_choice',
            'development',
            'work1',
            'work2',
            'work3',
            'work4',
            'work5',
            'work6',
            'work7',
            'work8',
          ]
        }
      ],
    }
  },

  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
    ['@vuepress/back-to-top'],
    ['mathjax', {
      macros: {
        '\\Z': '\\mathbb{Z}',
      },
    }],
  ]

}
