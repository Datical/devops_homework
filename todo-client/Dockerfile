# Build Front End (Web)
FROM node:12-alpine as ui-build
RUN mkdir /app-client
WORKDIR /app-client
COPY . /app-client
RUN yarn install --immutable
RUN yarn build
RUN ls

# Runtime web server
FROM nginx:alpine
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=ui-build app-client/dist/todo-client /usr/share/nginx/html
