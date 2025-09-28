'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "3ec584c0b524a4e17ccc08b6fb0c30de",
".git/config": "5a21542f01e52ce8d4e7e8629b3c9e34",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "7a9e819a4e451b75033d70492452a5f6",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "508d2bcae276c38b874b5e42b4e0f931",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "815bb01f9dbe39e7c9d0d92177b6dd3d",
".git/logs/refs/heads/main": "72c73a3a4b1e728e9488930a3e621006",
".git/logs/refs/remotes/origin/main": "a873e121825b0f60f2c0622005c78cbd",
".git/objects/02/4676fd436f2a67c4016bfb41550fbcf0f03186": "ebc52f09c27b68ed61cfc92cba7717e3",
".git/objects/04/33447a05b1b98ec8cdc11d8c82b89c6b3fe125": "5b7917062c785ddd35628c543e3b2d28",
".git/objects/0b/ac95ed740ee17f350483a3f3bf4e0725a4984a": "2a346d50fc698dded4f982835049e4c0",
".git/objects/10/f87c74da36443357ec05136baa3c972cdd9ad9": "c34c67a13ab41efce3fa4c828a4cbc85",
".git/objects/1a/d7683b343914430a62157ebf451b9b2aa95cac": "94fdc36a022769ae6a8c6c98e87b3452",
".git/objects/1d/d45e0dc01911c6e88c47f6501c783e91f24549": "adc420ab89ca83361703c42ae5e9a84f",
".git/objects/26/d8684098912f0a801a4a62b75fbbc5761b6506": "a6394f1611651bf24ab6bb1bbe994082",
".git/objects/37/cbbf232441c365b6edc85cd76c7a6ea5857e23": "54709d5acb9fd23999ed81afb40e912d",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4c/51fb2d35630595c50f37c2bf5e1ceaf14c1a1e": "a20985c22880b353a0e347c2c6382997",
".git/objects/4f/95071d53153fc1387c892ed823017731996663": "ba9f8085e89c6f5e8653d2527f52fcb9",
".git/objects/4f/c66164b566384aac348e4c67afed044bfc8763": "eaa4aca48df74b76b4d536bec3569f0d",
".git/objects/53/18a6956a86af56edbf5d2c8fdd654bcc943e88": "a686c83ba0910f09872b90fd86a98a8f",
".git/objects/53/3d2508cc1abb665366c7c8368963561d8c24e0": "4592c949830452e9c2bb87f305940304",
".git/objects/57/60234666646fbc76d650701b65c67a8737defe": "712843396f6ea5b2d50f9c33093cbf9e",
".git/objects/62/6a1d197ca38ba8c7d2f9b6cf35208b3a0caf06": "f135702ca5d9209a4c13fe5c191fc4da",
".git/objects/62/6d5c86a9167c77acfe928b1d18bbbae0f34a62": "edc0532b838cbe54479b2280092fa99c",
".git/objects/6a/baf821bb112685b7c6cc431186771c5c3896db": "5856228fcdb6d7dec286aa56fe77d9cb",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/70/0a67cc2d78958c6db0587707c856f8c703aa93": "1f76d75914f02b6ac635e99eb113152d",
".git/objects/70/a234a3df0f8c93b4c4742536b997bf04980585": "d95736cd43d2676a49e58b0ee61c1fb9",
".git/objects/73/c63bcf89a317ff882ba74ecb132b01c374a66f": "6ae390f0843274091d1e2838d9399c51",
".git/objects/78/1eb44b20c4f3981cf029c69b483b254b6233b8": "59c8b06016cac2c71ef149a3c48c003e",
".git/objects/85/2d5d61d891528aa09b1ce23eda93d816c821bb": "6132965f247e2ef8cf863bcc3800204a",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/5136549a2d7336ae3f2a8d33be5fa4485f02ce": "1c46c0945c328934e4fb4a3c4e2e4d08",
".git/objects/89/da6a2dfa1e2bfb4a64ccb0fcca7a01a4f670bf": "99ca30a5c895b357c11068f3b33992fe",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8e/3c7d6bbbef6e7cefcdd4df877e7ed0ee4af46e": "025a3d8b84f839de674cd3567fdb7b1b",
".git/objects/93/ac6b910780517c7e9174d5b5c0075ef43582f9": "cd6a1e30169e0a1d8e47c99bb811fd00",
".git/objects/97/288c75acf3e4c91021feb0ca6d65b1ca9e76e7": "1cc10a17adce78f44d3bcd29d7969c82",
".git/objects/9b/d3accc7e6a1485f4b1ddfbeeaae04e67e121d8": "784f8e1966649133f308f05f2d98214f",
".git/objects/a2/a314010d5ae09aa61949ae3fe3d7c80390cf68": "df7e041497f2b436d375645f65032835",
".git/objects/b6/6bf7cae082bdefdc057f9ab1f754253090fc04": "af46db7f754c286ca7b1b91480fcb148",
".git/objects/b6/887725e8fa4dd37f79e7888692c2f13d3b91b0": "b62d8bffe873060f26b3f6e34134014f",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/42acb339dca580eb6cfc261054ee20d3f780c3": "be0be338fdca0bb70c9e71fb11fa8ca4",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/6a5236065a6c0fb7193cb2bb2f538b2d7b4788": "4227e5e94459652d40710ef438055fe5",
".git/objects/be/b446b395c1847ca2c313e368f182488469e857": "96cd2b68ec6b2a5afb5a507fc77e79e4",
".git/objects/c1/67264ea5db023820746a2cb447f75910bf3d63": "55e96362c4cc909a6fa44f12cdad6bdc",
".git/objects/c2/e8ecd4a2ae698042c394382ef2130b7d5fa6c4": "dbff1f1677bcde97f912ff5ac8c27494",
".git/objects/c8/08fb85f7e1f0bf2055866aed144791a1409207": "92cdd8b3553e66b1f3185e40eb77684e",
".git/objects/d2/01c5987ee765a42149aa8d5ddc9d6145af04c5": "1105d939b92ae853f2f0ce00782a6eb8",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d5/e895707912fdd1d6f59859c63b0542d6c34d0a": "1b3024a2881a56f692d70a78c50465f0",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "9c0876641083076714600718b0dab097",
".git/objects/dc/11fdb45a686de35a7f8c24f3ac5f134761b8a9": "761c08dfe3c67fe7f31a98f6e2be3c9c",
".git/objects/dd/8e066f4f9634ac07ca6fa2b941fff4edc5e213": "c48a9cfd37d2bce5034f7b9e6b1057da",
".git/objects/e0/7ac7b837115a3d31ed52874a73bd277791e6bf": "74ebcb23eb10724ed101c9ff99cfa39f",
".git/objects/e2/67b0f441c59b4383bdef55c9e5095f41f4d0b8": "1713c53e513624aee9514ef7b3f05877",
".git/objects/e7/d4505140683671b58884ec11b6eecc8abeef62": "e92f4d54b6206eb5d4206a2010c1c809",
".git/objects/e9/474576579fbdabd26b13930a325f53f23c9ea6": "cbaaacbe3698e3b0131835b17db2da17",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f1/997bd5ecb846f16040128d24f0c35543dc413c": "277dded08b1ef36d4e2ec6e33599611c",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f2/3138942fe576ed51c1db62ef2e88e02040c13b": "b72f4f1094a5638660a9e15b984f5e98",
".git/objects/f3/f4afa386062fd7f1ed2ede07a4850a2699b460": "8e166b31354c2141bc2b25df62df745d",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/f8/d3276657162a8e399bf83d0f5393a9f92539ba": "040fb892b009832828473b0b09428f60",
".git/objects/f9/70b920e7731e2244727804947ea0b2763ea439": "d64e610b15038aa2a55135e1d5c8aa0d",
".git/ORIG_HEAD": "7b8799377ce9470f19486c962865def7",
".git/refs/heads/main": "7b8799377ce9470f19486c962865def7",
".git/refs/remotes/origin/main": "7b8799377ce9470f19486c962865def7",
"assets/AssetManifest.bin": "85e4ddc4efcd6e648c8ec0c480326c34",
"assets/AssetManifest.bin.json": "38328807fbd9790599adee32facebb6b",
"assets/AssetManifest.json": "e7d53ca40e79592f279ba327ca490fa2",
"assets/assets/images/bridge.jpg": "28ca62eb9728e6afe210c381d8a74ec7",
"assets/assets/images/flutter_dev.jpg": "d7e789c3b8bcb2b7880dd3b4b1d3edd6",
"assets/assets/images/git_hub_logo.jpg": "46d8cdfd10e7ac313804db5bda46f84c",
"assets/assets/images/hacker_rank_logo.png": "d38a06be295aab3c83c2a9611eb17c6c",
"assets/assets/images/linked_in_logo.png": "7b7886ac8ff1588ef51229454a6020e6",
"assets/assets/images/tata-neu.png": "dc88de4e21c3b9451b1ea306603770af",
"assets/assets/images/tcs_logo.jpg": "e481c2b61a126f2ed9e517b85201e9bc",
"assets/assets/images/yono_sbi.png": "94f741a662a283156419db0c30b51d14",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "eb432fa631a1348d3e8dbcb12e02bb0e",
"assets/NOTICES": "dfd4f79894ff067a695e819b82a732c6",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"favicon.png": "dd6cc365303e040a6bac2ca944506568",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"flutter_bootstrap.js": "968bd655fe47ed7762dc72122a25b724",
"icons/Icon-192.png": "dd6cc365303e040a6bac2ca944506568",
"icons/Icon-512.png": "dd6cc365303e040a6bac2ca944506568",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "acfffd1a083ede0eda1ab3d5f3f26ff8",
"/": "acfffd1a083ede0eda1ab3d5f3f26ff8",
"main.dart.js": "ad63b7cbdeb9b35c339549133cc27256",
"manifest.json": "bf24c84c3bf99672a631c4f84464e793",
"README.md": "6946e86d47921dec9231f34a5e05ed54",
"version.json": "409e960a0eba9116db7af7599217ce8f"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
      key = "/";
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
