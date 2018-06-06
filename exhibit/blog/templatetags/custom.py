from django import template
from markdownx.utils import markdownify


register = template.Library()


@register.filter
def render_markdown(text):
    return markdownify(text)
