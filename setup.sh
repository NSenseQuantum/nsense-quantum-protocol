#!/bin/zsh
export PATH="/opt/homebrew/bin:$PATH"
export NODE_PATH="/opt/homebrew/lib/node_modules"

npm run build && npm start 