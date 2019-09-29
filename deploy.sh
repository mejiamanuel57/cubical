#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd dist

# if you are deploying to a custom domain
echo 'cubicalconsulting.com' > CNAME

cd ..

git add -f dist && git commit -m "deploy"

git subtree push -f --prefix dist origin gh-pages