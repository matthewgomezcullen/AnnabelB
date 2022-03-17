from django.urls import path
from .views import ShowHeadingList, ShowProductList, ShowProduct

urlpatterns = [
    path("headingList/", ShowHeadingList.as_view()),
    path("productList/", ShowProductList.as_view()),
    path("product/", ShowProduct.as_view()),
]