from rest_framework import serializers
from .models import *

class ProductSerializers(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = ['id','name', 'price', 'color', 'store', 'created_at', 'img']
        # fields = '__all__'

