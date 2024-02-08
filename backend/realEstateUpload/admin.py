from django.contrib import admin

from .models import realEstateUpload


# Register your models here.
@admin.register(realEstateUpload)
class EstateUploadAdmin(admin.ModelAdmin):
    list_display = [
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
    prepopulated_fields = {"slug": ("name",)}
