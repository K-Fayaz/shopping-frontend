#!/bin/bash

# Exit script on any error
set -e

# Check if Node.js is installed
if ! command -v node &> /dev/null
then
    echo "Node.js is not installed. Please install Node.js before running this script."
    exit 1
fi

# Check if npm is installed
if ! command -v npm &> /dev/null
then
    echo "npm is not installed. Please install npm before running this script."
    exit 1
fi

# Check if package.json exists in the root directory
if [ ! -f "package.json" ]; then
    echo "package.json not found in the root directory."
    exit 1
fi

# Install npm dependencies
echo "Installing npm dependencies..."
npm install
