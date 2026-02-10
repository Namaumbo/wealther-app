import os
from flask import Flask,flash
from app.config.config import DevelopmentConfig, ProductionConfig


def create_app(test_config=None):
    app = Flask(__name__, instance_relative_config=True)

    if not test_config:
        app.config.from_object(DevelopmentConfig)
    else:
        app.config.from_object(ProductionConfig)

    @app.route("/")
    def hello_world():
        return {"message": "Hello, World!"}

    return app
