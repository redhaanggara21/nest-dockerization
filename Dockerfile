# Image source
FROM node:alpine

# Docker working directory
WORKDIR /app
# WORKDIR /usr/src/app

# Copying file packager
COPY ./package.json ./

# Then install the NPM module
# RUN npm install --verbose
RUN npm install --verbose

RUN npm install --no-package-lock

# Copy current directory to APP folder
COPY . .

RUN npm run build

EXPOSE 3000

# CMD ["npm", "run", "start:dev"]
CMD ["node", "dist/apps/api-gateway/main"]