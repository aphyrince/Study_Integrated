# 실제로는 MongoDB나 SQLite 등의 DB를 연결합니다.

experiments = []


def save_experiment(data):
    experiments.append(data)
    return data
