# Sistema de Cotação de Dólar

Este é um projeto de cotação de dólar que permite aos usuários consultar a cotação do dólar em uma data específica. A aplicação verifica o banco de dados local para a cotação e, se não encontrada, consulta a API do Banco Central, armazena a cotação no banco de dados e a retorna ao usuário.

## Resumo

O projeto é composto por um frontend, um backend e um banco de dados SQLite3. O frontend permite aos usuários inserir a data desejada para a consulta da cotação do dólar. O backend responde a essa solicitação, consultando o banco de dados local ou a API do Banco Central, e retorna a cotação ao frontend.

## Tecnologias Utilizadas

- Frontend: HTML, JavaScript
- Backend: Node.js, Express
- Banco de Dados: SQLite3
- Docker

## Portas e Microserviço da API

- Backend (microserviço da API): Porta 3000
- Frontend: Porta de sua escolha (configurável)

## Localhost

- Backend (microserviço da API): http://localhost:3000
- Frontend: Definida por você, mas normalmente http://localhost:<porta-escolhida>

## Docker

- O projeto inclui um Dockerfile para criar um contêiner Docker do aplicativo.

## Testes

- A aplicação pode ser testada manualmente pelo frontend, inserindo uma data e consultando a cotação do dólar.

  # Como Iniciar

Para executar este projeto em sua máquina local, siga estas etapas:

1. **Navegue para a pasta raiz do projeto:**

    No seu terminal, acesse a pasta onde o projeto está localizado.

    ```bash
    cd <Pasta-do-Projeto>
    ```

2. **Execute o Docker Compose para iniciar a aplicação:**

    Use o Docker Compose para criar e iniciar os contêineres da aplicação, incluindo o frontend, backend e o banco de dados SQLite3.

    ```bash
    docker-compose up
    ```

3. **Acesse o frontend no seu navegador:**

    Normalmente, você pode acessar o frontend em seu navegador digitando o seguinte endereço:

    ```
    http://localhost:<porta-escolhida>
    ```

4. **Realize uma consulta de cotação do dólar:**

    No frontend, insira a data desejada e clique no botão "Consultar" para verificar a cotação do dólar.

Certifique-se de ter o Docker e o Docker Compose instalados em seu sistema para iniciar a aplicação usando Docker.

Agora você está pronto para usar a aplicação de cotação de dólar localmente em seu ambiente.
