# Generated by Django 4.1.4 on 2022-12-07 14:28

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('comments', '0002_comment_owner'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='comment',
            name='image',
        ),
        migrations.AddField(
            model_name='comment',
            name='rating',
            field=models.PositiveIntegerField(default=1),
            preserve_default=False,
        ),
    ]
