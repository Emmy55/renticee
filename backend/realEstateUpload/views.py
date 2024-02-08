from django.shortcuts import render
from rest_framework import viewsets
from rest_framework.authentication import TokenAuthentication
from .models import realEstateUpload
from .serializers import realEstateUploadSerializer
# from rest_framework.decorators import api_view, permission_classes
# from rest_framework.permissions import AllowAny
# from django.contrib.auth.models import User
# from django.contrib.auth import authenticate, login
# from .serializers import UserSerializer
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated
# from django.shortcuts import get_object_or_404, render
from rest_framework.views import APIView
from django.http import JsonResponse


# Create your views here.


class realEstateUploadViewSet(viewsets.ModelViewSet):
    queryset = realEstateUpload.objects.all()
    serializer_class = realEstateUploadSerializer
    lookup_field = 'slug'
    authentication_classes = (TokenAuthentication,)




class realEstateUploadDetailView(APIView):
    def get(self, request, slug):
        realEstateUpload = get_object_or_404(realEstateUpload, slug=slug)
        serializer = realEstateUploadSerializer(realEstateUpload)
        return JsonResponse(serializer.data)


def get_image_urls(request):
    images = realEstateUpload.objects.all().values_list('image', flat=True)  # Adjust 'image_field' to the actual field name
    image_urls = [image.url for image in images]  # Assuming 'image_field' is a FileField or ImageField
    return JsonResponse(image_urls, safe=False)