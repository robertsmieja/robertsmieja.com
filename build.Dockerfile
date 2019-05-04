FROM node:14-alpine AS build
# For mozjpeg
RUN apk add --no-cache autoconf automake build-base libtool nasm pkgconf
RUN npm install -g pnpm

WORKDIR /home/node

COPY . .
RUN pnpm install
RUN pnpm run build

FROM amazon/aws-cli:latest AS publish
WORKDIR /usr/src

ARG awsAccessKeyId
ARG awsSecretAccessKey

RUN aws configure set aws_access_key_id ${awsAccessKeyId} && \
    aws configure set aws_secret_access_key ${awsSecretAccessKey}

COPY --from=build /home/node/dist/ .

ARG targetS3Bucket
RUN aws s3 cp . s3://${targetS3Bucket}/ --recursive --acl public-read

# Noop, we never want to save this container
CMD ["/bin/sh"]
