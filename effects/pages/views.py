from django.shortcuts import render, redirect
from django.urls import reverse
from django.contrib.auth.forms import UserCreationForm
from django.http import HttpResponse

# Create your views here.
def home_view(request):
    return render(request, 'home.html', context={})

def about_view(request):
    return render(request, 'about.html', context={})

def bg_click_view(request):
    return render(request, 'bg_click.html', context={})

def btn_click_view(request):
    return render(request, 'btn_click.html', context={})

def drag_view(request):
    return render(request, 'drag.html', context={})