FROM node:18-alpine
WORKDIR /app
COPY . .
RUN yarn install
CMD ["node", "src/main.js"]
EXPOSE 3000
