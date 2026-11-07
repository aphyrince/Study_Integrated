import subprocess
import sys
from pathlib import Path

BASE_DIR = Path(__file__).parent

print(BASE_DIR)


def run_worker():
    process = subprocess.Popen(
        [sys.executable, str(BASE_DIR / "worker.py")], cwd=BASE_DIR
    )

    return process


if __name__ == "__main__":
    process = run_worker()

    print("Worker started!")

    process.wait()

    print(f"Worker finished: {process.returncode}")
