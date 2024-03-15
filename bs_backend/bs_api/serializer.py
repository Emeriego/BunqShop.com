from rest_framework import serializers
from .models import *

class productSerializers(serializers.ModelSerializer):
    class Meta:
        model = product
        fields = ['id','name', 'price', 'color', 'store', 'created_at', 'img']
        # fields = '__all__'

