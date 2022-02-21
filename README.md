# API de Gerenciamento de Cadastro de Médicos :man_health_worker: #

###  ###

API criada para armazenar dados de médicos, tais como nome, CRM, telefones e CEP.



## Rodando via Docker ##

```bash
docker-compose up
```



## Instalação Local

```bash
npm install
```

## Rodando API Localmente

```bash
npm run start
```



Observações: Para rodar num banco MySQL localmente, alterar no arquivo ```app.module.ts``` a linha 15 (```port```) para a porta configurada para seu database, assim com no arquivo ```config.json``` na pasta ```config```.

Também pode-se descomentar as linhas 20 e 21 do arquivo ```app.module.ts``` para sincronizar e recarregar os ```models``` do database automaticamente, caso esteja utilizando o banco localmente.

## Testes

```bash
# Teste Unitários
npm run test

# Teste End to End
npm run test:e2e
```



## Licença

Nest utiliza a licença [MIT licensed](LICENSE).
