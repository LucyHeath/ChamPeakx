from django.urls import path
from .views import DifficultyListView
from .views import SingleDifficultyListView

urlpatterns = [
    path('', DifficultyListView.as_view()),  # /difficulty/
    # integer being passed, primary key placeholder
    path('<int:pk>/', SingleDifficultyListView.as_view())
]
