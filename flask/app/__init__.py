from flask import Flask, json, jsonify
from app.utils.responses import error_response
from flask.config import Config


def create_app():
    app = Flask(__name__)

    app.config.from_object(Config)

    @app.errorhandler(404)
    def not_found(error):
        return error_response("NOT_FOUND", "Resource not found", 404)

    @app.errorhandler(500)
    def internal_error(error):
        app.logger.exception("Internal server error")

        return error_response(
            "INTERNAL_SERVER_ERROR", "An unexpected error occurred", 500
        )

    from app.routes.users import users_bp
    from app.routes.experiments import experiments_bp

    app.register_blueprint(users_bp)
    app.register_blueprint(experiments_bp)

    return app
