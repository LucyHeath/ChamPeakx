# Generated by Django 4.1.4 on 2022-12-12 21:28

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('comments', '0005_comment_images'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='comment',
            name='images',
        ),
    ]
