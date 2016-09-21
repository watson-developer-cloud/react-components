#!/usr/bin/env bash

# runs `gulp build` and then adds the contents example/ folder to the gh-pages branch and pushes to github for deployment
# requires an access token - get it from https://github.com/settings/tokens and then add it to .travis.yml with the
# command `travis encrypt "GH_TOKEN=[access token]" --add`

GH_REPO="@github.com/watson-developer-cloud/react-components.git"
FULL_REPO="https://$GH_TOKEN$GH_REPO"

gulp build
cd example
git init
git config user.name "Travis CI"
git config user.email "nathan@nfriedly.com"

git add .
git commit -m "deployed to github pages"
git push --force --quiet $FULL_REPO master:gh-pages
