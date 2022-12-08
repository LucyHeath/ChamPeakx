from django.urls import path
from .views import Mountaineering_RouteListView, Mountaineering_RouteDetailView

urlpatterns = [
    path('', Mountaineering_RouteListView.as_view()), # endpoint is empty string- alread the correct endpoint for this view . Endpoint :/mountaineering_routes/
    path('<int:pk>/', Mountaineering_RouteDetailView.as_view()) # integer being passed, primary key placeholder
]
