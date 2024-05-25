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

if [[ "$OSTYPE" == "linux-gnu"* ]]; then
    OS="linux"
elif [[ "$OSTYPE" == "darwin"* ]]; then
    OS="mac"
elif [[ "$OSTYPE" == "cygwin" ]] || [[ "$OSTYPE" == "msys" ]] || [[ "$OSTYPE" == "win32" ]]; then
    OS="windows"
else
    echo "Unsupported OS: $OSTYPE"
    exit 1
fi

echo "Detected OS: $OS"

if [ "$OS" == "windows" ]; then
    INSTALL_DIR="$USERPROFILE\\.redowl"
    BIN_DIR="$USERPROFILE\\.redowl\\bin"
    NPM_CMD="npm.cmd"
else
    NPM_CMD="npm"
    mkdir -p $BIN_DIR
fi

if [ -d "$INSTALL_DIR" ]; then
    rm -rf "$INSTALL_DIR"
fi

git clone "$REPO_URL" "$INSTALL_DIR"


cd "$INSTALL_DIR" || exit


$NPM_CMD install

if [ "$OS" == "windows" ]; then
    mkdir -p "$BIN_DIR"
    cp "$INSTALL_DIR/bin/$APP_NAME" "$BIN_DIR/$APP_NAME.cmd"
    echo "Add $BIN_DIR to your PATH environment variable."
else
    ln -sf "$INSTALL_DIR/bin/$APP_NAME" "$BIN_DIR/$APP_NAME"

    SHELL_NAME=$(basename "$SHELL")
    if [[ "$SHELL_NAME" == "bash" ]]; then
        PROFILE_FILE="$HOME/.bashrc"
    elif [[ "$SHELL_NAME" == "zsh" ]]; then
        PROFILE_FILE="$HOME/.zshrc"
    else
        echo "Unsupported shell: $SHELL"
        exit 1
    fi

    if ! grep -qx 'export PATH="$HOME/.local/bin:$PATH"' "$PROFILE_FILE"; then
        echo 'export PATH="$HOME/.local/bin:$PATH"' >> "$PROFILE_FILE"
    fi

    source "$PROFILE_FILE"
fi

echo "$APP_NAME installed successfully. You can run it using the command: $APP_NAME"
