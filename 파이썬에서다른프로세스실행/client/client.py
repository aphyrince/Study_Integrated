import argparse
from flask import Flask

app = Flask(__name__)


@app.route("/health")
def health():
    return {"status": "ok"}


if __name__ == "__main__":
    parser = argparse.ArgumentParser()

    parser.add_argument("--client-id", type=int)
    parser.add_argument("--port", type=int)

    args = parser.parse_args()

    app.run(host="127.0.0.1", port=args.port, debug=False, use_reloader=False)
