#!/bin/bash

# Check if destination path is provided
if [ -z "$1" ]; then
    echo "Please provide a destination path"
    echo "Usage: ./transfer.sh /path/to/destination"
    exit 1
fi

# Get the destination path
DEST_PATH="$1"

# Create destination directory if it doesn't exist
mkdir -p "$DEST_PATH"

# Copy all files and directories except .git
rsync -av --exclude='.git' --exclude='transfer.sh' ./ "$DEST_PATH"

echo "Transfer complete! Files have been copied to $DEST_PATH" 