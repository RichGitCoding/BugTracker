from rest_framework import serializers
from .models import User
from django.urls import resolve




#current_url = resolve(request.path_info).url_name

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        
        model = User
        fields = ('id','email','password','created_at')

