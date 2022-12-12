from django.db import models
from django.contrib.postgres.fields import ArrayField

# Create your models here.


class Mountaineering_Route(models.Model):
    peak = models.CharField(max_length=100)
    route = models.CharField(max_length=100)
    height = models.PositiveIntegerField()
    grade = models.CharField(max_length=100)
    difficulty = models.ManyToManyField(
        'difficulty.Difficulty',
        related_name="mountaineering_routes"
    )
    descripton = models.TextField()
    hut = models.BooleanField()
    images = ArrayField(
        models.CharField(max_length=500, default=None, blank=True, null=True),
        size=3,
    ),
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.peak} - {self.route}({self.height})"
