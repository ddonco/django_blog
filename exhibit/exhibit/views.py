from django.views.generic import TemplateView
from django.utils import timezone
from blog.models import Post


class HomePage(TemplateView):
    template_name = 'index.html'

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['latest_posts'] = Post.objects.filter(publish_date__lte=timezone.now()).order_by('-publish_date')[:3]
        return context


class AboutView(TemplateView):
    template_name = 'about.html'
