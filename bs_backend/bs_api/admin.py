from django.contrib import admin
from .models import *

# Register your models here.
admin.site.register(Product)
admin.site.register(Person)
admin.site.register(Store)
admin.site.register(Transaction)
admin.site.register(Stock)
admin.site.register(CartItem)
admin.site.register(SoldItem)



