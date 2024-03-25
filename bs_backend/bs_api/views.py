from django.shortcuts import render
from rest_framework.views import  APIView
from rest_framework.response import Response
from .models import Product
from .serializer import *


# Create your views here.
class productView(APIView):

    def get(self, request):
        productsWithStore= Product.objects.all()
        # productsWithStore = Product.objects.select_related('store')
        # products = [{"name": output.name, "price": output.price} for output in results]
        products = ProductSerializer(productsWithStore, many=True)
        return Response(products.data)
    
    def post(self, request):
        products = ProductSerializer(data = request.data)
        if products.is_valid(raise_exception = True):
            products.save()
        return Response(products.data)

class addCartItemView(APIView):
    def post(self, request, format=None):
        serializedCartItem = CartItemSerializer(data=request.data)
        if serializedCartItem.is_valid():
            serializedCartItem.save()
            return Response(serializedCartItem.data)
        return Response(serializedCartItem.errors)
