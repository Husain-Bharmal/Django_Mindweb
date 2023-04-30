from django.shortcuts import render, HttpResponse

# Create your views here.
def index(request):
    return render(request, 'index.html')

def home(request):
    return render(request, 'index.html')

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

