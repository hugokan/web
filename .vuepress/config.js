module.exports = {
    title: 'Hugo Quintero',
    description: 'Desarrollador Web & App Mobile',
    themeConfig: {
        lang: 'es-ES',
        logo: '/img/logo.png',
        icon: '/img/fav.png',
        nav: [
          { text: 'Inicio', link: '/' },
          { text: 'Portafolio', link: '/portafolio/' },
          //{ text: 'Blog', link: '/blog/' },
          { text: 'WhatsApp', link: 'https://api.whatsapp.com/send?phone=59899370928' },
        ],
        sidebar:{
            '/blog/':[
                '',
                'vuepress-blog'
            ]
        }
    },
    head: [
        ['link', { 
            rel: 'stylesheet', 
            href: 'https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css' }],
        ['script', { 
            src: 'https://code.jquery.com/jquery-3.3.1.slim.min.js' }],
        ['script', { 
            src: 'https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js' }],
        ['script', { 
            src: 'https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js' }],
        ],
  }