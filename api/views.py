from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import status

from .models import Heading, Product, Profile
from .serializer import HeadingSerializer, ProductSerializer, ProfileSerializer
from api import serializer

# Create your views here.

class ShowHeadingList(APIView):

    def get(self, request):
        headings = Heading.objects.all()
        data = HeadingSerializer(headings, many=True).data
        return Response(data, status=status.HTTP_200_OK)


class ShowProductList(APIView):
    def get(self, request):
        headingID = request.GET.get('headingID')
        if headingID:
            try:
                heading = Heading.objects.get(id=headingID)
            except:
                return Response({'error':'heading with given headingID does not exist'}, status=status.HTTP_404_NOT_FOUND)
            products = Product.objects.filter(heading=heading)
            data = ProductSerializer(products, many=True).data
        else:
            products = Product.objects.all()
            data = ProductSerializer(products, many=True).data
        return Response(data, status=status.HTTP_200_OK)

class ShowProduct(APIView):
    def get(self, request):
        productID = request.GET.get('productID')
        if not productID:
            return Response({'bad request':'no productID provided'}, status=status.HTTP_400_BAD_REQUEST)
        try:
            product = Product.objects.get(id=productID)
        except:
            return Response({'error':'product with given productID does not exist'}, status=status.HTTP_404_NOT_FOUND)
        data = ProductSerializer(product).data
        return Response(data, status=status.HTTP_200_OK)


class ShowProfile(APIView):
    def get(self, request):
        if len(Profile.objects.all()) > 0:
            profile = Profile.objects.first()
        else:
            profile = Profile()
        data = ProfileSerializer(profile).data
        return Response(data, status=status.HTTP_200_OK)
