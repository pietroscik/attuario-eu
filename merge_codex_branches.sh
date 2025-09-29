#!/bin/bash

# Si ferma se c’è un errore
set -e

# Passaggio alla branch principale
git checkout main
git pull origin main

# Elenco di tutti i branch remoti Codex
branches=$(git branch -r | grep 'origin/codex/' | sed 's/origin\///')

for branch in $branches; do
  echo "🔀 Merging $branch into main..."
  git checkout $branch
  git pull origin $branch
  git checkout main
  git merge --no-ff $branch -m "Merge Codex branch $branch"
done

# Push finale
git push origin main
echo "✅ Merge completato!"