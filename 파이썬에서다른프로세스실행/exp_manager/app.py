import subprocess
import sys

BASE_PORT = 5001
processes = []

for client_id in range(3):
    port = BASE_PORT + client_id

    client = subprocess.Popen(
        [
            sys.executable,
            "client.py",
            "--client-id",
            str(client_id),
            "--port",
            str(port),
        ],
        cwd="../client/",
    )

    processes.append(client)

print("All clients started!")
