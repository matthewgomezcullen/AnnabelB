# Annabel-B

Source code for Annabel B. website  
First, create the virtual environment with python -m venv myenv  
Activate the environment with 'source myenv/Scripts/activate'.  
Install the requirements using pip install -r requirements.txt. Then:

### Running locally in development

Open .env, and set DJANGO_SETTINGS_MODULE to 'AnnabelB.settings.dev'  
Run 'python manage.py runserver'  
Open link provided in first terminal to view website  
In a second terminal, navigate to /frontend and run 'npm run dev' to update changes made to the frontend

### Running locally in production

Run 'pip install whitenoise'  
Change DJANGO_SETTINGS_MODULE to 'AnnabelB.settings.prod'  
Change SECRET_KEY to **50_random_characters**  
Navigate to /frontend and run 'npm run build'  
Navigate back to the root directory and run 'python manage.py collectstatic'  
Run 'python manage.py runserver'  
Add the link provided to ALLOWED_APPS in prod  
Open the link provided to view the website

### Deploying website

Change DJANGO_SETTINGS_MODULE to 'AnnabelB.settings.deploy'  
Change SECRET_KEY to **50_random_characters**  
Navigate to /frontend and run 'npm run build'  
Navigate back to the root directory and run 'python manage.py collectstatic'  
Add the the domain to ALLOWED_APPS  
Run webapp using platform
