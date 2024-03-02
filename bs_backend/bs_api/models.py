from django.db import models
from datetime import datetime

# Create your models here.
class product(models.Model):
    name = models.CharField(max_length=100)
    price = models.IntegerField(default=0)
    color = models.CharField(max_length=100)
    owner = models.CharField(max_length=100)
    description = models.TextField(default="regular sample")
    created_at = models.DateTimeField(default=datetime.now, blank=True)

    def __str__(self):
        return self.name

