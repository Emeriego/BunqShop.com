# Generated by Django 5.0.2 on 2024-03-16 15:39

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('bs_api', '0003_person_product_updated_at_cartitem_stock_store_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='product',
            name='store',
            field=models.CharField(max_length=100),
        ),
    ]
