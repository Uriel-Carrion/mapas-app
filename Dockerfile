FROM node:16.15.0-alpine3.15 AS build
WORKDIR /app
COPY package.json ./
RUN yarn  install
COPY . /app

RUN yarn build

FROM nginx:stable-alpine
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]