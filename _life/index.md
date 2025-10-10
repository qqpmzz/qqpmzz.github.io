---
layout: default
title: 일상
permalink: /life/
---

<h2 class="page-section-title">일상</h2>

<div style="margin-top: 20px;">
{% assign life_col = site.collections | where: "label", "life" | first %}
{% for post in life_col.docs %}
  {% if post.date %}
  <div class="page-post-card">
    <h3>
      <a href="{{ post.url }}">{{ post.title }}</a>
    </h3>
    <div class="page-post-meta">
      {{ post.date | date: "%Y-%m-%d" }}
    </div>
  </div>
  {% endif %}
{% endfor %}
</div>

{% assign post_count = 0 %}
{% for post in life_col.docs %}
  {% if post.date %}
    {% assign post_count = post_count | plus: 1 %}
  {% endif %}
{% endfor %}
{% if post_count == 0 %}
<p class="page-no-posts">아직 글이 없습니다.</p>
{% endif %}
