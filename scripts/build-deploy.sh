#!/usr/bin/env bash
# Builds a clean, drop-in Netlify package: ./netlify-site/ and ./ashlee-bryant-site.zip
# Contains only what the live site needs (no raw sample folder, scripts or git files).
set -euo pipefail
cd "$(dirname "$0")/.."
rm -rf netlify-site ashlee-bryant-site.zip
mkdir -p netlify-site
cp index.html netlify-site/
cp -r data assets netlify-site/
cat > netlify-site/_headers <<'H'
/assets/*
  Cache-Control: public, max-age=604800
/data/*
  Cache-Control: public, max-age=300
H
( cd netlify-site && zip -qr ../ashlee-bryant-site.zip . )
du -sh netlify-site ashlee-bryant-site.zip
