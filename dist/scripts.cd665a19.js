// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
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

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"img/*.jpg":[function(require,module,exports) {
module.exports = {};
},{}],"js/data/students.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.interfaceStudents = exports.animationStudents = void 0;
var animationStudents = [{
  name: 'Evan Costa',
  demoreel: 'demoreel',
  website: 'website portfolio',
  room: 'Room No. 1',
  time: '5:00–5:20 | 6:00–6:20'
}, {
  name: 'Calvin Gacuya',
  demoreel: 'demoreel',
  website: 'website portfolio',
  room: 'Room No. 1',
  time: '5:00–5:20 | 6:00–6:20'
}, {
  name: 'Tina Gonzalez',
  demoreel: 'demoreel',
  website: 'website portfolio',
  room: 'Room No. 1',
  time: '5:00–5:20 | 6:00–6:20'
}, {
  name: 'Raleigh Harris',
  demoreel: 'demoreel',
  website: 'website portfolio',
  room: 'Room No. 1',
  time: '5:00–5:20 | 6:00–6:20'
}, {
  name: 'Vivien Liu',
  demoreel: 'demoreel',
  website: 'website portfolio',
  room: 'Room No. 1',
  time: '5:00–5:20 | 6:00–6:20'
}, {
  name: 'Nao Minegishi',
  demoreel: 'demoreel',
  website: 'website portfolio',
  room: 'Room No. 1',
  time: '5:00–5:20 | 6:00–6:20'
}, // {
//     name: 'Andruw Penera',
//     demoreel: 'demoreel',
//     website: 'website portfolio',
//     room: 'Room No. 1',
//     time: '5:00–5:20 | 6:00–6:20',
// },
{
  name: 'Kyle Moy',
  demoreel: 'demoreel',
  website: 'website portfolio',
  room: 'Room No. 1',
  time: '5:00–5:20 | 6:00–6:20'
}, {
  name: 'Joshua Richards',
  demoreel: 'demoreel',
  website: 'website portfolio',
  room: 'Room No. 1',
  time: '5:00–5:20 | 6:00–6:20'
}, {
  name: 'Schyler Lai Shinde',
  demoreel: 'demoreel',
  website: 'website portfolio',
  room: 'Room No. 1',
  time: '5:00–5:20 | 6:00–6:20'
}, {
  name: 'Annika Quinn',
  demoreel: 'demoreel',
  website: 'website portfolio',
  room: 'Room No. 1',
  time: '5:00–5:20 | 6:00–6:20'
}, {
  name: 'Hannah Woodward',
  demoreel: 'demoreel',
  website: 'website portfolio',
  room: 'Room No. 1',
  time: '5:00–5:20 | 6:00–6:20'
}];
exports.animationStudents = animationStudents;
var interfaceStudents = [{
  name: 'Ariana Enomoto',
  website: 'https://aritayeno.com/',
  room: 'Room No. 1',
  time: '5:00–5:20 | 6:00–6:20'
}, {
  name: 'Emily Freeman',
  website: 'https://eafreeman.com',
  room: 'Room No. 1',
  time: '5:00–5:20 | 6:00–6:20'
}, {
  name: 'Christi Gonzales',
  website: 'https://christigonzales.com/',
  room: 'Room No. 1',
  time: '5:00–5:20 | 6:00–6:20'
}, {
  name: 'Eryn Iwanaga',
  website: 'https://eiwanaga.com/',
  room: 'Room No. 1',
  time: '5:00–5:20 | 6:00–6:20'
}, {
  name: 'Christy Liang',
  website: 'https://christyzliang.com',
  room: 'Room No. 1',
  time: '5:00–5:20 | 6:00–6:20'
}, {
  name: 'Koreena Nagai',
  website: 'https://knagai.com',
  room: 'Room No. 1',
  time: '5:00–5:20 | 6:00–6:20'
}, {
  name: 'Miyuki Sekiguchi',
  website: 'https://miyukingseki.com',
  room: 'Room No. 1',
  time: '5:00–5:20 | 6:00–6:20'
}, {
  name: 'Tomy Takemura',
  website: 'https://tomytak.com',
  room: 'Room No. 1',
  time: '5:00–5:20 | 6:00–6:20'
}, {
  name: 'Joanna Yee',
  website: 'https://joannamedia.com',
  room: 'Room No. 1',
  time: '5:00–5:20 | 6:00–6:20'
}];
exports.interfaceStudents = interfaceStudents;
},{}],"js/scripts.js":[function(require,module,exports) {
"use strict";

var _ = _interopRequireDefault(require("../img/*.jpg"));

var _students = require("./data/students");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Dynamically Generate Students
var animationParent = document.querySelector('.animation .students-container');
var interfaceParent = document.querySelector('.interface .students-container');
var imagesArr = Object.keys(_.default);

function makeStudentElement(_ref, isAnimation) {
  var name = _ref.name,
      website = _ref.website,
      room = _ref.room,
      time = _ref.time;
  var firstName = name.split(' ')[0].toLowerCase();
  var initialImage;
  imagesArr.map(function (img, i) {
    if (img.includes(firstName + '1')) {
      initialImage = Object.values(_.default)[i];
    }
  });
  return "<div class=\"student\">\n                    <img class=\"profile\" src=\"".concat(initialImage, "\" />\n                    <h3 class=\"name\">").concat(name, "</h3>\n                    <a href=\"").concat(website, "\"><p>").concat(website, "</p></a>\n                    ").concat(isAnimation ? "<a href=\"google.com\"><p>demo reel</p></a>" : '', "\n                    <p><strong>").concat(room, "</strong></p>\n                    <p><strong>").concat(time, "</strong></p>\n            </div>");
}

;

function createStudents(parent, students) {
  var isAnimation = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  students.map(function (student) {
    parent.innerHTML += makeStudentElement(student, isAnimation);
  });
}

;
createStudents(interfaceParent, _students.interfaceStudents);
createStudents(animationParent, _students.animationStudents, true); // Handle Students Hover Effect

var animationStudentsCollection = document.querySelectorAll('.animation .student');
var interfaceStudentsCollection = document.querySelectorAll('.interface .student');

function handleImageHoverEffect(students, studentsArray) {
  students.forEach(function (student) {
    var studentImage = student.querySelector('img');
    var studentName = student.querySelector('.name').innerText;
    var firstName = studentName.split(' ')[0].toLowerCase();
    var hoveredImage, initialImage;
    imagesArr.map(function (img, i) {
      if (img.includes(firstName + '1')) {
        initialImage = Object.values(_.default)[i];
      }

      if (img.includes(firstName + '2')) {
        hoveredImage = Object.values(_.default)[i];
      }
    });
    student.addEventListener('mouseenter', function () {
      return studentImage.src = hoveredImage;
    });
    student.addEventListener('mouseleave', function () {
      return studentImage.src = initialImage;
    });
  });
}

;
handleImageHoverEffect(interfaceStudentsCollection, _students.interfaceStudents);
handleImageHoverEffect(animationStudentsCollection, _students.animationStudents);
},{"../img/*.jpg":"img/*.jpg","./data/students":"js/data/students.js"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "50108" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/scripts.js"], null)
//# sourceMappingURL=/scripts.cd665a19.js.map