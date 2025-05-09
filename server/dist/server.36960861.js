// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (
  modules,
  entry,
  mainEntry,
  parcelRequireName,
  externals,
  distDir,
  publicUrl,
  devServer
) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var importMap = previousRequire.i || {};
  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        if (externals[name]) {
          return externals[name];
        }
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        globalObject
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.require = nodeRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.distDir = distDir;
  newRequire.publicUrl = publicUrl;
  newRequire.devServer = devServer;
  newRequire.i = importMap;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  // Only insert newRequire.load when it is actually used.
  // The code in this file is linted against ES5, so dynamic import is not allowed.
  // INSERT_LOAD_HERE

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });
    }
  }
})({"io2N8":[function(require,module,exports,__globalThis) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SERVER_PORT = 1234;
var HMR_SECURE = false;
var HMR_ENV_HASH = "439701173a9199ea";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "ba2beaa036960861";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_SERVER_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_SERVER_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , disposedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ , bundleNotFound = false;
function getHostname() {
    return HMR_HOST || (typeof location !== 'undefined' && location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || (typeof location !== 'undefined' ? location.port : HMR_SERVER_PORT);
}
// eslint-disable-next-line no-redeclare
let WebSocket = globalThis.WebSocket;
if (!WebSocket && typeof module.bundle.root === 'function') try {
    // eslint-disable-next-line no-global-assign
    WebSocket = module.bundle.root('ws');
} catch  {
// ignore.
}
var hostname = getHostname();
var port = getPort();
var protocol = HMR_SECURE || typeof location !== 'undefined' && location.protocol === 'https:' && ![
    'localhost',
    '127.0.0.1',
    '0.0.0.0'
].includes(hostname) ? 'wss' : 'ws';
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if (!parent || !parent.isParcelRequire) {
    // Web extension context
    var extCtx = typeof browser === 'undefined' ? typeof chrome === 'undefined' ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes('test.js');
    }
    var ws;
    if (HMR_USE_SSE) ws = new EventSource('/__parcel_hmr');
    else try {
        // If we're running in the dev server's node runner, listen for messages on the parent port.
        let { workerData, parentPort } = module.bundle.root('node:worker_threads') /*: any*/ ;
        if (workerData !== null && workerData !== void 0 && workerData.__parcel) {
            parentPort.on('message', async (message)=>{
                try {
                    await handleMessage(message);
                    parentPort.postMessage('updated');
                } catch  {
                    parentPort.postMessage('restart');
                }
            });
            // After the bundle has finished running, notify the dev server that the HMR update is complete.
            queueMicrotask(()=>parentPort.postMessage('ready'));
        }
    } catch  {
        if (typeof WebSocket !== 'undefined') try {
            ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/');
        } catch (err) {
            // Ignore cloudflare workers error.
            if (err.message && !err.message.includes('Disallowed operation called within global scope')) console.error(err.message);
        }
    }
    if (ws) {
        // $FlowFixMe
        ws.onmessage = async function(event /*: {data: string, ...} */ ) {
            var data /*: HMRMessage */  = JSON.parse(event.data);
            await handleMessage(data);
        };
        if (ws instanceof WebSocket) {
            ws.onerror = function(e) {
                if (e.message) console.error(e.message);
            };
            ws.onclose = function() {
                console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
            };
        }
    }
}
async function handleMessage(data /*: HMRMessage */ ) {
    checkedAssets = {} /*: {|[string]: boolean|} */ ;
    disposedAssets = {} /*: {|[string]: boolean|} */ ;
    assetsToAccept = [];
    assetsToDispose = [];
    bundleNotFound = false;
    if (data.type === 'reload') fullReload();
    else if (data.type === 'update') {
        // Remove error overlay if there is one
        if (typeof document !== 'undefined') removeErrorOverlay();
        let assets = data.assets;
        // Handle HMR Update
        let handled = assets.every((asset)=>{
            return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
        });
        // Dispatch a custom event in case a bundle was not found. This might mean
        // an asset on the server changed and we should reload the page. This event
        // gives the client an opportunity to refresh without losing state
        // (e.g. via React Server Components). If e.preventDefault() is not called,
        // we will trigger a full page reload.
        if (handled && bundleNotFound && assets.some((a)=>a.envHash !== HMR_ENV_HASH) && typeof window !== 'undefined' && typeof CustomEvent !== 'undefined') handled = !window.dispatchEvent(new CustomEvent('parcelhmrreload', {
            cancelable: true
        }));
        if (handled) {
            console.clear();
            // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
            if (typeof window !== 'undefined' && typeof CustomEvent !== 'undefined') window.dispatchEvent(new CustomEvent('parcelhmraccept'));
            await hmrApplyUpdates(assets);
            hmrDisposeQueue();
            // Run accept callbacks. This will also re-execute other disposed assets in topological order.
            let processedAssets = {};
            for(let i = 0; i < assetsToAccept.length; i++){
                let id = assetsToAccept[i][1];
                if (!processedAssets[id]) {
                    hmrAccept(assetsToAccept[i][0], id);
                    processedAssets[id] = true;
                }
            }
        } else fullReload();
    }
    if (data.type === 'error') {
        // Log parcel errors to console
        for (let ansiDiagnostic of data.diagnostics.ansi){
            let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
            console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
        }
        if (typeof document !== 'undefined') {
            // Render the fancy html overlay
            removeErrorOverlay();
            var overlay = createErrorOverlay(data.diagnostics.html);
            // $FlowFixMe
            document.body.appendChild(overlay);
        }
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="${protocol === 'wss' ? 'https' : 'http'}://${hostname}:${port}/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, '') : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + '</div>').join('')}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ''}
      </div>
    `;
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if (typeof location !== 'undefined' && 'reload' in location) location.reload();
    else if (typeof extCtx !== 'undefined' && extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
    else try {
        let { workerData, parentPort } = module.bundle.root('node:worker_threads') /*: any*/ ;
        if (workerData !== null && workerData !== void 0 && workerData.__parcel) parentPort.postMessage('restart');
    } catch (err) {
        console.error("[parcel] \u26A0\uFE0F An HMR update was not accepted. Please restart the process.");
    }
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute('href');
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', // $FlowFixMe
    href.split('?')[0] + '?' + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout || typeof document === 'undefined') return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === 'js') {
        if (typeof document !== 'undefined') {
            let script = document.createElement('script');
            script.src = asset.url + '?t=' + Date.now();
            if (asset.outputFormat === 'esmodule') script.type = 'module';
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === 'function') {
            // Worker scripts
            if (asset.outputFormat === 'esmodule') return import(asset.url + '?t=' + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + '?t=' + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != 'undefined' && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        }
        // Always traverse to the parent bundle, even if we already replaced the asset in this bundle.
        // This is required in case modules are duplicated. We need to ensure all instances have the updated code.
        if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    checkedAssets = {};
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else if (a !== null) {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) {
            bundleNotFound = true;
            return true;
        }
        return hmrAcceptCheckOne(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return null;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    if (!cached) return true;
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
    return false;
}
function hmrDisposeQueue() {
    // Dispose all old assets.
    for(let i = 0; i < assetsToDispose.length; i++){
        let id = assetsToDispose[i][1];
        if (!disposedAssets[id]) {
            hmrDispose(assetsToDispose[i][0], id);
            disposedAssets[id] = true;
        }
    }
    assetsToDispose = [];
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
        let assetsToAlsoAccept = [];
        cached.hot._acceptCallbacks.forEach(function(cb) {
            let additionalAssets = cb(function() {
                return getParents(module.bundle.root, id);
            });
            if (Array.isArray(additionalAssets) && additionalAssets.length) assetsToAlsoAccept.push(...additionalAssets);
        });
        if (assetsToAlsoAccept.length) {
            let handled = assetsToAlsoAccept.every(function(a) {
                return hmrAcceptCheck(a[0], a[1]);
            });
            if (!handled) return fullReload();
            hmrDisposeQueue();
        }
    }
}

},{}],"bNJxx":[function(require,module,exports,__globalThis) {
var _yjs = require("yjs");
var _yWebsocket = require("y-websocket");
var _yQuill = require("y-quill");
var _socketIoClient = require("socket.io-client");
var socket = (0, _socketIoClient.io)('http://localhost:4000');
const ydoc = new _yjs.Doc();
const provider = new window.ywebsocket.WebSocketProvider('ws://localhost:1234', 'quill-room', ydoc);
const user = {
    name: "Sen",
    color: '#0080ff'
};
const quill = new Quill('#editor-container', {
    theme: 'snow'
});
const ytext = ydoc.getText('quill');
const binding = new window.YQuill.QuillBinding(ytext, quill, provider.awareness);
provider.awareness.setLocalStateField('user', {
    name: 'Sen',
    color: '#0080ff'
});
const shareButton = document.getElementById("share-btn");
const docTitle = document.getElementById("doc-title");
const editor1 = document.getElementById("editor");
const avatar = document.getElementById("avatar");
const menuOptions = document.getElementById("menu-options");
const bolder = document.getElementById("bold");
const italic = document.getElementById("italic");
const underline = document.getElementById("underline");
const colorButton = document.getElementById("color-btn");
const colorPicker = document.getElementById("color-picker");
const clientsTotal = document.getElementById('clients-total');
const colors = [
    '#34a853',
    '#fbbc05',
    '#4285f4',
    '#ff6d01',
    '#46bdc6',
    '#d61d1d'
];
shareButton.addEventListener("click", async ()=>{
    const content = editor.innerHTML;
    const title = docTitle.value || "Ads\u0131z Belge";
    try {
        const res = await fetch("/save", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                title,
                content
            })
        });
        const result = await res.json();
        if (result.success) alert(`Belge ba\u{15F}ar\u{131}yla kaydedildi. Versiyon: ${result.version}`);
    } catch (err) {
        alert("Bir hata olu\u015Ftu.");
        console.error(err);
    }
});
function setFont(fontName) {
    editor.style.fontFamily = fontName;
}
function setSize(size) {
    editor.style.fontSize = size + "px";
}
function setColor(color) {
    editor.style.color = color;
}
const fontSelect = document.getElementById("font-select");
fontSelect.addEventListener("change", function(e) {
    setFont(e.target.value);
});
const fontSizeSelect = document.getElementById("font-size-select");
fontSizeSelect.addEventListener("change", function(e) {
    setSize(e.target.value);
});
bolder.addEventListener("click", ()=>{
    document.execCommand("bold");
});
italic.addEventListener("click", ()=>{
    document.execCommand("italic");
});
underline.addEventListener("click", ()=>{
    document.execCommand("underline");
});
colorButton.addEventListener("click", (e)=>{
    e.stopPropagation();
    const isVisible = colorPicker.style.display === "block";
    colorPicker.style.display = isVisible ? "none" : "block";
    const rect = colorButton.getBoundingClientRect();
    colorPicker.style.top = `${rect.bottom + window.scrollY}px`;
    colorPicker.style.left = `${rect.left + window.scrollX}px`;
});
document.addEventListener("click", ()=>{
    colorPicker.style.display = "none";
});
/*burada ufak hatalar var, düzelecek */ document.querySelectorAll(".color-option").forEach((option)=>{
    option.addEventListener("click", (e)=>{
        e.stopPropagation();
        const color = option.dataset.color;
        // Editör içine odaklan
        document.getElementById("editor").focus();
        // execCommand ile renk uygula
        document.execCommand("styleWithCSS", false, true);
        document.execCommand("foreColor", false, color);
        colorPicker.style.display = "none";
    });
});
socket.on('clients-total', (data)=>{
    const clientsTotal = document.getElementById('clients-total');
    if (clientsTotal) clientsTotal.innerText = `Toplam Kullan\u{131}c\u{131}: ${data}`;
});

},{"yjs":"dPcu2","y-websocket":"3pf1U","y-quill":"9jzaU","socket.io-client":"24OPJ"}],"dPcu2":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "AbsolutePosition", ()=>AbsolutePosition);
parcelHelpers.export(exports, "AbstractConnector", ()=>AbstractConnector);
parcelHelpers.export(exports, "AbstractStruct", ()=>AbstractStruct);
parcelHelpers.export(exports, "AbstractType", ()=>AbstractType);
parcelHelpers.export(exports, "Array", ()=>YArray);
parcelHelpers.export(exports, "ContentAny", ()=>ContentAny);
parcelHelpers.export(exports, "ContentBinary", ()=>ContentBinary);
parcelHelpers.export(exports, "ContentDeleted", ()=>ContentDeleted);
parcelHelpers.export(exports, "ContentDoc", ()=>ContentDoc);
parcelHelpers.export(exports, "ContentEmbed", ()=>ContentEmbed);
parcelHelpers.export(exports, "ContentFormat", ()=>ContentFormat);
parcelHelpers.export(exports, "ContentJSON", ()=>ContentJSON);
parcelHelpers.export(exports, "ContentString", ()=>ContentString);
parcelHelpers.export(exports, "ContentType", ()=>ContentType);
parcelHelpers.export(exports, "Doc", ()=>Doc);
parcelHelpers.export(exports, "GC", ()=>GC);
parcelHelpers.export(exports, "ID", ()=>ID);
parcelHelpers.export(exports, "Item", ()=>Item);
parcelHelpers.export(exports, "Map", ()=>YMap);
parcelHelpers.export(exports, "PermanentUserData", ()=>PermanentUserData);
parcelHelpers.export(exports, "RelativePosition", ()=>RelativePosition);
parcelHelpers.export(exports, "Skip", ()=>Skip);
parcelHelpers.export(exports, "Snapshot", ()=>Snapshot);
parcelHelpers.export(exports, "Text", ()=>YText);
parcelHelpers.export(exports, "Transaction", ()=>Transaction);
parcelHelpers.export(exports, "UndoManager", ()=>UndoManager);
parcelHelpers.export(exports, "UpdateDecoderV1", ()=>UpdateDecoderV1);
parcelHelpers.export(exports, "UpdateDecoderV2", ()=>UpdateDecoderV2);
parcelHelpers.export(exports, "UpdateEncoderV1", ()=>UpdateEncoderV1);
parcelHelpers.export(exports, "UpdateEncoderV2", ()=>UpdateEncoderV2);
parcelHelpers.export(exports, "XmlElement", ()=>YXmlElement);
parcelHelpers.export(exports, "XmlFragment", ()=>YXmlFragment);
parcelHelpers.export(exports, "XmlHook", ()=>YXmlHook);
parcelHelpers.export(exports, "XmlText", ()=>YXmlText);
parcelHelpers.export(exports, "YArrayEvent", ()=>YArrayEvent);
parcelHelpers.export(exports, "YEvent", ()=>YEvent);
parcelHelpers.export(exports, "YMapEvent", ()=>YMapEvent);
parcelHelpers.export(exports, "YTextEvent", ()=>YTextEvent);
parcelHelpers.export(exports, "YXmlEvent", ()=>YXmlEvent);
parcelHelpers.export(exports, "applyUpdate", ()=>applyUpdate);
parcelHelpers.export(exports, "applyUpdateV2", ()=>applyUpdateV2);
parcelHelpers.export(exports, "cleanupYTextFormatting", ()=>cleanupYTextFormatting);
parcelHelpers.export(exports, "compareIDs", ()=>compareIDs);
parcelHelpers.export(exports, "compareRelativePositions", ()=>compareRelativePositions);
parcelHelpers.export(exports, "convertUpdateFormatV1ToV2", ()=>convertUpdateFormatV1ToV2);
parcelHelpers.export(exports, "convertUpdateFormatV2ToV1", ()=>convertUpdateFormatV2ToV1);
parcelHelpers.export(exports, "createAbsolutePositionFromRelativePosition", ()=>createAbsolutePositionFromRelativePosition);
parcelHelpers.export(exports, "createDeleteSet", ()=>createDeleteSet);
parcelHelpers.export(exports, "createDeleteSetFromStructStore", ()=>createDeleteSetFromStructStore);
parcelHelpers.export(exports, "createDocFromSnapshot", ()=>createDocFromSnapshot);
parcelHelpers.export(exports, "createID", ()=>createID);
parcelHelpers.export(exports, "createRelativePositionFromJSON", ()=>createRelativePositionFromJSON);
parcelHelpers.export(exports, "createRelativePositionFromTypeIndex", ()=>createRelativePositionFromTypeIndex);
parcelHelpers.export(exports, "createSnapshot", ()=>createSnapshot);
parcelHelpers.export(exports, "decodeRelativePosition", ()=>decodeRelativePosition);
parcelHelpers.export(exports, "decodeSnapshot", ()=>decodeSnapshot);
parcelHelpers.export(exports, "decodeSnapshotV2", ()=>decodeSnapshotV2);
parcelHelpers.export(exports, "decodeStateVector", ()=>decodeStateVector);
parcelHelpers.export(exports, "decodeUpdate", ()=>decodeUpdate);
parcelHelpers.export(exports, "decodeUpdateV2", ()=>decodeUpdateV2);
parcelHelpers.export(exports, "diffUpdate", ()=>diffUpdate);
parcelHelpers.export(exports, "diffUpdateV2", ()=>diffUpdateV2);
parcelHelpers.export(exports, "emptySnapshot", ()=>emptySnapshot);
parcelHelpers.export(exports, "encodeRelativePosition", ()=>encodeRelativePosition);
parcelHelpers.export(exports, "encodeSnapshot", ()=>encodeSnapshot);
parcelHelpers.export(exports, "encodeSnapshotV2", ()=>encodeSnapshotV2);
parcelHelpers.export(exports, "encodeStateAsUpdate", ()=>encodeStateAsUpdate);
parcelHelpers.export(exports, "encodeStateAsUpdateV2", ()=>encodeStateAsUpdateV2);
parcelHelpers.export(exports, "encodeStateVector", ()=>encodeStateVector);
parcelHelpers.export(exports, "encodeStateVectorFromUpdate", ()=>encodeStateVectorFromUpdate);
parcelHelpers.export(exports, "encodeStateVectorFromUpdateV2", ()=>encodeStateVectorFromUpdateV2);
parcelHelpers.export(exports, "equalDeleteSets", ()=>equalDeleteSets);
parcelHelpers.export(exports, "equalSnapshots", ()=>equalSnapshots);
parcelHelpers.export(exports, "findIndexSS", ()=>findIndexSS);
parcelHelpers.export(exports, "findRootTypeKey", ()=>findRootTypeKey);
parcelHelpers.export(exports, "getItem", ()=>getItem);
parcelHelpers.export(exports, "getItemCleanEnd", ()=>getItemCleanEnd);
parcelHelpers.export(exports, "getItemCleanStart", ()=>getItemCleanStart);
parcelHelpers.export(exports, "getState", ()=>getState);
parcelHelpers.export(exports, "getTypeChildren", ()=>getTypeChildren);
parcelHelpers.export(exports, "isDeleted", ()=>isDeleted);
parcelHelpers.export(exports, "isParentOf", ()=>isParentOf);
parcelHelpers.export(exports, "iterateDeletedStructs", ()=>iterateDeletedStructs);
parcelHelpers.export(exports, "logType", ()=>logType);
parcelHelpers.export(exports, "logUpdate", ()=>logUpdate);
parcelHelpers.export(exports, "logUpdateV2", ()=>logUpdateV2);
parcelHelpers.export(exports, "mergeDeleteSets", ()=>mergeDeleteSets);
parcelHelpers.export(exports, "mergeUpdates", ()=>mergeUpdates);
parcelHelpers.export(exports, "mergeUpdatesV2", ()=>mergeUpdatesV2);
parcelHelpers.export(exports, "obfuscateUpdate", ()=>obfuscateUpdate);
parcelHelpers.export(exports, "obfuscateUpdateV2", ()=>obfuscateUpdateV2);
parcelHelpers.export(exports, "parseUpdateMeta", ()=>parseUpdateMeta);
parcelHelpers.export(exports, "parseUpdateMetaV2", ()=>parseUpdateMetaV2);
parcelHelpers.export(exports, "readUpdate", ()=>readUpdate);
parcelHelpers.export(exports, "readUpdateV2", ()=>readUpdateV2);
parcelHelpers.export(exports, "relativePositionToJSON", ()=>relativePositionToJSON);
parcelHelpers.export(exports, "snapshot", ()=>snapshot);
parcelHelpers.export(exports, "snapshotContainsUpdate", ()=>snapshotContainsUpdate);
parcelHelpers.export(exports, "transact", ()=>transact);
parcelHelpers.export(exports, "tryGc", ()=>tryGc);
parcelHelpers.export(exports, "typeListToArraySnapshot", ()=>typeListToArraySnapshot);
parcelHelpers.export(exports, "typeMapGetAllSnapshot", ()=>typeMapGetAllSnapshot);
parcelHelpers.export(exports, "typeMapGetSnapshot", ()=>typeMapGetSnapshot);
var _observable = require("lib0/observable");
var _array = require("lib0/array");
var _math = require("lib0/math");
var _map = require("lib0/map");
var _encoding = require("lib0/encoding");
var _decoding = require("lib0/decoding");
var _random = require("lib0/random");
var _promise = require("lib0/promise");
var _buffer = require("lib0/buffer");
var _error = require("lib0/error");
var _binary = require("lib0/binary");
var _function = require("lib0/function");
var _set = require("lib0/set");
var _logging = require("lib0/logging");
var _time = require("lib0/time");
var _string = require("lib0/string");
var _iterator = require("lib0/iterator");
var _object = require("lib0/object");
var _environment = require("lib0/environment");
var global = arguments[3];
/**
 * This is an abstract interface that all Connectors should implement to keep them interchangeable.
 *
 * @note This interface is experimental and it is not advised to actually inherit this class.
 *       It just serves as typing information.
 *
 * @extends {ObservableV2<any>}
 */ class AbstractConnector extends (0, _observable.ObservableV2) {
    /**
   * @param {Doc} ydoc
   * @param {any} awareness
   */ constructor(ydoc, awareness){
        super();
        this.doc = ydoc;
        this.awareness = awareness;
    }
}
class DeleteItem {
    /**
   * @param {number} clock
   * @param {number} len
   */ constructor(clock, len){
        /**
     * @type {number}
     */ this.clock = clock;
        /**
     * @type {number}
     */ this.len = len;
    }
}
/**
 * We no longer maintain a DeleteStore. DeleteSet is a temporary object that is created when needed.
 * - When created in a transaction, it must only be accessed after sorting, and merging
 *   - This DeleteSet is send to other clients
 * - We do not create a DeleteSet when we send a sync message. The DeleteSet message is created directly from StructStore
 * - We read a DeleteSet as part of a sync/update message. In this case the DeleteSet is already sorted and merged.
 */ class DeleteSet {
    constructor(){
        /**
     * @type {Map<number,Array<DeleteItem>>}
     */ this.clients = new Map();
    }
}
/**
 * Iterate over all structs that the DeleteSet gc's.
 *
 * @param {Transaction} transaction
 * @param {DeleteSet} ds
 * @param {function(GC|Item):void} f
 *
 * @function
 */ const iterateDeletedStructs = (transaction, ds, f)=>ds.clients.forEach((deletes, clientid)=>{
        const structs = /** @type {Array<GC|Item>} */ transaction.doc.store.clients.get(clientid);
        if (structs != null) {
            const lastStruct = structs[structs.length - 1];
            const clockState = lastStruct.id.clock + lastStruct.length;
            for(let i = 0, del = deletes[i]; i < deletes.length && del.clock < clockState; del = deletes[++i])iterateStructs(transaction, structs, del.clock, del.len, f);
        }
    });
/**
 * @param {Array<DeleteItem>} dis
 * @param {number} clock
 * @return {number|null}
 *
 * @private
 * @function
 */ const findIndexDS = (dis, clock)=>{
    let left = 0;
    let right = dis.length - 1;
    while(left <= right){
        const midindex = _math.floor((left + right) / 2);
        const mid = dis[midindex];
        const midclock = mid.clock;
        if (midclock <= clock) {
            if (clock < midclock + mid.len) return midindex;
            left = midindex + 1;
        } else right = midindex - 1;
    }
    return null;
};
/**
 * @param {DeleteSet} ds
 * @param {ID} id
 * @return {boolean}
 *
 * @private
 * @function
 */ const isDeleted = (ds, id)=>{
    const dis = ds.clients.get(id.client);
    return dis !== undefined && findIndexDS(dis, id.clock) !== null;
};
/**
 * @param {DeleteSet} ds
 *
 * @private
 * @function
 */ const sortAndMergeDeleteSet = (ds)=>{
    ds.clients.forEach((dels)=>{
        dels.sort((a, b)=>a.clock - b.clock);
        // merge items without filtering or splicing the array
        // i is the current pointer
        // j refers to the current insert position for the pointed item
        // try to merge dels[i] into dels[j-1] or set dels[j]=dels[i]
        let i, j;
        for(i = 1, j = 1; i < dels.length; i++){
            const left = dels[j - 1];
            const right = dels[i];
            if (left.clock + left.len >= right.clock) left.len = _math.max(left.len, right.clock + right.len - left.clock);
            else {
                if (j < i) dels[j] = right;
                j++;
            }
        }
        dels.length = j;
    });
};
/**
 * @param {Array<DeleteSet>} dss
 * @return {DeleteSet} A fresh DeleteSet
 */ const mergeDeleteSets = (dss)=>{
    const merged = new DeleteSet();
    for(let dssI = 0; dssI < dss.length; dssI++)dss[dssI].clients.forEach((delsLeft, client)=>{
        if (!merged.clients.has(client)) {
            // Write all missing keys from current ds and all following.
            // If merged already contains `client` current ds has already been added.
            /**
         * @type {Array<DeleteItem>}
         */ const dels = delsLeft.slice();
            for(let i = dssI + 1; i < dss.length; i++)_array.appendTo(dels, dss[i].clients.get(client) || []);
            merged.clients.set(client, dels);
        }
    });
    sortAndMergeDeleteSet(merged);
    return merged;
};
/**
 * @param {DeleteSet} ds
 * @param {number} client
 * @param {number} clock
 * @param {number} length
 *
 * @private
 * @function
 */ const addToDeleteSet = (ds, client, clock, length)=>{
    _map.setIfUndefined(ds.clients, client, ()=>/** @type {Array<DeleteItem>} */ []).push(new DeleteItem(clock, length));
};
const createDeleteSet = ()=>new DeleteSet();
/**
 * @param {StructStore} ss
 * @return {DeleteSet} Merged and sorted DeleteSet
 *
 * @private
 * @function
 */ const createDeleteSetFromStructStore = (ss)=>{
    const ds = createDeleteSet();
    ss.clients.forEach((structs, client)=>{
        /**
     * @type {Array<DeleteItem>}
     */ const dsitems = [];
        for(let i = 0; i < structs.length; i++){
            const struct = structs[i];
            if (struct.deleted) {
                const clock = struct.id.clock;
                let len = struct.length;
                if (i + 1 < structs.length) for(let next = structs[i + 1]; i + 1 < structs.length && next.deleted; next = structs[++i + 1])len += next.length;
                dsitems.push(new DeleteItem(clock, len));
            }
        }
        if (dsitems.length > 0) ds.clients.set(client, dsitems);
    });
    return ds;
};
/**
 * @param {DSEncoderV1 | DSEncoderV2} encoder
 * @param {DeleteSet} ds
 *
 * @private
 * @function
 */ const writeDeleteSet = (encoder, ds)=>{
    _encoding.writeVarUint(encoder.restEncoder, ds.clients.size);
    // Ensure that the delete set is written in a deterministic order
    _array.from(ds.clients.entries()).sort((a, b)=>b[0] - a[0]).forEach(([client, dsitems])=>{
        encoder.resetDsCurVal();
        _encoding.writeVarUint(encoder.restEncoder, client);
        const len = dsitems.length;
        _encoding.writeVarUint(encoder.restEncoder, len);
        for(let i = 0; i < len; i++){
            const item = dsitems[i];
            encoder.writeDsClock(item.clock);
            encoder.writeDsLen(item.len);
        }
    });
};
/**
 * @param {DSDecoderV1 | DSDecoderV2} decoder
 * @return {DeleteSet}
 *
 * @private
 * @function
 */ const readDeleteSet = (decoder)=>{
    const ds = new DeleteSet();
    const numClients = _decoding.readVarUint(decoder.restDecoder);
    for(let i = 0; i < numClients; i++){
        decoder.resetDsCurVal();
        const client = _decoding.readVarUint(decoder.restDecoder);
        const numberOfDeletes = _decoding.readVarUint(decoder.restDecoder);
        if (numberOfDeletes > 0) {
            const dsField = _map.setIfUndefined(ds.clients, client, ()=>/** @type {Array<DeleteItem>} */ []);
            for(let i = 0; i < numberOfDeletes; i++)dsField.push(new DeleteItem(decoder.readDsClock(), decoder.readDsLen()));
        }
    }
    return ds;
};
/**
 * @todo YDecoder also contains references to String and other Decoders. Would make sense to exchange YDecoder.toUint8Array for YDecoder.DsToUint8Array()..
 */ /**
 * @param {DSDecoderV1 | DSDecoderV2} decoder
 * @param {Transaction} transaction
 * @param {StructStore} store
 * @return {Uint8Array|null} Returns a v2 update containing all deletes that couldn't be applied yet; or null if all deletes were applied successfully.
 *
 * @private
 * @function
 */ const readAndApplyDeleteSet = (decoder, transaction, store)=>{
    const unappliedDS = new DeleteSet();
    const numClients = _decoding.readVarUint(decoder.restDecoder);
    for(let i = 0; i < numClients; i++){
        decoder.resetDsCurVal();
        const client = _decoding.readVarUint(decoder.restDecoder);
        const numberOfDeletes = _decoding.readVarUint(decoder.restDecoder);
        const structs = store.clients.get(client) || [];
        const state = getState(store, client);
        for(let i = 0; i < numberOfDeletes; i++){
            const clock = decoder.readDsClock();
            const clockEnd = clock + decoder.readDsLen();
            if (clock < state) {
                if (state < clockEnd) addToDeleteSet(unappliedDS, client, state, clockEnd - state);
                let index = findIndexSS(structs, clock);
                /**
         * We can ignore the case of GC and Delete structs, because we are going to skip them
         * @type {Item}
         */ // @ts-ignore
                let struct = structs[index];
                // split the first item if necessary
                if (!struct.deleted && struct.id.clock < clock) {
                    structs.splice(index + 1, 0, splitItem(transaction, struct, clock - struct.id.clock));
                    index++; // increase we now want to use the next struct
                }
                while(index < structs.length){
                    // @ts-ignore
                    struct = structs[index++];
                    if (struct.id.clock < clockEnd) {
                        if (!struct.deleted) {
                            if (clockEnd < struct.id.clock + struct.length) structs.splice(index, 0, splitItem(transaction, struct, clockEnd - struct.id.clock));
                            struct.delete(transaction);
                        }
                    } else break;
                }
            } else addToDeleteSet(unappliedDS, client, clock, clockEnd - clock);
        }
    }
    if (unappliedDS.clients.size > 0) {
        const ds = new UpdateEncoderV2();
        _encoding.writeVarUint(ds.restEncoder, 0); // encode 0 structs
        writeDeleteSet(ds, unappliedDS);
        return ds.toUint8Array();
    }
    return null;
};
/**
 * @param {DeleteSet} ds1
 * @param {DeleteSet} ds2
 */ const equalDeleteSets = (ds1, ds2)=>{
    if (ds1.clients.size !== ds2.clients.size) return false;
    for (const [client, deleteItems1] of ds1.clients.entries()){
        const deleteItems2 = /** @type {Array<import('../internals.js').DeleteItem>} */ ds2.clients.get(client);
        if (deleteItems2 === undefined || deleteItems1.length !== deleteItems2.length) return false;
        for(let i = 0; i < deleteItems1.length; i++){
            const di1 = deleteItems1[i];
            const di2 = deleteItems2[i];
            if (di1.clock !== di2.clock || di1.len !== di2.len) return false;
        }
    }
    return true;
};
/**
 * @module Y
 */ const generateNewClientId = _random.uint32;
/**
 * @typedef {Object} DocOpts
 * @property {boolean} [DocOpts.gc=true] Disable garbage collection (default: gc=true)
 * @property {function(Item):boolean} [DocOpts.gcFilter] Will be called before an Item is garbage collected. Return false to keep the Item.
 * @property {string} [DocOpts.guid] Define a globally unique identifier for this document
 * @property {string | null} [DocOpts.collectionid] Associate this document with a collection. This only plays a role if your provider has a concept of collection.
 * @property {any} [DocOpts.meta] Any kind of meta information you want to associate with this document. If this is a subdocument, remote peers will store the meta information as well.
 * @property {boolean} [DocOpts.autoLoad] If a subdocument, automatically load document. If this is a subdocument, remote peers will load the document as well automatically.
 * @property {boolean} [DocOpts.shouldLoad] Whether the document should be synced by the provider now. This is toggled to true when you call ydoc.load()
 */ /**
 * @typedef {Object} DocEvents
 * @property {function(Doc):void} DocEvents.destroy
 * @property {function(Doc):void} DocEvents.load
 * @property {function(boolean, Doc):void} DocEvents.sync
 * @property {function(Uint8Array, any, Doc, Transaction):void} DocEvents.update
 * @property {function(Uint8Array, any, Doc, Transaction):void} DocEvents.updateV2
 * @property {function(Doc):void} DocEvents.beforeAllTransactions
 * @property {function(Transaction, Doc):void} DocEvents.beforeTransaction
 * @property {function(Transaction, Doc):void} DocEvents.beforeObserverCalls
 * @property {function(Transaction, Doc):void} DocEvents.afterTransaction
 * @property {function(Transaction, Doc):void} DocEvents.afterTransactionCleanup
 * @property {function(Doc, Array<Transaction>):void} DocEvents.afterAllTransactions
 * @property {function({ loaded: Set<Doc>, added: Set<Doc>, removed: Set<Doc> }, Doc, Transaction):void} DocEvents.subdocs
 */ /**
 * A Yjs instance handles the state of shared data.
 * @extends ObservableV2<DocEvents>
 */ class Doc extends (0, _observable.ObservableV2) {
    /**
   * @param {DocOpts} opts configuration
   */ constructor({ guid = _random.uuidv4(), collectionid = null, gc = true, gcFilter = ()=>true, meta = null, autoLoad = false, shouldLoad = true } = {}){
        super();
        this.gc = gc;
        this.gcFilter = gcFilter;
        this.clientID = generateNewClientId();
        this.guid = guid;
        this.collectionid = collectionid;
        /**
     * @type {Map<string, AbstractType<YEvent<any>>>}
     */ this.share = new Map();
        this.store = new StructStore();
        /**
     * @type {Transaction | null}
     */ this._transaction = null;
        /**
     * @type {Array<Transaction>}
     */ this._transactionCleanups = [];
        /**
     * @type {Set<Doc>}
     */ this.subdocs = new Set();
        /**
     * If this document is a subdocument - a document integrated into another document - then _item is defined.
     * @type {Item?}
     */ this._item = null;
        this.shouldLoad = shouldLoad;
        this.autoLoad = autoLoad;
        this.meta = meta;
        /**
     * This is set to true when the persistence provider loaded the document from the database or when the `sync` event fires.
     * Note that not all providers implement this feature. Provider authors are encouraged to fire the `load` event when the doc content is loaded from the database.
     *
     * @type {boolean}
     */ this.isLoaded = false;
        /**
     * This is set to true when the connection provider has successfully synced with a backend.
     * Note that when using peer-to-peer providers this event may not provide very useful.
     * Also note that not all providers implement this feature. Provider authors are encouraged to fire
     * the `sync` event when the doc has been synced (with `true` as a parameter) or if connection is
     * lost (with false as a parameter).
     */ this.isSynced = false;
        this.isDestroyed = false;
        /**
     * Promise that resolves once the document has been loaded from a persistence provider.
     */ this.whenLoaded = _promise.create((resolve)=>{
            this.on('load', ()=>{
                this.isLoaded = true;
                resolve(this);
            });
        });
        const provideSyncedPromise = ()=>_promise.create((resolve)=>{
                /**
       * @param {boolean} isSynced
       */ const eventHandler = (isSynced)=>{
                    if (isSynced === undefined || isSynced === true) {
                        this.off('sync', eventHandler);
                        resolve();
                    }
                };
                this.on('sync', eventHandler);
            });
        this.on('sync', (isSynced)=>{
            if (isSynced === false && this.isSynced) this.whenSynced = provideSyncedPromise();
            this.isSynced = isSynced === undefined || isSynced === true;
            if (this.isSynced && !this.isLoaded) this.emit('load', [
                this
            ]);
        });
        /**
     * Promise that resolves once the document has been synced with a backend.
     * This promise is recreated when the connection is lost.
     * Note the documentation about the `isSynced` property.
     */ this.whenSynced = provideSyncedPromise();
    }
    /**
   * Notify the parent document that you request to load data into this subdocument (if it is a subdocument).
   *
   * `load()` might be used in the future to request any provider to load the most current data.
   *
   * It is safe to call `load()` multiple times.
   */ load() {
        const item = this._item;
        if (item !== null && !this.shouldLoad) transact(/** @type {any} */ item.parent.doc, (transaction)=>{
            transaction.subdocsLoaded.add(this);
        }, null, true);
        this.shouldLoad = true;
    }
    getSubdocs() {
        return this.subdocs;
    }
    getSubdocGuids() {
        return new Set(_array.from(this.subdocs).map((doc)=>doc.guid));
    }
    /**
   * Changes that happen inside of a transaction are bundled. This means that
   * the observer fires _after_ the transaction is finished and that all changes
   * that happened inside of the transaction are sent as one message to the
   * other peers.
   *
   * @template T
   * @param {function(Transaction):T} f The function that should be executed as a transaction
   * @param {any} [origin] Origin of who started the transaction. Will be stored on transaction.origin
   * @return T
   *
   * @public
   */ transact(f, origin = null) {
        return transact(this, f, origin);
    }
    /**
   * Define a shared data type.
   *
   * Multiple calls of `ydoc.get(name, TypeConstructor)` yield the same result
   * and do not overwrite each other. I.e.
   * `ydoc.get(name, Y.Array) === ydoc.get(name, Y.Array)`
   *
   * After this method is called, the type is also available on `ydoc.share.get(name)`.
   *
   * *Best Practices:*
   * Define all types right after the Y.Doc instance is created and store them in a separate object.
   * Also use the typed methods `getText(name)`, `getArray(name)`, ..
   *
   * @template {typeof AbstractType<any>} Type
   * @example
   *   const ydoc = new Y.Doc(..)
   *   const appState = {
   *     document: ydoc.getText('document')
   *     comments: ydoc.getArray('comments')
   *   }
   *
   * @param {string} name
   * @param {Type} TypeConstructor The constructor of the type definition. E.g. Y.Text, Y.Array, Y.Map, ...
   * @return {InstanceType<Type>} The created type. Constructed with TypeConstructor
   *
   * @public
   */ get(name, TypeConstructor = /** @type {any} */ AbstractType) {
        const type = _map.setIfUndefined(this.share, name, ()=>{
            // @ts-ignore
            const t = new TypeConstructor();
            t._integrate(this, null);
            return t;
        });
        const Constr = type.constructor;
        if (TypeConstructor !== AbstractType && Constr !== TypeConstructor) {
            if (Constr === AbstractType) {
                // @ts-ignore
                const t = new TypeConstructor();
                t._map = type._map;
                type._map.forEach(/** @param {Item?} n */ (n)=>{
                    for(; n !== null; n = n.left)// @ts-ignore
                    n.parent = t;
                });
                t._start = type._start;
                for(let n = t._start; n !== null; n = n.right)n.parent = t;
                t._length = type._length;
                this.share.set(name, t);
                t._integrate(this, null);
                return /** @type {InstanceType<Type>} */ t;
            } else throw new Error(`Type with the name ${name} has already been defined with a different constructor`);
        }
        return /** @type {InstanceType<Type>} */ type;
    }
    /**
   * @template T
   * @param {string} [name]
   * @return {YArray<T>}
   *
   * @public
   */ getArray(name = '') {
        return /** @type {YArray<T>} */ this.get(name, YArray);
    }
    /**
   * @param {string} [name]
   * @return {YText}
   *
   * @public
   */ getText(name = '') {
        return this.get(name, YText);
    }
    /**
   * @template T
   * @param {string} [name]
   * @return {YMap<T>}
   *
   * @public
   */ getMap(name = '') {
        return /** @type {YMap<T>} */ this.get(name, YMap);
    }
    /**
   * @param {string} [name]
   * @return {YXmlElement}
   *
   * @public
   */ getXmlElement(name = '') {
        return /** @type {YXmlElement<{[key:string]:string}>} */ this.get(name, YXmlElement);
    }
    /**
   * @param {string} [name]
   * @return {YXmlFragment}
   *
   * @public
   */ getXmlFragment(name = '') {
        return this.get(name, YXmlFragment);
    }
    /**
   * Converts the entire document into a js object, recursively traversing each yjs type
   * Doesn't log types that have not been defined (using ydoc.getType(..)).
   *
   * @deprecated Do not use this method and rather call toJSON directly on the shared types.
   *
   * @return {Object<string, any>}
   */ toJSON() {
        /**
     * @type {Object<string, any>}
     */ const doc = {};
        this.share.forEach((value, key)=>{
            doc[key] = value.toJSON();
        });
        return doc;
    }
    /**
   * Emit `destroy` event and unregister all event handlers.
   */ destroy() {
        this.isDestroyed = true;
        _array.from(this.subdocs).forEach((subdoc)=>subdoc.destroy());
        const item = this._item;
        if (item !== null) {
            this._item = null;
            const content = /** @type {ContentDoc} */ item.content;
            content.doc = new Doc({
                guid: this.guid,
                ...content.opts,
                shouldLoad: false
            });
            content.doc._item = item;
            transact(/** @type {any} */ item.parent.doc, (transaction)=>{
                const doc = content.doc;
                if (!item.deleted) transaction.subdocsAdded.add(doc);
                transaction.subdocsRemoved.add(this);
            }, null, true);
        }
        // @ts-ignore
        this.emit('destroyed', [
            true
        ]); // DEPRECATED!
        this.emit('destroy', [
            this
        ]);
        super.destroy();
    }
}
class DSDecoderV1 {
    /**
   * @param {decoding.Decoder} decoder
   */ constructor(decoder){
        this.restDecoder = decoder;
    }
    resetDsCurVal() {
    // nop
    }
    /**
   * @return {number}
   */ readDsClock() {
        return _decoding.readVarUint(this.restDecoder);
    }
    /**
   * @return {number}
   */ readDsLen() {
        return _decoding.readVarUint(this.restDecoder);
    }
}
class UpdateDecoderV1 extends DSDecoderV1 {
    /**
   * @return {ID}
   */ readLeftID() {
        return createID(_decoding.readVarUint(this.restDecoder), _decoding.readVarUint(this.restDecoder));
    }
    /**
   * @return {ID}
   */ readRightID() {
        return createID(_decoding.readVarUint(this.restDecoder), _decoding.readVarUint(this.restDecoder));
    }
    /**
   * Read the next client id.
   * Use this in favor of readID whenever possible to reduce the number of objects created.
   */ readClient() {
        return _decoding.readVarUint(this.restDecoder);
    }
    /**
   * @return {number} info An unsigned 8-bit integer
   */ readInfo() {
        return _decoding.readUint8(this.restDecoder);
    }
    /**
   * @return {string}
   */ readString() {
        return _decoding.readVarString(this.restDecoder);
    }
    /**
   * @return {boolean} isKey
   */ readParentInfo() {
        return _decoding.readVarUint(this.restDecoder) === 1;
    }
    /**
   * @return {number} info An unsigned 8-bit integer
   */ readTypeRef() {
        return _decoding.readVarUint(this.restDecoder);
    }
    /**
   * Write len of a struct - well suited for Opt RLE encoder.
   *
   * @return {number} len
   */ readLen() {
        return _decoding.readVarUint(this.restDecoder);
    }
    /**
   * @return {any}
   */ readAny() {
        return _decoding.readAny(this.restDecoder);
    }
    /**
   * @return {Uint8Array}
   */ readBuf() {
        return _buffer.copyUint8Array(_decoding.readVarUint8Array(this.restDecoder));
    }
    /**
   * Legacy implementation uses JSON parse. We use any-decoding in v2.
   *
   * @return {any}
   */ readJSON() {
        return JSON.parse(_decoding.readVarString(this.restDecoder));
    }
    /**
   * @return {string}
   */ readKey() {
        return _decoding.readVarString(this.restDecoder);
    }
}
class DSDecoderV2 {
    /**
   * @param {decoding.Decoder} decoder
   */ constructor(decoder){
        /**
     * @private
     */ this.dsCurrVal = 0;
        this.restDecoder = decoder;
    }
    resetDsCurVal() {
        this.dsCurrVal = 0;
    }
    /**
   * @return {number}
   */ readDsClock() {
        this.dsCurrVal += _decoding.readVarUint(this.restDecoder);
        return this.dsCurrVal;
    }
    /**
   * @return {number}
   */ readDsLen() {
        const diff = _decoding.readVarUint(this.restDecoder) + 1;
        this.dsCurrVal += diff;
        return diff;
    }
}
class UpdateDecoderV2 extends DSDecoderV2 {
    /**
   * @param {decoding.Decoder} decoder
   */ constructor(decoder){
        super(decoder);
        /**
     * List of cached keys. If the keys[id] does not exist, we read a new key
     * from stringEncoder and push it to keys.
     *
     * @type {Array<string>}
     */ this.keys = [];
        _decoding.readVarUint(decoder); // read feature flag - currently unused
        this.keyClockDecoder = new _decoding.IntDiffOptRleDecoder(_decoding.readVarUint8Array(decoder));
        this.clientDecoder = new _decoding.UintOptRleDecoder(_decoding.readVarUint8Array(decoder));
        this.leftClockDecoder = new _decoding.IntDiffOptRleDecoder(_decoding.readVarUint8Array(decoder));
        this.rightClockDecoder = new _decoding.IntDiffOptRleDecoder(_decoding.readVarUint8Array(decoder));
        this.infoDecoder = new _decoding.RleDecoder(_decoding.readVarUint8Array(decoder), _decoding.readUint8);
        this.stringDecoder = new _decoding.StringDecoder(_decoding.readVarUint8Array(decoder));
        this.parentInfoDecoder = new _decoding.RleDecoder(_decoding.readVarUint8Array(decoder), _decoding.readUint8);
        this.typeRefDecoder = new _decoding.UintOptRleDecoder(_decoding.readVarUint8Array(decoder));
        this.lenDecoder = new _decoding.UintOptRleDecoder(_decoding.readVarUint8Array(decoder));
    }
    /**
   * @return {ID}
   */ readLeftID() {
        return new ID(this.clientDecoder.read(), this.leftClockDecoder.read());
    }
    /**
   * @return {ID}
   */ readRightID() {
        return new ID(this.clientDecoder.read(), this.rightClockDecoder.read());
    }
    /**
   * Read the next client id.
   * Use this in favor of readID whenever possible to reduce the number of objects created.
   */ readClient() {
        return this.clientDecoder.read();
    }
    /**
   * @return {number} info An unsigned 8-bit integer
   */ readInfo() {
        return /** @type {number} */ this.infoDecoder.read();
    }
    /**
   * @return {string}
   */ readString() {
        return this.stringDecoder.read();
    }
    /**
   * @return {boolean}
   */ readParentInfo() {
        return this.parentInfoDecoder.read() === 1;
    }
    /**
   * @return {number} An unsigned 8-bit integer
   */ readTypeRef() {
        return this.typeRefDecoder.read();
    }
    /**
   * Write len of a struct - well suited for Opt RLE encoder.
   *
   * @return {number}
   */ readLen() {
        return this.lenDecoder.read();
    }
    /**
   * @return {any}
   */ readAny() {
        return _decoding.readAny(this.restDecoder);
    }
    /**
   * @return {Uint8Array}
   */ readBuf() {
        return _decoding.readVarUint8Array(this.restDecoder);
    }
    /**
   * This is mainly here for legacy purposes.
   *
   * Initial we incoded objects using JSON. Now we use the much faster lib0/any-encoder. This method mainly exists for legacy purposes for the v1 encoder.
   *
   * @return {any}
   */ readJSON() {
        return _decoding.readAny(this.restDecoder);
    }
    /**
   * @return {string}
   */ readKey() {
        const keyClock = this.keyClockDecoder.read();
        if (keyClock < this.keys.length) return this.keys[keyClock];
        else {
            const key = this.stringDecoder.read();
            this.keys.push(key);
            return key;
        }
    }
}
class DSEncoderV1 {
    constructor(){
        this.restEncoder = _encoding.createEncoder();
    }
    toUint8Array() {
        return _encoding.toUint8Array(this.restEncoder);
    }
    resetDsCurVal() {
    // nop
    }
    /**
   * @param {number} clock
   */ writeDsClock(clock) {
        _encoding.writeVarUint(this.restEncoder, clock);
    }
    /**
   * @param {number} len
   */ writeDsLen(len) {
        _encoding.writeVarUint(this.restEncoder, len);
    }
}
class UpdateEncoderV1 extends DSEncoderV1 {
    /**
   * @param {ID} id
   */ writeLeftID(id) {
        _encoding.writeVarUint(this.restEncoder, id.client);
        _encoding.writeVarUint(this.restEncoder, id.clock);
    }
    /**
   * @param {ID} id
   */ writeRightID(id) {
        _encoding.writeVarUint(this.restEncoder, id.client);
        _encoding.writeVarUint(this.restEncoder, id.clock);
    }
    /**
   * Use writeClient and writeClock instead of writeID if possible.
   * @param {number} client
   */ writeClient(client) {
        _encoding.writeVarUint(this.restEncoder, client);
    }
    /**
   * @param {number} info An unsigned 8-bit integer
   */ writeInfo(info) {
        _encoding.writeUint8(this.restEncoder, info);
    }
    /**
   * @param {string} s
   */ writeString(s) {
        _encoding.writeVarString(this.restEncoder, s);
    }
    /**
   * @param {boolean} isYKey
   */ writeParentInfo(isYKey) {
        _encoding.writeVarUint(this.restEncoder, isYKey ? 1 : 0);
    }
    /**
   * @param {number} info An unsigned 8-bit integer
   */ writeTypeRef(info) {
        _encoding.writeVarUint(this.restEncoder, info);
    }
    /**
   * Write len of a struct - well suited for Opt RLE encoder.
   *
   * @param {number} len
   */ writeLen(len) {
        _encoding.writeVarUint(this.restEncoder, len);
    }
    /**
   * @param {any} any
   */ writeAny(any) {
        _encoding.writeAny(this.restEncoder, any);
    }
    /**
   * @param {Uint8Array} buf
   */ writeBuf(buf) {
        _encoding.writeVarUint8Array(this.restEncoder, buf);
    }
    /**
   * @param {any} embed
   */ writeJSON(embed) {
        _encoding.writeVarString(this.restEncoder, JSON.stringify(embed));
    }
    /**
   * @param {string} key
   */ writeKey(key) {
        _encoding.writeVarString(this.restEncoder, key);
    }
}
class DSEncoderV2 {
    constructor(){
        this.restEncoder = _encoding.createEncoder(); // encodes all the rest / non-optimized
        this.dsCurrVal = 0;
    }
    toUint8Array() {
        return _encoding.toUint8Array(this.restEncoder);
    }
    resetDsCurVal() {
        this.dsCurrVal = 0;
    }
    /**
   * @param {number} clock
   */ writeDsClock(clock) {
        const diff = clock - this.dsCurrVal;
        this.dsCurrVal = clock;
        _encoding.writeVarUint(this.restEncoder, diff);
    }
    /**
   * @param {number} len
   */ writeDsLen(len) {
        if (len === 0) _error.unexpectedCase();
        _encoding.writeVarUint(this.restEncoder, len - 1);
        this.dsCurrVal += len;
    }
}
class UpdateEncoderV2 extends DSEncoderV2 {
    constructor(){
        super();
        /**
     * @type {Map<string,number>}
     */ this.keyMap = new Map();
        /**
     * Refers to the next unique key-identifier to me used.
     * See writeKey method for more information.
     *
     * @type {number}
     */ this.keyClock = 0;
        this.keyClockEncoder = new _encoding.IntDiffOptRleEncoder();
        this.clientEncoder = new _encoding.UintOptRleEncoder();
        this.leftClockEncoder = new _encoding.IntDiffOptRleEncoder();
        this.rightClockEncoder = new _encoding.IntDiffOptRleEncoder();
        this.infoEncoder = new _encoding.RleEncoder(_encoding.writeUint8);
        this.stringEncoder = new _encoding.StringEncoder();
        this.parentInfoEncoder = new _encoding.RleEncoder(_encoding.writeUint8);
        this.typeRefEncoder = new _encoding.UintOptRleEncoder();
        this.lenEncoder = new _encoding.UintOptRleEncoder();
    }
    toUint8Array() {
        const encoder = _encoding.createEncoder();
        _encoding.writeVarUint(encoder, 0); // this is a feature flag that we might use in the future
        _encoding.writeVarUint8Array(encoder, this.keyClockEncoder.toUint8Array());
        _encoding.writeVarUint8Array(encoder, this.clientEncoder.toUint8Array());
        _encoding.writeVarUint8Array(encoder, this.leftClockEncoder.toUint8Array());
        _encoding.writeVarUint8Array(encoder, this.rightClockEncoder.toUint8Array());
        _encoding.writeVarUint8Array(encoder, _encoding.toUint8Array(this.infoEncoder));
        _encoding.writeVarUint8Array(encoder, this.stringEncoder.toUint8Array());
        _encoding.writeVarUint8Array(encoder, _encoding.toUint8Array(this.parentInfoEncoder));
        _encoding.writeVarUint8Array(encoder, this.typeRefEncoder.toUint8Array());
        _encoding.writeVarUint8Array(encoder, this.lenEncoder.toUint8Array());
        // @note The rest encoder is appended! (note the missing var)
        _encoding.writeUint8Array(encoder, _encoding.toUint8Array(this.restEncoder));
        return _encoding.toUint8Array(encoder);
    }
    /**
   * @param {ID} id
   */ writeLeftID(id) {
        this.clientEncoder.write(id.client);
        this.leftClockEncoder.write(id.clock);
    }
    /**
   * @param {ID} id
   */ writeRightID(id) {
        this.clientEncoder.write(id.client);
        this.rightClockEncoder.write(id.clock);
    }
    /**
   * @param {number} client
   */ writeClient(client) {
        this.clientEncoder.write(client);
    }
    /**
   * @param {number} info An unsigned 8-bit integer
   */ writeInfo(info) {
        this.infoEncoder.write(info);
    }
    /**
   * @param {string} s
   */ writeString(s) {
        this.stringEncoder.write(s);
    }
    /**
   * @param {boolean} isYKey
   */ writeParentInfo(isYKey) {
        this.parentInfoEncoder.write(isYKey ? 1 : 0);
    }
    /**
   * @param {number} info An unsigned 8-bit integer
   */ writeTypeRef(info) {
        this.typeRefEncoder.write(info);
    }
    /**
   * Write len of a struct - well suited for Opt RLE encoder.
   *
   * @param {number} len
   */ writeLen(len) {
        this.lenEncoder.write(len);
    }
    /**
   * @param {any} any
   */ writeAny(any) {
        _encoding.writeAny(this.restEncoder, any);
    }
    /**
   * @param {Uint8Array} buf
   */ writeBuf(buf) {
        _encoding.writeVarUint8Array(this.restEncoder, buf);
    }
    /**
   * This is mainly here for legacy purposes.
   *
   * Initial we incoded objects using JSON. Now we use the much faster lib0/any-encoder. This method mainly exists for legacy purposes for the v1 encoder.
   *
   * @param {any} embed
   */ writeJSON(embed) {
        _encoding.writeAny(this.restEncoder, embed);
    }
    /**
   * Property keys are often reused. For example, in y-prosemirror the key `bold` might
   * occur very often. For a 3d application, the key `position` might occur very often.
   *
   * We cache these keys in a Map and refer to them via a unique number.
   *
   * @param {string} key
   */ writeKey(key) {
        const clock = this.keyMap.get(key);
        if (clock === undefined) {
            /**
       * @todo uncomment to introduce this feature finally
       *
       * Background. The ContentFormat object was always encoded using writeKey, but the decoder used to use readString.
       * Furthermore, I forgot to set the keyclock. So everything was working fine.
       *
       * However, this feature here is basically useless as it is not being used (it actually only consumes extra memory).
       *
       * I don't know yet how to reintroduce this feature..
       *
       * Older clients won't be able to read updates when we reintroduce this feature. So this should probably be done using a flag.
       *
       */ // this.keyMap.set(key, this.keyClock)
            this.keyClockEncoder.write(this.keyClock++);
            this.stringEncoder.write(key);
        } else this.keyClockEncoder.write(clock);
    }
}
/**
 * @module encoding
 */ /*
 * We use the first five bits in the info flag for determining the type of the struct.
 *
 * 0: GC
 * 1: Item with Deleted content
 * 2: Item with JSON content
 * 3: Item with Binary content
 * 4: Item with String content
 * 5: Item with Embed content (for richtext content)
 * 6: Item with Format content (a formatting marker for richtext content)
 * 7: Item with Type
 */ /**
 * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder
 * @param {Array<GC|Item>} structs All structs by `client`
 * @param {number} client
 * @param {number} clock write structs starting with `ID(client,clock)`
 *
 * @function
 */ const writeStructs = (encoder, structs, client, clock)=>{
    // write first id
    clock = _math.max(clock, structs[0].id.clock); // make sure the first id exists
    const startNewStructs = findIndexSS(structs, clock);
    // write # encoded structs
    _encoding.writeVarUint(encoder.restEncoder, structs.length - startNewStructs);
    encoder.writeClient(client);
    _encoding.writeVarUint(encoder.restEncoder, clock);
    const firstStruct = structs[startNewStructs];
    // write first struct with an offset
    firstStruct.write(encoder, clock - firstStruct.id.clock);
    for(let i = startNewStructs + 1; i < structs.length; i++)structs[i].write(encoder, 0);
};
/**
 * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder
 * @param {StructStore} store
 * @param {Map<number,number>} _sm
 *
 * @private
 * @function
 */ const writeClientsStructs = (encoder, store, _sm)=>{
    // we filter all valid _sm entries into sm
    const sm = new Map();
    _sm.forEach((clock, client)=>{
        // only write if new structs are available
        if (getState(store, client) > clock) sm.set(client, clock);
    });
    getStateVector(store).forEach((_clock, client)=>{
        if (!_sm.has(client)) sm.set(client, 0);
    });
    // write # states that were updated
    _encoding.writeVarUint(encoder.restEncoder, sm.size);
    // Write items with higher client ids first
    // This heavily improves the conflict algorithm.
    _array.from(sm.entries()).sort((a, b)=>b[0] - a[0]).forEach(([client, clock])=>{
        writeStructs(encoder, /** @type {Array<GC|Item>} */ store.clients.get(client), client, clock);
    });
};
/**
 * @param {UpdateDecoderV1 | UpdateDecoderV2} decoder The decoder object to read data from.
 * @param {Doc} doc
 * @return {Map<number, { i: number, refs: Array<Item | GC> }>}
 *
 * @private
 * @function
 */ const readClientsStructRefs = (decoder, doc)=>{
    /**
   * @type {Map<number, { i: number, refs: Array<Item | GC> }>}
   */ const clientRefs = _map.create();
    const numOfStateUpdates = _decoding.readVarUint(decoder.restDecoder);
    for(let i = 0; i < numOfStateUpdates; i++){
        const numberOfStructs = _decoding.readVarUint(decoder.restDecoder);
        /**
     * @type {Array<GC|Item>}
     */ const refs = new Array(numberOfStructs);
        const client = decoder.readClient();
        let clock = _decoding.readVarUint(decoder.restDecoder);
        // const start = performance.now()
        clientRefs.set(client, {
            i: 0,
            refs
        });
        for(let i = 0; i < numberOfStructs; i++){
            const info = decoder.readInfo();
            switch(_binary.BITS5 & info){
                case 0:
                    {
                        const len = decoder.readLen();
                        refs[i] = new GC(createID(client, clock), len);
                        clock += len;
                        break;
                    }
                case 10:
                    {
                        // @todo we could reduce the amount of checks by adding Skip struct to clientRefs so we know that something is missing.
                        const len = _decoding.readVarUint(decoder.restDecoder);
                        refs[i] = new Skip(createID(client, clock), len);
                        clock += len;
                        break;
                    }
                default:
                    {
                        /**
           * The optimized implementation doesn't use any variables because inlining variables is faster.
           * Below a non-optimized version is shown that implements the basic algorithm with
           * a few comments
           */ const cantCopyParentInfo = (info & (_binary.BIT7 | _binary.BIT8)) === 0;
                        // If parent = null and neither left nor right are defined, then we know that `parent` is child of `y`
                        // and we read the next string as parentYKey.
                        // It indicates how we store/retrieve parent from `y.share`
                        // @type {string|null}
                        const struct = new Item(createID(client, clock), null, (info & _binary.BIT8) === _binary.BIT8 ? decoder.readLeftID() : null, null, (info & _binary.BIT7) === _binary.BIT7 ? decoder.readRightID() : null, cantCopyParentInfo ? decoder.readParentInfo() ? doc.get(decoder.readString()) : decoder.readLeftID() : null, cantCopyParentInfo && (info & _binary.BIT6) === _binary.BIT6 ? decoder.readString() : null, readItemContent(decoder, info) // item content
                        );
                        /* A non-optimized implementation of the above algorithm:

          // The item that was originally to the left of this item.
          const origin = (info & binary.BIT8) === binary.BIT8 ? decoder.readLeftID() : null
          // The item that was originally to the right of this item.
          const rightOrigin = (info & binary.BIT7) === binary.BIT7 ? decoder.readRightID() : null
          const cantCopyParentInfo = (info & (binary.BIT7 | binary.BIT8)) === 0
          const hasParentYKey = cantCopyParentInfo ? decoder.readParentInfo() : false
          // If parent = null and neither left nor right are defined, then we know that `parent` is child of `y`
          // and we read the next string as parentYKey.
          // It indicates how we store/retrieve parent from `y.share`
          // @type {string|null}
          const parentYKey = cantCopyParentInfo && hasParentYKey ? decoder.readString() : null

          const struct = new Item(
            createID(client, clock),
            null, // left
            origin, // origin
            null, // right
            rightOrigin, // right origin
            cantCopyParentInfo && !hasParentYKey ? decoder.readLeftID() : (parentYKey !== null ? doc.get(parentYKey) : null), // parent
            cantCopyParentInfo && (info & binary.BIT6) === binary.BIT6 ? decoder.readString() : null, // parentSub
            readItemContent(decoder, info) // item content
          )
          */ refs[i] = struct;
                        clock += struct.length;
                    }
            }
        }
    // console.log('time to read: ', performance.now() - start) // @todo remove
    }
    return clientRefs;
};
/**
 * Resume computing structs generated by struct readers.
 *
 * While there is something to do, we integrate structs in this order
 * 1. top element on stack, if stack is not empty
 * 2. next element from current struct reader (if empty, use next struct reader)
 *
 * If struct causally depends on another struct (ref.missing), we put next reader of
 * `ref.id.client` on top of stack.
 *
 * At some point we find a struct that has no causal dependencies,
 * then we start emptying the stack.
 *
 * It is not possible to have circles: i.e. struct1 (from client1) depends on struct2 (from client2)
 * depends on struct3 (from client1). Therefore the max stack size is equal to `structReaders.length`.
 *
 * This method is implemented in a way so that we can resume computation if this update
 * causally depends on another update.
 *
 * @param {Transaction} transaction
 * @param {StructStore} store
 * @param {Map<number, { i: number, refs: (GC | Item)[] }>} clientsStructRefs
 * @return { null | { update: Uint8Array, missing: Map<number,number> } }
 *
 * @private
 * @function
 */ const integrateStructs = (transaction, store, clientsStructRefs)=>{
    /**
   * @type {Array<Item | GC>}
   */ const stack = [];
    // sort them so that we take the higher id first, in case of conflicts the lower id will probably not conflict with the id from the higher user.
    let clientsStructRefsIds = _array.from(clientsStructRefs.keys()).sort((a, b)=>a - b);
    if (clientsStructRefsIds.length === 0) return null;
    const getNextStructTarget = ()=>{
        if (clientsStructRefsIds.length === 0) return null;
        let nextStructsTarget = /** @type {{i:number,refs:Array<GC|Item>}} */ clientsStructRefs.get(clientsStructRefsIds[clientsStructRefsIds.length - 1]);
        while(nextStructsTarget.refs.length === nextStructsTarget.i){
            clientsStructRefsIds.pop();
            if (clientsStructRefsIds.length > 0) nextStructsTarget = /** @type {{i:number,refs:Array<GC|Item>}} */ clientsStructRefs.get(clientsStructRefsIds[clientsStructRefsIds.length - 1]);
            else return null;
        }
        return nextStructsTarget;
    };
    let curStructsTarget = getNextStructTarget();
    if (curStructsTarget === null) return null;
    /**
   * @type {StructStore}
   */ const restStructs = new StructStore();
    const missingSV = new Map();
    /**
   * @param {number} client
   * @param {number} clock
   */ const updateMissingSv = (client, clock)=>{
        const mclock = missingSV.get(client);
        if (mclock == null || mclock > clock) missingSV.set(client, clock);
    };
    /**
   * @type {GC|Item}
   */ let stackHead = /** @type {any} */ curStructsTarget.refs[/** @type {any} */ curStructsTarget.i++];
    // caching the state because it is used very often
    const state = new Map();
    const addStackToRestSS = ()=>{
        for (const item of stack){
            const client = item.id.client;
            const inapplicableItems = clientsStructRefs.get(client);
            if (inapplicableItems) {
                // decrement because we weren't able to apply previous operation
                inapplicableItems.i--;
                restStructs.clients.set(client, inapplicableItems.refs.slice(inapplicableItems.i));
                clientsStructRefs.delete(client);
                inapplicableItems.i = 0;
                inapplicableItems.refs = [];
            } else // item was the last item on clientsStructRefs and the field was already cleared. Add item to restStructs and continue
            restStructs.clients.set(client, [
                item
            ]);
            // remove client from clientsStructRefsIds to prevent users from applying the same update again
            clientsStructRefsIds = clientsStructRefsIds.filter((c)=>c !== client);
        }
        stack.length = 0;
    };
    // iterate over all struct readers until we are done
    while(true){
        if (stackHead.constructor !== Skip) {
            const localClock = _map.setIfUndefined(state, stackHead.id.client, ()=>getState(store, stackHead.id.client));
            const offset = localClock - stackHead.id.clock;
            if (offset < 0) {
                // update from the same client is missing
                stack.push(stackHead);
                updateMissingSv(stackHead.id.client, stackHead.id.clock - 1);
                // hid a dead wall, add all items from stack to restSS
                addStackToRestSS();
            } else {
                const missing = stackHead.getMissing(transaction, store);
                if (missing !== null) {
                    stack.push(stackHead);
                    // get the struct reader that has the missing struct
                    /**
           * @type {{ refs: Array<GC|Item>, i: number }}
           */ const structRefs = clientsStructRefs.get(/** @type {number} */ missing) || {
                        refs: [],
                        i: 0
                    };
                    if (structRefs.refs.length === structRefs.i) {
                        // This update message causally depends on another update message that doesn't exist yet
                        updateMissingSv(/** @type {number} */ missing, getState(store, missing));
                        addStackToRestSS();
                    } else {
                        stackHead = structRefs.refs[structRefs.i++];
                        continue;
                    }
                } else if (offset === 0 || offset < stackHead.length) {
                    // all fine, apply the stackhead
                    stackHead.integrate(transaction, offset);
                    state.set(stackHead.id.client, stackHead.id.clock + stackHead.length);
                }
            }
        }
        // iterate to next stackHead
        if (stack.length > 0) stackHead = /** @type {GC|Item} */ stack.pop();
        else if (curStructsTarget !== null && curStructsTarget.i < curStructsTarget.refs.length) stackHead = /** @type {GC|Item} */ curStructsTarget.refs[curStructsTarget.i++];
        else {
            curStructsTarget = getNextStructTarget();
            if (curStructsTarget === null) break;
            else stackHead = /** @type {GC|Item} */ curStructsTarget.refs[curStructsTarget.i++];
        }
    }
    if (restStructs.clients.size > 0) {
        const encoder = new UpdateEncoderV2();
        writeClientsStructs(encoder, restStructs, new Map());
        // write empty deleteset
        // writeDeleteSet(encoder, new DeleteSet())
        _encoding.writeVarUint(encoder.restEncoder, 0); // => no need for an extra function call, just write 0 deletes
        return {
            missing: missingSV,
            update: encoder.toUint8Array()
        };
    }
    return null;
};
/**
 * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder
 * @param {Transaction} transaction
 *
 * @private
 * @function
 */ const writeStructsFromTransaction = (encoder, transaction)=>writeClientsStructs(encoder, transaction.doc.store, transaction.beforeState);
/**
 * Read and apply a document update.
 *
 * This function has the same effect as `applyUpdate` but accepts a decoder.
 *
 * @param {decoding.Decoder} decoder
 * @param {Doc} ydoc
 * @param {any} [transactionOrigin] This will be stored on `transaction.origin` and `.on('update', (update, origin))`
 * @param {UpdateDecoderV1 | UpdateDecoderV2} [structDecoder]
 *
 * @function
 */ const readUpdateV2 = (decoder, ydoc, transactionOrigin, structDecoder = new UpdateDecoderV2(decoder))=>transact(ydoc, (transaction)=>{
        // force that transaction.local is set to non-local
        transaction.local = false;
        let retry = false;
        const doc = transaction.doc;
        const store = doc.store;
        // let start = performance.now()
        const ss = readClientsStructRefs(structDecoder, doc);
        // console.log('time to read structs: ', performance.now() - start) // @todo remove
        // start = performance.now()
        // console.log('time to merge: ', performance.now() - start) // @todo remove
        // start = performance.now()
        const restStructs = integrateStructs(transaction, store, ss);
        const pending = store.pendingStructs;
        if (pending) {
            // check if we can apply something
            for (const [client, clock] of pending.missing)if (clock < getState(store, client)) {
                retry = true;
                break;
            }
            if (restStructs) {
                // merge restStructs into store.pending
                for (const [client, clock] of restStructs.missing){
                    const mclock = pending.missing.get(client);
                    if (mclock == null || mclock > clock) pending.missing.set(client, clock);
                }
                pending.update = mergeUpdatesV2([
                    pending.update,
                    restStructs.update
                ]);
            }
        } else store.pendingStructs = restStructs;
        // console.log('time to integrate: ', performance.now() - start) // @todo remove
        // start = performance.now()
        const dsRest = readAndApplyDeleteSet(structDecoder, transaction, store);
        if (store.pendingDs) {
            // @todo we could make a lower-bound state-vector check as we do above
            const pendingDSUpdate = new UpdateDecoderV2(_decoding.createDecoder(store.pendingDs));
            _decoding.readVarUint(pendingDSUpdate.restDecoder); // read 0 structs, because we only encode deletes in pendingdsupdate
            const dsRest2 = readAndApplyDeleteSet(pendingDSUpdate, transaction, store);
            if (dsRest && dsRest2) // case 1: ds1 != null && ds2 != null
            store.pendingDs = mergeUpdatesV2([
                dsRest,
                dsRest2
            ]);
            else // case 2: ds1 != null
            // case 3: ds2 != null
            // case 4: ds1 == null && ds2 == null
            store.pendingDs = dsRest || dsRest2;
        } else // Either dsRest == null && pendingDs == null OR dsRest != null
        store.pendingDs = dsRest;
        // console.log('time to cleanup: ', performance.now() - start) // @todo remove
        // start = performance.now()
        // console.log('time to resume delete readers: ', performance.now() - start) // @todo remove
        // start = performance.now()
        if (retry) {
            const update = /** @type {{update: Uint8Array}} */ store.pendingStructs.update;
            store.pendingStructs = null;
            applyUpdateV2(transaction.doc, update);
        }
    }, transactionOrigin, false);
/**
 * Read and apply a document update.
 *
 * This function has the same effect as `applyUpdate` but accepts a decoder.
 *
 * @param {decoding.Decoder} decoder
 * @param {Doc} ydoc
 * @param {any} [transactionOrigin] This will be stored on `transaction.origin` and `.on('update', (update, origin))`
 *
 * @function
 */ const readUpdate = (decoder, ydoc, transactionOrigin)=>readUpdateV2(decoder, ydoc, transactionOrigin, new UpdateDecoderV1(decoder));
/**
 * Apply a document update created by, for example, `y.on('update', update => ..)` or `update = encodeStateAsUpdate()`.
 *
 * This function has the same effect as `readUpdate` but accepts an Uint8Array instead of a Decoder.
 *
 * @param {Doc} ydoc
 * @param {Uint8Array} update
 * @param {any} [transactionOrigin] This will be stored on `transaction.origin` and `.on('update', (update, origin))`
 * @param {typeof UpdateDecoderV1 | typeof UpdateDecoderV2} [YDecoder]
 *
 * @function
 */ const applyUpdateV2 = (ydoc, update, transactionOrigin, YDecoder = UpdateDecoderV2)=>{
    const decoder = _decoding.createDecoder(update);
    readUpdateV2(decoder, ydoc, transactionOrigin, new YDecoder(decoder));
};
/**
 * Apply a document update created by, for example, `y.on('update', update => ..)` or `update = encodeStateAsUpdate()`.
 *
 * This function has the same effect as `readUpdate` but accepts an Uint8Array instead of a Decoder.
 *
 * @param {Doc} ydoc
 * @param {Uint8Array} update
 * @param {any} [transactionOrigin] This will be stored on `transaction.origin` and `.on('update', (update, origin))`
 *
 * @function
 */ const applyUpdate = (ydoc, update, transactionOrigin)=>applyUpdateV2(ydoc, update, transactionOrigin, UpdateDecoderV1);
/**
 * Write all the document as a single update message. If you specify the state of the remote client (`targetStateVector`) it will
 * only write the operations that are missing.
 *
 * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder
 * @param {Doc} doc
 * @param {Map<number,number>} [targetStateVector] The state of the target that receives the update. Leave empty to write all known structs
 *
 * @function
 */ const writeStateAsUpdate = (encoder, doc, targetStateVector = new Map())=>{
    writeClientsStructs(encoder, doc.store, targetStateVector);
    writeDeleteSet(encoder, createDeleteSetFromStructStore(doc.store));
};
/**
 * Write all the document as a single update message that can be applied on the remote document. If you specify the state of the remote client (`targetState`) it will
 * only write the operations that are missing.
 *
 * Use `writeStateAsUpdate` instead if you are working with lib0/encoding.js#Encoder
 *
 * @param {Doc} doc
 * @param {Uint8Array} [encodedTargetStateVector] The state of the target that receives the update. Leave empty to write all known structs
 * @param {UpdateEncoderV1 | UpdateEncoderV2} [encoder]
 * @return {Uint8Array}
 *
 * @function
 */ const encodeStateAsUpdateV2 = (doc, encodedTargetStateVector = new Uint8Array([
    0
]), encoder = new UpdateEncoderV2())=>{
    const targetStateVector = decodeStateVector(encodedTargetStateVector);
    writeStateAsUpdate(encoder, doc, targetStateVector);
    const updates = [
        encoder.toUint8Array()
    ];
    // also add the pending updates (if there are any)
    if (doc.store.pendingDs) updates.push(doc.store.pendingDs);
    if (doc.store.pendingStructs) updates.push(diffUpdateV2(doc.store.pendingStructs.update, encodedTargetStateVector));
    if (updates.length > 1) {
        if (encoder.constructor === UpdateEncoderV1) return mergeUpdates(updates.map((update, i)=>i === 0 ? update : convertUpdateFormatV2ToV1(update)));
        else if (encoder.constructor === UpdateEncoderV2) return mergeUpdatesV2(updates);
    }
    return updates[0];
};
/**
 * Write all the document as a single update message that can be applied on the remote document. If you specify the state of the remote client (`targetState`) it will
 * only write the operations that are missing.
 *
 * Use `writeStateAsUpdate` instead if you are working with lib0/encoding.js#Encoder
 *
 * @param {Doc} doc
 * @param {Uint8Array} [encodedTargetStateVector] The state of the target that receives the update. Leave empty to write all known structs
 * @return {Uint8Array}
 *
 * @function
 */ const encodeStateAsUpdate = (doc, encodedTargetStateVector)=>encodeStateAsUpdateV2(doc, encodedTargetStateVector, new UpdateEncoderV1());
/**
 * Read state vector from Decoder and return as Map
 *
 * @param {DSDecoderV1 | DSDecoderV2} decoder
 * @return {Map<number,number>} Maps `client` to the number next expected `clock` from that client.
 *
 * @function
 */ const readStateVector = (decoder)=>{
    const ss = new Map();
    const ssLength = _decoding.readVarUint(decoder.restDecoder);
    for(let i = 0; i < ssLength; i++){
        const client = _decoding.readVarUint(decoder.restDecoder);
        const clock = _decoding.readVarUint(decoder.restDecoder);
        ss.set(client, clock);
    }
    return ss;
};
/**
 * Read decodedState and return State as Map.
 *
 * @param {Uint8Array} decodedState
 * @return {Map<number,number>} Maps `client` to the number next expected `clock` from that client.
 *
 * @function
 */ // export const decodeStateVectorV2 = decodedState => readStateVector(new DSDecoderV2(decoding.createDecoder(decodedState)))
/**
 * Read decodedState and return State as Map.
 *
 * @param {Uint8Array} decodedState
 * @return {Map<number,number>} Maps `client` to the number next expected `clock` from that client.
 *
 * @function
 */ const decodeStateVector = (decodedState)=>readStateVector(new DSDecoderV1(_decoding.createDecoder(decodedState)));
/**
 * @param {DSEncoderV1 | DSEncoderV2} encoder
 * @param {Map<number,number>} sv
 * @function
 */ const writeStateVector = (encoder, sv)=>{
    _encoding.writeVarUint(encoder.restEncoder, sv.size);
    _array.from(sv.entries()).sort((a, b)=>b[0] - a[0]).forEach(([client, clock])=>{
        _encoding.writeVarUint(encoder.restEncoder, client); // @todo use a special client decoder that is based on mapping
        _encoding.writeVarUint(encoder.restEncoder, clock);
    });
    return encoder;
};
/**
 * @param {DSEncoderV1 | DSEncoderV2} encoder
 * @param {Doc} doc
 *
 * @function
 */ const writeDocumentStateVector = (encoder, doc)=>writeStateVector(encoder, getStateVector(doc.store));
/**
 * Encode State as Uint8Array.
 *
 * @param {Doc|Map<number,number>} doc
 * @param {DSEncoderV1 | DSEncoderV2} [encoder]
 * @return {Uint8Array}
 *
 * @function
 */ const encodeStateVectorV2 = (doc, encoder = new DSEncoderV2())=>{
    if (doc instanceof Map) writeStateVector(encoder, doc);
    else writeDocumentStateVector(encoder, doc);
    return encoder.toUint8Array();
};
/**
 * Encode State as Uint8Array.
 *
 * @param {Doc|Map<number,number>} doc
 * @return {Uint8Array}
 *
 * @function
 */ const encodeStateVector = (doc)=>encodeStateVectorV2(doc, new DSEncoderV1());
/**
 * General event handler implementation.
 *
 * @template ARG0, ARG1
 *
 * @private
 */ class EventHandler {
    constructor(){
        /**
     * @type {Array<function(ARG0, ARG1):void>}
     */ this.l = [];
    }
}
/**
 * @template ARG0,ARG1
 * @returns {EventHandler<ARG0,ARG1>}
 *
 * @private
 * @function
 */ const createEventHandler = ()=>new EventHandler();
/**
 * Adds an event listener that is called when
 * {@link EventHandler#callEventListeners} is called.
 *
 * @template ARG0,ARG1
 * @param {EventHandler<ARG0,ARG1>} eventHandler
 * @param {function(ARG0,ARG1):void} f The event handler.
 *
 * @private
 * @function
 */ const addEventHandlerListener = (eventHandler, f)=>eventHandler.l.push(f);
/**
 * Removes an event listener.
 *
 * @template ARG0,ARG1
 * @param {EventHandler<ARG0,ARG1>} eventHandler
 * @param {function(ARG0,ARG1):void} f The event handler that was added with
 *                     {@link EventHandler#addEventListener}
 *
 * @private
 * @function
 */ const removeEventHandlerListener = (eventHandler, f)=>{
    const l = eventHandler.l;
    const len = l.length;
    eventHandler.l = l.filter((g)=>f !== g);
    if (len === eventHandler.l.length) console.error('[yjs] Tried to remove event handler that doesn\'t exist.');
};
/**
 * Call all event listeners that were added via
 * {@link EventHandler#addEventListener}.
 *
 * @template ARG0,ARG1
 * @param {EventHandler<ARG0,ARG1>} eventHandler
 * @param {ARG0} arg0
 * @param {ARG1} arg1
 *
 * @private
 * @function
 */ const callEventHandlerListeners = (eventHandler, arg0, arg1)=>_function.callAll(eventHandler.l, [
        arg0,
        arg1
    ]);
class ID {
    /**
   * @param {number} client client id
   * @param {number} clock unique per client id, continuous number
   */ constructor(client, clock){
        /**
     * Client id
     * @type {number}
     */ this.client = client;
        /**
     * unique per client id, continuous number
     * @type {number}
     */ this.clock = clock;
    }
}
/**
 * @param {ID | null} a
 * @param {ID | null} b
 * @return {boolean}
 *
 * @function
 */ const compareIDs = (a, b)=>a === b || a !== null && b !== null && a.client === b.client && a.clock === b.clock;
/**
 * @param {number} client
 * @param {number} clock
 *
 * @private
 * @function
 */ const createID = (client, clock)=>new ID(client, clock);
/**
 * @param {encoding.Encoder} encoder
 * @param {ID} id
 *
 * @private
 * @function
 */ const writeID = (encoder, id)=>{
    _encoding.writeVarUint(encoder, id.client);
    _encoding.writeVarUint(encoder, id.clock);
};
/**
 * Read ID.
 * * If first varUint read is 0xFFFFFF a RootID is returned.
 * * Otherwise an ID is returned
 *
 * @param {decoding.Decoder} decoder
 * @return {ID}
 *
 * @private
 * @function
 */ const readID = (decoder)=>createID(_decoding.readVarUint(decoder), _decoding.readVarUint(decoder));
/**
 * The top types are mapped from y.share.get(keyname) => type.
 * `type` does not store any information about the `keyname`.
 * This function finds the correct `keyname` for `type` and throws otherwise.
 *
 * @param {AbstractType<any>} type
 * @return {string}
 *
 * @private
 * @function
 */ const findRootTypeKey = (type)=>{
    // @ts-ignore _y must be defined, otherwise unexpected case
    for (const [key, value] of type.doc.share.entries()){
        if (value === type) return key;
    }
    throw _error.unexpectedCase();
};
/**
 * Check if `parent` is a parent of `child`.
 *
 * @param {AbstractType<any>} parent
 * @param {Item|null} child
 * @return {Boolean} Whether `parent` is a parent of `child`.
 *
 * @private
 * @function
 */ const isParentOf = (parent, child)=>{
    while(child !== null){
        if (child.parent === parent) return true;
        child = /** @type {AbstractType<any>} */ child.parent._item;
    }
    return false;
};
/**
 * Convenient helper to log type information.
 *
 * Do not use in productive systems as the output can be immense!
 *
 * @param {AbstractType<any>} type
 */ const logType = (type)=>{
    const res = [];
    let n = type._start;
    while(n){
        res.push(n);
        n = n.right;
    }
    console.log('Children: ', res);
    console.log('Children content: ', res.filter((m)=>!m.deleted).map((m)=>m.content));
};
class PermanentUserData {
    /**
   * @param {Doc} doc
   * @param {YMap<any>} [storeType]
   */ constructor(doc, storeType = doc.getMap('users')){
        /**
     * @type {Map<string,DeleteSet>}
     */ const dss = new Map();
        this.yusers = storeType;
        this.doc = doc;
        /**
     * Maps from clientid to userDescription
     *
     * @type {Map<number,string>}
     */ this.clients = new Map();
        this.dss = dss;
        /**
     * @param {YMap<any>} user
     * @param {string} userDescription
     */ const initUser = (user, userDescription)=>{
            /**
       * @type {YArray<Uint8Array>}
       */ const ds = user.get('ds');
            const ids = user.get('ids');
            const addClientId = /** @param {number} clientid */ (clientid)=>this.clients.set(clientid, userDescription);
            ds.observe(/** @param {YArrayEvent<any>} event */ (event)=>{
                event.changes.added.forEach((item)=>{
                    item.content.getContent().forEach((encodedDs)=>{
                        if (encodedDs instanceof Uint8Array) this.dss.set(userDescription, mergeDeleteSets([
                            this.dss.get(userDescription) || createDeleteSet(),
                            readDeleteSet(new DSDecoderV1(_decoding.createDecoder(encodedDs)))
                        ]));
                    });
                });
            });
            this.dss.set(userDescription, mergeDeleteSets(ds.map((encodedDs)=>readDeleteSet(new DSDecoderV1(_decoding.createDecoder(encodedDs))))));
            ids.observe(/** @param {YArrayEvent<any>} event */ (event)=>event.changes.added.forEach((item)=>item.content.getContent().forEach(addClientId)));
            ids.forEach(addClientId);
        };
        // observe users
        storeType.observe((event)=>{
            event.keysChanged.forEach((userDescription)=>initUser(storeType.get(userDescription), userDescription));
        });
        // add initial data
        storeType.forEach(initUser);
    }
    /**
   * @param {Doc} doc
   * @param {number} clientid
   * @param {string} userDescription
   * @param {Object} conf
   * @param {function(Transaction, DeleteSet):boolean} [conf.filter]
   */ setUserMapping(doc, clientid, userDescription, { filter = ()=>true } = {}) {
        const users = this.yusers;
        let user = users.get(userDescription);
        if (!user) {
            user = new YMap();
            user.set('ids', new YArray());
            user.set('ds', new YArray());
            users.set(userDescription, user);
        }
        user.get('ids').push([
            clientid
        ]);
        users.observe((_event)=>{
            setTimeout(()=>{
                const userOverwrite = users.get(userDescription);
                if (userOverwrite !== user) {
                    // user was overwritten, port all data over to the next user object
                    // @todo Experiment with Y.Sets here
                    user = userOverwrite;
                    // @todo iterate over old type
                    this.clients.forEach((_userDescription, clientid)=>{
                        if (userDescription === _userDescription) user.get('ids').push([
                            clientid
                        ]);
                    });
                    const encoder = new DSEncoderV1();
                    const ds = this.dss.get(userDescription);
                    if (ds) {
                        writeDeleteSet(encoder, ds);
                        user.get('ds').push([
                            encoder.toUint8Array()
                        ]);
                    }
                }
            }, 0);
        });
        doc.on('afterTransaction', /** @param {Transaction} transaction */ (transaction)=>{
            setTimeout(()=>{
                const yds = user.get('ds');
                const ds = transaction.deleteSet;
                if (transaction.local && ds.clients.size > 0 && filter(transaction, ds)) {
                    const encoder = new DSEncoderV1();
                    writeDeleteSet(encoder, ds);
                    yds.push([
                        encoder.toUint8Array()
                    ]);
                }
            });
        });
    }
    /**
   * @param {number} clientid
   * @return {any}
   */ getUserByClientId(clientid) {
        return this.clients.get(clientid) || null;
    }
    /**
   * @param {ID} id
   * @return {string | null}
   */ getUserByDeletedId(id) {
        for (const [userDescription, ds] of this.dss.entries()){
            if (isDeleted(ds, id)) return userDescription;
        }
        return null;
    }
}
/**
 * A relative position is based on the Yjs model and is not affected by document changes.
 * E.g. If you place a relative position before a certain character, it will always point to this character.
 * If you place a relative position at the end of a type, it will always point to the end of the type.
 *
 * A numeric position is often unsuited for user selections, because it does not change when content is inserted
 * before or after.
 *
 * ```Insert(0, 'x')('a|bc') = 'xa|bc'``` Where | is the relative position.
 *
 * One of the properties must be defined.
 *
 * @example
 *   // Current cursor position is at position 10
 *   const relativePosition = createRelativePositionFromIndex(yText, 10)
 *   // modify yText
 *   yText.insert(0, 'abc')
 *   yText.delete(3, 10)
 *   // Compute the cursor position
 *   const absolutePosition = createAbsolutePositionFromRelativePosition(y, relativePosition)
 *   absolutePosition.type === yText // => true
 *   console.log('cursor location is ' + absolutePosition.index) // => cursor location is 3
 *
 */ class RelativePosition {
    /**
   * @param {ID|null} type
   * @param {string|null} tname
   * @param {ID|null} item
   * @param {number} assoc
   */ constructor(type, tname, item, assoc = 0){
        /**
     * @type {ID|null}
     */ this.type = type;
        /**
     * @type {string|null}
     */ this.tname = tname;
        /**
     * @type {ID | null}
     */ this.item = item;
        /**
     * A relative position is associated to a specific character. By default
     * assoc >= 0, the relative position is associated to the character
     * after the meant position.
     * I.e. position 1 in 'ab' is associated to character 'b'.
     *
     * If assoc < 0, then the relative position is associated to the character
     * before the meant position.
     *
     * @type {number}
     */ this.assoc = assoc;
    }
}
/**
 * @param {RelativePosition} rpos
 * @return {any}
 */ const relativePositionToJSON = (rpos)=>{
    const json = {};
    if (rpos.type) json.type = rpos.type;
    if (rpos.tname) json.tname = rpos.tname;
    if (rpos.item) json.item = rpos.item;
    if (rpos.assoc != null) json.assoc = rpos.assoc;
    return json;
};
/**
 * @param {any} json
 * @return {RelativePosition}
 *
 * @function
 */ const createRelativePositionFromJSON = (json)=>new RelativePosition(json.type == null ? null : createID(json.type.client, json.type.clock), json.tname ?? null, json.item == null ? null : createID(json.item.client, json.item.clock), json.assoc == null ? 0 : json.assoc);
class AbsolutePosition {
    /**
   * @param {AbstractType<any>} type
   * @param {number} index
   * @param {number} [assoc]
   */ constructor(type, index, assoc = 0){
        /**
     * @type {AbstractType<any>}
     */ this.type = type;
        /**
     * @type {number}
     */ this.index = index;
        this.assoc = assoc;
    }
}
/**
 * @param {AbstractType<any>} type
 * @param {number} index
 * @param {number} [assoc]
 *
 * @function
 */ const createAbsolutePosition = (type, index, assoc = 0)=>new AbsolutePosition(type, index, assoc);
/**
 * @param {AbstractType<any>} type
 * @param {ID|null} item
 * @param {number} [assoc]
 *
 * @function
 */ const createRelativePosition = (type, item, assoc)=>{
    let typeid = null;
    let tname = null;
    if (type._item === null) tname = findRootTypeKey(type);
    else typeid = createID(type._item.id.client, type._item.id.clock);
    return new RelativePosition(typeid, tname, item, assoc);
};
/**
 * Create a relativePosition based on a absolute position.
 *
 * @param {AbstractType<any>} type The base type (e.g. YText or YArray).
 * @param {number} index The absolute position.
 * @param {number} [assoc]
 * @return {RelativePosition}
 *
 * @function
 */ const createRelativePositionFromTypeIndex = (type, index, assoc = 0)=>{
    let t = type._start;
    if (assoc < 0) {
        // associated to the left character or the beginning of a type, increment index if possible.
        if (index === 0) return createRelativePosition(type, null, assoc);
        index--;
    }
    while(t !== null){
        if (!t.deleted && t.countable) {
            if (t.length > index) // case 1: found position somewhere in the linked list
            return createRelativePosition(type, createID(t.id.client, t.id.clock + index), assoc);
            index -= t.length;
        }
        if (t.right === null && assoc < 0) // left-associated position, return last available id
        return createRelativePosition(type, t.lastId, assoc);
        t = t.right;
    }
    return createRelativePosition(type, null, assoc);
};
/**
 * @param {encoding.Encoder} encoder
 * @param {RelativePosition} rpos
 *
 * @function
 */ const writeRelativePosition = (encoder, rpos)=>{
    const { type, tname, item, assoc } = rpos;
    if (item !== null) {
        _encoding.writeVarUint(encoder, 0);
        writeID(encoder, item);
    } else if (tname !== null) {
        // case 2: found position at the end of the list and type is stored in y.share
        _encoding.writeUint8(encoder, 1);
        _encoding.writeVarString(encoder, tname);
    } else if (type !== null) {
        // case 3: found position at the end of the list and type is attached to an item
        _encoding.writeUint8(encoder, 2);
        writeID(encoder, type);
    } else throw _error.unexpectedCase();
    _encoding.writeVarInt(encoder, assoc);
    return encoder;
};
/**
 * @param {RelativePosition} rpos
 * @return {Uint8Array}
 */ const encodeRelativePosition = (rpos)=>{
    const encoder = _encoding.createEncoder();
    writeRelativePosition(encoder, rpos);
    return _encoding.toUint8Array(encoder);
};
/**
 * @param {decoding.Decoder} decoder
 * @return {RelativePosition}
 *
 * @function
 */ const readRelativePosition = (decoder)=>{
    let type = null;
    let tname = null;
    let itemID = null;
    switch(_decoding.readVarUint(decoder)){
        case 0:
            // case 1: found position somewhere in the linked list
            itemID = readID(decoder);
            break;
        case 1:
            // case 2: found position at the end of the list and type is stored in y.share
            tname = _decoding.readVarString(decoder);
            break;
        case 2:
            // case 3: found position at the end of the list and type is attached to an item
            type = readID(decoder);
    }
    const assoc = _decoding.hasContent(decoder) ? _decoding.readVarInt(decoder) : 0;
    return new RelativePosition(type, tname, itemID, assoc);
};
/**
 * @param {Uint8Array} uint8Array
 * @return {RelativePosition}
 */ const decodeRelativePosition = (uint8Array)=>readRelativePosition(_decoding.createDecoder(uint8Array));
/**
 * @param {StructStore} store
 * @param {ID} id
 */ const getItemWithOffset = (store, id)=>{
    const item = getItem(store, id);
    const diff = id.clock - item.id.clock;
    return {
        item,
        diff
    };
};
/**
 * Transform a relative position to an absolute position.
 *
 * If you want to share the relative position with other users, you should set
 * `followUndoneDeletions` to false to get consistent results across all clients.
 *
 * When calculating the absolute position, we try to follow the "undone deletions". This yields
 * better results for the user who performed undo. However, only the user who performed the undo
 * will get the better results, the other users don't know which operations recreated a deleted
 * range of content. There is more information in this ticket: https://github.com/yjs/yjs/issues/638
 *
 * @param {RelativePosition} rpos
 * @param {Doc} doc
 * @param {boolean} followUndoneDeletions - whether to follow undone deletions - see https://github.com/yjs/yjs/issues/638
 * @return {AbsolutePosition|null}
 *
 * @function
 */ const createAbsolutePositionFromRelativePosition = (rpos, doc, followUndoneDeletions = true)=>{
    const store = doc.store;
    const rightID = rpos.item;
    const typeID = rpos.type;
    const tname = rpos.tname;
    const assoc = rpos.assoc;
    let type = null;
    let index = 0;
    if (rightID !== null) {
        if (getState(store, rightID.client) <= rightID.clock) return null;
        const res = followUndoneDeletions ? followRedone(store, rightID) : getItemWithOffset(store, rightID);
        const right = res.item;
        if (!(right instanceof Item)) return null;
        type = /** @type {AbstractType<any>} */ right.parent;
        if (type._item === null || !type._item.deleted) {
            index = right.deleted || !right.countable ? 0 : res.diff + (assoc >= 0 ? 0 : 1); // adjust position based on left association if necessary
            let n = right.left;
            while(n !== null){
                if (!n.deleted && n.countable) index += n.length;
                n = n.left;
            }
        }
    } else {
        if (tname !== null) type = doc.get(tname);
        else if (typeID !== null) {
            if (getState(store, typeID.client) <= typeID.clock) // type does not exist yet
            return null;
            const { item } = followUndoneDeletions ? followRedone(store, typeID) : {
                item: getItem(store, typeID)
            };
            if (item instanceof Item && item.content instanceof ContentType) type = item.content.type;
            else // struct is garbage collected
            return null;
        } else throw _error.unexpectedCase();
        if (assoc >= 0) index = type._length;
        else index = 0;
    }
    return createAbsolutePosition(type, index, rpos.assoc);
};
/**
 * @param {RelativePosition|null} a
 * @param {RelativePosition|null} b
 * @return {boolean}
 *
 * @function
 */ const compareRelativePositions = (a, b)=>a === b || a !== null && b !== null && a.tname === b.tname && compareIDs(a.item, b.item) && compareIDs(a.type, b.type) && a.assoc === b.assoc;
class Snapshot {
    /**
   * @param {DeleteSet} ds
   * @param {Map<number,number>} sv state map
   */ constructor(ds, sv){
        /**
     * @type {DeleteSet}
     */ this.ds = ds;
        /**
     * State Map
     * @type {Map<number,number>}
     */ this.sv = sv;
    }
}
/**
 * @param {Snapshot} snap1
 * @param {Snapshot} snap2
 * @return {boolean}
 */ const equalSnapshots = (snap1, snap2)=>{
    const ds1 = snap1.ds.clients;
    const ds2 = snap2.ds.clients;
    const sv1 = snap1.sv;
    const sv2 = snap2.sv;
    if (sv1.size !== sv2.size || ds1.size !== ds2.size) return false;
    for (const [key, value] of sv1.entries()){
        if (sv2.get(key) !== value) return false;
    }
    for (const [client, dsitems1] of ds1.entries()){
        const dsitems2 = ds2.get(client) || [];
        if (dsitems1.length !== dsitems2.length) return false;
        for(let i = 0; i < dsitems1.length; i++){
            const dsitem1 = dsitems1[i];
            const dsitem2 = dsitems2[i];
            if (dsitem1.clock !== dsitem2.clock || dsitem1.len !== dsitem2.len) return false;
        }
    }
    return true;
};
/**
 * @param {Snapshot} snapshot
 * @param {DSEncoderV1 | DSEncoderV2} [encoder]
 * @return {Uint8Array}
 */ const encodeSnapshotV2 = (snapshot, encoder = new DSEncoderV2())=>{
    writeDeleteSet(encoder, snapshot.ds);
    writeStateVector(encoder, snapshot.sv);
    return encoder.toUint8Array();
};
/**
 * @param {Snapshot} snapshot
 * @return {Uint8Array}
 */ const encodeSnapshot = (snapshot)=>encodeSnapshotV2(snapshot, new DSEncoderV1());
/**
 * @param {Uint8Array} buf
 * @param {DSDecoderV1 | DSDecoderV2} [decoder]
 * @return {Snapshot}
 */ const decodeSnapshotV2 = (buf, decoder = new DSDecoderV2(_decoding.createDecoder(buf)))=>{
    return new Snapshot(readDeleteSet(decoder), readStateVector(decoder));
};
/**
 * @param {Uint8Array} buf
 * @return {Snapshot}
 */ const decodeSnapshot = (buf)=>decodeSnapshotV2(buf, new DSDecoderV1(_decoding.createDecoder(buf)));
/**
 * @param {DeleteSet} ds
 * @param {Map<number,number>} sm
 * @return {Snapshot}
 */ const createSnapshot = (ds, sm)=>new Snapshot(ds, sm);
const emptySnapshot = createSnapshot(createDeleteSet(), new Map());
/**
 * @param {Doc} doc
 * @return {Snapshot}
 */ const snapshot = (doc)=>createSnapshot(createDeleteSetFromStructStore(doc.store), getStateVector(doc.store));
/**
 * @param {Item} item
 * @param {Snapshot|undefined} snapshot
 *
 * @protected
 * @function
 */ const isVisible = (item, snapshot)=>snapshot === undefined ? !item.deleted : snapshot.sv.has(item.id.client) && (snapshot.sv.get(item.id.client) || 0) > item.id.clock && !isDeleted(snapshot.ds, item.id);
/**
 * @param {Transaction} transaction
 * @param {Snapshot} snapshot
 */ const splitSnapshotAffectedStructs = (transaction, snapshot)=>{
    const meta = _map.setIfUndefined(transaction.meta, splitSnapshotAffectedStructs, _set.create);
    const store = transaction.doc.store;
    // check if we already split for this snapshot
    if (!meta.has(snapshot)) {
        snapshot.sv.forEach((clock, client)=>{
            if (clock < getState(store, client)) getItemCleanStart(transaction, createID(client, clock));
        });
        iterateDeletedStructs(transaction, snapshot.ds, (_item)=>{});
        meta.add(snapshot);
    }
};
/**
 * @example
 *  const ydoc = new Y.Doc({ gc: false })
 *  ydoc.getText().insert(0, 'world!')
 *  const snapshot = Y.snapshot(ydoc)
 *  ydoc.getText().insert(0, 'hello ')
 *  const restored = Y.createDocFromSnapshot(ydoc, snapshot)
 *  assert(restored.getText().toString() === 'world!')
 *
 * @param {Doc} originDoc
 * @param {Snapshot} snapshot
 * @param {Doc} [newDoc] Optionally, you may define the Yjs document that receives the data from originDoc
 * @return {Doc}
 */ const createDocFromSnapshot = (originDoc, snapshot, newDoc = new Doc())=>{
    if (originDoc.gc) // we should not try to restore a GC-ed document, because some of the restored items might have their content deleted
    throw new Error('Garbage-collection must be disabled in `originDoc`!');
    const { sv, ds } = snapshot;
    const encoder = new UpdateEncoderV2();
    originDoc.transact((transaction)=>{
        let size = 0;
        sv.forEach((clock)=>{
            if (clock > 0) size++;
        });
        _encoding.writeVarUint(encoder.restEncoder, size);
        // splitting the structs before writing them to the encoder
        for (const [client, clock] of sv){
            if (clock === 0) continue;
            if (clock < getState(originDoc.store, client)) getItemCleanStart(transaction, createID(client, clock));
            const structs = originDoc.store.clients.get(client) || [];
            const lastStructIndex = findIndexSS(structs, clock - 1);
            // write # encoded structs
            _encoding.writeVarUint(encoder.restEncoder, lastStructIndex + 1);
            encoder.writeClient(client);
            // first clock written is 0
            _encoding.writeVarUint(encoder.restEncoder, 0);
            for(let i = 0; i <= lastStructIndex; i++)structs[i].write(encoder, 0);
        }
        writeDeleteSet(encoder, ds);
    });
    applyUpdateV2(newDoc, encoder.toUint8Array(), 'snapshot');
    return newDoc;
};
/**
 * @param {Snapshot} snapshot
 * @param {Uint8Array} update
 * @param {typeof UpdateDecoderV2 | typeof UpdateDecoderV1} [YDecoder]
 */ const snapshotContainsUpdateV2 = (snapshot, update, YDecoder = UpdateDecoderV2)=>{
    const updateDecoder = new YDecoder(_decoding.createDecoder(update));
    const lazyDecoder = new LazyStructReader(updateDecoder, false);
    for(let curr = lazyDecoder.curr; curr !== null; curr = lazyDecoder.next()){
        if ((snapshot.sv.get(curr.id.client) || 0) < curr.id.clock + curr.length) return false;
    }
    const mergedDS = mergeDeleteSets([
        snapshot.ds,
        readDeleteSet(updateDecoder)
    ]);
    return equalDeleteSets(snapshot.ds, mergedDS);
};
/**
 * @param {Snapshot} snapshot
 * @param {Uint8Array} update
 */ const snapshotContainsUpdate = (snapshot, update)=>snapshotContainsUpdateV2(snapshot, update, UpdateDecoderV1);
class StructStore {
    constructor(){
        /**
     * @type {Map<number,Array<GC|Item>>}
     */ this.clients = new Map();
        /**
     * @type {null | { missing: Map<number, number>, update: Uint8Array }}
     */ this.pendingStructs = null;
        /**
     * @type {null | Uint8Array}
     */ this.pendingDs = null;
    }
}
/**
 * Return the states as a Map<client,clock>.
 * Note that clock refers to the next expected clock id.
 *
 * @param {StructStore} store
 * @return {Map<number,number>}
 *
 * @public
 * @function
 */ const getStateVector = (store)=>{
    const sm = new Map();
    store.clients.forEach((structs, client)=>{
        const struct = structs[structs.length - 1];
        sm.set(client, struct.id.clock + struct.length);
    });
    return sm;
};
/**
 * @param {StructStore} store
 * @param {number} client
 * @return {number}
 *
 * @public
 * @function
 */ const getState = (store, client)=>{
    const structs = store.clients.get(client);
    if (structs === undefined) return 0;
    const lastStruct = structs[structs.length - 1];
    return lastStruct.id.clock + lastStruct.length;
};
/**
 * @param {StructStore} store
 * @param {GC|Item} struct
 *
 * @private
 * @function
 */ const addStruct = (store, struct)=>{
    let structs = store.clients.get(struct.id.client);
    if (structs === undefined) {
        structs = [];
        store.clients.set(struct.id.client, structs);
    } else {
        const lastStruct = structs[structs.length - 1];
        if (lastStruct.id.clock + lastStruct.length !== struct.id.clock) throw _error.unexpectedCase();
    }
    structs.push(struct);
};
/**
 * Perform a binary search on a sorted array
 * @param {Array<Item|GC>} structs
 * @param {number} clock
 * @return {number}
 *
 * @private
 * @function
 */ const findIndexSS = (structs, clock)=>{
    let left = 0;
    let right = structs.length - 1;
    let mid = structs[right];
    let midclock = mid.id.clock;
    if (midclock === clock) return right;
    // @todo does it even make sense to pivot the search?
    // If a good split misses, it might actually increase the time to find the correct item.
    // Currently, the only advantage is that search with pivoting might find the item on the first try.
    let midindex = _math.floor(clock / (midclock + mid.length - 1) * right); // pivoting the search
    while(left <= right){
        mid = structs[midindex];
        midclock = mid.id.clock;
        if (midclock <= clock) {
            if (clock < midclock + mid.length) return midindex;
            left = midindex + 1;
        } else right = midindex - 1;
        midindex = _math.floor((left + right) / 2);
    }
    // Always check state before looking for a struct in StructStore
    // Therefore the case of not finding a struct is unexpected
    throw _error.unexpectedCase();
};
/**
 * Expects that id is actually in store. This function throws or is an infinite loop otherwise.
 *
 * @param {StructStore} store
 * @param {ID} id
 * @return {GC|Item}
 *
 * @private
 * @function
 */ const find = (store, id)=>{
    /**
   * @type {Array<GC|Item>}
   */ // @ts-ignore
    const structs = store.clients.get(id.client);
    return structs[findIndexSS(structs, id.clock)];
};
/**
 * Expects that id is actually in store. This function throws or is an infinite loop otherwise.
 * @private
 * @function
 */ const getItem = /** @type {function(StructStore,ID):Item} */ find;
/**
 * @param {Transaction} transaction
 * @param {Array<Item|GC>} structs
 * @param {number} clock
 */ const findIndexCleanStart = (transaction, structs, clock)=>{
    const index = findIndexSS(structs, clock);
    const struct = structs[index];
    if (struct.id.clock < clock && struct instanceof Item) {
        structs.splice(index + 1, 0, splitItem(transaction, struct, clock - struct.id.clock));
        return index + 1;
    }
    return index;
};
/**
 * Expects that id is actually in store. This function throws or is an infinite loop otherwise.
 *
 * @param {Transaction} transaction
 * @param {ID} id
 * @return {Item}
 *
 * @private
 * @function
 */ const getItemCleanStart = (transaction, id)=>{
    const structs = /** @type {Array<Item>} */ transaction.doc.store.clients.get(id.client);
    return structs[findIndexCleanStart(transaction, structs, id.clock)];
};
/**
 * Expects that id is actually in store. This function throws or is an infinite loop otherwise.
 *
 * @param {Transaction} transaction
 * @param {StructStore} store
 * @param {ID} id
 * @return {Item}
 *
 * @private
 * @function
 */ const getItemCleanEnd = (transaction, store, id)=>{
    /**
   * @type {Array<Item>}
   */ // @ts-ignore
    const structs = store.clients.get(id.client);
    const index = findIndexSS(structs, id.clock);
    const struct = structs[index];
    if (id.clock !== struct.id.clock + struct.length - 1 && struct.constructor !== GC) structs.splice(index + 1, 0, splitItem(transaction, struct, id.clock - struct.id.clock + 1));
    return struct;
};
/**
 * Replace `item` with `newitem` in store
 * @param {StructStore} store
 * @param {GC|Item} struct
 * @param {GC|Item} newStruct
 *
 * @private
 * @function
 */ const replaceStruct = (store, struct, newStruct)=>{
    const structs = /** @type {Array<GC|Item>} */ store.clients.get(struct.id.client);
    structs[findIndexSS(structs, struct.id.clock)] = newStruct;
};
/**
 * Iterate over a range of structs
 *
 * @param {Transaction} transaction
 * @param {Array<Item|GC>} structs
 * @param {number} clockStart Inclusive start
 * @param {number} len
 * @param {function(GC|Item):void} f
 *
 * @function
 */ const iterateStructs = (transaction, structs, clockStart, len, f)=>{
    if (len === 0) return;
    const clockEnd = clockStart + len;
    let index = findIndexCleanStart(transaction, structs, clockStart);
    let struct;
    do {
        struct = structs[index++];
        if (clockEnd < struct.id.clock + struct.length) findIndexCleanStart(transaction, structs, clockEnd);
        f(struct);
    }while (index < structs.length && structs[index].id.clock < clockEnd);
};
/**
 * A transaction is created for every change on the Yjs model. It is possible
 * to bundle changes on the Yjs model in a single transaction to
 * minimize the number on messages sent and the number of observer calls.
 * If possible the user of this library should bundle as many changes as
 * possible. Here is an example to illustrate the advantages of bundling:
 *
 * @example
 * const ydoc = new Y.Doc()
 * const map = ydoc.getMap('map')
 * // Log content when change is triggered
 * map.observe(() => {
 *   console.log('change triggered')
 * })
 * // Each change on the map type triggers a log message:
 * map.set('a', 0) // => "change triggered"
 * map.set('b', 0) // => "change triggered"
 * // When put in a transaction, it will trigger the log after the transaction:
 * ydoc.transact(() => {
 *   map.set('a', 1)
 *   map.set('b', 1)
 * }) // => "change triggered"
 *
 * @public
 */ class Transaction {
    /**
   * @param {Doc} doc
   * @param {any} origin
   * @param {boolean} local
   */ constructor(doc, origin, local){
        /**
     * The Yjs instance.
     * @type {Doc}
     */ this.doc = doc;
        /**
     * Describes the set of deleted items by ids
     * @type {DeleteSet}
     */ this.deleteSet = new DeleteSet();
        /**
     * Holds the state before the transaction started.
     * @type {Map<Number,Number>}
     */ this.beforeState = getStateVector(doc.store);
        /**
     * Holds the state after the transaction.
     * @type {Map<Number,Number>}
     */ this.afterState = new Map();
        /**
     * All types that were directly modified (property added or child
     * inserted/deleted). New types are not included in this Set.
     * Maps from type to parentSubs (`item.parentSub = null` for YArray)
     * @type {Map<AbstractType<YEvent<any>>,Set<String|null>>}
     */ this.changed = new Map();
        /**
     * Stores the events for the types that observe also child elements.
     * It is mainly used by `observeDeep`.
     * @type {Map<AbstractType<YEvent<any>>,Array<YEvent<any>>>}
     */ this.changedParentTypes = new Map();
        /**
     * @type {Array<AbstractStruct>}
     */ this._mergeStructs = [];
        /**
     * @type {any}
     */ this.origin = origin;
        /**
     * Stores meta information on the transaction
     * @type {Map<any,any>}
     */ this.meta = new Map();
        /**
     * Whether this change originates from this doc.
     * @type {boolean}
     */ this.local = local;
        /**
     * @type {Set<Doc>}
     */ this.subdocsAdded = new Set();
        /**
     * @type {Set<Doc>}
     */ this.subdocsRemoved = new Set();
        /**
     * @type {Set<Doc>}
     */ this.subdocsLoaded = new Set();
        /**
     * @type {boolean}
     */ this._needFormattingCleanup = false;
    }
}
/**
 * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder
 * @param {Transaction} transaction
 * @return {boolean} Whether data was written.
 */ const writeUpdateMessageFromTransaction = (encoder, transaction)=>{
    if (transaction.deleteSet.clients.size === 0 && !_map.any(transaction.afterState, (clock, client)=>transaction.beforeState.get(client) !== clock)) return false;
    sortAndMergeDeleteSet(transaction.deleteSet);
    writeStructsFromTransaction(encoder, transaction);
    writeDeleteSet(encoder, transaction.deleteSet);
    return true;
};
/**
 * If `type.parent` was added in current transaction, `type` technically
 * did not change, it was just added and we should not fire events for `type`.
 *
 * @param {Transaction} transaction
 * @param {AbstractType<YEvent<any>>} type
 * @param {string|null} parentSub
 */ const addChangedTypeToTransaction = (transaction, type, parentSub)=>{
    const item = type._item;
    if (item === null || item.id.clock < (transaction.beforeState.get(item.id.client) || 0) && !item.deleted) _map.setIfUndefined(transaction.changed, type, _set.create).add(parentSub);
};
/**
 * @param {Array<AbstractStruct>} structs
 * @param {number} pos
 * @return {number} # of merged structs
 */ const tryToMergeWithLefts = (structs, pos)=>{
    let right = structs[pos];
    let left = structs[pos - 1];
    let i = pos;
    for(; i > 0; right = left, left = structs[--i - 1]){
        if (left.deleted === right.deleted && left.constructor === right.constructor) {
            if (left.mergeWith(right)) {
                if (right instanceof Item && right.parentSub !== null && /** @type {AbstractType<any>} */ right.parent._map.get(right.parentSub) === right) /** @type {AbstractType<any>} */ right.parent._map.set(right.parentSub, /** @type {Item} */ left);
                continue;
            }
        }
        break;
    }
    const merged = pos - i;
    if (merged) // remove all merged structs from the array
    structs.splice(pos + 1 - merged, merged);
    return merged;
};
/**
 * @param {DeleteSet} ds
 * @param {StructStore} store
 * @param {function(Item):boolean} gcFilter
 */ const tryGcDeleteSet = (ds, store, gcFilter)=>{
    for (const [client, deleteItems] of ds.clients.entries()){
        const structs = /** @type {Array<GC|Item>} */ store.clients.get(client);
        for(let di = deleteItems.length - 1; di >= 0; di--){
            const deleteItem = deleteItems[di];
            const endDeleteItemClock = deleteItem.clock + deleteItem.len;
            for(let si = findIndexSS(structs, deleteItem.clock), struct = structs[si]; si < structs.length && struct.id.clock < endDeleteItemClock; struct = structs[++si]){
                const struct = structs[si];
                if (deleteItem.clock + deleteItem.len <= struct.id.clock) break;
                if (struct instanceof Item && struct.deleted && !struct.keep && gcFilter(struct)) struct.gc(store, false);
            }
        }
    }
};
/**
 * @param {DeleteSet} ds
 * @param {StructStore} store
 */ const tryMergeDeleteSet = (ds, store)=>{
    // try to merge deleted / gc'd items
    // merge from right to left for better efficiency and so we don't miss any merge targets
    ds.clients.forEach((deleteItems, client)=>{
        const structs = /** @type {Array<GC|Item>} */ store.clients.get(client);
        for(let di = deleteItems.length - 1; di >= 0; di--){
            const deleteItem = deleteItems[di];
            // start with merging the item next to the last deleted item
            const mostRightIndexToCheck = _math.min(structs.length - 1, 1 + findIndexSS(structs, deleteItem.clock + deleteItem.len - 1));
            for(let si = mostRightIndexToCheck, struct = structs[si]; si > 0 && struct.id.clock >= deleteItem.clock; struct = structs[si])si -= 1 + tryToMergeWithLefts(structs, si);
        }
    });
};
/**
 * @param {DeleteSet} ds
 * @param {StructStore} store
 * @param {function(Item):boolean} gcFilter
 */ const tryGc = (ds, store, gcFilter)=>{
    tryGcDeleteSet(ds, store, gcFilter);
    tryMergeDeleteSet(ds, store);
};
/**
 * @param {Array<Transaction>} transactionCleanups
 * @param {number} i
 */ const cleanupTransactions = (transactionCleanups, i)=>{
    if (i < transactionCleanups.length) {
        const transaction = transactionCleanups[i];
        const doc = transaction.doc;
        const store = doc.store;
        const ds = transaction.deleteSet;
        const mergeStructs = transaction._mergeStructs;
        try {
            sortAndMergeDeleteSet(ds);
            transaction.afterState = getStateVector(transaction.doc.store);
            doc.emit('beforeObserverCalls', [
                transaction,
                doc
            ]);
            /**
       * An array of event callbacks.
       *
       * Each callback is called even if the other ones throw errors.
       *
       * @type {Array<function():void>}
       */ const fs = [];
            // observe events on changed types
            transaction.changed.forEach((subs, itemtype)=>fs.push(()=>{
                    if (itemtype._item === null || !itemtype._item.deleted) itemtype._callObserver(transaction, subs);
                }));
            fs.push(()=>{
                // deep observe events
                transaction.changedParentTypes.forEach((events, type)=>{
                    // We need to think about the possibility that the user transforms the
                    // Y.Doc in the event.
                    if (type._dEH.l.length > 0 && (type._item === null || !type._item.deleted)) {
                        events = events.filter((event)=>event.target._item === null || !event.target._item.deleted);
                        events.forEach((event)=>{
                            event.currentTarget = type;
                            // path is relative to the current target
                            event._path = null;
                        });
                        // sort events by path length so that top-level events are fired first.
                        events.sort((event1, event2)=>event1.path.length - event2.path.length);
                        // We don't need to check for events.length
                        // because we know it has at least one element
                        callEventHandlerListeners(type._dEH, events, transaction);
                    }
                });
            });
            fs.push(()=>doc.emit('afterTransaction', [
                    transaction,
                    doc
                ]));
            (0, _function.callAll)(fs, []);
            if (transaction._needFormattingCleanup) cleanupYTextAfterTransaction(transaction);
        } finally{
            // Replace deleted items with ItemDeleted / GC.
            // This is where content is actually remove from the Yjs Doc.
            if (doc.gc) tryGcDeleteSet(ds, store, doc.gcFilter);
            tryMergeDeleteSet(ds, store);
            // on all affected store.clients props, try to merge
            transaction.afterState.forEach((clock, client)=>{
                const beforeClock = transaction.beforeState.get(client) || 0;
                if (beforeClock !== clock) {
                    const structs = /** @type {Array<GC|Item>} */ store.clients.get(client);
                    // we iterate from right to left so we can safely remove entries
                    const firstChangePos = _math.max(findIndexSS(structs, beforeClock), 1);
                    for(let i = structs.length - 1; i >= firstChangePos;)i -= 1 + tryToMergeWithLefts(structs, i);
                }
            });
            // try to merge mergeStructs
            // @todo: it makes more sense to transform mergeStructs to a DS, sort it, and merge from right to left
            //        but at the moment DS does not handle duplicates
            for(let i = mergeStructs.length - 1; i >= 0; i--){
                const { client, clock } = mergeStructs[i].id;
                const structs = /** @type {Array<GC|Item>} */ store.clients.get(client);
                const replacedStructPos = findIndexSS(structs, clock);
                if (replacedStructPos + 1 < structs.length) {
                    if (tryToMergeWithLefts(structs, replacedStructPos + 1) > 1) continue; // no need to perform next check, both are already merged
                }
                if (replacedStructPos > 0) tryToMergeWithLefts(structs, replacedStructPos);
            }
            if (!transaction.local && transaction.afterState.get(doc.clientID) !== transaction.beforeState.get(doc.clientID)) {
                _logging.print(_logging.ORANGE, _logging.BOLD, '[yjs] ', _logging.UNBOLD, _logging.RED, 'Changed the client-id because another client seems to be using it.');
                doc.clientID = generateNewClientId();
            }
            // @todo Merge all the transactions into one and provide send the data as a single update message
            doc.emit('afterTransactionCleanup', [
                transaction,
                doc
            ]);
            if (doc._observers.has('update')) {
                const encoder = new UpdateEncoderV1();
                const hasContent = writeUpdateMessageFromTransaction(encoder, transaction);
                if (hasContent) doc.emit('update', [
                    encoder.toUint8Array(),
                    transaction.origin,
                    doc,
                    transaction
                ]);
            }
            if (doc._observers.has('updateV2')) {
                const encoder = new UpdateEncoderV2();
                const hasContent = writeUpdateMessageFromTransaction(encoder, transaction);
                if (hasContent) doc.emit('updateV2', [
                    encoder.toUint8Array(),
                    transaction.origin,
                    doc,
                    transaction
                ]);
            }
            const { subdocsAdded, subdocsLoaded, subdocsRemoved } = transaction;
            if (subdocsAdded.size > 0 || subdocsRemoved.size > 0 || subdocsLoaded.size > 0) {
                subdocsAdded.forEach((subdoc)=>{
                    subdoc.clientID = doc.clientID;
                    if (subdoc.collectionid == null) subdoc.collectionid = doc.collectionid;
                    doc.subdocs.add(subdoc);
                });
                subdocsRemoved.forEach((subdoc)=>doc.subdocs.delete(subdoc));
                doc.emit('subdocs', [
                    {
                        loaded: subdocsLoaded,
                        added: subdocsAdded,
                        removed: subdocsRemoved
                    },
                    doc,
                    transaction
                ]);
                subdocsRemoved.forEach((subdoc)=>subdoc.destroy());
            }
            if (transactionCleanups.length <= i + 1) {
                doc._transactionCleanups = [];
                doc.emit('afterAllTransactions', [
                    doc,
                    transactionCleanups
                ]);
            } else cleanupTransactions(transactionCleanups, i + 1);
        }
    }
};
/**
 * Implements the functionality of `y.transact(()=>{..})`
 *
 * @template T
 * @param {Doc} doc
 * @param {function(Transaction):T} f
 * @param {any} [origin=true]
 * @return {T}
 *
 * @function
 */ const transact = (doc, f, origin = null, local = true)=>{
    const transactionCleanups = doc._transactionCleanups;
    let initialCall = false;
    /**
   * @type {any}
   */ let result = null;
    if (doc._transaction === null) {
        initialCall = true;
        doc._transaction = new Transaction(doc, origin, local);
        transactionCleanups.push(doc._transaction);
        if (transactionCleanups.length === 1) doc.emit('beforeAllTransactions', [
            doc
        ]);
        doc.emit('beforeTransaction', [
            doc._transaction,
            doc
        ]);
    }
    try {
        result = f(doc._transaction);
    } finally{
        if (initialCall) {
            const finishCleanup = doc._transaction === transactionCleanups[0];
            doc._transaction = null;
            if (finishCleanup) // The first transaction ended, now process observer calls.
            // Observer call may create new transactions for which we need to call the observers and do cleanup.
            // We don't want to nest these calls, so we execute these calls one after
            // another.
            // Also we need to ensure that all cleanups are called, even if the
            // observes throw errors.
            // This file is full of hacky try {} finally {} blocks to ensure that an
            // event can throw errors and also that the cleanup is called.
            cleanupTransactions(transactionCleanups, 0);
        }
    }
    return result;
};
class StackItem {
    /**
   * @param {DeleteSet} deletions
   * @param {DeleteSet} insertions
   */ constructor(deletions, insertions){
        this.insertions = insertions;
        this.deletions = deletions;
        /**
     * Use this to save and restore metadata like selection range
     */ this.meta = new Map();
    }
}
/**
 * @param {Transaction} tr
 * @param {UndoManager} um
 * @param {StackItem} stackItem
 */ const clearUndoManagerStackItem = (tr, um, stackItem)=>{
    iterateDeletedStructs(tr, stackItem.deletions, (item)=>{
        if (item instanceof Item && um.scope.some((type)=>type === tr.doc || isParentOf(/** @type {AbstractType<any>} */ type, item))) keepItem(item, false);
    });
};
/**
 * @param {UndoManager} undoManager
 * @param {Array<StackItem>} stack
 * @param {'undo'|'redo'} eventType
 * @return {StackItem?}
 */ const popStackItem = (undoManager, stack, eventType)=>{
    /**
   * Keep a reference to the transaction so we can fire the event with the changedParentTypes
   * @type {any}
   */ let _tr = null;
    const doc = undoManager.doc;
    const scope = undoManager.scope;
    transact(doc, (transaction)=>{
        while(stack.length > 0 && undoManager.currStackItem === null){
            const store = doc.store;
            const stackItem = /** @type {StackItem} */ stack.pop();
            /**
       * @type {Set<Item>}
       */ const itemsToRedo = new Set();
            /**
       * @type {Array<Item>}
       */ const itemsToDelete = [];
            let performedChange = false;
            iterateDeletedStructs(transaction, stackItem.insertions, (struct)=>{
                if (struct instanceof Item) {
                    if (struct.redone !== null) {
                        let { item, diff } = followRedone(store, struct.id);
                        if (diff > 0) item = getItemCleanStart(transaction, createID(item.id.client, item.id.clock + diff));
                        struct = item;
                    }
                    if (!struct.deleted && scope.some((type)=>type === transaction.doc || isParentOf(/** @type {AbstractType<any>} */ type, /** @type {Item} */ struct))) itemsToDelete.push(struct);
                }
            });
            iterateDeletedStructs(transaction, stackItem.deletions, (struct)=>{
                if (struct instanceof Item && scope.some((type)=>type === transaction.doc || isParentOf(/** @type {AbstractType<any>} */ type, struct)) && // Never redo structs in stackItem.insertions because they were created and deleted in the same capture interval.
                !isDeleted(stackItem.insertions, struct.id)) itemsToRedo.add(struct);
            });
            itemsToRedo.forEach((struct)=>{
                performedChange = redoItem(transaction, struct, itemsToRedo, stackItem.insertions, undoManager.ignoreRemoteMapChanges, undoManager) !== null || performedChange;
            });
            // We want to delete in reverse order so that children are deleted before
            // parents, so we have more information available when items are filtered.
            for(let i = itemsToDelete.length - 1; i >= 0; i--){
                const item = itemsToDelete[i];
                if (undoManager.deleteFilter(item)) {
                    item.delete(transaction);
                    performedChange = true;
                }
            }
            undoManager.currStackItem = performedChange ? stackItem : null;
        }
        transaction.changed.forEach((subProps, type)=>{
            // destroy search marker if necessary
            if (subProps.has(null) && type._searchMarker) type._searchMarker.length = 0;
        });
        _tr = transaction;
    }, undoManager);
    const res = undoManager.currStackItem;
    if (res != null) {
        const changedParentTypes = _tr.changedParentTypes;
        undoManager.emit('stack-item-popped', [
            {
                stackItem: res,
                type: eventType,
                changedParentTypes,
                origin: undoManager
            },
            undoManager
        ]);
        undoManager.currStackItem = null;
    }
    return res;
};
/**
 * @typedef {Object} UndoManagerOptions
 * @property {number} [UndoManagerOptions.captureTimeout=500]
 * @property {function(Transaction):boolean} [UndoManagerOptions.captureTransaction] Do not capture changes of a Transaction if result false.
 * @property {function(Item):boolean} [UndoManagerOptions.deleteFilter=()=>true] Sometimes
 * it is necessary to filter what an Undo/Redo operation can delete. If this
 * filter returns false, the type/item won't be deleted even it is in the
 * undo/redo scope.
 * @property {Set<any>} [UndoManagerOptions.trackedOrigins=new Set([null])]
 * @property {boolean} [ignoreRemoteMapChanges] Experimental. By default, the UndoManager will never overwrite remote changes. Enable this property to enable overwriting remote changes on key-value changes (Y.Map, properties on Y.Xml, etc..).
 * @property {Doc} [doc] The document that this UndoManager operates on. Only needed if typeScope is empty.
 */ /**
 * @typedef {Object} StackItemEvent
 * @property {StackItem} StackItemEvent.stackItem
 * @property {any} StackItemEvent.origin
 * @property {'undo'|'redo'} StackItemEvent.type
 * @property {Map<AbstractType<YEvent<any>>,Array<YEvent<any>>>} StackItemEvent.changedParentTypes
 */ /**
 * Fires 'stack-item-added' event when a stack item was added to either the undo- or
 * the redo-stack. You may store additional stack information via the
 * metadata property on `event.stackItem.meta` (it is a `Map` of metadata properties).
 * Fires 'stack-item-popped' event when a stack item was popped from either the
 * undo- or the redo-stack. You may restore the saved stack information from `event.stackItem.meta`.
 *
 * @extends {ObservableV2<{'stack-item-added':function(StackItemEvent, UndoManager):void, 'stack-item-popped': function(StackItemEvent, UndoManager):void, 'stack-cleared': function({ undoStackCleared: boolean, redoStackCleared: boolean }):void, 'stack-item-updated': function(StackItemEvent, UndoManager):void }>}
 */ class UndoManager extends (0, _observable.ObservableV2) {
    /**
   * @param {Doc|AbstractType<any>|Array<AbstractType<any>>} typeScope Limits the scope of the UndoManager. If this is set to a ydoc instance, all changes on that ydoc will be undone. If set to a specific type, only changes on that type or its children will be undone. Also accepts an array of types.
   * @param {UndoManagerOptions} options
   */ constructor(typeScope, { captureTimeout = 500, captureTransaction = (_tr)=>true, deleteFilter = ()=>true, trackedOrigins = new Set([
        null
    ]), ignoreRemoteMapChanges = false, doc = /** @type {Doc} */ _array.isArray(typeScope) ? typeScope[0].doc : typeScope instanceof Doc ? typeScope : typeScope.doc } = {}){
        super();
        /**
     * @type {Array<AbstractType<any> | Doc>}
     */ this.scope = [];
        this.doc = doc;
        this.addToScope(typeScope);
        this.deleteFilter = deleteFilter;
        trackedOrigins.add(this);
        this.trackedOrigins = trackedOrigins;
        this.captureTransaction = captureTransaction;
        /**
     * @type {Array<StackItem>}
     */ this.undoStack = [];
        /**
     * @type {Array<StackItem>}
     */ this.redoStack = [];
        /**
     * Whether the client is currently undoing (calling UndoManager.undo)
     *
     * @type {boolean}
     */ this.undoing = false;
        this.redoing = false;
        /**
     * The currently popped stack item if UndoManager.undoing or UndoManager.redoing
     *
     * @type {StackItem|null}
     */ this.currStackItem = null;
        this.lastChange = 0;
        this.ignoreRemoteMapChanges = ignoreRemoteMapChanges;
        this.captureTimeout = captureTimeout;
        /**
     * @param {Transaction} transaction
     */ this.afterTransactionHandler = (transaction)=>{
            // Only track certain transactions
            if (!this.captureTransaction(transaction) || !this.scope.some((type)=>transaction.changedParentTypes.has(/** @type {AbstractType<any>} */ type) || type === this.doc) || !this.trackedOrigins.has(transaction.origin) && (!transaction.origin || !this.trackedOrigins.has(transaction.origin.constructor))) return;
            const undoing = this.undoing;
            const redoing = this.redoing;
            const stack = undoing ? this.redoStack : this.undoStack;
            if (undoing) this.stopCapturing(); // next undo should not be appended to last stack item
            else if (!redoing) // neither undoing nor redoing: delete redoStack
            this.clear(false, true);
            const insertions = new DeleteSet();
            transaction.afterState.forEach((endClock, client)=>{
                const startClock = transaction.beforeState.get(client) || 0;
                const len = endClock - startClock;
                if (len > 0) addToDeleteSet(insertions, client, startClock, len);
            });
            const now = _time.getUnixTime();
            let didAdd = false;
            if (this.lastChange > 0 && now - this.lastChange < this.captureTimeout && stack.length > 0 && !undoing && !redoing) {
                // append change to last stack op
                const lastOp = stack[stack.length - 1];
                lastOp.deletions = mergeDeleteSets([
                    lastOp.deletions,
                    transaction.deleteSet
                ]);
                lastOp.insertions = mergeDeleteSets([
                    lastOp.insertions,
                    insertions
                ]);
            } else {
                // create a new stack op
                stack.push(new StackItem(transaction.deleteSet, insertions));
                didAdd = true;
            }
            if (!undoing && !redoing) this.lastChange = now;
            // make sure that deleted structs are not gc'd
            iterateDeletedStructs(transaction, transaction.deleteSet, /** @param {Item|GC} item */ (item)=>{
                if (item instanceof Item && this.scope.some((type)=>type === transaction.doc || isParentOf(/** @type {AbstractType<any>} */ type, item))) keepItem(item, true);
            });
            /**
       * @type {[StackItemEvent, UndoManager]}
       */ const changeEvent = [
                {
                    stackItem: stack[stack.length - 1],
                    origin: transaction.origin,
                    type: undoing ? 'redo' : 'undo',
                    changedParentTypes: transaction.changedParentTypes
                },
                this
            ];
            if (didAdd) this.emit('stack-item-added', changeEvent);
            else this.emit('stack-item-updated', changeEvent);
        };
        this.doc.on('afterTransaction', this.afterTransactionHandler);
        this.doc.on('destroy', ()=>{
            this.destroy();
        });
    }
    /**
   * Extend the scope.
   *
   * @param {Array<AbstractType<any> | Doc> | AbstractType<any> | Doc} ytypes
   */ addToScope(ytypes) {
        const tmpSet = new Set(this.scope);
        ytypes = _array.isArray(ytypes) ? ytypes : [
            ytypes
        ];
        ytypes.forEach((ytype)=>{
            if (!tmpSet.has(ytype)) {
                tmpSet.add(ytype);
                if (ytype instanceof AbstractType ? ytype.doc !== this.doc : ytype !== this.doc) _logging.warn('[yjs#509] Not same Y.Doc'); // use MultiDocUndoManager instead. also see https://github.com/yjs/yjs/issues/509
                this.scope.push(ytype);
            }
        });
    }
    /**
   * @param {any} origin
   */ addTrackedOrigin(origin) {
        this.trackedOrigins.add(origin);
    }
    /**
   * @param {any} origin
   */ removeTrackedOrigin(origin) {
        this.trackedOrigins.delete(origin);
    }
    clear(clearUndoStack = true, clearRedoStack = true) {
        if (clearUndoStack && this.canUndo() || clearRedoStack && this.canRedo()) this.doc.transact((tr)=>{
            if (clearUndoStack) {
                this.undoStack.forEach((item)=>clearUndoManagerStackItem(tr, this, item));
                this.undoStack = [];
            }
            if (clearRedoStack) {
                this.redoStack.forEach((item)=>clearUndoManagerStackItem(tr, this, item));
                this.redoStack = [];
            }
            this.emit('stack-cleared', [
                {
                    undoStackCleared: clearUndoStack,
                    redoStackCleared: clearRedoStack
                }
            ]);
        });
    }
    /**
   * UndoManager merges Undo-StackItem if they are created within time-gap
   * smaller than `options.captureTimeout`. Call `um.stopCapturing()` so that the next
   * StackItem won't be merged.
   *
   *
   * @example
   *     // without stopCapturing
   *     ytext.insert(0, 'a')
   *     ytext.insert(1, 'b')
   *     um.undo()
   *     ytext.toString() // => '' (note that 'ab' was removed)
   *     // with stopCapturing
   *     ytext.insert(0, 'a')
   *     um.stopCapturing()
   *     ytext.insert(0, 'b')
   *     um.undo()
   *     ytext.toString() // => 'a' (note that only 'b' was removed)
   *
   */ stopCapturing() {
        this.lastChange = 0;
    }
    /**
   * Undo last changes on type.
   *
   * @return {StackItem?} Returns StackItem if a change was applied
   */ undo() {
        this.undoing = true;
        let res;
        try {
            res = popStackItem(this, this.undoStack, 'undo');
        } finally{
            this.undoing = false;
        }
        return res;
    }
    /**
   * Redo last undo operation.
   *
   * @return {StackItem?} Returns StackItem if a change was applied
   */ redo() {
        this.redoing = true;
        let res;
        try {
            res = popStackItem(this, this.redoStack, 'redo');
        } finally{
            this.redoing = false;
        }
        return res;
    }
    /**
   * Are undo steps available?
   *
   * @return {boolean} `true` if undo is possible
   */ canUndo() {
        return this.undoStack.length > 0;
    }
    /**
   * Are redo steps available?
   *
   * @return {boolean} `true` if redo is possible
   */ canRedo() {
        return this.redoStack.length > 0;
    }
    destroy() {
        this.trackedOrigins.delete(this);
        this.doc.off('afterTransaction', this.afterTransactionHandler);
        super.destroy();
    }
}
/**
 * @param {UpdateDecoderV1 | UpdateDecoderV2} decoder
 */ function* lazyStructReaderGenerator(decoder) {
    const numOfStateUpdates = _decoding.readVarUint(decoder.restDecoder);
    for(let i = 0; i < numOfStateUpdates; i++){
        const numberOfStructs = _decoding.readVarUint(decoder.restDecoder);
        const client = decoder.readClient();
        let clock = _decoding.readVarUint(decoder.restDecoder);
        for(let i = 0; i < numberOfStructs; i++){
            const info = decoder.readInfo();
            // @todo use switch instead of ifs
            if (info === 10) {
                const len = _decoding.readVarUint(decoder.restDecoder);
                yield new Skip(createID(client, clock), len);
                clock += len;
            } else if ((_binary.BITS5 & info) !== 0) {
                const cantCopyParentInfo = (info & (_binary.BIT7 | _binary.BIT8)) === 0;
                // If parent = null and neither left nor right are defined, then we know that `parent` is child of `y`
                // and we read the next string as parentYKey.
                // It indicates how we store/retrieve parent from `y.share`
                // @type {string|null}
                const struct = new Item(createID(client, clock), null, (info & _binary.BIT8) === _binary.BIT8 ? decoder.readLeftID() : null, null, (info & _binary.BIT7) === _binary.BIT7 ? decoder.readRightID() : null, // @ts-ignore Force writing a string here.
                cantCopyParentInfo ? decoder.readParentInfo() ? decoder.readString() : decoder.readLeftID() : null, cantCopyParentInfo && (info & _binary.BIT6) === _binary.BIT6 ? decoder.readString() : null, readItemContent(decoder, info) // item content
                );
                yield struct;
                clock += struct.length;
            } else {
                const len = decoder.readLen();
                yield new GC(createID(client, clock), len);
                clock += len;
            }
        }
    }
}
class LazyStructReader {
    /**
   * @param {UpdateDecoderV1 | UpdateDecoderV2} decoder
   * @param {boolean} filterSkips
   */ constructor(decoder, filterSkips){
        this.gen = lazyStructReaderGenerator(decoder);
        /**
     * @type {null | Item | Skip | GC}
     */ this.curr = null;
        this.done = false;
        this.filterSkips = filterSkips;
        this.next();
    }
    /**
   * @return {Item | GC | Skip |null}
   */ next() {
        // ignore "Skip" structs
        do this.curr = this.gen.next().value || null;
        while (this.filterSkips && this.curr !== null && this.curr.constructor === Skip);
        return this.curr;
    }
}
/**
 * @param {Uint8Array} update
 *
 */ const logUpdate = (update)=>logUpdateV2(update, UpdateDecoderV1);
/**
 * @param {Uint8Array} update
 * @param {typeof UpdateDecoderV2 | typeof UpdateDecoderV1} [YDecoder]
 *
 */ const logUpdateV2 = (update, YDecoder = UpdateDecoderV2)=>{
    const structs = [];
    const updateDecoder = new YDecoder(_decoding.createDecoder(update));
    const lazyDecoder = new LazyStructReader(updateDecoder, false);
    for(let curr = lazyDecoder.curr; curr !== null; curr = lazyDecoder.next())structs.push(curr);
    _logging.print('Structs: ', structs);
    const ds = readDeleteSet(updateDecoder);
    _logging.print('DeleteSet: ', ds);
};
/**
 * @param {Uint8Array} update
 *
 */ const decodeUpdate = (update)=>decodeUpdateV2(update, UpdateDecoderV1);
/**
 * @param {Uint8Array} update
 * @param {typeof UpdateDecoderV2 | typeof UpdateDecoderV1} [YDecoder]
 *
 */ const decodeUpdateV2 = (update, YDecoder = UpdateDecoderV2)=>{
    const structs = [];
    const updateDecoder = new YDecoder(_decoding.createDecoder(update));
    const lazyDecoder = new LazyStructReader(updateDecoder, false);
    for(let curr = lazyDecoder.curr; curr !== null; curr = lazyDecoder.next())structs.push(curr);
    return {
        structs,
        ds: readDeleteSet(updateDecoder)
    };
};
class LazyStructWriter {
    /**
   * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder
   */ constructor(encoder){
        this.currClient = 0;
        this.startClock = 0;
        this.written = 0;
        this.encoder = encoder;
        /**
     * We want to write operations lazily, but also we need to know beforehand how many operations we want to write for each client.
     *
     * This kind of meta-information (#clients, #structs-per-client-written) is written to the restEncoder.
     *
     * We fragment the restEncoder and store a slice of it per-client until we know how many clients there are.
     * When we flush (toUint8Array) we write the restEncoder using the fragments and the meta-information.
     *
     * @type {Array<{ written: number, restEncoder: Uint8Array }>}
     */ this.clientStructs = [];
    }
}
/**
 * @param {Array<Uint8Array>} updates
 * @return {Uint8Array}
 */ const mergeUpdates = (updates)=>mergeUpdatesV2(updates, UpdateDecoderV1, UpdateEncoderV1);
/**
 * @param {Uint8Array} update
 * @param {typeof DSEncoderV1 | typeof DSEncoderV2} YEncoder
 * @param {typeof UpdateDecoderV1 | typeof UpdateDecoderV2} YDecoder
 * @return {Uint8Array}
 */ const encodeStateVectorFromUpdateV2 = (update, YEncoder = DSEncoderV2, YDecoder = UpdateDecoderV2)=>{
    const encoder = new YEncoder();
    const updateDecoder = new LazyStructReader(new YDecoder(_decoding.createDecoder(update)), false);
    let curr = updateDecoder.curr;
    if (curr !== null) {
        let size = 0;
        let currClient = curr.id.client;
        let stopCounting = curr.id.clock !== 0; // must start at 0
        let currClock = stopCounting ? 0 : curr.id.clock + curr.length;
        for(; curr !== null; curr = updateDecoder.next()){
            if (currClient !== curr.id.client) {
                if (currClock !== 0) {
                    size++;
                    // We found a new client
                    // write what we have to the encoder
                    _encoding.writeVarUint(encoder.restEncoder, currClient);
                    _encoding.writeVarUint(encoder.restEncoder, currClock);
                }
                currClient = curr.id.client;
                currClock = 0;
                stopCounting = curr.id.clock !== 0;
            }
            // we ignore skips
            if (curr.constructor === Skip) stopCounting = true;
            if (!stopCounting) currClock = curr.id.clock + curr.length;
        }
        // write what we have
        if (currClock !== 0) {
            size++;
            _encoding.writeVarUint(encoder.restEncoder, currClient);
            _encoding.writeVarUint(encoder.restEncoder, currClock);
        }
        // prepend the size of the state vector
        const enc = _encoding.createEncoder();
        _encoding.writeVarUint(enc, size);
        _encoding.writeBinaryEncoder(enc, encoder.restEncoder);
        encoder.restEncoder = enc;
        return encoder.toUint8Array();
    } else {
        _encoding.writeVarUint(encoder.restEncoder, 0);
        return encoder.toUint8Array();
    }
};
/**
 * @param {Uint8Array} update
 * @return {Uint8Array}
 */ const encodeStateVectorFromUpdate = (update)=>encodeStateVectorFromUpdateV2(update, DSEncoderV1, UpdateDecoderV1);
/**
 * @param {Uint8Array} update
 * @param {typeof UpdateDecoderV1 | typeof UpdateDecoderV2} YDecoder
 * @return {{ from: Map<number,number>, to: Map<number,number> }}
 */ const parseUpdateMetaV2 = (update, YDecoder = UpdateDecoderV2)=>{
    /**
   * @type {Map<number, number>}
   */ const from = new Map();
    /**
   * @type {Map<number, number>}
   */ const to = new Map();
    const updateDecoder = new LazyStructReader(new YDecoder(_decoding.createDecoder(update)), false);
    let curr = updateDecoder.curr;
    if (curr !== null) {
        let currClient = curr.id.client;
        let currClock = curr.id.clock;
        // write the beginning to `from`
        from.set(currClient, currClock);
        for(; curr !== null; curr = updateDecoder.next()){
            if (currClient !== curr.id.client) {
                // We found a new client
                // write the end to `to`
                to.set(currClient, currClock);
                // write the beginning to `from`
                from.set(curr.id.client, curr.id.clock);
                // update currClient
                currClient = curr.id.client;
            }
            currClock = curr.id.clock + curr.length;
        }
        // write the end to `to`
        to.set(currClient, currClock);
    }
    return {
        from,
        to
    };
};
/**
 * @param {Uint8Array} update
 * @return {{ from: Map<number,number>, to: Map<number,number> }}
 */ const parseUpdateMeta = (update)=>parseUpdateMetaV2(update, UpdateDecoderV1);
/**
 * This method is intended to slice any kind of struct and retrieve the right part.
 * It does not handle side-effects, so it should only be used by the lazy-encoder.
 *
 * @param {Item | GC | Skip} left
 * @param {number} diff
 * @return {Item | GC}
 */ const sliceStruct = (left, diff)=>{
    if (left.constructor === GC) {
        const { client, clock } = left.id;
        return new GC(createID(client, clock + diff), left.length - diff);
    } else if (left.constructor === Skip) {
        const { client, clock } = left.id;
        return new Skip(createID(client, clock + diff), left.length - diff);
    } else {
        const leftItem = /** @type {Item} */ left;
        const { client, clock } = leftItem.id;
        return new Item(createID(client, clock + diff), null, createID(client, clock + diff - 1), null, leftItem.rightOrigin, leftItem.parent, leftItem.parentSub, leftItem.content.splice(diff));
    }
};
/**
 *
 * This function works similarly to `readUpdateV2`.
 *
 * @param {Array<Uint8Array>} updates
 * @param {typeof UpdateDecoderV1 | typeof UpdateDecoderV2} [YDecoder]
 * @param {typeof UpdateEncoderV1 | typeof UpdateEncoderV2} [YEncoder]
 * @return {Uint8Array}
 */ const mergeUpdatesV2 = (updates, YDecoder = UpdateDecoderV2, YEncoder = UpdateEncoderV2)=>{
    if (updates.length === 1) return updates[0];
    const updateDecoders = updates.map((update)=>new YDecoder(_decoding.createDecoder(update)));
    let lazyStructDecoders = updateDecoders.map((decoder)=>new LazyStructReader(decoder, true));
    /**
   * @todo we don't need offset because we always slice before
   * @type {null | { struct: Item | GC | Skip, offset: number }}
   */ let currWrite = null;
    const updateEncoder = new YEncoder();
    // write structs lazily
    const lazyStructEncoder = new LazyStructWriter(updateEncoder);
    // Note: We need to ensure that all lazyStructDecoders are fully consumed
    // Note: Should merge document updates whenever possible - even from different updates
    // Note: Should handle that some operations cannot be applied yet ()
    while(true){
        // Write higher clients first ⇒ sort by clientID & clock and remove decoders without content
        lazyStructDecoders = lazyStructDecoders.filter((dec)=>dec.curr !== null);
        lazyStructDecoders.sort(/** @type {function(any,any):number} */ (dec1, dec2)=>{
            if (dec1.curr.id.client === dec2.curr.id.client) {
                const clockDiff = dec1.curr.id.clock - dec2.curr.id.clock;
                if (clockDiff === 0) // @todo remove references to skip since the structDecoders must filter Skips.
                return dec1.curr.constructor === dec2.curr.constructor ? 0 : dec1.curr.constructor === Skip ? 1 : -1 // we are filtering skips anyway.
                ;
                else return clockDiff;
            } else return dec2.curr.id.client - dec1.curr.id.client;
        });
        if (lazyStructDecoders.length === 0) break;
        const currDecoder = lazyStructDecoders[0];
        // write from currDecoder until the next operation is from another client or if filler-struct
        // then we need to reorder the decoders and find the next operation to write
        const firstClient = /** @type {Item | GC} */ currDecoder.curr.id.client;
        if (currWrite !== null) {
            let curr = /** @type {Item | GC | null} */ currDecoder.curr;
            let iterated = false;
            // iterate until we find something that we haven't written already
            // remember: first the high client-ids are written
            while(curr !== null && curr.id.clock + curr.length <= currWrite.struct.id.clock + currWrite.struct.length && curr.id.client >= currWrite.struct.id.client){
                curr = currDecoder.next();
                iterated = true;
            }
            if (curr === null || // current decoder is empty
            curr.id.client !== firstClient || // check whether there is another decoder that has has updates from `firstClient`
            iterated && curr.id.clock > currWrite.struct.id.clock + currWrite.struct.length // the above while loop was used and we are potentially missing updates
            ) continue;
            if (firstClient !== currWrite.struct.id.client) {
                writeStructToLazyStructWriter(lazyStructEncoder, currWrite.struct, currWrite.offset);
                currWrite = {
                    struct: curr,
                    offset: 0
                };
                currDecoder.next();
            } else if (currWrite.struct.id.clock + currWrite.struct.length < curr.id.clock) {
                // @todo write currStruct & set currStruct = Skip(clock = currStruct.id.clock + currStruct.length, length = curr.id.clock - self.clock)
                if (currWrite.struct.constructor === Skip) // extend existing skip
                currWrite.struct.length = curr.id.clock + curr.length - currWrite.struct.id.clock;
                else {
                    writeStructToLazyStructWriter(lazyStructEncoder, currWrite.struct, currWrite.offset);
                    const diff = curr.id.clock - currWrite.struct.id.clock - currWrite.struct.length;
                    /**
             * @type {Skip}
             */ const struct = new Skip(createID(firstClient, currWrite.struct.id.clock + currWrite.struct.length), diff);
                    currWrite = {
                        struct,
                        offset: 0
                    };
                }
            } else {
                const diff = currWrite.struct.id.clock + currWrite.struct.length - curr.id.clock;
                if (diff > 0) {
                    if (currWrite.struct.constructor === Skip) // prefer to slice Skip because the other struct might contain more information
                    currWrite.struct.length -= diff;
                    else curr = sliceStruct(curr, diff);
                }
                if (!currWrite.struct.mergeWith(/** @type {any} */ curr)) {
                    writeStructToLazyStructWriter(lazyStructEncoder, currWrite.struct, currWrite.offset);
                    currWrite = {
                        struct: curr,
                        offset: 0
                    };
                    currDecoder.next();
                }
            }
        } else {
            currWrite = {
                struct: /** @type {Item | GC} */ currDecoder.curr,
                offset: 0
            };
            currDecoder.next();
        }
        for(let next = currDecoder.curr; next !== null && next.id.client === firstClient && next.id.clock === currWrite.struct.id.clock + currWrite.struct.length && next.constructor !== Skip; next = currDecoder.next()){
            writeStructToLazyStructWriter(lazyStructEncoder, currWrite.struct, currWrite.offset);
            currWrite = {
                struct: next,
                offset: 0
            };
        }
    }
    if (currWrite !== null) {
        writeStructToLazyStructWriter(lazyStructEncoder, currWrite.struct, currWrite.offset);
        currWrite = null;
    }
    finishLazyStructWriting(lazyStructEncoder);
    const dss = updateDecoders.map((decoder)=>readDeleteSet(decoder));
    const ds = mergeDeleteSets(dss);
    writeDeleteSet(updateEncoder, ds);
    return updateEncoder.toUint8Array();
};
/**
 * @param {Uint8Array} update
 * @param {Uint8Array} sv
 * @param {typeof UpdateDecoderV1 | typeof UpdateDecoderV2} [YDecoder]
 * @param {typeof UpdateEncoderV1 | typeof UpdateEncoderV2} [YEncoder]
 */ const diffUpdateV2 = (update, sv, YDecoder = UpdateDecoderV2, YEncoder = UpdateEncoderV2)=>{
    const state = decodeStateVector(sv);
    const encoder = new YEncoder();
    const lazyStructWriter = new LazyStructWriter(encoder);
    const decoder = new YDecoder(_decoding.createDecoder(update));
    const reader = new LazyStructReader(decoder, false);
    while(reader.curr){
        const curr = reader.curr;
        const currClient = curr.id.client;
        const svClock = state.get(currClient) || 0;
        if (reader.curr.constructor === Skip) {
            // the first written struct shouldn't be a skip
            reader.next();
            continue;
        }
        if (curr.id.clock + curr.length > svClock) {
            writeStructToLazyStructWriter(lazyStructWriter, curr, _math.max(svClock - curr.id.clock, 0));
            reader.next();
            while(reader.curr && reader.curr.id.client === currClient){
                writeStructToLazyStructWriter(lazyStructWriter, reader.curr, 0);
                reader.next();
            }
        } else // read until something new comes up
        while(reader.curr && reader.curr.id.client === currClient && reader.curr.id.clock + reader.curr.length <= svClock)reader.next();
    }
    finishLazyStructWriting(lazyStructWriter);
    // write ds
    const ds = readDeleteSet(decoder);
    writeDeleteSet(encoder, ds);
    return encoder.toUint8Array();
};
/**
 * @param {Uint8Array} update
 * @param {Uint8Array} sv
 */ const diffUpdate = (update, sv)=>diffUpdateV2(update, sv, UpdateDecoderV1, UpdateEncoderV1);
/**
 * @param {LazyStructWriter} lazyWriter
 */ const flushLazyStructWriter = (lazyWriter)=>{
    if (lazyWriter.written > 0) {
        lazyWriter.clientStructs.push({
            written: lazyWriter.written,
            restEncoder: _encoding.toUint8Array(lazyWriter.encoder.restEncoder)
        });
        lazyWriter.encoder.restEncoder = _encoding.createEncoder();
        lazyWriter.written = 0;
    }
};
/**
 * @param {LazyStructWriter} lazyWriter
 * @param {Item | GC} struct
 * @param {number} offset
 */ const writeStructToLazyStructWriter = (lazyWriter, struct, offset)=>{
    // flush curr if we start another client
    if (lazyWriter.written > 0 && lazyWriter.currClient !== struct.id.client) flushLazyStructWriter(lazyWriter);
    if (lazyWriter.written === 0) {
        lazyWriter.currClient = struct.id.client;
        // write next client
        lazyWriter.encoder.writeClient(struct.id.client);
        // write startClock
        _encoding.writeVarUint(lazyWriter.encoder.restEncoder, struct.id.clock + offset);
    }
    struct.write(lazyWriter.encoder, offset);
    lazyWriter.written++;
};
/**
 * Call this function when we collected all parts and want to
 * put all the parts together. After calling this method,
 * you can continue using the UpdateEncoder.
 *
 * @param {LazyStructWriter} lazyWriter
 */ const finishLazyStructWriting = (lazyWriter)=>{
    flushLazyStructWriter(lazyWriter);
    // this is a fresh encoder because we called flushCurr
    const restEncoder = lazyWriter.encoder.restEncoder;
    /**
   * Now we put all the fragments together.
   * This works similarly to `writeClientsStructs`
   */ // write # states that were updated - i.e. the clients
    _encoding.writeVarUint(restEncoder, lazyWriter.clientStructs.length);
    for(let i = 0; i < lazyWriter.clientStructs.length; i++){
        const partStructs = lazyWriter.clientStructs[i];
        /**
     * Works similarly to `writeStructs`
     */ // write # encoded structs
        _encoding.writeVarUint(restEncoder, partStructs.written);
        // write the rest of the fragment
        _encoding.writeUint8Array(restEncoder, partStructs.restEncoder);
    }
};
/**
 * @param {Uint8Array} update
 * @param {function(Item|GC|Skip):Item|GC|Skip} blockTransformer
 * @param {typeof UpdateDecoderV2 | typeof UpdateDecoderV1} YDecoder
 * @param {typeof UpdateEncoderV2 | typeof UpdateEncoderV1 } YEncoder
 */ const convertUpdateFormat = (update, blockTransformer, YDecoder, YEncoder)=>{
    const updateDecoder = new YDecoder(_decoding.createDecoder(update));
    const lazyDecoder = new LazyStructReader(updateDecoder, false);
    const updateEncoder = new YEncoder();
    const lazyWriter = new LazyStructWriter(updateEncoder);
    for(let curr = lazyDecoder.curr; curr !== null; curr = lazyDecoder.next())writeStructToLazyStructWriter(lazyWriter, blockTransformer(curr), 0);
    finishLazyStructWriting(lazyWriter);
    const ds = readDeleteSet(updateDecoder);
    writeDeleteSet(updateEncoder, ds);
    return updateEncoder.toUint8Array();
};
/**
 * @typedef {Object} ObfuscatorOptions
 * @property {boolean} [ObfuscatorOptions.formatting=true]
 * @property {boolean} [ObfuscatorOptions.subdocs=true]
 * @property {boolean} [ObfuscatorOptions.yxml=true] Whether to obfuscate nodeName / hookName
 */ /**
 * @param {ObfuscatorOptions} obfuscator
 */ const createObfuscator = ({ formatting = true, subdocs = true, yxml = true } = {})=>{
    let i = 0;
    const mapKeyCache = _map.create();
    const nodeNameCache = _map.create();
    const formattingKeyCache = _map.create();
    const formattingValueCache = _map.create();
    formattingValueCache.set(null, null); // end of a formatting range should always be the end of a formatting range
    /**
   * @param {Item|GC|Skip} block
   * @return {Item|GC|Skip}
   */ return (block)=>{
        switch(block.constructor){
            case GC:
            case Skip:
                return block;
            case Item:
                {
                    const item = /** @type {Item} */ block;
                    const content = item.content;
                    switch(content.constructor){
                        case ContentDeleted:
                            break;
                        case ContentType:
                            if (yxml) {
                                const type = /** @type {ContentType} */ content.type;
                                if (type instanceof YXmlElement) type.nodeName = _map.setIfUndefined(nodeNameCache, type.nodeName, ()=>'node-' + i);
                                if (type instanceof YXmlHook) type.hookName = _map.setIfUndefined(nodeNameCache, type.hookName, ()=>'hook-' + i);
                            }
                            break;
                        case ContentAny:
                            {
                                const c = /** @type {ContentAny} */ content;
                                c.arr = c.arr.map(()=>i);
                                break;
                            }
                        case ContentBinary:
                            {
                                const c = /** @type {ContentBinary} */ content;
                                c.content = new Uint8Array([
                                    i
                                ]);
                                break;
                            }
                        case ContentDoc:
                            {
                                const c = /** @type {ContentDoc} */ content;
                                if (subdocs) {
                                    c.opts = {};
                                    c.doc.guid = i + '';
                                }
                                break;
                            }
                        case ContentEmbed:
                            {
                                const c = /** @type {ContentEmbed} */ content;
                                c.embed = {};
                                break;
                            }
                        case ContentFormat:
                            {
                                const c = /** @type {ContentFormat} */ content;
                                if (formatting) {
                                    c.key = _map.setIfUndefined(formattingKeyCache, c.key, ()=>i + '');
                                    c.value = _map.setIfUndefined(formattingValueCache, c.value, ()=>({
                                            i
                                        }));
                                }
                                break;
                            }
                        case ContentJSON:
                            {
                                const c = /** @type {ContentJSON} */ content;
                                c.arr = c.arr.map(()=>i);
                                break;
                            }
                        case ContentString:
                            {
                                const c = /** @type {ContentString} */ content;
                                c.str = _string.repeat(i % 10 + '', c.str.length);
                                break;
                            }
                        default:
                            // unknown content type
                            _error.unexpectedCase();
                    }
                    if (item.parentSub) item.parentSub = _map.setIfUndefined(mapKeyCache, item.parentSub, ()=>i + '');
                    i++;
                    return block;
                }
            default:
                // unknown block-type
                _error.unexpectedCase();
        }
    };
};
/**
 * This function obfuscates the content of a Yjs update. This is useful to share
 * buggy Yjs documents while significantly limiting the possibility that a
 * developer can on the user. Note that it might still be possible to deduce
 * some information by analyzing the "structure" of the document or by analyzing
 * the typing behavior using the CRDT-related metadata that is still kept fully
 * intact.
 *
 * @param {Uint8Array} update
 * @param {ObfuscatorOptions} [opts]
 */ const obfuscateUpdate = (update, opts)=>convertUpdateFormat(update, createObfuscator(opts), UpdateDecoderV1, UpdateEncoderV1);
/**
 * @param {Uint8Array} update
 * @param {ObfuscatorOptions} [opts]
 */ const obfuscateUpdateV2 = (update, opts)=>convertUpdateFormat(update, createObfuscator(opts), UpdateDecoderV2, UpdateEncoderV2);
/**
 * @param {Uint8Array} update
 */ const convertUpdateFormatV1ToV2 = (update)=>convertUpdateFormat(update, _function.id, UpdateDecoderV1, UpdateEncoderV2);
/**
 * @param {Uint8Array} update
 */ const convertUpdateFormatV2ToV1 = (update)=>convertUpdateFormat(update, _function.id, UpdateDecoderV2, UpdateEncoderV1);
const errorComputeChanges = 'You must not compute changes after the event-handler fired.';
/**
 * @template {AbstractType<any>} T
 * YEvent describes the changes on a YType.
 */ class YEvent {
    /**
   * @param {T} target The changed type.
   * @param {Transaction} transaction
   */ constructor(target, transaction){
        /**
     * The type on which this event was created on.
     * @type {T}
     */ this.target = target;
        /**
     * The current target on which the observe callback is called.
     * @type {AbstractType<any>}
     */ this.currentTarget = target;
        /**
     * The transaction that triggered this event.
     * @type {Transaction}
     */ this.transaction = transaction;
        /**
     * @type {Object|null}
     */ this._changes = null;
        /**
     * @type {null | Map<string, { action: 'add' | 'update' | 'delete', oldValue: any, newValue: any }>}
     */ this._keys = null;
        /**
     * @type {null | Array<{ insert?: string | Array<any> | object | AbstractType<any>, retain?: number, delete?: number, attributes?: Object<string, any> }>}
     */ this._delta = null;
        /**
     * @type {Array<string|number>|null}
     */ this._path = null;
    }
    /**
   * Computes the path from `y` to the changed type.
   *
   * @todo v14 should standardize on path: Array<{parent, index}> because that is easier to work with.
   *
   * The following property holds:
   * @example
   *   let type = y
   *   event.path.forEach(dir => {
   *     type = type.get(dir)
   *   })
   *   type === event.target // => true
   */ get path() {
        return this._path || (this._path = getPathTo(this.currentTarget, this.target));
    }
    /**
   * Check if a struct is deleted by this event.
   *
   * In contrast to change.deleted, this method also returns true if the struct was added and then deleted.
   *
   * @param {AbstractStruct} struct
   * @return {boolean}
   */ deletes(struct) {
        return isDeleted(this.transaction.deleteSet, struct.id);
    }
    /**
   * @type {Map<string, { action: 'add' | 'update' | 'delete', oldValue: any, newValue: any }>}
   */ get keys() {
        if (this._keys === null) {
            if (this.transaction.doc._transactionCleanups.length === 0) throw _error.create(errorComputeChanges);
            const keys = new Map();
            const target = this.target;
            const changed = /** @type Set<string|null> */ this.transaction.changed.get(target);
            changed.forEach((key)=>{
                if (key !== null) {
                    const item = /** @type {Item} */ target._map.get(key);
                    /**
           * @type {'delete' | 'add' | 'update'}
           */ let action;
                    let oldValue;
                    if (this.adds(item)) {
                        let prev = item.left;
                        while(prev !== null && this.adds(prev))prev = prev.left;
                        if (this.deletes(item)) {
                            if (prev !== null && this.deletes(prev)) {
                                action = 'delete';
                                oldValue = _array.last(prev.content.getContent());
                            } else return;
                        } else if (prev !== null && this.deletes(prev)) {
                            action = 'update';
                            oldValue = _array.last(prev.content.getContent());
                        } else {
                            action = 'add';
                            oldValue = undefined;
                        }
                    } else {
                        if (this.deletes(item)) {
                            action = 'delete';
                            oldValue = _array.last(/** @type {Item} */ item.content.getContent());
                        } else return; // nop
                    }
                    keys.set(key, {
                        action,
                        oldValue
                    });
                }
            });
            this._keys = keys;
        }
        return this._keys;
    }
    /**
   * This is a computed property. Note that this can only be safely computed during the
   * event call. Computing this property after other changes happened might result in
   * unexpected behavior (incorrect computation of deltas). A safe way to collect changes
   * is to store the `changes` or the `delta` object. Avoid storing the `transaction` object.
   *
   * @type {Array<{insert?: string | Array<any> | object | AbstractType<any>, retain?: number, delete?: number, attributes?: Object<string, any>}>}
   */ get delta() {
        return this.changes.delta;
    }
    /**
   * Check if a struct is added by this event.
   *
   * In contrast to change.deleted, this method also returns true if the struct was added and then deleted.
   *
   * @param {AbstractStruct} struct
   * @return {boolean}
   */ adds(struct) {
        return struct.id.clock >= (this.transaction.beforeState.get(struct.id.client) || 0);
    }
    /**
   * This is a computed property. Note that this can only be safely computed during the
   * event call. Computing this property after other changes happened might result in
   * unexpected behavior (incorrect computation of deltas). A safe way to collect changes
   * is to store the `changes` or the `delta` object. Avoid storing the `transaction` object.
   *
   * @type {{added:Set<Item>,deleted:Set<Item>,keys:Map<string,{action:'add'|'update'|'delete',oldValue:any}>,delta:Array<{insert?:Array<any>|string, delete?:number, retain?:number}>}}
   */ get changes() {
        let changes = this._changes;
        if (changes === null) {
            if (this.transaction.doc._transactionCleanups.length === 0) throw _error.create(errorComputeChanges);
            const target = this.target;
            const added = _set.create();
            const deleted = _set.create();
            /**
       * @type {Array<{insert:Array<any>}|{delete:number}|{retain:number}>}
       */ const delta = [];
            changes = {
                added,
                deleted,
                delta,
                keys: this.keys
            };
            const changed = /** @type Set<string|null> */ this.transaction.changed.get(target);
            if (changed.has(null)) {
                /**
         * @type {any}
         */ let lastOp = null;
                const packOp = ()=>{
                    if (lastOp) delta.push(lastOp);
                };
                for(let item = target._start; item !== null; item = item.right){
                    if (item.deleted) {
                        if (this.deletes(item) && !this.adds(item)) {
                            if (lastOp === null || lastOp.delete === undefined) {
                                packOp();
                                lastOp = {
                                    delete: 0
                                };
                            }
                            lastOp.delete += item.length;
                            deleted.add(item);
                        } // else nop
                    } else if (this.adds(item)) {
                        if (lastOp === null || lastOp.insert === undefined) {
                            packOp();
                            lastOp = {
                                insert: []
                            };
                        }
                        lastOp.insert = lastOp.insert.concat(item.content.getContent());
                        added.add(item);
                    } else {
                        if (lastOp === null || lastOp.retain === undefined) {
                            packOp();
                            lastOp = {
                                retain: 0
                            };
                        }
                        lastOp.retain += item.length;
                    }
                }
                if (lastOp !== null && lastOp.retain === undefined) packOp();
            }
            this._changes = changes;
        }
        return /** @type {any} */ changes;
    }
}
/**
 * Compute the path from this type to the specified target.
 *
 * @example
 *   // `child` should be accessible via `type.get(path[0]).get(path[1])..`
 *   const path = type.getPathTo(child)
 *   // assuming `type instanceof YArray`
 *   console.log(path) // might look like => [2, 'key1']
 *   child === type.get(path[0]).get(path[1])
 *
 * @param {AbstractType<any>} parent
 * @param {AbstractType<any>} child target
 * @return {Array<string|number>} Path to the target
 *
 * @private
 * @function
 */ const getPathTo = (parent, child)=>{
    const path = [];
    while(child._item !== null && child !== parent){
        if (child._item.parentSub !== null) // parent is map-ish
        path.unshift(child._item.parentSub);
        else {
            // parent is array-ish
            let i = 0;
            let c = /** @type {AbstractType<any>} */ child._item.parent._start;
            while(c !== child._item && c !== null){
                if (!c.deleted && c.countable) i += c.length;
                c = c.right;
            }
            path.unshift(i);
        }
        child = /** @type {AbstractType<any>} */ child._item.parent;
    }
    return path;
};
/**
 * https://docs.yjs.dev/getting-started/working-with-shared-types#caveats
 */ const warnPrematureAccess = ()=>{
    _logging.warn('Invalid access: Add Yjs type to a document before reading data.');
};
const maxSearchMarker = 80;
/**
 * A unique timestamp that identifies each marker.
 *
 * Time is relative,.. this is more like an ever-increasing clock.
 *
 * @type {number}
 */ let globalSearchMarkerTimestamp = 0;
class ArraySearchMarker {
    /**
   * @param {Item} p
   * @param {number} index
   */ constructor(p, index){
        p.marker = true;
        this.p = p;
        this.index = index;
        this.timestamp = globalSearchMarkerTimestamp++;
    }
}
/**
 * @param {ArraySearchMarker} marker
 */ const refreshMarkerTimestamp = (marker)=>{
    marker.timestamp = globalSearchMarkerTimestamp++;
};
/**
 * This is rather complex so this function is the only thing that should overwrite a marker
 *
 * @param {ArraySearchMarker} marker
 * @param {Item} p
 * @param {number} index
 */ const overwriteMarker = (marker, p, index)=>{
    marker.p.marker = false;
    marker.p = p;
    p.marker = true;
    marker.index = index;
    marker.timestamp = globalSearchMarkerTimestamp++;
};
/**
 * @param {Array<ArraySearchMarker>} searchMarker
 * @param {Item} p
 * @param {number} index
 */ const markPosition = (searchMarker, p, index)=>{
    if (searchMarker.length >= maxSearchMarker) {
        // override oldest marker (we don't want to create more objects)
        const marker = searchMarker.reduce((a, b)=>a.timestamp < b.timestamp ? a : b);
        overwriteMarker(marker, p, index);
        return marker;
    } else {
        // create new marker
        const pm = new ArraySearchMarker(p, index);
        searchMarker.push(pm);
        return pm;
    }
};
/**
 * Search marker help us to find positions in the associative array faster.
 *
 * They speed up the process of finding a position without much bookkeeping.
 *
 * A maximum of `maxSearchMarker` objects are created.
 *
 * This function always returns a refreshed marker (updated timestamp)
 *
 * @param {AbstractType<any>} yarray
 * @param {number} index
 */ const findMarker = (yarray, index)=>{
    if (yarray._start === null || index === 0 || yarray._searchMarker === null) return null;
    const marker = yarray._searchMarker.length === 0 ? null : yarray._searchMarker.reduce((a, b)=>_math.abs(index - a.index) < _math.abs(index - b.index) ? a : b);
    let p = yarray._start;
    let pindex = 0;
    if (marker !== null) {
        p = marker.p;
        pindex = marker.index;
        refreshMarkerTimestamp(marker); // we used it, we might need to use it again
    }
    // iterate to right if possible
    while(p.right !== null && pindex < index){
        if (!p.deleted && p.countable) {
            if (index < pindex + p.length) break;
            pindex += p.length;
        }
        p = p.right;
    }
    // iterate to left if necessary (might be that pindex > index)
    while(p.left !== null && pindex > index){
        p = p.left;
        if (!p.deleted && p.countable) pindex -= p.length;
    }
    // we want to make sure that p can't be merged with left, because that would screw up everything
    // in that cas just return what we have (it is most likely the best marker anyway)
    // iterate to left until p can't be merged with left
    while(p.left !== null && p.left.id.client === p.id.client && p.left.id.clock + p.left.length === p.id.clock){
        p = p.left;
        if (!p.deleted && p.countable) pindex -= p.length;
    }
    // @todo remove!
    // assure position
    // {
    //   let start = yarray._start
    //   let pos = 0
    //   while (start !== p) {
    //     if (!start.deleted && start.countable) {
    //       pos += start.length
    //     }
    //     start = /** @type {Item} */ (start.right)
    //   }
    //   if (pos !== pindex) {
    //     debugger
    //     throw new Error('Gotcha position fail!')
    //   }
    // }
    // if (marker) {
    //   if (window.lengths == null) {
    //     window.lengths = []
    //     window.getLengths = () => window.lengths.sort((a, b) => a - b)
    //   }
    //   window.lengths.push(marker.index - pindex)
    //   console.log('distance', marker.index - pindex, 'len', p && p.parent.length)
    // }
    if (marker !== null && _math.abs(marker.index - pindex) < /** @type {YText|YArray<any>} */ p.parent.length / maxSearchMarker) {
        // adjust existing marker
        overwriteMarker(marker, p, pindex);
        return marker;
    } else // create new marker
    return markPosition(yarray._searchMarker, p, pindex);
};
/**
 * Update markers when a change happened.
 *
 * This should be called before doing a deletion!
 *
 * @param {Array<ArraySearchMarker>} searchMarker
 * @param {number} index
 * @param {number} len If insertion, len is positive. If deletion, len is negative.
 */ const updateMarkerChanges = (searchMarker, index, len)=>{
    for(let i = searchMarker.length - 1; i >= 0; i--){
        const m = searchMarker[i];
        if (len > 0) {
            /**
       * @type {Item|null}
       */ let p = m.p;
            p.marker = false;
            // Ideally we just want to do a simple position comparison, but this will only work if
            // search markers don't point to deleted items for formats.
            // Iterate marker to prev undeleted countable position so we know what to do when updating a position
            while(p && (p.deleted || !p.countable)){
                p = p.left;
                if (p && !p.deleted && p.countable) // adjust position. the loop should break now
                m.index -= p.length;
            }
            if (p === null || p.marker === true) {
                // remove search marker if updated position is null or if position is already marked
                searchMarker.splice(i, 1);
                continue;
            }
            m.p = p;
            p.marker = true;
        }
        if (index < m.index || len > 0 && index === m.index) m.index = _math.max(index, m.index + len);
    }
};
/**
 * Accumulate all (list) children of a type and return them as an Array.
 *
 * @param {AbstractType<any>} t
 * @return {Array<Item>}
 */ const getTypeChildren = (t)=>{
    t.doc ?? warnPrematureAccess();
    let s = t._start;
    const arr = [];
    while(s){
        arr.push(s);
        s = s.right;
    }
    return arr;
};
/**
 * Call event listeners with an event. This will also add an event to all
 * parents (for `.observeDeep` handlers).
 *
 * @template EventType
 * @param {AbstractType<EventType>} type
 * @param {Transaction} transaction
 * @param {EventType} event
 */ const callTypeObservers = (type, transaction, event)=>{
    const changedType = type;
    const changedParentTypes = transaction.changedParentTypes;
    while(true){
        // @ts-ignore
        _map.setIfUndefined(changedParentTypes, type, ()=>[]).push(event);
        if (type._item === null) break;
        type = /** @type {AbstractType<any>} */ type._item.parent;
    }
    callEventHandlerListeners(changedType._eH, event, transaction);
};
/**
 * @template EventType
 * Abstract Yjs Type class
 */ class AbstractType {
    constructor(){
        /**
     * @type {Item|null}
     */ this._item = null;
        /**
     * @type {Map<string,Item>}
     */ this._map = new Map();
        /**
     * @type {Item|null}
     */ this._start = null;
        /**
     * @type {Doc|null}
     */ this.doc = null;
        this._length = 0;
        /**
     * Event handlers
     * @type {EventHandler<EventType,Transaction>}
     */ this._eH = createEventHandler();
        /**
     * Deep event handlers
     * @type {EventHandler<Array<YEvent<any>>,Transaction>}
     */ this._dEH = createEventHandler();
        /**
     * @type {null | Array<ArraySearchMarker>}
     */ this._searchMarker = null;
    }
    /**
   * @return {AbstractType<any>|null}
   */ get parent() {
        return this._item ? /** @type {AbstractType<any>} */ this._item.parent : null;
    }
    /**
   * Integrate this type into the Yjs instance.
   *
   * * Save this struct in the os
   * * This type is sent to other client
   * * Observer functions are fired
   *
   * @param {Doc} y The Yjs instance
   * @param {Item|null} item
   */ _integrate(y, item) {
        this.doc = y;
        this._item = item;
    }
    /**
   * @return {AbstractType<EventType>}
   */ _copy() {
        throw _error.methodUnimplemented();
    }
    /**
   * Makes a copy of this data type that can be included somewhere else.
   *
   * Note that the content is only readable _after_ it has been included somewhere in the Ydoc.
   *
   * @return {AbstractType<EventType>}
   */ clone() {
        throw _error.methodUnimplemented();
    }
    /**
   * @param {UpdateEncoderV1 | UpdateEncoderV2} _encoder
   */ _write(_encoder) {}
    /**
   * The first non-deleted item
   */ get _first() {
        let n = this._start;
        while(n !== null && n.deleted)n = n.right;
        return n;
    }
    /**
   * Creates YEvent and calls all type observers.
   * Must be implemented by each type.
   *
   * @param {Transaction} transaction
   * @param {Set<null|string>} _parentSubs Keys changed on this type. `null` if list was modified.
   */ _callObserver(transaction, _parentSubs) {
        if (!transaction.local && this._searchMarker) this._searchMarker.length = 0;
    }
    /**
   * Observe all events that are created on this type.
   *
   * @param {function(EventType, Transaction):void} f Observer function
   */ observe(f) {
        addEventHandlerListener(this._eH, f);
    }
    /**
   * Observe all events that are created by this type and its children.
   *
   * @param {function(Array<YEvent<any>>,Transaction):void} f Observer function
   */ observeDeep(f) {
        addEventHandlerListener(this._dEH, f);
    }
    /**
   * Unregister an observer function.
   *
   * @param {function(EventType,Transaction):void} f Observer function
   */ unobserve(f) {
        removeEventHandlerListener(this._eH, f);
    }
    /**
   * Unregister an observer function.
   *
   * @param {function(Array<YEvent<any>>,Transaction):void} f Observer function
   */ unobserveDeep(f) {
        removeEventHandlerListener(this._dEH, f);
    }
    /**
   * @abstract
   * @return {any}
   */ toJSON() {}
}
/**
 * @param {AbstractType<any>} type
 * @param {number} start
 * @param {number} end
 * @return {Array<any>}
 *
 * @private
 * @function
 */ const typeListSlice = (type, start, end)=>{
    type.doc ?? warnPrematureAccess();
    if (start < 0) start = type._length + start;
    if (end < 0) end = type._length + end;
    let len = end - start;
    const cs = [];
    let n = type._start;
    while(n !== null && len > 0){
        if (n.countable && !n.deleted) {
            const c = n.content.getContent();
            if (c.length <= start) start -= c.length;
            else {
                for(let i = start; i < c.length && len > 0; i++){
                    cs.push(c[i]);
                    len--;
                }
                start = 0;
            }
        }
        n = n.right;
    }
    return cs;
};
/**
 * @param {AbstractType<any>} type
 * @return {Array<any>}
 *
 * @private
 * @function
 */ const typeListToArray = (type)=>{
    type.doc ?? warnPrematureAccess();
    const cs = [];
    let n = type._start;
    while(n !== null){
        if (n.countable && !n.deleted) {
            const c = n.content.getContent();
            for(let i = 0; i < c.length; i++)cs.push(c[i]);
        }
        n = n.right;
    }
    return cs;
};
/**
 * @param {AbstractType<any>} type
 * @param {Snapshot} snapshot
 * @return {Array<any>}
 *
 * @private
 * @function
 */ const typeListToArraySnapshot = (type, snapshot)=>{
    const cs = [];
    let n = type._start;
    while(n !== null){
        if (n.countable && isVisible(n, snapshot)) {
            const c = n.content.getContent();
            for(let i = 0; i < c.length; i++)cs.push(c[i]);
        }
        n = n.right;
    }
    return cs;
};
/**
 * Executes a provided function on once on every element of this YArray.
 *
 * @param {AbstractType<any>} type
 * @param {function(any,number,any):void} f A function to execute on every element of this YArray.
 *
 * @private
 * @function
 */ const typeListForEach = (type, f)=>{
    let index = 0;
    let n = type._start;
    type.doc ?? warnPrematureAccess();
    while(n !== null){
        if (n.countable && !n.deleted) {
            const c = n.content.getContent();
            for(let i = 0; i < c.length; i++)f(c[i], index++, type);
        }
        n = n.right;
    }
};
/**
 * @template C,R
 * @param {AbstractType<any>} type
 * @param {function(C,number,AbstractType<any>):R} f
 * @return {Array<R>}
 *
 * @private
 * @function
 */ const typeListMap = (type, f)=>{
    /**
   * @type {Array<any>}
   */ const result = [];
    typeListForEach(type, (c, i)=>{
        result.push(f(c, i, type));
    });
    return result;
};
/**
 * @param {AbstractType<any>} type
 * @return {IterableIterator<any>}
 *
 * @private
 * @function
 */ const typeListCreateIterator = (type)=>{
    let n = type._start;
    /**
   * @type {Array<any>|null}
   */ let currentContent = null;
    let currentContentIndex = 0;
    return {
        [Symbol.iterator] () {
            return this;
        },
        next: ()=>{
            // find some content
            if (currentContent === null) {
                while(n !== null && n.deleted)n = n.right;
                // check if we reached the end, no need to check currentContent, because it does not exist
                if (n === null) return {
                    done: true,
                    value: undefined
                };
                // we found n, so we can set currentContent
                currentContent = n.content.getContent();
                currentContentIndex = 0;
                n = n.right; // we used the content of n, now iterate to next
            }
            const value = currentContent[currentContentIndex++];
            // check if we need to empty currentContent
            if (currentContent.length <= currentContentIndex) currentContent = null;
            return {
                done: false,
                value
            };
        }
    };
};
/**
 * @param {AbstractType<any>} type
 * @param {number} index
 * @return {any}
 *
 * @private
 * @function
 */ const typeListGet = (type, index)=>{
    type.doc ?? warnPrematureAccess();
    const marker = findMarker(type, index);
    let n = type._start;
    if (marker !== null) {
        n = marker.p;
        index -= marker.index;
    }
    for(; n !== null; n = n.right)if (!n.deleted && n.countable) {
        if (index < n.length) return n.content.getContent()[index];
        index -= n.length;
    }
};
/**
 * @param {Transaction} transaction
 * @param {AbstractType<any>} parent
 * @param {Item?} referenceItem
 * @param {Array<Object<string,any>|Array<any>|boolean|number|null|string|Uint8Array>} content
 *
 * @private
 * @function
 */ const typeListInsertGenericsAfter = (transaction, parent, referenceItem, content)=>{
    let left = referenceItem;
    const doc = transaction.doc;
    const ownClientId = doc.clientID;
    const store = doc.store;
    const right = referenceItem === null ? parent._start : referenceItem.right;
    /**
   * @type {Array<Object|Array<any>|number|null>}
   */ let jsonContent = [];
    const packJsonContent = ()=>{
        if (jsonContent.length > 0) {
            left = new Item(createID(ownClientId, getState(store, ownClientId)), left, left && left.lastId, right, right && right.id, parent, null, new ContentAny(jsonContent));
            left.integrate(transaction, 0);
            jsonContent = [];
        }
    };
    content.forEach((c)=>{
        if (c === null) jsonContent.push(c);
        else switch(c.constructor){
            case Number:
            case Object:
            case Boolean:
            case Array:
            case String:
                jsonContent.push(c);
                break;
            default:
                packJsonContent();
                switch(c.constructor){
                    case Uint8Array:
                    case ArrayBuffer:
                        left = new Item(createID(ownClientId, getState(store, ownClientId)), left, left && left.lastId, right, right && right.id, parent, null, new ContentBinary(new Uint8Array(/** @type {Uint8Array} */ c)));
                        left.integrate(transaction, 0);
                        break;
                    case Doc:
                        left = new Item(createID(ownClientId, getState(store, ownClientId)), left, left && left.lastId, right, right && right.id, parent, null, new ContentDoc(/** @type {Doc} */ c));
                        left.integrate(transaction, 0);
                        break;
                    default:
                        if (c instanceof AbstractType) {
                            left = new Item(createID(ownClientId, getState(store, ownClientId)), left, left && left.lastId, right, right && right.id, parent, null, new ContentType(c));
                            left.integrate(transaction, 0);
                        } else throw new Error('Unexpected content type in insert operation');
                }
        }
    });
    packJsonContent();
};
const lengthExceeded = ()=>_error.create('Length exceeded!');
/**
 * @param {Transaction} transaction
 * @param {AbstractType<any>} parent
 * @param {number} index
 * @param {Array<Object<string,any>|Array<any>|number|null|string|Uint8Array>} content
 *
 * @private
 * @function
 */ const typeListInsertGenerics = (transaction, parent, index, content)=>{
    if (index > parent._length) throw lengthExceeded();
    if (index === 0) {
        if (parent._searchMarker) updateMarkerChanges(parent._searchMarker, index, content.length);
        return typeListInsertGenericsAfter(transaction, parent, null, content);
    }
    const startIndex = index;
    const marker = findMarker(parent, index);
    let n = parent._start;
    if (marker !== null) {
        n = marker.p;
        index -= marker.index;
        // we need to iterate one to the left so that the algorithm works
        if (index === 0) {
            // @todo refactor this as it actually doesn't consider formats
            n = n.prev; // important! get the left undeleted item so that we can actually decrease index
            index += n && n.countable && !n.deleted ? n.length : 0;
        }
    }
    for(; n !== null; n = n.right)if (!n.deleted && n.countable) {
        if (index <= n.length) {
            if (index < n.length) // insert in-between
            getItemCleanStart(transaction, createID(n.id.client, n.id.clock + index));
            break;
        }
        index -= n.length;
    }
    if (parent._searchMarker) updateMarkerChanges(parent._searchMarker, startIndex, content.length);
    return typeListInsertGenericsAfter(transaction, parent, n, content);
};
/**
 * Pushing content is special as we generally want to push after the last item. So we don't have to update
 * the search marker.
 *
 * @param {Transaction} transaction
 * @param {AbstractType<any>} parent
 * @param {Array<Object<string,any>|Array<any>|number|null|string|Uint8Array>} content
 *
 * @private
 * @function
 */ const typeListPushGenerics = (transaction, parent, content)=>{
    // Use the marker with the highest index and iterate to the right.
    const marker = (parent._searchMarker || []).reduce((maxMarker, currMarker)=>currMarker.index > maxMarker.index ? currMarker : maxMarker, {
        index: 0,
        p: parent._start
    });
    let n = marker.p;
    if (n) while(n.right)n = n.right;
    return typeListInsertGenericsAfter(transaction, parent, n, content);
};
/**
 * @param {Transaction} transaction
 * @param {AbstractType<any>} parent
 * @param {number} index
 * @param {number} length
 *
 * @private
 * @function
 */ const typeListDelete = (transaction, parent, index, length)=>{
    if (length === 0) return;
    const startIndex = index;
    const startLength = length;
    const marker = findMarker(parent, index);
    let n = parent._start;
    if (marker !== null) {
        n = marker.p;
        index -= marker.index;
    }
    // compute the first item to be deleted
    for(; n !== null && index > 0; n = n.right)if (!n.deleted && n.countable) {
        if (index < n.length) getItemCleanStart(transaction, createID(n.id.client, n.id.clock + index));
        index -= n.length;
    }
    // delete all items until done
    while(length > 0 && n !== null){
        if (!n.deleted) {
            if (length < n.length) getItemCleanStart(transaction, createID(n.id.client, n.id.clock + length));
            n.delete(transaction);
            length -= n.length;
        }
        n = n.right;
    }
    if (length > 0) throw lengthExceeded();
    if (parent._searchMarker) updateMarkerChanges(parent._searchMarker, startIndex, -startLength + length /* in case we remove the above exception */ );
};
/**
 * @param {Transaction} transaction
 * @param {AbstractType<any>} parent
 * @param {string} key
 *
 * @private
 * @function
 */ const typeMapDelete = (transaction, parent, key)=>{
    const c = parent._map.get(key);
    if (c !== undefined) c.delete(transaction);
};
/**
 * @param {Transaction} transaction
 * @param {AbstractType<any>} parent
 * @param {string} key
 * @param {Object|number|null|Array<any>|string|Uint8Array|AbstractType<any>} value
 *
 * @private
 * @function
 */ const typeMapSet = (transaction, parent, key, value)=>{
    const left = parent._map.get(key) || null;
    const doc = transaction.doc;
    const ownClientId = doc.clientID;
    let content;
    if (value == null) content = new ContentAny([
        value
    ]);
    else switch(value.constructor){
        case Number:
        case Object:
        case Boolean:
        case Array:
        case String:
            content = new ContentAny([
                value
            ]);
            break;
        case Uint8Array:
            content = new ContentBinary(/** @type {Uint8Array} */ value);
            break;
        case Doc:
            content = new ContentDoc(/** @type {Doc} */ value);
            break;
        default:
            if (value instanceof AbstractType) content = new ContentType(value);
            else throw new Error('Unexpected content type');
    }
    new Item(createID(ownClientId, getState(doc.store, ownClientId)), left, left && left.lastId, null, null, parent, key, content).integrate(transaction, 0);
};
/**
 * @param {AbstractType<any>} parent
 * @param {string} key
 * @return {Object<string,any>|number|null|Array<any>|string|Uint8Array|AbstractType<any>|undefined}
 *
 * @private
 * @function
 */ const typeMapGet = (parent, key)=>{
    parent.doc ?? warnPrematureAccess();
    const val = parent._map.get(key);
    return val !== undefined && !val.deleted ? val.content.getContent()[val.length - 1] : undefined;
};
/**
 * @param {AbstractType<any>} parent
 * @return {Object<string,Object<string,any>|number|null|Array<any>|string|Uint8Array|AbstractType<any>|undefined>}
 *
 * @private
 * @function
 */ const typeMapGetAll = (parent)=>{
    /**
   * @type {Object<string,any>}
   */ const res = {};
    parent.doc ?? warnPrematureAccess();
    parent._map.forEach((value, key)=>{
        if (!value.deleted) res[key] = value.content.getContent()[value.length - 1];
    });
    return res;
};
/**
 * @param {AbstractType<any>} parent
 * @param {string} key
 * @return {boolean}
 *
 * @private
 * @function
 */ const typeMapHas = (parent, key)=>{
    parent.doc ?? warnPrematureAccess();
    const val = parent._map.get(key);
    return val !== undefined && !val.deleted;
};
/**
 * @param {AbstractType<any>} parent
 * @param {string} key
 * @param {Snapshot} snapshot
 * @return {Object<string,any>|number|null|Array<any>|string|Uint8Array|AbstractType<any>|undefined}
 *
 * @private
 * @function
 */ const typeMapGetSnapshot = (parent, key, snapshot)=>{
    let v = parent._map.get(key) || null;
    while(v !== null && (!snapshot.sv.has(v.id.client) || v.id.clock >= (snapshot.sv.get(v.id.client) || 0)))v = v.left;
    return v !== null && isVisible(v, snapshot) ? v.content.getContent()[v.length - 1] : undefined;
};
/**
 * @param {AbstractType<any>} parent
 * @param {Snapshot} snapshot
 * @return {Object<string,Object<string,any>|number|null|Array<any>|string|Uint8Array|AbstractType<any>|undefined>}
 *
 * @private
 * @function
 */ const typeMapGetAllSnapshot = (parent, snapshot)=>{
    /**
   * @type {Object<string,any>}
   */ const res = {};
    parent._map.forEach((value, key)=>{
        /**
     * @type {Item|null}
     */ let v = value;
        while(v !== null && (!snapshot.sv.has(v.id.client) || v.id.clock >= (snapshot.sv.get(v.id.client) || 0)))v = v.left;
        if (v !== null && isVisible(v, snapshot)) res[key] = v.content.getContent()[v.length - 1];
    });
    return res;
};
/**
 * @param {AbstractType<any> & { _map: Map<string, Item> }} type
 * @return {IterableIterator<Array<any>>}
 *
 * @private
 * @function
 */ const createMapIterator = (type)=>{
    type.doc ?? warnPrematureAccess();
    return _iterator.iteratorFilter(type._map.entries(), /** @param {any} entry */ (entry)=>!entry[1].deleted);
};
/**
 * @module YArray
 */ /**
 * Event that describes the changes on a YArray
 * @template T
 * @extends YEvent<YArray<T>>
 */ class YArrayEvent extends YEvent {
}
/**
 * A shared Array implementation.
 * @template T
 * @extends AbstractType<YArrayEvent<T>>
 * @implements {Iterable<T>}
 */ class YArray extends AbstractType {
    constructor(){
        super();
        /**
     * @type {Array<any>?}
     * @private
     */ this._prelimContent = [];
        /**
     * @type {Array<ArraySearchMarker>}
     */ this._searchMarker = [];
    }
    /**
   * Construct a new YArray containing the specified items.
   * @template {Object<string,any>|Array<any>|number|null|string|Uint8Array} T
   * @param {Array<T>} items
   * @return {YArray<T>}
   */ static from(items) {
        /**
     * @type {YArray<T>}
     */ const a = new YArray();
        a.push(items);
        return a;
    }
    /**
   * Integrate this type into the Yjs instance.
   *
   * * Save this struct in the os
   * * This type is sent to other client
   * * Observer functions are fired
   *
   * @param {Doc} y The Yjs instance
   * @param {Item} item
   */ _integrate(y, item) {
        super._integrate(y, item);
        this.insert(0, /** @type {Array<any>} */ this._prelimContent);
        this._prelimContent = null;
    }
    /**
   * @return {YArray<T>}
   */ _copy() {
        return new YArray();
    }
    /**
   * Makes a copy of this data type that can be included somewhere else.
   *
   * Note that the content is only readable _after_ it has been included somewhere in the Ydoc.
   *
   * @return {YArray<T>}
   */ clone() {
        /**
     * @type {YArray<T>}
     */ const arr = new YArray();
        arr.insert(0, this.toArray().map((el)=>el instanceof AbstractType ? /** @type {typeof el} */ el.clone() : el));
        return arr;
    }
    get length() {
        this.doc ?? warnPrematureAccess();
        return this._length;
    }
    /**
   * Creates YArrayEvent and calls observers.
   *
   * @param {Transaction} transaction
   * @param {Set<null|string>} parentSubs Keys changed on this type. `null` if list was modified.
   */ _callObserver(transaction, parentSubs) {
        super._callObserver(transaction, parentSubs);
        callTypeObservers(this, transaction, new YArrayEvent(this, transaction));
    }
    /**
   * Inserts new content at an index.
   *
   * Important: This function expects an array of content. Not just a content
   * object. The reason for this "weirdness" is that inserting several elements
   * is very efficient when it is done as a single operation.
   *
   * @example
   *  // Insert character 'a' at position 0
   *  yarray.insert(0, ['a'])
   *  // Insert numbers 1, 2 at position 1
   *  yarray.insert(1, [1, 2])
   *
   * @param {number} index The index to insert content at.
   * @param {Array<T>} content The array of content
   */ insert(index, content) {
        if (this.doc !== null) transact(this.doc, (transaction)=>{
            typeListInsertGenerics(transaction, this, index, /** @type {any} */ content);
        });
        else /** @type {Array<any>} */ this._prelimContent.splice(index, 0, ...content);
    }
    /**
   * Appends content to this YArray.
   *
   * @param {Array<T>} content Array of content to append.
   *
   * @todo Use the following implementation in all types.
   */ push(content) {
        if (this.doc !== null) transact(this.doc, (transaction)=>{
            typeListPushGenerics(transaction, this, /** @type {any} */ content);
        });
        else /** @type {Array<any>} */ this._prelimContent.push(...content);
    }
    /**
   * Prepends content to this YArray.
   *
   * @param {Array<T>} content Array of content to prepend.
   */ unshift(content) {
        this.insert(0, content);
    }
    /**
   * Deletes elements starting from an index.
   *
   * @param {number} index Index at which to start deleting elements
   * @param {number} length The number of elements to remove. Defaults to 1.
   */ delete(index, length = 1) {
        if (this.doc !== null) transact(this.doc, (transaction)=>{
            typeListDelete(transaction, this, index, length);
        });
        else /** @type {Array<any>} */ this._prelimContent.splice(index, length);
    }
    /**
   * Returns the i-th element from a YArray.
   *
   * @param {number} index The index of the element to return from the YArray
   * @return {T}
   */ get(index) {
        return typeListGet(this, index);
    }
    /**
   * Transforms this YArray to a JavaScript Array.
   *
   * @return {Array<T>}
   */ toArray() {
        return typeListToArray(this);
    }
    /**
   * Returns a portion of this YArray into a JavaScript Array selected
   * from start to end (end not included).
   *
   * @param {number} [start]
   * @param {number} [end]
   * @return {Array<T>}
   */ slice(start = 0, end = this.length) {
        return typeListSlice(this, start, end);
    }
    /**
   * Transforms this Shared Type to a JSON object.
   *
   * @return {Array<any>}
   */ toJSON() {
        return this.map((c)=>c instanceof AbstractType ? c.toJSON() : c);
    }
    /**
   * Returns an Array with the result of calling a provided function on every
   * element of this YArray.
   *
   * @template M
   * @param {function(T,number,YArray<T>):M} f Function that produces an element of the new Array
   * @return {Array<M>} A new array with each element being the result of the
   *                 callback function
   */ map(f) {
        return typeListMap(this, /** @type {any} */ f);
    }
    /**
   * Executes a provided function once on every element of this YArray.
   *
   * @param {function(T,number,YArray<T>):void} f A function to execute on every element of this YArray.
   */ forEach(f) {
        typeListForEach(this, f);
    }
    /**
   * @return {IterableIterator<T>}
   */ [Symbol.iterator]() {
        return typeListCreateIterator(this);
    }
    /**
   * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder
   */ _write(encoder) {
        encoder.writeTypeRef(YArrayRefID);
    }
}
/**
 * @param {UpdateDecoderV1 | UpdateDecoderV2} _decoder
 *
 * @private
 * @function
 */ const readYArray = (_decoder)=>new YArray();
/**
 * @module YMap
 */ /**
 * @template T
 * @extends YEvent<YMap<T>>
 * Event that describes the changes on a YMap.
 */ class YMapEvent extends YEvent {
    /**
   * @param {YMap<T>} ymap The YArray that changed.
   * @param {Transaction} transaction
   * @param {Set<any>} subs The keys that changed.
   */ constructor(ymap, transaction, subs){
        super(ymap, transaction);
        this.keysChanged = subs;
    }
}
/**
 * @template MapType
 * A shared Map implementation.
 *
 * @extends AbstractType<YMapEvent<MapType>>
 * @implements {Iterable<[string, MapType]>}
 */ class YMap extends AbstractType {
    /**
   *
   * @param {Iterable<readonly [string, any]>=} entries - an optional iterable to initialize the YMap
   */ constructor(entries){
        super();
        /**
     * @type {Map<string,any>?}
     * @private
     */ this._prelimContent = null;
        if (entries === undefined) this._prelimContent = new Map();
        else this._prelimContent = new Map(entries);
    }
    /**
   * Integrate this type into the Yjs instance.
   *
   * * Save this struct in the os
   * * This type is sent to other client
   * * Observer functions are fired
   *
   * @param {Doc} y The Yjs instance
   * @param {Item} item
   */ _integrate(y, item) {
        super._integrate(y, item); /** @type {Map<string, any>} */ 
        this._prelimContent.forEach((value, key)=>{
            this.set(key, value);
        });
        this._prelimContent = null;
    }
    /**
   * @return {YMap<MapType>}
   */ _copy() {
        return new YMap();
    }
    /**
   * Makes a copy of this data type that can be included somewhere else.
   *
   * Note that the content is only readable _after_ it has been included somewhere in the Ydoc.
   *
   * @return {YMap<MapType>}
   */ clone() {
        /**
     * @type {YMap<MapType>}
     */ const map = new YMap();
        this.forEach((value, key)=>{
            map.set(key, value instanceof AbstractType ? /** @type {typeof value} */ value.clone() : value);
        });
        return map;
    }
    /**
   * Creates YMapEvent and calls observers.
   *
   * @param {Transaction} transaction
   * @param {Set<null|string>} parentSubs Keys changed on this type. `null` if list was modified.
   */ _callObserver(transaction, parentSubs) {
        callTypeObservers(this, transaction, new YMapEvent(this, transaction, parentSubs));
    }
    /**
   * Transforms this Shared Type to a JSON object.
   *
   * @return {Object<string,any>}
   */ toJSON() {
        this.doc ?? warnPrematureAccess();
        /**
     * @type {Object<string,MapType>}
     */ const map = {};
        this._map.forEach((item, key)=>{
            if (!item.deleted) {
                const v = item.content.getContent()[item.length - 1];
                map[key] = v instanceof AbstractType ? v.toJSON() : v;
            }
        });
        return map;
    }
    /**
   * Returns the size of the YMap (count of key/value pairs)
   *
   * @return {number}
   */ get size() {
        return [
            ...createMapIterator(this)
        ].length;
    }
    /**
   * Returns the keys for each element in the YMap Type.
   *
   * @return {IterableIterator<string>}
   */ keys() {
        return _iterator.iteratorMap(createMapIterator(this), /** @param {any} v */ (v)=>v[0]);
    }
    /**
   * Returns the values for each element in the YMap Type.
   *
   * @return {IterableIterator<MapType>}
   */ values() {
        return _iterator.iteratorMap(createMapIterator(this), /** @param {any} v */ (v)=>v[1].content.getContent()[v[1].length - 1]);
    }
    /**
   * Returns an Iterator of [key, value] pairs
   *
   * @return {IterableIterator<[string, MapType]>}
   */ entries() {
        return _iterator.iteratorMap(createMapIterator(this), /** @param {any} v */ (v)=>/** @type {any} */ [
                v[0],
                v[1].content.getContent()[v[1].length - 1]
            ]);
    }
    /**
   * Executes a provided function on once on every key-value pair.
   *
   * @param {function(MapType,string,YMap<MapType>):void} f A function to execute on every element of this YArray.
   */ forEach(f) {
        this.doc ?? warnPrematureAccess();
        this._map.forEach((item, key)=>{
            if (!item.deleted) f(item.content.getContent()[item.length - 1], key, this);
        });
    }
    /**
   * Returns an Iterator of [key, value] pairs
   *
   * @return {IterableIterator<[string, MapType]>}
   */ [Symbol.iterator]() {
        return this.entries();
    }
    /**
   * Remove a specified element from this YMap.
   *
   * @param {string} key The key of the element to remove.
   */ delete(key) {
        if (this.doc !== null) transact(this.doc, (transaction)=>{
            typeMapDelete(transaction, this, key);
        });
        else /** @type {Map<string, any>} */ this._prelimContent.delete(key);
    }
    /**
   * Adds or updates an element with a specified key and value.
   * @template {MapType} VAL
   *
   * @param {string} key The key of the element to add to this YMap
   * @param {VAL} value The value of the element to add
   * @return {VAL}
   */ set(key, value) {
        if (this.doc !== null) transact(this.doc, (transaction)=>{
            typeMapSet(transaction, this, key, /** @type {any} */ value);
        });
        else /** @type {Map<string, any>} */ this._prelimContent.set(key, value);
        return value;
    }
    /**
   * Returns a specified element from this YMap.
   *
   * @param {string} key
   * @return {MapType|undefined}
   */ get(key) {
        return /** @type {any} */ typeMapGet(this, key);
    }
    /**
   * Returns a boolean indicating whether the specified key exists or not.
   *
   * @param {string} key The key to test.
   * @return {boolean}
   */ has(key) {
        return typeMapHas(this, key);
    }
    /**
   * Removes all elements from this YMap.
   */ clear() {
        if (this.doc !== null) transact(this.doc, (transaction)=>{
            this.forEach(function(_value, key, map) {
                typeMapDelete(transaction, map, key);
            });
        });
        else /** @type {Map<string, any>} */ this._prelimContent.clear();
    }
    /**
   * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder
   */ _write(encoder) {
        encoder.writeTypeRef(YMapRefID);
    }
}
/**
 * @param {UpdateDecoderV1 | UpdateDecoderV2} _decoder
 *
 * @private
 * @function
 */ const readYMap = (_decoder)=>new YMap();
/**
 * @module YText
 */ /**
 * @param {any} a
 * @param {any} b
 * @return {boolean}
 */ const equalAttrs = (a, b)=>a === b || typeof a === 'object' && typeof b === 'object' && a && b && _object.equalFlat(a, b);
class ItemTextListPosition {
    /**
   * @param {Item|null} left
   * @param {Item|null} right
   * @param {number} index
   * @param {Map<string,any>} currentAttributes
   */ constructor(left, right, index, currentAttributes){
        this.left = left;
        this.right = right;
        this.index = index;
        this.currentAttributes = currentAttributes;
    }
    /**
   * Only call this if you know that this.right is defined
   */ forward() {
        if (this.right === null) _error.unexpectedCase();
        switch(this.right.content.constructor){
            case ContentFormat:
                if (!this.right.deleted) updateCurrentAttributes(this.currentAttributes, /** @type {ContentFormat} */ this.right.content);
                break;
            default:
                if (!this.right.deleted) this.index += this.right.length;
                break;
        }
        this.left = this.right;
        this.right = this.right.right;
    }
}
/**
 * @param {Transaction} transaction
 * @param {ItemTextListPosition} pos
 * @param {number} count steps to move forward
 * @return {ItemTextListPosition}
 *
 * @private
 * @function
 */ const findNextPosition = (transaction, pos, count)=>{
    while(pos.right !== null && count > 0){
        switch(pos.right.content.constructor){
            case ContentFormat:
                if (!pos.right.deleted) updateCurrentAttributes(pos.currentAttributes, /** @type {ContentFormat} */ pos.right.content);
                break;
            default:
                if (!pos.right.deleted) {
                    if (count < pos.right.length) // split right
                    getItemCleanStart(transaction, createID(pos.right.id.client, pos.right.id.clock + count));
                    pos.index += pos.right.length;
                    count -= pos.right.length;
                }
                break;
        }
        pos.left = pos.right;
        pos.right = pos.right.right;
    // pos.forward() - we don't forward because that would halve the performance because we already do the checks above
    }
    return pos;
};
/**
 * @param {Transaction} transaction
 * @param {AbstractType<any>} parent
 * @param {number} index
 * @param {boolean} useSearchMarker
 * @return {ItemTextListPosition}
 *
 * @private
 * @function
 */ const findPosition = (transaction, parent, index, useSearchMarker)=>{
    const currentAttributes = new Map();
    const marker = useSearchMarker ? findMarker(parent, index) : null;
    if (marker) {
        const pos = new ItemTextListPosition(marker.p.left, marker.p, marker.index, currentAttributes);
        return findNextPosition(transaction, pos, index - marker.index);
    } else {
        const pos = new ItemTextListPosition(null, parent._start, 0, currentAttributes);
        return findNextPosition(transaction, pos, index);
    }
};
/**
 * Negate applied formats
 *
 * @param {Transaction} transaction
 * @param {AbstractType<any>} parent
 * @param {ItemTextListPosition} currPos
 * @param {Map<string,any>} negatedAttributes
 *
 * @private
 * @function
 */ const insertNegatedAttributes = (transaction, parent, currPos, negatedAttributes)=>{
    // check if we really need to remove attributes
    while(currPos.right !== null && (currPos.right.deleted === true || currPos.right.content.constructor === ContentFormat && equalAttrs(negatedAttributes.get(/** @type {ContentFormat} */ currPos.right.content.key), /** @type {ContentFormat} */ currPos.right.content.value))){
        if (!currPos.right.deleted) negatedAttributes.delete(/** @type {ContentFormat} */ currPos.right.content.key);
        currPos.forward();
    }
    const doc = transaction.doc;
    const ownClientId = doc.clientID;
    negatedAttributes.forEach((val, key)=>{
        const left = currPos.left;
        const right = currPos.right;
        const nextFormat = new Item(createID(ownClientId, getState(doc.store, ownClientId)), left, left && left.lastId, right, right && right.id, parent, null, new ContentFormat(key, val));
        nextFormat.integrate(transaction, 0);
        currPos.right = nextFormat;
        currPos.forward();
    });
};
/**
 * @param {Map<string,any>} currentAttributes
 * @param {ContentFormat} format
 *
 * @private
 * @function
 */ const updateCurrentAttributes = (currentAttributes, format)=>{
    const { key, value } = format;
    if (value === null) currentAttributes.delete(key);
    else currentAttributes.set(key, value);
};
/**
 * @param {ItemTextListPosition} currPos
 * @param {Object<string,any>} attributes
 *
 * @private
 * @function
 */ const minimizeAttributeChanges = (currPos, attributes)=>{
    // go right while attributes[right.key] === right.value (or right is deleted)
    while(true){
        if (currPos.right === null) break;
        else if (currPos.right.deleted || currPos.right.content.constructor === ContentFormat && equalAttrs(attributes[/** @type {ContentFormat} */ currPos.right.content.key] ?? null, /** @type {ContentFormat} */ currPos.right.content.value)) ;
        else break;
        currPos.forward();
    }
};
/**
 * @param {Transaction} transaction
 * @param {AbstractType<any>} parent
 * @param {ItemTextListPosition} currPos
 * @param {Object<string,any>} attributes
 * @return {Map<string,any>}
 *
 * @private
 * @function
 **/ const insertAttributes = (transaction, parent, currPos, attributes)=>{
    const doc = transaction.doc;
    const ownClientId = doc.clientID;
    const negatedAttributes = new Map();
    // insert format-start items
    for(const key in attributes){
        const val = attributes[key];
        const currentVal = currPos.currentAttributes.get(key) ?? null;
        if (!equalAttrs(currentVal, val)) {
            // save negated attribute (set null if currentVal undefined)
            negatedAttributes.set(key, currentVal);
            const { left, right } = currPos;
            currPos.right = new Item(createID(ownClientId, getState(doc.store, ownClientId)), left, left && left.lastId, right, right && right.id, parent, null, new ContentFormat(key, val));
            currPos.right.integrate(transaction, 0);
            currPos.forward();
        }
    }
    return negatedAttributes;
};
/**
 * @param {Transaction} transaction
 * @param {AbstractType<any>} parent
 * @param {ItemTextListPosition} currPos
 * @param {string|object|AbstractType<any>} text
 * @param {Object<string,any>} attributes
 *
 * @private
 * @function
 **/ const insertText = (transaction, parent, currPos, text, attributes)=>{
    currPos.currentAttributes.forEach((_val, key)=>{
        if (attributes[key] === undefined) attributes[key] = null;
    });
    const doc = transaction.doc;
    const ownClientId = doc.clientID;
    minimizeAttributeChanges(currPos, attributes);
    const negatedAttributes = insertAttributes(transaction, parent, currPos, attributes);
    // insert content
    const content = text.constructor === String ? new ContentString(/** @type {string} */ text) : text instanceof AbstractType ? new ContentType(text) : new ContentEmbed(text);
    let { left, right, index } = currPos;
    if (parent._searchMarker) updateMarkerChanges(parent._searchMarker, currPos.index, content.getLength());
    right = new Item(createID(ownClientId, getState(doc.store, ownClientId)), left, left && left.lastId, right, right && right.id, parent, null, content);
    right.integrate(transaction, 0);
    currPos.right = right;
    currPos.index = index;
    currPos.forward();
    insertNegatedAttributes(transaction, parent, currPos, negatedAttributes);
};
/**
 * @param {Transaction} transaction
 * @param {AbstractType<any>} parent
 * @param {ItemTextListPosition} currPos
 * @param {number} length
 * @param {Object<string,any>} attributes
 *
 * @private
 * @function
 */ const formatText = (transaction, parent, currPos, length, attributes)=>{
    const doc = transaction.doc;
    const ownClientId = doc.clientID;
    minimizeAttributeChanges(currPos, attributes);
    const negatedAttributes = insertAttributes(transaction, parent, currPos, attributes);
    // iterate until first non-format or null is found
    // delete all formats with attributes[format.key] != null
    // also check the attributes after the first non-format as we do not want to insert redundant negated attributes there
    // eslint-disable-next-line no-labels
    iterationLoop: while(currPos.right !== null && (length > 0 || negatedAttributes.size > 0 && (currPos.right.deleted || currPos.right.content.constructor === ContentFormat))){
        if (!currPos.right.deleted) switch(currPos.right.content.constructor){
            case ContentFormat:
                {
                    const { key, value } = /** @type {ContentFormat} */ currPos.right.content;
                    const attr = attributes[key];
                    if (attr !== undefined) {
                        if (equalAttrs(attr, value)) negatedAttributes.delete(key);
                        else {
                            if (length === 0) break iterationLoop;
                            negatedAttributes.set(key, value);
                        }
                        currPos.right.delete(transaction);
                    } else currPos.currentAttributes.set(key, value);
                    break;
                }
            default:
                if (length < currPos.right.length) getItemCleanStart(transaction, createID(currPos.right.id.client, currPos.right.id.clock + length));
                length -= currPos.right.length;
                break;
        }
        currPos.forward();
    }
    // Quill just assumes that the editor starts with a newline and that it always
    // ends with a newline. We only insert that newline when a new newline is
    // inserted - i.e when length is bigger than type.length
    if (length > 0) {
        let newlines = '';
        for(; length > 0; length--)newlines += '\n';
        currPos.right = new Item(createID(ownClientId, getState(doc.store, ownClientId)), currPos.left, currPos.left && currPos.left.lastId, currPos.right, currPos.right && currPos.right.id, parent, null, new ContentString(newlines));
        currPos.right.integrate(transaction, 0);
        currPos.forward();
    }
    insertNegatedAttributes(transaction, parent, currPos, negatedAttributes);
};
/**
 * Call this function after string content has been deleted in order to
 * clean up formatting Items.
 *
 * @param {Transaction} transaction
 * @param {Item} start
 * @param {Item|null} curr exclusive end, automatically iterates to the next Content Item
 * @param {Map<string,any>} startAttributes
 * @param {Map<string,any>} currAttributes
 * @return {number} The amount of formatting Items deleted.
 *
 * @function
 */ const cleanupFormattingGap = (transaction, start, curr, startAttributes, currAttributes)=>{
    /**
   * @type {Item|null}
   */ let end = start;
    /**
   * @type {Map<string,ContentFormat>}
   */ const endFormats = _map.create();
    while(end && (!end.countable || end.deleted)){
        if (!end.deleted && end.content.constructor === ContentFormat) {
            const cf = /** @type {ContentFormat} */ end.content;
            endFormats.set(cf.key, cf);
        }
        end = end.right;
    }
    let cleanups = 0;
    let reachedCurr = false;
    while(start !== end){
        if (curr === start) reachedCurr = true;
        if (!start.deleted) {
            const content = start.content;
            switch(content.constructor){
                case ContentFormat:
                    {
                        const { key, value } = /** @type {ContentFormat} */ content;
                        const startAttrValue = startAttributes.get(key) ?? null;
                        if (endFormats.get(key) !== content || startAttrValue === value) {
                            // Either this format is overwritten or it is not necessary because the attribute already existed.
                            start.delete(transaction);
                            cleanups++;
                            if (!reachedCurr && (currAttributes.get(key) ?? null) === value && startAttrValue !== value) {
                                if (startAttrValue === null) currAttributes.delete(key);
                                else currAttributes.set(key, startAttrValue);
                            }
                        }
                        if (!reachedCurr && !start.deleted) updateCurrentAttributes(currAttributes, /** @type {ContentFormat} */ content);
                        break;
                    }
            }
        }
        start = /** @type {Item} */ start.right;
    }
    return cleanups;
};
/**
 * @param {Transaction} transaction
 * @param {Item | null} item
 */ const cleanupContextlessFormattingGap = (transaction, item)=>{
    // iterate until item.right is null or content
    while(item && item.right && (item.right.deleted || !item.right.countable))item = item.right;
    const attrs = new Set();
    // iterate back until a content item is found
    while(item && (item.deleted || !item.countable)){
        if (!item.deleted && item.content.constructor === ContentFormat) {
            const key = /** @type {ContentFormat} */ item.content.key;
            if (attrs.has(key)) item.delete(transaction);
            else attrs.add(key);
        }
        item = item.left;
    }
};
/**
 * This function is experimental and subject to change / be removed.
 *
 * Ideally, we don't need this function at all. Formatting attributes should be cleaned up
 * automatically after each change. This function iterates twice over the complete YText type
 * and removes unnecessary formatting attributes. This is also helpful for testing.
 *
 * This function won't be exported anymore as soon as there is confidence that the YText type works as intended.
 *
 * @param {YText} type
 * @return {number} How many formatting attributes have been cleaned up.
 */ const cleanupYTextFormatting = (type)=>{
    let res = 0;
    transact(/** @type {Doc} */ type.doc, (transaction)=>{
        let start = /** @type {Item} */ type._start;
        let end = type._start;
        let startAttributes = _map.create();
        const currentAttributes = _map.copy(startAttributes);
        while(end){
            if (end.deleted === false) switch(end.content.constructor){
                case ContentFormat:
                    updateCurrentAttributes(currentAttributes, /** @type {ContentFormat} */ end.content);
                    break;
                default:
                    res += cleanupFormattingGap(transaction, start, end, startAttributes, currentAttributes);
                    startAttributes = _map.copy(currentAttributes);
                    start = end;
                    break;
            }
            end = end.right;
        }
    });
    return res;
};
/**
 * This will be called by the transaction once the event handlers are called to potentially cleanup
 * formatting attributes.
 *
 * @param {Transaction} transaction
 */ const cleanupYTextAfterTransaction = (transaction)=>{
    /**
   * @type {Set<YText>}
   */ const needFullCleanup = new Set();
    // check if another formatting item was inserted
    const doc = transaction.doc;
    for (const [client, afterClock] of transaction.afterState.entries()){
        const clock = transaction.beforeState.get(client) || 0;
        if (afterClock === clock) continue;
        iterateStructs(transaction, /** @type {Array<Item|GC>} */ doc.store.clients.get(client), clock, afterClock, (item)=>{
            if (!item.deleted && /** @type {Item} */ item.content.constructor === ContentFormat && item.constructor !== GC) needFullCleanup.add(/** @type {any} */ item.parent);
        });
    }
    // cleanup in a new transaction
    transact(doc, (t)=>{
        iterateDeletedStructs(transaction, transaction.deleteSet, (item)=>{
            if (item instanceof GC || !/** @type {YText} */ item.parent._hasFormatting || needFullCleanup.has(/** @type {YText} */ item.parent)) return;
            const parent = /** @type {YText} */ item.parent;
            if (item.content.constructor === ContentFormat) needFullCleanup.add(parent);
            else // If no formatting attribute was inserted or deleted, we can make due with contextless
            // formatting cleanups.
            // Contextless: it is not necessary to compute currentAttributes for the affected position.
            cleanupContextlessFormattingGap(t, item);
        });
        // If a formatting item was inserted, we simply clean the whole type.
        // We need to compute currentAttributes for the current position anyway.
        for (const yText of needFullCleanup)cleanupYTextFormatting(yText);
    });
};
/**
 * @param {Transaction} transaction
 * @param {ItemTextListPosition} currPos
 * @param {number} length
 * @return {ItemTextListPosition}
 *
 * @private
 * @function
 */ const deleteText = (transaction, currPos, length)=>{
    const startLength = length;
    const startAttrs = _map.copy(currPos.currentAttributes);
    const start = currPos.right;
    while(length > 0 && currPos.right !== null){
        if (currPos.right.deleted === false) switch(currPos.right.content.constructor){
            case ContentType:
            case ContentEmbed:
            case ContentString:
                if (length < currPos.right.length) getItemCleanStart(transaction, createID(currPos.right.id.client, currPos.right.id.clock + length));
                length -= currPos.right.length;
                currPos.right.delete(transaction);
                break;
        }
        currPos.forward();
    }
    if (start) cleanupFormattingGap(transaction, start, currPos.right, startAttrs, currPos.currentAttributes);
    const parent = /** @type {AbstractType<any>} */ /** @type {Item} */ (currPos.left || currPos.right).parent;
    if (parent._searchMarker) updateMarkerChanges(parent._searchMarker, currPos.index, -startLength + length);
    return currPos;
};
/**
 * The Quill Delta format represents changes on a text document with
 * formatting information. For more information visit {@link https://quilljs.com/docs/delta/|Quill Delta}
 *
 * @example
 *   {
 *     ops: [
 *       { insert: 'Gandalf', attributes: { bold: true } },
 *       { insert: ' the ' },
 *       { insert: 'Grey', attributes: { color: '#cccccc' } }
 *     ]
 *   }
 *
 */ /**
  * Attributes that can be assigned to a selection of text.
  *
  * @example
  *   {
  *     bold: true,
  *     font-size: '40px'
  *   }
  *
  * @typedef {Object} TextAttributes
  */ /**
 * @extends YEvent<YText>
 * Event that describes the changes on a YText type.
 */ class YTextEvent extends YEvent {
    /**
   * @param {YText} ytext
   * @param {Transaction} transaction
   * @param {Set<any>} subs The keys that changed
   */ constructor(ytext, transaction, subs){
        super(ytext, transaction);
        /**
     * Whether the children changed.
     * @type {Boolean}
     * @private
     */ this.childListChanged = false;
        /**
     * Set of all changed attributes.
     * @type {Set<string>}
     */ this.keysChanged = new Set();
        subs.forEach((sub)=>{
            if (sub === null) this.childListChanged = true;
            else this.keysChanged.add(sub);
        });
    }
    /**
   * @type {{added:Set<Item>,deleted:Set<Item>,keys:Map<string,{action:'add'|'update'|'delete',oldValue:any}>,delta:Array<{insert?:Array<any>|string, delete?:number, retain?:number}>}}
   */ get changes() {
        if (this._changes === null) {
            /**
       * @type {{added:Set<Item>,deleted:Set<Item>,keys:Map<string,{action:'add'|'update'|'delete',oldValue:any}>,delta:Array<{insert?:Array<any>|string|AbstractType<any>|object, delete?:number, retain?:number}>}}
       */ const changes = {
                keys: this.keys,
                delta: this.delta,
                added: new Set(),
                deleted: new Set()
            };
            this._changes = changes;
        }
        return /** @type {any} */ this._changes;
    }
    /**
   * Compute the changes in the delta format.
   * A {@link https://quilljs.com/docs/delta/|Quill Delta}) that represents the changes on the document.
   *
   * @type {Array<{insert?:string|object|AbstractType<any>, delete?:number, retain?:number, attributes?: Object<string,any>}>}
   *
   * @public
   */ get delta() {
        if (this._delta === null) {
            const y = /** @type {Doc} */ this.target.doc;
            /**
       * @type {Array<{insert?:string|object|AbstractType<any>, delete?:number, retain?:number, attributes?: Object<string,any>}>}
       */ const delta = [];
            transact(y, (transaction)=>{
                const currentAttributes = new Map(); // saves all current attributes for insert
                const oldAttributes = new Map();
                let item = this.target._start;
                /**
         * @type {string?}
         */ let action = null;
                /**
         * @type {Object<string,any>}
         */ const attributes = {}; // counts added or removed new attributes for retain
                /**
         * @type {string|object}
         */ let insert = '';
                let retain = 0;
                let deleteLen = 0;
                const addOp = ()=>{
                    if (action !== null) {
                        /**
             * @type {any}
             */ let op = null;
                        switch(action){
                            case 'delete':
                                if (deleteLen > 0) op = {
                                    delete: deleteLen
                                };
                                deleteLen = 0;
                                break;
                            case 'insert':
                                if (typeof insert === 'object' || insert.length > 0) {
                                    op = {
                                        insert
                                    };
                                    if (currentAttributes.size > 0) {
                                        op.attributes = {};
                                        currentAttributes.forEach((value, key)=>{
                                            if (value !== null) op.attributes[key] = value;
                                        });
                                    }
                                }
                                insert = '';
                                break;
                            case 'retain':
                                if (retain > 0) {
                                    op = {
                                        retain
                                    };
                                    if (!_object.isEmpty(attributes)) op.attributes = _object.assign({}, attributes);
                                }
                                retain = 0;
                                break;
                        }
                        if (op) delta.push(op);
                        action = null;
                    }
                };
                while(item !== null){
                    switch(item.content.constructor){
                        case ContentType:
                        case ContentEmbed:
                            if (this.adds(item)) {
                                if (!this.deletes(item)) {
                                    addOp();
                                    action = 'insert';
                                    insert = item.content.getContent()[0];
                                    addOp();
                                }
                            } else if (this.deletes(item)) {
                                if (action !== 'delete') {
                                    addOp();
                                    action = 'delete';
                                }
                                deleteLen += 1;
                            } else if (!item.deleted) {
                                if (action !== 'retain') {
                                    addOp();
                                    action = 'retain';
                                }
                                retain += 1;
                            }
                            break;
                        case ContentString:
                            if (this.adds(item)) {
                                if (!this.deletes(item)) {
                                    if (action !== 'insert') {
                                        addOp();
                                        action = 'insert';
                                    }
                                    insert += /** @type {ContentString} */ item.content.str;
                                }
                            } else if (this.deletes(item)) {
                                if (action !== 'delete') {
                                    addOp();
                                    action = 'delete';
                                }
                                deleteLen += item.length;
                            } else if (!item.deleted) {
                                if (action !== 'retain') {
                                    addOp();
                                    action = 'retain';
                                }
                                retain += item.length;
                            }
                            break;
                        case ContentFormat:
                            {
                                const { key, value } = /** @type {ContentFormat} */ item.content;
                                if (this.adds(item)) {
                                    if (!this.deletes(item)) {
                                        const curVal = currentAttributes.get(key) ?? null;
                                        if (!equalAttrs(curVal, value)) {
                                            if (action === 'retain') addOp();
                                            if (equalAttrs(value, oldAttributes.get(key) ?? null)) delete attributes[key];
                                            else attributes[key] = value;
                                        } else if (value !== null) item.delete(transaction);
                                    }
                                } else if (this.deletes(item)) {
                                    oldAttributes.set(key, value);
                                    const curVal = currentAttributes.get(key) ?? null;
                                    if (!equalAttrs(curVal, value)) {
                                        if (action === 'retain') addOp();
                                        attributes[key] = curVal;
                                    }
                                } else if (!item.deleted) {
                                    oldAttributes.set(key, value);
                                    const attr = attributes[key];
                                    if (attr !== undefined) {
                                        if (!equalAttrs(attr, value)) {
                                            if (action === 'retain') addOp();
                                            if (value === null) delete attributes[key];
                                            else attributes[key] = value;
                                        } else if (attr !== null) item.delete(transaction);
                                    }
                                }
                                if (!item.deleted) {
                                    if (action === 'insert') addOp();
                                    updateCurrentAttributes(currentAttributes, /** @type {ContentFormat} */ item.content);
                                }
                                break;
                            }
                    }
                    item = item.right;
                }
                addOp();
                while(delta.length > 0){
                    const lastOp = delta[delta.length - 1];
                    if (lastOp.retain !== undefined && lastOp.attributes === undefined) // retain delta's if they don't assign attributes
                    delta.pop();
                    else break;
                }
            });
            this._delta = delta;
        }
        return /** @type {any} */ this._delta;
    }
}
/**
 * Type that represents text with formatting information.
 *
 * This type replaces y-richtext as this implementation is able to handle
 * block formats (format information on a paragraph), embeds (complex elements
 * like pictures and videos), and text formats (**bold**, *italic*).
 *
 * @extends AbstractType<YTextEvent>
 */ class YText extends AbstractType {
    /**
   * @param {String} [string] The initial value of the YText.
   */ constructor(string){
        super();
        /**
     * Array of pending operations on this type
     * @type {Array<function():void>?}
     */ this._pending = string !== undefined ? [
            ()=>this.insert(0, string)
        ] : [];
        /**
     * @type {Array<ArraySearchMarker>|null}
     */ this._searchMarker = [];
        /**
     * Whether this YText contains formatting attributes.
     * This flag is updated when a formatting item is integrated (see ContentFormat.integrate)
     */ this._hasFormatting = false;
    }
    /**
   * Number of characters of this text type.
   *
   * @type {number}
   */ get length() {
        this.doc ?? warnPrematureAccess();
        return this._length;
    }
    /**
   * @param {Doc} y
   * @param {Item} item
   */ _integrate(y, item) {
        super._integrate(y, item);
        try {
            /** @type {Array<function>} */ this._pending.forEach((f)=>f());
        } catch (e) {
            console.error(e);
        }
        this._pending = null;
    }
    _copy() {
        return new YText();
    }
    /**
   * Makes a copy of this data type that can be included somewhere else.
   *
   * Note that the content is only readable _after_ it has been included somewhere in the Ydoc.
   *
   * @return {YText}
   */ clone() {
        const text = new YText();
        text.applyDelta(this.toDelta());
        return text;
    }
    /**
   * Creates YTextEvent and calls observers.
   *
   * @param {Transaction} transaction
   * @param {Set<null|string>} parentSubs Keys changed on this type. `null` if list was modified.
   */ _callObserver(transaction, parentSubs) {
        super._callObserver(transaction, parentSubs);
        const event = new YTextEvent(this, transaction, parentSubs);
        callTypeObservers(this, transaction, event);
        // If a remote change happened, we try to cleanup potential formatting duplicates.
        if (!transaction.local && this._hasFormatting) transaction._needFormattingCleanup = true;
    }
    /**
   * Returns the unformatted string representation of this YText type.
   *
   * @public
   */ toString() {
        this.doc ?? warnPrematureAccess();
        let str = '';
        /**
     * @type {Item|null}
     */ let n = this._start;
        while(n !== null){
            if (!n.deleted && n.countable && n.content.constructor === ContentString) str += /** @type {ContentString} */ n.content.str;
            n = n.right;
        }
        return str;
    }
    /**
   * Returns the unformatted string representation of this YText type.
   *
   * @return {string}
   * @public
   */ toJSON() {
        return this.toString();
    }
    /**
   * Apply a {@link Delta} on this shared YText type.
   *
   * @param {Array<any>} delta The changes to apply on this element.
   * @param {object}  opts
   * @param {boolean} [opts.sanitize] Sanitize input delta. Removes ending newlines if set to true.
   *
   *
   * @public
   */ applyDelta(delta, { sanitize = true } = {}) {
        if (this.doc !== null) transact(this.doc, (transaction)=>{
            const currPos = new ItemTextListPosition(null, this._start, 0, new Map());
            for(let i = 0; i < delta.length; i++){
                const op = delta[i];
                if (op.insert !== undefined) {
                    // Quill assumes that the content starts with an empty paragraph.
                    // Yjs/Y.Text assumes that it starts empty. We always hide that
                    // there is a newline at the end of the content.
                    // If we omit this step, clients will see a different number of
                    // paragraphs, but nothing bad will happen.
                    const ins = !sanitize && typeof op.insert === 'string' && i === delta.length - 1 && currPos.right === null && op.insert.slice(-1) === '\n' ? op.insert.slice(0, -1) : op.insert;
                    if (typeof ins !== 'string' || ins.length > 0) insertText(transaction, this, currPos, ins, op.attributes || {});
                } else if (op.retain !== undefined) formatText(transaction, this, currPos, op.retain, op.attributes || {});
                else if (op.delete !== undefined) deleteText(transaction, currPos, op.delete);
            }
        });
        else /** @type {Array<function>} */ this._pending.push(()=>this.applyDelta(delta));
    }
    /**
   * Returns the Delta representation of this YText type.
   *
   * @param {Snapshot} [snapshot]
   * @param {Snapshot} [prevSnapshot]
   * @param {function('removed' | 'added', ID):any} [computeYChange]
   * @return {any} The Delta representation of this type.
   *
   * @public
   */ toDelta(snapshot, prevSnapshot, computeYChange) {
        this.doc ?? warnPrematureAccess();
        /**
     * @type{Array<any>}
     */ const ops = [];
        const currentAttributes = new Map();
        const doc = /** @type {Doc} */ this.doc;
        let str = '';
        let n = this._start;
        function packStr() {
            if (str.length > 0) {
                // pack str with attributes to ops
                /**
         * @type {Object<string,any>}
         */ const attributes = {};
                let addAttributes = false;
                currentAttributes.forEach((value, key)=>{
                    addAttributes = true;
                    attributes[key] = value;
                });
                /**
         * @type {Object<string,any>}
         */ const op = {
                    insert: str
                };
                if (addAttributes) op.attributes = attributes;
                ops.push(op);
                str = '';
            }
        }
        const computeDelta = ()=>{
            while(n !== null){
                if (isVisible(n, snapshot) || prevSnapshot !== undefined && isVisible(n, prevSnapshot)) switch(n.content.constructor){
                    case ContentString:
                        {
                            const cur = currentAttributes.get('ychange');
                            if (snapshot !== undefined && !isVisible(n, snapshot)) {
                                if (cur === undefined || cur.user !== n.id.client || cur.type !== 'removed') {
                                    packStr();
                                    currentAttributes.set('ychange', computeYChange ? computeYChange('removed', n.id) : {
                                        type: 'removed'
                                    });
                                }
                            } else if (prevSnapshot !== undefined && !isVisible(n, prevSnapshot)) {
                                if (cur === undefined || cur.user !== n.id.client || cur.type !== 'added') {
                                    packStr();
                                    currentAttributes.set('ychange', computeYChange ? computeYChange('added', n.id) : {
                                        type: 'added'
                                    });
                                }
                            } else if (cur !== undefined) {
                                packStr();
                                currentAttributes.delete('ychange');
                            }
                            str += /** @type {ContentString} */ n.content.str;
                            break;
                        }
                    case ContentType:
                    case ContentEmbed:
                        {
                            packStr();
                            /**
               * @type {Object<string,any>}
               */ const op = {
                                insert: n.content.getContent()[0]
                            };
                            if (currentAttributes.size > 0) {
                                const attrs = /** @type {Object<string,any>} */ {};
                                op.attributes = attrs;
                                currentAttributes.forEach((value, key)=>{
                                    attrs[key] = value;
                                });
                            }
                            ops.push(op);
                            break;
                        }
                    case ContentFormat:
                        if (isVisible(n, snapshot)) {
                            packStr();
                            updateCurrentAttributes(currentAttributes, /** @type {ContentFormat} */ n.content);
                        }
                        break;
                }
                n = n.right;
            }
            packStr();
        };
        if (snapshot || prevSnapshot) // snapshots are merged again after the transaction, so we need to keep the
        // transaction alive until we are done
        transact(doc, (transaction)=>{
            if (snapshot) splitSnapshotAffectedStructs(transaction, snapshot);
            if (prevSnapshot) splitSnapshotAffectedStructs(transaction, prevSnapshot);
            computeDelta();
        }, 'cleanup');
        else computeDelta();
        return ops;
    }
    /**
   * Insert text at a given index.
   *
   * @param {number} index The index at which to start inserting.
   * @param {String} text The text to insert at the specified position.
   * @param {TextAttributes} [attributes] Optionally define some formatting
   *                                    information to apply on the inserted
   *                                    Text.
   * @public
   */ insert(index, text, attributes) {
        if (text.length <= 0) return;
        const y = this.doc;
        if (y !== null) transact(y, (transaction)=>{
            const pos = findPosition(transaction, this, index, !attributes);
            if (!attributes) {
                attributes = {};
                // @ts-ignore
                pos.currentAttributes.forEach((v, k)=>{
                    attributes[k] = v;
                });
            }
            insertText(transaction, this, pos, text, attributes);
        });
        else /** @type {Array<function>} */ this._pending.push(()=>this.insert(index, text, attributes));
    }
    /**
   * Inserts an embed at a index.
   *
   * @param {number} index The index to insert the embed at.
   * @param {Object | AbstractType<any>} embed The Object that represents the embed.
   * @param {TextAttributes} [attributes] Attribute information to apply on the
   *                                    embed
   *
   * @public
   */ insertEmbed(index, embed, attributes) {
        const y = this.doc;
        if (y !== null) transact(y, (transaction)=>{
            const pos = findPosition(transaction, this, index, !attributes);
            insertText(transaction, this, pos, embed, attributes || {});
        });
        else /** @type {Array<function>} */ this._pending.push(()=>this.insertEmbed(index, embed, attributes || {}));
    }
    /**
   * Deletes text starting from an index.
   *
   * @param {number} index Index at which to start deleting.
   * @param {number} length The number of characters to remove. Defaults to 1.
   *
   * @public
   */ delete(index, length) {
        if (length === 0) return;
        const y = this.doc;
        if (y !== null) transact(y, (transaction)=>{
            deleteText(transaction, findPosition(transaction, this, index, true), length);
        });
        else /** @type {Array<function>} */ this._pending.push(()=>this.delete(index, length));
    }
    /**
   * Assigns properties to a range of text.
   *
   * @param {number} index The position where to start formatting.
   * @param {number} length The amount of characters to assign properties to.
   * @param {TextAttributes} attributes Attribute information to apply on the
   *                                    text.
   *
   * @public
   */ format(index, length, attributes) {
        if (length === 0) return;
        const y = this.doc;
        if (y !== null) transact(y, (transaction)=>{
            const pos = findPosition(transaction, this, index, false);
            if (pos.right === null) return;
            formatText(transaction, this, pos, length, attributes);
        });
        else /** @type {Array<function>} */ this._pending.push(()=>this.format(index, length, attributes));
    }
    /**
   * Removes an attribute.
   *
   * @note Xml-Text nodes don't have attributes. You can use this feature to assign properties to complete text-blocks.
   *
   * @param {String} attributeName The attribute name that is to be removed.
   *
   * @public
   */ removeAttribute(attributeName) {
        if (this.doc !== null) transact(this.doc, (transaction)=>{
            typeMapDelete(transaction, this, attributeName);
        });
        else /** @type {Array<function>} */ this._pending.push(()=>this.removeAttribute(attributeName));
    }
    /**
   * Sets or updates an attribute.
   *
   * @note Xml-Text nodes don't have attributes. You can use this feature to assign properties to complete text-blocks.
   *
   * @param {String} attributeName The attribute name that is to be set.
   * @param {any} attributeValue The attribute value that is to be set.
   *
   * @public
   */ setAttribute(attributeName, attributeValue) {
        if (this.doc !== null) transact(this.doc, (transaction)=>{
            typeMapSet(transaction, this, attributeName, attributeValue);
        });
        else /** @type {Array<function>} */ this._pending.push(()=>this.setAttribute(attributeName, attributeValue));
    }
    /**
   * Returns an attribute value that belongs to the attribute name.
   *
   * @note Xml-Text nodes don't have attributes. You can use this feature to assign properties to complete text-blocks.
   *
   * @param {String} attributeName The attribute name that identifies the
   *                               queried value.
   * @return {any} The queried attribute value.
   *
   * @public
   */ getAttribute(attributeName) {
        return /** @type {any} */ typeMapGet(this, attributeName);
    }
    /**
   * Returns all attribute name/value pairs in a JSON Object.
   *
   * @note Xml-Text nodes don't have attributes. You can use this feature to assign properties to complete text-blocks.
   *
   * @return {Object<string, any>} A JSON Object that describes the attributes.
   *
   * @public
   */ getAttributes() {
        return typeMapGetAll(this);
    }
    /**
   * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder
   */ _write(encoder) {
        encoder.writeTypeRef(YTextRefID);
    }
}
/**
 * @param {UpdateDecoderV1 | UpdateDecoderV2} _decoder
 * @return {YText}
 *
 * @private
 * @function
 */ const readYText = (_decoder)=>new YText();
/**
 * @module YXml
 */ /**
 * Define the elements to which a set of CSS queries apply.
 * {@link https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors|CSS_Selectors}
 *
 * @example
 *   query = '.classSelector'
 *   query = 'nodeSelector'
 *   query = '#idSelector'
 *
 * @typedef {string} CSS_Selector
 */ /**
 * Dom filter function.
 *
 * @callback domFilter
 * @param {string} nodeName The nodeName of the element
 * @param {Map} attributes The map of attributes.
 * @return {boolean} Whether to include the Dom node in the YXmlElement.
 */ /**
 * Represents a subset of the nodes of a YXmlElement / YXmlFragment and a
 * position within them.
 *
 * Can be created with {@link YXmlFragment#createTreeWalker}
 *
 * @public
 * @implements {Iterable<YXmlElement|YXmlText|YXmlElement|YXmlHook>}
 */ class YXmlTreeWalker {
    /**
   * @param {YXmlFragment | YXmlElement} root
   * @param {function(AbstractType<any>):boolean} [f]
   */ constructor(root, f = ()=>true){
        this._filter = f;
        this._root = root;
        /**
     * @type {Item}
     */ this._currentNode = /** @type {Item} */ root._start;
        this._firstCall = true;
        root.doc ?? warnPrematureAccess();
    }
    [Symbol.iterator]() {
        return this;
    }
    /**
   * Get the next node.
   *
   * @return {IteratorResult<YXmlElement|YXmlText|YXmlHook>} The next node.
   *
   * @public
   */ next() {
        /**
     * @type {Item|null}
     */ let n = this._currentNode;
        let type = n && n.content && /** @type {any} */ n.content.type;
        if (n !== null && (!this._firstCall || n.deleted || !this._filter(type))) do {
            type = /** @type {any} */ n.content.type;
            if (!n.deleted && (type.constructor === YXmlElement || type.constructor === YXmlFragment) && type._start !== null) // walk down in the tree
            n = type._start;
            else // walk right or up in the tree
            while(n !== null){
                /**
             * @type {Item | null}
             */ const nxt = n.next;
                if (nxt !== null) {
                    n = nxt;
                    break;
                } else if (n.parent === this._root) n = null;
                else n = /** @type {AbstractType<any>} */ n.parent._item;
            }
        }while (n !== null && (n.deleted || !this._filter(/** @type {ContentType} */ n.content.type)));
        this._firstCall = false;
        if (n === null) // @ts-ignore
        return {
            value: undefined,
            done: true
        };
        this._currentNode = n;
        return {
            value: /** @type {any} */ n.content.type,
            done: false
        };
    }
}
/**
 * Represents a list of {@link YXmlElement}.and {@link YXmlText} types.
 * A YxmlFragment is similar to a {@link YXmlElement}, but it does not have a
 * nodeName and it does not have attributes. Though it can be bound to a DOM
 * element - in this case the attributes and the nodeName are not shared.
 *
 * @public
 * @extends AbstractType<YXmlEvent>
 */ class YXmlFragment extends AbstractType {
    constructor(){
        super();
        /**
     * @type {Array<any>|null}
     */ this._prelimContent = [];
    }
    /**
   * @type {YXmlElement|YXmlText|null}
   */ get firstChild() {
        const first = this._first;
        return first ? first.content.getContent()[0] : null;
    }
    /**
   * Integrate this type into the Yjs instance.
   *
   * * Save this struct in the os
   * * This type is sent to other client
   * * Observer functions are fired
   *
   * @param {Doc} y The Yjs instance
   * @param {Item} item
   */ _integrate(y, item) {
        super._integrate(y, item);
        this.insert(0, /** @type {Array<any>} */ this._prelimContent);
        this._prelimContent = null;
    }
    _copy() {
        return new YXmlFragment();
    }
    /**
   * Makes a copy of this data type that can be included somewhere else.
   *
   * Note that the content is only readable _after_ it has been included somewhere in the Ydoc.
   *
   * @return {YXmlFragment}
   */ clone() {
        const el = new YXmlFragment();
        // @ts-ignore
        el.insert(0, this.toArray().map((item)=>item instanceof AbstractType ? item.clone() : item));
        return el;
    }
    get length() {
        this.doc ?? warnPrematureAccess();
        return this._prelimContent === null ? this._length : this._prelimContent.length;
    }
    /**
   * Create a subtree of childNodes.
   *
   * @example
   * const walker = elem.createTreeWalker(dom => dom.nodeName === 'div')
   * for (let node in walker) {
   *   // `node` is a div node
   *   nop(node)
   * }
   *
   * @param {function(AbstractType<any>):boolean} filter Function that is called on each child element and
   *                          returns a Boolean indicating whether the child
   *                          is to be included in the subtree.
   * @return {YXmlTreeWalker} A subtree and a position within it.
   *
   * @public
   */ createTreeWalker(filter) {
        return new YXmlTreeWalker(this, filter);
    }
    /**
   * Returns the first YXmlElement that matches the query.
   * Similar to DOM's {@link querySelector}.
   *
   * Query support:
   *   - tagname
   * TODO:
   *   - id
   *   - attribute
   *
   * @param {CSS_Selector} query The query on the children.
   * @return {YXmlElement|YXmlText|YXmlHook|null} The first element that matches the query or null.
   *
   * @public
   */ querySelector(query) {
        query = query.toUpperCase();
        // @ts-ignore
        const iterator = new YXmlTreeWalker(this, (element)=>element.nodeName && element.nodeName.toUpperCase() === query);
        const next = iterator.next();
        if (next.done) return null;
        else return next.value;
    }
    /**
   * Returns all YXmlElements that match the query.
   * Similar to Dom's {@link querySelectorAll}.
   *
   * @todo Does not yet support all queries. Currently only query by tagName.
   *
   * @param {CSS_Selector} query The query on the children
   * @return {Array<YXmlElement|YXmlText|YXmlHook|null>} The elements that match this query.
   *
   * @public
   */ querySelectorAll(query) {
        query = query.toUpperCase();
        // @ts-ignore
        return _array.from(new YXmlTreeWalker(this, (element)=>element.nodeName && element.nodeName.toUpperCase() === query));
    }
    /**
   * Creates YXmlEvent and calls observers.
   *
   * @param {Transaction} transaction
   * @param {Set<null|string>} parentSubs Keys changed on this type. `null` if list was modified.
   */ _callObserver(transaction, parentSubs) {
        callTypeObservers(this, transaction, new YXmlEvent(this, parentSubs, transaction));
    }
    /**
   * Get the string representation of all the children of this YXmlFragment.
   *
   * @return {string} The string representation of all children.
   */ toString() {
        return typeListMap(this, (xml)=>xml.toString()).join('');
    }
    /**
   * @return {string}
   */ toJSON() {
        return this.toString();
    }
    /**
   * Creates a Dom Element that mirrors this YXmlElement.
   *
   * @param {Document} [_document=document] The document object (you must define
   *                                        this when calling this method in
   *                                        nodejs)
   * @param {Object<string, any>} [hooks={}] Optional property to customize how hooks
   *                                             are presented in the DOM
   * @param {any} [binding] You should not set this property. This is
   *                               used if DomBinding wants to create a
   *                               association to the created DOM type.
   * @return {Node} The {@link https://developer.mozilla.org/en-US/docs/Web/API/Element|Dom Element}
   *
   * @public
   */ toDOM(_document = document, hooks = {}, binding) {
        const fragment = _document.createDocumentFragment();
        if (binding !== undefined) binding._createAssociation(fragment, this);
        typeListForEach(this, (xmlType)=>{
            fragment.insertBefore(xmlType.toDOM(_document, hooks, binding), null);
        });
        return fragment;
    }
    /**
   * Inserts new content at an index.
   *
   * @example
   *  // Insert character 'a' at position 0
   *  xml.insert(0, [new Y.XmlText('text')])
   *
   * @param {number} index The index to insert content at
   * @param {Array<YXmlElement|YXmlText>} content The array of content
   */ insert(index, content) {
        if (this.doc !== null) transact(this.doc, (transaction)=>{
            typeListInsertGenerics(transaction, this, index, content);
        });
        else // @ts-ignore _prelimContent is defined because this is not yet integrated
        this._prelimContent.splice(index, 0, ...content);
    }
    /**
   * Inserts new content at an index.
   *
   * @example
   *  // Insert character 'a' at position 0
   *  xml.insert(0, [new Y.XmlText('text')])
   *
   * @param {null|Item|YXmlElement|YXmlText} ref The index to insert content at
   * @param {Array<YXmlElement|YXmlText>} content The array of content
   */ insertAfter(ref, content) {
        if (this.doc !== null) transact(this.doc, (transaction)=>{
            const refItem = ref && ref instanceof AbstractType ? ref._item : ref;
            typeListInsertGenericsAfter(transaction, this, refItem, content);
        });
        else {
            const pc = /** @type {Array<any>} */ this._prelimContent;
            const index = ref === null ? 0 : pc.findIndex((el)=>el === ref) + 1;
            if (index === 0 && ref !== null) throw _error.create('Reference item not found');
            pc.splice(index, 0, ...content);
        }
    }
    /**
   * Deletes elements starting from an index.
   *
   * @param {number} index Index at which to start deleting elements
   * @param {number} [length=1] The number of elements to remove. Defaults to 1.
   */ delete(index, length = 1) {
        if (this.doc !== null) transact(this.doc, (transaction)=>{
            typeListDelete(transaction, this, index, length);
        });
        else // @ts-ignore _prelimContent is defined because this is not yet integrated
        this._prelimContent.splice(index, length);
    }
    /**
   * Transforms this YArray to a JavaScript Array.
   *
   * @return {Array<YXmlElement|YXmlText|YXmlHook>}
   */ toArray() {
        return typeListToArray(this);
    }
    /**
   * Appends content to this YArray.
   *
   * @param {Array<YXmlElement|YXmlText>} content Array of content to append.
   */ push(content) {
        this.insert(this.length, content);
    }
    /**
   * Prepends content to this YArray.
   *
   * @param {Array<YXmlElement|YXmlText>} content Array of content to prepend.
   */ unshift(content) {
        this.insert(0, content);
    }
    /**
   * Returns the i-th element from a YArray.
   *
   * @param {number} index The index of the element to return from the YArray
   * @return {YXmlElement|YXmlText}
   */ get(index) {
        return typeListGet(this, index);
    }
    /**
   * Returns a portion of this YXmlFragment into a JavaScript Array selected
   * from start to end (end not included).
   *
   * @param {number} [start]
   * @param {number} [end]
   * @return {Array<YXmlElement|YXmlText>}
   */ slice(start = 0, end = this.length) {
        return typeListSlice(this, start, end);
    }
    /**
   * Executes a provided function on once on every child element.
   *
   * @param {function(YXmlElement|YXmlText,number, typeof self):void} f A function to execute on every element of this YArray.
   */ forEach(f) {
        typeListForEach(this, f);
    }
    /**
   * Transform the properties of this type to binary and write it to an
   * BinaryEncoder.
   *
   * This is called when this Item is sent to a remote peer.
   *
   * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder The encoder to write data to.
   */ _write(encoder) {
        encoder.writeTypeRef(YXmlFragmentRefID);
    }
}
/**
 * @param {UpdateDecoderV1 | UpdateDecoderV2} _decoder
 * @return {YXmlFragment}
 *
 * @private
 * @function
 */ const readYXmlFragment = (_decoder)=>new YXmlFragment();
/**
 * @typedef {Object|number|null|Array<any>|string|Uint8Array|AbstractType<any>} ValueTypes
 */ /**
 * An YXmlElement imitates the behavior of a
 * https://developer.mozilla.org/en-US/docs/Web/API/Element|Dom Element
 *
 * * An YXmlElement has attributes (key value pairs)
 * * An YXmlElement has childElements that must inherit from YXmlElement
 *
 * @template {{ [key: string]: ValueTypes }} [KV={ [key: string]: string }]
 */ class YXmlElement extends YXmlFragment {
    constructor(nodeName = 'UNDEFINED'){
        super();
        this.nodeName = nodeName;
        /**
     * @type {Map<string, any>|null}
     */ this._prelimAttrs = new Map();
    }
    /**
   * @type {YXmlElement|YXmlText|null}
   */ get nextSibling() {
        const n = this._item ? this._item.next : null;
        return n ? /** @type {YXmlElement|YXmlText} */ /** @type {ContentType} */ n.content.type : null;
    }
    /**
   * @type {YXmlElement|YXmlText|null}
   */ get prevSibling() {
        const n = this._item ? this._item.prev : null;
        return n ? /** @type {YXmlElement|YXmlText} */ /** @type {ContentType} */ n.content.type : null;
    }
    /**
   * Integrate this type into the Yjs instance.
   *
   * * Save this struct in the os
   * * This type is sent to other client
   * * Observer functions are fired
   *
   * @param {Doc} y The Yjs instance
   * @param {Item} item
   */ _integrate(y, item) {
        super._integrate(y, item);
        /** @type {Map<string, any>} */ this._prelimAttrs.forEach((value, key)=>{
            this.setAttribute(key, value);
        });
        this._prelimAttrs = null;
    }
    /**
   * Creates an Item with the same effect as this Item (without position effect)
   *
   * @return {YXmlElement}
   */ _copy() {
        return new YXmlElement(this.nodeName);
    }
    /**
   * Makes a copy of this data type that can be included somewhere else.
   *
   * Note that the content is only readable _after_ it has been included somewhere in the Ydoc.
   *
   * @return {YXmlElement<KV>}
   */ clone() {
        /**
     * @type {YXmlElement<KV>}
     */ const el = new YXmlElement(this.nodeName);
        const attrs = this.getAttributes();
        _object.forEach(attrs, (value, key)=>{
            if (typeof value === 'string') el.setAttribute(key, value);
        });
        // @ts-ignore
        el.insert(0, this.toArray().map((item)=>item instanceof AbstractType ? item.clone() : item));
        return el;
    }
    /**
   * Returns the XML serialization of this YXmlElement.
   * The attributes are ordered by attribute-name, so you can easily use this
   * method to compare YXmlElements
   *
   * @return {string} The string representation of this type.
   *
   * @public
   */ toString() {
        const attrs = this.getAttributes();
        const stringBuilder = [];
        const keys = [];
        for(const key in attrs)keys.push(key);
        keys.sort();
        const keysLen = keys.length;
        for(let i = 0; i < keysLen; i++){
            const key = keys[i];
            stringBuilder.push(key + '="' + attrs[key] + '"');
        }
        const nodeName = this.nodeName.toLocaleLowerCase();
        const attrsString = stringBuilder.length > 0 ? ' ' + stringBuilder.join(' ') : '';
        return `<${nodeName}${attrsString}>${super.toString()}</${nodeName}>`;
    }
    /**
   * Removes an attribute from this YXmlElement.
   *
   * @param {string} attributeName The attribute name that is to be removed.
   *
   * @public
   */ removeAttribute(attributeName) {
        if (this.doc !== null) transact(this.doc, (transaction)=>{
            typeMapDelete(transaction, this, attributeName);
        });
        else /** @type {Map<string,any>} */ this._prelimAttrs.delete(attributeName);
    }
    /**
   * Sets or updates an attribute.
   *
   * @template {keyof KV & string} KEY
   *
   * @param {KEY} attributeName The attribute name that is to be set.
   * @param {KV[KEY]} attributeValue The attribute value that is to be set.
   *
   * @public
   */ setAttribute(attributeName, attributeValue) {
        if (this.doc !== null) transact(this.doc, (transaction)=>{
            typeMapSet(transaction, this, attributeName, attributeValue);
        });
        else /** @type {Map<string, any>} */ this._prelimAttrs.set(attributeName, attributeValue);
    }
    /**
   * Returns an attribute value that belongs to the attribute name.
   *
   * @template {keyof KV & string} KEY
   *
   * @param {KEY} attributeName The attribute name that identifies the
   *                               queried value.
   * @return {KV[KEY]|undefined} The queried attribute value.
   *
   * @public
   */ getAttribute(attributeName) {
        return /** @type {any} */ typeMapGet(this, attributeName);
    }
    /**
   * Returns whether an attribute exists
   *
   * @param {string} attributeName The attribute name to check for existence.
   * @return {boolean} whether the attribute exists.
   *
   * @public
   */ hasAttribute(attributeName) {
        return /** @type {any} */ typeMapHas(this, attributeName);
    }
    /**
   * Returns all attribute name/value pairs in a JSON Object.
   *
   * @param {Snapshot} [snapshot]
   * @return {{ [Key in Extract<keyof KV,string>]?: KV[Key]}} A JSON Object that describes the attributes.
   *
   * @public
   */ getAttributes(snapshot) {
        return /** @type {any} */ snapshot ? typeMapGetAllSnapshot(this, snapshot) : typeMapGetAll(this);
    }
    /**
   * Creates a Dom Element that mirrors this YXmlElement.
   *
   * @param {Document} [_document=document] The document object (you must define
   *                                        this when calling this method in
   *                                        nodejs)
   * @param {Object<string, any>} [hooks={}] Optional property to customize how hooks
   *                                             are presented in the DOM
   * @param {any} [binding] You should not set this property. This is
   *                               used if DomBinding wants to create a
   *                               association to the created DOM type.
   * @return {Node} The {@link https://developer.mozilla.org/en-US/docs/Web/API/Element|Dom Element}
   *
   * @public
   */ toDOM(_document = document, hooks = {}, binding) {
        const dom = _document.createElement(this.nodeName);
        const attrs = this.getAttributes();
        for(const key in attrs){
            const value = attrs[key];
            if (typeof value === 'string') dom.setAttribute(key, value);
        }
        typeListForEach(this, (yxml)=>{
            dom.appendChild(yxml.toDOM(_document, hooks, binding));
        });
        if (binding !== undefined) binding._createAssociation(dom, this);
        return dom;
    }
    /**
   * Transform the properties of this type to binary and write it to an
   * BinaryEncoder.
   *
   * This is called when this Item is sent to a remote peer.
   *
   * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder The encoder to write data to.
   */ _write(encoder) {
        encoder.writeTypeRef(YXmlElementRefID);
        encoder.writeKey(this.nodeName);
    }
}
/**
 * @param {UpdateDecoderV1 | UpdateDecoderV2} decoder
 * @return {YXmlElement}
 *
 * @function
 */ const readYXmlElement = (decoder)=>new YXmlElement(decoder.readKey());
/**
 * @extends YEvent<YXmlElement|YXmlText|YXmlFragment>
 * An Event that describes changes on a YXml Element or Yxml Fragment
 */ class YXmlEvent extends YEvent {
    /**
   * @param {YXmlElement|YXmlText|YXmlFragment} target The target on which the event is created.
   * @param {Set<string|null>} subs The set of changed attributes. `null` is included if the
   *                   child list changed.
   * @param {Transaction} transaction The transaction instance with which the
   *                                  change was created.
   */ constructor(target, subs, transaction){
        super(target, transaction);
        /**
     * Whether the children changed.
     * @type {Boolean}
     * @private
     */ this.childListChanged = false;
        /**
     * Set of all changed attributes.
     * @type {Set<string>}
     */ this.attributesChanged = new Set();
        subs.forEach((sub)=>{
            if (sub === null) this.childListChanged = true;
            else this.attributesChanged.add(sub);
        });
    }
}
/**
 * You can manage binding to a custom type with YXmlHook.
 *
 * @extends {YMap<any>}
 */ class YXmlHook extends YMap {
    /**
   * @param {string} hookName nodeName of the Dom Node.
   */ constructor(hookName){
        super();
        /**
     * @type {string}
     */ this.hookName = hookName;
    }
    /**
   * Creates an Item with the same effect as this Item (without position effect)
   */ _copy() {
        return new YXmlHook(this.hookName);
    }
    /**
   * Makes a copy of this data type that can be included somewhere else.
   *
   * Note that the content is only readable _after_ it has been included somewhere in the Ydoc.
   *
   * @return {YXmlHook}
   */ clone() {
        const el = new YXmlHook(this.hookName);
        this.forEach((value, key)=>{
            el.set(key, value);
        });
        return el;
    }
    /**
   * Creates a Dom Element that mirrors this YXmlElement.
   *
   * @param {Document} [_document=document] The document object (you must define
   *                                        this when calling this method in
   *                                        nodejs)
   * @param {Object.<string, any>} [hooks] Optional property to customize how hooks
   *                                             are presented in the DOM
   * @param {any} [binding] You should not set this property. This is
   *                               used if DomBinding wants to create a
   *                               association to the created DOM type
   * @return {Element} The {@link https://developer.mozilla.org/en-US/docs/Web/API/Element|Dom Element}
   *
   * @public
   */ toDOM(_document = document, hooks = {}, binding) {
        const hook = hooks[this.hookName];
        let dom;
        if (hook !== undefined) dom = hook.createDom(this);
        else dom = document.createElement(this.hookName);
        dom.setAttribute('data-yjs-hook', this.hookName);
        if (binding !== undefined) binding._createAssociation(dom, this);
        return dom;
    }
    /**
   * Transform the properties of this type to binary and write it to an
   * BinaryEncoder.
   *
   * This is called when this Item is sent to a remote peer.
   *
   * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder The encoder to write data to.
   */ _write(encoder) {
        encoder.writeTypeRef(YXmlHookRefID);
        encoder.writeKey(this.hookName);
    }
}
/**
 * @param {UpdateDecoderV1 | UpdateDecoderV2} decoder
 * @return {YXmlHook}
 *
 * @private
 * @function
 */ const readYXmlHook = (decoder)=>new YXmlHook(decoder.readKey());
/**
 * Represents text in a Dom Element. In the future this type will also handle
 * simple formatting information like bold and italic.
 */ class YXmlText extends YText {
    /**
   * @type {YXmlElement|YXmlText|null}
   */ get nextSibling() {
        const n = this._item ? this._item.next : null;
        return n ? /** @type {YXmlElement|YXmlText} */ /** @type {ContentType} */ n.content.type : null;
    }
    /**
   * @type {YXmlElement|YXmlText|null}
   */ get prevSibling() {
        const n = this._item ? this._item.prev : null;
        return n ? /** @type {YXmlElement|YXmlText} */ /** @type {ContentType} */ n.content.type : null;
    }
    _copy() {
        return new YXmlText();
    }
    /**
   * Makes a copy of this data type that can be included somewhere else.
   *
   * Note that the content is only readable _after_ it has been included somewhere in the Ydoc.
   *
   * @return {YXmlText}
   */ clone() {
        const text = new YXmlText();
        text.applyDelta(this.toDelta());
        return text;
    }
    /**
   * Creates a Dom Element that mirrors this YXmlText.
   *
   * @param {Document} [_document=document] The document object (you must define
   *                                        this when calling this method in
   *                                        nodejs)
   * @param {Object<string, any>} [hooks] Optional property to customize how hooks
   *                                             are presented in the DOM
   * @param {any} [binding] You should not set this property. This is
   *                               used if DomBinding wants to create a
   *                               association to the created DOM type.
   * @return {Text} The {@link https://developer.mozilla.org/en-US/docs/Web/API/Element|Dom Element}
   *
   * @public
   */ toDOM(_document = document, hooks, binding) {
        const dom = _document.createTextNode(this.toString());
        if (binding !== undefined) binding._createAssociation(dom, this);
        return dom;
    }
    toString() {
        // @ts-ignore
        return this.toDelta().map((delta)=>{
            const nestedNodes = [];
            for(const nodeName in delta.attributes){
                const attrs = [];
                for(const key in delta.attributes[nodeName])attrs.push({
                    key,
                    value: delta.attributes[nodeName][key]
                });
                // sort attributes to get a unique order
                attrs.sort((a, b)=>a.key < b.key ? -1 : 1);
                nestedNodes.push({
                    nodeName,
                    attrs
                });
            }
            // sort node order to get a unique order
            nestedNodes.sort((a, b)=>a.nodeName < b.nodeName ? -1 : 1);
            // now convert to dom string
            let str = '';
            for(let i = 0; i < nestedNodes.length; i++){
                const node = nestedNodes[i];
                str += `<${node.nodeName}`;
                for(let j = 0; j < node.attrs.length; j++){
                    const attr = node.attrs[j];
                    str += ` ${attr.key}="${attr.value}"`;
                }
                str += '>';
            }
            str += delta.insert;
            for(let i = nestedNodes.length - 1; i >= 0; i--)str += `</${nestedNodes[i].nodeName}>`;
            return str;
        }).join('');
    }
    /**
   * @return {string}
   */ toJSON() {
        return this.toString();
    }
    /**
   * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder
   */ _write(encoder) {
        encoder.writeTypeRef(YXmlTextRefID);
    }
}
/**
 * @param {UpdateDecoderV1 | UpdateDecoderV2} decoder
 * @return {YXmlText}
 *
 * @private
 * @function
 */ const readYXmlText = (decoder)=>new YXmlText();
class AbstractStruct {
    /**
   * @param {ID} id
   * @param {number} length
   */ constructor(id, length){
        this.id = id;
        this.length = length;
    }
    /**
   * @type {boolean}
   */ get deleted() {
        throw _error.methodUnimplemented();
    }
    /**
   * Merge this struct with the item to the right.
   * This method is already assuming that `this.id.clock + this.length === this.id.clock`.
   * Also this method does *not* remove right from StructStore!
   * @param {AbstractStruct} right
   * @return {boolean} whether this merged with right
   */ mergeWith(right) {
        return false;
    }
    /**
   * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder The encoder to write data to.
   * @param {number} offset
   * @param {number} encodingRef
   */ write(encoder, offset, encodingRef) {
        throw _error.methodUnimplemented();
    }
    /**
   * @param {Transaction} transaction
   * @param {number} offset
   */ integrate(transaction, offset) {
        throw _error.methodUnimplemented();
    }
}
const structGCRefNumber = 0;
/**
 * @private
 */ class GC extends AbstractStruct {
    get deleted() {
        return true;
    }
    delete() {}
    /**
   * @param {GC} right
   * @return {boolean}
   */ mergeWith(right) {
        if (this.constructor !== right.constructor) return false;
        this.length += right.length;
        return true;
    }
    /**
   * @param {Transaction} transaction
   * @param {number} offset
   */ integrate(transaction, offset) {
        if (offset > 0) {
            this.id.clock += offset;
            this.length -= offset;
        }
        addStruct(transaction.doc.store, this);
    }
    /**
   * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder
   * @param {number} offset
   */ write(encoder, offset) {
        encoder.writeInfo(structGCRefNumber);
        encoder.writeLen(this.length - offset);
    }
    /**
   * @param {Transaction} transaction
   * @param {StructStore} store
   * @return {null | number}
   */ getMissing(transaction, store) {
        return null;
    }
}
class ContentBinary {
    /**
   * @param {Uint8Array} content
   */ constructor(content){
        this.content = content;
    }
    /**
   * @return {number}
   */ getLength() {
        return 1;
    }
    /**
   * @return {Array<any>}
   */ getContent() {
        return [
            this.content
        ];
    }
    /**
   * @return {boolean}
   */ isCountable() {
        return true;
    }
    /**
   * @return {ContentBinary}
   */ copy() {
        return new ContentBinary(this.content);
    }
    /**
   * @param {number} offset
   * @return {ContentBinary}
   */ splice(offset) {
        throw _error.methodUnimplemented();
    }
    /**
   * @param {ContentBinary} right
   * @return {boolean}
   */ mergeWith(right) {
        return false;
    }
    /**
   * @param {Transaction} transaction
   * @param {Item} item
   */ integrate(transaction, item) {}
    /**
   * @param {Transaction} transaction
   */ delete(transaction) {}
    /**
   * @param {StructStore} store
   */ gc(store) {}
    /**
   * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder
   * @param {number} offset
   */ write(encoder, offset) {
        encoder.writeBuf(this.content);
    }
    /**
   * @return {number}
   */ getRef() {
        return 3;
    }
}
/**
 * @param {UpdateDecoderV1 | UpdateDecoderV2 } decoder
 * @return {ContentBinary}
 */ const readContentBinary = (decoder)=>new ContentBinary(decoder.readBuf());
class ContentDeleted {
    /**
   * @param {number} len
   */ constructor(len){
        this.len = len;
    }
    /**
   * @return {number}
   */ getLength() {
        return this.len;
    }
    /**
   * @return {Array<any>}
   */ getContent() {
        return [];
    }
    /**
   * @return {boolean}
   */ isCountable() {
        return false;
    }
    /**
   * @return {ContentDeleted}
   */ copy() {
        return new ContentDeleted(this.len);
    }
    /**
   * @param {number} offset
   * @return {ContentDeleted}
   */ splice(offset) {
        const right = new ContentDeleted(this.len - offset);
        this.len = offset;
        return right;
    }
    /**
   * @param {ContentDeleted} right
   * @return {boolean}
   */ mergeWith(right) {
        this.len += right.len;
        return true;
    }
    /**
   * @param {Transaction} transaction
   * @param {Item} item
   */ integrate(transaction, item) {
        addToDeleteSet(transaction.deleteSet, item.id.client, item.id.clock, this.len);
        item.markDeleted();
    }
    /**
   * @param {Transaction} transaction
   */ delete(transaction) {}
    /**
   * @param {StructStore} store
   */ gc(store) {}
    /**
   * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder
   * @param {number} offset
   */ write(encoder, offset) {
        encoder.writeLen(this.len - offset);
    }
    /**
   * @return {number}
   */ getRef() {
        return 1;
    }
}
/**
 * @private
 *
 * @param {UpdateDecoderV1 | UpdateDecoderV2 } decoder
 * @return {ContentDeleted}
 */ const readContentDeleted = (decoder)=>new ContentDeleted(decoder.readLen());
/**
 * @param {string} guid
 * @param {Object<string, any>} opts
 */ const createDocFromOpts = (guid, opts)=>new Doc({
        guid,
        ...opts,
        shouldLoad: opts.shouldLoad || opts.autoLoad || false
    });
/**
 * @private
 */ class ContentDoc {
    /**
   * @param {Doc} doc
   */ constructor(doc){
        if (doc._item) console.error('This document was already integrated as a sub-document. You should create a second instance instead with the same guid.');
        /**
     * @type {Doc}
     */ this.doc = doc;
        /**
     * @type {any}
     */ const opts = {};
        this.opts = opts;
        if (!doc.gc) opts.gc = false;
        if (doc.autoLoad) opts.autoLoad = true;
        if (doc.meta !== null) opts.meta = doc.meta;
    }
    /**
   * @return {number}
   */ getLength() {
        return 1;
    }
    /**
   * @return {Array<any>}
   */ getContent() {
        return [
            this.doc
        ];
    }
    /**
   * @return {boolean}
   */ isCountable() {
        return true;
    }
    /**
   * @return {ContentDoc}
   */ copy() {
        return new ContentDoc(createDocFromOpts(this.doc.guid, this.opts));
    }
    /**
   * @param {number} offset
   * @return {ContentDoc}
   */ splice(offset) {
        throw _error.methodUnimplemented();
    }
    /**
   * @param {ContentDoc} right
   * @return {boolean}
   */ mergeWith(right) {
        return false;
    }
    /**
   * @param {Transaction} transaction
   * @param {Item} item
   */ integrate(transaction, item) {
        // this needs to be reflected in doc.destroy as well
        this.doc._item = item;
        transaction.subdocsAdded.add(this.doc);
        if (this.doc.shouldLoad) transaction.subdocsLoaded.add(this.doc);
    }
    /**
   * @param {Transaction} transaction
   */ delete(transaction) {
        if (transaction.subdocsAdded.has(this.doc)) transaction.subdocsAdded.delete(this.doc);
        else transaction.subdocsRemoved.add(this.doc);
    }
    /**
   * @param {StructStore} store
   */ gc(store) {}
    /**
   * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder
   * @param {number} offset
   */ write(encoder, offset) {
        encoder.writeString(this.doc.guid);
        encoder.writeAny(this.opts);
    }
    /**
   * @return {number}
   */ getRef() {
        return 9;
    }
}
/**
 * @private
 *
 * @param {UpdateDecoderV1 | UpdateDecoderV2} decoder
 * @return {ContentDoc}
 */ const readContentDoc = (decoder)=>new ContentDoc(createDocFromOpts(decoder.readString(), decoder.readAny()));
/**
 * @private
 */ class ContentEmbed {
    /**
   * @param {Object} embed
   */ constructor(embed){
        this.embed = embed;
    }
    /**
   * @return {number}
   */ getLength() {
        return 1;
    }
    /**
   * @return {Array<any>}
   */ getContent() {
        return [
            this.embed
        ];
    }
    /**
   * @return {boolean}
   */ isCountable() {
        return true;
    }
    /**
   * @return {ContentEmbed}
   */ copy() {
        return new ContentEmbed(this.embed);
    }
    /**
   * @param {number} offset
   * @return {ContentEmbed}
   */ splice(offset) {
        throw _error.methodUnimplemented();
    }
    /**
   * @param {ContentEmbed} right
   * @return {boolean}
   */ mergeWith(right) {
        return false;
    }
    /**
   * @param {Transaction} transaction
   * @param {Item} item
   */ integrate(transaction, item) {}
    /**
   * @param {Transaction} transaction
   */ delete(transaction) {}
    /**
   * @param {StructStore} store
   */ gc(store) {}
    /**
   * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder
   * @param {number} offset
   */ write(encoder, offset) {
        encoder.writeJSON(this.embed);
    }
    /**
   * @return {number}
   */ getRef() {
        return 5;
    }
}
/**
 * @private
 *
 * @param {UpdateDecoderV1 | UpdateDecoderV2} decoder
 * @return {ContentEmbed}
 */ const readContentEmbed = (decoder)=>new ContentEmbed(decoder.readJSON());
/**
 * @private
 */ class ContentFormat {
    /**
   * @param {string} key
   * @param {Object} value
   */ constructor(key, value){
        this.key = key;
        this.value = value;
    }
    /**
   * @return {number}
   */ getLength() {
        return 1;
    }
    /**
   * @return {Array<any>}
   */ getContent() {
        return [];
    }
    /**
   * @return {boolean}
   */ isCountable() {
        return false;
    }
    /**
   * @return {ContentFormat}
   */ copy() {
        return new ContentFormat(this.key, this.value);
    }
    /**
   * @param {number} _offset
   * @return {ContentFormat}
   */ splice(_offset) {
        throw _error.methodUnimplemented();
    }
    /**
   * @param {ContentFormat} _right
   * @return {boolean}
   */ mergeWith(_right) {
        return false;
    }
    /**
   * @param {Transaction} _transaction
   * @param {Item} item
   */ integrate(_transaction, item) {
        // @todo searchmarker are currently unsupported for rich text documents
        const p = /** @type {YText} */ item.parent;
        p._searchMarker = null;
        p._hasFormatting = true;
    }
    /**
   * @param {Transaction} transaction
   */ delete(transaction) {}
    /**
   * @param {StructStore} store
   */ gc(store) {}
    /**
   * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder
   * @param {number} offset
   */ write(encoder, offset) {
        encoder.writeKey(this.key);
        encoder.writeJSON(this.value);
    }
    /**
   * @return {number}
   */ getRef() {
        return 6;
    }
}
/**
 * @param {UpdateDecoderV1 | UpdateDecoderV2} decoder
 * @return {ContentFormat}
 */ const readContentFormat = (decoder)=>new ContentFormat(decoder.readKey(), decoder.readJSON());
/**
 * @private
 */ class ContentJSON {
    /**
   * @param {Array<any>} arr
   */ constructor(arr){
        /**
     * @type {Array<any>}
     */ this.arr = arr;
    }
    /**
   * @return {number}
   */ getLength() {
        return this.arr.length;
    }
    /**
   * @return {Array<any>}
   */ getContent() {
        return this.arr;
    }
    /**
   * @return {boolean}
   */ isCountable() {
        return true;
    }
    /**
   * @return {ContentJSON}
   */ copy() {
        return new ContentJSON(this.arr);
    }
    /**
   * @param {number} offset
   * @return {ContentJSON}
   */ splice(offset) {
        const right = new ContentJSON(this.arr.slice(offset));
        this.arr = this.arr.slice(0, offset);
        return right;
    }
    /**
   * @param {ContentJSON} right
   * @return {boolean}
   */ mergeWith(right) {
        this.arr = this.arr.concat(right.arr);
        return true;
    }
    /**
   * @param {Transaction} transaction
   * @param {Item} item
   */ integrate(transaction, item) {}
    /**
   * @param {Transaction} transaction
   */ delete(transaction) {}
    /**
   * @param {StructStore} store
   */ gc(store) {}
    /**
   * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder
   * @param {number} offset
   */ write(encoder, offset) {
        const len = this.arr.length;
        encoder.writeLen(len - offset);
        for(let i = offset; i < len; i++){
            const c = this.arr[i];
            encoder.writeString(c === undefined ? 'undefined' : JSON.stringify(c));
        }
    }
    /**
   * @return {number}
   */ getRef() {
        return 2;
    }
}
/**
 * @private
 *
 * @param {UpdateDecoderV1 | UpdateDecoderV2} decoder
 * @return {ContentJSON}
 */ const readContentJSON = (decoder)=>{
    const len = decoder.readLen();
    const cs = [];
    for(let i = 0; i < len; i++){
        const c = decoder.readString();
        if (c === 'undefined') cs.push(undefined);
        else cs.push(JSON.parse(c));
    }
    return new ContentJSON(cs);
};
const isDevMode = _environment.getVariable('node_env') === 'development';
class ContentAny {
    /**
   * @param {Array<any>} arr
   */ constructor(arr){
        /**
     * @type {Array<any>}
     */ this.arr = arr;
        isDevMode && _object.deepFreeze(arr);
    }
    /**
   * @return {number}
   */ getLength() {
        return this.arr.length;
    }
    /**
   * @return {Array<any>}
   */ getContent() {
        return this.arr;
    }
    /**
   * @return {boolean}
   */ isCountable() {
        return true;
    }
    /**
   * @return {ContentAny}
   */ copy() {
        return new ContentAny(this.arr);
    }
    /**
   * @param {number} offset
   * @return {ContentAny}
   */ splice(offset) {
        const right = new ContentAny(this.arr.slice(offset));
        this.arr = this.arr.slice(0, offset);
        return right;
    }
    /**
   * @param {ContentAny} right
   * @return {boolean}
   */ mergeWith(right) {
        this.arr = this.arr.concat(right.arr);
        return true;
    }
    /**
   * @param {Transaction} transaction
   * @param {Item} item
   */ integrate(transaction, item) {}
    /**
   * @param {Transaction} transaction
   */ delete(transaction) {}
    /**
   * @param {StructStore} store
   */ gc(store) {}
    /**
   * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder
   * @param {number} offset
   */ write(encoder, offset) {
        const len = this.arr.length;
        encoder.writeLen(len - offset);
        for(let i = offset; i < len; i++){
            const c = this.arr[i];
            encoder.writeAny(c);
        }
    }
    /**
   * @return {number}
   */ getRef() {
        return 8;
    }
}
/**
 * @param {UpdateDecoderV1 | UpdateDecoderV2} decoder
 * @return {ContentAny}
 */ const readContentAny = (decoder)=>{
    const len = decoder.readLen();
    const cs = [];
    for(let i = 0; i < len; i++)cs.push(decoder.readAny());
    return new ContentAny(cs);
};
/**
 * @private
 */ class ContentString {
    /**
   * @param {string} str
   */ constructor(str){
        /**
     * @type {string}
     */ this.str = str;
    }
    /**
   * @return {number}
   */ getLength() {
        return this.str.length;
    }
    /**
   * @return {Array<any>}
   */ getContent() {
        return this.str.split('');
    }
    /**
   * @return {boolean}
   */ isCountable() {
        return true;
    }
    /**
   * @return {ContentString}
   */ copy() {
        return new ContentString(this.str);
    }
    /**
   * @param {number} offset
   * @return {ContentString}
   */ splice(offset) {
        const right = new ContentString(this.str.slice(offset));
        this.str = this.str.slice(0, offset);
        // Prevent encoding invalid documents because of splitting of surrogate pairs: https://github.com/yjs/yjs/issues/248
        const firstCharCode = this.str.charCodeAt(offset - 1);
        if (firstCharCode >= 0xD800 && firstCharCode <= 0xDBFF) {
            // Last character of the left split is the start of a surrogate utf16/ucs2 pair.
            // We don't support splitting of surrogate pairs because this may lead to invalid documents.
            // Replace the invalid character with a unicode replacement character (� / U+FFFD)
            this.str = this.str.slice(0, offset - 1) + "\uFFFD";
            // replace right as well
            right.str = "\uFFFD" + right.str.slice(1);
        }
        return right;
    }
    /**
   * @param {ContentString} right
   * @return {boolean}
   */ mergeWith(right) {
        this.str += right.str;
        return true;
    }
    /**
   * @param {Transaction} transaction
   * @param {Item} item
   */ integrate(transaction, item) {}
    /**
   * @param {Transaction} transaction
   */ delete(transaction) {}
    /**
   * @param {StructStore} store
   */ gc(store) {}
    /**
   * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder
   * @param {number} offset
   */ write(encoder, offset) {
        encoder.writeString(offset === 0 ? this.str : this.str.slice(offset));
    }
    /**
   * @return {number}
   */ getRef() {
        return 4;
    }
}
/**
 * @private
 *
 * @param {UpdateDecoderV1 | UpdateDecoderV2} decoder
 * @return {ContentString}
 */ const readContentString = (decoder)=>new ContentString(decoder.readString());
/**
 * @type {Array<function(UpdateDecoderV1 | UpdateDecoderV2):AbstractType<any>>}
 * @private
 */ const typeRefs = [
    readYArray,
    readYMap,
    readYText,
    readYXmlElement,
    readYXmlFragment,
    readYXmlHook,
    readYXmlText
];
const YArrayRefID = 0;
const YMapRefID = 1;
const YTextRefID = 2;
const YXmlElementRefID = 3;
const YXmlFragmentRefID = 4;
const YXmlHookRefID = 5;
const YXmlTextRefID = 6;
/**
 * @private
 */ class ContentType {
    /**
   * @param {AbstractType<any>} type
   */ constructor(type){
        /**
     * @type {AbstractType<any>}
     */ this.type = type;
    }
    /**
   * @return {number}
   */ getLength() {
        return 1;
    }
    /**
   * @return {Array<any>}
   */ getContent() {
        return [
            this.type
        ];
    }
    /**
   * @return {boolean}
   */ isCountable() {
        return true;
    }
    /**
   * @return {ContentType}
   */ copy() {
        return new ContentType(this.type._copy());
    }
    /**
   * @param {number} offset
   * @return {ContentType}
   */ splice(offset) {
        throw _error.methodUnimplemented();
    }
    /**
   * @param {ContentType} right
   * @return {boolean}
   */ mergeWith(right) {
        return false;
    }
    /**
   * @param {Transaction} transaction
   * @param {Item} item
   */ integrate(transaction, item) {
        this.type._integrate(transaction.doc, item);
    }
    /**
   * @param {Transaction} transaction
   */ delete(transaction) {
        let item = this.type._start;
        while(item !== null){
            if (!item.deleted) item.delete(transaction);
            else if (item.id.clock < (transaction.beforeState.get(item.id.client) || 0)) // This will be gc'd later and we want to merge it if possible
            // We try to merge all deleted items after each transaction,
            // but we have no knowledge about that this needs to be merged
            // since it is not in transaction.ds. Hence we add it to transaction._mergeStructs
            transaction._mergeStructs.push(item);
            item = item.right;
        }
        this.type._map.forEach((item)=>{
            if (!item.deleted) item.delete(transaction);
            else if (item.id.clock < (transaction.beforeState.get(item.id.client) || 0)) // same as above
            transaction._mergeStructs.push(item);
        });
        transaction.changed.delete(this.type);
    }
    /**
   * @param {StructStore} store
   */ gc(store) {
        let item = this.type._start;
        while(item !== null){
            item.gc(store, true);
            item = item.right;
        }
        this.type._start = null;
        this.type._map.forEach(/** @param {Item | null} item */ (item)=>{
            while(item !== null){
                item.gc(store, true);
                item = item.left;
            }
        });
        this.type._map = new Map();
    }
    /**
   * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder
   * @param {number} offset
   */ write(encoder, offset) {
        this.type._write(encoder);
    }
    /**
   * @return {number}
   */ getRef() {
        return 7;
    }
}
/**
 * @private
 *
 * @param {UpdateDecoderV1 | UpdateDecoderV2} decoder
 * @return {ContentType}
 */ const readContentType = (decoder)=>new ContentType(typeRefs[decoder.readTypeRef()](decoder));
/**
 * @todo This should return several items
 *
 * @param {StructStore} store
 * @param {ID} id
 * @return {{item:Item, diff:number}}
 */ const followRedone = (store, id)=>{
    /**
   * @type {ID|null}
   */ let nextID = id;
    let diff = 0;
    let item;
    do {
        if (diff > 0) nextID = createID(nextID.client, nextID.clock + diff);
        item = getItem(store, nextID);
        diff = nextID.clock - item.id.clock;
        nextID = item.redone;
    }while (nextID !== null && item instanceof Item);
    return {
        item,
        diff
    };
};
/**
 * Make sure that neither item nor any of its parents is ever deleted.
 *
 * This property does not persist when storing it into a database or when
 * sending it to other peers
 *
 * @param {Item|null} item
 * @param {boolean} keep
 */ const keepItem = (item, keep)=>{
    while(item !== null && item.keep !== keep){
        item.keep = keep;
        item = /** @type {AbstractType<any>} */ item.parent._item;
    }
};
/**
 * Split leftItem into two items
 * @param {Transaction} transaction
 * @param {Item} leftItem
 * @param {number} diff
 * @return {Item}
 *
 * @function
 * @private
 */ const splitItem = (transaction, leftItem, diff)=>{
    // create rightItem
    const { client, clock } = leftItem.id;
    const rightItem = new Item(createID(client, clock + diff), leftItem, createID(client, clock + diff - 1), leftItem.right, leftItem.rightOrigin, leftItem.parent, leftItem.parentSub, leftItem.content.splice(diff));
    if (leftItem.deleted) rightItem.markDeleted();
    if (leftItem.keep) rightItem.keep = true;
    if (leftItem.redone !== null) rightItem.redone = createID(leftItem.redone.client, leftItem.redone.clock + diff);
    // update left (do not set leftItem.rightOrigin as it will lead to problems when syncing)
    leftItem.right = rightItem;
    // update right
    if (rightItem.right !== null) rightItem.right.left = rightItem;
    // right is more specific.
    transaction._mergeStructs.push(rightItem);
    // update parent._map
    if (rightItem.parentSub !== null && rightItem.right === null) /** @type {AbstractType<any>} */ rightItem.parent._map.set(rightItem.parentSub, rightItem);
    leftItem.length = diff;
    return rightItem;
};
/**
 * @param {Array<StackItem>} stack
 * @param {ID} id
 */ const isDeletedByUndoStack = (stack, id)=>_array.some(stack, /** @param {StackItem} s */ (s)=>isDeleted(s.deletions, id));
/**
 * Redoes the effect of this operation.
 *
 * @param {Transaction} transaction The Yjs instance.
 * @param {Item} item
 * @param {Set<Item>} redoitems
 * @param {DeleteSet} itemsToDelete
 * @param {boolean} ignoreRemoteMapChanges
 * @param {import('../utils/UndoManager.js').UndoManager} um
 *
 * @return {Item|null}
 *
 * @private
 */ const redoItem = (transaction, item, redoitems, itemsToDelete, ignoreRemoteMapChanges, um)=>{
    const doc = transaction.doc;
    const store = doc.store;
    const ownClientID = doc.clientID;
    const redone = item.redone;
    if (redone !== null) return getItemCleanStart(transaction, redone);
    let parentItem = /** @type {AbstractType<any>} */ item.parent._item;
    /**
   * @type {Item|null}
   */ let left = null;
    /**
   * @type {Item|null}
   */ let right;
    // make sure that parent is redone
    if (parentItem !== null && parentItem.deleted === true) {
        // try to undo parent if it will be undone anyway
        if (parentItem.redone === null && (!redoitems.has(parentItem) || redoItem(transaction, parentItem, redoitems, itemsToDelete, ignoreRemoteMapChanges, um) === null)) return null;
        while(parentItem.redone !== null)parentItem = getItemCleanStart(transaction, parentItem.redone);
    }
    const parentType = parentItem === null ? /** @type {AbstractType<any>} */ item.parent : /** @type {ContentType} */ parentItem.content.type;
    if (item.parentSub === null) {
        // Is an array item. Insert at the old position
        left = item.left;
        right = item;
        // find next cloned_redo items
        while(left !== null){
            /**
       * @type {Item|null}
       */ let leftTrace = left;
            // trace redone until parent matches
            while(leftTrace !== null && /** @type {AbstractType<any>} */ leftTrace.parent._item !== parentItem)leftTrace = leftTrace.redone === null ? null : getItemCleanStart(transaction, leftTrace.redone);
            if (leftTrace !== null && /** @type {AbstractType<any>} */ leftTrace.parent._item === parentItem) {
                left = leftTrace;
                break;
            }
            left = left.left;
        }
        while(right !== null){
            /**
       * @type {Item|null}
       */ let rightTrace = right;
            // trace redone until parent matches
            while(rightTrace !== null && /** @type {AbstractType<any>} */ rightTrace.parent._item !== parentItem)rightTrace = rightTrace.redone === null ? null : getItemCleanStart(transaction, rightTrace.redone);
            if (rightTrace !== null && /** @type {AbstractType<any>} */ rightTrace.parent._item === parentItem) {
                right = rightTrace;
                break;
            }
            right = right.right;
        }
    } else {
        right = null;
        if (item.right && !ignoreRemoteMapChanges) {
            left = item;
            // Iterate right while right is in itemsToDelete
            // If it is intended to delete right while item is redone, we can expect that item should replace right.
            while(left !== null && left.right !== null && (left.right.redone || isDeleted(itemsToDelete, left.right.id) || isDeletedByUndoStack(um.undoStack, left.right.id) || isDeletedByUndoStack(um.redoStack, left.right.id))){
                left = left.right;
                // follow redone
                while(left.redone)left = getItemCleanStart(transaction, left.redone);
            }
            if (left && left.right !== null) // It is not possible to redo this item because it conflicts with a
            // change from another client
            return null;
        } else left = parentType._map.get(item.parentSub) || null;
    }
    const nextClock = getState(store, ownClientID);
    const nextId = createID(ownClientID, nextClock);
    const redoneItem = new Item(nextId, left, left && left.lastId, right, right && right.id, parentType, item.parentSub, item.content.copy());
    item.redone = nextId;
    keepItem(redoneItem, true);
    redoneItem.integrate(transaction, 0);
    return redoneItem;
};
/**
 * Abstract class that represents any content.
 */ class Item extends AbstractStruct {
    /**
   * @param {ID} id
   * @param {Item | null} left
   * @param {ID | null} origin
   * @param {Item | null} right
   * @param {ID | null} rightOrigin
   * @param {AbstractType<any>|ID|null} parent Is a type if integrated, is null if it is possible to copy parent from left or right, is ID before integration to search for it.
   * @param {string | null} parentSub
   * @param {AbstractContent} content
   */ constructor(id, left, origin, right, rightOrigin, parent, parentSub, content){
        super(id, content.getLength());
        /**
     * The item that was originally to the left of this item.
     * @type {ID | null}
     */ this.origin = origin;
        /**
     * The item that is currently to the left of this item.
     * @type {Item | null}
     */ this.left = left;
        /**
     * The item that is currently to the right of this item.
     * @type {Item | null}
     */ this.right = right;
        /**
     * The item that was originally to the right of this item.
     * @type {ID | null}
     */ this.rightOrigin = rightOrigin;
        /**
     * @type {AbstractType<any>|ID|null}
     */ this.parent = parent;
        /**
     * If the parent refers to this item with some kind of key (e.g. YMap, the
     * key is specified here. The key is then used to refer to the list in which
     * to insert this item. If `parentSub = null` type._start is the list in
     * which to insert to. Otherwise it is `parent._map`.
     * @type {String | null}
     */ this.parentSub = parentSub;
        /**
     * If this type's effect is redone this type refers to the type that undid
     * this operation.
     * @type {ID | null}
     */ this.redone = null;
        /**
     * @type {AbstractContent}
     */ this.content = content;
        /**
     * bit1: keep
     * bit2: countable
     * bit3: deleted
     * bit4: mark - mark node as fast-search-marker
     * @type {number} byte
     */ this.info = this.content.isCountable() ? _binary.BIT2 : 0;
    }
    /**
   * This is used to mark the item as an indexed fast-search marker
   *
   * @type {boolean}
   */ set marker(isMarked) {
        if ((this.info & _binary.BIT4) > 0 !== isMarked) this.info ^= _binary.BIT4;
    }
    get marker() {
        return (this.info & _binary.BIT4) > 0;
    }
    /**
   * If true, do not garbage collect this Item.
   */ get keep() {
        return (this.info & _binary.BIT1) > 0;
    }
    set keep(doKeep) {
        if (this.keep !== doKeep) this.info ^= _binary.BIT1;
    }
    get countable() {
        return (this.info & _binary.BIT2) > 0;
    }
    /**
   * Whether this item was deleted or not.
   * @type {Boolean}
   */ get deleted() {
        return (this.info & _binary.BIT3) > 0;
    }
    set deleted(doDelete) {
        if (this.deleted !== doDelete) this.info ^= _binary.BIT3;
    }
    markDeleted() {
        this.info |= _binary.BIT3;
    }
    /**
   * Return the creator clientID of the missing op or define missing items and return null.
   *
   * @param {Transaction} transaction
   * @param {StructStore} store
   * @return {null | number}
   */ getMissing(transaction, store) {
        if (this.origin && this.origin.client !== this.id.client && this.origin.clock >= getState(store, this.origin.client)) return this.origin.client;
        if (this.rightOrigin && this.rightOrigin.client !== this.id.client && this.rightOrigin.clock >= getState(store, this.rightOrigin.client)) return this.rightOrigin.client;
        if (this.parent && this.parent.constructor === ID && this.id.client !== this.parent.client && this.parent.clock >= getState(store, this.parent.client)) return this.parent.client;
        // We have all missing ids, now find the items
        if (this.origin) {
            this.left = getItemCleanEnd(transaction, store, this.origin);
            this.origin = this.left.lastId;
        }
        if (this.rightOrigin) {
            this.right = getItemCleanStart(transaction, this.rightOrigin);
            this.rightOrigin = this.right.id;
        }
        if (this.left && this.left.constructor === GC || this.right && this.right.constructor === GC) this.parent = null;
        else if (!this.parent) {
            // only set parent if this shouldn't be garbage collected
            if (this.left && this.left.constructor === Item) {
                this.parent = this.left.parent;
                this.parentSub = this.left.parentSub;
            } else if (this.right && this.right.constructor === Item) {
                this.parent = this.right.parent;
                this.parentSub = this.right.parentSub;
            }
        } else if (this.parent.constructor === ID) {
            const parentItem = getItem(store, this.parent);
            if (parentItem.constructor === GC) this.parent = null;
            else this.parent = /** @type {ContentType} */ parentItem.content.type;
        }
        return null;
    }
    /**
   * @param {Transaction} transaction
   * @param {number} offset
   */ integrate(transaction, offset) {
        if (offset > 0) {
            this.id.clock += offset;
            this.left = getItemCleanEnd(transaction, transaction.doc.store, createID(this.id.client, this.id.clock - 1));
            this.origin = this.left.lastId;
            this.content = this.content.splice(offset);
            this.length -= offset;
        }
        if (this.parent) {
            if (!this.left && (!this.right || this.right.left !== null) || this.left && this.left.right !== this.right) {
                /**
         * @type {Item|null}
         */ let left = this.left;
                /**
         * @type {Item|null}
         */ let o;
                // set o to the first conflicting item
                if (left !== null) o = left.right;
                else if (this.parentSub !== null) {
                    o = /** @type {AbstractType<any>} */ this.parent._map.get(this.parentSub) || null;
                    while(o !== null && o.left !== null)o = o.left;
                } else o = /** @type {AbstractType<any>} */ this.parent._start;
                // TODO: use something like DeleteSet here (a tree implementation would be best)
                // @todo use global set definitions
                /**
         * @type {Set<Item>}
         */ const conflictingItems = new Set();
                /**
         * @type {Set<Item>}
         */ const itemsBeforeOrigin = new Set();
                // Let c in conflictingItems, b in itemsBeforeOrigin
                // ***{origin}bbbb{this}{c,b}{c,b}{o}***
                // Note that conflictingItems is a subset of itemsBeforeOrigin
                while(o !== null && o !== this.right){
                    itemsBeforeOrigin.add(o);
                    conflictingItems.add(o);
                    if (compareIDs(this.origin, o.origin)) {
                        // case 1
                        if (o.id.client < this.id.client) {
                            left = o;
                            conflictingItems.clear();
                        } else if (compareIDs(this.rightOrigin, o.rightOrigin)) break;
                         // else, o might be integrated before an item that this conflicts with. If so, we will find it in the next iterations
                    } else if (o.origin !== null && itemsBeforeOrigin.has(getItem(transaction.doc.store, o.origin))) // case 2
                    {
                        if (!conflictingItems.has(getItem(transaction.doc.store, o.origin))) {
                            left = o;
                            conflictingItems.clear();
                        }
                    } else break;
                    o = o.right;
                }
                this.left = left;
            }
            // reconnect left/right + update parent map/start if necessary
            if (this.left !== null) {
                const right = this.left.right;
                this.right = right;
                this.left.right = this;
            } else {
                let r;
                if (this.parentSub !== null) {
                    r = /** @type {AbstractType<any>} */ this.parent._map.get(this.parentSub) || null;
                    while(r !== null && r.left !== null)r = r.left;
                } else {
                    r = /** @type {AbstractType<any>} */ this.parent._start; /** @type {AbstractType<any>} */ 
                    this.parent._start = this;
                }
                this.right = r;
            }
            if (this.right !== null) this.right.left = this;
            else if (this.parentSub !== null) {
                // set as current parent value if right === null and this is parentSub
                /** @type {AbstractType<any>} */ this.parent._map.set(this.parentSub, this);
                if (this.left !== null) // this is the current attribute value of parent. delete right
                this.left.delete(transaction);
            }
            // adjust length of parent
            if (this.parentSub === null && this.countable && !this.deleted) /** @type {AbstractType<any>} */ this.parent._length += this.length;
            addStruct(transaction.doc.store, this);
            this.content.integrate(transaction, this);
            // add parent to transaction.changed
            addChangedTypeToTransaction(transaction, /** @type {AbstractType<any>} */ this.parent, this.parentSub);
            if (/** @type {AbstractType<any>} */ this.parent._item !== null && /** @type {AbstractType<any>} */ this.parent._item.deleted || this.parentSub !== null && this.right !== null) // delete if parent is deleted or if this is not the current attribute value of parent
            this.delete(transaction);
        } else // parent is not defined. Integrate GC struct instead
        new GC(this.id, this.length).integrate(transaction, 0);
    }
    /**
   * Returns the next non-deleted item
   */ get next() {
        let n = this.right;
        while(n !== null && n.deleted)n = n.right;
        return n;
    }
    /**
   * Returns the previous non-deleted item
   */ get prev() {
        let n = this.left;
        while(n !== null && n.deleted)n = n.left;
        return n;
    }
    /**
   * Computes the last content address of this Item.
   */ get lastId() {
        // allocating ids is pretty costly because of the amount of ids created, so we try to reuse whenever possible
        return this.length === 1 ? this.id : createID(this.id.client, this.id.clock + this.length - 1);
    }
    /**
   * Try to merge two items
   *
   * @param {Item} right
   * @return {boolean}
   */ mergeWith(right) {
        if (this.constructor === right.constructor && compareIDs(right.origin, this.lastId) && this.right === right && compareIDs(this.rightOrigin, right.rightOrigin) && this.id.client === right.id.client && this.id.clock + this.length === right.id.clock && this.deleted === right.deleted && this.redone === null && right.redone === null && this.content.constructor === right.content.constructor && this.content.mergeWith(right.content)) {
            const searchMarker = /** @type {AbstractType<any>} */ this.parent._searchMarker;
            if (searchMarker) searchMarker.forEach((marker)=>{
                if (marker.p === right) {
                    // right is going to be "forgotten" so we need to update the marker
                    marker.p = this;
                    // adjust marker index
                    if (!this.deleted && this.countable) marker.index -= this.length;
                }
            });
            if (right.keep) this.keep = true;
            this.right = right.right;
            if (this.right !== null) this.right.left = this;
            this.length += right.length;
            return true;
        }
        return false;
    }
    /**
   * Mark this Item as deleted.
   *
   * @param {Transaction} transaction
   */ delete(transaction) {
        if (!this.deleted) {
            const parent = /** @type {AbstractType<any>} */ this.parent;
            // adjust the length of parent
            if (this.countable && this.parentSub === null) parent._length -= this.length;
            this.markDeleted();
            addToDeleteSet(transaction.deleteSet, this.id.client, this.id.clock, this.length);
            addChangedTypeToTransaction(transaction, parent, this.parentSub);
            this.content.delete(transaction);
        }
    }
    /**
   * @param {StructStore} store
   * @param {boolean} parentGCd
   */ gc(store, parentGCd) {
        if (!this.deleted) throw _error.unexpectedCase();
        this.content.gc(store);
        if (parentGCd) replaceStruct(store, this, new GC(this.id, this.length));
        else this.content = new ContentDeleted(this.length);
    }
    /**
   * Transform the properties of this type to binary and write it to an
   * BinaryEncoder.
   *
   * This is called when this Item is sent to a remote peer.
   *
   * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder The encoder to write data to.
   * @param {number} offset
   */ write(encoder, offset) {
        const origin = offset > 0 ? createID(this.id.client, this.id.clock + offset - 1) : this.origin;
        const rightOrigin = this.rightOrigin;
        const parentSub = this.parentSub;
        const info = this.content.getRef() & _binary.BITS5 | (origin === null ? 0 : _binary.BIT8) | // origin is defined
        (rightOrigin === null ? 0 : _binary.BIT7) | // right origin is defined
        (parentSub === null ? 0 : _binary.BIT6); // parentSub is non-null
        encoder.writeInfo(info);
        if (origin !== null) encoder.writeLeftID(origin);
        if (rightOrigin !== null) encoder.writeRightID(rightOrigin);
        if (origin === null && rightOrigin === null) {
            const parent = /** @type {AbstractType<any>} */ this.parent;
            if (parent._item !== undefined) {
                const parentItem = parent._item;
                if (parentItem === null) {
                    // parent type on y._map
                    // find the correct key
                    const ykey = findRootTypeKey(parent);
                    encoder.writeParentInfo(true); // write parentYKey
                    encoder.writeString(ykey);
                } else {
                    encoder.writeParentInfo(false); // write parent id
                    encoder.writeLeftID(parentItem.id);
                }
            } else if (parent.constructor === String) {
                encoder.writeParentInfo(true); // write parentYKey
                encoder.writeString(parent);
            } else if (parent.constructor === ID) {
                encoder.writeParentInfo(false); // write parent id
                encoder.writeLeftID(parent);
            } else _error.unexpectedCase();
            if (parentSub !== null) encoder.writeString(parentSub);
        }
        this.content.write(encoder, offset);
    }
}
/**
 * @param {UpdateDecoderV1 | UpdateDecoderV2} decoder
 * @param {number} info
 */ const readItemContent = (decoder, info)=>contentRefs[info & _binary.BITS5](decoder);
/**
 * A lookup map for reading Item content.
 *
 * @type {Array<function(UpdateDecoderV1 | UpdateDecoderV2):AbstractContent>}
 */ const contentRefs = [
    ()=>{
        _error.unexpectedCase();
    },
    readContentDeleted,
    readContentJSON,
    readContentBinary,
    readContentString,
    readContentEmbed,
    readContentFormat,
    readContentType,
    readContentAny,
    readContentDoc,
    ()=>{
        _error.unexpectedCase();
    } // 10 - Skip is not ItemContent
];
const structSkipRefNumber = 10;
/**
 * @private
 */ class Skip extends AbstractStruct {
    get deleted() {
        return true;
    }
    delete() {}
    /**
   * @param {Skip} right
   * @return {boolean}
   */ mergeWith(right) {
        if (this.constructor !== right.constructor) return false;
        this.length += right.length;
        return true;
    }
    /**
   * @param {Transaction} transaction
   * @param {number} offset
   */ integrate(transaction, offset) {
        // skip structs cannot be integrated
        _error.unexpectedCase();
    }
    /**
   * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder
   * @param {number} offset
   */ write(encoder, offset) {
        encoder.writeInfo(structSkipRefNumber);
        // write as VarUint because Skips can't make use of predictable length-encoding
        _encoding.writeVarUint(encoder.restEncoder, this.length - offset);
    }
    /**
   * @param {Transaction} transaction
   * @param {StructStore} store
   * @return {null | number}
   */ getMissing(transaction, store) {
        return null;
    }
}
/** eslint-env browser */ const glo = /** @type {any} */ typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : {};
const importIdentifier = '__ $YJS$ __';
if (glo[importIdentifier] === true) /**
   * Dear reader of this message. Please take this seriously.
   *
   * If you see this message, make sure that you only import one version of Yjs. In many cases,
   * your package manager installs two versions of Yjs that are used by different packages within your project.
   * Another reason for this message is that some parts of your project use the commonjs version of Yjs
   * and others use the EcmaScript version of Yjs.
   *
   * This often leads to issues that are hard to debug. We often need to perform constructor checks,
   * e.g. `struct instanceof GC`. If you imported different versions of Yjs, it is impossible for us to
   * do the constructor checks anymore - which might break the CRDT algorithm.
   *
   * https://github.com/yjs/yjs/issues/438
   */ console.error('Yjs was already imported. This breaks constructor checks and will lead to issues! - https://github.com/yjs/yjs/issues/438');
glo[importIdentifier] = true;

},{"lib0/observable":"48uyI","lib0/array":"izwxw","lib0/math":"6VZDY","lib0/map":"gptCt","lib0/encoding":"jDJaE","lib0/decoding":"hCqHb","lib0/random":"7vLdH","lib0/promise":"2kLSN","lib0/buffer":"kZd6i","lib0/error":"bnaZe","lib0/binary":"aQiGq","lib0/function":"daIe8","lib0/set":"aUwzZ","lib0/logging":"eIwr9","lib0/time":"f2yq7","lib0/string":"72Jcz","lib0/iterator":"hzzmU","lib0/object":"1ap4a","lib0/environment":"ctaVk","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"48uyI":[function(require,module,exports,__globalThis) {
/**
 * Observable class prototype.
 *
 * @module observable
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Handles named events.
 * @experimental
 *
 * This is basically a (better typed) duplicate of Observable, which will replace Observable in the
 * next release.
 *
 * @template {{[key in keyof EVENTS]: function(...any):void}} EVENTS
 */ parcelHelpers.export(exports, "ObservableV2", ()=>ObservableV2);
/* c8 ignore start */ /**
 * Handles named events.
 *
 * @deprecated
 * @template N
 */ parcelHelpers.export(exports, "Observable", ()=>Observable) /* c8 ignore end */ ;
var _mapJs = require("./map.js");
var _setJs = require("./set.js");
var _arrayJs = require("./array.js");
class ObservableV2 {
    constructor(){
        /**
     * Some desc.
     * @type {Map<string, Set<any>>}
     */ this._observers = _mapJs.create();
    }
    /**
   * @template {keyof EVENTS & string} NAME
   * @param {NAME} name
   * @param {EVENTS[NAME]} f
   */ on(name, f) {
        _mapJs.setIfUndefined(this._observers, /** @type {string} */ name, _setJs.create).add(f);
        return f;
    }
    /**
   * @template {keyof EVENTS & string} NAME
   * @param {NAME} name
   * @param {EVENTS[NAME]} f
   */ once(name, f) {
        /**
     * @param  {...any} args
     */ const _f = (...args)=>{
            this.off(name, /** @type {any} */ _f);
            f(...args);
        };
        this.on(name, /** @type {any} */ _f);
    }
    /**
   * @template {keyof EVENTS & string} NAME
   * @param {NAME} name
   * @param {EVENTS[NAME]} f
   */ off(name, f) {
        const observers = this._observers.get(name);
        if (observers !== undefined) {
            observers.delete(f);
            if (observers.size === 0) this._observers.delete(name);
        }
    }
    /**
   * Emit a named event. All registered event listeners that listen to the
   * specified name will receive the event.
   *
   * @todo This should catch exceptions
   *
   * @template {keyof EVENTS & string} NAME
   * @param {NAME} name The event name.
   * @param {Parameters<EVENTS[NAME]>} args The arguments that are applied to the event listener.
   */ emit(name, args) {
        // copy all listeners to an array first to make sure that no event is emitted to listeners that are subscribed while the event handler is called.
        return _arrayJs.from((this._observers.get(name) || _mapJs.create()).values()).forEach((f)=>f(...args));
    }
    destroy() {
        this._observers = _mapJs.create();
    }
}
class Observable {
    constructor(){
        /**
     * Some desc.
     * @type {Map<N, any>}
     */ this._observers = _mapJs.create();
    }
    /**
   * @param {N} name
   * @param {function} f
   */ on(name, f) {
        _mapJs.setIfUndefined(this._observers, name, _setJs.create).add(f);
    }
    /**
   * @param {N} name
   * @param {function} f
   */ once(name, f) {
        /**
     * @param  {...any} args
     */ const _f = (...args)=>{
            this.off(name, _f);
            f(...args);
        };
        this.on(name, _f);
    }
    /**
   * @param {N} name
   * @param {function} f
   */ off(name, f) {
        const observers = this._observers.get(name);
        if (observers !== undefined) {
            observers.delete(f);
            if (observers.size === 0) this._observers.delete(name);
        }
    }
    /**
   * Emit a named event. All registered event listeners that listen to the
   * specified name will receive the event.
   *
   * @todo This should catch exceptions
   *
   * @param {N} name The event name.
   * @param {Array<any>} args The arguments that are applied to the event listener.
   */ emit(name, args) {
        // copy all listeners to an array first to make sure that no event is emitted to listeners that are subscribed while the event handler is called.
        return _arrayJs.from((this._observers.get(name) || _mapJs.create()).values()).forEach((f)=>f(...args));
    }
    destroy() {
        this._observers = _mapJs.create();
    }
}

},{"./map.js":"gptCt","./set.js":"aUwzZ","./array.js":"izwxw","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"gptCt":[function(require,module,exports,__globalThis) {
/**
 * Utility module to work with key-value stores.
 *
 * @module map
 */ /**
 * Creates a new Map instance.
 *
 * @function
 * @return {Map<any, any>}
 *
 * @function
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "create", ()=>create);
parcelHelpers.export(exports, "copy", ()=>copy);
parcelHelpers.export(exports, "setIfUndefined", ()=>setIfUndefined);
parcelHelpers.export(exports, "map", ()=>map);
parcelHelpers.export(exports, "any", ()=>any);
parcelHelpers.export(exports, "all", ()=>all);
const create = ()=>new Map();
const copy = (m)=>{
    const r = create();
    m.forEach((v, k)=>{
        r.set(k, v);
    });
    return r;
};
const setIfUndefined = (map, key, createT)=>{
    let set = map.get(key);
    if (set === undefined) map.set(key, set = createT());
    return set;
};
const map = (m, f)=>{
    const res = [];
    for (const [key, value] of m)res.push(f(value, key));
    return res;
};
const any = (m, f)=>{
    for (const [key, value] of m){
        if (f(value, key)) return true;
    }
    return false;
};
const all = (m, f)=>{
    for (const [key, value] of m){
        if (!f(value, key)) return false;
    }
    return true;
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"jnFvT":[function(require,module,exports,__globalThis) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || Object.prototype.hasOwnProperty.call(dest, key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"aUwzZ":[function(require,module,exports,__globalThis) {
/**
 * Utility module to work with sets.
 *
 * @module set
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "create", ()=>create);
parcelHelpers.export(exports, "toArray", ()=>toArray);
parcelHelpers.export(exports, "first", ()=>first);
parcelHelpers.export(exports, "from", ()=>from);
const create = ()=>new Set();
const toArray = (set)=>Array.from(set);
const first = (set)=>set.values().next().value ?? undefined;
const from = (entries)=>new Set(entries);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"izwxw":[function(require,module,exports,__globalThis) {
/**
 * Utility module to work with Arrays.
 *
 * @module array
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "last", ()=>last);
parcelHelpers.export(exports, "create", ()=>create);
parcelHelpers.export(exports, "copy", ()=>copy);
parcelHelpers.export(exports, "appendTo", ()=>appendTo);
parcelHelpers.export(exports, "from", ()=>from);
parcelHelpers.export(exports, "every", ()=>every);
parcelHelpers.export(exports, "some", ()=>some);
parcelHelpers.export(exports, "equalFlat", ()=>equalFlat);
parcelHelpers.export(exports, "flatten", ()=>flatten);
parcelHelpers.export(exports, "unfold", ()=>unfold);
parcelHelpers.export(exports, "fold", ()=>fold);
parcelHelpers.export(exports, "isArray", ()=>isArray);
parcelHelpers.export(exports, "unique", ()=>unique);
parcelHelpers.export(exports, "uniqueBy", ()=>uniqueBy);
parcelHelpers.export(exports, "map", ()=>map);
parcelHelpers.export(exports, "bubblesortItem", ()=>bubblesortItem);
var _setJs = require("./set.js");
const last = (arr)=>arr[arr.length - 1];
const create = ()=>/** @type {Array<C>} */ [];
const copy = (a)=>/** @type {Array<D>} */ a.slice();
const appendTo = (dest, src)=>{
    for(let i = 0; i < src.length; i++)dest.push(src[i]);
};
const from = Array.from;
const every = (arr, f)=>{
    for(let i = 0; i < arr.length; i++){
        if (!f(arr[i], i, arr)) return false;
    }
    return true;
};
const some = (arr, f)=>{
    for(let i = 0; i < arr.length; i++){
        if (f(arr[i], i, arr)) return true;
    }
    return false;
};
const equalFlat = (a, b)=>a.length === b.length && every(a, (item, index)=>item === b[index]);
const flatten = (arr)=>fold(arr, /** @type {Array<ELEM>} */ [], (acc, val)=>acc.concat(val));
const unfold = (len, f)=>{
    const array = new Array(len);
    for(let i = 0; i < len; i++)array[i] = f(i, array);
    return array;
};
const fold = (arr, seed, folder)=>arr.reduce(folder, seed);
const isArray = Array.isArray;
const unique = (arr)=>from(_setJs.from(arr));
const uniqueBy = (arr, mapper)=>{
    /**
   * @type {Set<M>}
   */ const happened = _setJs.create();
    /**
   * @type {Array<T>}
   */ const result = [];
    for(let i = 0; i < arr.length; i++){
        const el = arr[i];
        const mapped = mapper(el);
        if (!happened.has(mapped)) {
            happened.add(mapped);
            result.push(el);
        }
    }
    return result;
};
const map = (arr, mapper)=>{
    /**
   * @type {Array<any>}
   */ const res = Array(arr.length);
    for(let i = 0; i < arr.length; i++)res[i] = mapper(/** @type {any} */ arr[i], i, /** @type {any} */ arr);
    return /** @type {any} */ res;
};
const bubblesortItem = (arr, i, compareFn)=>{
    const n = arr[i];
    let j = i;
    // try to sort to the right
    while(j + 1 < arr.length && compareFn(n, arr[j + 1]) > 0){
        arr[j] = arr[j + 1];
        arr[++j] = n;
    }
    if (i === j && j > 0) // sort to the left
    while(j > 0 && compareFn(arr[j - 1], n) > 0){
        arr[j] = arr[j - 1];
        arr[--j] = n;
    }
    return j;
};

},{"./set.js":"aUwzZ","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"6VZDY":[function(require,module,exports,__globalThis) {
/**
 * Common Math expressions.
 *
 * @module math
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "floor", ()=>floor);
parcelHelpers.export(exports, "ceil", ()=>ceil);
parcelHelpers.export(exports, "abs", ()=>abs);
parcelHelpers.export(exports, "imul", ()=>imul);
parcelHelpers.export(exports, "round", ()=>round);
parcelHelpers.export(exports, "log10", ()=>log10);
parcelHelpers.export(exports, "log2", ()=>log2);
parcelHelpers.export(exports, "log", ()=>log);
parcelHelpers.export(exports, "sqrt", ()=>sqrt);
parcelHelpers.export(exports, "add", ()=>add);
parcelHelpers.export(exports, "min", ()=>min);
parcelHelpers.export(exports, "max", ()=>max);
parcelHelpers.export(exports, "isNaN", ()=>isNaN);
parcelHelpers.export(exports, "pow", ()=>pow);
parcelHelpers.export(exports, "exp10", ()=>exp10);
parcelHelpers.export(exports, "sign", ()=>sign);
parcelHelpers.export(exports, "isNegativeZero", ()=>isNegativeZero);
const floor = Math.floor;
const ceil = Math.ceil;
const abs = Math.abs;
const imul = Math.imul;
const round = Math.round;
const log10 = Math.log10;
const log2 = Math.log2;
const log = Math.log;
const sqrt = Math.sqrt;
const add = (a, b)=>a + b;
const min = (a, b)=>a < b ? a : b;
const max = (a, b)=>a > b ? a : b;
const isNaN = Number.isNaN;
const pow = Math.pow;
const exp10 = (exp)=>Math.pow(10, exp);
const sign = Math.sign;
const isNegativeZero = (n)=>n !== 0 ? n < 0 : 1 / n < 0;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"jDJaE":[function(require,module,exports,__globalThis) {
/**
 * Efficient schema-less binary encoding with support for variable length encoding.
 *
 * Use [lib0/encoding] with [lib0/decoding]. Every encoding function has a corresponding decoding function.
 *
 * Encodes numbers in little-endian order (least to most significant byte order)
 * and is compatible with Golang's binary encoding (https://golang.org/pkg/encoding/binary/)
 * which is also used in Protocol Buffers.
 *
 * ```js
 * // encoding step
 * const encoder = encoding.createEncoder()
 * encoding.writeVarUint(encoder, 256)
 * encoding.writeVarString(encoder, 'Hello world!')
 * const buf = encoding.toUint8Array(encoder)
 * ```
 *
 * ```js
 * // decoding step
 * const decoder = decoding.createDecoder(buf)
 * decoding.readVarUint(decoder) // => 256
 * decoding.readVarString(decoder) // => 'Hello world!'
 * decoding.hasContent(decoder) // => false - all data is read
 * ```
 *
 * @module encoding
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * A BinaryEncoder handles the encoding to an Uint8Array.
 */ parcelHelpers.export(exports, "Encoder", ()=>Encoder);
parcelHelpers.export(exports, "createEncoder", ()=>createEncoder);
parcelHelpers.export(exports, "encode", ()=>encode);
parcelHelpers.export(exports, "length", ()=>length);
parcelHelpers.export(exports, "hasContent", ()=>hasContent);
parcelHelpers.export(exports, "toUint8Array", ()=>toUint8Array);
parcelHelpers.export(exports, "verifyLen", ()=>verifyLen);
parcelHelpers.export(exports, "write", ()=>write);
parcelHelpers.export(exports, "set", ()=>set);
parcelHelpers.export(exports, "writeUint8", ()=>writeUint8);
parcelHelpers.export(exports, "setUint8", ()=>setUint8);
parcelHelpers.export(exports, "writeUint16", ()=>writeUint16);
parcelHelpers.export(exports, "setUint16", ()=>setUint16);
parcelHelpers.export(exports, "writeUint32", ()=>writeUint32);
parcelHelpers.export(exports, "writeUint32BigEndian", ()=>writeUint32BigEndian);
parcelHelpers.export(exports, "setUint32", ()=>setUint32);
parcelHelpers.export(exports, "writeVarUint", ()=>writeVarUint);
parcelHelpers.export(exports, "writeVarInt", ()=>writeVarInt);
parcelHelpers.export(exports, "_writeVarStringNative", ()=>_writeVarStringNative);
parcelHelpers.export(exports, "_writeVarStringPolyfill", ()=>_writeVarStringPolyfill);
parcelHelpers.export(exports, "writeVarString", ()=>writeVarString);
parcelHelpers.export(exports, "writeTerminatedString", ()=>writeTerminatedString);
parcelHelpers.export(exports, "writeTerminatedUint8Array", ()=>writeTerminatedUint8Array);
parcelHelpers.export(exports, "writeBinaryEncoder", ()=>writeBinaryEncoder);
parcelHelpers.export(exports, "writeUint8Array", ()=>writeUint8Array);
parcelHelpers.export(exports, "writeVarUint8Array", ()=>writeVarUint8Array);
parcelHelpers.export(exports, "writeOnDataView", ()=>writeOnDataView);
parcelHelpers.export(exports, "writeFloat32", ()=>writeFloat32);
parcelHelpers.export(exports, "writeFloat64", ()=>writeFloat64);
parcelHelpers.export(exports, "writeBigInt64", ()=>writeBigInt64);
parcelHelpers.export(exports, "writeBigUint64", ()=>writeBigUint64);
parcelHelpers.export(exports, "writeAny", ()=>writeAny);
/**
 * Now come a few stateful encoder that have their own classes.
 */ /**
 * Basic Run Length Encoder - a basic compression implementation.
 *
 * Encodes [1,1,1,7] to [1,3,7,1] (3 times 1, 1 time 7). This encoder might do more harm than good if there are a lot of values that are not repeated.
 *
 * It was originally used for image compression. Cool .. article http://csbruce.com/cbm/transactor/pdfs/trans_v7_i06.pdf
 *
 * @note T must not be null!
 *
 * @template T
 */ parcelHelpers.export(exports, "RleEncoder", ()=>RleEncoder);
/**
 * Basic diff decoder using variable length encoding.
 *
 * Encodes the values [3, 1100, 1101, 1050, 0] to [3, 1097, 1, -51, -1050] using writeVarInt.
 */ parcelHelpers.export(exports, "IntDiffEncoder", ()=>IntDiffEncoder);
/**
 * A combination of IntDiffEncoder and RleEncoder.
 *
 * Basically first writes the IntDiffEncoder and then counts duplicate diffs using RleEncoding.
 *
 * Encodes the values [1,1,1,2,3,4,5,6] as [1,1,0,2,1,5] (RLE([1,0,0,1,1,1,1,1]) ⇒ RleIntDiff[1,1,0,2,1,5])
 */ parcelHelpers.export(exports, "RleIntDiffEncoder", ()=>RleIntDiffEncoder);
/**
 * Optimized Rle encoder that does not suffer from the mentioned problem of the basic Rle encoder.
 *
 * Internally uses VarInt encoder to write unsigned integers. If the input occurs multiple times, we write
 * write it as a negative number. The UintOptRleDecoder then understands that it needs to read a count.
 *
 * Encodes [1,2,3,3,3] as [1,2,-3,3] (once 1, once 2, three times 3)
 */ parcelHelpers.export(exports, "UintOptRleEncoder", ()=>UintOptRleEncoder);
/**
 * Increasing Uint Optimized RLE Encoder
 *
 * The RLE encoder counts the number of same occurences of the same value.
 * The IncUintOptRle encoder counts if the value increases.
 * I.e. 7, 8, 9, 10 will be encoded as [-7, 4]. 1, 3, 5 will be encoded
 * as [1, 3, 5].
 */ parcelHelpers.export(exports, "IncUintOptRleEncoder", ()=>IncUintOptRleEncoder);
/**
 * A combination of the IntDiffEncoder and the UintOptRleEncoder.
 *
 * The count approach is similar to the UintDiffOptRleEncoder, but instead of using the negative bitflag, it encodes
 * in the LSB whether a count is to be read. Therefore this Encoder only supports 31 bit integers!
 *
 * Encodes [1, 2, 3, 2] as [3, 1, 6, -1] (more specifically [(1 << 1) | 1, (3 << 0) | 0, -1])
 *
 * Internally uses variable length encoding. Contrary to normal UintVar encoding, the first byte contains:
 * * 1 bit that denotes whether the next value is a count (LSB)
 * * 1 bit that denotes whether this value is negative (MSB - 1)
 * * 1 bit that denotes whether to continue reading the variable length integer (MSB)
 *
 * Therefore, only five bits remain to encode diff ranges.
 *
 * Use this Encoder only when appropriate. In most cases, this is probably a bad idea.
 */ parcelHelpers.export(exports, "IntDiffOptRleEncoder", ()=>IntDiffOptRleEncoder);
/**
 * Optimized String Encoder.
 *
 * Encoding many small strings in a simple Encoder is not very efficient. The function call to decode a string takes some time and creates references that must be eventually deleted.
 * In practice, when decoding several million small strings, the GC will kick in more and more often to collect orphaned string objects (or maybe there is another reason?).
 *
 * This string encoder solves the above problem. All strings are concatenated and written as a single string using a single encoding call.
 *
 * The lengths are encoded using a UintOptRleEncoder.
 */ parcelHelpers.export(exports, "StringEncoder", ()=>StringEncoder);
var _mathJs = require("./math.js");
var _numberJs = require("./number.js");
var _binaryJs = require("./binary.js");
var _stringJs = require("./string.js");
var _arrayJs = require("./array.js");
class Encoder {
    constructor(){
        this.cpos = 0;
        this.cbuf = new Uint8Array(100);
        /**
     * @type {Array<Uint8Array>}
     */ this.bufs = [];
    }
}
const createEncoder = ()=>new Encoder();
const encode = (f)=>{
    const encoder = createEncoder();
    f(encoder);
    return toUint8Array(encoder);
};
const length = (encoder)=>{
    let len = encoder.cpos;
    for(let i = 0; i < encoder.bufs.length; i++)len += encoder.bufs[i].length;
    return len;
};
const hasContent = (encoder)=>encoder.cpos > 0 || encoder.bufs.length > 0;
const toUint8Array = (encoder)=>{
    const uint8arr = new Uint8Array(length(encoder));
    let curPos = 0;
    for(let i = 0; i < encoder.bufs.length; i++){
        const d = encoder.bufs[i];
        uint8arr.set(d, curPos);
        curPos += d.length;
    }
    uint8arr.set(new Uint8Array(encoder.cbuf.buffer, 0, encoder.cpos), curPos);
    return uint8arr;
};
const verifyLen = (encoder, len)=>{
    const bufferLen = encoder.cbuf.length;
    if (bufferLen - encoder.cpos < len) {
        encoder.bufs.push(new Uint8Array(encoder.cbuf.buffer, 0, encoder.cpos));
        encoder.cbuf = new Uint8Array(_mathJs.max(bufferLen, len) * 2);
        encoder.cpos = 0;
    }
};
const write = (encoder, num)=>{
    const bufferLen = encoder.cbuf.length;
    if (encoder.cpos === bufferLen) {
        encoder.bufs.push(encoder.cbuf);
        encoder.cbuf = new Uint8Array(bufferLen * 2);
        encoder.cpos = 0;
    }
    encoder.cbuf[encoder.cpos++] = num;
};
const set = (encoder, pos, num)=>{
    let buffer = null;
    // iterate all buffers and adjust position
    for(let i = 0; i < encoder.bufs.length && buffer === null; i++){
        const b = encoder.bufs[i];
        if (pos < b.length) buffer = b // found buffer
        ;
        else pos -= b.length;
    }
    if (buffer === null) // use current buffer
    buffer = encoder.cbuf;
    buffer[pos] = num;
};
const writeUint8 = write;
const setUint8 = set;
const writeUint16 = (encoder, num)=>{
    write(encoder, num & _binaryJs.BITS8);
    write(encoder, num >>> 8 & _binaryJs.BITS8);
};
const setUint16 = (encoder, pos, num)=>{
    set(encoder, pos, num & _binaryJs.BITS8);
    set(encoder, pos + 1, num >>> 8 & _binaryJs.BITS8);
};
const writeUint32 = (encoder, num)=>{
    for(let i = 0; i < 4; i++){
        write(encoder, num & _binaryJs.BITS8);
        num >>>= 8;
    }
};
const writeUint32BigEndian = (encoder, num)=>{
    for(let i = 3; i >= 0; i--)write(encoder, num >>> 8 * i & _binaryJs.BITS8);
};
const setUint32 = (encoder, pos, num)=>{
    for(let i = 0; i < 4; i++){
        set(encoder, pos + i, num & _binaryJs.BITS8);
        num >>>= 8;
    }
};
const writeVarUint = (encoder, num)=>{
    while(num > _binaryJs.BITS7){
        write(encoder, _binaryJs.BIT8 | _binaryJs.BITS7 & num);
        num = _mathJs.floor(num / 128) // shift >>> 7
        ;
    }
    write(encoder, _binaryJs.BITS7 & num);
};
const writeVarInt = (encoder, num)=>{
    const isNegative = _mathJs.isNegativeZero(num);
    if (isNegative) num = -num;
    //             |- whether to continue reading         |- whether is negative     |- number
    write(encoder, (num > _binaryJs.BITS6 ? _binaryJs.BIT8 : 0) | (isNegative ? _binaryJs.BIT7 : 0) | _binaryJs.BITS6 & num);
    num = _mathJs.floor(num / 64) // shift >>> 6
    ;
    // We don't need to consider the case of num === 0 so we can use a different
    // pattern here than above.
    while(num > 0){
        write(encoder, (num > _binaryJs.BITS7 ? _binaryJs.BIT8 : 0) | _binaryJs.BITS7 & num);
        num = _mathJs.floor(num / 128) // shift >>> 7
        ;
    }
};
/**
 * A cache to store strings temporarily
 */ const _strBuffer = new Uint8Array(30000);
const _maxStrBSize = _strBuffer.length / 3;
const _writeVarStringNative = (encoder, str)=>{
    if (str.length < _maxStrBSize) {
        // We can encode the string into the existing buffer
        /* c8 ignore next */ const written = _stringJs.utf8TextEncoder.encodeInto(str, _strBuffer).written || 0;
        writeVarUint(encoder, written);
        for(let i = 0; i < written; i++)write(encoder, _strBuffer[i]);
    } else writeVarUint8Array(encoder, _stringJs.encodeUtf8(str));
};
const _writeVarStringPolyfill = (encoder, str)=>{
    const encodedString = unescape(encodeURIComponent(str));
    const len = encodedString.length;
    writeVarUint(encoder, len);
    for(let i = 0; i < len; i++)write(encoder, /** @type {number} */ encodedString.codePointAt(i));
};
const writeVarString = _stringJs.utf8TextEncoder && /** @type {any} */ _stringJs.utf8TextEncoder.encodeInto ? _writeVarStringNative : _writeVarStringPolyfill;
const writeTerminatedString = (encoder, str)=>writeTerminatedUint8Array(encoder, _stringJs.encodeUtf8(str));
const writeTerminatedUint8Array = (encoder, buf)=>{
    for(let i = 0; i < buf.length; i++){
        const b = buf[i];
        if (b === 0 || b === 1) write(encoder, 1);
        write(encoder, buf[i]);
    }
    write(encoder, 0);
};
const writeBinaryEncoder = (encoder, append)=>writeUint8Array(encoder, toUint8Array(append));
const writeUint8Array = (encoder, uint8Array)=>{
    const bufferLen = encoder.cbuf.length;
    const cpos = encoder.cpos;
    const leftCopyLen = _mathJs.min(bufferLen - cpos, uint8Array.length);
    const rightCopyLen = uint8Array.length - leftCopyLen;
    encoder.cbuf.set(uint8Array.subarray(0, leftCopyLen), cpos);
    encoder.cpos += leftCopyLen;
    if (rightCopyLen > 0) {
        // Still something to write, write right half..
        // Append new buffer
        encoder.bufs.push(encoder.cbuf);
        // must have at least size of remaining buffer
        encoder.cbuf = new Uint8Array(_mathJs.max(bufferLen * 2, rightCopyLen));
        // copy array
        encoder.cbuf.set(uint8Array.subarray(leftCopyLen));
        encoder.cpos = rightCopyLen;
    }
};
const writeVarUint8Array = (encoder, uint8Array)=>{
    writeVarUint(encoder, uint8Array.byteLength);
    writeUint8Array(encoder, uint8Array);
};
const writeOnDataView = (encoder, len)=>{
    verifyLen(encoder, len);
    const dview = new DataView(encoder.cbuf.buffer, encoder.cpos, len);
    encoder.cpos += len;
    return dview;
};
const writeFloat32 = (encoder, num)=>writeOnDataView(encoder, 4).setFloat32(0, num, false);
const writeFloat64 = (encoder, num)=>writeOnDataView(encoder, 8).setFloat64(0, num, false);
const writeBigInt64 = (encoder, num)=>/** @type {any} */ writeOnDataView(encoder, 8).setBigInt64(0, num, false);
const writeBigUint64 = (encoder, num)=>/** @type {any} */ writeOnDataView(encoder, 8).setBigUint64(0, num, false);
const floatTestBed = new DataView(new ArrayBuffer(4));
/**
 * Check if a number can be encoded as a 32 bit float.
 *
 * @param {number} num
 * @return {boolean}
 */ const isFloat32 = (num)=>{
    floatTestBed.setFloat32(0, num);
    return floatTestBed.getFloat32(0) === num;
};
const writeAny = (encoder, data)=>{
    switch(typeof data){
        case 'string':
            // TYPE 119: STRING
            write(encoder, 119);
            writeVarString(encoder, data);
            break;
        case 'number':
            if (_numberJs.isInteger(data) && _mathJs.abs(data) <= _binaryJs.BITS31) {
                // TYPE 125: INTEGER
                write(encoder, 125);
                writeVarInt(encoder, data);
            } else if (isFloat32(data)) {
                // TYPE 124: FLOAT32
                write(encoder, 124);
                writeFloat32(encoder, data);
            } else {
                // TYPE 123: FLOAT64
                write(encoder, 123);
                writeFloat64(encoder, data);
            }
            break;
        case 'bigint':
            // TYPE 122: BigInt
            write(encoder, 122);
            writeBigInt64(encoder, data);
            break;
        case 'object':
            if (data === null) // TYPE 126: null
            write(encoder, 126);
            else if (_arrayJs.isArray(data)) {
                // TYPE 117: Array
                write(encoder, 117);
                writeVarUint(encoder, data.length);
                for(let i = 0; i < data.length; i++)writeAny(encoder, data[i]);
            } else if (data instanceof Uint8Array) {
                // TYPE 116: ArrayBuffer
                write(encoder, 116);
                writeVarUint8Array(encoder, data);
            } else {
                // TYPE 118: Object
                write(encoder, 118);
                const keys = Object.keys(data);
                writeVarUint(encoder, keys.length);
                for(let i = 0; i < keys.length; i++){
                    const key = keys[i];
                    writeVarString(encoder, key);
                    writeAny(encoder, data[key]);
                }
            }
            break;
        case 'boolean':
            // TYPE 120/121: boolean (true/false)
            write(encoder, data ? 120 : 121);
            break;
        default:
            // TYPE 127: undefined
            write(encoder, 127);
    }
};
class RleEncoder extends Encoder {
    /**
   * @param {function(Encoder, T):void} writer
   */ constructor(writer){
        super();
        /**
     * The writer
     */ this.w = writer;
        /**
     * Current state
     * @type {T|null}
     */ this.s = null;
        this.count = 0;
    }
    /**
   * @param {T} v
   */ write(v) {
        if (this.s === v) this.count++;
        else {
            if (this.count > 0) // flush counter, unless this is the first value (count = 0)
            writeVarUint(this, this.count - 1) // since count is always > 0, we can decrement by one. non-standard encoding ftw
            ;
            this.count = 1;
            // write first value
            this.w(this, v);
            this.s = v;
        }
    }
}
class IntDiffEncoder extends Encoder {
    /**
   * @param {number} start
   */ constructor(start){
        super();
        /**
     * Current state
     * @type {number}
     */ this.s = start;
    }
    /**
   * @param {number} v
   */ write(v) {
        writeVarInt(this, v - this.s);
        this.s = v;
    }
}
class RleIntDiffEncoder extends Encoder {
    /**
   * @param {number} start
   */ constructor(start){
        super();
        /**
     * Current state
     * @type {number}
     */ this.s = start;
        this.count = 0;
    }
    /**
   * @param {number} v
   */ write(v) {
        if (this.s === v && this.count > 0) this.count++;
        else {
            if (this.count > 0) // flush counter, unless this is the first value (count = 0)
            writeVarUint(this, this.count - 1) // since count is always > 0, we can decrement by one. non-standard encoding ftw
            ;
            this.count = 1;
            // write first value
            writeVarInt(this, v - this.s);
            this.s = v;
        }
    }
}
/**
 * @param {UintOptRleEncoder} encoder
 */ const flushUintOptRleEncoder = (encoder)=>{
    if (encoder.count > 0) {
        // flush counter, unless this is the first value (count = 0)
        // case 1: just a single value. set sign to positive
        // case 2: write several values. set sign to negative to indicate that there is a length coming
        writeVarInt(encoder.encoder, encoder.count === 1 ? encoder.s : -encoder.s);
        if (encoder.count > 1) writeVarUint(encoder.encoder, encoder.count - 2) // since count is always > 1, we can decrement by one. non-standard encoding ftw
        ;
    }
};
class UintOptRleEncoder {
    constructor(){
        this.encoder = new Encoder();
        /**
     * @type {number}
     */ this.s = 0;
        this.count = 0;
    }
    /**
   * @param {number} v
   */ write(v) {
        if (this.s === v) this.count++;
        else {
            flushUintOptRleEncoder(this);
            this.count = 1;
            this.s = v;
        }
    }
    /**
   * Flush the encoded state and transform this to a Uint8Array.
   *
   * Note that this should only be called once.
   */ toUint8Array() {
        flushUintOptRleEncoder(this);
        return toUint8Array(this.encoder);
    }
}
class IncUintOptRleEncoder {
    constructor(){
        this.encoder = new Encoder();
        /**
     * @type {number}
     */ this.s = 0;
        this.count = 0;
    }
    /**
   * @param {number} v
   */ write(v) {
        if (this.s + this.count === v) this.count++;
        else {
            flushUintOptRleEncoder(this);
            this.count = 1;
            this.s = v;
        }
    }
    /**
   * Flush the encoded state and transform this to a Uint8Array.
   *
   * Note that this should only be called once.
   */ toUint8Array() {
        flushUintOptRleEncoder(this);
        return toUint8Array(this.encoder);
    }
}
/**
 * @param {IntDiffOptRleEncoder} encoder
 */ const flushIntDiffOptRleEncoder = (encoder)=>{
    if (encoder.count > 0) {
        //          31 bit making up the diff | wether to write the counter
        // const encodedDiff = encoder.diff << 1 | (encoder.count === 1 ? 0 : 1)
        const encodedDiff = encoder.diff * 2 + (encoder.count === 1 ? 0 : 1);
        // flush counter, unless this is the first value (count = 0)
        // case 1: just a single value. set first bit to positive
        // case 2: write several values. set first bit to negative to indicate that there is a length coming
        writeVarInt(encoder.encoder, encodedDiff);
        if (encoder.count > 1) writeVarUint(encoder.encoder, encoder.count - 2) // since count is always > 1, we can decrement by one. non-standard encoding ftw
        ;
    }
};
class IntDiffOptRleEncoder {
    constructor(){
        this.encoder = new Encoder();
        /**
     * @type {number}
     */ this.s = 0;
        this.count = 0;
        this.diff = 0;
    }
    /**
   * @param {number} v
   */ write(v) {
        if (this.diff === v - this.s) {
            this.s = v;
            this.count++;
        } else {
            flushIntDiffOptRleEncoder(this);
            this.count = 1;
            this.diff = v - this.s;
            this.s = v;
        }
    }
    /**
   * Flush the encoded state and transform this to a Uint8Array.
   *
   * Note that this should only be called once.
   */ toUint8Array() {
        flushIntDiffOptRleEncoder(this);
        return toUint8Array(this.encoder);
    }
}
class StringEncoder {
    constructor(){
        /**
     * @type {Array<string>}
     */ this.sarr = [];
        this.s = '';
        this.lensE = new UintOptRleEncoder();
    }
    /**
   * @param {string} string
   */ write(string) {
        this.s += string;
        if (this.s.length > 19) {
            this.sarr.push(this.s);
            this.s = '';
        }
        this.lensE.write(string.length);
    }
    toUint8Array() {
        const encoder = new Encoder();
        this.sarr.push(this.s);
        this.s = '';
        writeVarString(encoder, this.sarr.join(''));
        writeUint8Array(encoder, this.lensE.toUint8Array());
        return toUint8Array(encoder);
    }
}

},{"./math.js":"6VZDY","./number.js":"aEkdy","./binary.js":"aQiGq","./string.js":"72Jcz","./array.js":"izwxw","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"aEkdy":[function(require,module,exports,__globalThis) {
/**
 * Utility helpers for working with numbers.
 *
 * @module number
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "MAX_SAFE_INTEGER", ()=>MAX_SAFE_INTEGER);
parcelHelpers.export(exports, "MIN_SAFE_INTEGER", ()=>MIN_SAFE_INTEGER);
parcelHelpers.export(exports, "LOWEST_INT32", ()=>LOWEST_INT32);
parcelHelpers.export(exports, "HIGHEST_INT32", ()=>HIGHEST_INT32);
parcelHelpers.export(exports, "HIGHEST_UINT32", ()=>HIGHEST_UINT32);
parcelHelpers.export(exports, "isInteger", ()=>isInteger);
parcelHelpers.export(exports, "isNaN", ()=>isNaN);
parcelHelpers.export(exports, "parseInt", ()=>parseInt);
parcelHelpers.export(exports, "countBits", ()=>countBits);
var _mathJs = require("./math.js");
var _binaryJs = require("./binary.js");
const MAX_SAFE_INTEGER = Number.MAX_SAFE_INTEGER;
const MIN_SAFE_INTEGER = Number.MIN_SAFE_INTEGER;
const LOWEST_INT32 = -2147483648;
const HIGHEST_INT32 = _binaryJs.BITS31;
const HIGHEST_UINT32 = _binaryJs.BITS32;
const isInteger = Number.isInteger || ((num)=>typeof num === 'number' && isFinite(num) && _mathJs.floor(num) === num);
const isNaN = Number.isNaN;
const parseInt = Number.parseInt;
const countBits = (n)=>{
    n &= _binaryJs.BITS32;
    let count = 0;
    while(n){
        n &= n - 1;
        count++;
    }
    return count;
};

},{"./math.js":"6VZDY","./binary.js":"aQiGq","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"aQiGq":[function(require,module,exports,__globalThis) {
/* eslint-env browser */ /**
 * Binary data constants.
 *
 * @module binary
 */ /**
 * n-th bit activated.
 *
 * @type {number}
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "BIT1", ()=>BIT1);
parcelHelpers.export(exports, "BIT2", ()=>BIT2);
parcelHelpers.export(exports, "BIT3", ()=>BIT3);
parcelHelpers.export(exports, "BIT4", ()=>BIT4);
parcelHelpers.export(exports, "BIT5", ()=>BIT5);
parcelHelpers.export(exports, "BIT6", ()=>BIT6);
parcelHelpers.export(exports, "BIT7", ()=>BIT7);
parcelHelpers.export(exports, "BIT8", ()=>BIT8);
parcelHelpers.export(exports, "BIT9", ()=>BIT9);
parcelHelpers.export(exports, "BIT10", ()=>BIT10);
parcelHelpers.export(exports, "BIT11", ()=>BIT11);
parcelHelpers.export(exports, "BIT12", ()=>BIT12);
parcelHelpers.export(exports, "BIT13", ()=>BIT13);
parcelHelpers.export(exports, "BIT14", ()=>BIT14);
parcelHelpers.export(exports, "BIT15", ()=>BIT15);
parcelHelpers.export(exports, "BIT16", ()=>BIT16);
parcelHelpers.export(exports, "BIT17", ()=>BIT17);
parcelHelpers.export(exports, "BIT18", ()=>BIT18);
parcelHelpers.export(exports, "BIT19", ()=>BIT19);
parcelHelpers.export(exports, "BIT20", ()=>BIT20);
parcelHelpers.export(exports, "BIT21", ()=>BIT21);
parcelHelpers.export(exports, "BIT22", ()=>BIT22);
parcelHelpers.export(exports, "BIT23", ()=>BIT23);
parcelHelpers.export(exports, "BIT24", ()=>BIT24);
parcelHelpers.export(exports, "BIT25", ()=>BIT25);
parcelHelpers.export(exports, "BIT26", ()=>BIT26);
parcelHelpers.export(exports, "BIT27", ()=>BIT27);
parcelHelpers.export(exports, "BIT28", ()=>BIT28);
parcelHelpers.export(exports, "BIT29", ()=>BIT29);
parcelHelpers.export(exports, "BIT30", ()=>BIT30);
parcelHelpers.export(exports, "BIT31", ()=>BIT31);
parcelHelpers.export(exports, "BIT32", ()=>BIT32);
parcelHelpers.export(exports, "BITS0", ()=>BITS0);
parcelHelpers.export(exports, "BITS1", ()=>BITS1);
parcelHelpers.export(exports, "BITS2", ()=>BITS2);
parcelHelpers.export(exports, "BITS3", ()=>BITS3);
parcelHelpers.export(exports, "BITS4", ()=>BITS4);
parcelHelpers.export(exports, "BITS5", ()=>BITS5);
parcelHelpers.export(exports, "BITS6", ()=>BITS6);
parcelHelpers.export(exports, "BITS7", ()=>BITS7);
parcelHelpers.export(exports, "BITS8", ()=>BITS8);
parcelHelpers.export(exports, "BITS9", ()=>BITS9);
parcelHelpers.export(exports, "BITS10", ()=>BITS10);
parcelHelpers.export(exports, "BITS11", ()=>BITS11);
parcelHelpers.export(exports, "BITS12", ()=>BITS12);
parcelHelpers.export(exports, "BITS13", ()=>BITS13);
parcelHelpers.export(exports, "BITS14", ()=>BITS14);
parcelHelpers.export(exports, "BITS15", ()=>BITS15);
parcelHelpers.export(exports, "BITS16", ()=>BITS16);
parcelHelpers.export(exports, "BITS17", ()=>BITS17);
parcelHelpers.export(exports, "BITS18", ()=>BITS18);
parcelHelpers.export(exports, "BITS19", ()=>BITS19);
parcelHelpers.export(exports, "BITS20", ()=>BITS20);
parcelHelpers.export(exports, "BITS21", ()=>BITS21);
parcelHelpers.export(exports, "BITS22", ()=>BITS22);
parcelHelpers.export(exports, "BITS23", ()=>BITS23);
parcelHelpers.export(exports, "BITS24", ()=>BITS24);
parcelHelpers.export(exports, "BITS25", ()=>BITS25);
parcelHelpers.export(exports, "BITS26", ()=>BITS26);
parcelHelpers.export(exports, "BITS27", ()=>BITS27);
parcelHelpers.export(exports, "BITS28", ()=>BITS28);
parcelHelpers.export(exports, "BITS29", ()=>BITS29);
parcelHelpers.export(exports, "BITS30", ()=>BITS30);
parcelHelpers.export(exports, "BITS31", ()=>BITS31);
parcelHelpers.export(exports, "BITS32", ()=>BITS32);
const BIT1 = 1;
const BIT2 = 2;
const BIT3 = 4;
const BIT4 = 8;
const BIT5 = 16;
const BIT6 = 32;
const BIT7 = 64;
const BIT8 = 128;
const BIT9 = 256;
const BIT10 = 512;
const BIT11 = 1024;
const BIT12 = 2048;
const BIT13 = 4096;
const BIT14 = 8192;
const BIT15 = 16384;
const BIT16 = 32768;
const BIT17 = 65536;
const BIT18 = 131072;
const BIT19 = 262144;
const BIT20 = 524288;
const BIT21 = 1048576;
const BIT22 = 2097152;
const BIT23 = 4194304;
const BIT24 = 8388608;
const BIT25 = 16777216;
const BIT26 = 33554432;
const BIT27 = 67108864;
const BIT28 = 134217728;
const BIT29 = 268435456;
const BIT30 = 536870912;
const BIT31 = 1073741824;
const BIT32 = -2147483648;
const BITS0 = 0;
const BITS1 = 1;
const BITS2 = 3;
const BITS3 = 7;
const BITS4 = 15;
const BITS5 = 31;
const BITS6 = 63;
const BITS7 = 127;
const BITS8 = 255;
const BITS9 = 511;
const BITS10 = 1023;
const BITS11 = 2047;
const BITS12 = 4095;
const BITS13 = 8191;
const BITS14 = 16383;
const BITS15 = 32767;
const BITS16 = 65535;
const BITS17 = BIT18 - 1;
const BITS18 = BIT19 - 1;
const BITS19 = BIT20 - 1;
const BITS20 = BIT21 - 1;
const BITS21 = BIT22 - 1;
const BITS22 = BIT23 - 1;
const BITS23 = BIT24 - 1;
const BITS24 = BIT25 - 1;
const BITS25 = BIT26 - 1;
const BITS26 = BIT27 - 1;
const BITS27 = BIT28 - 1;
const BITS28 = BIT29 - 1;
const BITS29 = BIT30 - 1;
const BITS30 = BIT31 - 1;
const BITS31 = 0x7FFFFFFF;
const BITS32 = 0xFFFFFFFF;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"72Jcz":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "fromCharCode", ()=>fromCharCode);
parcelHelpers.export(exports, "fromCodePoint", ()=>fromCodePoint);
parcelHelpers.export(exports, "MAX_UTF16_CHARACTER", ()=>MAX_UTF16_CHARACTER);
parcelHelpers.export(exports, "trimLeft", ()=>trimLeft);
parcelHelpers.export(exports, "fromCamelCase", ()=>fromCamelCase);
parcelHelpers.export(exports, "utf8ByteLength", ()=>utf8ByteLength);
parcelHelpers.export(exports, "_encodeUtf8Polyfill", ()=>_encodeUtf8Polyfill);
parcelHelpers.export(exports, "utf8TextEncoder", ()=>utf8TextEncoder);
parcelHelpers.export(exports, "_encodeUtf8Native", ()=>_encodeUtf8Native);
parcelHelpers.export(exports, "encodeUtf8", ()=>encodeUtf8);
parcelHelpers.export(exports, "_decodeUtf8Polyfill", ()=>_decodeUtf8Polyfill);
parcelHelpers.export(exports, "utf8TextDecoder", ()=>utf8TextDecoder);
parcelHelpers.export(exports, "_decodeUtf8Native", ()=>_decodeUtf8Native);
parcelHelpers.export(exports, "decodeUtf8", ()=>decodeUtf8);
parcelHelpers.export(exports, "splice", ()=>splice);
parcelHelpers.export(exports, "repeat", ()=>repeat);
var _arrayJs = require("./array.js");
const fromCharCode = String.fromCharCode;
const fromCodePoint = String.fromCodePoint;
const MAX_UTF16_CHARACTER = fromCharCode(65535);
/**
 * @param {string} s
 * @return {string}
 */ const toLowerCase = (s)=>s.toLowerCase();
const trimLeftRegex = /^\s*/g;
const trimLeft = (s)=>s.replace(trimLeftRegex, '');
const fromCamelCaseRegex = /([A-Z])/g;
const fromCamelCase = (s, separator)=>trimLeft(s.replace(fromCamelCaseRegex, (match)=>`${separator}${toLowerCase(match)}`));
const utf8ByteLength = (str)=>unescape(encodeURIComponent(str)).length;
const _encodeUtf8Polyfill = (str)=>{
    const encodedString = unescape(encodeURIComponent(str));
    const len = encodedString.length;
    const buf = new Uint8Array(len);
    for(let i = 0; i < len; i++)buf[i] = /** @type {number} */ encodedString.codePointAt(i);
    return buf;
};
const utf8TextEncoder = /** @type {TextEncoder} */ typeof TextEncoder !== 'undefined' ? new TextEncoder() : null;
const _encodeUtf8Native = (str)=>utf8TextEncoder.encode(str);
const encodeUtf8 = utf8TextEncoder ? _encodeUtf8Native : _encodeUtf8Polyfill;
const _decodeUtf8Polyfill = (buf)=>{
    let remainingLen = buf.length;
    let encodedString = '';
    let bufPos = 0;
    while(remainingLen > 0){
        const nextLen = remainingLen < 10000 ? remainingLen : 10000;
        const bytes = buf.subarray(bufPos, bufPos + nextLen);
        bufPos += nextLen;
        // Starting with ES5.1 we can supply a generic array-like object as arguments
        encodedString += String.fromCodePoint.apply(null, /** @type {any} */ bytes);
        remainingLen -= nextLen;
    }
    return decodeURIComponent(escape(encodedString));
};
let utf8TextDecoder = typeof TextDecoder === 'undefined' ? null : new TextDecoder('utf-8', {
    fatal: true,
    ignoreBOM: true
});
/* c8 ignore start */ if (utf8TextDecoder && utf8TextDecoder.decode(new Uint8Array()).length === 1) // Safari doesn't handle BOM correctly.
// This fixes a bug in Safari 13.0.5 where it produces a BOM the first time it is called.
// utf8TextDecoder.decode(new Uint8Array()).length === 1 on the first call and
// utf8TextDecoder.decode(new Uint8Array()).length === 1 on the second call
// Another issue is that from then on no BOM chars are recognized anymore
/* c8 ignore next */ utf8TextDecoder = null;
const _decodeUtf8Native = (buf)=>/** @type {TextDecoder} */ utf8TextDecoder.decode(buf);
const decodeUtf8 = utf8TextDecoder ? _decodeUtf8Native : _decodeUtf8Polyfill;
const splice = (str, index, remove, insert = '')=>str.slice(0, index) + insert + str.slice(index + remove);
const repeat = (source, n)=>_arrayJs.unfold(n, ()=>source).join('');

},{"./array.js":"izwxw","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"hCqHb":[function(require,module,exports,__globalThis) {
/**
 * Efficient schema-less binary decoding with support for variable length encoding.
 *
 * Use [lib0/decoding] with [lib0/encoding]. Every encoding function has a corresponding decoding function.
 *
 * Encodes numbers in little-endian order (least to most significant byte order)
 * and is compatible with Golang's binary encoding (https://golang.org/pkg/encoding/binary/)
 * which is also used in Protocol Buffers.
 *
 * ```js
 * // encoding step
 * const encoder = encoding.createEncoder()
 * encoding.writeVarUint(encoder, 256)
 * encoding.writeVarString(encoder, 'Hello world!')
 * const buf = encoding.toUint8Array(encoder)
 * ```
 *
 * ```js
 * // decoding step
 * const decoder = decoding.createDecoder(buf)
 * decoding.readVarUint(decoder) // => 256
 * decoding.readVarString(decoder) // => 'Hello world!'
 * decoding.hasContent(decoder) // => false - all data is read
 * ```
 *
 * @module decoding
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * A Decoder handles the decoding of an Uint8Array.
 */ parcelHelpers.export(exports, "Decoder", ()=>Decoder);
parcelHelpers.export(exports, "createDecoder", ()=>createDecoder);
parcelHelpers.export(exports, "hasContent", ()=>hasContent);
parcelHelpers.export(exports, "clone", ()=>clone);
parcelHelpers.export(exports, "readUint8Array", ()=>readUint8Array);
parcelHelpers.export(exports, "readVarUint8Array", ()=>readVarUint8Array);
parcelHelpers.export(exports, "readTailAsUint8Array", ()=>readTailAsUint8Array);
parcelHelpers.export(exports, "skip8", ()=>skip8);
parcelHelpers.export(exports, "readUint8", ()=>readUint8);
parcelHelpers.export(exports, "readUint16", ()=>readUint16);
parcelHelpers.export(exports, "readUint32", ()=>readUint32);
parcelHelpers.export(exports, "readUint32BigEndian", ()=>readUint32BigEndian);
parcelHelpers.export(exports, "peekUint8", ()=>peekUint8);
parcelHelpers.export(exports, "peekUint16", ()=>peekUint16);
parcelHelpers.export(exports, "peekUint32", ()=>peekUint32);
parcelHelpers.export(exports, "readVarUint", ()=>readVarUint);
parcelHelpers.export(exports, "readVarInt", ()=>readVarInt);
parcelHelpers.export(exports, "peekVarUint", ()=>peekVarUint);
parcelHelpers.export(exports, "peekVarInt", ()=>peekVarInt);
parcelHelpers.export(exports, "_readVarStringPolyfill", ()=>_readVarStringPolyfill);
parcelHelpers.export(exports, "_readVarStringNative", ()=>_readVarStringNative);
parcelHelpers.export(exports, "readVarString", ()=>readVarString);
parcelHelpers.export(exports, "readTerminatedUint8Array", ()=>readTerminatedUint8Array);
parcelHelpers.export(exports, "readTerminatedString", ()=>readTerminatedString);
parcelHelpers.export(exports, "peekVarString", ()=>peekVarString);
parcelHelpers.export(exports, "readFromDataView", ()=>readFromDataView);
parcelHelpers.export(exports, "readFloat32", ()=>readFloat32);
parcelHelpers.export(exports, "readFloat64", ()=>readFloat64);
parcelHelpers.export(exports, "readBigInt64", ()=>readBigInt64);
parcelHelpers.export(exports, "readBigUint64", ()=>readBigUint64);
parcelHelpers.export(exports, "readAny", ()=>readAny);
/**
 * T must not be null.
 *
 * @template T
 */ parcelHelpers.export(exports, "RleDecoder", ()=>RleDecoder);
parcelHelpers.export(exports, "IntDiffDecoder", ()=>IntDiffDecoder);
parcelHelpers.export(exports, "RleIntDiffDecoder", ()=>RleIntDiffDecoder);
parcelHelpers.export(exports, "UintOptRleDecoder", ()=>UintOptRleDecoder);
parcelHelpers.export(exports, "IncUintOptRleDecoder", ()=>IncUintOptRleDecoder);
parcelHelpers.export(exports, "IntDiffOptRleDecoder", ()=>IntDiffOptRleDecoder);
parcelHelpers.export(exports, "StringDecoder", ()=>StringDecoder);
var _binaryJs = require("./binary.js");
var _mathJs = require("./math.js");
var _numberJs = require("./number.js");
var _stringJs = require("./string.js");
var _errorJs = require("./error.js");
var _encodingJs = require("./encoding.js");
const errorUnexpectedEndOfArray = _errorJs.create('Unexpected end of array');
const errorIntegerOutOfRange = _errorJs.create('Integer out of Range');
class Decoder {
    /**
   * @param {Uint8Array} uint8Array Binary data to decode
   */ constructor(uint8Array){
        /**
     * Decoding target.
     *
     * @type {Uint8Array}
     */ this.arr = uint8Array;
        /**
     * Current decoding position.
     *
     * @type {number}
     */ this.pos = 0;
    }
}
const createDecoder = (uint8Array)=>new Decoder(uint8Array);
const hasContent = (decoder)=>decoder.pos !== decoder.arr.length;
const clone = (decoder, newPos = decoder.pos)=>{
    const _decoder = createDecoder(decoder.arr);
    _decoder.pos = newPos;
    return _decoder;
};
const readUint8Array = (decoder, len)=>{
    const view = new Uint8Array(decoder.arr.buffer, decoder.pos + decoder.arr.byteOffset, len);
    decoder.pos += len;
    return view;
};
const readVarUint8Array = (decoder)=>readUint8Array(decoder, readVarUint(decoder));
const readTailAsUint8Array = (decoder)=>readUint8Array(decoder, decoder.arr.length - decoder.pos);
const skip8 = (decoder)=>decoder.pos++;
const readUint8 = (decoder)=>decoder.arr[decoder.pos++];
const readUint16 = (decoder)=>{
    const uint = decoder.arr[decoder.pos] + (decoder.arr[decoder.pos + 1] << 8);
    decoder.pos += 2;
    return uint;
};
const readUint32 = (decoder)=>{
    const uint = decoder.arr[decoder.pos] + (decoder.arr[decoder.pos + 1] << 8) + (decoder.arr[decoder.pos + 2] << 16) + (decoder.arr[decoder.pos + 3] << 24) >>> 0;
    decoder.pos += 4;
    return uint;
};
const readUint32BigEndian = (decoder)=>{
    const uint = decoder.arr[decoder.pos + 3] + (decoder.arr[decoder.pos + 2] << 8) + (decoder.arr[decoder.pos + 1] << 16) + (decoder.arr[decoder.pos] << 24) >>> 0;
    decoder.pos += 4;
    return uint;
};
const peekUint8 = (decoder)=>decoder.arr[decoder.pos];
const peekUint16 = (decoder)=>decoder.arr[decoder.pos] + (decoder.arr[decoder.pos + 1] << 8);
const peekUint32 = (decoder)=>decoder.arr[decoder.pos] + (decoder.arr[decoder.pos + 1] << 8) + (decoder.arr[decoder.pos + 2] << 16) + (decoder.arr[decoder.pos + 3] << 24) >>> 0;
const readVarUint = (decoder)=>{
    let num = 0;
    let mult = 1;
    const len = decoder.arr.length;
    while(decoder.pos < len){
        const r = decoder.arr[decoder.pos++];
        // num = num | ((r & binary.BITS7) << len)
        num = num + (r & _binaryJs.BITS7) * mult // shift $r << (7*#iterations) and add it to num
        ;
        mult *= 128 // next iteration, shift 7 "more" to the left
        ;
        if (r < _binaryJs.BIT8) return num;
        /* c8 ignore start */ if (num > _numberJs.MAX_SAFE_INTEGER) throw errorIntegerOutOfRange;
    /* c8 ignore stop */ }
    throw errorUnexpectedEndOfArray;
};
const readVarInt = (decoder)=>{
    let r = decoder.arr[decoder.pos++];
    let num = r & _binaryJs.BITS6;
    let mult = 64;
    const sign = (r & _binaryJs.BIT7) > 0 ? -1 : 1;
    if ((r & _binaryJs.BIT8) === 0) // don't continue reading
    return sign * num;
    const len = decoder.arr.length;
    while(decoder.pos < len){
        r = decoder.arr[decoder.pos++];
        // num = num | ((r & binary.BITS7) << len)
        num = num + (r & _binaryJs.BITS7) * mult;
        mult *= 128;
        if (r < _binaryJs.BIT8) return sign * num;
        /* c8 ignore start */ if (num > _numberJs.MAX_SAFE_INTEGER) throw errorIntegerOutOfRange;
    /* c8 ignore stop */ }
    throw errorUnexpectedEndOfArray;
};
const peekVarUint = (decoder)=>{
    const pos = decoder.pos;
    const s = readVarUint(decoder);
    decoder.pos = pos;
    return s;
};
const peekVarInt = (decoder)=>{
    const pos = decoder.pos;
    const s = readVarInt(decoder);
    decoder.pos = pos;
    return s;
};
const _readVarStringPolyfill = (decoder)=>{
    let remainingLen = readVarUint(decoder);
    if (remainingLen === 0) return '';
    else {
        let encodedString = String.fromCodePoint(readUint8(decoder)) // remember to decrease remainingLen
        ;
        if (--remainingLen < 100) while(remainingLen--)encodedString += String.fromCodePoint(readUint8(decoder));
        else while(remainingLen > 0){
            const nextLen = remainingLen < 10000 ? remainingLen : 10000;
            // this is dangerous, we create a fresh array view from the existing buffer
            const bytes = decoder.arr.subarray(decoder.pos, decoder.pos + nextLen);
            decoder.pos += nextLen;
            // Starting with ES5.1 we can supply a generic array-like object as arguments
            encodedString += String.fromCodePoint.apply(null, /** @type {any} */ bytes);
            remainingLen -= nextLen;
        }
        return decodeURIComponent(escape(encodedString));
    }
};
const _readVarStringNative = (decoder)=>/** @type any */ _stringJs.utf8TextDecoder.decode(readVarUint8Array(decoder));
const readVarString = _stringJs.utf8TextDecoder ? _readVarStringNative : _readVarStringPolyfill;
const readTerminatedUint8Array = (decoder)=>{
    const encoder = _encodingJs.createEncoder();
    let b;
    while(true){
        b = readUint8(decoder);
        if (b === 0) return _encodingJs.toUint8Array(encoder);
        if (b === 1) b = readUint8(decoder);
        _encodingJs.write(encoder, b);
    }
};
const readTerminatedString = (decoder)=>_stringJs.decodeUtf8(readTerminatedUint8Array(decoder));
const peekVarString = (decoder)=>{
    const pos = decoder.pos;
    const s = readVarString(decoder);
    decoder.pos = pos;
    return s;
};
const readFromDataView = (decoder, len)=>{
    const dv = new DataView(decoder.arr.buffer, decoder.arr.byteOffset + decoder.pos, len);
    decoder.pos += len;
    return dv;
};
const readFloat32 = (decoder)=>readFromDataView(decoder, 4).getFloat32(0, false);
const readFloat64 = (decoder)=>readFromDataView(decoder, 8).getFloat64(0, false);
const readBigInt64 = (decoder)=>/** @type {any} */ readFromDataView(decoder, 8).getBigInt64(0, false);
const readBigUint64 = (decoder)=>/** @type {any} */ readFromDataView(decoder, 8).getBigUint64(0, false);
/**
 * @type {Array<function(Decoder):any>}
 */ const readAnyLookupTable = [
    (decoder)=>undefined,
    (decoder)=>null,
    readVarInt,
    readFloat32,
    readFloat64,
    readBigInt64,
    (decoder)=>false,
    (decoder)=>true,
    readVarString,
    (decoder)=>{
        const len = readVarUint(decoder);
        /**
     * @type {Object<string,any>}
     */ const obj = {};
        for(let i = 0; i < len; i++){
            const key = readVarString(decoder);
            obj[key] = readAny(decoder);
        }
        return obj;
    },
    (decoder)=>{
        const len = readVarUint(decoder);
        const arr = [];
        for(let i = 0; i < len; i++)arr.push(readAny(decoder));
        return arr;
    },
    readVarUint8Array // CASE 116: Uint8Array
];
const readAny = (decoder)=>readAnyLookupTable[127 - readUint8(decoder)](decoder);
class RleDecoder extends Decoder {
    /**
   * @param {Uint8Array} uint8Array
   * @param {function(Decoder):T} reader
   */ constructor(uint8Array, reader){
        super(uint8Array);
        /**
     * The reader
     */ this.reader = reader;
        /**
     * Current state
     * @type {T|null}
     */ this.s = null;
        this.count = 0;
    }
    read() {
        if (this.count === 0) {
            this.s = this.reader(this);
            if (hasContent(this)) this.count = readVarUint(this) + 1 // see encoder implementation for the reason why this is incremented
            ;
            else this.count = -1 // read the current value forever
            ;
        }
        this.count--;
        return /** @type {T} */ this.s;
    }
}
class IntDiffDecoder extends Decoder {
    /**
   * @param {Uint8Array} uint8Array
   * @param {number} start
   */ constructor(uint8Array, start){
        super(uint8Array);
        /**
     * Current state
     * @type {number}
     */ this.s = start;
    }
    /**
   * @return {number}
   */ read() {
        this.s += readVarInt(this);
        return this.s;
    }
}
class RleIntDiffDecoder extends Decoder {
    /**
   * @param {Uint8Array} uint8Array
   * @param {number} start
   */ constructor(uint8Array, start){
        super(uint8Array);
        /**
     * Current state
     * @type {number}
     */ this.s = start;
        this.count = 0;
    }
    /**
   * @return {number}
   */ read() {
        if (this.count === 0) {
            this.s += readVarInt(this);
            if (hasContent(this)) this.count = readVarUint(this) + 1 // see encoder implementation for the reason why this is incremented
            ;
            else this.count = -1 // read the current value forever
            ;
        }
        this.count--;
        return /** @type {number} */ this.s;
    }
}
class UintOptRleDecoder extends Decoder {
    /**
   * @param {Uint8Array} uint8Array
   */ constructor(uint8Array){
        super(uint8Array);
        /**
     * @type {number}
     */ this.s = 0;
        this.count = 0;
    }
    read() {
        if (this.count === 0) {
            this.s = readVarInt(this);
            // if the sign is negative, we read the count too, otherwise count is 1
            const isNegative = _mathJs.isNegativeZero(this.s);
            this.count = 1;
            if (isNegative) {
                this.s = -this.s;
                this.count = readVarUint(this) + 2;
            }
        }
        this.count--;
        return /** @type {number} */ this.s;
    }
}
class IncUintOptRleDecoder extends Decoder {
    /**
   * @param {Uint8Array} uint8Array
   */ constructor(uint8Array){
        super(uint8Array);
        /**
     * @type {number}
     */ this.s = 0;
        this.count = 0;
    }
    read() {
        if (this.count === 0) {
            this.s = readVarInt(this);
            // if the sign is negative, we read the count too, otherwise count is 1
            const isNegative = _mathJs.isNegativeZero(this.s);
            this.count = 1;
            if (isNegative) {
                this.s = -this.s;
                this.count = readVarUint(this) + 2;
            }
        }
        this.count--;
        return /** @type {number} */ this.s++;
    }
}
class IntDiffOptRleDecoder extends Decoder {
    /**
   * @param {Uint8Array} uint8Array
   */ constructor(uint8Array){
        super(uint8Array);
        /**
     * @type {number}
     */ this.s = 0;
        this.count = 0;
        this.diff = 0;
    }
    /**
   * @return {number}
   */ read() {
        if (this.count === 0) {
            const diff = readVarInt(this);
            // if the first bit is set, we read more data
            const hasCount = diff & 1;
            this.diff = _mathJs.floor(diff / 2) // shift >> 1
            ;
            this.count = 1;
            if (hasCount) this.count = readVarUint(this) + 2;
        }
        this.s += this.diff;
        this.count--;
        return this.s;
    }
}
class StringDecoder {
    /**
   * @param {Uint8Array} uint8Array
   */ constructor(uint8Array){
        this.decoder = new UintOptRleDecoder(uint8Array);
        this.str = readVarString(this.decoder);
        /**
     * @type {number}
     */ this.spos = 0;
    }
    /**
   * @return {string}
   */ read() {
        const end = this.spos + this.decoder.read();
        const res = this.str.slice(this.spos, end);
        this.spos = end;
        return res;
    }
}

},{"./binary.js":"aQiGq","./math.js":"6VZDY","./number.js":"aEkdy","./string.js":"72Jcz","./error.js":"bnaZe","./encoding.js":"jDJaE","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"bnaZe":[function(require,module,exports,__globalThis) {
/**
 * Error helpers.
 *
 * @module error
 */ /**
 * @param {string} s
 * @return {Error}
 */ /* c8 ignore next */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "create", ()=>create);
parcelHelpers.export(exports, "methodUnimplemented", ()=>methodUnimplemented);
parcelHelpers.export(exports, "unexpectedCase", ()=>unexpectedCase);
const create = (s)=>new Error(s);
const methodUnimplemented = ()=>{
    throw create('Method unimplemented');
};
const unexpectedCase = ()=>{
    throw create('Unexpected case');
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"7vLdH":[function(require,module,exports,__globalThis) {
/**
 * Isomorphic module for true random numbers / buffers / uuids.
 *
 * Attention: falls back to Math.random if the browser does not support crypto.
 *
 * @module random
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "rand", ()=>rand);
parcelHelpers.export(exports, "uint32", ()=>uint32);
parcelHelpers.export(exports, "uint53", ()=>uint53);
parcelHelpers.export(exports, "oneOf", ()=>oneOf);
parcelHelpers.export(exports, "uuidv4", ()=>uuidv4);
var _mathJs = require("./math.js");
var _binaryJs = require("./binary.js");
var _webcrypto = require("lib0/webcrypto");
const rand = Math.random;
const uint32 = ()=>(0, _webcrypto.getRandomValues)(new Uint32Array(1))[0];
const uint53 = ()=>{
    const arr = (0, _webcrypto.getRandomValues)(new Uint32Array(8));
    return (arr[0] & _binaryJs.BITS21) * (_binaryJs.BITS32 + 1) + (arr[1] >>> 0);
};
const oneOf = (arr)=>arr[_mathJs.floor(rand() * arr.length)];
// @ts-ignore
const uuidv4Template = "10000000-1000-4000-8000-100000000000";
const uuidv4 = ()=>uuidv4Template.replace(/[018]/g, /** @param {number} c */ (c)=>(c ^ uint32() & 15 >> c / 4).toString(16));

},{"./math.js":"6VZDY","./binary.js":"aQiGq","lib0/webcrypto":"6rMIF","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"6rMIF":[function(require,module,exports,__globalThis) {
/* eslint-env browser */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "subtle", ()=>subtle);
parcelHelpers.export(exports, "getRandomValues", ()=>getRandomValues);
const subtle = crypto.subtle;
const getRandomValues = crypto.getRandomValues.bind(crypto);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"2kLSN":[function(require,module,exports,__globalThis) {
/**
 * Utility helpers to work with promises.
 *
 * @module promise
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "create", ()=>create);
parcelHelpers.export(exports, "createEmpty", ()=>createEmpty);
parcelHelpers.export(exports, "all", ()=>all);
parcelHelpers.export(exports, "reject", ()=>reject);
parcelHelpers.export(exports, "resolve", ()=>resolve);
parcelHelpers.export(exports, "resolveWith", ()=>resolveWith);
parcelHelpers.export(exports, "until", ()=>until);
parcelHelpers.export(exports, "untilAsync", ()=>untilAsync);
parcelHelpers.export(exports, "wait", ()=>wait);
parcelHelpers.export(exports, "isPromise", ()=>isPromise);
var _timeJs = require("./time.js");
const create = (f)=>/** @type {Promise<T>} */ new Promise(f);
const createEmpty = (f)=>new Promise(f);
const all = Promise.all.bind(Promise);
const reject = (reason)=>Promise.reject(reason);
const resolve = (res)=>Promise.resolve(res);
const resolveWith = (res)=>Promise.resolve(res);
const until = (timeout, check, intervalResolution = 10)=>create((resolve, reject)=>{
        const startTime = _timeJs.getUnixTime();
        const hasTimeout = timeout > 0;
        const untilInterval = ()=>{
            if (check()) {
                clearInterval(intervalHandle);
                resolve();
            } else if (hasTimeout) /* c8 ignore else */ {
                if (_timeJs.getUnixTime() - startTime > timeout) {
                    clearInterval(intervalHandle);
                    reject(new Error('Timeout'));
                }
            }
        };
        const intervalHandle = setInterval(untilInterval, intervalResolution);
    });
const untilAsync = async (check, timeout = 0, intervalResolution = 10)=>{
    const startTime = _timeJs.getUnixTime();
    const noTimeout = timeout <= 0;
    // eslint-disable-next-line no-unmodified-loop-condition
    while(noTimeout || _timeJs.getUnixTime() - startTime <= timeout){
        if (await check()) return;
        await wait(intervalResolution);
    }
    throw new Error('Timeout');
};
const wait = (timeout)=>create((resolve, _reject)=>setTimeout(resolve, timeout));
const isPromise = (p)=>p instanceof Promise || p && p.then && p.catch && p.finally;

},{"./time.js":"f2yq7","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"f2yq7":[function(require,module,exports,__globalThis) {
/**
 * Utility module to work with time.
 *
 * @module time
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getDate", ()=>getDate);
parcelHelpers.export(exports, "getUnixTime", ()=>getUnixTime);
parcelHelpers.export(exports, "humanizeDuration", ()=>humanizeDuration);
var _metricJs = require("./metric.js");
var _mathJs = require("./math.js");
const getDate = ()=>new Date();
const getUnixTime = Date.now;
const humanizeDuration = (d)=>{
    if (d < 60000) {
        const p = _metricJs.prefix(d, -1);
        return _mathJs.round(p.n * 100) / 100 + p.prefix + 's';
    }
    d = _mathJs.floor(d / 1000);
    const seconds = d % 60;
    const minutes = _mathJs.floor(d / 60) % 60;
    const hours = _mathJs.floor(d / 3600) % 24;
    const days = _mathJs.floor(d / 86400);
    if (days > 0) return days + 'd' + (hours > 0 || minutes > 30 ? ' ' + (minutes > 30 ? hours + 1 : hours) + 'h' : '');
    if (hours > 0) /* c8 ignore next */ return hours + 'h' + (minutes > 0 || seconds > 30 ? ' ' + (seconds > 30 ? minutes + 1 : minutes) + 'min' : '');
    return minutes + 'min' + (seconds > 0 ? ' ' + seconds + 's' : '');
};

},{"./metric.js":"bUs9U","./math.js":"6VZDY","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"bUs9U":[function(require,module,exports,__globalThis) {
/**
 * Utility module to convert metric values.
 *
 * @module metric
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "yotta", ()=>yotta);
parcelHelpers.export(exports, "zetta", ()=>zetta);
parcelHelpers.export(exports, "exa", ()=>exa);
parcelHelpers.export(exports, "peta", ()=>peta);
parcelHelpers.export(exports, "tera", ()=>tera);
parcelHelpers.export(exports, "giga", ()=>giga);
parcelHelpers.export(exports, "mega", ()=>mega);
parcelHelpers.export(exports, "kilo", ()=>kilo);
parcelHelpers.export(exports, "hecto", ()=>hecto);
parcelHelpers.export(exports, "deca", ()=>deca);
parcelHelpers.export(exports, "deci", ()=>deci);
parcelHelpers.export(exports, "centi", ()=>centi);
parcelHelpers.export(exports, "milli", ()=>milli);
parcelHelpers.export(exports, "micro", ()=>micro);
parcelHelpers.export(exports, "nano", ()=>nano);
parcelHelpers.export(exports, "pico", ()=>pico);
parcelHelpers.export(exports, "femto", ()=>femto);
parcelHelpers.export(exports, "atto", ()=>atto);
parcelHelpers.export(exports, "zepto", ()=>zepto);
parcelHelpers.export(exports, "yocto", ()=>yocto);
parcelHelpers.export(exports, "prefix", ()=>prefix);
var _mathJs = require("./math.js");
const yotta = 1e24;
const zetta = 1e21;
const exa = 1e18;
const peta = 1e15;
const tera = 1e12;
const giga = 1e9;
const mega = 1e6;
const kilo = 1e3;
const hecto = 1e2;
const deca = 10;
const deci = 0.1;
const centi = 0.01;
const milli = 1e-3;
const micro = 1e-6;
const nano = 1e-9;
const pico = 1e-12;
const femto = 1e-15;
const atto = 1e-18;
const zepto = 1e-21;
const yocto = 1e-24;
const prefixUp = [
    '',
    'k',
    'M',
    'G',
    'T',
    'P',
    'E',
    'Z',
    'Y'
];
const prefixDown = [
    '',
    'm',
    "\u03BC",
    'n',
    'p',
    'f',
    'a',
    'z',
    'y'
];
const prefix = (n, baseMultiplier = 0)=>{
    const nPow = n === 0 ? 0 : _mathJs.log10(n);
    let mult = 0;
    while(nPow < mult * 3 && baseMultiplier > -8){
        baseMultiplier--;
        mult--;
    }
    while(nPow >= 3 + mult * 3 && baseMultiplier < 8){
        baseMultiplier++;
        mult++;
    }
    const prefix = baseMultiplier < 0 ? prefixDown[-baseMultiplier] : prefixUp[baseMultiplier];
    return {
        n: _mathJs.round((mult > 0 ? n / _mathJs.exp10(mult * 3) : n * _mathJs.exp10(mult * -3)) * 1e12) / 1e12,
        prefix
    };
};

},{"./math.js":"6VZDY","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"kZd6i":[function(require,module,exports,__globalThis) {
/**
 * Utility functions to work with buffers (Uint8Array).
 *
 * @module buffer
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createUint8ArrayFromLen", ()=>createUint8ArrayFromLen);
parcelHelpers.export(exports, "createUint8ArrayViewFromArrayBuffer", ()=>createUint8ArrayViewFromArrayBuffer);
parcelHelpers.export(exports, "createUint8ArrayFromArrayBuffer", ()=>createUint8ArrayFromArrayBuffer);
parcelHelpers.export(exports, "toBase64", ()=>toBase64);
parcelHelpers.export(exports, "fromBase64", ()=>fromBase64);
parcelHelpers.export(exports, "toBase64UrlEncoded", ()=>toBase64UrlEncoded);
parcelHelpers.export(exports, "fromBase64UrlEncoded", ()=>fromBase64UrlEncoded);
parcelHelpers.export(exports, "toHexString", ()=>toHexString);
parcelHelpers.export(exports, "fromHexString", ()=>fromHexString);
parcelHelpers.export(exports, "copyUint8Array", ()=>copyUint8Array);
parcelHelpers.export(exports, "encodeAny", ()=>encodeAny);
parcelHelpers.export(exports, "decodeAny", ()=>decodeAny);
parcelHelpers.export(exports, "shiftNBitsLeft", ()=>shiftNBitsLeft);
var _stringJs = require("./string.js");
var _environmentJs = require("./environment.js");
var _arrayJs = require("./array.js");
var _mathJs = require("./math.js");
var _encodingJs = require("./encoding.js");
var _decodingJs = require("./decoding.js");
var Buffer = require("6475e0e5014d10a8").Buffer;
const createUint8ArrayFromLen = (len)=>new Uint8Array(len);
const createUint8ArrayViewFromArrayBuffer = (buffer, byteOffset, length)=>new Uint8Array(buffer, byteOffset, length);
const createUint8ArrayFromArrayBuffer = (buffer)=>new Uint8Array(buffer);
/* c8 ignore start */ /**
 * @param {Uint8Array} bytes
 * @return {string}
 */ const toBase64Browser = (bytes)=>{
    let s = '';
    for(let i = 0; i < bytes.byteLength; i++)s += _stringJs.fromCharCode(bytes[i]);
    // eslint-disable-next-line no-undef
    return btoa(s);
};
/* c8 ignore stop */ /**
 * @param {Uint8Array} bytes
 * @return {string}
 */ const toBase64Node = (bytes)=>Buffer.from(bytes.buffer, bytes.byteOffset, bytes.byteLength).toString('base64');
/* c8 ignore start */ /**
 * @param {string} s
 * @return {Uint8Array}
 */ const fromBase64Browser = (s)=>{
    // eslint-disable-next-line no-undef
    const a = atob(s);
    const bytes = createUint8ArrayFromLen(a.length);
    for(let i = 0; i < a.length; i++)bytes[i] = a.charCodeAt(i);
    return bytes;
};
/* c8 ignore stop */ /**
 * @param {string} s
 */ const fromBase64Node = (s)=>{
    const buf = Buffer.from(s, 'base64');
    return createUint8ArrayViewFromArrayBuffer(buf.buffer, buf.byteOffset, buf.byteLength);
};
const toBase64 = _environmentJs.isBrowser ? toBase64Browser : toBase64Node;
const fromBase64 = _environmentJs.isBrowser ? fromBase64Browser : fromBase64Node;
const toBase64UrlEncoded = (buf)=>toBase64(buf).replaceAll('+', '-').replaceAll('/', '_').replaceAll('=', '');
const fromBase64UrlEncoded = (base64)=>fromBase64(base64.replaceAll('-', '+').replaceAll('_', '/'));
const toHexString = (buf)=>_arrayJs.map(buf, (b)=>b.toString(16).padStart(2, '0')).join('');
const fromHexString = (hex)=>{
    const hlen = hex.length;
    const buf = new Uint8Array(_mathJs.ceil(hlen / 2));
    for(let i = 0; i < hlen; i += 2)buf[buf.length - i / 2 - 1] = Number.parseInt(hex.slice(hlen - i - 2, hlen - i), 16);
    return buf;
};
const copyUint8Array = (uint8Array)=>{
    const newBuf = createUint8ArrayFromLen(uint8Array.byteLength);
    newBuf.set(uint8Array);
    return newBuf;
};
const encodeAny = (data)=>_encodingJs.encode((encoder)=>_encodingJs.writeAny(encoder, data));
const decodeAny = (buf)=>_decodingJs.readAny(_decodingJs.createDecoder(buf));
const shiftNBitsLeft = (bs, N)=>{
    if (N === 0) return bs;
    bs = new Uint8Array(bs);
    bs[0] <<= N;
    for(let i = 1; i < bs.length; i++){
        bs[i - 1] |= bs[i] >>> 8 - N;
        bs[i] <<= N;
    }
    return bs;
};

},{"6475e0e5014d10a8":"bCaf4","./string.js":"72Jcz","./environment.js":"ctaVk","./array.js":"izwxw","./math.js":"6VZDY","./encoding.js":"jDJaE","./decoding.js":"hCqHb","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"bCaf4":[function(require,module,exports,__globalThis) {
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */ /* eslint-disable no-proto */ 'use strict';
var base64 = require("9c62938f1dccc73c");
var ieee754 = require("aceacb6a4531a9d2");
var customInspectSymbol = typeof Symbol === 'function' && typeof Symbol['for'] === 'function' // eslint-disable-line dot-notation
 ? Symbol['for']('nodejs.util.inspect.custom') // eslint-disable-line dot-notation
 : null;
exports.Buffer = Buffer;
exports.SlowBuffer = SlowBuffer;
exports.INSPECT_MAX_BYTES = 50;
var K_MAX_LENGTH = 0x7fffffff;
exports.kMaxLength = K_MAX_LENGTH;
/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Print warning and recommend using `buffer` v4.x which has an Object
 *               implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * We report that the browser does not support typed arrays if the are not subclassable
 * using __proto__. Firefox 4-29 lacks support for adding new properties to `Uint8Array`
 * (See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438). IE 10 lacks support
 * for __proto__ and has a buggy typed array implementation.
 */ Buffer.TYPED_ARRAY_SUPPORT = typedArraySupport();
if (!Buffer.TYPED_ARRAY_SUPPORT && typeof console !== 'undefined' && typeof console.error === 'function') console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");
function typedArraySupport() {
    // Can typed array instances can be augmented?
    try {
        var arr = new Uint8Array(1);
        var proto = {
            foo: function() {
                return 42;
            }
        };
        Object.setPrototypeOf(proto, Uint8Array.prototype);
        Object.setPrototypeOf(arr, proto);
        return arr.foo() === 42;
    } catch (e) {
        return false;
    }
}
Object.defineProperty(Buffer.prototype, 'parent', {
    enumerable: true,
    get: function() {
        if (!Buffer.isBuffer(this)) return undefined;
        return this.buffer;
    }
});
Object.defineProperty(Buffer.prototype, 'offset', {
    enumerable: true,
    get: function() {
        if (!Buffer.isBuffer(this)) return undefined;
        return this.byteOffset;
    }
});
function createBuffer(length) {
    if (length > K_MAX_LENGTH) throw new RangeError('The value "' + length + '" is invalid for option "size"');
    // Return an augmented `Uint8Array` instance
    var buf = new Uint8Array(length);
    Object.setPrototypeOf(buf, Buffer.prototype);
    return buf;
}
/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */ function Buffer(arg, encodingOrOffset, length) {
    // Common case.
    if (typeof arg === 'number') {
        if (typeof encodingOrOffset === 'string') throw new TypeError('The "string" argument must be of type string. Received type number');
        return allocUnsafe(arg);
    }
    return from(arg, encodingOrOffset, length);
}
Buffer.poolSize = 8192 // not used by this implementation
;
function from(value, encodingOrOffset, length) {
    if (typeof value === 'string') return fromString(value, encodingOrOffset);
    if (ArrayBuffer.isView(value)) return fromArrayView(value);
    if (value == null) throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof value);
    if (isInstance(value, ArrayBuffer) || value && isInstance(value.buffer, ArrayBuffer)) return fromArrayBuffer(value, encodingOrOffset, length);
    if (typeof SharedArrayBuffer !== 'undefined' && (isInstance(value, SharedArrayBuffer) || value && isInstance(value.buffer, SharedArrayBuffer))) return fromArrayBuffer(value, encodingOrOffset, length);
    if (typeof value === 'number') throw new TypeError('The "value" argument must not be of type number. Received type number');
    var valueOf = value.valueOf && value.valueOf();
    if (valueOf != null && valueOf !== value) return Buffer.from(valueOf, encodingOrOffset, length);
    var b = fromObject(value);
    if (b) return b;
    if (typeof Symbol !== 'undefined' && Symbol.toPrimitive != null && typeof value[Symbol.toPrimitive] === 'function') return Buffer.from(value[Symbol.toPrimitive]('string'), encodingOrOffset, length);
    throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof value);
}
/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/ Buffer.from = function(value, encodingOrOffset, length) {
    return from(value, encodingOrOffset, length);
};
// Note: Change prototype *after* Buffer.from is defined to workaround Chrome bug:
// https://github.com/feross/buffer/pull/148
Object.setPrototypeOf(Buffer.prototype, Uint8Array.prototype);
Object.setPrototypeOf(Buffer, Uint8Array);
function assertSize(size) {
    if (typeof size !== 'number') throw new TypeError('"size" argument must be of type number');
    else if (size < 0) throw new RangeError('The value "' + size + '" is invalid for option "size"');
}
function alloc(size, fill, encoding) {
    assertSize(size);
    if (size <= 0) return createBuffer(size);
    if (fill !== undefined) // Only pay attention to encoding if it's a string. This
    // prevents accidentally sending in a number that would
    // be interpreted as a start offset.
    return typeof encoding === 'string' ? createBuffer(size).fill(fill, encoding) : createBuffer(size).fill(fill);
    return createBuffer(size);
}
/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/ Buffer.alloc = function(size, fill, encoding) {
    return alloc(size, fill, encoding);
};
function allocUnsafe(size) {
    assertSize(size);
    return createBuffer(size < 0 ? 0 : checked(size) | 0);
}
/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */ Buffer.allocUnsafe = function(size) {
    return allocUnsafe(size);
};
/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */ Buffer.allocUnsafeSlow = function(size) {
    return allocUnsafe(size);
};
function fromString(string, encoding) {
    if (typeof encoding !== 'string' || encoding === '') encoding = 'utf8';
    if (!Buffer.isEncoding(encoding)) throw new TypeError('Unknown encoding: ' + encoding);
    var length = byteLength(string, encoding) | 0;
    var buf = createBuffer(length);
    var actual = buf.write(string, encoding);
    if (actual !== length) // Writing a hex string, for example, that contains invalid characters will
    // cause everything after the first invalid character to be ignored. (e.g.
    // 'abxxcd' will be treated as 'ab')
    buf = buf.slice(0, actual);
    return buf;
}
function fromArrayLike(array) {
    var length = array.length < 0 ? 0 : checked(array.length) | 0;
    var buf = createBuffer(length);
    for(var i = 0; i < length; i += 1)buf[i] = array[i] & 255;
    return buf;
}
function fromArrayView(arrayView) {
    if (isInstance(arrayView, Uint8Array)) {
        var copy = new Uint8Array(arrayView);
        return fromArrayBuffer(copy.buffer, copy.byteOffset, copy.byteLength);
    }
    return fromArrayLike(arrayView);
}
function fromArrayBuffer(array, byteOffset, length) {
    if (byteOffset < 0 || array.byteLength < byteOffset) throw new RangeError('"offset" is outside of buffer bounds');
    if (array.byteLength < byteOffset + (length || 0)) throw new RangeError('"length" is outside of buffer bounds');
    var buf;
    if (byteOffset === undefined && length === undefined) buf = new Uint8Array(array);
    else if (length === undefined) buf = new Uint8Array(array, byteOffset);
    else buf = new Uint8Array(array, byteOffset, length);
    // Return an augmented `Uint8Array` instance
    Object.setPrototypeOf(buf, Buffer.prototype);
    return buf;
}
function fromObject(obj) {
    if (Buffer.isBuffer(obj)) {
        var len = checked(obj.length) | 0;
        var buf = createBuffer(len);
        if (buf.length === 0) return buf;
        obj.copy(buf, 0, 0, len);
        return buf;
    }
    if (obj.length !== undefined) {
        if (typeof obj.length !== 'number' || numberIsNaN(obj.length)) return createBuffer(0);
        return fromArrayLike(obj);
    }
    if (obj.type === 'Buffer' && Array.isArray(obj.data)) return fromArrayLike(obj.data);
}
function checked(length) {
    // Note: cannot use `length < K_MAX_LENGTH` here because that fails when
    // length is NaN (which is otherwise coerced to zero.)
    if (length >= K_MAX_LENGTH) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + K_MAX_LENGTH.toString(16) + ' bytes');
    return length | 0;
}
function SlowBuffer(length) {
    if (+length != length) length = 0;
    return Buffer.alloc(+length);
}
Buffer.isBuffer = function isBuffer(b) {
    return b != null && b._isBuffer === true && b !== Buffer.prototype // so Buffer.isBuffer(Buffer.prototype) will be false
    ;
};
Buffer.compare = function compare(a, b) {
    if (isInstance(a, Uint8Array)) a = Buffer.from(a, a.offset, a.byteLength);
    if (isInstance(b, Uint8Array)) b = Buffer.from(b, b.offset, b.byteLength);
    if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
    if (a === b) return 0;
    var x = a.length;
    var y = b.length;
    for(var i = 0, len = Math.min(x, y); i < len; ++i)if (a[i] !== b[i]) {
        x = a[i];
        y = b[i];
        break;
    }
    if (x < y) return -1;
    if (y < x) return 1;
    return 0;
};
Buffer.isEncoding = function isEncoding(encoding) {
    switch(String(encoding).toLowerCase()){
        case 'hex':
        case 'utf8':
        case 'utf-8':
        case 'ascii':
        case 'latin1':
        case 'binary':
        case 'base64':
        case 'ucs2':
        case 'ucs-2':
        case 'utf16le':
        case 'utf-16le':
            return true;
        default:
            return false;
    }
};
Buffer.concat = function concat(list, length) {
    if (!Array.isArray(list)) throw new TypeError('"list" argument must be an Array of Buffers');
    if (list.length === 0) return Buffer.alloc(0);
    var i;
    if (length === undefined) {
        length = 0;
        for(i = 0; i < list.length; ++i)length += list[i].length;
    }
    var buffer = Buffer.allocUnsafe(length);
    var pos = 0;
    for(i = 0; i < list.length; ++i){
        var buf = list[i];
        if (isInstance(buf, Uint8Array)) {
            if (pos + buf.length > buffer.length) Buffer.from(buf).copy(buffer, pos);
            else Uint8Array.prototype.set.call(buffer, buf, pos);
        } else if (!Buffer.isBuffer(buf)) throw new TypeError('"list" argument must be an Array of Buffers');
        else buf.copy(buffer, pos);
        pos += buf.length;
    }
    return buffer;
};
function byteLength(string, encoding) {
    if (Buffer.isBuffer(string)) return string.length;
    if (ArrayBuffer.isView(string) || isInstance(string, ArrayBuffer)) return string.byteLength;
    if (typeof string !== 'string') throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof string);
    var len = string.length;
    var mustMatch = arguments.length > 2 && arguments[2] === true;
    if (!mustMatch && len === 0) return 0;
    // Use a for loop to avoid recursion
    var loweredCase = false;
    for(;;)switch(encoding){
        case 'ascii':
        case 'latin1':
        case 'binary':
            return len;
        case 'utf8':
        case 'utf-8':
            return utf8ToBytes(string).length;
        case 'ucs2':
        case 'ucs-2':
        case 'utf16le':
        case 'utf-16le':
            return len * 2;
        case 'hex':
            return len >>> 1;
        case 'base64':
            return base64ToBytes(string).length;
        default:
            if (loweredCase) return mustMatch ? -1 : utf8ToBytes(string).length // assume utf8
            ;
            encoding = ('' + encoding).toLowerCase();
            loweredCase = true;
    }
}
Buffer.byteLength = byteLength;
function slowToString(encoding, start, end) {
    var loweredCase = false;
    // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
    // property of a typed array.
    // This behaves neither like String nor Uint8Array in that we set start/end
    // to their upper/lower bounds if the value passed is out of range.
    // undefined is handled specially as per ECMA-262 6th Edition,
    // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
    if (start === undefined || start < 0) start = 0;
    // Return early if start > this.length. Done here to prevent potential uint32
    // coercion fail below.
    if (start > this.length) return '';
    if (end === undefined || end > this.length) end = this.length;
    if (end <= 0) return '';
    // Force coercion to uint32. This will also coerce falsey/NaN values to 0.
    end >>>= 0;
    start >>>= 0;
    if (end <= start) return '';
    if (!encoding) encoding = 'utf8';
    while(true)switch(encoding){
        case 'hex':
            return hexSlice(this, start, end);
        case 'utf8':
        case 'utf-8':
            return utf8Slice(this, start, end);
        case 'ascii':
            return asciiSlice(this, start, end);
        case 'latin1':
        case 'binary':
            return latin1Slice(this, start, end);
        case 'base64':
            return base64Slice(this, start, end);
        case 'ucs2':
        case 'ucs-2':
        case 'utf16le':
        case 'utf-16le':
            return utf16leSlice(this, start, end);
        default:
            if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding);
            encoding = (encoding + '').toLowerCase();
            loweredCase = true;
    }
}
// This property is used by `Buffer.isBuffer` (and the `is-buffer` npm package)
// to detect a Buffer instance. It's not possible to use `instanceof Buffer`
// reliably in a browserify context because there could be multiple different
// copies of the 'buffer' package in use. This method works even for Buffer
// instances that were created from another copy of the `buffer` package.
// See: https://github.com/feross/buffer/issues/154
Buffer.prototype._isBuffer = true;
function swap(b, n, m) {
    var i = b[n];
    b[n] = b[m];
    b[m] = i;
}
Buffer.prototype.swap16 = function swap16() {
    var len = this.length;
    if (len % 2 !== 0) throw new RangeError('Buffer size must be a multiple of 16-bits');
    for(var i = 0; i < len; i += 2)swap(this, i, i + 1);
    return this;
};
Buffer.prototype.swap32 = function swap32() {
    var len = this.length;
    if (len % 4 !== 0) throw new RangeError('Buffer size must be a multiple of 32-bits');
    for(var i = 0; i < len; i += 4){
        swap(this, i, i + 3);
        swap(this, i + 1, i + 2);
    }
    return this;
};
Buffer.prototype.swap64 = function swap64() {
    var len = this.length;
    if (len % 8 !== 0) throw new RangeError('Buffer size must be a multiple of 64-bits');
    for(var i = 0; i < len; i += 8){
        swap(this, i, i + 7);
        swap(this, i + 1, i + 6);
        swap(this, i + 2, i + 5);
        swap(this, i + 3, i + 4);
    }
    return this;
};
Buffer.prototype.toString = function toString() {
    var length = this.length;
    if (length === 0) return '';
    if (arguments.length === 0) return utf8Slice(this, 0, length);
    return slowToString.apply(this, arguments);
};
Buffer.prototype.toLocaleString = Buffer.prototype.toString;
Buffer.prototype.equals = function equals(b) {
    if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer');
    if (this === b) return true;
    return Buffer.compare(this, b) === 0;
};
Buffer.prototype.inspect = function inspect() {
    var str = '';
    var max = exports.INSPECT_MAX_BYTES;
    str = this.toString('hex', 0, max).replace(/(.{2})/g, '$1 ').trim();
    if (this.length > max) str += ' ... ';
    return '<Buffer ' + str + '>';
};
if (customInspectSymbol) Buffer.prototype[customInspectSymbol] = Buffer.prototype.inspect;
Buffer.prototype.compare = function compare(target, start, end, thisStart, thisEnd) {
    if (isInstance(target, Uint8Array)) target = Buffer.from(target, target.offset, target.byteLength);
    if (!Buffer.isBuffer(target)) throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof target);
    if (start === undefined) start = 0;
    if (end === undefined) end = target ? target.length : 0;
    if (thisStart === undefined) thisStart = 0;
    if (thisEnd === undefined) thisEnd = this.length;
    if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) throw new RangeError('out of range index');
    if (thisStart >= thisEnd && start >= end) return 0;
    if (thisStart >= thisEnd) return -1;
    if (start >= end) return 1;
    start >>>= 0;
    end >>>= 0;
    thisStart >>>= 0;
    thisEnd >>>= 0;
    if (this === target) return 0;
    var x = thisEnd - thisStart;
    var y = end - start;
    var len = Math.min(x, y);
    var thisCopy = this.slice(thisStart, thisEnd);
    var targetCopy = target.slice(start, end);
    for(var i = 0; i < len; ++i)if (thisCopy[i] !== targetCopy[i]) {
        x = thisCopy[i];
        y = targetCopy[i];
        break;
    }
    if (x < y) return -1;
    if (y < x) return 1;
    return 0;
};
// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function bidirectionalIndexOf(buffer, val, byteOffset, encoding, dir) {
    // Empty buffer means no match
    if (buffer.length === 0) return -1;
    // Normalize byteOffset
    if (typeof byteOffset === 'string') {
        encoding = byteOffset;
        byteOffset = 0;
    } else if (byteOffset > 0x7fffffff) byteOffset = 0x7fffffff;
    else if (byteOffset < -2147483648) byteOffset = -2147483648;
    byteOffset = +byteOffset // Coerce to Number.
    ;
    if (numberIsNaN(byteOffset)) // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
    byteOffset = dir ? 0 : buffer.length - 1;
    // Normalize byteOffset: negative offsets start from the end of the buffer
    if (byteOffset < 0) byteOffset = buffer.length + byteOffset;
    if (byteOffset >= buffer.length) {
        if (dir) return -1;
        else byteOffset = buffer.length - 1;
    } else if (byteOffset < 0) {
        if (dir) byteOffset = 0;
        else return -1;
    }
    // Normalize val
    if (typeof val === 'string') val = Buffer.from(val, encoding);
    // Finally, search either indexOf (if dir is true) or lastIndexOf
    if (Buffer.isBuffer(val)) {
        // Special case: looking for empty string/buffer always fails
        if (val.length === 0) return -1;
        return arrayIndexOf(buffer, val, byteOffset, encoding, dir);
    } else if (typeof val === 'number') {
        val = val & 0xFF // Search for a byte value [0-255]
        ;
        if (typeof Uint8Array.prototype.indexOf === 'function') {
            if (dir) return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset);
            else return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset);
        }
        return arrayIndexOf(buffer, [
            val
        ], byteOffset, encoding, dir);
    }
    throw new TypeError('val must be string, number or Buffer');
}
function arrayIndexOf(arr, val, byteOffset, encoding, dir) {
    var indexSize = 1;
    var arrLength = arr.length;
    var valLength = val.length;
    if (encoding !== undefined) {
        encoding = String(encoding).toLowerCase();
        if (encoding === 'ucs2' || encoding === 'ucs-2' || encoding === 'utf16le' || encoding === 'utf-16le') {
            if (arr.length < 2 || val.length < 2) return -1;
            indexSize = 2;
            arrLength /= 2;
            valLength /= 2;
            byteOffset /= 2;
        }
    }
    function read(buf, i) {
        if (indexSize === 1) return buf[i];
        else return buf.readUInt16BE(i * indexSize);
    }
    var i;
    if (dir) {
        var foundIndex = -1;
        for(i = byteOffset; i < arrLength; i++)if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
            if (foundIndex === -1) foundIndex = i;
            if (i - foundIndex + 1 === valLength) return foundIndex * indexSize;
        } else {
            if (foundIndex !== -1) i -= i - foundIndex;
            foundIndex = -1;
        }
    } else {
        if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength;
        for(i = byteOffset; i >= 0; i--){
            var found = true;
            for(var j = 0; j < valLength; j++)if (read(arr, i + j) !== read(val, j)) {
                found = false;
                break;
            }
            if (found) return i;
        }
    }
    return -1;
}
Buffer.prototype.includes = function includes(val, byteOffset, encoding) {
    return this.indexOf(val, byteOffset, encoding) !== -1;
};
Buffer.prototype.indexOf = function indexOf(val, byteOffset, encoding) {
    return bidirectionalIndexOf(this, val, byteOffset, encoding, true);
};
Buffer.prototype.lastIndexOf = function lastIndexOf(val, byteOffset, encoding) {
    return bidirectionalIndexOf(this, val, byteOffset, encoding, false);
};
function hexWrite(buf, string, offset, length) {
    offset = Number(offset) || 0;
    var remaining = buf.length - offset;
    if (!length) length = remaining;
    else {
        length = Number(length);
        if (length > remaining) length = remaining;
    }
    var strLen = string.length;
    if (length > strLen / 2) length = strLen / 2;
    for(var i = 0; i < length; ++i){
        var parsed = parseInt(string.substr(i * 2, 2), 16);
        if (numberIsNaN(parsed)) return i;
        buf[offset + i] = parsed;
    }
    return i;
}
function utf8Write(buf, string, offset, length) {
    return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length);
}
function asciiWrite(buf, string, offset, length) {
    return blitBuffer(asciiToBytes(string), buf, offset, length);
}
function base64Write(buf, string, offset, length) {
    return blitBuffer(base64ToBytes(string), buf, offset, length);
}
function ucs2Write(buf, string, offset, length) {
    return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length);
}
Buffer.prototype.write = function write(string, offset, length, encoding) {
    // Buffer#write(string)
    if (offset === undefined) {
        encoding = 'utf8';
        length = this.length;
        offset = 0;
    // Buffer#write(string, encoding)
    } else if (length === undefined && typeof offset === 'string') {
        encoding = offset;
        length = this.length;
        offset = 0;
    // Buffer#write(string, offset[, length][, encoding])
    } else if (isFinite(offset)) {
        offset = offset >>> 0;
        if (isFinite(length)) {
            length = length >>> 0;
            if (encoding === undefined) encoding = 'utf8';
        } else {
            encoding = length;
            length = undefined;
        }
    } else throw new Error('Buffer.write(string, encoding, offset[, length]) is no longer supported');
    var remaining = this.length - offset;
    if (length === undefined || length > remaining) length = remaining;
    if (string.length > 0 && (length < 0 || offset < 0) || offset > this.length) throw new RangeError('Attempt to write outside buffer bounds');
    if (!encoding) encoding = 'utf8';
    var loweredCase = false;
    for(;;)switch(encoding){
        case 'hex':
            return hexWrite(this, string, offset, length);
        case 'utf8':
        case 'utf-8':
            return utf8Write(this, string, offset, length);
        case 'ascii':
        case 'latin1':
        case 'binary':
            return asciiWrite(this, string, offset, length);
        case 'base64':
            // Warning: maxLength not taken into account in base64Write
            return base64Write(this, string, offset, length);
        case 'ucs2':
        case 'ucs-2':
        case 'utf16le':
        case 'utf-16le':
            return ucs2Write(this, string, offset, length);
        default:
            if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding);
            encoding = ('' + encoding).toLowerCase();
            loweredCase = true;
    }
};
Buffer.prototype.toJSON = function toJSON() {
    return {
        type: 'Buffer',
        data: Array.prototype.slice.call(this._arr || this, 0)
    };
};
function base64Slice(buf, start, end) {
    if (start === 0 && end === buf.length) return base64.fromByteArray(buf);
    else return base64.fromByteArray(buf.slice(start, end));
}
function utf8Slice(buf, start, end) {
    end = Math.min(buf.length, end);
    var res = [];
    var i = start;
    while(i < end){
        var firstByte = buf[i];
        var codePoint = null;
        var bytesPerSequence = firstByte > 0xEF ? 4 : firstByte > 0xDF ? 3 : firstByte > 0xBF ? 2 : 1;
        if (i + bytesPerSequence <= end) {
            var secondByte, thirdByte, fourthByte, tempCodePoint;
            switch(bytesPerSequence){
                case 1:
                    if (firstByte < 0x80) codePoint = firstByte;
                    break;
                case 2:
                    secondByte = buf[i + 1];
                    if ((secondByte & 0xC0) === 0x80) {
                        tempCodePoint = (firstByte & 0x1F) << 0x6 | secondByte & 0x3F;
                        if (tempCodePoint > 0x7F) codePoint = tempCodePoint;
                    }
                    break;
                case 3:
                    secondByte = buf[i + 1];
                    thirdByte = buf[i + 2];
                    if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
                        tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | thirdByte & 0x3F;
                        if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) codePoint = tempCodePoint;
                    }
                    break;
                case 4:
                    secondByte = buf[i + 1];
                    thirdByte = buf[i + 2];
                    fourthByte = buf[i + 3];
                    if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
                        tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | fourthByte & 0x3F;
                        if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) codePoint = tempCodePoint;
                    }
            }
        }
        if (codePoint === null) {
            // we did not generate a valid codePoint so insert a
            // replacement char (U+FFFD) and advance only 1 byte
            codePoint = 0xFFFD;
            bytesPerSequence = 1;
        } else if (codePoint > 0xFFFF) {
            // encode to utf16 (surrogate pair dance)
            codePoint -= 0x10000;
            res.push(codePoint >>> 10 & 0x3FF | 0xD800);
            codePoint = 0xDC00 | codePoint & 0x3FF;
        }
        res.push(codePoint);
        i += bytesPerSequence;
    }
    return decodeCodePointsArray(res);
}
// Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety
var MAX_ARGUMENTS_LENGTH = 0x1000;
function decodeCodePointsArray(codePoints) {
    var len = codePoints.length;
    if (len <= MAX_ARGUMENTS_LENGTH) return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
    ;
    // Decode in chunks to avoid "call stack size exceeded".
    var res = '';
    var i = 0;
    while(i < len)res += String.fromCharCode.apply(String, codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH));
    return res;
}
function asciiSlice(buf, start, end) {
    var ret = '';
    end = Math.min(buf.length, end);
    for(var i = start; i < end; ++i)ret += String.fromCharCode(buf[i] & 0x7F);
    return ret;
}
function latin1Slice(buf, start, end) {
    var ret = '';
    end = Math.min(buf.length, end);
    for(var i = start; i < end; ++i)ret += String.fromCharCode(buf[i]);
    return ret;
}
function hexSlice(buf, start, end) {
    var len = buf.length;
    if (!start || start < 0) start = 0;
    if (!end || end < 0 || end > len) end = len;
    var out = '';
    for(var i = start; i < end; ++i)out += hexSliceLookupTable[buf[i]];
    return out;
}
function utf16leSlice(buf, start, end) {
    var bytes = buf.slice(start, end);
    var res = '';
    // If bytes.length is odd, the last 8 bits must be ignored (same as node.js)
    for(var i = 0; i < bytes.length - 1; i += 2)res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256);
    return res;
}
Buffer.prototype.slice = function slice(start, end) {
    var len = this.length;
    start = ~~start;
    end = end === undefined ? len : ~~end;
    if (start < 0) {
        start += len;
        if (start < 0) start = 0;
    } else if (start > len) start = len;
    if (end < 0) {
        end += len;
        if (end < 0) end = 0;
    } else if (end > len) end = len;
    if (end < start) end = start;
    var newBuf = this.subarray(start, end);
    // Return an augmented `Uint8Array` instance
    Object.setPrototypeOf(newBuf, Buffer.prototype);
    return newBuf;
};
/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */ function checkOffset(offset, ext, length) {
    if (offset % 1 !== 0 || offset < 0) throw new RangeError('offset is not uint');
    if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length');
}
Buffer.prototype.readUintLE = Buffer.prototype.readUIntLE = function readUIntLE(offset, byteLength, noAssert) {
    offset = offset >>> 0;
    byteLength = byteLength >>> 0;
    if (!noAssert) checkOffset(offset, byteLength, this.length);
    var val = this[offset];
    var mul = 1;
    var i = 0;
    while(++i < byteLength && (mul *= 0x100))val += this[offset + i] * mul;
    return val;
};
Buffer.prototype.readUintBE = Buffer.prototype.readUIntBE = function readUIntBE(offset, byteLength, noAssert) {
    offset = offset >>> 0;
    byteLength = byteLength >>> 0;
    if (!noAssert) checkOffset(offset, byteLength, this.length);
    var val = this[offset + --byteLength];
    var mul = 1;
    while(byteLength > 0 && (mul *= 0x100))val += this[offset + --byteLength] * mul;
    return val;
};
Buffer.prototype.readUint8 = Buffer.prototype.readUInt8 = function readUInt8(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 1, this.length);
    return this[offset];
};
Buffer.prototype.readUint16LE = Buffer.prototype.readUInt16LE = function readUInt16LE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 2, this.length);
    return this[offset] | this[offset + 1] << 8;
};
Buffer.prototype.readUint16BE = Buffer.prototype.readUInt16BE = function readUInt16BE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 2, this.length);
    return this[offset] << 8 | this[offset + 1];
};
Buffer.prototype.readUint32LE = Buffer.prototype.readUInt32LE = function readUInt32LE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 4, this.length);
    return (this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16) + this[offset + 3] * 0x1000000;
};
Buffer.prototype.readUint32BE = Buffer.prototype.readUInt32BE = function readUInt32BE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 4, this.length);
    return this[offset] * 0x1000000 + (this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3]);
};
Buffer.prototype.readIntLE = function readIntLE(offset, byteLength, noAssert) {
    offset = offset >>> 0;
    byteLength = byteLength >>> 0;
    if (!noAssert) checkOffset(offset, byteLength, this.length);
    var val = this[offset];
    var mul = 1;
    var i = 0;
    while(++i < byteLength && (mul *= 0x100))val += this[offset + i] * mul;
    mul *= 0x80;
    if (val >= mul) val -= Math.pow(2, 8 * byteLength);
    return val;
};
Buffer.prototype.readIntBE = function readIntBE(offset, byteLength, noAssert) {
    offset = offset >>> 0;
    byteLength = byteLength >>> 0;
    if (!noAssert) checkOffset(offset, byteLength, this.length);
    var i = byteLength;
    var mul = 1;
    var val = this[offset + --i];
    while(i > 0 && (mul *= 0x100))val += this[offset + --i] * mul;
    mul *= 0x80;
    if (val >= mul) val -= Math.pow(2, 8 * byteLength);
    return val;
};
Buffer.prototype.readInt8 = function readInt8(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 1, this.length);
    if (!(this[offset] & 0x80)) return this[offset];
    return (0xff - this[offset] + 1) * -1;
};
Buffer.prototype.readInt16LE = function readInt16LE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 2, this.length);
    var val = this[offset] | this[offset + 1] << 8;
    return val & 0x8000 ? val | 0xFFFF0000 : val;
};
Buffer.prototype.readInt16BE = function readInt16BE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 2, this.length);
    var val = this[offset + 1] | this[offset] << 8;
    return val & 0x8000 ? val | 0xFFFF0000 : val;
};
Buffer.prototype.readInt32LE = function readInt32LE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 4, this.length);
    return this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16 | this[offset + 3] << 24;
};
Buffer.prototype.readInt32BE = function readInt32BE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 4, this.length);
    return this[offset] << 24 | this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3];
};
Buffer.prototype.readFloatLE = function readFloatLE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 4, this.length);
    return ieee754.read(this, offset, true, 23, 4);
};
Buffer.prototype.readFloatBE = function readFloatBE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 4, this.length);
    return ieee754.read(this, offset, false, 23, 4);
};
Buffer.prototype.readDoubleLE = function readDoubleLE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 8, this.length);
    return ieee754.read(this, offset, true, 52, 8);
};
Buffer.prototype.readDoubleBE = function readDoubleBE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 8, this.length);
    return ieee754.read(this, offset, false, 52, 8);
};
function checkInt(buf, value, offset, ext, max, min) {
    if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance');
    if (value > max || value < min) throw new RangeError('"value" argument is out of bounds');
    if (offset + ext > buf.length) throw new RangeError('Index out of range');
}
Buffer.prototype.writeUintLE = Buffer.prototype.writeUIntLE = function writeUIntLE(value, offset, byteLength, noAssert) {
    value = +value;
    offset = offset >>> 0;
    byteLength = byteLength >>> 0;
    if (!noAssert) {
        var maxBytes = Math.pow(2, 8 * byteLength) - 1;
        checkInt(this, value, offset, byteLength, maxBytes, 0);
    }
    var mul = 1;
    var i = 0;
    this[offset] = value & 0xFF;
    while(++i < byteLength && (mul *= 0x100))this[offset + i] = value / mul & 0xFF;
    return offset + byteLength;
};
Buffer.prototype.writeUintBE = Buffer.prototype.writeUIntBE = function writeUIntBE(value, offset, byteLength, noAssert) {
    value = +value;
    offset = offset >>> 0;
    byteLength = byteLength >>> 0;
    if (!noAssert) {
        var maxBytes = Math.pow(2, 8 * byteLength) - 1;
        checkInt(this, value, offset, byteLength, maxBytes, 0);
    }
    var i = byteLength - 1;
    var mul = 1;
    this[offset + i] = value & 0xFF;
    while(--i >= 0 && (mul *= 0x100))this[offset + i] = value / mul & 0xFF;
    return offset + byteLength;
};
Buffer.prototype.writeUint8 = Buffer.prototype.writeUInt8 = function writeUInt8(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0);
    this[offset] = value & 0xff;
    return offset + 1;
};
Buffer.prototype.writeUint16LE = Buffer.prototype.writeUInt16LE = function writeUInt16LE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0);
    this[offset] = value & 0xff;
    this[offset + 1] = value >>> 8;
    return offset + 2;
};
Buffer.prototype.writeUint16BE = Buffer.prototype.writeUInt16BE = function writeUInt16BE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0);
    this[offset] = value >>> 8;
    this[offset + 1] = value & 0xff;
    return offset + 2;
};
Buffer.prototype.writeUint32LE = Buffer.prototype.writeUInt32LE = function writeUInt32LE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0);
    this[offset + 3] = value >>> 24;
    this[offset + 2] = value >>> 16;
    this[offset + 1] = value >>> 8;
    this[offset] = value & 0xff;
    return offset + 4;
};
Buffer.prototype.writeUint32BE = Buffer.prototype.writeUInt32BE = function writeUInt32BE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0);
    this[offset] = value >>> 24;
    this[offset + 1] = value >>> 16;
    this[offset + 2] = value >>> 8;
    this[offset + 3] = value & 0xff;
    return offset + 4;
};
Buffer.prototype.writeIntLE = function writeIntLE(value, offset, byteLength, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) {
        var limit = Math.pow(2, 8 * byteLength - 1);
        checkInt(this, value, offset, byteLength, limit - 1, -limit);
    }
    var i = 0;
    var mul = 1;
    var sub = 0;
    this[offset] = value & 0xFF;
    while(++i < byteLength && (mul *= 0x100)){
        if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) sub = 1;
        this[offset + i] = (value / mul >> 0) - sub & 0xFF;
    }
    return offset + byteLength;
};
Buffer.prototype.writeIntBE = function writeIntBE(value, offset, byteLength, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) {
        var limit = Math.pow(2, 8 * byteLength - 1);
        checkInt(this, value, offset, byteLength, limit - 1, -limit);
    }
    var i = byteLength - 1;
    var mul = 1;
    var sub = 0;
    this[offset + i] = value & 0xFF;
    while(--i >= 0 && (mul *= 0x100)){
        if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) sub = 1;
        this[offset + i] = (value / mul >> 0) - sub & 0xFF;
    }
    return offset + byteLength;
};
Buffer.prototype.writeInt8 = function writeInt8(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -128);
    if (value < 0) value = 0xff + value + 1;
    this[offset] = value & 0xff;
    return offset + 1;
};
Buffer.prototype.writeInt16LE = function writeInt16LE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -32768);
    this[offset] = value & 0xff;
    this[offset + 1] = value >>> 8;
    return offset + 2;
};
Buffer.prototype.writeInt16BE = function writeInt16BE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -32768);
    this[offset] = value >>> 8;
    this[offset + 1] = value & 0xff;
    return offset + 2;
};
Buffer.prototype.writeInt32LE = function writeInt32LE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -2147483648);
    this[offset] = value & 0xff;
    this[offset + 1] = value >>> 8;
    this[offset + 2] = value >>> 16;
    this[offset + 3] = value >>> 24;
    return offset + 4;
};
Buffer.prototype.writeInt32BE = function writeInt32BE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -2147483648);
    if (value < 0) value = 0xffffffff + value + 1;
    this[offset] = value >>> 24;
    this[offset + 1] = value >>> 16;
    this[offset + 2] = value >>> 8;
    this[offset + 3] = value & 0xff;
    return offset + 4;
};
function checkIEEE754(buf, value, offset, ext, max, min) {
    if (offset + ext > buf.length) throw new RangeError('Index out of range');
    if (offset < 0) throw new RangeError('Index out of range');
}
function writeFloat(buf, value, offset, littleEndian, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -340282346638528860000000000000000000000);
    ieee754.write(buf, value, offset, littleEndian, 23, 4);
    return offset + 4;
}
Buffer.prototype.writeFloatLE = function writeFloatLE(value, offset, noAssert) {
    return writeFloat(this, value, offset, true, noAssert);
};
Buffer.prototype.writeFloatBE = function writeFloatBE(value, offset, noAssert) {
    return writeFloat(this, value, offset, false, noAssert);
};
function writeDouble(buf, value, offset, littleEndian, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -179769313486231570000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000);
    ieee754.write(buf, value, offset, littleEndian, 52, 8);
    return offset + 8;
}
Buffer.prototype.writeDoubleLE = function writeDoubleLE(value, offset, noAssert) {
    return writeDouble(this, value, offset, true, noAssert);
};
Buffer.prototype.writeDoubleBE = function writeDoubleBE(value, offset, noAssert) {
    return writeDouble(this, value, offset, false, noAssert);
};
// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function copy(target, targetStart, start, end) {
    if (!Buffer.isBuffer(target)) throw new TypeError('argument should be a Buffer');
    if (!start) start = 0;
    if (!end && end !== 0) end = this.length;
    if (targetStart >= target.length) targetStart = target.length;
    if (!targetStart) targetStart = 0;
    if (end > 0 && end < start) end = start;
    // Copy 0 bytes; we're done
    if (end === start) return 0;
    if (target.length === 0 || this.length === 0) return 0;
    // Fatal error conditions
    if (targetStart < 0) throw new RangeError('targetStart out of bounds');
    if (start < 0 || start >= this.length) throw new RangeError('Index out of range');
    if (end < 0) throw new RangeError('sourceEnd out of bounds');
    // Are we oob?
    if (end > this.length) end = this.length;
    if (target.length - targetStart < end - start) end = target.length - targetStart + start;
    var len = end - start;
    if (this === target && typeof Uint8Array.prototype.copyWithin === 'function') // Use built-in when available, missing from IE11
    this.copyWithin(targetStart, start, end);
    else Uint8Array.prototype.set.call(target, this.subarray(start, end), targetStart);
    return len;
};
// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
Buffer.prototype.fill = function fill(val, start, end, encoding) {
    // Handle string cases:
    if (typeof val === 'string') {
        if (typeof start === 'string') {
            encoding = start;
            start = 0;
            end = this.length;
        } else if (typeof end === 'string') {
            encoding = end;
            end = this.length;
        }
        if (encoding !== undefined && typeof encoding !== 'string') throw new TypeError('encoding must be a string');
        if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) throw new TypeError('Unknown encoding: ' + encoding);
        if (val.length === 1) {
            var code = val.charCodeAt(0);
            if (encoding === 'utf8' && code < 128 || encoding === 'latin1') // Fast path: If `val` fits into a single byte, use that numeric value.
            val = code;
        }
    } else if (typeof val === 'number') val = val & 255;
    else if (typeof val === 'boolean') val = Number(val);
    // Invalid ranges are not set to a default, so can range check early.
    if (start < 0 || this.length < start || this.length < end) throw new RangeError('Out of range index');
    if (end <= start) return this;
    start = start >>> 0;
    end = end === undefined ? this.length : end >>> 0;
    if (!val) val = 0;
    var i;
    if (typeof val === 'number') for(i = start; i < end; ++i)this[i] = val;
    else {
        var bytes = Buffer.isBuffer(val) ? val : Buffer.from(val, encoding);
        var len = bytes.length;
        if (len === 0) throw new TypeError('The value "' + val + '" is invalid for argument "value"');
        for(i = 0; i < end - start; ++i)this[i + start] = bytes[i % len];
    }
    return this;
};
// HELPER FUNCTIONS
// ================
var INVALID_BASE64_RE = /[^+/0-9A-Za-z-_]/g;
function base64clean(str) {
    // Node takes equal signs as end of the Base64 encoding
    str = str.split('=')[0];
    // Node strips out invalid characters like \n and \t from the string, base64-js does not
    str = str.trim().replace(INVALID_BASE64_RE, '');
    // Node converts strings with length < 2 to ''
    if (str.length < 2) return '';
    // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
    while(str.length % 4 !== 0)str = str + '=';
    return str;
}
function utf8ToBytes(string, units) {
    units = units || Infinity;
    var codePoint;
    var length = string.length;
    var leadSurrogate = null;
    var bytes = [];
    for(var i = 0; i < length; ++i){
        codePoint = string.charCodeAt(i);
        // is surrogate component
        if (codePoint > 0xD7FF && codePoint < 0xE000) {
            // last char was a lead
            if (!leadSurrogate) {
                // no lead yet
                if (codePoint > 0xDBFF) {
                    // unexpected trail
                    if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
                    continue;
                } else if (i + 1 === length) {
                    // unpaired lead
                    if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
                    continue;
                }
                // valid lead
                leadSurrogate = codePoint;
                continue;
            }
            // 2 leads in a row
            if (codePoint < 0xDC00) {
                if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
                leadSurrogate = codePoint;
                continue;
            }
            // valid surrogate pair
            codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000;
        } else if (leadSurrogate) // valid bmp char, but last char was a lead
        {
            if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
        }
        leadSurrogate = null;
        // encode utf8
        if (codePoint < 0x80) {
            if ((units -= 1) < 0) break;
            bytes.push(codePoint);
        } else if (codePoint < 0x800) {
            if ((units -= 2) < 0) break;
            bytes.push(codePoint >> 0x6 | 0xC0, codePoint & 0x3F | 0x80);
        } else if (codePoint < 0x10000) {
            if ((units -= 3) < 0) break;
            bytes.push(codePoint >> 0xC | 0xE0, codePoint >> 0x6 & 0x3F | 0x80, codePoint & 0x3F | 0x80);
        } else if (codePoint < 0x110000) {
            if ((units -= 4) < 0) break;
            bytes.push(codePoint >> 0x12 | 0xF0, codePoint >> 0xC & 0x3F | 0x80, codePoint >> 0x6 & 0x3F | 0x80, codePoint & 0x3F | 0x80);
        } else throw new Error('Invalid code point');
    }
    return bytes;
}
function asciiToBytes(str) {
    var byteArray = [];
    for(var i = 0; i < str.length; ++i)// Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF);
    return byteArray;
}
function utf16leToBytes(str, units) {
    var c, hi, lo;
    var byteArray = [];
    for(var i = 0; i < str.length; ++i){
        if ((units -= 2) < 0) break;
        c = str.charCodeAt(i);
        hi = c >> 8;
        lo = c % 256;
        byteArray.push(lo);
        byteArray.push(hi);
    }
    return byteArray;
}
function base64ToBytes(str) {
    return base64.toByteArray(base64clean(str));
}
function blitBuffer(src, dst, offset, length) {
    for(var i = 0; i < length; ++i){
        if (i + offset >= dst.length || i >= src.length) break;
        dst[i + offset] = src[i];
    }
    return i;
}
// ArrayBuffer or Uint8Array objects from other contexts (i.e. iframes) do not pass
// the `instanceof` check but they should be treated as of that type.
// See: https://github.com/feross/buffer/issues/166
function isInstance(obj, type) {
    return obj instanceof type || obj != null && obj.constructor != null && obj.constructor.name != null && obj.constructor.name === type.name;
}
function numberIsNaN(obj) {
    // For IE11 support
    return obj !== obj // eslint-disable-line no-self-compare
    ;
}
// Create lookup table for `toString('hex')`
// See: https://github.com/feross/buffer/issues/219
var hexSliceLookupTable = function() {
    var alphabet = '0123456789abcdef';
    var table = new Array(256);
    for(var i = 0; i < 16; ++i){
        var i16 = i * 16;
        for(var j = 0; j < 16; ++j)table[i16 + j] = alphabet[i] + alphabet[j];
    }
    return table;
}();

},{"9c62938f1dccc73c":"9I2RJ","aceacb6a4531a9d2":"geXY6"}],"9I2RJ":[function(require,module,exports,__globalThis) {
'use strict';
exports.byteLength = byteLength;
exports.toByteArray = toByteArray;
exports.fromByteArray = fromByteArray;
var lookup = [];
var revLookup = [];
var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array;
var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
for(var i = 0, len = code.length; i < len; ++i){
    lookup[i] = code[i];
    revLookup[code.charCodeAt(i)] = i;
}
// Support decoding URL-safe base64 strings, as Node.js does.
// See: https://en.wikipedia.org/wiki/Base64#URL_applications
revLookup['-'.charCodeAt(0)] = 62;
revLookup['_'.charCodeAt(0)] = 63;
function getLens(b64) {
    var len = b64.length;
    if (len % 4 > 0) throw new Error('Invalid string. Length must be a multiple of 4');
    // Trim off extra bytes after placeholder bytes are found
    // See: https://github.com/beatgammit/base64-js/issues/42
    var validLen = b64.indexOf('=');
    if (validLen === -1) validLen = len;
    var placeHoldersLen = validLen === len ? 0 : 4 - validLen % 4;
    return [
        validLen,
        placeHoldersLen
    ];
}
// base64 is 4/3 + up to two characters of the original data
function byteLength(b64) {
    var lens = getLens(b64);
    var validLen = lens[0];
    var placeHoldersLen = lens[1];
    return (validLen + placeHoldersLen) * 3 / 4 - placeHoldersLen;
}
function _byteLength(b64, validLen, placeHoldersLen) {
    return (validLen + placeHoldersLen) * 3 / 4 - placeHoldersLen;
}
function toByteArray(b64) {
    var tmp;
    var lens = getLens(b64);
    var validLen = lens[0];
    var placeHoldersLen = lens[1];
    var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen));
    var curByte = 0;
    // if there are placeholders, only get up to the last complete 4 chars
    var len = placeHoldersLen > 0 ? validLen - 4 : validLen;
    var i;
    for(i = 0; i < len; i += 4){
        tmp = revLookup[b64.charCodeAt(i)] << 18 | revLookup[b64.charCodeAt(i + 1)] << 12 | revLookup[b64.charCodeAt(i + 2)] << 6 | revLookup[b64.charCodeAt(i + 3)];
        arr[curByte++] = tmp >> 16 & 0xFF;
        arr[curByte++] = tmp >> 8 & 0xFF;
        arr[curByte++] = tmp & 0xFF;
    }
    if (placeHoldersLen === 2) {
        tmp = revLookup[b64.charCodeAt(i)] << 2 | revLookup[b64.charCodeAt(i + 1)] >> 4;
        arr[curByte++] = tmp & 0xFF;
    }
    if (placeHoldersLen === 1) {
        tmp = revLookup[b64.charCodeAt(i)] << 10 | revLookup[b64.charCodeAt(i + 1)] << 4 | revLookup[b64.charCodeAt(i + 2)] >> 2;
        arr[curByte++] = tmp >> 8 & 0xFF;
        arr[curByte++] = tmp & 0xFF;
    }
    return arr;
}
function tripletToBase64(num) {
    return lookup[num >> 18 & 0x3F] + lookup[num >> 12 & 0x3F] + lookup[num >> 6 & 0x3F] + lookup[num & 0x3F];
}
function encodeChunk(uint8, start, end) {
    var tmp;
    var output = [];
    for(var i = start; i < end; i += 3){
        tmp = (uint8[i] << 16 & 0xFF0000) + (uint8[i + 1] << 8 & 0xFF00) + (uint8[i + 2] & 0xFF);
        output.push(tripletToBase64(tmp));
    }
    return output.join('');
}
function fromByteArray(uint8) {
    var tmp;
    var len = uint8.length;
    var extraBytes = len % 3 // if we have 1 byte left, pad 2 bytes
    ;
    var parts = [];
    var maxChunkLength = 16383 // must be multiple of 3
    ;
    // go through the array every three bytes, we'll deal with trailing stuff later
    for(var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength)parts.push(encodeChunk(uint8, i, i + maxChunkLength > len2 ? len2 : i + maxChunkLength));
    // pad the end with zeros, but make sure to not forget the extra bytes
    if (extraBytes === 1) {
        tmp = uint8[len - 1];
        parts.push(lookup[tmp >> 2] + lookup[tmp << 4 & 0x3F] + '==');
    } else if (extraBytes === 2) {
        tmp = (uint8[len - 2] << 8) + uint8[len - 1];
        parts.push(lookup[tmp >> 10] + lookup[tmp >> 4 & 0x3F] + lookup[tmp << 2 & 0x3F] + '=');
    }
    return parts.join('');
}

},{}],"geXY6":[function(require,module,exports,__globalThis) {
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */ exports.read = function(buffer, offset, isLE, mLen, nBytes) {
    var e, m;
    var eLen = nBytes * 8 - mLen - 1;
    var eMax = (1 << eLen) - 1;
    var eBias = eMax >> 1;
    var nBits = -7;
    var i = isLE ? nBytes - 1 : 0;
    var d = isLE ? -1 : 1;
    var s = buffer[offset + i];
    i += d;
    e = s & (1 << -nBits) - 1;
    s >>= -nBits;
    nBits += eLen;
    for(; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8);
    m = e & (1 << -nBits) - 1;
    e >>= -nBits;
    nBits += mLen;
    for(; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8);
    if (e === 0) e = 1 - eBias;
    else if (e === eMax) return m ? NaN : (s ? -1 : 1) * Infinity;
    else {
        m = m + Math.pow(2, mLen);
        e = e - eBias;
    }
    return (s ? -1 : 1) * m * Math.pow(2, e - mLen);
};
exports.write = function(buffer, value, offset, isLE, mLen, nBytes) {
    var e, m, c;
    var eLen = nBytes * 8 - mLen - 1;
    var eMax = (1 << eLen) - 1;
    var eBias = eMax >> 1;
    var rt = mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0;
    var i = isLE ? 0 : nBytes - 1;
    var d = isLE ? 1 : -1;
    var s = value < 0 || value === 0 && 1 / value < 0 ? 1 : 0;
    value = Math.abs(value);
    if (isNaN(value) || value === Infinity) {
        m = isNaN(value) ? 1 : 0;
        e = eMax;
    } else {
        e = Math.floor(Math.log(value) / Math.LN2);
        if (value * (c = Math.pow(2, -e)) < 1) {
            e--;
            c *= 2;
        }
        if (e + eBias >= 1) value += rt / c;
        else value += rt * Math.pow(2, 1 - eBias);
        if (value * c >= 2) {
            e++;
            c /= 2;
        }
        if (e + eBias >= eMax) {
            m = 0;
            e = eMax;
        } else if (e + eBias >= 1) {
            m = (value * c - 1) * Math.pow(2, mLen);
            e = e + eBias;
        } else {
            m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen);
            e = 0;
        }
    }
    for(; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8);
    e = e << mLen | m;
    eLen += mLen;
    for(; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8);
    buffer[offset + i - d] |= s * 128;
};

},{}],"ctaVk":[function(require,module,exports,__globalThis) {
/**
 * Isomorphic module to work access the environment (query params, env variables).
 *
 * @module environment
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isNode", ()=>isNode);
parcelHelpers.export(exports, "isBrowser", ()=>isBrowser);
parcelHelpers.export(exports, "isMac", ()=>isMac);
parcelHelpers.export(exports, "hasParam", ()=>hasParam);
parcelHelpers.export(exports, "getParam", ()=>getParam);
parcelHelpers.export(exports, "getVariable", ()=>getVariable);
parcelHelpers.export(exports, "getConf", ()=>getConf);
parcelHelpers.export(exports, "ensureConf", ()=>ensureConf);
parcelHelpers.export(exports, "hasConf", ()=>hasConf);
parcelHelpers.export(exports, "production", ()=>production);
parcelHelpers.export(exports, "supportsColor", ()=>supportsColor);
var _mapJs = require("./map.js");
var _stringJs = require("./string.js");
var _conditionsJs = require("./conditions.js");
var _storageJs = require("./storage.js");
var _functionJs = require("./function.js");
var process = require("2cfb8bcef1022e2a");
const isNode = false;
const isBrowser = typeof window !== 'undefined' && typeof document !== 'undefined' && !isNode;
const isMac = typeof navigator !== 'undefined' ? /Mac/.test(navigator.platform) : false;
/**
 * @type {Map<string,string>}
 */ let params;
const args = [];
/* c8 ignore start */ const computeParams = ()=>{
    if (params === undefined) {
        if (isNode) {
            params = _mapJs.create();
            const pargs = process.argv;
            let currParamName = null;
            for(let i = 0; i < pargs.length; i++){
                const parg = pargs[i];
                if (parg[0] === '-') {
                    if (currParamName !== null) params.set(currParamName, '');
                    currParamName = parg;
                } else if (currParamName !== null) {
                    params.set(currParamName, parg);
                    currParamName = null;
                } else args.push(parg);
            }
            if (currParamName !== null) params.set(currParamName, '');
        // in ReactNative for example this would not be true (unless connected to the Remote Debugger)
        } else if (typeof location === 'object') {
            params = _mapJs.create(); // eslint-disable-next-line no-undef
            (location.search || '?').slice(1).split('&').forEach((kv)=>{
                if (kv.length !== 0) {
                    const [key, value] = kv.split('=');
                    params.set(`--${_stringJs.fromCamelCase(key, '-')}`, value);
                    params.set(`-${_stringJs.fromCamelCase(key, '-')}`, value);
                }
            });
        } else params = _mapJs.create();
    }
    return params;
};
const hasParam = (name)=>computeParams().has(name);
const getParam = (name, defaultVal)=>computeParams().get(name) || defaultVal;
const getVariable = (name)=>isNode ? _conditionsJs.undefinedToNull(process.env[name.toUpperCase().replaceAll('-', '_')]) : _conditionsJs.undefinedToNull(_storageJs.varStorage.getItem(name));
const getConf = (name)=>computeParams().get('--' + name) || getVariable(name);
const ensureConf = (name)=>{
    const c = getConf(name);
    if (c == null) throw new Error(`Expected configuration "${name.toUpperCase().replaceAll('-', '_')}"`);
    return c;
};
const hasConf = (name)=>hasParam('--' + name) || getVariable(name) !== null;
const production = hasConf('production');
/* c8 ignore next 2 */ const forceColor = isNode && _functionJs.isOneOf(undefined, [
    'true',
    '1',
    '2'
]);
const supportsColor = forceColor || !hasParam('--no-colors') && // @todo deprecate --no-colors
!hasConf('no-color') && (!isNode || process.stdout.isTTY) && (!isNode || hasParam('--color') || getVariable('COLORTERM') !== null || (getVariable('TERM') || '').includes('color')) /* c8 ignore stop */ ;

},{"2cfb8bcef1022e2a":"euskh","./map.js":"gptCt","./string.js":"72Jcz","./conditions.js":"iC8Es","./storage.js":"avQOT","./function.js":"daIe8","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"euskh":[function(require,module,exports,__globalThis) {
// shim for using process in browser
var process = module.exports = {};
// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.
var cachedSetTimeout;
var cachedClearTimeout;
function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout() {
    throw new Error('clearTimeout has not been defined');
}
(function() {
    try {
        if (typeof setTimeout === 'function') cachedSetTimeout = setTimeout;
        else cachedSetTimeout = defaultSetTimout;
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') cachedClearTimeout = clearTimeout;
        else cachedClearTimeout = defaultClearTimeout;
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
})();
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) //normal enviroments in sane situations
    return setTimeout(fun, 0);
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch (e) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }
}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) //normal enviroments in sane situations
    return clearTimeout(marker);
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }
}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;
function cleanUpNextTick() {
    if (!draining || !currentQueue) return;
    draining = false;
    if (currentQueue.length) queue = currentQueue.concat(queue);
    else queueIndex = -1;
    if (queue.length) drainQueue();
}
function drainQueue() {
    if (draining) return;
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;
    var len = queue.length;
    while(len){
        currentQueue = queue;
        queue = [];
        while(++queueIndex < len)if (currentQueue) currentQueue[queueIndex].run();
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}
process.nextTick = function(fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) for(var i = 1; i < arguments.length; i++)args[i - 1] = arguments[i];
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) runTimeout(drainQueue);
};
// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function() {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};
function noop() {}
process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;
process.listeners = function(name) {
    return [];
};
process.binding = function(name) {
    throw new Error('process.binding is not supported');
};
process.cwd = function() {
    return '/';
};
process.chdir = function(dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() {
    return 0;
};

},{}],"iC8Es":[function(require,module,exports,__globalThis) {
/**
 * Often used conditions.
 *
 * @module conditions
 */ /**
 * @template T
 * @param {T|null|undefined} v
 * @return {T|null}
 */ /* c8 ignore next */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "undefinedToNull", ()=>undefinedToNull);
const undefinedToNull = (v)=>v === undefined ? null : v;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"avQOT":[function(require,module,exports,__globalThis) {
/* eslint-env browser */ /**
 * Isomorphic variable storage.
 *
 * Uses LocalStorage in the browser and falls back to in-memory storage.
 *
 * @module storage
 */ /* c8 ignore start */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "varStorage", ()=>varStorage);
parcelHelpers.export(exports, "onChange", ()=>onChange);
parcelHelpers.export(exports, "offChange", ()=>offChange);
class VarStoragePolyfill {
    constructor(){
        this.map = new Map();
    }
    /**
   * @param {string} key
   * @param {any} newValue
   */ setItem(key, newValue) {
        this.map.set(key, newValue);
    }
    /**
   * @param {string} key
   */ getItem(key) {
        return this.map.get(key);
    }
}
/* c8 ignore stop */ /**
 * @type {any}
 */ let _localStorage = new VarStoragePolyfill();
let usePolyfill = true;
/* c8 ignore start */ try {
    // if the same-origin rule is violated, accessing localStorage might thrown an error
    if (typeof localStorage !== 'undefined' && localStorage) {
        _localStorage = localStorage;
        usePolyfill = false;
    }
} catch (e) {}
const varStorage = _localStorage;
const onChange = (eventHandler)=>usePolyfill || addEventListener('storage', /** @type {any} */ eventHandler);
const offChange = (eventHandler)=>usePolyfill || removeEventListener('storage', /** @type {any} */ eventHandler);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"daIe8":[function(require,module,exports,__globalThis) {
/**
 * Common functions and function call helpers.
 *
 * @module function
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "callAll", ()=>callAll);
parcelHelpers.export(exports, "nop", ()=>nop);
parcelHelpers.export(exports, "apply", ()=>apply);
parcelHelpers.export(exports, "id", ()=>id);
parcelHelpers.export(exports, "equalityStrict", ()=>equalityStrict);
parcelHelpers.export(exports, "equalityFlat", ()=>equalityFlat);
parcelHelpers.export(exports, "equalityDeep", ()=>equalityDeep);
parcelHelpers.export(exports, "isOneOf", ()=>isOneOf);
parcelHelpers.export(exports, "isArray", ()=>isArray);
parcelHelpers.export(exports, "isString", ()=>isString);
parcelHelpers.export(exports, "isNumber", ()=>isNumber);
parcelHelpers.export(exports, "is", ()=>is);
parcelHelpers.export(exports, "isTemplate", ()=>isTemplate);
var _arrayJs = require("./array.js");
var _objectJs = require("./object.js");
var _traitsJs = require("./traits.js");
const callAll = (fs, args, i = 0)=>{
    try {
        for(; i < fs.length; i++)fs[i](...args);
    } finally{
        if (i < fs.length) callAll(fs, args, i + 1);
    }
};
const nop = ()=>{};
const apply = (f)=>f();
const id = (a)=>a;
const equalityStrict = (a, b)=>a === b;
const equalityFlat = (a, b)=>a === b || a != null && b != null && a.constructor === b.constructor && (_arrayJs.isArray(a) && _arrayJs.equalFlat(a, /** @type {Array<T>} */ b) || typeof a === 'object' && _objectJs.equalFlat(a, b));
const equalityDeep = (a, b)=>{
    if (a === b) return true;
    if (a == null || b == null || a.constructor !== b.constructor) return false;
    if (a[_traitsJs.EqualityTraitSymbol] != null) return a[_traitsJs.EqualityTraitSymbol](b);
    switch(a.constructor){
        case ArrayBuffer:
            a = new Uint8Array(a);
            b = new Uint8Array(b);
        // eslint-disable-next-line no-fallthrough
        case Uint8Array:
            if (a.byteLength !== b.byteLength) return false;
            for(let i = 0; i < a.length; i++){
                if (a[i] !== b[i]) return false;
            }
            break;
        case Set:
            if (a.size !== b.size) return false;
            for (const value of a){
                if (!b.has(value)) return false;
            }
            break;
        case Map:
            if (a.size !== b.size) return false;
            for (const key of a.keys()){
                if (!b.has(key) || !equalityDeep(a.get(key), b.get(key))) return false;
            }
            break;
        case Object:
            if (_objectJs.length(a) !== _objectJs.length(b)) return false;
            for(const key in a){
                if (!_objectJs.hasProperty(a, key) || !equalityDeep(a[key], b[key])) return false;
            }
            break;
        case Array:
            if (a.length !== b.length) return false;
            for(let i = 0; i < a.length; i++){
                if (!equalityDeep(a[i], b[i])) return false;
            }
            break;
        default:
            return false;
    }
    return true;
};
const isOneOf = (value, options)=>options.includes(value);
const isArray = _arrayJs.isArray;
const isString = (s)=>s && s.constructor === String;
const isNumber = (n)=>n != null && n.constructor === Number;
const is = (n, T)=>n && n.constructor === T;
const isTemplate = (T)=>/**
   * @param {any} n
   * @return {n is InstanceType<TYPE>}
   **/ (n)=>n && n.constructor === T;

},{"./array.js":"izwxw","./object.js":"1ap4a","./traits.js":"hzA1K","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"1ap4a":[function(require,module,exports,__globalThis) {
/**
 * Utility functions for working with EcmaScript objects.
 *
 * @module object
 */ /**
 * @return {Object<string,any>} obj
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "create", ()=>create);
parcelHelpers.export(exports, "assign", ()=>assign);
parcelHelpers.export(exports, "keys", ()=>keys);
parcelHelpers.export(exports, "forEach", ()=>forEach);
parcelHelpers.export(exports, "map", ()=>map);
parcelHelpers.export(exports, "length", ()=>length);
parcelHelpers.export(exports, "size", ()=>size);
parcelHelpers.export(exports, "some", ()=>some);
parcelHelpers.export(exports, "isEmpty", ()=>isEmpty);
parcelHelpers.export(exports, "every", ()=>every);
parcelHelpers.export(exports, "hasProperty", ()=>hasProperty);
parcelHelpers.export(exports, "equalFlat", ()=>equalFlat);
parcelHelpers.export(exports, "freeze", ()=>freeze);
parcelHelpers.export(exports, "deepFreeze", ()=>deepFreeze);
const create = ()=>Object.create(null);
const assign = Object.assign;
const keys = Object.keys;
const forEach = (obj, f)=>{
    for(const key in obj)f(obj[key], key);
};
const map = (obj, f)=>{
    const results = [];
    for(const key in obj)results.push(f(obj[key], key));
    return results;
};
const length = (obj)=>keys(obj).length;
const size = (obj)=>keys(obj).length;
const some = (obj, f)=>{
    for(const key in obj){
        if (f(obj[key], key)) return true;
    }
    return false;
};
const isEmpty = (obj)=>{
    // eslint-disable-next-line
    for(const _k in obj)return false;
    return true;
};
const every = (obj, f)=>{
    for(const key in obj){
        if (!f(obj[key], key)) return false;
    }
    return true;
};
const hasProperty = (obj, key)=>Object.prototype.hasOwnProperty.call(obj, key);
const equalFlat = (a, b)=>a === b || size(a) === size(b) && every(a, (val, key)=>(val !== undefined || hasProperty(b, key)) && b[key] === val);
const freeze = Object.freeze;
const deepFreeze = (o)=>{
    for(const key in o){
        const c = o[key];
        if (typeof c === 'object' || typeof c === 'function') deepFreeze(o[key]);
    }
    return freeze(o);
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"hzA1K":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "EqualityTraitSymbol", ()=>EqualityTraitSymbol);
const EqualityTraitSymbol = Symbol('Equality') /**
 * @typedef {{ [EqualityTraitSymbol]:(other:EqualityTrait)=>boolean }} EqualityTrait
 */ ;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"eIwr9":[function(require,module,exports,__globalThis) {
/**
 * Isomorphic logging module with support for colors!
 *
 * @module logging
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "BOLD", ()=>(0, _loggingCommonJs.BOLD));
parcelHelpers.export(exports, "UNBOLD", ()=>(0, _loggingCommonJs.UNBOLD));
parcelHelpers.export(exports, "BLUE", ()=>(0, _loggingCommonJs.BLUE));
parcelHelpers.export(exports, "GREY", ()=>(0, _loggingCommonJs.GREY));
parcelHelpers.export(exports, "GREEN", ()=>(0, _loggingCommonJs.GREEN));
parcelHelpers.export(exports, "RED", ()=>(0, _loggingCommonJs.RED));
parcelHelpers.export(exports, "PURPLE", ()=>(0, _loggingCommonJs.PURPLE));
parcelHelpers.export(exports, "ORANGE", ()=>(0, _loggingCommonJs.ORANGE));
parcelHelpers.export(exports, "UNCOLOR", ()=>(0, _loggingCommonJs.UNCOLOR));
parcelHelpers.export(exports, "print", ()=>print);
parcelHelpers.export(exports, "warn", ()=>warn);
parcelHelpers.export(exports, "printError", ()=>printError);
parcelHelpers.export(exports, "printImg", ()=>printImg);
parcelHelpers.export(exports, "printImgBase64", ()=>printImgBase64);
parcelHelpers.export(exports, "group", ()=>group);
parcelHelpers.export(exports, "groupCollapsed", ()=>groupCollapsed);
parcelHelpers.export(exports, "groupEnd", ()=>groupEnd);
parcelHelpers.export(exports, "printDom", ()=>printDom);
parcelHelpers.export(exports, "printCanvas", ()=>printCanvas);
parcelHelpers.export(exports, "vconsoles", ()=>vconsoles);
/* c8 ignore start */ parcelHelpers.export(exports, "VConsole", ()=>VConsole);
parcelHelpers.export(exports, "createVConsole", ()=>createVConsole);
parcelHelpers.export(exports, "createModuleLogger", ()=>createModuleLogger);
var _environmentJs = require("./environment.js");
var _setJs = require("./set.js");
var _pairJs = require("./pair.js");
var _domJs = require("./dom.js");
var _jsonJs = require("./json.js");
var _mapJs = require("./map.js");
var _eventloopJs = require("./eventloop.js");
var _mathJs = require("./math.js");
var _loggingCommonJs = require("./logging.common.js");
/**
 * @type {Object<Symbol,pair.Pair<string,string>>}
 */ const _browserStyleMap = {
    [_loggingCommonJs.BOLD]: _pairJs.create('font-weight', 'bold'),
    [_loggingCommonJs.UNBOLD]: _pairJs.create('font-weight', 'normal'),
    [_loggingCommonJs.BLUE]: _pairJs.create('color', 'blue'),
    [_loggingCommonJs.GREEN]: _pairJs.create('color', 'green'),
    [_loggingCommonJs.GREY]: _pairJs.create('color', 'grey'),
    [_loggingCommonJs.RED]: _pairJs.create('color', 'red'),
    [_loggingCommonJs.PURPLE]: _pairJs.create('color', 'purple'),
    [_loggingCommonJs.ORANGE]: _pairJs.create('color', 'orange'),
    [_loggingCommonJs.UNCOLOR]: _pairJs.create('color', 'black')
};
/**
 * @param {Array<string|Symbol|Object|number|function():any>} args
 * @return {Array<string|object|number>}
 */ /* c8 ignore start */ const computeBrowserLoggingArgs = (args)=>{
    if (args.length === 1 && args[0]?.constructor === Function) args = /** @type {Array<string|Symbol|Object|number>} */ /** @type {[function]} */ args[0]();
    const strBuilder = [];
    const styles = [];
    const currentStyle = _mapJs.create();
    /**
   * @type {Array<string|Object|number>}
   */ let logArgs = [];
    // try with formatting until we find something unsupported
    let i = 0;
    for(; i < args.length; i++){
        const arg = args[i];
        // @ts-ignore
        const style = _browserStyleMap[arg];
        if (style !== undefined) currentStyle.set(style.left, style.right);
        else {
            if (arg === undefined) break;
            if (arg.constructor === String || arg.constructor === Number) {
                const style = _domJs.mapToStyleString(currentStyle);
                if (i > 0 || style.length > 0) {
                    strBuilder.push('%c' + arg);
                    styles.push(style);
                } else strBuilder.push(arg);
            } else break;
        }
    }
    if (i > 0) {
        // create logArgs with what we have so far
        logArgs = styles;
        logArgs.unshift(strBuilder.join(''));
    }
    // append the rest
    for(; i < args.length; i++){
        const arg = args[i];
        if (!(arg instanceof Symbol)) logArgs.push(arg);
    }
    return logArgs;
};
/* c8 ignore stop */ /* c8 ignore start */ const computeLoggingArgs = _environmentJs.supportsColor ? computeBrowserLoggingArgs : _loggingCommonJs.computeNoColorLoggingArgs;
const print = (...args)=>{
    console.log(...computeLoggingArgs(args));
    /* c8 ignore next */ vconsoles.forEach((vc)=>vc.print(args));
};
const warn = (...args)=>{
    console.warn(...computeLoggingArgs(args));
    args.unshift(_loggingCommonJs.ORANGE);
    vconsoles.forEach((vc)=>vc.print(args));
};
const printError = (err)=>{
    console.error(err);
    vconsoles.forEach((vc)=>vc.printError(err));
};
const printImg = (url, height)=>{
    if (_environmentJs.isBrowser) console.log('%c                      ', `font-size: ${height}px; background-size: contain; background-repeat: no-repeat; background-image: url(${url})`);
    vconsoles.forEach((vc)=>vc.printImg(url, height));
};
const printImgBase64 = (base64, height)=>printImg(`data:image/gif;base64,${base64}`, height);
const group = (...args)=>{
    console.group(...computeLoggingArgs(args));
    /* c8 ignore next */ vconsoles.forEach((vc)=>vc.group(args));
};
const groupCollapsed = (...args)=>{
    console.groupCollapsed(...computeLoggingArgs(args));
    /* c8 ignore next */ vconsoles.forEach((vc)=>vc.groupCollapsed(args));
};
const groupEnd = ()=>{
    console.groupEnd();
    /* c8 ignore next */ vconsoles.forEach((vc)=>vc.groupEnd());
};
const printDom = (createNode)=>vconsoles.forEach((vc)=>vc.printDom(createNode()));
const printCanvas = (canvas, height)=>printImg(canvas.toDataURL(), height);
const vconsoles = _setJs.create();
/**
 * @param {Array<string|Symbol|Object|number>} args
 * @return {Array<Element>}
 */ /* c8 ignore start */ const _computeLineSpans = (args)=>{
    const spans = [];
    const currentStyle = new Map();
    // try with formatting until we find something unsupported
    let i = 0;
    for(; i < args.length; i++){
        let arg = args[i];
        // @ts-ignore
        const style = _browserStyleMap[arg];
        if (style !== undefined) currentStyle.set(style.left, style.right);
        else {
            if (arg === undefined) arg = 'undefined ';
            if (arg.constructor === String || arg.constructor === Number) {
                // @ts-ignore
                const span = _domJs.element('span', [
                    _pairJs.create('style', _domJs.mapToStyleString(currentStyle))
                ], [
                    _domJs.text(arg.toString())
                ]);
                if (span.innerHTML === '') span.innerHTML = '&nbsp;';
                spans.push(span);
            } else break;
        }
    }
    // append the rest
    for(; i < args.length; i++){
        let content = args[i];
        if (!(content instanceof Symbol)) {
            if (content.constructor !== String && content.constructor !== Number) content = ' ' + _jsonJs.stringify(content) + ' ';
            spans.push(_domJs.element('span', [], [
                _domJs.text(/** @type {string} */ content)
            ]));
        }
    }
    return spans;
};
/* c8 ignore stop */ const lineStyle = 'font-family:monospace;border-bottom:1px solid #e2e2e2;padding:2px;';
class VConsole {
    /**
   * @param {Element} dom
   */ constructor(dom){
        this.dom = dom;
        /**
     * @type {Element}
     */ this.ccontainer = this.dom;
        this.depth = 0;
        vconsoles.add(this);
    }
    /**
   * @param {Array<string|Symbol|Object|number>} args
   * @param {boolean} collapsed
   */ group(args, collapsed = false) {
        _eventloopJs.enqueue(()=>{
            const triangleDown = _domJs.element('span', [
                _pairJs.create('hidden', collapsed),
                _pairJs.create('style', 'color:grey;font-size:120%;')
            ], [
                _domJs.text("\u25BC")
            ]);
            const triangleRight = _domJs.element('span', [
                _pairJs.create('hidden', !collapsed),
                _pairJs.create('style', 'color:grey;font-size:125%;')
            ], [
                _domJs.text("\u25B6")
            ]);
            const content = _domJs.element('div', [
                _pairJs.create('style', `${lineStyle};padding-left:${this.depth * 10}px`)
            ], [
                triangleDown,
                triangleRight,
                _domJs.text(' ')
            ].concat(_computeLineSpans(args)));
            const nextContainer = _domJs.element('div', [
                _pairJs.create('hidden', collapsed)
            ]);
            const nextLine = _domJs.element('div', [], [
                content,
                nextContainer
            ]);
            _domJs.append(this.ccontainer, [
                nextLine
            ]);
            this.ccontainer = nextContainer;
            this.depth++;
            // when header is clicked, collapse/uncollapse container
            _domJs.addEventListener(content, 'click', (_event)=>{
                nextContainer.toggleAttribute('hidden');
                triangleDown.toggleAttribute('hidden');
                triangleRight.toggleAttribute('hidden');
            });
        });
    }
    /**
   * @param {Array<string|Symbol|Object|number>} args
   */ groupCollapsed(args) {
        this.group(args, true);
    }
    groupEnd() {
        _eventloopJs.enqueue(()=>{
            if (this.depth > 0) {
                this.depth--;
                // @ts-ignore
                this.ccontainer = this.ccontainer.parentElement.parentElement;
            }
        });
    }
    /**
   * @param {Array<string|Symbol|Object|number>} args
   */ print(args) {
        _eventloopJs.enqueue(()=>{
            _domJs.append(this.ccontainer, [
                _domJs.element('div', [
                    _pairJs.create('style', `${lineStyle};padding-left:${this.depth * 10}px`)
                ], _computeLineSpans(args))
            ]);
        });
    }
    /**
   * @param {Error} err
   */ printError(err) {
        this.print([
            _loggingCommonJs.RED,
            _loggingCommonJs.BOLD,
            err.toString()
        ]);
    }
    /**
   * @param {string} url
   * @param {number} height
   */ printImg(url, height) {
        _eventloopJs.enqueue(()=>{
            _domJs.append(this.ccontainer, [
                _domJs.element('img', [
                    _pairJs.create('src', url),
                    _pairJs.create('height', `${_mathJs.round(height * 1.5)}px`)
                ])
            ]);
        });
    }
    /**
   * @param {Node} node
   */ printDom(node) {
        _eventloopJs.enqueue(()=>{
            _domJs.append(this.ccontainer, [
                node
            ]);
        });
    }
    destroy() {
        _eventloopJs.enqueue(()=>{
            vconsoles.delete(this);
        });
    }
}
const createVConsole = (dom)=>new VConsole(dom);
const createModuleLogger = (moduleName)=>_loggingCommonJs.createModuleLogger(print, moduleName);

},{"./environment.js":"ctaVk","./set.js":"aUwzZ","./pair.js":"4xqbR","./dom.js":"boman","./json.js":"4PPtL","./map.js":"gptCt","./eventloop.js":"fZB5d","./math.js":"6VZDY","./logging.common.js":"5GsDt","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"4xqbR":[function(require,module,exports,__globalThis) {
/**
 * Working with value pairs.
 *
 * @module pair
 */ /**
 * @template L,R
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Pair", ()=>Pair);
parcelHelpers.export(exports, "create", ()=>create);
parcelHelpers.export(exports, "createReversed", ()=>createReversed);
parcelHelpers.export(exports, "forEach", ()=>forEach);
parcelHelpers.export(exports, "map", ()=>map);
class Pair {
    /**
   * @param {L} left
   * @param {R} right
   */ constructor(left, right){
        this.left = left;
        this.right = right;
    }
}
const create = (left, right)=>new Pair(left, right);
const createReversed = (right, left)=>new Pair(left, right);
const forEach = (arr, f)=>arr.forEach((p)=>f(p.left, p.right));
const map = (arr, f)=>arr.map((p)=>f(p.left, p.right));

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"boman":[function(require,module,exports,__globalThis) {
/* eslint-env browser */ /**
 * Utility module to work with the DOM.
 *
 * @module dom
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "doc", ()=>doc);
parcelHelpers.export(exports, "createElement", ()=>createElement);
parcelHelpers.export(exports, "createDocumentFragment", ()=>createDocumentFragment);
parcelHelpers.export(exports, "createTextNode", ()=>createTextNode);
parcelHelpers.export(exports, "domParser", ()=>domParser);
parcelHelpers.export(exports, "emitCustomEvent", ()=>emitCustomEvent);
parcelHelpers.export(exports, "setAttributes", ()=>setAttributes);
parcelHelpers.export(exports, "setAttributesMap", ()=>setAttributesMap);
parcelHelpers.export(exports, "fragment", ()=>fragment);
parcelHelpers.export(exports, "append", ()=>append);
parcelHelpers.export(exports, "remove", ()=>remove);
parcelHelpers.export(exports, "addEventListener", ()=>addEventListener);
parcelHelpers.export(exports, "removeEventListener", ()=>removeEventListener);
parcelHelpers.export(exports, "addEventListeners", ()=>addEventListeners);
parcelHelpers.export(exports, "removeEventListeners", ()=>removeEventListeners);
parcelHelpers.export(exports, "element", ()=>element);
parcelHelpers.export(exports, "canvas", ()=>canvas);
parcelHelpers.export(exports, "text", ()=>text);
parcelHelpers.export(exports, "pairToStyleString", ()=>pairToStyleString);
parcelHelpers.export(exports, "pairsToStyleString", ()=>pairsToStyleString);
parcelHelpers.export(exports, "mapToStyleString", ()=>mapToStyleString);
parcelHelpers.export(exports, "querySelector", ()=>querySelector);
parcelHelpers.export(exports, "querySelectorAll", ()=>querySelectorAll);
parcelHelpers.export(exports, "getElementById", ()=>getElementById);
parcelHelpers.export(exports, "parseFragment", ()=>parseFragment);
parcelHelpers.export(exports, "parseElement", ()=>parseElement);
parcelHelpers.export(exports, "replaceWith", ()=>replaceWith);
parcelHelpers.export(exports, "insertBefore", ()=>insertBefore);
parcelHelpers.export(exports, "appendChild", ()=>appendChild);
parcelHelpers.export(exports, "ELEMENT_NODE", ()=>ELEMENT_NODE);
parcelHelpers.export(exports, "TEXT_NODE", ()=>TEXT_NODE);
parcelHelpers.export(exports, "CDATA_SECTION_NODE", ()=>CDATA_SECTION_NODE);
parcelHelpers.export(exports, "COMMENT_NODE", ()=>COMMENT_NODE);
parcelHelpers.export(exports, "DOCUMENT_NODE", ()=>DOCUMENT_NODE);
parcelHelpers.export(exports, "DOCUMENT_TYPE_NODE", ()=>DOCUMENT_TYPE_NODE);
parcelHelpers.export(exports, "DOCUMENT_FRAGMENT_NODE", ()=>DOCUMENT_FRAGMENT_NODE);
parcelHelpers.export(exports, "checkNodeType", ()=>checkNodeType);
parcelHelpers.export(exports, "isParentOf", ()=>isParentOf);
var _pairJs = require("./pair.js");
var _mapJs = require("./map.js");
const doc = /** @type {Document} */ typeof document !== 'undefined' ? document : {};
const createElement = (name)=>doc.createElement(name);
const createDocumentFragment = ()=>doc.createDocumentFragment();
const createTextNode = (text)=>doc.createTextNode(text);
const domParser = /** @type {DOMParser} */ typeof DOMParser !== 'undefined' ? new DOMParser() : null;
const emitCustomEvent = (el, name, opts)=>el.dispatchEvent(new CustomEvent(name, opts));
const setAttributes = (el, attrs)=>{
    _pairJs.forEach(attrs, (key, value)=>{
        if (value === false) el.removeAttribute(key);
        else if (value === true) el.setAttribute(key, '');
        else // @ts-ignore
        el.setAttribute(key, value);
    });
    return el;
};
const setAttributesMap = (el, attrs)=>{
    attrs.forEach((value, key)=>{
        el.setAttribute(key, value);
    });
    return el;
};
const fragment = (children)=>{
    const fragment = createDocumentFragment();
    for(let i = 0; i < children.length; i++)appendChild(fragment, children[i]);
    return fragment;
};
const append = (parent, nodes)=>{
    appendChild(parent, fragment(nodes));
    return parent;
};
const remove = (el)=>el.remove();
const addEventListener = (el, name, f)=>el.addEventListener(name, f);
const removeEventListener = (el, name, f)=>el.removeEventListener(name, f);
const addEventListeners = (node, listeners)=>{
    _pairJs.forEach(listeners, (name, f)=>addEventListener(node, name, f));
    return node;
};
const removeEventListeners = (node, listeners)=>{
    _pairJs.forEach(listeners, (name, f)=>removeEventListener(node, name, f));
    return node;
};
const element = (name, attrs = [], children = [])=>append(setAttributes(createElement(name), attrs), children);
const canvas = (width, height)=>{
    const c = /** @type {HTMLCanvasElement} */ createElement('canvas');
    c.height = height;
    c.width = width;
    return c;
};
const text = createTextNode;
const pairToStyleString = (pair)=>`${pair.left}:${pair.right};`;
const pairsToStyleString = (pairs)=>pairs.map(pairToStyleString).join('');
const mapToStyleString = (m)=>_mapJs.map(m, (value, key)=>`${key}:${value};`).join('');
const querySelector = (el, query)=>el.querySelector(query);
const querySelectorAll = (el, query)=>el.querySelectorAll(query);
const getElementById = (id)=>/** @type {HTMLElement} */ doc.getElementById(id);
/**
 * @param {string} html
 * @return {HTMLElement}
 */ const _parse = (html)=>domParser.parseFromString(`<html><body>${html}</body></html>`, 'text/html').body;
const parseFragment = (html)=>fragment(/** @type {any} */ _parse(html).childNodes);
const parseElement = (html)=>/** @type HTMLElement */ _parse(html).firstElementChild;
const replaceWith = (oldEl, newEl)=>oldEl.replaceWith(newEl);
const insertBefore = (parent, el, ref)=>parent.insertBefore(el, ref);
const appendChild = (parent, child)=>parent.appendChild(child);
const ELEMENT_NODE = doc.ELEMENT_NODE;
const TEXT_NODE = doc.TEXT_NODE;
const CDATA_SECTION_NODE = doc.CDATA_SECTION_NODE;
const COMMENT_NODE = doc.COMMENT_NODE;
const DOCUMENT_NODE = doc.DOCUMENT_NODE;
const DOCUMENT_TYPE_NODE = doc.DOCUMENT_TYPE_NODE;
const DOCUMENT_FRAGMENT_NODE = doc.DOCUMENT_FRAGMENT_NODE;
const checkNodeType = (node, type)=>node.nodeType === type;
const isParentOf = (parent, child)=>{
    let p = child.parentNode;
    while(p && p !== parent)p = p.parentNode;
    return p === parent;
} /* c8 ignore stop */ ;

},{"./pair.js":"4xqbR","./map.js":"gptCt","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"4PPtL":[function(require,module,exports,__globalThis) {
/**
 * JSON utility functions.
 *
 * @module json
 */ /**
 * Transform JavaScript object to JSON.
 *
 * @param {any} object
 * @return {string}
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "stringify", ()=>stringify);
parcelHelpers.export(exports, "parse", ()=>parse);
const stringify = JSON.stringify;
const parse = JSON.parse;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"fZB5d":[function(require,module,exports,__globalThis) {
/* global requestIdleCallback, requestAnimationFrame, cancelIdleCallback, cancelAnimationFrame */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "enqueue", ()=>enqueue);
parcelHelpers.export(exports, "timeout", ()=>timeout);
parcelHelpers.export(exports, "interval", ()=>interval);
parcelHelpers.export(exports, "Animation", ()=>Animation);
parcelHelpers.export(exports, "animationFrame", ()=>animationFrame);
parcelHelpers.export(exports, "idleCallback", ()=>idleCallback);
parcelHelpers.export(exports, "createDebouncer", ()=>createDebouncer);
var _timeJs = require("./time.js");
/**
 * Utility module to work with EcmaScript's event loop.
 *
 * @module eventloop
 */ /**
 * @type {Array<function>}
 */ let queue = [];
const _runQueue = ()=>{
    for(let i = 0; i < queue.length; i++)queue[i]();
    queue = [];
};
const enqueue = (f)=>{
    queue.push(f);
    if (queue.length === 1) setTimeout(_runQueue, 0);
};
/**
 * @typedef {Object} TimeoutObject
 * @property {function} TimeoutObject.destroy
 */ /**
 * @param {function(number):void} clearFunction
 */ const createTimeoutClass = (clearFunction)=>class TT {
        /**
   * @param {number} timeoutId
   */ constructor(timeoutId){
            this._ = timeoutId;
        }
        destroy() {
            clearFunction(this._);
        }
    };
const Timeout = createTimeoutClass(clearTimeout);
const timeout = (timeout, callback)=>new Timeout(setTimeout(callback, timeout));
const Interval = createTimeoutClass(clearInterval);
const interval = (timeout, callback)=>new Interval(setInterval(callback, timeout));
const Animation = createTimeoutClass((arg)=>typeof requestAnimationFrame !== 'undefined' && cancelAnimationFrame(arg));
const animationFrame = (cb)=>typeof requestAnimationFrame === 'undefined' ? timeout(0, cb) : new Animation(requestAnimationFrame(cb));
/* c8 ignore next */ // @ts-ignore
const Idle = createTimeoutClass((arg)=>typeof cancelIdleCallback !== 'undefined' && cancelIdleCallback(arg));
const idleCallback = (cb)=>typeof requestIdleCallback !== 'undefined' ? new Idle(requestIdleCallback(cb)) : timeout(1000, cb);
const createDebouncer = (timeout, triggerAfter = -1)=>{
    let timer = -1;
    /**
   * @type {number?}
    */ let lastCall = null;
    /**
   * @param {((...args: any)=>void)?} cb function to trigger after debounce. If null, it will reset the
   *                         debounce.
   */ return (cb)=>{
        clearTimeout(timer);
        if (cb) {
            if (triggerAfter >= 0) {
                const now = _timeJs.getUnixTime();
                if (lastCall === null) lastCall = now;
                if (now - lastCall > triggerAfter) {
                    lastCall = null;
                    timer = /** @type {any} */ setTimeout(cb, 0);
                    return;
                }
            }
            timer = /** @type {any} */ setTimeout(()=>{
                lastCall = null;
                cb();
            }, timeout);
        } else lastCall = null;
    };
};

},{"./time.js":"f2yq7","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"5GsDt":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "BOLD", ()=>BOLD);
parcelHelpers.export(exports, "UNBOLD", ()=>UNBOLD);
parcelHelpers.export(exports, "BLUE", ()=>BLUE);
parcelHelpers.export(exports, "GREY", ()=>GREY);
parcelHelpers.export(exports, "GREEN", ()=>GREEN);
parcelHelpers.export(exports, "RED", ()=>RED);
parcelHelpers.export(exports, "PURPLE", ()=>PURPLE);
parcelHelpers.export(exports, "ORANGE", ()=>ORANGE);
parcelHelpers.export(exports, "UNCOLOR", ()=>UNCOLOR);
parcelHelpers.export(exports, "computeNoColorLoggingArgs", ()=>computeNoColorLoggingArgs);
parcelHelpers.export(exports, "createModuleLogger", ()=>createModuleLogger);
var _symbolJs = require("./symbol.js");
var _timeJs = require("./time.js");
var _environmentJs = require("./environment.js");
var _functionJs = require("./function.js");
var _jsonJs = require("./json.js");
const BOLD = _symbolJs.create();
const UNBOLD = _symbolJs.create();
const BLUE = _symbolJs.create();
const GREY = _symbolJs.create();
const GREEN = _symbolJs.create();
const RED = _symbolJs.create();
const PURPLE = _symbolJs.create();
const ORANGE = _symbolJs.create();
const UNCOLOR = _symbolJs.create();
const computeNoColorLoggingArgs = (args)=>{
    if (args.length === 1 && args[0]?.constructor === Function) args = /** @type {Array<string|Symbol|Object|number>} */ /** @type {[function]} */ args[0]();
    const strBuilder = [];
    const logArgs = [];
    // try with formatting until we find something unsupported
    let i = 0;
    for(; i < args.length; i++){
        const arg = args[i];
        if (arg === undefined) break;
        else if (arg.constructor === String || arg.constructor === Number) strBuilder.push(arg);
        else if (arg.constructor === Object) break;
    }
    if (i > 0) // create logArgs with what we have so far
    logArgs.push(strBuilder.join(''));
    // append the rest
    for(; i < args.length; i++){
        const arg = args[i];
        if (!(arg instanceof Symbol)) logArgs.push(arg);
    }
    return logArgs;
};
/* c8 ignore stop */ const loggingColors = [
    GREEN,
    PURPLE,
    ORANGE,
    BLUE
];
let nextColor = 0;
let lastLoggingTime = _timeJs.getUnixTime();
const createModuleLogger = (_print, moduleName)=>{
    const color = loggingColors[nextColor];
    const debugRegexVar = _environmentJs.getVariable('log');
    const doLogging = debugRegexVar !== null && (debugRegexVar === '*' || debugRegexVar === 'true' || new RegExp(debugRegexVar, 'gi').test(moduleName));
    nextColor = (nextColor + 1) % loggingColors.length;
    moduleName += ': ';
    return !doLogging ? _functionJs.nop : (...args)=>{
        if (args.length === 1 && args[0]?.constructor === Function) args = args[0]();
        const timeNow = _timeJs.getUnixTime();
        const timeDiff = timeNow - lastLoggingTime;
        lastLoggingTime = timeNow;
        _print(color, moduleName, UNCOLOR, ...args.map((arg)=>{
            if (arg != null && arg.constructor === Uint8Array) arg = Array.from(arg);
            const t = typeof arg;
            switch(t){
                case 'string':
                case 'symbol':
                    return arg;
                default:
                    return _jsonJs.stringify(arg);
            }
        }), color, ' +' + timeDiff + 'ms');
    };
} /* c8 ignore stop */ ;

},{"./symbol.js":"a9npd","./time.js":"f2yq7","./environment.js":"ctaVk","./function.js":"daIe8","./json.js":"4PPtL","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"a9npd":[function(require,module,exports,__globalThis) {
/**
 * Utility module to work with EcmaScript Symbols.
 *
 * @module symbol
 */ /**
 * Return fresh symbol.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "create", ()=>create);
parcelHelpers.export(exports, "isSymbol", ()=>isSymbol);
const create = Symbol;
const isSymbol = (s)=>typeof s === 'symbol';

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"hzzmU":[function(require,module,exports,__globalThis) {
/**
 * Utility module to create and manipulate Iterators.
 *
 * @module iterator
 */ /**
 * @template T,R
 * @param {Iterator<T>} iterator
 * @param {function(T):R} f
 * @return {IterableIterator<R>}
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "mapIterator", ()=>mapIterator);
parcelHelpers.export(exports, "createIterator", ()=>createIterator);
parcelHelpers.export(exports, "iteratorFilter", ()=>iteratorFilter);
parcelHelpers.export(exports, "iteratorMap", ()=>iteratorMap);
const mapIterator = (iterator, f)=>({
        [Symbol.iterator] () {
            return this;
        },
        // @ts-ignore
        next () {
            const r = iterator.next();
            return {
                value: r.done ? undefined : f(r.value),
                done: r.done
            };
        }
    });
const createIterator = (next)=>({
        /**
   * @return {IterableIterator<T>}
   */ [Symbol.iterator] () {
            return this;
        },
        // @ts-ignore
        next
    });
const iteratorFilter = (iterator, filter)=>createIterator(()=>{
        let res;
        do res = iterator.next();
        while (!res.done && !filter(res.value));
        return res;
    });
const iteratorMap = (iterator, fmap)=>createIterator(()=>{
        const { done, value } = iterator.next();
        return {
            done,
            value: done ? undefined : fmap(value)
        };
    });

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"3pf1U":[function(require,module,exports,__globalThis) {
/**
 * @module provider/websocket
 */ /* eslint-env browser */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "messageSync", ()=>messageSync);
parcelHelpers.export(exports, "messageQueryAwareness", ()=>messageQueryAwareness);
parcelHelpers.export(exports, "messageAwareness", ()=>messageAwareness);
parcelHelpers.export(exports, "messageAuth", ()=>messageAuth);
/**
 * Websocket Provider for Yjs. Creates a websocket connection to sync the shared document.
 * The document name is attached to the provided url. I.e. the following example
 * creates a websocket connection to http://localhost:1234/my-document-name
 *
 * @example
 *   import * as Y from 'yjs'
 *   import { WebsocketProvider } from 'y-websocket'
 *   const doc = new Y.Doc()
 *   const provider = new WebsocketProvider('http://localhost:1234', 'my-document-name', doc)
 *
 * @extends {ObservableV2<{ 'connection-close': (event: CloseEvent | null,  provider: WebsocketProvider) => any, 'status': (event: { status: 'connected' | 'disconnected' | 'connecting' }) => any, 'connection-error': (event: Event, provider: WebsocketProvider) => any, 'sync': (state: boolean) => any }>}
 */ parcelHelpers.export(exports, "WebsocketProvider", ()=>WebsocketProvider);
var _yjs = require("yjs"); // eslint-disable-line
var _broadcastchannel = require("lib0/broadcastchannel");
var _time = require("lib0/time");
var _encoding = require("lib0/encoding");
var _decoding = require("lib0/decoding");
var _sync = require("y-protocols/sync");
var _auth = require("y-protocols/auth");
var _awareness = require("y-protocols/awareness");
var _observable = require("lib0/observable");
var _math = require("lib0/math");
var _url = require("lib0/url");
var _environment = require("lib0/environment");
const messageSync = 0;
const messageQueryAwareness = 3;
const messageAwareness = 1;
const messageAuth = 2;
/**
 *                       encoder,          decoder,          provider,          emitSynced, messageType
 * @type {Array<function(encoding.Encoder, decoding.Decoder, WebsocketProvider, boolean,    number):void>}
 */ const messageHandlers = [];
messageHandlers[messageSync] = (encoder, decoder, provider, emitSynced, _messageType)=>{
    _encoding.writeVarUint(encoder, messageSync);
    const syncMessageType = _sync.readSyncMessage(decoder, encoder, provider.doc, provider);
    if (emitSynced && syncMessageType === _sync.messageYjsSyncStep2 && !provider.synced) provider.synced = true;
};
messageHandlers[messageQueryAwareness] = (encoder, _decoder, provider, _emitSynced, _messageType)=>{
    _encoding.writeVarUint(encoder, messageAwareness);
    _encoding.writeVarUint8Array(encoder, _awareness.encodeAwarenessUpdate(provider.awareness, Array.from(provider.awareness.getStates().keys())));
};
messageHandlers[messageAwareness] = (_encoder, decoder, provider, _emitSynced, _messageType)=>{
    _awareness.applyAwarenessUpdate(provider.awareness, _decoding.readVarUint8Array(decoder), provider);
};
messageHandlers[messageAuth] = (_encoder, decoder, provider, _emitSynced, _messageType)=>{
    _auth.readAuthMessage(decoder, provider.doc, (_ydoc, reason)=>permissionDeniedHandler(provider, reason));
};
// @todo - this should depend on awareness.outdatedTime
const messageReconnectTimeout = 30000;
/**
 * @param {WebsocketProvider} provider
 * @param {string} reason
 */ const permissionDeniedHandler = (provider, reason)=>console.warn(`Permission denied to access ${provider.url}.\n${reason}`);
/**
 * @param {WebsocketProvider} provider
 * @param {Uint8Array} buf
 * @param {boolean} emitSynced
 * @return {encoding.Encoder}
 */ const readMessage = (provider, buf, emitSynced)=>{
    const decoder = _decoding.createDecoder(buf);
    const encoder = _encoding.createEncoder();
    const messageType = _decoding.readVarUint(decoder);
    const messageHandler = provider.messageHandlers[messageType];
    if (/** @type {any} */ messageHandler) messageHandler(encoder, decoder, provider, emitSynced, messageType);
    else console.error('Unable to compute message');
    return encoder;
};
/**
 * Outsource this function so that a new websocket connection is created immediately.
 * I suspect that the `ws.onclose` event is not always fired if there are network issues.
 *
 * @param {WebsocketProvider} provider
 * @param {WebSocket} ws
 * @param {CloseEvent | null} event
 */ const closeWebsocketConnection = (provider, ws, event)=>{
    if (ws === provider.ws) {
        provider.emit('connection-close', [
            event,
            provider
        ]);
        provider.ws = null;
        ws.close();
        provider.wsconnecting = false;
        if (provider.wsconnected) {
            provider.wsconnected = false;
            provider.synced = false;
            // update awareness (all users except local left)
            _awareness.removeAwarenessStates(provider.awareness, Array.from(provider.awareness.getStates().keys()).filter((client)=>client !== provider.doc.clientID), provider);
            provider.emit('status', [
                {
                    status: 'disconnected'
                }
            ]);
        } else provider.wsUnsuccessfulReconnects++;
        // Start with no reconnect timeout and increase timeout by
        // using exponential backoff starting with 100ms
        setTimeout(setupWS, _math.min(_math.pow(2, provider.wsUnsuccessfulReconnects) * 100, provider.maxBackoffTime), provider);
    }
};
/**
 * @param {WebsocketProvider} provider
 */ const setupWS = (provider)=>{
    if (provider.shouldConnect && provider.ws === null) {
        const websocket = new provider._WS(provider.url, provider.protocols);
        websocket.binaryType = 'arraybuffer';
        provider.ws = websocket;
        provider.wsconnecting = true;
        provider.wsconnected = false;
        provider.synced = false;
        websocket.onmessage = (event)=>{
            provider.wsLastMessageReceived = _time.getUnixTime();
            const encoder = readMessage(provider, new Uint8Array(event.data), true);
            if (_encoding.length(encoder) > 1) websocket.send(_encoding.toUint8Array(encoder));
        };
        websocket.onerror = (event)=>{
            provider.emit('connection-error', [
                event,
                provider
            ]);
        };
        websocket.onclose = (event)=>{
            closeWebsocketConnection(provider, websocket, event);
        };
        websocket.onopen = ()=>{
            provider.wsLastMessageReceived = _time.getUnixTime();
            provider.wsconnecting = false;
            provider.wsconnected = true;
            provider.wsUnsuccessfulReconnects = 0;
            provider.emit('status', [
                {
                    status: 'connected'
                }
            ]);
            // always send sync step 1 when connected
            const encoder = _encoding.createEncoder();
            _encoding.writeVarUint(encoder, messageSync);
            _sync.writeSyncStep1(encoder, provider.doc);
            websocket.send(_encoding.toUint8Array(encoder));
            // broadcast local awareness state
            if (provider.awareness.getLocalState() !== null) {
                const encoderAwarenessState = _encoding.createEncoder();
                _encoding.writeVarUint(encoderAwarenessState, messageAwareness);
                _encoding.writeVarUint8Array(encoderAwarenessState, _awareness.encodeAwarenessUpdate(provider.awareness, [
                    provider.doc.clientID
                ]));
                websocket.send(_encoding.toUint8Array(encoderAwarenessState));
            }
        };
        provider.emit('status', [
            {
                status: 'connecting'
            }
        ]);
    }
};
/**
 * @param {WebsocketProvider} provider
 * @param {ArrayBuffer} buf
 */ const broadcastMessage = (provider, buf)=>{
    const ws = provider.ws;
    if (provider.wsconnected && ws && ws.readyState === ws.OPEN) ws.send(buf);
    if (provider.bcconnected) _broadcastchannel.publish(provider.bcChannel, buf, provider);
};
class WebsocketProvider extends (0, _observable.ObservableV2) {
    /**
   * @param {string} serverUrl
   * @param {string} roomname
   * @param {Y.Doc} doc
   * @param {object} opts
   * @param {boolean} [opts.connect]
   * @param {awarenessProtocol.Awareness} [opts.awareness]
   * @param {Object<string,string>} [opts.params] specify url parameters
   * @param {Array<string>} [opts.protocols] specify websocket protocols
   * @param {typeof WebSocket} [opts.WebSocketPolyfill] Optionall provide a WebSocket polyfill
   * @param {number} [opts.resyncInterval] Request server state every `resyncInterval` milliseconds
   * @param {number} [opts.maxBackoffTime] Maximum amount of time to wait before trying to reconnect (we try to reconnect using exponential backoff)
   * @param {boolean} [opts.disableBc] Disable cross-tab BroadcastChannel communication
   */ constructor(serverUrl, roomname, doc, { connect = true, awareness = new _awareness.Awareness(doc), params = {}, protocols = [], WebSocketPolyfill = WebSocket, resyncInterval = -1, maxBackoffTime = 2500, disableBc = false } = {}){
        super();
        // ensure that serverUrl does not end with /
        while(serverUrl[serverUrl.length - 1] === '/')serverUrl = serverUrl.slice(0, serverUrl.length - 1);
        this.serverUrl = serverUrl;
        this.bcChannel = serverUrl + '/' + roomname;
        this.maxBackoffTime = maxBackoffTime;
        /**
     * The specified url parameters. This can be safely updated. The changed parameters will be used
     * when a new connection is established.
     * @type {Object<string,string>}
     */ this.params = params;
        this.protocols = protocols;
        this.roomname = roomname;
        this.doc = doc;
        this._WS = WebSocketPolyfill;
        this.awareness = awareness;
        this.wsconnected = false;
        this.wsconnecting = false;
        this.bcconnected = false;
        this.disableBc = disableBc;
        this.wsUnsuccessfulReconnects = 0;
        this.messageHandlers = messageHandlers.slice();
        /**
     * @type {boolean}
     */ this._synced = false;
        /**
     * @type {WebSocket?}
     */ this.ws = null;
        this.wsLastMessageReceived = 0;
        /**
     * Whether to connect to other peers or not
     * @type {boolean}
     */ this.shouldConnect = connect;
        /**
     * @type {number}
     */ this._resyncInterval = 0;
        if (resyncInterval > 0) this._resyncInterval = /** @type {any} */ setInterval(()=>{
            if (this.ws && this.ws.readyState === WebSocket.OPEN) {
                // resend sync step 1
                const encoder = _encoding.createEncoder();
                _encoding.writeVarUint(encoder, messageSync);
                _sync.writeSyncStep1(encoder, doc);
                this.ws.send(_encoding.toUint8Array(encoder));
            }
        }, resyncInterval);
        /**
     * @param {ArrayBuffer} data
     * @param {any} origin
     */ this._bcSubscriber = (data, origin)=>{
            if (origin !== this) {
                const encoder = readMessage(this, new Uint8Array(data), false);
                if (_encoding.length(encoder) > 1) _broadcastchannel.publish(this.bcChannel, _encoding.toUint8Array(encoder), this);
            }
        };
        /**
     * Listens to Yjs updates and sends them to remote peers (ws and broadcastchannel)
     * @param {Uint8Array} update
     * @param {any} origin
     */ this._updateHandler = (update, origin)=>{
            if (origin !== this) {
                const encoder = _encoding.createEncoder();
                _encoding.writeVarUint(encoder, messageSync);
                _sync.writeUpdate(encoder, update);
                broadcastMessage(this, _encoding.toUint8Array(encoder));
            }
        };
        this.doc.on('update', this._updateHandler);
        /**
     * @param {any} changed
     * @param {any} _origin
     */ this._awarenessUpdateHandler = ({ added, updated, removed }, _origin)=>{
            const changedClients = added.concat(updated).concat(removed);
            const encoder = _encoding.createEncoder();
            _encoding.writeVarUint(encoder, messageAwareness);
            _encoding.writeVarUint8Array(encoder, _awareness.encodeAwarenessUpdate(awareness, changedClients));
            broadcastMessage(this, _encoding.toUint8Array(encoder));
        };
        this._exitHandler = ()=>{
            _awareness.removeAwarenessStates(this.awareness, [
                doc.clientID
            ], 'app closed');
        };
        _environment.isNode;
        awareness.on('update', this._awarenessUpdateHandler);
        this._checkInterval = /** @type {any} */ setInterval(()=>{
            if (this.wsconnected && messageReconnectTimeout < _time.getUnixTime() - this.wsLastMessageReceived) // no message received in a long time - not even your own awareness
            // updates (which are updated every 15 seconds)
            closeWebsocketConnection(this, /** @type {WebSocket} */ this.ws, null);
        }, messageReconnectTimeout / 10);
        if (connect) this.connect();
    }
    get url() {
        const encodedParams = _url.encodeQueryParams(this.params);
        return this.serverUrl + '/' + this.roomname + (encodedParams.length === 0 ? '' : '?' + encodedParams);
    }
    /**
   * @type {boolean}
   */ get synced() {
        return this._synced;
    }
    set synced(state) {
        if (this._synced !== state) {
            this._synced = state;
            // @ts-ignore
            this.emit('synced', [
                state
            ]);
            this.emit('sync', [
                state
            ]);
        }
    }
    destroy() {
        if (this._resyncInterval !== 0) clearInterval(this._resyncInterval);
        clearInterval(this._checkInterval);
        this.disconnect();
        _environment.isNode;
        this.awareness.off('update', this._awarenessUpdateHandler);
        this.doc.off('update', this._updateHandler);
        super.destroy();
    }
    connectBc() {
        if (this.disableBc) return;
        if (!this.bcconnected) {
            _broadcastchannel.subscribe(this.bcChannel, this._bcSubscriber);
            this.bcconnected = true;
        }
        // send sync step1 to bc
        // write sync step 1
        const encoderSync = _encoding.createEncoder();
        _encoding.writeVarUint(encoderSync, messageSync);
        _sync.writeSyncStep1(encoderSync, this.doc);
        _broadcastchannel.publish(this.bcChannel, _encoding.toUint8Array(encoderSync), this);
        // broadcast local state
        const encoderState = _encoding.createEncoder();
        _encoding.writeVarUint(encoderState, messageSync);
        _sync.writeSyncStep2(encoderState, this.doc);
        _broadcastchannel.publish(this.bcChannel, _encoding.toUint8Array(encoderState), this);
        // write queryAwareness
        const encoderAwarenessQuery = _encoding.createEncoder();
        _encoding.writeVarUint(encoderAwarenessQuery, messageQueryAwareness);
        _broadcastchannel.publish(this.bcChannel, _encoding.toUint8Array(encoderAwarenessQuery), this);
        // broadcast local awareness state
        const encoderAwarenessState = _encoding.createEncoder();
        _encoding.writeVarUint(encoderAwarenessState, messageAwareness);
        _encoding.writeVarUint8Array(encoderAwarenessState, _awareness.encodeAwarenessUpdate(this.awareness, [
            this.doc.clientID
        ]));
        _broadcastchannel.publish(this.bcChannel, _encoding.toUint8Array(encoderAwarenessState), this);
    }
    disconnectBc() {
        // broadcast message with local awareness state set to null (indicating disconnect)
        const encoder = _encoding.createEncoder();
        _encoding.writeVarUint(encoder, messageAwareness);
        _encoding.writeVarUint8Array(encoder, _awareness.encodeAwarenessUpdate(this.awareness, [
            this.doc.clientID
        ], new Map()));
        broadcastMessage(this, _encoding.toUint8Array(encoder));
        if (this.bcconnected) {
            _broadcastchannel.unsubscribe(this.bcChannel, this._bcSubscriber);
            this.bcconnected = false;
        }
    }
    disconnect() {
        this.shouldConnect = false;
        this.disconnectBc();
        if (this.ws !== null) closeWebsocketConnection(this, this.ws, null);
    }
    connect() {
        this.shouldConnect = true;
        if (!this.wsconnected && this.ws === null) {
            setupWS(this);
            this.connectBc();
        }
    }
}

},{"yjs":"dPcu2","lib0/broadcastchannel":"9MbyE","lib0/time":"f2yq7","lib0/encoding":"jDJaE","lib0/decoding":"hCqHb","y-protocols/sync":"cHZgZ","y-protocols/auth":"fZh4C","y-protocols/awareness":"d1GR0","lib0/observable":"48uyI","lib0/math":"6VZDY","lib0/url":"7IeaE","lib0/environment":"ctaVk","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"9MbyE":[function(require,module,exports,__globalThis) {
/* eslint-env browser */ /**
 * Helpers for cross-tab communication using broadcastchannel with LocalStorage fallback.
 *
 * ```js
 * // In browser window A:
 * broadcastchannel.subscribe('my events', data => console.log(data))
 * broadcastchannel.publish('my events', 'Hello world!') // => A: 'Hello world!' fires synchronously in same tab
 *
 * // In browser window B:
 * broadcastchannel.publish('my events', 'hello from tab B') // => A: 'hello from tab B'
 * ```
 *
 * @module broadcastchannel
 */ // @todo before next major: use Uint8Array instead as buffer object
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "subscribe", ()=>subscribe);
parcelHelpers.export(exports, "unsubscribe", ()=>unsubscribe);
parcelHelpers.export(exports, "publish", ()=>publish);
var _mapJs = require("./map.js");
var _setJs = require("./set.js");
var _bufferJs = require("./buffer.js");
var _storageJs = require("./storage.js");
/**
 * @typedef {Object} Channel
 * @property {Set<function(any, any):any>} Channel.subs
 * @property {any} Channel.bc
 */ /**
 * @type {Map<string, Channel>}
 */ const channels = new Map();
/* c8 ignore start */ class LocalStoragePolyfill {
    /**
   * @param {string} room
   */ constructor(room){
        this.room = room;
        /**
     * @type {null|function({data:ArrayBuffer}):void}
     */ this.onmessage = null;
        /**
     * @param {any} e
     */ this._onChange = (e)=>e.key === room && this.onmessage !== null && this.onmessage({
                data: _bufferJs.fromBase64(e.newValue || '')
            });
        _storageJs.onChange(this._onChange);
    }
    /**
   * @param {ArrayBuffer} buf
   */ postMessage(buf) {
        _storageJs.varStorage.setItem(this.room, _bufferJs.toBase64(_bufferJs.createUint8ArrayFromArrayBuffer(buf)));
    }
    close() {
        _storageJs.offChange(this._onChange);
    }
}
/* c8 ignore stop */ // Use BroadcastChannel or Polyfill
/* c8 ignore next */ const BC = typeof BroadcastChannel === 'undefined' ? LocalStoragePolyfill : BroadcastChannel;
/**
 * @param {string} room
 * @return {Channel}
 */ const getChannel = (room)=>_mapJs.setIfUndefined(channels, room, ()=>{
        const subs = _setJs.create();
        const bc = new BC(room);
        /**
     * @param {{data:ArrayBuffer}} e
     */ /* c8 ignore next */ bc.onmessage = (e)=>subs.forEach((sub)=>sub(e.data, 'broadcastchannel'));
        return {
            bc,
            subs
        };
    });
const subscribe = (room, f)=>{
    getChannel(room).subs.add(f);
    return f;
};
const unsubscribe = (room, f)=>{
    const channel = getChannel(room);
    const unsubscribed = channel.subs.delete(f);
    if (unsubscribed && channel.subs.size === 0) {
        channel.bc.close();
        channels.delete(room);
    }
    return unsubscribed;
};
const publish = (room, data, origin = null)=>{
    const c = getChannel(room);
    c.bc.postMessage(data);
    c.subs.forEach((sub)=>sub(data, origin));
};

},{"./map.js":"gptCt","./set.js":"aUwzZ","./buffer.js":"kZd6i","./storage.js":"avQOT","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"cHZgZ":[function(require,module,exports,__globalThis) {
/**
 * @module sync-protocol
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "messageYjsSyncStep1", ()=>messageYjsSyncStep1);
parcelHelpers.export(exports, "messageYjsSyncStep2", ()=>messageYjsSyncStep2);
parcelHelpers.export(exports, "messageYjsUpdate", ()=>messageYjsUpdate);
parcelHelpers.export(exports, "writeSyncStep1", ()=>writeSyncStep1);
parcelHelpers.export(exports, "writeSyncStep2", ()=>writeSyncStep2);
parcelHelpers.export(exports, "readSyncStep1", ()=>readSyncStep1);
parcelHelpers.export(exports, "readSyncStep2", ()=>readSyncStep2);
parcelHelpers.export(exports, "writeUpdate", ()=>writeUpdate);
parcelHelpers.export(exports, "readUpdate", ()=>readUpdate);
parcelHelpers.export(exports, "readSyncMessage", ()=>readSyncMessage);
var _encoding = require("lib0/encoding");
var _decoding = require("lib0/decoding");
var _yjs = require("yjs");
const messageYjsSyncStep1 = 0;
const messageYjsSyncStep2 = 1;
const messageYjsUpdate = 2;
const writeSyncStep1 = (encoder, doc)=>{
    _encoding.writeVarUint(encoder, messageYjsSyncStep1);
    const sv = _yjs.encodeStateVector(doc);
    _encoding.writeVarUint8Array(encoder, sv);
};
const writeSyncStep2 = (encoder, doc, encodedStateVector)=>{
    _encoding.writeVarUint(encoder, messageYjsSyncStep2);
    _encoding.writeVarUint8Array(encoder, _yjs.encodeStateAsUpdate(doc, encodedStateVector));
};
const readSyncStep1 = (decoder, encoder, doc)=>writeSyncStep2(encoder, doc, _decoding.readVarUint8Array(decoder));
const readSyncStep2 = (decoder, doc, transactionOrigin)=>{
    try {
        _yjs.applyUpdate(doc, _decoding.readVarUint8Array(decoder), transactionOrigin);
    } catch (error) {
        // This catches errors that are thrown by event handlers
        console.error('Caught error while handling a Yjs update', error);
    }
};
const writeUpdate = (encoder, update)=>{
    _encoding.writeVarUint(encoder, messageYjsUpdate);
    _encoding.writeVarUint8Array(encoder, update);
};
const readUpdate = readSyncStep2;
const readSyncMessage = (decoder, encoder, doc, transactionOrigin)=>{
    const messageType = _decoding.readVarUint(decoder);
    switch(messageType){
        case messageYjsSyncStep1:
            readSyncStep1(decoder, encoder, doc);
            break;
        case messageYjsSyncStep2:
            readSyncStep2(decoder, doc, transactionOrigin);
            break;
        case messageYjsUpdate:
            readUpdate(decoder, doc, transactionOrigin);
            break;
        default:
            throw new Error('Unknown message type');
    }
    return messageType;
};

},{"lib0/encoding":"jDJaE","lib0/decoding":"hCqHb","yjs":"dPcu2","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"fZh4C":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "messagePermissionDenied", ()=>messagePermissionDenied);
parcelHelpers.export(exports, "writePermissionDenied", ()=>writePermissionDenied);
parcelHelpers.export(exports, "readAuthMessage", ()=>readAuthMessage);
var _yjs = require("yjs"); // eslint-disable-line
var _encoding = require("lib0/encoding");
var _decoding = require("lib0/decoding");
const messagePermissionDenied = 0;
const writePermissionDenied = (encoder, reason)=>{
    _encoding.writeVarUint(encoder, messagePermissionDenied);
    _encoding.writeVarString(encoder, reason);
};
const readAuthMessage = (decoder, y, permissionDeniedHandler)=>{
    switch(_decoding.readVarUint(decoder)){
        case messagePermissionDenied:
            permissionDeniedHandler(y, _decoding.readVarString(decoder));
    }
};

},{"yjs":"dPcu2","lib0/encoding":"jDJaE","lib0/decoding":"hCqHb","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"d1GR0":[function(require,module,exports,__globalThis) {
/**
 * @module awareness-protocol
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "outdatedTimeout", ()=>outdatedTimeout);
/**
 * @typedef {Object} MetaClientState
 * @property {number} MetaClientState.clock
 * @property {number} MetaClientState.lastUpdated unix timestamp
 */ /**
 * The Awareness class implements a simple shared state protocol that can be used for non-persistent data like awareness information
 * (cursor, username, status, ..). Each client can update its own local state and listen to state changes of
 * remote clients. Every client may set a state of a remote peer to `null` to mark the client as offline.
 *
 * Each client is identified by a unique client id (something we borrow from `doc.clientID`). A client can override
 * its own state by propagating a message with an increasing timestamp (`clock`). If such a message is received, it is
 * applied if the known state of that client is older than the new state (`clock < newClock`). If a client thinks that
 * a remote client is offline, it may propagate a message with
 * `{ clock: currentClientClock, state: null, client: remoteClient }`. If such a
 * message is received, and the known clock of that client equals the received clock, it will override the state with `null`.
 *
 * Before a client disconnects, it should propagate a `null` state with an updated clock.
 *
 * Awareness states must be updated every 30 seconds. Otherwise the Awareness instance will delete the client state.
 *
 * @extends {Observable<string>}
 */ parcelHelpers.export(exports, "Awareness", ()=>Awareness);
parcelHelpers.export(exports, "removeAwarenessStates", ()=>removeAwarenessStates);
parcelHelpers.export(exports, "encodeAwarenessUpdate", ()=>encodeAwarenessUpdate);
parcelHelpers.export(exports, "modifyAwarenessUpdate", ()=>modifyAwarenessUpdate);
parcelHelpers.export(exports, "applyAwarenessUpdate", ()=>applyAwarenessUpdate);
var _encoding = require("lib0/encoding");
var _decoding = require("lib0/decoding");
var _time = require("lib0/time");
var _math = require("lib0/math");
var _observable = require("lib0/observable");
var _function = require("lib0/function");
var _yjs = require("yjs"); // eslint-disable-line
const outdatedTimeout = 30000;
class Awareness extends (0, _observable.Observable) {
    /**
   * @param {Y.Doc} doc
   */ constructor(doc){
        super();
        this.doc = doc;
        /**
     * @type {number}
     */ this.clientID = doc.clientID;
        /**
     * Maps from client id to client state
     * @type {Map<number, Object<string, any>>}
     */ this.states = new Map();
        /**
     * @type {Map<number, MetaClientState>}
     */ this.meta = new Map();
        this._checkInterval = /** @type {any} */ setInterval(()=>{
            const now = _time.getUnixTime();
            if (this.getLocalState() !== null && outdatedTimeout / 2 <= now - /** @type {{lastUpdated:number}} */ this.meta.get(this.clientID).lastUpdated) // renew local clock
            this.setLocalState(this.getLocalState());
            /**
       * @type {Array<number>}
       */ const remove = [];
            this.meta.forEach((meta, clientid)=>{
                if (clientid !== this.clientID && outdatedTimeout <= now - meta.lastUpdated && this.states.has(clientid)) remove.push(clientid);
            });
            if (remove.length > 0) removeAwarenessStates(this, remove, 'timeout');
        }, _math.floor(outdatedTimeout / 10));
        doc.on('destroy', ()=>{
            this.destroy();
        });
        this.setLocalState({});
    }
    destroy() {
        this.emit('destroy', [
            this
        ]);
        this.setLocalState(null);
        super.destroy();
        clearInterval(this._checkInterval);
    }
    /**
   * @return {Object<string,any>|null}
   */ getLocalState() {
        return this.states.get(this.clientID) || null;
    }
    /**
   * @param {Object<string,any>|null} state
   */ setLocalState(state) {
        const clientID = this.clientID;
        const currLocalMeta = this.meta.get(clientID);
        const clock = currLocalMeta === undefined ? 0 : currLocalMeta.clock + 1;
        const prevState = this.states.get(clientID);
        if (state === null) this.states.delete(clientID);
        else this.states.set(clientID, state);
        this.meta.set(clientID, {
            clock,
            lastUpdated: _time.getUnixTime()
        });
        const added = [];
        const updated = [];
        const filteredUpdated = [];
        const removed = [];
        if (state === null) removed.push(clientID);
        else if (prevState == null) {
            if (state != null) added.push(clientID);
        } else {
            updated.push(clientID);
            if (!_function.equalityDeep(prevState, state)) filteredUpdated.push(clientID);
        }
        if (added.length > 0 || filteredUpdated.length > 0 || removed.length > 0) this.emit('change', [
            {
                added,
                updated: filteredUpdated,
                removed
            },
            'local'
        ]);
        this.emit('update', [
            {
                added,
                updated,
                removed
            },
            'local'
        ]);
    }
    /**
   * @param {string} field
   * @param {any} value
   */ setLocalStateField(field, value) {
        const state = this.getLocalState();
        if (state !== null) this.setLocalState({
            ...state,
            [field]: value
        });
    }
    /**
   * @return {Map<number,Object<string,any>>}
   */ getStates() {
        return this.states;
    }
}
const removeAwarenessStates = (awareness, clients, origin)=>{
    const removed = [];
    for(let i = 0; i < clients.length; i++){
        const clientID = clients[i];
        if (awareness.states.has(clientID)) {
            awareness.states.delete(clientID);
            if (clientID === awareness.clientID) {
                const curMeta = /** @type {MetaClientState} */ awareness.meta.get(clientID);
                awareness.meta.set(clientID, {
                    clock: curMeta.clock + 1,
                    lastUpdated: _time.getUnixTime()
                });
            }
            removed.push(clientID);
        }
    }
    if (removed.length > 0) {
        awareness.emit('change', [
            {
                added: [],
                updated: [],
                removed
            },
            origin
        ]);
        awareness.emit('update', [
            {
                added: [],
                updated: [],
                removed
            },
            origin
        ]);
    }
};
const encodeAwarenessUpdate = (awareness, clients, states = awareness.states)=>{
    const len = clients.length;
    const encoder = _encoding.createEncoder();
    _encoding.writeVarUint(encoder, len);
    for(let i = 0; i < len; i++){
        const clientID = clients[i];
        const state = states.get(clientID) || null;
        const clock = /** @type {MetaClientState} */ awareness.meta.get(clientID).clock;
        _encoding.writeVarUint(encoder, clientID);
        _encoding.writeVarUint(encoder, clock);
        _encoding.writeVarString(encoder, JSON.stringify(state));
    }
    return _encoding.toUint8Array(encoder);
};
const modifyAwarenessUpdate = (update, modify)=>{
    const decoder = _decoding.createDecoder(update);
    const encoder = _encoding.createEncoder();
    const len = _decoding.readVarUint(decoder);
    _encoding.writeVarUint(encoder, len);
    for(let i = 0; i < len; i++){
        const clientID = _decoding.readVarUint(decoder);
        const clock = _decoding.readVarUint(decoder);
        const state = JSON.parse(_decoding.readVarString(decoder));
        const modifiedState = modify(state);
        _encoding.writeVarUint(encoder, clientID);
        _encoding.writeVarUint(encoder, clock);
        _encoding.writeVarString(encoder, JSON.stringify(modifiedState));
    }
    return _encoding.toUint8Array(encoder);
};
const applyAwarenessUpdate = (awareness, update, origin)=>{
    const decoder = _decoding.createDecoder(update);
    const timestamp = _time.getUnixTime();
    const added = [];
    const updated = [];
    const filteredUpdated = [];
    const removed = [];
    const len = _decoding.readVarUint(decoder);
    for(let i = 0; i < len; i++){
        const clientID = _decoding.readVarUint(decoder);
        let clock = _decoding.readVarUint(decoder);
        const state = JSON.parse(_decoding.readVarString(decoder));
        const clientMeta = awareness.meta.get(clientID);
        const prevState = awareness.states.get(clientID);
        const currClock = clientMeta === undefined ? 0 : clientMeta.clock;
        if (currClock < clock || currClock === clock && state === null && awareness.states.has(clientID)) {
            if (state === null) {
                // never let a remote client remove this local state
                if (clientID === awareness.clientID && awareness.getLocalState() != null) // remote client removed the local state. Do not remote state. Broadcast a message indicating
                // that this client still exists by increasing the clock
                clock++;
                else awareness.states.delete(clientID);
            } else awareness.states.set(clientID, state);
            awareness.meta.set(clientID, {
                clock,
                lastUpdated: timestamp
            });
            if (clientMeta === undefined && state !== null) added.push(clientID);
            else if (clientMeta !== undefined && state === null) removed.push(clientID);
            else if (state !== null) {
                if (!_function.equalityDeep(state, prevState)) filteredUpdated.push(clientID);
                updated.push(clientID);
            }
        }
    }
    if (added.length > 0 || filteredUpdated.length > 0 || removed.length > 0) awareness.emit('change', [
        {
            added,
            updated: filteredUpdated,
            removed
        },
        origin
    ]);
    if (added.length > 0 || updated.length > 0 || removed.length > 0) awareness.emit('update', [
        {
            added,
            updated,
            removed
        },
        origin
    ]);
};

},{"lib0/encoding":"jDJaE","lib0/decoding":"hCqHb","lib0/time":"f2yq7","lib0/math":"6VZDY","lib0/observable":"48uyI","lib0/function":"daIe8","yjs":"dPcu2","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"7IeaE":[function(require,module,exports,__globalThis) {
/**
 * Utility module to work with urls.
 *
 * @module url
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "decodeQueryParams", ()=>decodeQueryParams);
parcelHelpers.export(exports, "encodeQueryParams", ()=>encodeQueryParams);
var _objectJs = require("./object.js");
const decodeQueryParams = (url)=>{
    /**
   * @type {Object<string,string>}
   */ const query = {};
    const urlQuerySplit = url.split('?');
    const pairs = urlQuerySplit[urlQuerySplit.length - 1].split('&');
    for(let i = 0; i < pairs.length; i++){
        const item = pairs[i];
        if (item.length > 0) {
            const pair = item.split('=');
            query[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1] || '');
        }
    }
    return query;
};
const encodeQueryParams = (params)=>_objectJs.map(params, (val, key)=>`${encodeURIComponent(key)}=${encodeURIComponent(val)}`).join('&');

},{"./object.js":"1ap4a","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"9jzaU":[function(require,module,exports,__globalThis) {
/**
 * @module bindings/quill
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "normQuillDelta", ()=>normQuillDelta);
parcelHelpers.export(exports, "QuillBinding", ()=>QuillBinding);
var _yjs = require("yjs"); // eslint-disable-line
const normQuillDelta = (delta)=>{
    if (delta.length > 0) {
        const d = delta[delta.length - 1];
        const insert = d.insert;
        if (d.attributes === undefined && insert !== undefined && insert.slice(-1) === '\n') {
            delta = delta.slice();
            let ins = insert.slice(0, -1);
            while(ins.slice(-1) === '\n')ins = ins.slice(0, -1);
            delta[delta.length - 1] = {
                insert: ins
            };
            if (ins.length === 0) delta.pop();
            return delta;
        }
    }
    return delta;
};
/**
 * @param {any} quillCursors
 */ const updateCursor = (quillCursors, aw, clientId, doc, type)=>{
    try {
        if (aw && aw.cursor && clientId !== doc.clientID) {
            const user = aw.user || {};
            const color = user.color || '#ffa500';
            const name = user.name || `User: ${clientId}`;
            quillCursors.createCursor(clientId.toString(), name, color);
            const anchor = _yjs.createAbsolutePositionFromRelativePosition(_yjs.createRelativePositionFromJSON(aw.cursor.anchor), doc);
            const head = _yjs.createAbsolutePositionFromRelativePosition(_yjs.createRelativePositionFromJSON(aw.cursor.head), doc);
            if (anchor && head && anchor.type === type) quillCursors.moveCursor(clientId.toString(), {
                index: anchor.index,
                length: head.index - anchor.index
            });
        } else quillCursors.removeCursor(clientId.toString());
    } catch (err) {
        console.error(err);
    }
};
class QuillBinding {
    /**
   * @param {Y.Text} type
   * @param {any} quill
   * @param {Awareness} [awareness]
   */ constructor(type, quill, awareness){
        const doc = /** @type {Y.Doc} */ type.doc;
        this.type = type;
        this.doc = doc;
        this.quill = quill;
        const quillCursors = quill.getModule('cursors') || null;
        this.quillCursors = quillCursors;
        // This object contains all attributes used in the quill instance
        this._negatedUsedFormats = {};
        this.awareness = awareness;
        this._awarenessChange = ({ added, removed, updated })=>{
            const states = /** @type {Awareness} */ awareness.getStates();
            added.forEach((id)=>{
                updateCursor(quillCursors, states.get(id), id, doc, type);
            });
            updated.forEach((id)=>{
                updateCursor(quillCursors, states.get(id), id, doc, type);
            });
            removed.forEach((id)=>{
                quillCursors.removeCursor(id.toString());
            });
        };
        /**
     * @param {Y.YTextEvent} event
     */ this._typeObserver = (event)=>{
            if (event.transaction.origin !== this) {
                const eventDelta = event.delta;
                // We always explicitly set attributes, otherwise concurrent edits may
                // result in quill assuming that a text insertion shall inherit existing
                // attributes.
                const delta = [];
                for(let i = 0; i < eventDelta.length; i++){
                    const d = eventDelta[i];
                    if (d.insert !== undefined) delta.push(Object.assign({}, d, {
                        attributes: Object.assign({}, this._negatedUsedFormats, d.attributes || {})
                    }));
                    else delta.push(d);
                }
                quill.updateContents(delta, this);
            }
        };
        type.observe(this._typeObserver);
        this._quillObserver = (eventType, delta, state, origin)=>{
            if (delta && delta.ops) {
                // update content
                const ops = delta.ops;
                ops.forEach((op)=>{
                    if (op.attributes !== undefined) {
                        for(const key in op.attributes)if (this._negatedUsedFormats[key] === undefined) this._negatedUsedFormats[key] = false;
                    }
                });
                if (origin !== this) doc.transact(()=>{
                    type.applyDelta(ops);
                }, this);
            }
            // always check selection
            if (awareness && quillCursors) {
                const sel = quill.getSelection();
                const aw = /** @type {any} */ awareness.getLocalState();
                if (sel === null) {
                    if (awareness.getLocalState() !== null) awareness.setLocalStateField('cursor', /** @type {any} */ null);
                } else {
                    const anchor = _yjs.createRelativePositionFromTypeIndex(type, sel.index);
                    const head = _yjs.createRelativePositionFromTypeIndex(type, sel.index + sel.length);
                    if (!aw || !aw.cursor || !_yjs.compareRelativePositions(anchor, aw.cursor.anchor) || !_yjs.compareRelativePositions(head, aw.cursor.head)) awareness.setLocalStateField('cursor', {
                        anchor,
                        head
                    });
                }
                // update all remote cursor locations
                awareness.getStates().forEach((aw, clientId)=>{
                    updateCursor(quillCursors, aw, clientId, doc, type);
                });
            }
        };
        quill.on('editor-change', this._quillObserver);
        // This indirectly initializes _negatedUsedFormats.
        // Make sure that this call this after the _quillObserver is set.
        quill.setContents(type.toDelta(), this);
        // init remote cursors
        if (quillCursors !== null && awareness) {
            awareness.getStates().forEach((aw, clientId)=>{
                updateCursor(quillCursors, aw, clientId, doc, type);
            });
            awareness.on('change', this._awarenessChange);
        }
    }
    destroy() {
        this.type.unobserve(this._typeObserver);
        this.quill.off('editor-change', this._quillObserver);
        if (this.awareness) this.awareness.off('change', this._awarenessChange);
    }
}

},{"yjs":"dPcu2","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"24OPJ":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Protocol version.
 *
 * @public
 */ parcelHelpers.export(exports, "protocol", ()=>(0, _socketIoParser.protocol));
parcelHelpers.export(exports, "Fetch", ()=>(0, _engineIoClient.Fetch));
parcelHelpers.export(exports, "NodeXHR", ()=>(0, _engineIoClient.NodeXHR));
parcelHelpers.export(exports, "XHR", ()=>(0, _engineIoClient.XHR));
parcelHelpers.export(exports, "NodeWebSocket", ()=>(0, _engineIoClient.NodeWebSocket));
parcelHelpers.export(exports, "WebSocket", ()=>(0, _engineIoClient.WebSocket));
parcelHelpers.export(exports, "WebTransport", ()=>(0, _engineIoClient.WebTransport));
/**
 * Expose constructors for standalone build.
 *
 * @public
 */ parcelHelpers.export(exports, "Manager", ()=>(0, _managerJs.Manager));
parcelHelpers.export(exports, "Socket", ()=>(0, _socketJs.Socket));
parcelHelpers.export(exports, "io", ()=>lookup);
parcelHelpers.export(exports, "connect", ()=>lookup);
parcelHelpers.export(exports, "default", ()=>lookup);
var _urlJs = require("./url.js");
var _managerJs = require("./manager.js");
var _socketJs = require("./socket.js");
var _socketIoParser = require("socket.io-parser");
var _engineIoClient = require("engine.io-client");
/**
 * Managers cache.
 */ const cache = {};
function lookup(uri, opts) {
    if (typeof uri === "object") {
        opts = uri;
        uri = undefined;
    }
    opts = opts || {};
    const parsed = (0, _urlJs.url)(uri, opts.path || "/socket.io");
    const source = parsed.source;
    const id = parsed.id;
    const path = parsed.path;
    const sameNamespace = cache[id] && path in cache[id]["nsps"];
    const newConnection = opts.forceNew || opts["force new connection"] || false === opts.multiplex || sameNamespace;
    let io;
    if (newConnection) io = new (0, _managerJs.Manager)(source, opts);
    else {
        if (!cache[id]) cache[id] = new (0, _managerJs.Manager)(source, opts);
        io = cache[id];
    }
    if (parsed.query && !opts.query) opts.query = parsed.queryKey;
    return io.socket(parsed.path, opts);
}
// so that "lookup" can be used both as a function (e.g. `io(...)`) and as a
// namespace (e.g. `io.connect(...)`), for backward compatibility
Object.assign(lookup, {
    Manager: (0, _managerJs.Manager),
    Socket: (0, _socketJs.Socket),
    io: lookup,
    connect: lookup
});

},{"./url.js":"3DhHP","./manager.js":"9SqfW","./socket.js":"5p2b8","socket.io-parser":"374iO","engine.io-client":"g33FB","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"3DhHP":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * URL parser.
 *
 * @param uri - url
 * @param path - the request path of the connection
 * @param loc - An object meant to mimic window.location.
 *        Defaults to window.location.
 * @public
 */ parcelHelpers.export(exports, "url", ()=>url);
var _engineIoClient = require("engine.io-client");
function url(uri, path = "", loc) {
    let obj = uri;
    // default to window.location
    loc = loc || typeof location !== "undefined" && location;
    if (null == uri) uri = loc.protocol + "//" + loc.host;
    // relative path support
    if (typeof uri === "string") {
        if ("/" === uri.charAt(0)) {
            if ("/" === uri.charAt(1)) uri = loc.protocol + uri;
            else uri = loc.host + uri;
        }
        if (!/^(https?|wss?):\/\//.test(uri)) {
            if ("undefined" !== typeof loc) uri = loc.protocol + "//" + uri;
            else uri = "https://" + uri;
        }
        // parse
        obj = (0, _engineIoClient.parse)(uri);
    }
    // make sure we treat `localhost:80` and `localhost` equally
    if (!obj.port) {
        if (/^(http|ws)$/.test(obj.protocol)) obj.port = "80";
        else if (/^(http|ws)s$/.test(obj.protocol)) obj.port = "443";
    }
    obj.path = obj.path || "/";
    const ipv6 = obj.host.indexOf(":") !== -1;
    const host = ipv6 ? "[" + obj.host + "]" : obj.host;
    // define unique id
    obj.id = obj.protocol + "://" + host + ":" + obj.port + path;
    // define href
    obj.href = obj.protocol + "://" + host + (loc && loc.port === obj.port ? "" : ":" + obj.port);
    return obj;
}

},{"engine.io-client":"g33FB","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"g33FB":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "SocketWithoutUpgrade", ()=>(0, _socketJs.SocketWithoutUpgrade));
parcelHelpers.export(exports, "SocketWithUpgrade", ()=>(0, _socketJs.SocketWithUpgrade));
parcelHelpers.export(exports, "Transport", ()=>(0, _transportJs.Transport));
parcelHelpers.export(exports, "TransportError", ()=>(0, _transportJs.TransportError));
parcelHelpers.export(exports, "transports", ()=>(0, _indexJs.transports));
parcelHelpers.export(exports, "installTimerFunctions", ()=>(0, _utilJs.installTimerFunctions));
parcelHelpers.export(exports, "parse", ()=>(0, _parseuriJs.parse));
parcelHelpers.export(exports, "nextTick", ()=>(0, _globalsNodeJs.nextTick));
parcelHelpers.export(exports, "Fetch", ()=>(0, _pollingFetchJs.Fetch));
parcelHelpers.export(exports, "NodeXHR", ()=>(0, _pollingXhrNodeJs.XHR));
parcelHelpers.export(exports, "XHR", ()=>(0, _pollingXhrJs.XHR));
parcelHelpers.export(exports, "NodeWebSocket", ()=>(0, _websocketNodeJs.WS));
parcelHelpers.export(exports, "WebSocket", ()=>(0, _websocketJs.WS));
parcelHelpers.export(exports, "WebTransport", ()=>(0, _webtransportJs.WT));
parcelHelpers.export(exports, "Socket", ()=>(0, _socketJs.Socket));
parcelHelpers.export(exports, "protocol", ()=>protocol);
var _socketJs = require("./socket.js");
var _transportJs = require("./transport.js");
var _indexJs = require("./transports/index.js");
var _utilJs = require("./util.js");
var _parseuriJs = require("./contrib/parseuri.js");
var _globalsNodeJs = require("./globals.node.js");
var _pollingFetchJs = require("./transports/polling-fetch.js");
var _pollingXhrNodeJs = require("./transports/polling-xhr.node.js");
var _pollingXhrJs = require("./transports/polling-xhr.js");
var _websocketNodeJs = require("./transports/websocket.node.js");
var _websocketJs = require("./transports/websocket.js");
var _webtransportJs = require("./transports/webtransport.js");
const protocol = (0, _socketJs.Socket).protocol;

},{"./socket.js":"glETn","./transport.js":"9tBQf","./transports/index.js":"91wUX","./util.js":"kk7Cp","./contrib/parseuri.js":"5Y2kK","./globals.node.js":"6Aw5d","./transports/polling-fetch.js":"3mA2E","./transports/polling-xhr.node.js":"3Fuqh","./transports/polling-xhr.js":"3Fuqh","./transports/websocket.node.js":"8Q316","./transports/websocket.js":"8Q316","./transports/webtransport.js":"g53pT","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"glETn":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * This class provides a WebSocket-like interface to connect to an Engine.IO server. The connection will be established
 * with one of the available low-level transports, like HTTP long-polling, WebSocket or WebTransport.
 *
 * This class comes without upgrade mechanism, which means that it will keep the first low-level transport that
 * successfully establishes the connection.
 *
 * In order to allow tree-shaking, there are no transports included, that's why the `transports` option is mandatory.
 *
 * @example
 * import { SocketWithoutUpgrade, WebSocket } from "engine.io-client";
 *
 * const socket = new SocketWithoutUpgrade({
 *   transports: [WebSocket]
 * });
 *
 * socket.on("open", () => {
 *   socket.send("hello");
 * });
 *
 * @see SocketWithUpgrade
 * @see Socket
 */ parcelHelpers.export(exports, "SocketWithoutUpgrade", ()=>SocketWithoutUpgrade);
/**
 * This class provides a WebSocket-like interface to connect to an Engine.IO server. The connection will be established
 * with one of the available low-level transports, like HTTP long-polling, WebSocket or WebTransport.
 *
 * This class comes with an upgrade mechanism, which means that once the connection is established with the first
 * low-level transport, it will try to upgrade to a better transport.
 *
 * In order to allow tree-shaking, there are no transports included, that's why the `transports` option is mandatory.
 *
 * @example
 * import { SocketWithUpgrade, WebSocket } from "engine.io-client";
 *
 * const socket = new SocketWithUpgrade({
 *   transports: [WebSocket]
 * });
 *
 * socket.on("open", () => {
 *   socket.send("hello");
 * });
 *
 * @see SocketWithoutUpgrade
 * @see Socket
 */ parcelHelpers.export(exports, "SocketWithUpgrade", ()=>SocketWithUpgrade);
/**
 * This class provides a WebSocket-like interface to connect to an Engine.IO server. The connection will be established
 * with one of the available low-level transports, like HTTP long-polling, WebSocket or WebTransport.
 *
 * This class comes with an upgrade mechanism, which means that once the connection is established with the first
 * low-level transport, it will try to upgrade to a better transport.
 *
 * @example
 * import { Socket } from "engine.io-client";
 *
 * const socket = new Socket();
 *
 * socket.on("open", () => {
 *   socket.send("hello");
 * });
 *
 * @see SocketWithoutUpgrade
 * @see SocketWithUpgrade
 */ parcelHelpers.export(exports, "Socket", ()=>Socket);
var _indexJs = require("./transports/index.js");
var _utilJs = require("./util.js");
var _parseqsJs = require("./contrib/parseqs.js");
var _parseuriJs = require("./contrib/parseuri.js");
var _componentEmitter = require("@socket.io/component-emitter");
var _engineIoParser = require("engine.io-parser");
var _globalsNodeJs = require("./globals.node.js");
const withEventListeners = typeof addEventListener === "function" && typeof removeEventListener === "function";
const OFFLINE_EVENT_LISTENERS = [];
if (withEventListeners) // within a ServiceWorker, any event handler for the 'offline' event must be added on the initial evaluation of the
// script, so we create one single event listener here which will forward the event to the socket instances
addEventListener("offline", ()=>{
    OFFLINE_EVENT_LISTENERS.forEach((listener)=>listener());
}, false);
class SocketWithoutUpgrade extends (0, _componentEmitter.Emitter) {
    /**
     * Socket constructor.
     *
     * @param {String|Object} uri - uri or options
     * @param {Object} opts - options
     */ constructor(uri, opts){
        super();
        this.binaryType = (0, _globalsNodeJs.defaultBinaryType);
        this.writeBuffer = [];
        this._prevBufferLen = 0;
        this._pingInterval = -1;
        this._pingTimeout = -1;
        this._maxPayload = -1;
        /**
         * The expiration timestamp of the {@link _pingTimeoutTimer} object is tracked, in case the timer is throttled and the
         * callback is not fired on time. This can happen for example when a laptop is suspended or when a phone is locked.
         */ this._pingTimeoutTime = Infinity;
        if (uri && "object" === typeof uri) {
            opts = uri;
            uri = null;
        }
        if (uri) {
            const parsedUri = (0, _parseuriJs.parse)(uri);
            opts.hostname = parsedUri.host;
            opts.secure = parsedUri.protocol === "https" || parsedUri.protocol === "wss";
            opts.port = parsedUri.port;
            if (parsedUri.query) opts.query = parsedUri.query;
        } else if (opts.host) opts.hostname = (0, _parseuriJs.parse)(opts.host).host;
        (0, _utilJs.installTimerFunctions)(this, opts);
        this.secure = null != opts.secure ? opts.secure : typeof location !== "undefined" && "https:" === location.protocol;
        if (opts.hostname && !opts.port) // if no port is specified manually, use the protocol default
        opts.port = this.secure ? "443" : "80";
        this.hostname = opts.hostname || (typeof location !== "undefined" ? location.hostname : "localhost");
        this.port = opts.port || (typeof location !== "undefined" && location.port ? location.port : this.secure ? "443" : "80");
        this.transports = [];
        this._transportsByName = {};
        opts.transports.forEach((t)=>{
            const transportName = t.prototype.name;
            this.transports.push(transportName);
            this._transportsByName[transportName] = t;
        });
        this.opts = Object.assign({
            path: "/engine.io",
            agent: false,
            withCredentials: false,
            upgrade: true,
            timestampParam: "t",
            rememberUpgrade: false,
            addTrailingSlash: true,
            rejectUnauthorized: true,
            perMessageDeflate: {
                threshold: 1024
            },
            transportOptions: {},
            closeOnBeforeunload: false
        }, opts);
        this.opts.path = this.opts.path.replace(/\/$/, "") + (this.opts.addTrailingSlash ? "/" : "");
        if (typeof this.opts.query === "string") this.opts.query = (0, _parseqsJs.decode)(this.opts.query);
        if (withEventListeners) {
            if (this.opts.closeOnBeforeunload) {
                // Firefox closes the connection when the "beforeunload" event is emitted but not Chrome. This event listener
                // ensures every browser behaves the same (no "disconnect" event at the Socket.IO level when the page is
                // closed/reloaded)
                this._beforeunloadEventListener = ()=>{
                    if (this.transport) {
                        // silently close the transport
                        this.transport.removeAllListeners();
                        this.transport.close();
                    }
                };
                addEventListener("beforeunload", this._beforeunloadEventListener, false);
            }
            if (this.hostname !== "localhost") {
                this._offlineEventListener = ()=>{
                    this._onClose("transport close", {
                        description: "network connection lost"
                    });
                };
                OFFLINE_EVENT_LISTENERS.push(this._offlineEventListener);
            }
        }
        if (this.opts.withCredentials) this._cookieJar = (0, _globalsNodeJs.createCookieJar)();
        this._open();
    }
    /**
     * Creates transport of the given type.
     *
     * @param {String} name - transport name
     * @return {Transport}
     * @private
     */ createTransport(name) {
        const query = Object.assign({}, this.opts.query);
        // append engine.io protocol identifier
        query.EIO = (0, _engineIoParser.protocol);
        // transport name
        query.transport = name;
        // session id if we already have one
        if (this.id) query.sid = this.id;
        const opts = Object.assign({}, this.opts, {
            query,
            socket: this,
            hostname: this.hostname,
            secure: this.secure,
            port: this.port
        }, this.opts.transportOptions[name]);
        return new this._transportsByName[name](opts);
    }
    /**
     * Initializes transport to use and starts probe.
     *
     * @private
     */ _open() {
        if (this.transports.length === 0) {
            // Emit error on next tick so it can be listened to
            this.setTimeoutFn(()=>{
                this.emitReserved("error", "No transports available");
            }, 0);
            return;
        }
        const transportName = this.opts.rememberUpgrade && SocketWithoutUpgrade.priorWebsocketSuccess && this.transports.indexOf("websocket") !== -1 ? "websocket" : this.transports[0];
        this.readyState = "opening";
        const transport = this.createTransport(transportName);
        transport.open();
        this.setTransport(transport);
    }
    /**
     * Sets the current transport. Disables the existing one (if any).
     *
     * @private
     */ setTransport(transport) {
        if (this.transport) this.transport.removeAllListeners();
        // set up transport
        this.transport = transport;
        // set up transport listeners
        transport.on("drain", this._onDrain.bind(this)).on("packet", this._onPacket.bind(this)).on("error", this._onError.bind(this)).on("close", (reason)=>this._onClose("transport close", reason));
    }
    /**
     * Called when connection is deemed open.
     *
     * @private
     */ onOpen() {
        this.readyState = "open";
        SocketWithoutUpgrade.priorWebsocketSuccess = "websocket" === this.transport.name;
        this.emitReserved("open");
        this.flush();
    }
    /**
     * Handles a packet.
     *
     * @private
     */ _onPacket(packet) {
        if ("opening" === this.readyState || "open" === this.readyState || "closing" === this.readyState) {
            this.emitReserved("packet", packet);
            // Socket is live - any packet counts
            this.emitReserved("heartbeat");
            switch(packet.type){
                case "open":
                    this.onHandshake(JSON.parse(packet.data));
                    break;
                case "ping":
                    this._sendPacket("pong");
                    this.emitReserved("ping");
                    this.emitReserved("pong");
                    this._resetPingTimeout();
                    break;
                case "error":
                    const err = new Error("server error");
                    // @ts-ignore
                    err.code = packet.data;
                    this._onError(err);
                    break;
                case "message":
                    this.emitReserved("data", packet.data);
                    this.emitReserved("message", packet.data);
                    break;
            }
        }
    }
    /**
     * Called upon handshake completion.
     *
     * @param {Object} data - handshake obj
     * @private
     */ onHandshake(data) {
        this.emitReserved("handshake", data);
        this.id = data.sid;
        this.transport.query.sid = data.sid;
        this._pingInterval = data.pingInterval;
        this._pingTimeout = data.pingTimeout;
        this._maxPayload = data.maxPayload;
        this.onOpen();
        // In case open handler closes socket
        if ("closed" === this.readyState) return;
        this._resetPingTimeout();
    }
    /**
     * Sets and resets ping timeout timer based on server pings.
     *
     * @private
     */ _resetPingTimeout() {
        this.clearTimeoutFn(this._pingTimeoutTimer);
        const delay = this._pingInterval + this._pingTimeout;
        this._pingTimeoutTime = Date.now() + delay;
        this._pingTimeoutTimer = this.setTimeoutFn(()=>{
            this._onClose("ping timeout");
        }, delay);
        if (this.opts.autoUnref) this._pingTimeoutTimer.unref();
    }
    /**
     * Called on `drain` event
     *
     * @private
     */ _onDrain() {
        this.writeBuffer.splice(0, this._prevBufferLen);
        // setting prevBufferLen = 0 is very important
        // for example, when upgrading, upgrade packet is sent over,
        // and a nonzero prevBufferLen could cause problems on `drain`
        this._prevBufferLen = 0;
        if (0 === this.writeBuffer.length) this.emitReserved("drain");
        else this.flush();
    }
    /**
     * Flush write buffers.
     *
     * @private
     */ flush() {
        if ("closed" !== this.readyState && this.transport.writable && !this.upgrading && this.writeBuffer.length) {
            const packets = this._getWritablePackets();
            this.transport.send(packets);
            // keep track of current length of writeBuffer
            // splice writeBuffer and callbackBuffer on `drain`
            this._prevBufferLen = packets.length;
            this.emitReserved("flush");
        }
    }
    /**
     * Ensure the encoded size of the writeBuffer is below the maxPayload value sent by the server (only for HTTP
     * long-polling)
     *
     * @private
     */ _getWritablePackets() {
        const shouldCheckPayloadSize = this._maxPayload && this.transport.name === "polling" && this.writeBuffer.length > 1;
        if (!shouldCheckPayloadSize) return this.writeBuffer;
        let payloadSize = 1; // first packet type
        for(let i = 0; i < this.writeBuffer.length; i++){
            const data = this.writeBuffer[i].data;
            if (data) payloadSize += (0, _utilJs.byteLength)(data);
            if (i > 0 && payloadSize > this._maxPayload) return this.writeBuffer.slice(0, i);
            payloadSize += 2; // separator + packet type
        }
        return this.writeBuffer;
    }
    /**
     * Checks whether the heartbeat timer has expired but the socket has not yet been notified.
     *
     * Note: this method is private for now because it does not really fit the WebSocket API, but if we put it in the
     * `write()` method then the message would not be buffered by the Socket.IO client.
     *
     * @return {boolean}
     * @private
     */ /* private */ _hasPingExpired() {
        if (!this._pingTimeoutTime) return true;
        const hasExpired = Date.now() > this._pingTimeoutTime;
        if (hasExpired) {
            this._pingTimeoutTime = 0;
            (0, _globalsNodeJs.nextTick)(()=>{
                this._onClose("ping timeout");
            }, this.setTimeoutFn);
        }
        return hasExpired;
    }
    /**
     * Sends a message.
     *
     * @param {String} msg - message.
     * @param {Object} options.
     * @param {Function} fn - callback function.
     * @return {Socket} for chaining.
     */ write(msg, options, fn) {
        this._sendPacket("message", msg, options, fn);
        return this;
    }
    /**
     * Sends a message. Alias of {@link Socket#write}.
     *
     * @param {String} msg - message.
     * @param {Object} options.
     * @param {Function} fn - callback function.
     * @return {Socket} for chaining.
     */ send(msg, options, fn) {
        this._sendPacket("message", msg, options, fn);
        return this;
    }
    /**
     * Sends a packet.
     *
     * @param {String} type: packet type.
     * @param {String} data.
     * @param {Object} options.
     * @param {Function} fn - callback function.
     * @private
     */ _sendPacket(type, data, options, fn) {
        if ("function" === typeof data) {
            fn = data;
            data = undefined;
        }
        if ("function" === typeof options) {
            fn = options;
            options = null;
        }
        if ("closing" === this.readyState || "closed" === this.readyState) return;
        options = options || {};
        options.compress = false !== options.compress;
        const packet = {
            type: type,
            data: data,
            options: options
        };
        this.emitReserved("packetCreate", packet);
        this.writeBuffer.push(packet);
        if (fn) this.once("flush", fn);
        this.flush();
    }
    /**
     * Closes the connection.
     */ close() {
        const close = ()=>{
            this._onClose("forced close");
            this.transport.close();
        };
        const cleanupAndClose = ()=>{
            this.off("upgrade", cleanupAndClose);
            this.off("upgradeError", cleanupAndClose);
            close();
        };
        const waitForUpgrade = ()=>{
            // wait for upgrade to finish since we can't send packets while pausing a transport
            this.once("upgrade", cleanupAndClose);
            this.once("upgradeError", cleanupAndClose);
        };
        if ("opening" === this.readyState || "open" === this.readyState) {
            this.readyState = "closing";
            if (this.writeBuffer.length) this.once("drain", ()=>{
                if (this.upgrading) waitForUpgrade();
                else close();
            });
            else if (this.upgrading) waitForUpgrade();
            else close();
        }
        return this;
    }
    /**
     * Called upon transport error
     *
     * @private
     */ _onError(err) {
        SocketWithoutUpgrade.priorWebsocketSuccess = false;
        if (this.opts.tryAllTransports && this.transports.length > 1 && this.readyState === "opening") {
            this.transports.shift();
            return this._open();
        }
        this.emitReserved("error", err);
        this._onClose("transport error", err);
    }
    /**
     * Called upon transport close.
     *
     * @private
     */ _onClose(reason, description) {
        if ("opening" === this.readyState || "open" === this.readyState || "closing" === this.readyState) {
            // clear timers
            this.clearTimeoutFn(this._pingTimeoutTimer);
            // stop event from firing again for transport
            this.transport.removeAllListeners("close");
            // ensure transport won't stay open
            this.transport.close();
            // ignore further transport communication
            this.transport.removeAllListeners();
            if (withEventListeners) {
                if (this._beforeunloadEventListener) removeEventListener("beforeunload", this._beforeunloadEventListener, false);
                if (this._offlineEventListener) {
                    const i = OFFLINE_EVENT_LISTENERS.indexOf(this._offlineEventListener);
                    if (i !== -1) OFFLINE_EVENT_LISTENERS.splice(i, 1);
                }
            }
            // set ready state
            this.readyState = "closed";
            // clear session id
            this.id = null;
            // emit close event
            this.emitReserved("close", reason, description);
            // clean buffers after, so users can still
            // grab the buffers on `close` event
            this.writeBuffer = [];
            this._prevBufferLen = 0;
        }
    }
}
SocketWithoutUpgrade.protocol = (0, _engineIoParser.protocol);
class SocketWithUpgrade extends SocketWithoutUpgrade {
    constructor(){
        super(...arguments);
        this._upgrades = [];
    }
    onOpen() {
        super.onOpen();
        if ("open" === this.readyState && this.opts.upgrade) for(let i = 0; i < this._upgrades.length; i++)this._probe(this._upgrades[i]);
    }
    /**
     * Probes a transport.
     *
     * @param {String} name - transport name
     * @private
     */ _probe(name) {
        let transport = this.createTransport(name);
        let failed = false;
        SocketWithoutUpgrade.priorWebsocketSuccess = false;
        const onTransportOpen = ()=>{
            if (failed) return;
            transport.send([
                {
                    type: "ping",
                    data: "probe"
                }
            ]);
            transport.once("packet", (msg)=>{
                if (failed) return;
                if ("pong" === msg.type && "probe" === msg.data) {
                    this.upgrading = true;
                    this.emitReserved("upgrading", transport);
                    if (!transport) return;
                    SocketWithoutUpgrade.priorWebsocketSuccess = "websocket" === transport.name;
                    this.transport.pause(()=>{
                        if (failed) return;
                        if ("closed" === this.readyState) return;
                        cleanup();
                        this.setTransport(transport);
                        transport.send([
                            {
                                type: "upgrade"
                            }
                        ]);
                        this.emitReserved("upgrade", transport);
                        transport = null;
                        this.upgrading = false;
                        this.flush();
                    });
                } else {
                    const err = new Error("probe error");
                    // @ts-ignore
                    err.transport = transport.name;
                    this.emitReserved("upgradeError", err);
                }
            });
        };
        function freezeTransport() {
            if (failed) return;
            // Any callback called by transport should be ignored since now
            failed = true;
            cleanup();
            transport.close();
            transport = null;
        }
        // Handle any error that happens while probing
        const onerror = (err)=>{
            const error = new Error("probe error: " + err);
            // @ts-ignore
            error.transport = transport.name;
            freezeTransport();
            this.emitReserved("upgradeError", error);
        };
        function onTransportClose() {
            onerror("transport closed");
        }
        // When the socket is closed while we're probing
        function onclose() {
            onerror("socket closed");
        }
        // When the socket is upgraded while we're probing
        function onupgrade(to) {
            if (transport && to.name !== transport.name) freezeTransport();
        }
        // Remove all listeners on the transport and on self
        const cleanup = ()=>{
            transport.removeListener("open", onTransportOpen);
            transport.removeListener("error", onerror);
            transport.removeListener("close", onTransportClose);
            this.off("close", onclose);
            this.off("upgrading", onupgrade);
        };
        transport.once("open", onTransportOpen);
        transport.once("error", onerror);
        transport.once("close", onTransportClose);
        this.once("close", onclose);
        this.once("upgrading", onupgrade);
        if (this._upgrades.indexOf("webtransport") !== -1 && name !== "webtransport") // favor WebTransport
        this.setTimeoutFn(()=>{
            if (!failed) transport.open();
        }, 200);
        else transport.open();
    }
    onHandshake(data) {
        this._upgrades = this._filterUpgrades(data.upgrades);
        super.onHandshake(data);
    }
    /**
     * Filters upgrades, returning only those matching client transports.
     *
     * @param {Array} upgrades - server upgrades
     * @private
     */ _filterUpgrades(upgrades) {
        const filteredUpgrades = [];
        for(let i = 0; i < upgrades.length; i++)if (~this.transports.indexOf(upgrades[i])) filteredUpgrades.push(upgrades[i]);
        return filteredUpgrades;
    }
}
class Socket extends SocketWithUpgrade {
    constructor(uri, opts = {}){
        const o = typeof uri === "object" ? uri : opts;
        if (!o.transports || o.transports && typeof o.transports[0] === "string") o.transports = (o.transports || [
            "polling",
            "websocket",
            "webtransport"
        ]).map((transportName)=>(0, _indexJs.transports)[transportName]).filter((t)=>!!t);
        super(uri, o);
    }
}

},{"./transports/index.js":"91wUX","./util.js":"kk7Cp","./contrib/parseqs.js":"1zNF1","./contrib/parseuri.js":"5Y2kK","@socket.io/component-emitter":"9MXWi","engine.io-parser":"kVTy2","./globals.node.js":"6Aw5d","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"91wUX":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "transports", ()=>transports);
var _pollingXhrNodeJs = require("./polling-xhr.node.js");
var _websocketNodeJs = require("./websocket.node.js");
var _webtransportJs = require("./webtransport.js");
const transports = {
    websocket: (0, _websocketNodeJs.WS),
    webtransport: (0, _webtransportJs.WT),
    polling: (0, _pollingXhrNodeJs.XHR)
};

},{"./polling-xhr.node.js":"3Fuqh","./websocket.node.js":"8Q316","./webtransport.js":"g53pT","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"3Fuqh":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "BaseXHR", ()=>BaseXHR);
parcelHelpers.export(exports, "Request", ()=>Request);
/**
 * HTTP long-polling based on the built-in `XMLHttpRequest` object.
 *
 * Usage: browser
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest
 */ parcelHelpers.export(exports, "XHR", ()=>XHR);
var _pollingJs = require("./polling.js");
var _componentEmitter = require("@socket.io/component-emitter");
var _utilJs = require("../util.js");
var _globalsNodeJs = require("../globals.node.js");
var _hasCorsJs = require("../contrib/has-cors.js");
function empty() {}
class BaseXHR extends (0, _pollingJs.Polling) {
    /**
     * XHR Polling constructor.
     *
     * @param {Object} opts
     * @package
     */ constructor(opts){
        super(opts);
        if (typeof location !== "undefined") {
            const isSSL = "https:" === location.protocol;
            let port = location.port;
            // some user agents have empty `location.port`
            if (!port) port = isSSL ? "443" : "80";
            this.xd = typeof location !== "undefined" && opts.hostname !== location.hostname || port !== opts.port;
        }
    }
    /**
     * Sends data.
     *
     * @param {String} data to send.
     * @param {Function} called upon flush.
     * @private
     */ doWrite(data, fn) {
        const req = this.request({
            method: "POST",
            data: data
        });
        req.on("success", fn);
        req.on("error", (xhrStatus, context)=>{
            this.onError("xhr post error", xhrStatus, context);
        });
    }
    /**
     * Starts a poll cycle.
     *
     * @private
     */ doPoll() {
        const req = this.request();
        req.on("data", this.onData.bind(this));
        req.on("error", (xhrStatus, context)=>{
            this.onError("xhr poll error", xhrStatus, context);
        });
        this.pollXhr = req;
    }
}
class Request extends (0, _componentEmitter.Emitter) {
    /**
     * Request constructor
     *
     * @param {Object} options
     * @package
     */ constructor(createRequest, uri, opts){
        super();
        this.createRequest = createRequest;
        (0, _utilJs.installTimerFunctions)(this, opts);
        this._opts = opts;
        this._method = opts.method || "GET";
        this._uri = uri;
        this._data = undefined !== opts.data ? opts.data : null;
        this._create();
    }
    /**
     * Creates the XHR object and sends the request.
     *
     * @private
     */ _create() {
        var _a;
        const opts = (0, _utilJs.pick)(this._opts, "agent", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "autoUnref");
        opts.xdomain = !!this._opts.xd;
        const xhr = this._xhr = this.createRequest(opts);
        try {
            xhr.open(this._method, this._uri, true);
            try {
                if (this._opts.extraHeaders) {
                    // @ts-ignore
                    xhr.setDisableHeaderCheck && xhr.setDisableHeaderCheck(true);
                    for(let i in this._opts.extraHeaders)if (this._opts.extraHeaders.hasOwnProperty(i)) xhr.setRequestHeader(i, this._opts.extraHeaders[i]);
                }
            } catch (e) {}
            if ("POST" === this._method) try {
                xhr.setRequestHeader("Content-type", "text/plain;charset=UTF-8");
            } catch (e) {}
            try {
                xhr.setRequestHeader("Accept", "*/*");
            } catch (e) {}
            (_a = this._opts.cookieJar) === null || _a === void 0 || _a.addCookies(xhr);
            // ie6 check
            if ("withCredentials" in xhr) xhr.withCredentials = this._opts.withCredentials;
            if (this._opts.requestTimeout) xhr.timeout = this._opts.requestTimeout;
            xhr.onreadystatechange = ()=>{
                var _a;
                if (xhr.readyState === 3) (_a = this._opts.cookieJar) === null || _a === void 0 || _a.parseCookies(// @ts-ignore
                xhr.getResponseHeader("set-cookie"));
                if (4 !== xhr.readyState) return;
                if (200 === xhr.status || 1223 === xhr.status) this._onLoad();
                else // make sure the `error` event handler that's user-set
                // does not throw in the same tick and gets caught here
                this.setTimeoutFn(()=>{
                    this._onError(typeof xhr.status === "number" ? xhr.status : 0);
                }, 0);
            };
            xhr.send(this._data);
        } catch (e) {
            // Need to defer since .create() is called directly from the constructor
            // and thus the 'error' event can only be only bound *after* this exception
            // occurs.  Therefore, also, we cannot throw here at all.
            this.setTimeoutFn(()=>{
                this._onError(e);
            }, 0);
            return;
        }
        if (typeof document !== "undefined") {
            this._index = Request.requestsCount++;
            Request.requests[this._index] = this;
        }
    }
    /**
     * Called upon error.
     *
     * @private
     */ _onError(err) {
        this.emitReserved("error", err, this._xhr);
        this._cleanup(true);
    }
    /**
     * Cleans up house.
     *
     * @private
     */ _cleanup(fromError) {
        if ("undefined" === typeof this._xhr || null === this._xhr) return;
        this._xhr.onreadystatechange = empty;
        if (fromError) try {
            this._xhr.abort();
        } catch (e) {}
        if (typeof document !== "undefined") delete Request.requests[this._index];
        this._xhr = null;
    }
    /**
     * Called upon load.
     *
     * @private
     */ _onLoad() {
        const data = this._xhr.responseText;
        if (data !== null) {
            this.emitReserved("data", data);
            this.emitReserved("success");
            this._cleanup();
        }
    }
    /**
     * Aborts the request.
     *
     * @package
     */ abort() {
        this._cleanup();
    }
}
Request.requestsCount = 0;
Request.requests = {};
/**
 * Aborts pending requests when unloading the window. This is needed to prevent
 * memory leaks (e.g. when using IE) and to ensure that no spurious error is
 * emitted.
 */ if (typeof document !== "undefined") {
    // @ts-ignore
    if (typeof attachEvent === "function") // @ts-ignore
    attachEvent("onunload", unloadHandler);
    else if (typeof addEventListener === "function") {
        const terminationEvent = "onpagehide" in (0, _globalsNodeJs.globalThisShim) ? "pagehide" : "unload";
        addEventListener(terminationEvent, unloadHandler, false);
    }
}
function unloadHandler() {
    for(let i in Request.requests)if (Request.requests.hasOwnProperty(i)) Request.requests[i].abort();
}
const hasXHR2 = function() {
    const xhr = newRequest({
        xdomain: false
    });
    return xhr && xhr.responseType !== null;
}();
class XHR extends BaseXHR {
    constructor(opts){
        super(opts);
        const forceBase64 = opts && opts.forceBase64;
        this.supportsBinary = hasXHR2 && !forceBase64;
    }
    request(opts = {}) {
        Object.assign(opts, {
            xd: this.xd
        }, this.opts);
        return new Request(newRequest, this.uri(), opts);
    }
}
function newRequest(opts) {
    const xdomain = opts.xdomain;
    // XMLHttpRequest can be disabled on IE
    try {
        if ("undefined" !== typeof XMLHttpRequest && (!xdomain || (0, _hasCorsJs.hasCORS))) return new XMLHttpRequest();
    } catch (e) {}
    if (!xdomain) try {
        return new (0, _globalsNodeJs.globalThisShim)[[
            "Active"
        ].concat("Object").join("X")]("Microsoft.XMLHTTP");
    } catch (e) {}
}

},{"./polling.js":"ePbRc","@socket.io/component-emitter":"9MXWi","../util.js":"kk7Cp","../globals.node.js":"6Aw5d","../contrib/has-cors.js":"40IkM","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"ePbRc":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Polling", ()=>Polling);
var _transportJs = require("../transport.js");
var _utilJs = require("../util.js");
var _engineIoParser = require("engine.io-parser");
class Polling extends (0, _transportJs.Transport) {
    constructor(){
        super(...arguments);
        this._polling = false;
    }
    get name() {
        return "polling";
    }
    /**
     * Opens the socket (triggers polling). We write a PING message to determine
     * when the transport is open.
     *
     * @protected
     */ doOpen() {
        this._poll();
    }
    /**
     * Pauses polling.
     *
     * @param {Function} onPause - callback upon buffers are flushed and transport is paused
     * @package
     */ pause(onPause) {
        this.readyState = "pausing";
        const pause = ()=>{
            this.readyState = "paused";
            onPause();
        };
        if (this._polling || !this.writable) {
            let total = 0;
            if (this._polling) {
                total++;
                this.once("pollComplete", function() {
                    --total || pause();
                });
            }
            if (!this.writable) {
                total++;
                this.once("drain", function() {
                    --total || pause();
                });
            }
        } else pause();
    }
    /**
     * Starts polling cycle.
     *
     * @private
     */ _poll() {
        this._polling = true;
        this.doPoll();
        this.emitReserved("poll");
    }
    /**
     * Overloads onData to detect payloads.
     *
     * @protected
     */ onData(data) {
        const callback = (packet)=>{
            // if its the first message we consider the transport open
            if ("opening" === this.readyState && packet.type === "open") this.onOpen();
            // if its a close packet, we close the ongoing requests
            if ("close" === packet.type) {
                this.onClose({
                    description: "transport closed by the server"
                });
                return false;
            }
            // otherwise bypass onData and handle the message
            this.onPacket(packet);
        };
        // decode payload
        (0, _engineIoParser.decodePayload)(data, this.socket.binaryType).forEach(callback);
        // if an event did not trigger closing
        if ("closed" !== this.readyState) {
            // if we got data we're not polling
            this._polling = false;
            this.emitReserved("pollComplete");
            if ("open" === this.readyState) this._poll();
        }
    }
    /**
     * For polling, send a close packet.
     *
     * @protected
     */ doClose() {
        const close = ()=>{
            this.write([
                {
                    type: "close"
                }
            ]);
        };
        if ("open" === this.readyState) close();
        else // in case we're trying to close while
        // handshaking is in progress (GH-164)
        this.once("open", close);
    }
    /**
     * Writes a packets payload.
     *
     * @param {Array} packets - data packets
     * @protected
     */ write(packets) {
        this.writable = false;
        (0, _engineIoParser.encodePayload)(packets, (data)=>{
            this.doWrite(data, ()=>{
                this.writable = true;
                this.emitReserved("drain");
            });
        });
    }
    /**
     * Generates uri for connection.
     *
     * @private
     */ uri() {
        const schema = this.opts.secure ? "https" : "http";
        const query = this.query || {};
        // cache busting is forced
        if (false !== this.opts.timestampRequests) query[this.opts.timestampParam] = (0, _utilJs.randomString)();
        if (!this.supportsBinary && !query.sid) query.b64 = 1;
        return this.createUri(schema, query);
    }
}

},{"../transport.js":"9tBQf","../util.js":"kk7Cp","engine.io-parser":"kVTy2","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"9tBQf":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "TransportError", ()=>TransportError);
parcelHelpers.export(exports, "Transport", ()=>Transport);
var _engineIoParser = require("engine.io-parser");
var _componentEmitter = require("@socket.io/component-emitter");
var _utilJs = require("./util.js");
var _parseqsJs = require("./contrib/parseqs.js");
class TransportError extends Error {
    constructor(reason, description, context){
        super(reason);
        this.description = description;
        this.context = context;
        this.type = "TransportError";
    }
}
class Transport extends (0, _componentEmitter.Emitter) {
    /**
     * Transport abstract constructor.
     *
     * @param {Object} opts - options
     * @protected
     */ constructor(opts){
        super();
        this.writable = false;
        (0, _utilJs.installTimerFunctions)(this, opts);
        this.opts = opts;
        this.query = opts.query;
        this.socket = opts.socket;
        this.supportsBinary = !opts.forceBase64;
    }
    /**
     * Emits an error.
     *
     * @param {String} reason
     * @param description
     * @param context - the error context
     * @return {Transport} for chaining
     * @protected
     */ onError(reason, description, context) {
        super.emitReserved("error", new TransportError(reason, description, context));
        return this;
    }
    /**
     * Opens the transport.
     */ open() {
        this.readyState = "opening";
        this.doOpen();
        return this;
    }
    /**
     * Closes the transport.
     */ close() {
        if (this.readyState === "opening" || this.readyState === "open") {
            this.doClose();
            this.onClose();
        }
        return this;
    }
    /**
     * Sends multiple packets.
     *
     * @param {Array} packets
     */ send(packets) {
        if (this.readyState === "open") this.write(packets);
    }
    /**
     * Called upon open
     *
     * @protected
     */ onOpen() {
        this.readyState = "open";
        this.writable = true;
        super.emitReserved("open");
    }
    /**
     * Called with data.
     *
     * @param {String} data
     * @protected
     */ onData(data) {
        const packet = (0, _engineIoParser.decodePacket)(data, this.socket.binaryType);
        this.onPacket(packet);
    }
    /**
     * Called with a decoded packet.
     *
     * @protected
     */ onPacket(packet) {
        super.emitReserved("packet", packet);
    }
    /**
     * Called upon close.
     *
     * @protected
     */ onClose(details) {
        this.readyState = "closed";
        super.emitReserved("close", details);
    }
    /**
     * Pauses the transport, in order not to lose packets during an upgrade.
     *
     * @param onPause
     */ pause(onPause) {}
    createUri(schema, query = {}) {
        return schema + "://" + this._hostname() + this._port() + this.opts.path + this._query(query);
    }
    _hostname() {
        const hostname = this.opts.hostname;
        return hostname.indexOf(":") === -1 ? hostname : "[" + hostname + "]";
    }
    _port() {
        if (this.opts.port && (this.opts.secure && Number(this.opts.port !== 443) || !this.opts.secure && Number(this.opts.port) !== 80)) return ":" + this.opts.port;
        else return "";
    }
    _query(query) {
        const encodedQuery = (0, _parseqsJs.encode)(query);
        return encodedQuery.length ? "?" + encodedQuery : "";
    }
}

},{"engine.io-parser":"kVTy2","@socket.io/component-emitter":"9MXWi","./util.js":"kk7Cp","./contrib/parseqs.js":"1zNF1","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"kVTy2":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createPacketEncoderStream", ()=>createPacketEncoderStream);
parcelHelpers.export(exports, "createPacketDecoderStream", ()=>createPacketDecoderStream);
parcelHelpers.export(exports, "protocol", ()=>protocol);
parcelHelpers.export(exports, "encodePacket", ()=>(0, _encodePacketJs.encodePacket));
parcelHelpers.export(exports, "encodePayload", ()=>encodePayload);
parcelHelpers.export(exports, "decodePacket", ()=>(0, _decodePacketJs.decodePacket));
parcelHelpers.export(exports, "decodePayload", ()=>decodePayload);
var _encodePacketJs = require("./encodePacket.js");
var _decodePacketJs = require("./decodePacket.js");
var _commonsJs = require("./commons.js");
const SEPARATOR = String.fromCharCode(30); // see https://en.wikipedia.org/wiki/Delimiter#ASCII_delimited_text
const encodePayload = (packets, callback)=>{
    // some packets may be added to the array while encoding, so the initial length must be saved
    const length = packets.length;
    const encodedPackets = new Array(length);
    let count = 0;
    packets.forEach((packet, i)=>{
        // force base64 encoding for binary packets
        (0, _encodePacketJs.encodePacket)(packet, false, (encodedPacket)=>{
            encodedPackets[i] = encodedPacket;
            if (++count === length) callback(encodedPackets.join(SEPARATOR));
        });
    });
};
const decodePayload = (encodedPayload, binaryType)=>{
    const encodedPackets = encodedPayload.split(SEPARATOR);
    const packets = [];
    for(let i = 0; i < encodedPackets.length; i++){
        const decodedPacket = (0, _decodePacketJs.decodePacket)(encodedPackets[i], binaryType);
        packets.push(decodedPacket);
        if (decodedPacket.type === "error") break;
    }
    return packets;
};
function createPacketEncoderStream() {
    return new TransformStream({
        transform (packet, controller) {
            (0, _encodePacketJs.encodePacketToBinary)(packet, (encodedPacket)=>{
                const payloadLength = encodedPacket.length;
                let header;
                // inspired by the WebSocket format: https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API/Writing_WebSocket_servers#decoding_payload_length
                if (payloadLength < 126) {
                    header = new Uint8Array(1);
                    new DataView(header.buffer).setUint8(0, payloadLength);
                } else if (payloadLength < 65536) {
                    header = new Uint8Array(3);
                    const view = new DataView(header.buffer);
                    view.setUint8(0, 126);
                    view.setUint16(1, payloadLength);
                } else {
                    header = new Uint8Array(9);
                    const view = new DataView(header.buffer);
                    view.setUint8(0, 127);
                    view.setBigUint64(1, BigInt(payloadLength));
                }
                // first bit indicates whether the payload is plain text (0) or binary (1)
                if (packet.data && typeof packet.data !== "string") header[0] |= 0x80;
                controller.enqueue(header);
                controller.enqueue(encodedPacket);
            });
        }
    });
}
let TEXT_DECODER;
function totalLength(chunks) {
    return chunks.reduce((acc, chunk)=>acc + chunk.length, 0);
}
function concatChunks(chunks, size) {
    if (chunks[0].length === size) return chunks.shift();
    const buffer = new Uint8Array(size);
    let j = 0;
    for(let i = 0; i < size; i++){
        buffer[i] = chunks[0][j++];
        if (j === chunks[0].length) {
            chunks.shift();
            j = 0;
        }
    }
    if (chunks.length && j < chunks[0].length) chunks[0] = chunks[0].slice(j);
    return buffer;
}
function createPacketDecoderStream(maxPayload, binaryType) {
    if (!TEXT_DECODER) TEXT_DECODER = new TextDecoder();
    const chunks = [];
    let state = 0 /* State.READ_HEADER */ ;
    let expectedLength = -1;
    let isBinary = false;
    return new TransformStream({
        transform (chunk, controller) {
            chunks.push(chunk);
            while(true){
                if (state === 0 /* State.READ_HEADER */ ) {
                    if (totalLength(chunks) < 1) break;
                    const header = concatChunks(chunks, 1);
                    isBinary = (header[0] & 0x80) === 0x80;
                    expectedLength = header[0] & 0x7f;
                    if (expectedLength < 126) state = 3 /* State.READ_PAYLOAD */ ;
                    else if (expectedLength === 126) state = 1 /* State.READ_EXTENDED_LENGTH_16 */ ;
                    else state = 2 /* State.READ_EXTENDED_LENGTH_64 */ ;
                } else if (state === 1 /* State.READ_EXTENDED_LENGTH_16 */ ) {
                    if (totalLength(chunks) < 2) break;
                    const headerArray = concatChunks(chunks, 2);
                    expectedLength = new DataView(headerArray.buffer, headerArray.byteOffset, headerArray.length).getUint16(0);
                    state = 3 /* State.READ_PAYLOAD */ ;
                } else if (state === 2 /* State.READ_EXTENDED_LENGTH_64 */ ) {
                    if (totalLength(chunks) < 8) break;
                    const headerArray = concatChunks(chunks, 8);
                    const view = new DataView(headerArray.buffer, headerArray.byteOffset, headerArray.length);
                    const n = view.getUint32(0);
                    if (n > Math.pow(2, 21) - 1) {
                        // the maximum safe integer in JavaScript is 2^53 - 1
                        controller.enqueue((0, _commonsJs.ERROR_PACKET));
                        break;
                    }
                    expectedLength = n * Math.pow(2, 32) + view.getUint32(4);
                    state = 3 /* State.READ_PAYLOAD */ ;
                } else {
                    if (totalLength(chunks) < expectedLength) break;
                    const data = concatChunks(chunks, expectedLength);
                    controller.enqueue((0, _decodePacketJs.decodePacket)(isBinary ? data : TEXT_DECODER.decode(data), binaryType));
                    state = 0 /* State.READ_HEADER */ ;
                }
                if (expectedLength === 0 || expectedLength > maxPayload) {
                    controller.enqueue((0, _commonsJs.ERROR_PACKET));
                    break;
                }
            }
        }
    });
}
const protocol = 4;

},{"./encodePacket.js":"4VOJI","./decodePacket.js":"howvf","./commons.js":"9Mqqu","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"4VOJI":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "encodePacketToBinary", ()=>encodePacketToBinary);
parcelHelpers.export(exports, "encodePacket", ()=>encodePacket);
var _commonsJs = require("./commons.js");
const withNativeBlob = typeof Blob === "function" || typeof Blob !== "undefined" && Object.prototype.toString.call(Blob) === "[object BlobConstructor]";
const withNativeArrayBuffer = typeof ArrayBuffer === "function";
// ArrayBuffer.isView method is not defined in IE10
const isView = (obj)=>{
    return typeof ArrayBuffer.isView === "function" ? ArrayBuffer.isView(obj) : obj && obj.buffer instanceof ArrayBuffer;
};
const encodePacket = ({ type, data }, supportsBinary, callback)=>{
    if (withNativeBlob && data instanceof Blob) {
        if (supportsBinary) return callback(data);
        else return encodeBlobAsBase64(data, callback);
    } else if (withNativeArrayBuffer && (data instanceof ArrayBuffer || isView(data))) {
        if (supportsBinary) return callback(data);
        else return encodeBlobAsBase64(new Blob([
            data
        ]), callback);
    }
    // plain string
    return callback((0, _commonsJs.PACKET_TYPES)[type] + (data || ""));
};
const encodeBlobAsBase64 = (data, callback)=>{
    const fileReader = new FileReader();
    fileReader.onload = function() {
        const content = fileReader.result.split(",")[1];
        callback("b" + (content || ""));
    };
    return fileReader.readAsDataURL(data);
};
function toArray(data) {
    if (data instanceof Uint8Array) return data;
    else if (data instanceof ArrayBuffer) return new Uint8Array(data);
    else return new Uint8Array(data.buffer, data.byteOffset, data.byteLength);
}
let TEXT_ENCODER;
function encodePacketToBinary(packet, callback) {
    if (withNativeBlob && packet.data instanceof Blob) return packet.data.arrayBuffer().then(toArray).then(callback);
    else if (withNativeArrayBuffer && (packet.data instanceof ArrayBuffer || isView(packet.data))) return callback(toArray(packet.data));
    encodePacket(packet, false, (encoded)=>{
        if (!TEXT_ENCODER) TEXT_ENCODER = new TextEncoder();
        callback(TEXT_ENCODER.encode(encoded));
    });
}

},{"./commons.js":"9Mqqu","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"9Mqqu":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "PACKET_TYPES", ()=>PACKET_TYPES);
parcelHelpers.export(exports, "PACKET_TYPES_REVERSE", ()=>PACKET_TYPES_REVERSE);
parcelHelpers.export(exports, "ERROR_PACKET", ()=>ERROR_PACKET);
const PACKET_TYPES = Object.create(null); // no Map = no polyfill
PACKET_TYPES["open"] = "0";
PACKET_TYPES["close"] = "1";
PACKET_TYPES["ping"] = "2";
PACKET_TYPES["pong"] = "3";
PACKET_TYPES["message"] = "4";
PACKET_TYPES["upgrade"] = "5";
PACKET_TYPES["noop"] = "6";
const PACKET_TYPES_REVERSE = Object.create(null);
Object.keys(PACKET_TYPES).forEach((key)=>{
    PACKET_TYPES_REVERSE[PACKET_TYPES[key]] = key;
});
const ERROR_PACKET = {
    type: "error",
    data: "parser error"
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"howvf":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "decodePacket", ()=>decodePacket);
var _commonsJs = require("./commons.js");
var _base64ArraybufferJs = require("./contrib/base64-arraybuffer.js");
const withNativeArrayBuffer = typeof ArrayBuffer === "function";
const decodePacket = (encodedPacket, binaryType)=>{
    if (typeof encodedPacket !== "string") return {
        type: "message",
        data: mapBinary(encodedPacket, binaryType)
    };
    const type = encodedPacket.charAt(0);
    if (type === "b") return {
        type: "message",
        data: decodeBase64Packet(encodedPacket.substring(1), binaryType)
    };
    const packetType = (0, _commonsJs.PACKET_TYPES_REVERSE)[type];
    if (!packetType) return 0, _commonsJs.ERROR_PACKET;
    return encodedPacket.length > 1 ? {
        type: (0, _commonsJs.PACKET_TYPES_REVERSE)[type],
        data: encodedPacket.substring(1)
    } : {
        type: (0, _commonsJs.PACKET_TYPES_REVERSE)[type]
    };
};
const decodeBase64Packet = (data, binaryType)=>{
    if (withNativeArrayBuffer) {
        const decoded = (0, _base64ArraybufferJs.decode)(data);
        return mapBinary(decoded, binaryType);
    } else return {
        base64: true,
        data
    }; // fallback for old browsers
};
const mapBinary = (data, binaryType)=>{
    switch(binaryType){
        case "blob":
            if (data instanceof Blob) // from WebSocket + binaryType "blob"
            return data;
            else // from HTTP long-polling or WebTransport
            return new Blob([
                data
            ]);
        case "arraybuffer":
        default:
            if (data instanceof ArrayBuffer) // from HTTP long-polling (base64) or WebSocket + binaryType "arraybuffer"
            return data;
            else // from WebTransport (Uint8Array)
            return data.buffer;
    }
};

},{"./commons.js":"9Mqqu","./contrib/base64-arraybuffer.js":"gpSS7","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"gpSS7":[function(require,module,exports,__globalThis) {
// imported from https://github.com/socketio/base64-arraybuffer
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "encode", ()=>encode);
parcelHelpers.export(exports, "decode", ()=>decode);
const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
// Use a lookup table to find the index.
const lookup = typeof Uint8Array === 'undefined' ? [] : new Uint8Array(256);
for(let i = 0; i < chars.length; i++)lookup[chars.charCodeAt(i)] = i;
const encode = (arraybuffer)=>{
    let bytes = new Uint8Array(arraybuffer), i, len = bytes.length, base64 = '';
    for(i = 0; i < len; i += 3){
        base64 += chars[bytes[i] >> 2];
        base64 += chars[(bytes[i] & 3) << 4 | bytes[i + 1] >> 4];
        base64 += chars[(bytes[i + 1] & 15) << 2 | bytes[i + 2] >> 6];
        base64 += chars[bytes[i + 2] & 63];
    }
    if (len % 3 === 2) base64 = base64.substring(0, base64.length - 1) + '=';
    else if (len % 3 === 1) base64 = base64.substring(0, base64.length - 2) + '==';
    return base64;
};
const decode = (base64)=>{
    let bufferLength = base64.length * 0.75, len = base64.length, i, p = 0, encoded1, encoded2, encoded3, encoded4;
    if (base64[base64.length - 1] === '=') {
        bufferLength--;
        if (base64[base64.length - 2] === '=') bufferLength--;
    }
    const arraybuffer = new ArrayBuffer(bufferLength), bytes = new Uint8Array(arraybuffer);
    for(i = 0; i < len; i += 4){
        encoded1 = lookup[base64.charCodeAt(i)];
        encoded2 = lookup[base64.charCodeAt(i + 1)];
        encoded3 = lookup[base64.charCodeAt(i + 2)];
        encoded4 = lookup[base64.charCodeAt(i + 3)];
        bytes[p++] = encoded1 << 2 | encoded2 >> 4;
        bytes[p++] = (encoded2 & 15) << 4 | encoded3 >> 2;
        bytes[p++] = (encoded3 & 3) << 6 | encoded4 & 63;
    }
    return arraybuffer;
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"9MXWi":[function(require,module,exports,__globalThis) {
/**
 * Initialize a new `Emitter`.
 *
 * @api public
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Emitter", ()=>Emitter);
function Emitter(obj) {
    if (obj) return mixin(obj);
}
/**
 * Mixin the emitter properties.
 *
 * @param {Object} obj
 * @return {Object}
 * @api private
 */ function mixin(obj) {
    for(var key in Emitter.prototype)obj[key] = Emitter.prototype[key];
    return obj;
}
/**
 * Listen on the given `event` with `fn`.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */ Emitter.prototype.on = Emitter.prototype.addEventListener = function(event, fn) {
    this._callbacks = this._callbacks || {};
    (this._callbacks['$' + event] = this._callbacks['$' + event] || []).push(fn);
    return this;
};
/**
 * Adds an `event` listener that will be invoked a single
 * time then automatically removed.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */ Emitter.prototype.once = function(event, fn) {
    function on() {
        this.off(event, on);
        fn.apply(this, arguments);
    }
    on.fn = fn;
    this.on(event, on);
    return this;
};
/**
 * Remove the given callback for `event` or all
 * registered callbacks.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */ Emitter.prototype.off = Emitter.prototype.removeListener = Emitter.prototype.removeAllListeners = Emitter.prototype.removeEventListener = function(event, fn) {
    this._callbacks = this._callbacks || {};
    // all
    if (0 == arguments.length) {
        this._callbacks = {};
        return this;
    }
    // specific event
    var callbacks = this._callbacks['$' + event];
    if (!callbacks) return this;
    // remove all handlers
    if (1 == arguments.length) {
        delete this._callbacks['$' + event];
        return this;
    }
    // remove specific handler
    var cb;
    for(var i = 0; i < callbacks.length; i++){
        cb = callbacks[i];
        if (cb === fn || cb.fn === fn) {
            callbacks.splice(i, 1);
            break;
        }
    }
    // Remove event specific arrays for event types that no
    // one is subscribed for to avoid memory leak.
    if (callbacks.length === 0) delete this._callbacks['$' + event];
    return this;
};
/**
 * Emit `event` with the given args.
 *
 * @param {String} event
 * @param {Mixed} ...
 * @return {Emitter}
 */ Emitter.prototype.emit = function(event) {
    this._callbacks = this._callbacks || {};
    var args = new Array(arguments.length - 1), callbacks = this._callbacks['$' + event];
    for(var i = 1; i < arguments.length; i++)args[i - 1] = arguments[i];
    if (callbacks) {
        callbacks = callbacks.slice(0);
        for(var i = 0, len = callbacks.length; i < len; ++i)callbacks[i].apply(this, args);
    }
    return this;
};
// alias used for reserved events (protected method)
Emitter.prototype.emitReserved = Emitter.prototype.emit;
/**
 * Return array of callbacks for `event`.
 *
 * @param {String} event
 * @return {Array}
 * @api public
 */ Emitter.prototype.listeners = function(event) {
    this._callbacks = this._callbacks || {};
    return this._callbacks['$' + event] || [];
};
/**
 * Check if this emitter has `event` handlers.
 *
 * @param {String} event
 * @return {Boolean}
 * @api public
 */ Emitter.prototype.hasListeners = function(event) {
    return !!this.listeners(event).length;
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"kk7Cp":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "pick", ()=>pick);
parcelHelpers.export(exports, "installTimerFunctions", ()=>installTimerFunctions);
// we could also have used `new Blob([obj]).size`, but it isn't supported in IE9
parcelHelpers.export(exports, "byteLength", ()=>byteLength);
/**
 * Generates a random 8-characters string.
 */ parcelHelpers.export(exports, "randomString", ()=>randomString);
var _globalsNodeJs = require("./globals.node.js");
function pick(obj, ...attr) {
    return attr.reduce((acc, k)=>{
        if (obj.hasOwnProperty(k)) acc[k] = obj[k];
        return acc;
    }, {});
}
// Keep a reference to the real timeout functions so they can be used when overridden
const NATIVE_SET_TIMEOUT = (0, _globalsNodeJs.globalThisShim).setTimeout;
const NATIVE_CLEAR_TIMEOUT = (0, _globalsNodeJs.globalThisShim).clearTimeout;
function installTimerFunctions(obj, opts) {
    if (opts.useNativeTimers) {
        obj.setTimeoutFn = NATIVE_SET_TIMEOUT.bind((0, _globalsNodeJs.globalThisShim));
        obj.clearTimeoutFn = NATIVE_CLEAR_TIMEOUT.bind((0, _globalsNodeJs.globalThisShim));
    } else {
        obj.setTimeoutFn = (0, _globalsNodeJs.globalThisShim).setTimeout.bind((0, _globalsNodeJs.globalThisShim));
        obj.clearTimeoutFn = (0, _globalsNodeJs.globalThisShim).clearTimeout.bind((0, _globalsNodeJs.globalThisShim));
    }
}
// base64 encoded buffers are about 33% bigger (https://en.wikipedia.org/wiki/Base64)
const BASE64_OVERHEAD = 1.33;
function byteLength(obj) {
    if (typeof obj === "string") return utf8Length(obj);
    // arraybuffer or blob
    return Math.ceil((obj.byteLength || obj.size) * BASE64_OVERHEAD);
}
function utf8Length(str) {
    let c = 0, length = 0;
    for(let i = 0, l = str.length; i < l; i++){
        c = str.charCodeAt(i);
        if (c < 0x80) length += 1;
        else if (c < 0x800) length += 2;
        else if (c < 0xd800 || c >= 0xe000) length += 3;
        else {
            i++;
            length += 4;
        }
    }
    return length;
}
function randomString() {
    return Date.now().toString(36).substring(3) + Math.random().toString(36).substring(2, 5);
}

},{"./globals.node.js":"6Aw5d","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"6Aw5d":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "nextTick", ()=>nextTick);
parcelHelpers.export(exports, "globalThisShim", ()=>globalThisShim);
parcelHelpers.export(exports, "defaultBinaryType", ()=>defaultBinaryType);
parcelHelpers.export(exports, "createCookieJar", ()=>createCookieJar);
const nextTick = (()=>{
    const isPromiseAvailable = typeof Promise === "function" && typeof Promise.resolve === "function";
    if (isPromiseAvailable) return (cb)=>Promise.resolve().then(cb);
    else return (cb, setTimeoutFn)=>setTimeoutFn(cb, 0);
})();
const globalThisShim = (()=>{
    if (typeof self !== "undefined") return self;
    else if (typeof window !== "undefined") return window;
    else return Function("return this")();
})();
const defaultBinaryType = "arraybuffer";
function createCookieJar() {}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"1zNF1":[function(require,module,exports,__globalThis) {
// imported from https://github.com/galkn/querystring
/**
 * Compiles a querystring
 * Returns string representation of the object
 *
 * @param {Object}
 * @api private
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "encode", ()=>encode);
/**
 * Parses a simple querystring into an object
 *
 * @param {String} qs
 * @api private
 */ parcelHelpers.export(exports, "decode", ()=>decode);
function encode(obj) {
    let str = '';
    for(let i in obj)if (obj.hasOwnProperty(i)) {
        if (str.length) str += '&';
        str += encodeURIComponent(i) + '=' + encodeURIComponent(obj[i]);
    }
    return str;
}
function decode(qs) {
    let qry = {};
    let pairs = qs.split('&');
    for(let i = 0, l = pairs.length; i < l; i++){
        let pair = pairs[i].split('=');
        qry[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1]);
    }
    return qry;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"40IkM":[function(require,module,exports,__globalThis) {
// imported from https://github.com/component/has-cors
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "hasCORS", ()=>hasCORS);
let value = false;
try {
    value = typeof XMLHttpRequest !== 'undefined' && 'withCredentials' in new XMLHttpRequest();
} catch (err) {
// if XMLHttp support is disabled in IE then it will throw
// when trying to create
}
const hasCORS = value;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"8Q316":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "BaseWS", ()=>BaseWS);
/**
 * WebSocket transport based on the built-in `WebSocket` object.
 *
 * Usage: browser, Node.js (since v21), Deno, Bun
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/API/WebSocket
 * @see https://caniuse.com/mdn-api_websocket
 * @see https://nodejs.org/api/globals.html#websocket
 */ parcelHelpers.export(exports, "WS", ()=>WS);
var _transportJs = require("../transport.js");
var _utilJs = require("../util.js");
var _engineIoParser = require("engine.io-parser");
var _globalsNodeJs = require("../globals.node.js");
// detect ReactNative environment
const isReactNative = typeof navigator !== "undefined" && typeof navigator.product === "string" && navigator.product.toLowerCase() === "reactnative";
class BaseWS extends (0, _transportJs.Transport) {
    get name() {
        return "websocket";
    }
    doOpen() {
        const uri = this.uri();
        const protocols = this.opts.protocols;
        // React Native only supports the 'headers' option, and will print a warning if anything else is passed
        const opts = isReactNative ? {} : (0, _utilJs.pick)(this.opts, "agent", "perMessageDeflate", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "localAddress", "protocolVersion", "origin", "maxPayload", "family", "checkServerIdentity");
        if (this.opts.extraHeaders) opts.headers = this.opts.extraHeaders;
        try {
            this.ws = this.createSocket(uri, protocols, opts);
        } catch (err) {
            return this.emitReserved("error", err);
        }
        this.ws.binaryType = this.socket.binaryType;
        this.addEventListeners();
    }
    /**
     * Adds event listeners to the socket
     *
     * @private
     */ addEventListeners() {
        this.ws.onopen = ()=>{
            if (this.opts.autoUnref) this.ws._socket.unref();
            this.onOpen();
        };
        this.ws.onclose = (closeEvent)=>this.onClose({
                description: "websocket connection closed",
                context: closeEvent
            });
        this.ws.onmessage = (ev)=>this.onData(ev.data);
        this.ws.onerror = (e)=>this.onError("websocket error", e);
    }
    write(packets) {
        this.writable = false;
        // encodePacket efficient as it uses WS framing
        // no need for encodePayload
        for(let i = 0; i < packets.length; i++){
            const packet = packets[i];
            const lastPacket = i === packets.length - 1;
            (0, _engineIoParser.encodePacket)(packet, this.supportsBinary, (data)=>{
                // Sometimes the websocket has already been closed but the browser didn't
                // have a chance of informing us about it yet, in that case send will
                // throw an error
                try {
                    this.doWrite(packet, data);
                } catch (e) {}
                if (lastPacket) // fake drain
                // defer to next tick to allow Socket to clear writeBuffer
                (0, _globalsNodeJs.nextTick)(()=>{
                    this.writable = true;
                    this.emitReserved("drain");
                }, this.setTimeoutFn);
            });
        }
    }
    doClose() {
        if (typeof this.ws !== "undefined") {
            this.ws.onerror = ()=>{};
            this.ws.close();
            this.ws = null;
        }
    }
    /**
     * Generates uri for connection.
     *
     * @private
     */ uri() {
        const schema = this.opts.secure ? "wss" : "ws";
        const query = this.query || {};
        // append timestamp to URI
        if (this.opts.timestampRequests) query[this.opts.timestampParam] = (0, _utilJs.randomString)();
        // communicate binary support capabilities
        if (!this.supportsBinary) query.b64 = 1;
        return this.createUri(schema, query);
    }
}
const WebSocketCtor = (0, _globalsNodeJs.globalThisShim).WebSocket || (0, _globalsNodeJs.globalThisShim).MozWebSocket;
class WS extends BaseWS {
    createSocket(uri, protocols, opts) {
        return !isReactNative ? protocols ? new WebSocketCtor(uri, protocols) : new WebSocketCtor(uri) : new WebSocketCtor(uri, protocols, opts);
    }
    doWrite(_packet, data) {
        this.ws.send(data);
    }
}

},{"../transport.js":"9tBQf","../util.js":"kk7Cp","engine.io-parser":"kVTy2","../globals.node.js":"6Aw5d","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"g53pT":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * WebTransport transport based on the built-in `WebTransport` object.
 *
 * Usage: browser, Node.js (with the `@fails-components/webtransport` package)
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/API/WebTransport
 * @see https://caniuse.com/webtransport
 */ parcelHelpers.export(exports, "WT", ()=>WT);
var _transportJs = require("../transport.js");
var _globalsNodeJs = require("../globals.node.js");
var _engineIoParser = require("engine.io-parser");
class WT extends (0, _transportJs.Transport) {
    get name() {
        return "webtransport";
    }
    doOpen() {
        try {
            // @ts-ignore
            this._transport = new WebTransport(this.createUri("https"), this.opts.transportOptions[this.name]);
        } catch (err) {
            return this.emitReserved("error", err);
        }
        this._transport.closed.then(()=>{
            this.onClose();
        }).catch((err)=>{
            this.onError("webtransport error", err);
        });
        // note: we could have used async/await, but that would require some additional polyfills
        this._transport.ready.then(()=>{
            this._transport.createBidirectionalStream().then((stream)=>{
                const decoderStream = (0, _engineIoParser.createPacketDecoderStream)(Number.MAX_SAFE_INTEGER, this.socket.binaryType);
                const reader = stream.readable.pipeThrough(decoderStream).getReader();
                const encoderStream = (0, _engineIoParser.createPacketEncoderStream)();
                encoderStream.readable.pipeTo(stream.writable);
                this._writer = encoderStream.writable.getWriter();
                const read = ()=>{
                    reader.read().then(({ done, value })=>{
                        if (done) return;
                        this.onPacket(value);
                        read();
                    }).catch((err)=>{});
                };
                read();
                const packet = {
                    type: "open"
                };
                if (this.query.sid) packet.data = `{"sid":"${this.query.sid}"}`;
                this._writer.write(packet).then(()=>this.onOpen());
            });
        });
    }
    write(packets) {
        this.writable = false;
        for(let i = 0; i < packets.length; i++){
            const packet = packets[i];
            const lastPacket = i === packets.length - 1;
            this._writer.write(packet).then(()=>{
                if (lastPacket) (0, _globalsNodeJs.nextTick)(()=>{
                    this.writable = true;
                    this.emitReserved("drain");
                }, this.setTimeoutFn);
            });
        }
    }
    doClose() {
        var _a;
        (_a = this._transport) === null || _a === void 0 || _a.close();
    }
}

},{"../transport.js":"9tBQf","../globals.node.js":"6Aw5d","engine.io-parser":"kVTy2","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"5Y2kK":[function(require,module,exports,__globalThis) {
// imported from https://github.com/galkn/parseuri
/**
 * Parses a URI
 *
 * Note: we could also have used the built-in URL object, but it isn't supported on all platforms.
 *
 * See:
 * - https://developer.mozilla.org/en-US/docs/Web/API/URL
 * - https://caniuse.com/url
 * - https://www.rfc-editor.org/rfc/rfc3986#appendix-B
 *
 * History of the parse() method:
 * - first commit: https://github.com/socketio/socket.io-client/commit/4ee1d5d94b3906a9c052b459f1a818b15f38f91c
 * - export into its own module: https://github.com/socketio/engine.io-client/commit/de2c561e4564efeb78f1bdb1ba39ef81b2822cb3
 * - reimport: https://github.com/socketio/engine.io-client/commit/df32277c3f6d622eec5ed09f493cae3f3391d242
 *
 * @author Steven Levithan <stevenlevithan.com> (MIT license)
 * @api private
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "parse", ()=>parse);
const re = /^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/;
const parts = [
    'source',
    'protocol',
    'authority',
    'userInfo',
    'user',
    'password',
    'host',
    'port',
    'relative',
    'path',
    'directory',
    'file',
    'query',
    'anchor'
];
function parse(str) {
    if (str.length > 8000) throw "URI too long";
    const src = str, b = str.indexOf('['), e = str.indexOf(']');
    if (b != -1 && e != -1) str = str.substring(0, b) + str.substring(b, e).replace(/:/g, ';') + str.substring(e, str.length);
    let m = re.exec(str || ''), uri = {}, i = 14;
    while(i--)uri[parts[i]] = m[i] || '';
    if (b != -1 && e != -1) {
        uri.source = src;
        uri.host = uri.host.substring(1, uri.host.length - 1).replace(/;/g, ':');
        uri.authority = uri.authority.replace('[', '').replace(']', '').replace(/;/g, ':');
        uri.ipv6uri = true;
    }
    uri.pathNames = pathNames(uri, uri['path']);
    uri.queryKey = queryKey(uri, uri['query']);
    return uri;
}
function pathNames(obj, path) {
    const regx = /\/{2,9}/g, names = path.replace(regx, "/").split("/");
    if (path.slice(0, 1) == '/' || path.length === 0) names.splice(0, 1);
    if (path.slice(-1) == '/') names.splice(names.length - 1, 1);
    return names;
}
function queryKey(uri, query) {
    const data = {};
    query.replace(/(?:^|&)([^&=]*)=?([^&]*)/g, function($0, $1, $2) {
        if ($1) data[$1] = $2;
    });
    return data;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"3mA2E":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * HTTP long-polling based on the built-in `fetch()` method.
 *
 * Usage: browser, Node.js (since v18), Deno, Bun
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/API/fetch
 * @see https://caniuse.com/fetch
 * @see https://nodejs.org/api/globals.html#fetch
 */ parcelHelpers.export(exports, "Fetch", ()=>Fetch);
var _pollingJs = require("./polling.js");
class Fetch extends (0, _pollingJs.Polling) {
    doPoll() {
        this._fetch().then((res)=>{
            if (!res.ok) return this.onError("fetch read error", res.status, res);
            res.text().then((data)=>this.onData(data));
        }).catch((err)=>{
            this.onError("fetch read error", err);
        });
    }
    doWrite(data, callback) {
        this._fetch(data).then((res)=>{
            if (!res.ok) return this.onError("fetch write error", res.status, res);
            callback();
        }).catch((err)=>{
            this.onError("fetch write error", err);
        });
    }
    _fetch(data) {
        var _a;
        const isPost = data !== undefined;
        const headers = new Headers(this.opts.extraHeaders);
        if (isPost) headers.set("content-type", "text/plain;charset=UTF-8");
        (_a = this.socket._cookieJar) === null || _a === void 0 || _a.appendCookies(headers);
        return fetch(this.uri(), {
            method: isPost ? "POST" : "GET",
            body: isPost ? data : null,
            headers,
            credentials: this.opts.withCredentials ? "include" : "omit"
        }).then((res)=>{
            var _a;
            // @ts-ignore getSetCookie() was added in Node.js v19.7.0
            (_a = this.socket._cookieJar) === null || _a === void 0 || _a.parseCookies(res.headers.getSetCookie());
            return res;
        });
    }
}

},{"./polling.js":"ePbRc","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"9SqfW":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Manager", ()=>Manager);
var _engineIoClient = require("engine.io-client");
var _socketJs = require("./socket.js");
var _socketIoParser = require("socket.io-parser");
var _onJs = require("./on.js");
var _backo2Js = require("./contrib/backo2.js");
var _componentEmitter = require("@socket.io/component-emitter");
class Manager extends (0, _componentEmitter.Emitter) {
    constructor(uri, opts){
        var _a;
        super();
        this.nsps = {};
        this.subs = [];
        if (uri && "object" === typeof uri) {
            opts = uri;
            uri = undefined;
        }
        opts = opts || {};
        opts.path = opts.path || "/socket.io";
        this.opts = opts;
        (0, _engineIoClient.installTimerFunctions)(this, opts);
        this.reconnection(opts.reconnection !== false);
        this.reconnectionAttempts(opts.reconnectionAttempts || Infinity);
        this.reconnectionDelay(opts.reconnectionDelay || 1000);
        this.reconnectionDelayMax(opts.reconnectionDelayMax || 5000);
        this.randomizationFactor((_a = opts.randomizationFactor) !== null && _a !== void 0 ? _a : 0.5);
        this.backoff = new (0, _backo2Js.Backoff)({
            min: this.reconnectionDelay(),
            max: this.reconnectionDelayMax(),
            jitter: this.randomizationFactor()
        });
        this.timeout(null == opts.timeout ? 20000 : opts.timeout);
        this._readyState = "closed";
        this.uri = uri;
        const _parser = opts.parser || _socketIoParser;
        this.encoder = new _parser.Encoder();
        this.decoder = new _parser.Decoder();
        this._autoConnect = opts.autoConnect !== false;
        if (this._autoConnect) this.open();
    }
    reconnection(v) {
        if (!arguments.length) return this._reconnection;
        this._reconnection = !!v;
        if (!v) this.skipReconnect = true;
        return this;
    }
    reconnectionAttempts(v) {
        if (v === undefined) return this._reconnectionAttempts;
        this._reconnectionAttempts = v;
        return this;
    }
    reconnectionDelay(v) {
        var _a;
        if (v === undefined) return this._reconnectionDelay;
        this._reconnectionDelay = v;
        (_a = this.backoff) === null || _a === void 0 || _a.setMin(v);
        return this;
    }
    randomizationFactor(v) {
        var _a;
        if (v === undefined) return this._randomizationFactor;
        this._randomizationFactor = v;
        (_a = this.backoff) === null || _a === void 0 || _a.setJitter(v);
        return this;
    }
    reconnectionDelayMax(v) {
        var _a;
        if (v === undefined) return this._reconnectionDelayMax;
        this._reconnectionDelayMax = v;
        (_a = this.backoff) === null || _a === void 0 || _a.setMax(v);
        return this;
    }
    timeout(v) {
        if (!arguments.length) return this._timeout;
        this._timeout = v;
        return this;
    }
    /**
     * Starts trying to reconnect if reconnection is enabled and we have not
     * started reconnecting yet
     *
     * @private
     */ maybeReconnectOnOpen() {
        // Only try to reconnect if it's the first time we're connecting
        if (!this._reconnecting && this._reconnection && this.backoff.attempts === 0) // keeps reconnection from firing twice for the same reconnection loop
        this.reconnect();
    }
    /**
     * Sets the current transport `socket`.
     *
     * @param {Function} fn - optional, callback
     * @return self
     * @public
     */ open(fn) {
        if (~this._readyState.indexOf("open")) return this;
        this.engine = new (0, _engineIoClient.Socket)(this.uri, this.opts);
        const socket = this.engine;
        const self = this;
        this._readyState = "opening";
        this.skipReconnect = false;
        // emit `open`
        const openSubDestroy = (0, _onJs.on)(socket, "open", function() {
            self.onopen();
            fn && fn();
        });
        const onError = (err)=>{
            this.cleanup();
            this._readyState = "closed";
            this.emitReserved("error", err);
            if (fn) fn(err);
            else // Only do this if there is no fn to handle the error
            this.maybeReconnectOnOpen();
        };
        // emit `error`
        const errorSub = (0, _onJs.on)(socket, "error", onError);
        if (false !== this._timeout) {
            const timeout = this._timeout;
            // set timer
            const timer = this.setTimeoutFn(()=>{
                openSubDestroy();
                onError(new Error("timeout"));
                socket.close();
            }, timeout);
            if (this.opts.autoUnref) timer.unref();
            this.subs.push(()=>{
                this.clearTimeoutFn(timer);
            });
        }
        this.subs.push(openSubDestroy);
        this.subs.push(errorSub);
        return this;
    }
    /**
     * Alias for open()
     *
     * @return self
     * @public
     */ connect(fn) {
        return this.open(fn);
    }
    /**
     * Called upon transport open.
     *
     * @private
     */ onopen() {
        // clear old subs
        this.cleanup();
        // mark as open
        this._readyState = "open";
        this.emitReserved("open");
        // add new subs
        const socket = this.engine;
        this.subs.push((0, _onJs.on)(socket, "ping", this.onping.bind(this)), (0, _onJs.on)(socket, "data", this.ondata.bind(this)), (0, _onJs.on)(socket, "error", this.onerror.bind(this)), (0, _onJs.on)(socket, "close", this.onclose.bind(this)), // @ts-ignore
        (0, _onJs.on)(this.decoder, "decoded", this.ondecoded.bind(this)));
    }
    /**
     * Called upon a ping.
     *
     * @private
     */ onping() {
        this.emitReserved("ping");
    }
    /**
     * Called with data.
     *
     * @private
     */ ondata(data) {
        try {
            this.decoder.add(data);
        } catch (e) {
            this.onclose("parse error", e);
        }
    }
    /**
     * Called when parser fully decodes a packet.
     *
     * @private
     */ ondecoded(packet) {
        // the nextTick call prevents an exception in a user-provided event listener from triggering a disconnection due to a "parse error"
        (0, _engineIoClient.nextTick)(()=>{
            this.emitReserved("packet", packet);
        }, this.setTimeoutFn);
    }
    /**
     * Called upon socket error.
     *
     * @private
     */ onerror(err) {
        this.emitReserved("error", err);
    }
    /**
     * Creates a new socket for the given `nsp`.
     *
     * @return {Socket}
     * @public
     */ socket(nsp, opts) {
        let socket = this.nsps[nsp];
        if (!socket) {
            socket = new (0, _socketJs.Socket)(this, nsp, opts);
            this.nsps[nsp] = socket;
        } else if (this._autoConnect && !socket.active) socket.connect();
        return socket;
    }
    /**
     * Called upon a socket close.
     *
     * @param socket
     * @private
     */ _destroy(socket) {
        const nsps = Object.keys(this.nsps);
        for (const nsp of nsps){
            const socket = this.nsps[nsp];
            if (socket.active) return;
        }
        this._close();
    }
    /**
     * Writes a packet.
     *
     * @param packet
     * @private
     */ _packet(packet) {
        const encodedPackets = this.encoder.encode(packet);
        for(let i = 0; i < encodedPackets.length; i++)this.engine.write(encodedPackets[i], packet.options);
    }
    /**
     * Clean up transport subscriptions and packet buffer.
     *
     * @private
     */ cleanup() {
        this.subs.forEach((subDestroy)=>subDestroy());
        this.subs.length = 0;
        this.decoder.destroy();
    }
    /**
     * Close the current socket.
     *
     * @private
     */ _close() {
        this.skipReconnect = true;
        this._reconnecting = false;
        this.onclose("forced close");
    }
    /**
     * Alias for close()
     *
     * @private
     */ disconnect() {
        return this._close();
    }
    /**
     * Called when:
     *
     * - the low-level engine is closed
     * - the parser encountered a badly formatted packet
     * - all sockets are disconnected
     *
     * @private
     */ onclose(reason, description) {
        var _a;
        this.cleanup();
        (_a = this.engine) === null || _a === void 0 || _a.close();
        this.backoff.reset();
        this._readyState = "closed";
        this.emitReserved("close", reason, description);
        if (this._reconnection && !this.skipReconnect) this.reconnect();
    }
    /**
     * Attempt a reconnection.
     *
     * @private
     */ reconnect() {
        if (this._reconnecting || this.skipReconnect) return this;
        const self = this;
        if (this.backoff.attempts >= this._reconnectionAttempts) {
            this.backoff.reset();
            this.emitReserved("reconnect_failed");
            this._reconnecting = false;
        } else {
            const delay = this.backoff.duration();
            this._reconnecting = true;
            const timer = this.setTimeoutFn(()=>{
                if (self.skipReconnect) return;
                this.emitReserved("reconnect_attempt", self.backoff.attempts);
                // check again for the case socket closed in above events
                if (self.skipReconnect) return;
                self.open((err)=>{
                    if (err) {
                        self._reconnecting = false;
                        self.reconnect();
                        this.emitReserved("reconnect_error", err);
                    } else self.onreconnect();
                });
            }, delay);
            if (this.opts.autoUnref) timer.unref();
            this.subs.push(()=>{
                this.clearTimeoutFn(timer);
            });
        }
    }
    /**
     * Called upon successful reconnect.
     *
     * @private
     */ onreconnect() {
        const attempt = this.backoff.attempts;
        this._reconnecting = false;
        this.backoff.reset();
        this.emitReserved("reconnect", attempt);
    }
}

},{"engine.io-client":"g33FB","./socket.js":"5p2b8","socket.io-parser":"374iO","./on.js":"8KEhl","./contrib/backo2.js":"4h5CX","@socket.io/component-emitter":"9MXWi","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"5p2b8":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * A Socket is the fundamental class for interacting with the server.
 *
 * A Socket belongs to a certain Namespace (by default /) and uses an underlying {@link Manager} to communicate.
 *
 * @example
 * const socket = io();
 *
 * socket.on("connect", () => {
 *   console.log("connected");
 * });
 *
 * // send an event to the server
 * socket.emit("foo", "bar");
 *
 * socket.on("foobar", () => {
 *   // an event was received from the server
 * });
 *
 * // upon disconnection
 * socket.on("disconnect", (reason) => {
 *   console.log(`disconnected due to ${reason}`);
 * });
 */ parcelHelpers.export(exports, "Socket", ()=>Socket);
var _socketIoParser = require("socket.io-parser");
var _onJs = require("./on.js");
var _componentEmitter = require("@socket.io/component-emitter");
/**
 * Internal events.
 * These events can't be emitted by the user.
 */ const RESERVED_EVENTS = Object.freeze({
    connect: 1,
    connect_error: 1,
    disconnect: 1,
    disconnecting: 1,
    // EventEmitter reserved events: https://nodejs.org/api/events.html#events_event_newlistener
    newListener: 1,
    removeListener: 1
});
class Socket extends (0, _componentEmitter.Emitter) {
    /**
     * `Socket` constructor.
     */ constructor(io, nsp, opts){
        super();
        /**
         * Whether the socket is currently connected to the server.
         *
         * @example
         * const socket = io();
         *
         * socket.on("connect", () => {
         *   console.log(socket.connected); // true
         * });
         *
         * socket.on("disconnect", () => {
         *   console.log(socket.connected); // false
         * });
         */ this.connected = false;
        /**
         * Whether the connection state was recovered after a temporary disconnection. In that case, any missed packets will
         * be transmitted by the server.
         */ this.recovered = false;
        /**
         * Buffer for packets received before the CONNECT packet
         */ this.receiveBuffer = [];
        /**
         * Buffer for packets that will be sent once the socket is connected
         */ this.sendBuffer = [];
        /**
         * The queue of packets to be sent with retry in case of failure.
         *
         * Packets are sent one by one, each waiting for the server acknowledgement, in order to guarantee the delivery order.
         * @private
         */ this._queue = [];
        /**
         * A sequence to generate the ID of the {@link QueuedPacket}.
         * @private
         */ this._queueSeq = 0;
        this.ids = 0;
        /**
         * A map containing acknowledgement handlers.
         *
         * The `withError` attribute is used to differentiate handlers that accept an error as first argument:
         *
         * - `socket.emit("test", (err, value) => { ... })` with `ackTimeout` option
         * - `socket.timeout(5000).emit("test", (err, value) => { ... })`
         * - `const value = await socket.emitWithAck("test")`
         *
         * From those that don't:
         *
         * - `socket.emit("test", (value) => { ... });`
         *
         * In the first case, the handlers will be called with an error when:
         *
         * - the timeout is reached
         * - the socket gets disconnected
         *
         * In the second case, the handlers will be simply discarded upon disconnection, since the client will never receive
         * an acknowledgement from the server.
         *
         * @private
         */ this.acks = {};
        this.flags = {};
        this.io = io;
        this.nsp = nsp;
        if (opts && opts.auth) this.auth = opts.auth;
        this._opts = Object.assign({}, opts);
        if (this.io._autoConnect) this.open();
    }
    /**
     * Whether the socket is currently disconnected
     *
     * @example
     * const socket = io();
     *
     * socket.on("connect", () => {
     *   console.log(socket.disconnected); // false
     * });
     *
     * socket.on("disconnect", () => {
     *   console.log(socket.disconnected); // true
     * });
     */ get disconnected() {
        return !this.connected;
    }
    /**
     * Subscribe to open, close and packet events
     *
     * @private
     */ subEvents() {
        if (this.subs) return;
        const io = this.io;
        this.subs = [
            (0, _onJs.on)(io, "open", this.onopen.bind(this)),
            (0, _onJs.on)(io, "packet", this.onpacket.bind(this)),
            (0, _onJs.on)(io, "error", this.onerror.bind(this)),
            (0, _onJs.on)(io, "close", this.onclose.bind(this))
        ];
    }
    /**
     * Whether the Socket will try to reconnect when its Manager connects or reconnects.
     *
     * @example
     * const socket = io();
     *
     * console.log(socket.active); // true
     *
     * socket.on("disconnect", (reason) => {
     *   if (reason === "io server disconnect") {
     *     // the disconnection was initiated by the server, you need to manually reconnect
     *     console.log(socket.active); // false
     *   }
     *   // else the socket will automatically try to reconnect
     *   console.log(socket.active); // true
     * });
     */ get active() {
        return !!this.subs;
    }
    /**
     * "Opens" the socket.
     *
     * @example
     * const socket = io({
     *   autoConnect: false
     * });
     *
     * socket.connect();
     */ connect() {
        if (this.connected) return this;
        this.subEvents();
        if (!this.io["_reconnecting"]) this.io.open(); // ensure open
        if ("open" === this.io._readyState) this.onopen();
        return this;
    }
    /**
     * Alias for {@link connect()}.
     */ open() {
        return this.connect();
    }
    /**
     * Sends a `message` event.
     *
     * This method mimics the WebSocket.send() method.
     *
     * @see https://developer.mozilla.org/en-US/docs/Web/API/WebSocket/send
     *
     * @example
     * socket.send("hello");
     *
     * // this is equivalent to
     * socket.emit("message", "hello");
     *
     * @return self
     */ send(...args) {
        args.unshift("message");
        this.emit.apply(this, args);
        return this;
    }
    /**
     * Override `emit`.
     * If the event is in `events`, it's emitted normally.
     *
     * @example
     * socket.emit("hello", "world");
     *
     * // all serializable datastructures are supported (no need to call JSON.stringify)
     * socket.emit("hello", 1, "2", { 3: ["4"], 5: Uint8Array.from([6]) });
     *
     * // with an acknowledgement from the server
     * socket.emit("hello", "world", (val) => {
     *   // ...
     * });
     *
     * @return self
     */ emit(ev, ...args) {
        var _a, _b, _c;
        if (RESERVED_EVENTS.hasOwnProperty(ev)) throw new Error('"' + ev.toString() + '" is a reserved event name');
        args.unshift(ev);
        if (this._opts.retries && !this.flags.fromQueue && !this.flags.volatile) {
            this._addToQueue(args);
            return this;
        }
        const packet = {
            type: (0, _socketIoParser.PacketType).EVENT,
            data: args
        };
        packet.options = {};
        packet.options.compress = this.flags.compress !== false;
        // event ack callback
        if ("function" === typeof args[args.length - 1]) {
            const id = this.ids++;
            const ack = args.pop();
            this._registerAckCallback(id, ack);
            packet.id = id;
        }
        const isTransportWritable = (_b = (_a = this.io.engine) === null || _a === void 0 ? void 0 : _a.transport) === null || _b === void 0 ? void 0 : _b.writable;
        const isConnected = this.connected && !((_c = this.io.engine) === null || _c === void 0 ? void 0 : _c._hasPingExpired());
        const discardPacket = this.flags.volatile && !isTransportWritable;
        if (discardPacket) ;
        else if (isConnected) {
            this.notifyOutgoingListeners(packet);
            this.packet(packet);
        } else this.sendBuffer.push(packet);
        this.flags = {};
        return this;
    }
    /**
     * @private
     */ _registerAckCallback(id, ack) {
        var _a;
        const timeout = (_a = this.flags.timeout) !== null && _a !== void 0 ? _a : this._opts.ackTimeout;
        if (timeout === undefined) {
            this.acks[id] = ack;
            return;
        }
        // @ts-ignore
        const timer = this.io.setTimeoutFn(()=>{
            delete this.acks[id];
            for(let i = 0; i < this.sendBuffer.length; i++)if (this.sendBuffer[i].id === id) this.sendBuffer.splice(i, 1);
            ack.call(this, new Error("operation has timed out"));
        }, timeout);
        const fn = (...args)=>{
            // @ts-ignore
            this.io.clearTimeoutFn(timer);
            ack.apply(this, args);
        };
        fn.withError = true;
        this.acks[id] = fn;
    }
    /**
     * Emits an event and waits for an acknowledgement
     *
     * @example
     * // without timeout
     * const response = await socket.emitWithAck("hello", "world");
     *
     * // with a specific timeout
     * try {
     *   const response = await socket.timeout(1000).emitWithAck("hello", "world");
     * } catch (err) {
     *   // the server did not acknowledge the event in the given delay
     * }
     *
     * @return a Promise that will be fulfilled when the server acknowledges the event
     */ emitWithAck(ev, ...args) {
        return new Promise((resolve, reject)=>{
            const fn = (arg1, arg2)=>{
                return arg1 ? reject(arg1) : resolve(arg2);
            };
            fn.withError = true;
            args.push(fn);
            this.emit(ev, ...args);
        });
    }
    /**
     * Add the packet to the queue.
     * @param args
     * @private
     */ _addToQueue(args) {
        let ack;
        if (typeof args[args.length - 1] === "function") ack = args.pop();
        const packet = {
            id: this._queueSeq++,
            tryCount: 0,
            pending: false,
            args,
            flags: Object.assign({
                fromQueue: true
            }, this.flags)
        };
        args.push((err, ...responseArgs)=>{
            if (packet !== this._queue[0]) // the packet has already been acknowledged
            return;
            const hasError = err !== null;
            if (hasError) {
                if (packet.tryCount > this._opts.retries) {
                    this._queue.shift();
                    if (ack) ack(err);
                }
            } else {
                this._queue.shift();
                if (ack) ack(null, ...responseArgs);
            }
            packet.pending = false;
            return this._drainQueue();
        });
        this._queue.push(packet);
        this._drainQueue();
    }
    /**
     * Send the first packet of the queue, and wait for an acknowledgement from the server.
     * @param force - whether to resend a packet that has not been acknowledged yet
     *
     * @private
     */ _drainQueue(force = false) {
        if (!this.connected || this._queue.length === 0) return;
        const packet = this._queue[0];
        if (packet.pending && !force) return;
        packet.pending = true;
        packet.tryCount++;
        this.flags = packet.flags;
        this.emit.apply(this, packet.args);
    }
    /**
     * Sends a packet.
     *
     * @param packet
     * @private
     */ packet(packet) {
        packet.nsp = this.nsp;
        this.io._packet(packet);
    }
    /**
     * Called upon engine `open`.
     *
     * @private
     */ onopen() {
        if (typeof this.auth == "function") this.auth((data)=>{
            this._sendConnectPacket(data);
        });
        else this._sendConnectPacket(this.auth);
    }
    /**
     * Sends a CONNECT packet to initiate the Socket.IO session.
     *
     * @param data
     * @private
     */ _sendConnectPacket(data) {
        this.packet({
            type: (0, _socketIoParser.PacketType).CONNECT,
            data: this._pid ? Object.assign({
                pid: this._pid,
                offset: this._lastOffset
            }, data) : data
        });
    }
    /**
     * Called upon engine or manager `error`.
     *
     * @param err
     * @private
     */ onerror(err) {
        if (!this.connected) this.emitReserved("connect_error", err);
    }
    /**
     * Called upon engine `close`.
     *
     * @param reason
     * @param description
     * @private
     */ onclose(reason, description) {
        this.connected = false;
        delete this.id;
        this.emitReserved("disconnect", reason, description);
        this._clearAcks();
    }
    /**
     * Clears the acknowledgement handlers upon disconnection, since the client will never receive an acknowledgement from
     * the server.
     *
     * @private
     */ _clearAcks() {
        Object.keys(this.acks).forEach((id)=>{
            const isBuffered = this.sendBuffer.some((packet)=>String(packet.id) === id);
            if (!isBuffered) {
                // note: handlers that do not accept an error as first argument are ignored here
                const ack = this.acks[id];
                delete this.acks[id];
                if (ack.withError) ack.call(this, new Error("socket has been disconnected"));
            }
        });
    }
    /**
     * Called with socket packet.
     *
     * @param packet
     * @private
     */ onpacket(packet) {
        const sameNamespace = packet.nsp === this.nsp;
        if (!sameNamespace) return;
        switch(packet.type){
            case (0, _socketIoParser.PacketType).CONNECT:
                if (packet.data && packet.data.sid) this.onconnect(packet.data.sid, packet.data.pid);
                else this.emitReserved("connect_error", new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));
                break;
            case (0, _socketIoParser.PacketType).EVENT:
            case (0, _socketIoParser.PacketType).BINARY_EVENT:
                this.onevent(packet);
                break;
            case (0, _socketIoParser.PacketType).ACK:
            case (0, _socketIoParser.PacketType).BINARY_ACK:
                this.onack(packet);
                break;
            case (0, _socketIoParser.PacketType).DISCONNECT:
                this.ondisconnect();
                break;
            case (0, _socketIoParser.PacketType).CONNECT_ERROR:
                this.destroy();
                const err = new Error(packet.data.message);
                // @ts-ignore
                err.data = packet.data.data;
                this.emitReserved("connect_error", err);
                break;
        }
    }
    /**
     * Called upon a server event.
     *
     * @param packet
     * @private
     */ onevent(packet) {
        const args = packet.data || [];
        if (null != packet.id) args.push(this.ack(packet.id));
        if (this.connected) this.emitEvent(args);
        else this.receiveBuffer.push(Object.freeze(args));
    }
    emitEvent(args) {
        if (this._anyListeners && this._anyListeners.length) {
            const listeners = this._anyListeners.slice();
            for (const listener of listeners)listener.apply(this, args);
        }
        super.emit.apply(this, args);
        if (this._pid && args.length && typeof args[args.length - 1] === "string") this._lastOffset = args[args.length - 1];
    }
    /**
     * Produces an ack callback to emit with an event.
     *
     * @private
     */ ack(id) {
        const self = this;
        let sent = false;
        return function(...args) {
            // prevent double callbacks
            if (sent) return;
            sent = true;
            self.packet({
                type: (0, _socketIoParser.PacketType).ACK,
                id: id,
                data: args
            });
        };
    }
    /**
     * Called upon a server acknowledgement.
     *
     * @param packet
     * @private
     */ onack(packet) {
        const ack = this.acks[packet.id];
        if (typeof ack !== "function") return;
        delete this.acks[packet.id];
        // @ts-ignore FIXME ack is incorrectly inferred as 'never'
        if (ack.withError) packet.data.unshift(null);
        // @ts-ignore
        ack.apply(this, packet.data);
    }
    /**
     * Called upon server connect.
     *
     * @private
     */ onconnect(id, pid) {
        this.id = id;
        this.recovered = pid && this._pid === pid;
        this._pid = pid; // defined only if connection state recovery is enabled
        this.connected = true;
        this.emitBuffered();
        this.emitReserved("connect");
        this._drainQueue(true);
    }
    /**
     * Emit buffered events (received and emitted).
     *
     * @private
     */ emitBuffered() {
        this.receiveBuffer.forEach((args)=>this.emitEvent(args));
        this.receiveBuffer = [];
        this.sendBuffer.forEach((packet)=>{
            this.notifyOutgoingListeners(packet);
            this.packet(packet);
        });
        this.sendBuffer = [];
    }
    /**
     * Called upon server disconnect.
     *
     * @private
     */ ondisconnect() {
        this.destroy();
        this.onclose("io server disconnect");
    }
    /**
     * Called upon forced client/server side disconnections,
     * this method ensures the manager stops tracking us and
     * that reconnections don't get triggered for this.
     *
     * @private
     */ destroy() {
        if (this.subs) {
            // clean subscriptions to avoid reconnections
            this.subs.forEach((subDestroy)=>subDestroy());
            this.subs = undefined;
        }
        this.io["_destroy"](this);
    }
    /**
     * Disconnects the socket manually. In that case, the socket will not try to reconnect.
     *
     * If this is the last active Socket instance of the {@link Manager}, the low-level connection will be closed.
     *
     * @example
     * const socket = io();
     *
     * socket.on("disconnect", (reason) => {
     *   // console.log(reason); prints "io client disconnect"
     * });
     *
     * socket.disconnect();
     *
     * @return self
     */ disconnect() {
        if (this.connected) this.packet({
            type: (0, _socketIoParser.PacketType).DISCONNECT
        });
        // remove socket from pool
        this.destroy();
        if (this.connected) // fire events
        this.onclose("io client disconnect");
        return this;
    }
    /**
     * Alias for {@link disconnect()}.
     *
     * @return self
     */ close() {
        return this.disconnect();
    }
    /**
     * Sets the compress flag.
     *
     * @example
     * socket.compress(false).emit("hello");
     *
     * @param compress - if `true`, compresses the sending data
     * @return self
     */ compress(compress) {
        this.flags.compress = compress;
        return this;
    }
    /**
     * Sets a modifier for a subsequent event emission that the event message will be dropped when this socket is not
     * ready to send messages.
     *
     * @example
     * socket.volatile.emit("hello"); // the server may or may not receive it
     *
     * @returns self
     */ get volatile() {
        this.flags.volatile = true;
        return this;
    }
    /**
     * Sets a modifier for a subsequent event emission that the callback will be called with an error when the
     * given number of milliseconds have elapsed without an acknowledgement from the server:
     *
     * @example
     * socket.timeout(5000).emit("my-event", (err) => {
     *   if (err) {
     *     // the server did not acknowledge the event in the given delay
     *   }
     * });
     *
     * @returns self
     */ timeout(timeout) {
        this.flags.timeout = timeout;
        return this;
    }
    /**
     * Adds a listener that will be fired when any event is emitted. The event name is passed as the first argument to the
     * callback.
     *
     * @example
     * socket.onAny((event, ...args) => {
     *   console.log(`got ${event}`);
     * });
     *
     * @param listener
     */ onAny(listener) {
        this._anyListeners = this._anyListeners || [];
        this._anyListeners.push(listener);
        return this;
    }
    /**
     * Adds a listener that will be fired when any event is emitted. The event name is passed as the first argument to the
     * callback. The listener is added to the beginning of the listeners array.
     *
     * @example
     * socket.prependAny((event, ...args) => {
     *   console.log(`got event ${event}`);
     * });
     *
     * @param listener
     */ prependAny(listener) {
        this._anyListeners = this._anyListeners || [];
        this._anyListeners.unshift(listener);
        return this;
    }
    /**
     * Removes the listener that will be fired when any event is emitted.
     *
     * @example
     * const catchAllListener = (event, ...args) => {
     *   console.log(`got event ${event}`);
     * }
     *
     * socket.onAny(catchAllListener);
     *
     * // remove a specific listener
     * socket.offAny(catchAllListener);
     *
     * // or remove all listeners
     * socket.offAny();
     *
     * @param listener
     */ offAny(listener) {
        if (!this._anyListeners) return this;
        if (listener) {
            const listeners = this._anyListeners;
            for(let i = 0; i < listeners.length; i++)if (listener === listeners[i]) {
                listeners.splice(i, 1);
                return this;
            }
        } else this._anyListeners = [];
        return this;
    }
    /**
     * Returns an array of listeners that are listening for any event that is specified. This array can be manipulated,
     * e.g. to remove listeners.
     */ listenersAny() {
        return this._anyListeners || [];
    }
    /**
     * Adds a listener that will be fired when any event is emitted. The event name is passed as the first argument to the
     * callback.
     *
     * Note: acknowledgements sent to the server are not included.
     *
     * @example
     * socket.onAnyOutgoing((event, ...args) => {
     *   console.log(`sent event ${event}`);
     * });
     *
     * @param listener
     */ onAnyOutgoing(listener) {
        this._anyOutgoingListeners = this._anyOutgoingListeners || [];
        this._anyOutgoingListeners.push(listener);
        return this;
    }
    /**
     * Adds a listener that will be fired when any event is emitted. The event name is passed as the first argument to the
     * callback. The listener is added to the beginning of the listeners array.
     *
     * Note: acknowledgements sent to the server are not included.
     *
     * @example
     * socket.prependAnyOutgoing((event, ...args) => {
     *   console.log(`sent event ${event}`);
     * });
     *
     * @param listener
     */ prependAnyOutgoing(listener) {
        this._anyOutgoingListeners = this._anyOutgoingListeners || [];
        this._anyOutgoingListeners.unshift(listener);
        return this;
    }
    /**
     * Removes the listener that will be fired when any event is emitted.
     *
     * @example
     * const catchAllListener = (event, ...args) => {
     *   console.log(`sent event ${event}`);
     * }
     *
     * socket.onAnyOutgoing(catchAllListener);
     *
     * // remove a specific listener
     * socket.offAnyOutgoing(catchAllListener);
     *
     * // or remove all listeners
     * socket.offAnyOutgoing();
     *
     * @param [listener] - the catch-all listener (optional)
     */ offAnyOutgoing(listener) {
        if (!this._anyOutgoingListeners) return this;
        if (listener) {
            const listeners = this._anyOutgoingListeners;
            for(let i = 0; i < listeners.length; i++)if (listener === listeners[i]) {
                listeners.splice(i, 1);
                return this;
            }
        } else this._anyOutgoingListeners = [];
        return this;
    }
    /**
     * Returns an array of listeners that are listening for any event that is specified. This array can be manipulated,
     * e.g. to remove listeners.
     */ listenersAnyOutgoing() {
        return this._anyOutgoingListeners || [];
    }
    /**
     * Notify the listeners for each packet sent
     *
     * @param packet
     *
     * @private
     */ notifyOutgoingListeners(packet) {
        if (this._anyOutgoingListeners && this._anyOutgoingListeners.length) {
            const listeners = this._anyOutgoingListeners.slice();
            for (const listener of listeners)listener.apply(this, packet.data);
        }
    }
}

},{"socket.io-parser":"374iO","./on.js":"8KEhl","@socket.io/component-emitter":"9MXWi","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"374iO":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "protocol", ()=>protocol);
parcelHelpers.export(exports, "PacketType", ()=>PacketType);
/**
 * A socket.io Encoder instance
 */ parcelHelpers.export(exports, "Encoder", ()=>Encoder);
/**
 * A socket.io Decoder instance
 *
 * @return {Object} decoder
 */ parcelHelpers.export(exports, "Decoder", ()=>Decoder);
var _componentEmitter = require("@socket.io/component-emitter");
var _binaryJs = require("./binary.js");
var _isBinaryJs = require("./is-binary.js");
/**
 * These strings must not be used as event names, as they have a special meaning.
 */ const RESERVED_EVENTS = [
    "connect",
    "connect_error",
    "disconnect",
    "disconnecting",
    "newListener",
    "removeListener"
];
const protocol = 5;
var PacketType;
(function(PacketType) {
    PacketType[PacketType["CONNECT"] = 0] = "CONNECT";
    PacketType[PacketType["DISCONNECT"] = 1] = "DISCONNECT";
    PacketType[PacketType["EVENT"] = 2] = "EVENT";
    PacketType[PacketType["ACK"] = 3] = "ACK";
    PacketType[PacketType["CONNECT_ERROR"] = 4] = "CONNECT_ERROR";
    PacketType[PacketType["BINARY_EVENT"] = 5] = "BINARY_EVENT";
    PacketType[PacketType["BINARY_ACK"] = 6] = "BINARY_ACK";
})(PacketType || (PacketType = {}));
class Encoder {
    /**
     * Encoder constructor
     *
     * @param {function} replacer - custom replacer to pass down to JSON.parse
     */ constructor(replacer){
        this.replacer = replacer;
    }
    /**
     * Encode a packet as a single string if non-binary, or as a
     * buffer sequence, depending on packet type.
     *
     * @param {Object} obj - packet object
     */ encode(obj) {
        if (obj.type === PacketType.EVENT || obj.type === PacketType.ACK) {
            if ((0, _isBinaryJs.hasBinary)(obj)) return this.encodeAsBinary({
                type: obj.type === PacketType.EVENT ? PacketType.BINARY_EVENT : PacketType.BINARY_ACK,
                nsp: obj.nsp,
                data: obj.data,
                id: obj.id
            });
        }
        return [
            this.encodeAsString(obj)
        ];
    }
    /**
     * Encode packet as string.
     */ encodeAsString(obj) {
        // first is type
        let str = "" + obj.type;
        // attachments if we have them
        if (obj.type === PacketType.BINARY_EVENT || obj.type === PacketType.BINARY_ACK) str += obj.attachments + "-";
        // if we have a namespace other than `/`
        // we append it followed by a comma `,`
        if (obj.nsp && "/" !== obj.nsp) str += obj.nsp + ",";
        // immediately followed by the id
        if (null != obj.id) str += obj.id;
        // json data
        if (null != obj.data) str += JSON.stringify(obj.data, this.replacer);
        return str;
    }
    /**
     * Encode packet as 'buffer sequence' by removing blobs, and
     * deconstructing packet into object with placeholders and
     * a list of buffers.
     */ encodeAsBinary(obj) {
        const deconstruction = (0, _binaryJs.deconstructPacket)(obj);
        const pack = this.encodeAsString(deconstruction.packet);
        const buffers = deconstruction.buffers;
        buffers.unshift(pack); // add packet info to beginning of data list
        return buffers; // write all the buffers
    }
}
// see https://stackoverflow.com/questions/8511281/check-if-a-value-is-an-object-in-javascript
function isObject(value) {
    return Object.prototype.toString.call(value) === "[object Object]";
}
class Decoder extends (0, _componentEmitter.Emitter) {
    /**
     * Decoder constructor
     *
     * @param {function} reviver - custom reviver to pass down to JSON.stringify
     */ constructor(reviver){
        super();
        this.reviver = reviver;
    }
    /**
     * Decodes an encoded packet string into packet JSON.
     *
     * @param {String} obj - encoded packet
     */ add(obj) {
        let packet;
        if (typeof obj === "string") {
            if (this.reconstructor) throw new Error("got plaintext data when reconstructing a packet");
            packet = this.decodeString(obj);
            const isBinaryEvent = packet.type === PacketType.BINARY_EVENT;
            if (isBinaryEvent || packet.type === PacketType.BINARY_ACK) {
                packet.type = isBinaryEvent ? PacketType.EVENT : PacketType.ACK;
                // binary packet's json
                this.reconstructor = new BinaryReconstructor(packet);
                // no attachments, labeled binary but no binary data to follow
                if (packet.attachments === 0) super.emitReserved("decoded", packet);
            } else // non-binary full packet
            super.emitReserved("decoded", packet);
        } else if ((0, _isBinaryJs.isBinary)(obj) || obj.base64) {
            // raw binary data
            if (!this.reconstructor) throw new Error("got binary data when not reconstructing a packet");
            else {
                packet = this.reconstructor.takeBinaryData(obj);
                if (packet) {
                    // received final buffer
                    this.reconstructor = null;
                    super.emitReserved("decoded", packet);
                }
            }
        } else throw new Error("Unknown type: " + obj);
    }
    /**
     * Decode a packet String (JSON data)
     *
     * @param {String} str
     * @return {Object} packet
     */ decodeString(str) {
        let i = 0;
        // look up type
        const p = {
            type: Number(str.charAt(0))
        };
        if (PacketType[p.type] === undefined) throw new Error("unknown packet type " + p.type);
        // look up attachments if type binary
        if (p.type === PacketType.BINARY_EVENT || p.type === PacketType.BINARY_ACK) {
            const start = i + 1;
            while(str.charAt(++i) !== "-" && i != str.length);
            const buf = str.substring(start, i);
            if (buf != Number(buf) || str.charAt(i) !== "-") throw new Error("Illegal attachments");
            p.attachments = Number(buf);
        }
        // look up namespace (if any)
        if ("/" === str.charAt(i + 1)) {
            const start = i + 1;
            while(++i){
                const c = str.charAt(i);
                if ("," === c) break;
                if (i === str.length) break;
            }
            p.nsp = str.substring(start, i);
        } else p.nsp = "/";
        // look up id
        const next = str.charAt(i + 1);
        if ("" !== next && Number(next) == next) {
            const start = i + 1;
            while(++i){
                const c = str.charAt(i);
                if (null == c || Number(c) != c) {
                    --i;
                    break;
                }
                if (i === str.length) break;
            }
            p.id = Number(str.substring(start, i + 1));
        }
        // look up json data
        if (str.charAt(++i)) {
            const payload = this.tryParse(str.substr(i));
            if (Decoder.isPayloadValid(p.type, payload)) p.data = payload;
            else throw new Error("invalid payload");
        }
        return p;
    }
    tryParse(str) {
        try {
            return JSON.parse(str, this.reviver);
        } catch (e) {
            return false;
        }
    }
    static isPayloadValid(type, payload) {
        switch(type){
            case PacketType.CONNECT:
                return isObject(payload);
            case PacketType.DISCONNECT:
                return payload === undefined;
            case PacketType.CONNECT_ERROR:
                return typeof payload === "string" || isObject(payload);
            case PacketType.EVENT:
            case PacketType.BINARY_EVENT:
                return Array.isArray(payload) && (typeof payload[0] === "number" || typeof payload[0] === "string" && RESERVED_EVENTS.indexOf(payload[0]) === -1);
            case PacketType.ACK:
            case PacketType.BINARY_ACK:
                return Array.isArray(payload);
        }
    }
    /**
     * Deallocates a parser's resources
     */ destroy() {
        if (this.reconstructor) {
            this.reconstructor.finishedReconstruction();
            this.reconstructor = null;
        }
    }
}
/**
 * A manager of a binary event's 'buffer sequence'. Should
 * be constructed whenever a packet of type BINARY_EVENT is
 * decoded.
 *
 * @param {Object} packet
 * @return {BinaryReconstructor} initialized reconstructor
 */ class BinaryReconstructor {
    constructor(packet){
        this.packet = packet;
        this.buffers = [];
        this.reconPack = packet;
    }
    /**
     * Method to be called when binary data received from connection
     * after a BINARY_EVENT packet.
     *
     * @param {Buffer | ArrayBuffer} binData - the raw binary data received
     * @return {null | Object} returns null if more binary data is expected or
     *   a reconstructed packet object if all buffers have been received.
     */ takeBinaryData(binData) {
        this.buffers.push(binData);
        if (this.buffers.length === this.reconPack.attachments) {
            // done with buffer list
            const packet = (0, _binaryJs.reconstructPacket)(this.reconPack, this.buffers);
            this.finishedReconstruction();
            return packet;
        }
        return null;
    }
    /**
     * Cleans up binary packet reconstruction variables.
     */ finishedReconstruction() {
        this.reconPack = null;
        this.buffers = [];
    }
}

},{"@socket.io/component-emitter":"9MXWi","./binary.js":"5Ac0P","./is-binary.js":"2QViU","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"5Ac0P":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Replaces every Buffer | ArrayBuffer | Blob | File in packet with a numbered placeholder.
 *
 * @param {Object} packet - socket.io event packet
 * @return {Object} with deconstructed packet and list of buffers
 * @public
 */ parcelHelpers.export(exports, "deconstructPacket", ()=>deconstructPacket);
/**
 * Reconstructs a binary packet from its placeholder packet and buffers
 *
 * @param {Object} packet - event packet with placeholders
 * @param {Array} buffers - binary buffers to put in placeholder positions
 * @return {Object} reconstructed packet
 * @public
 */ parcelHelpers.export(exports, "reconstructPacket", ()=>reconstructPacket);
var _isBinaryJs = require("./is-binary.js");
function deconstructPacket(packet) {
    const buffers = [];
    const packetData = packet.data;
    const pack = packet;
    pack.data = _deconstructPacket(packetData, buffers);
    pack.attachments = buffers.length; // number of binary 'attachments'
    return {
        packet: pack,
        buffers: buffers
    };
}
function _deconstructPacket(data, buffers) {
    if (!data) return data;
    if ((0, _isBinaryJs.isBinary)(data)) {
        const placeholder = {
            _placeholder: true,
            num: buffers.length
        };
        buffers.push(data);
        return placeholder;
    } else if (Array.isArray(data)) {
        const newData = new Array(data.length);
        for(let i = 0; i < data.length; i++)newData[i] = _deconstructPacket(data[i], buffers);
        return newData;
    } else if (typeof data === "object" && !(data instanceof Date)) {
        const newData = {};
        for(const key in data)if (Object.prototype.hasOwnProperty.call(data, key)) newData[key] = _deconstructPacket(data[key], buffers);
        return newData;
    }
    return data;
}
function reconstructPacket(packet, buffers) {
    packet.data = _reconstructPacket(packet.data, buffers);
    delete packet.attachments; // no longer useful
    return packet;
}
function _reconstructPacket(data, buffers) {
    if (!data) return data;
    if (data && data._placeholder === true) {
        const isIndexValid = typeof data.num === "number" && data.num >= 0 && data.num < buffers.length;
        if (isIndexValid) return buffers[data.num]; // appropriate buffer (should be natural order anyway)
        else throw new Error("illegal attachments");
    } else if (Array.isArray(data)) for(let i = 0; i < data.length; i++)data[i] = _reconstructPacket(data[i], buffers);
    else if (typeof data === "object") {
        for(const key in data)if (Object.prototype.hasOwnProperty.call(data, key)) data[key] = _reconstructPacket(data[key], buffers);
    }
    return data;
}

},{"./is-binary.js":"2QViU","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"2QViU":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Returns true if obj is a Buffer, an ArrayBuffer, a Blob or a File.
 *
 * @private
 */ parcelHelpers.export(exports, "isBinary", ()=>isBinary);
parcelHelpers.export(exports, "hasBinary", ()=>hasBinary);
const withNativeArrayBuffer = typeof ArrayBuffer === "function";
const isView = (obj)=>{
    return typeof ArrayBuffer.isView === "function" ? ArrayBuffer.isView(obj) : obj.buffer instanceof ArrayBuffer;
};
const toString = Object.prototype.toString;
const withNativeBlob = typeof Blob === "function" || typeof Blob !== "undefined" && toString.call(Blob) === "[object BlobConstructor]";
const withNativeFile = typeof File === "function" || typeof File !== "undefined" && toString.call(File) === "[object FileConstructor]";
function isBinary(obj) {
    return withNativeArrayBuffer && (obj instanceof ArrayBuffer || isView(obj)) || withNativeBlob && obj instanceof Blob || withNativeFile && obj instanceof File;
}
function hasBinary(obj, toJSON) {
    if (!obj || typeof obj !== "object") return false;
    if (Array.isArray(obj)) {
        for(let i = 0, l = obj.length; i < l; i++){
            if (hasBinary(obj[i])) return true;
        }
        return false;
    }
    if (isBinary(obj)) return true;
    if (obj.toJSON && typeof obj.toJSON === "function" && arguments.length === 1) return hasBinary(obj.toJSON(), true);
    for(const key in obj){
        if (Object.prototype.hasOwnProperty.call(obj, key) && hasBinary(obj[key])) return true;
    }
    return false;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"8KEhl":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "on", ()=>on);
function on(obj, ev, fn) {
    obj.on(ev, fn);
    return function subDestroy() {
        obj.off(ev, fn);
    };
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"4h5CX":[function(require,module,exports,__globalThis) {
/**
 * Initialize backoff timer with `opts`.
 *
 * - `min` initial timeout in milliseconds [100]
 * - `max` max timeout [10000]
 * - `jitter` [0]
 * - `factor` [2]
 *
 * @param {Object} opts
 * @api public
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Backoff", ()=>Backoff);
function Backoff(opts) {
    opts = opts || {};
    this.ms = opts.min || 100;
    this.max = opts.max || 10000;
    this.factor = opts.factor || 2;
    this.jitter = opts.jitter > 0 && opts.jitter <= 1 ? opts.jitter : 0;
    this.attempts = 0;
}
/**
 * Return the backoff duration.
 *
 * @return {Number}
 * @api public
 */ Backoff.prototype.duration = function() {
    var ms = this.ms * Math.pow(this.factor, this.attempts++);
    if (this.jitter) {
        var rand = Math.random();
        var deviation = Math.floor(rand * this.jitter * ms);
        ms = (Math.floor(rand * 10) & 1) == 0 ? ms - deviation : ms + deviation;
    }
    return Math.min(ms, this.max) | 0;
};
/**
 * Reset the number of attempts.
 *
 * @api public
 */ Backoff.prototype.reset = function() {
    this.attempts = 0;
};
/**
 * Set the minimum duration
 *
 * @api public
 */ Backoff.prototype.setMin = function(min) {
    this.ms = min;
};
/**
 * Set the maximum duration
 *
 * @api public
 */ Backoff.prototype.setMax = function(max) {
    this.max = max;
};
/**
 * Set the jitter
 *
 * @api public
 */ Backoff.prototype.setJitter = function(jitter) {
    this.jitter = jitter;
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}]},["io2N8","bNJxx"], "bNJxx", "parcelRequire2e9a", {})

//# sourceMappingURL=server.36960861.js.map
