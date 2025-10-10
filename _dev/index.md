---
layout: default
title: 개발
permalink: /dev/
---

<h2 class="page-section-title">개발</h2>

<div style="margin-top: 20px;">
{% assign dev_col = site.collections | where: "label", "dev" | first %}
{% for post in dev_col.docs %}
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
{% for post in dev_col.docs %}
  {% if post.date %}
    {% assign post_count = post_count | plus: 1 %}
  {% endif %}
{% endfor %}
{% if post_count == 0 %}
<p class="page-no-posts">아직 글이 없습니다.</p>
{% endif %}
