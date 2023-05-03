
from django.shortcuts import render,HttpResponse,redirect
from django.contrib.auth.models import User
from django.contrib.auth import authenticate,login,logout
from django.contrib.auth.decorators import login_required
from django.contrib import messages

# Create your views here.
@login_required(login_url='login')
def home(request):
    return render(request, 'index.html')
# def index(request):
#     return render(request, 'index.html')



def aboutus(request):
    return render(request, 'aboutus.html')

def contactus(request):
    return render(request, 'contactus.html')

def alphabets(request):
    return render(request, 'alphabets.html')

def number_table(request):
    return render(request, 'number_table.html')

def mathgame(request):
    return render(request, 'ADD.html')

def ADD(request):
    return render(request, 'ADD.html')

def subtract(request):
    return render(request, 'subtract.html')

def multiply(request):
    return render(request, 'multiply.html')

def divide(request):
    return render(request, 'divide.html')

def alphagame(request):
    return render(request, 'alpha-game.html')

def alphasong(request):
    return render(request, 'alpha-song.html')

def registration(request):
    if request.method=='POST':
        name=request.POST.get('name')
        phone_no =request.POST.get('phoneno')
        age =request.POST.get('age')
        email=request.POST.get('email')
        pass1=request.POST.get('password1')
        pass2=request.POST.get('password2')
        # print( name,phone_no,age,email,pass1,pass2)

        if pass1!=pass2:
            return HttpResponse ("passwrod or Password is incorrect!!!")
            # messages.error(request, "Password and Confirm password must be same")
            # return redirect('registration')
        else:
            my_user=User.objects.create_user(name,email,pass1)
            my_user.save()
            return redirect('login_form')
    return render(request,'reg_page.html')

def loginPage(request):
    if request.method=='POST':
        name=request.POST.get('name')
        password=request.POST.get('password')
        user=authenticate(request,username=name,password=password)
        if user is not None:
            login(request,user)
            return redirect('home')
        else:
            return HttpResponse ("Username or Password is incorrect!!!")
    return render (request,'login_form.html')

def LogoutPage(request):
    logout(request)
    return redirect('login')
