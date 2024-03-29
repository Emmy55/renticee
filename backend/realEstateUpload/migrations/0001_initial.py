# Generated by Django 5.0.1 on 2024-02-05 14:51

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='EstateUpload',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=200)),
                ('image', models.ImageField(blank=True, upload_to='estateUpload_image//%Y/%m/%d')),
                ('image1', models.ImageField(blank=True, upload_to='estateUpload_image//%Y/%m/%d')),
                ('image2', models.ImageField(blank=True, upload_to='estateUpload_image//%Y/%m/%d')),
                ('image3', models.ImageField(blank=True, upload_to='estateUpload_image//%Y/%m/%d')),
                ('image4', models.ImageField(blank=True, upload_to='estateUpload_image//%Y/%m/%d')),
                ('image5', models.ImageField(blank=True, upload_to='estateUpload_image//%Y/%m/%d')),
                ('image6', models.ImageField(blank=True, upload_to='estateUpload_image//%Y/%m/%d')),
                ('image7', models.ImageField(blank=True, upload_to='estateUpload_image//%Y/%m/%d')),
                ('posterAvatar', models.ImageField(blank=True, upload_to='poster_image//%Y/%m/%d')),
                ('slug', models.SlugField(max_length=200, unique=True)),
                ('numberOfImages', models.IntegerField()),
                ('locationOfProperty', models.CharField(max_length=24)),
                ('description', models.CharField(max_length=104)),
                ('numberOfBedrooms', models.IntegerField()),
                ('numberOfBathtub', models.IntegerField()),
                ('numberOfSquareMeters', models.CharField(max_length=6)),
                ('price', models.IntegerField()),
                ('posterName', models.CharField(max_length=30)),
            ],
            options={
                'verbose_name': 'estateUpload',
                'verbose_name_plural': 'estateUploads',
                'ordering': ['name'],
                'indexes': [models.Index(fields=['name'], name='realEstateU_name_c44975_idx')],
            },
        ),
    ]
