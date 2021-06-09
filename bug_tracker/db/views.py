from django.shortcuts import render
from rest_framework import generics
from .serializers import UserSerializer
from  .models import User

# Create your views here.
class UserView(generics.CreateAPIView):
    queryset = User.objects.defer('new_password') #what to return, defer new passowrd if its not a new account
    serializer_class = UserSerializer

class newUserView(generics.CreateAPIView):
    queryset = User.objects.all() #what to return
    serializer_class = UserSerializer