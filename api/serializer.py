from rest_framework import serializers
from .models import Heading, Product

class HeadingSerializer(serializers.ModelSerializer):
    class Meta: 
        model = Heading
        fields = ('id', 'name', 'image')

class ProductSerializer(serializers.ModelSerializer):
    class Meta: 
        model = Product
        fields = ('id', 'name', 'price', 'details', 'heading', 'main_image', 'secondary_image_1','secondary_image_2','secondary_image_3')