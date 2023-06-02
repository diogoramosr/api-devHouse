# DevHouse API

<p>Esta é a API "DevHouse" desenvolvida utilizando Node.js. O objetivo desta API é fornecer endpoints para gerenciar informações sobre casas para reservar.</p>

## Tecnologias Utilizadas
* Node.js: um ambiente de execução JavaScript server-side. Foi utilizado para criar e executar a API.
* Express.js: um framework web para Node.js. Foi utilizado para facilitar a criação das rotas e o gerenciamento das requisições.
* MongoDB: um banco de dados NoSQL. Foi utilizado para armazenar os dados das casas disponíveis para aluguel.
* Multer: um middleware para lidar com uploads de arquivos. Foi utilizado para o upload e armazenamento das fotos das casas.

## Funcionalidades principais:
<p>A DevHouse API oferece as seguintes funcionalidades:</p>

* Cadastro de casas: permite adicionar informações sobre uma nova casa para aluguel, como localização, número de quartos, descrição, preço, etc.
* Listagem de casas: retorna a lista de todas as casas disponíveis para aluguel.
* Atualização de uma casa: permite modificar as informações de uma casa existente, como preço, descrição, etc.
* Remoção de uma casa: exclui uma casa do banco de dados com base no seu identificador único.
* Visualização do dashboard: exibe um painel de controle com informações relevantes sobre as casas cadastradas.
* Reserva de uma casa: permite que um usuário reserve uma casa específica.
* Listagem de reservas: retorna a lista de todas as reservas realizadas.
* Cancelamento de uma reserva: cancela uma reserva com base no seu identificador único.

## Endpoints

<p>A API possui os seguintes endpoints principais:</p>

* POST /sessions: realiza a autenticação do usuário.
* POST /houses: adiciona uma nova casa para aluguel ao banco de dados. Utiliza o middleware Multer para o upload da foto da casa.
* GET /houses: retorna a lista de todas as casas disponíveis para aluguel.
* PUT /houses/:house_id: atualiza as informações de uma casa existente com base no seu identificador único. Utiliza o middleware Multer para o upload da nova foto da casa.
* DELETE /houses: remove uma casa do banco de dados com base no seu identificador único.
* GET /dashboard: exibe o painel de controle com informações relevantes sobre as casas cadastradas.
* POST /houses/:house_id/reserve: realiza a reserva de uma casa específica.
* GET /reserves: retorna a lista de todas as reservas realizadas.
* DELETE /reserves/cancel: cancela uma reserva com base no seu identificador único.

<p>Exemplo de aplicação utilizando a API DevHouse:
  
<div align="center">
  
  ![screen](https://github.com/diogoramosr/api-devHouse/assets/100318805/97354b9f-3099-4c57-a761-f9de84bf015b)
</div>

---
