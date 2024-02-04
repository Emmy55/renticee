from django.db import models
from django.urls import reverse
# Create your models here.

from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin, Group, Permission
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

class Category(models.Model):

    name = models.CharField(max_length=200)

    image = models.ImageField(upload_to='category_image//%Y/%m/%d',
                              blank=True)

    slug = models.SlugField(max_length=200,
                            unique=True)

    class Meta:
        ordering = ['name']
        indexes = [
            models.Index(fields=["name"]),
        ]
        verbose_name = 'category'
        verbose_name_plural = 'categories'

    def __str__(self):
        return self.name

    def get_absolute_url(self):
        return reverse('kobosh:product_list_by_category',
                       args=[self.slug])

