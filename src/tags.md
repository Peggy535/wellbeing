---
title: 'Tag Archive'
layout: 'layouts/feed.html'
pagination:
    data: collections
    size: 1
    alias: tag
    filter: ['all', 'nav', 'blog']
permalink: '/tag/{{ tag | slug }}/'
---