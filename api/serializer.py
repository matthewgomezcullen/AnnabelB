from rest_framework import serializers
from .models import Heading, Product, Profile

class HeadingSerializer(serializers.ModelSerializer):
    class Meta: 
        model = Heading
        fields = ('id', 'name', 'image')

class ProductSerializer(serializers.ModelSerializer):
    class Meta: 
        model = Product
        fields = ('id', 'name', 'price', 'details', 'heading', 'main_image', 'secondary_image_1','secondary_image_2','secondary_image_3')


class ProfileSerializer(serializers.ModelSerializer):
    class Meta: 
        model = Profile
        fields = ('name', 'phone_number', 'email', 'profile_pic')
