from django.conf import settings
import jwt
# The class that we extend when we want to build custom auth
from rest_framework.authentication import BaseAuthentication
from rest_framework.exceptions import PermissionDenied
from django.contrib.auth import get_user_model
User = get_user_model()


class JWTAuthentication(BaseAuthentication):

    def authenticate(self, request):

        # 1 check headers exists
        if not request.headers:
            print('NO HEADERS PRESENT AT ALL')
            return None  # to invalidate the request for rotes with authenticated permissions and will preven a 500 internal server error if the routes dont have authentication

        # 2 authorization header exists
        headers = request.headers.get('Authorization')
        if not headers:
            print('AUTHORIZATION HEADER NOT PRESENT')
            return None

        # 3 we ensure its a bearer token
        if not headers.startswith('Bearer '):
            print('INVALID TOKEN FORMAT')
            raise PermissionDenied('Invalid Token')

        # 4 Remove bearer and space from the Authorization header, saving the tken to a variable
        token = headers.replace('Bearer ', '')
        print('TOKEN ->', token)

        try:
            # 5 using JWT method to verify the token is valid , also extracting the payload in the process
            print(settings.SECRET_KEY)
            payload = jwt.decode(
                token, settings.SECRET_KEY, algorithms=['HS256'])

            # 6 Using the sub on the payload (user id), we're going to query the User tale to find a match. If there is a match the user is varified, if there is not, invalidate the request
            user = User.objects.get(pk=payload['sub'])
            print(user)
        except User.DoesNotExist as e:
            raise PermissionDenied('User not found')
        except Exception as e:
            print(e)
            raise PermissionDenied(str(e))
        # 7 return a two-tuple containing
        return (user, token)
