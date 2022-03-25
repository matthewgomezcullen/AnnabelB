from pyexpat import model
from django.db import models

# Create your models here.
class Heading(models.Model):
    name = models.CharField(max_length=50, unique=True)
    image = models.ImageField(upload_to="images/headings")

    def __str__(self) -> str:
        return self.name

class Product(models.Model):
    heading = models.ForeignKey('Heading', on_delete=models.SET_NULL, null=True)
    name = models.CharField(max_length=50, unique=True)
    price = models.DecimalField(decimal_places=2, max_digits=8)
    details = models.TextField(max_length=300)
    main_image = models.ImageField(upload_to="images/products/main", blank = True, null = True)

    #images which will only be displayed when opening product page
    secondary_image_1 = models.ImageField(upload_to="images/products/secondary", blank = True, null = True)
    secondary_image_2 = models.ImageField(upload_to="images/products/secondary", blank = True, null = True)
    secondary_image_3 = models.ImageField(upload_to="images/products/secondary", blank = True, null = True)
    
    def __str__(self) -> str:
        return self.name



class Profile(models.Model):

    name = models.CharField(max_length=30, blank = True)
    phone_number = models.CharField(max_length=30, blank = True)
    email = models.EmailField(max_length=30, blank = True)
    profile_pic = models.ImageField(upload_to="images/profile", blank = True, null = True)
    
    def __str__(self) -> str:
        return self.name
