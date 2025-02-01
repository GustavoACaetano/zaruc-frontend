# Zaruc

## Relatório de desenvolvimento

1 - Estudo sobre Angular (iniciando do 0). <br>
2 - Estudo sobre sintaxe e componentização. <br>
3 - Criação do projeto. <br>
4 - Criação das páginas (login, cadastro, listagem) e componentes. <br>
5 - Ajustes sobre passagem de informações por componentes. <br>
Obs: Não está sendo feito de forma como deveria, a emissão está sendo manual. <br>
6 - Integração entre páginas. <br>
7 - Integração com rotas de backend: <br>
    - Cadastro <br>
    - Login <br>
    - Listagem <br>
8 - Docker<br>
<br>
## Documentação

Funcionalidades implementadas: <br>
    - Cadastro de usuário <br>
    - Login <br>
    - Listagem de todos os usuários <br>

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
