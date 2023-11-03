 # Use a imagem Node.js
FROM node:14

# Defina o diretório de trabalho
WORKDIR /app

# Copie o package.json e o package-lock.json para o contêiner
COPY backend/package*.json ./

# Instale as dependências
RUN npm install

# Copie o código fonte para o contêiner
COPY . .

# Exponha a porta em que o servidor está ouvindo
EXPOSE 3000

# Comando para iniciar a aplicação
CMD [ "npm", "start" ]

