#!/usr/bin/env bash
# Serve the site on :4173 and return. Idempotent — replaces any server already
# holding the port, so re-running is always safe.
#
#   ./serve.sh          serve on 4173
#   PORT=8080 ./serve.sh
#
# Stop it with:  pkill -f "http.server $PORT"

set -euo pipefail
cd "$(dirname "$0")"

PORT="${PORT:-4173}"

# replace whatever is already on the port
pkill -f "http.server $PORT" 2>/dev/null || true
sleep 0.3

nohup python3 -m http.server "$PORT" --directory dist --bind 0.0.0.0 \
  >"/tmp/europe-serve-$PORT.log" 2>&1 &

# wait for it to actually answer (NO_PROXY only covers loopback, hence --noproxy)
for _ in $(seq 1 50); do
  if curl -sf --noproxy '*' -o /dev/null "http://127.0.0.1:$PORT/"; then
    echo "serving  http://127.0.0.1:$PORT/"
    exit 0
  fi
  sleep 0.1
done

echo "failed to start; see /tmp/europe-serve-$PORT.log" >&2
exit 1