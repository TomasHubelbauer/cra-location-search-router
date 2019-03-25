# CRA `location.search` router

In this repository I have validated my idea for how to build a router which
would allow for SEO friendly URLs on static sites hosted in a way which doesn't
allow to configure `index.html` as a catch-all route on the hosting service.

One such example would be GitHub Pages. There is a trick to make CRA routing
work on GitHub Pages by using the `404.html` page and placing a script in it
which rewrites the current URL so that the path is encoded in the URL fragment
and redirected to `index.html`. `index.html` then can pick up the URL fragment
on load and replace it with a History API route, which looks legit.

This is handy, because it allows one to use a routing scheme which looks nice,
no `#` (except for the `404.html` to `index.html` redirect which is instant and
the browser address bar is immediately replaced using `pushState`), no `?`, just
a simple, nice URL.

The problem with this is that the `404.html` page is served with a 404 error
code, which will most likely mean that for Google, it will be considered a dead
end and won't index in search results correctly.

To work around this, I figured hash and search navigation could be used. Both
are URLs which are actually pointing to `index.html`, so the route is always
correct even if using a plain file server. In this repository I prototype the
search approach, but the hash approach would be even better. I will prototype
that in a different repo.

https://github.com/TomasHubelbauer/cra-location-hash-router
