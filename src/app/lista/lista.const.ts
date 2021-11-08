export const ListaPapoCast: Array<ListaPapoCast> = [
    {
        urlMiniImg: 'assets/ti.png',
        date: '16 Jan 21',
        duration: '24:26',
        urlImg: 'assets/rumo.png',
        subTittle: 'O rumo do date Center no Brasil',
        description: `A transformação digital é um dos motores da economia da América Latina e do Brasil. Estudo do 
        IDC Latin America publicado em 2020 indica que, até 2022, 40% do PIB da América Latina virá 
        de negócios digitais.`,
    },
    {
        urlMiniImg: 'assets/net.png',
        date: '20 Fev 21',
        duration: '35:40',
        urlImg: 'assets/1.png',
        subTittle: 'Um bate papo sobre .NET',
        description: `Os conceitos introdutórios do .NET, um framework da Microsoft para o desenvolvimento e 
        execução de aplicações, suas características e funcionamento, com visão prática de suas utilização.`,
    },
    {
        urlMiniImg: 'assets/python.png',
        date: '25 Fev 21',
        duration: '4:27',
        urlImg: 'assets/2.png',
        subTittle: 'Python: Por onde começar? ',
        description: `Uma introdução ao conhecimento e cotidiano dessa linguagem, com aprofundamento do básico ao
        avançado, trazendo a visão prática da utilização da linguagem de forma simples e dinâmica .`,
    },
    {
        urlMiniImg: 'assets/css.png',
        date: '8 Mar 21',
        duration: '1:27:11',
        urlImg: 'assets/css_g.png',
        subTittle: 'Vale a pena aprender CSS? ',
        description: `Há mil formas de te convencer que ainda vale muito a pena aprender CSS. Não é só porque 
        hoje existem frameworks e bibliotecas que devemos ignorar o CSS. É preciso entender os 
        conceitos dessa linguagem de estilo.`,
    },
    {
        urlMiniImg: 'assets/html.png',
        date: '25 Mar 21',
        duration: '1:35:18',
        urlImg: 'assets/florian-olivo-JNz9bQD3Oio-unsplash 1.png',
        subTittle: 'Entenda o que é HTML ',
        description: `Antes de tudo o HTML é a sigla para Hyper Text Markup Language. Ele permite 
        inserir o conteúdo e estabelecer a estrutura básica de um website. Entendendo 
        ele, você será capaz de compreender as outras tecnologias.`,
    },
    {
        urlMiniImg: 'assets/rest.png',
        date: '6 Abr 21',
        duration: '1:35:18',
        urlImg: 'assets/image 1.png',
        subTittle: 'Um bate papo sobre REST e RESTful ',
        description: `Você sabe o que é REST e RESTful? Sabe aonde precisamos ultilizar ele e como? 
        Tudo isso será explicado de forma clara e simples para que todos possam entender.`,
    }
]

export interface ListaPapoCast  {
    urlMiniImg: string;
    date: string;
    duration: string;
    urlImg: string;
    subTittle: string;
    description:string;
}
