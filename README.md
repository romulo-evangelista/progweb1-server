# API desenvolvida para o trabalho final de Programação Web 1

## Objetivo
API construída seguindo o padrão MVC para desenvolvimento de um ecommerce (trabalho final da disciplina).

## Entidades
As entidades proposta no trabalho são: 

`Cliente`, `Administrador`, `Compra`, `Produto`, `Categoria`.

### Camada de modelo das entidades
![](/files/readme/models/models.gif)

## Tabelas
### Entidades 
`clients (id, nome, endereco, email, login, senha, createdAt, updatedAt, token)`

`administrators (id, nome, email, login, senha, createdAt, updatedAt, token)`

`purchases (id, datetime, client_id, createdAt, updatedAt)`

`categories (id, descricao, createdAt, updatedAt)`

`products (id, descricao, preco, foto, quantidade, createdAt, updatedAt)`

### Relacionamentos
`products_categories (product_id, category_id, createdAt, updatedAt)`

`purchases_products (purchase_id, product_id, quant, createdAt, updatedAt)`

## Rotas
### Sessions
`POST` /clients - Cria uma nova sessão;

`DELETE` /clients/:id - Deleta a sessão do usuário com `id` passado na rota;

### Clients
`GET` /clients - Retorna todos os clientes da aplicação;

`GET` /clients/:id - Retorna apenas o cliente com o `id` passado na rota;

`POST` /clients - Cria um novo usuário;

`PUT` /clients/:id - Atualiza o usuário com `id` passado na rota;

`DELETE` /clients/:id - Deleta o usuário com `id` passado na rota;

![](/files/readme/routes/routes.gif)
