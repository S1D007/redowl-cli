#!/bin/bash

set -e

REPO_URL="https://github.com/S1D007/redowl-cli"
INSTALL_DIR="$HOME/.redowl"
BIN_DIR="$HOME/.local/bin"
APP_NAME="redowl"


check_npm_installed() {
    if ! command -v npm &> /dev/null; then
        echo "npm is not installed. Installing Node.js and npm using nvm..."
        install_node_with_nvm
    else
        echo "npm is already installed."
    fi
}


install_node_with_nvm() {

    if ! command -v nvm &> /dev/null; then
        echo "nvm is not installed. Installing nvm..."
        curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash

        export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"
        [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
    fi

    nvm install 20
    nvm use 20
    echo "Node.js and npm installed successfully, if you dont want to use nvm, you can uninstall it by running 'rm -rf $NVM_DIR'"
}


check_npm_installed

cd $INSTALL_DIR
npm install
npm i -g yarn
(yarn unlink --global | true) && npm run build && yarn link --global

echo "$APP_NAME installed successfully. You can run it using the command: $APP_NAME"
