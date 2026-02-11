#!/bin/bash

set -euo pipefail

current_branch=$(git rev-parse --abbrev-ref HEAD)

if [[ -n "$(git status --porcelain)" ]]; then
  echo "❌ Working tree sporco. Pulisci o salva le modifiche prima di procedere."
  exit 1
fi

if ! git show-ref --verify --quiet refs/heads/main; then
  echo "ℹ️  Branch locale 'main' non trovata. La creo da '$current_branch'."
  git branch main "$current_branch"
fi

has_origin=true
if ! git remote get-url origin >/dev/null 2>&1; then
  has_origin=false
  echo "⚠️  Remote 'origin' non configurato. Operazioni di fetch/pull/push verranno saltate."
fi

git checkout main >/dev/null 2>&1 || {
  echo "❌ Impossibile passare a 'main'."
  exit 1
}

branches=()
if $has_origin; then
  git fetch origin
  git pull --ff-only origin main
  mapfile -t branches < <(git for-each-ref --format='%(refname:strip=3)' refs/remotes/origin/codex)
else
  mapfile -t branches < <(git for-each-ref --format='%(refname:strip=2)' refs/heads/codex)
fi

if [[ ${#branches[@]} -eq 0 ]]; then
  echo "ℹ️  Nessun branch Codex da unire."
else
  for branch in "${branches[@]}"; do
    echo "🔀 Merging $branch into main..."
    if $has_origin; then
      git checkout -B "$branch" "origin/$branch"
      git pull --ff-only origin "$branch"
    else
      git checkout "$branch"
    fi
    git checkout main
    git merge --no-ff "$branch" -m "Merge Codex branch $branch"
  done
fi

if $has_origin; then
  git push origin main
else
  echo "⚠️  Push su 'origin/main' saltato. Configura il remote e riprova."
fi

git checkout "$current_branch"
echo "✅ Merge completato!"
