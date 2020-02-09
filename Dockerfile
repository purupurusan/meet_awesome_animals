FROM node:alpine

RUN mkdir -p /app
COPY . /app
WORKDIR /app
RUN yarn init -y
RUN yarn add react react-dom next express isomorphic-unfetch --save
RUN yarn add http-server --dev

EXPOSE 3000
CMD ["yarn", "next"]
