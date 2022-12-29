const siteMetadata = {
  title: 'Karthik',
  author: 'Karthik',
  headerTitle: 'Karthik',
  description: 'Software Engineer at Broadridge',
  language: 'en-us',
  theme: 'dark', // system, dark or light
  siteUrl: 'https://demo695.com',
  siteLogo: '/static/images/logo.png',
  image: '/static/images/avatar.webp',
  socialBanner: '/static/images/twitter-card.png',
  email: 'karthikkosuri695@gmail.com',
  github: 'https://github.com/karthik-strikes',
  linkedin: 'https://www.linkedin.com/in/karthikkosuri/',
  steam: 'https://steamcommunity.com/id/dlarroder/',
  locale: 'en-US',
  comment: {
    provider: 'giscus',
    giscusConfig: {
      repo: process.env.NEXT_PUBLIC_GISCUS_REPO || '',
      repositoryId: process.env.NEXT_PUBLIC_GISCUS_REPOSITORY_ID || '',
      category: process.env.NEXT_PUBLIC_GISCUS_CATEGORY || '',
      categoryId: process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID || '',
      mapping: 'pathname',
      reactions: '1',
      metadata: '0',
      theme: 'light',
      darkTheme: 'transparent_dark',
      themeURL: '',
    },
  },
}

module.exports = siteMetadata
