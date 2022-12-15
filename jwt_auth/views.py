from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

# Exceptiosn to raise
from rest_framework.exceptions import PermissionDenied
from django.contrib.auth import get_user_model

from .serializers.common import UserSerializer

# modules
from datetime import datetime, timedelta
import jwt

from django.conf import settings

User = get_user_model()


class RegisterView(APIView):

    def post(self, request):
        try:
            user_to_register = UserSerializer(data=request.data)
            if user_to_register.is_valid():
                user_to_register.save()
                return Response('Registration sucessful', status=status.HTTP_201_CREATED)
            return Response(user_to_register.errors, status=status.HTTP_422_UNPROCESSABLE_ENTITY)
        except Exception as e:
            print(e)
            return Response(str(e), status.HTTP_500_INTERNAL_SERVER_ERROR)


class LoginView(APIView):

    def post(self, request):
        email = request.data['email']
        password = request.data['password']
        try:
            user_to_login = User.objects.get(email=email)
        except User.DoesNotExist as e:
            print(e)
            raise PermissionDenied('Invalid Credentials')

        if not user_to_login.check_password(password):
            print('Password Incorrect')
            raise PermissionDenied('Invalid Credentials')

        dt = datetime.now() + timedelta(days=7)
        dt_as_seconds = int(dt.strftime('%s'))
        token = jwt.encode(
            {'sub': user_to_login.id, 'exp': dt_as_seconds},
            settings.SECRET_KEY,
            'HS256'
        )
        print(token)
        return Response({
            'token': token,
            'message': f'Welcome back ,{user_to_login.username}'
        }, status.HTTP_202_ACCEPTED)
