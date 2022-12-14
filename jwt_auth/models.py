from django.db import models
from django.contrib.auth.models import AbstractUser

# Create your models here.


class User(AbstractUser):
    email = models.CharField(max_length=50, unique=True)
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    # bio = models.TextField(max_length=500, default=None, blank=True, null=True)
    # profile_image = models.CharField(
    #     max_length=300, default=None, blank=True, null=True)
