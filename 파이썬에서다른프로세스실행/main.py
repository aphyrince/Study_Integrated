import subprocess
import time

# subprocess.run(["python", "other.py"])

# run()은 실행한 프로세스가 종료될 때까지 기다림.
# 실행 결과도 확인 가능.

process1 = subprocess.Popen(
    ["python", "other.py", "hello", "123"],
    text=True,
    cwd="source/",
    env={"say": "wow"},
)

print("mainmainmain!")


time.sleep(3)

# process1.kill()
process1.terminate()

process1.wait()

print(process1.returncode)

# capture_output=True - stdout, stderr 캡쳐
# text=True - 결과를 문자열로 반환
# check=True - 비정상 종료 시 예외 발생
# cwd='경로' - 실행할 프로세스의 작업 디렉터리 지정.
# env={...} - 환경 변수 전달.
