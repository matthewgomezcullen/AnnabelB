from rest_framework import serializers
from .models import Heading, Product, Profile

class HeadingSerializer(serializers.ModelSerializer):
    class Meta: 
        model = Heading
        fields = '__all__'

class ProductSerializer(serializers.ModelSerializer):
    class Meta: 
        model = Product
        fields = '__all__'


class ProfileSerializer(serializers.ModelSerializer):
    class Meta: 
        model = Profile
        fields = '__all__'
