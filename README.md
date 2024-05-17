# TemEmCasa!

Bem-vindo ao **TemEmCasa!** Este é o nosso primeiro Projeto Integrador (PI 1) desenvolvido como parte do nosso currículo universitário. O TemEmCasa! é um sistema web projetado para gerenciar o estoque de alimentos e produtos, com o objetivo de auxiliar indivíduos no planejamento financeiro e organização mensal.

## Visão Geral do Projeto

O projeto TemEmCasa! é baseado em duas metodologias: Aprendizagem Baseada em Problemas e por Projetos (ABPP) e Design Thinking (DT). Nosso objetivo é criar uma aplicação web intuitiva integrada com um banco de dados e práticas de controle de versão.

## Funcionalidades

### Lista de Compras da Família

A Lista de Compras da Família permite aos usuários criar e gerenciar listas de compras para suas necessidades domésticas. As principais características incluem:
- **Tabela de Itens**: Exibe uma tabela contendo os itens que os usuários desejam comprar, juntamente com sua quantidade e categoria.
- **Editar e Excluir Itens**: Os usuários podem editar informações sobre os itens na lista de compras ou remover itens que já foram adquiridos.
- **Categorias**: Os itens na lista de compras são organizados por categorias para facilitar o planejamento de compras.

Essas funcionalidades visam proporcionar aos usuários uma maneira conveniente de gerenciar seus estoques domésticos e planejar suas compras de forma eficiente.

## Tecnologias Utilizadas

- **Frontend**: HTML5, CSS3, JavaScript
- **Backend**: Node.js com Express
- **Banco de Dados**: SQLite
- **Controle de Versão**: Git, GitHub
- **Ferramentas de Design**: Figma (para prototipagem)

## Protótipo no Figma

## Protótipo no Figma

![Página inicial do TemEmCasa!](ProjetoIntegradorI/icons/img-Desktop.jpg)

[Veja o Protótipo no Figma](https://www.figma.com/file/CRQCCnP5GnzMxJLswdadb1/Prot%C3%B3tipo-LandingPage-PI?type=design&node-id=1%3A2&mode=design&t=kYdDBsKGUnv6Oht6-1)

## Como Começar

Para executar o TemEmCasa! localmente, siga estas etapas:

1. Clone o repositório do TemEmCasa! para o seu computador:
    ```bash
    git clone https://github.com/ibtriz/ProjetoIntegradorI.git
    ```

2. Navegue até o diretório do projeto:
    ```bash
    cd ProjetoIntegradorI
    ```

3. Instale o Node.js e npm (se ainda não estiverem instalados) a partir do [site oficial](https://nodejs.org/):
    ```bash
    node -v
    npm -v
    ```

4. Inicialize o projeto Node.js:
    ```bash
    npm init -y
    ```

5. Instale as dependências necessárias:
    ```bash
    npm install express sqlite3 body-parser cors
    ```

6. Crie a estrutura de diretórios e arquivos conforme abaixo:
    ```
    tememcasa/
    ├── public/
    │   ├── css/
    │   │   └── styles.css
    │   ├── js/
    │   │   └── script.js
    │   └── images/
    │       └── img-home.svg
    ├── server.js
    └── index.html
    ```

7. Inicie o servidor Node.js:
    ```bash
    node server.js
    ```

8. Abra a aplicação no navegador acessando:
    ```
    http://localhost:3000
    ```

Agora você pode explorar e interagir com o TemEmCasa! localmente em seu próprio ambiente de desenvolvimento.

## Captura de Tela

(Incluir captura de tela aqui)

## Contribuidores

- [Beatriz Francelino Borges Carneiro](https://github.com/ibtriz)
- [Carla Nunes Dias]
- [Flaviele de Souza Cavalcanti]
- [Jalvo Alef Oliveira dos Santos]
- [Marcelo Hideki Yamane]

## Agradecimentos

Gostaríamos de expressar nossa gratidão aos nossos instrutores e colegas pelo apoio e orientação ao longo deste projeto.

## Feedback

Se você tiver algum feedback ou sugestão para melhorias, sinta-se à vontade para abrir uma issue ou entrar em contato conosco diretamente.

Obrigado por se interessar pelo TemEmCasa!
