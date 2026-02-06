import os
class Config:
    DEBUG = True
    TESTING = False
    CSRF_ENABLED = True
    SECRET_KEY = os.getenv("SECRET_KEY")


class DevelopmentConfig(Config):
    DEBUG = True
    TESTING = False
    CSRF_ENABLED = False

class ProductionConfig(Config):
    DEBUG = False
    TESTING = False
    CSRF_ENABLED = True
