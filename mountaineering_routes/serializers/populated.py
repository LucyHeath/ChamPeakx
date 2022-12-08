from .common import MountaineeringRouteSerializer
from comments.serializers.populated import PopulatedCommentSerializer
from difficulty.serializers.common import DifficultySerializer


class PolpulatedMountaineeringRouteSerializer(MountaineeringRouteSerializer):
    comments = PopulatedCommentSerializer(many=True)
    difficulty = DifficultySerializer(many=True)
