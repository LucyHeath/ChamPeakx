# Generated by Django 4.1.4 on 2022-12-12 21:22

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('comments', '0004_comment_header'),
    ]

    operations = [
        migrations.AddField(
            model_name='comment',
            name='images',
            field=models.CharField(blank=True, default=None, max_length=500, null=True),
        ),
    ]
