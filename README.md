# API de Gerenciamento de Cadastro de Médicos :man_health_worker: #



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



## Testes

```bash
# Teste Unitários
npm run test

# Teste End to End
npm run test:e2e
```



Observações: Para rodar num banco MySQL localmente, alterar no arquivo ```app.module.ts``` a linha 15 (```port```) para a porta configurada para seu database, assim com no arquivo ```config.json``` na pasta ```config```.

Também pode-se descomentar as linhas 20 e 21 do arquivo ```app.module.ts``` para sincronizar e recarregar os ```models``` do database automaticamente, caso esteja utilizando o banco localmente.

Um detalhe, é que ao cadastrar um médico, o retorno do endereço completo está sendo via console.

Há dois detalhes a corrigir: ter o array de especialidades médicas ao cadastrar (mas todas as especialidades estão populadas no banco, via ```Seed```) e o correto funcionamento das aplicações via Docker. Tanto o banco quando a API estão em containers e rodando mas sempre retorna um erro de conexão entre ambos ao fazer uma requisição. Via banco localmente está funcionando sem problemas.

## Licença

Nest utiliza a licença [MIT licensed](LICENSE).
