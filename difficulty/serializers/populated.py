from .common import DifficultySerializer
from mountaineering_routes.serializers.common import MountaineeringRouteSerializer


class PopulatedDifficultySerializer(DifficultySerializer):
    mountianeering_routes = MountaineeringRouteSerializer(many=True)

