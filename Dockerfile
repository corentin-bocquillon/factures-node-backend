FROM node:13.6.0

# To generate the latex bill.
RUN apt-get update
RUN apt-get install -y texlive-full

COPY ./docker/usr/bin/docker-entrypoint.sh /usr/bin/docker-entrypoint.sh

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install
# If building for production
# RUN npm ci --only=production

# Bundle app source code
COPY . .

EXPOSE 3000

ENTRYPOINT ["/bin/bash"]
CMD ["/usr/bin/docker-entrypoint.sh"]
