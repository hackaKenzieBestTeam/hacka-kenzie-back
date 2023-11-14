#!/usr/bin/env bash
# exit on error
set -o errexit

npm install
npm run typeorm migration:run -- -d dist/src/data-source