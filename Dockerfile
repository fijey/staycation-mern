
FROM node:18-alpine

WORKDIR /app/staycation-frontend

COPY package*.json ./

RUN npm install

COPY . .

ENV PORT=3001

RUN mkdir -p /app/staycation-frontend/public/images

EXPOSE 3001

CMD ["npm", "run", "start"]