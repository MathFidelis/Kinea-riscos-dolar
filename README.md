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

## Como Inicializar

1. Clone o repositório para o seu ambiente local:

   ```shell
   git clone <https://github.com/MathFidelis/Kinea-riscos-dolar>
