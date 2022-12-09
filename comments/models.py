from django.db import models
from django.contrib.postgres.fields import ArrayField

# Create your models here.


class Comment(models.Model):
    header = models.CharField(max_length=300)
    text = models.TextField(max_length=500)
    images = ArrayField(
        models.CharField(max_length=500, default=None, blank=True, null=True),
        size=10,
    ),
    rating = models.PositiveIntegerField()
    created_at = models.DateTimeField(auto_now_add=True)
    mountaineering_route = models.ForeignKey(
        'mountaineering_routes.Mountaineering_Route',
        related_name='comments',
        on_delete=models.CASCADE
    )
    owner = models.ForeignKey(
        'jwt_auth.User',
        related_name='comments',
        on_delete=models.CASCADE
    )
