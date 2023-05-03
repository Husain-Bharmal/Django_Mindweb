from django.contrib import admin
from django.urls import path
from mind_web import views

urlpatterns = [
    path('reg_page',views.registration, name='reg_page'),
    path('',views.loginPage, name='login_form'),
    path('login',views.loginPage, name='login'),
    path('home',views.home, name='home'),
    path('aboutus',views.aboutus, name='aboutus'),
    path('contactus', views.contactus, name='contactus'),
    path('alphabets', views.alphabets, name='alphabets'),
    path('number_table', views.number_table, name='number_table'),
    path('mathgame',views.mathgame, name='mathgame'),
    path('ADD',views.ADD, name='add'),
    path('subtract',views.subtract, name='subtract'),
    path('multiply',views.multiply, name='multiply'),
    path('divide',views.divide, name='divide'),
    path('alpha-game',views.alphagame, name='alpha-game'),
    path('alpha-song',views.alphasong, name='alpha-song'),
    path('logout',views.LogoutPage,name='logout'),
]