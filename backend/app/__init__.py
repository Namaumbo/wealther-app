import os
from flask import Flask, flash
from flask_cors import CORS
from dotenv import load_dotenv
from app.config.config import DevelopmentConfig, ProductionConfig

load_dotenv()


def create_app(test_config=None):
    app = Flask(__name__, instance_relative_config=True)
    CORS(app)

    if not test_config:
        app.config.from_object(DevelopmentConfig)
    else:
        app.config.from_object(ProductionConfig)

    from app.routes.weather_routes import weather_bp
    app.register_blueprint(weather_bp)

    @app.route("/")
    def hello_world():
        return {"message": "Hello, World!"}

    return app
