from django.urls import path
from .views import UserView, newUserView

urlpatterns = [
    path('home', UserView.as_view()),
    path('newUser', newUserView.as_view())
]