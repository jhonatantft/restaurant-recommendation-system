FROM node:20

ENV NPM_CONFIG_LOGLEVEL warn

WORKDIR /react-app/

COPY package.json yarn.lock ./
RUN yarn

COPY . .

#specify directly which port do u use
ARG PORT
ENV PORT ${PORT}

CMD ["yarn", "start"]