#!/bin/bash
set -e

echo "Publishing WWVCD to ClawHub..."

if ! command -v clawhub &> /dev/null; then
    echo "ClawHub CLI not found. Installing..."
    npm install -g clawhub
fi

# Check auth
if ! clawhub whoami &> /dev/null; then
    echo "You need to log in to ClawHub first."
    clawhub login
fi

echo "Deploying version 1.0.0..."
clawhub publish . \
  --slug wwvcd \
  --name "What Would Vin Claudel Do? (WWVCD)" \
  --version 1.0.0 \
  --changelog "Initial release: 3,185 clean-room insights database and defensive prompt patterns. Because family."

echo "Done! WWVCD is live on ClawHub."
