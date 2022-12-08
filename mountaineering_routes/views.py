
from .models import Mountaineering_Route
from .serializers.common import MountaineeringRouteSerializer
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status 
from rest_framework.exceptions import NotFound
from .serializers.populated import PolpulatedMountaineeringRouteSerializer
from rest_framework.permissions import IsAuthenticatedOrReadOnly 

# Endpoint: /mountaineering_routes
class Mountaineering_RouteListView(APIView):
    permission_classes = (IsAuthenticatedOrReadOnly, )

  # Get All Mountaineering Routes
    def get(self, _request):
        mountaineering_routes = Mountaineering_Route.objects.all()
        serialized_mountaineering_routes = MountaineeringRouteSerializer(
            mountaineering_routes, many=True)
        return Response(serialized_mountaineering_routes.data, status.HTTP_200_OK)

  # Add A Mountaineering Route
    def post(self, request):
        print(request.data)
        mountaineering_route_to_add = MountaineeringRouteSerializer(
            data=request.data, partial=True)
        try:
            if mountaineering_route_to_add.is_valid():
                print(mountaineering_route_to_add.validated_data)
                mountaineering_route_to_add.save()
                return Response(mountaineering_route_to_add.data, status.HTTP_201_CREATED)

            print(mountaineering_route_to_add.errors)
            return Response(mountaineering_route_to_add.errors, status.HTTP_422_UNPROCESSABLE_ENTITY)
        except Exception as e:
            print(e)
            return Response(str(e), status.HTTP_500_INTERNAL_SERVER_ERROR)

# Endpoint: /mountaineering_routes/:pk
class Mountaineering_RouteDetailView(APIView):
    permission_classes = (IsAuthenticatedOrReadOnly, )

    # Custom: Find A Mountaineering Route Function
    def get_mountaineering_route(self, pk):
        try:
            return Mountaineering_Route.objects.get(pk=pk)
        except Mountaineering_Route.DoesNotExist as e:
            print(e)
            raise NotFound(str(e))
        except Exception as e:
            print(e)
            return Response(str(e), status.HTTP_500_INTERNAL_SERVER_ERROR)

    # GET A Mountaineering Route
    def get(self, _request, pk):
        mountaineering_route = self.get_mountaineering_route(pk)
        serialized_mountaineering_route = PolpulatedMountaineeringRouteSerializer(
            mountaineering_route)
        return Response(serialized_mountaineering_route.data)

    # UPDATE A Mountaineering Route
    def put(self, request, pk):
        mountaineering_route = self.get_mountaineering_route(pk)
        try:
            mountaineering_route_to_update = MountaineeringRouteSerializer(
                mountaineering_route, request.data, partial=True)
            if mountaineering_route_to_update.is_valid():
                mountaineering_route_to_update.save()
                return Response(mountaineering_route_to_update.data, status.HTTP_202_ACCEPTED)
            print(mountaineering_route_to_update.errors)
            return Response(mountaineering_route_to_update.errors, status.HTTP_422_UNPROCESSABLE_ENTITY)
        except Exception as e:
            return Response(str(e), status=status.HTTP_500_INTERNAL_SERVER_ERROR)

    # DELETE A Mountaineering Route
    def delete(self, _request, pk):
        book_to_delete = self.get_mountaineering_route(pk)
        try:
            book_to_delete.delete()
            return Response(status=status.HTTP_204_NO_CONTENT)
        except Exception as e:
            return Response(str(e), status.HTTP_500_INTERNAL_SERVER_ERROR)
