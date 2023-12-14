from django.urls import path
from . import views
from .views import *



urlpatterns = [
    
    path('output/',views.output,name="output"),
    
     path('api/upload-csv/', CSVFileUploadView.as_view(), name='upload-csv-api'),
    



]