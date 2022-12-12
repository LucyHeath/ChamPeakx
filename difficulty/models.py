from django.db import models

# Create your models here.


class Difficulty(models.Model):
    name = models.CharField(max_length=50)
    # mountaineering_route = models.ManyToManyField(
    #     'mountaineering_route.MountaineeringRoute',
    #     related_name="difficulty")

    def __str__(self):
        return self.name
