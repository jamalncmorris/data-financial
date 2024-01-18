from django.urls import path

from . import views

app_name = "api"
urlpatterns = [
    path("get/", views.GetDataView.as_view(), name="get_data"),
]
