from django.urls import path 
from .views import CompanyView

urlpatterns = [
    #esta url no esta preparada para recibir un parametro (como por ej un id de compania)
    path('companies/', CompanyView.as_view(), name='companies_list'),
    #esta ruta va a servir para buscar actualizar y eliminar por id 
    path('companies/<int:id>', CompanyView.as_view(), name='companies_process')
]

#como tercer parametro el nombre para establecer a la url
#esto hay que registrarlo en el archivo urls.py del proyecto