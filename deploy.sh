# abort on errors
set -e

# build
echo Linting..
npm run lint
echo Building. this may take a minute...
npm run build

# navigate into the build output directory
cd docs

# if you are deploying to a custom domain
 echo 'cubicalconsulting.com' > CNAME

git add -A
echo add commit message and git push!..

# git commit -m 'deploy'

# # deploy
# git push -f https://github.com/mejiamanuel57/cubical.git master

cd -