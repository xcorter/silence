from django.shortcuts import render
from django.views.generic import TemplateView
from main.models import *
from django.http import HttpResponse


class IndexView(TemplateView):
    template_name = "index.html"


def create_comment(request):
    if request.method == 'POST':
        text = request.POST.get('comment')
        comment = Comment(text=text)
        comment.save()
    return HttpResponse('OK')