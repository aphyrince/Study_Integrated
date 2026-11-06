from flask import Flask


def create_app():
    app = Flask(__name__)

    from app.routes.users import users_bp
    from app.routes.experiments import experiments_bp

    app.register_blueprint(users_bp)
    app.register_blueprint(experiments_bp)

    return app
