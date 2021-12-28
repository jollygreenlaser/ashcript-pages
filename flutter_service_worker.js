'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "62e1efb6943c1df6a57910e26cdcab73",
"index.html": "351668107aba900378a02274575b5702",
".": "351668107aba900378a02274575b5702",
"CNAME": "cd0cc1bda7e9379a58652cba88a1d793",
"main.dart.js": "b2b8a9755501a0b4f5404f2042ce334e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "d2f6fc06cb22261d1dea71ab228407f8",
".git/ORIG_HEAD": "48024f8534e5eb4bb807906460ce304c",
".git/config": "24b51e83e8231bedc47ff915560437e9",
".git/objects/61/5ad571869a06273b751e03b35bc793c2272e8d": "8498443e76c5336f95176cfbd5c47b13",
".git/objects/0d/fc94acb29abacc4aace7e7251a13ba3ea9d374": "bd9a78cc728d38cb1adb97b9aa545a11",
".git/objects/57/ea7660f969b5e0ec4ae5eb6162de49a8a7b09a": "9b8850f2af4f29300299f8d6030d29a6",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/03/ab37b117e94f04f3c40f6899cc4c09f04b8fec": "fd42a62f5140e85222c8bef890700e09",
".git/objects/9b/d5739cb6ecf1aa74706a0f71c7c4270b3a70e8": "f4c5bcc13447ec7b56d862de5d597316",
".git/objects/9e/083ea1e3b88d458940cc1ebbfec32859255333": "69adbffd64dc0a6e0343fe97d4d382d1",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/51/116cc6b735a8859fe1ccec948c6fec051bd4a0": "e913bd614049f2cfb45970ef5ea882df",
".git/objects/94/98d1198023f96a6a2cb53ec56d86b7c57918da": "d84365c3dc715624bb1afde8eae9befb",
".git/objects/34/93da2caaf8e4716e21f6e0fe7c5a4ab5fdf1be": "2b4183b30b6c0e2e7b3fd7621c085145",
".git/objects/5a/6ef19725771b69c63f52cbba862a2a29268d08": "16b3006132dc1ffde4e107c09c2b57f7",
".git/objects/05/044f23ee260fa84b5945dfb592f89d70d872d9": "bdf80c158b30d12a1a062daa6669d799",
".git/objects/a3/911fdfed9817e997610b6c296d0aa4fe53bb53": "d79bfe5b88b60e9101a1acba418f3f8d",
".git/objects/ad/8174d3e3649c8b191fe1b0ea0e3dd336922997": "f09993e837f76db1ad906bf58a7bad2d",
".git/objects/b3/607a87f82610029fac0325960e2c67733a9b21": "7c0c0a5561137133e7fde2c2dee67ca0",
".git/objects/a5/61e586342423c9a00e5668ab7d5ceac419b409": "d2ad0fb840948c3eb1827eb7cbd83292",
".git/objects/d6/70c6bc3157fe5d0b370e852ca91224c0fe2fa7": "3977861fee792cd8a175824ee0d7382b",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/e5/900f8cf143cb03dd9a44d29d5e56a169da65c3": "34e7a1720b984544e480a5f76b1ffe7d",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ee/0755cf425f2427b6887a75a3194651fafd2370": "cdbeaec28d0fcd0a294ece6faf6e0eb3",
".git/objects/ee/75f6a75be091f0e8685d02810d88acbae6231e": "f59b2914fb7f3310043bea08eef510f2",
".git/objects/ee/559219f55a6e95be2bfb19ae0dd6a9d5d89202": "fb22129c52247191028a75659d226108",
".git/objects/fc/6b84151e51ef071075fc6aff3a3da442cbef75": "21b1a16e482ced8873e7acf1abbe8c84",
".git/objects/fd/3868f693b826d8c1711a220d001089a5d20777": "a423c054fbeb8fed211635c63e98673c",
".git/objects/f2/c7dddb8d2f864ac2c56afbd7c8893a205e6d72": "fb0f807da4fd57be163c91b020e37a6c",
".git/objects/c8/9a05beb51d108836c6eafb7cb0cab4d5f0c324": "2641d2502bbb724d8d689cabaad737a0",
".git/objects/18/42844f68ecf1ac91f300139c74245f42681298": "9e3639e305f1b81dc8e0288bd47ed135",
".git/objects/27/3ef8a447a4cda9770657af341b1ee6707b6bc2": "52722f0a9c39c7418ec834e421c7154d",
".git/objects/4b/adde818fb19cd45e06321612fceab8df4d959d": "6f503a09c8f976c47516b6fa3902f4d6",
".git/objects/7d/f90b2b3de6f88d180bf6961779715eeb609a81": "6f257bcba82f33f9f7c9300118d60420",
".git/objects/7c/4c0b935f0b8267bd588fc566a694db37f56e1d": "e015b528f076f8952f57e570ed959e14",
".git/objects/89/dae4ff870a6d7d4bb0ccf5fc5d1f7e56d0614e": "f185acf8a51e643c402b81e1b7cf5aae",
".git/objects/80/4ec16893dc99772f3a043f274f15fc91024a62": "1d114931ca5931bda88b88610828fcb5",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/10/c592387590d59fcf65db4ba6f1ed16fc5268a1": "d0a9f9fc72af10abe877f4555f6bc862",
".git/objects/10/f522b93d8d264b1f3a7cfa3095212e6e490625": "c0b7e741dd5cc90e8a777f163418ab22",
".git/objects/4d/7f6fb4333ac88431f2265435504ada99661d18": "b4b3cbdb1e6d14100a558604d88ad3f7",
".git/objects/4d/0d20a4cab337935396650dc24636fffe84c00d": "8074d959639399eddd5eedc2d5fb9f7a",
".git/objects/2a/2f7a37ec60da5ccd2ec3e95d7e93f7adae0aa6": "92edf4b577eec8870502000d98b97b01",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/88/798f737ed2376b30a3008a98e1a9dbbcf7cb75": "ab4acf7d327372b79e97b7e5d5201f86",
".git/objects/9a/00dcd9a9b3c7f7db27d08c3a2e3b0c1f0ad2c2": "82af6bebc3f826e2e18303472d3eb5a2",
".git/objects/36/b9fbb51027f98503944f4f9e5ad9050b3550d3": "947a33a1598bef5595b208cdeef95646",
".git/objects/53/9fd46378acce13efb7c65eac5d2b29e6c2af6c": "04070f648470ef6ff97bd19e22de09b0",
".git/objects/01/9775e399dc2138286a264f07b276e991fe4fe3": "04bc500ac95585a04f2bd8ff2eee937e",
".git/objects/90/fa7a6fa9dbbd1a3a14696aeffaa02a32a21668": "f37a15dabf88a9234575f64d119d4abb",
".git/objects/d5/b8d196b8dc5827d256b2e70b9f4accdbc54c40": "cd785b57568f098a47d84d79512ae0cd",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/ef/78a19d1957f0ab03f1db9c226e702005db14c8": "93d55d5faa68ccf11d9f1c817414a6b9",
".git/objects/e1/e5dea56930bde331a9938597b1255b34976968": "ca51dc898453aade50e5bf64b485d0a3",
".git/objects/e6/b1c1c2e442db881187fb137ee2e6a24745ea5e": "20f2910fb46b37d44ad853df7a949ee8",
".git/objects/f9/0a9e2d0f0f2e1546426d682dd9a5e7ad992854": "335a78c2a22671d9906edc8de0b696c9",
".git/objects/c2/34c86417a2b03ef98a207a043994d9b17d4ceb": "00608178c81fcb821263e8210cf92b12",
".git/objects/e9/846c706b1700b27640296cf2653c03e3ca8282": "a58585502c91b69cc3931e85bee311e9",
".git/objects/e0/f92e6d4a538281f1cb80869b5f1efca974da6b": "91322e309260a130c08e8e5cd9476fd6",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/41/477347de82dc4e1084daea68fa4dc7a5d0d2b1": "64cb53b0469ab723c527a31da616fe92",
".git/objects/83/4036d7e43eb459529f3b5c20a71f086e177139": "ad2149ce93da44aa7e0db84e08169534",
".git/objects/1e/5f4d6c16a691d3b789b70d93eb06e8e859f215": "d729a361927590fa23d074b2f37f373b",
".git/objects/23/9d3ce3d436631f7197dd26a4fda6db5ae53a68": "27094a8f5274689449e8aa9049bf752d",
".git/objects/1c/3fe550971d7369b15054916c0db998c38f0721": "51f32f8416824ddebbd8d61a62845c8d",
".git/objects/82/b3242711f70ab9a46287c3e81e9399d4d75fa2": "f2651abf0cb984f0c46125503f670b1a",
".git/objects/49/69169de7aab7a87ad52ba943aa85226b6248dd": "56a74d3fba19645b4c54063d46e60bee",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "362234f3f39937e19baa886925b3d90c",
".git/logs/refs/heads/master": "4d3e55002d3900c80be74091532e5fd6",
".git/logs/refs/remotes/origin/master": "02a2fe808b2c614ccff119abf17e4dc1",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/master": "48024f8534e5eb4bb807906460ce304c",
".git/refs/remotes/origin/master": "48024f8534e5eb4bb807906460ce304c",
".git/index": "0798a2319f0ac499928f4a8d02c7b9ad",
".git/COMMIT_EDITMSG": "a556a7a8eb8d2cde5e6495088c489ec6",
".git/FETCH_HEAD": "cac5b4bc623a43a5db2b616a2b461d9e",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/NOTICES": "172661f7a237bd44c35101faf594c151",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"canvaskit/canvaskit.js": "43fa9e17039a625450b6aba93baf521e",
"canvaskit/profiling/canvaskit.js": "f3bfccc993a1e0bfdd3440af60d99df4",
"canvaskit/profiling/canvaskit.wasm": "a9610cf39260f60fbe7524a785c66101",
"canvaskit/canvaskit.wasm": "04ed3c745ff1dee16504be01f9623498"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  ".",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = ".";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = ".";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
