# Build API
# This Dockerfile is very inefficient.  Convert this to a multi-stage docker build with a node12 container used as runtime.
# If done correctly the final image should be < 300 MB.
FROM node:12
WORKDIR /app
COPY ./package.json ./
RUN npm install
COPY . .
RUN npm run build
CMD ["npm", "run", "start:prod"]