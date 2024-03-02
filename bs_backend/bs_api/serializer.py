from rest_framework import serializers
from .models import *

class productSerializers(serializers.ModelSerializer):
    class Meta:
        model = product
        fields = ['name', 'price']
        # fields = '__all__'

