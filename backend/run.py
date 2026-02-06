from app import create_app
import os
app = create_app()

if __name__ == "__main__":
    print(f"""

   |----------------------------------------|
   |       WEATHER APP BACKEND BOOTING UP   |
   |       V0.0.1                           |
   |       DEVELOPMENT MODE                 |
   |       PORT: {os.getenv("PORT")}        |
   |________________________________________|
    """)
    app.run(debug=True)
