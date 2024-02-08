from django.urls import path, include
# from .views import realEstateUploadSet
from .views import realEstateUploadDetailView

from rest_framework.routers import DefaultRouter
from .views import realEstateUploadViewSet
from .views import get_image_urls



router = DefaultRouter()

router.register('realEstateUpload', realEstateUploadViewSet, basename='realEstateUpload')
# router.register('users', UserViewSet)


urlpatterns = [
    path('model/', include(router.urls)),
    path('model/realEstateUpload', realEstateUploadViewSet.as_view({'get': 'retrieve'}), name='realEstateUpload'),
    path('model/realEstateUpload/<slug>/', realEstateUploadDetailView.as_view),
    path('api/images/', get_image_urls, name='get_image_urls'),
    
    
    
]
