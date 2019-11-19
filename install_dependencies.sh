#!/bin/bash
echo "Installing all dependencies..."
parent_path=$( cd "$(dirname "${BASH_SOURCE[0]}")" ; pwd -P )
cd "$parent_path"
cd frontend
echo "Installing frontend dependencies..."
yarn install
cd ../backend
echo "Installing backend dependencies..."
yarn install
cd ..
yarn install
echo "Starting servers..."
yarn run dev
echo "Done."