# Trabalho Final "Programacao para dispositivos moveis em android"

![Exapansao_da_Mente-logo](https://github.com/Rodrigoleiroz/trabalho_android_estacio/assets/76019058/0d2529c7-bd4f-4236-8414-45c65d8703f3)

<p align="justify"> Neste trabalho criaremos uma aplicacao em REACT NATIVE para a clinica "Expansao da mente"<br />
que oferece serviços em saúde mental na modalidade online, tais como Psicoterapia, Psiquiatria e<br />
Neurologia. </p>

![image](https://github.com/Rodrigoleiroz/trabalho_android_estacio/assets/76019058/2977f9d2-b78c-4466-a4c4-4f7e79ad3001)

![image](https://github.com/Rodrigoleiroz/trabalho_android_estacio/assets/76019058/3d0a182d-5274-4323-ae16-a0bd8181cbe7)

![image](https://github.com/Rodrigoleiroz/trabalho_android_estacio/assets/76019058/26086146-b457-452d-b498-7a2220151775)

![image](https://github.com/Rodrigoleiroz/trabalho_android_estacio/assets/76019058/dffea721-86b9-4c7f-8e85-7ed936ec4cf8)




# Executando a aplicação:

1. Subindo DB:

- Navegar ate a pasta Docker, rodar no terminal:

```jsx
docker-compose up -d
```
![rodar_docker](https://github.com/Rodrigoleiroz/trabalho_android_estacio/assets/76019058/7ed8f066-e986-4b15-9e1d-5e94268f69a6)



- Verificar se o container do DB subiu e o PGAdmin:

```jsx
docker ps -a
```
![container_rodando](https://github.com/Rodrigoleiroz/trabalho_android_estacio/assets/76019058/5f566e10-0dc5-4cd0-8079-602709cc7ac3)


2. Criando as tabelas e populando o banco de dados:
- Para ciar a tabela usuarios, basta rodar o comando:

```jsx
node ./create.js
```

![createjs_tabela_usuarios](https://github.com/Rodrigoleiroz/trabalho_android_estacio/assets/76019058/f2561050-bc87-4ac8-bc5a-977205d5630b)



- Agora com a tabela usuarios criada, populamos o banco inserindo 3 usuarios com o comando:

```jsx
node ./insert.js
```

![insertjs_popula_tabela_usuarios](https://github.com/Rodrigoleiroz/trabalho_android_estacio/assets/76019058/4b153968-c872-4761-99de-19f750d7da8e)



- Estamos utilizando o BeeKeeper para gerenciar o banco de dados Postgres:

![Beekeeper_tela_DB](https://github.com/Rodrigoleiroz/trabalho_android_estacio/assets/76019058/677cb336-a8e4-4497-8bc5-cbb2356b359d)


3. Com o DB de pé vamos subir o servidor da API com Express:
- Volte para o diretorio raiz e rode o arquivo index.js

```jsx
node ./index.js
```

![API_funcioanando](https://github.com/Rodrigoleiroz/trabalho_android_estacio/assets/76019058/13c02a12-1a5f-4ac6-856d-bdbc6b3b3624)





