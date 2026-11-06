from app.repositories.experiment_repository import save_experiment


def create_experiment(data):
    experiment = {"name": data["name"], "stauts": "pending"}

    saved = save_experiment(experiment)

    return saved
