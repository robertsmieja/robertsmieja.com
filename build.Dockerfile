FROM node:22-alpine AS build
RUN npm install -g pnpm@10

WORKDIR /home/node

COPY . .
RUN pnpm config set ignore-scripts false
RUN pnpm install
RUN pnpm run build

FROM amazon/aws-cli:latest AS publish
WORKDIR /usr/src

COPY --from=build /home/node/dist/ .

ARG targetS3Bucket
RUN --mount=type=secret,id=AWS_ACCESS_KEY_ID,env=AWS_ACCESS_KEY_ID \
    --mount=type=secret,id=AWS_SECRET_ACCESS_KEY,env=AWS_SECRET_ACCESS_KEY \
    aws s3 sync . s3://${targetS3Bucket}/ --acl public-read

# Noop, we never want to save this container
CMD ["/bin/sh"]
