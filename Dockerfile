# FROM node:18.12-buster-slim

# ENV APP $APP

# WORKDIR /app
# COPY package.json package-lock.json /app/
# COPY . /app/
# RUN chmod +x /app/docker-entrypoint.sh
# RUN npm install
# RUN npm run build
# ENTRYPOINT ["/app/docker-entrypoint.sh"]

FROM node:18-alpine3.15

# RUN mkdir -p ./
WORKDIR /usr/src/app

COPY . .
COPY package.json tsconfig.build.json tsconfig.json /
RUN npm install
RUN npm run build

# RUN adduser --disabled-password esolutionsTeam
# RUN chown -R esolutionsTeam:esolutionsTeam /
# USER esolutionsTeam
EXPOSE 33021
RUN npm cache clean -f
CMD ["npm", "run", "start:dev"]