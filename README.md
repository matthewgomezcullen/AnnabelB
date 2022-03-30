# Annabel-B

Source code for Annabel B. website  
First, create the virtual environment with python -m venv myenv  
Install the requirements using pip install -r requirements.txt  
Activate the environment with 'source myenv/Scripts/activate'. Then:  

### Running locally in development

Run 'export DJANGO_SETTINGS_MODULE="AnnabelB.settings.dev'  
Run 'python manage.py runserver'  
Open link provided in first terminal to view website  
In a second terminal, navigate to /frontend and run 'npm run dev' to update changes made to the frontend

### Running locally in production

Run 'pip install whitenoise'  
Run 'export DJANGO_SETTINGS_MODULE="AnnabelB.settings.prod'  
Run 'export DJANGO_SECRET_KEY=**50_random_characters**  
Navigate to /frontend and run 'npm run build'  
Uncomment the first two lines in MIDDLEWARE, settings.py  
Navigate back to the root directory and run 'python manage.py collectstatic'  
Run 'python manage.py runserver'  
Add the link provided to ALLOWED_APPS in prod  
Open the link provided to view the website
