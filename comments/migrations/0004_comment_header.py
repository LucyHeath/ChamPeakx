# Generated by Django 4.1.4 on 2022-12-09 22:11

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('comments', '0003_remove_comment_image_comment_rating'),
    ]

    operations = [
        migrations.AddField(
            model_name='comment',
            name='header',
            field=models.CharField(default=1, max_length=300),
            preserve_default=False,
        ),
    ]