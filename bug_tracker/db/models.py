from django.db import models
import string
import random

# Create your models here.
#create models for user 
class User(models.Model):
    email = models.CharField(max_length = 320, default="", unique=True)
    password = models.CharField(max_length = 21, unique=False)
    new_password = models.CharField(max_length = 21, default="",unique=False)
    created_at = models.DateTimeField(auto_now_add=True)
    
