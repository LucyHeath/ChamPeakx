# Generated by Django 4.1.4 on 2022-12-13 10:50

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('comments', '0008_remove_comment_images'),
    ]

    operations = [
        migrations.AddField(
            model_name='comment',
            name='images',
            field=models.CharField(blank=True, default=None, max_length=500, null=True),
        ),
    ]
