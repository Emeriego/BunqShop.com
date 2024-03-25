from rest_framework import serializers
from .models import *

class PersonSerializer(serializers.ModelSerializer):
    class Meta:
        model = Person
        fields = ['fname']

class StoreSerializer(serializers.ModelSerializer):
    store_owner = serializers.CharField(source='owner.fname', read_only=True)
    # owner = PersonSerializer()  # Embed StoreSerializer within ProductSerializer

    class Meta:
        model = Store
        fields = ['name', 'store_owner']  # Add other fields of the Store model as needed

class ProductSerializer(serializers.ModelSerializer):
    store = StoreSerializer()  # Embed StoreSerializer within ProductSerializer

    class Meta:
        model = Product
        fields = ['id','name', 'price', 'color', 'created_at', 'img', 'store']
        # fields = '__all__'

