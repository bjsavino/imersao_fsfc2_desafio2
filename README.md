# Imersão Full Cycle 2 - Desafio 2

![Imersão Full Stack && Full Cycle](https://events-fullcycle.s3.amazonaws.com/events-fullcycle/static/site/img/grupo_4417.png)

## Sobre o repositório

Nesse desafio tem o objetivo de criar um backend e frontend e fazer eles trabalharem juntos para consolidar os conhecimentos adquiridos nas aulas de Nest.js e React.js.


Para isso:

- Foi criado um docker-compose.yaml que levante uma aplicação Nest.js e React juntos
- A aplicação Nest.js roda na porta 3000
- A aplicação React.js  roda na porta 3001.

- Ao acessar http://localhost:3001 a aplicação React consume e lista "rotas" do endpoint do Nest.js: http://localhost:3000/routes.

- O endpoint http://localhost:3000/routes retorna 5 rotas com os seguintes dados: title - título da rota, startPosition - contém latitude e longitude, endPosition - contém latitude e longitude


#### Utilize o docker-compose para subir a solução

`sudo docker-compose down --remove-orphans && sudo docker-compose up --build`

## Prévia

![image](https://user-images.githubusercontent.com/13129289/114194230-a66e0580-9925-11eb-97ea-0134efa45229.png)