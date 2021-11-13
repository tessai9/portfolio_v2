#!/usr/bin/env sh

# set environment value
export NODE_OPTIONS=--openssl-legacy-provider

# abort on errors
set -e

# build
yarn build

# navigate into the build output directory
cd dist

git init
git add .
git commit -m 'deploy'

git push -f git@github.com:tessai9/portfolio_v2.git master:gh-pages

cd -
