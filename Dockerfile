FROM node
ENV NODE_ENV=production
RUN mkdir -p /app/nodu
WORKDIR /app/nodu
COPY ./react-essentials /app/nodu
EXPOSE 3000
RUN npm install --production
ENTRYPOINT ["npm","start"]

