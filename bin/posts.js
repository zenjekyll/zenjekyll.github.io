---
layout: compress
---

posts = [
{% for post in site.posts %}
{
    judul: "{{ post.title | replace: '"', '' }}",
    link: "{{ post.url }}"
},
{% endfor %}
 ]