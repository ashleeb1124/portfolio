#!/usr/bin/env bash
# Builds web-sized sample images, thumbnails, PDFs and the logo from the raw
# "Work and Design Samples" folder into assets/. Re-run after adding samples.
# Needs ImageMagick (convert) and poppler (pdftoppm). Format of each line in SAMPLES:
#   slug | source file (relative to the raw folder)
set -euo pipefail
cd "$(dirname "$0")/.."
RAW="Work and Design Samples"
OUT="assets/work"
mkdir -p "$OUT" assets/images

# --- logo: white background -> transparent, trimmed, two sizes
convert "$RAW/Ashlee Bryant Logo.png" -fuzz 14% -transparent white -trim +repage -bordercolor none -border 6 -resize 1400x assets/images/logo.png
convert assets/images/logo.png -resize 560x assets/images/logo-sm.png

SAMPLES=(
  # Business Operations / COO
  "wave-site-launch-playbook|The Wave New Site Launch Playbook.png"
  "scaling-case-study|PDF:Ashlee Bryant_Case Study_Work Sample.pdf"
  "master-opening-roadmap|PDF:AB_WorkSample Opening Plan.pdf"
  # HR
  "hris-implementation-plan|Work Sample HRIS.png"
  "ca-hr-90-day-roadmap|HR Roadmap and California Compliance Guide-1.png"
  "ca-hr-policy-toolkit|California HR Roadmap & Policy Toolkit-3.png"
  "peo-to-adp-playbook|PEO to ADP Workforce Now Playbook.png"
  "handbook-before-after|RivermarkB&A.png"
  "onboarding-kit|Onboarding Kit Preview.png"
  # Resume design (fictional sample candidates)
  "resume-coo-sample|Reese Resume.png"
  "resume-hr-director-sample|TAYLOR RESUME.png"
  "resume-systems-engineer-sample|Brooks Resume.png"
  "resume-entry-level-sample|PDF:Caidden_Toles_2026 Apprentice_Resume.pdf"
  # Branding + Design
  "everwell-brand-launch|Branding Work/Everwell Brand Launch Portfolio.png"
  "tidewell-hospitality-brand|Branding Work/Tidewell.png"
  "harbourlight-brochure|Harbourlight Brochure .png"
  "daily-bean-brand|Branding Work/daily bean 1st.png"
  "harvest-and-hue-brand|Branding Work/Harvest and Hue 1.png"
  "northline-logistics-brand|Branding Work/Logistics_Sample.png"
)

for line in "${SAMPLES[@]}"; do
  slug="${line%%|*}"; src="${line#*|}"
  if [[ "$src" == PDF:* ]]; then
    pdf="$RAW/${src#PDF:}"
    cp "$pdf" "$OUT/$slug.pdf"
    pdftoppm -jpeg -r 110 -f 1 -l 1 -singlefile "$pdf" "$OUT/.$slug"
    convert "$OUT/.$slug.jpg" -resize 1400x -quality 82 "$OUT/$slug.jpg"; rm "$OUT/.$slug.jpg"
  else
    convert "$RAW/$src" -auto-orient -resize '1800x1800>' -strip -quality 82 "$OUT/$slug.jpg"
  fi
  convert "$OUT/$slug.jpg" -resize 720x -quality 78 "$OUT/thumb-$slug.jpg"
done
echo "built ${#SAMPLES[@]} samples"
