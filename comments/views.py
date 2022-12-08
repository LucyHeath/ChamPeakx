from .models import Comment
from .serializers.common import CommentSerializer
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.exceptions import NotFound, PermissionDenied
from rest_framework.permissions import IsAuthenticatedOrReadOnly

# Endpoint: /comments/


class CommentListView(APIView):
    permission_classes = (IsAuthenticatedOrReadOnly, )

    # Get All Comments
    def get(self, request):
        comments = Comment.objects.filter(owner=request.user.id)
        serialized_comments = CommentSerializer(comments, many=True)
        return Response(serialized_comments.data, status=status.HTTP_200_OK)

    # Add A Comment
    def post(self, request):
        request.data["owner"] = request.user.id
        comment_to_add = CommentSerializer(data=request.data)
        try:
            if comment_to_add.is_valid():
                print(comment_to_add.validated_data)
                comment_to_add.save()
                return Response(comment_to_add.data, status.HTTP_201_CREATED)
            print(comment_to_add.errors)
            return Response(comment_to_add.errors, status.HTTP_422_UNPROCESSABLE_ENTITY)
        except Exception as e:
            print(e)
            return Response(str(e), status.HTTP_500_INTERNAL_SERVER_ERROR)


# Endpoint: /comments/<int:pk>/
class CommentDetailView(APIView):
    permission_classes = (IsAuthenticatedOrReadOnly, )

    # Custom: Find All Comments Function
    def get_comment(self, pk):
        try:
            return Comment.objects.get(pk=pk)
        except Comment.DoesNotExist as e:
            print(e)
            raise NotFound(str(e))
        except Exception as e:
            print(e)
            return Response(str(e), status.HTTP_500_INTERNAL_SERVER_ERROR)

    # Custom: Check User Is Comment Owner Function
    def is_comment_owner(self, comment, user):
        if comment.owner.id != user.id:
            raise PermissionDenied()

    # Get A Comment
    def get(self, request, pk):
        comment = self.get_comment(pk)
        self.is_comment_owner(comment, request.user)
        comment_to_show = CommentSerializer(comment)
        return Response(comment_to_show.data, status=status.HTTP_200_0K)

    # Update A Comment
    def put(self, request, pk):
        comment = self.get_comment(pk)
        self.is_comment_owner(comment, request.user)
        request.data['owner'] = request.user.id
        updated_comment = CommentSerializer(comment, data=request.data)
        if updated_comment.is_valid():
            updated_comment.save()
            return Response(updated_comment.data, status=status.HTTP_202_ACCEPTED)
        return Response(updated_comment.errors, status=status.HTTP_422_UNPROCESSABLE_ENTITY)

    # Delete A Comment
    def delete(self, request, pk):
        comment_to_delete = self.get_comment(pk)
        self.is_comment_owner(comment_to_delete, request.user)
        comment_to_delete.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
