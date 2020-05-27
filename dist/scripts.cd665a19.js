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
})({"img/andruw1.jpg":[function(require,module,exports) {
module.exports = "/andruw1.c2a3a55e.jpg";
},{}],"img/andruw2.jpg":[function(require,module,exports) {
module.exports = "/andruw2.155de652.jpg";
},{}],"img/annika1.jpg":[function(require,module,exports) {
module.exports = "/annika1.279ad81c.jpg";
},{}],"img/annika2.jpg":[function(require,module,exports) {
module.exports = "/annika2.4b7c21c5.jpg";
},{}],"img/ariana1.jpg":[function(require,module,exports) {
module.exports = "/ariana1.d0ce5f23.jpg";
},{}],"img/ariana2.jpg":[function(require,module,exports) {
module.exports = "/ariana2.7421964e.jpg";
},{}],"img/calvin1.jpg":[function(require,module,exports) {
module.exports = "/calvin1.5409e81f.jpg";
},{}],"img/calvin2.jpg":[function(require,module,exports) {
module.exports = "/calvin2.6bf48703.jpg";
},{}],"img/christi1.jpg":[function(require,module,exports) {
module.exports = "/christi1.770513d3.jpg";
},{}],"img/christi2.jpg":[function(require,module,exports) {
module.exports = "/christi2.5d1be7d4.jpg";
},{}],"img/christy1.jpg":[function(require,module,exports) {
module.exports = "/christy1.ed59810c.jpg";
},{}],"img/christy2.jpg":[function(require,module,exports) {
module.exports = "/christy2.40009af1.jpg";
},{}],"img/emily1.jpg":[function(require,module,exports) {
module.exports = "/emily1.b51722d6.jpg";
},{}],"img/emily2.jpg":[function(require,module,exports) {
module.exports = "/emily2.d23683e2.jpg";
},{}],"img/eryn1.jpg":[function(require,module,exports) {
module.exports = "/eryn1.79968624.jpg";
},{}],"img/eryn2.jpg":[function(require,module,exports) {
module.exports = "/eryn2.76598ece.jpg";
},{}],"img/evan1.jpg":[function(require,module,exports) {
module.exports = "/evan1.75182f7e.jpg";
},{}],"img/evan2.jpg":[function(require,module,exports) {
module.exports = "/evan2.dfaed0c5.jpg";
},{}],"img/hannah1.jpg":[function(require,module,exports) {
module.exports = "/hannah1.bfad8026.jpg";
},{}],"img/hannah2.jpg":[function(require,module,exports) {
module.exports = "/hannah2.65f107af.jpg";
},{}],"img/joanna1.jpg":[function(require,module,exports) {
module.exports = "/joanna1.e13669aa.jpg";
},{}],"img/joanna2.jpg":[function(require,module,exports) {
module.exports = "/joanna2.bca7a9d1.jpg";
},{}],"img/joshua1.jpg":[function(require,module,exports) {
module.exports = "/joshua1.ab704ac0.jpg";
},{}],"img/joshua2.jpg":[function(require,module,exports) {
module.exports = "/joshua2.5fa5caf2.jpg";
},{}],"img/koreena1.jpg":[function(require,module,exports) {
module.exports = "/koreena1.6726d4ba.jpg";
},{}],"img/koreena2.jpg":[function(require,module,exports) {
module.exports = "/koreena2.4c4b7457.jpg";
},{}],"img/kyle1.jpg":[function(require,module,exports) {
module.exports = "/kyle1.04150077.jpg";
},{}],"img/kyle2.jpg":[function(require,module,exports) {
module.exports = "/kyle2.213a8e4f.jpg";
},{}],"img/miyuki1.jpg":[function(require,module,exports) {
module.exports = "/miyuki1.c2f10c76.jpg";
},{}],"img/miyuki2.jpg":[function(require,module,exports) {
module.exports = "/miyuki2.4b66b5ba.jpg";
},{}],"img/nao1.jpg":[function(require,module,exports) {
module.exports = "/nao1.8cced99d.jpg";
},{}],"img/nao2.jpg":[function(require,module,exports) {
module.exports = "/nao2.898e278b.jpg";
},{}],"img/raleigh1.jpg":[function(require,module,exports) {
module.exports = "/raleigh1.082c2d7b.jpg";
},{}],"img/raleigh2.jpg":[function(require,module,exports) {
module.exports = "/raleigh2.1deedb7b.jpg";
},{}],"img/schyler1.jpg":[function(require,module,exports) {
module.exports = "/schyler1.cfb55cc4.jpg";
},{}],"img/schyler2.jpg":[function(require,module,exports) {
module.exports = "/schyler2.45a69203.jpg";
},{}],"img/tina1.jpg":[function(require,module,exports) {
module.exports = "/tina1.7dc91b27.jpg";
},{}],"img/tina2.jpg":[function(require,module,exports) {
module.exports = "/tina2.819330d2.jpg";
},{}],"img/tomy1.jpg":[function(require,module,exports) {
module.exports = "/tomy1.59748479.jpg";
},{}],"img/tomy2.jpg":[function(require,module,exports) {
module.exports = "/tomy2.ac99e0a6.jpg";
},{}],"img/vivien1.jpg":[function(require,module,exports) {
module.exports = "/vivien1.8dc3e286.jpg";
},{}],"img/vivien2.jpg":[function(require,module,exports) {
module.exports = "/vivien2.2a052c71.jpg";
},{}],"img/*.jpg":[function(require,module,exports) {
module.exports = {
  "andruw1": require("./andruw1.jpg"),
  "andruw2": require("./andruw2.jpg"),
  "annika1": require("./annika1.jpg"),
  "annika2": require("./annika2.jpg"),
  "ariana1": require("./ariana1.jpg"),
  "ariana2": require("./ariana2.jpg"),
  "calvin1": require("./calvin1.jpg"),
  "calvin2": require("./calvin2.jpg"),
  "christi1": require("./christi1.jpg"),
  "christi2": require("./christi2.jpg"),
  "christy1": require("./christy1.jpg"),
  "christy2": require("./christy2.jpg"),
  "emily1": require("./emily1.jpg"),
  "emily2": require("./emily2.jpg"),
  "eryn1": require("./eryn1.jpg"),
  "eryn2": require("./eryn2.jpg"),
  "evan1": require("./evan1.jpg"),
  "evan2": require("./evan2.jpg"),
  "hannah1": require("./hannah1.jpg"),
  "hannah2": require("./hannah2.jpg"),
  "joanna1": require("./joanna1.jpg"),
  "joanna2": require("./joanna2.jpg"),
  "joshua1": require("./joshua1.jpg"),
  "joshua2": require("./joshua2.jpg"),
  "koreena1": require("./koreena1.jpg"),
  "koreena2": require("./koreena2.jpg"),
  "kyle1": require("./kyle1.jpg"),
  "kyle2": require("./kyle2.jpg"),
  "miyuki1": require("./miyuki1.jpg"),
  "miyuki2": require("./miyuki2.jpg"),
  "nao1": require("./nao1.jpg"),
  "nao2": require("./nao2.jpg"),
  "raleigh1": require("./raleigh1.jpg"),
  "raleigh2": require("./raleigh2.jpg"),
  "schyler1": require("./schyler1.jpg"),
  "schyler2": require("./schyler2.jpg"),
  "tina1": require("./tina1.jpg"),
  "tina2": require("./tina2.jpg"),
  "tomy1": require("./tomy1.jpg"),
  "tomy2": require("./tomy2.jpg"),
  "vivien1": require("./vivien1.jpg"),
  "vivien2": require("./vivien2.jpg")
};
},{"./andruw1.jpg":"img/andruw1.jpg","./andruw2.jpg":"img/andruw2.jpg","./annika1.jpg":"img/annika1.jpg","./annika2.jpg":"img/annika2.jpg","./ariana1.jpg":"img/ariana1.jpg","./ariana2.jpg":"img/ariana2.jpg","./calvin1.jpg":"img/calvin1.jpg","./calvin2.jpg":"img/calvin2.jpg","./christi1.jpg":"img/christi1.jpg","./christi2.jpg":"img/christi2.jpg","./christy1.jpg":"img/christy1.jpg","./christy2.jpg":"img/christy2.jpg","./emily1.jpg":"img/emily1.jpg","./emily2.jpg":"img/emily2.jpg","./eryn1.jpg":"img/eryn1.jpg","./eryn2.jpg":"img/eryn2.jpg","./evan1.jpg":"img/evan1.jpg","./evan2.jpg":"img/evan2.jpg","./hannah1.jpg":"img/hannah1.jpg","./hannah2.jpg":"img/hannah2.jpg","./joanna1.jpg":"img/joanna1.jpg","./joanna2.jpg":"img/joanna2.jpg","./joshua1.jpg":"img/joshua1.jpg","./joshua2.jpg":"img/joshua2.jpg","./koreena1.jpg":"img/koreena1.jpg","./koreena2.jpg":"img/koreena2.jpg","./kyle1.jpg":"img/kyle1.jpg","./kyle2.jpg":"img/kyle2.jpg","./miyuki1.jpg":"img/miyuki1.jpg","./miyuki2.jpg":"img/miyuki2.jpg","./nao1.jpg":"img/nao1.jpg","./nao2.jpg":"img/nao2.jpg","./raleigh1.jpg":"img/raleigh1.jpg","./raleigh2.jpg":"img/raleigh2.jpg","./schyler1.jpg":"img/schyler1.jpg","./schyler2.jpg":"img/schyler2.jpg","./tina1.jpg":"img/tina1.jpg","./tina2.jpg":"img/tina2.jpg","./tomy1.jpg":"img/tomy1.jpg","./tomy2.jpg":"img/tomy2.jpg","./vivien1.jpg":"img/vivien1.jpg","./vivien2.jpg":"img/vivien2.jpg"}],"js/data/students.js":[function(require,module,exports) {
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
  website: 'https://aritayeno.com',
  room: 'Room No. 1',
  time: '5:00–5:20 | 6:00–6:20'
}, {
  name: 'Emily Freeman',
  website: 'https://eafreeman.com',
  room: 'Room No. 1',
  time: '5:00–5:20 | 6:00–6:20'
}, {
  name: 'Christi Gonzales',
  website: 'https://christigonzales.com',
  room: 'Room No. 1',
  time: '5:00–5:20 | 6:00–6:20'
}, {
  name: 'Eryn Iwanaga',
  website: 'https://eiwanaga.com',
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
      _ref$website = _ref.website,
      website = _ref$website === void 0 ? '' : _ref$website,
      _ref$room = _ref.room,
      room = _ref$room === void 0 ? '' : _ref$room,
      time = _ref.time;
  var firstName = name.split(' ')[0].toLowerCase();
  var initialImage;
  imagesArr.map(function (img, i) {
    if (img.includes(firstName + '1')) {
      initialImage = Object.values(_.default)[i];
    }
  });
  return "<div class=\"student\">\n                    <img class=\"profile\" src=\"".concat(initialImage, "\" />\n                    <h3 class=\"name\">").concat(name, "</h3>\n                    <a href=\"").concat(website, "\"><p>").concat(website, "</p></a>\n                    ").concat(isAnimation ? "<a href=\"google.com\"><p>demo reel</p></a>" : '', "\n                    ").concat(!isAnimation ? "<p><strong>".concat(room, "</strong></p>") : "", "\n                    ").concat(!isAnimation ? "<p><strong>".concat(time, "</strong></p>") : "", "\n            </div>");
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "49163" + '/');

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