from dataclasses import field
from rest_framework import serializers
from .models import realEstateUpload
from django.contrib.auth.models import User
from rest_framework.authtoken.views import Token


# class CategorySerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Category
#         fields = '__all__'


class realEstateUploadSerializer(serializers.ModelSerializer):
    # category = CategorySerializer()  # Use CategorySerializer for the related field

    class Meta:
        model = realEstateUpload
        fields = [
            "id",
            "name",
            "image",
            "image1",
            "image2",
            "image3",
            "image4",
            "image5",
            "image6",
            "image7",
            "slug",
            "posterAvatar",
            "numberOfImages",
            "locationOfProperty",
            "description",
            "numberOfBedrooms",
            "numberOfBathtub",
            "numberOfSquareMeters",
            "price",
            "posterName",
        ]


# class UserSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = User
#         fields = ['email', 'password']
#         extra_kwargs = {'password': {'write_only': True}}


#     def create(self, validated_data):
#         user = User.objects.create_user(**validated_data)
#         Token.objects.create(user=user)
#         return user
