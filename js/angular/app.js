'use strict';
var app = angular.module('app', ['ngSanitize', 'pascalprecht.translate']);

app.config(function ($translateProvider) {
    $translateProvider.translations('en', {
        TITLE: 'Bruno Buriolla | .NET Software Engineer',
        OCCUPATION: '.NET Software Engineer',
        LANG: 'Português',
        PROFILE: 'Profile',
        SKILLS: 'Skills',
        EDUCATION: 'Education',
        CONTACT: 'Contact',
        EXPERIENCE: 'Experience',
        RESUME: '<p>Working as a developer on the Microsoft .NET platform since 2007, I had the opportunity to work with lot of technologies and methodologies. The vast majority of projects that I participated were web applications geared mainly for internal use by companies. I started my career as a developer always working with the concepts of OOP(Object Oriented Programming), which I know quite well, as well as different patterns of Web projects and also some frameworks for the development of front-end and mobile applications.</p><p>I worked under the waterfall model of software development, within the concept of software house, following CMMI standards of process maturity for most of my career. More recently I also worked under the Scrum model for software development, which led me to study agile methodologies for software development and made me a real fan of the concepts used in these methodologies. What strikes me in these methodologies are the focus on results, quality, customer satisfaction and also the team spirit.</p><p>By working almost 9 years at software houses, I had the opportunity to work in various market segments, among them: education, market research, retail, advocacy, medical / scientific, government and finance. Always seeking to understand the specific requirements of each of these sectors and adapting expertise and technology to find out the needs in the best way for every new challenge.</p>',
        ADRESS: '<i class="fa fa-map-marker"></i>  742 Peixoto Gomide Street, São Paulo, Brazil',
        CONTACT_INFO: 'Contact Info',
        GET_IN_TOUCH: 'Get in Touch',
        NAME_LABEL: 'Name',
        EMAIL_LABEL: 'Email Address',
        MESSAGE_LABEL: 'Message',
        SUBIMIT_MESSAGE: 'Submit Message',
        INPUT_NAME: 'Your Name',
        INPUT_EMAIL: 'Your Email Adress'
        
    });
    $translateProvider.translations('br', {
        TITLE: 'Bruno Buriolla | Desenvolvedor .NET',
        OCCUPATION: 'Desenvolvedor .NET',
        LANG: 'English',
        PROFILE: 'Perfil',
        SKILLS: 'Conhecimentos',
        EDUCATION: 'Formação',
        CONTACT: 'Contato',
        EXPERIENCE: 'Experiência',
        RESUME: '<p>Trabalhando como desenvolvedor nas plataformas Microsoft .NET desde 2007, tive a oportunidade de trabalhar com diversas tecnologias e metodologias. A grande maioria dos projetos dos quais participei foram aplicações web, voltados principalmente para a utilização interna pelas companhias. Iniciei minha carreia como desenvolvedor trabalhando sempre com os conceitos de OOP(Oriented Object Programming), os quais domino, assim como diversos padrões de projetos Web e também alguns frameworks para desenvolvimento de front-end e aplicações mobile.</p><p>Atuei seguindo o modelo cascata de desenvolvimento de software, dentro do conceito de fabrica de software, seguindo padrões CMMI de maturidade de processos durante boa parte de minha carreira. Recentemente trabalhei também sob o modelo Scrum para desenvolvimento de software, o que me levou a estudar metodologias ágeis para desenvolvimento de software e me tornei um verdadeiro fã dos conceitos aplicados nestas metodologias. O que me chama mais atenção nestas metodologias são o foco nos resultados, na qualidade, na satisfação do cliente e também o espirito de equipe. “A falha de um é a falha de todos, e o sucesso de um é o sucesso de todos”.</p><p>Por trabalhar há quase 9 anos em fabricas de software, tive a oportunidade de trabalhar em diversos segmentos de mercado dentre eles: educacional, pesquisa, varejo, advocatício, medico/cientifico, governamental e financeiro. Sempre buscando entender os requisitos específicos de cada um destes setores e adequando conhecimentos técnicos e tecnológicos para atender da melhor maneira as necessidades a cada novo desafio.</p>',
        ADRESS: '<i class="fa fa-map-marker"></i>  Rua Peixoto Gomide - 742, São Paulo, Brazil',
        CONTACT_INFO: 'Info. Contato',
        GET_IN_TOUCH: 'Entre em Contato',
        NAME_LABEL: 'Nome',
        EMAIL_LABEL: 'Endereço de Email',
        MESSAGE_LABEL: 'Mensagem',
        SUBIMIT_MESSAGE: 'Enviar Mensagem',
        INPUT_NAME: 'Seu Nome',
        INPUT_EMAIL: 'Seu Endereço de Email'
    });
    $translateProvider.preferredLanguage('br');
    $translateProvider.useSanitizeValueStrategy('sanitize');
});