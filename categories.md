---
layout: default
title: 전체 카테고리
permalink: /categories/
---

<h2 class="page-section-title">개발</h2>

{% assign dev_col = site.collections | where: "label", "dev" | first %}
<div style="margin: 20px 0;">
{% assign has_posts = false %}
{% for post in dev_col.docs %}
  {% unless post.url == '/dev/' or post.url == '/dev/index.html' %}
  {% if post.date %}
    {% assign has_posts = true %}
    <div class="page-post-card">
      <h3>
        <a href="{{ post.url }}">{{ post.title }}</a>
      </h3>
      <div class="page-post-meta">
        {{ post.date | date: "%Y-%m-%d" }}
      </div>
    </div>
  {% endif %}
  {% endunless %}
{% endfor %}

{% unless has_posts %}
<p class="page-no-posts">아직 글이 없습니다.</p>
{% endunless %}
</div>

<hr style="margin: 30px 0; border: none; border-top: 1px solid var(--border-color);">

<h2 class="page-section-title">일상</h2>

{% assign life_col = site.collections | where: "label", "life" | first %}
<div style="margin: 20px 0;">
{% assign has_posts = false %}
{% for post in life_col.docs %}
  {% unless post.url == '/life/' or post.url == '/life/index.html' %}
  {% if post.date %}
    {% assign has_posts = true %}
    <div class="page-post-card">
      <h3>
        <a href="{{ post.url }}">{{ post.title }}</a>
      </h3>
      <div class="page-post-meta">
        {{ post.date | date: "%Y-%m-%d" }}
      </div>
    </div>
  {% endif %}
  {% endunless %}
{% endfor %}

{% unless has_posts %}
<p class="page-no-posts">아직 글이 없습니다.</p>
{% endunless %}
</div>
