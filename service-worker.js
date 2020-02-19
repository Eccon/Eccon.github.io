/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["/about/index.html","8a29627b350033365d17ec1ec4a49af1"],["/archives/2018/03/index.html","397b41b6ed0e2ce78409e5427f713b5e"],["/archives/2018/04/index.html","daa8bf4419be4f337e87293abef14ae0"],["/archives/2018/05/index.html","a8dccbf88079019c1b857c9989253664"],["/archives/2018/12/index.html","ff3f0c4cf0920550df5c5d987b7ef6de"],["/archives/2018/index.html","aa354e7b772269bc6719c9f40ab91ffa"],["/archives/2019/06/index.html","80c1fa93ad0802320af04f7f3dd2c7c3"],["/archives/2019/11/index.html","cdf0c87f0df4f612a95255d1714b0b5b"],["/archives/2019/12/index.html","2e80a7e4fa8eb03cc60500e788c72dd9"],["/archives/2019/index.html","2b22d7190ac6b93c0e863caa0b192ad4"],["/archives/index.html","3ecc23c76a155449cfdeb0f6f57165af"],["/archives/page/2/index.html","7a410305f7b921523ecac32858d8ca3f"],["/categories/index.html","e3ae31591e0f135e5adbe3a0fa27c986"],["/categories/其他/index.html","a982516eeee6cc1108c768bbc9901886"],["/categories/教程/index.html","d0f51615a10d5a74506f9ce927db5d08"],["/categories/教程/记录/index.html","beafd2f6d17685aca742205f801bccad"],["/categories/站点配置/index.html","125a43d622a158f386046271bbcb5342"],["/css/main.css","1ee05c5e774e1cda3ca854c964ab262e"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/upyunlogo.jpg","247c915bff17b8dc5688dbbbdc58a54c"],["/index.html","a3a8b2919bba7ada9f9adf64be4b8e98"],["/js/bookmark.js","9631924f730be981fe8f8c14eb2c0afe"],["/js/fireworks.js","0e16ac0099b90bd21cd75432570f8e89"],["/js/local-search.js","e44cdbcfb4a03d11c15e1c081d23566f"],["/js/love.js","5a87dd19400b2870ef6734f56cfe2208"],["/js/next-boot.js","c47528c6b7d3020a3dfd391c262dfebd"],["/js/schemes/pisces.js","449ab6c338dc543eec24a7151b0456ab"],["/js/utils.js","8b8d9907a5346eb9deaa5c6609cf1a90"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/page/2/index.html","397b14f53f21437928b694da75d5fa2a"],["/post/12860.html","96bf1141707b4b49da92b6cb3eeaede9"],["/post/15927.html","f0cfc9421e42cbbba382f1567e401ea0"],["/post/23774.html","7d211385d26a38a27f3b595c5246d744"],["/post/29930.html","519f1545eb2b849b2ebcc4273acdc3aa"],["/post/33547.html","bc1b5b4e1188a4ce79bea41004848443"],["/post/41395.html","cc7b4d5e5539126a4bca872fc9881128"],["/post/48120.html","ef620c7a2f2ce5b949433575ae6b3e2d"],["/post/5086.html","cc52a40686303ad0e6158e39230538c8"],["/post/60589.html","4f88663fd08c90d6d8a6fbd873b48897"],["/post/6331.html","dd9a200dbf0545ccb127e914cbdf0199"],["/post/6646.html","2d715a472ce70e197f3eba84643a972b"],["/tags/Git/index.html","3cda963d300bc8085a51eec16d4de35f"],["/tags/Gitalk/index.html","e343ef5d82f3eb2ad13540d934cdfe4b"],["/tags/Github/index.html","61c7d2bda972807822386962e2d0b24e"],["/tags/Hexo/index.html","70bc524be02a8e29e0fc87a91b516b4b"],["/tags/Proxy/index.html","1c8233bebfafc2e0463c04278ddc1581"],["/tags/brew/index.html","8acb42651b70dac7118b879720896456"],["/tags/git/index.html","5267f2b66f47ddd71c96bbf3fe8aedff"],["/tags/hexo/index.html","f7b5954e8e4a17575af2e8c66cae13f3"],["/tags/index.html","69edf6feb2bf206dfa5a80ef7e7bf40d"],["/tags/proxifier/index.html","b33124d6bc515281718fd4582adb5ced"],["/tags/proxychains4/index.html","acee58570417f16ba40351de9d611476"],["/tags/wordpress/index.html","94abc59004a3a8c1efdb9075149de418"],["/tags/代理/index.html","8542edcfcb0e99014bb143dd9bf39ff8"],["/tags/感想/index.html","e376bf64433ce8b93567014a01bfc7d0"],["/tags/终端/index.html","0a35bb2c2171011376a5fcc4ae68ca92"],["/tags/记录/index.html","0f3923cb9c2bde26bd0946581e130714"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function(originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function(originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







