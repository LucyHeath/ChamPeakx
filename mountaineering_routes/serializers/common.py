from rest_framework import serializers
from ..models import Mountaineering_Route


class MountaineeringRouteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Mountaineering_Route
        fields = '__all__'
