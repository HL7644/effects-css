"""effects URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from pages.views import home_view, about_view, bg_click_view, btn_click_view, drag_view

app_name='effects'
urlpatterns = [
    path('admin/', admin.site.urls),

    path('', home_view, name='home_view'),
    path('about/', about_view, name='about_view'),
    path('bg_click/', bg_click_view, name='bg_click_view'),
    path('btn_click/', btn_click_view, name='btn_click_view'),
    path('drag/', drag_view, name='drag_view')

]
