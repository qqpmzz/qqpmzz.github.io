---
layout: default
title: 최신 글
permalink: /recent/
---

<h2 class="page-section-title">최신 글</h2>

<div style="margin-top: 20px;">
{% assign dev_col = site.collections | where: "label", "dev" | first %}
{% assign life_col = site.collections | where: "label", "life" | first %}
{% assign all_docs = dev_col.docs | concat: life_col.docs | sort: 'date' | reverse %}

{% assign has_posts = false %}
{% for post in all_docs %}
  {% unless post.url == '/dev/' or post.url == '/dev/index.html' or post.url == '/life/' or post.url == '/life/index.html' %}
  {% if post.date %}
    {% assign has_posts = true %}
    <div class="page-post-card">
      <h3>
        <a href="{{ post.url }}">{{ post.title }}</a>
      </h3>
      <div class="page-post-meta">
        {{ post.date | date: "%Y-%m-%d" }}
        {% if post.collection %}
        <span class="category-tag">
          {% if post.collection == "dev" %}개발{% elsif post.collection == "life" %}일상{% endif %}
        </span>
        {% endif %}
      </div>
    </div>
  {% endif %}
  {% endunless %}
{% endfor %}

{% unless has_posts %}
<p class="page-no-posts">아직 글이 없습니다.</p>
{% endunless %}
</div>
