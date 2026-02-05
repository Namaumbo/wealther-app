from app import create_app
import os
app = create_app()

if __name__ == "__main__":
    print(f"""
    
    --------------------------------
    |   Starting Flask application on port {os.getenv("PORT")}   |
    --------------------------------
    |   Environment: {os.getenv("ENV")}   |
    --------------------------------
    |   Debug: {os.getenv("DEBUG")}   |
    --------------------------------
    |   Server: {os.getenv("SERVER")}   |
    --------------------------------
    |   Port: {os.getenv("PORT")}   |
    --------------------------------
    """)
    app.run(debug=True)
