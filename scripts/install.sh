#!/bin/bash

command_exists() {
    command -v "$1" >/dev/null 2>&1
}

install_package() {
    PACKAGE=$1
    if [ "$AUTO_INSTALL" = true ]; then
        echo "Installing $PACKAGE..."
        npm install -g $PACKAGE
    else
        read -p "Do you want to install $PACKAGE? (y/n) " -n 1 -r
        echo
        if [[ $REPLY =~ ^[Yy]$ ]]; then
            echo "Installing $PACKAGE..."
            npm install -g $PACKAGE
        else
            echo "Skipping $PACKAGE installation."
        fi
    fi
}

AUTO_INSTALL=false
while getopts ":y" opt; do
    case $opt in
        y)
            AUTO_INSTALL=true
            ;;
        \?)
            echo "Invalid option: -$OPTARG" >&2
            exit 1
            ;;
    esac
done

PACKAGES=("pnpm" "typescript" "yarn")

for PACKAGE in "${PACKAGES[@]}"; do
    if command_exists $PACKAGE; then
        echo "$PACKAGE is already installed."
    else
        echo "$PACKAGE is not installed."
        install_package $PACKAGE
    fi
done
