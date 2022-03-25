from operator import truediv
from tokenize import group
from django.contrib import admin
from django.contrib.auth.models import Group, User
from .models import Heading, Product, Profile

admin.site.site_header = "Annabel B. Dashboard"

class ProductAdmin(admin.ModelAdmin):
    list_display = ('name', 'heading')
    list_filter = ('heading',)

admin.site.register(Heading)
admin.site.register(Product, ProductAdmin)
admin.site.register(Profile)


admin.site.unregister(Group)
admin.site.unregister(User)