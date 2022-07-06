FROM node:16.15.1

RUN apt update && apt install -y --no-install-recommends \
    xsel \
    git

WORKDIR /usr/src/app

EXPOSE 4000

CMD [ "tail", "-f", "/dev/null"]