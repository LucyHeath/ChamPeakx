# Generated by Django 4.1.4 on 2022-12-13 13:59

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('comments', '0009_comment_images'),
    ]

    operations = [
        migrations.AddField(
            model_name='comment',
            name='image1',
            field=models.CharField(blank=True, default=None, max_length=500, null=True),
        ),
        migrations.AddField(
            model_name='comment',
            name='image2',
            field=models.CharField(blank=True, default=None, max_length=500, null=True),
        ),
        migrations.AddField(
            model_name='comment',
            name='image3',
            field=models.CharField(blank=True, default=None, max_length=500, null=True),
        ),
    ]