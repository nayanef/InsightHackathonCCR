# Generated by Django 3.1.2 on 2021-01-17 16:16

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('quiz', '0002_auto_20201107_0017'),
    ]

    operations = [
        migrations.AddField(
            model_name='quizzes',
            name='background_text',
            field=models.TextField(blank=True, default=None, null=True),
        ),
    ]
