# Generated by Django 4.1.4 on 2022-12-15 14:50

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('comments', '0012_comment_image2_comment_image3'),
    ]

    operations = [
        migrations.AlterField(
            model_name='comment',
            name='rating',
            field=models.PositiveIntegerField(max_length=1),
        ),
    ]