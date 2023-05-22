# Projeto ITEGRAFLIX - Exibindo os 10 filmes mais populares

Este projeto utiliza a biblioteca React e a API do TMDB (The Movie Database) para exibir os 10 filmes mais populares. A página inicial do projeto apresenta uma lista dos filmes, juntamente com cartazes e títulos. Clicar em um filme redireciona o usuário para a página de detalhes do filme.

## Pré-requisitos

Node.js e o NPM (Node Package Manager) instalados em sua máquina antes de executar o projeto.

## Instalação

Siga as etapas abaixo para configurar e executar o projeto ITEGRAFLIX:

1. Faça o download do código-fonte do projeto.
2. Abra um terminal e navegue até o diretório raiz do projeto.

```bash
cd /caminho/para/o/diretorio/do/projeto
```

3. Execute o comando `npm install` para instalar as dependências do projeto.

```bash
npm install
```

4. Abra o arquivo `src/config.js` e substitua `apiKey` pelo sua própria chave de API do TMDB. Você pode obter uma chave de API gratuitamente se registrar no site [TMDB](https://www.themoviedb.org/documentation/api).

5. Execute o comando `npm start` para iniciar o servidor de desenvolvimento.

```bash
npm start
```

6. Abra seu navegador e acesse `http://localhost:3000` para visualizar o ITEGRAFLIX.

## Funcionalidades

A página inicial do ITEGRAFLIX exibe uma lista dos 10 filmes mais populares. Os filmes são obtidos através da API do TMDB e são renderizados na página utilizando o React.

Ao clicar em um filme, o usuário é redirecionado para a página de detalhes do filme, onde informações adicionais sobre o filme são exibidas.

### Componentes

O projeto possui os seguintes componentes:

- `Home`: O componente principal que exibe a página inicial do ITEGRAFLIX. Ele faz uma solicitação à API do TMDB para obter os filmes populares e renderiza a lista de filmes na página.
- `Details`: O componente responsável por exibir a página de detalhes do filme. Ele faz uma solicitação à API do TMDB para obter informações detalhadas sobre um filme específico.

### API do TMDB

O projeto utiliza a API do TMDB para obter informações sobre os filmes. A chave de API é necessária para fazer solicitações à API forneça sua própria chave de API no arquivo `src/config.js`.

### Rotas

O projeto utiliza o React Router para criar rotas. A rota `/` corresponde à página inicial, onde os filmes são exibidos. A rota `/details/:id` corresponde à página de detalhes do filme, onde informações adicionais sobre o filme são exibidas.

### Estilização

O projeto utiliza classes CSS para estilizar os elementos da página. 

## Referências

- https://nodejs.org/en
- https://react-icons.github.io/react-icons/
- https://www.youtube.com/@GirlCoding/about
- https://developer.themoviedb.org/v4/reference/intro/getting-started
- https://react.dev/
- https://www.w3schools.com/js/
