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



- Verificar se o container do DB subiu e o PGAdmin:

```jsx
docker ps -a
```



2. Criando as tabelas e populando o banco de dados:
- Para ciar a tabela usuarios, basta rodar o comando:

```jsx
node ./create.js
```



- Agora com a tabela usuarios criada, populamos o banco inserindo 3 usuarios com o comando:

```jsx
node ./insert.js
```



- Estamos utilizando o BeeKeeper para gerenciar o banco de dados Postgres:



3. Com o DB de pé vamos subir o servidor da API com Express:
- Volte para o diretorio raiz e rode o arquivo index.js

```jsx
node ./index.js
```





