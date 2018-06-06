from django.contrib import admin
from django.db import models
from markdownx.widgets import AdminMarkdownxWidget
from blog.models import Post, Comment


# class MarkdownxModelAdmin(admin.ModelAdmin):
#     formfield_overrides = {
#         models.TextField: {'widget': AdminMarkdownxWidget},
#     }


# Register your models here.
admin.site.register(Post)
admin.site.register(Comment)
#admin.site.register(MarkdownxModelAdmin)
