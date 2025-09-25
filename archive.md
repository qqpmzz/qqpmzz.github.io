---
layout: page
title: Archive
permalink: /archive/
---

# 📚 글 목록

{% for post in site.posts %}
  <div class="post-item">
    <h3><a href="{{ post.url }}">{{ post.title }}</a></h3>
    <p class="post-meta">
      <time>{{ post.date | date: "%Y년 %m월 %d일" }}</time>
      {% if post.categories %}
        • {{ post.categories | join: ', ' }}
      {% endif %}
    </p>
    {% if post.excerpt %}
      <p>{{ post.excerpt | strip_html | truncate: 200 }}</p>
    {% endif %}
  </div>
{% endfor %}