# Generated by Django 5.0.1 on 2024-02-06 22:28

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('realEstateUpload', '0001_initial'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='EstateUpload',
            new_name='realEstateUpload',
        ),
        migrations.AlterModelOptions(
            name='realestateupload',
            options={'ordering': ['name'], 'verbose_name': 'realEstateUpload', 'verbose_name_plural': 'realEstateUploads'},
        ),
        migrations.RenameIndex(
            model_name='realestateupload',
            new_name='realEstateU_name_f612c4_idx',
            old_name='realEstateU_name_c44975_idx',
        ),
    ]
