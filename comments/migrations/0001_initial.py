# Generated by Django 4.1.3 on 2022-12-05 16:38

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('mountaineering_routes', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Comment',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('text', models.TextField(max_length=500)),
                ('image', models.CharField(max_length=500, null=True)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('mountaineering_route', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='comments', to='mountaineering_routes.mountaineering_route')),
            ],
        ),
    ]