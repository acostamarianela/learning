from django.http.response import HttpResponse as HttpResponse, JsonResponse
from django.utils.decorators import method_decorator
from django.views import View
from .models import Company
from django.views.decorators.csrf import csrf_exempt
import json

# Create your views here.
#vista capaz d procesar las respuestas, pero esto hay que indicarlo en urls.py
class CompanyView(View):

    #este s eejecuta cada vez que se hace una peticion 
    @method_decorator(csrf_exempt)
    def dispatch(self, request, *args, **kwargs):
        return super().dispatch(request, *args, **kwargs)
    
    #listar todas las companies con ORM o puede buscar solo una
    def get(self, request, id=0):
        if(id>0):
            companies=list(Company.objects.filter(id=id).values())
            if len(companies)>0:
                #companies me devuelve una lista cno un solo valor, por eso es [0]
                company=companies[0]
                datos={'message':'Success', 'company': company}
            else:
                datos={'message':'Company not found...'} 
            return JsonResponse(datos)
        else:
            companies=list(Company.objects.values())
            if len(companies)>0:
                #esto devuelve un JSON
                datos={'message':'Success', 'companies': companies}
            else:
                datos={'message':'Companies not found...'} 

            return JsonResponse(datos)
    
    def post(self, request):
        #print(request.body)
        #el request ese es un json y con lo siguiente lo convertimos a un diccionario de py:
        jd=json.loads(request.body)
        #print(jd)
        #con un diccionario de py es mas facil el acceso a los datos
        Company.objects.create(name=jd['name'], website=jd['website'], fundation=jd['fundation'])
        datos={'message':'Success'}
        return JsonResponse(datos)

    def put(self, request, id):
        jd=json.loads(request.body)
        companies=list(Company.objects.filter(id=id).values())
        if len(companies)>0:
            company=Company.objects.get(id=id)
            company.name=jd['name']
            company.website=jd['website']
            company.fundation=jd['fundation']
            company.save()
            datos={'message':'Success'}
        else:
            datos={'message':'Company not found...'}
        return JsonResponse(datos)
        

    def delete(self, request, id):
        companies=list(Company.objects.filter(id=id).values())
        if len(companies)>0:
            Company.objects.filter(id=id).delete()
            datos={'message':'Success'}
        else:
            datos={'message':'Company not found...'}
        return JsonResponse(datos)