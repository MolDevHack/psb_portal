"use strict";
var exports = void 0;
"use strict"

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var globalThis = globalThis || ( typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : this )
var $ = ( typeof module === 'object' ) ? Object.setPrototypeOf( module['export'+'s'] , globalThis ) : globalThis
$.$$ = $

;

var $node = $node || {}
void function( module ) { var exports = module.exports = this; function require( id ) { return $node[ id.replace( /^.\// , "../" ) ] }; 
;
"use strict";
Error.stackTraceLimit = Infinity;
var $;
(function ($) {
})($ || ($ = {}));
module.exports = $;
//mam.js.map
;

$node[ "../mam" ] = $node[ "../mam.js" ] = module.exports }.call( {} , {} )
;
"use strict";
var $;
(function ($) {
    $.$mol_ambient_ref = Symbol('$mol_ambient_ref');
    function $mol_ambient(overrides) {
        return Object.setPrototypeOf(overrides, this || $);
    }
    $.$mol_ambient = $mol_ambient;
})($ || ($ = {}));
//ambient.js.map
;
"use strict";
var $;
(function ($) {
    const instances = new WeakSet();
    function $mol_delegate(proto, target) {
        const proxy = new Proxy(proto, {
            get: (_, field) => {
                const obj = target();
                let val = Reflect.get(obj, field);
                if (typeof val === 'function') {
                    val = val.bind(obj);
                }
                return val;
            },
            has: (_, field) => Reflect.has(target(), field),
            set: (_, field, value) => Reflect.set(target(), field, value),
            getOwnPropertyDescriptor: (_, field) => Reflect.getOwnPropertyDescriptor(target(), field),
            ownKeys: () => Reflect.ownKeys(target()),
            getPrototypeOf: () => Reflect.getPrototypeOf(target()),
            setPrototypeOf: (_, donor) => Reflect.setPrototypeOf(target(), donor),
            isExtensible: () => Reflect.isExtensible(target()),
            preventExtensions: () => Reflect.preventExtensions(target()),
            apply: (_, self, args) => Reflect.apply(target(), self, args),
            construct: (_, args, retarget) => Reflect.construct(target(), args, retarget),
            defineProperty: (_, field, descr) => Reflect.defineProperty(target(), field, descr),
            deleteProperty: (_, field) => Reflect.deleteProperty(target(), field),
        });
        instances.add(proxy);
        return proxy;
    }
    $.$mol_delegate = $mol_delegate;
    Reflect.defineProperty($mol_delegate, Symbol.hasInstance, {
        value: (obj) => instances.has(obj),
    });
})($ || ($ = {}));
//delegate.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_owning_map = new WeakMap();
    function $mol_owning_allow(having) {
        try {
            if (!having)
                return false;
            if (typeof having !== 'object')
                return false;
            if (having instanceof $.$mol_delegate)
                return false;
            if (typeof having['destructor'] !== 'function')
                return false;
            return true;
        }
        catch {
            return false;
        }
    }
    $.$mol_owning_allow = $mol_owning_allow;
    function $mol_owning_get(having, Owner) {
        if (!$mol_owning_allow(having))
            return null;
        while (true) {
            const owner = $.$mol_owning_map.get(having);
            if (!owner)
                return owner;
            if (!Owner)
                return owner;
            if (owner instanceof Owner)
                return owner;
            having = owner;
        }
    }
    $.$mol_owning_get = $mol_owning_get;
    function $mol_owning_check(owner, having) {
        if (!$mol_owning_allow(having))
            return false;
        if ($.$mol_owning_map.get(having) !== owner)
            return false;
        return true;
    }
    $.$mol_owning_check = $mol_owning_check;
    function $mol_owning_catch(owner, having) {
        if (!$mol_owning_allow(having))
            return false;
        if ($.$mol_owning_map.get(having))
            return false;
        $.$mol_owning_map.set(having, owner);
        return true;
    }
    $.$mol_owning_catch = $mol_owning_catch;
})($ || ($ = {}));
//owning.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_fail(error) {
        throw error;
    }
    $.$mol_fail = $mol_fail;
})($ || ($ = {}));
//fail.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_fail_hidden(error) {
        throw error;
    }
    $.$mol_fail_hidden = $mol_fail_hidden;
})($ || ($ = {}));
//hidden.js.map
;
"use strict";
//writable.js.map
;
"use strict";
var $;
(function ($) {
    var _a;
    class $mol_object2 {
        constructor(init) {
            this[_a] = null;
            if (init)
                init(this);
        }
        get $() {
            if (this[$.$mol_ambient_ref])
                return this[$.$mol_ambient_ref];
            const owner = $.$mol_owning_get(this);
            return this[$.$mol_ambient_ref] = owner?.$ || $mol_object2.$;
        }
        set $(next) {
            if (this[$.$mol_ambient_ref])
                $.$mol_fail_hidden(new Error('Context already defined'));
            this[$.$mol_ambient_ref] = next;
        }
        static create(init) {
            return new this(init);
        }
        static [(_a = $.$mol_ambient_ref, Symbol.toPrimitive)]() {
            return this.toString();
        }
        static toString() {
            if (Symbol.toStringTag in this)
                return this[Symbol.toStringTag];
            return this.name;
        }
        destructor() { }
        [Symbol.toPrimitive](hint) {
            return hint === 'number' ? this.valueOf() : this.toString();
        }
        toString() {
            return this[Symbol.toStringTag] || this.constructor.name + '()';
        }
        toJSON() {
            return this.toString();
        }
    }
    $mol_object2.$ = $;
    $.$mol_object2 = $mol_object2;
})($ || ($ = {}));
//object2.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_after_tick extends $.$mol_object2 {
        constructor(task) {
            super();
            this.task = task;
            this.cancelled = false;
            this.promise = Promise.resolve().then(() => {
                if (this.cancelled)
                    return;
                task();
            });
        }
        destructor() {
            this.cancelled = true;
        }
    }
    $.$mol_after_tick = $mol_after_tick;
})($ || ($ = {}));
//tick.js.map
;
"use strict";
var $;
(function ($) {
})($ || ($ = {}));
//context.js.map
;
"use strict";
var $node = new Proxy({ require }, {
    get(target, name, wrapper) {
        if (target[name])
            return target[name];
        const mod = target.require('module');
        if (mod.builtinModules.indexOf(name) >= 0)
            return target.require(name);
        const path = target.require('path');
        const fs = target.require('fs');
        let dir = path.resolve('.');
        const suffix = `./node_modules/${name}`;
        const $$ = $;
        while (!fs.existsSync(path.join(dir, suffix))) {
            const parent = path.resolve(dir, '..');
            if (parent === dir) {
                $$.$mol_exec('.', 'npm', 'install', name);
                try {
                    $$.$mol_exec('.', 'npm', 'install', '@types/' + name);
                }
                catch { }
                break;
            }
            else {
                dir = parent;
            }
        }
        return target.require(name);
    },
    set(target, name, value) {
        target[name] = value;
        return true;
    },
});
require = (req => Object.assign(function require(name) {
    return $node[name];
}, req))(require);
//node.node.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_dom_context = new $node.jsdom.JSDOM('', { url: 'https://localhost/' }).window;
})($ || ($ = {}));
//context.node.js.map
;
"use strict";
var $;
(function ($) {
    let all = [];
    let el = null;
    let timer = null;
    function $mol_style_attach(id, text) {
        all.push(`/* ${id} */\n\n${text}`);
        if (timer)
            return el;
        const doc = $.$mol_dom_context.document;
        if (!doc)
            return null;
        el = doc.createElement('style');
        el.id = `$mol_style_attach`;
        doc.head.appendChild(el);
        timer = new $.$mol_after_tick(() => {
            el.innerHTML = '\n' + all.join('\n\n');
            all = [];
            el = null;
            timer = null;
        });
        return el;
    }
    $.$mol_style_attach = $mol_style_attach;
})($ || ($ = {}));
//attach.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_decor {
        constructor(value) {
            this.value = value;
        }
        prefix() { return ''; }
        valueOf() { return this.value; }
        postfix() { return ''; }
        toString() {
            return `${this.prefix()}${this.valueOf()}${this.postfix()}`;
        }
    }
    $.$mol_decor = $mol_decor;
})($ || ($ = {}));
//decor.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_style_unit extends $.$mol_decor {
        constructor(value, literal) {
            super(value);
            this.literal = literal;
        }
        postfix() {
            return this.literal;
        }
        static per(value) { return new $mol_style_unit(value, '%'); }
        static px(value) { return new $mol_style_unit(value, 'px'); }
        static mm(value) { return new $mol_style_unit(value, 'mm'); }
        static cm(value) { return new $mol_style_unit(value, 'cm'); }
        static Q(value) { return new $mol_style_unit(value, 'Q'); }
        static in(value) { return new $mol_style_unit(value, 'in'); }
        static pc(value) { return new $mol_style_unit(value, 'pc'); }
        static pt(value) { return new $mol_style_unit(value, 'pt'); }
        static cap(value) { return new $mol_style_unit(value, 'cap'); }
        static ch(value) { return new $mol_style_unit(value, 'ch'); }
        static em(value) { return new $mol_style_unit(value, 'em'); }
        static rem(value) { return new $mol_style_unit(value, 'rem'); }
        static ex(value) { return new $mol_style_unit(value, 'ex'); }
        static ic(value) { return new $mol_style_unit(value, 'ic'); }
        static lh(value) { return new $mol_style_unit(value, 'lh'); }
        static rlh(value) { return new $mol_style_unit(value, 'rlh'); }
        static vh(value) { return new $mol_style_unit(value, 'vh'); }
        static vw(value) { return new $mol_style_unit(value, 'vw'); }
        static vi(value) { return new $mol_style_unit(value, 'vi'); }
        static vb(value) { return new $mol_style_unit(value, 'vb'); }
        static vmin(value) { return new $mol_style_unit(value, 'vmin'); }
        static vmax(value) { return new $mol_style_unit(value, 'vmax'); }
        static deg(value) { return new $mol_style_unit(value, 'deg'); }
        static rad(value) { return new $mol_style_unit(value, 'rad'); }
        static grad(value) { return new $mol_style_unit(value, 'grad'); }
        static turn(value) { return new $mol_style_unit(value, 'turn'); }
        static s(value) { return new $mol_style_unit(value, 's'); }
        static ms(value) { return new $mol_style_unit(value, 'ms'); }
    }
    $.$mol_style_unit = $mol_style_unit;
})($ || ($ = {}));
//unit.js.map
;
"use strict";
var $;
(function ($) {
    const { per } = $.$mol_style_unit;
    class $mol_style_func extends $.$mol_decor {
        constructor(name, value) {
            super(value);
            this.name = name;
        }
        prefix() { return this.name + '('; }
        postfix() { return ')'; }
        static calc(value) {
            return new $mol_style_func('calc', value);
        }
        static vary(name) {
            return new $mol_style_func('var', name);
        }
        static url(href) {
            return new $mol_style_func('url', JSON.stringify(href));
        }
        static hsla(hue, saturation, lightness, alpha) {
            return new $mol_style_func('hsla', [hue, per(saturation), per(lightness), alpha]);
        }
        static rgba(red, green, blue, alpha) {
            return new $mol_style_func('rgba', [red, green, blue, alpha]);
        }
    }
    $.$mol_style_func = $mol_style_func;
})($ || ($ = {}));
//func.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_attach("mol/theme/theme.css", "[mol_theme] {\n\tbackground-color: var(--mol_theme_back);\n\tcolor: var(--mol_theme_text);\n\tfill: var(--mol_theme_text);\n}\n\n[mol_theme=\"$mol_theme_light\"] , :root {\n\t--mol_theme_back: hsl( 210 , 50% , 99% );\n\t--mol_theme_hover: rgba( 0 , 0 , 0 , .05 );\n\t--mol_theme_current: hsl( 210 , 100% , 80% );\n\t--mol_theme_text: hsl( 0 , 0% , 0% );\n\t--mol_theme_control: hsla( 210 , 60% , 35% , 1 );\n\t--mol_theme_shade: rgba( 0 , 0 , 0 , .5 );\n\t--mol_theme_line: rgba( 220 , 220 , 220 , 1 );\n\t--mol_theme_focus: hsl( 290 , 100% , 40% );\n\t--mol_theme_field: white;\n\t--mol_theme_image: none;\n}\n\n[mol_theme=\"$mol_theme_dark\"] {\n\t--mol_theme_back: hsl( 210 , 50% , 10% );\n\t--mol_theme_hover: rgba( 255 , 255 , 255 , .05 );\n\t--mol_theme_current: hsl( 210 , 100% , 30% );\n\t--mol_theme_text: hsl( 0 , 0% , 80% );\n\t--mol_theme_control: hsla( 210 , 60% , 70% , 1 );\n\t--mol_theme_shade: rgba( 255 , 255 , 255 , .5 );\n\t--mol_theme_line: rgba( 50 , 50 , 50 , 1 );\n\t--mol_theme_focus: hsl( 60 , 100% , 70% );\n\t--mol_theme_field: black;\n\t--mol_theme_image: invert(1) hue-rotate(180deg);\n}\n\n[mol_theme=\"$mol_theme_base\"] {\n\t--mol_theme_back: hsla( 210 , 60% , 35% , 1 );\n\t--mol_theme_hover: hsla( 210 , 60% , 20% , 1 );\n\t--mol_theme_current: hsl( 210 , 100% , 20% );\n\t--mol_theme_text: white;\n\t--mol_theme_line: white;\n\t--mol_theme_control: white;\n}\n\n[mol_theme=\"$mol_theme_accent\"] {\n\t--mol_theme_back: hsl( 15 , 60% , 50% );\n\t--mol_theme_hover: hsl( 15 , 60% , 40% );\n\t--mol_theme_text: white;\n\t--mol_theme_line: rgba( 50 , 50 , 50 , 1 );\n\t--mol_theme_control: white;\n\t--mol_theme_focus: black;\n}\n\n[mol_theme=\"$mol_theme_accent\"] [mol_theme=\"$mol_theme_accent\"] {\n\t--mol_theme_back: black;\n\t--mol_theme_text: white;\n}\n");
})($ || ($ = {}));
//theme.css.js.map
;
"use strict";
var $;
(function ($) {
    const { vary } = $.$mol_style_func;
    $.$mol_theme = {
        back: vary('--mol_theme_back'),
        hover: vary('--mol_theme_hover'),
        current: vary('--mol_theme_current'),
        text: vary('--mol_theme_text'),
        control: vary('--mol_theme_control'),
        shade: vary('--mol_theme_shade'),
        line: vary('--mol_theme_line'),
        focus: vary('--mol_theme_focus'),
        field: vary('--mol_theme_field'),
        image: vary('--mol_theme_image'),
    };
})($ || ($ = {}));
//theme.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_attach("mol/skin/skin.css", ":root {\n\t--mol_skin_font: 16px/24px sans-serif;\n\t/* --mol_skin_font_monospace: Monaco, monospace; */\n\t--mol_skin_font_monospace: monospace;\n}\n\n/* Deprecated, use mol_theme instead */\n:root {\n\n\t--mol_skin_outline: 0 0 0 1px var(--mol_theme_line);\n\t\n\t--mol_skin_base: #3a8ccb;\n\t--mol_skin_base_text: white;\n\t\n\t--mol_skin_current: var(--mol_skin_base);\n\t--mol_skin_current_text: white;\n\t--mol_skin_current_line: #1471b8;\n\t\n\t--mol_skin_button: var(--mol_skin_card);\n\t--mol_skin_hover: rgba( 0 , 0 , 0 , .05 );\n\t\n\t--mol_skin_round: 0px;\n\t\n\t--mol_skin_focus_line: rgba( 0 , 0 , 0 , .2 );\n\t--mol_skin_focus_outline: 0 0 0 1px var(--mol_skin_focus_line);\n\t\n\t--mol_skin_float: var(--mol_skin_focus_outline);\n\n\t--mol_skin_passive: #eee;\n\t--mol_skin_passive_text: rgba( 0 , 0 , 0 , .5 );\n\t\n\t--mol_skin_light: #fcfcfc;\n\t--mol_skin_light_line: rgba( 230 , 230 , 230 , .75 );\n\t--mol_skin_light_text: rgba( 0 , 0 , 0 , .9 );\n\t--mol_skin_light_hover: #f7f7f7;\n\t--mol_skin_light_outline: 0 0 0 1px var(--mol_theme_line);\n\n\t--mol_skin_card: var(--mol_theme_back);\n\t--mol_skin_card_text: var(--mol_theme_text);\n\t\n\t--mol_skin_accent: #dd0e3e;\n\t--mol_skin_accent_text: white;\n\t--mol_skin_accent_hover: #c50d37;\n\n\t--mol_skin_warn: rgba( 255 , 50 , 50 , 0.75 );\n\t--mol_skin_warn_text: white;\n\t--mol_skin_warn_hover: color( var(--mol_skin_warn) lightness(-5%) );\n\n\t--mol_skin_good: #96DAA9;\n\t--mol_skin_good_text: black;\n\n\t--mol_skin_bad: #CC5252;\n\t--mol_skin_bad_text: white;\n}\n");
})($ || ($ = {}));
//skin.css.js.map
;
"use strict";
var $;
(function ($_1) {
    let $$;
    (function ($$) {
        let $;
    })($$ = $_1.$$ || ($_1.$$ = {}));
    $_1.$mol_object_field = Symbol('$mol_object_field');
    class $mol_object extends $_1.$mol_object2 {
        static make(config) {
            return super.create(obj => {
                for (let key in config)
                    obj[key] = config[key];
            });
        }
    }
    $_1.$mol_object = $mol_object;
})($ || ($ = {}));
//object.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_window extends $.$mol_object {
        static size(next) {
            return next || {
                width: 1024,
                height: 768,
            };
        }
    }
    $.$mol_window = $mol_window;
})($ || ($ = {}));
//window.node.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_log3_area_lazy(event) {
        const self = this;
        const stack = self.$mol_log3_stack;
        const deep = stack.length;
        let logged = false;
        stack.push(() => {
            logged = true;
            self.$mol_log3_area.call(self, event);
        });
        return () => {
            if (logged)
                self.console.groupEnd();
            if (stack.length > deep)
                stack.length = deep;
        };
    }
    $.$mol_log3_area_lazy = $mol_log3_area_lazy;
    $.$mol_log3_stack = [];
})($ || ($ = {}));
//log3.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_deprecated(message) {
        return (host, field, descr) => {
            const value = descr.value;
            let warned = false;
            descr.value = function $mol_deprecated_wrapper(...args) {
                if (!warned) {
                    this.$.$mol_log3_warn({
                        place: `${host.constructor.name}::${field}`,
                        message: `Deprecated`,
                        hint: message,
                    });
                    warned = true;
                }
                return value.call(this, ...args);
            };
        };
    }
    $.$mol_deprecated = $mol_deprecated;
})($ || ($ = {}));
//deprecated.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_tree_convert = Symbol('$mol_tree_convert');
    class $mol_tree extends $.$mol_object2 {
        constructor(config = {}) {
            super();
            this.type = config.type || '';
            if (config.value !== undefined) {
                var sub = $mol_tree.values(config.value);
                if (config.type || sub.length > 1) {
                    this.sub = [...sub, ...(config.sub || [])];
                    this.data = config.data || '';
                }
                else {
                    this.data = sub[0].data;
                    this.sub = config.sub || [];
                }
            }
            else {
                this.data = config.data || '';
                this.sub = config.sub || [];
            }
            this.baseUri = config.baseUri || '';
            this.row = config.row || 0;
            this.col = config.col || 0;
            this.length = config.length || 0;
        }
        static values(str, baseUri) {
            return str.split('\n').map((data, index) => new $mol_tree({
                data: data,
                baseUri: baseUri,
                row: index + 1,
                length: data.length,
            }));
        }
        clone(config = {}) {
            return new $mol_tree({
                type: ('type' in config) ? config.type : this.type,
                data: ('data' in config) ? config.data : this.data,
                sub: ('sub' in config) ? config.sub : this.sub,
                baseUri: ('baseUri' in config) ? config.baseUri : this.baseUri,
                row: ('row' in config) ? config.row : this.row,
                col: ('col' in config) ? config.col : this.col,
                length: ('length' in config) ? config.length : this.length,
                value: config.value
            });
        }
        make(config) {
            return new $mol_tree({
                baseUri: this.baseUri,
                row: this.row,
                col: this.col,
                length: this.length,
                ...config,
            });
        }
        make_data(value, sub) {
            return this.make({ value, sub });
        }
        make_struct(type, sub) {
            return this.make({ type, sub });
        }
        static fromString(str, baseUri) {
            var root = new $mol_tree({ baseUri: baseUri });
            var stack = [root];
            var row = 0;
            var prefix = str.replace(/^\n?(\t*)[\s\S]*/, '$1');
            var lines = str.replace(new RegExp('^\\t{0,' + prefix.length + '}', 'mg'), '').split('\n');
            lines.forEach(line => {
                ++row;
                var chunks = /^(\t*)((?:[^\n\t\\ ]+ *)*)(\\[^\n]*)?(.*?)(?:$|\n)/m.exec(line);
                if (!chunks || chunks[4])
                    return this.$.$mol_fail(new Error(`Syntax error at ${baseUri}:${row}\n${line}`));
                var indent = chunks[1];
                var path = chunks[2];
                var data = chunks[3];
                var deep = indent.length;
                var types = path ? path.replace(/ $/, '').split(/ +/) : [];
                if (stack.length <= deep)
                    return this.$.$mol_fail(new Error(`Too many tabs at ${baseUri}:${row}\n${line}`));
                stack.length = deep + 1;
                var parent = stack[deep];
                let col = deep;
                types.forEach(type => {
                    if (!type)
                        return this.$.$mol_fail(new Error(`Unexpected space symbol ${baseUri}:${row}\n${line}`));
                    var next = new $mol_tree({ type, baseUri, row, col, length: type.length });
                    const parent_sub = parent.sub;
                    parent_sub.push(next);
                    parent = next;
                    col += type.length + 1;
                });
                if (data) {
                    var next = new $mol_tree({ data: data.substring(1), baseUri, row, col, length: data.length });
                    const parent_sub = parent.sub;
                    parent_sub.push(next);
                    parent = next;
                }
                stack.push(parent);
            });
            return root;
        }
        static fromJSON(json, baseUri = '') {
            switch (true) {
                case typeof json === 'boolean':
                case typeof json === 'number':
                case json === null:
                    return new $mol_tree({
                        type: String(json),
                        baseUri: baseUri
                    });
                case typeof json === 'string':
                    return new $mol_tree({
                        value: json,
                        baseUri: baseUri
                    });
                case Array.isArray(json):
                    return new $mol_tree({
                        type: "/",
                        sub: json.map(json => $mol_tree.fromJSON(json, baseUri))
                    });
                case json instanceof Date:
                    return new $mol_tree({
                        value: json.toISOString(),
                        baseUri: baseUri
                    });
                default:
                    if (typeof json[$.$mol_tree_convert] === 'function') {
                        return json[$.$mol_tree_convert]();
                    }
                    if (typeof json.toJSON === 'function') {
                        return $mol_tree.fromJSON(json.toJSON());
                    }
                    if (json instanceof Error) {
                        const { name, message, stack } = json;
                        json = { ...json, name, message, stack };
                    }
                    var sub = [];
                    for (var key in json) {
                        if (json[key] === undefined)
                            continue;
                        const subsub = $mol_tree.fromJSON(json[key], baseUri);
                        if (/^[^\n\t\\ ]+$/.test(key)) {
                            var child = new $mol_tree({
                                type: key,
                                baseUri: baseUri,
                                sub: [subsub],
                            });
                        }
                        else {
                            var child = new $mol_tree({
                                value: key,
                                baseUri: baseUri,
                                sub: [subsub],
                            });
                        }
                        sub.push(child);
                    }
                    return new $mol_tree({
                        type: "*",
                        sub: sub,
                        baseUri: baseUri
                    });
            }
        }
        get uri() {
            return this.baseUri + '#' + this.row + ':' + this.col;
        }
        toString(prefix = '') {
            var output = '';
            if (this.type.length) {
                if (!prefix.length) {
                    prefix = "\t";
                }
                output += this.type;
                if (this.sub.length == 1) {
                    return output + ' ' + this.sub[0].toString(prefix);
                }
                output += "\n";
            }
            else if (this.data.length || prefix.length) {
                output += "\\" + this.data + "\n";
            }
            for (var child of this.sub) {
                output += prefix;
                output += child.toString(prefix + "\t");
            }
            return output;
        }
        toJSON() {
            if (!this.type)
                return this.value;
            if (this.type === 'true')
                return true;
            if (this.type === 'false')
                return false;
            if (this.type === 'null')
                return null;
            if (this.type === '*') {
                var obj = {};
                for (var child of this.sub) {
                    if (child.type === '-')
                        continue;
                    var key = child.type || child.clone({ sub: child.sub.slice(0, child.sub.length - 1) }).value;
                    var val = child.sub[child.sub.length - 1].toJSON();
                    if (val !== undefined)
                        obj[key] = val;
                }
                return obj;
            }
            if (this.type === '/') {
                var res = [];
                this.sub.forEach(child => {
                    if (child.type === '-')
                        return;
                    var val = child.toJSON();
                    if (val !== undefined)
                        res.push(val);
                });
                return res;
            }
            if (this.type === 'time') {
                return new Date(this.value);
            }
            const numb = Number(this.type);
            if (!Number.isNaN(numb) || this.type === 'NaN')
                return numb;
            throw new Error(`Unknown type (${this.type}) at ${this.uri}`);
        }
        get value() {
            var values = [];
            for (var child of this.sub) {
                if (child.type)
                    continue;
                values.push(child.value);
            }
            return this.data + values.join("\n");
        }
        insert(value, ...path) {
            if (path.length === 0)
                return value;
            const type = path[0];
            if (typeof type === 'string') {
                let replaced = false;
                const sub = this.sub.map((item, index) => {
                    if (item.type !== type)
                        return item;
                    replaced = true;
                    return item.insert(value, ...path.slice(1));
                });
                if (!replaced)
                    sub.push(new $mol_tree({ type }).insert(value, ...path.slice(1)));
                return this.clone({ sub });
            }
            else if (typeof type === 'number') {
                const sub = this.sub.slice();
                sub[type] = (sub[type] || new $mol_tree).insert(value, ...path.slice(1));
                return this.clone({ sub });
            }
            else {
                return this.clone({ sub: ((this.sub.length === 0) ? [new $mol_tree()] : this.sub).map(item => item.insert(value, ...path.slice(1))) });
            }
        }
        select(...path) {
            var next = [this];
            for (var type of path) {
                if (!next.length)
                    break;
                var prev = next;
                next = [];
                for (var item of prev) {
                    switch (typeof (type)) {
                        case 'string':
                            for (var child of item.sub) {
                                if (!type || (child.type == type)) {
                                    next.push(child);
                                }
                            }
                            break;
                        case 'number':
                            if (type < item.sub.length)
                                next.push(item.sub[type]);
                            break;
                        default: next.push(...item.sub);
                    }
                }
            }
            return new $mol_tree({ sub: next });
        }
        filter(path, value) {
            var sub = this.sub.filter(function (item) {
                var found = item.select(...path);
                if (value == null) {
                    return Boolean(found.sub.length);
                }
                else {
                    return found.sub.some(child => child.value == value);
                }
            });
            return new $mol_tree({ sub: sub });
        }
        transform(visit, stack = []) {
            const sub_stack = [this, ...stack];
            return visit(sub_stack, () => this.sub.map(node => node.transform(visit, sub_stack)).filter(n => n));
        }
        hack(context) {
            const sub = [].concat(...this.sub.map(child => {
                const handle = context[child.type] || context[''];
                if (!handle)
                    $.$mol_fail(child.error('Handler not defined'));
                return handle(child, context);
            }));
            return this.clone({ sub });
        }
        error(message) {
            return new Error(`${message}:\n${this} ${this.baseUri}:${this.row}:${this.col}`);
        }
    }
    __decorate([
        $.$mol_deprecated('Use $mol_tree:hack')
    ], $mol_tree.prototype, "transform", null);
    $.$mol_tree = $mol_tree;
})($ || ($ = {}));
//tree.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_log3_node_make(level, output, type, color) {
        return function $mol_log3_logger(event) {
            if (!event.time)
                event = { time: new Date().toISOString(), ...event };
            const tree = this.$mol_tree.fromJSON(event).clone({ type });
            let str = tree.toString();
            if (process[output].isTTY) {
                str = $node.colorette[color + 'Bright'](str);
            }
            this.console[level](str);
            const self = this;
            return () => self.console.groupEnd();
        };
    }
    $.$mol_log3_node_make = $mol_log3_node_make;
    $.$mol_log3_come = $mol_log3_node_make('info', 'stdout', 'come', 'blue');
    $.$mol_log3_done = $mol_log3_node_make('info', 'stdout', 'done', 'green');
    $.$mol_log3_fail = $mol_log3_node_make('error', 'stderr', 'fail', 'red');
    $.$mol_log3_warn = $mol_log3_node_make('warn', 'stderr', 'warn', 'yellow');
    $.$mol_log3_rise = $mol_log3_node_make('log', 'stdout', 'rise', 'magenta');
    $.$mol_log3_area = $mol_log3_node_make('log', 'stdout', 'area', 'cyan');
})($ || ($ = {}));
//log3.node.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_wrapper extends $.$mol_object2 {
        static run(task) {
            return this.func(task)();
        }
        static func(func) {
            return this.wrap(func);
        }
        static get class() {
            return (Class) => {
                const construct = (target, args) => new Class(...args);
                const handler = {
                    construct: this.func(construct)
                };
                handler[Symbol.toStringTag] = Class.name + '#';
                return new Proxy(Class, handler);
            };
        }
        static get method() {
            return (obj, name, descr) => {
                descr.value = this.func(descr.value);
                return descr;
            };
        }
        static get field() {
            return (obj, name, descr) => {
                descr.get = descr.set = this.func(descr.get);
                return descr;
            };
        }
    }
    $.$mol_wrapper = $mol_wrapper;
})($ || ($ = {}));
//wrapper.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_after_timeout extends $.$mol_object2 {
        constructor(delay, task) {
            super();
            this.delay = delay;
            this.task = task;
            this.id = setTimeout(task, delay);
        }
        destructor() {
            clearTimeout(this.id);
        }
    }
    $.$mol_after_timeout = $mol_after_timeout;
})($ || ($ = {}));
//timeout.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_after_frame extends $.$mol_after_timeout {
        constructor(task) {
            super(16, task);
            this.task = task;
        }
    }
    $.$mol_after_frame = $mol_after_frame;
})($ || ($ = {}));
//frame.node.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_compare_any(a, b) {
        if (a === b)
            return true;
        if (!Number.isNaN(a))
            return false;
        if (!Number.isNaN(b))
            return false;
        return true;
    }
    $.$mol_compare_any = $mol_compare_any;
})($ || ($ = {}));
//any.js.map
;
"use strict";
var $;
(function ($) {
    const cache = new WeakMap();
    $.$mol_conform_stack = [];
    function $mol_conform(target, source) {
        if ($.$mol_compare_any(target, source))
            return source;
        if (!target || typeof target !== 'object')
            return target;
        if (!source || typeof source !== 'object')
            return target;
        if (target instanceof Error)
            return target;
        if (source instanceof Error)
            return target;
        if (target['constructor'] !== source['constructor'])
            return target;
        if (cache.get(target))
            return target;
        cache.set(target, true);
        const conform = $.$mol_conform_handlers.get(target['constructor']);
        if (!conform)
            return target;
        if ($.$mol_conform_stack.indexOf(target) !== -1)
            return target;
        $.$mol_conform_stack.push(target);
        try {
            return conform(target, source);
        }
        finally {
            $.$mol_conform_stack.pop();
        }
    }
    $.$mol_conform = $mol_conform;
    $.$mol_conform_handlers = new WeakMap();
    function $mol_conform_handler(cl, handler) {
        $.$mol_conform_handlers.set(cl, handler);
    }
    $.$mol_conform_handler = $mol_conform_handler;
    function $mol_conform_array(target, source) {
        if (source.length !== target.length)
            return target;
        for (let i = 0; i < target.length; ++i) {
            if (!$.$mol_compare_any(source[i], target[i]))
                return target;
        }
        return source;
    }
    $.$mol_conform_array = $mol_conform_array;
    $mol_conform_handler(Array, $mol_conform_array);
    $mol_conform_handler(Uint8Array, $mol_conform_array);
    $mol_conform_handler(Uint16Array, $mol_conform_array);
    $mol_conform_handler(Uint32Array, $mol_conform_array);
    $mol_conform_handler(({})['constructor'], (target, source) => {
        let count = 0;
        let equal = true;
        for (let key in target) {
            const conformed = $mol_conform(target[key], source[key]);
            if (conformed !== target[key]) {
                try {
                    target[key] = conformed;
                }
                catch (error) { }
                if (!$.$mol_compare_any(conformed, target[key]))
                    equal = false;
            }
            if (!$.$mol_compare_any(conformed, source[key]))
                equal = false;
            ++count;
        }
        for (let key in source)
            if (--count < 0)
                break;
        return (equal && count === 0) ? source : target;
    });
    $mol_conform_handler(Date, (target, source) => {
        if (target.getTime() === source.getTime())
            return source;
        return target;
    });
    $mol_conform_handler(RegExp, (target, source) => {
        if (target.toString() === source.toString())
            return source;
        return target;
    });
})($ || ($ = {}));
//conform.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_array_trim(array) {
        let last = array.length;
        while (last > 0) {
            --last;
            const value = array[last];
            if (value === undefined)
                array.pop();
            else
                break;
        }
        return array;
    }
    $.$mol_array_trim = $mol_array_trim;
})($ || ($ = {}));
//trim.js.map
;
"use strict";
var $;
(function ($) {
    $['devtoolsFormatters'] = $['devtoolsFormatters'] || [];
    function $mol_dev_format_register(config) {
        $['devtoolsFormatters'].push(config);
    }
    $.$mol_dev_format_register = $mol_dev_format_register;
    $.$mol_dev_format_head = Symbol('$mol_dev_format_head');
    $.$mol_dev_format_body = Symbol('$mol_dev_format_body');
    $mol_dev_format_register({
        header: (val, config = false) => {
            if (config)
                return null;
            if (!val)
                return null;
            if ($.$mol_dev_format_head in val) {
                return val[$.$mol_dev_format_head]();
            }
            return null;
        },
        hasBody: val => val[$.$mol_dev_format_body],
        body: val => val[$.$mol_dev_format_body](),
    });
    function $mol_dev_format_native(obj) {
        if (typeof obj === 'undefined')
            return $.$mol_dev_format_shade('undefined');
        if (typeof obj !== 'object')
            return obj;
        return [
            'object',
            {
                object: obj,
                config: true,
            },
        ];
    }
    $.$mol_dev_format_native = $mol_dev_format_native;
    function $mol_dev_format_auto(obj) {
        if (obj == null)
            return $.$mol_dev_format_shade(String(obj));
        if (typeof obj === 'object' && $.$mol_dev_format_head in obj) {
            return obj[$.$mol_dev_format_head]();
        }
        return [
            'object',
            {
                object: obj,
                config: false,
            },
        ];
    }
    $.$mol_dev_format_auto = $mol_dev_format_auto;
    function $mol_dev_format_element(element, style, ...content) {
        const styles = [];
        for (let key in style)
            styles.push(`${key} : ${style[key]}`);
        return [
            element,
            {
                style: styles.join(' ; '),
            },
            ...content,
        ];
    }
    $.$mol_dev_format_element = $mol_dev_format_element;
    function $mol_dev_format_span(style, ...content) {
        return $mol_dev_format_element('span', {
            'vertical-align': '8%',
            ...style,
        }, ...content);
    }
    $.$mol_dev_format_span = $mol_dev_format_span;
    $.$mol_dev_format_div = $mol_dev_format_element.bind(null, 'div');
    $.$mol_dev_format_ol = $mol_dev_format_element.bind(null, 'ol');
    $.$mol_dev_format_li = $mol_dev_format_element.bind(null, 'li');
    $.$mol_dev_format_table = $mol_dev_format_element.bind(null, 'table');
    $.$mol_dev_format_tr = $mol_dev_format_element.bind(null, 'tr');
    $.$mol_dev_format_td = $mol_dev_format_element.bind(null, 'td');
    $.$mol_dev_format_accent = $mol_dev_format_span.bind(null, {
        'color': 'magenta',
    });
    $.$mol_dev_format_strong = $mol_dev_format_span.bind(null, {
        'font-weight': 'bold',
    });
    $.$mol_dev_format_string = $mol_dev_format_span.bind(null, {
        'color': 'green',
    });
    $.$mol_dev_format_shade = $mol_dev_format_span.bind(null, {
        'color': 'gray',
    });
    $.$mol_dev_format_indent = $.$mol_dev_format_div.bind(null, {
        'margin-left': '13px'
    });
})($ || ($ = {}));
//format.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_fiber_defer(calculate) {
        const fiber = new $mol_fiber;
        fiber.calculate = calculate;
        fiber[Symbol.toStringTag] = calculate.name;
        fiber.schedule();
        return fiber;
    }
    $.$mol_fiber_defer = $mol_fiber_defer;
    function $mol_fiber_func(calculate) {
        $.$mol_ambient({}).$mol_log3_warn({
            place: '$mol_fiber_func',
            message: 'Deprecated',
            hint: 'Use $mol_fiber.func instead',
        });
        return $mol_fiber.func(calculate);
    }
    $.$mol_fiber_func = $mol_fiber_func;
    function $mol_fiber_root(calculate) {
        const wrapper = function (...args) {
            const fiber = new $mol_fiber();
            fiber.calculate = calculate.bind(this, ...args);
            fiber[Symbol.toStringTag] = wrapper[Symbol.toStringTag];
            return fiber.wake();
        };
        wrapper[Symbol.toStringTag] = calculate.name;
        return wrapper;
    }
    $.$mol_fiber_root = $mol_fiber_root;
    function $mol_fiber_method(obj, name, descr) {
        $.$mol_ambient({}).$mol_log3_warn({
            place: '$mol_fiber_method',
            message: 'Deprecated',
            hint: 'Use $mol_fiber.method instead',
        });
        return $mol_fiber.method(obj, name, descr);
    }
    $.$mol_fiber_method = $mol_fiber_method;
    function $mol_fiber_async(task) {
        return (...args) => new Promise($mol_fiber_root((done, fail) => {
            try {
                done(task(...args));
            }
            catch (error) {
                if ('then' in error)
                    return $.$mol_fail_hidden(error);
                fail(error);
            }
        }));
    }
    $.$mol_fiber_async = $mol_fiber_async;
    function $mol_fiber_sync(request) {
        return function $mol_fiber_sync_wrapper(...args) {
            const slave = $mol_fiber.current;
            let master = slave && slave.master;
            if (!master || master.constructor !== $mol_fiber) {
                master = new $mol_fiber;
                master.cursor = -3;
                master.error = request.call(this, ...args).then((next) => master.push(next), (error) => master.fail(error));
                const prefix = slave ? `${slave}/${slave.cursor / 2}:` : '/';
                master[Symbol.toStringTag] = prefix + (request.name || $mol_fiber_sync.name);
            }
            return master.get();
        };
    }
    $.$mol_fiber_sync = $mol_fiber_sync;
    async function $mol_fiber_warp() {
        const deadline = $mol_fiber.deadline;
        try {
            $mol_fiber.deadline = Number.POSITIVE_INFINITY;
            while ($mol_fiber.queue.length)
                await $mol_fiber.tick();
            return Promise.resolve();
        }
        finally {
            $mol_fiber.deadline = deadline;
        }
    }
    $.$mol_fiber_warp = $mol_fiber_warp;
    function $mol_fiber_fence(func) {
        const prev = $mol_fiber.current;
        try {
            $mol_fiber.current = null;
            return func();
        }
        finally {
            $mol_fiber.current = prev;
        }
    }
    $.$mol_fiber_fence = $mol_fiber_fence;
    function $mol_fiber_unlimit(task) {
        const deadline = $mol_fiber.deadline;
        try {
            $mol_fiber.deadline = Number.POSITIVE_INFINITY;
            return task();
        }
        finally {
            $mol_fiber.deadline = deadline;
        }
    }
    $.$mol_fiber_unlimit = $mol_fiber_unlimit;
    class $mol_fiber_solid extends $.$mol_wrapper {
        static func(task) {
            function wrapped(...args) {
                const deadline = $mol_fiber.deadline;
                try {
                    $mol_fiber.deadline = Number.POSITIVE_INFINITY;
                    return task.call(this, ...args);
                }
                catch (error) {
                    if ('then' in error)
                        $.$mol_fail(new Error('Solid fiber can not be suspended.'));
                    return $.$mol_fail_hidden(error);
                }
                finally {
                    $mol_fiber.deadline = deadline;
                }
            }
            return $mol_fiber.func(wrapped);
        }
    }
    $.$mol_fiber_solid = $mol_fiber_solid;
    class $mol_fiber extends $.$mol_wrapper {
        constructor() {
            super(...arguments);
            this.cursor = 0;
            this.masters = [];
            this._value = undefined;
            this._error = null;
        }
        static wrap(task) {
            return function $mol_fiber_wrapper(...args) {
                const slave = $mol_fiber.current;
                let master = slave && slave.master;
                if (!master || master.constructor !== $mol_fiber) {
                    master = new $mol_fiber;
                    master.calculate = task.bind(this, ...args);
                    const prefix = slave ? `${slave}/${slave.cursor / 2}:` : '/';
                    master[Symbol.toStringTag] = `${prefix}${task.name}`;
                }
                return master.get();
            };
        }
        static async tick() {
            while ($mol_fiber.queue.length > 0) {
                const now = Date.now();
                if (now >= $mol_fiber.deadline) {
                    $mol_fiber.schedule();
                    $mol_fiber.liveline = now;
                    return;
                }
                const task = $mol_fiber.queue.shift();
                await task();
            }
        }
        static schedule() {
            if (!$mol_fiber.scheduled) {
                $mol_fiber.scheduled = new $.$mol_after_frame(async () => {
                    const now = Date.now();
                    let quant = $mol_fiber.quant;
                    if ($mol_fiber.liveline) {
                        quant = Math.max(quant, Math.floor((now - $mol_fiber.liveline) / 2));
                        $mol_fiber.liveline = 0;
                    }
                    $mol_fiber.deadline = now + quant;
                    $mol_fiber.scheduled = null;
                    await $mol_fiber.tick();
                });
            }
            const promise = new this.$.Promise(done => this.queue.push(() => (done(null), promise)));
            return promise;
        }
        get value() { return this._value; }
        set value(next) {
            this._value = next;
        }
        get error() { return this._error; }
        set error(next) {
            this._error = next;
        }
        schedule() {
            $mol_fiber.schedule().then(() => this.wake());
        }
        wake() {
            const unscoupe = this.$.$mol_log3_area_lazy({
                place: this,
                message: 'Wake'
            });
            try {
                if (this.cursor > -2)
                    return this.get();
            }
            catch (error) {
                if ('then' in error)
                    return;
                $.$mol_fail_hidden(error);
            }
            finally {
                unscoupe();
            }
        }
        push(value) {
            value = this.$.$mol_conform(value, this.value);
            if (this.error !== null || !Object.is(this.value, value)) {
                if ($mol_fiber.logs)
                    this.$.$mol_log3_done({
                        place: this,
                        message: 'Changed',
                        next: value,
                        value: this.value,
                        error: this.error,
                    });
                this.obsolete_slaves();
                this.forget();
            }
            else {
                if ($mol_fiber.logs)
                    this.$.$mol_log3_done({
                        place: this,
                        message: 'Same value',
                        value,
                    });
            }
            this.error = null;
            this.value = value;
            this.complete();
            return value;
        }
        fail(error) {
            this.complete();
            if ($mol_fiber.logs)
                this.$.$mol_log3_fail({
                    place: this,
                    message: error.message,
                });
            this.error = error;
            this.obsolete_slaves();
            return error;
        }
        wait(promise) {
            this.error = promise;
            if ($mol_fiber.logs)
                this.$.$mol_log3_warn({
                    place: this,
                    message: `Wait`,
                    hint: `Don't panic, it's normal`,
                    promise,
                });
            this.cursor = 0;
            return promise;
        }
        complete() {
            if (this.cursor <= -2)
                return;
            for (let index = 0; index < this.masters.length; index += 2) {
                this.complete_master(index);
            }
            this.cursor = -2;
        }
        complete_master(master_index) {
            this.disobey(master_index);
        }
        pull() {
            if ($mol_fiber.logs)
                this.$.$mol_log3_come({
                    place: this,
                    message: 'Pull',
                });
            this.push(this.calculate());
        }
        update() {
            const slave = $mol_fiber.current;
            try {
                $mol_fiber.current = this;
                this.pull();
            }
            catch (error) {
                if (Object(error) !== error)
                    error = new Error(error);
                if ('then' in error) {
                    if (!slave) {
                        const listener = () => this.wake();
                        error = error.then(listener, listener);
                    }
                    this.wait(error);
                }
                else {
                    this.fail(error);
                }
            }
            finally {
                $mol_fiber.current = slave;
            }
        }
        get() {
            if (this.cursor > 0) {
                this.$.$mol_fail(new Error(`Cyclic dependency at ${this}`));
            }
            const slave = $mol_fiber.current;
            if (slave)
                slave.master = this;
            if (this.cursor > -2)
                this.update();
            if (this.error !== null)
                return this.$.$mol_fail_hidden(this.error);
            return this.value;
        }
        limit() {
            if (!$mol_fiber.deadline)
                return;
            if (!$mol_fiber.current)
                return;
            if (Date.now() < $mol_fiber.deadline)
                return;
            this.$.$mol_fail_hidden($mol_fiber.schedule());
        }
        get master() {
            return (this.cursor < this.masters.length ? this.masters[this.cursor] : undefined);
        }
        set master(next) {
            if (this.cursor === -1)
                return;
            const cursor = this.cursor;
            const prev = this.master;
            if (prev !== next) {
                if (prev)
                    this.rescue(prev, cursor);
                this.masters[cursor] = next;
                this.masters[cursor + 1] = this.obey(next, cursor);
            }
            this.cursor = cursor + 2;
        }
        rescue(master, master_index) { }
        obey(master, master_index) { return -1; }
        lead(slave, master_index) { return -1; }
        dislead(slave_index) {
            this.destructor();
        }
        disobey(master_index) {
            const master = this.masters[master_index];
            if (!master)
                return;
            master.dislead(this.masters[master_index + 1]);
            this.masters[master_index] = undefined;
            this.masters[master_index + 1] = undefined;
            this.$.$mol_array_trim(this.masters);
        }
        obsolete_slaves() { }
        obsolete(master_index) { }
        forget() {
            this.value = undefined;
        }
        abort() {
            this.forget();
            return true;
        }
        destructor() {
            if (!this.abort())
                return;
            if ($mol_fiber.logs)
                this.$.$mol_log3_done({
                    place: this,
                    message: 'Destructed',
                });
            this.complete();
        }
        [$.$mol_dev_format_head]() {
            return $.$mol_dev_format_native(this);
        }
    }
    $mol_fiber.logs = false;
    $mol_fiber.quant = 16;
    $mol_fiber.deadline = 0;
    $mol_fiber.liveline = 0;
    $mol_fiber.current = null;
    $mol_fiber.scheduled = null;
    $mol_fiber.queue = [];
    $.$mol_fiber = $mol_fiber;
})($ || ($ = {}));
//fiber.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_atom2_value(task, next) {
        const cached = $mol_atom2.cached;
        try {
            $mol_atom2.cached = true;
            $mol_atom2.cached_next = next;
            return task();
        }
        finally {
            $mol_atom2.cached = cached;
        }
    }
    $.$mol_atom2_value = $mol_atom2_value;
    class $mol_atom2 extends $.$mol_fiber {
        constructor() {
            super(...arguments);
            this.slaves = [];
        }
        static get current() {
            const atom = $.$mol_fiber.current;
            if (atom instanceof $mol_atom2)
                return atom;
            return null;
        }
        static reap(atom) {
            this.reap_queue.push(atom);
            if (this.reap_task)
                return;
            this.reap_task = $.$mol_fiber_defer(() => {
                this.reap_task = null;
                while (true) {
                    const atom = this.reap_queue.pop();
                    if (!atom)
                        break;
                    if (!atom.alone)
                        continue;
                    atom.destructor();
                }
            });
        }
        rescue(master, cursor) {
            if (!(master instanceof $mol_atom2))
                return;
            const master_index = this.masters.length;
            const slave_index = this.masters[cursor + 1] + 1;
            master.slaves[slave_index] = master_index;
            this.masters.push(master, this.masters[cursor + 1]);
        }
        subscribe(promise) {
            const obsolete = () => this.obsolete();
            return promise.then(obsolete, obsolete);
        }
        get() {
            if ($mol_atom2.cached) {
                if ($mol_atom2.cached_next !== undefined) {
                    this.push($mol_atom2.cached_next);
                    $mol_atom2.cached_next = undefined;
                }
                return this.value;
            }
            const value = super.get();
            if (value === undefined)
                $.$mol_fail(new Error(`Not defined: ${this}`));
            return value;
        }
        pull() {
            if (this.cursor === 0)
                return super.pull();
            if ($mol_atom2.logs)
                this.$.$mol_log3_come({
                    place: this,
                    message: 'Check doubt masters',
                });
            const masters = this.masters;
            for (let index = 0; index < masters.length; index += 2) {
                const master = masters[index];
                if (!master)
                    continue;
                try {
                    master.get();
                }
                catch (error) {
                    if ('then' in error)
                        $.$mol_fail_hidden(error);
                    this.cursor = 0;
                }
                if (this.cursor !== 0)
                    continue;
                if ($mol_atom2.logs)
                    this.$.$mol_log3_done({
                        place: this,
                        message: 'Obsoleted while checking',
                    });
                return super.pull();
            }
            if ($mol_atom2.logs)
                this.$.$mol_log3_done({
                    place: this,
                    message: 'Masters not changed',
                });
            this.cursor = -2;
        }
        get value() { return this._value; }
        set value(next) {
            const prev = this._value;
            if (prev && this.$.$mol_owning_check(this, prev))
                prev.destructor();
            if (next && this.$.$mol_owning_catch(this, next)) {
                try {
                    next[Symbol.toStringTag] = this[Symbol.toStringTag];
                }
                catch { }
                next[$.$mol_object_field] = this[$.$mol_object_field];
            }
            this._value = next;
        }
        get error() { return this._error; }
        set error(next) {
            const prev = this._error;
            if (prev && this.$.$mol_owning_check(this, prev))
                prev.destructor();
            if (next && this.$.$mol_owning_catch(this, next)) {
                next[Symbol.toStringTag] = this[Symbol.toStringTag];
                next[$.$mol_object_field] = this[$.$mol_object_field];
            }
            this._error = next;
        }
        put(next) {
            this.cursor = this.masters.length;
            next = this.push(next);
            this.cursor = -3;
            return next;
        }
        complete_master(master_index) {
            if (this.masters[master_index] instanceof $mol_atom2) {
                if (master_index >= this.cursor)
                    this.disobey(master_index);
            }
            else {
                this.disobey(master_index);
            }
        }
        obey(master, master_index) {
            return master.lead(this, master_index);
        }
        lead(slave, master_index) {
            if ($mol_atom2.logs)
                this.$.$mol_log3_rise({
                    place: this,
                    message: 'Leads',
                    slave,
                });
            const slave_index = this.slaves.length;
            this.slaves[slave_index] = slave;
            this.slaves[slave_index + 1] = master_index;
            return slave_index;
        }
        dislead(slave_index) {
            if (slave_index < 0)
                return;
            if ($mol_atom2.logs)
                this.$.$mol_log3_rise({
                    place: this,
                    message: 'Disleads',
                    slave: this.slaves[slave_index],
                });
            this.slaves[slave_index] = undefined;
            this.slaves[slave_index + 1] = undefined;
            $.$mol_array_trim(this.slaves);
            if (this.cursor > -3 && this.alone)
                $mol_atom2.reap(this);
        }
        obsolete(master_index = -1) {
            if (this.cursor > 0) {
                if (master_index >= this.cursor - 2)
                    return;
                const path = [];
                let current = this;
                collect: while (current) {
                    path.push(current);
                    current = current.masters[current.cursor - 2];
                }
                this.$.$mol_fail(new Error(`Obsoleted while calculation \n\n${path.join('\n')}\n`));
            }
            if (this.cursor === 0)
                return;
            if ($mol_atom2.logs)
                this.$.$mol_log3_rise({
                    place: this,
                    message: 'Obsoleted',
                });
            if (this.cursor !== -1)
                this.doubt_slaves();
            this.cursor = 0;
        }
        doubt(master_index = -1) {
            if (this.cursor > 0) {
                if (master_index >= this.cursor - 2)
                    return;
                const path = [];
                let current = this;
                collect: while (current) {
                    path.push(current);
                    current = current.masters[current.cursor - 2];
                }
                this.$.$mol_fail(new Error(`Doubted while calculation \n\n${path.join('\n')}\n`));
            }
            if (this.cursor >= -1)
                return;
            if ($mol_atom2.logs)
                this.$.$mol_log3_rise({
                    place: this,
                    message: 'Doubted',
                });
            this.cursor = -1;
            this.doubt_slaves();
        }
        obsolete_slaves() {
            for (let index = 0; index < this.slaves.length; index += 2) {
                const slave = this.slaves[index];
                if (slave)
                    slave.obsolete(this.slaves[index + 1]);
            }
        }
        doubt_slaves() {
            for (let index = 0; index < this.slaves.length; index += 2) {
                const slave = this.slaves[index];
                if (slave)
                    slave.doubt(this.slaves[index + 1]);
            }
        }
        get fresh() {
            return () => {
                if (this.cursor !== -2)
                    return;
                this.cursor = 0;
                $.$mol_fiber_solid.run(() => this.update());
            };
        }
        get alone() {
            return this.slaves.length === 0;
        }
        get derived() {
            for (let index = 0; index < this.masters.length; index += 2) {
                if (this.masters[index])
                    return true;
            }
            return false;
        }
        destructor() {
            if (!this.abort())
                return;
            if ($mol_atom2.logs)
                this.$.$mol_log3_rise({
                    place: this,
                    message: 'Destructed'
                });
            this.cursor = -3;
            for (let index = 0; index < this.masters.length; index += 2) {
                this.complete_master(index);
            }
        }
    }
    $mol_atom2.logs = false;
    $mol_atom2.cached = false;
    $mol_atom2.cached_next = undefined;
    $mol_atom2.reap_task = null;
    $mol_atom2.reap_queue = [];
    $.$mol_atom2 = $mol_atom2;
})($ || ($ = {}));
//atom2.js.map
;
"use strict";
//param.js.map
;
"use strict";
//result.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_mem_force extends Object {
        constructor() {
            super();
            this.$mol_mem_force = true;
        }
        static toString() { return this.name; }
    }
    $mol_mem_force.$mol_mem_force = true;
    $.$mol_mem_force = $mol_mem_force;
    class $mol_mem_force_cache extends $mol_mem_force {
    }
    $.$mol_mem_force_cache = $mol_mem_force_cache;
    class $mol_mem_force_update extends $mol_mem_force {
    }
    $.$mol_mem_force_update = $mol_mem_force_update;
    class $mol_mem_force_fail extends $mol_mem_force_cache {
    }
    $.$mol_mem_force_fail = $mol_mem_force_fail;
})($ || ($ = {}));
//force.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_mem_cached = $.$mol_atom2_value;
    function $mol_mem_persist() {
        const atom = $.$mol_atom2.current;
        if (!atom)
            return;
        if (atom.hasOwnProperty('destructor'))
            return;
        atom.destructor = () => { };
    }
    $.$mol_mem_persist = $mol_mem_persist;
    function $mol_mem(proto, name, descr) {
        if (!descr)
            descr = Reflect.getOwnPropertyDescriptor(proto, name);
        const orig = descr.value;
        const store = new WeakMap();
        Object.defineProperty(proto, name + "()", {
            get: function () {
                return store.get(this);
            }
        });
        const get_cache = (host) => {
            let cache = store.get(host);
            if (cache)
                return cache;
            let cache2 = new $.$mol_atom2;
            cache2.calculate = orig.bind(host);
            cache2[Symbol.toStringTag] = `${host}.${name}()`;
            cache2.abort = () => {
                store.delete(host);
                cache2.forget();
                return true;
            };
            $.$mol_owning_catch(host, cache2);
            cache2[$.$mol_object_field] = name;
            store.set(host, cache2);
            return cache2;
        };
        function value(next, force) {
            if (next === undefined) {
                const cache = get_cache(this);
                if (force === $.$mol_mem_force_cache)
                    return cache.obsolete(Number.NaN);
                if ($.$mol_atom2.current)
                    return cache.get();
                else
                    return $.$mol_fiber.run(() => cache.get());
            }
            return $.$mol_fiber.run(() => {
                if (force === $.$mol_mem_force_fail)
                    return get_cache(this).fail(next);
                if (force !== $.$mol_mem_force_cache)
                    next = orig.call(this, next);
                return get_cache(this).put(next);
            });
        }
        return {
            ...descr || {},
            value: Object.assign(value, { orig })
        };
    }
    $.$mol_mem = $mol_mem;
})($ || ($ = {}));
//mem.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_dict_key(value) {
        if (!value)
            return JSON.stringify(value);
        if (typeof value !== 'object' && typeof value !== 'function')
            return JSON.stringify(value);
        if (Array.isArray(value))
            return JSON.stringify(value);
        if (Object.getPrototypeOf(Object.getPrototypeOf(value)) === null)
            return JSON.stringify(value);
        return value;
    }
    $.$mol_dict_key = $mol_dict_key;
    class $mol_dict extends Map {
        get(key) {
            return super.get($mol_dict_key(key));
        }
        has(key) {
            return super.has($mol_dict_key(key));
        }
        set(key, value) {
            return super.set($mol_dict_key(key), value);
        }
        delete(key) {
            return super.delete($mol_dict_key(key));
        }
        forEach(back, context) {
            return super.forEach((val, key, dict) => {
                if (typeof key === 'string')
                    key = JSON.parse(key);
                return back.call(this, val, key, dict);
            }, context);
        }
        [Symbol.iterator]() {
            const iterator = super[Symbol.iterator]();
            return {
                [Symbol.iterator]() {
                    return this;
                },
                next() {
                    const iteration = iterator.next();
                    if (!iteration.done) {
                        const key = iteration.value[0];
                        if (typeof key === 'string')
                            iteration.value[0] = JSON.parse(key);
                    }
                    return iteration;
                }
            };
        }
    }
    $.$mol_dict = $mol_dict;
})($ || ($ = {}));
//dict.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_mem_key(proto, name, descr) {
        if (!descr)
            descr = Reflect.getOwnPropertyDescriptor(proto, name);
        const value = descr.value;
        const store = new WeakMap();
        Object.defineProperty(proto, name + "()", {
            get: function () {
                return store.get(this);
            }
        });
        const get_cache = (host, key) => {
            let dict = store.get(host);
            if (!dict)
                store.set(host, dict = new $.$mol_dict);
            const key_str = $.$mol_dict_key(key);
            let cache = dict.get(key_str);
            if (cache)
                return cache;
            let cache2 = new $.$mol_atom2;
            cache2[Symbol.toStringTag] = `${host}.${name}(${key_str})`;
            cache2.calculate = value.bind(host, key);
            cache2.abort = () => {
                dict.delete(key_str);
                if (dict.size === 0)
                    store.delete(host);
                cache2.forget();
                return true;
            };
            $.$mol_owning_catch(host, cache2);
            cache2[$.$mol_object_field] = name;
            dict.set(key_str, cache2);
            return cache2;
        };
        return {
            value(key, next, force) {
                if (next === undefined) {
                    const cache = get_cache(this, key);
                    if (force === $.$mol_mem_force_cache)
                        return cache.obsolete();
                    if ($.$mol_atom2.current)
                        return cache.get();
                    else
                        return $.$mol_fiber.run(() => cache.get());
                }
                return $.$mol_fiber.run(() => {
                    if (force === $.$mol_mem_force_fail)
                        return get_cache(this, key).fail(next);
                    if (force !== $.$mol_mem_force_cache)
                        next = value.call(this, key, next);
                    return get_cache(this, key).put(next);
                });
            }
        };
    }
    $.$mol_mem_key = $mol_mem_key;
})($ || ($ = {}));
//key.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_atom2_autorun(calculate) {
        return $.$mol_atom2.create(atom => {
            atom.calculate = calculate;
            atom.obsolete_slaves = atom.schedule;
            atom.doubt_slaves = atom.schedule;
            if (Symbol.toStringTag in calculate) {
                atom[Symbol.toStringTag] = calculate[Symbol.toStringTag];
            }
            else {
                atom[Symbol.toStringTag] = calculate.name || '$mol_atom2_autorun';
            }
            atom.schedule();
        });
    }
    $.$mol_atom2_autorun = $mol_atom2_autorun;
})($ || ($ = {}));
//autorun.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_defer extends $.$mol_object {
        constructor(run) {
            super();
            this.run = run;
            $mol_defer.add(this);
        }
        destructor() {
            $mol_defer.drop(this);
        }
        static schedule() {
            if (this.timer)
                return;
            this.timer = this.scheduleNative(() => {
                this.timer = null;
                this.run();
            });
        }
        static unschedule() {
            if (!this.timer)
                return;
            cancelAnimationFrame(this.timer);
            this.timer = null;
        }
        static add(defer) {
            this.all.push(defer);
            this.schedule();
        }
        static drop(defer) {
            var index = this.all.indexOf(defer);
            if (index >= 0)
                this.all.splice(index, 1);
        }
        static run() {
            if (this.all.length === 0)
                return;
            this.schedule();
            for (var defer; defer = this.all.shift();)
                defer.run();
        }
    }
    $mol_defer.all = [];
    $mol_defer.timer = null;
    $mol_defer.scheduleNative = (typeof requestAnimationFrame == 'function')
        ? handler => requestAnimationFrame(handler)
        : handler => setTimeout(handler, 16);
    $.$mol_defer = $mol_defer;
})($ || ($ = {}));
//defer.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_view_selection extends $.$mol_object {
        static focused(next) {
            if (next === undefined)
                return [];
            const parents = [];
            let element = next[0];
            while (element) {
                parents.push(element);
                element = element.parentNode;
            }
            new $.$mol_defer(() => {
                const element = $.$mol_mem_cached(() => this.focused())[0];
                if (element)
                    element.focus();
                else
                    $.$mol_dom_context.blur();
            });
            return parents;
        }
        static focus(event) {
            this.focused([event.target]);
        }
        static blur(event) {
            const elements = $.$mol_mem_cached(() => this.focused());
            if (elements && elements[0] === event.target)
                this.focused([]);
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_view_selection, "focused", null);
    $.$mol_view_selection = $mol_view_selection;
})($ || ($ = {}));
//selection.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_dom_qname(name) {
        return name.replace(/\W/g, '').replace(/^(?=\d+)/, '_');
    }
    $.$mol_dom_qname = $mol_dom_qname;
})($ || ($ = {}));
//qname.js.map
;
"use strict";
var $;
(function ($) {
    const cacthed = new WeakMap();
    function $mol_fail_catch(error) {
        if (cacthed.get(error))
            return false;
        cacthed.set(error, true);
        return true;
    }
    $.$mol_fail_catch = $mol_fail_catch;
})($ || ($ = {}));
//catch.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_const(value) {
        var getter = (() => value);
        getter['()'] = value;
        getter[Symbol.toStringTag] = value;
        return getter;
    }
    $.$mol_const = $mol_const;
})($ || ($ = {}));
//const.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_dom_render_attributes(el, attrs) {
        for (let name in attrs) {
            let val = attrs[name];
            if (val === null || val === false) {
                if (!el.hasAttribute(name))
                    continue;
                el.removeAttribute(name);
            }
            else {
                const str = String(val);
                if (el.getAttribute(name) === str)
                    continue;
                el.setAttribute(name, str);
            }
        }
    }
    $.$mol_dom_render_attributes = $mol_dom_render_attributes;
})($ || ($ = {}));
//attributes.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_dom_render_styles(el, styles) {
        for (let name in styles) {
            let val = styles[name];
            const style = el.style;
            if (typeof val === 'number') {
                style[name] = `${val}px`;
            }
            else {
                style[name] = val;
            }
        }
    }
    $.$mol_dom_render_styles = $mol_dom_render_styles;
})($ || ($ = {}));
//styles.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_dom_render_fields(el, fields) {
        for (let key in fields) {
            const val = fields[key];
            if (val === undefined)
                continue;
            el[key] = val;
        }
    }
    $.$mol_dom_render_fields = $mol_dom_render_fields;
})($ || ($ = {}));
//fields.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_dom_render_children(el, childNodes) {
        const node_set = new Set(childNodes);
        let nextNode = el.firstChild;
        for (let view of childNodes) {
            if (view == null)
                continue;
            if (view instanceof $.$mol_dom_context.Node) {
                while (true) {
                    if (!nextNode) {
                        el.appendChild(view);
                        break;
                    }
                    if (nextNode == view) {
                        nextNode = nextNode.nextSibling;
                        break;
                    }
                    else {
                        if (node_set.has(nextNode)) {
                            el.insertBefore(view, nextNode);
                            break;
                        }
                        else {
                            const nn = nextNode.nextSibling;
                            el.removeChild(nextNode);
                            nextNode = nn;
                        }
                    }
                }
            }
            else {
                if (nextNode && nextNode.nodeName === '#text') {
                    const str = String(view);
                    if (nextNode.nodeValue !== str)
                        nextNode.nodeValue = str;
                    nextNode = nextNode.nextSibling;
                }
                else {
                    const textNode = $.$mol_dom_context.document.createTextNode(String(view));
                    el.insertBefore(textNode, nextNode);
                }
            }
        }
        while (nextNode) {
            const currNode = nextNode;
            nextNode = currNode.nextSibling;
            el.removeChild(currNode);
        }
    }
    $.$mol_dom_render_children = $mol_dom_render_children;
})($ || ($ = {}));
//children.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_memo extends $.$mol_wrapper {
        static wrap(task) {
            const store = new WeakMap();
            return function (next) {
                if (next === undefined && store.has(this))
                    return store.get(this);
                const val = task.call(this, next) ?? next;
                store.set(this, val);
                return val;
            };
        }
    }
    $.$mol_memo = $mol_memo;
})($ || ($ = {}));
//memo.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_func_name(func) {
        let name = func.name;
        if (name?.length > 1)
            return name;
        for (let key in this) {
            try {
                if (this[key] !== func)
                    continue;
                name = key;
                Object.defineProperty(func, 'name', { value: name });
                break;
            }
            catch { }
        }
        return name;
    }
    $.$mol_func_name = $mol_func_name;
    function $mol_func_name_from(target, source) {
        Object.defineProperty(target, 'name', { value: source.name });
        return target;
    }
    $.$mol_func_name_from = $mol_func_name_from;
})($ || ($ = {}));
//name.js.map
;
"use strict";
//extract.js.map
;
"use strict";
//pick.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_attach("mol/view/view/view.css", "[mol_view] {\n\ttransition-property: height, width, min-height, min-width, max-width, max-height, transform;\n\ttransition-duration: .2s;\n\ttransition-timing-function: ease-out;\n\t-webkit-appearance: none;\n\tword-break: break-word;\n\tbox-sizing: border-box;\n\tdisplay: flex;\n\tcontain: style;\n\ttab-size: 4;\n}\n\n[mol_view]::selection {\n\tbackground: var(--mol_theme_current);\n}\n\n[mol_view] > * {\n\tword-break: inherit;\n}\n\n[mol_view_root] {\n\tmargin: 0;\n\tpadding: 0;\n\twidth: 100%;\n\theight: 100%;\n\tbox-sizing: border-box;\n\tfont: var(--mol_skin_font);\n\tbackground: var(--mol_theme_back);\n\tcolor: var(--mol_theme_text);\n}\n\n[mol_view][mol_view_error]:not([mol_view_error=\"Promise\"]) {\n\tbackground-image: repeating-linear-gradient(\n\t\t135deg,\n\t\trgb(162, 90, 90),\n\t\trgb(162, 90, 90) 11px,\n\t\trgb(255,255,220) 10px,\n\t\trgb(255,255,220) 20px\n\t);\n\tbackground-size: 28px 28px;\n\tcolor: black;\n}\n\n@keyframes mol_view_wait_move {\n\tfrom {\n\t\tbackground-position: 0 0;\n\t}\n\tto {\n\t\tbackground-position: 200vmax 0;\n\t}\n}\n\n@keyframes mol_view_wait_show {\n\tto {\n\t\tbackground-image: repeating-linear-gradient(\n\t\t\t45deg,\n\t\t\thsla( 0 , 0% , 50% , .25 ) 0% ,\n\t\t\thsla( 0 , 0% , 50% , 0 ) 5% ,\n\t\t\thsla( 0 , 0% , 50% , 0 ) 45% ,\n\t\t\thsla( 0 , 0% , 50% , .25 ) 50% ,\n\t\t\thsla( 0 , 0% , 50% , 0 ) 55% ,\n\t\t\thsla( 0 , 0% , 50% , 0 ) 95% ,\n\t\t\thsla( 0 , 0% , 50% , .25 ) 100%\n\t\t);\n\t\tbackground-size: 200vmax 200vmax;\n\t}\n}\n\n[mol_view][mol_view_error=\"Promise\"] {\n\tanimation: mol_view_wait_show .5s .5s linear forwards , mol_view_wait_move 1s linear infinite;\n\topacity: .75;\n}\n");
})($ || ($ = {}));
//view.css.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_view_visible_width() {
        return $.$mol_window.size().width;
    }
    $.$mol_view_visible_width = $mol_view_visible_width;
    function $mol_view_visible_height() {
        return $.$mol_window.size().height;
    }
    $.$mol_view_visible_height = $mol_view_visible_height;
    function $mol_view_state_key(suffix) {
        return suffix;
    }
    $.$mol_view_state_key = $mol_view_state_key;
    class $mol_view extends $.$mol_object {
        static Root(id) {
            return new this;
        }
        autorun() {
            return $.$mol_atom2_autorun(() => {
                this.dom_tree();
                document.title = this.title();
                return this;
            });
        }
        static autobind() {
            const nodes = $.$mol_dom_context.document.querySelectorAll('[mol_view_root]');
            for (let i = nodes.length - 1; i >= 0; --i) {
                const name = nodes.item(i).getAttribute('mol_view_root');
                const View = $[name];
                if (!View) {
                    console.error(`Can not attach view. Class not found: ${name}`);
                    continue;
                }
                const view = View.Root(i);
                view.dom_node(nodes.item(i));
                view.autorun();
            }
        }
        title() {
            return this.constructor.toString();
        }
        focused(next) {
            let node = this.dom_node();
            const value = $.$mol_view_selection.focused(next === undefined ? undefined : (next ? [node] : []));
            return value.indexOf(node) !== -1;
        }
        state_key(suffix = '') {
            return this.$.$mol_view_state_key(suffix);
        }
        dom_name() {
            return $.$mol_dom_qname(this.constructor.toString()) || 'div';
        }
        dom_name_space() { return 'http://www.w3.org/1999/xhtml'; }
        sub() {
            return [];
        }
        sub_visible() {
            return this.sub();
        }
        minimal_width() {
            const sub = this.sub();
            if (!sub)
                return 0;
            let min = 0;
            sub.forEach(view => {
                if (view instanceof $mol_view) {
                    min = Math.max(min, view.minimal_width());
                }
            });
            return min;
        }
        maximal_width() {
            return this.minimal_width();
        }
        minimal_height() {
            let min = 0;
            try {
                for (const view of this.sub() ?? []) {
                    if (view instanceof $mol_view) {
                        min = Math.max(min, view.minimal_height());
                    }
                }
            }
            catch (error) {
                if (error instanceof Promise) {
                    $.$mol_atom2.current.subscribe(error);
                }
                else if ($.$mol_fail_catch(error)) {
                    console.error(error);
                }
                return 24;
            }
            return min;
        }
        view_rect() {
            if ($.$mol_atom2.current)
                this.view_rect_watcher();
            return this.view_rect_cache();
        }
        view_rect_cache(next = null) {
            return next;
        }
        view_rect_watcher() {
            $mol_view.watchers.add(this);
            return { destructor: () => $mol_view.watchers.delete(this) };
        }
        dom_id() {
            return this.toString();
        }
        dom_node(next) {
            const node = next || $.$mol_dom_context.document.createElementNS(this.dom_name_space(), this.dom_name());
            const id = this.dom_id();
            node.setAttribute('id', id);
            node.toString = $.$mol_const('<#' + id + '>');
            $.$mol_dom_render_attributes(node, this.attr_static());
            const events = this.event();
            for (let event_name in events) {
                node.addEventListener(event_name, $.$mol_fiber_root(events[event_name]), { passive: false });
            }
            return node;
        }
        dom_tree(next) {
            const node = this.dom_node(next);
            try {
                $.$mol_dom_render_attributes(node, { mol_view_error: null });
                try {
                    this.render();
                }
                finally {
                    for (let plugin of this.plugins()) {
                        if (plugin instanceof $.$mol_plugin) {
                            plugin.dom_tree();
                        }
                    }
                }
            }
            catch (error) {
                $.$mol_dom_render_attributes(node, { mol_view_error: error.name || error.constructor.name });
                if (error instanceof Promise) {
                    $.$mol_atom2.current.subscribe(error);
                    return node;
                }
                if ($.$mol_fail_catch(error)) {
                    try {
                        void (node.innerText = error.message);
                    }
                    catch (e) { }
                    console.error(error);
                }
            }
            this.auto();
            return node;
        }
        dom_node_actual() {
            const node = this.dom_node();
            $.$mol_dom_render_styles(node, { minHeight: this.minimal_height() });
            const attr = this.attr();
            const style = this.style();
            const fields = this.field();
            $.$mol_dom_render_attributes(node, attr);
            $.$mol_dom_render_styles(node, style);
            $.$mol_dom_render_fields(node, fields);
            return node;
        }
        auto() { }
        render() {
            const node = this.dom_node_actual();
            const sub = this.sub_visible();
            if (!sub)
                return;
            const nodes = sub.map(child => {
                if (child == null)
                    return null;
                return (child instanceof $mol_view)
                    ? child.dom_node()
                    : String(child);
            });
            $.$mol_dom_render_children(node, nodes);
            for (const el of sub)
                if (el && typeof el === 'object' && 'dom_tree' in el)
                    el['dom_tree']();
        }
        static view_classes() {
            const proto = this.prototype;
            let current = proto;
            const classes = [];
            while (current) {
                classes.push(current.constructor);
                if (!(current instanceof $mol_view))
                    break;
                current = Object.getPrototypeOf(current);
            }
            return classes;
        }
        view_names_owned() {
            const names = [];
            let owner = $.$mol_owning_get(this, $mol_view);
            if (owner instanceof $mol_view) {
                const suffix = this[$.$mol_object_field];
                const suffix2 = '_' + suffix[0].toLowerCase() + suffix.substring(1);
                for (let Class of owner.constructor.view_classes()) {
                    if (suffix in Class.prototype)
                        names.push(this.$.$mol_func_name(Class) + suffix2);
                    else
                        break;
                }
                for (let prefix of owner.view_names_owned()) {
                    names.push(prefix + suffix2);
                }
            }
            return names;
        }
        view_names() {
            const names = [];
            for (let name of this.view_names_owned()) {
                if (names.indexOf(name) < 0)
                    names.push(name);
            }
            for (let Class of this.constructor.view_classes()) {
                const name = this.$.$mol_func_name(Class);
                if (!name)
                    continue;
                if (names.indexOf(name) < 0)
                    names.push(name);
            }
            return names;
        }
        attr_static() {
            let attrs = {};
            for (let name of this.view_names())
                attrs[name.replace(/\$/g, '').replace(/^(?=\d)/, '_').toLowerCase()] = '';
            return attrs;
        }
        attr() {
            return {};
        }
        style() {
            return {};
        }
        field() {
            return {};
        }
        event() {
            return {};
        }
        event_async() {
            return {};
        }
        plugins() {
            return [];
        }
        [$.$mol_dev_format_head]() {
            return $.$mol_dev_format_span({}, $.$mol_dev_format_native(this), $.$mol_dev_format_shade('/'), $.$mol_dev_format_auto($.$mol_mem_cached(() => this.sub())));
        }
        *view_find(check, path = []) {
            if (check(this))
                return yield [...path, this];
            for (const item of this.sub()) {
                if (item instanceof $mol_view) {
                    yield* item.view_find(check, [...path, this]);
                }
            }
        }
        force_render(path) {
            const kids = this.sub();
            const index = kids.findIndex(item => {
                if (item instanceof $mol_view) {
                    return path.has(item);
                }
                else {
                    return false;
                }
            });
            if (index >= 0) {
                kids[index].force_render(path);
            }
        }
        async ensure_visible(view, align = "start") {
            const path = this.view_find(v => v === view).next().value;
            this.force_render(new Set(path));
            await $.$mol_fiber_warp();
            view.dom_node().scrollIntoView({ block: align });
        }
    }
    $mol_view.watchers = new Set();
    __decorate([
        $.$mol_mem
    ], $mol_view.prototype, "autorun", null);
    __decorate([
        $.$mol_mem
    ], $mol_view.prototype, "focused", null);
    __decorate([
        $.$mol_mem
    ], $mol_view.prototype, "minimal_width", null);
    __decorate([
        $.$mol_mem
    ], $mol_view.prototype, "minimal_height", null);
    __decorate([
        $.$mol_mem
    ], $mol_view.prototype, "view_rect", null);
    __decorate([
        $.$mol_mem
    ], $mol_view.prototype, "view_rect_cache", null);
    __decorate([
        $.$mol_mem
    ], $mol_view.prototype, "view_rect_watcher", null);
    __decorate([
        $.$mol_mem
    ], $mol_view.prototype, "dom_node", null);
    __decorate([
        $.$mol_mem
    ], $mol_view.prototype, "dom_tree", null);
    __decorate([
        $.$mol_mem
    ], $mol_view.prototype, "dom_node_actual", null);
    __decorate([
        $.$mol_mem
    ], $mol_view.prototype, "view_names", null);
    __decorate([
        $.$mol_deprecated('Use $mol_view::event instead.')
    ], $mol_view.prototype, "event_async", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_view, "Root", null);
    __decorate([
        $.$mol_memo.method
    ], $mol_view, "view_classes", null);
    $.$mol_view = $mol_view;
})($ || ($ = {}));
//view.js.map
;
"use strict";
//error.js.map
;
"use strict";
//override.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_colors = {
        aliceblue: "#f0f8ff",
        antiquewhite: "#faebd7",
        aqua: "#00ffff",
        aquamarine: "#7fffd4",
        azure: "#f0ffff",
        beige: "#f5f5dc",
        bisque: "#ffe4c4",
        black: "#000000",
        blanchedalmond: "#ffebcd",
        blue: "#0000ff",
        blueviolet: "#8a2be2",
        brown: "#a52a2a",
        burlywood: "#deb887",
        cadetblue: "#5f9ea0",
        chartreuse: "#7fff00",
        chocolate: "#d2691e",
        coral: "#ff7f50",
        cornflowerblue: "#6495ed",
        cornsilk: "#fff8dc",
        crimson: "#dc143c",
        cyan: "#00ffff",
        darkblue: "#00008b",
        darkcyan: "#008b8b",
        darkgoldenrod: "#b8860b",
        darkgray: "#a9a9a9",
        darkgreen: "#006400",
        darkgrey: "#a9a9a9",
        darkkhaki: "#bdb76b",
        darkmagenta: "#8b008b",
        darkolivegreen: "#556b2f",
        darkorange: "#ff8c00",
        darkorchid: "#9932cc",
        darkred: "#8b0000",
        darksalmon: "#e9967a",
        darkseagreen: "#8fbc8f",
        darkslateblue: "#483d8b",
        darkslategrey: "#2f4f4f",
        darkturquoise: "#00ced1",
        darkviolet: "#9400d3",
        deeppink: "#ff1493",
        deepskyblue: "#00bfff",
        dimgray: "#696969",
        dimgrey: "#696969",
        dodgerblue: "#1e90ff",
        firebrick: "#b22222",
        floralwhite: "#fffaf0",
        forestgreen: "#228b22",
        fuchsia: "#ff00ff",
        gainsboro: "#dcdcdc",
        ghostwhite: "#f8f8ff",
        gold: "#ffd700",
        goldenrod: "#daa520",
        gray: "#808080",
        green: "#008000",
        greenyellow: "#adff2f",
        grey: "#808080",
        honeydew: "#f0fff0",
        hotpink: "#ff69b4",
        indianred: "#cd5c5c",
        indigo: "#4b0082",
        ivory: "#fffff0",
        khaki: "#f0e68c",
        lavender: "#e6e6fa",
        lavenderblush: "#fff0f5",
        lawngreen: "#7cfc00",
        lemonchiffon: "#fffacd",
        lightblue: "#add8e6",
        lightcoral: "#f08080",
        lightcyan: "#e0ffff",
        lightgoldenrodyellow: "#fafad2",
        lightgray: "#d3d3d3",
        lightgreen: "#90ee90",
        lightgrey: "#d3d3d3",
        lightpink: "#ffb6c1",
        lightsalmon: "#ffa07a",
        lightseagreen: "#20b2aa",
        lightskyblue: "#87cefa",
        lightslategray: "#778899",
        lightslategrey: "#778899",
        lightsteelblue: "#b0c4de",
        lightyellow: "#ffffe0",
        lime: "#00ff00",
        limegreen: "#32cd32",
        linen: "#faf0e6",
        magenta: "#ff00ff",
        maroon: "#800000",
        mediumaquamarine: "#66cdaa",
        mediumblue: "#0000cd",
        mediumorchid: "#ba55d3",
        mediumpurple: "#9370db",
        mediumseagreen: "#3cb371",
        mediumslateblue: "#7b68ee",
        mediumspringgreen: "#00fa9a",
        mediumturquoise: "#48d1cc",
        mediumvioletred: "#c71585",
        midnightblue: "#191970",
        mintcream: "#f5fffa",
        mistyrose: "#ffe4e1",
        moccasin: "#ffe4b5",
        navajowhite: "#ffdead",
        navy: "#000080",
        oldlace: "#fdf5e6",
        olive: "#808000",
        olivedrab: "#6b8e23",
        orange: "#ffa500",
        orangered: "#ff4500",
        orchid: "#da70d6",
        palegoldenrod: "#eee8aa",
        palegreen: "#98fb98",
        paleturquoise: "#afeeee",
        palevioletred: "#db7093",
        papayawhip: "#ffefd5",
        peachpuff: "#ffdab9",
        peru: "#cd853f",
        pink: "#ffc0cb",
        plum: "#dda0dd",
        powderblue: "#b0e0e6",
        purple: "#800080",
        rebeccapurple: "#663399",
        red: "#ff0000",
        rosybrown: "#bc8f8f",
        royalblue: "#4169e1",
        saddlebrown: "#8b4513",
        salmon: "#fa8072",
        sandybrown: "#f4a460",
        seagreen: "#2e8b57",
        seashell: "#fff5ee",
        sienna: "#a0522d",
        silver: "#c0c0c0",
        skyblue: "#87ceeb",
        slateblue: "#6a5acd",
        slategray: "#708090",
        slategrey: "#708090",
        snow: "#fffafa",
        springgreen: "#00ff7f",
        steelblue: "#4682b4",
        tan: "#d2b48c",
        teal: "#008080",
        thistle: "#d8bfd8",
        tomato: "#ff6347",
        turquoise: "#40e0d0",
        violet: "#ee82ee",
        wheat: "#f5deb3",
        white: "#ffffff",
        whitesmoke: "#f5f5f5",
        yellow: "#ffff00",
        yellowgreen: "#9acd32",
    };
})($ || ($ = {}));
//colors.js.map
;
"use strict";
//properties.js.map
;
"use strict";
//class.js.map
;
"use strict";
//element.js.map
;
"use strict";
//guard.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_style_sheet(Component, config0) {
        let rules = [];
        const block = $.$mol_dom_qname($.$mol_ambient({}).$mol_func_name(Component));
        const kebab = (name) => name.replace(/[A-Z]/g, letter => '-' + letter.toLowerCase());
        const make_class = (prefix, path, config) => {
            const props = [];
            const selector = (prefix, path) => {
                if (path.length === 0)
                    return prefix || `[${block}]`;
                return `${prefix ? prefix + ' ' : ''}[${block}_${path.join('_')}]`;
            };
            for (const key of Object.keys(config).reverse()) {
                if (/^[a-z]/.test(key)) {
                    const addProp = (keys, val) => {
                        if (Array.isArray(val)) {
                            if (val[0] && [Array, Object].includes(val[0].constructor)) {
                                val = val.map(v => {
                                    return Object.entries(v).map(([n, a]) => {
                                        if (a === true)
                                            return kebab(n);
                                        if (a === false)
                                            return null;
                                        return String(a);
                                    }).filter(Boolean).join(' ');
                                }).join(',');
                            }
                            else {
                                val = val.join(' ');
                            }
                            props.push(`\t${keys.join('-')}: ${val};\n`);
                        }
                        else if (val.constructor === Object) {
                            for (let suffix in val) {
                                addProp([...keys, kebab(suffix)], val[suffix]);
                            }
                        }
                        else {
                            props.push(`\t${keys.join('-')}: ${val};\n`);
                        }
                    };
                    addProp([kebab(key)], config[key]);
                }
                else if (/^[A-Z]/.test(key)) {
                    make_class(prefix, [...path, key.toLowerCase()], config[key]);
                }
                else if (key[0] === '$') {
                    make_class(selector(prefix, path) + ' [' + $.$mol_dom_qname(key) + ']', [], config[key]);
                }
                else if (key === '>') {
                    const types = config[key];
                    for (let type in types) {
                        make_class(selector(prefix, path) + ' > [' + $.$mol_dom_qname(type) + ']', [], types[type]);
                    }
                }
                else if (key === '@') {
                    const attrs = config[key];
                    for (let name in attrs) {
                        for (let val in attrs[name]) {
                            make_class(selector(prefix, path) + '[' + name + '=' + JSON.stringify(val) + ']', [], attrs[name][val]);
                        }
                    }
                }
                else if (key === '@media') {
                    const media = config[key];
                    for (let query in media) {
                        rules.push('}\n');
                        make_class(prefix, path, media[query]);
                        rules.push(`${key} ${query} {\n`);
                    }
                }
                else {
                    make_class(selector(prefix, path) + key, [], config[key]);
                }
            }
            if (props.length) {
                rules.push(`${selector(prefix, path)} {\n${props.reverse().join('')}}\n`);
            }
        };
        make_class('', [], config0);
        return rules.reverse().join('');
    }
    $.$mol_style_sheet = $mol_style_sheet;
})($ || ($ = {}));
//sheet.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_style_define(Component, config) {
        return $.$mol_style_attach(Component.name, $.$mol_style_sheet(Component, config));
    }
    $.$mol_style_define = $mol_style_define;
})($ || ($ = {}));
//define.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_scroll extends $.$mol_view {
        minimal_height() {
            return 0;
        }
        _event_scroll_timer(val) {
            if (val !== undefined)
                return val;
            return null;
        }
        field() {
            return {
                ...super.field(),
                scrollTop: this.scroll_top(),
                scrollLeft: this.scroll_left(),
                tabIndex: this.tabindex()
            };
        }
        event() {
            return {
                ...super.event(),
                scroll: (event) => this.event_scroll(event)
            };
        }
        scroll_top(val) {
            if (val !== undefined)
                return val;
            return 0;
        }
        scroll_left(val) {
            if (val !== undefined)
                return val;
            return 0;
        }
        tabindex() {
            return -1;
        }
        event_scroll(event) {
            if (event !== undefined)
                return event;
            return null;
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_scroll.prototype, "_event_scroll_timer", null);
    __decorate([
        $.$mol_mem
    ], $mol_scroll.prototype, "scroll_top", null);
    __decorate([
        $.$mol_mem
    ], $mol_scroll.prototype, "scroll_left", null);
    __decorate([
        $.$mol_mem
    ], $mol_scroll.prototype, "event_scroll", null);
    $.$mol_scroll = $mol_scroll;
})($ || ($ = {}));
//scroll.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_state_session extends $.$mol_object {
        static native() {
            if (this['native()'])
                return this['native()'];
            check: try {
                const native = $.$mol_dom_context.sessionStorage;
                if (!native)
                    break check;
                native.setItem('', '');
                native.removeItem('');
                return this['native()'] = native;
            }
            catch (error) {
                console.warn(error);
            }
            return this['native()'] = {
                getItem(key) {
                    return this[':' + key];
                },
                setItem(key, value) {
                    this[':' + key] = value;
                },
                removeItem(key) {
                    this[':' + key] = void 0;
                }
            };
        }
        static value(key, next) {
            if (next === void 0)
                return JSON.parse(this.native().getItem(key) || 'null');
            if (next === null)
                this.native().removeItem(key);
            else
                this.native().setItem(key, JSON.stringify(next));
            return next;
        }
        prefix() { return ''; }
        value(key, next) {
            return $mol_state_session.value(this.prefix() + '.' + key, next);
        }
    }
    __decorate([
        $.$mol_mem_key
    ], $mol_state_session, "value", null);
    $.$mol_state_session = $mol_state_session;
})($ || ($ = {}));
//session.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_dom_listener extends $.$mol_object {
        constructor(_node, _event, _handler, _config = { passive: true }) {
            super();
            this._node = _node;
            this._event = _event;
            this._handler = _handler;
            this._config = _config;
            this._node.addEventListener(this._event, this._handler, this._config);
        }
        destructor() {
            this._node.removeEventListener(this._event, this._handler, this._config);
            super.destructor();
        }
    }
    $.$mol_dom_listener = $mol_dom_listener;
})($ || ($ = {}));
//listener.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_print extends $.$mol_object {
        static before() {
            return new $.$mol_dom_listener(this.$.$mol_dom_context, 'beforeprint', () => {
                this.active(true);
            });
        }
        static after() {
            return new $.$mol_dom_listener(this.$.$mol_dom_context, 'afterprint', () => {
                this.active(false);
            });
        }
        static active(next) {
            this.before();
            this.after();
            return next || false;
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_print, "before", null);
    __decorate([
        $.$mol_mem
    ], $mol_print, "after", null);
    __decorate([
        $.$mol_mem
    ], $mol_print, "active", null);
    $.$mol_print = $mol_print;
})($ || ($ = {}));
//print.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        const { per, rem, px } = $.$mol_style_unit;
        $.$mol_style_define($$.$mol_scroll, {
            display: 'flex',
            overflow: 'auto',
            flex: {
                direction: 'column',
                grow: 1,
                shrink: 1,
                basis: 0,
            },
            outline: 'none',
            alignSelf: 'stretch',
            boxSizing: 'border-box',
            willChange: 'scroll-position',
            maxHeight: per(100),
            maxWidth: per(100),
            webkitOverflowScrolling: 'touch',
            contain: 'content',
            '>': {
                $mol_view: {
                    transform: 'translateZ(0)',
                },
            },
            scrollbar: {
                color: [$.$mol_theme.line, 'transparent'],
            },
            '::-webkit-scrollbar': {
                width: rem(.5),
                height: rem(.5),
            },
            '::-webkit-scrollbar-corner': {
                background: {
                    color: $.$mol_theme.line,
                },
            },
            '::-webkit-scrollbar-track': {
                background: {
                    color: 'transparent',
                },
            },
            '::-webkit-scrollbar-thumb': {
                background: {
                    color: $.$mol_theme.line,
                },
            },
            '@media': {
                'print': {
                    overflow: 'visible',
                    contain: 'none',
                    maxHeight: 'unset',
                },
            },
        });
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//scroll.view.css.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_scroll extends $.$mol_scroll {
            scroll_top(next) {
                return $.$mol_state_session.value(`${this}.scroll_top()`, next) || 0;
            }
            scroll_left(next) {
                return $.$mol_state_session.value(`${this}.scroll_left()`, next) || 0;
            }
            _event_scroll_timer(next) {
                return next;
            }
            event_scroll(next) {
                this._event_scroll_timer()?.destructor();
                const el = this.dom_node();
                this._event_scroll_timer(new $.$mol_after_timeout(200, $.$mol_fiber_solid.func(() => {
                    this.scroll_top(Math.max(0, el.scrollTop));
                    this.scroll_left(Math.max(0, el.scrollLeft));
                })));
            }
            minimal_height() {
                return this.$.$mol_print.active() ? null : 0;
            }
        }
        __decorate([
            $.$mol_mem
        ], $mol_scroll.prototype, "scroll_top", null);
        __decorate([
            $.$mol_mem
        ], $mol_scroll.prototype, "scroll_left", null);
        __decorate([
            $.$mol_memo.method
        ], $mol_scroll.prototype, "_event_scroll_timer", null);
        $$.$mol_scroll = $mol_scroll;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//scroll.view.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_book2 extends $.$mol_scroll {
        sub() {
            return this.pages();
        }
        minimal_width() {
            return 0;
        }
        Placeholder() {
            const obj = new this.$.$mol_view();
            return obj;
        }
        pages() {
            return [];
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_book2.prototype, "Placeholder", null);
    $.$mol_book2 = $mol_book2;
})($ || ($ = {}));
//book2.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_attach("mol/book2/book2.view.css", "[mol_book2] {\n\tdisplay: flex;\n\tflex-flow: row nowrap;\n\talign-items: stretch;\n\toverflow: hidden;\n\tflex: 1 1 auto;\n\talign-self: stretch;\n\tmargin: 0;\n\tbox-shadow: 0 0 0 1px var(--mol_theme_line);\n\t/* transform: translateZ(0); */\n\ttransition: none;\n\toverflow: auto;\n\tscroll-snap-type: x proximity;\n}\n\n[mol_book2] > * {\n/* \tflex: none; */\n\tscroll-snap-stop: always;\n\tscroll-snap-align: end;\n\tposition: relative;\n\t/* z-index: 0; */\n\tmin-height: 100%;\n\tmax-height: 100%;\n\tmax-width: 100%;\n}\n\n[mol_book2] > [mol_view] {\n\ttransform: none; /* prevent content clipping */\n}\n\n[mol_book2_placeholder] {\n\tflex: 1 1 0;\n\t/* background: var(--mol_theme_back); */\n}\n");
})($ || ($ = {}));
//book2.view.css.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_book2 extends $.$mol_book2 {
            title() {
                return this.pages().map(page => page?.title()).reverse().filter(Boolean).join(' | ');
            }
            sub() {
                const next = [...this.pages().slice(), this.Placeholder()];
                const prev = $.$mol_mem_cached(() => this.sub()) ?? [];
                for (let i = 1; i++;) {
                    const p = prev[prev.length - i];
                    const n = next[next.length - i];
                    if (!n)
                        break;
                    if (p === n)
                        continue;
                    new $.$mol_after_timeout(100, () => n.dom_node().scrollIntoView({ behavior: 'smooth' }));
                    break;
                }
                return next;
            }
        }
        __decorate([
            $.$mol_mem
        ], $mol_book2.prototype, "sub", null);
        $$.$mol_book2 = $mol_book2;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//book2.view.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_frame extends $.$mol_view {
        dom_name() {
            return "iframe";
        }
        attr() {
            return {
                src: this.uri(),
                allow: this.allow()
            };
        }
        fullscreen() {
            return true;
        }
        accelerometer() {
            return true;
        }
        autoplay() {
            return true;
        }
        encription() {
            return true;
        }
        gyroscope() {
            return true;
        }
        pip() {
            return true;
        }
        uri(val) {
            if (val !== undefined)
                return val;
            return "";
        }
        allow() {
            return "";
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_frame.prototype, "uri", null);
    $.$mol_frame = $mol_frame;
})($ || ($ = {}));
//frame.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_wait_timeout = $.$mol_fiber_sync((timeout) => new Promise(done => new $.$mol_after_timeout(timeout, () => done(null))));
})($ || ($ = {}));
//timeout.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_define($.$mol_frame, {
        border: {
            style: 'none',
        },
        flex: 'auto',
    });
})($ || ($ = {}));
//frame.view.css.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_frame extends $.$mol_frame {
            window() {
                const node = this.dom_node();
                this.uri_resource();
                return $.$mol_fiber_sync(() => new Promise((done, fail) => {
                    node.onload = () => {
                        done(node.contentWindow);
                    };
                    node.onerror = (event) => {
                        fail(typeof event === 'string' ? new Error(event) : event.error || event);
                    };
                }))();
            }
            uri_resource() {
                return this.uri().replace(/#.*/, '');
            }
            uri_listener() {
                const node = this.dom_node();
                return new $.$mol_dom_listener($.$mol_dom_context, 'message', $.$mol_fiber_root((event) => {
                    if (event.source !== node.contentWindow)
                        return;
                    if (!Array.isArray(event.data))
                        return;
                    if (event.data[0] !== 'hashchange')
                        return;
                    this._uri_sync?.destructor();
                    this._uri_sync = $.$mol_fiber.current;
                    $.$mol_wait_timeout(1000);
                    this.uri(event.data[1]);
                }));
            }
            render() {
                const node = super.render();
                this.uri_listener();
                this.window();
                return node;
            }
            allow() {
                return [
                    ...this.fullscreen() ? ['fullscreen'] : [],
                    ...this.accelerometer() ? ['accelerometer'] : [],
                    ...this.autoplay() ? ['autoplay'] : [],
                    ...this.encription() ? ['encrypted-media'] : [],
                    ...this.gyroscope() ? ['gyroscope'] : [],
                    ...this.pip() ? ['picture-in-picture'] : [],
                ].join(';');
            }
        }
        __decorate([
            $.$mol_mem
        ], $mol_frame.prototype, "window", null);
        __decorate([
            $.$mol_mem
        ], $mol_frame.prototype, "uri_resource", null);
        __decorate([
            $.$mol_mem
        ], $mol_frame.prototype, "uri_listener", null);
        $$.$mol_frame = $mol_frame;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//frame.view.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_offline(uri = 'web.js') { }
    $.$mol_offline = $mol_offline;
})($ || ($ = {}));
//offline.node.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_offline();
})($ || ($ = {}));
//install.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_attach("mol/gap/gap.css", ":root {\n\t--mol_gap_block: .75rem;\n\t--mol_gap_text: .5rem .75rem;\n}\n");
})($ || ($ = {}));
//gap.css.js.map
;
"use strict";
var $;
(function ($) {
    const { vary } = $.$mol_style_func;
    $.$mol_gap = {
        block: vary('--mol_gap_block'),
        text: vary('--mol_gap_text'),
    };
})($ || ($ = {}));
//gap.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_page extends $.$mol_view {
        sub() {
            return [
                this.Head(),
                this.Body(),
                this.Foot()
            ];
        }
        Title() {
            const obj = new this.$.$mol_view();
            obj.dom_name = () => "h1";
            obj.sub = () => [
                this.title()
            ];
            return obj;
        }
        tools() {
            return [];
        }
        Tools() {
            const obj = new this.$.$mol_view();
            obj.sub = () => this.tools();
            return obj;
        }
        head() {
            return [
                this.Title(),
                this.Tools()
            ];
        }
        Head() {
            const obj = new this.$.$mol_view();
            obj.minimal_height = () => 64;
            obj.sub = () => this.head();
            return obj;
        }
        body_scroll_top(val) {
            if (val !== undefined)
                return val;
            return 0;
        }
        body() {
            return [];
        }
        Body() {
            const obj = new this.$.$mol_scroll();
            obj.scroll_top = (val) => this.body_scroll_top(val);
            obj.sub = () => this.body();
            return obj;
        }
        foot() {
            return [];
        }
        Foot() {
            const obj = new this.$.$mol_view();
            obj.sub = () => this.foot();
            return obj;
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_page.prototype, "Title", null);
    __decorate([
        $.$mol_mem
    ], $mol_page.prototype, "Tools", null);
    __decorate([
        $.$mol_mem
    ], $mol_page.prototype, "Head", null);
    __decorate([
        $.$mol_mem
    ], $mol_page.prototype, "body_scroll_top", null);
    __decorate([
        $.$mol_mem
    ], $mol_page.prototype, "Body", null);
    __decorate([
        $.$mol_mem
    ], $mol_page.prototype, "Foot", null);
    $.$mol_page = $mol_page;
})($ || ($ = {}));
//page.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        const { per, rem } = $.$mol_style_unit;
        $.$mol_style_define($$.$mol_page, {
            display: 'flex',
            margin: 0,
            flex: {
                basis: 'auto',
                direction: 'column',
            },
            position: 'relative',
            alignSelf: 'stretch',
            maxWidth: per(100),
            maxHeight: per(100),
            boxSizing: 'border-box',
            background: {
                color: $.$mol_theme.back,
            },
            color: $.$mol_theme.text,
            ':focus': {
                outline: 'none',
            },
            Head: {
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'flex-end',
                flex: 'none',
                position: 'relative',
                margin: 0,
                minHeight: rem(4),
                padding: $.$mol_gap.block,
                background: {
                    color: $.$mol_theme.back,
                },
                boxShadow: `0 0.5rem 0.5rem -0.5rem hsla(0,0%,0%,.25)`,
            },
            Title: {
                minHeight: rem(2),
                margin: 0,
                padding: $.$mol_gap.text,
                wordBreak: 'normal',
                textShadow: '0 0',
                font: {
                    size: 'inherit',
                    weight: 'normal',
                },
                flex: {
                    grow: 1000,
                    shrink: 1,
                    basis: per(50),
                },
            },
            Tools: {
                flex: {
                    basis: 'auto',
                    grow: 0,
                    shrink: 1,
                },
                display: 'flex',
                justifyContent: 'flex-end',
                alignItems: 'flex-start',
                flexWrap: 'wrap',
            },
            Body: {
                flex: {
                    grow: 1000,
                    shrink: 1,
                    basis: per(100),
                },
                margin: 0,
                padding: $.$mol_gap.block,
            },
            Foot: {
                display: 'flex',
                justifyContent: 'space-between',
                flex: 'none',
                margin: 0,
                overflow: 'hidden',
                background: {
                    color: $.$mol_theme.back,
                },
                boxShadow: `0 -0.5rem 0.5rem -0.5rem hsla(0,0%,0%,.25)`,
                zIndex: 1,
            },
        });
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//page.view.css.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_page extends $.$mol_page {
            body_scroll_top(next) {
                return $.$mol_state_session.value(`${this}.body_scroll_top()`, next) || 0;
            }
        }
        $$.$mol_page = $mol_page;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//page.view.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_diff_path(...paths) {
        const limit = Math.min(...paths.map(path => path.length));
        lookup: for (var i = 0; i < limit; ++i) {
            const first = paths[0][i];
            for (let j = 1; j < paths.length; ++j) {
                if (paths[j][i] !== first)
                    break lookup;
            }
        }
        return {
            prefix: paths[0].slice(0, i),
            suffix: paths.map(path => path.slice(i)),
        };
    }
    $.$mol_diff_path = $mol_diff_path;
})($ || ($ = {}));
//path.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_error_mix extends Error {
        constructor(message, ...errors) {
            super(message);
            this.errors = errors;
            if (errors.length) {
                const stacks = [...errors.map(error => error.message), this.stack];
                const diff = $.$mol_diff_path(...stacks.map(stack => {
                    if (!stack)
                        return [];
                    return stack.split('\n').reverse();
                }));
                const head = diff.prefix.reverse().join('\n');
                const tails = diff.suffix.map(path => path.reverse().map(line => line.replace(/^(?!\s+at)/, '\tat (.) ')).join('\n')).join('\n\tat (.) -----\n');
                this.stack = `Error: ${this.constructor.name}\n\tat (.) /"""\\\n${tails}\n\tat (.) \\___/\n${head}`;
                this.message += errors.map(error => '\n' + error.message).join('');
            }
        }
        toJSON() {
            return this.message;
        }
    }
    $.$mol_error_mix = $mol_error_mix;
})($ || ($ = {}));
//mix.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_data_error extends $.$mol_error_mix {
    }
    $.$mol_data_error = $mol_data_error;
})($ || ($ = {}));
//error.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_data_string = (val) => {
        if (typeof val === 'string')
            return val;
        return $.$mol_fail(new $.$mol_data_error(`${val} is not a string`));
    };
})($ || ($ = {}));
//string.js.map
;
"use strict";
//value.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_data_setup(value, config) {
        return Object.assign(value, {
            config,
            Value: null
        });
    }
    $.$mol_data_setup = $mol_data_setup;
})($ || ($ = {}));
//setup.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_data_array(sub) {
        return $.$mol_data_setup((val) => {
            if (!Array.isArray(val))
                return $.$mol_fail(new $.$mol_data_error(`${val} is not an array`));
            return val.map((item, index) => {
                try {
                    return sub(item);
                }
                catch (error) {
                    if ('then' in error)
                        return $.$mol_fail_hidden(error);
                    error.message = `[${index}] ${error.message}`;
                    return $.$mol_fail(error);
                }
            });
        }, sub);
    }
    $.$mol_data_array = $mol_data_array;
})($ || ($ = {}));
//array.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_dom_parse(text, type = 'application/xhtml+xml') {
        const parser = new $.$mol_dom_context.DOMParser();
        const doc = parser.parseFromString(text, type);
        const error = doc.getElementsByTagName('parsererror');
        if (error.length)
            throw new Error(error[0].textContent);
        return doc;
    }
    $.$mol_dom_parse = $mol_dom_parse;
})($ || ($ = {}));
//parse.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_fetch_response extends $.$mol_object2 {
        constructor(native) {
            super();
            this.native = native;
        }
        headers() {
            return this.native.headers;
        }
        mime() {
            return this.headers().get('content-type');
        }
        stream() {
            return this.native.body;
        }
        text() {
            const buffer = this.buffer();
            const native = this.native;
            const mime = native.headers.get('content-type') || '';
            const [, charset] = /charset=(.*)/.exec(mime) || [, 'utf-8'];
            const decoder = new TextDecoder(charset);
            return decoder.decode(buffer);
        }
        json() {
            const response = this.native;
            const parse = $.$mol_fiber_sync(response.json);
            return parse.call(response);
        }
        buffer() {
            const response = this.native;
            const parse = $.$mol_fiber_sync(response.arrayBuffer);
            return parse.call(response);
        }
        xml() {
            return $.$mol_dom_parse(this.text(), 'application/xml');
        }
        xhtml() {
            return $.$mol_dom_parse(this.text(), 'application/xhtml+xml');
        }
        html() {
            return $.$mol_dom_parse(this.text(), 'text/html');
        }
    }
    __decorate([
        $.$mol_fiber.method
    ], $mol_fetch_response.prototype, "stream", null);
    __decorate([
        $.$mol_fiber.method
    ], $mol_fetch_response.prototype, "text", null);
    __decorate([
        $.$mol_fiber.method
    ], $mol_fetch_response.prototype, "json", null);
    __decorate([
        $.$mol_fiber.method
    ], $mol_fetch_response.prototype, "buffer", null);
    __decorate([
        $.$mol_fiber.method
    ], $mol_fetch_response.prototype, "xml", null);
    __decorate([
        $.$mol_fiber.method
    ], $mol_fetch_response.prototype, "xhtml", null);
    __decorate([
        $.$mol_fiber.method
    ], $mol_fetch_response.prototype, "html", null);
    $.$mol_fetch_response = $mol_fetch_response;
    class $mol_fetch extends $.$mol_object2 {
        static response(input, init) {
            const response = this.request(input, init);
            if (Math.floor(response.status / 100) === 2)
                return new $mol_fetch_response(response);
            throw new Error(response.statusText || `HTTP Error ${response.status}`);
        }
        static stream(input, init) {
            return this.response(input, init).stream();
        }
        static text(input, init) {
            return this.response(input, init).text();
        }
        static json(input, init) {
            return this.response(input, init).json();
        }
        static buffer(input, init) {
            this.response(input, init).buffer();
        }
        static xml(input, init) {
            return this.response(input, init).xml();
        }
        static xhtml(input, init) {
            return this.response(input, init).xhtml();
        }
        static html(input, init) {
            return this.response(input, init).html();
        }
    }
    $mol_fetch.request = $.$mol_fiber_sync((input, init = {}) => {
        if (typeof AbortController === 'function') {
            var controller = new AbortController();
            init.signal = controller.signal;
            const fiber = $.$mol_fiber.current;
            fiber.abort = () => {
                if (fiber.cursor === -2)
                    return true;
                controller.abort();
                return true;
            };
        }
        let native = $.$mol_dom_context.fetch;
        if (!native)
            native = $node['node-fetch'];
        return native(input, init);
    });
    __decorate([
        $.$mol_fiber.method
    ], $mol_fetch, "response", null);
    __decorate([
        $.$mol_fiber.method
    ], $mol_fetch, "stream", null);
    __decorate([
        $.$mol_fiber.method
    ], $mol_fetch, "text", null);
    __decorate([
        $.$mol_fiber.method
    ], $mol_fetch, "json", null);
    __decorate([
        $.$mol_fiber.method
    ], $mol_fetch, "buffer", null);
    __decorate([
        $.$mol_fiber.method
    ], $mol_fetch, "xml", null);
    __decorate([
        $.$mol_fiber.method
    ], $mol_fetch, "xhtml", null);
    __decorate([
        $.$mol_fiber.method
    ], $mol_fetch, "html", null);
    $.$mol_fetch = $mol_fetch;
})($ || ($ = {}));
//fetch.js.map
;
"use strict";
var $;
(function ($) {
    class $piterjs_model extends $.$mol_object2 {
        static uri() { return ''; }
        id() { return ''; }
        static item(id) {
            const model = new this;
            model.id = $.$mol_const($.$mol_data_string(id));
            return model;
        }
        static list() {
            return $.$mol_data_array(id => this.item(id));
        }
        static all() {
            return this.list()(Object.keys(this.data()));
        }
        static data() {
            const tree = $.$mol_tree.fromString(this.$.$mol_fetch.text(this.uri()));
            const json = new $.$mol_tree({ type: '*', sub: tree.sub }).toJSON();
            return json;
        }
        data(next) {
            const Model = this.constructor;
            return Model.data()[this.id()];
        }
    }
    __decorate([
        $.$mol_mem
    ], $piterjs_model.prototype, "data", null);
    __decorate([
        $.$mol_mem_key
    ], $piterjs_model, "item", null);
    __decorate([
        $.$mol_mem
    ], $piterjs_model, "list", null);
    __decorate([
        $.$mol_mem
    ], $piterjs_model, "all", null);
    __decorate([
        $.$mol_mem
    ], $piterjs_model, "data", null);
    $.$piterjs_model = $piterjs_model;
})($ || ($ = {}));
//model.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_time_base {
        static formatter(pattern) {
            if (this.patterns[pattern])
                return this.patterns[pattern];
            var tokens = Object.keys(this.patterns)
                .sort()
                .reverse()
                .map((token) => token.replace(/([-+*.\[\]()\^])/g, '\\$1'));
            var lexer = RegExp('(.*?)(' + tokens.join('|') + '|$)', 'g');
            var funcs = [];
            pattern.replace(lexer, (str, text, token) => {
                if (text)
                    funcs.push(() => text);
                if (token)
                    funcs.push(this.patterns[token]);
                return str;
            });
            return this.patterns[pattern] = (arg) => {
                return funcs.reduce((res, func) => res + func(arg), '');
            };
        }
        toString(pattern) {
            const Base = this.constructor;
            const formatter = Base.formatter(pattern);
            return formatter(this);
        }
    }
    $mol_time_base.patterns = {};
    $.$mol_time_base = $mol_time_base;
})($ || ($ = {}));
//base.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_time_duration extends $.$mol_time_base {
        constructor(config = 0) {
            super();
            this.year = 0;
            this.month = 0;
            this.day = 0;
            this.hour = 0;
            this.minute = 0;
            this.second = 0;
            if (typeof config === 'number') {
                this.second = config / 1000;
                return;
            }
            if (typeof config === 'string') {
                if (config === 'Z') {
                    this.hour = 0;
                    this.minute = 0;
                    return;
                }
                duration: {
                    const parser = /^P(?:([+-]?\d+(?:\.\d+)?)Y)?(?:([+-]?\d+(?:\.\d+)?)M)?(?:([+-]?\d+(?:\.\d+)?)D)?(?:T(?:([+-]?\d+(?:\.\d+)?)h)?(?:([+-]?\d+(?:\.\d+)?)m)?(?:([+-]?\d+(?:\.\d+)?)s)?)?$/i;
                    const found = parser.exec(config);
                    if (!found)
                        break duration;
                    if (found[1])
                        this.year = Number(found[1]);
                    if (found[2])
                        this.month = Number(found[2]);
                    if (found[3])
                        this.day = Number(found[3]);
                    if (found[4])
                        this.hour = Number(found[4]);
                    if (found[5])
                        this.minute = Number(found[5]);
                    if (found[6])
                        this.second = Number(found[6]);
                    return;
                }
                offset: {
                    var parser = /^[+-](\d\d)(?::?(\d\d))?$/i;
                    var found = parser.exec(config);
                    if (!found)
                        break offset;
                    if (found[1])
                        this.hour = Number(found[1]);
                    if (found[2])
                        this.minute = Number(found[2]);
                    return;
                }
                throw new Error(`Can not parse time duration (${config})`);
            }
            this.year = config.year || 0;
            this.month = config.month || 0;
            this.day = config.day || 0;
            this.hour = config.hour || 0;
            this.minute = config.minute || 0;
            this.second = config.second || 0;
        }
        summ(config) {
            const duration = new $mol_time_duration(config);
            return new $mol_time_duration({
                year: this.year + duration.year,
                month: this.month + duration.month,
                day: this.day + duration.day,
                hour: this.hour + duration.hour,
                minute: this.minute + duration.minute,
                second: this.second + duration.second,
            });
        }
        mult(numb) {
            return new $mol_time_duration({
                year: this.year && this.year * numb,
                month: this.month && this.month * numb,
                day: this.day && this.day * numb,
                hour: this.hour && this.hour * numb,
                minute: this.minute && this.minute * numb,
                second: this.second && this.second * numb,
            });
        }
        count(config) {
            const duration = new $mol_time_duration(config);
            return this.valueOf() / duration.valueOf();
        }
        valueOf() {
            var day = this.year * 365 + this.month * 30.4 + this.day;
            var second = ((day * 24 + this.hour) * 60 + this.minute) * 60 + this.second;
            return second * 1000;
        }
        toJSON() { return this.toString(); }
        toString(pattern = 'P#Y#M#DT#h#m#s') {
            return super.toString(pattern);
        }
    }
    $mol_time_duration.patterns = {
        '#Y': (duration) => {
            if (!duration.year)
                return '';
            return duration.year + 'Y';
        },
        '#M': (duration) => {
            if (!duration.month)
                return '';
            return duration.month + 'M';
        },
        '#D': (duration) => {
            if (!duration.day)
                return '';
            return duration.day + 'D';
        },
        '#h': (duration) => {
            if (!duration.hour)
                return '';
            return duration.hour + 'H';
        },
        '#m': (duration) => {
            if (!duration.minute)
                return '';
            return duration.minute + 'M';
        },
        '#s': (duration) => {
            if (!duration.second)
                return '';
            return duration.second + 'S';
        },
    };
    $.$mol_time_duration = $mol_time_duration;
})($ || ($ = {}));
//duration.js.map
;
"use strict";
var $;
(function ($) {
    let $mol_time_moment_weekdays;
    (function ($mol_time_moment_weekdays) {
        $mol_time_moment_weekdays[$mol_time_moment_weekdays["monday"] = 0] = "monday";
        $mol_time_moment_weekdays[$mol_time_moment_weekdays["tuesday"] = 1] = "tuesday";
        $mol_time_moment_weekdays[$mol_time_moment_weekdays["wednesday"] = 2] = "wednesday";
        $mol_time_moment_weekdays[$mol_time_moment_weekdays["thursday"] = 3] = "thursday";
        $mol_time_moment_weekdays[$mol_time_moment_weekdays["friday"] = 4] = "friday";
        $mol_time_moment_weekdays[$mol_time_moment_weekdays["saturday"] = 5] = "saturday";
        $mol_time_moment_weekdays[$mol_time_moment_weekdays["sunday"] = 6] = "sunday";
    })($mol_time_moment_weekdays = $.$mol_time_moment_weekdays || ($.$mol_time_moment_weekdays = {}));
    function numb(str, max) {
        const numb = Number(str);
        if (numb < max)
            return numb;
        $.$mol_fail(new Error(`Wrong time component ${str}`));
    }
    class $mol_time_moment extends $.$mol_time_base {
        constructor(config = new Date) {
            super();
            if (typeof config === 'number')
                config = new Date(config);
            if (typeof config === 'string') {
                const parsed = /^(?:(\d\d?\d?\d?)(?:-?(\d\d?)(?:-?(\d\d?))?)?)?(?:[T ](?:(\d\d?)(?::?(\d\d?)(?::?(\d\d?(?:\.\d+)?))?)?)?(Z|[\+\-]\d\d?(?::?(?:\d\d?)?)?)?)?$/.exec(config);
                if (!parsed)
                    throw new Error(`Can not parse time moment (${config})`);
                if (parsed[1])
                    this.year = numb(parsed[1], 9999);
                if (parsed[2])
                    this.month = numb(parsed[2], 13) - 1;
                if (parsed[3])
                    this.day = numb(parsed[3], 32) - 1;
                if (parsed[4])
                    this.hour = numb(parsed[4], 60);
                if (parsed[5])
                    this.minute = numb(parsed[5], 60);
                if (parsed[6])
                    this.second = numb(parsed[6], 60);
                if (parsed[7])
                    this.offset = new $.$mol_time_duration(parsed[7]);
                return;
            }
            if (config instanceof Date) {
                this.year = config.getFullYear();
                this.month = config.getMonth();
                this.day = config.getDate() - 1;
                this.hour = config.getHours();
                this.minute = config.getMinutes();
                this.second = config.getSeconds() + config.getMilliseconds() / 1000;
                const offset = -config.getTimezoneOffset();
                this.offset = new $.$mol_time_duration({
                    hour: (offset < 0) ? Math.ceil(offset / 60) : Math.floor(offset / 60),
                    minute: offset % 60
                });
                return;
            }
            this.year = config.year;
            this.month = config.month;
            this.day = config.day;
            this.hour = config.hour;
            this.minute = config.minute;
            this.second = config.second;
            this.offset = config.offset == null ? config.offset : new $.$mol_time_duration(config.offset);
        }
        get weekday() {
            return (this.native.getDay() + 6) % 7;
        }
        get native() {
            if (this._native)
                return this._native;
            const utc = this.toOffset('Z');
            return this._native = new Date(Date.UTC(utc.year ?? 0, utc.month ?? 0, (utc.day ?? 0) + 1, utc.hour ?? 0, utc.minute ?? 0, utc.second != undefined ? Math.floor(utc.second) : 0, utc.second != undefined ? Math.floor((utc.second - Math.floor(utc.second)) * 1000) : 0));
        }
        get normal() {
            if (this._normal)
                return this._normal;
            const moment = new $mol_time_moment(this.native);
            return this._normal = new $mol_time_moment({
                year: this.year === undefined ? undefined : moment.year,
                month: this.month === undefined ? undefined : moment.month,
                day: this.day === undefined ? undefined : moment.day,
                hour: this.hour === undefined ? undefined : moment.hour,
                minute: this.minute === undefined ? undefined : moment.minute,
                second: this.second === undefined ? undefined : moment.second,
                offset: this.offset === undefined ? undefined : moment.offset,
            });
        }
        merge(config) {
            const moment = new $mol_time_moment(config);
            return new $mol_time_moment({
                year: moment.year === undefined ? this.year : moment.year,
                month: moment.month === undefined ? this.month : moment.month,
                day: moment.day === undefined ? this.day : moment.day,
                hour: moment.hour === undefined ? this.hour : moment.hour,
                minute: moment.minute === undefined ? this.minute : moment.minute,
                second: moment.second === undefined ? this.second : moment.second,
                offset: moment.offset === undefined ? this.offset : moment.offset,
            });
        }
        shift(config) {
            const duration = new $.$mol_time_duration(config);
            const moment = new $mol_time_moment().merge({
                year: this.year,
                month: this.month,
                day: this.day,
                hour: this.hour ?? 0,
                minute: this.minute ?? 0,
                second: this.second ?? 0,
                offset: this.offset ?? 0
            });
            const second = moment.second + (duration.second ?? 0);
            const native = new Date(moment.year + (duration.year ?? 0), moment.month + (duration.month ?? 0), moment.day + 1 + (duration.day ?? 0), moment.hour + (duration.hour ?? 0), moment.minute + (duration.minute ?? 0), Math.floor(second), (second - Math.floor(second)) * 1000);
            if (isNaN(native.valueOf()))
                throw new Error('Wrong time');
            return new $mol_time_moment({
                year: this.year === undefined ? undefined : native.getFullYear(),
                month: this.month === undefined ? undefined : native.getMonth(),
                day: this.day === undefined ? undefined : native.getDate() - 1,
                hour: this.hour === undefined ? undefined : native.getHours(),
                minute: this.minute === undefined ? undefined : native.getMinutes(),
                second: this.second === undefined ? undefined : native.getSeconds() + native.getMilliseconds() / 1000,
                offset: this.offset,
            });
        }
        mask(config) {
            const mask = new $mol_time_moment(config);
            return new $mol_time_moment({
                year: mask.year === undefined ? undefined : this.year,
                month: mask.month === undefined ? undefined : this.month,
                day: mask.day === undefined ? undefined : this.day,
                hour: mask.hour === undefined ? undefined : this.hour,
                minute: mask.minute === undefined ? undefined : this.minute,
                second: mask.second === undefined ? undefined : this.second,
                offset: mask.offset === undefined ? undefined : this.offset,
            });
        }
        toOffset(config) {
            const duration = new $.$mol_time_duration(config);
            const offset = this.offset || new $mol_time_moment().offset;
            let with_time = new $mol_time_moment('T00:00:00').merge(this);
            const moment = with_time.shift(duration.summ(offset.mult(-1)));
            return moment.merge({ offset: duration });
        }
        valueOf() { return this.native.getTime(); }
        toJSON() { return this.toString(); }
        toString(pattern = 'YYYY-MM-DDThh:mm:ss.sssZ') {
            return super.toString(pattern);
        }
    }
    $mol_time_moment.patterns = {
        'YYYY': (moment) => {
            if (moment.year == null)
                return '';
            return String(moment.year);
        },
        'AD': (moment) => {
            if (moment.year == null)
                return '';
            return String(Math.floor(moment.year / 100) + 1);
        },
        'YY': (moment) => {
            if (moment.year == null)
                return '';
            return String(moment.year % 100);
        },
        'Month': (pattern => (moment) => {
            if (moment.month == null)
                return '';
            return pattern.format(moment.native);
        })(new Intl.DateTimeFormat(undefined, { month: 'long' })),
        'DD Month': (pattern => (moment) => {
            if (moment.month == null) {
                if (moment.day == null) {
                    return '';
                }
                else {
                    return $mol_time_moment.patterns['DD'](moment);
                }
            }
            else {
                if (moment.day == null) {
                    return $mol_time_moment.patterns['Month'](moment);
                }
                else {
                    return pattern.format(moment.native);
                }
            }
        })(new Intl.DateTimeFormat(undefined, { day: '2-digit', month: 'long' })),
        'D Month': (pattern => (moment) => {
            if (moment.month == null) {
                if (moment.day == null) {
                    return '';
                }
                else {
                    return $mol_time_moment.patterns['D'](moment);
                }
            }
            else {
                if (moment.day == null) {
                    return $mol_time_moment.patterns['Month'](moment);
                }
                else {
                    return pattern.format(moment.native);
                }
            }
        })(new Intl.DateTimeFormat(undefined, { day: 'numeric', month: 'long' })),
        'Mon': (pattern => (moment) => {
            if (moment.month == null)
                return '';
            return pattern.format(moment.native);
        })(new Intl.DateTimeFormat(undefined, { month: 'short' })),
        'DD Mon': (pattern => (moment) => {
            if (moment.month == null) {
                if (moment.day == null) {
                    return '';
                }
                else {
                    return $mol_time_moment.patterns['DD'](moment);
                }
            }
            else {
                if (moment.day == null) {
                    return $mol_time_moment.patterns['Mon'](moment);
                }
                else {
                    return pattern.format(moment.native);
                }
            }
        })(new Intl.DateTimeFormat(undefined, { day: '2-digit', month: 'short' })),
        'D Mon': (pattern => (moment) => {
            if (moment.month == null) {
                if (moment.day == null) {
                    return '';
                }
                else {
                    return $mol_time_moment.patterns['D'](moment);
                }
            }
            else {
                if (moment.day == null) {
                    return $mol_time_moment.patterns['Mon'](moment);
                }
                else {
                    return pattern.format(moment.native);
                }
            }
        })(new Intl.DateTimeFormat(undefined, { day: 'numeric', month: 'short' })),
        '-MM': (moment) => {
            if (moment.month == null)
                return '';
            return '-' + $mol_time_moment.patterns['MM'](moment);
        },
        'MM': (moment) => {
            if (moment.month == null)
                return '';
            return String(100 + moment.month + 1).slice(1);
        },
        'M': (moment) => {
            if (moment.month == null)
                return '';
            return String(moment.month + 1);
        },
        'WeekDay': (pattern => (moment) => {
            if (moment.day == null)
                return '';
            if (moment.month == null)
                return '';
            if (moment.year == null)
                return '';
            return pattern.format(moment.native);
        })(new Intl.DateTimeFormat(undefined, { weekday: 'long' })),
        'WD': (pattern => (moment) => {
            if (moment.day == null)
                return '';
            if (moment.month == null)
                return '';
            if (moment.year == null)
                return '';
            return pattern.format(moment.native);
        })(new Intl.DateTimeFormat(undefined, { weekday: 'short' })),
        '-DD': (moment) => {
            if (moment.day == null)
                return '';
            return '-' + $mol_time_moment.patterns['DD'](moment);
        },
        'DD': (moment) => {
            if (moment.day == null)
                return '';
            return String(100 + moment.day + 1).slice(1);
        },
        'D': (moment) => {
            if (moment.day == null)
                return '';
            return String(moment.day + 1);
        },
        'Thh': (moment) => {
            if (moment.hour == null)
                return '';
            return 'T' + $mol_time_moment.patterns['hh'](moment);
        },
        'hh': (moment) => {
            if (moment.hour == null)
                return '';
            return String(100 + moment.hour).slice(1);
        },
        'h': (moment) => {
            if (moment.hour == null)
                return '';
            return String(moment.hour);
        },
        ':mm': (moment) => {
            if (moment.minute == null)
                return '';
            return ':' + $mol_time_moment.patterns['mm'](moment);
        },
        'mm': (moment) => {
            if (moment.minute == null)
                return '';
            return String(100 + moment.minute).slice(1);
        },
        'm': (moment) => {
            if (moment.minute == null)
                return '';
            return String(moment.minute);
        },
        ':ss': (moment) => {
            if (moment.second == null)
                return '';
            return ':' + $mol_time_moment.patterns['ss'](moment);
        },
        'ss': (moment) => {
            if (moment.second == null)
                return '';
            return String(100 + moment.second | 0).slice(1);
        },
        's': (moment) => {
            if (moment.second == null)
                return '';
            return String(moment.second | 0);
        },
        '.sss': (moment) => {
            if (moment.second == null)
                return '';
            if (moment.second === (moment.second | 0))
                return '';
            return '.' + $mol_time_moment.patterns['sss'](moment);
        },
        'sss': (moment) => {
            if (moment.second == null)
                return '';
            const millisecond = Math.floor((moment.second - Math.floor(moment.second)) * 1000);
            return String(1000 + millisecond).slice(1);
        },
        'Z': (moment) => {
            const offset = moment.offset;
            if (!offset)
                return '';
            let hour = offset.hour;
            let sign = '+';
            if (hour < 0) {
                sign = '-';
                hour = -hour;
            }
            return sign + String(100 + hour).slice(1) + ':' + String(100 + offset.minute).slice(1);
        }
    };
    $.$mol_time_moment = $mol_time_moment;
})($ || ($ = {}));
//moment.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_data_optional(sub) {
        return $.$mol_data_setup((val) => {
            if (val === undefined)
                return undefined;
            return sub(val);
        }, sub);
    }
    $.$mol_data_optional = $mol_data_optional;
})($ || ($ = {}));
//optional.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_time_interval extends $.$mol_time_base {
        constructor(config) {
            super();
            if (typeof config === 'string') {
                var chunks = config.split('/');
                if (chunks[0]) {
                    if (chunks[0][0].toUpperCase() === 'P') {
                        this._duration = new $.$mol_time_duration(chunks[0]);
                    }
                    else {
                        this._start = new $.$mol_time_moment(chunks[0]);
                    }
                }
                else {
                    this._start = new $.$mol_time_moment();
                }
                if (chunks[1]) {
                    if (chunks[1][0].toUpperCase() === 'P') {
                        this._duration = new $.$mol_time_duration(chunks[1]);
                    }
                    else {
                        this._end = new $.$mol_time_moment(chunks[1]);
                    }
                }
                else {
                    this._end = new $.$mol_time_moment();
                }
                return;
            }
            if (config.start !== undefined)
                this._start = new $.$mol_time_moment(config.start);
            if (config.end !== undefined)
                this._end = new $.$mol_time_moment(config.end);
            if (config.duration !== undefined)
                this._duration = new $.$mol_time_duration(config.duration);
        }
        get start() {
            if (this._start)
                return this._start;
            return this._start = this._end.shift(this._duration.mult(-1));
        }
        get end() {
            if (this._end)
                return this._end;
            return this._end = this._start.shift(this._duration);
        }
        get duration() {
            if (this._duration)
                return this._duration;
            return this._duration = new $.$mol_time_duration(this._end.valueOf() - this._start.valueOf());
        }
        toJSON() { return this.toString(); }
        toString() {
            return (this._start || this._duration || '').toString() + '/' + (this._end || this._duration || '').toString();
        }
    }
    $.$mol_time_interval = $mol_time_interval;
})($ || ($ = {}));
//interval.js.map
;
"use strict";
var $;
(function ($) {
    class $piterjs_speaker extends $.$piterjs_model {
        static uri() {
            return 'piterjs/speaker/speaker.data.tree';
        }
        title() {
            return $.$mol_data_string(this.data().title);
        }
        description() {
            return $.$mol_data_string(this.data().description);
        }
        photo() {
            return $.$mol_data_string(this.data().photo);
        }
        speeches() {
            return this.$.$piterjs_speech.all().filter(speech => speech.speaker() === this);
        }
    }
    __decorate([
        $.$mol_mem
    ], $piterjs_speaker.prototype, "title", null);
    __decorate([
        $.$mol_mem
    ], $piterjs_speaker.prototype, "description", null);
    __decorate([
        $.$mol_mem
    ], $piterjs_speaker.prototype, "photo", null);
    __decorate([
        $.$mol_mem
    ], $piterjs_speaker.prototype, "speeches", null);
    $.$piterjs_speaker = $piterjs_speaker;
})($ || ($ = {}));
//speaker.js.map
;
"use strict";
var $;
(function ($) {
    class $piterjs_speech extends $.$piterjs_model {
        static uri() {
            return 'piterjs/speech/speech.data.tree';
        }
        meetup() {
            return this.$.$piterjs_meetup.all().find(meetup => meetup.speeches().indexOf(this) !== -1);
        }
        title() {
            return $.$mol_data_string(this.data().title);
        }
        description() {
            return $.$mol_data_string(this.data().description);
        }
        slides() {
            return $.$mol_data_optional($.$mol_data_string)(this.data().slides) || null;
        }
        video() {
            return $.$mol_data_optional($.$mol_data_string)(this.data().video) || null;
        }
        previous() {
            const speeches = this.meetup().speeches();
            const index = speeches.indexOf(this);
            if (index <= 0)
                return null;
            return speeches[index - 1];
        }
        interval() {
            return new $.$mol_time_interval({
                start: this.previous()?.interval().end ?? this.meetup().start(),
                duration: this.duration(),
            });
        }
        duration() {
            return new $.$mol_time_duration($.$mol_data_string(this.data().duration));
        }
        speaker() {
            return this.$.$piterjs_speaker.item(this.data().speaker);
        }
    }
    __decorate([
        $.$mol_mem
    ], $piterjs_speech.prototype, "meetup", null);
    __decorate([
        $.$mol_mem
    ], $piterjs_speech.prototype, "title", null);
    __decorate([
        $.$mol_mem
    ], $piterjs_speech.prototype, "description", null);
    __decorate([
        $.$mol_mem
    ], $piterjs_speech.prototype, "slides", null);
    __decorate([
        $.$mol_mem
    ], $piterjs_speech.prototype, "video", null);
    __decorate([
        $.$mol_mem
    ], $piterjs_speech.prototype, "previous", null);
    __decorate([
        $.$mol_mem
    ], $piterjs_speech.prototype, "interval", null);
    __decorate([
        $.$mol_mem
    ], $piterjs_speech.prototype, "duration", null);
    __decorate([
        $.$mol_mem
    ], $piterjs_speech.prototype, "speaker", null);
    $.$piterjs_speech = $piterjs_speech;
})($ || ($ = {}));
//speech.js.map
;
"use strict";
//unary.js.map
;
"use strict";
//tail.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_func_is_class(func) {
        return Object.getOwnPropertyDescriptor(func, 'prototype')?.writable === false;
    }
    $.$mol_func_is_class = $mol_func_is_class;
})($ || ($ = {}));
//class.js.map
;
"use strict";
//foot.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_data_pipe(...funcs) {
        return $.$mol_data_setup(function (input) {
            let value = input;
            for (const func of funcs)
                value = $.$mol_func_is_class(func) ? new func(value) : func.call(this, value);
            return value;
        }, { funcs });
    }
    $.$mol_data_pipe = $mol_data_pipe;
})($ || ($ = {}));
//pipe.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_data_wrapper(pre, Obj) {
        console.warn('$mol_data_wrapper is deparecated. Use $mol_data_pipe instead.');
        return $.$mol_data_setup((val) => new Obj(pre(val)), { pre, Obj });
    }
    $.$mol_data_wrapper = $mol_data_wrapper;
})($ || ($ = {}));
//wrapper.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_data_number = (val) => {
        if (typeof val === 'number')
            return val;
        return $.$mol_fail(new $.$mol_data_error(`${val} is not a number`));
    };
})($ || ($ = {}));
//number.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_vector extends Array {
        constructor(...values) { super(...values); }
        map(convert, self) {
            return super.map(convert, self);
        }
        merged(patches, combine) {
            return this.map((value, index) => combine(value, patches[index]));
        }
        limited(limits) {
            return this.merged(limits, (value, [min, max]) => (value < min) ? min : (value > max) ? max : value);
        }
        added0(diff) {
            return this.map(value => value + diff);
        }
        added1(diff) {
            return this.merged(diff, (a, b) => a + b);
        }
        multed0(mult) {
            return this.map(value => value * mult);
        }
        multed1(mults) {
            return this.merged(mults, (a, b) => a * b);
        }
        expanded1(point) {
            return this.merged(point, (range, value) => range.expanded0(value));
        }
        expanded2(point) {
            return this.merged(point, (range1, range2) => {
                let next = range1;
                const Range = range1.constructor;
                if (range1[0] > range2[0])
                    next = new Range(range2[0], next.max);
                if (range1[1] < range2[1])
                    next = new Range(next.min, range2[1]);
                return next;
            });
        }
    }
    $.$mol_vector = $mol_vector;
    class $mol_vector_1d extends $mol_vector {
        get x() { return this[0]; }
    }
    $.$mol_vector_1d = $mol_vector_1d;
    class $mol_vector_2d extends $mol_vector {
        get x() { return this[0]; }
        get y() { return this[1]; }
    }
    $.$mol_vector_2d = $mol_vector_2d;
    class $mol_vector_3d extends $mol_vector {
        get x() { return this[0]; }
        get y() { return this[1]; }
        get z() { return this[2]; }
    }
    $.$mol_vector_3d = $mol_vector_3d;
    class $mol_vector_range extends $mol_vector {
        get min() { return this[0]; }
        get max() { return this[1]; }
        get inversed() {
            return new this.constructor(this.max, this.min);
        }
        expanded0(value) {
            const Range = this.constructor;
            let range = this;
            if (value > range.max)
                range = new Range(range.min, value);
            if (value < range.min)
                range = new Range(value, range.max);
            return range;
        }
    }
    $.$mol_vector_range = $mol_vector_range;
    $.$mol_vector_range_full = new $mol_vector_range(Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY);
    class $mol_vector_matrix extends $mol_vector {
        added2(diff) {
            return this.merged(diff, (a, b) => a.map((a2, index) => a2 + b[index]));
        }
        multed2(diff) {
            return this.merged(diff, (a, b) => a.map((a2, index) => a2 * b[index]));
        }
    }
    $.$mol_vector_matrix = $mol_vector_matrix;
})($ || ($ = {}));
//vector.js.map
;
"use strict";
var $;
(function ($) {
    class $piterjs_place extends $.$piterjs_model {
        static uri() {
            return 'piterjs/place/place.data.tree';
        }
        title() {
            return $.$mol_data_string(this.data().title);
        }
        description() {
            return $.$mol_data_string(this.data().description);
        }
        notes() {
            return $.$mol_data_optional($.$mol_data_string)(this.data().notes) || '';
        }
        site() {
            return $.$mol_data_wrapper($.$mol_data_string, URL)(this.data().site);
        }
        address() {
            return $.$mol_data_optional($.$mol_data_string)(this.data().address) ?? '';
        }
        coords() {
            const coords = $.$mol_data_optional($.$mol_data_array($.$mol_data_number))(this.data().coords);
            if (!coords)
                return null;
            return new $.$mol_vector_2d(coords[0], coords[1]);
        }
        route() {
            return $.$mol_data_optional($.$mol_data_string)(this.data().route) ?? '';
        }
        colors() {
            return $.$mol_data_array($.$mol_data_string)(this.data().colors);
        }
        meetups() {
            return this.$.$piterjs_meetup.all().filter(speech => speech.place() === this);
        }
    }
    __decorate([
        $.$mol_mem
    ], $piterjs_place.prototype, "title", null);
    __decorate([
        $.$mol_mem
    ], $piterjs_place.prototype, "description", null);
    __decorate([
        $.$mol_mem
    ], $piterjs_place.prototype, "notes", null);
    __decorate([
        $.$mol_mem
    ], $piterjs_place.prototype, "site", null);
    __decorate([
        $.$mol_mem
    ], $piterjs_place.prototype, "address", null);
    __decorate([
        $.$mol_mem
    ], $piterjs_place.prototype, "coords", null);
    __decorate([
        $.$mol_mem
    ], $piterjs_place.prototype, "route", null);
    __decorate([
        $.$mol_mem
    ], $piterjs_place.prototype, "colors", null);
    __decorate([
        $.$mol_mem
    ], $piterjs_place.prototype, "meetups", null);
    $.$piterjs_place = $piterjs_place;
})($ || ($ = {}));
//place.js.map
;
"use strict";
var $;
(function ($) {
    class $piterjs_meetup extends $.$piterjs_model {
        static uri() {
            return 'piterjs/meetup/meetup.data.tree';
        }
        start() {
            return new $.$mol_time_moment($.$mol_data_string(this.data().start));
        }
        title() {
            return $.$mol_data_string(this.data().title);
        }
        description() {
            return $.$mol_data_string(this.data().description);
        }
        video() {
            return $.$mol_data_optional($.$mol_data_string)(this.data().video) || null;
        }
        speeches() {
            return this.$.$piterjs_speech.list()(this.data().speeches);
        }
        place() {
            return this.$.$piterjs_place.item(this.data().place);
        }
        afterparty() {
            return $.$mol_data_optional($.$mol_data_string)(this.data().afterparty) || '';
        }
    }
    __decorate([
        $.$mol_mem
    ], $piterjs_meetup.prototype, "start", null);
    __decorate([
        $.$mol_mem
    ], $piterjs_meetup.prototype, "title", null);
    __decorate([
        $.$mol_mem
    ], $piterjs_meetup.prototype, "description", null);
    __decorate([
        $.$mol_mem
    ], $piterjs_meetup.prototype, "video", null);
    __decorate([
        $.$mol_mem
    ], $piterjs_meetup.prototype, "speeches", null);
    __decorate([
        $.$mol_mem
    ], $piterjs_meetup.prototype, "place", null);
    __decorate([
        $.$mol_mem
    ], $piterjs_meetup.prototype, "afterparty", null);
    $.$piterjs_meetup = $piterjs_meetup;
})($ || ($ = {}));
//meetup.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_link extends $.$mol_view {
        dom_name() {
            return "a";
        }
        attr() {
            return {
                ...super.attr(),
                href: this.uri(),
                title: this.hint(),
                target: this.target(),
                download: this.file_name(),
                mol_link_current: this.current()
            };
        }
        sub() {
            return [
                this.title()
            ];
        }
        arg() {
            return {};
        }
        event() {
            return {
                ...super.event(),
                click: (event) => this.click(event)
            };
        }
        uri() {
            return "";
        }
        hint() {
            return "";
        }
        target() {
            return "_self";
        }
        file_name() {
            return "";
        }
        current() {
            return false;
        }
        event_click(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        click(event) {
            return this.event_click(event);
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_link.prototype, "event_click", null);
    $.$mol_link = $mol_link;
})($ || ($ = {}));
//link.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_state_arg extends $.$mol_object {
        constructor(prefix = '') {
            super();
            this.prefix = prefix;
        }
        static href(next) {
            return next || process.argv.slice(2).join(' ');
        }
        static dict(next) {
            if (next !== void 0)
                this.href(this.make_link(next));
            var href = this.href();
            var chunks = href.split(' ');
            var params = {};
            chunks.forEach(chunk => {
                if (!chunk)
                    return;
                var vals = chunk.split('=').map(decodeURIComponent);
                params[vals.shift()] = vals.join('=');
            });
            return params;
        }
        static value(key, next) {
            if (next === void 0)
                return this.dict()[key] || null;
            this.href(this.link({ [key]: next }));
            return next;
        }
        static link(next) {
            var params = {};
            var prev = this.dict();
            for (var key in prev) {
                params[key] = prev[key];
            }
            for (var key in next) {
                params[key] = next[key];
            }
            return this.make_link(params);
        }
        static make_link(next) {
            var chunks = [];
            for (var key in next) {
                if (null == next[key])
                    continue;
                chunks.push([key].concat(next[key]).map(encodeURIComponent).join('='));
            }
            return chunks.join(' ');
        }
        value(key, next) {
            return this.constructor.value(this.prefix + key, next);
        }
        sub(postfix) {
            return new this.constructor(this.prefix + postfix + '.');
        }
        link(next) {
            var prefix = this.prefix;
            var dict = {};
            for (var key in next) {
                dict[prefix + key] = next[key];
            }
            return this.constructor.link(dict);
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_state_arg, "href", null);
    __decorate([
        $.$mol_mem
    ], $mol_state_arg, "dict", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_state_arg, "value", null);
    $.$mol_state_arg = $mol_state_arg;
})($ || ($ = {}));
//arg.node.js.map
;
"use strict";
var $;
(function ($) {
    const { rem } = $.$mol_style_unit;
    $.$mol_style_define($.$mol_link, {
        textDecoration: 'none',
        color: $.$mol_theme.control,
        stroke: 'currentcolor',
        cursor: 'pointer',
        padding: $.$mol_gap.text,
        boxSizing: 'border-box',
        position: 'relative',
        minWidth: rem(2.5),
        ':hover': {
            background: {
                color: $.$mol_theme.hover,
            },
        },
        ':focus': {
            outline: 'none',
            background: {
                color: $.$mol_theme.hover,
            }
        },
        ':focus-within': {
            outline: 'none',
            background: {
                color: $.$mol_theme.hover,
            }
        },
        '@': {
            mol_link_current: {
                'true': {
                    background: {
                        color: $.$mol_theme.back,
                    },
                    color: $.$mol_theme.text,
                    textShadow: '0 0',
                }
            }
        },
    });
})($ || ($ = {}));
//link.view.css.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_link extends $.$mol_link {
            uri() {
                const arg = this.arg();
                const uri = new this.$.$mol_state_arg(this.state_key()).link(arg);
                if (uri !== this.$.$mol_state_arg.href())
                    return uri;
                const arg2 = {};
                for (let i in arg)
                    arg2[i] = null;
                return new this.$.$mol_state_arg(this.state_key()).link(arg2);
            }
            uri_native() {
                const base = this.$.$mol_state_arg.href();
                return new URL(this.uri(), base);
            }
            current() {
                const base = this.$.$mol_state_arg.href();
                const target = this.uri_native().toString();
                if (base === target)
                    return true;
                const args = this.arg();
                const keys = Object.keys(args).filter(key => args[key] != null);
                if (keys.length === 0)
                    return false;
                for (const key of keys) {
                    if (this.$.$mol_state_arg.value(key) !== args[key])
                        return false;
                }
                return true;
            }
            event_click(event) {
                if (!event || event.defaultPrevented)
                    return;
                this.focused(false);
            }
            file_name() {
                return null;
            }
            minimal_height() {
                return Math.max(super.minimal_height(), 40);
            }
            target() {
                return (this.uri_native().origin === $.$mol_dom_context.location.origin) ? '_self' : '_blank';
            }
        }
        __decorate([
            $.$mol_mem
        ], $mol_link.prototype, "uri", null);
        __decorate([
            $.$mol_mem
        ], $mol_link.prototype, "uri_native", null);
        __decorate([
            $.$mol_mem
        ], $mol_link.prototype, "current", null);
        $$.$mol_link = $mol_link;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//link.view.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_image2 extends $.$mol_view {
        links() {
            return [];
        }
        aspect() {
            return 1;
        }
        sub() {
            return [
                this.Content()
            ];
        }
        height() {
            return "100%";
        }
        background() {
            return "";
        }
        Content() {
            const obj = new this.$.$mol_view();
            obj.style = () => ({
                paddingTop: this.height(),
                backgroundImage: this.background()
            });
            return obj;
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_image2.prototype, "Content", null);
    $.$mol_image2 = $mol_image2;
})($ || ($ = {}));
//image2.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_attach("mol/image2/image2.view.css", "[mol_image2] {\n\tflex: 0 1 auto;\n\tmax-width: 100%;\n\tbox-shadow: 0 0 0 1px var(--mol_theme_line);\n\tborder-radius: var(--mol_skin_round);\n\toverflow: hidden;\n}\n\n[mol_image2_content] {\n\tdisplay: block;\n\tbackground-size: cover;\n\tbackground-position: top center;\n\tflex: auto;\n}\n");
})($ || ($ = {}));
//image2.view.css.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_image2 extends $.$mol_image2 {
            background() {
                return this.links().map(link => `url("${link}")`).join(' , ');
            }
            height() {
                return `${100 / this.aspect()}%`;
            }
        }
        __decorate([
            $.$mol_mem
        ], $mol_image2.prototype, "background", null);
        __decorate([
            $.$mol_mem
        ], $mol_image2.prototype, "height", null);
        $$.$mol_image2 = $mol_image2;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//image2.view.js.map
;
"use strict";
var $;
(function ($) {
    class $piterjs_image extends $.$mol_image2 {
        links() {
            return [
                this.link(),
                "piterjs/logo/logo.svg"
            ];
        }
        link() {
            return "";
        }
    }
    $.$piterjs_image = $piterjs_image;
})($ || ($ = {}));
//image.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_list extends $.$mol_view {
        render_visible_only() {
            return true;
        }
        render_over() {
            return 0;
        }
        sub() {
            return this.rows();
        }
        Empty() {
            const obj = new this.$.$mol_view();
            return obj;
        }
        Gap_before() {
            const obj = new this.$.$mol_view();
            obj.style = () => ({
                paddingTop: this.gap_before()
            });
            return obj;
        }
        Gap_after() {
            const obj = new this.$.$mol_view();
            obj.style = () => ({
                paddingTop: this.gap_after()
            });
            return obj;
        }
        view_window() {
            return [
                0,
                0
            ];
        }
        rows() {
            return [];
        }
        gap_before() {
            return 0;
        }
        gap_after() {
            return 0;
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_list.prototype, "Empty", null);
    __decorate([
        $.$mol_mem
    ], $mol_list.prototype, "Gap_before", null);
    __decorate([
        $.$mol_mem
    ], $mol_list.prototype, "Gap_after", null);
    $.$mol_list = $mol_list;
})($ || ($ = {}));
//list.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_support_css_overflow_anchor() {
        return this.$mol_dom_context.CSS?.supports('overflow-anchor:auto') ?? false;
    }
    $.$mol_support_css_overflow_anchor = $mol_support_css_overflow_anchor;
})($ || ($ = {}));
//css.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_attach("mol/list/list.view.css", "[mol_list] {\n\twill-change: contents;\n\tdisplay: block;\n\tflex-direction: column;\n\tflex-shrink: 0;\n\t/* display: flex;\n\talign-items: stretch;\n\talign-content: stretch; */\n\ttransition: none;\n\tmin-height: .5rem;\n}\n\n[mol_list_gap_before] ,\n[mol_list_gap_after] {\n\tdisplay: block !important;\n\tflex: none;\n\ttransition: none;\n\toverflow-anchor: none;\n}\n \n[mol_list] > * {\n\tdisplay: flex;\n}\n");
})($ || ($ = {}));
//list.view.css.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_list extends $.$mol_list {
            sub() {
                const rows = this.rows();
                return (rows.length === 0) ? [this.Empty()] : rows;
            }
            render_visible_only() {
                return this.$.$mol_support_css_overflow_anchor();
            }
            view_window() {
                const kids = this.sub();
                if (kids.length < 3)
                    return [0, kids.length];
                if (this.$.$mol_print.active())
                    return [0, kids.length];
                let [min, max] = $.$mol_mem_cached(() => this.view_window()) ?? [0, 0];
                let max2 = max = Math.min(max, kids.length);
                let min2 = min = Math.max(0, Math.min(min, max - 1));
                const anchoring = this.render_visible_only();
                const window_height = this.$.$mol_window.size().height + 40;
                const over = Math.ceil(window_height * this.render_over());
                const limit_top = -over;
                const limit_bottom = window_height + over;
                const rect = this.view_rect();
                const gap_before = $.$mol_mem_cached(() => this.gap_before()) ?? 0;
                const gap_after = $.$mol_mem_cached(() => this.gap_after()) ?? 0;
                let top = Math.ceil(rect?.top ?? 0) + gap_before;
                let bottom = Math.ceil(rect?.bottom ?? 0) - gap_after;
                if (top <= limit_top && bottom >= limit_bottom) {
                    return [min2, max2];
                }
                if (anchoring && ((bottom < limit_top) || (top > limit_bottom))) {
                    min = 0;
                    top = Math.ceil(rect?.top ?? 0);
                    while (min < (kids.length - 1)) {
                        const height = kids[min].minimal_height();
                        if (top + height >= limit_top)
                            break;
                        top += height;
                        ++min;
                    }
                    min2 = min;
                    max2 = max = min;
                    bottom = top;
                }
                let top2 = top;
                let bottom2 = bottom;
                if (anchoring && (top <= limit_top) && (bottom2 < limit_bottom)) {
                    min2 = max;
                    top2 = bottom;
                }
                if ((bottom >= limit_bottom) && (top2 >= limit_top)) {
                    max2 = min;
                    bottom2 = top;
                }
                while (bottom2 < limit_bottom && max2 < kids.length) {
                    bottom2 += kids[max2].minimal_height();
                    ++max2;
                }
                while (anchoring && ((top2 >= limit_top) && (min2 > 0))) {
                    --min2;
                    top2 -= kids[min2].minimal_height();
                }
                return [min2, max2];
            }
            gap_before() {
                const skipped = this.sub().slice(0, this.view_window()[0]);
                return Math.max(0, skipped.reduce((sum, view) => sum + view.minimal_height(), 0));
            }
            gap_after() {
                const skipped = this.sub().slice(this.view_window()[1]);
                return Math.max(0, skipped.reduce((sum, view) => sum + view.minimal_height(), 0));
            }
            sub_visible() {
                return [
                    ...this.gap_before() ? [this.Gap_before()] : [],
                    ...this.sub().slice(...this.view_window()),
                    ...this.gap_after() ? [this.Gap_after()] : [],
                ];
            }
            minimal_height() {
                return this.sub().reduce((sum, view) => {
                    try {
                        return sum + view.minimal_height();
                    }
                    catch (error) {
                        if (error instanceof Promise) {
                            $.$mol_atom2.current.subscribe(error);
                        }
                        else if ($.$mol_fail_catch(error)) {
                            console.error(error);
                        }
                        return sum;
                    }
                }, 0);
            }
            force_render(path) {
                const kids = this.rows();
                const index = kids.findIndex(item => path.has(item));
                if (index >= 0) {
                    const win = this.view_window();
                    if (index < win[0] || index >= win[1]) {
                        $.$mol_mem_cached(() => this.view_window(), [index, index + 1]);
                    }
                    kids[index].force_render(path);
                }
            }
        }
        __decorate([
            $.$mol_mem
        ], $mol_list.prototype, "sub", null);
        __decorate([
            $.$mol_mem
        ], $mol_list.prototype, "view_window", null);
        __decorate([
            $.$mol_mem
        ], $mol_list.prototype, "gap_before", null);
        __decorate([
            $.$mol_mem
        ], $mol_list.prototype, "gap_after", null);
        __decorate([
            $.$mol_mem
        ], $mol_list.prototype, "sub_visible", null);
        __decorate([
            $.$mol_mem
        ], $mol_list.prototype, "minimal_height", null);
        $$.$mol_list = $mol_list;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//list.view.js.map
;
"use strict";
var $;
(function ($) {
    class $piterjs_speech_snippet extends $.$mol_link {
        arg() {
            return {
                speech: this.id(),
                place: null,
                video: null
            };
        }
        speech() {
            const obj = new this.$.$piterjs_speech();
            return obj;
        }
        sub() {
            return [
                this.Photo(),
                this.Info()
            ];
        }
        id() {
            return "";
        }
        photo() {
            return "";
        }
        Photo() {
            const obj = new this.$.$piterjs_image();
            obj.link = () => this.photo();
            return obj;
        }
        speaker_title() {
            return "";
        }
        Speaker_title() {
            const obj = new this.$.$mol_view();
            obj.sub = () => [
                this.speaker_title()
            ];
            return obj;
        }
        time() {
            return "";
        }
        Time() {
            const obj = new this.$.$mol_view();
            obj.sub = () => [
                this.time()
            ];
            return obj;
        }
        Addon() {
            const obj = new this.$.$mol_view();
            obj.sub = () => [
                this.Speaker_title(),
                this.Time()
            ];
            return obj;
        }
        title() {
            return "";
        }
        Title() {
            const obj = new this.$.$mol_view();
            obj.sub = () => [
                this.title()
            ];
            return obj;
        }
        Info() {
            const obj = new this.$.$mol_list();
            obj.sub = () => [
                this.Addon(),
                this.Title()
            ];
            return obj;
        }
    }
    __decorate([
        $.$mol_mem
    ], $piterjs_speech_snippet.prototype, "speech", null);
    __decorate([
        $.$mol_mem
    ], $piterjs_speech_snippet.prototype, "Photo", null);
    __decorate([
        $.$mol_mem
    ], $piterjs_speech_snippet.prototype, "Speaker_title", null);
    __decorate([
        $.$mol_mem
    ], $piterjs_speech_snippet.prototype, "Time", null);
    __decorate([
        $.$mol_mem
    ], $piterjs_speech_snippet.prototype, "Addon", null);
    __decorate([
        $.$mol_mem
    ], $piterjs_speech_snippet.prototype, "Title", null);
    __decorate([
        $.$mol_mem
    ], $piterjs_speech_snippet.prototype, "Info", null);
    $.$piterjs_speech_snippet = $piterjs_speech_snippet;
})($ || ($ = {}));
//snippet.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        const { rem } = $.$mol_style_unit;
        $.$mol_style_define($$.$piterjs_speech_snippet, {
            display: 'flex',
            padding: rem(.25),
            alignItems: 'flex-start',
            Photo: {
                width: rem(6),
                margin: rem(.5),
            },
            Info: {
                flex: {
                    grow: 1,
                    shrink: 1,
                    basis: rem(16),
                },
                padding: rem(.75),
            },
            Title: {
                display: 'block',
                padding: [rem(.25), rem(.5)],
                fontWeight: '600',
            },
            Addon: {
                display: 'flex',
            },
            Speaker_title: {
                padding: [rem(.25), rem(.5)],
                color: $.$mol_theme.text,
                flex: {
                    grow: 1,
                    shrink: 1,
                    basis: 'auto',
                },
            },
            Time: {
                padding: [rem(.25), rem(.5)],
                color: $.$mol_theme.text,
                whiteSpace: 'nowrap',
            },
        });
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//snippet.view.css.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $piterjs_speech_snippet extends $.$piterjs_speech_snippet {
            id() {
                return this.speech().id();
            }
            photo() {
                return this.speech().speaker().photo();
            }
            speaker_title() {
                return this.speech().speaker().title();
            }
            title() {
                return this.speech().title();
            }
            time() {
                return this.speech().interval().start.toString('hh:mm');
            }
        }
        __decorate([
            $.$mol_mem
        ], $piterjs_speech_snippet.prototype, "time", null);
        $$.$piterjs_speech_snippet = $piterjs_speech_snippet;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//snippet.view.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_svg extends $.$mol_view {
        dom_name() {
            return "svg";
        }
        dom_name_space() {
            return "http://www.w3.org/2000/svg";
        }
        font_size() {
            return 16;
        }
        font_family() {
            return "";
        }
    }
    $.$mol_svg = $mol_svg;
})($ || ($ = {}));
//svg.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_after_work extends $.$mol_after_timeout {
    }
    $.$mol_after_work = $mol_after_work;
})($ || ($ = {}));
//work.node.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_state_time extends $.$mol_object {
        static now(precision = 0, next) {
            if (precision > 0) {
                new $.$mol_after_timeout(precision, $.$mol_atom2.current.fresh);
            }
            else {
                new $.$mol_after_work(16, $.$mol_atom2.current.fresh);
            }
            return Date.now();
        }
    }
    __decorate([
        $.$mol_mem_key
    ], $mol_state_time, "now", null);
    $.$mol_state_time = $mol_state_time;
})($ || ($ = {}));
//time.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_svg extends $.$mol_svg {
            computed_style() {
                const win = this.$.$mol_dom_context;
                const style = win.getComputedStyle(this.dom_node());
                if (!style['font-size'])
                    $.$mol_state_time.now();
                return style;
            }
            font_size() {
                return parseInt(this.computed_style()['font-size']) || 16;
            }
            font_family() {
                return this.computed_style()['font-family'];
            }
        }
        __decorate([
            $.$mol_mem
        ], $mol_svg.prototype, "computed_style", null);
        __decorate([
            $.$mol_mem
        ], $mol_svg.prototype, "font_size", null);
        __decorate([
            $.$mol_mem
        ], $mol_svg.prototype, "font_family", null);
        $$.$mol_svg = $mol_svg;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//svg.view.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_svg_root extends $.$mol_svg {
        dom_name() {
            return "svg";
        }
        attr() {
            return {
                ...super.attr(),
                viewBox: this.view_box(),
                preserveAspectRatio: this.aspect()
            };
        }
        view_box() {
            return "0 0 100 100";
        }
        aspect() {
            return "xMidYMid";
        }
    }
    $.$mol_svg_root = $mol_svg_root;
})($ || ($ = {}));
//root.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_attach("mol/svg/root/root.view.css", "[mol_svg_root] {\n\toverflow: hidden;\n}\n");
})($ || ($ = {}));
//root.view.css.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_svg_path extends $.$mol_svg {
        dom_name() {
            return "path";
        }
        attr() {
            return {
                ...super.attr(),
                d: this.geometry()
            };
        }
        geometry() {
            return "";
        }
    }
    $.$mol_svg_path = $mol_svg_path;
})($ || ($ = {}));
//path.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_icon extends $.$mol_svg_root {
        view_box() {
            return "0 0 24 24";
        }
        minimal_width() {
            return 16;
        }
        minimal_height() {
            return 16;
        }
        sub() {
            return [
                this.Path()
            ];
        }
        path() {
            return "";
        }
        Path() {
            const obj = new this.$.$mol_svg_path();
            obj.geometry = () => this.path();
            return obj;
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_icon.prototype, "Path", null);
    $.$mol_icon = $mol_icon;
})($ || ($ = {}));
//icon.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_attach("mol/icon/icon.view.css", "[mol_icon] {\n\tfill: currentColor;\n\tstroke: none;\n\twidth: 1em;\n\theight: 1em;\n\tflex: 0 0 auto;\n\tvertical-align: top;\n\tmargin: .25em 0;\n\tdisplay: inline-block;\n}\n");
})($ || ($ = {}));
//icon.view.css.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_icon_cross extends $.$mol_icon {
        path() {
            return "M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z";
        }
    }
    $.$mol_icon_cross = $mol_icon_cross;
})($ || ($ = {}));
//cross.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_float extends $.$mol_view {
        style() {
            return {
                ...super.style(),
                minHeight: "auto"
            };
        }
    }
    $.$mol_float = $mol_float;
})($ || ($ = {}));
//float.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_attach("mol/float/float.view.css", "[mol_float] {\n\tposition: sticky;\n\ttop: 0;\n\tleft: 0;\n\tz-index: 1;\n\topacity: 1;\n\ttransition: opacity .25s ease-in;\n\tdisplay: block;\n\tbackground: var(--mol_theme_back);\n\tbox-shadow: 0 0 .5rem hsla(0,0%,0%,.25);\n}\n\n");
})($ || ($ = {}));
//float.view.css.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_speck extends $.$mol_view {
        attr() {
            return {
                ...super.attr(),
                mol_theme: "$mol_theme_accent"
            };
        }
        style() {
            return {
                ...super.style(),
                minHeight: "1em"
            };
        }
        sub() {
            return [
                this.value()
            ];
        }
        value() {
            return null;
        }
    }
    $.$mol_speck = $mol_speck;
})($ || ($ = {}));
//speck.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_attach("mol/speck/speck.view.css", "[mol_speck] {\n\tfont-size: .75rem;\n\tborder-radius: 1rem;\n\tmargin: -.75em;\n\talign-self: flex-start;\n\tmin-height: 1em;\n\tmin-width: .5em;\n\tvertical-align: sub;\n\tpadding: .25em .5em;\n\tposition: absolute;\n\tz-index: 2;\n    text-align: center;\n    line-height: 1;\n    display: inline-block;\n\ttext-shadow: 1px 1px 0 black;\n}\n");
})($ || ($ = {}));
//speck.view.css.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_button extends $.$mol_view {
        enabled() {
            return true;
        }
        minimal_height() {
            return 40;
        }
        click(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        event_click(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        event() {
            return {
                ...super.event(),
                click: (event) => this.event_activate(event),
                keydown: (event) => this.event_key_press(event)
            };
        }
        attr() {
            return {
                ...super.attr(),
                disabled: this.disabled(),
                role: "button",
                tabindex: this.tab_index(),
                title: this.hint_or_error()
            };
        }
        sub() {
            return [
                this.title()
            ];
        }
        Speck() {
            const obj = new this.$.$mol_speck();
            return obj;
        }
        event_activate(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        event_key_press(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        disabled() {
            return false;
        }
        tab_index() {
            return 0;
        }
        hint() {
            return "";
        }
        hint_or_error() {
            return this.hint();
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_button.prototype, "click", null);
    __decorate([
        $.$mol_mem
    ], $mol_button.prototype, "event_click", null);
    __decorate([
        $.$mol_mem
    ], $mol_button.prototype, "Speck", null);
    __decorate([
        $.$mol_mem
    ], $mol_button.prototype, "event_activate", null);
    __decorate([
        $.$mol_mem
    ], $mol_button.prototype, "event_key_press", null);
    $.$mol_button = $mol_button;
})($ || ($ = {}));
//button.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    let $mol_keyboard_code;
    (function ($mol_keyboard_code) {
        $mol_keyboard_code[$mol_keyboard_code["backspace"] = 8] = "backspace";
        $mol_keyboard_code[$mol_keyboard_code["tab"] = 9] = "tab";
        $mol_keyboard_code[$mol_keyboard_code["enter"] = 13] = "enter";
        $mol_keyboard_code[$mol_keyboard_code["shift"] = 16] = "shift";
        $mol_keyboard_code[$mol_keyboard_code["ctrl"] = 17] = "ctrl";
        $mol_keyboard_code[$mol_keyboard_code["alt"] = 18] = "alt";
        $mol_keyboard_code[$mol_keyboard_code["pause"] = 19] = "pause";
        $mol_keyboard_code[$mol_keyboard_code["capsLock"] = 20] = "capsLock";
        $mol_keyboard_code[$mol_keyboard_code["escape"] = 27] = "escape";
        $mol_keyboard_code[$mol_keyboard_code["space"] = 32] = "space";
        $mol_keyboard_code[$mol_keyboard_code["pageUp"] = 33] = "pageUp";
        $mol_keyboard_code[$mol_keyboard_code["pageDown"] = 34] = "pageDown";
        $mol_keyboard_code[$mol_keyboard_code["end"] = 35] = "end";
        $mol_keyboard_code[$mol_keyboard_code["home"] = 36] = "home";
        $mol_keyboard_code[$mol_keyboard_code["left"] = 37] = "left";
        $mol_keyboard_code[$mol_keyboard_code["up"] = 38] = "up";
        $mol_keyboard_code[$mol_keyboard_code["right"] = 39] = "right";
        $mol_keyboard_code[$mol_keyboard_code["down"] = 40] = "down";
        $mol_keyboard_code[$mol_keyboard_code["insert"] = 45] = "insert";
        $mol_keyboard_code[$mol_keyboard_code["delete"] = 46] = "delete";
        $mol_keyboard_code[$mol_keyboard_code["key0"] = 48] = "key0";
        $mol_keyboard_code[$mol_keyboard_code["key1"] = 49] = "key1";
        $mol_keyboard_code[$mol_keyboard_code["key2"] = 50] = "key2";
        $mol_keyboard_code[$mol_keyboard_code["key3"] = 51] = "key3";
        $mol_keyboard_code[$mol_keyboard_code["key4"] = 52] = "key4";
        $mol_keyboard_code[$mol_keyboard_code["key5"] = 53] = "key5";
        $mol_keyboard_code[$mol_keyboard_code["key6"] = 54] = "key6";
        $mol_keyboard_code[$mol_keyboard_code["key7"] = 55] = "key7";
        $mol_keyboard_code[$mol_keyboard_code["key8"] = 56] = "key8";
        $mol_keyboard_code[$mol_keyboard_code["key9"] = 57] = "key9";
        $mol_keyboard_code[$mol_keyboard_code["A"] = 65] = "A";
        $mol_keyboard_code[$mol_keyboard_code["B"] = 66] = "B";
        $mol_keyboard_code[$mol_keyboard_code["C"] = 67] = "C";
        $mol_keyboard_code[$mol_keyboard_code["D"] = 68] = "D";
        $mol_keyboard_code[$mol_keyboard_code["E"] = 69] = "E";
        $mol_keyboard_code[$mol_keyboard_code["F"] = 70] = "F";
        $mol_keyboard_code[$mol_keyboard_code["G"] = 71] = "G";
        $mol_keyboard_code[$mol_keyboard_code["H"] = 72] = "H";
        $mol_keyboard_code[$mol_keyboard_code["I"] = 73] = "I";
        $mol_keyboard_code[$mol_keyboard_code["J"] = 74] = "J";
        $mol_keyboard_code[$mol_keyboard_code["K"] = 75] = "K";
        $mol_keyboard_code[$mol_keyboard_code["L"] = 76] = "L";
        $mol_keyboard_code[$mol_keyboard_code["M"] = 77] = "M";
        $mol_keyboard_code[$mol_keyboard_code["N"] = 78] = "N";
        $mol_keyboard_code[$mol_keyboard_code["O"] = 79] = "O";
        $mol_keyboard_code[$mol_keyboard_code["P"] = 80] = "P";
        $mol_keyboard_code[$mol_keyboard_code["Q"] = 81] = "Q";
        $mol_keyboard_code[$mol_keyboard_code["R"] = 82] = "R";
        $mol_keyboard_code[$mol_keyboard_code["S"] = 83] = "S";
        $mol_keyboard_code[$mol_keyboard_code["T"] = 84] = "T";
        $mol_keyboard_code[$mol_keyboard_code["U"] = 85] = "U";
        $mol_keyboard_code[$mol_keyboard_code["V"] = 86] = "V";
        $mol_keyboard_code[$mol_keyboard_code["W"] = 87] = "W";
        $mol_keyboard_code[$mol_keyboard_code["X"] = 88] = "X";
        $mol_keyboard_code[$mol_keyboard_code["Y"] = 89] = "Y";
        $mol_keyboard_code[$mol_keyboard_code["Z"] = 90] = "Z";
        $mol_keyboard_code[$mol_keyboard_code["metaLeft"] = 91] = "metaLeft";
        $mol_keyboard_code[$mol_keyboard_code["metaRight"] = 92] = "metaRight";
        $mol_keyboard_code[$mol_keyboard_code["select"] = 93] = "select";
        $mol_keyboard_code[$mol_keyboard_code["numpad0"] = 96] = "numpad0";
        $mol_keyboard_code[$mol_keyboard_code["numpad1"] = 97] = "numpad1";
        $mol_keyboard_code[$mol_keyboard_code["numpad2"] = 98] = "numpad2";
        $mol_keyboard_code[$mol_keyboard_code["numpad3"] = 99] = "numpad3";
        $mol_keyboard_code[$mol_keyboard_code["numpad4"] = 100] = "numpad4";
        $mol_keyboard_code[$mol_keyboard_code["numpad5"] = 101] = "numpad5";
        $mol_keyboard_code[$mol_keyboard_code["numpad6"] = 102] = "numpad6";
        $mol_keyboard_code[$mol_keyboard_code["numpad7"] = 103] = "numpad7";
        $mol_keyboard_code[$mol_keyboard_code["numpad8"] = 104] = "numpad8";
        $mol_keyboard_code[$mol_keyboard_code["numpad9"] = 105] = "numpad9";
        $mol_keyboard_code[$mol_keyboard_code["multiply"] = 106] = "multiply";
        $mol_keyboard_code[$mol_keyboard_code["add"] = 107] = "add";
        $mol_keyboard_code[$mol_keyboard_code["subtract"] = 109] = "subtract";
        $mol_keyboard_code[$mol_keyboard_code["decimal"] = 110] = "decimal";
        $mol_keyboard_code[$mol_keyboard_code["divide"] = 111] = "divide";
        $mol_keyboard_code[$mol_keyboard_code["F1"] = 112] = "F1";
        $mol_keyboard_code[$mol_keyboard_code["F2"] = 113] = "F2";
        $mol_keyboard_code[$mol_keyboard_code["F3"] = 114] = "F3";
        $mol_keyboard_code[$mol_keyboard_code["F4"] = 115] = "F4";
        $mol_keyboard_code[$mol_keyboard_code["F5"] = 116] = "F5";
        $mol_keyboard_code[$mol_keyboard_code["F6"] = 117] = "F6";
        $mol_keyboard_code[$mol_keyboard_code["F7"] = 118] = "F7";
        $mol_keyboard_code[$mol_keyboard_code["F8"] = 119] = "F8";
        $mol_keyboard_code[$mol_keyboard_code["F9"] = 120] = "F9";
        $mol_keyboard_code[$mol_keyboard_code["F10"] = 121] = "F10";
        $mol_keyboard_code[$mol_keyboard_code["F11"] = 122] = "F11";
        $mol_keyboard_code[$mol_keyboard_code["F12"] = 123] = "F12";
        $mol_keyboard_code[$mol_keyboard_code["numLock"] = 144] = "numLock";
        $mol_keyboard_code[$mol_keyboard_code["scrollLock"] = 145] = "scrollLock";
        $mol_keyboard_code[$mol_keyboard_code["semicolon"] = 186] = "semicolon";
        $mol_keyboard_code[$mol_keyboard_code["equals"] = 187] = "equals";
        $mol_keyboard_code[$mol_keyboard_code["comma"] = 188] = "comma";
        $mol_keyboard_code[$mol_keyboard_code["dash"] = 189] = "dash";
        $mol_keyboard_code[$mol_keyboard_code["period"] = 190] = "period";
        $mol_keyboard_code[$mol_keyboard_code["forwardSlash"] = 191] = "forwardSlash";
        $mol_keyboard_code[$mol_keyboard_code["graveAccent"] = 192] = "graveAccent";
        $mol_keyboard_code[$mol_keyboard_code["bracketOpen"] = 219] = "bracketOpen";
        $mol_keyboard_code[$mol_keyboard_code["slashBack"] = 220] = "slashBack";
        $mol_keyboard_code[$mol_keyboard_code["slashBackLeft"] = 226] = "slashBackLeft";
        $mol_keyboard_code[$mol_keyboard_code["bracketClose"] = 221] = "bracketClose";
        $mol_keyboard_code[$mol_keyboard_code["quoteSingle"] = 222] = "quoteSingle";
    })($mol_keyboard_code = $.$mol_keyboard_code || ($.$mol_keyboard_code = {}));
})($ || ($ = {}));
//code.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_attach("mol/button/button.view.css", "[mol_button] {\n\tborder: none;\n\tfont: inherit;\n\tdisplay: inline-flex;\n\tflex-shrink: 0;\n\ttext-decoration: inherit;\n\tcursor: inherit;\n\tposition: relative;\n\tbox-sizing: border-box;\n\tword-break: normal;\n\tcursor: default;\n\tuser-select: none;\n\tmin-width: 2.5rem;\n}\n[mol_button]:focus {\n\toutline: none;\n}\n");
})($ || ($ = {}));
//button.view.css.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_button extends $.$mol_button {
            fiber(next = null) { return next; }
            disabled() {
                return !this.enabled();
            }
            event_activate(next) {
                if (!next)
                    return;
                if (!this.enabled())
                    return;
                this.fiber($.$mol_fiber.current);
                this.event_click(next);
                this.click(next);
                if (this.fiber() === $.$mol_fiber.current) {
                    this.fiber(null);
                }
            }
            event_key_press(event) {
                if (event.keyCode === $.$mol_keyboard_code.enter) {
                    return this.event_activate(event);
                }
            }
            tab_index() {
                return this.enabled() ? super.tab_index() : -1;
            }
            error() {
                try {
                    this.fiber()?.get();
                    return '';
                }
                catch (error) {
                    if (error instanceof Promise) {
                        return $.$mol_fail_hidden(error);
                    }
                    return String(error.message ?? error);
                }
            }
            hint_or_error() {
                return this.error() || super.hint_or_error();
            }
            sub_visible() {
                return [
                    ...this.error() ? [this.Speck()] : [],
                    ...this.sub(),
                ];
            }
        }
        __decorate([
            $.$mol_mem
        ], $mol_button.prototype, "fiber", null);
        $$.$mol_button = $mol_button;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//button.view.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_button_typed extends $.$mol_button {
    }
    $.$mol_button_typed = $mol_button_typed;
})($ || ($ = {}));
//typed.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_attach("mol/button/typed/typed.view.css", "[mol_button_typed] {\n\tdisplay: inline-block;\n\talign-content: center;\n\talign-items: center;\n\tvertical-align: middle;\n\ttext-align: center;\n\tpadding: var(--mol_gap_text);\n\tborder-radius: var(--mol_skin_round);\n}\n\n[mol_button_typed][disabled] {\n\tcolor: var(--mol_theme_text);\n\tpointer-events: none;\n}\n\n[mol_button_typed]:hover ,\n[mol_button_typed]:focus {\n\tcursor: pointer;\n\tbackground-color: var(--mol_theme_hover);\n}\n");
})($ || ($ = {}));
//typed.view.css.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_button_minor extends $.$mol_button_typed {
    }
    $.$mol_button_minor = $mol_button_minor;
})($ || ($ = {}));
//minor.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_attach("mol/button/minor/minor.view.css", "[mol_button_minor] {\n\tcolor: var(--mol_theme_control);\n}\n");
})($ || ($ = {}));
//minor.view.css.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_check extends $.$mol_button_minor {
        attr() {
            return {
                ...super.attr(),
                mol_check_checked: this.checked(),
                "aria-checked": this.checked(),
                role: "checkbox"
            };
        }
        sub() {
            return [
                this.Icon(),
                this.label()
            ];
        }
        checked(val) {
            if (val !== undefined)
                return val;
            return false;
        }
        Icon() {
            return null;
        }
        title() {
            return "";
        }
        Title() {
            const obj = new this.$.$mol_view();
            obj.sub = () => [
                this.title()
            ];
            return obj;
        }
        label() {
            return [
                this.Title()
            ];
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_check.prototype, "checked", null);
    __decorate([
        $.$mol_mem
    ], $mol_check.prototype, "Title", null);
    $.$mol_check = $mol_check;
})($ || ($ = {}));
//check.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_maybe(value) {
        return (value == null) ? [] : [value];
    }
    $.$mol_maybe = $mol_maybe;
})($ || ($ = {}));
//maybe.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_attach("mol/check/check.css", "[mol_check] {\n\tflex: 0 0 auto;\n\tjustify-content: flex-start;\n\talign-content: center;\n\talign-items: flex-start;\n\tborder: none;\n\tfont-weight: inherit;\n\tbox-shadow: none;\n\ttext-align: left;\n\tpadding: var(--mol_gap_text);\n\tdisplay: inline-flex;\n\tflex-wrap: nowrap;\n}\n");
})($ || ($ = {}));
//check.css.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_check extends $.$mol_check {
            click(next) {
                if (next?.defaultPrevented)
                    return;
                this.checked(!this.checked());
                if (next)
                    next.preventDefault();
            }
            sub() {
                return [
                    ...$.$mol_maybe(this.Icon()),
                    ...this.label(),
                ];
            }
            label() {
                return this.title() ? super.label() : [];
            }
        }
        $$.$mol_check = $mol_check;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//check.view.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_icon_chevron extends $.$mol_icon {
        path() {
            return "M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z";
        }
    }
    $.$mol_icon_chevron = $mol_icon_chevron;
})($ || ($ = {}));
//chevron.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_check_expand extends $.$mol_check {
        minimal_height() {
            return 40;
        }
        Icon() {
            const obj = new this.$.$mol_icon_chevron();
            return obj;
        }
        level() {
            return 0;
        }
        style() {
            return {
                ...super.style(),
                paddingLeft: this.level_style()
            };
        }
        checked(val) {
            return this.expanded(val);
        }
        enabled() {
            return this.expandable();
        }
        level_style() {
            return "0px";
        }
        expanded(val) {
            if (val !== undefined)
                return val;
            return false;
        }
        expandable() {
            return false;
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_check_expand.prototype, "Icon", null);
    __decorate([
        $.$mol_mem
    ], $mol_check_expand.prototype, "expanded", null);
    $.$mol_check_expand = $mol_check_expand;
})($ || ($ = {}));
//expand.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_attach("mol/check/expand/expand.view.css", "[mol_check_expand] {\n\tmin-width: 20px;\n}\n\n[mol_check_expand][disabled] [mol_check_expand_icon] {\n\tvisibility: hidden;\n}\n\n[mol_check_expand_icon] {\n\tbox-shadow: none;\n\tmargin: .25rem 0;\n}\n[mol_check_expand_icon] {\n\ttransform: rotateZ(0deg);\n}\n\n[mol_check_checked] > [mol_check_expand_icon] {\n\ttransform: rotateZ(90deg);\n}\n\n[mol_check_expand_icon] {\n\tvertical-align: text-top;\n}\n\n[mol_check_expand_label] {\n\tmargin-left: 0;\n}\n");
})($ || ($ = {}));
//expand.view.css.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_check_expand extends $.$mol_check_expand {
            level_style() {
                return `${this.level() * 1 - 1}rem`;
            }
            expandable() {
                return this.expanded() !== null;
            }
        }
        $$.$mol_check_expand = $mol_check_expand;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//expand.view.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_paragraph extends $.$mol_view {
        line_height() {
            return 24;
        }
        letter_width() {
            return 8;
        }
        width_limit() {
            return Infinity;
        }
        sub() {
            return [
                this.title()
            ];
        }
    }
    $.$mol_paragraph = $mol_paragraph;
})($ || ($ = {}));
//paragraph.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_paragraph extends $.$mol_paragraph {
            maximal_width() {
                let width = 0;
                const letter = this.letter_width();
                for (const kid of this.sub()) {
                    if (!kid)
                        continue;
                    if (kid instanceof $.$mol_view) {
                        width += kid.maximal_width();
                    }
                    else if (typeof kid !== 'object') {
                        width += String(kid).length * letter;
                    }
                }
                return width;
            }
            width_limit() {
                return this.$.$mol_window.size().width;
            }
            minimal_width() {
                return Math.max(Math.min(this.width_limit(), this.maximal_width()), this.letter_width());
            }
            minimal_height() {
                return Math.max(1, Math.ceil(this.maximal_width() / this.minimal_width())) * this.line_height();
            }
        }
        __decorate([
            $.$mol_mem
        ], $mol_paragraph.prototype, "maximal_width", null);
        __decorate([
            $.$mol_mem
        ], $mol_paragraph.prototype, "minimal_width", null);
        __decorate([
            $.$mol_mem
        ], $mol_paragraph.prototype, "minimal_height", null);
        $$.$mol_paragraph = $mol_paragraph;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//paragraph.view.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_dimmer extends $.$mol_paragraph {
        haystack() {
            return "";
        }
        needle() {
            return "";
        }
        sub() {
            return this.parts();
        }
        Low(id) {
            const obj = new this.$.$mol_paragraph();
            obj.sub = () => [
                this.string(id)
            ];
            return obj;
        }
        High(id) {
            const obj = new this.$.$mol_paragraph();
            obj.sub = () => [
                this.string(id)
            ];
            return obj;
        }
        parts() {
            return [];
        }
        string(id) {
            return "";
        }
    }
    __decorate([
        $.$mol_mem_key
    ], $mol_dimmer.prototype, "Low", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_dimmer.prototype, "High", null);
    $.$mol_dimmer = $mol_dimmer;
})($ || ($ = {}));
//dimmer.view.tree.js.map
;
"use strict";
//equals.js.map
;
"use strict";
//merge.js.map
;
"use strict";
//intersect.js.map
;
"use strict";
//unicode.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_regexp extends RegExp {
        constructor(source, flags = 'gsu', groups = []) {
            super(source, flags);
            this.groups = groups;
        }
        *[Symbol.matchAll](str) {
            const index = this.lastIndex;
            this.lastIndex = 0;
            while (this.lastIndex < str.length) {
                const found = this.exec(str);
                if (!found)
                    break;
                yield found;
            }
            this.lastIndex = index;
        }
        [Symbol.match](str) {
            const res = [...this[Symbol.matchAll](str)].filter(r => r.groups).map(r => r[0]);
            if (!res.length)
                return null;
            return res;
        }
        exec(str) {
            const from = this.lastIndex;
            const res = super.exec(str);
            if (res === null) {
                this.lastIndex = str.length;
                if (!str)
                    return null;
                return Object.assign([str.slice(from)], {
                    index: from,
                    input: str,
                });
            }
            if (from === this.lastIndex) {
                $.$mol_fail(new Error('Captured empty substring'));
            }
            const groups = {};
            const skipped = str.slice(from, this.lastIndex - res[0].length);
            if (skipped) {
                this.lastIndex = this.lastIndex - res[0].length;
                return Object.assign([skipped], {
                    index: from,
                    input: res.input,
                });
            }
            for (let i = 0; i < this.groups.length; ++i) {
                const group = this.groups[i];
                groups[group] = groups[group] || res[i + 1] || '';
            }
            return Object.assign(res, { groups });
        }
        generate(params) {
            return null;
        }
        static repeat(source, min = 0, max = Number.POSITIVE_INFINITY) {
            const regexp = $mol_regexp.from(source);
            const upper = Number.isFinite(max) ? max : '';
            const str = `(?:${regexp.source}){${min},${upper}}?`;
            const regexp2 = new $mol_regexp(str, regexp.flags, regexp.groups);
            regexp2.generate = params => {
                const res = regexp.generate(params);
                if (res)
                    return res;
                if (min > 0)
                    return res;
                return '';
            };
            return regexp2;
        }
        static repeat_greedy(source, min = 0, max = Number.POSITIVE_INFINITY) {
            const regexp = $mol_regexp.from(source);
            const upper = Number.isFinite(max) ? max : '';
            const str = `(?:${regexp.source}){${min},${upper}}`;
            const regexp2 = new $mol_regexp(str, regexp.flags, regexp.groups);
            regexp2.generate = params => {
                const res = regexp.generate(params);
                if (res)
                    return res;
                if (min > 0)
                    return res;
                return '';
            };
            return regexp2;
        }
        static optional(source) {
            return $mol_regexp.repeat_greedy(source, 0, 1);
        }
        static force_after(source) {
            const regexp = $mol_regexp.from(source);
            return new $mol_regexp(`(?=${regexp.source})`, regexp.flags, regexp.groups);
        }
        static forbid_after(source) {
            const regexp = $mol_regexp.from(source);
            return new $mol_regexp(`(?!${regexp.source})`, regexp.flags, regexp.groups);
        }
        static from(source, { ignoreCase, multiline } = {
            ignoreCase: false,
            multiline: false,
        }) {
            let flags = 'gsu';
            if (multiline)
                flags += 'm';
            if (ignoreCase)
                flags += 'i';
            if (typeof source === 'number') {
                const src = `\\u{${source.toString(16)}}`;
                const regexp = new $mol_regexp(src, flags);
                regexp.generate = () => src;
                return regexp;
            }
            if (typeof source === 'string') {
                const src = source.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
                const regexp = new $mol_regexp(src, flags);
                regexp.generate = () => source;
                return regexp;
            }
            else if (source instanceof RegExp) {
                if (source instanceof $mol_regexp)
                    return source;
                const test = new RegExp('|' + source.source);
                const groups = Array.from({ length: test.exec('').length - 1 }, (_, i) => String(i + 1));
                const regexp = new $mol_regexp(source.source, source.flags, groups);
                regexp.generate = () => '';
                return regexp;
            }
            if (Array.isArray(source)) {
                const patterns = source.map(src => Array.isArray(src)
                    ? $mol_regexp.optional(src)
                    : $mol_regexp.from(src));
                const chunks = patterns.map(pattern => pattern.source);
                const groups = [];
                let index = 0;
                for (const pattern of patterns) {
                    for (let group of pattern.groups) {
                        if (Number(group) >= 0) {
                            groups.push(String(index++));
                        }
                        else {
                            groups.push(group);
                        }
                    }
                }
                const regexp = new $mol_regexp(chunks.join(''), flags, groups);
                regexp.generate = params => {
                    let res = '';
                    for (const pattern of patterns) {
                        let sub = pattern.generate(params);
                        if (sub === null)
                            return '';
                        res += sub;
                    }
                    return res;
                };
                return regexp;
            }
            else {
                const groups = [];
                const chunks = Object.keys(source).map(name => {
                    groups.push(name);
                    const regexp = $mol_regexp.from(source[name]);
                    groups.push(...regexp.groups);
                    return `(${regexp.source})`;
                });
                const regexp = new $mol_regexp(`(?:${chunks.join('|')})`, flags, groups);
                const validator = new RegExp('^' + regexp.source + '$', flags);
                regexp.generate = params => {
                    for (let option in source) {
                        if (params[option]) {
                            if (typeof params[option] !== 'boolean') {
                                const str = String(params[option]);
                                if (str.match(validator))
                                    return str;
                                $.$mol_fail(new Error(`Wrong param: ${option}=${str}`));
                            }
                        }
                        else {
                            if (typeof source[option] !== 'object')
                                continue;
                        }
                        const res = $mol_regexp.from(source[option]).generate(params);
                        if (res)
                            return res;
                    }
                    return null;
                };
                return regexp;
            }
        }
        static unicode_only(...category) {
            return new $mol_regexp(`\\p{${category.join('=')}}`);
        }
        static unicode_except(...category) {
            return new $mol_regexp(`\\P{${category.join('=')}}`);
        }
        static char_range(from, to) {
            return new $mol_regexp(`${$mol_regexp.from(from).source}-${$mol_regexp.from(to).source}`);
        }
        static char_only(...allowed) {
            const regexp = allowed.map(f => $mol_regexp.from(f).source).join('');
            return new $mol_regexp(`[${regexp}]`);
        }
        static char_except(...forbidden) {
            const regexp = forbidden.map(f => $mol_regexp.from(f).source).join('');
            return new $mol_regexp(`[^${regexp}]`);
        }
    }
    $mol_regexp.decimal_only = $mol_regexp.from(/\d/gsu);
    $mol_regexp.decimal_except = $mol_regexp.from(/\D/gsu);
    $mol_regexp.latin_only = $mol_regexp.from(/\w/gsu);
    $mol_regexp.latin_except = $mol_regexp.from(/\W/gsu);
    $mol_regexp.space_only = $mol_regexp.from(/\s/gsu);
    $mol_regexp.space_except = $mol_regexp.from(/\S/gsu);
    $mol_regexp.word_break_only = $mol_regexp.from(/\b/gsu);
    $mol_regexp.word_break_except = $mol_regexp.from(/\B/gsu);
    $mol_regexp.tab = $mol_regexp.from(/\t/gsu);
    $mol_regexp.slash_back = $mol_regexp.from(/\\/gsu);
    $mol_regexp.nul = $mol_regexp.from(/\0/gsu);
    $mol_regexp.char_any = $mol_regexp.from(/./gsu);
    $mol_regexp.begin = $mol_regexp.from(/^/gsu);
    $mol_regexp.end = $mol_regexp.from(/$/gsu);
    $mol_regexp.or = $mol_regexp.from(/|/gsu);
    $mol_regexp.line_end = $mol_regexp.from({
        win_end: [['\r'], '\n'],
        mac_end: '\r',
    });
    $.$mol_regexp = $mol_regexp;
})($ || ($ = {}));
//regexp.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_attach("mol/dimmer/dimmer.view.css", "[mol_dimmer] {\n\tdisplay: block;\n}\n\n[mol_dimmer_low] {\n\tdisplay: inline;\n\topacity: 0.66;\n}\n\n[mol_dimmer_high] {\n\tdisplay: inline;\n\tcolor: var(--mol_theme_focus);\n\ttext-shadow: 0 0;\n}\n");
})($ || ($ = {}));
//dimmer.view.css.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_dimmer extends $.$mol_dimmer {
            parts() {
                const needle = this.needle();
                if (needle.length < 2)
                    return [this.haystack()];
                let chunks = [];
                let strings = this.strings();
                for (let index = 0; index < strings.length; index++) {
                    if (strings[index] === '')
                        continue;
                    chunks.push((index % 2) ? this.High(index) : this.Low(index));
                }
                return chunks;
            }
            strings() {
                const regexp = $.$mol_regexp.from({ needle: this.needle() }, { ignoreCase: true });
                return this.haystack().split(regexp);
            }
            string(index) {
                return this.strings()[index];
            }
            *view_find(check, path = []) {
                if (check(this, this.haystack())) {
                    yield [...path, this];
                }
            }
        }
        __decorate([
            $.$mol_mem
        ], $mol_dimmer.prototype, "strings", null);
        $$.$mol_dimmer = $mol_dimmer;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//dimmer.view.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_grid extends $.$mol_scroll {
        row_height() {
            return 32;
        }
        row_ids() {
            return [];
        }
        row_id(index) {
            return null;
        }
        col_ids() {
            return [];
        }
        records() {
            return {};
        }
        record(id) {
            return null;
        }
        hierarchy() {
            return null;
        }
        hierarchy_col() {
            return "";
        }
        sub() {
            return [
                this.Head(),
                this.Table()
            ];
        }
        Head() {
            const obj = new this.$.$mol_grid_row();
            obj.cells = () => this.head_cells();
            return obj;
        }
        Row(id) {
            const obj = new this.$.$mol_grid_row();
            obj.minimal_height = () => this.row_height();
            obj.cells = () => this.cells(id);
            return obj;
        }
        Cell(id) {
            const obj = new this.$.$mol_view();
            return obj;
        }
        cell(id) {
            return null;
        }
        Cell_text(id) {
            const obj = new this.$.$mol_grid_cell();
            obj.sub = () => this.cell_content_text(id);
            return obj;
        }
        Cell_number(id) {
            const obj = new this.$.$mol_grid_number();
            obj.sub = () => this.cell_content_number(id);
            return obj;
        }
        Col_head(id) {
            const obj = new this.$.$mol_float();
            obj.dom_name = () => "th";
            obj.sub = () => this.col_head_content(id);
            return obj;
        }
        Cell_branch(id) {
            const obj = new this.$.$mol_check_expand();
            obj.level = () => this.cell_level(id);
            obj.label = () => this.cell_content(id);
            obj.expanded = (val) => this.cell_expanded(id, val);
            return obj;
        }
        Cell_content(id) {
            return [
                this.Cell_dimmer(id)
            ];
        }
        rows() {
            return [];
        }
        Table() {
            const obj = new this.$.$mol_grid_table();
            obj.sub = () => this.rows();
            return obj;
        }
        head_cells() {
            return [];
        }
        cells(id) {
            return [];
        }
        cell_content(id) {
            return [];
        }
        cell_content_text(id) {
            return this.cell_content(id);
        }
        cell_content_number(id) {
            return this.cell_content(id);
        }
        col_head_content(id) {
            return [];
        }
        cell_level(id) {
            return 0;
        }
        cell_expanded(id, val) {
            if (val !== undefined)
                return val;
            return false;
        }
        needle() {
            return "";
        }
        cell_value(id) {
            return "";
        }
        Cell_dimmer(id) {
            const obj = new this.$.$mol_dimmer();
            obj.needle = () => this.needle();
            obj.haystack = () => this.cell_value(id);
            return obj;
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_grid.prototype, "Head", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_grid.prototype, "Row", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_grid.prototype, "Cell", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_grid.prototype, "Cell_text", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_grid.prototype, "Cell_number", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_grid.prototype, "Col_head", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_grid.prototype, "Cell_branch", null);
    __decorate([
        $.$mol_mem
    ], $mol_grid.prototype, "Table", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_grid.prototype, "cell_expanded", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_grid.prototype, "Cell_dimmer", null);
    $.$mol_grid = $mol_grid;
    class $mol_grid_table extends $.$mol_list {
        dom_name() {
            return "table";
        }
    }
    $.$mol_grid_table = $mol_grid_table;
    class $mol_grid_row extends $.$mol_view {
        dom_name() {
            return "tr";
        }
        sub() {
            return this.cells();
        }
        cells() {
            return [];
        }
    }
    $.$mol_grid_row = $mol_grid_row;
    class $mol_grid_cell extends $.$mol_view {
        dom_name() {
            return "td";
        }
        minimal_height() {
            return 40;
        }
    }
    $.$mol_grid_cell = $mol_grid_cell;
    class $mol_grid_number extends $mol_grid_cell {
    }
    $.$mol_grid_number = $mol_grid_number;
})($ || ($ = {}));
//grid.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_attach("mol/grid/grid.view.css", "[mol_grid] {\n\tdisplay: block;\n\tflex: 1 1 auto;\n\tposition: relative;\n}\n\n[mol_grid_gap] {\n\tposition: absolute;\n\tpadding: .1px;\n\ttop: 0;\n\ttransform: translateZ(0);\n}\n\n[mol_grid_table] {\n\tborder-spacing: 0;\n\tdisplay: table-row-group;\n\tposition: relative;\n}\n\n[mol_grid_table] > * {\n\tdisplay: table-row;\n\ttransition: none;\n}\n\n[mol_grid_head] > * ,\n[mol_grid_table] > * > * {\n\tdisplay: table-cell;\n\tpadding: var(--mol_gap_text);\n\twhite-space: nowrap;\n\tvertical-align: middle;\n\tbox-shadow: inset 0 0 0 1px var(--mol_theme_line);\n}\n\n[mol_grid_head] {\n\tdisplay: table-row;\n\ttransform: none !important;\n}\n\n[mol_grid_head] > * {\n\tbackground: var(--mol_theme_back);\n}\n\n[mol_grid_cell_number] {\n\ttext-align: right;\n}\n\n[mol_grid_col_head] {\n\tfont-weight: inherit;\n\ttext-align: inherit;\n\tdisplay: table-cell;\n}\n\n[mol_grid_cell_dimmer] {\n\tdisplay: inline-block;\n\tvertical-align: inherit;\n}\n");
})($ || ($ = {}));
//grid.view.css.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_grid extends $.$mol_grid {
            head_cells() {
                return this.col_ids().map(colId => this.Col_head(colId));
            }
            col_head_content(colId) {
                return [colId];
            }
            rows() {
                return this.row_ids().map(id => this.Row(id));
            }
            cells(row_id) {
                return this.col_ids().map(col_id => this.Cell({ row: row_id, col: col_id }));
            }
            col_type(col_id) {
                if (col_id === this.hierarchy_col())
                    return 'branch';
                const rowFirst = this.row_id(0);
                const val = this.record(rowFirst[rowFirst.length - 1])[col_id];
                if (typeof val === 'number')
                    return 'number';
                return 'text';
            }
            Cell(id) {
                switch (this.col_type(id.col).valueOf()) {
                    case 'branch': return this.Cell_branch(id);
                    case 'number': return this.Cell_number(id);
                }
                return this.Cell_text(id);
            }
            cell_content(id) {
                return [this.record(id.row[id.row.length - 1])[id.col]];
            }
            records() {
                return [];
            }
            record(id) {
                return this.records()[id];
            }
            record_ids() {
                return Object.keys(this.records());
            }
            row_id(index) {
                return this.row_ids().slice(index, index + 1).valueOf()[0];
            }
            col_ids() {
                const rowFirst = this.row_id(0);
                if (rowFirst === void 0)
                    return [];
                const record = this.record(rowFirst[rowFirst.length - 1]);
                if (!record)
                    return [];
                return Object.keys(record);
            }
            hierarchy() {
                const hierarchy = {};
                const root = hierarchy[''] = {
                    id: '',
                    parent: null,
                    sub: [],
                };
                this.record_ids().map(id => {
                    root.sub.push(hierarchy[id] = {
                        id,
                        parent: root,
                        sub: [],
                    });
                });
                return hierarchy;
            }
            row_sub_ids(row) {
                return this.hierarchy()[row[row.length - 1]].sub.map(child => row.concat(child.id));
            }
            row_root_id() {
                return [''];
            }
            cell_level(id) {
                return id.row.length - 1;
            }
            row_ids() {
                const next = [];
                const add = (row) => {
                    next.push(row);
                    if (this.row_expanded(row)) {
                        this.row_sub_ids(row).forEach(child => add(child));
                    }
                };
                this.row_sub_ids(this.row_root_id()).forEach(child => add(child));
                return next;
            }
            row_expanded(row_id, next) {
                if (!this.row_sub_ids(row_id).length)
                    return null;
                const key = `row_expanded(${JSON.stringify(row_id)})`;
                const next2 = $.$mol_state_session.value(key, next);
                return (next2 == null) ? this.row_expanded_default(row_id) : next2;
            }
            row_expanded_default(row_id) {
                return true;
            }
            cell_expanded(id, next) {
                return this.row_expanded(id.row, next);
            }
        }
        __decorate([
            $.$mol_mem
        ], $mol_grid.prototype, "head_cells", null);
        __decorate([
            $.$mol_mem
        ], $mol_grid.prototype, "rows", null);
        __decorate([
            $.$mol_mem_key
        ], $mol_grid.prototype, "col_type", null);
        __decorate([
            $.$mol_mem
        ], $mol_grid.prototype, "record_ids", null);
        __decorate([
            $.$mol_mem
        ], $mol_grid.prototype, "hierarchy", null);
        __decorate([
            $.$mol_mem
        ], $mol_grid.prototype, "row_ids", null);
        $$.$mol_grid = $mol_grid;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//grid.view.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_image extends $.$mol_view {
        dom_name() {
            return "img";
        }
        field() {
            return {
                ...super.field(),
                src: this.uri(),
                alt: this.title()
            };
        }
        uri() {
            return "";
        }
    }
    $.$mol_image = $mol_image;
})($ || ($ = {}));
//image.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_attach("mol/image/image.view.css", "[mol_image] {\n\tborder-radius: var(--mol_skin_round);\n\toverflow: hidden;\n\tflex: 0 1 auto;\n\tmax-width: 100%;\n}\n");
})($ || ($ = {}));
//image.view.css.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_link_iconed extends $.$mol_link {
        sub() {
            return [
                this.Icon()
            ];
        }
        content() {
            return [
                this.title()
            ];
        }
        host() {
            return "";
        }
        icon() {
            return "";
        }
        Icon() {
            const obj = new this.$.$mol_image();
            obj.uri = () => this.icon();
            obj.title = () => "";
            return obj;
        }
        title() {
            return this.uri();
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_link_iconed.prototype, "Icon", null);
    $.$mol_link_iconed = $mol_link_iconed;
})($ || ($ = {}));
//iconed.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_attach("mol/link/iconed/iconed.view.css", "[mol_link_iconed] {\n\talign-items: center;\n\tcolor: var(--mol_theme_control);\n\tdisplay: inline;\n\tpadding: var(--mol_gap_text);\n}\n\n[mol_link_iconed_icon] {\n\tbox-shadow: none;\n\theight: 1em;\n\twidth: 1em;\n\tdisplay: inline-block;\n\tmargin: -.25rem .25rem 0 0;\n\tvertical-align: middle;\n}\n\n[mol_theme=\"$mol_theme_dark\"] [mol_link_iconed_icon] {\n\tfilter: invert(1) hue-rotate(180deg);\n}\n");
})($ || ($ = {}));
//iconed.view.css.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_link_iconed extends $.$mol_link_iconed {
            icon() {
                return `https://favicon.yandex.net/favicon/${this.host()}?color=0,0,0,0&size=32&stub=1`;
            }
            host() {
                const base = this.$.$mol_state_arg.href();
                const url = new URL(this.uri(), base);
                return url.hostname;
            }
            title() {
                return decodeURIComponent(this.uri().split(this.host(), 2)[1]);
            }
            sub() {
                return [
                    ...this.host() ? [this.Icon()] : [],
                    ...this.content(),
                ];
            }
        }
        __decorate([
            $.$mol_mem
        ], $mol_link_iconed.prototype, "host", null);
        __decorate([
            $.$mol_mem
        ], $mol_link_iconed.prototype, "title", null);
        $$.$mol_link_iconed = $mol_link_iconed;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//iconed.view.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_text extends $.$mol_list {
        uri_base() {
            return "";
        }
        text() {
            return "";
        }
        tokens() {
            return [];
        }
        Quote(id) {
            const obj = new this.$.$mol_text();
            obj.text = () => this.quote_text(id);
            return obj;
        }
        Row(id) {
            const obj = new this.$.$mol_text_row();
            obj.sub = () => this.block_content(id);
            obj.type = () => this.block_type(id);
            return obj;
        }
        Span(id) {
            const obj = new this.$.$mol_text_span();
            return obj;
        }
        Link(id) {
            const obj = new this.$.$mol_text_link();
            obj.target = () => this.link_target(id);
            return obj;
        }
        Image(id) {
            const obj = new this.$.$mol_text_image();
            return obj;
        }
        Header(id) {
            const obj = new this.$.$mol_text_header();
            obj.level = () => this.header_level(id);
            obj.content = () => this.header_content(id);
            return obj;
        }
        Table(id) {
            const obj = new this.$.$mol_grid();
            obj.head_cells = () => this.table_head_cells(id);
            obj.rows = () => this.table_rows(id);
            return obj;
        }
        Table_row(id) {
            const obj = new this.$.$mol_grid_row();
            obj.cells = () => this.table_cells(id);
            return obj;
        }
        Table_cell(id) {
            const obj = new this.$.$mol_grid_cell();
            obj.sub = () => this.table_cell_content(id);
            return obj;
        }
        Table_cell_head(id) {
            const obj = new this.$.$mol_float();
            obj.sub = () => this.table_cell_content(id);
            return obj;
        }
        quote_text(id) {
            return "";
        }
        block_content(id) {
            return [];
        }
        block_type(id) {
            return "";
        }
        link_target(id) {
            return "_blank";
        }
        header_level(id) {
            return 0;
        }
        header_content(id) {
            return [];
        }
        table_head_cells(id) {
            return [];
        }
        table_rows(id) {
            return [];
        }
        table_cells(id) {
            return [];
        }
        table_cell_content(id) {
            return [];
        }
    }
    __decorate([
        $.$mol_mem_key
    ], $mol_text.prototype, "Quote", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_text.prototype, "Row", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_text.prototype, "Span", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_text.prototype, "Link", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_text.prototype, "Image", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_text.prototype, "Header", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_text.prototype, "Table", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_text.prototype, "Table_row", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_text.prototype, "Table_cell", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_text.prototype, "Table_cell_head", null);
    $.$mol_text = $mol_text;
    class $mol_text_row extends $.$mol_paragraph {
        attr() {
            return {
                ...super.attr(),
                mol_text_type: this.type()
            };
        }
        type() {
            return "";
        }
    }
    $.$mol_text_row = $mol_text_row;
    class $mol_text_header extends $.$mol_paragraph {
        dom_name() {
            return "h";
        }
        attr() {
            return {
                ...super.attr(),
                mol_text_header_level: this.level()
            };
        }
        sub() {
            return this.content();
        }
        level(val) {
            if (val !== undefined)
                return val;
            return 0;
        }
        content() {
            return [];
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_text_header.prototype, "level", null);
    $.$mol_text_header = $mol_text_header;
    class $mol_text_span extends $.$mol_paragraph {
        dom_name() {
            return "span";
        }
        attr() {
            return {
                ...super.attr(),
                mol_text_type: this.type()
            };
        }
        sub() {
            return this.content();
        }
        type(val) {
            if (val !== undefined)
                return val;
            return "";
        }
        content(val) {
            if (val !== undefined)
                return val;
            return [];
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_text_span.prototype, "type", null);
    __decorate([
        $.$mol_mem
    ], $mol_text_span.prototype, "content", null);
    $.$mol_text_span = $mol_text_span;
    class $mol_text_link extends $.$mol_link_iconed {
        attr() {
            return {
                ...super.attr(),
                mol_text_type: this.type()
            };
        }
        uri() {
            return this.link();
        }
        content(val) {
            if (val !== undefined)
                return val;
            return [];
        }
        type(val) {
            if (val !== undefined)
                return val;
            return "";
        }
        link(val) {
            if (val !== undefined)
                return val;
            return "";
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_text_link.prototype, "content", null);
    __decorate([
        $.$mol_mem
    ], $mol_text_link.prototype, "type", null);
    __decorate([
        $.$mol_mem
    ], $mol_text_link.prototype, "link", null);
    $.$mol_text_link = $mol_text_link;
    class $mol_text_image extends $.$mol_view {
        dom_name() {
            return "object";
        }
        attr() {
            return {
                ...super.attr(),
                allowfullscreen: true,
                mol_text_type: this.type(),
                data: this.link()
            };
        }
        sub() {
            return [
                this.title()
            ];
        }
        type(val) {
            if (val !== undefined)
                return val;
            return "";
        }
        link(val) {
            if (val !== undefined)
                return val;
            return "";
        }
        title(val) {
            if (val !== undefined)
                return val;
            return "";
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_text_image.prototype, "type", null);
    __decorate([
        $.$mol_mem
    ], $mol_text_image.prototype, "link", null);
    __decorate([
        $.$mol_mem
    ], $mol_text_image.prototype, "title", null);
    $.$mol_text_image = $mol_text_image;
})($ || ($ = {}));
//text.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_syntax2 {
        constructor(lexems) {
            this.lexems = lexems;
            this.rules = [];
            for (let name in lexems) {
                this.rules.push({
                    name: name,
                    regExp: lexems[name],
                    size: RegExp('^$|' + lexems[name].source).exec('').length - 1,
                });
            }
            const parts = '(' + this.rules.map(rule => rule.regExp.source).join(')|(') + ')';
            this.regexp = RegExp(`([\\s\\S]*?)(?:(${parts})|$(?![^]))`, 'gm');
        }
        tokenize(text, handle) {
            let end = 0;
            lexing: while (end < text.length) {
                const start = end;
                this.regexp.lastIndex = start;
                var found = this.regexp.exec(text);
                end = this.regexp.lastIndex;
                if (start === end)
                    throw new Error('Empty token');
                var prefix = found[1];
                if (prefix)
                    handle('', prefix, [], start);
                var suffix = found[2];
                if (!suffix)
                    continue;
                let offset = 4;
                for (let rule of this.rules) {
                    if (found[offset - 1]) {
                        handle(rule.name, suffix, found.slice(offset, offset + rule.size), start + prefix.length);
                        continue lexing;
                    }
                    offset += rule.size + 1;
                }
                $.$mol_fail(new Error('$mol_syntax2 is broken'));
            }
        }
        parse(text, handlers) {
            this.tokenize(text, (name, ...args) => handlers[name](...args));
        }
    }
    $.$mol_syntax2 = $mol_syntax2;
})($ || ($ = {}));
//syntax2.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_syntax2_md_flow = new $.$mol_syntax2({
        'quote': /^((?:(?:> )(?:[^]*?)$(\r?\n?))+)([\n\r]*)/,
        'header': /^(#+)(\s*)(.*?)$([\n\r]*)/,
        'list': /^((?:(?:\s?[*+-]|\d+\.)\s+(?:[^]*?)$(?:\r?\n?))+)((?:\r?\n)*)/,
        'code': /^(```\s*)(\w*)[\r\n]+([^]*?)^(```)$([\n\r]*)/,
        'code-indent': /^((?:(?:  |\t)(?:[^]*?)$([\n\r]*))+)/,
        'table': /((?:^\|.+?$\r?\n)+)([\n\r]*)/,
        'block': /^(.*?(?:\r?\n.+?)*)$((?:\r?\n)*)/,
    });
    $.$mol_syntax2_md_line = new $.$mol_syntax2({
        'strong': /\*\*(.+?)\*\*/,
        'emphasis': /\*(?!\s)(.+?)\*/,
        'code3': /```(.+?)```/,
        'code': /`(.+?)`/,
        'strike': /~~(.+?)~~/,
        'text-link': /\[(.*?(?:\[.*?\].*?)*)\]\((.*?)\)/,
        'image-link': /!\[([^\[\]]*?)\]\((.*?)\)/,
    });
    $.$mol_syntax2_md_code = new $.$mol_syntax2({
        'code-docs': /\/\/\/.*?$/,
        'code-comment-block': /(?:\/\*[^]*?\*\/|\/\+[^]*?\+\/|<![^]*?>)/,
        'code-link': /(?:\w+:|#|\?|\/)\S+?(?=\s|\\\\|""|$)/,
        'code-comment-inline': /\/\/.*?$/,
        'code-string': /(?:".*?"|'.*?'|`.*?`|\/.+?\/[gmi]*\b|(?:^|[ \t])\\[^\n]*\n)/,
        'code-number': /[+-]?(?:\d*\.)?\d+\w*/,
        'code-call': /\.?\w+(?=\()/,
        'code-field': /(?:\.\w+|[\w-]+\??\s*:(?!\/\/))/,
        'code-keyword': /\b(throw|readonly|unknown|keyof|typeof|never|from|class|interface|type|function|extends|implements|module|namespace|import|export|include|require|var|let|const|for|do|while|until|in|of|new|if|then|else|switch|case|this|return|async|await|try|catch|break|continue|get|set|public|private|protected|string|boolean|number|null|undefined|true|false|void)\b/,
        'code-global': /[$]+\w*|\b[A-Z]\w*/,
        'code-decorator': /@\s*\S+/,
        'code-tag': /<\/?[\w-]+\/?>?|&\w+;/,
        'code-punctuation': /[\-\[\]\{\}\(\)<=>`~!\?@#%&\*_\+\\\/\|'";:\.,\^]+/,
    });
})($ || ($ = {}));
//md.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_attach("mol/text/text.view.css", "[mol_text] {\n\tline-height: 1.5em;\n\tbox-sizing: border-box;\n\tmax-width: 60rem;\n\tpadding: var(--mol_gap_block);\n\tborder-radius: var(--mol_skin_round);\n\twhite-space: pre-line;\n\tdisplay: flex;\n\tflex-direction: column;\n\tflex: 0 0 auto;\n\ttab-size: 4;\n}\n\n[mol_text_row] {\n\tmargin: var(--mol_gap_text);\n\toverflow: auto;\n\tmax-width: 100%;\n\tdisplay: block;\n}\n\n[mol_text_span] {\n\tdisplay: inline;\n}\n\n[mol_text_type=\"block\"] {\n}\n\n[mol_text_header] {\n\tdisplay: block;\n\tpadding: var(--mol_gap_block);\n\tfont-weight: 500;\n}\n\n[mol_text_header_level=\"1\"] {\n\tfont-size: 1.5em;\n}\n\n[mol_text_header_level=\"2\"] {\n\tfont-size: 1.3em;\n}\n\n[mol_text_header_level=\"3\"] {\n\tfont-size: 1.1em;\n}\n\n[mol_text_header_level=\"4\"] {\n\tfont-size: 1.1em;\n\tfont-style: italic;\n}\n\n[mol_text_header_level=\"5\"] {\n\tfont-size: 1.1em;\n\tfont-weight: normal;\n\tfont-style: italic;\n}\n\n[mol_text_type=\"list-item\"] {\n\tdisplay: list-item;\n}\n\n[mol_text_type=\"list-item\"]:before {\n\tcontent: '•';\n\tmargin-right: 1ch;\n}\n\n[mol_text_table] {\n\tmax-width: 100%;\n\tmax-height: 75vh;\n\toverflow: auto;\n\tmargin: .5rem;\n\tflex-grow: 0;\n}\n\n[mol_text_type=\"code-indent\"] ,\n[mol_text_type=\"code\"] {\n\tfont-family: var(--mol_skin_font_monospace);\n\twhite-space: pre-wrap;\n\tborder-radius: var(--mol_skin_round);\n}\n\n[mol_text_type=\"text-link\"] {\n\tcolor: var(--mol_theme_control);\n\ttext-decoration: none;\n\tpadding: 0 .25rem 0 0;\n}\n\n[mol_text_link]:hover ,\n[mol_text_link]:focus {\n\toutline: none;\n}\n\n[mol_text_image] {\n\tmax-width: 100%;\n\tmax-height: 75vh;\n\tobject-fit: scale-down;\n}\n\n[mol_text_type=\"strong\"] {\n\tcolor: var(--mol_theme_focus);\n}\n\n[mol_text_type=\"emphasis\"] {\n\tfont-style: italic;\n}\n\n[mol_text_type=\"strike\"] {\n\ttext-decoration: line-through;\n\tcolor: var(--mol_theme_shade);\n}\n\n[mol_text_type=\"code-keyword\"] {\n\tcolor: hsl(0, 70%, 60%);\n}\n\n[mol_text_type=\"code-field\"] {\n\tcolor: hsl(300, 70%, 60%);\n}\n\n[mol_text_type=\"code-tag\"] {\n\tcolor: hsl(330, 70%, 60%);\n}\n\n[mol_text_type=\"code-global\"] {\n\tcolor: hsl(210, 80%, 60%);\n}\n\n[mol_text_type=\"code-decorator\"] {\n\tcolor: hsl(180, 40%, 60%);\n}\n\n[mol_text_type=\"code-punctuation\"] {\n\tcolor: hsl( 0, 0%, 50% );\n}\n\n[mol_text_type=\"code-string\"] {\n\tcolor: hsl(90, 40%, 50%);\n}\n\n[mol_text_type=\"code-number\"] {\n\tcolor: hsl(60, 70%, 30%);\n}\n\n[mol_text_type=\"code-call\"] {\n\tcolor: hsl(270, 60%, 60%);\n}\n\n[mol_text_type=\"code-link\"] {\n\tcolor: hsl(240, 60%, 60%);\n}\n\n[mol_text_type=\"code-comment-inline\"] ,\n[mol_text_type=\"code-comment-block\"] {\n\topacity: .5;\n}\n\n[mol_text_type=\"code-docs\"] {\n\topacity: .75;\n}\n");
})($ || ($ = {}));
//text.view.css.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_text extends $.$mol_text {
            tokens() {
                const tokens = [];
                this.$.$mol_syntax2_md_flow.tokenize(this.text(), (name, found, chunks) => tokens.push({ name, found, chunks }));
                return tokens;
            }
            rows() {
                return this.tokens().map((token, index) => {
                    switch (token.name) {
                        case 'table': return this.Table(index);
                        case 'header': return this.Header(index);
                        case 'quote': return this.Quote(index);
                    }
                    return this.Row(index);
                });
            }
            header_level(index) {
                return this.tokens()[index].chunks[0].length;
            }
            header_content(index) {
                return this.text2spans(`${index}`, this.tokens()[index].chunks[2]);
            }
            quote_text(index) {
                return this.tokens()[index].chunks[0].replace(/^> /mg, '');
            }
            block_type(index) {
                return this.tokens()[index].name;
            }
            cell_contents(indexBlock) {
                return this.tokens()[indexBlock].chunks[0]
                    .split(/\r?\n/g)
                    .filter(row => row && !/\|--/.test(row))
                    .map((row, rowId) => {
                    return row.split(/\|/g)
                        .filter(cell => cell)
                        .map((cell, cellId) => cell.trim());
                });
            }
            table_rows(blockId) {
                return this.cell_contents(blockId)
                    .slice(1)
                    .map((row, rowId) => this.Table_row({ block: blockId, row: rowId + 1 }));
            }
            table_head_cells(blockId) {
                return this.cell_contents(blockId)[0]
                    .map((cell, cellId) => this.Table_cell_head({ block: blockId, row: 0, cell: cellId }));
            }
            table_cells(id) {
                return this.cell_contents(id.block)[id.row]
                    .map((cell, cellId) => this.Table_cell({ block: id.block, row: id.row, cell: cellId }));
            }
            table_cell_content(id) {
                return this.text2spans(`${id.block}/${id.row}/${id.cell}`, this.cell_contents(id.block)[id.row][id.cell]);
            }
            uri_base() {
                return $.$mol_dom_context.document.location.href;
            }
            uri_resolve(uri) {
                const url = new URL(uri, this.uri_base());
                return url.toString();
            }
            text2spans(prefix, text) {
                let index = 0;
                const spans = [];
                this.$.$mol_syntax2_md_line.tokenize(text, (name, found, chunks) => {
                    const id = `${prefix}/${index++}`;
                    switch (name) {
                        case 'text-link': {
                            if (/^(\w+script+:)+/.test(chunks[1])) {
                                const span = this.Span(id);
                                span.content(this.text2spans(id, chunks[0]));
                                return spans.push(span);
                            }
                            else {
                                const span = this.Link(id);
                                span.type(name);
                                span.link(this.uri_resolve(chunks[1]));
                                span.content(this.text2spans(id, chunks[0]));
                                return spans.push(span);
                            }
                        }
                        case 'image-link': {
                            const span = this.Image(chunks[1]);
                            span.type(name);
                            span.link(this.uri_resolve(chunks[1]));
                            span.title(chunks[0]);
                            return spans.push(span);
                        }
                        case 'code3':
                        case 'code': {
                            const span = this.Span(id);
                            span.type('code');
                            span.content(this.code2spans(id, chunks[0]));
                            return spans.push(span);
                        }
                    }
                    const span = this.Span(id);
                    span.type(name);
                    span.content(name
                        ? [].concat.apply([], chunks.map((text, index) => this.text2spans(`${id}/${index}`, text)))
                        : [found]);
                    spans.push(span);
                });
                return spans;
            }
            code2spans(prefix, text) {
                let index = 0;
                const spans = [];
                this.$.$mol_syntax2_md_code.tokenize(text, (name, found, chunks) => {
                    const id = `${prefix}/${index++}`;
                    const span = this.Span(id);
                    span.type(name);
                    spans.push(span);
                    switch (name) {
                        case 'code-docs': {
                            span.content(this.text2spans(`${id}/${index}`, found));
                            return span;
                        }
                        case 'code-string': {
                            span.content([found[0], ...this.code2spans(`${id}/${index}`, found.slice(1, found.length - 1)), found[found.length - 1]]);
                            return span;
                        }
                        default: {
                            span.content([found]);
                            return span;
                        }
                    }
                });
                return spans;
            }
            block_content(indexBlock) {
                const token = this.tokens()[indexBlock];
                switch (token.name) {
                    case 'header': return this.text2spans(`${indexBlock}`, token.chunks[2]);
                    case 'list': return this.text2spans(`${indexBlock}`, token.chunks[0]);
                    case 'code': return this.code2spans(`${indexBlock}`, token.chunks[2]);
                    case 'code-indent': return this.code2spans(`${indexBlock}`, token.chunks[0].replace(/[\n\r]*$/, '\n').replace(/^\t/gm, ''));
                }
                return this.text2spans(`${indexBlock}`, token.chunks[0]);
            }
        }
        __decorate([
            $.$mol_mem
        ], $mol_text.prototype, "tokens", null);
        __decorate([
            $.$mol_mem
        ], $mol_text.prototype, "rows", null);
        __decorate([
            $.$mol_mem_key
        ], $mol_text.prototype, "cell_contents", null);
        __decorate([
            $.$mol_mem_key
        ], $mol_text.prototype, "table_rows", null);
        __decorate([
            $.$mol_mem_key
        ], $mol_text.prototype, "table_head_cells", null);
        __decorate([
            $.$mol_mem_key
        ], $mol_text.prototype, "table_cells", null);
        __decorate([
            $.$mol_mem_key
        ], $mol_text.prototype, "table_cell_content", null);
        __decorate([
            $.$mol_fiber.method
        ], $mol_text.prototype, "text2spans", null);
        __decorate([
            $.$mol_fiber.method
        ], $mol_text.prototype, "code2spans", null);
        __decorate([
            $.$mol_mem_key
        ], $mol_text.prototype, "block_content", null);
        $$.$mol_text = $mol_text;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//text.view.js.map
;
"use strict";
var $;
(function ($) {
    class $piterjs_meetup_page extends $.$mol_page {
        meetup() {
            const obj = new this.$.$piterjs_meetup();
            return obj;
        }
        tools() {
            return [
                this.Date(),
                this.Close()
            ];
        }
        body() {
            return [
                this.Description(),
                this.Links(),
                this.Speeches()
            ];
        }
        Speech(index) {
            const obj = new this.$.$piterjs_speech_snippet();
            obj.speech = () => this.speech(index);
            return obj;
        }
        date() {
            return "";
        }
        Date() {
            const obj = new this.$.$mol_view();
            obj.sub = () => [
                this.date()
            ];
            return obj;
        }
        Close_icon() {
            const obj = new this.$.$mol_icon_cross();
            return obj;
        }
        Close() {
            const obj = new this.$.$mol_link();
            obj.arg = () => ({
                meetup: null,
                speech: null,
                place: null,
                video: null
            });
            obj.sub = () => [
                this.Close_icon()
            ];
            return obj;
        }
        description() {
            return "";
        }
        Description() {
            const obj = new this.$.$mol_text();
            obj.text = () => this.description();
            return obj;
        }
        Video() {
            const obj = new this.$.$mol_link();
            obj.arg = () => ({
                video: "",
                place: null,
                speech: null
            });
            obj.title = () => "Трансляция";
            return obj;
        }
        Place() {
            const obj = new this.$.$mol_link();
            obj.arg = () => ({
                video: null,
                place: "",
                speech: null
            });
            obj.title = () => "Площадка";
            return obj;
        }
        links() {
            return [
                this.Video(),
                this.Place()
            ];
        }
        Links() {
            const obj = new this.$.$mol_view();
            obj.sub = () => this.links();
            return obj;
        }
        speeches() {
            return [];
        }
        Speeches() {
            const obj = new this.$.$mol_list();
            obj.rows = () => this.speeches();
            return obj;
        }
        speech(index) {
            const obj = new this.$.$piterjs_speech();
            return obj;
        }
    }
    __decorate([
        $.$mol_mem
    ], $piterjs_meetup_page.prototype, "meetup", null);
    __decorate([
        $.$mol_mem_key
    ], $piterjs_meetup_page.prototype, "Speech", null);
    __decorate([
        $.$mol_mem
    ], $piterjs_meetup_page.prototype, "Date", null);
    __decorate([
        $.$mol_mem
    ], $piterjs_meetup_page.prototype, "Close_icon", null);
    __decorate([
        $.$mol_mem
    ], $piterjs_meetup_page.prototype, "Close", null);
    __decorate([
        $.$mol_mem
    ], $piterjs_meetup_page.prototype, "Description", null);
    __decorate([
        $.$mol_mem
    ], $piterjs_meetup_page.prototype, "Video", null);
    __decorate([
        $.$mol_mem
    ], $piterjs_meetup_page.prototype, "Place", null);
    __decorate([
        $.$mol_mem
    ], $piterjs_meetup_page.prototype, "Links", null);
    __decorate([
        $.$mol_mem
    ], $piterjs_meetup_page.prototype, "Speeches", null);
    __decorate([
        $.$mol_mem_key
    ], $piterjs_meetup_page.prototype, "speech", null);
    $.$piterjs_meetup_page = $piterjs_meetup_page;
})($ || ($ = {}));
//page.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_attach("piterjs/meetup/page/page.view.css", "[mol_page][piterjs_meetup_page] {\n\tflex: 0 0 28rem;\n}\n\n[piterjs_meetup_page_body] {\n\tpadding: .75rem;\n}\n\n[piterjs_meetup_page_links] {\n\tflex-wrap: wrap;\n}\n\n[piterjs_meetup_page_video] {\n\tfont-weight: bolder;\n\tdisplay: inline;\n}\n\n[piterjs_meetup_page_place] {\n\tfont-weight: bolder;\n\tdisplay: inline;\n}\n\n[piterjs_meetup_page_description] {\n\tbox-shadow: none;\n\tpadding: 0;\n}\n\n[piterjs_meetup_page_title] {\n\tflex: 1000 1 auto;\n}\n\n[piterjs_meetup_page_date] {\n\tpadding: .5rem .75rem;\n\tfont-weight: normal;\n}\n");
})($ || ($ = {}));
//page.view.css.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $piterjs_meetup_page extends $.$piterjs_meetup_page {
            title() {
                return this.meetup().title();
            }
            description() {
                return this.meetup().description();
            }
            date() {
                return this.meetup().start().toString('DD Month YYYY');
            }
            video() {
                return this.meetup().video() ?? '';
            }
            coords() {
                return this.meetup().place().coords();
            }
            bosy() {
                return [
                    ...this.description() ? [this.Description()] : [],
                    this.Links(),
                    this.Speeches(),
                ];
            }
            links() {
                return [
                    ...this.coords() ? [this.Place()] : [],
                    ...this.video() ? [this.Video()] : [],
                ];
            }
            speeches() {
                return this.meetup().speeches().map((speech, index) => this.Speech(index));
            }
            speech(index) {
                return this.meetup().speeches()[index];
            }
        }
        __decorate([
            $.$mol_mem
        ], $piterjs_meetup_page.prototype, "date", null);
        __decorate([
            $.$mol_mem
        ], $piterjs_meetup_page.prototype, "bosy", null);
        __decorate([
            $.$mol_mem
        ], $piterjs_meetup_page.prototype, "links", null);
        __decorate([
            $.$mol_mem
        ], $piterjs_meetup_page.prototype, "speeches", null);
        $$.$piterjs_meetup_page = $piterjs_meetup_page;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//page.view.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_row extends $.$mol_view {
    }
    $.$mol_row = $mol_row;
})($ || ($ = {}));
//row.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_attach("mol/row/row.view.css", "[mol_row] {\n\tdisplay: flex;\n\tflex-wrap: wrap;\n\talign-items: flex-start;\n\talign-content: flex-start;\n\tjustify-content: flex-start;\n\tpadding: .5rem;\n\tflex: 1 0 auto;\n\tbox-sizing: border-box;\n\tmax-width: 100%;\n}\n\n[mol_row] > * {\n\tmargin: .5rem;\n\tmax-width: 100%;\n}\n");
})($ || ($ = {}));
//row.view.css.js.map
;
"use strict";
var $;
(function ($) {
    class $piterjs_speaker_snippet extends $.$mol_view {
        speaker() {
            const obj = new this.$.$piterjs_speaker();
            return obj;
        }
        sub() {
            return [
                this.Photo(),
                this.Info()
            ];
        }
        photo() {
            return "";
        }
        Photo() {
            const obj = new this.$.$piterjs_image();
            obj.link = () => this.photo();
            return obj;
        }
        title() {
            return "";
        }
        Title() {
            const obj = new this.$.$mol_view();
            obj.sub = () => [
                this.title()
            ];
            return obj;
        }
        description() {
            return "";
        }
        Description() {
            const obj = new this.$.$mol_text();
            obj.text = () => this.description();
            return obj;
        }
        Info() {
            const obj = new this.$.$mol_list();
            obj.sub = () => [
                this.Title(),
                this.Description()
            ];
            return obj;
        }
    }
    __decorate([
        $.$mol_mem
    ], $piterjs_speaker_snippet.prototype, "speaker", null);
    __decorate([
        $.$mol_mem
    ], $piterjs_speaker_snippet.prototype, "Photo", null);
    __decorate([
        $.$mol_mem
    ], $piterjs_speaker_snippet.prototype, "Title", null);
    __decorate([
        $.$mol_mem
    ], $piterjs_speaker_snippet.prototype, "Description", null);
    __decorate([
        $.$mol_mem
    ], $piterjs_speaker_snippet.prototype, "Info", null);
    $.$piterjs_speaker_snippet = $piterjs_speaker_snippet;
})($ || ($ = {}));
//snippet.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        const { rem } = $.$mol_style_unit;
        $.$mol_style_define($$.$piterjs_speaker_snippet, {
            display: 'flex',
            alignItems: 'flex-start',
            flexWrap: 'wrap',
            padding: rem(.75),
            Photo: {
                width: rem(20),
                flex: {
                    grow: 0,
                    shrink: 1,
                    basis: 'auto',
                },
                padding: 0,
                margin: rem(.5),
                position: 'relative',
                overflow: 'visible',
                zIndex: 0,
                boxShadow: 'none',
                borderRadius: '0',
                '::after': {
                    content: '',
                    position: 'absolute',
                    zIndex: -1,
                    right: rem(-.25),
                    top: rem(-.25),
                    width: rem(1),
                    height: rem(1),
                    background: {
                        color: $.$mol_theme.current,
                    },
                },
                '::before': {
                    content: '',
                    position: 'absolute',
                    zIndex: -1,
                    left: rem(-.25),
                    bottom: rem(-.25),
                    width: rem(1),
                    height: rem(1),
                    background: {
                        color: $.$mol_theme.current,
                    },
                },
                Content: {},
            },
            Info: {
                display: 'flex',
                flexDirection: 'column',
                flex: {
                    grow: 2,
                    shrink: 1,
                    basis: rem(20),
                },
                padding: rem(.5),
            },
            Title: {
                padding: rem(.25),
                fontSize: '1.25em',
            },
            Description: {
                margin: 0,
                padding: 0,
                boxShadow: 'none',
                Row: {
                    margin: rem(.25),
                },
            },
        });
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//snippet.view.css.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $piterjs_speaker_snippet extends $.$piterjs_speaker_snippet {
            title() {
                return this.speaker().title();
            }
            description() {
                return this.speaker().description();
            }
            photo() {
                return this.speaker().photo();
            }
        }
        $$.$piterjs_speaker_snippet = $piterjs_speaker_snippet;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//snippet.view.js.map
;
"use strict";
var $;
(function ($) {
    class $piterjs_speech_page extends $.$mol_page {
        speech() {
            const obj = new this.$.$piterjs_speech();
            return obj;
        }
        minimal_width() {
            return 600;
        }
        tools() {
            return [
                this.Close()
            ];
        }
        body() {
            return [
                this.Description(),
                this.Links(),
                this.Speaker()
            ];
        }
        Close_icon() {
            const obj = new this.$.$mol_icon_cross();
            return obj;
        }
        Close() {
            const obj = new this.$.$mol_link();
            obj.arg = () => ({
                speech: null
            });
            obj.sub = () => [
                this.Close_icon()
            ];
            return obj;
        }
        description() {
            return "";
        }
        Description() {
            const obj = new this.$.$mol_text();
            obj.text = () => this.description();
            return obj;
        }
        slides() {
            return "";
        }
        Slides() {
            const obj = new this.$.$mol_link();
            obj.uri = () => this.slides();
            obj.title = () => "Слайды";
            obj.target = () => "_blank";
            return obj;
        }
        video() {
            return "";
        }
        Video() {
            const obj = new this.$.$mol_link();
            obj.uri = () => this.video();
            obj.title = () => "Видео";
            obj.target = () => "_blank";
            return obj;
        }
        links() {
            return [
                this.Slides(),
                this.Video()
            ];
        }
        Links() {
            const obj = new this.$.$mol_row();
            obj.sub = () => this.links();
            return obj;
        }
        speaker() {
            const obj = new this.$.$piterjs_speaker();
            return obj;
        }
        Speaker() {
            const obj = new this.$.$piterjs_speaker_snippet();
            obj.speaker = () => this.speaker();
            return obj;
        }
    }
    __decorate([
        $.$mol_mem
    ], $piterjs_speech_page.prototype, "speech", null);
    __decorate([
        $.$mol_mem
    ], $piterjs_speech_page.prototype, "Close_icon", null);
    __decorate([
        $.$mol_mem
    ], $piterjs_speech_page.prototype, "Close", null);
    __decorate([
        $.$mol_mem
    ], $piterjs_speech_page.prototype, "Description", null);
    __decorate([
        $.$mol_mem
    ], $piterjs_speech_page.prototype, "Slides", null);
    __decorate([
        $.$mol_mem
    ], $piterjs_speech_page.prototype, "Video", null);
    __decorate([
        $.$mol_mem
    ], $piterjs_speech_page.prototype, "Links", null);
    __decorate([
        $.$mol_mem
    ], $piterjs_speech_page.prototype, "speaker", null);
    __decorate([
        $.$mol_mem
    ], $piterjs_speech_page.prototype, "Speaker", null);
    $.$piterjs_speech_page = $piterjs_speech_page;
})($ || ($ = {}));
//page.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        const { rem } = $.$mol_style_unit;
        $.$mol_style_define($$.$piterjs_speech_page, {
            flex: {
                grow: 1000,
                shrink: 0,
                basis: rem(36),
            },
            Description: {
                boxShadow: 'none',
            },
            Links: {
                margin: {
                    top: rem(-1),
                    right: 0,
                    bottom: 0,
                    left: 0,
                },
                padding: rem(.75),
                fontWeight: '600',
                flex: 'none',
                '>': {
                    $mol_view: {
                        margin: 0,
                    }
                }
            },
        });
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//page.view.css.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $piterjs_speech_page extends $.$piterjs_speech_page {
            title() {
                return this.speech().title();
            }
            description() {
                return this.speech().description();
            }
            speaker() {
                return this.speech().speaker();
            }
            slides() {
                return this.speech().slides();
            }
            video() {
                return this.speech().video();
            }
            links() {
                return [
                    ...this.slides() ? [this.Slides()] : [],
                    ...this.video() ? [this.Video()] : [],
                ];
            }
        }
        __decorate([
            $.$mol_mem
        ], $piterjs_speech_page.prototype, "links", null);
        $$.$piterjs_speech_page = $piterjs_speech_page;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//page.view.js.map
;
"use strict";
var $;
(function ($) {
    class $piterjs_meetup_snippet extends $.$mol_link {
        arg() {
            return {
                meetup: this.id(),
                speech: null,
                now: null,
                video: null,
                place: null,
                others: null
            };
        }
        meetup() {
            const obj = new this.$.$piterjs_meetup();
            return obj;
        }
        sub() {
            return [
                this.Title(),
                this.Date()
            ];
        }
        id() {
            return "";
        }
        title() {
            return "";
        }
        Title() {
            const obj = new this.$.$mol_view();
            obj.sub = () => [
                this.title()
            ];
            return obj;
        }
        date() {
            return "";
        }
        Date() {
            const obj = new this.$.$mol_view();
            obj.sub = () => [
                this.date()
            ];
            return obj;
        }
    }
    __decorate([
        $.$mol_mem
    ], $piterjs_meetup_snippet.prototype, "meetup", null);
    __decorate([
        $.$mol_mem
    ], $piterjs_meetup_snippet.prototype, "Title", null);
    __decorate([
        $.$mol_mem
    ], $piterjs_meetup_snippet.prototype, "Date", null);
    $.$piterjs_meetup_snippet = $piterjs_meetup_snippet;
})($ || ($ = {}));
//snippet.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_attach("piterjs/meetup/snippet/snippet.view.css", "[piterjs_meetup_snippet] {\n\tdisplay: flex;\n\twhite-space: nowrap;\n\tpadding: 0;\n}\n\n[piterjs_meetup_snippet_title] {\n\tpadding: .5rem .75rem;\n\tflex: 1 1 auto;\n\tfont-weight: 600;\n}\n\n[piterjs_meetup_snippet_date] {\n\tcolor: var(--mol_theme_text);\n\tpadding: .5rem .75rem;\n}\n");
})($ || ($ = {}));
//snippet.view.css.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $piterjs_meetup_snippet extends $.$piterjs_meetup_snippet {
            id() {
                return this.meetup().id();
            }
            title() {
                return this.meetup().title();
            }
            date() {
                return this.meetup().start().toString("Month'YY");
            }
        }
        __decorate([
            $.$mol_mem
        ], $piterjs_meetup_snippet.prototype, "date", null);
        $$.$piterjs_meetup_snippet = $piterjs_meetup_snippet;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//snippet.view.js.map
;
"use strict";
var $;
(function ($) {
    class $piterjs_intro_page extends $.$mol_view {
        sub() {
            return [
                this.Head(),
                this.Text()
            ];
        }
        title() {
            return "PiterJS";
        }
        Title() {
            const obj = new this.$.$mol_view();
            obj.sub = () => [
                this.title()
            ];
            return obj;
        }
        head() {
            return [
                this.Title()
            ];
        }
        Head() {
            const obj = new this.$.$mol_view();
            obj.sub = () => this.head();
            return obj;
        }
        text() {
            return "";
        }
        Text() {
            const obj = new this.$.$mol_text();
            obj.text = () => this.text();
            return obj;
        }
    }
    __decorate([
        $.$mol_mem
    ], $piterjs_intro_page.prototype, "Title", null);
    __decorate([
        $.$mol_mem
    ], $piterjs_intro_page.prototype, "Head", null);
    __decorate([
        $.$mol_mem
    ], $piterjs_intro_page.prototype, "Text", null);
    $.$piterjs_intro_page = $piterjs_intro_page;
})($ || ($ = {}));
//page.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_attach("piterjs/intro/page/page.view.css", "[piterjs_intro_page] {\n\tflex: auto;\n\tdisplay: flex;\n\talign-items: center;\n\talign-content: center;\n\tjustify-content: center;\n\tflex-direction: column;\n}\n\n[piterjs_intro_page_head] {\n\tdisplay: flex;\n\talign-items: center;\n\ttext-align: center;\n}\n\n\n[piterjs_intro_page_title] {\n\tfont-size: 2em;\n\tmargin: 2vmin;\n\tfont-weight: 600;\n\tline-height: 1;\n}\n\n[piterjs_intro_page_text] {\n\tmargin: 2vmin;\n\tbox-shadow: none;\n\tmax-width: none;\n}\n");
})($ || ($ = {}));
//page.view.css.js.map
;
"use strict";
var $;
(function ($) {
    class $piterjs_logo extends $.$piterjs_image {
        link() {
            return "piterjs/logo/logo.svg";
        }
    }
    $.$piterjs_logo = $piterjs_logo;
})($ || ($ = {}));
//logo.view.tree.js.map
;
var $node = $node || {} ; $node[ "/piterjs/logo/logo.svg" ] = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNzAiIGhlaWdodD0iMjcwIiBmaWxsPSJub25lIj4KICA8cGF0aCBmaWxsPSIjRjdERjFFIiBkPSJNMTYuNCAyNTMuNmg0MXYyLjdsLjEgMTMuN0gwdi01Ny41aDE2LjR2NDF6TTI1Ni4zIDU3LjZoLTIuN1YxNi40aC00MXYtMi43TDIxMi41IDBIMjcwdjU3LjVsLTEzLjcuMXoiLz4KICA8cGF0aCBmaWxsPSIjMDEwMjAzIiBkPSJNMjE4LjMgMTY0LjdMMjEyIDE2MmMtMTEtNC43LTE1LjctNy45LTE1LjctMTUuNSAwLTYuMiA0LjgtMTEgMTIuMi0xMSA3LjIgMCAxMiAzLjEgMTYuNCAxMWwyMC0xMi43Yy04LjUtMTQuNi0yMC4xLTIwLjMtMzYuNC0yMC4zLTIzIDAtMzcuNSAxNC42LTM3LjUgMzMuNiAwIDIwLjcgMTIuMiAzMC41IDMwLjggMzguNGw2LjQgMi43YzExLjggNSAxOC43IDguMiAxOC43IDE2LjkgMCA3LjMtNi44IDEyLjUtMTcuNCAxMi41LTEyLjcgMC0xOS43LTYuNS0yNS4yLTE1LjVsLTIxIDEyYzcuNiAxNC43IDIzIDI2IDQ2LjcgMjYgMjQuMyAwIDQyLjUtMTIuNiA0Mi41LTM1LjUgMC0yMS4yLTEyLjItMzAuNi0zNC0zOS45ek0xMjMuNyAyMDEuM2MwIDEyLjctNS4zIDE2LTEzLjcgMTYtOC44IDAtMTIuNC02LTE2LjQtMTNsLTIxIDEyLjVjNiAxMi43IDE4IDIzLjMgMzguNSAyMy4zIDIyLjYgMCAzOC4yLTEyIDM4LjItMzguNHYtODYuOWgtMjUuNnY4Ni41ek0xMTEuNCA2NS40aC04bC0uMS0zLjVoOWMtMy40LTQuNy0yLjItMTMtLjMtMjBoLTkuMmwxLTN2LTUuMkg5NGwyIDMtMiAyLjloOGwtLjEgMi4zaC05Yy0yIDctMy4xIDE1LjMuMyAyMGg4LjJsLjEgMy4xdi40SDk1LjNjLS44IDAtMiAxLjItMi4zIDIuM0g3OC45di0zLjVoMTMuN2MtMTAuNS04LjIgMS44LTMyLjkgMS44LTMyLjloLTE2bDEtN3YtNC43aC05LjlsMiAyLjQtMiAyLjNoNy40bC0uMSA3aC05LjNzLTEyLjMgMjQuNy0xLjggMzNoMTAuNnYzLjRINTMuNnYtLjMuMS01LjZoNy4zYy0zLjQtNC43LTIuMi0xMy0uMy0yMGgtNy40di0yLjNoLjR2LTZoLTkuM2wyIDMtMiAzaDh2Mi4zaC04LjRjLTEuOSA3LTMgMTUuMy40IDIwaDcuNmwtLjUgNS42di4yaC0xLjJWNzBoLS45TDM4LjUgNTl2LTguOGgtOS45bDIgMy0yIDNoOC44djNsNi40IDguOXMtLjggMi4xLS40IDMuNWE1MCA1MCAwIDAgMCA2LjYgNy45YzEuNCAxLjUgMy42IDYgMy42IDZoMjQuOHY2Yy0xLjIuNS0zLjIgMi0zLjIgMy43IDAgMi4xIDEuOCAzLjkgNC4yIDMuOSAyLjMgMCA0LjItMS44IDQuMi0zLjkgMC0xLjYtLjUtMy4yLTIuOC0zLjZ2LTYuMUgxMDdsMS4zLTQuM2MtNS4yLTIuMy4zLTcuOCAzLTEwLjJsMS42LTUuNWgtMS42di0uMXptLTQ5IDcuOWgtMi4zdi0yLjRoMi40djIuNHptNC43IDBoLTIuM3YtMi40aDIuM3YyLjR6bTQuNyAwaC0yLjN2LTIuNGgyLjN2Mi40em00LjcgMGgtMi4zdi0yLjRoMi4zdjIuNHptOC4zIDBoLTIuNHYtMi40aDIuNHYyLjR6bTQuNyAwSDg3di0yLjRoMi40djIuNHptNC42IDBoLTIuM3YtMi40aDIuM3YyLjR6bTQuNyAwaC0yLjN2LTIuNGgyLjN2Mi40eiIvPgo8L3N2Zz4K"

;
"use strict";
var $;
(function ($) {
    $.$mol_style_attach("piterjs/logo/logo.view.css", "[piterjs_logo] {\n\tdisplay: block;\n\twidth: 15vmin;\n\tbox-shadow: none;\n\tmargin: 1.5vmin;\n}\n");
})($ || ($ = {}));
//logo.view.css.js.map
;
var $node = $node || {} ; $node[ "/piterjs/logo/logo_1024.png" ] = "data:image/png;base64,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TlTl/5AWRCMBEiABEiABEiABEnARoAOAT0LcErj28mzJz+UjHrc3mBMjAT8EmP/vBxA/JgESIAESIAESaHYEuDpqdre8+Uw4R4X/jhiS3XwmzJmSAAm4ETixM/P/3YDwBxIgARIgARIggWZPgA6AZv8IxDeAAednSmZLhgDH913m7EjAm8ABeycLUoFoJEACJEACJEACJEACBgE6AAwWfBeHBLKzWki/czLjcGacEgmQQGMEunXh7n9jfPgZCZAACZAACZBA8yRAB0DzvO/NatZD+9EB0KxuOCdLAopAt65p5EACJEACJEACJEACJOBBgA4ADyD8Mf4I7LJjshzGUmDxd2M5IxLwQSArM0E6HZrq41MeJgESIAESIAESIIHmS4AOgOZ775vVzI86jIuBZnXDOdlmTeD4o9MkKYnaH836IeDkSYAESIAESIAELAkkVP7Rod7yEx4kgTgiUFtbL7W1cTShZjyVvY79T1aV2r+ZE+7Kk/7UgWhWT0yi0v5LTKQDoFnddE6WBEiABEiABEjAFoEkW63YiARinAAWA1gU0GKfQEKA67okde9TUgI8KfYxcQYkQAIkQAIkQAIkQAIk4EWAKQBeSHiABEiABEiABEiABEiABEiABEiABOKPAB0A8XdPOSMSIAESIAESIAESIAESIAESIAES8CJAB4AXEh4gARIgARIgARIgARIgARIgARIggfgjQAdA/N1TzogESIAESIAESIAESIAESIAESIAEvAjQAeCFhAdIgARIgARIgARIgARIgARIgARIIP4I0AEQf/eUMyIBEiABEiABEiABEiABEiABEiABLwJ0AHgh4QESIAESIAESIAESIAESIAESIAESiD8CdADE3z3ljEiABEiABEiABEiABEiABEiABEjAiwAdAF5IeIAESIAESIAESIAESIAESIAESIAE4o8AHQDxd085IxIgARIgARIgARIgARIgARIgARLwIkAHgBcSHiABEiABEiABEiABEiABEiABEiCB+CNAB0D83VPOiARIgARIgARIgARIgARIgARIgAS8CNAB4IWEB0iABEiABEiABEiABEiABEiABEgg/gjQARB/95QzIgESIAESIAESIAESIAESIAESIAEvAnQAeCHhARIgARIgARIgARIgARIgARIgARKIPwJ0AMTfPeWMSIAESIAESIAESIAESIAESIAESMCLAB0AXkh4gARIgARIgARIgARIgARIgARIgATijwAdAPF3TzkjEiABEiABEiABEiABEiABEiABEvAiQAeAFxIeIAESIAESIAESIAESIAESIAESIIH4I0AHQPzdU86IBEiABEiABEiABEiABEiABEiABLwI0AHghYQHSIAESIAESIAESIAESIAESIAESCD+CNABEH/3lDMiARIgARIgARIgARIgARIgARIgAS8CdAB4IeEBEiABEiABEiABEiABEiABEiABEog/AnQAxN895YxIgARIgARIgARIgARIgARIgARIwIsAHQBeSHiABEiABEiABEiABEiABEiABEiABOKPAB0A8XdPOSMSiEsCdXX18to7lbJxc11A8/vgs62yqrQ2oHPYmARIgARIgARIgARIgATikUBC5R8d6uNxYpwTCZBAfBBYs65WJj2xSeY+UyErVwe3kG+hXJ0ndU6Tof2zpFuX9PgAw1mQAAmQAAmQAAmQAAmQQIAE6AAIEBibkwAJRIZAdXW9PDp7k4yZuEE2bHLOT3nc0Wky5qZcOWCflMhMhFchARIgARIgARIgARIggSghQAdAlNwIDoMESMAg8L/ft8l5Q8rlh1+2GQcdfJeQIHLrNTlyw7BsScAPNBIgARIgARIgARIgARJoBgSoAdAMbjKnSAKxROD5l7fIUaevDtviHyzqVUDBnQ9ukN4DymT9xsA0BWKJJcdKAiRAAiRAAiRAAiRAAmYCdACYafA9CZBAkxJY8EKFXDC0XDZXOBfy39iEXn6zSnpeXCqbAhQWbKxPfkYCJEACJEACJEACJEAC0UqADoBovTMcFwk0MwJLX9kiA69bo+3OR3Lqn39TrUUCVFYxEiCS3HktEiABEiABEiABEiCByBOgAyDyzHlFEiABDwK//blN+l29RmqDE/n36C3wH9/7ZKtcd8e6wE/kGSRAAiRAAiRAAiRAAiQQQwToAIihm8WhkkA8EqitrZcB166RyqrIhP37YjhzQYW8/Galr495nARIgARIgARIgARIgARingAdADF/CzkBEohtAtPmbpaPv6yOikkMvWGtVG1tWkdEVIDgIEiABEiABEiABEiABOKSAB0AcXlbOSkSiA0C27bVy0PTN0bNYFeV1srcZzZHzXg4EBIgARIgARIgARIgARJwkgAdAE7SZF8kQAIBEYDq/7+r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BBBAAAEEEEAAAasCFACs8hMcAQQQQAABBBBAAAEEEEAAATMCFADMOBMFAQQQQAABBBBAAAEEEEAAAasCFACs8hMcAQQQQAABBBBAAAEEEEAAATMCFADMOBMFAQQQQAABBBBAAAEEEEAAAasCFACs8hMcAQQQQAABBBBAAAEEEEAAATMCFADMOBMFAQQQQAABBBBAAAEEEEAAAasCFACs8hMcAQQQQAABBBBAAAEEEEAAATMCFADMOBMFAQQQQAABBBBAAAEEEEAAAasCFACs8hMcAQQQQAABBBBAAAEEEEAAATMCFADMOBMFAQQQQAABBBBAAAEEEEAAAasCFACs8hMcAQQQQAABBBBAAAEEEEAAATMCFADMOBMFAQQQQAABBBBAAAEEEEAAAasCFACs8hMcAQQQQAABBBBAAAEEEEAAATMCFADMOBMFAQQQQAABBBBAAAEEEEAAAasCFACs8hMcAQQQQAABBBBAAAEEEEAAATMCFADMOBMFAQQQQAABBBBAAAEEEEAAAasCFACs8hMcAQQQQAABBBBAAAEEEEAAATMCFADMOBMFAQQQQAABBBBAAAEEEEAAAasCFACs8hMcAQQQQAABBBBAAAEEEEAAATMCFADMOBMFAQQQQAABBBBAAAEEEEAAAasCFACs8hMcAQQQQAABBBBAAAEEEEAAATMCFADMOBMFAQQQQAABBBBAAAEEEEAAAasCFACs8hMcAQQQQAABBBBAAAEEEEAAATMCFADMOBMFAQQQQAABBBBAAAEEEEAAAasCFACs8hMcAQQQQAABBBBAAAEEEEAAATMCFADMOBMFAQQQQAABBBBAAAEEEEAAAasCFACs8hMcAQQQQAABBBBAAAEEEEAAATMCFADMOBMFAQQQQAABBBBAAAEEEEAAAasCFACs8hMcAQQQQAABBBBAAAEEEEAAATMCFADMOBMFAQQQQAABBBBAAAEEEEAAAasCFACs8hMcAQQQQAABBBBAAAEEEEAAATMCFADMOBMFAQQQQAABBBBAAAEEEEAAAasCFACs8hMcAQQQQAABBBBAAAEEEEAAATMCFADMOBMFAQQQQAABBBBAAAEEEEAAAasCFACs8hMcAQQQQAABBBBAAAEEEEAAATMCFADMOBMFAQQQQAABBBBAAAEEEEAAAasCFACs8hMcAQQQQAABBBBAAAEEEEAAATMCFADMOBMFAQQQQAABBBBAAAEEEEAAAasCFACs8hMcAQQQQAABBBBAAAEEEEAAATMCFADMOBMFAQQQQAABBBBAAAEEEEAAAasCFACs8hMcAQQQQAABBBBAAAEEEEAAATMCFADMOBMFAQQQQAABBBBAAAEEEEAAAasCFACs8hMcAQQQQAABBBBAAAEEEEAAATMCFADMOBMFAQQQQAABBBBAAAEEEEAAAasCFACs8hMcAQQQQAABBBBAAAEEEEAAATMCFADMOBMFAQQQQAABBBBAAAEEEEAAAasCFACs8hMcAQQQQAABBBBAAAEEEEAAATMCFADMOBMFAQQQQAABBBBAAAEEEEAAAasCFACs8hMcAQQQQAABBBBAAAEEEEAAATMCFADMOBMFAQQQQAABBBBAAAEEEEAAAasCFACs8hMcAQQQQAABBBBAAAEEEEAAATMCFADMOBMFAQQQQAABBBBAAAEEEEAAAasCFACs8hMcAQQQQAABBBBAAAEEEEAAATMCFADMOBMFAQQQQAABBBBAAAEEEEAAAasCFACs8hMcAQQQQAABBBBAAAEEEEAAATMCFADMOBMFAQQQQAABBBBAAAEEEEAAAasCFACs8hMcAQQQQAABBBBAAAEEEEAAATMCFADMOBMFAQQQQAABBBBAAAEEEEAAAasCFACs8hMcAQQQQAABBBBAAAEEEEAAATMCFADMOBMFAQQQQAABBBBAAAEEEEAAAasCFACs8hMcAQQQQAABBBBAAAEEEEAAATMCFADMOBMFAQQQQAABBBBAAAEEEEAAAasCFACs8hMcAQQQQAABBBBAAAEEEEAAATMCFADMOBMFAQQQQAABBBBAAAEEEEAAAasCFACs8hMcAQQQQAABBBBAAAEEEEAAATMCFADMOBMFAQQQQAABBBBAAAEEEEAAAasCFACs8hMcAQQQQAABBBBAAAEEEEAAATMCFADMOBMFAQQQQAABBBBAAAEEEEAAAasCFACs8hMcAQQQQAABBBBAAAEEEEAAATMC/w+FnlVv0rKu2gAAAABJRU5ErkJggg=="

;
var $node = $node || {} ; $node[ "/piterjs/logo/logo_128.png" ] = "data:image/png;base64,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"

;
var $node = $node || {} ; $node[ "/piterjs/logo/logo_192.png" ] = "data:image/png;base64,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"

;
var $node = $node || {} ; $node[ "/piterjs/logo/logo_48.png" ] = "data:image/png;base64,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"

;
var $node = $node || {} ; $node[ "/piterjs/logo/logo_512.png" ] = "data:image/png;base64,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"

;
var $node = $node || {} ; $node[ "/piterjs/logo/logo_96.png" ] = "data:image/png;base64,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"

;
"use strict";
var $;
(function ($) {
    class $piterjs_intro_main extends $.$piterjs_intro_page {
        meetup() {
            const obj = new this.$.$piterjs_meetup();
            return obj;
        }
        title() {
            return "PiterJS {title}";
        }
        head() {
            return [
                this.Logo(),
                this.Title()
            ];
        }
        Logo() {
            const obj = new this.$.$piterjs_logo();
            return obj;
        }
    }
    __decorate([
        $.$mol_mem
    ], $piterjs_intro_main.prototype, "meetup", null);
    __decorate([
        $.$mol_mem
    ], $piterjs_intro_main.prototype, "Logo", null);
    $.$piterjs_intro_main = $piterjs_intro_main;
})($ || ($ = {}));
//main.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_attach("piterjs/intro/main/main.view.css", "");
})($ || ($ = {}));
//main.view.css.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $piterjs_intro_main extends $.$piterjs_intro_main {
            title() {
                return super.title().replace('{title}', this.meetup().title());
            }
        }
        $$.$piterjs_intro_main = $piterjs_intro_main;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//main.view.js.map
;
"use strict";
var $;
(function ($) {
    class $piterjs_screen_lines extends $.$mol_svg_root {
        style() {
            return {
                fill: this.color()
            };
        }
        view_box() {
            return "0 0 310 246";
        }
        sub() {
            return [
                this.First(),
                this.Second(),
                this.Third()
            ];
        }
        color() {
            return "#FFE515";
        }
        First() {
            const obj = new this.$.$mol_svg_path();
            obj.geometry = () => "M56 9.00002L-1.5605e-05 67.5L-1.31571e-05 95.5L56 36.5L56 9.00002Z ";
            return obj;
        }
        Second() {
            const obj = new this.$.$mol_svg_path();
            obj.geometry = () => "M148.5 1.40751e-05L-7.6932e-06 158L0 246L238 6.25073e-06L148.5 1.40751e-05Z";
            return obj;
        }
        Third() {
            const obj = new this.$.$mol_svg_path();
            obj.geometry = () => "M167.5 152.5L167.5 108L268 3.62805e-06L309.5 0L167.5 152.5Z";
            return obj;
        }
    }
    __decorate([
        $.$mol_mem
    ], $piterjs_screen_lines.prototype, "First", null);
    __decorate([
        $.$mol_mem
    ], $piterjs_screen_lines.prototype, "Second", null);
    __decorate([
        $.$mol_mem
    ], $piterjs_screen_lines.prototype, "Third", null);
    $.$piterjs_screen_lines = $piterjs_screen_lines;
})($ || ($ = {}));
//lines.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_attach("piterjs/screen/lines/intro.view.css", "[piterjs_screen_lines] {\n\twidth: 25%;\n\tpointer-events: none;\n\tposition: absolute;\n\tz-index: -1;\n}\n");
})($ || ($ = {}));
//intro.view.css.js.map
;
"use strict";
var $;
(function ($) {
    class $piterjs_screen extends $.$mol_view {
        place() {
            const obj = new this.$.$piterjs_place();
            return obj;
        }
        sub() {
            return [
                this.Open(),
                this.Close()
            ];
        }
        content() {
            return [];
        }
        color_open() {
            return "#FFE515";
        }
        Open() {
            const obj = new this.$.$piterjs_screen_lines();
            obj.color = () => this.color_open();
            return obj;
        }
        color_close() {
            return "#FFE515";
        }
        Close() {
            const obj = new this.$.$piterjs_screen_lines();
            obj.color = () => this.color_close();
            return obj;
        }
    }
    __decorate([
        $.$mol_mem
    ], $piterjs_screen.prototype, "place", null);
    __decorate([
        $.$mol_mem
    ], $piterjs_screen.prototype, "Open", null);
    __decorate([
        $.$mol_mem
    ], $piterjs_screen.prototype, "Close", null);
    $.$piterjs_screen = $piterjs_screen;
})($ || ($ = {}));
//screen.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_attach("piterjs/screen/screen.view.css", "/* cyrillic */\n@font-face {\n\tfont-family: 'Fira Sans';\n\tfont-style: normal;\n\tfont-weight: 400;\n\tfont-display: swap;\n\tsrc: local('Fira Sans Regular'), local('FiraSans-Regular'), url(https://fonts.gstatic.com/s/firasans/v10/va9E4kDNxMZdWfMOD5Vvk4jLeTY.woff2) format('woff2');\n\tunicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;\n}\n/* latin */\n@font-face {\n\tfont-family: 'Fira Sans';\n\tfont-style: normal;\n\tfont-weight: 400;\n\tfont-display: swap;\n\tsrc: local('Fira Sans Regular'), local('FiraSans-Regular'), url(https://fonts.gstatic.com/s/firasans/v10/va9E4kDNxMZdWfMOD5Vvl4jL.woff2) format('woff2');\n\tunicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}\n\n[piterjs_screen] {\n\tfont-family: \"Fira Sans\", \"Verdana\", sans-serif;\n\tbackground: var(--mol_theme_back);\n\tflex: auto;\n\tdisplay: flex;\n\tz-index: 0;\n\tposition: relative;\n\tmin-width: 100%;\n}\n\n\n[piterjs_screen_open] {\n\tleft: 0;\n\ttop: 0;\n}\n\n[piterjs_screen_close] {\n\tright: 0;\n\tbottom: 0;\n\ttransform: rotate(180deg);\n}\n");
})($ || ($ = {}));
//screen.view.css.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $piterjs_screen extends $.$piterjs_screen {
            sub() {
                return [
                    this.Open(),
                    this.Close(),
                    ...this.content(),
                ];
            }
        }
        $$.$piterjs_screen = $piterjs_screen;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//screen.view.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_plugin extends $.$mol_view {
        dom_node(next) {
            const node = next || $.$mol_owning_get(this, $.$mol_view).dom_node();
            $.$mol_dom_render_attributes(node, this.attr_static());
            const events = this.event();
            for (let event_name in events) {
                node.addEventListener(event_name, $.$mol_fiber_root(events[event_name]), { passive: false });
            }
            return node;
        }
        attr_static() {
            return {};
        }
        event() {
            return {};
        }
        render() {
            this.dom_node_actual();
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_plugin.prototype, "dom_node", null);
    $.$mol_plugin = $mol_plugin;
})($ || ($ = {}));
//plugin.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_nav extends $.$mol_plugin {
        cycle(val) {
            if (val !== undefined)
                return val;
            return false;
        }
        mod_ctrl() {
            return false;
        }
        mod_shift() {
            return false;
        }
        mod_alt() {
            return false;
        }
        keys_x(val) {
            if (val !== undefined)
                return val;
            return [];
        }
        keys_y(val) {
            if (val !== undefined)
                return val;
            return [];
        }
        current_x(val) {
            if (val !== undefined)
                return val;
            return "";
        }
        current_y(val) {
            if (val !== undefined)
                return val;
            return "";
        }
        event_up(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        event_down(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        event_left(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        event_right(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        event() {
            return {
                ...super.event(),
                keydown: (event) => this.event_key(event)
            };
        }
        event_key(event) {
            if (event !== undefined)
                return event;
            return null;
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_nav.prototype, "cycle", null);
    __decorate([
        $.$mol_mem
    ], $mol_nav.prototype, "keys_x", null);
    __decorate([
        $.$mol_mem
    ], $mol_nav.prototype, "keys_y", null);
    __decorate([
        $.$mol_mem
    ], $mol_nav.prototype, "current_x", null);
    __decorate([
        $.$mol_mem
    ], $mol_nav.prototype, "current_y", null);
    __decorate([
        $.$mol_mem
    ], $mol_nav.prototype, "event_up", null);
    __decorate([
        $.$mol_mem
    ], $mol_nav.prototype, "event_down", null);
    __decorate([
        $.$mol_mem
    ], $mol_nav.prototype, "event_left", null);
    __decorate([
        $.$mol_mem
    ], $mol_nav.prototype, "event_right", null);
    __decorate([
        $.$mol_mem
    ], $mol_nav.prototype, "event_key", null);
    $.$mol_nav = $mol_nav;
})($ || ($ = {}));
//nav.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_nav extends $.$mol_nav {
            event_key(event) {
                if (!event)
                    return event;
                if (event.defaultPrevented)
                    return;
                if (this.mod_ctrl() && !event.ctrlKey)
                    return;
                if (this.mod_shift() && !event.shiftKey)
                    return;
                if (this.mod_alt() && !event.altKey)
                    return;
                switch (event.keyCode) {
                    case $.$mol_keyboard_code.up: return this.event_up(event);
                    case $.$mol_keyboard_code.down: return this.event_down(event);
                    case $.$mol_keyboard_code.left: return this.event_left(event);
                    case $.$mol_keyboard_code.right: return this.event_right(event);
                    case $.$mol_keyboard_code.pageUp: return this.event_up(event);
                    case $.$mol_keyboard_code.pageDown: return this.event_down(event);
                }
            }
            event_up(event) {
                if (!event)
                    return event;
                const keys = this.keys_y();
                if (keys.length < 1)
                    return;
                const index_y = this.index_y();
                const index_old = index_y === null ? 0 : index_y;
                const index_new = (index_old + keys.length - 1) % keys.length;
                event.preventDefault();
                if (index_old === 0 && !this.cycle())
                    return;
                this.current_y(this.keys_y()[index_new]);
            }
            event_down(event) {
                if (!event)
                    return event;
                const keys = this.keys_y();
                if (keys.length < 1)
                    return;
                const index_y = this.index_y();
                const index_old = index_y === null ? keys.length - 1 : index_y;
                const index_new = (index_old + 1) % keys.length;
                event.preventDefault();
                if (index_new === 0 && !this.cycle())
                    return;
                this.current_y(this.keys_y()[index_new]);
            }
            event_left(event) {
                if (!event)
                    return event;
                const keys = this.keys_x();
                if (keys.length < 1)
                    return;
                const index_x = this.index_x();
                const index_old = index_x === null ? 0 : index_x;
                const index_new = (index_old + keys.length - 1) % keys.length;
                event.preventDefault();
                if (index_old === 0 && !this.cycle())
                    return;
                this.current_x(this.keys_x()[index_new]);
            }
            event_right(event) {
                if (!event)
                    return event;
                const keys = this.keys_x();
                if (keys.length < 1)
                    return;
                const index_x = this.index_x();
                const index_old = index_x === null ? keys.length - 1 : index_x;
                const index_new = (index_old + 1) % keys.length;
                event.preventDefault();
                if (index_new === 0 && !this.cycle())
                    return;
                this.current_x(this.keys_x()[index_new]);
            }
            index_y() {
                let index = this.keys_y().indexOf(this.current_y());
                if (index < 0)
                    return null;
                return index;
            }
            index_x() {
                let index = this.keys_x().indexOf(this.current_x());
                if (index < 0)
                    return null;
                return index;
            }
        }
        $$.$mol_nav = $mol_nav;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//nav.view.js.map
;
"use strict";
var $;
(function ($) {
    class $piterjs_intro extends $.$mol_view {
        title() {
            return "PiterJS Вступление";
        }
        meetup() {
            const obj = new this.$.$piterjs_meetup();
            return obj;
        }
        page(val) {
            if (val !== undefined)
                return val;
            return "";
        }
        pages() {
            return {
                main: this.Main(),
                about: this.About(),
                roles_org: this.Roles_org(),
                friends: this.Friends(),
                speakers: this.Speakers(),
                profit: this.Proft(),
                info: this.Info(),
                follow: this.Follow()
            };
        }
        sub() {
            return [
                this.Screen()
            ];
        }
        attr() {
            return {
                tabindex: -1
            };
        }
        plugins() {
            return [
                this.Nav()
            ];
        }
        Main() {
            const obj = new this.$.$piterjs_intro_main();
            obj.meetup = () => this.meetup();
            return obj;
        }
        About() {
            const obj = new this.$.$piterjs_intro_page();
            obj.title = () => "Кто мы?";
            obj.text = () => "Обсуждаем JS и всё, что в него компилируется\nПроводим митапы в Питере каждый месяц с мая 2015\nБез отпусков. Без перерывов. Без каникул.\nИ COVID нам ни по чём!";
            return obj;
        }
        Roles_org() {
            const obj = new this.$.$piterjs_intro_page();
            obj.title = () => "Роли организаторов";
            obj.text = () => "Программный комитет\nФандрайзер 🔥\nВидео-мастер 🔥\nДизайнер 🔥\nКомьюнити-менеджер\nМенеджер";
            return obj;
        }
        Friends() {
            const obj = new this.$.$piterjs_intro_page();
            obj.title = () => "JUG.RU";
            obj.text = () => "Продюссер\nИнженер\nМонтажёр\nРежиссёр трансляции\nВедущий мероприятия\nВедущий воркшопа";
            return obj;
        }
        Speakers() {
            const obj = new this.$.$piterjs_intro_page();
            obj.title = () => "Докладчики";
            obj.text = () => "Нужны всегда\nДаже если боишься\nПоможем с темой\nПоможем с подготовкой\nПиши на hi@piterjs.org";
            return obj;
        }
        Proft() {
            const obj = new this.$.$piterjs_intro_page();
            obj.title = () => "Бонусы";
            obj.text = () => "За лучшие вопросы - призы\nМы ведём трансляцию\nИ записываем видео";
            return obj;
        }
        Info() {
            const obj = new this.$.$piterjs_intro_page();
            obj.title = () => "Твой вклад";
            obj.text = () => "patreon.com/piterjs\ngithub.com/piterjs\nhi@piterjs.org";
            return obj;
        }
        Follow() {
            const obj = new this.$.$piterjs_intro_page();
            obj.title = () => "Следите за новостями";
            obj.text = () => "medium.com/piterjs\ntwitter.com/gopiterjs\nvk.com/piterjs\nt.me/piterjs\nyoutube.com/piterjs\npiterjs.org";
            return obj;
        }
        place() {
            const obj = new this.$.$piterjs_place();
            return obj;
        }
        Page() {
            const obj = new this.$.$mol_view();
            return obj;
        }
        Screen() {
            const obj = new this.$.$piterjs_screen();
            obj.place = () => this.place();
            obj.content = () => [
                this.Page()
            ];
            return obj;
        }
        page_ids() {
            return [];
        }
        Nav() {
            const obj = new this.$.$mol_nav();
            obj.keys_x = () => this.page_ids();
            obj.keys_y = () => this.page_ids();
            obj.current_x = (val) => this.page(val);
            obj.current_y = (val) => this.page(val);
            return obj;
        }
    }
    __decorate([
        $.$mol_mem
    ], $piterjs_intro.prototype, "meetup", null);
    __decorate([
        $.$mol_mem
    ], $piterjs_intro.prototype, "page", null);
    __decorate([
        $.$mol_mem
    ], $piterjs_intro.prototype, "Main", null);
    __decorate([
        $.$mol_mem
    ], $piterjs_intro.prototype, "About", null);
    __decorate([
        $.$mol_mem
    ], $piterjs_intro.prototype, "Roles_org", null);
    __decorate([
        $.$mol_mem
    ], $piterjs_intro.prototype, "Friends", null);
    __decorate([
        $.$mol_mem
    ], $piterjs_intro.prototype, "Speakers", null);
    __decorate([
        $.$mol_mem
    ], $piterjs_intro.prototype, "Proft", null);
    __decorate([
        $.$mol_mem
    ], $piterjs_intro.prototype, "Info", null);
    __decorate([
        $.$mol_mem
    ], $piterjs_intro.prototype, "Follow", null);
    __decorate([
        $.$mol_mem
    ], $piterjs_intro.prototype, "place", null);
    __decorate([
        $.$mol_mem
    ], $piterjs_intro.prototype, "Page", null);
    __decorate([
        $.$mol_mem
    ], $piterjs_intro.prototype, "Screen", null);
    __decorate([
        $.$mol_mem
    ], $piterjs_intro.prototype, "Nav", null);
    $.$piterjs_intro = $piterjs_intro;
})($ || ($ = {}));
//intro.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_attach("piterjs/intro/intro.view.css", "[piterjs_intro] {\n\tflex: auto;\n\tdisplay: flex;\n\tfont-size: 5vmin;\n}\n\n@keyframes piterjs_intro_screen_show {\n\tfrom {\n\t\ttransform: rotateY( 90deg );\n\t\topacity: 0;\n\t}\n}\n\n[piterjs_intro_screen] > *:not([piterjs_screen_lines]) {\n\tanimation: piterjs_intro_screen_show .25s ease-out forwards;\n}\n");
})($ || ($ = {}));
//intro.view.css.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $piterjs_intro extends $.$piterjs_intro {
            dom_node() {
                $.$mol_fiber_defer(() => this.focused(true));
                return super.dom_node();
            }
            page_ids() {
                return Object.keys(this.pages());
            }
            Page() {
                return this.pages()[this.page() || 'main'];
            }
            place() {
                return this.meetup().place();
            }
            place_notes() {
                return this.place().notes();
            }
            afterparty() {
                return this.meetup().afterparty();
            }
        }
        __decorate([
            $.$mol_mem
        ], $piterjs_intro.prototype, "dom_node", null);
        $$.$piterjs_intro = $piterjs_intro;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//intro.view.js.map
;
"use strict";
var $;
(function ($) {
    class $piterjs_video_page extends $.$mol_page {
        title() {
            return "Видеотрансляция";
        }
        tools() {
            return [
                this.Close()
            ];
        }
        body() {
            return [
                this.Frame()
            ];
        }
        Close_icon() {
            const obj = new this.$.$mol_icon_cross();
            return obj;
        }
        Close() {
            const obj = new this.$.$mol_link();
            obj.arg = () => ({
                video: null
            });
            obj.sub = () => [
                this.Close_icon()
            ];
            return obj;
        }
        source() {
            return "";
        }
        uri() {
            return this.source();
        }
        Frame() {
            const obj = new this.$.$mol_frame();
            obj.uri = () => this.uri();
            return obj;
        }
    }
    __decorate([
        $.$mol_mem
    ], $piterjs_video_page.prototype, "Close_icon", null);
    __decorate([
        $.$mol_mem
    ], $piterjs_video_page.prototype, "Close", null);
    __decorate([
        $.$mol_mem
    ], $piterjs_video_page.prototype, "Frame", null);
    $.$piterjs_video_page = $piterjs_video_page;
})($ || ($ = {}));
//page.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_attach("piterjs/video/page/page.view.css", "[piterjs_video_page] {\n\tflex: 1000 0 60rem;\n}\n");
})($ || ($ = {}));
//page.view.css.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $piterjs_video_page extends $.$piterjs_video_page {
            uri() {
                return this.source().replace('/watch?v=', '/embed/') ?? '';
            }
        }
        $$.$piterjs_video_page = $piterjs_video_page;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//page.view.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_map_yandex_mark extends $.$mol_object {
        pos() {
            const obj = new this.$.$mol_vector_2d(0, 0);
            return obj;
        }
        box() {
            const obj = new this.$.$mol_vector_2d(this.box_lat(), this.box_lon());
            return obj;
        }
        hint() {
            return "";
        }
        title() {
            return this.address();
        }
        content() {
            return "";
        }
        object() {
            return null;
        }
        box_lat() {
            const obj = new this.$.$mol_vector_range(0, 0);
            return obj;
        }
        box_lon() {
            const obj = new this.$.$mol_vector_range(0, 0);
            return obj;
        }
        address() {
            return "";
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_map_yandex_mark.prototype, "pos", null);
    __decorate([
        $.$mol_mem
    ], $mol_map_yandex_mark.prototype, "box", null);
    __decorate([
        $.$mol_mem
    ], $mol_map_yandex_mark.prototype, "box_lat", null);
    __decorate([
        $.$mol_mem
    ], $mol_map_yandex_mark.prototype, "box_lon", null);
    $.$mol_map_yandex_mark = $mol_map_yandex_mark;
})($ || ($ = {}));
//mark.view.tree.js.map
;
"use strict";
//undefined.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_data_record(sub) {
        return $.$mol_data_setup((val) => {
            let res = {};
            for (const field in sub) {
                try {
                    res[field] = sub[field](val[field]);
                }
                catch (error) {
                    if ('then' in error)
                        return $.$mol_fail_hidden(error);
                    error.message = `[${JSON.stringify(field)}] ${error.message}`;
                    return $.$mol_fail(error);
                }
            }
            return res;
        }, sub);
    }
    $.$mol_data_record = $mol_data_record;
})($ || ($ = {}));
//record.js.map
;
"use strict";
var $;
(function ($) {
    const Numb = $.$mol_data_pipe($.$mol_data_string, parseFloat);
    const Response = $.$mol_data_array($.$mol_data_record({
        boundingbox: $.$mol_data_array(Numb),
        lat: Numb,
        lon: Numb,
    }));
    $.$mol_geo_search_attribution = 'https://osm.org/copyright';
    function $mol_geo_search({ query, count = 1 }) {
        const url = new URL('https://nominatim.openstreetmap.org/search');
        url.searchParams.set('q', query);
        url.searchParams.set('limit', count.toString());
        url.searchParams.set('format', 'jsonv2');
        const json = $.$mol_fetch.json(url.toString());
        return Response(json).map(({ lon, lat, boundingbox: box }) => {
            return {
                coord: new $.$mol_vector_2d(lat, lon),
                box: new $.$mol_vector_2d(new $.$mol_vector_range(box[0], box[1]), new $.$mol_vector_range(box[2], box[3])),
            };
        });
    }
    $.$mol_geo_search = $mol_geo_search;
})($ || ($ = {}));
//search.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_map_yandex_mark extends $.$mol_map_yandex_mark {
            object() {
                const ymaps = $$.$mol_map_yandex.api();
                return new ymaps.Placemark(this.pos(), {
                    hintContent: this.hint(),
                    iconContent: this.title(),
                    balloonContent: this.content(),
                }, {
                    preset: "islands#redStretchyIcon",
                });
            }
            found() {
                return $.$mol_geo_search({ query: this.address() })[0] ?? null;
            }
            pos() {
                return this.found()?.coord ?? super.pos();
            }
            box() {
                return this.found()?.box ?? super.pos();
            }
        }
        __decorate([
            $.$mol_mem
        ], $mol_map_yandex_mark.prototype, "object", null);
        __decorate([
            $.$mol_mem
        ], $mol_map_yandex_mark.prototype, "found", null);
        __decorate([
            $.$mol_mem
        ], $mol_map_yandex_mark.prototype, "box", null);
        $$.$mol_map_yandex_mark = $mol_map_yandex_mark;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mark.view.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_map_yandex extends $.$mol_view {
        zoom(val) {
            if (val !== undefined)
                return val;
            return 2;
        }
        center(val) {
            if (val !== undefined)
                return val;
            return [
                0,
                0
            ];
        }
        objects() {
            return [];
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_map_yandex.prototype, "zoom", null);
    __decorate([
        $.$mol_mem
    ], $mol_map_yandex.prototype, "center", null);
    $.$mol_map_yandex = $mol_map_yandex;
})($ || ($ = {}));
//yandex.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_import extends $.$mol_object2 {
        static module(uri) {
            return $.$mol_fiber_sync(() => import(uri))();
        }
        static script(uri) {
            return $.$mol_fiber_sync(() => {
                const doc = $.$mol_dom_context.document;
                const script = doc.createElement('script');
                script.src = uri;
                doc.head.appendChild(script);
                return new Promise((done, fail) => {
                    script.onload = () => done($.$mol_dom_context);
                    script.onerror = () => fail(new Error(`Can not import ${uri}`));
                });
            })();
        }
        static style(uri) {
            return $.$mol_fiber_sync(() => {
                const doc = $.$mol_dom_context.document;
                const style = doc.createElement('link');
                style.rel = 'stylesheet';
                style.href = uri;
                doc.head.appendChild(style);
                return new Promise((done, fail) => {
                    style.onload = () => done(style.sheet);
                    style.onerror = () => fail(new Error(`Can not import ${uri}`));
                });
            })();
        }
    }
    __decorate([
        $.$mol_mem_key
    ], $mol_import, "module", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_import, "script", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_import, "style", null);
    $.$mol_import = $mol_import;
})($ || ($ = {}));
//import.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_attach("mol/map/yandex/yandex.view.css", "[mol_map_yandex] {\n\tflex: auto;\n\talign-self: stretch;\n\tfilter: var(--mol_theme_image);\n}\n");
})($ || ($ = {}));
//yandex.view.css.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_map_yandex extends $.$mol_map_yandex {
            static api() {
                return $.$mol_import.script(`https://api-maps.yandex.ru/2.1/?lang=${$.$mol_locale.lang()}`).ymaps;
            }
            api(next, force) {
                const ymaps = $mol_map_yandex.api();
                const load_map = $.$mol_fiber_sync(() => new Promise(done => ymaps.ready(done)));
                load_map();
                const api = new ymaps.Map(this.dom_node(), {
                    center: [0, 0],
                    zoom: 0,
                });
                api.copyrights.add($.$mol_geo_search_attribution);
                api.controls.remove('fullscreenControl');
                api.controls.remove('typeSelector');
                api.events.add(['actionend'], (event) => {
                    new $.$mol_after_frame($.$mol_fiber_root(() => {
                        this.update(event);
                    }));
                });
                return api;
            }
            update(event) {
                this.zoom(this.api().getZoom());
                this.center(this.api().getCenter());
            }
            bounds_updated() {
                const box = this.objects()[0]?.box();
                if (box) {
                    this.api().setBounds([
                        [box.x.min, box.y.min],
                        [box.x.max, box.y.max],
                    ]);
                }
                return true;
            }
            center(next, force) {
                if (next !== undefined)
                    return next;
                const pos = this.objects()[0]?.pos();
                if (pos)
                    return pos;
                return [0, 0];
            }
            render() {
                const api = this.api();
                api.setCenter(this.center(), this.zoom());
                api.geoObjects.removeAll();
                for (let obj of this.objects()) {
                    api.geoObjects.add(obj.object());
                }
                this.dom_node_actual();
            }
        }
        __decorate([
            $.$mol_mem
        ], $mol_map_yandex.prototype, "api", null);
        __decorate([
            $.$mol_mem
        ], $mol_map_yandex.prototype, "bounds_updated", null);
        __decorate([
            $.$mol_mem
        ], $mol_map_yandex.prototype, "center", null);
        $$.$mol_map_yandex = $mol_map_yandex;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//yandex.view.js.map
;
"use strict";
var $;
(function ($) {
    class $piterjs_place_page extends $.$mol_page {
        place() {
            const obj = new this.$.$piterjs_place();
            return obj;
        }
        title() {
            return "";
        }
        tools() {
            return [
                this.Close()
            ];
        }
        body() {
            return [
                this.Info(),
                this.Map()
            ];
        }
        Close_icon() {
            const obj = new this.$.$mol_icon_cross();
            return obj;
        }
        Close() {
            const obj = new this.$.$mol_link();
            obj.arg = () => ({
                place: null
            });
            obj.sub = () => [
                this.Close_icon()
            ];
            return obj;
        }
        address() {
            return "";
        }
        Address() {
            const obj = new this.$.$mol_view();
            obj.sub = () => [
                this.address()
            ];
            return obj;
        }
        route() {
            return "";
        }
        Route() {
            const obj = new this.$.$mol_view();
            obj.sub = () => [
                this.route()
            ];
            return obj;
        }
        info() {
            return [
                this.Address(),
                this.Route()
            ];
        }
        Info() {
            const obj = new this.$.$mol_view();
            obj.sub = () => this.info();
            return obj;
        }
        zoom(val) {
            if (val !== undefined)
                return val;
            return 14;
        }
        coords() {
            const obj = new this.$.$mol_vector_2d(0, 0);
            return obj;
        }
        Mark() {
            const obj = new this.$.$mol_map_yandex_mark();
            obj.pos = () => this.coords();
            obj.title = () => "";
            return obj;
        }
        Map() {
            const obj = new this.$.$mol_map_yandex();
            obj.zoom = (val) => this.zoom(val);
            obj.objects = () => [
                this.Mark()
            ];
            return obj;
        }
    }
    __decorate([
        $.$mol_mem
    ], $piterjs_place_page.prototype, "place", null);
    __decorate([
        $.$mol_mem
    ], $piterjs_place_page.prototype, "Close_icon", null);
    __decorate([
        $.$mol_mem
    ], $piterjs_place_page.prototype, "Close", null);
    __decorate([
        $.$mol_mem
    ], $piterjs_place_page.prototype, "Address", null);
    __decorate([
        $.$mol_mem
    ], $piterjs_place_page.prototype, "Route", null);
    __decorate([
        $.$mol_mem
    ], $piterjs_place_page.prototype, "Info", null);
    __decorate([
        $.$mol_mem
    ], $piterjs_place_page.prototype, "zoom", null);
    __decorate([
        $.$mol_mem
    ], $piterjs_place_page.prototype, "coords", null);
    __decorate([
        $.$mol_mem
    ], $piterjs_place_page.prototype, "Mark", null);
    __decorate([
        $.$mol_mem
    ], $piterjs_place_page.prototype, "Map", null);
    $.$piterjs_place_page = $piterjs_place_page;
})($ || ($ = {}));
//page.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_attach("piterjs/place/page/page.view.css", "[piterjs_place_page] {\n\tflex: 1000 0 60rem;\n}\n\n[piterjs_place_page_info] {\n\tpadding: .75rem;\n\tflex-wrap: wrap;\n}\n\n[piterjs_place_page_info] > * {\n\tpadding: .5rem .75rem;\n}\n");
})($ || ($ = {}));
//page.view.css.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $piterjs_place_page extends $.$piterjs_place_page {
            title() {
                return this.place().title();
            }
            address() {
                return this.place().address();
            }
            coords() {
                return this.place().coords();
            }
            route() {
                return this.place().route();
            }
            info() {
                return [
                    this.Address(),
                    ...this.route() ? [this.Route()] : []
                ];
            }
        }
        $$.$piterjs_place_page = $piterjs_place_page;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//page.view.js.map
;
"use strict";
var $;
(function ($) {
    class $piterjs_others_event extends $.$mol_link_iconed {
        start() {
            const obj = new this.$.$mol_time_moment();
            return obj;
        }
        target() {
            return "_blank";
        }
        content() {
            return [
                this.Location(),
                this.Date(),
                this.Title()
            ];
        }
        location() {
            return "";
        }
        Location() {
            const obj = new this.$.$mol_paragraph();
            obj.sub = () => [
                this.location()
            ];
            return obj;
        }
        date() {
            return "";
        }
        Date() {
            const obj = new this.$.$mol_paragraph();
            obj.sub = () => [
                this.date()
            ];
            return obj;
        }
        title() {
            return "";
        }
        Title() {
            const obj = new this.$.$mol_paragraph();
            obj.sub = () => [
                this.title()
            ];
            return obj;
        }
    }
    __decorate([
        $.$mol_mem
    ], $piterjs_others_event.prototype, "start", null);
    __decorate([
        $.$mol_mem
    ], $piterjs_others_event.prototype, "Location", null);
    __decorate([
        $.$mol_mem
    ], $piterjs_others_event.prototype, "Date", null);
    __decorate([
        $.$mol_mem
    ], $piterjs_others_event.prototype, "Title", null);
    $.$piterjs_others_event = $piterjs_others_event;
})($ || ($ = {}));
//event.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_attach("piterjs/others/event/event.view.css", "[piterjs_others_event] {\n\tdisplay: flex;\n\tflex-wrap: wrap;\n\tpadding: .5rem;\n}\n\n[piterjs_others_event_title] {\n\tpadding: 0 .25rem;\n\tflex: 1000 1 50%;\n\twhite-space: normal;\n}\n\n[piterjs_others_event_date] {\n\tpadding: 0 .25rem;\n\tflex: 0 0 6rem;\n\tcolor: var(--mol_theme_shade);\n}\n\n[piterjs_others_event_location] {\n\tpadding: 0 .25rem;\n\tflex: 1 0 10rem;\n\tcolor: var(--mol_theme_shade);\n}\n");
})($ || ($ = {}));
//event.view.css.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $piterjs_others_event extends $.$piterjs_others_event {
            date() {
                return this.start().toString("YYYY-MM-DD");
            }
        }
        __decorate([
            $.$mol_mem
        ], $piterjs_others_event.prototype, "date", null);
        $$.$piterjs_others_event = $piterjs_others_event;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//event.view.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_icon_plus extends $.$mol_icon {
        path() {
            return "M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z";
        }
    }
    $.$mol_icon_plus = $mol_icon_plus;
})($ || ($ = {}));
//plus.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    class $piterjs_others extends $.$mol_page {
        title() {
            return "Календарь фронтенд событий";
        }
        tools() {
            return [
                this.Add(),
                this.Close()
            ];
        }
        body() {
            return [
                this.Events()
            ];
        }
        Event(uid) {
            const obj = new this.$.$piterjs_others_event();
            obj.title = () => this.event_title(uid);
            obj.uri = () => this.event_uri(uid);
            obj.start = () => this.event_start(uid);
            obj.location = () => this.event_location(uid);
            return obj;
        }
        Add_icon() {
            const obj = new this.$.$mol_icon_plus();
            return obj;
        }
        Add() {
            const obj = new this.$.$mol_link();
            obj.uri = () => "https://github.com/web-standards-ru/calendar";
            obj.target = () => "_blank";
            obj.hint = () => "Добавить ещё событие";
            obj.sub = () => [
                this.Add_icon()
            ];
            return obj;
        }
        Close_icon() {
            const obj = new this.$.$mol_icon_cross();
            return obj;
        }
        Close() {
            const obj = new this.$.$mol_link();
            obj.arg = () => ({
                others: null
            });
            obj.sub = () => [
                this.Close_icon()
            ];
            return obj;
        }
        events() {
            return [];
        }
        Events() {
            const obj = new this.$.$mol_list();
            obj.rows = () => this.events();
            return obj;
        }
        event_title(uid) {
            return "";
        }
        event_uri(uid) {
            return "";
        }
        event_start(uid) {
            const obj = new this.$.$mol_time_moment();
            return obj;
        }
        event_location(uid) {
            return "";
        }
    }
    __decorate([
        $.$mol_mem_key
    ], $piterjs_others.prototype, "Event", null);
    __decorate([
        $.$mol_mem
    ], $piterjs_others.prototype, "Add_icon", null);
    __decorate([
        $.$mol_mem
    ], $piterjs_others.prototype, "Add", null);
    __decorate([
        $.$mol_mem
    ], $piterjs_others.prototype, "Close_icon", null);
    __decorate([
        $.$mol_mem
    ], $piterjs_others.prototype, "Close", null);
    __decorate([
        $.$mol_mem
    ], $piterjs_others.prototype, "Events", null);
    __decorate([
        $.$mol_mem_key
    ], $piterjs_others.prototype, "event_start", null);
    $.$piterjs_others = $piterjs_others;
})($ || ($ = {}));
//others.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_data_boolean = (val) => {
        if (typeof val === 'boolean')
            return val;
        return $.$mol_fail(new $.$mol_data_error(`${val} is not a boolean`));
    };
})($ || ($ = {}));
//boolean.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_attach("piterjs/others/others.view.css", "[piterjs_others] {\n\tflex: 0 0 40rem;\n}\n\n[piterjs_others_events] {\n\tpadding: .75rem;\n}\n");
})($ || ($ = {}));
//others.view.css.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        const Moment = $.$mol_data_pipe($.$mol_data_string, $.$mol_time_moment);
        const Event = $.$mol_data_record({
            uid: $.$mol_data_string,
            start: Moment,
            end: Moment,
            allDay: $.$mol_data_optional($.$mol_data_boolean),
            location: $.$mol_data_optional($.$mol_data_string),
            summary: $.$mol_data_string,
            description: $.$mol_data_optional($.$mol_data_string),
        });
        const Event_list = $.$mol_data_array(Event);
        class $piterjs_others extends $.$piterjs_others {
            list() {
                const uri = 'https://web-standards.ru/calendar.json';
                return Event_list(this.$.$mol_fetch.json(uri));
            }
            list_future() {
                const present = new $.$mol_time_moment().merge({
                    hour: 0,
                    second: 0,
                }).shift({ day: -2 }).toOffset(0).toString();
                const next = this.list().filter(event => {
                    return event.start.toOffset(0).toString() >= present;
                });
                return next;
            }
            dict() {
                const next = new Map();
                for (const event of this.list_future()) {
                    next.set(event.uid, event);
                }
                return next;
            }
            events() {
                return this.list_future().map(event => this.Event(event.uid));
            }
            event_title(uid) {
                return this.dict().get(uid).summary;
            }
            event_start(uid) {
                return this.dict().get(uid).start;
            }
            event_uri(uid) {
                return this.dict().get(uid).description ?? '';
            }
            event_location(uid) {
                return this.dict().get(uid).location ?? 'Земля';
            }
        }
        __decorate([
            $.$mol_mem
        ], $piterjs_others.prototype, "list_future", null);
        __decorate([
            $.$mol_mem
        ], $piterjs_others.prototype, "dict", null);
        __decorate([
            $.$mol_mem
        ], $piterjs_others.prototype, "events", null);
        $$.$piterjs_others = $piterjs_others;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//others.view.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_theme_auto extends $.$mol_plugin {
        attr() {
            return {
                mol_theme: this.theme()
            };
        }
        theme() {
            return "";
        }
    }
    $.$mol_theme_auto = $mol_theme_auto;
})($ || ($ = {}));
//auto.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_state_local extends $.$mol_object {
        static native() {
            if (this['native()'])
                return this['native()'];
            check: try {
                const native = $.$mol_dom_context.localStorage;
                if (!native)
                    break check;
                native.setItem('', '');
                native.removeItem('');
                return this['native()'] = native;
            }
            catch (error) {
                console.warn(error);
            }
            return this['native()'] = {
                getItem(key) {
                    return this[':' + key];
                },
                setItem(key, value) {
                    this[':' + key] = value;
                },
                removeItem(key) {
                    this[':' + key] = void 0;
                }
            };
        }
        static value(key, next, force) {
            if (next === void 0)
                return JSON.parse(this.native().getItem(key) || 'null');
            if (next === null)
                this.native().removeItem(key);
            else
                this.native().setItem(key, JSON.stringify(next));
            return next;
        }
        prefix() { return ''; }
        value(key, next) {
            return $mol_state_local.value(this.prefix() + '.' + key, next);
        }
    }
    __decorate([
        $.$mol_mem_key
    ], $mol_state_local, "value", null);
    $.$mol_state_local = $mol_state_local;
})($ || ($ = {}));
//local.js.map
;
"use strict";
var $;
(function ($) {
    function parse(theme) {
        if (theme === 'on')
            return true;
        if (theme === 'off')
            return false;
        return null;
    }
    function $mol_lights(next) {
        return this.$mol_state_local.value('$mol_lights', next)
            ?? parse(this.$mol_state_arg.value('mol_lights'))
            ?? $.$mol_dom_context.matchMedia('(prefers-color-scheme: light)').matches;
    }
    $.$mol_lights = $mol_lights;
})($ || ($ = {}));
//lights.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_theme_auto extends $.$mol_theme_auto {
            theme() {
                return this.$.$mol_lights() ? '$mol_theme_light' : '$mol_theme_dark';
            }
        }
        $$.$mol_theme_auto = $mol_theme_auto;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//auto.view.js.map
;
"use strict";
var $;
(function ($) {
    class $piterjs_app extends $.$mol_view {
        plugins() {
            return [
                this.Theme()
            ];
        }
        sub() {
            return [
                this.Screen()
            ];
        }
        toggle_intro(val) {
            if (val !== undefined)
                return val;
            return false;
        }
        Menu() {
            const obj = new this.$.$mol_page();
            obj.title = () => "Митапы";
            obj.tools = () => this.tools();
            obj.body = () => [
                this.Meetups(),
                this.Links()
            ];
            return obj;
        }
        Meetup(id) {
            const obj = new this.$.$piterjs_meetup_page();
            obj.meetup = () => this.meetup(id);
            return obj;
        }
        Speech(id) {
            const obj = new this.$.$piterjs_speech_page();
            obj.speech = () => this.speech(id);
            return obj;
        }
        Menu_meetup(id) {
            const obj = new this.$.$piterjs_meetup_snippet();
            obj.meetup = () => this.meetup(id);
            return obj;
        }
        Now() {
            const obj = new this.$.$piterjs_now();
            obj.place = () => this.place();
            return obj;
        }
        Intro() {
            const obj = new this.$.$piterjs_intro();
            obj.meetup = () => this.meetup_current();
            obj.page = (val) => this.intro(val);
            return obj;
        }
        Video() {
            const obj = new this.$.$piterjs_video_page();
            obj.source = () => this.video_uri();
            return obj;
        }
        Place() {
            const obj = new this.$.$piterjs_place_page();
            obj.place = () => this.place();
            return obj;
        }
        Others() {
            const obj = new this.$.$piterjs_others();
            return obj;
        }
        Theme() {
            const obj = new this.$.$mol_theme_auto();
            return obj;
        }
        place() {
            const obj = new this.$.$piterjs_place();
            return obj;
        }
        pages() {
            return [];
        }
        Book() {
            const obj = new this.$.$mol_book2();
            obj.pages = () => this.pages();
            obj.Placeholder = () => null;
            return obj;
        }
        Screen() {
            const obj = new this.$.$piterjs_screen();
            obj.place = () => this.place();
            obj.Open = () => null;
            obj.Close = () => null;
            obj.content = () => [
                this.Book()
            ];
            return obj;
        }
        tools() {
            return [];
        }
        menu_meetups() {
            return [];
        }
        Meetups() {
            const obj = new this.$.$mol_list();
            obj.rows = () => this.menu_meetups();
            return obj;
        }
        Conf_title() {
            const obj = new this.$.$mol_view();
            obj.sub = () => [
                "Conf"
            ];
            return obj;
        }
        Conf_date() {
            const obj = new this.$.$mol_view();
            obj.sub = () => [
                "сентябрь'19"
            ];
            return obj;
        }
        Conf() {
            const obj = new this.$.$mol_link();
            obj.uri = () => "https://conf.piterjs.org/";
            obj.sub = () => [
                this.Conf_title(),
                this.Conf_date()
            ];
            return obj;
        }
        Others_link() {
            const obj = new this.$.$mol_link();
            obj.uri = () => "#others";
            obj.title = () => "Другие события";
            return obj;
        }
        Links() {
            const obj = new this.$.$mol_list();
            obj.rows = () => [
                this.Conf(),
                this.Others_link()
            ];
            return obj;
        }
        meetup(id) {
            const obj = new this.$.$piterjs_meetup();
            return obj;
        }
        speech(id) {
            const obj = new this.$.$piterjs_speech();
            return obj;
        }
        meetup_current() {
            const obj = new this.$.$piterjs_meetup();
            return obj;
        }
        intro(val) {
            if (val !== undefined)
                return val;
            return "";
        }
        video_uri() {
            return "";
        }
    }
    __decorate([
        $.$mol_mem
    ], $piterjs_app.prototype, "toggle_intro", null);
    __decorate([
        $.$mol_mem
    ], $piterjs_app.prototype, "Menu", null);
    __decorate([
        $.$mol_mem_key
    ], $piterjs_app.prototype, "Meetup", null);
    __decorate([
        $.$mol_mem_key
    ], $piterjs_app.prototype, "Speech", null);
    __decorate([
        $.$mol_mem_key
    ], $piterjs_app.prototype, "Menu_meetup", null);
    __decorate([
        $.$mol_mem
    ], $piterjs_app.prototype, "Now", null);
    __decorate([
        $.$mol_mem
    ], $piterjs_app.prototype, "Intro", null);
    __decorate([
        $.$mol_mem
    ], $piterjs_app.prototype, "Video", null);
    __decorate([
        $.$mol_mem
    ], $piterjs_app.prototype, "Place", null);
    __decorate([
        $.$mol_mem
    ], $piterjs_app.prototype, "Others", null);
    __decorate([
        $.$mol_mem
    ], $piterjs_app.prototype, "Theme", null);
    __decorate([
        $.$mol_mem
    ], $piterjs_app.prototype, "place", null);
    __decorate([
        $.$mol_mem
    ], $piterjs_app.prototype, "Book", null);
    __decorate([
        $.$mol_mem
    ], $piterjs_app.prototype, "Screen", null);
    __decorate([
        $.$mol_mem
    ], $piterjs_app.prototype, "Meetups", null);
    __decorate([
        $.$mol_mem
    ], $piterjs_app.prototype, "Conf_title", null);
    __decorate([
        $.$mol_mem
    ], $piterjs_app.prototype, "Conf_date", null);
    __decorate([
        $.$mol_mem
    ], $piterjs_app.prototype, "Conf", null);
    __decorate([
        $.$mol_mem
    ], $piterjs_app.prototype, "Others_link", null);
    __decorate([
        $.$mol_mem
    ], $piterjs_app.prototype, "Links", null);
    __decorate([
        $.$mol_mem_key
    ], $piterjs_app.prototype, "meetup", null);
    __decorate([
        $.$mol_mem_key
    ], $piterjs_app.prototype, "speech", null);
    __decorate([
        $.$mol_mem
    ], $piterjs_app.prototype, "meetup_current", null);
    __decorate([
        $.$mol_mem
    ], $piterjs_app.prototype, "intro", null);
    $.$piterjs_app = $piterjs_app;
})($ || ($ = {}));
//app.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_meter extends $.$mol_plugin {
        zoom() {
            return 1;
        }
        width(val) {
            if (val !== undefined)
                return val;
            return 0;
        }
        height(val) {
            if (val !== undefined)
                return val;
            return 0;
        }
        left(val) {
            if (val !== undefined)
                return val;
            return 0;
        }
        right(val) {
            if (val !== undefined)
                return val;
            return 0;
        }
        bottom(val) {
            if (val !== undefined)
                return val;
            return 0;
        }
        top(val) {
            if (val !== undefined)
                return val;
            return 0;
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_meter.prototype, "width", null);
    __decorate([
        $.$mol_mem
    ], $mol_meter.prototype, "height", null);
    __decorate([
        $.$mol_mem
    ], $mol_meter.prototype, "left", null);
    __decorate([
        $.$mol_mem
    ], $mol_meter.prototype, "right", null);
    __decorate([
        $.$mol_mem
    ], $mol_meter.prototype, "bottom", null);
    __decorate([
        $.$mol_mem
    ], $mol_meter.prototype, "top", null);
    $.$mol_meter = $mol_meter;
})($ || ($ = {}));
//meter.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_meter extends $.$mol_meter {
            rect() {
                const node = this.dom_node();
                const win = this.$.$mol_dom_context;
                if (node !== $.$mol_dom_context.document.body) {
                    new $.$mol_after_frame($.$mol_atom2.current.fresh);
                    try {
                        const { left, top, right, bottom, width, height } = node.getBoundingClientRect();
                        return { left, top, right, bottom, width, height, zoom: win.devicePixelRatio || 1 };
                    }
                    catch (error) {
                    }
                }
                const size = $.$mol_window.size();
                return {
                    zoom: win.devicePixelRatio || 1,
                    left: 0,
                    top: 0,
                    right: size.width,
                    bottom: size.height,
                    width: size.width,
                    height: size.height,
                };
            }
            top() {
                return this.rect().top;
            }
            bottom() {
                return this.rect().bottom;
            }
            left() {
                return this.rect().left;
            }
            right() {
                return this.rect().right;
            }
            width() {
                return this.rect().width;
            }
            height() {
                return this.rect().height;
            }
            zoom() {
                return this.rect().zoom;
            }
        }
        __decorate([
            $.$mol_mem
        ], $mol_meter.prototype, "rect", null);
        __decorate([
            $.$mol_mem
        ], $mol_meter.prototype, "top", null);
        __decorate([
            $.$mol_mem
        ], $mol_meter.prototype, "bottom", null);
        __decorate([
            $.$mol_mem
        ], $mol_meter.prototype, "left", null);
        __decorate([
            $.$mol_mem
        ], $mol_meter.prototype, "right", null);
        __decorate([
            $.$mol_mem
        ], $mol_meter.prototype, "width", null);
        __decorate([
            $.$mol_mem
        ], $mol_meter.prototype, "height", null);
        __decorate([
            $.$mol_mem
        ], $mol_meter.prototype, "zoom", null);
        $$.$mol_meter = $mol_meter;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//meter.view.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_touch extends $.$mol_plugin {
        start_zoom(val) {
            if (val !== undefined)
                return val;
            return 0;
        }
        start_distance(val) {
            if (val !== undefined)
                return val;
            return 0;
        }
        zoom(val) {
            if (val !== undefined)
                return val;
            return 1;
        }
        start_pan(val) {
            if (val !== undefined)
                return val;
            return [
                0,
                0
            ];
        }
        pan(val) {
            if (val !== undefined)
                return val;
            return [
                0,
                0
            ];
        }
        pos(val) {
            if (val !== undefined)
                return val;
            return [
                NaN,
                NaN
            ];
        }
        start_pos(val) {
            if (val !== undefined)
                return val;
            return null;
        }
        swipe_precision() {
            return 16;
        }
        swipe_right(val) {
            if (val !== undefined)
                return val;
            return null;
        }
        swipe_bottom(val) {
            if (val !== undefined)
                return val;
            return null;
        }
        swipe_left(val) {
            if (val !== undefined)
                return val;
            return null;
        }
        swipe_top(val) {
            if (val !== undefined)
                return val;
            return null;
        }
        swipe_from_right(val) {
            if (val !== undefined)
                return val;
            return null;
        }
        swipe_from_bottom(val) {
            if (val !== undefined)
                return val;
            return null;
        }
        swipe_from_left(val) {
            if (val !== undefined)
                return val;
            return null;
        }
        swipe_from_top(val) {
            if (val !== undefined)
                return val;
            return null;
        }
        swipe_to_right(val) {
            if (val !== undefined)
                return val;
            return null;
        }
        swipe_to_bottom(val) {
            if (val !== undefined)
                return val;
            return null;
        }
        swipe_to_left(val) {
            if (val !== undefined)
                return val;
            return null;
        }
        swipe_to_top(val) {
            if (val !== undefined)
                return val;
            return null;
        }
        style() {
            return {
                ...super.style(),
                "touch-action": "none",
                "overscroll-behavior": "none"
            };
        }
        event() {
            return {
                ...super.event(),
                touchstart: (event) => this.event_start(event),
                touchmove: (event) => this.event_move(event),
                touchend: (event) => this.event_end(event),
                mousedown: (event) => this.event_start(event),
                mousemove: (event) => this.event_move(event),
                mouseup: (event) => this.event_end(event),
                mouseleave: (event) => this.event_leave(event),
                wheel: (event) => this.event_wheel(event)
            };
        }
        event_start(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        event_move(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        event_end(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        event_leave(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        event_wheel(event) {
            if (event !== undefined)
                return event;
            return null;
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_touch.prototype, "start_zoom", null);
    __decorate([
        $.$mol_mem
    ], $mol_touch.prototype, "start_distance", null);
    __decorate([
        $.$mol_mem
    ], $mol_touch.prototype, "zoom", null);
    __decorate([
        $.$mol_mem
    ], $mol_touch.prototype, "start_pan", null);
    __decorate([
        $.$mol_mem
    ], $mol_touch.prototype, "pan", null);
    __decorate([
        $.$mol_mem
    ], $mol_touch.prototype, "pos", null);
    __decorate([
        $.$mol_mem
    ], $mol_touch.prototype, "start_pos", null);
    __decorate([
        $.$mol_mem
    ], $mol_touch.prototype, "swipe_right", null);
    __decorate([
        $.$mol_mem
    ], $mol_touch.prototype, "swipe_bottom", null);
    __decorate([
        $.$mol_mem
    ], $mol_touch.prototype, "swipe_left", null);
    __decorate([
        $.$mol_mem
    ], $mol_touch.prototype, "swipe_top", null);
    __decorate([
        $.$mol_mem
    ], $mol_touch.prototype, "swipe_from_right", null);
    __decorate([
        $.$mol_mem
    ], $mol_touch.prototype, "swipe_from_bottom", null);
    __decorate([
        $.$mol_mem
    ], $mol_touch.prototype, "swipe_from_left", null);
    __decorate([
        $.$mol_mem
    ], $mol_touch.prototype, "swipe_from_top", null);
    __decorate([
        $.$mol_mem
    ], $mol_touch.prototype, "swipe_to_right", null);
    __decorate([
        $.$mol_mem
    ], $mol_touch.prototype, "swipe_to_bottom", null);
    __decorate([
        $.$mol_mem
    ], $mol_touch.prototype, "swipe_to_left", null);
    __decorate([
        $.$mol_mem
    ], $mol_touch.prototype, "swipe_to_top", null);
    __decorate([
        $.$mol_mem
    ], $mol_touch.prototype, "event_start", null);
    __decorate([
        $.$mol_mem
    ], $mol_touch.prototype, "event_move", null);
    __decorate([
        $.$mol_mem
    ], $mol_touch.prototype, "event_end", null);
    __decorate([
        $.$mol_mem
    ], $mol_touch.prototype, "event_leave", null);
    __decorate([
        $.$mol_mem
    ], $mol_touch.prototype, "event_wheel", null);
    $.$mol_touch = $mol_touch;
})($ || ($ = {}));
//touch.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_touch extends $.$mol_touch {
            rect() {
                return this.dom_node().getBoundingClientRect();
            }
            event_start(event) {
                if (event.defaultPrevented)
                    return;
                this.start_pan(this.pan());
                let pos;
                if (event instanceof MouseEvent) {
                    if (event.buttons === 1) {
                        pos = [event.pageX, event.pageY];
                        this.start_pos(pos);
                    }
                }
                else if (event instanceof TouchEvent) {
                    if (event.touches.length === 1) {
                        pos = [event.touches[0].pageX, event.touches[0].pageY];
                        this.start_pos(pos);
                    }
                    if (event.touches.length === 2) {
                        const distance = ((event.touches[1].pageX - event.touches[0].pageX) ** 2 + (event.touches[1].pageY - event.touches[0].pageY) ** 2) ** .5;
                        this.start_distance(distance);
                        this.start_zoom(this.zoom());
                    }
                }
            }
            event_leave(event) {
                if (event.defaultPrevented)
                    return;
                if (event instanceof MouseEvent)
                    this.pos(super.pos());
            }
            event_move(event) {
                if (event.defaultPrevented)
                    return;
                const start_pan = this.start_pan();
                let pos;
                let cursor_pos;
                if (event instanceof MouseEvent) {
                    cursor_pos = [event.pageX, event.pageY];
                    if (event.buttons === 1)
                        pos = cursor_pos;
                    else
                        this.start_pos(null);
                }
                else if (event instanceof TouchEvent) {
                    cursor_pos = [event.touches[0].pageX, event.touches[0].pageY];
                    if (event.touches.length === 1)
                        pos = cursor_pos;
                    else
                        this.start_pos(null);
                }
                if (cursor_pos) {
                    const { left, top } = this.rect();
                    this.pos([
                        Math.max(0, Math.round(cursor_pos[0] - left)),
                        Math.max(0, Math.round(cursor_pos[1] - top)),
                    ]);
                }
                if (pos) {
                    const start_pos = this.start_pos();
                    if (!start_pos)
                        return;
                    if (this.pan !== $mol_touch.prototype.pan) {
                        this.pan([start_pan[0] + pos[0] - start_pos[0], start_pan[1] + pos[1] - start_pos[1]]);
                        event.preventDefault();
                    }
                    if (typeof TouchEvent === 'undefined')
                        return;
                    if (!(event instanceof TouchEvent))
                        return;
                    const precision = this.swipe_precision();
                    if ((this.swipe_right !== $mol_touch.prototype.swipe_right
                        || this.swipe_from_left !== $mol_touch.prototype.swipe_from_left
                        || this.swipe_to_right !== $mol_touch.prototype.swipe_to_right)
                        && pos[0] - start_pos[0] > precision * 2
                        && Math.abs(pos[1] - start_pos[1]) < precision) {
                        this.swipe_right(event);
                        event.preventDefault();
                    }
                    if ((this.swipe_left !== $mol_touch.prototype.swipe_left
                        || this.swipe_from_right !== $mol_touch.prototype.swipe_from_right
                        || this.swipe_to_left !== $mol_touch.prototype.swipe_to_left)
                        && start_pos[0] - pos[0] > precision * 2
                        && Math.abs(pos[1] - start_pos[1]) < precision) {
                        this.swipe_left(event);
                        event.preventDefault();
                    }
                    if ((this.swipe_bottom !== $mol_touch.prototype.swipe_bottom
                        || this.swipe_from_top !== $mol_touch.prototype.swipe_from_top
                        || this.swipe_to_bottom !== $mol_touch.prototype.swipe_to_bottom)
                        && pos[1] - start_pos[1] > precision * 2
                        && Math.abs(pos[0] - start_pos[0]) < precision) {
                        this.swipe_bottom(event);
                        event.preventDefault();
                    }
                    if ((this.swipe_top !== $mol_touch.prototype.swipe_top
                        || this.swipe_from_bottom !== $mol_touch.prototype.swipe_from_bottom
                        || this.swipe_to_top !== $mol_touch.prototype.swipe_to_top)
                        && start_pos[1] - pos[1] > precision * 2
                        && Math.abs(pos[0] - start_pos[0]) < precision) {
                        this.swipe_top(event);
                        event.preventDefault();
                    }
                }
                if (typeof TouchEvent === 'undefined')
                    return;
                if (!(event instanceof TouchEvent))
                    return;
                if (event.touches.length === 2) {
                    if (this.zoom === $mol_touch.prototype.zoom)
                        return;
                    const pos0 = [event.touches[0].pageX, event.touches[0].pageY];
                    const pos1 = [event.touches[1].pageX, event.touches[1].pageY];
                    const distance = ((pos1[0] - pos0[0]) ** 2 + (pos1[1] - pos0[1]) ** 2) ** .5;
                    const center = [pos1[0] / 2 + pos0[0] / 2, pos1[1] / 2 + pos0[1] / 2];
                    const start_zoom = this.start_zoom();
                    const mult = distance / this.start_distance();
                    this.zoom(start_zoom * mult);
                    const pan = [(start_pan[0] - center[0]) * mult + center[0], (start_pan[1] - center[1]) * mult + center[1]];
                    this.pan(pan);
                    event.preventDefault();
                }
            }
            swipe_left(event) {
                if (this.rect().right - this.start_pos()[0] < this.swipe_precision() * 2)
                    this.swipe_from_right(event);
                else
                    this.swipe_to_left(event);
                this.event_end(event);
            }
            swipe_right(event) {
                if (this.start_pos()[0] - this.rect().left < this.swipe_precision() * 2)
                    this.swipe_from_left(event);
                else
                    this.swipe_to_right(event);
                this.event_end(event);
            }
            swipe_top(event) {
                if (this.rect().bottom - this.start_pos()[1] < this.swipe_precision() * 2)
                    this.swipe_from_bottom(event);
                else
                    this.swipe_to_top(event);
                this.event_end(event);
            }
            swipe_bottom(event) {
                if (this.start_pos()[1] - this.rect().top < this.swipe_precision() * 2)
                    this.swipe_from_top(event);
                else
                    this.swipe_to_bottom(event);
                this.event_end(event);
            }
            event_end(event) {
                this.start_pos(null);
            }
            event_wheel(event) {
                if (this.pan === $mol_touch.prototype.pan && this.zoom === $mol_touch.prototype.zoom)
                    return;
                if (this.pan !== $mol_touch.prototype.pan) {
                    event.preventDefault();
                }
                const zoom_prev = this.zoom() || 0.001;
                const zoom_next = zoom_prev * (1 - .1 * Math.sign(event.deltaY));
                const mult = zoom_next / zoom_prev;
                this.zoom(zoom_next);
                const pan_prev = this.pan();
                const center = [event.offsetX, event.offsetY];
                const pan_next = [(pan_prev[0] - center[0]) * mult + center[0], (pan_prev[1] - center[1]) * mult + center[1]];
                this.pan(pan_next);
            }
        }
        $$.$mol_touch = $mol_touch;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//touch.view.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_ghost extends $.$mol_view {
        Sub() {
            const obj = new this.$.$mol_view();
            return obj;
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_ghost.prototype, "Sub", null);
    $.$mol_ghost = $mol_ghost;
})($ || ($ = {}));
//ghost.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_dom_render_events(el, events) {
        for (let name in events) {
            el.addEventListener(name, events[name], { passive: false });
        }
    }
    $.$mol_dom_render_events = $mol_dom_render_events;
    function $mol_dom_render_events_async(el, events) {
        for (let name in events) {
            el.addEventListener(name, events[name], { passive: true });
        }
    }
    $.$mol_dom_render_events_async = $mol_dom_render_events_async;
})($ || ($ = {}));
//events.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_ghost extends $.$mol_ghost {
            dom_node() {
                const node = this.Sub().dom_node();
                $.$mol_dom_render_attributes(node, this.attr_static());
                $.$mol_dom_render_events(node, this.event());
                return node;
            }
            dom_node_actual() {
                this.dom_node();
                const node = this.Sub().dom_node_actual();
                const attr = this.attr();
                const style = this.style();
                const fields = this.field();
                $.$mol_dom_render_attributes(node, attr);
                $.$mol_dom_render_styles(node, style);
                $.$mol_dom_render_fields(node, fields);
                return node;
            }
            dom_tree() {
                const Sub = this.Sub();
                const node = Sub.dom_tree();
                this.dom_node_actual();
                return node;
            }
            title() {
                return this.Sub().title();
            }
            minimal_width() {
                return this.Sub().minimal_width();
            }
            minimal_height() {
                return this.Sub().minimal_height();
            }
        }
        __decorate([
            $.$mol_mem
        ], $mol_ghost.prototype, "dom_node", null);
        __decorate([
            $.$mol_mem
        ], $mol_ghost.prototype, "dom_node_actual", null);
        $$.$mol_ghost = $mol_ghost;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//ghost.view.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_book extends $.$mol_view {
        sub() {
            return this.pages_wrapped();
        }
        minimal_width() {
            return 0;
        }
        pages() {
            return [];
        }
        plugins() {
            return [
                this.Meter(),
                this.Touch()
            ];
        }
        Page(index) {
            const obj = new this.$.$mol_book_page();
            obj.Sub = () => this.page(index);
            obj.visible = () => this.page_visible(index);
            return obj;
        }
        Placeholder() {
            const obj = new this.$.$mol_book_placeholder();
            obj.title = () => this.title();
            return obj;
        }
        pages_wrapped() {
            return [];
        }
        width() {
            return this.Meter().width();
        }
        Meter() {
            const obj = new this.$.$mol_meter();
            return obj;
        }
        event_front_up(val) {
            if (val !== undefined)
                return val;
            return null;
        }
        event_front_down(val) {
            if (val !== undefined)
                return val;
            return null;
        }
        Touch() {
            const obj = new this.$.$mol_touch();
            obj.swipe_from_left = (val) => this.event_front_up(val);
            obj.swipe_to_left = (val) => this.event_front_down(val);
            return obj;
        }
        page(index) {
            return null;
        }
        page_visible(index) {
            return true;
        }
    }
    __decorate([
        $.$mol_mem_key
    ], $mol_book.prototype, "Page", null);
    __decorate([
        $.$mol_mem
    ], $mol_book.prototype, "Placeholder", null);
    __decorate([
        $.$mol_mem
    ], $mol_book.prototype, "Meter", null);
    __decorate([
        $.$mol_mem
    ], $mol_book.prototype, "event_front_up", null);
    __decorate([
        $.$mol_mem
    ], $mol_book.prototype, "event_front_down", null);
    __decorate([
        $.$mol_mem
    ], $mol_book.prototype, "Touch", null);
    $.$mol_book = $mol_book;
    class $mol_book_placeholder extends $.$mol_view {
        minimal_width() {
            return 400;
        }
        attr() {
            return {
                ...super.attr(),
                tabindex: null
            };
        }
    }
    $.$mol_book_placeholder = $mol_book_placeholder;
    class $mol_book_page extends $.$mol_ghost {
        attr_static() {
            return {
                ...super.attr_static(),
                tabindex: 0,
                mol_book_page_visible: true
            };
        }
        attr() {
            return {
                ...super.attr(),
                mol_book_page_focused: this.focused(),
                mol_book_page_visible: this.visible()
            };
        }
        visible() {
            return true;
        }
    }
    $.$mol_book_page = $mol_book_page;
})($ || ($ = {}));
//book.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_attach("mol/book/book.view.css", "[mol_book] {\n\tdisplay: flex;\n\tflex-flow: row nowrap;\n\talign-items: stretch;\n\tjustify-content: flex-start;\n\toverflow: hidden;\n\tflex: 1 1 auto;\n\talign-self: stretch;\n\tmargin: 0;\n\tbox-shadow: 0 0 0 1px var(--mol_theme_line);\n\ttransform: translateZ( 0 );\n}\n\n[mol_book] > *:not([mol_book_page_visible]) {\n\tposition: absolute; \n\tleft: 0;\n\ttop: 0;\n}\n\n[mol_book] > [mol_book_page_focused]:not([mol_book_page_visible]) ~ * {\n\topacity: .2;\n\tpointer-events: none;\n\tz-index: -1;\n}\n\n[mol_book] > *:not([mol_book_page_visible]):not([mol_book_page_focused]) {\n\ttransform: translate3d( -100% , 0 , 0 );\n}\n\n[mol_book] > *:not([mol_book_page_visible]):not([mol_book_page_focused]) + *:before {\n\tcontent : '•••';\n\tposition: absolute;\n\ttop: 1rem;\n\tleft: 0;\n\tz-index: 2;\n\tpointer-events: none;\n\tcolor: var(--mol_skin_base_text);\n\ttransform: rotate(90deg);\n}\n\n[mol_book] > * {\n\tposition: relative;\n\t/* animation: mol_book_page_show linear .2s; */\n\ttransition-timing-function: linear;\n\tz-index: 0;\n\tmin-height: 100%;\n\tmax-height: 100%;\n}\n\n[mol_book_placeholder] {\n\tflex: 1000 1 400px;\n\tbox-shadow: 0 0 0 1px var(--mol_theme_line);\n\tbackground: var(--mol_theme_field);\n\tz-index: -1;\n}\n\n[mol_book_placeholder]:hover {\n\toutline: none;\n}\n\n/*\n@keyframes mol_book_page_show {\n\tfrom {\n\t\ttransform: translateX( 100% );\n\t\topacity: 0;\n\t\tz-index: -1;\n\t}\n}\n\n[mol_book_page]:not(:first-child) {\n\tanimation: mol_book_page_show .25s ease-out;\n}\n*/\n");
})($ || ($ = {}));
//book.view.css.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_book extends $.$mol_book {
            pages_extended() {
                return [this.Placeholder(), ...this.pages()];
            }
            break_point() {
                const pages = this.pages_extended();
                const limit = this.width();
                let width = 0;
                for (var break_point = pages.length; break_point > 0; --break_point) {
                    const page = pages[break_point - 1];
                    if (!page)
                        continue;
                    const page_width = page.minimal_width();
                    if (width + page_width > limit)
                        break;
                    width += page_width;
                }
                if (width === 0)
                    --break_point;
                return break_point;
            }
            page(index) {
                return this.pages_extended()[index];
            }
            page_visible(index) {
                return index >= this.break_point();
            }
            pages_wrapped() {
                const pages = this.pages_extended();
                const extended = [];
                for (let i = 1; i < pages.length; ++i) {
                    if (pages[i])
                        extended.push(this.Page(i));
                }
                if (pages[0])
                    extended.push(this.Page(0));
                return extended;
            }
            title() {
                return this.pages().map(page => page.title()).reverse().join(' | ');
            }
            event_front_up(event) {
                if (!event)
                    return;
                if (event.defaultPrevented)
                    return;
                this.page(1).focused(true);
            }
            event_front_down(event) {
                if (!event)
                    return;
                if (event.defaultPrevented)
                    return;
                this.page(1).focused(false);
            }
        }
        __decorate([
            $.$mol_mem
        ], $mol_book.prototype, "pages_extended", null);
        __decorate([
            $.$mol_mem
        ], $mol_book.prototype, "break_point", null);
        __decorate([
            $.$mol_mem
        ], $mol_book.prototype, "pages_wrapped", null);
        $$.$mol_book = $mol_book;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//book.view.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_attach("piterjs/app/app.view.css", "[piterjs_app] {\n\t--mol_theme_current: rgb(255, 229, 21);\n\t--mol_theme_focus: rgb(255, 229, 21);\n\t--mol_theme_current: rgb(255, 229, 21);\n\tdisplay: flex;\n}\n\n[piterjs_app] [mol_theme=\"$mol_theme_base\"] {\n\t--mol_theme_back: #f7df1e;\n\t--mol_theme_text: black;\n\t--mol_theme_shade: rgba( 0 , 0 , 0 , .5 );\n\t--mol_theme_control: black;\n\tstroke: currentColor;\n}\n\n[piterjs_app] [mol_theme=\"$mol_theme_accent\"] {\n\t--mol_theme_back: #f7df1e;\n\t--mol_theme_text: black;\n\t--mol_theme_hover: hsl(53, 93%, 44%);\n\tstroke: currentColor;\n}\n\n[piterjs_app] > *:not([mol_book_page_visible]):not([mol_book_page_focused]) + *:before {\n\tleft: .25rem;\n}\n\n[piterjs_app] [mol_page] ,\n[piterjs_app] [mol_page_body] {\n\tbox-shadow: none;\n\tbackground: none;\n}\n\n[piterjs_app_menu] {\n\tflex: 0 0 12rem;\n}\n\n[piterjs_app_menu_body] {\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: space-between;\n}\n\n[piterjs_app_links] {\n\tflex: none;\n}\n\n[piterjs_app_conf] {\n\twhite-space: nowrap;\n\tdisplay: flex;\n\tjustify-content: space-between;\n\tbox-shadow: 0 -0.5rem 0.5rem -0.5rem hsla(0,0%,0%,.25);\n\tpadding: 0;\n}\n\n[piterjs_app_speech_body] {\n\tpadding: 0;\n}\n\n[piterjs_app_conf_title] {\n\tmargin: .5rem .75rem;\n\tfont-weight: bolder;\n}\n\n[piterjs_app_conf_date] {\n\tmargin: .5rem .75rem;\n}\n\n[piterjs_app_others_link] {\n\tpadding: .5rem .75rem;\n}\n\n[piterjs_app_book_placeholder] {\n\tbackground: none;\n}\n\n[piterjs_app_toggle_intro] {\n\tposition: absolute;\n\tbottom: 0;\n\tright: 0;\n\twidth: 2rem;\n\theight: 2rem;\n}\n");
})($ || ($ = {}));
//app.view.css.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        $.$mol_tree;
        class $piterjs_app extends $.$piterjs_app {
            now(next) { return this.$.$mol_state_arg.value('now', next); }
            intro(next) { return this.$.$mol_state_arg.value('intro', next); }
            place_show() { return this.$.$mol_state_arg.value('place') !== null; }
            others() { return this.$.$mol_state_arg.value('others') !== null; }
            meetup_id(next) { return this.$.$mol_state_arg.value('meetup', next); }
            meetup(id) { return $.$piterjs_meetup.item(id); }
            speech_id(next) { return this.$.$mol_state_arg.value('speech', next); }
            speech(id) { return $.$piterjs_speech.item(id); }
            speaker_id(next) { return this.$.$mol_state_arg.value('speaker', next); }
            speaker(id) { return $.$piterjs_speaker.item(id); }
            pages() {
                if (this.intro() != null)
                    return [this.Intro()];
                const pages = [
                    this.Menu(),
                    ...this.meetup_id() ? [this.Meetup(this.meetup_id())] : [],
                    ...this.speech_id() ? [this.Speech(this.speech_id())] : [],
                    ...this.place_show() ? [this.Place()] : [],
                    ...this.video_uri() ? [this.Video()] : [],
                    ...this.others() ? [this.Others()] : [],
                ];
                if (pages.length === 1)
                    pages.push(this.Now());
                return pages;
            }
            title() {
                if (this.intro() != null)
                    return this.Intro().title();
                return this.Book().title();
            }
            meetups() {
                return this.$.$piterjs_meetup.all().slice()
                    .sort((a, b) => b.start().valueOf() - a.start().valueOf());
            }
            meetup_current() {
                const id = this.meetup_id();
                const meetup = id ? this.meetup(id) : this.meetups()[0];
                return meetup;
            }
            place() {
                return this.meetup_current().place();
            }
            menu_meetups() {
                return this.meetups().map(meetup => this.Menu_meetup(meetup.id()));
            }
            menu_meetup(id) { return this.meetup(id); }
            menu_meetup_id(id) { return id; }
            toggle_intro(next) {
                if (next !== undefined) {
                    if (this.intro()) {
                        this.intro(null);
                    }
                    else {
                        this.intro('main');
                    }
                }
                return Boolean(this.intro());
            }
            video() {
                return this.$.$mol_state_arg.value('video') !== null;
            }
            video_uri() {
                if (!this.video())
                    return '';
                const id = this.meetup_id();
                if (!id)
                    return '';
                return this.meetup(id).video() ?? '';
            }
        }
        __decorate([
            $.$mol_mem
        ], $piterjs_app.prototype, "now", null);
        __decorate([
            $.$mol_mem
        ], $piterjs_app.prototype, "intro", null);
        __decorate([
            $.$mol_mem
        ], $piterjs_app.prototype, "meetup_id", null);
        __decorate([
            $.$mol_mem
        ], $piterjs_app.prototype, "pages", null);
        __decorate([
            $.$mol_mem
        ], $piterjs_app.prototype, "title", null);
        __decorate([
            $.$mol_mem
        ], $piterjs_app.prototype, "meetups", null);
        __decorate([
            $.$mol_mem
        ], $piterjs_app.prototype, "meetup_current", null);
        __decorate([
            $.$mol_mem
        ], $piterjs_app.prototype, "place", null);
        __decorate([
            $.$mol_mem
        ], $piterjs_app.prototype, "menu_meetups", null);
        __decorate([
            $.$mol_mem
        ], $piterjs_app.prototype, "video_uri", null);
        $$.$piterjs_app = $piterjs_app;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//app.view.js.map
;
var $node = $node || {} ; $node[ "/piterjs/app/app_lines.svg" ] = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzEwIiBoZWlnaHQ9IjI0NiIgdmlld0JveD0iMCAwIDMxMCAyNDYiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik01NiA5LjAwMDAyTC0xLjU2MDVlLTA1IDY3LjVMLTEuMzE1NzFlLTA1IDk1LjVMNTYgMzYuNUw1NiA5LjAwMDAyWiIgZmlsbD0iI0Y3REYxRSIvPgo8cGF0aCBkPSJNMTQ4LjUgMS40MDc1MWUtMDVMLTcuNjkzMmUtMDYgMTU4TDAgMjQ2TDIzOCA2LjI1MDczZS0wNkwxNDguNSAxLjQwNzUxZS0wNVoiIGZpbGw9IiNGN0RGMUUiLz4KPHBhdGggZD0iTTE2Ny41IDE1Mi41TDE2Ny41IDEwOEwyNjggMy42MjgwNWUtMDZMMzA5LjUgMEwxNjcuNSAxNTIuNVoiIGZpbGw9IiNGN0RGMUUiLz4KPC9zdmc+Cg=="

;
"use strict";
var $;
(function ($) {
    class $mol_hotkey extends $.$mol_plugin {
        event() {
            return {
                ...super.event(),
                keydown: (event) => this.keydown(event)
            };
        }
        key() {
            return {};
        }
        mod_ctrl() {
            return false;
        }
        mod_alt() {
            return false;
        }
        mod_shift() {
            return false;
        }
        keydown(event) {
            if (event !== undefined)
                return event;
            return null;
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_hotkey.prototype, "keydown", null);
    $.$mol_hotkey = $mol_hotkey;
})($ || ($ = {}));
//hotkey.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_hotkey extends $.$mol_hotkey {
            key() {
                return super.key();
            }
            keydown(event) {
                if (!event)
                    return;
                if (event.defaultPrevented)
                    return;
                let name = $.$mol_keyboard_code[event.keyCode];
                if (this.mod_ctrl() !== event.ctrlKey)
                    return;
                if (this.mod_alt() !== event.altKey)
                    return;
                if (this.mod_shift() !== event.shiftKey)
                    return;
                const handle = this.key()[name];
                if (handle)
                    handle(event);
            }
        }
        $$.$mol_hotkey = $mol_hotkey;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//hotkey.view.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_string extends $.$mol_view {
        dom_name() {
            return "input";
        }
        enabled() {
            return true;
        }
        minimal_height() {
            return 40;
        }
        autocomplete() {
            return false;
        }
        selection(val) {
            if (val !== undefined)
                return val;
            return [];
        }
        auto() {
            return [
                this.selection_watcher()
            ];
        }
        field() {
            return {
                ...super.field(),
                disabled: this.disabled(),
                value: this.value_changed(),
                placeholder: this.hint(),
                spellcheck: this.spellcheck(),
                autocomplete: this.autocomplete_native(),
                selectionEnd: this.selection_end(),
                selectionStart: this.selection_start()
            };
        }
        attr() {
            return {
                ...super.attr(),
                maxlength: this.length_max(),
                type: this.type()
            };
        }
        event() {
            return {
                ...super.event(),
                input: (event) => this.event_change(event),
                keydown: (event) => this.event_key_press(event)
            };
        }
        plugins() {
            return [
                this.Submit()
            ];
        }
        selection_watcher() {
            return null;
        }
        disabled() {
            return false;
        }
        value(val) {
            if (val !== undefined)
                return val;
            return "";
        }
        value_changed(val) {
            return this.value(val);
        }
        hint() {
            return "";
        }
        spellcheck() {
            return false;
        }
        autocomplete_native() {
            return "";
        }
        selection_end() {
            return 0;
        }
        selection_start() {
            return 0;
        }
        length_max() {
            return Infinity;
        }
        type(val) {
            if (val !== undefined)
                return val;
            return "text";
        }
        event_change(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        event_key_press(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        submit(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        Submit() {
            const obj = new this.$.$mol_hotkey();
            obj.key = () => ({
                enter: (event) => this.submit(event)
            });
            return obj;
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_string.prototype, "selection", null);
    __decorate([
        $.$mol_mem
    ], $mol_string.prototype, "value", null);
    __decorate([
        $.$mol_mem
    ], $mol_string.prototype, "type", null);
    __decorate([
        $.$mol_mem
    ], $mol_string.prototype, "event_change", null);
    __decorate([
        $.$mol_mem
    ], $mol_string.prototype, "event_key_press", null);
    __decorate([
        $.$mol_mem
    ], $mol_string.prototype, "submit", null);
    __decorate([
        $.$mol_mem
    ], $mol_string.prototype, "Submit", null);
    $.$mol_string = $mol_string;
})($ || ($ = {}));
//string.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_attach("mol/string/string.view.css", "[mol_string] {\n\tbox-sizing: border-box;\n\toutline-offset: 0;\n\tborder: none;\n\tborder-radius: var(--mol_skin_round);\n\twhite-space: nowrap;\n\toverflow: hidden;\n\tpadding: var(--mol_gap_text);\n\ttext-align: left;\n\tposition: relative;\n\tz-index: 0;\n\tfont: inherit;\n\tflex: 1 0 auto;\n\tbackground: var(--mol_theme_field);\n\tcolor: var(--mol_theme_text);\n\tbox-shadow: inset 0 0 0 1px var(--mol_theme_line);\n}\n\n[mol_string]:disabled {\n\tbackground-color: transparent;\n}\n\n[mol_string]:focus {\n\toutline: none;\n\tz-index: 1;\n\tbox-shadow: inset 0 0 0 1px var(--mol_theme_focus);\n}\n\n[mol_string]::-ms-clear {\n\tdisplay: none;\n}\n");
})($ || ($ = {}));
//string.view.css.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_string extends $.$mol_string {
            event_change(next) {
                if (!next)
                    return;
                this.value(next.target.value);
                this.selection_change(next);
            }
            disabled() {
                return !this.enabled();
            }
            autocomplete_native() {
                return this.autocomplete() ? 'on' : 'off';
            }
            selection_watcher() {
                return new $.$mol_dom_listener(this.$.$mol_dom_context.document, 'selectionchange', event => this.selection_change(event));
            }
            selection_change(event) {
                const el = this.dom_node();
                this.selection([
                    el.selectionStart,
                    el.selectionEnd,
                ]);
            }
            selection_start() {
                return this.selection()[0];
            }
            selection_end() {
                return this.selection()[1];
            }
        }
        __decorate([
            $.$mol_mem
        ], $mol_string.prototype, "selection_watcher", null);
        $$.$mol_string = $mol_string;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//string.view.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_text_code_token extends $.$mol_dimmer {
        attr() {
            return {
                ...super.attr(),
                mol_text_code_token_type: this.type()
            };
        }
        type() {
            return "";
        }
    }
    $.$mol_text_code_token = $mol_text_code_token;
    class $mol_text_code_token_link extends $mol_text_code_token {
        dom_name() {
            return "a";
        }
        type() {
            return "code-link";
        }
        attr() {
            return {
                ...super.attr(),
                href: this.haystack(),
                target: "_blank"
            };
        }
        haystack() {
            return "";
        }
    }
    $.$mol_text_code_token_link = $mol_text_code_token_link;
})($ || ($ = {}));
//token.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        const { hsla } = $.$mol_style_func;
        $.$mol_style_define($.$mol_text_code_token, {
            display: 'inline',
            textDecoration: 'none',
            '@': {
                mol_text_code_token_type: {
                    'code-keyword': {
                        color: hsla(0, 70, 60, 1),
                    },
                    'code-field': {
                        color: hsla(300, 70, 60, 1),
                    },
                    'code-tag': {
                        color: hsla(330, 70, 60, 1),
                    },
                    'code-global': {
                        color: hsla(210, 80, 60, 1),
                    },
                    'code-decorator': {
                        color: hsla(180, 40, 60, 1),
                    },
                    'code-punctuation': {
                        color: hsla(0, 0, 50, 1),
                    },
                    'code-string': {
                        color: hsla(90, 40, 50, 1),
                    },
                    'code-number': {
                        color: hsla(60, 70, 30, 1),
                    },
                    'code-call': {
                        color: hsla(270, 60, 60, 1),
                    },
                    'code-link': {
                        color: hsla(240, 60, 60, 1),
                    },
                    'code-comment-inline': {
                        opacity: .5,
                    },
                    'code-comment-block': {
                        opacity: .5,
                    },
                    'code-docs': {
                        opacity: .75,
                    },
                },
            }
        });
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//token.view.css.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_text_code_row extends $.$mol_paragraph {
        text() {
            return "";
        }
        minimal_height() {
            return 24;
        }
        numb_showed() {
            return true;
        }
        Numb() {
            const obj = new this.$.$mol_view();
            obj.sub = () => [
                this.numb()
            ];
            return obj;
        }
        Token(id) {
            const obj = new this.$.$mol_text_code_token();
            obj.type = () => this.token_type(id);
            obj.haystack = () => this.token_text(id);
            obj.needle = () => this.highlight();
            return obj;
        }
        Token_link(id) {
            const obj = new this.$.$mol_text_code_token_link();
            obj.haystack = () => this.token_text(id);
            obj.needle = () => this.highlight();
            return obj;
        }
        numb() {
            return 0;
        }
        token_type(id) {
            return "";
        }
        token_text(id) {
            return "";
        }
        highlight() {
            return "";
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_text_code_row.prototype, "Numb", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_text_code_row.prototype, "Token", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_text_code_row.prototype, "Token_link", null);
    $.$mol_text_code_row = $mol_text_code_row;
})($ || ($ = {}));
//row.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        const { rem } = $.$mol_style_unit;
        $.$mol_style_define($$.$mol_text_code_row, {
            display: 'block',
            Numb: {
                textAlign: 'right',
                color: $.$mol_theme.shade,
                width: rem(3),
                padding: {
                    right: rem(1.5),
                },
                margin: {
                    left: rem(-3),
                },
                display: 'inline-block',
                whiteSpace: 'nowrap',
                userSelect: 'none',
            },
        });
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//row.view.css.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_text_code_row extends $.$mol_text_code_row {
            maximal_width() {
                return this.text().length * this.letter_width();
            }
            tokens(path) {
                const tokens = [];
                const text = (path.length > 0)
                    ? this.tokens(path.slice(0, path.length - 1))[path[path.length - 1]].found.slice(1, -1)
                    : this.text();
                this.$.$mol_syntax2_md_code.tokenize(text, (name, found, chunks) => tokens.push({ name, found, chunks }));
                return tokens;
            }
            sub() {
                return [
                    ...this.numb_showed() ? [this.Numb()] : [],
                    ...this.row_content([])
                ];
            }
            row_content(path) {
                return this.tokens(path).map((t, i) => this.Token([...path, i]));
            }
            Token(path) {
                return this.token_type(path) === 'code-link' ? this.Token_link(path) : super.Token(path);
            }
            token_type(path) {
                return this.tokens([...path.slice(0, path.length - 1)])[path[path.length - 1]].name;
            }
            token_content(path) {
                const tokens = this.tokens([...path.slice(0, path.length - 1)]);
                const token = tokens[path[path.length - 1]];
                switch (token.name) {
                    case 'code-string': return [
                        token.found[0],
                        ...this.row_content(path),
                        token.found[token.found.length - 1],
                    ];
                    default: return [token.found];
                }
            }
            token_text(path) {
                const tokens = this.tokens([...path.slice(0, path.length - 1)]);
                const token = tokens[path[path.length - 1]];
                return token.found;
            }
            *view_find(check, path = []) {
                if (check(this, this.text())) {
                    yield [...path, this];
                }
            }
        }
        __decorate([
            $.$mol_mem_key
        ], $mol_text_code_row.prototype, "tokens", null);
        __decorate([
            $.$mol_mem_key
        ], $mol_text_code_row.prototype, "row_content", null);
        __decorate([
            $.$mol_mem_key
        ], $mol_text_code_row.prototype, "token_type", null);
        __decorate([
            $.$mol_mem_key
        ], $mol_text_code_row.prototype, "token_content", null);
        __decorate([
            $.$mol_mem_key
        ], $mol_text_code_row.prototype, "token_text", null);
        $$.$mol_text_code_row = $mol_text_code_row;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//row.view.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_text_code extends $.$mol_list {
        attr() {
            return {
                ...super.attr(),
                mol_text_code_sidebar_showed: this.sidebar_showed()
            };
        }
        text() {
            return "";
        }
        text_lines() {
            return [];
        }
        Row(id) {
            const obj = new this.$.$mol_text_code_row();
            obj.numb_showed = () => this.sidebar_showed();
            obj.numb = () => this.row_numb(id);
            obj.text = () => this.row_text(id);
            obj.highlight = () => this.highlight();
            return obj;
        }
        sidebar_showed() {
            return false;
        }
        row_numb(id) {
            return 0;
        }
        row_text(id) {
            return "";
        }
        highlight() {
            return "";
        }
    }
    __decorate([
        $.$mol_mem_key
    ], $mol_text_code.prototype, "Row", null);
    $.$mol_text_code = $mol_text_code;
})($ || ($ = {}));
//code.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        const { rem } = $.$mol_style_unit;
        $.$mol_style_define($$.$mol_text_code, {
            padding: $.$mol_gap.text,
            whiteSpace: 'pre-wrap',
            font: {
                family: 'monospace',
            },
            '@': {
                'mol_text_code_sidebar_showed': {
                    true: {
                        margin: {
                            left: rem(3),
                        },
                    },
                },
            },
        });
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//code.view.css.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_text_code extends $.$mol_text_code {
            text_lines() {
                return this.text().split('\n');
            }
            rows() {
                return this.text_lines().map((_, index) => this.Row(index + 1));
            }
            row_text(index) {
                return this.text_lines()[index - 1];
            }
            row_numb(index) {
                return index;
            }
        }
        __decorate([
            $.$mol_mem
        ], $mol_text_code.prototype, "text_lines", null);
        __decorate([
            $.$mol_mem
        ], $mol_text_code.prototype, "rows", null);
        __decorate([
            $.$mol_mem_key
        ], $mol_text_code.prototype, "row_text", null);
        $$.$mol_text_code = $mol_text_code;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//code.view.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_textarea extends $.$mol_view {
        attr() {
            return {
                ...super.attr(),
                mol_textarea_clickable: this.clickable(),
                mol_textarea_sidebar_showed: this.sidebar_showed()
            };
        }
        event() {
            return {
                keydown: (event) => this.press(event),
                pointermove: (event) => this.hover(event)
            };
        }
        sub() {
            return [
                this.Edit(),
                this.View()
            ];
        }
        clickable(val) {
            if (val !== undefined)
                return val;
            return false;
        }
        sidebar_showed() {
            return false;
        }
        press(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        hover(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        value(val) {
            if (val !== undefined)
                return val;
            return "";
        }
        hint() {
            return "";
        }
        enabled() {
            return true;
        }
        length_max() {
            return Infinity;
        }
        selection(val) {
            if (val !== undefined)
                return val;
            return [];
        }
        Edit() {
            const obj = new this.$.$mol_string();
            obj.dom_name = () => "textarea";
            obj.value = (val) => this.value(val);
            obj.hint = () => this.hint();
            obj.enabled = () => this.enabled();
            obj.length_max = () => this.length_max();
            obj.selection = (val) => this.selection(val);
            return obj;
        }
        row_numb(index) {
            return 0;
        }
        View() {
            const obj = new this.$.$mol_text_code();
            obj.text = () => this.value();
            obj.render_visible_only = () => false;
            obj.row_numb = (index) => this.row_numb(index);
            obj.sidebar_showed = () => this.sidebar_showed();
            return obj;
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_textarea.prototype, "clickable", null);
    __decorate([
        $.$mol_mem
    ], $mol_textarea.prototype, "press", null);
    __decorate([
        $.$mol_mem
    ], $mol_textarea.prototype, "hover", null);
    __decorate([
        $.$mol_mem
    ], $mol_textarea.prototype, "value", null);
    __decorate([
        $.$mol_mem
    ], $mol_textarea.prototype, "selection", null);
    __decorate([
        $.$mol_mem
    ], $mol_textarea.prototype, "Edit", null);
    __decorate([
        $.$mol_mem
    ], $mol_textarea.prototype, "View", null);
    $.$mol_textarea = $mol_textarea;
})($ || ($ = {}));
//textarea.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_attach("mol/textarea/textarea.view.css", "[mol_textarea] {\n\tflex: 1 0 auto;\n\tdisplay: flex;\n\tflex-direction: column;\n\tposition: relative;\n\tz-index: 0;\n\tvertical-align: top;\n\tmin-height: max-content;\n\twhite-space: pre-wrap;\n}\n\n[mol_textarea_view] {\n\tpointer-events: none;\n\tz-index: 1;\n\twhite-space: inherit;\n}\n[mol_textarea_clickable] > [mol_textarea_view] {\n\tpointer-events: all;\n}\n\n[mol_textarea_edit] {\n\tfont-family: monospace;\n\tz-index: -1 !important;\n\tpadding: var(--mol_gap_text);\n\tposition: absolute;\n\tleft: 0;\n\ttop: 0;\n\twidth: 100%;\n\theight: 100%;\n\tcolor: transparent;\n\tcaret-color: var(--mol_theme_text);\n\tresize: none;\n\twhite-space: inherit;\n\ttab-size: 4;\n\toverflow-anchor: none;\n}\n\n[mol_textarea_sidebar_showed] [mol_textarea_edit] {\n\tleft: 3rem;\n\twidth: calc( 100% - 3rem );\n}\n");
})($ || ($ = {}));
//textarea.view.css.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_textarea extends $.$mol_textarea {
            indent_inc() {
                document.execCommand('insertText', false, '\t');
            }
            indent_dec() {
            }
            hover(event) {
                this.clickable(event.ctrlKey);
            }
            press(event) {
                switch (event.keyCode) {
                    case $.$mol_keyboard_code.tab:
                        this.indent_inc();
                        break;
                    case event.shiftKey && $.$mol_keyboard_code.tab:
                        this.indent_dec();
                        break;
                    default: return;
                }
                event.preventDefault();
            }
            row_numb(index) {
                return index;
            }
        }
        $$.$mol_textarea = $mol_textarea;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//textarea.view.js.map
;
"use strict";
var $;
(function ($) {
    const TextDecoder = globalThis.TextDecoder ?? $node.util.TextDecoder;
    function $mol_charset_decode(value, code = 'utf8') {
        return new TextDecoder(code).decode(value);
    }
    $.$mol_charset_decode = $mol_charset_decode;
})($ || ($ = {}));
//decode.js.map
;
"use strict";
var $;
(function ($) {
    const TextEncoder = globalThis.TextEncoder ?? $node.util.TextEncoder;
    const encoder = new TextEncoder();
    function $mol_charset_encode(value) {
        return encoder.encode(value);
    }
    $.$mol_charset_encode = $mol_charset_encode;
})($ || ($ = {}));
//encode.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_file_not_found extends Error {
    }
    $.$mol_file_not_found = $mol_file_not_found;
    class $mol_file extends $.$mol_object {
        static absolute(path) {
            throw new Error('Not implemented yet');
        }
        static relative(path) {
            throw new Error('Not implemented yet');
        }
        path() {
            return '.';
        }
        parent() {
            return this.resolve('..');
        }
        reset() {
            try {
                this.stat(undefined, $.$mol_mem_force_cache);
            }
            catch (error) {
                if (error instanceof $mol_file_not_found)
                    return;
                return $.$mol_fail_hidden(error);
            }
        }
        version() {
            return this.stat().mtime.getTime().toString(36).toUpperCase();
        }
        watcher() {
            console.warn('$mol_file_web.watcher() not implemented');
            return {
                destructor() { }
            };
        }
        exists(next, force) {
            let exists = true;
            try {
                this.stat();
            }
            catch (error) {
                if (error instanceof $mol_file_not_found) {
                    exists = false;
                }
                else {
                    return $.$mol_fail_hidden(error);
                }
            }
            if (next === undefined)
                return exists;
            if (next === exists)
                return exists;
            if (next)
                this.parent().exists(true);
            this.ensure(next);
            this.reset();
            return next;
        }
        type() {
            return this.stat().type;
        }
        name() {
            return this.path().replace(/^.*\//, '');
        }
        ext() {
            const match = /((?:\.\w+)+)$/.exec(this.path());
            return match ? match[1].substring(1) : '';
        }
        text(next, force) {
            if (next === undefined) {
                return $.$mol_charset_decode(this.buffer(undefined, force));
            }
            else {
                const buffer = next === undefined ? undefined : $.$mol_charset_encode(next);
                this.buffer(buffer, force);
                return next;
            }
        }
        fail(error) {
            this.buffer(error, $.$mol_mem_force_fail);
            this.stat(error, $.$mol_mem_force_fail);
        }
        buffer_cached(buffer) {
            const ctime = new Date();
            const stat = {
                type: 'file',
                size: buffer.length,
                ctime,
                atime: ctime,
                mtime: ctime
            };
            this.buffer(buffer, $.$mol_mem_force_cache);
            this.stat(stat, $.$mol_mem_force_cache);
        }
        text_cached(content) {
            this.buffer_cached($.$mol_charset_encode(content));
        }
        find(include, exclude) {
            const found = [];
            const sub = this.sub();
            for (const child of sub) {
                const child_path = child.path();
                if (exclude && child_path.match(exclude))
                    continue;
                if (!include || child_path.match(include))
                    found.push(child);
                if (child.type() === 'dir') {
                    const sub_child = child.find(include, exclude);
                    for (const child of sub_child)
                        found.push(child);
                }
            }
            return found;
        }
        size() {
            switch (this.type()) {
                case 'file': return this.stat().size;
                default: return 0;
            }
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_file.prototype, "exists", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_file, "absolute", null);
    $.$mol_file = $mol_file;
})($ || ($ = {}));
//file.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_compare_array(a, b) {
        if (a === b)
            return true;
        if (Object.getPrototypeOf(a) !== Object.getPrototypeOf(b))
            return false;
        if (a.length !== b.length)
            return false;
        for (let i = 0; i < a.length; i++)
            if (a[i] !== b[i])
                return false;
        return true;
    }
    $.$mol_compare_array = $mol_compare_array;
})($ || ($ = {}));
//array.js.map
;
"use strict";
var $;
(function ($) {
    function stat_convert(stat) {
        let type;
        if (stat.isDirectory())
            type = 'dir';
        if (stat.isFile())
            type = 'file';
        if (stat.isSymbolicLink())
            type = 'link';
        if (!type)
            return $.$mol_fail(new Error(`Unsupported file type`));
        return {
            type,
            size: Number(stat.size),
            atime: stat.atime,
            mtime: stat.mtime,
            ctime: stat.ctime
        };
    }
    function buffer_normalize(buf) {
        return new Uint8Array(buf.buffer, buf.byteOffset, buf.byteLength);
    }
    class $mol_file_node extends $.$mol_file {
        static absolute(path) {
            return this.make({
                path: $.$mol_const(path)
            });
        }
        static relative(path) {
            return this.absolute($node.path.resolve(path).replace(/\\/g, '/'));
        }
        watcher() {
            const watcher = $node.chokidar.watch(this.path(), {
                persistent: true,
                ignored: /(^\.|___$)/,
                depth: 0,
                ignoreInitial: true,
                awaitWriteFinish: {
                    stabilityThreshold: 100,
                },
            });
            watcher
                .on('all', (type, path) => {
                const file = $.$mol_file.relative(path.replace(/\\/g, '/'));
                file.reset();
                if (type === 'change') {
                    file.buffer(undefined, $.$mol_mem_force_update);
                }
                else {
                    file.parent().reset();
                }
            })
                .on('error', (error) => {
                this.stat(error, $.$mol_mem_force_fail);
            });
            return {
                destructor() {
                    watcher.close();
                }
            };
        }
        stat(next, force) {
            let stat = next;
            const path = this.path();
            this.parent().watcher();
            try {
                stat = next ?? stat_convert($node.fs.statSync(path));
            }
            catch (error) {
                if (error.code === 'ENOENT')
                    error = new $.$mol_file_not_found(`File not found`);
                error.message += '\n' + path;
                return this.$.$mol_fail_hidden(error);
            }
            return stat;
        }
        ensure(next) {
            const path = this.path();
            try {
                if (next)
                    $node.fs.mkdirSync(path);
                else
                    $node.fs.unlinkSync(path);
            }
            catch (e) {
                e.message += '\n' + path;
                return this.$.$mol_fail_hidden(e);
            }
            return true;
        }
        buffer(next, force) {
            const path = this.path();
            if (next === undefined) {
                this.stat();
                try {
                    const prev = $.$mol_mem_cached(() => this.buffer());
                    next = buffer_normalize($node.fs.readFileSync(path));
                    if (prev !== undefined && !$.$mol_compare_array(prev, next)) {
                        this.$.$mol_log3_rise({
                            place: `$mol_file_node..buffer()`,
                            message: 'Changed',
                            path: this.relate(),
                        });
                    }
                    return next;
                }
                catch (error) {
                    error.message += '\n' + path;
                    return this.$.$mol_fail_hidden(error);
                }
            }
            this.parent().exists(true);
            try {
                $node.fs.writeFileSync(path, next);
            }
            catch (error) {
                error.message += '\n' + path;
                return this.$.$mol_fail_hidden(error);
            }
            return next;
        }
        sub() {
            if (!this.exists())
                return [];
            if (this.type() !== 'dir')
                return [];
            const path = this.path();
            try {
                return $node.fs.readdirSync(path)
                    .filter(name => !/^\.+$/.test(name))
                    .map(name => this.resolve(name));
            }
            catch (e) {
                e.message += '\n' + path;
                return this.$.$mol_fail_hidden(e);
            }
        }
        resolve(path) {
            return this.constructor.relative($node.path.join(this.path(), path));
        }
        relate(base = this.constructor.relative('.')) {
            return $node.path.relative(base.path(), this.path()).replace(/\\/g, '/');
        }
        append(next) {
            const path = this.path();
            try {
                $node.fs.appendFileSync(path, next);
            }
            catch (e) {
                e.message += '\n' + path;
                return this.$.$mol_fail_hidden(e);
            }
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_file_node.prototype, "watcher", null);
    __decorate([
        $.$mol_mem
    ], $mol_file_node.prototype, "stat", null);
    __decorate([
        $.$mol_mem
    ], $mol_file_node.prototype, "buffer", null);
    __decorate([
        $.$mol_mem
    ], $mol_file_node.prototype, "sub", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_file_node, "absolute", null);
    $.$mol_file_node = $mol_file_node;
    $.$mol_file = $mol_file_node;
})($ || ($ = {}));
//file.node.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_locale extends $.$mol_object {
        static lang_default() {
            return 'en';
        }
        static lang(next) {
            return $.$mol_state_local.value('locale', next) || $.$mol_dom_context.navigator.language.replace(/-.*/, '') || this.lang_default();
        }
        static source(lang) {
            return JSON.parse($.$mol_file.relative(`web.locale=${lang}.json`).text().toString());
        }
        static texts(lang, next) {
            if (next)
                return next;
            try {
                return this.source(lang).valueOf();
            }
            catch (error) {
                if ('then' in error)
                    $.$mol_fail_hidden(error);
                const def = this.lang_default();
                if (lang === def)
                    throw error;
                return this.source(def);
            }
        }
        static text(key) {
            for (let lang of [this.lang(), 'en']) {
                const text = this.texts(lang)[key];
                if (text)
                    return text;
                this.warn(key);
            }
            return `<${key}>`;
        }
        static warn(key) {
            console.warn(`Not translated to "${this.lang()}": ${key}`);
            return null;
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_locale, "lang_default", null);
    __decorate([
        $.$mol_mem
    ], $mol_locale, "lang", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_locale, "source", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_locale, "texts", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_locale, "text", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_locale, "warn", null);
    $.$mol_locale = $mol_locale;
})($ || ($ = {}));
//locale.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_icon_stored extends $.$mol_icon {
        path() {
            return "M10.5,17.5L7,14L8.41,12.59L10.5,14.67L15.68,9.5L17.09,10.91M10,4H14V6H10M20,6H16V4L14,2H10L8,4V6H4C2.89,6 2,6.89 2,8V19C2,20.11 2.89,21 4,21H20C21.11,21 22,20.11 22,19V8C22,6.89 21.11,6 20,6Z";
        }
    }
    $.$mol_icon_stored = $mol_icon_stored;
})($ || ($ = {}));
//stored.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_link_lazy extends $.$mol_link {
        uri(val) {
            if (val !== undefined)
                return val;
            return "";
        }
        uri_generated() {
            return "";
        }
        current() {
            return false;
        }
        event() {
            return {
                ...super.event(),
                mousedown: (event) => this.generate(event)
            };
        }
        generate(event) {
            if (event !== undefined)
                return event;
            return null;
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_link_lazy.prototype, "uri", null);
    __decorate([
        $.$mol_mem
    ], $mol_link_lazy.prototype, "generate", null);
    $.$mol_link_lazy = $mol_link_lazy;
})($ || ($ = {}));
//lazy.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_link_lazy extends $.$mol_link_lazy {
            generate(event) {
                this.uri(this.uri_generated());
            }
        }
        $$.$mol_link_lazy = $mol_link_lazy;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//lazy.view.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_icon_load extends $.$mol_icon {
        path() {
            return "M5,20H19V18H5M19,9H15V3H9V9H5L12,16L19,9Z";
        }
    }
    $.$mol_icon_load = $mol_icon_load;
})($ || ($ = {}));
//load.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_icon_github_circle extends $.$mol_icon {
        path() {
            return "M12,2C6.48,2 2,6.48 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12C22,6.48 17.52,2 12,2Z";
        }
    }
    $.$mol_icon_github_circle = $mol_icon_github_circle;
})($ || ($ = {}));
//circle.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_link_source extends $.$mol_link {
        hint() {
            return this.$.$mol_locale.text('$mol_link_source_hint');
        }
        sub() {
            return [
                this.Icon()
            ];
        }
        Icon() {
            const obj = new this.$.$mol_icon_github_circle();
            return obj;
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_link_source.prototype, "Icon", null);
    $.$mol_link_source = $mol_link_source;
})($ || ($ = {}));
//source.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_icon_hint extends $.$mol_icon {
        path() {
            return "M10,19H13V22H10V19M12,2C17.35,2.22 19.68,7.62 16.5,11.67C15.67,12.67 14.33,13.33 13.67,14.17C13,15 13,16 13,17H10C10,15.33 10,13.92 10.67,12.92C11.33,11.92 12.67,11.33 13.5,10.67C15.92,8.43 15.32,5.26 12,5A3,3 0 0,0 9,8H6A6,6 0 0,1 12,2Z";
        }
    }
    $.$mol_icon_hint = $mol_icon_hint;
})($ || ($ = {}));
//hint.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_check_icon extends $.$mol_check {
    }
    $.$mol_check_icon = $mol_check_icon;
})($ || ($ = {}));
//icon.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_attach("mol/check/icon/icon.view.css", "[mol_check_icon][mol_check_checked] {\n\tcolor: var(--mol_theme_focus);\n}\n");
})($ || ($ = {}));
//icon.view.css.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_bar extends $.$mol_view {
    }
    $.$mol_bar = $mol_bar;
})($ || ($ = {}));
//bar.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_attach("mol/bar/bar.view.css", "[mol_bar] {\n\tdisplay: flex;\n\tbox-shadow: inset 0 0 0 1px var(--mol_theme_line);\n\tborder-radius: var(--mol_skin_round);\n}\n\n[mol_bar] > * {\n\tborder-radius: 0;\n}\n\n[mol_bar] > *:first-child {\n\tborder-top-left-radius: var(--mol_skin_round);\n\tborder-bottom-left-radius: var(--mol_skin_round);\n}\n\n[mol_bar] > *:not(:first-child) {\n\tmargin-left: 1px;\n}\n\n[mol_bar] > *:last-child {\n\tborder-top-right-radius: var(--mol_skin_round);\n\tborder-bottom-right-radius: var(--mol_skin_round);\n}\n");
})($ || ($ = {}));
//bar.view.css.js.map
;
"use strict";
var $;
(function ($) {
    class $hyoo_calc extends $.$mol_page {
        formulas_default() {
            return {};
        }
        formula(id, val) {
            if (val !== undefined)
                return val;
            return "";
        }
        head() {
            return [
                this.Title_edit(),
                this.Tools()
            ];
        }
        tools() {
            return [
                this.Snapshot(),
                this.Download(),
                this.Source()
            ];
        }
        sub() {
            return [
                this.Head(),
                this.Current(),
                this.Hint(),
                this.Body()
            ];
        }
        Edit(id) {
            const obj = new this.$.$mol_textarea();
            obj.hint = () => "=";
            obj.value = (val) => this.formula(id, val);
            return obj;
        }
        Col_head(id) {
            const obj = new this.$.$mol_float();
            obj.dom_name = () => "th";
            obj.sub = () => [
                this.col_title(id)
            ];
            return obj;
        }
        Row_head(id) {
            const obj = new this.$.$mol_float();
            obj.dom_name = () => "th";
            obj.sub = () => [
                this.row_title(id)
            ];
            return obj;
        }
        Cell(id) {
            const obj = new this.$.$hyoo_calc_cell();
            obj.value = () => this.cell_content(id);
            obj.selected = (val) => this.selected(id, val);
            return obj;
        }
        plugins() {
            return [
                this.Theme(),
                this.Nav()
            ];
        }
        event() {
            return {
                paste: (event) => this.paste(event)
            };
        }
        title(val) {
            if (val !== undefined)
                return val;
            return this.$.$mol_locale.text('$hyoo_calc_title');
        }
        Title_edit() {
            const obj = new this.$.$mol_string();
            obj.value = (val) => this.title(val);
            return obj;
        }
        snapshot_hint() {
            return this.$.$mol_locale.text('$hyoo_calc_snapshot_hint');
        }
        snapshot_uri() {
            return "";
        }
        Snapshot_icon() {
            const obj = new this.$.$mol_icon_stored();
            return obj;
        }
        Snapshot() {
            const obj = new this.$.$mol_link_lazy();
            obj.hint = () => this.snapshot_hint();
            obj.uri_generated = () => this.snapshot_uri();
            obj.sub = () => [
                this.Snapshot_icon()
            ];
            return obj;
        }
        download_hint() {
            return this.$.$mol_locale.text('$hyoo_calc_download_hint');
        }
        download_file() {
            return "";
        }
        download_uri(val) {
            if (val !== undefined)
                return val;
            return "";
        }
        Download_icon() {
            const obj = new this.$.$mol_icon_load();
            return obj;
        }
        Download() {
            const obj = new this.$.$mol_link_lazy();
            obj.hint = () => this.download_hint();
            obj.file_name = () => this.download_file();
            obj.uri_generated = () => this.download_uri();
            obj.sub = () => [
                this.Download_icon()
            ];
            return obj;
        }
        Source() {
            const obj = new this.$.$mol_link_source();
            obj.uri = () => "https://github.com/hyoo-ru/calc.hyoo.ru";
            return obj;
        }
        pos(val) {
            if (val !== undefined)
                return val;
            return "A1";
        }
        Pos() {
            const obj = new this.$.$mol_string();
            obj.enabled = () => false;
            obj.value = () => this.pos();
            return obj;
        }
        Edit_current() {
            const obj = new this.$.$mol_textarea();
            return obj;
        }
        hint_showed(val) {
            if (val !== undefined)
                return val;
            return false;
        }
        Hint_trigger_icon() {
            const obj = new this.$.$mol_icon_hint();
            return obj;
        }
        Hint_trigger() {
            const obj = new this.$.$mol_check_icon();
            obj.checked = (val) => this.hint_showed(val);
            obj.Icon = () => this.Hint_trigger_icon();
            return obj;
        }
        Current() {
            const obj = new this.$.$mol_bar();
            obj.sub = () => [
                this.Pos(),
                this.Edit_current(),
                this.Hint_trigger()
            ];
            return obj;
        }
        hint() {
            return this.$.$mol_locale.text('$hyoo_calc_hint');
        }
        Hint() {
            const obj = new this.$.$mol_text();
            obj.text = () => this.hint();
            return obj;
        }
        col_ids() {
            return [];
        }
        row_ids() {
            return [];
        }
        head_cells() {
            return [];
        }
        cells(row) {
            return [];
        }
        Body() {
            const obj = new this.$.$mol_grid();
            obj.col_ids = () => this.col_ids();
            obj.row_ids = () => this.row_ids();
            obj.head_cells = () => this.head_cells();
            obj.cells = (row) => this.cells(row);
            return obj;
        }
        col_title(id) {
            return "";
        }
        row_title(id) {
            return "";
        }
        cell_content(id) {
            return "";
        }
        selected(id, val) {
            if (val !== undefined)
                return val;
            return false;
        }
        Theme() {
            const obj = new this.$.$mol_theme_auto();
            return obj;
        }
        current_col(val) {
            if (val !== undefined)
                return val;
            return "A";
        }
        current_row(val) {
            if (val !== undefined)
                return val;
            return 1;
        }
        Nav() {
            const obj = new this.$.$mol_nav();
            obj.mod_alt = () => true;
            obj.keys_x = () => this.col_ids();
            obj.keys_y = () => this.row_ids();
            obj.current_x = (val) => this.current_col(val);
            obj.current_y = (val) => this.current_row(val);
            return obj;
        }
        paste(event) {
            if (event !== undefined)
                return event;
            return null;
        }
    }
    __decorate([
        $.$mol_mem_key
    ], $hyoo_calc.prototype, "formula", null);
    __decorate([
        $.$mol_mem_key
    ], $hyoo_calc.prototype, "Edit", null);
    __decorate([
        $.$mol_mem_key
    ], $hyoo_calc.prototype, "Col_head", null);
    __decorate([
        $.$mol_mem_key
    ], $hyoo_calc.prototype, "Row_head", null);
    __decorate([
        $.$mol_mem_key
    ], $hyoo_calc.prototype, "Cell", null);
    __decorate([
        $.$mol_mem
    ], $hyoo_calc.prototype, "title", null);
    __decorate([
        $.$mol_mem
    ], $hyoo_calc.prototype, "Title_edit", null);
    __decorate([
        $.$mol_mem
    ], $hyoo_calc.prototype, "Snapshot_icon", null);
    __decorate([
        $.$mol_mem
    ], $hyoo_calc.prototype, "Snapshot", null);
    __decorate([
        $.$mol_mem
    ], $hyoo_calc.prototype, "download_uri", null);
    __decorate([
        $.$mol_mem
    ], $hyoo_calc.prototype, "Download_icon", null);
    __decorate([
        $.$mol_mem
    ], $hyoo_calc.prototype, "Download", null);
    __decorate([
        $.$mol_mem
    ], $hyoo_calc.prototype, "Source", null);
    __decorate([
        $.$mol_mem
    ], $hyoo_calc.prototype, "pos", null);
    __decorate([
        $.$mol_mem
    ], $hyoo_calc.prototype, "Pos", null);
    __decorate([
        $.$mol_mem
    ], $hyoo_calc.prototype, "Edit_current", null);
    __decorate([
        $.$mol_mem
    ], $hyoo_calc.prototype, "hint_showed", null);
    __decorate([
        $.$mol_mem
    ], $hyoo_calc.prototype, "Hint_trigger_icon", null);
    __decorate([
        $.$mol_mem
    ], $hyoo_calc.prototype, "Hint_trigger", null);
    __decorate([
        $.$mol_mem
    ], $hyoo_calc.prototype, "Current", null);
    __decorate([
        $.$mol_mem
    ], $hyoo_calc.prototype, "Hint", null);
    __decorate([
        $.$mol_mem
    ], $hyoo_calc.prototype, "Body", null);
    __decorate([
        $.$mol_mem_key
    ], $hyoo_calc.prototype, "selected", null);
    __decorate([
        $.$mol_mem
    ], $hyoo_calc.prototype, "Theme", null);
    __decorate([
        $.$mol_mem
    ], $hyoo_calc.prototype, "current_col", null);
    __decorate([
        $.$mol_mem
    ], $hyoo_calc.prototype, "current_row", null);
    __decorate([
        $.$mol_mem
    ], $hyoo_calc.prototype, "Nav", null);
    __decorate([
        $.$mol_mem
    ], $hyoo_calc.prototype, "paste", null);
    $.$hyoo_calc = $hyoo_calc;
    class $hyoo_calc_cell extends $.$mol_button {
        dom_name() {
            return "td";
        }
        sub() {
            return [
                this.value()
            ];
        }
        attr() {
            return {
                ...super.attr(),
                hyoo_calc_cell_selected: this.selected(),
                hyoo_calc_cell_type: this.type()
            };
        }
        value() {
            return "";
        }
        selected(val) {
            if (val !== undefined)
                return val;
            return false;
        }
        type(val) {
            if (val !== undefined)
                return val;
            return "";
        }
    }
    __decorate([
        $.$mol_mem
    ], $hyoo_calc_cell.prototype, "selected", null);
    __decorate([
        $.$mol_mem
    ], $hyoo_calc_cell.prototype, "type", null);
    $.$hyoo_calc_cell = $hyoo_calc_cell;
})($ || ($ = {}));
//calc.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_func_sandbox {
        constructor(...contexts) {
            this.contexts = contexts;
        }
        static get make() {
            if (this._make)
                return this._make;
            const frame = $.$mol_dom_context.document.createElement('iframe');
            frame.style.display = 'none';
            $.$mol_dom_context.document.body.appendChild(frame);
            const win = frame.contentWindow;
            const SafeFunc = win.Function;
            const SafeJSON = win.JSON;
            win.eval(`

				var AsyncFunction = AsyncFunction || ( async function() {} ).constructor
				var GeneratorFunction = GeneratorFunction || ( function*() {} ).constructor
				var AsyncGeneratorFunction = AsyncGeneratorFunction || ( async function*() {} ).constructor

				Object.defineProperty( Function.prototype , 'constructor' , { value : undefined } )
				Object.defineProperty( AsyncFunction.prototype , 'constructor' , { value : undefined } )
				Object.defineProperty( GeneratorFunction.prototype , 'constructor' , { value : undefined } )
				Object.defineProperty( AsyncGeneratorFunction.prototype , 'constructor' , { value : undefined } )
				
				delete Object.prototype.__proto__

				for( const Class of [
					String , Number , BigInt , Boolean , Array , Object , Promise , Symbol , RegExp , 
					Window, Error , RangeError , ReferenceError , SyntaxError , TypeError ,
					Function , AsyncFunction , GeneratorFunction , AsyncGeneratorFunction
				] ) {
					Object.freeze( Class )
					Object.freeze( Class.prototype )
				}

				for( const key of Object.getOwnPropertyNames( window ) ) delete window[ key ]

			`);
            $.$mol_dom_context.document.body.removeChild(frame);
            let context_default = {};
            function clean(obj) {
                for (let name of Object.getOwnPropertyNames(obj)) {
                    context_default[name] = undefined;
                }
                const proto = Object.getPrototypeOf(obj);
                if (proto)
                    clean(proto);
            }
            clean(win);
            const is_primitive = (val) => Object(val) !== val;
            const safe_value = (val) => {
                if (is_primitive(val))
                    return val;
                if (this.blacklist.has(val))
                    return undefined;
                if (this.whitelist.has(val))
                    return val;
                const str = JSON.stringify(val);
                if (!str)
                    return str;
                val = SafeJSON.parse(str);
                this.whitelist.add(val);
                return val;
            };
            const safe_derived = (val) => {
                if (is_primitive(val))
                    return val;
                const proxy = new Proxy(val, {
                    get(val, field) {
                        if (field === 'valueOf')
                            return safe_derived(val[field]);
                        if (field === 'toString')
                            return safe_derived(val[field]);
                        return safe_value(val[field]);
                    },
                    set() { return false; },
                    defineProperty() { return false; },
                    deleteProperty() { return false; },
                    preventExtensions() { return false; },
                    apply(val, host, args) {
                        return safe_value(val.call(host, ...args));
                    },
                    construct(val, args) {
                        return safe_value(new val(...args));
                    },
                });
                this.whitelist.add(proxy);
                return proxy;
            };
            return this._make = ((...contexts) => {
                const context_merged = {};
                for (let context of contexts) {
                    for (let name of Object.getOwnPropertyNames(context)) {
                        context_merged[name] = safe_derived(context[name]);
                    }
                }
                const vars = Object.keys(context_merged);
                const values = vars.map(name => context_merged[name]);
                return (code) => {
                    const func = new SafeFunc(...vars, '"use strict";' + code)
                        .bind(null, ...values);
                    return () => {
                        const val = func();
                        if (is_primitive(val))
                            return val;
                        this.whitelist.add(val);
                        return val;
                    };
                };
            }).bind(null, context_default);
        }
        get eval() {
            if (this._eval)
                return this._eval;
            return this._eval = $mol_func_sandbox.make(...this.contexts);
        }
    }
    $mol_func_sandbox.blacklist = new Set([
        (function () { }).constructor,
        (async function () { }).constructor,
        (function* () { }).constructor,
        (async function* () { }).constructor,
        eval,
        setTimeout,
        setInterval,
    ]);
    $mol_func_sandbox.whitelist = new WeakSet();
    $.$mol_func_sandbox = $mol_func_sandbox;
})($ || ($ = {}));
//sandbox.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_attach("hyoo/calc/calc.view.css", "[hyoo_calc_title_edit]:enabled {\n\tcolor: inherit;\n\tbackground: transparent;\n\twidth: auto;\n\tflex: 1000 1 auto;\n\tbox-shadow: none;\n\tpadding: .5rem;\n}\n\n[hyoo_calc_current] {\n\tflex: none;\n}\n\n[hyoo_calc_pos] {\n\tflex: none;\n\twidth: 2.5rem;\n\tfont-family: var(--mol_skin_font_monospace);\n}\t\n\n[hyoo_calc_hint] {\n\tmax-width: none;\n}\n\n[hyoo_calc_hint_trigger] {\n\talign-items: center;\n}\n\n[hyoo_calc_body] {\n\talign-self: stretch;\n\tflex: auto;\n}\n\n[hyoo_calc_col_head] ,\n[hyoo_calc_row_head] {\n\tfont-family: var(--mol_skin_font_monospace);\n\tbackground: var(--mol_theme_back);\n\tcolor: var(--mol_theme_shade);\n\tuser-select: none;\n\tfont-weight: inherit;\n}\n\n[hyoo_calc_col_head] {\n\ttext-align: left;\n}\n\n[hyoo_calc_row_head] {\n\tmin-width: 2ch;\n\ttext-align: right;\n}\n\n[hyoo_calc_cell] {\n\tuser-select: text;\n\tbackground: var(--mol_theme_back);\n}\n\n[hyoo_calc_cell_selected] {\n\tbox-shadow: 0 0 0 1px var(--mol_theme_focus);\n\tz-index: 1;\n}\n\n[hyoo_calc_cell_type=\"number\"] {\n\ttext-align: right;\n}\n");
})($ || ($ = {}));
//calc.view.css.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $hyoo_calc extends $.$hyoo_calc {
            formulas_default() {
                return this.$.$mol_state_arg.dict();
            }
            formulas(next) {
                const formulas = {};
                let args = this.formulas_default();
                if (next)
                    return {
                        ...$.$mol_mem_cached(() => this.formulas()) ?? {},
                        ...next
                    };
                const ids = Object.keys(args).filter(param => this.id2coord(param));
                for (let id of ids)
                    formulas[id] = args[id];
                return formulas;
            }
            formula_name(id) {
                const found = /^([\p{Letter}_]*)\s*=/u.exec(this.formulas()[id]);
                if (!found)
                    return null;
                return found[1];
            }
            refs() {
                const formulas = this.formulas();
                const vars = {};
                for (const id in formulas) {
                    const name = this.formula_name(id);
                    if (!name)
                        continue;
                    if (vars[name])
                        throw new Error(`Names conflict: ${id}, ${vars[name]}`);
                    vars[name] = id;
                }
                return vars;
            }
            id2coord(id) {
                const parsed = /^([A-Z]+)(\d+)$/i.exec(id);
                if (!parsed)
                    return null;
                return [this.string2number(parsed[1].toUpperCase()), Number(parsed[2])];
            }
            coord2id(coord) {
                return `${this.number2string(coord[0])}${coord[1]}`;
            }
            dimensions() {
                const dims = {
                    rows: 3,
                    cols: 3,
                };
                for (let key of Object.keys(this.formulas())) {
                    const coord = this.id2coord(key);
                    const rows = coord[1] + 3;
                    const cols = coord[0] + 3;
                    if (rows > dims.rows)
                        dims.rows = rows;
                    if (cols > dims.cols)
                        dims.cols = cols;
                }
                return dims;
            }
            col_ids() {
                return Array(this.dimensions().cols).join(' ').split(' ').map((_, i) => i + 1);
            }
            row_ids() {
                return Array(this.dimensions().rows).join(' ').split(' ').map((_, i) => i + 1);
            }
            number2string(numb) {
                if (numb <= 0)
                    return '';
                numb--;
                const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
                let str = '';
                do {
                    str = letters[numb % 26] + str;
                    numb = Math.floor(numb / 26);
                } while (numb);
                return str;
            }
            string2number(str) {
                let numb = 0;
                for (let symb of str.split('')) {
                    numb = numb * 26;
                    numb += symb.charCodeAt(0) - 65;
                }
                return numb + 1;
            }
            title(next) {
                const title = this.$.$mol_state_arg.value(`title`, next);
                return title == undefined ? super.title() : title;
            }
            col_title(id) {
                return this.number2string(id);
            }
            row_title(id) {
                return String(id);
            }
            head_cells() {
                return [this.Col_head(0), ...this.col_ids().map(colId => this.Col_head(colId))];
            }
            cells(row_id) {
                return [this.Row_head(row_id), ...this.col_ids().map(col_id => this.Cell(this.coord2id([col_id, row_id])))];
            }
            selected(id, next) {
                return this.Cell(this.pos(next ? id : undefined)) === this.Cell(id);
            }
            pos(next) {
                new $.$mol_defer($.$mol_fiber_root(() => this.Edit_current().Edit().focused(true)));
                return next || super.pos();
            }
            coord(next) {
                return this.id2coord(this.pos(next && this.coord2id(next)));
            }
            Edit_current() {
                return this.Edit(this.pos());
            }
            current_row(next) {
                return this.coord(next === undefined ? undefined : [this.coord()[0], next])[1];
            }
            current_col(next) {
                return this.coord(next === undefined ? undefined : [next, this.coord()[1]])[0];
            }
            formula(id, next) {
                return this.formulas(next === undefined ? undefined : { [id]: next || '' })[id] || '';
            }
            formula_current(next) {
                return this.formula(this.pos(), next);
            }
            sandbox() {
                return new $.$mol_func_sandbox(Math, {
                    '$': new Proxy({}, { get: (_, id) => {
                            return this.result(id);
                        } }),
                    '$$': new Proxy({}, { get: (_, id) => {
                            return this.formula(id);
                        } }),
                    '_': new Proxy({}, { get: (_, name) => {
                            return this.result(this.refs()[name]);
                        } }),
                    '__': new Proxy({}, { get: (_, name) => {
                            return this.refs()[name];
                        } }),
                    'RANGE': (from, to) => this.results([from, to]),
                    'SUM': (values) => values.reduce((accum, item) => accum + item, 0),
                    'AVG': (values) => values.reduce((accum, item) => accum + item, 0) / values.length,
                    'MAX': (values) => values.reduce((max, item) => item > max ? item : max, Number.NEGATIVE_INFINITY),
                    'MIN': (values) => values.reduce((min, item) => item < min ? item : min, Number.POSITIVE_INFINITY),
                });
            }
            results(range) {
                const start = this.id2coord(range[0]);
                const end = this.id2coord(range[1]);
                const results = [];
                for (let row = start[0]; row <= end[0]; ++row) {
                    for (let col = start[1]; col <= end[1]; ++col) {
                        results.push(this.result(this.coord2id([row, col])));
                    }
                }
                return results;
            }
            sub() {
                return [
                    this.Head(),
                    this.Current(),
                    ...this.hint_showed() ? [this.Hint()] : [],
                    this.Body(),
                ];
            }
            hint() {
                return super.hint().replace('{funcs}', Object.getOwnPropertyNames(Math).join(', '));
            }
            cell_content(id) {
                const name = this.formula_name(id);
                let val = this.result(id);
                if (typeof val === 'object')
                    val = JSON.stringify(val);
                return name ? `${name} = ${val}` : String(val);
            }
            func(id) {
                const formula = this.formula(id);
                if (!/^([\p{Letter}_]*)?\s*=/u.test(formula))
                    return () => formula;
                const code = 'return ' + formula
                    .replace(/([A-Z]+[0-9]+):([A-Z]+[0-9]+)/g, (found, from, to) => `RANGE('${from.toLowerCase()}','${to.toLowerCase()}')`)
                    .replace(/@([A-Z]+[0-9]+)\b/g, '$$.$1')
                    .replace(/([^.])([A-Z]+[0-9]+)\b/g, '$1$.$2')
                    .replace(/^([\p{Letter}_]*)?\s*=/u, '');
                return this.sandbox().eval(code);
            }
            result(id) {
                const res = this.func(id)();
                if (res === undefined)
                    return '';
                if (res === '')
                    return '';
                if (isNaN(res))
                    return res;
                if (res && typeof res === 'object')
                    return JSON.stringify(res);
                return Number(res);
            }
            paste(event) {
                const table = event.clipboardData.getData('text/plain').trim().split('\n').map(row => row.split('\t'));
                if (table.length === 1 && table[0].length === 1)
                    return;
                const [col_start, row_start] = this.id2coord(this.pos());
                const patch = {};
                for (let row in table) {
                    for (let col in table[row]) {
                        const id = this.coord2id([col_start + Number(col), row_start + Number(row)]);
                        patch[id] = table[row][col];
                    }
                }
                this.formulas(patch);
                event.preventDefault();
            }
            snapshot_uri() {
                return this.$.$mol_state_arg.make_link({
                    title: this.title(),
                    ...this.formulas(),
                });
            }
            download_file() {
                return `${this.title()}.csv`;
            }
            download_uri() {
                const table = [];
                const dims = this.dimensions();
                for (let row = 1; row < dims.rows; ++row) {
                    const row_data = [];
                    table.push(row_data);
                    for (let col = 0; col < dims.cols; ++col) {
                        row_data[col] = String(this.result(this.coord2id([col, row])));
                    }
                }
                const content = table.map(row => row.map(val => `"${val.replace(/"/g, '""')}"`).join(';')).join('\n');
                return `data:text/csv;charset=utf-8,${encodeURIComponent(content)}`;
            }
        }
        __decorate([
            $.$mol_mem
        ], $hyoo_calc.prototype, "formulas", null);
        __decorate([
            $.$mol_mem_key
        ], $hyoo_calc.prototype, "formula_name", null);
        __decorate([
            $.$mol_mem
        ], $hyoo_calc.prototype, "refs", null);
        __decorate([
            $.$mol_mem
        ], $hyoo_calc.prototype, "dimensions", null);
        __decorate([
            $.$mol_mem
        ], $hyoo_calc.prototype, "col_ids", null);
        __decorate([
            $.$mol_mem
        ], $hyoo_calc.prototype, "row_ids", null);
        __decorate([
            $.$mol_mem
        ], $hyoo_calc.prototype, "title", null);
        __decorate([
            $.$mol_mem
        ], $hyoo_calc.prototype, "head_cells", null);
        __decorate([
            $.$mol_mem_key
        ], $hyoo_calc.prototype, "selected", null);
        __decorate([
            $.$mol_mem
        ], $hyoo_calc.prototype, "pos", null);
        __decorate([
            $.$mol_mem
        ], $hyoo_calc.prototype, "coord", null);
        __decorate([
            $.$mol_mem_key
        ], $hyoo_calc.prototype, "formula", null);
        __decorate([
            $.$mol_mem
        ], $hyoo_calc.prototype, "sandbox", null);
        __decorate([
            $.$mol_mem_key
        ], $hyoo_calc.prototype, "results", null);
        __decorate([
            $.$mol_mem
        ], $hyoo_calc.prototype, "hint", null);
        __decorate([
            $.$mol_mem_key
        ], $hyoo_calc.prototype, "cell_content", null);
        __decorate([
            $.$mol_mem_key
        ], $hyoo_calc.prototype, "func", null);
        __decorate([
            $.$mol_mem_key
        ], $hyoo_calc.prototype, "result", null);
        $$.$hyoo_calc = $hyoo_calc;
        class $hyoo_calc_cell extends $.$hyoo_calc_cell {
            click(event) {
                if (event)
                    this.selected(true);
            }
            type() {
                const value = this.value();
                return isNaN(Number(value)) ? 'string' : 'number';
            }
        }
        $$.$hyoo_calc_cell = $hyoo_calc_cell;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//calc.view.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_icon_brightness_6 extends $.$mol_icon {
        path() {
            return "M12,18V6C15.31,6 18,8.69 18,12C18,15.31 15.31,18 12,18M20,15.31L23.31,12L20,8.69V4H15.31L12,0.69L8.69,4H4V8.69L0.69,12L4,15.31V20H8.69L12,23.31L15.31,20H20V15.31Z";
        }
    }
    $.$mol_icon_brightness_6 = $mol_icon_brightness_6;
})($ || ($ = {}));
//6.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_lights_toggle extends $.$mol_check_icon {
        Icon() {
            return this.Lights_icon();
        }
        hint() {
            return this.$.$mol_locale.text('$mol_lights_toggle_hint');
        }
        checked(val) {
            return this.lights(val);
        }
        Lights_icon() {
            const obj = new this.$.$mol_icon_brightness_6();
            return obj;
        }
        lights(val) {
            if (val !== undefined)
                return val;
            return false;
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_lights_toggle.prototype, "Lights_icon", null);
    __decorate([
        $.$mol_mem
    ], $mol_lights_toggle.prototype, "lights", null);
    $.$mol_lights_toggle = $mol_lights_toggle;
})($ || ($ = {}));
//toggle.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_attach("mol/lights/toggle/toggle.view.css", "[mol_lights_toggle] {\n\ttransform: rotate(-90deg);\n}\n");
})($ || ($ = {}));
//toggle.view.css.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_lights_toggle extends $.$mol_lights_toggle {
            lights(next) {
                return this.$.$mol_lights(next);
            }
        }
        $$.$mol_lights_toggle = $mol_lights_toggle;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//toggle.view.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_icon_open_in_new extends $.$mol_icon {
        path() {
            return "M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19C3,20.1 3.9,21 5,21H19C20.1,21 21,20.1 21,19V12H19V19Z";
        }
    }
    $.$mol_icon_open_in_new = $mol_icon_open_in_new;
})($ || ($ = {}));
//new.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    class $psb_portal extends $.$mol_book2 {
        Placeholder() {
            return null;
        }
        plugins() {
            return [
                this.Theme()
            ];
        }
        pages() {
            return [
                this.Menu()
            ];
        }
        Menu_item(id) {
            const obj = new this.$.$mol_view();
            obj.sub = () => [
                this.Menu_link_in(id),
                this.Menu_link_out(id)
            ];
            return obj;
        }
        App(id) {
            const obj = new this.$.$mol_frame();
            obj.uri = (val) => this.app_uri(id, val);
            return obj;
        }
        Events() {
            const obj = new this.$.$piterjs_app();
            obj.tools = () => [
                this.App_close()
            ];
            obj.Now = () => null;
            obj.Links = () => null;
            return obj;
        }
        Credits() {
            const obj = new this.$.$hyoo_calc();
            obj.title = () => this.credits_title();
            obj.formulas_default = () => this.credits_formulas();
            return obj;
        }
        App_close() {
            const obj = new this.$.$mol_link();
            obj.arg = () => ({
                app: null
            });
            obj.sub = () => [
                this.App_close_icon()
            ];
            return obj;
        }
        data() {
            return {
                cards: {
                    title: this.$.$mol_locale.text('$psb_portal_data_cards_title'),
                    uri: "https://moldevhack.github.io/psb_cards/#"
                },
                events: {
                    title: this.$.$mol_locale.text('$psb_portal_data_events_title'),
                    uri: "https://piterjs.org/#"
                },
                credits: {
                    title: this.$.$mol_locale.text('$psb_portal_data_credits_title'),
                    uri: "https://calc.hyoo.ru/#!title=Кредитный%20калькулятор/A1=Сумма_кредита%20%3D%201000/B1=тыс.%20руб./A2=Годовая_ставка%20%3D%2015/B2=%25/A3=Срок_кредита%20%3D%2024/B3=мес./D1=Общая_сумма_выплат%20%3D%20_.Сумма_кредита%20*%20%28%201%20%2B%20_.Годовая_ставка%20%2F%20100%20*%20_.Срок_кредита%20%2F%2012%20%29/D3=Переплата%20%3D%20_.Общая_сумма_выплат%20-%20_.Сумма_кредита/D2=Сумма_ежемесячных_выплат%20%3D%20floor%28%20_.Общая_сумма_выплат%20%2F%20_.Срок_кредита%20%29/E1=тыс.%20руб./E2=тыс.%20руб./E3=тыс.%20руб."
                },
                invest: {
                    title: this.$.$mol_locale.text('$psb_portal_data_invest_title'),
                    uri: "https://invest.hyoo.ru/#"
                },
                products: {
                    title: this.$.$mol_locale.text('$psb_portal_data_products_title'),
                    uri: "https://habhub.hyoo.ru/#"
                },
                bench: {
                    title: this.$.$mol_locale.text('$psb_portal_data_bench_title'),
                    uri: "https://compare.github.hyoo.ru/#!projects=hyoo-ru%2Fmam_mol%2Cfacebook%2Freact%2Cvuejs%2Fvue%2Cangular%2Fangular"
                },
                questions: {
                    title: this.$.$mol_locale.text('$psb_portal_data_questions_title'),
                    uri: "https://mol.js.org/app/questions/-/#"
                },
                tech: {
                    title: this.$.$mol_locale.text('$psb_portal_data_tech_title'),
                    uri: "https://mol.hyoo.ru/#"
                }
            };
        }
        Theme() {
            const obj = new this.$.$mol_theme_auto();
            return obj;
        }
        Source() {
            const obj = new this.$.$mol_link_source();
            obj.uri = () => "https://github.com/MolDevHack";
            return obj;
        }
        Lights() {
            const obj = new this.$.$mol_lights_toggle();
            return obj;
        }
        menu_items() {
            return [];
        }
        Menu_items() {
            const obj = new this.$.$mol_list();
            obj.rows = () => this.menu_items();
            return obj;
        }
        Menu() {
            const obj = new this.$.$mol_page();
            obj.title = () => this.$.$mol_locale.text('$psb_portal_Menu_title');
            obj.tools = () => [
                this.Source(),
                this.Lights()
            ];
            obj.body = () => [
                this.Menu_items()
            ];
            return obj;
        }
        app_title(id) {
            return "";
        }
        app_arg(id) {
            return {};
        }
        Menu_link_in(id) {
            const obj = new this.$.$mol_link();
            obj.title = () => this.app_title(id);
            obj.arg = () => this.app_arg(id);
            return obj;
        }
        Menu_link_out_icon(id) {
            const obj = new this.$.$mol_icon_open_in_new();
            return obj;
        }
        Menu_link_out(id) {
            const obj = new this.$.$mol_link();
            obj.uri = () => this.app_uri(id);
            obj.target = () => "_blank";
            obj.sub = () => [
                this.Menu_link_out_icon(id)
            ];
            return obj;
        }
        app_uri(id, val) {
            if (val !== undefined)
                return val;
            return "";
        }
        credits_title() {
            return "";
        }
        credits_formulas() {
            return {
                A1: "Сумма_кредита = 1000",
                A2: "Годовая_ставка = 15",
                A3: "Срок_кредита = 24",
                B1: "тыс. руб.",
                B2: "%",
                B3: "мес.",
                D1: "Общая_сумма_выплат = _.Сумма_кредита * ( 1 + _.Годовая_ставка / 100 * _.Срок_кредита / 12 )",
                D2: "Сумма_ежемесячных_выплат = floor( _.Общая_сумма_выплат / _.Срок_кредита )",
                D3: "Переплата = _.Общая_сумма_выплат - _.Сумма_кредита",
                E1: "тыс. руб.",
                E2: "тыс. руб.",
                E3: "тыс. руб."
            };
        }
        App_close_icon() {
            const obj = new this.$.$mol_icon_cross();
            return obj;
        }
    }
    __decorate([
        $.$mol_mem_key
    ], $psb_portal.prototype, "Menu_item", null);
    __decorate([
        $.$mol_mem_key
    ], $psb_portal.prototype, "App", null);
    __decorate([
        $.$mol_mem
    ], $psb_portal.prototype, "Events", null);
    __decorate([
        $.$mol_mem
    ], $psb_portal.prototype, "Credits", null);
    __decorate([
        $.$mol_mem
    ], $psb_portal.prototype, "App_close", null);
    __decorate([
        $.$mol_mem
    ], $psb_portal.prototype, "Theme", null);
    __decorate([
        $.$mol_mem
    ], $psb_portal.prototype, "Source", null);
    __decorate([
        $.$mol_mem
    ], $psb_portal.prototype, "Lights", null);
    __decorate([
        $.$mol_mem
    ], $psb_portal.prototype, "Menu_items", null);
    __decorate([
        $.$mol_mem
    ], $psb_portal.prototype, "Menu", null);
    __decorate([
        $.$mol_mem_key
    ], $psb_portal.prototype, "Menu_link_in", null);
    __decorate([
        $.$mol_mem_key
    ], $psb_portal.prototype, "Menu_link_out_icon", null);
    __decorate([
        $.$mol_mem_key
    ], $psb_portal.prototype, "Menu_link_out", null);
    __decorate([
        $.$mol_mem_key
    ], $psb_portal.prototype, "app_uri", null);
    __decorate([
        $.$mol_mem
    ], $psb_portal.prototype, "App_close_icon", null);
    $.$psb_portal = $psb_portal;
})($ || ($ = {}));
//portal.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_attach("psb/portal/portal.view.css", "[psb_portal_menu] {\n\tflex: 0 0 20rem;\n}\n\n[psb_portal_menu_link_in] {\n\tflex-grow: 1;\n}\n\n[psb_portal_app] {\n\tflex: 1 0 25rem;\n}\n");
})($ || ($ = {}));
//portal.view.css.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $psb_portal extends $.$psb_portal {
            app() {
                return this.$.$mol_state_arg.value('app');
            }
            menu_items() {
                return Object.keys(this.data()).map(app => this.Menu_item(app));
            }
            pages() {
                const app = this.app();
                return [
                    this.Menu(),
                    ...!app ? []
                        : app === 'events' ? this.Events().pages()
                            : app === 'credits' ? [this.Credits()]
                                : [this.App(app)]
                ];
            }
            app_title(app) {
                return this.data()[app].title;
            }
            app_uri(app, next) {
                const suffix = '/mol_lights=' + (this.$.$mol_lights() ? 'on' : 'off');
                if (this.app() === app) {
                    if (next)
                        next = next.replace(/\/mol_lights=(on|off)/, '');
                    const uri = this.$.$mol_state_arg.value('uri', next);
                    return (uri ?? this.data()[app].uri) + suffix;
                }
                else {
                    return this.data()[app].uri + suffix;
                }
            }
            app_arg(app) {
                return { app, uri: null };
            }
            credits_title() {
                return this.data().credits.title;
            }
        }
        __decorate([
            $.$mol_mem
        ], $psb_portal.prototype, "menu_items", null);
        __decorate([
            $.$mol_mem_key
        ], $psb_portal.prototype, "app_uri", null);
        $$.$psb_portal = $psb_portal;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//portal.view.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_env() {
        return {};
    }
    $.$mol_env = $mol_env;
})($ || ($ = {}));
//env.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_env = function $mol_env() {
        return this.process.env;
    };
})($ || ($ = {}));
//env.node.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_exec(dir, command, ...args) {
        let [app, ...args0] = command.split(' ');
        args = [...args0, ...args];
        this.$mol_log3_come({
            place: '$mol_exec',
            dir: $node.path.relative('', dir),
            message: 'Run',
            command: `${app} ${args.join(' ')}`,
        });
        var res = $node['child_process'].spawnSync(app, args, {
            cwd: $node.path.resolve(dir),
            shell: true,
            env: this.$mol_env(),
        });
        if (res.status || res.error)
            return $.$mol_fail(res.error || new Error(res.stderr.toString()));
        if (!res.stdout)
            res.stdout = Buffer.from([]);
        return res;
    }
    $.$mol_exec = $mol_exec;
})($ || ($ = {}));
//exec.node.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_view_tree_test_attributes_super extends $.$mol_view {
        some() {
            return {
                a: 0,
                b: 2
            };
        }
    }
    $.$mol_view_tree_test_attributes_super = $mol_view_tree_test_attributes_super;
    class $mol_view_tree_test_attributes extends $mol_view_tree_test_attributes_super {
        some() {
            return {
                ...super.some(),
                a: 1
            };
        }
    }
    $.$mol_view_tree_test_attributes = $mol_view_tree_test_attributes;
})($ || ($ = {}));
//attributes.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_view_tree_test_binding extends $.$mol_view {
        value(val) {
            return this.task_title_new(val);
        }
        enabled() {
            return this.head_complete_enabled();
        }
        task_title_new(val) {
            if (val !== undefined)
                return val;
            return "123";
        }
        head_complete_enabled() {
            return false;
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_view_tree_test_binding.prototype, "task_title_new", null);
    $.$mol_view_tree_test_binding = $mol_view_tree_test_binding;
})($ || ($ = {}));
//binding.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_view_tree_test_binding_right extends $.$mol_view {
        outer_width(v) {
            return this.Test().width(v);
        }
        Test() {
            const obj = new this.$.$mol_view_tree_test_binding_right_test();
            return obj;
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_view_tree_test_binding_right.prototype, "Test", null);
    $.$mol_view_tree_test_binding_right = $mol_view_tree_test_binding_right;
    class $mol_view_tree_test_binding_right_test extends $.$mol_view {
        width(val) {
            if (val !== undefined)
                return val;
            return 0;
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_view_tree_test_binding_right_test.prototype, "width", null);
    $.$mol_view_tree_test_binding_right_test = $mol_view_tree_test_binding_right_test;
})($ || ($ = {}));
//binding_right.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_view_tree_test_simple extends $.$mol_view {
        some() {
            return 1;
        }
        bool() {
            return true;
        }
        str() {
            return "test";
        }
        arr() {
            return [];
        }
        arr_string() {
            return [];
        }
    }
    $.$mol_view_tree_test_simple = $mol_view_tree_test_simple;
})($ || ($ = {}));
//simple.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_view_tree_test_attributes_subcomponent extends $.$mol_view {
        Page(index) {
            const obj = new this.$.$mol_view_tree_test_attributes_subcomponent_page();
            obj.Sub = () => this.page(index);
            return obj;
        }
        page(index) {
            return null;
        }
    }
    __decorate([
        $.$mol_mem_key
    ], $mol_view_tree_test_attributes_subcomponent.prototype, "Page", null);
    $.$mol_view_tree_test_attributes_subcomponent = $mol_view_tree_test_attributes_subcomponent;
    class $mol_view_tree_test_attributes_subcomponent_page extends $.$mol_view {
        Sub() {
            return null;
        }
    }
    $.$mol_view_tree_test_attributes_subcomponent_page = $mol_view_tree_test_attributes_subcomponent_page;
})($ || ($ = {}));
//subcomponent.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_view_tree_trim_remarks(def) {
        return def.transform(([node], sub) => (node.type === '-') ? null : node.clone({ sub: sub() }));
    }
    $.$mol_view_tree_trim_remarks = $mol_view_tree_trim_remarks;
    function $mol_view_tree_classes(defs) {
        return $mol_view_tree_trim_remarks(defs);
    }
    $.$mol_view_tree_classes = $mol_view_tree_classes;
    function $mol_view_tree_class_name(val) {
        return val.type;
    }
    $.$mol_view_tree_class_name = $mol_view_tree_class_name;
    function $mol_view_tree_super_name(val) {
        if (val.sub.length != 1)
            throw val.error('Wrong sub count');
        return val.sub[0].type;
    }
    $.$mol_view_tree_super_name = $mol_view_tree_super_name;
    function $mol_view_tree_class_props(def) {
        const props = {};
        const catch_prop = (prop, type = '') => {
            let def = prop;
            if (type === '=>') {
                if (prop.sub[0])
                    throw prop.error('Right binding can not have default value');
            }
            else {
                if (prop.sub.length === 0)
                    return;
                if (prop.sub[0].type === '-')
                    return;
                props[prop.type] = props[prop.type];
                def = prop.clone({
                    sub: [prop.sub[0].transform(([node, ...stack], sub) => {
                            if (['<=', '<=>', '=>'].indexOf(node.type) === -1)
                                return node.clone({ sub: sub() });
                            catch_prop(node.sub[0], node.type);
                            return node.clone({
                                sub: [node.sub[0].clone({
                                        sub: []
                                    })]
                            });
                        })]
                });
            }
            if (props[prop.type]) {
                if (props[prop.type].toString() !== def.toString()) {
                    throw def.error('Property already defined with another default value' + props[prop.type].error('').message + '\n---');
                }
            }
            else {
                props[prop.type] = def;
            }
        };
        def.sub[0].sub.map(sub => catch_prop(sub));
        return def.clone({
            type: '',
            sub: Object.keys(props).map(name => props[name]),
        });
    }
    $.$mol_view_tree_class_props = $mol_view_tree_class_props;
    function $mol_view_tree_prop_name(prop) {
        return (prop.type.match(/^\w+/) || [])[0] || '';
    }
    $.$mol_view_tree_prop_name = $mol_view_tree_prop_name;
    function $mol_view_tree_prop_key(prop) {
        return (prop.type.match(/!(\w+)$/) || [])[1] || '';
    }
    $.$mol_view_tree_prop_key = $mol_view_tree_prop_key;
    function $mol_view_tree_prop_next(prop) {
        return (prop.type.match(/\?(\w+)$/) || [])[1] || '';
    }
    $.$mol_view_tree_prop_next = $mol_view_tree_prop_next;
    function $mol_view_tree_prop_value(prop) {
        if (prop.sub.length != 1)
            throw prop.error(`Wrong sub count (${prop.sub.length})`);
        return prop.sub[0];
    }
    $.$mol_view_tree_prop_value = $mol_view_tree_prop_value;
    function $mol_view_tree_value_type(val) {
        switch (val.type) {
            case 'true': return 'bool';
            case 'false': return 'bool';
            case 'null': return 'null';
            case '*': return 'dict';
            case '@': return 'locale';
            case '': return 'string';
            case '<=': return 'get';
            case '<=>': return 'bind';
            case '=>': return 'put';
        }
        switch (val.type[0]) {
            case '/': return 'list';
            case '$': return 'object';
        }
        if (Number(val.type).toString() == val.type)
            return 'number';
        throw val.error('Wrong value');
    }
    $.$mol_view_tree_value_type = $mol_view_tree_value_type;
    function $mol_view_tree_compile(tree) {
        const splittedUri = tree.uri.split(/[#\\\/]/);
        splittedUri.pop();
        const fileName = splittedUri.pop();
        const SourceNode = (row, col, fileName, text) => text;
        var content = [];
        var locales = {};
        for (let def of $mol_view_tree_classes(tree).sub) {
            if (!/^\$\w+$/.test(def.type))
                throw def.error('Wrong component name');
            var parent = def.sub[0];
            var members = {};
            for (let param of $mol_view_tree_class_props(def).sub) {
                try {
                    var needSet = false;
                    var needCache = false;
                    if (param.type === '<=>') {
                        param = param.sub[0];
                    }
                    if (param.type === '<=') {
                        param = param.sub[0];
                    }
                    var propName = /(.*?)(?:\!(\w+))?(?:\?(\w+))?$/.exec(param.type);
                    if (propName[3]) {
                        needSet = true;
                        needCache = true;
                    }
                    const getValue = (value, definition) => {
                        try {
                            switch (true) {
                                case (value.type === ''):
                                    return [JSON.stringify(value.value)];
                                case (value.type === '@'):
                                    const key = `${def.type}_${param.type.replace(/[?!].*/, '')}`;
                                    locales[key] = value.value;
                                    return [`this.$.$mol_locale.text( ${JSON.stringify(key)} )`];
                                case (value.type === '-'):
                                    return null;
                                case (value.type[0] === '/'):
                                    const item_type = value.type.substring(1);
                                    var items = [];
                                    value.sub.forEach(item => {
                                        if (item.type === '-')
                                            return;
                                        if (item.type === '^') {
                                            items.push(`...super.${param.type}()`);
                                            return;
                                        }
                                        var val = getValue(item);
                                        if (val)
                                            items.push(val.join(""));
                                    });
                                    return [`[`, items.join(' , '), `]`, (item_type ? ` as readonly ( ${item_type} )[]` : ` as readonly any[]`)];
                                case (value.type[0] === '$'):
                                    if (!definition)
                                        throw value.error('Objects should be bound');
                                    needCache = true;
                                    var overs = [];
                                    value.sub.forEach(over => {
                                        if (/^[-\/]?$/.test(over.type))
                                            return '';
                                        var overName = /(.*?)(?:\!(\w+))?(?:\?(\w+))?$/.exec(over.type);
                                        var ns = needSet;
                                        if (over.sub[0].type === '=>') {
                                            if (over.sub[0].sub.length === 1) {
                                                const [, own_name, own_key, own_next] = /(.*?)(?:\!(\w+))?(?:\?(\w+))?$/.exec(over.sub[0].sub[0].type);
                                                let own_args = [];
                                                if (own_key)
                                                    own_args.push(` ${own_key} : any `);
                                                if (own_next)
                                                    own_args.push(` ${own_next}? : any `);
                                                let [, their_name, ...their_args] = /(.*?)(?:\!(\w+))?(?:\?(\w+))?$/.exec(over.type);
                                                their_args = their_args.filter(Boolean);
                                                members[own_name] = [`\t${own_name}(${own_args.join(',')}) {\n\t\treturn this.${propName[1]}(${propName[2] || ''}).${their_name}( ${their_args.join(' , ')} )\n\t}\n\n`];
                                                return;
                                            }
                                        }
                                        var v = getValue(over.sub[0]);
                                        let args = [];
                                        if (overName[2])
                                            args.push(` ${overName[2]} : any `);
                                        if (overName[3])
                                            args.push(` ${overName[3]}? : any `);
                                        overs.push(...['\t\t\tobj.', SourceNode(over.row, over.col, fileName, overName[1]), ' = (', args.join(','), ') => ', ...(v || []), '\n']);
                                        needSet = ns;
                                    });
                                    const object_args = value.select('/', '').sub.map(arg => getValue(arg)).join(' , ');
                                    return ['(( obj )=>{\n', ...overs, '\t\t\treturn obj\n\t\t})( new this.$.', SourceNode(value.row, value.col, fileName, value.type), '( ', object_args, ' ) )'];
                                case (value.type === '*'):
                                    var opts = [];
                                    value.sub.forEach(opt => {
                                        if (opt.type === '-')
                                            return '';
                                        if (opt.type === '^') {
                                            opts.push(`\t\t\t...super.${param.type}() ,\n`);
                                            return;
                                        }
                                        var key = /(.*?)(?:\?(\w+))?$/.exec(opt.type);
                                        var ns = needSet;
                                        var v = getValue(opt.sub[0]);
                                        var arg = key[2] ? ` ( ${key[2]}? : any )=> ` : '';
                                        opts.push(...['\t\t\t"', SourceNode(opt.row, opt.col, fileName, key[1] + '" : '), arg, ' ', ...(v || []), ' ,\n']);
                                        needSet = ns;
                                    });
                                    return ['({\n', opts.join(''), '\t\t})'];
                                case (value.type === '<=>'):
                                    if (value.sub.length === 1) {
                                        var type = /(.*?)(?:\!(\w+))?(?:\?(\w+))$/.exec(value.sub[0].type);
                                        return ['this.' + type[1] + '(' + (type[2] ? type[2] + ' ,' : '') + ' ' + type[3] + ' )'];
                                    }
                                    break;
                                case (value.type === '<='):
                                    if (value.sub.length === 1) {
                                        var type = /(.*?)(?:\!(\w+))?(?:\?(\w+))?$/.exec(value.sub[0].type);
                                        return ['this.' + type[1] + '(' + (type[2] ? type[2] : '') + ')'];
                                    }
                                    break;
                            }
                            switch (value.type) {
                                case 'true':
                                case 'false':
                                    return [value.type];
                                case 'null':
                                    return ['null as any'];
                            }
                            if (Number(value.type).toString() == value.type)
                                return [value.type];
                            throw value.error('Wrong value');
                        }
                        catch (err) {
                            throw err;
                        }
                    };
                    if (param.sub.length > 1)
                        throw new Error('Too more sub');
                    param.sub.forEach(child => {
                        var val = getValue(child, true);
                        if (!val)
                            return;
                        var args = [];
                        if (propName[2])
                            args.push(` ${propName[2]} : any `);
                        if (propName[3])
                            args.push(` ${propName[3]}? : any , force? : $${''}mol_mem_force `);
                        if (needSet)
                            val = [
                                `( ${propName[3]} !== void 0 ) ? ${propName[3]} : `,
                                ...val
                            ];
                        val = ['return ', ...val];
                        var decl = ['\t', SourceNode(param.row, param.col, fileName, propName[1]), '(', args.join(','), ') {\n\t\t', ...val, '\n\t}\n\n'];
                        if (needCache) {
                            if (propName[2])
                                decl = ['\t@ $', 'mol_mem_key\n', ...decl];
                            else
                                decl = ['\t@ $', 'mol_mem\n', ...decl];
                        }
                        decl = ['\t/**\n\t *  ```\n', param.toString().trim().replace(/^/mg, '\t *  '), '\n\t *  ```\n\t **/\n', ...decl];
                        members[propName[1]] = decl;
                    });
                }
                catch (err) {
                    throw err;
                }
            }
            var body = Object.keys(members).reduce(function (acc, name) {
                const items = members[name] ? members[name] : ['\t', name, '() { return null as any }\n\t}\n'];
                return [...acc, ...items];
            }, []);
            var classes = ['namespace $ { export class ', SourceNode(def.row, def.col, fileName, def.type), ' extends ', SourceNode(parent.row, parent.col, fileName, parent.type), ' {\n\n', ...body, '} }\n'];
            content = [...content, ...classes];
        }
        return { script: content.join(''), locales };
    }
    $.$mol_view_tree_compile = $mol_view_tree_compile;
})($ || ($ = {}));
//tree.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_icon_medium extends $.$mol_icon {
        path() {
            return "M4.37,7.3C4.4,7.05 4.3,6.81 4.12,6.65L2.25,4.4V4.06H8.05L12.53,13.89L16.47,4.06H22V4.4L20.4,5.93C20.27,6.03 20.2,6.21 20.23,6.38V17.62C20.2,17.79 20.27,17.97 20.4,18.07L21.96,19.6V19.94H14.12V19.6L15.73,18.03C15.89,17.88 15.89,17.83 15.89,17.59V8.5L11.4,19.9H10.8L5.57,8.5V16.14C5.5,16.46 5.63,16.78 5.86,17L7.96,19.57V19.9H2V19.57L4.1,17C4.33,16.78 4.43,16.46 4.37,16.14V7.3Z";
        }
    }
    $.$mol_icon_medium = $mol_icon_medium;
})($ || ($ = {}));
//medium.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_icon_telegram extends $.$mol_icon {
        path() {
            return "M9.78,18.65L10.06,14.42L17.74,7.5C18.08,7.19 17.67,7.04 17.22,7.31L7.74,13.3L3.64,12C2.76,11.75 2.75,11.14 3.84,10.7L19.81,4.54C20.54,4.21 21.24,4.72 20.96,5.84L18.24,18.65C18.05,19.56 17.5,19.78 16.74,19.36L12.6,16.3L10.61,18.23C10.38,18.46 10.19,18.65 9.78,18.65Z";
        }
    }
    $.$mol_icon_telegram = $mol_icon_telegram;
})($ || ($ = {}));
//telegram.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_icon_vk extends $.$mol_icon {
        path() {
            return "M20.8,7.74C20.93,7.32 20.8,7 20.18,7H18.16C17.64,7 17.41,7.27 17.28,7.57C17.28,7.57 16.25,10.08 14.79,11.72C14.31,12.19 14.1,12.34 13.84,12.34C13.71,12.34 13.5,12.19 13.5,11.76V7.74C13.5,7.23 13.38,7 12.95,7H9.76C9.44,7 9.25,7.24 9.25,7.47C9.25,7.95 10,8.07 10.05,9.44V12.42C10.05,13.08 9.93,13.2 9.68,13.2C9,13.2 7.32,10.67 6.33,7.79C6.13,7.23 5.94,7 5.42,7H3.39C2.82,7 2.7,7.27 2.7,7.57C2.7,8.11 3.39,10.77 5.9,14.29C7.57,16.7 9.93,18 12.08,18C13.37,18 13.53,17.71 13.53,17.21V15.39C13.53,14.82 13.65,14.7 14.06,14.7C14.36,14.7 14.87,14.85 16.07,16C17.45,17.38 17.67,18 18.45,18H20.47C21.05,18 21.34,17.71 21.18,17.14C21,16.57 20.34,15.74 19.47,14.76C19,14.21 18.29,13.61 18.07,13.3C17.77,12.92 17.86,12.75 18.07,12.4C18.07,12.4 20.54,8.93 20.8,7.74Z";
        }
    }
    $.$mol_icon_vk = $mol_icon_vk;
})($ || ($ = {}));
//vk.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_icon_twitter extends $.$mol_icon {
        path() {
            return "M22.46,6C21.69,6.35 20.86,6.58 20,6.69C20.88,6.16 21.56,5.32 21.88,4.31C21.05,4.81 20.13,5.16 19.16,5.36C18.37,4.5 17.26,4 16,4C13.65,4 11.73,5.92 11.73,8.29C11.73,8.63 11.77,8.96 11.84,9.27C8.28,9.09 5.11,7.38 3,4.79C2.63,5.42 2.42,6.16 2.42,6.94C2.42,8.43 3.17,9.75 4.33,10.5C3.62,10.5 2.96,10.3 2.38,10C2.38,10 2.38,10 2.38,10.03C2.38,12.11 3.86,13.85 5.82,14.24C5.46,14.34 5.08,14.39 4.69,14.39C4.42,14.39 4.15,14.36 3.89,14.31C4.43,16 6,17.26 7.89,17.29C6.43,18.45 4.58,19.13 2.56,19.13C2.22,19.13 1.88,19.11 1.54,19.07C3.44,20.29 5.7,21 8.12,21C16,21 20.33,14.46 20.33,8.79C20.33,8.6 20.33,8.42 20.32,8.23C21.16,7.63 21.88,6.87 22.46,6Z";
        }
    }
    $.$mol_icon_twitter = $mol_icon_twitter;
})($ || ($ = {}));
//twitter.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_icon_youtube extends $.$mol_icon {
        path() {
            return "M10,15L15.19,12L10,9V15M21.56,7.17C21.69,7.64 21.78,8.27 21.84,9.07C21.91,9.87 21.94,10.56 21.94,11.16L22,12C22,14.19 21.84,15.8 21.56,16.83C21.31,17.73 20.73,18.31 19.83,18.56C19.36,18.69 18.5,18.78 17.18,18.84C15.88,18.91 14.69,18.94 13.59,18.94L12,19C7.81,19 5.2,18.84 4.17,18.56C3.27,18.31 2.69,17.73 2.44,16.83C2.31,16.36 2.22,15.73 2.16,14.93C2.09,14.13 2.06,13.44 2.06,12.84L2,12C2,9.81 2.16,8.2 2.44,7.17C2.69,6.27 3.27,5.69 4.17,5.44C4.64,5.31 5.5,5.22 6.82,5.16C8.12,5.09 9.31,5.06 10.41,5.06L12,5C16.19,5 18.8,5.16 19.83,5.44C20.73,5.69 21.31,6.27 21.56,7.17Z";
        }
    }
    $.$mol_icon_youtube = $mol_icon_youtube;
})($ || ($ = {}));
//youtube.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_button_major extends $.$mol_button_typed {
        attr() {
            return {
                ...super.attr(),
                mol_theme: "$mol_theme_accent"
            };
        }
    }
    $.$mol_button_major = $mol_button_major;
})($ || ($ = {}));
//major.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_attach("mol/button/major/major.view.css", "[mol_button_major][disabled] {\n\topacity: .5;\n\tfilter: grayscale();\n}\n");
})($ || ($ = {}));
//major.view.css.js.map
;
"use strict";
var $;
(function ($) {
    class $piterjs_link extends $.$mol_link {
        target() {
            return "_blank";
        }
        sub() {
            return [
                this.Button()
            ];
        }
        Button() {
            const obj = new this.$.$mol_button_major();
            obj.title = () => this.title();
            return obj;
        }
    }
    __decorate([
        $.$mol_mem
    ], $piterjs_link.prototype, "Button", null);
    $.$piterjs_link = $piterjs_link;
})($ || ($ = {}));
//link.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_attach("piterjs/link/link.view.css", "[piterjs_link] {\n\tpadding: 0;\n}\n/* \n[piterjs_link_button] {\n\tfont-weight: bolder;\n\tcolor: var(--mol_theme_text);\n\tbox-shadow: 0 0 0 2px #f7df1e;\n\tbackground: none;\n}\n\n[piterjs_link_button]:hover {\n\tbackground: #f7df1e;\n}\n */\n");
})($ || ($ = {}));
//link.view.css.js.map
;
"use strict";
var $;
(function ($) {
    class $piterjs_now extends $.$mol_page {
        title() {
            return "PiterJS";
        }
        meetups() {
            return [];
        }
        attr() {
            return {
                ...super.attr(),
                tabindex: null
            };
        }
        tools() {
            return [
                this.Links()
            ];
        }
        body() {
            return [
                this.Screen()
            ];
        }
        Github_icon() {
            const obj = new this.$.$mol_icon_github_circle();
            return obj;
        }
        Github() {
            const obj = new this.$.$mol_link();
            obj.uri = () => "https://github.com/piterjs";
            obj.sub = () => [
                this.Github_icon()
            ];
            return obj;
        }
        Medium_icon() {
            const obj = new this.$.$mol_icon_medium();
            return obj;
        }
        Medium() {
            const obj = new this.$.$mol_link();
            obj.uri = () => "https://medium.com/piterjs";
            obj.sub = () => [
                this.Medium_icon()
            ];
            return obj;
        }
        Telegram_icon() {
            const obj = new this.$.$mol_icon_telegram();
            return obj;
        }
        Telegram() {
            const obj = new this.$.$mol_link();
            obj.uri = () => "https://t.me/piterjs";
            obj.sub = () => [
                this.Telegram_icon()
            ];
            return obj;
        }
        Vkontakte_icon() {
            const obj = new this.$.$mol_icon_vk();
            return obj;
        }
        Vkontakte() {
            const obj = new this.$.$mol_link();
            obj.uri = () => "https://vk.com/piterjs";
            obj.sub = () => [
                this.Vkontakte_icon()
            ];
            return obj;
        }
        Twitter_icon() {
            const obj = new this.$.$mol_icon_twitter();
            return obj;
        }
        Twitter() {
            const obj = new this.$.$mol_link();
            obj.uri = () => "https://twitter.com/@gopiterjs";
            obj.sub = () => [
                this.Twitter_icon()
            ];
            return obj;
        }
        Youtube_icon() {
            const obj = new this.$.$mol_icon_youtube();
            return obj;
        }
        Youtube() {
            const obj = new this.$.$mol_link();
            obj.uri = () => "https://www.youtube.com/channel/UCN9aK6ZG5PS1nnJZqscsmKw";
            obj.sub = () => [
                this.Youtube_icon()
            ];
            return obj;
        }
        Links() {
            const obj = new this.$.$mol_view();
            obj.sub = () => [
                this.Github(),
                this.Medium(),
                this.Telegram(),
                this.Vkontakte(),
                this.Twitter(),
                this.Youtube()
            ];
            return obj;
        }
        place() {
            const obj = new this.$.$piterjs_place();
            return obj;
        }
        Lights() {
            const obj = new this.$.$mol_lights_toggle();
            return obj;
        }
        Logo_angles() {
            const obj = new this.$.$mol_svg_path();
            obj.geometry = () => "M16.4 253.6h41v2.7l.1 13.7H0v-57.5h16.4v41zM256.3 57.6h-2.7V16.4h-41v-2.7L212.5 0H270v57.5l-13.7.1z";
            return obj;
        }
        Logo_image() {
            const obj = new this.$.$mol_svg_path();
            obj.geometry = () => "M218.3 164.7L212 162c-11-4.7-15.7-7.9-15.7-15.5 0-6.2 4.8-11 12.2-11 7.2 0 12 3.1 16.4 11l20-12.7c-8.5-14.6-20.1-20.3-36.4-20.3-23 0-37.5 14.6-37.5 33.6 0 20.7 12.2 30.5 30.8 38.4l6.4 2.7c11.8 5 18.7 8.2 18.7 16.9 0 7.3-6.8 12.5-17.4 12.5-12.7 0-19.7-6.5-25.2-15.5l-21 12c7.6 14.7 23 26 46.7 26 24.3 0 42.5-12.6 42.5-35.5 0-21.2-12.2-30.6-34-39.9zM123.7 201.3c0 12.7-5.3 16-13.7 16-8.8 0-12.4-6-16.4-13l-21 12.5c6 12.7 18 23.3 38.5 23.3 22.6 0 38.2-12 38.2-38.4v-86.9h-25.6v86.5zM111.4 65.4h-8l-.1-3.5h9c-3.4-4.7-2.2-13-.3-20h-9.2l1-3v-5.2H94l2 3-2 2.9h8l-.1 2.3h-9c-2 7-3.1 15.3.3 20h8.2l.1 3.1v.4H95.3c-.8 0-2 1.2-2.3 2.3H78.9v-3.5h13.7c-10.5-8.2 1.8-32.9 1.8-32.9h-16l1-7v-4.7h-9.9l2 2.4-2 2.3h7.4l-.1 7h-9.3s-12.3 24.7-1.8 33h10.6v3.4H53.6v-.3.1-5.6h7.3c-3.4-4.7-2.2-13-.3-20h-7.4v-2.3h.4v-6h-9.3l2 3-2 3h8v2.3h-8.4c-1.9 7-3 15.3.4 20h7.6l-.5 5.6v.2h-1.2V70h-.9L38.5 59v-8.8h-9.9l2 3-2 3h8.8v3l6.4 8.9s-.8 2.1-.4 3.5a50 50 0 0 0 6.6 7.9c1.4 1.5 3.6 6 3.6 6h24.8v6c-1.2.5-3.2 2-3.2 3.7 0 2.1 1.8 3.9 4.2 3.9 2.3 0 4.2-1.8 4.2-3.9 0-1.6-.5-3.2-2.8-3.6v-6.1H107l1.3-4.3c-5.2-2.3.3-7.8 3-10.2l1.6-5.5h-1.6v-.1zm-49 7.9h-2.3v-2.4h2.4v2.4zm4.7 0h-2.3v-2.4h2.3v2.4zm4.7 0h-2.3v-2.4h2.3v2.4zm4.7 0h-2.3v-2.4h2.3v2.4zm8.3 0h-2.4v-2.4h2.4v2.4zm4.7 0H87v-2.4h2.4v2.4zm4.6 0h-2.3v-2.4h2.3v2.4zm4.7 0h-2.3v-2.4h2.3v2.4z";
            return obj;
        }
        Logo() {
            const obj = new this.$.$mol_svg_root();
            obj.view_box = () => "0 0 270 270";
            obj.sub = () => [
                this.Logo_angles(),
                this.Logo_image()
            ];
            return obj;
        }
        Join() {
            const obj = new this.$.$piterjs_link();
            obj.uri = () => "https://docs.google.com/forms/d/e/1FAIpQLSe7lb5LFc0LaaJu9POvlIAw8Te0g46xSmYZr7FwuCWg2saYmA/viewform";
            obj.title = () => "Подать заявку на доклад";
            return obj;
        }
        Patreon() {
            const obj = new this.$.$piterjs_link();
            obj.uri = () => "https://www.patreon.com/bePatron?u=16938072";
            obj.title = () => "Поддержать PiterJS рублём";
            return obj;
        }
        Screen() {
            const obj = new this.$.$piterjs_screen();
            obj.place = () => this.place();
            obj.content = () => [
                this.Lights(),
                this.Logo(),
                this.Join(),
                this.Patreon()
            ];
            return obj;
        }
    }
    __decorate([
        $.$mol_mem
    ], $piterjs_now.prototype, "Github_icon", null);
    __decorate([
        $.$mol_mem
    ], $piterjs_now.prototype, "Github", null);
    __decorate([
        $.$mol_mem
    ], $piterjs_now.prototype, "Medium_icon", null);
    __decorate([
        $.$mol_mem
    ], $piterjs_now.prototype, "Medium", null);
    __decorate([
        $.$mol_mem
    ], $piterjs_now.prototype, "Telegram_icon", null);
    __decorate([
        $.$mol_mem
    ], $piterjs_now.prototype, "Telegram", null);
    __decorate([
        $.$mol_mem
    ], $piterjs_now.prototype, "Vkontakte_icon", null);
    __decorate([
        $.$mol_mem
    ], $piterjs_now.prototype, "Vkontakte", null);
    __decorate([
        $.$mol_mem
    ], $piterjs_now.prototype, "Twitter_icon", null);
    __decorate([
        $.$mol_mem
    ], $piterjs_now.prototype, "Twitter", null);
    __decorate([
        $.$mol_mem
    ], $piterjs_now.prototype, "Youtube_icon", null);
    __decorate([
        $.$mol_mem
    ], $piterjs_now.prototype, "Youtube", null);
    __decorate([
        $.$mol_mem
    ], $piterjs_now.prototype, "Links", null);
    __decorate([
        $.$mol_mem
    ], $piterjs_now.prototype, "place", null);
    __decorate([
        $.$mol_mem
    ], $piterjs_now.prototype, "Lights", null);
    __decorate([
        $.$mol_mem
    ], $piterjs_now.prototype, "Logo_angles", null);
    __decorate([
        $.$mol_mem
    ], $piterjs_now.prototype, "Logo_image", null);
    __decorate([
        $.$mol_mem
    ], $piterjs_now.prototype, "Logo", null);
    __decorate([
        $.$mol_mem
    ], $piterjs_now.prototype, "Join", null);
    __decorate([
        $.$mol_mem
    ], $piterjs_now.prototype, "Patreon", null);
    __decorate([
        $.$mol_mem
    ], $piterjs_now.prototype, "Screen", null);
    $.$piterjs_now = $piterjs_now;
})($ || ($ = {}));
//now.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_attach("piterjs/now/now.view.css", "[piterjs_now] {\n\tfont-size: 1em;\n\tpadding: 0;\n\talign-items: stretch;\n\tbackground: none;\n\tflex: 1000 0 30rem;\n\tposition: relative;\n\tanimation: none !important;\n}\n\n[piterjs_now_lights] {\n\tposition: absolute;\n\ttop: .75rem;\n\tright: .75rem;\n}\n\n[piterjs_app_placeholder] {\n\tflex: 1000 1 0;\n}\n\n[piterjs_now_title] {\n\tflex: 1000 1 auto;\n\tpadding-right: 0;\n}\n\n[piterjs_now_body] {\n\tdisplay: flex;\n}\n\n[piterjs_now_screen] {\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: space-evenly;\n\talign-items: center;\n\tpadding: 1rem;\n\tbackground: none;\n}\n\n[piterjs_now_logo] {\n\tbox-shadow: none;\n\twidth: 30vmin;\n\tmargin: 1rem;\n\tanimation: piterjs_now_logo_show .250s ease-out;\n}\n\n[piterjs_app_now_logo_angles] {\n\tfill: var(--mol_theme_focus);\n}\n\n[piterjs_now_links] {\n\tflex: 1 1 auto;\n\tdisplay: flex;\n\tflex-wrap: wrap;\n}\n\n[piterjs_app_now_join] {\n\tpadding: 0;\n\tmargin: 1rem;\n}\n\n@keyframes piterjs_now_logo_show {\n\tfrom {\n\t\ttransform: scale(2);\n\t\topacity: 0;\n\t\tz-index: -1;\n\t}\n}\n");
})($ || ($ = {}));
//now.view.css.js.map

//# sourceMappingURL=node.js.map
