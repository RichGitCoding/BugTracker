from django.urls import path 
from .views import index

urlpatterns = [
    
    path('', index), #sent from frontend to backend 
    path('SignIn', index),
    path('SignUp', index),
    path('LogBug', index),
    path('MyBugs', index),
    path('MyProjects', index) #sends to index.js, index decides what to do


]