function removeAcents(str) {
  return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}

const searchButton = document.getElementById('botao-pesquisar');
const searchInput = searchButton.querySelector('input');

const resultsContainer = document.createElement('div');
resultsContainer.classList.add('results');

const searchResultsSection = document.querySelector('.search-results');

searchResultsSection.appendChild(resultsContainer);

document.body.appendChild(resultsContainer); // Adiciona o container ao DOM no início



// Array de objetos com palavras-chave e conteúdos
const keywords = [

  {
    keyword: 'Programação',
    content: 'Programação Aprenda as principais linguagens de programação (Python, JavaScript, Java, etc.) e plataformas (Node.JS, .NET). Seja iniciante ou avançado, encontre o curso ideal para você.',
    linkText: 'Saiba mais',
    linkUrl: 'https://www.alura.com.br/cursos-online-programacao',
  },

  {
    keyword: 'Front-End',
    content: ' Front-end Aprenda a criar sites e aplicações web com HTML, CSS e JavaScript. Domine as últimas tecnologias e frameworks como React e Angular. Comece sua jornada no desenvolvimento front-end agora mesmo.',
    linkText: 'Saiba mais',
    linkUrl: 'https://www.alura.com.br/escola-front-end'
  },

  {
    keyword: 'Data Science',
    content: 'Data Science Domine o mundo dos dados! Aprenda desde o básico do Excel até técnicas avançadas de Machine Learning com Python. Utilize ferramentas como Pandas e Scikit-learn para realizar análises poderosas.',
    linkText: 'Saiba mais',
    linkUrl: 'https://www.alura.com.br/cursos-online-data-science',
  },


  {
    keyword: 'Inteligência Artifical',
    content: 'Inteligência Artificial Transforme ideias em realidade com Inteligência Artificial! Aprenda a utilizar ferramentas poderosas como ChatGPT e Midjourney para criar soluções inovadoras. Descubra como a IA está moldando o mundo e como você pode fazer parte dessa transformação.',
    linkText: 'Saiba mais',
    linkUrl: 'https://www.alura.com.br/cursos-online-inteligencia-artificial',
  },


  {
    keyword: 'Devops',
    content: 'Devops Domine o ciclo de vida do desenvolvimento de software! Aprenda a automatizar processos, gerenciar infraestrutura na nuvem e construir aplicações escaláveis. Nossos cursos cobrem Git, Docker, Kubernetes, Linux e muito mais.',
    linkText: 'Saiba mais',
    linkUrl: 'https://www.alura.com.br/cursos-online-devops',
  },


  {
    keyword: 'UX & DESIGN',
    content: 'UX & DESIGN Solte sua criatividade e domine o design! Aprenda a criar designs incríveis para qualquer plataforma, desde impressos até realidade virtual. Nossos cursos te ensinarão a usar as ferramentas mais populares do mercado e a desenvolver projetos incríveis.',
    linkText: 'Saiba mais',
    linkUrl: 'https://www.alura.com.br/cursos-online-design-ux',
  },


  {
    keyword: 'Mobile',
    content: 'Mobile Crie aplicativos incríveis para milhões de usuários! Aprenda a desenvolver apps para Android e iOS, utilizando frameworks multiplataforma como Flutter. Dominando Unity, você também poderá criar jogos mobile de alta qualidade. Prepare-se para um mercado de trabalho promissor e inovador!',
    linkText: 'Saiba mais',
    linkUrl: 'https://www.alura.com.br/cursos-online-mobile',
  },


  {
    keyword: 'Inovação & Gestão',
    content: 'Inovação & Gestão  O futuro é agora! Prepare-se para liderar a transformação digital nas empresas. Aprenda as habilidades mais demandadas do mercado, como gestão de produtos, agilidade e desenvolvimento pessoal. Seja protagonista da sua carreira e do futuro do seu negócio.',
    linkText: 'Saiba mais',
    linkUrl: 'https://www.alura.com.br/cursos-online-inovacao-gestao',
  },


  {
    keyword: 'FIAP',
    content: 'FIAP: A FIAP é o centro de excelência em tecnologia mais respeitado do país. Uma história que vem sendo construída dia após dia, estimulando mentes a vivenciarem a inovação e o empreendedorismo. Porque a FIAP acredita no poder transformador da tecnologia.',
    linkText: 'Saiba mais',
    linkUrl: 'https://www.fiap.com.br/',
  },


  {
    keyword: 'Google Gemini',
    content: 'Google Gemini: O Google Gemini representa um avanço significativo na área da inteligência artificial, oferecendo capacidades mais avançadas de raciocínio, aprendizado e geração de texto. Essa ferramenta está moldando o futuro da IA, permitindo novas aplicações em diversas áreas e adaptando-se a um mundo em constante evolução.',
    linkText: 'Saiba mais',
    linkUrl: 'https://gemini.google.com/app',
  }


  // ... adicione mais objetos com suas palavras-chave e conteúdos

];


resultsContainer.textContent = ''; // Mensagem inicial
document.addEventListener('DOMContentLoaded', () => {
  searchButton.addEventListener('click', () => {
    const searchTerm = searchInput.value;
    const normalizedSearchTerm = removeAcents(searchTerm.toLowerCase());
    if (searchTerm.length < 3) {
      resultsContainer.textContent = 'Digite pelo menos 3 caracteres para pesquisar.';
      return;

    }


    const results = keywords.filter(keyword => {
      const normalizedKeyword = removeAcents(keyword.keyword.toLowerCase());
      return normalizedKeyword.startsWith(normalizedSearchTerm);

    });


    if (results.length === 0) {
      resultsContainer.innerHTML = `Nenhum resultado encontrado para "${searchTerm}".`;

    } else {
      resultsContainer.innerHTML = ''; // Limpa resultados anteriores

      function formatResult(result, searchTerm) {
        const highlightedContent = result.content.replace(
          new RegExp(`\\b${searchTerm}\\b`, 'gi'),
          `<span class="clickable">${searchTerm}</span>`
        );
        return `<p>${highlightedContent}<a href="${result.linkUrl}" target="_blank" rel="noopener noreferrer">${result.linkText}</a></p>`;
      }


      results.forEach(result => {
        const resultElement = document.createElement('p');
        resultElement.innerHTML = formatResult(result, searchTerm);
        resultsContainer.appendChild(resultElement);

      });

    }

  });

});
