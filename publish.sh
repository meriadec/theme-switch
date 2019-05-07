#!/bin/bash

set -e

yarn build
cd dist
sed -i 's/\/examples/\/theme-switch\/examples/g' index.html
git init
git checkout -b gh-pages
git add .
git commit -m 'Build site'
git remote add origin git@github.com:meriadec/theme-switch.git
git push -f origin gh-pages
