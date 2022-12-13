from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.exceptions import NotFound

from .models import Difficulty
from .serializers.populated import DifficultySerializer
from .serializers.populated import PopulatedDifficultySerializer


class DifficultyListView(APIView):
    # Get All Difficulties
    # Endpoint: /difficulty/
    def get(self, _request):
        difficulty = Difficulty.objects.all()
        serialized_difficulty = DifficultySerializer(
            # serialized_difficulty = PopulatedDifficultySerializer(
            difficulty, many=True)
        return Response(serialized_difficulty.data)


class SingleDifficultyListView(APIView):

    # Custom: Find A Difficulty Funciton
    def get_difficulty(self, pk):
        try:
            return Difficulty.objects.get(pk=pk)
        except Difficulty.DoesNotExist as e:
            print(e)
            raise NotFound(str(e))
        except Exception as e:
            print(e)
            return Response(str(e), status.HTTP_500_INTERNAL_SERVER_ERROR)

    # Endpoint: /difficulty/:pk
    # Get Single Difficulty List View

    def get(self, _request, pk):
        difficulty = self.get_difficulty(pk)
        serialized_difficulty = PopulatedDifficultySerializer(
            difficulty)
        return Response(serialized_difficulty.data)
