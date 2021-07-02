FROM node

WORKDIR /usr/app

COPY ./package.json .
COPY ./package-lock.json .
COPY ormconfig.json .


RUN npm install

COPY . .

EXPOSE 3000

COPY ./init.sh /init.sh

RUN chmod +x /init.sh

ENTRYPOINT ["/init.sh"]



