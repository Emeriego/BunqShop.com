from django.shortcuts import render
from rest_framework.views import  APIView
from rest_framework.response import Response
from .models import product
from .serializer import *


# Create your views here.
class productView(APIView):

    def get(self, request):
        products = product.objects.all()
        # products = [{"name": output.name, "price": output.price} for output in results]
        products = productSerializers(products, many=True)
        return Response(products.data)
    
    def post(self, request):
        products = productSerializers(data = request.data)
        if products.is_valid(raise_exception = True):
            products.save()
        return Response(products.data)
