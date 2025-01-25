# Etapa 1: Construir a aplicação Angular
FROM node:18 AS builder

# Definir o diretório de trabalho
WORKDIR /app

# Copiar o package.json e package-lock.json
COPY package*.json ./

# Instalar as dependências
RUN npm install

# Copiar o código-fonte para o contêiner
COPY . .

# Gerar a versão de produção da aplicação Angular
RUN npm run build --prod

# Etapa 2: Servir a aplicação com Nginx
FROM nginx:alpine

# Copiar os arquivos gerados na etapa anterior para o diretório do Nginx
COPY --from=builder /app/dist/zaruc /usr/share/nginx/html

# Expor a porta 80 (padrão do Nginx)
EXPOSE 80

# Iniciar o Nginx
CMD ["nginx", "-g", "daemon off;"]
