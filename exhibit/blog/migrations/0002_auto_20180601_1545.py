# Generated by Django 2.0.5 on 2018-06-01 22:45

from django.db import migrations
import markdownx.models


class Migration(migrations.Migration):

    dependencies = [
        ('blog', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='post',
            name='text',
            field=markdownx.models.MarkdownxField(),
        ),
    ]
