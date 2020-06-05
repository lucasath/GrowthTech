## Preparar o ambiente

1. Configure o arquivo de variáveis de ambiente `.env` presente nas pastas front e api, use  `.env.example` como modelo.
2. É necessario posuir o node v13.14.0 ou versão mais recente.
3. Possuir npm v6.14.5 ou versão mais recente.
4. Utlize nginx ou apache para produção.


**Preparando a API para produção.**

Primeiro entre no diretório da API

```bash
cd api
```

Em seguida instale as dependências usando o comando abaixo:

```bash
npm install
```

Após a instalação das dependências execute o comando abaixo ou utilize um supevisor 

Ex:[pm2](https://pm2.keymetrics.io/docs/usage/quick-start/).

Entre na pasta api execute o comando abaixo para iniciar a api:

```bash
pm2 start
```

**Preparando o front para produção**

Entre na pata front e execute o comando abaixo para instalar as dependências:


```bash
cd api
```
Em seguida execute para instalar as dependências:

```bash
npm install
```

Logo em seguida execute o build do projeto:

```bash
npm run build
```

**Configurando o nginx para produção**

Na pasta nginx possui um modelo que pode ser utilizado para produção com algumas modificações,

Altere o `server_name _;` para o dominio a ser utlizado Ex:

`server_name exemplo.com.br;`

Altere o `root` para o diretorio onde estará o front ja buildado como no exemplo do arquivo.

`root /var/www/growthtech/front/build/;`

obs: É necessario dar permissão ao grupo de usuario no qual o nginx estará rodando, Ex;

```sudo chown -R www-data:www-data build```

Altere o `server http://localhost:3000;` alterando para a porta a qual a api foi configurada no arquivo `.env` da API.


Este projeto foi criado para o teste da [GrowthTech](https://growthtech.com.br/).