#frontend block
FROM node as nodework
WORKDIR /frontend
COPY package.json .
RUN npm install --force
COPY . . 
RUN npm run build


#ngnix block 
FROM nginx:1.23-alpine
WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
COPY --from=nodework /frontend/build .
ENTRYPOINT [ "nginx","-g","daemon off;" ]

