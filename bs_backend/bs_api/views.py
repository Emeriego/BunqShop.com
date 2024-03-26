from django.shortcuts import render
from rest_framework.views import  APIView
from rest_framework.response import Response
from .models import Product
from .serializer import *
from rest_framework import status
from rest_framework.authentication import SessionAuthentication, BasicAuthentication
from rest_framework.permissions import IsAuthenticated
from django.contrib.auth import authenticate
from rest_framework_simplejwt.tokens import RefreshToken



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



class PersonLoginView(APIView):
    permission_classes = [AllowAny]

    def post(self, request):
        serializer = LoginSerializer(data=request.data)
        if serializer.is_valid():
            username = serializer.validated_data['username']
            password = serializer.validated_data['password']
            user = authenticate(username=username, password=password)
            if user:
                refresh = RefreshToken.for_user(user)
                return Response({
                    'access_token': str(refresh.access_token),
                    'refresh_token': str(refresh),
                }, status=status.HTTP_200_OK)
            else:
                return Response({'error': 'Invalid credentials'}, status=status.HTTP_401_UNAUTHORIZED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class LogoutView(APIView):
    def post(self, request):
        try:
            refresh_token = request.data['refresh_token']
            token = RefreshToken(refresh_token)
            token.blacklist()
            return Response({'message': 'Successfully logged out'}, status=status.HTTP_200_OK)
        except Exception as e:
            return Response({'error': str(e)}, status=status.HTTP_400_BAD_REQUEST)


