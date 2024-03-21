from django.http import HttpResponse

def index(request):
    return HttpResponse("<h1>Hola Mundo</h1>") #ahora tenemos que habilitar una ruta para esta funcion que lo hacemos en urls.py