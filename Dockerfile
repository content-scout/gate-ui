FROM node:8.9-alpine

RUN apk update \
    && apk upgrade \
    && apk add --update bash \
    git \
    python \
    make \
    g++ \
    krb5-dev

ARG WORKDIR=/usr/app
ARG APP_ENV=development

ENV NODE_ENV development

# Cache node modules
ADD package.json /tmp/package.json
RUN cd /tmp && npm install
RUN mkdir -p $WORKDIR && cp -a /tmp/node_modules $WORKDIR

# Copy the directory
COPY . $WORKDIR

# Set work directory
WORKDIR $WORKDIR

EXPOSE 3000

# Set to production mode
ENV NODE_ENV production

CMD ["npm", "start"]