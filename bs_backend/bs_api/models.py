from django.db import models
from datetime import datetime

# Create your models here.
class Person(models.Model):
    fname = models.CharField(max_length=100)
    lname = models.CharField(max_length=100)
    username = models.CharField(max_length=100)
    password = models.CharField(max_length=100)
    address = models.CharField(max_length=250)
    phone = models.CharField(max_length=100)
    img = models.CharField(max_length=100, default="default_avatar.jpeg")
    created_at = models.DateTimeField(default=datetime.now, blank=True)
    updated_at = models.DateTimeField(default=datetime.now, blank=True)

    def __str__(self):
        return self.fname


class Store(models.Model):
    name = models.CharField(max_length=200)
    address = models.CharField(max_length=250)
    owner = models.ForeignKey(Person, on_delete=models.CASCADE, related_name="Stores")
    created_at = models.DateTimeField(default=datetime.now, blank=True)
    updated_at = models.DateTimeField(default=datetime.now, blank=True)

    
    def __str__(self):
        return self.name

class Product(models.Model):
    name = models.CharField(max_length=100)
    price = models.IntegerField(default=0)
    color = models.CharField(max_length=100)
    store = models.ForeignKey(Store, on_delete=models.CASCADE)
    description = models.TextField(default="regular sample")
    img = models.CharField(max_length=100, default="cam1.jpeg")
    category = models.CharField(max_length=100, default="Furnitures")
    is_featured = models.BooleanField(default=False)
    created_at = models.DateTimeField(default=datetime.now, blank=True)
    updated_at = models.DateTimeField(default=datetime.now, blank=True)
    

    def clearData(self):
        Product.objects.all().delete()


    def __str__(self):
        return self.name


class Stock(models.Model):
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    qty = models.IntegerField(max_length=1000)
    created_at = models.DateTimeField(default=datetime.now, blank=True)
    updated_at = models.DateTimeField(default=datetime.now, blank=True)



    
class CartItem(models.Model):
    product = models.ForeignKey(Product, on_delete = models.CASCADE)
    person = models.ForeignKey(Person, on_delete=models.CASCADE)
    qty = models.IntegerField()
    added_at = models.DateTimeField(default=datetime.now, blank=True)
    updated_at = models.DateTimeField(default=datetime.now, blank=True)

    def __str__(self):
        return str(self.product)

    
class Transaction(models.Model):
    type = models.CharField(max_length=100)
    transaction_by = models.ForeignKey(Person, on_delete=models.CASCADE, related_name="transactions")
    status = models.CharField(max_length=100)
    transact_at = models.DateTimeField(default=datetime.now, blank=True)


class SoldItem(models.Model):
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    transaction = models.ForeignKey(Transaction, on_delete=models.CASCADE, related_name="Purchases")


    


    






    

