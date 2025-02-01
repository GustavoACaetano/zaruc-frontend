# Zaruc

## Relatório de desenvolvimento

1 - Estudo sobre Angular (iniciando do 0)
2 - Estudo sobre sintaxe e componentização
3 - Criação do projeto
4 - Criação das páginas (login, cadastro, listagem) e componentes
5 - Ajustes sobre passagem de informações por componentes
Obs: Não está sendo feito de forma como deveria, a emissão está sendo manual
6 - Integração entre páginas
7 - Integração com rotas de backend:
    - Cadastro
    - Login
    - Listagem
8 - Docker

## Documentação

Funcionalidades implementadas:
    - Cadastro de usuário
    - Login
    - Listagem de todos os usuários

### Executar 
Build
``` sh
docker build --no-cache -t zaruc .
```

Execute
``` sh
docker run -p 4200:4200 zaruc
```
OBS: é importante que esteja na porta 4200 para não dar erro de CORS