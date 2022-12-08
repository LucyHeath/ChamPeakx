from django.urls import path
from .views import DifficultyListView

urlpatterns = [
    path('', DifficultyListView.as_view())  # /difficulty/
]
