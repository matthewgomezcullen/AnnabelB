"""
WSGI config for AnnabelB project.

It exposes the WSGI callable as a module-level variable named ``application``.

For more information on this file, see
https://docs.djangoproject.com/en/4.0/howto/deployment/wsgi/
"""

import os
import sys

# setting the environmental variables
from dotenv import load_dotenv
project_folder = os.path.expanduser('~/AnnabelB')
load_dotenv(os.path.join(project_folder, '.env'))

# # For deployment
# path = '/home/mattgc/AnnabelB'
# if path not in sys.path:
#     sys.path.append(path)

SETTINGS_MODULE = os.getenv("DJANGO_SETTINGS_MODULE")
if SETTINGS_MODULE == None:
    os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'AnnabelB.settings.dev')

from django.core.wsgi import get_wsgi_application
application = get_wsgi_application()
