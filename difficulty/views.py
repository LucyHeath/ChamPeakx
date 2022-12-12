from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

from .models import Difficulty
#from .serializers.populated import DifficultySerializer
from .serializers.populated import PopulatedDifficultySerializer


class DifficultyListView(APIView):
    # Get All Difficulties
    def get(self, _request):
        difficulty = Difficulty.objects.all()
        # serialized_difficulty = DifficultySerializer(
        serialized_difficulty = PopulatedDifficultySerializer(
            difficulty, many=True)
        return Response(serialized_difficulty.data)
