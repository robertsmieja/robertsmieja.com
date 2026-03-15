FROM node:22-alpine AS build
# For mozjpeg
RUN apk add --no-cache autoconf automake build-base libtool nasm pkgconf
RUN npm install -g pnpm@10

WORKDIR /home/node

COPY . .
RUN pnpm config set ignore-scripts false
RUN pnpm install
RUN npm rebuild sharp
RUN pnpm run build

FROM amazon/aws-cli:latest AS publish
WORKDIR /usr/src

COPY --from=build /home/node/public/ .

ARG targetS3Bucket
RUN --mount=type=secret,id=AWS_ACCESS_KEY_ID \
    --mount=type=secret,id=AWS_SECRET_ACCESS_KEY \
    export AWS_ACCESS_KEY_ID=$(cat /run/secrets/AWS_ACCESS_KEY_ID) && \
    export AWS_SECRET_ACCESS_KEY=$(cat /run/secrets/AWS_SECRET_ACCESS_KEY) && \
    aws s3 sync . s3://${targetS3Bucket}/ --acl public-read

# Noop, we never want to save this container
CMD ["/bin/sh"]
