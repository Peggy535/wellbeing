---
title: 'JH - Blog'
layout: 'layouts/feed.html'
pagination:
  data: collections.blog
  size: 4
permalink: 'blog{% if pagination.pageNumber > 0 %}/page/{{ pagination.pageNumber }}{% endif %}/index.html'
paginationPrevText: 'Newer posts'
paginationNextText: 'Older posts'
paginationAnchor: '#post-list'
---
A summary of blog content here....