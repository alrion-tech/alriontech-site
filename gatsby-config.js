const plugins = [
  `gatsby-plugin-react-helmet`,
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `images`,
      path: `${__dirname}/src/images`,
    },
  },
  {
    resolve: `gatsby-plugin-prefetch-google-fonts`,
    options: {
      fonts: [
        {
          family: `Roboto`,
          subsets: [`latin`],
          variants: [`400`, `500`, `700`],
        },
      ],
    },
  },
  `gatsby-transformer-sharp`,
  `gatsby-plugin-sharp`,
  {
    resolve: `gatsby-plugin-manifest`,
    options: {
      name: `Alrion Tech`,
      short_name: `Alrion`,
      start_url: `/`,
      background_color: `#009BDB`,
      theme_color: `#009BDB`,
      display: `minimal-ui`,
      icon: `src/images/icon.svg`, // This path is relative to the root of the site.
    },
  },
  `gatsby-plugin-offline`,
]

module.exports = {
  siteMetadata: {
    title: `Alrio Tech`,
    description: `Soluções de TI humanizado mais adequado para seu negócio alcançar os objetivos`,
    author: `deglier`,
    pages: {
      home: {
        fields: {
          header:
            "Soluções de TI humanizado mais adequado para seu negócio alcançar os objetivos",
          whoWe:
            "Somos uma empresa que atua no ramo de Tecnologia da Informação. Atendemos as áreas de Redes de Computadores, Segurança da Informação, Sistema de Gestão de TI e Service Desk (GLPI), Cloud Computing e Desenvolvimento WEB.",
          presentServices:
            "A Alrion Tech é a solução que você precisa para resolver o problema que tem com computadores, redes ou sistemas.",
          team: {
            heading:
              "Com mais de 40 anos, em conjunto, de experiência no mercado. Contamos com profissionais qualificados, seguindo nossos valores de eficiência, eficácia, proatividade, comprometimento e resiliência, sendo os pontos principais a serem seguidos por nós.",
            members: [
              {
                name: `Lucas Amaral`,
                position: `CEO`,
              },
              {
                name: `Ricardo Reis`,
                position: `Projetos`,
              },
              {
                name: `Deglier Amorim`,
                position: `Desenvolvimento`,
              },
              {
                name: `Matheus Moraes`,
                position: `Banco de Dados`,
              },
              {
                name: `Thiago Santos`,
                position: `Infraestrutura`,
              },
            ],
          },
          contact: {
            heading: "Fale conosco!",
            subheading: "Envie sua mensagem que entramos em contato!",
          },
        },
      },
    },
  },
  plugins: plugins,
}
