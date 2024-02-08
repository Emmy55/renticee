from django.db import models
from django.urls import reverse

# Create your models here.

from django.contrib.auth.models import (
    AbstractBaseUser,
    PermissionsMixin,
    Group,
    Permission,
)
from django.utils.translation import gettext_lazy as _


from PIL import Image
from io import BytesIO
from django.core.files.uploadedfile import InMemoryUploadedFile

from django.core.exceptions import ValidationError

from decimal import Decimal

from django.contrib.humanize.templatetags.humanize import intcomma


class CommaSeparatedIntegerField(models.DecimalField):
    def formated_price(self):
        return "{:,.2f}".format(self.new_price)

class realEstateUpload(models.Model):
    name = models.CharField(max_length=200)

    image = models.ImageField(upload_to="estateUpload_image//%Y/%m/%d", blank=True)
    image1 = models.ImageField(upload_to="estateUpload_image//%Y/%m/%d", blank=True)
    image2 = models.ImageField(upload_to="estateUpload_image//%Y/%m/%d", blank=True)
    image3 = models.ImageField(upload_to="estateUpload_image//%Y/%m/%d", blank=True)
    image4 = models.ImageField(upload_to="estateUpload_image//%Y/%m/%d", blank=True)
    image5 = models.ImageField(upload_to="estateUpload_image//%Y/%m/%d", blank=True)
    image6 = models.ImageField(upload_to="estateUpload_image//%Y/%m/%d", blank=True)
    image7 = models.ImageField(upload_to="estateUpload_image//%Y/%m/%d", blank=True)
    posterAvatar = models.ImageField(upload_to="poster_image//%Y/%m/%d", blank=True)

    slug = models.SlugField(max_length=200, unique=True)
    numberOfImages = models.IntegerField()

    locationOfProperty = models.CharField(max_length=24)

    description = models.CharField(max_length=104)

    numberOfBedrooms = models.IntegerField()
    numberOfBathtub = models.IntegerField()
    numberOfSquareMeters = models.CharField(max_length=6)
    price = models.IntegerField()
    posterName = models.CharField(max_length=30)

    class Meta:
        ordering = ["name"]
        indexes = [
            models.Index(fields=["name"]),
        ]
        verbose_name = "realEstateUpload"
        verbose_name_plural = "realEstateUploads"

    def __str__(self):
        return self.name

    def get_absolute_url(self):
        return reverse("realEstateUpload:estate_list_by_estateUpload", args=[self.slug])
