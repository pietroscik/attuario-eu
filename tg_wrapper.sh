#!/bin/bash
# scripts/tg_wrapper.sh
# Wrapper per telegram-cli come suggerito in docs/COMMUNITY_STATUS.md
# Gestisce i permessi del file di stato e avvia il client con le librerie corrette

set -e

TG_HOME="${HOME}/.telegram-cli"
STATE_FILE="${TG_HOME}/state"
TG_BIN="/usr/bin/telegram-cli" # Percorso dell'eseguibile (o nel container)
PUB_KEY="/etc/telegram-cli/server.pub"

# Verifica preliminare dei requisiti
if [ ! -x "$TG_BIN" ]; then
    echo "❌ Errore: telegram-cli non trovato in $TG_BIN"
    exit 1
fi
if [ ! -f "$PUB_KEY" ]; then
    echo "⚠️  Attenzione: Chiave pubblica non trovata in $PUB_KEY"
fi

# Assicura che la directory esista
mkdir -p "$TG_HOME"

# Fix permessi comuni che causano il blocco "agent mode"
if [ -f "$STATE_FILE" ]; then
    chmod 600 "$STATE_FILE"
fi

echo "ℹ️  Avvio Telegram CLI wrapper..."

# Avvio con parametri standard per evitare problemi di connessione
# -W: carica lista dialoghi
# -P: porta (se usato come daemon)
# -d: daemon mode (se richiesto)

exec "$TG_BIN" -k "$PUB_KEY" -W "$@"