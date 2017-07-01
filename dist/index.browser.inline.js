(function (global, process) { 
var $826337949_exports = {}
if (!global.briskystamp) {
  const bs = {}
  const ts = bs.ts = 535673248076
  var tsInProgress = false
  var cnt = 0
  var d
  var on

  global.briskystamp = bs

  bs.inProgress = false
  bs.offset = 0

  bs.setOffset = val => {
    tsInProgress = false
    bs.offset = val
  }

  const ms = () => {
    if (!tsInProgress) {
      cnt = 0
      d = Date.now() - ts + bs.offset
      tsInProgress = true
      setTimeout(() => { tsInProgress = false })
    } else {
      d += ++cnt / 9999
    }
    return d
  }

  bs.create = override => override || ms()

  bs.on = fn => {
    if (!on) {
      on = [ fn ]
    } else {
      on.push(fn)
    }
  }

  bs.clear = () => { on = false } // rename this to stop

  bs.close = () => {
    if (on && !bs.inProgress) {
      bs.inProgress = true
      for (let i = 0; i < on.length; i++) { on[i]() }
      bs.inProgress = on = false
    }
  }

  bs.parse = stamp => stamp > 1e6 ? (stamp + ts) : stamp
}

var $826337949_$4024611344 = global.briskystamp


var $826337949 = $826337949_$4024611344
;var $2180032073_exports = {}
"use strict";

function $2180032073_hash(str) {
  var hash = 5381,
      i    = str.length;

  while(i) {
    hash = (hash * 33) ^ str.charCodeAt(--i);
  }

  /* JavaScript does bitwise operations (like XOR, above) on 32-bit signed
   * integers. Since we want the results to be always positive, convert the
   * signed int to an unsigned by doing an unsigned bitshift. */
  return hash >>> 0;
}

var $2180032073 = $2180032073_hash;

;var $1662971556_exports = {}

const $1662971556_$2621634261_get = (t, key, noContext) => {
  if (key in t) {
    const result = t[key]
    if (!noContext && result && result.inherits && key !== 'val') {
      if (t._c) {
        result._c = t._c
        result._cLevel = t._cLevel + 1
      } else if (result._c) {
        result._c = null
        result._cLevel = null
      }
    }
    return result
  } else if (t.inherits) {
    const result = $1662971556_$2621634261_get(t.inherits, key, true)
    if (!noContext && result && result.inherits && key !== 'val') {
      result._c = t
      result._cLevel = 1
    }
    return result
  }
}

const $1662971556_$2621634261_getOrigin = (t, key, noContext) => {
  if (t) {
    let result = $1662971556_$2621634261_get(t, key, noContext)
    if (result !== void 0 && result !== null) {
      return result
    } else {
      if ((t = t.val) && typeof t === 'object') {
        return t.inherits && $1662971556_$2621634261_getOrigin(t, key, noContext)
      }
    }
  }
}

const $1662971556_$2621634261_getProps = t => t.props || $1662971556_$2621634261_getProps(t.inherits)

// if you removed it dont return...
const $1662971556_$2621634261_getData = t => t.emitters && t.emitters.data || t.inherits && $1662971556_$2621634261_getData(t.inherits)

// same here
const $1662971556_$2621634261_getFn = t => t.fn || t.inherits && $1662971556_$2621634261_getFn(t.inherits)

const $1662971556_$2621634261_getDefault = t => t.props && t.props.default.struct || $1662971556_$2621634261_getDefault(t.inherits)

const $1662971556_$2621634261_getVal = t => t.val !== void 0 ? t.val : t.inherits && $1662971556_$2621634261_getVal(t.inherits)



var $1662971556_$2621634261_$ALL$ = {
  get: $1662971556_$2621634261_get,
  getDefault: $1662971556_$2621634261_getDefault,
  getOrigin: $1662971556_$2621634261_getOrigin,
  getData: $1662971556_$2621634261_getData,
  getFn: $1662971556_$2621634261_getFn,
  getVal: $1662971556_$2621634261_getVal,
  getProps: $1662971556_$2621634261_getProps
}
;const $1662971556_$466859286_removeKey = (t, key) => {
  if (t._ks) {
    const keys = t._ks
    let i = keys.length
    while (i--) {
      if (keys[i] === key) {
        keys.splice(i, 1)
        break
      }
    }
  }
}

const $1662971556_$466859286_removeContextKey = (t, key) => {
  if (!t._ks) {
    const keys = $1662971556_$466859286_getKeys(t.inherits)
    if (keys) {
      const b = []
      for (let i = 0, j = 0, len = keys.length; i < len; i++) {
        if (keys[i] === key) {
          j = 1
        } else {
          b[i - j] = keys[i]
        }
      }
      t._ks = b
    }
  } else {
    $1662971556_$466859286_removeKey(t, key)
  }
}

const $1662971556_$466859286_copy = t => {
  const keys = $1662971556_$466859286_getKeys(t.inherits)
  if (keys) {
    const len = keys.length
    let i = len
    const b = t._ks = []
    while (i--) { b[i] = keys[i] }
    return len
  }
}

const $1662971556_$466859286_addKey = (t, key) => {
  if (!t._ks) {
    const keys = $1662971556_$466859286_getKeys(t.inherits)
    if (keys) {
      const len = keys.length
      let i = len
      const b = t._ks = []
      while (i--) { b[i] = keys[i] }
      b[len] = key
    } else {
      t._ks = [ key ]
    }
  } else {
    t._ks.push(key)
  }
}

const $1662971556_$466859286_getKeys = t => t._ks || t.inherits && $1662971556_$466859286_getKeys(t.inherits)



var $1662971556_$466859286_$ALL$ = {
  removeKey: $1662971556_$466859286_removeKey,
  addKey: $1662971556_$466859286_addKey,
  removeContextKey: $1662971556_$466859286_removeContextKey,
  getKeys: $1662971556_$466859286_getKeys,
  copy: $1662971556_$466859286_copy
}
;var $1662971556_$826337949 = $826337949
;

const $1662971556_$3988518475_handleStruct = (p, stamp) => {
  if (p.emitters && p.emitters.data && p.emitters.data.struct && p.__tStamp !== stamp) {
    p.__tStamp = stamp
    let i = p.emitters.data.struct.length
    while (i--) {
      $1662971556_$3988518475_subscription(p.emitters.data.struct[i], stamp)
      $1662971556_$3988518475_handleStruct(p.emitters.data.struct[i])
    }
    p.__tStamp = null
  }
}

const $1662971556_$3988518475_subscription = (t, stamp, val) => {
  t.tStamp = stamp
  if (t._p || t._c) {
    let p = t._p
    if (t._c && t._cLevel === 1) p = t._c

    while (p && (!p.tStamp || p.tStamp !== stamp)) {
      p.tStamp = stamp
      $1662971556_$3988518475_handleStruct(p, stamp)

      if (p.subscriptions) $1662971556_$3988518475_exec(p)
      p = p._p
    }
  }
  if (t.subscriptions) $1662971556_$3988518475_exec(t)
}

const $1662971556_$3988518475_exec = t => {
  if (!t._inProgressS) {
    t._inProgressS = true
    $1662971556_$826337949.on(() => {
      let i = t.subscriptions.length
      while (i--) { t.subscriptions[i]() }
      t._inProgressS = false
    })
  }
}

var $1662971556_$3988518475 = $1662971556_$3988518475_subscription

;



const $1662971556_$2147961271_strip = t => {
  while (t && t._c) {
    t._c = null
    t._cLevel = null
    t = t._p
  }
}

const $1662971556_$2147961271_update = (context, t, val, stamp, key, resolve, level, j, fn) => {
  if (!(key in context)) {
    let n = j
    if (n) $1662971556_$2147961271_strip(context) // dont trust this, also heavy
    resolve._c = context
    resolve._cLevel = level
    $1662971556_$3988518475(context, stamp)
    while (n--) { fn[n](val, stamp, t) }
    if (context._p) {
      if ($1662971556_$2147961271_exec(t, val, stamp, context._p, context.key, context, 1, j, fn)) {
        context._c = null
        context._cLevel = null
      }
    }
    if (context.instances) {
      let i = context.instances.length
      while (i--) {
        $1662971556_$2147961271_update(context.instances[i], t, val, stamp, key, resolve, level, j, fn)
      }
    }
    return true
  }
}

const $1662971556_$2147961271_exec = (t, val, stamp, parent, key, resolve, level, j, fn) => {
  var clear
  if (parent.instances) {
    let i = parent.instances.length
    while (i--) {
      if ($1662971556_$2147961271_update(parent.instances[i], t, val, stamp, key, resolve, level, j, fn)) {
        clear = true
      }
    }
  }
  if (parent._p) {
    if ($1662971556_$2147961271_exec(t, val, stamp, parent._p, parent.key, resolve, level + 1, j, fn)) {
      clear = true
    }
  }
  return clear
}

// removal
const $1662971556_$2147961271_remove = (t, stamp) => {
  const data = $1662971556_$2621634261_getData(t)
  if (data) {
    const fn = $1662971556_$2621634261_getFn(data)
    if (fn) {
      let i = fn.length
      while (i--) { fn[i](null, stamp, t) }
    }
  }
  const keys = $1662971556_$466859286_getKeys(t)
  if (keys) {
    for (let i = 0, len = keys.length; i < len; i++) {
      let nest = $1662971556_$2621634261_get(t, keys[i])
      if (nest) {
        $1662971556_$2147961271_remove(nest, stamp)
        nest._c = null
        nest._cLevel = null
      }
    }
  }
}

const $1662971556_$2147961271_updateRemove = (context, t, stamp, key, resolve, level) => {
  if (!(key in context)) {
    resolve._c = context
    resolve._cLevel = level
    $1662971556_$3988518475(context, stamp)
    $1662971556_$2147961271_remove(t, stamp)
    if (context._p) {
      if ($1662971556_$2147961271_execRemove(t, stamp, context._p, context.key, context, 1)) {
        context._c = null
        context._cLevel = null
      }
    }
    if (context.instances) {
      let i = context.instances.length
      while (i--) {
        $1662971556_$2147961271_updateRemove(context.instances[i], t, stamp, key, resolve, level)
      }
    }
    return true
  }
}

const $1662971556_$2147961271_execRemove = (t, stamp, context, key, resolve, level) => {
  var clear
  if (context.instances) {
    let i = context.instances.length
    while (i--) {
      if ($1662971556_$2147961271_updateRemove(context.instances[i], t, stamp, key, resolve, level)) {
        clear = true
      }
    }
  }
  if (context._p) {
    if ($1662971556_$2147961271_execRemove(t, stamp, context._p, context.key, resolve, level + 1)) {
      clear = true
    }
  }
  return clear
}

const $1662971556_$2147961271_removeContext = (context, key, stamp) => {
  const t = $1662971556_$2621634261_get(context, key)
  if (t) {
    if (stamp) $1662971556_$2147961271_updateRemove(context, t, stamp, key, t, 1)
    t._c = null
    t._cLevel = null
  }
}



var $1662971556_$2147961271_$ALL$ = {
  removeContext: $1662971556_$2147961271_removeContext,
  exec: $1662971556_$2147961271_exec
}
;



const $1662971556_$2092109398_onGeneric = (t, key) => t.emitters && t.emitters[key] ||
  t.inherits && $1662971556_$2092109398_onGeneric(t.inherits, key)

const $1662971556_$2092109398_overrideSubscription = (t, override, stamp, isNew) => {
  t.stamp = override
  $1662971556_$3988518475(t, stamp)
  if (t._p && !isNew) {
    if ($1662971556_$2147961271_exec(t, void 0, stamp, t._p, t.key, t, 1, 0)) {
      t._c = null
      t._cLevel = null
    }
  }
}

const $1662971556_$2092109398_fn = (t, val, stamp, emitter, noContext) => {
  const listeners = $1662971556_$2621634261_getFn(emitter)
  if (listeners) {
    let i = listeners.length
    if (i && t._p && !noContext) {
      if ($1662971556_$2147961271_exec(t, val, stamp, t._p, t.key, t, 1, i, listeners)) {
        let clear = t
        while (clear && clear._c) {
          clear._c = null
          clear._cLevel = null
          clear = clear._p
        }
      }
    }
    while (i--) { listeners[i](val, stamp, t) }
  } else {
    emitter.listeners = []
  }
}

const $1662971556_$2092109398_data = (t, val, stamp, override, isNew) => {
  if (!t.stamp || t.stamp !== stamp) {
    t.stamp = override || stamp
    $1662971556_$3988518475(t, stamp)
    const own = t.emitters && t.emitters.data
    if (own) {
      const struct = own.struct
      $1662971556_$2092109398_fn(t, val, stamp, own)
      if (struct) {
        let i = struct.length
        while (i--) { $1662971556_$2092109398_updateStruct(struct[i], val, stamp, override) }
      }
    } else {
      const emitter = $1662971556_$2621634261_getData(t.inherits)
      if (emitter) {
        $1662971556_$2092109398_fn(t, val, stamp, emitter)
      } else {
        if (t._p && !isNew) {
          if ($1662971556_$2147961271_exec(t, val, stamp, t._p, t.key, t, 1, 0)) {
            t._c = null
            t._cLevel = null
          }
        }
      }
    }
  }
}

const $1662971556_$2092109398_updateStruct = (t, val, stamp, override) => {
  $1662971556_$2092109398_data(t, val, stamp, override)
  if (t.instances) {
    let i = t.instances.length
    while (i--) {
      if (t.instances[i].val === void 0) {
        $1662971556_$2092109398_updateStruct(t.instances[i], val, stamp, override)
      }
    }
  }
}

const $1662971556_$2092109398_generic = (t, type, val, stamp) => {
  if (type === 'data') {
    $1662971556_$2092109398_data(t, val, stamp)
  } else {
    const emitter = $1662971556_$2092109398_onGeneric(t, type)
    if (emitter) { $1662971556_$2092109398_fn(t, val, stamp, emitter, true) }
  }
}



var $1662971556_$2092109398_$ALL$ = {
  data: $1662971556_$2092109398_data,
  generic: $1662971556_$2092109398_generic,
  overrideSubscription: $1662971556_$2092109398_overrideSubscription
}
;

const $1662971556_$1442998772_get = (t, key) => t[key] || t.inherits && $1662971556_$1442998772_get(t.inherits, key)

const $1662971556_$1442998772_listener = (t, val, key, stamp) => {
  if (key in t) {
    const result = t[key]
    if (result) {
      if (result !== val) {
        const isFn = typeof result === 'function'
        $1662971556_$1442998772_replace(isFn ? t.fn : t.struct, result, val)
        if (val === null) {
          t[key] = null
        } else {
          t[key] = val
        }
      }
    } else if (val !== null) {
      $1662971556_$1442998772_add(t, val, key)
    }
  } else {
    const result = $1662971556_$1442998772_get(t.inherits, key)
    if (result && typeof result === 'function') {
      if (result !== val) {
        if (t.fn) {
          $1662971556_$1442998772_replace(t.fn, result, val)
        } else {
          t.fn = $1662971556_$1442998772_copyContext($1662971556_$2621634261_getFn(t), result, val)
        }
        t[key] = val
      }
    } else if (val !== null) {
      $1662971556_$1442998772_add(t, val, key)
    }
  }
}

const $1662971556_$1442998772_add = (t, val, key) => {
  if (typeof val === 'function') {
    $1662971556_$1442998772_addFn(t, val)
  } else {
    $1662971556_$1442998772_addStruct(t, val)
  }
  t[key] = val
}

const $1662971556_$1442998772_copyContext = (arr, val, replacement) => {
  const b = []
  if (!replacement) {
    for (let i = 0, j = 0, len = arr.length; i < len; i++) {
      if (arr[i] === val) {
        j = 1
      } else {
        b[i - j] = arr[i]
      }
    }
  } else {
    let i = arr.length
    while (i--) {
      if (arr[i] === val) {
        b[i] = replacement
      } else {
        b[i] = arr[i]
      }
    }
  }
  return b
}

const $1662971556_$1442998772_replace = (arr, val, replacement) => {
  for (let i = 0, len = arr.length; i < len; i++) {
    if (arr[i] === val) {
      if (replacement) {
        arr.splice(i, 1, replacement)
      } else {
        arr.splice(i, 1)
      }
      break
    }
  }
}

const $1662971556_$1442998772_create = (arr, val) => {
  if (arr) {
    let i = arr.length
    const b = [ val ]
    while (i--) { b[i + 1] = arr[i] }
    return b
  } else {
    return [ val ]
  }
}

const $1662971556_$1442998772_addFn = (t, val) => {
  if (!t.fn) {
    t.fn = $1662971556_$1442998772_create($1662971556_$2621634261_getFn(t), val)
  } else {
    t.fn.unshift(val)
  }
}

const $1662971556_$1442998772_addStruct = (t, val) => {
  if (!t.struct) {
    t.struct = [ val ]
  } else {
    t.struct.unshift(val)
  }
}



var $1662971556_$1442998772_$ALL$ = {
  addFn: $1662971556_$1442998772_addFn,
  listener: $1662971556_$1442998772_listener,
  replace: $1662971556_$1442998772_replace
}
;var $1662971556_$2180032073 = $2180032073
;
var $1662971556_$3258224650_cnt = 1e4 // so now a limition becomes 10k fns normal
const $1662971556_$3258224650_uid = t => { return t._uid || (t._uid = ++$1662971556_$3258224650_cnt) }
const $1662971556_$3258224650_cuid = t => {
  if (t._c) {
    var id = 5381
    while (t) {
      id = id * 33 ^ $1662971556_$3258224650_uid(t)
      t = t._cLevel === 1 ? t._c : t._p
    }
    return id >>> 0
  } else {
    return $1662971556_$3258224650_uid(t) - 1e4
  }
}
const $1662971556_$3258224650_puid = t => {
  var id = 5381
  var p = t
  if (t._c) {
    while (p) {
      let key = p.key
      if (key !== void 0) {
        id = id * 33 ^ ($1662971556_$2180032073(key))
        p = p._cLevel === 1 ? p._c : p._p
      } else {
        return id >>> 0
      }
    }
    return id >>> 0
  } else if (t._puid) {
    return t._puid
  } else {
    while (p) {
      let key = p.key
      if (key !== void 0) {
        id = id * 33 ^ ($1662971556_$2180032073(key))
        p = p._p
      } else {
        return (t._puid = id >>> 0)
      }
    }
    return (t._puid = id >>> 0)
  }
}



var $1662971556_$3258224650_$ALL$ = {
  uid: $1662971556_$3258224650_uid,
  cuid: $1662971556_$3258224650_cuid,
  puid: $1662971556_$3258224650_puid
}
;




const $1662971556_$2633820941_resolveContext = (t, val, stamp, reset) => {
  let level = t._cLevel
  var cntx = t._c
  let key
  if (cntx._c) {
    cntx = $1662971556_$2633820941_resolveContext(cntx, void 0, stamp)
  }
  if (level > 1) {
    let path = []
    let parent = t._p
    while (--level) {
      path.unshift(parent.key)
      parent = parent._p
    }
    // need to happen for every step.. also when making an instance
    // basicly it allways needs to happen on create...
    key = path[0]
    let inherits = $1662971556_$2621634261_get(cntx, key, true)
    $1662971556_$2633820941_contextProperty(cntx, void 0, stamp, key, inherits)
    inherits._c = null
    inherits._cLevel = null
    cntx = cntx[key]
    for (let i = 1, len = path.length; i < len; i++) {
      key = path[i]
      inherits = $1662971556_$2621634261_get(cntx, key, true)
      cntx[key] = $1662971556_$4292174816_create(inherits, void 0, stamp, cntx, key)
      inherits._c = null
      inherits._cLevel = null
      cntx = cntx[key]
    }
    key = t.key
  } else {
    key = t.key
  }
  t._c = null
  t._cLevel = null
  return $1662971556_$2633820941_contextProperty(cntx, val, stamp, key, $1662971556_$2621634261_get(cntx, key, true), reset)
}

const $1662971556_$2633820941_contextProperty = (t, val, stamp, key, property, reset) => {
  if (val === null) {
    $1662971556_$2147961271_removeContext(t, key, stamp)
    t[key] = null
    $1662971556_$466859286_removeContextKey(t, key)
    return val
  } else {
    return $1662971556_$4292174816_create(property, val, stamp, t, key, reset)
  }
}

/**
 * @function storeContext
 * stores context for reapplying with applyContext
 * @todo: needs perf optmization
 * @return {array} returns store
 */
const $1662971556_$2633820941_storeContext = t => {
  var context = t._c
  if (context) {
    const arr = []
    let level = t._cLevel
    while (context) {
      arr.push(context, level)
      level = context._cLevel
      context = context._c
    }
    return arr
  }
}

/**
 * @function applyContext
 * applies context to base
 */
const $1662971556_$2633820941_applyContext = (t, store) => {
  if (store) {
    const l = store.length
    let ret
    for (let i = 0, target = t; i < l; i += 2) {
      let context = store[i]
      let level = store[i + 1]
      let path = [ target ]
      let newTarget = $1662971556_$2633820941_setContext(target, context, level, path)
      let struct = $1662971556_$2633820941_handleChange(target, context, path, level)
      if (ret === void 0 && struct !== void 0) {
        ret = struct
      }
      if (newTarget) target = newTarget
    }
    return ret
  } else {
    if (t._c) {
      t._c = null
      t._cLevel = null
    }
  }
}

const $1662971556_$2633820941_handleChange = (target, context, path, level) => {
  var newContext, newLevel
  var travelTaget = context
  if (context._p && context._p[context.key] === null) {
    return null
  }
  for (let i = 0, len = path.length; i < len; i++) {
    let segment = path[i]
    let field = $1662971556_$2621634261_get(travelTaget, segment.key)
    // delete does not work.... like this does not set null anymore
    if (!field || field.val === null) {
      $1662971556_$2633820941_removeContext(target, level)
      return null
    } else if (field !== segment) {
      segment._c = null
      segment._cLevel = null
      newContext = field
      newLevel = len - (i + 1)
    }
    travelTaget = field
    if (i === len - 1) target = travelTaget
  }
  if (newContext) {
    if (!newLevel) {
      $1662971556_$2633820941_removeContext(target, level)
    } else {
      $1662971556_$2633820941_setContext(target, newContext, newLevel)
    }
    return target
  }
}

const $1662971556_$2633820941_setContext = (target, context, level, path) => {
  if (level) {
    target._cLevel = level
    target._c = context
    if (level > 1) {
      let p = target._p
      for (let i = 1; p && i < level; i++) {
        if (path) { path.unshift(p) }
        p._c = context
        p._cLevel = target._cLevel - i
        p = p._p
      }
    }
    return context
  }
}

const $1662971556_$2633820941_removeContext = (target, level) => {
  if (level) {
    target._cLevel = null
    target._c = null
    if (level > 1) {
      let p = target._p
      for (let i = 1; p && i < level; i++) {
        p._c = null
        p._cLevel = null
        p = p._p
      }
    }
  }
}

// make some tests but obvisouly usefull
// const clearContext = (t, level) => {
//   var parent = t
//   var i = 0
//   if (!level) level = t._cLevel
//   while (parent && i < level) {
//     parent._c = null
//     parent._cLevel = null
//     parent = i === 1 ? parent._c : parent._p
//     i++
//   }
//   return this
// }



var $1662971556_$2633820941_$ALL$ = {
  contextProperty: $1662971556_$2633820941_contextProperty,
  resolveContext: $1662971556_$2633820941_resolveContext,
  applyContext: $1662971556_$2633820941_applyContext,
  storeContext: $1662971556_$2633820941_storeContext
}
;




const $1662971556_$624523381_property = (t, val, key, stamp, struct, isNew, reset) => {
  var changed
  const result = $1662971556_$2621634261_get(t, key)
  if (result && result.inherits) {
    if (result._c) {
      // also need to do some stuff here
      $1662971556_$2633820941_contextProperty(t, val, stamp, key, result, reset)
    } else {
      $1662971556_$4292174816_set(result, val, stamp, void 0, reset)
      changed = val === null
    }
  } else {
    changed = true
    $1662971556_$466859286_addKey(t, key)
    $1662971556_$4292174816_create(struct, val, stamp, t, key, reset)
  }
  return changed
}

const $1662971556_$624523381_propertyNE = (t, val, key, stamp, struct, isNew, reset) => {
  var changed
  const result = $1662971556_$2621634261_get(t, key)
  if (result && result.inherits) {
    if (result._c) {
      // also need to do some stuff here
      $1662971556_$2633820941_contextProperty(t, val, stamp, key, result, reset)
    } else {
      $1662971556_$4292174816_set(result, val, stamp, void 0, reset)
      changed = val === null
    }
  } else {
    changed = true
    $1662971556_$4292174816_create(struct, val, stamp, t, key, reset)
  }
  return changed
}

const $1662971556_$624523381_getProp = (t, key) => t.props
  ? key && (key in t.props && t.props[key]) || t.props.default
  : $1662971556_$624523381_getProp(t.inherits, key)



var $1662971556_$624523381_$ALL$ = {
  getProp: $1662971556_$624523381_getProp,
  property: $1662971556_$624523381_property,
  propertyNE: $1662971556_$624523381_propertyNE
}
;


var $1662971556_$3815974835 = (t, key, val, stamp, noContext) => {
  var bind
  // if typeof key === 'fn' // do somethign as well -- super nice extra

  if (typeof key === 'object') {
    if (val !== void 0) {
      for (let i = 0, len = key.length; t && i < len; i++) {
        bind = t
        t = $1662971556_$2621634261_getOrigin(t, key[i], noContext)
        if (!t) {
          let ret = $1662971556_$4292174816_set(bind, { [key[i]]: i === len - 1 ? val : {} }, stamp)
          if (ret && ret.inherits) { bind = ret }
          t = $1662971556_$2621634261_get(bind, key[i], noContext)
        }
        if (typeof t === 'function') { t = bind[key[i]]() }
      }
    } else {
      for (let i = 0, len = key.length; t && i < len; i++) {
        bind = t
        t = $1662971556_$2621634261_get(t, key[i], noContext) || $1662971556_$2621634261_getOrigin(t, key[i], noContext)
        if (typeof t === 'function' && $1662971556_$3815974835_whitelist(key[i])) { t = bind[key[i]]() }
      }
    }
    return t
  } else {
    bind = t
    t = $1662971556_$2621634261_getOrigin(t, key, noContext)
    if (!t && val !== void 0) {
      $1662971556_$4292174816_set(bind, { [key]: val }, stamp)
      t = $1662971556_$2621634261_get(bind, key, noContext)
    } else {
      if (typeof t === 'function' && $1662971556_$3815974835_whitelist(key)) { t = bind[key]() }
    }
    return t
  }
}

const $1662971556_$3815974835_whitelist = key =>
  key === 'root' ||
  key === 'parent' ||
  key === 'compute' ||
  key === 'origin'

;const $1662971556_$1695496138_parent = t => {
  if (t._c) {
    if (t._cLevel === 1) {
      return t._c
    } else {
      t._p._cLevel = t._cLevel - 1
      t._p._c = t._c
      return t._p
    }
  } else {
    return t._p
  }
}

const $1662971556_$1695496138_root = (t, real) => {
  var p = t
  if (real) {
    while (p) {
      t = p
      p = p._p
    }
  } else {
    while (p) {
      t = p
      p = $1662971556_$1695496138_parent(p)
    }
  }
  return t
}

// add option for resolve
const $1662971556_$1695496138_path = (t, real) => {
  const result = []
  var parent = t
  while (parent) {
    if (parent._c && !real) {
      let i = parent._cLevel
      let p = parent
      while (i--) {
        result.unshift(p.key)
        p = p._p
      }
      parent = parent._c
    } else if (parent.key) {
      result.unshift(parent.key)
      parent = parent._p
    } else {
      break
    }
  }
  return result
}



var $1662971556_$1695496138_$ALL$ = {
  path: $1662971556_$1695496138_path,
  parent: $1662971556_$1695496138_parent,
  root: $1662971556_$1695496138_root
}
;






const $1662971556_$2164199530_resolveReferences = (t, instance, stamp) => {
  const listeners = t.emitters.data.struct
  const tRoot = $1662971556_$1695496138_root(t, true)
  var iRoot
  let i = listeners.length
  while (i--) {
    if ($1662971556_$1695496138_root(listeners[i], true) === tRoot) {
      if (!iRoot) iRoot = $1662971556_$1695496138_root(instance, true)
      if (iRoot !== tRoot) {
        const p = $1662971556_$1695496138_path(listeners[i], true)
        if (p[0] === tRoot.key) p.shift()
        $1662971556_$4292174816_set($1662971556_$3815974835(iRoot, p, {}), instance, stamp, true)
      }
    }
  }
}

const $1662971556_$2164199530_removeReference = t => {
  if (t.val && typeof t.val === 'object' && t.val.inherits) {
    $1662971556_$1442998772_listener(t.val.emitters.data, null, $1662971556_$3258224650_uid(t))
  }
}

const $1662971556_$2164199530_reference = (t, val, stamp) => $1662971556_$4292174816_set(t, $1662971556_$3815974835(t, val.slice(1), {}, stamp))

const $1662971556_$2164199530_resolveFromValue = (t, val, stamp) => {
  if (val.instances && val._p && t._p) {
    const rootInstances = val.root(true).instances
    if (rootInstances && t.root(true) === val.root(true)) {
      for (let i = 0, len = rootInstances.length; i < len; i++) {
        const field = $1662971556_$3815974835(rootInstances[i], $1662971556_$1695496138_path(val, true), void 0, void 0, true)
        if (field !== val) {
          const instance = $1662971556_$3815974835(rootInstances[i], $1662971556_$1695496138_path(t, true))
          if (instance && $1662971556_$2621634261_getVal(instance) === val) {
            instance.set(field, stamp)
          }
          instance._c = null
          instance._cLevel = null
          field._c = null
          field._cLevel = null
        }
      }
    }
  }
}



var $1662971556_$2164199530_$ALL$ = {
  resolveReferences: $1662971556_$2164199530_resolveReferences,
  removeReference: $1662971556_$2164199530_removeReference,
  reference: $1662971556_$2164199530_reference,
  resolveFromValue: $1662971556_$2164199530_resolveFromValue
}
;


 // rdy for this


const $1662971556_$2264940719_getKeyProp = (t, key) => t.props
  ? key && (key in t.props && t.props[key])
  : $1662971556_$2264940719_getKeyProp(t.inherits, key)

const $1662971556_$2264940719_props = (t, inherits) => {
  if (t.props) {
    let own
    for (let key in t.props) {
      const prop = $1662971556_$624523381_getProp(inherits, key)
      if (!prop || t.props[key].struct != prop.struct) { // eslint-disable-line
        if (!own) own = {}
        own[key] = t.props[key]
      }
    }
    return own
  }
}

const $1662971556_$2264940719_switchInheritance = (t, inherits, stamp, fromInstance) => {
  var inheritsKeys, keys
  const old = t.inherits
  if (!old) return
  const instances = old.instances
  const tProps = $1662971556_$2264940719_props(t, old)
  t.inherits = inherits

  if (tProps) {
    const previous = $1662971556_$2621634261_getProps(inherits)
    const props = t.props = {}

    for (let key in previous) {
      props[key] = previous[key]
    }
    for (let key in tProps) {
      if (tProps[key].struct) {
        $1662971556_$2264940719_switchInheritance(tProps[key].struct, (
          (tProps.default ? $1662971556_$2264940719_getKeyProp(t, key) : tProps.default) || $1662971556_$624523381_getProp(t, key)
        ).struct)
        props[key] = tProps[key]
      }
    }
  }

  if (t._ks && (inheritsKeys = $1662971556_$466859286_getKeys(inherits))) {
    if (!keys) keys = []
    for (let i = 0, len = inheritsKeys.length; i < len; i++) {
      const key = inheritsKeys[i]
      if (!(key in t)) keys.push(key)
    }
    for (let i = 0, len = t._ks.length; i < len; i++) {
      const key = t._ks[i]
      if (key in t) {
        keys.push(key)
        const prop = $1662971556_$624523381_getProp(t, key)
        if (prop.struct) {
          $1662971556_$2264940719_switchInheritance(t[key], $1662971556_$2621634261_get(inherits, key, true) || prop.struct, stamp)
        }
        // '  PROPS ON NEW INHERITANCE IS NOT A STRUCT -- switching inheritance - not supported yet', key)
      }
    }
    t._ks = keys
  }

  if (inherits !== old) {
    if (instances) {
      let i = instances.length
      while (i--) {
        if (instances[i] === t) {
          instances.splice(i, 1)
          break
        }
      }
    }
    if (inherits.instances !== false) {
      if (!inherits.instances) inherits.instances = []
      inherits.instances.push(t)
    }
  }

  const inheritsEmitters = $1662971556_$2621634261_get(inherits, 'emitters', true)

  if (t.emitters) {
    const keys = $1662971556_$466859286_getKeys(t.emitters)
    if (keys) {
      for (let i = 0, len = keys.length; i < len; i++) {
        $1662971556_$2264940719_handleEmitters(t, t.emitters, inheritsEmitters, keys[i])
      }
    }
  }

  if (t.instances) {
    for (let i = 0, len = t.instances.length; i < len; i++) {
      $1662971556_$2264940719_switchInheritance(t.instances[i], t, stamp, true)
    }
  }

  const val = $1662971556_$2621634261_getVal(t)
  if (typeof val === 'object' && val.inherits) {
    $1662971556_$2164199530_resolveFromValue(inherits, val, stamp)
  }

  if (stamp && !fromInstance) $1662971556_$2092109398_data(t, void 0, stamp, false)
}

// ok so need to make a nice list of shit with keys make a new object
const $1662971556_$2264940719_inheritedEmitter = (emitter, result = {}) => {
  $1662971556_$2264940719_eachListener(emitter, (listener, key) => {
    if (typeof listener === 'function' && !(key in result)) {
      result[key] = listener
    }
  })
  if (emitter.inherits) $1662971556_$2264940719_inheritedEmitter(emitter.inherits, result)
  return result
}

const $1662971556_$2264940719_eachListener = (emitter, fn) => {
  for (let key in emitter) {
    if (
      key !== '_p' &&
      key !== 'key' &&
      key !== 'fn' &&
      key !== '_c' &&
      key !== '_cLevel' &&
      key !== 'instances' &&
      key !== 'inherits'
    ) {
      fn(emitter[key], key)
    }
  }
}

const $1662971556_$2264940719_handleEmitters = (t, emitters, inherits, key) => {
  const emitter = emitters[key]
  const inheritsEmitter = inherits && $1662971556_$2621634261_get(inherits, key, true)
  const fn = emitter.fn
  const newFn = []

  $1662971556_$2264940719_eachListener(emitter, (listener, key) => {
    if (typeof listener === 'function') newFn.push(listener)
  })

  if (fn) {
    const inheritsFn = inheritsEmitter && $1662971556_$2621634261_getFn(inheritsEmitter)
    if (inheritsFn) {
      const result = $1662971556_$2264940719_inheritedEmitter(inheritsEmitter)
      for (let key in result) {
        if (!(key in emitter)) {
          newFn.push(result[key])
        }
      }
    }
  }

  emitter.fn = newFn
}



var $1662971556_$2264940719_$ALL$ = {
  switchInheritance: $1662971556_$2264940719_switchInheritance
}
;



const $1662971556_$1506544200_update = (t, val, key, resolved, from) => {
  if (!(key in t)) {
    if (key !== 'val') {
      if (val[key] !== null) {
        if (!resolved) {
          if (t._ks) {
            $1662971556_$466859286_addKey(t, key)
          } else {
            $1662971556_$466859286_copy(t)
            return 1
          }
        }
      }
    }
    return true
  } else {
    if (val[key] === null && t[key]) {
      // do removal better
      if (!t._ks) {
        $1662971556_$466859286_copy(t)
        $1662971556_$466859286_addKey(t, key)
        return 1
      } else {
        $1662971556_$466859286_addKey(t, key) // no update
      }
    } else if (t[key] && from[key]) {
      $1662971556_$2264940719_switchInheritance(t[key], from[key])
    }
  }
}

const $1662971556_$1506544200_propertyKeys = (t, val, stamp, changed, resolved, override, from) => {
  var j = changed.length
  var inherits
  if (t.instances) {
    while (j--) {
      let key = changed[j]
      let res = $1662971556_$1506544200_update(t, val, key, resolved, from)
      if (res) {
        if (res !== true) { resolved = res }
        if (!inherits) {
          inherits = [ key ]
        } else {
          inherits.push(key)
        }
      }
    }
    if (inherits) {
      if (stamp) { $1662971556_$2092109398_data(t, val, stamp, override) }
      $1662971556_$1506544200_propertyChange(t, val, stamp, inherits, resolved, override)
    }
  } else {
    while (j--) {
      inherits = $1662971556_$1506544200_update(t, val, changed[j], resolved, from)
      if (inherits === 1) { resolved = inherits }
    }
    if (inherits && stamp) {
      $1662971556_$2092109398_data(t, val, stamp, override)
    }
  }
}

const $1662971556_$1506544200_propertyChange = (t, val, stamp, changed, resolved, override, from) => {
  const instances = t.instances
  let i = instances.length
  while (i--) {
    let instance = instances[i]
    $1662971556_$1506544200_propertyKeys(instance, val, stamp, changed, resolved, override, from)
  }
}

const $1662971556_$1506544200_valChange = (t, val, stamp, changed, override) => {
  const instances = t.instances
  let i = instances.length
  while (i--) {
    let instance = instances[i]
    if (instance.val === void 0) {
      if (stamp) { $1662971556_$2092109398_data(instance, val, stamp, override) }
      if (instance.instances) { $1662971556_$1506544200_valChange(instance, val, stamp, changed, override) }
    }
  }
}

const $1662971556_$1506544200_instances = (t, val, stamp, changed, override) => {
  if (changed === true) {
    $1662971556_$1506544200_valChange(t, val, stamp, changed, override)
  } else {
    $1662971556_$1506544200_propertyChange(t, val, stamp, changed, void 0, override, t)
  }
}

var $1662971556_$1506544200 = $1662971556_$1506544200_instances

;





const $1662971556_$2839414644_remove = (t, stamp, override, instance, from) => {
  if (!t) {
    // when remvoing something that does not exist
    return
  }
  if (t._async) { delete t._async }

  if (t.val && typeof t.val === 'object' && t.val.inherits) {
    $1662971556_$1442998772_listener(t.val.emitters.data, null, $1662971556_$3258224650_uid(t))
  }

  if (!instance && t.inherits.instances) {
    const instances = t.inherits.instances
    const len = instances.length
    let i = len
    while (i--) {
      if (instances[i] === t) {
        instances.splice(i, 1)
        break
      }
    }
  }

  if (t.emitters && t.emitters.data && t.emitters.data.struct) {
    let s = t.emitters.data.struct.length
    while (s--) {
      let struct = t.emitters.data.struct[s]
      if (struct.val === t) struct.val = null
    }
  }

  if (!instance) {
    if (stamp) {
      $1662971556_$2092109398_data(t, null, stamp, override)
    }
    if (t._ks) {
      const keys = t._ks
      for (let i = 0, len = keys.length; i < len; i++) {
        if (keys[i] in t) {
          $1662971556_$2839414644_remove(t[keys[i]], stamp, override, false, true)
          i--
          len--
        } else {
          $1662971556_$2147961271_removeContext(t, keys[i], stamp)
        }
      }
    } else {
      const keys = $1662971556_$466859286_getKeys(t)
      if (keys) {
        for (let i = 0, len = keys.length; i < len; i++) {
          $1662971556_$2147961271_removeContext(t, keys[i], stamp)
        }
      }
    }
  } else {
    if (stamp) { $1662971556_$2092109398_data(t, null, stamp, override) }
    if (t._ks) {
      const keys = t._ks
      for (let i = 0, len = keys.length; i < len; i++) {
        if (keys[i] in t) {
          $1662971556_$2839414644_remove(t[keys[i]], stamp, override, false, true)
          i--
          len--
        }
      }
    }
  }

  const instances = t.instances
  if (instances) {
    let i = instances.length
    while (i--) { $1662971556_$2839414644_remove(instances[i], stamp, override, true) }
    t.instances = null
  }

  $1662971556_$2839414644_removeFromParent(t._p, t.key, stamp, override, false, from)

  return true
}

const $1662971556_$2839414644_removeFromParent = (parent, key, stamp, override, instance, from) => {
  if (parent && key) {
    if (!instance || parent._ks) {
      $1662971556_$466859286_removeKey(parent, key)
      if (instance) {
        if (key in parent) { delete parent[key] }
      } else {
        parent[key] = null
      }
    }
    if (!from && stamp) {
      $1662971556_$2092109398_data(parent, { [key]: null }, stamp, override)
    }
    const instances = parent.instances
    if (instances) {
      let i = instances.length
      while (i--) {
        $1662971556_$2839414644_removeFromParent(instances[i], key, stamp, override, true)
      }
    }
  }
}

var $1662971556_$2839414644 = $1662971556_$2839414644_remove

;




const $1662971556_$2411079736_getType = (parent, type, t, stamp) => {
  if (typeof type === 'object') {
    if (type.inherits) {
      return type
    } else if (type.val && type.stamp !== void 0) {
      type = type.val
    } else {
      if (!type._created) {
        type._created = $1662971556_$4292174816_create($1662971556_$624523381_getProp(t).struct, type, stamp, parent)
      }
      return type._created
    }
  }
  let result = $1662971556_$2411079736_getTypeInternal(parent, type, t)
  if (!result) {
    // create type
    // console.log('no result - create type', type)
    parent = $1662971556_$1695496138_root(parent)
    $1662971556_$4292174816_set(parent, { types: { [type]: {} } }, stamp)
    result = parent.types[type]
  }
  return result
}

// setTimeout(() => {
//   console.log(cnt, obj)
// }, 1e3)

const $1662971556_$2411079736_getTypeInternal = (parent, type, t) =>
  (!t || typeof type === 'string' || typeof type === 'number') &&
  (
    parent.types && $1662971556_$2621634261_get(parent.types, type) ||
    parent.inherits && $1662971556_$2411079736_getTypeInternal(parent.inherits, type) ||
    parent._p && $1662971556_$2411079736_getTypeInternal(parent._p, type)
  )

var $1662971556_$2411079736 = $1662971556_$2411079736_getType

;


// create set obj can go away

// need to add listeners??? -- this is a rly strange case...

// has to happen when you create an instance of soemthing and change the type... rly weird
const $1662971556_$3658148266_createSetObj = (t, top) => {
  const result = {}
  const keys = t._ks
  if (t.type && !top) result.type = t.type.compute()
  if (keys) {
    for (let i = 0, len = keys.length; i < len; i++) {
      let key = keys[i]
      let field = t[key]
      if (field) result[key] = $1662971556_$3658148266_createSetObj(field, false)
    }
  }
  if (t.val !== void 0) result.val = t.val
  return result
}

var $1662971556_$3658148266_obj = {}

const $1662971556_$3658148266_createType = (parent, val, t, stamp, key) => {
  const type = val.type
  const constructor = $1662971556_$2411079736(parent, type, t, stamp) || t

  if (typeof val.type === 'object' && !val.type.stamp) {
    delete val.type
  }
  const instance = new constructor.Constructor()
  instance.inherits = constructor
  // console.log('count')
  // if (typeof type === 'object') {
  //   // console.log('--->', type)
  // }
  $1662971556_$3658148266_obj[type] = $1662971556_$3658148266_obj[type] ? $1662971556_$3658148266_obj[type] + 1 : 1
  if (constructor.instances !== false) {
    if (!constructor.instances) {
      constructor.instances = [ instance ]
    } else {
      constructor.instances.push(instance)
    }
  }

  //   if (constructor !== t && key && t.key === key && !val.reset && (t._ks || t.val !== void 0)) {

  if (constructor !== t && key && t.key === key && (t._ks || t.val !== void 0)) {
    // this has to become stronger / better
    // also need to call merge in the update path from original
    // need to handle types better -- from original to context and vice-versa
    $1662971556_$4292174816_set(instance, $1662971556_$3658148266_createSetObj(t, true, instance), stamp)
  }
  return instance
}

var $1662971556_$3658148266 = $1662971556_$3658148266_createType

;




var $1662971556_$2380202644_uid = 0
const $1662971556_$2380202644_extendSet = (t, val, stamp, context) => {
  if (t._c) {
    t._c = null
    t._cLevel = null
  }
  if (stamp) {
    $1662971556_$4292174816_set(t, val, $1662971556_$826337949.create())
    $1662971556_$826337949.close()
  } else {
    $1662971556_$4292174816_set(t, val)
  }
}

const $1662971556_$2380202644_error = (t, err, stamp) => {
  if (err) {
    $1662971556_$826337949.inProgress = false
    $1662971556_$2092109398_generic($1662971556_$1695496138_root(t), 'error', err, stamp)
  }
}

const $1662971556_$2380202644_isGeneratorFunction = obj => {
  const constructor = obj.constructor
  return constructor && (constructor.name === 'GeneratorFunction' ||
    constructor.displayName === 'GeneratorFunction') ||
    typeof constructor.prototype.next === 'function'
}

const $1662971556_$2380202644_generator = (t, val, stamp) => $1662971556_$2380202644_iterator(t, val(t, stamp), stamp)

const $1662971556_$2380202644_promiseQueue = (t, uid, val, error) => {
  if (t.async) {
    for (let i = 0, end = t.async.length - 2; i < end; i += 3) {
      if (t.async[i + 2] === uid) {
        t.async[i] = val
        t.async[i + 2] = void 0
        if (i === 0) { $1662971556_$2380202644_execPromise(t) }
        break
      }
    }
  }
}

const $1662971556_$2380202644_done = t => {
  t.async.splice(0, 3)
  if (t.async.length) { $1662971556_$2380202644_queue(t) }
  if (t.async && !t.async.length) {
    delete t.async
  }
}

const $1662971556_$2380202644_queue = t => {
  const async = t.async[0]
  if (async && async.next) {
    $1662971556_$2380202644_execIterator(t, async, t.async[1], t.async[2], $1662971556_$2380202644_done)
  } else if (!t.async[2]) {
    $1662971556_$2380202644_execPromise(t)
  }
}

const $1662971556_$2380202644_execPromise = t => {
  const async = t.async[0]
  if (async !== void 0) {
    if (Array.isArray(async)) {
      for (let i = 0, len = async.length; i < len; i++) {
        $1662971556_$2380202644_extendSet(t, async[i], t.async[1])
      }
    } else {
      $1662971556_$2380202644_extendSet(t, async, t.async[1])
    }
  }
  $1662971556_$2380202644_done(t)
}

const $1662971556_$2380202644_next = (iteratee, t, stamp, val) => {
  try {
    return iteratee.next()
  } catch (err) {
    $1662971556_$2380202644_error(t, err, stamp)
    $1662971556_$2380202644_done(t)
  }
}

const $1662971556_$2380202644_execIterator = (t, iteratee, stamp, id, done, val) => {
  if (t.async && t.async[2] === id) {
    if (!val || !val.done) {
      if (val !== void 0) {
        if (
          val.value &&
          typeof val.value === 'object' &&
          typeof val.value.then === 'function'
        ) {
          val.value
          .then(resolved => {
            if (t.async && t.async[2] === id) {
              $1662971556_$2380202644_extendSet(t, resolved, stamp)
              $1662971556_$2380202644_execIterator(t, iteratee, stamp, id, done, $1662971556_$2380202644_next(iteratee, t, stamp))
            }
          })
          .catch(err => {
            if (t.async && t.async[2] === id) {
              $1662971556_$2380202644_error(t, err, stamp)
              $1662971556_$2380202644_execIterator(t, iteratee, stamp, id, done, $1662971556_$2380202644_next(iteratee, t, stamp))
            }
          })
        } else {
          $1662971556_$2380202644_extendSet(t, val.value, stamp)
          $1662971556_$2380202644_execIterator(t, iteratee, stamp, id, done, $1662971556_$2380202644_next(iteratee, t, stamp))
        }
      } else {
        $1662971556_$2380202644_execIterator(t, iteratee, stamp, id, done, $1662971556_$2380202644_next(iteratee, t, stamp))
      }
    } else if (val.done) {
      done(t)
    }
  }
}

const $1662971556_$2380202644_iterator = (t, iteratee, stamp, val) => {
  const id = ++$1662971556_$2380202644_uid
  if (!t.async) {
    t.async = [ iteratee, stamp, id ]
    // time out is a temp solution
    // should work with bs.on ofcourse....
    // bs.on(() => {
    //   queue(t)
    // })
    setTimeout(() => $1662971556_$2380202644_queue(t))
  } else {
    t.async.push(iteratee, stamp, id)
  }
}

const $1662971556_$2380202644_promise = (t, promise, stamp) => {
  const id = ++$1662971556_$2380202644_uid
  if (!t.async) {
    t.async = [ void 0, stamp, id ]
    $1662971556_$2380202644_queue(t)
  } else {
    t.async.push(void 0, stamp, id)
  }
  promise
    .then(val => $1662971556_$2380202644_promiseQueue(t, id, val))
    .catch(err => {
      $1662971556_$2380202644_error(t, err, stamp)
      $1662971556_$2380202644_promiseQueue(t, id, void 0, err)
    })
}



var $1662971556_$2380202644_$ALL$ = {
  isGeneratorFunction: $1662971556_$2380202644_isGeneratorFunction,
  promise: $1662971556_$2380202644_promise,
  generator: $1662971556_$2380202644_generator,
  iterator: $1662971556_$2380202644_iterator
}
;











const $1662971556_$4292174816_create = (t, val, stamp, parent, key, reset) => {
  var instance
  const hasType = val &&
    typeof val === 'object' &&
    val.type && $1662971556_$624523381_getProp(t, 'type') !== $1662971556_$624523381_getProp(t, 'default')
  if (parent) {
    if (hasType) {
      instance = $1662971556_$3658148266(parent, val, t, stamp, key)
    } else {
      instance = new t.Constructor()
      instance.inherits = t
      if (t.instances !== false) {
        if (!t.instances) {
          t.instances = [ instance ]
        } else {
          t.instances.push(instance)
        }
      }
    }
    instance._p = parent
    if (key !== void 0) {
      instance.key = key
      parent[key] = instance
    }
  } else {
    if (hasType && typeof val.type === 'object') {
      instance = $1662971556_$3658148266(parent, val, t, stamp, key)
    } else {
      instance = new t.Constructor()
      instance.inherits = t
      if (t.instances !== false) {
        if (!t.instances) {
          t.instances = [ instance ]
        } else {
          t.instances.push(instance)
        }
      }
    }
  }
  if (val !== void 0) {
    $1662971556_$4292174816_set(instance, val, stamp, true, reset)
  }

  if (parent) {
    if (
      t.emitters &&
      t.emitters.data &&
      t.emitters.data.struct
    ) {
      $1662971556_$2164199530_resolveReferences(t, instance, stamp)
    }
  }
  return instance
}

// reset functions
const $1662971556_$4292174816_removeAllFields = (t, stamp) => {
  const keys = $1662971556_$466859286_getKeys(t)
  let changed
  if (keys) {
    let i = keys.length
    while (i--) {
      if (keys[i] in t) {
        $1662971556_$2839414644(t[keys[i]], stamp)
        changed = true
      }
    }
  }
  return changed
}

const $1662971556_$4292174816_removeSomeFields = (t, stamp, val, changed, isBool) => {
  const keys = $1662971556_$466859286_getKeys(t)
  if (!val.val && t.val !== void 0) {
    val.val = void 0
    if (isBool) {
      changed = true
    } else if (!changed) {
      changed = []
    }
  }
  if (keys) {
    let i = keys.length
    while (i--) {
      const key = keys[i]
      if (!(key in val) && (key in t)) {
        $1662971556_$2839414644(t[key], stamp)
        if (isBool) {
          changed = true
        } else {
          if (!changed) {
            changed = [ key ]
          } else {
            changed.push(key)
          }
        }
      }
    }
  }
  return changed
}
// --------------

const $1662971556_$4292174816_overrideObjects = (t, val, stamp, isNew, reset) => {
  var override = val.stamp

  if (override && t.stamp && !reset) {
    // conflict resolution
    if (Math.abs(t.stamp) > Math.abs(override)) {
      return false
    }
  }

  if (!stamp) stamp = override // also need to use this for _t stmap but not for travel :/

  if (val.val === null) {
    return $1662971556_$2839414644(t, stamp, override)
  } else {
    if (t.instances) {
      let changed
      for (let key in val) {
        if (key !== 'stamp') {
          let result = key !== 'val'
              ? $1662971556_$624523381_getProp(t, key)(t, val[key], key, stamp, isNew, reset, val)
              : $1662971556_$4292174816_setVal(t, val.val, stamp, 1)
          if (result) {
            if (!changed) {
              changed = result === 2 ? [] : [ key ]
            } else if (result !== 2) {
              changed.push(key)
            }
          }
        }
      }

      if (reset) {
        const changeNest = $1662971556_$4292174816_removeSomeFields(t, stamp, val, changed)
        if (!changed) changed = changeNest
      }

      if (changed) {
        if (stamp) { $1662971556_$2092109398_data(t, val, stamp, override, isNew) }
        $1662971556_$1506544200(t, val, stamp, changed, override)
        return true
      } else if (stamp !== t.tStamp) {
        // need to apply tStamp from override but not for the travel parts
        $1662971556_$2092109398_overrideSubscription(t, override, stamp, isNew)
      }
    } else {
      let changed
      for (let key in val) {
        if (key !== 'stamp') {
          if (
            key !== 'val'
              ? $1662971556_$624523381_getProp(t, key)(t, val[key], key, stamp, isNew, reset, val)
              : $1662971556_$4292174816_setVal(t, val.val, stamp, 1)
          ) {
            changed = true
          }
        }
      }

      if (reset && $1662971556_$4292174816_removeSomeFields(t, stamp, val, void 0, true)) changed = true

      if (changed) {
        if (stamp) { $1662971556_$2092109398_data(t, val, stamp, override, isNew) }
        return true
      } else if (stamp !== t.tStamp) {
        $1662971556_$2092109398_overrideSubscription(t, override, stamp, isNew)
      }
    }
  }
}

const $1662971556_$4292174816_objects = (t, val, stamp, isNew, reset) => {
  if (val.stamp) {
    return $1662971556_$4292174816_overrideObjects(t, val, stamp, isNew, reset)
  } else if (t.instances) {
    let changed
    for (let key in val) {
      if (key !== 'stamp') {
        let result = key !== 'val'
            ? $1662971556_$624523381_getProp(t, key)(t, val[key], key, stamp, isNew, reset, val)
            : $1662971556_$4292174816_setVal(t, val.val, stamp, 1)
        if (result) {
          if (!changed) {
            changed = result === 2 ? [] : [ key ]
          } else if (result !== 2) {
            changed.push(key)
          }
        }
      }
    }
    if (reset) {
      const changeNest = $1662971556_$4292174816_removeSomeFields(t, stamp, val, changed)
      if (!changed) changed = changeNest
    }
    if (changed) {
      if (stamp) { $1662971556_$2092109398_data(t, val, stamp, false, isNew) }
      $1662971556_$1506544200(t, val, stamp, changed)
      return true
    }
  } else {
    let changed
    for (let key in val) {
      if (
        key !== 'val'
          ? $1662971556_$624523381_getProp(t, key)(t, val[key], key, stamp, isNew, reset, val)
          : $1662971556_$4292174816_setVal(t, val.val, stamp, 1)
      ) {
        changed = true
      }
    }

    if (reset && $1662971556_$4292174816_removeSomeFields(t, stamp, val, void 0, true)) changed = true

    if (changed) {
      if (stamp) { $1662971556_$2092109398_data(t, val, stamp, false, isNew) }
      return true
    }
  }
}

const $1662971556_$4292174816_set = (t, val, stamp, isNew, reset) => {
  if (t._c) {
    return $1662971556_$2633820941_resolveContext(t, val, stamp, reset)
  } else {
    const type = typeof val
    if (type === 'function') {
      if ($1662971556_$2380202644_isGeneratorFunction(val)) {
        $1662971556_$2380202644_generator(t, val, stamp)
      } else if ($1662971556_$4292174816_setVal(t, val, stamp)) {
        if (reset) $1662971556_$4292174816_removeAllFields(t, stamp)
        return $1662971556_$4292174816_isChanged(t, val, stamp, isNew)
      } else if (reset && $1662971556_$4292174816_removeAllFields(t, stamp)) {
        return $1662971556_$4292174816_isChanged(t, val, stamp, isNew)
      }
    } else if (type === 'object') {
      if (!val) {
        return $1662971556_$2839414644(t, stamp)
      } else {
        if (val.inherits) {
          if ($1662971556_$4292174816_setVal(t, val, stamp, true)) {
            if (reset) $1662971556_$4292174816_removeAllFields(t, stamp)
            return $1662971556_$4292174816_isChanged(t, val, stamp, isNew)
          } else if (reset && $1662971556_$4292174816_removeAllFields(t, stamp)) {
            return $1662971556_$4292174816_isChanged(t, val, stamp, isNew)
          }
        } else if (val.then && typeof val.then === 'function') {
          // handle reset :X ?
          $1662971556_$2380202644_promise(t, val, stamp)
        } else if (val.next && typeof val.next === 'function') {
          // handle reset :X ?
          $1662971556_$2380202644_iterator(t, val, stamp)
        } else if (val[0] && val[0] === '@') {
          if ($1662971556_$2164199530_reference(t, val, stamp)) {
            if (reset) $1662971556_$4292174816_removeAllFields(t, stamp)
            return $1662971556_$4292174816_isChanged(t, val, stamp, isNew)
          } else if (reset && $1662971556_$4292174816_removeAllFields(t, stamp)) {
            return $1662971556_$4292174816_isChanged(t, val, stamp, isNew)
          }
        } else {
          return $1662971556_$4292174816_objects(t, val, stamp, isNew, reset)
        }
      }
    } else if ($1662971556_$4292174816_setVal(t, val, stamp)) {
      if (reset) $1662971556_$4292174816_removeAllFields(t, stamp)
      return $1662971556_$4292174816_isChanged(t, val, stamp, isNew)
    } else if (reset && $1662971556_$4292174816_removeAllFields(t, stamp)) {
      return $1662971556_$4292174816_isChanged(t, val, stamp, isNew)
    }
  }
}

const $1662971556_$4292174816_isChanged = (t, val, stamp, isNew) => {
  if (stamp) { $1662971556_$2092109398_data(t, val, stamp, false, isNew) }
  if (t.instances) { $1662971556_$1506544200(t, val, stamp, true) }
  return true
}

const $1662971556_$4292174816_getOnProp = t => t.props && t.props.on || $1662971556_$4292174816_getOnProp(t.inherits)

const $1662971556_$4292174816_onContext = (t, context) => {
  if (t.emitters) {
    if (context) {
      t.emitters._c = context
      t.emitters._cLevel = 1
    }
  } else if (t.inherits) {
    $1662971556_$4292174816_onContext(t.inherits, context || t)
  }
}

const $1662971556_$4292174816_setVal = (t, val, stamp, ref) => {
  if (t.val !== val) {
    if (ref) {
      if (ref === 1) {
        if (typeof val === 'object') {
          if (!val.inherits) {
            if (val[0] && val[0] === '@') {
              return $1662971556_$2164199530_reference(t, val, stamp)
            } else {
              $1662971556_$2164199530_removeReference(t)
              if (val.then && typeof val.then === 'function') {
                $1662971556_$2380202644_promise(t, val, stamp)
                return
              } else if (val.next && typeof val.next === 'function') {
                $1662971556_$2380202644_iterator(t, val, stamp)
                return
              }
              t.val = val
              return true
            }
          }
        } else {
          $1662971556_$2164199530_removeReference(t)
          t.val = val
          return true
        }
      }
      $1662971556_$2164199530_removeReference(t)
      t.val = val
      if (val.emitters) {
        if (!val.emitters.data) {
          $1662971556_$4292174816_getOnProp(val)(val, { data: void 0 }, 'on')
        }
        $1662971556_$1442998772_listener(val.emitters.data, t, $1662971556_$3258224650_uid(t))
      } else {
        $1662971556_$4292174816_onContext(val)
        $1662971556_$4292174816_getOnProp(val)(val, { data: void 0 }, 'on')
        $1662971556_$1442998772_listener(val.emitters.data, t, $1662971556_$3258224650_uid(t))
      }
      $1662971556_$2164199530_resolveFromValue(t, val, stamp)
    } else {
      $1662971556_$2164199530_removeReference(t)
      t.val = val
    }
    return true
  }
}


var $1662971556_$4292174816_resolveReferences = $1662971556_$2164199530_resolveReferences;
var $1662971556_$4292174816_$ALL$ = {
  set: $1662971556_$4292174816_set,
  create: $1662971556_$4292174816_create,
  resolveReferences: $1662971556_$2164199530_resolveReferences
}
;







const $1662971556_$430509040_inheritType = t => t.type || t.inherits && $1662971556_$430509040_inheritType(t.inherits)

const $1662971556_$430509040_type = (t, val, key, stamp, isNew, original) => {
  var isObject
  if (typeof val === 'object') {
    if (!val) {
      // 'remove type' -- not supported yet...
    } else if (val.stamp && val.val && !val.inherits) {
      if (!stamp) stamp = val.stamp
      val = val.val
    } else if (val.inherits) {
      isObject = true
      return
    } else {
      isObject = true
      return
    }
  }

  if (!isNew && t._p) {
    if (isObject) {
      // 'switch using object - not supported yet'
    } else {
      let type = t.type || $1662971556_$430509040_inheritType(t)
      type = type && type.compute()
      if (type !== val) {
        $1662971556_$2264940719_switchInheritance(t, $1662971556_$2411079736(t._p, val, t, stamp), stamp)
        // if (original.reset) set(t, { reset: true }, stamp) // maybe deprecate this...
      }
    }
  }

  if (t.type) {
    return $1662971556_$4292174816_set(t.type, val, stamp) && 2
  } else {
    t.type = $1662971556_$4292174816_create($1662971556_$624523381_getProp(t, key).struct, val, stamp, t, key)
    return 2
  }
}

const $1662971556_$430509040_inherits = (prop, t) => {
  while (t) {
    if (t === prop) return true
    t = t.inherits
  }
}

const $1662971556_$430509040_types = struct => {
  const types = (t, val, key, stamp) => {
    // decided to not support references, when using a struct it automaticly becomes the type
    var changed
    if (!t.types) {
      const prop = $1662971556_$624523381_getProp(t, key).struct
      let cntx = $1662971556_$2621634261_get(t, 'types')
      if (cntx && !$1662971556_$430509040_inherits(prop, cntx)) cntx = false
      t.types = $1662971556_$4292174816_create(cntx || prop, void 0, stamp, t, key)
      if (!cntx) changed = 2
    }
    $1662971556_$4292174816_set(t.types, val, stamp)
    return changed
  }

  types.struct = $1662971556_$4292174816_create(struct, {
    instances: false,
    props: {
      default: (t, val, key, stamp, isNew) => {
        var changed
        const result = $1662971556_$2621634261_get(t, key)
        if (result) {
          if (result._c) {
            $1662971556_$2633820941_contextProperty(t, val, stamp, key, result)
          } else {
            $1662971556_$4292174816_set(result, val, stamp)
            changed = val === null
          }
        } else {
          $1662971556_$466859286_addKey(t, key)
          if (val === 'self') {
            t[key] = t._p
          } else if (typeof val === 'object' && val.inherits) {
            t[key] = val
          } else {
            $1662971556_$4292174816_create($1662971556_$2621634261_getDefault(t._p), val, stamp, t, key)
          }
          changed = true
        }
        return changed
      }
    }
  })

  types.struct.props.default.struct = $1662971556_$430509040_type.struct = struct
  $1662971556_$4292174816_set(struct, { props: { type: $1662971556_$430509040_type, types }, types: { struct } })
  struct.types._ks = void 0 // remove struct key
  struct.type = $1662971556_$4292174816_create(struct, 'struct')
}


var $1662971556_$430509040_getType = $1662971556_$2411079736;
var $1662971556_$430509040_$ALL$ = {
  types: $1662971556_$430509040_types,
  getType: $1662971556_$2411079736
}
;

const $1662971556_$1998416981_inject = (t, val, stamp) => typeof val === 'function'
  ? val(t, val, stamp)
  : $1662971556_$4292174816_set(t, val, stamp)

var $1662971556_$1998416981 = (t, val, key, stamp) => {
  var changed
  if (Array.isArray(val)) {
    for (let i = 0, len = val.length; i < len; i++) {
      if ($1662971556_$1998416981_inject(t, val[i], stamp)) {
        changed = true
      }
    }
  } else {
    changed = $1662971556_$1998416981_inject(t, val, stamp)
  }
  return changed
}

;



var $1662971556_$506167339 = struct => {
  const emitter = $1662971556_$4292174816_create(struct, {
    instances: false,
    props: { default: $1662971556_$1442998772_listener }
  })

  const update = (t, val, key, original) => {
    if (!(key in t)) {
      const field = val[key]
      if (!field || typeof field === 'function') {
        if (field === null) {
          $1662971556_$1442998772_replace(t.fn, original[key])
        } else {
          $1662971556_$1442998772_addFn(t, field)
        }
        return true
      }
    }
  }

  const instances = (t, val, original, fields) => {
    let i = t.instances.length
    while (i--) {
      let instance = t.instances[i]
      if (instance.fn) {
        if (!fields) { fields = Object.keys(val) }  // can use something else for perf
        let j = fields.length
        if (instance.instances) {
          let inherits
          while (j--) {
            let key = fields[j]
            if (update(instance, val, key, original)) {
              if (!inherits) {
                inherits = [ key ]
              } else {
                inherits.push(key)
              }
            }
          }
          if (inherits) { instances(instance, val, original, inherits) }
        } else {
          while (j--) { update(instance, val, fields[j], original) }
        }
      } else if (instance.instances) {
        instances(instance, val, original, fields)
      }
    }
  }

  const emitterProperty = (t, val, key, stamp) => {
    if (val && key in t && t.instances) {
      const field = t[key]
      if (field) { instances(field, val, field) }
    }
    return $1662971556_$624523381_property(t, val, key, stamp, emitter)
  }

  emitterProperty.struct = emitter

  const getOn = t => t.emitters || t.inherits && getOn(t.inherits)

  const onStruct = $1662971556_$4292174816_create(struct, {
    instances: false,
    props: {
      default: emitterProperty
    }
  })

  const on = (t, val, key, stamp) => {
    if (val) {
      if (typeof val === 'function') {
        val = { data: { _val: val } }
      } else {
        for (let key in val) {
          let emitter = val[key]
          if (emitter) {
            if (typeof emitter === 'function') {
              val[key] = { _val: emitter }
            } else {
              if (emitter.val) {
                emitter._val = emitter.val
                delete emitter.val
              }
            }
          }
        }
      }
    }
    const result = getOn(t)
    if (result) {
      if (!t.emitters) {
        $1662971556_$4292174816_create(result, val, stamp, t, 'emitters')
      } else {
        $1662971556_$4292174816_set(result, val, stamp)
      }
    } else {
      $1662971556_$4292174816_create(onStruct, val, stamp, t, 'emitters')
    }
  }

  struct.props.on = on
  on.struct = onStruct
}

;






const $1662971556_$3707563476_struct = {}

const $1662971556_$3707563476_props = {
  inject: $1662971556_$1998416981,
  _created: (t, val) => { t._created = val },
  async: (t, val) => { if (t.async && !val) { delete t.async } },
  key: (t, val) => { t.key = val },
  instances: (t, val) => { t.instances = val },
  $transform: (t, val) => { t.$transform = val },
  props: (t, val, pkey, stamp) => {
    var props = t.props
    if (!props) {
      const previous = $1662971556_$2621634261_getProps(t)
      props = t.props = {}
      if (previous) {
        for (let key in previous) {
          props[key] = previous[key]
        }
      }
    }
    for (let key in val) {
      $1662971556_$3707563476_parse(t, val[key], key, stamp, props)
    }
  }
}

const $1662971556_$3707563476_simple = (t, val, key) => { t[key] = val }

// key should be 4th argument
const $1662971556_$3707563476_notSelf = (t, key, struct) => t.props &&
  t.props[key] && t.props[key].struct === struct ||
  t.inherits && $1662971556_$3707563476_notSelf(t.inherits, key, struct)

const $1662971556_$3707563476_parse = (t, val, key, stamp, props) => {
  if (val === true) {
    props[key] = $1662971556_$3707563476_simple
  } else if (val === null) {
    t[key] = null
    if (props[key]) { delete props[key] }
  } else if (typeof val !== 'function') {
    let struct
    const p = val.nonEnumerable ? $1662971556_$624523381_propertyNE : $1662971556_$624523381_property
    delete val.nonEnumerable
    if (typeof val === 'object' && val.inherits) {
      struct = val
    } else if (val === 'self') {
      struct = t
    } else {
      const inherit = props[key] && props[key].struct
      if (inherit) {
        if ($1662971556_$3707563476_notSelf(t.inherits, key, inherit)) {
          struct = $1662971556_$4292174816_create(inherit, val, void 0, t)
        } else {
          $1662971556_$4292174816_set(inherit, val)
          return
        }
      } else {
        struct = $1662971556_$4292174816_create($1662971556_$2621634261_getDefault(t), val, void 0, t)
      }
    }

    const definition = (t, val, key, stamp, isNew, reset) =>
      p(t, val, key, stamp, struct, isNew, reset)

    definition.struct = struct
    props[key] = definition
  } else {
    props[key] = val
  }
}

const $1662971556_$3707563476_define = (t, value, key) => {
  Object.defineProperty(t, key, { configurable: true, value })
  return t
}

const $1662971556_$3707563476_createConstructor = (t, Inherit) => {
  function Struct () {}
  if (Inherit) { Struct.prototype = new Inherit() }
  $1662971556_$3707563476_define(Struct.prototype, Struct, 'Constructor')
  $1662971556_$3707563476_define(t, Struct, 'Constructor')
  return Struct
}

$1662971556_$3707563476_struct.instances = false
$1662971556_$3707563476_struct.props = $1662971556_$3707563476_props

$1662971556_$3707563476_createConstructor($1662971556_$3707563476_struct)

$1662971556_$3707563476_struct.props.define = (t, val) => {
  var proto
  if (!t.hasOwnProperty('Constructor')) {
    $1662971556_$3707563476_createConstructor(t, t.Constructor)
  }
  proto = t.Constructor.prototype
  for (let key in val) {
    $1662971556_$3707563476_define(t, val[key], key)
    $1662971556_$3707563476_define(proto, val[key], key)
  }
}

$1662971556_$3707563476_props.default = (t, val, key, stamp) => $1662971556_$624523381_property(t, val, key, stamp, $1662971556_$3707563476_struct)
$1662971556_$3707563476_props.default.struct = $1662971556_$3707563476_struct
$1662971556_$3707563476_struct.inherits = {}

$1662971556_$1998416981($1662971556_$3707563476_struct, [ $1662971556_$506167339, $1662971556_$430509040_types ])

var $1662971556_$3707563476 = $1662971556_$3707563476_struct

;const $1662971556_$958575751_get = t => t.val !== void 0
  ? t.val : t.inherits && $1662971556_$958575751_get(t.inherits)

const $1662971556_$958575751_origin = t => t.val && typeof t.val === 'object' && t.val.inherits
  ? $1662971556_$958575751_origin(t.val) : t

const $1662971556_$958575751_transform = t => t.$transform !== void 0
  ? t.$transform
  : t.inherits && $1662971556_$958575751_transform(t.inherits)

const $1662971556_$958575751_compute = (t, val, passon, arg) => {
  if (val === void 0) {
    val = t.val
    if (val === void 0) { val = $1662971556_$958575751_get(t.inherits) }
  }
  if (val) {
    const type = typeof val
    if (type === 'object') {
      if (val.inherits) {
        const v = val
        val = $1662971556_$958575751_compute(val, void 0, passon, arg)
        if (val === void 0) {
          val = v
        }
      }
    } else if (type === 'function') {
      val = val(val, passon || t)
    }
  }
  const trans = $1662971556_$958575751_transform(t)
  return trans ? trans(val, passon || t, arg) : val
}



var $1662971556_$958575751_$ALL$ = {
  origin: $1662971556_$958575751_origin,
  compute: $1662971556_$958575751_compute
}
;


var $1662971556_$2030617653_uid = 0

var $1662971556_$2030617653 = (t, check, callback) => {
  var id = 'O' + ++$1662971556_$2030617653_uid
  if (!callback) {
    let promise
    if (check === void 0) {
      promise = new Promise(resolve => $1662971556_$2030617653_on(t, id, (t, val, stamp) => {
        resolve(t, val, stamp)
        return true
      }))
    } else {
      promise = new Promise(resolve => {
        if (!$1662971556_$2030617653_evaluate(resolve, check, t)) {
          $1662971556_$2030617653_on(t, id, (val, stamp, t) => $1662971556_$2030617653_evaluate(resolve, check, t, val, stamp, true))
        }
      })
    }
    return promise
  } else {
    if (check === void 0) {
      $1662971556_$2030617653_on(t, id, (val, stamp, t) => {
        callback(val, stamp, t)
        return true
      })
    } else {
      if (!$1662971556_$2030617653_evaluate(callback, check, t)) {
        $1662971556_$2030617653_on(t, id, (val, stamp, t) => $1662971556_$2030617653_evaluate(callback, check, t, val, stamp))
      }
    }
    return id
  }
}

const $1662971556_$2030617653_evaluate = (resolve, check, t, val, stamp, promise) => {
  if (typeof check === 'function'
      ? check(t, val, stamp)
      : $1662971556_$958575751_compute(t) == check //eslint-disable-line
    ) {
    if (stamp && !promise) {
      $1662971556_$826337949.on(() => resolve(val, stamp, t))
    } else {
      resolve(val, stamp, t)
    }
    return true
  }
}

const $1662971556_$2030617653_on = (top, id, listener) => {
  const context = $1662971556_$4292174816_set(top, {
    on: {
      data: {
        [id]: (val, stamp, t) => {
          if (!t._c) {
            if (listener(val, stamp, t)) {
              $1662971556_$4292174816_set(t, { on: { data: { [id]: null } } })
            }
          }
        }
      }
    }
  })
  if (context && context.inherits) { top = context }
  return top
}

;



const $1662971556_$2137229723_remove = (subs, cb, tree) => {
  const t = tree.$t

  if (tree.$tc) {
    if (tree.$stored) {
      tree.$stored.unshift(tree.$tc, tree.$tcl || 1)
      $1662971556_$2633820941_applyContext(t, tree.$stored)
    } else {
      $1662971556_$2633820941_applyContext(t, [ tree.$tc, tree.$tcl ])
    }
  }

  if (subs.val) { cb(t, 'remove', subs, tree) }
  if (!subs.$blockRemove) {
    $1662971556_$3975723928_diff(t, subs, cb, tree, true)
  }
  const key = tree._key
  const parent = tree._p
  if (parent.$keys) {
    if (Array.isArray(parent.$keys)) {
      parent.$keys.splice(key, 1)
      const len = parent.$keys.length
      let i = len
      if (tree.$c) {
        while (i-- > key) {
          parent.$keys[i]._key = i
        }
        if (parent.$c[len]) {
          $1662971556_$2137229723_composite(parent, len)
        }
      } else {
        while (i-- > key) {
          parent.$keys[i]._key = i
        }
      }
    } else {
      if (tree.$c && parent.$c[key]) { $1662971556_$2137229723_composite(parent, key) }
      delete parent.$keys[key]
    }
  } else {
    if (tree.$c) { $1662971556_$2137229723_composite(parent, key) }
    delete parent[key]
  }
}

const $1662971556_$2137229723_empty = (obj) => {
  for (let key in obj) {
    return false
  }
  return true
}

const $1662971556_$2137229723_composite = (tree, key) => {
  var rootClear
  while (tree) {
    if (tree.$c) {
      if (tree.$c[key]) {
        if (tree.$c[key] === 'root') { rootClear = true }
        delete tree.$c[key]
        if ($1662971556_$2137229723_empty(tree.$c)) {
          delete tree.$c
          key = tree._key
          tree = tree._p
        } else {
          if (rootClear) {
            let block
            for (let i in tree.$c) {
              if (tree.$c[i] === 'root') {
                block = true
                break
              }
            }
            if (!block) { $1662971556_$2137229723_clearRootComposite(tree) }
          }
          break
        }
      }
    } else {
      if (rootClear && tree._key === 'parent') {
        $1662971556_$2137229723_clearRootComposite(tree)
      }
      break
    }
  }
}

const $1662971556_$2137229723_clearRootComposite = (tree) => {
  tree = tree._p
  var key = 'parent'
  var cnt = 0
  while (tree) {
    if (key === 'root') {
      break
    } else {
      if (key === 'parent') {
        cnt++
      } else if (key[0] !== '$') {
        cnt--
      }
      if (tree.$c && tree.$c[key]) {
        if (cnt > 0) {
          tree.$c[key] = 'parent'
          for (var i in tree.$c) {
            if (i !== key) {
              if (tree.$c[i] === 'root') {
                tree = false
              }
            }
          }
          if (tree) {
            key = tree._key
            tree = tree._p
          }
        } else {
          delete tree.$c[key]
          if ($1662971556_$2137229723_empty(tree.$c)) {
            delete tree.$c
            key = tree._key
            tree = tree._p
          } else {
            break
          }
        }
      } else {
        key = tree._key
        tree = tree._p
      }
    }
  }
}

var $1662971556_$2137229723 = $1662971556_$2137229723_remove

;





const $1662971556_$4215657123_store = (t, branch) => {
  if (t._c._c) {
    branch.$stored = $1662971556_$2633820941_storeContext(t._c)
  }
  branch.$tc = t._c
  if (t._cLevel > 1) {
    branch.$tcl = t._cLevel
  }
}

const $1662971556_$4215657123_dummy = 0

const $1662971556_$4215657123_switchuid = t => {
  var uid = 5381
  while (t && t.val && typeof t.val === 'object' && t.val.inherits) {
    t = t.val
    uid * 33 ^ $1662971556_$3258224650_puid(t)
  }
  return uid >>> 0
}

const $1662971556_$4215657123_update = (key, t, subs, cb, tree, c, parent) => {
  var branch = tree[key]
  var changed
  if (t) {
    // console.log('PROPERTY:', t, !!(branch && branch.$c))

    const stamp = t.tStamp || $1662971556_$4215657123_dummy  // needs to use stamp as well (if dstamp is gone)
    if (!branch) {
      branch = tree[key] = { _p: parent || tree, _key: key, $t: t }
      branch.$ = stamp
      if (t._c) { $1662971556_$4215657123_store(t, branch) }
      if (subs.val) {
        cb(t, 'new', subs, branch)
        changed = true
      }
      changed = $1662971556_$3975723928_diff(t, subs, cb, branch, void 0, c) || changed
      // ! && ! || !== (thats why != may need to replace)
    } else if (branch.$ !== stamp || branch.$t !== t || branch.$tc != t._c) { //eslint-disable-line
      if (subs.val) {
        if (
          // will become parsed -- with intergers -- also switcgh returns will be parsed
          subs.val === true ||
          subs.val === 'shallow' ||
          (subs.val === 'switch' && (
            branch.$t !== t ||
            // (delete / void 0 field later)
            branch.$tc != t._c || // eslint-disable-line
            (t.val && typeof t.val === 'object' && t.val.inherits && branch.$val !== $1662971556_$4215657123_switchuid(t)) ||
            branch.$val // means removed reference
          ))
        ) {
          changed = true
          cb(t, 'update', subs, branch)
        }
      }

      branch.$ = stamp

      if (t._c) {
        $1662971556_$4215657123_store(t, branch)
      } else if (branch.$tc) {
        delete branch.$tc
        if (branch.$tcl) {
          delete branch.$tcl
        }
        if (branch.$stored) {
          delete branch.$stored
        }
      }
      branch.$t = t
      if (subs.val === 'switch') {
        if ((t.val && typeof t.val === 'object' && t.val.inherits)) {
          branch.$val = $1662971556_$4215657123_switchuid(t)
        } else if (branch.$val) {
          delete branch.$val
        }
      }
      changed = $1662971556_$3975723928_diff(t, subs, cb, branch, void 0, c) || changed
    } else if (branch.$c) {
      // console.log('go $c!', branch.$)
      if ($1662971556_$3975723928_diff(t, subs, cb, branch, void 0, branch.$c)) {
        // console.log('CHANGED', t)
        changed = true // cover this
        // shallow hack
        // maybe add switch as well?
        if (subs.val === true || subs.val === 'shallow') {
          cb(t, 'update', subs, branch)
        }
      }
    }
  } else if (branch) {
    changed = $1662971556_$2137229723(subs, cb, branch) || (subs.val && true)
  }
  return changed
}

const $1662971556_$4215657123_property = (key, t, subs, cb, tree, removed, composite) => {
  var changed
  if (removed) {
    const branch = tree[key]
    if (branch) {
      changed = $1662971556_$2137229723(subs, cb, branch) || (subs.val && true)
    }
  } else {
    t = $1662971556_$2621634261_getOrigin(t, key)
    changed = $1662971556_$4215657123_update(
      key,
      t,
      subs,
      cb,
      tree,
      composite
    )
  }
  return changed
}



var $1662971556_$4215657123_$ALL$ = {
  property: $1662971556_$4215657123_property,
  update: $1662971556_$4215657123_update
}
;





const $1662971556_$2247350659_inherits = (key, t, index) => {
  var i = 0
  while (i < index && t && typeof t === 'object' && t.inherits) {
    i++
    if (key in t) {
      return false
    }
    t = t.val
  }
  return true
}

const $1662971556_$2247350659_parseKeys = (t) => {
  var keys = $1662971556_$466859286_getKeys(t)
  var orig = t
  t = t.val
  if (t && typeof t === 'object' && t.inherits) {
    let combined
    let index = 1
    while (t && typeof t === 'object' && t.inherits) {
      let k = $1662971556_$466859286_getKeys(t)
      let kl = k && k.length
      if (kl) {
        if (!combined) {
          if (keys) {
            combined = []
            for (let j = 0, len = keys.length; j < len; j++) {
              combined[j] = keys[j]
            }
            for (let i = 0; i < kl; i++) {
              if ($1662971556_$2247350659_inherits(k[i], orig, index)) {
                combined.push(k[i])
              }
            }
          } else {
            keys = k
          }
        } else {
          for (let i = 0; i < kl; i++) {
            if ($1662971556_$2247350659_inherits(k[i], orig, index)) {
              combined.push(k[i])
            }
          }
        }
      }
      index++
      t = t.val
    }
    return combined || keys
  }
  return keys
}

const $1662971556_$2247350659_composite = (key, t, subs, cb, branch, removed, c) => {
  var changed
  const keys = branch.$keys
  if (subs.$keys && subs.$keys.val) {
    const dKey = '$keys' + key
    if (c[dKey] && $1662971556_$3975723928_diff(t, subs.$keys, cb, branch[dKey])) {
      $1662971556_$2247350659_any(key, t, subs, cb, branch._p, removed)
    } else {
      for (let k in c) {
        let target = keys[k]
        if (
          k !== dKey &&
          $1662971556_$4215657123_update(k, target.$t, subs, cb, keys, target.$c, branch)
        ) {
          changed = true
        }
      }
    }
  } else {
    for (let k in c) {
      let target = keys[k]
      if (target) {
        if ($1662971556_$4215657123_update(k, target.$t, subs, cb, keys, target.$c, branch)) {
          changed = true
        }
      }
    }
  }
  return changed
}

const $1662971556_$2247350659_any = (key, t, subs, cb, tree, removed) => {
  const branch = tree[key]
  var $object
  if (removed || !t) {
    if (branch) {
      $1662971556_$2247350659_removeFields(key, subs, branch, cb, tree)
      return true
    }
  } else {
    let keys = $1662971556_$2247350659_parseKeys(t)
    if (subs.$keys) {
      if (subs.$keys.val) {
        $object = subs.$keys.$object
        keys = subs.$keys.val(keys || [], t, subs, tree)
      } else {
        keys = subs.$keys(keys || [], t, subs, tree)
      }
    }
    if (keys) {
      if (!branch) {
        if ($object) {
          $1662971556_$2247350659_createObject(key, keys, t, subs, cb, tree)
        } else {
          $1662971556_$2247350659_create(key, keys, t, subs, cb, tree)
        }
        return true
      } else {
        // $object
        return $object
          ? $1662971556_$2247350659_updateObject(key, keys, t, subs, cb, branch)
          : $1662971556_$2247350659_update(key, keys, t, subs, cb, branch)
      }
    } else if (branch) {
      if ($object) {
        $1662971556_$2247350659_removeFieldsObject(key, subs, branch, cb, tree)
      } else {
        $1662971556_$2247350659_removeFields(key, subs, branch, cb, tree)
      }
      return true
    }
  }
}

// AS ARRAY
const $1662971556_$2247350659_create = (key, keys, t, subs, cb, tree) => {
  const len = keys.length
  const $keys = new Array(len)
  const branch = tree[key] = { _p: tree, _key: key, $keys }
  for (let i = 0; i < len; i++) {
    let key = keys[i]
    let tt = $1662971556_$2621634261_getOrigin(t, key)
    $1662971556_$4215657123_update(i, tt, subs, cb, $keys, void 0, branch)
  }
  if (subs.$keys && subs.$keys.val) {
    const dKey = '$keys' + key
    const dBranch = branch[dKey] = { _p: branch, _key: dKey }
    $1662971556_$3975723928_diff(t, subs.$keys, cb, dBranch)
  }
}

const $1662971556_$2247350659_removeFields = (key, subs, branch, cb, tre) => {
  const $keys = branch.$keys
  let i = $keys.length
  while (i--) {
    $1662971556_$2137229723(subs, cb, $keys[0])
  }
}

const $1662971556_$2247350659_update = (key, keys, t, subs, cb, branch) => {
  var changed
  const $keys = branch.$keys
  const len1 = keys.length
  var len2 = $keys.length
  if (len1 > len2) {
    for (let i = 0; i < len1; i++) {
      const key = keys[i]
      if ($1662971556_$4215657123_update(i, $1662971556_$2621634261_getOrigin(t, key), subs, cb, $keys, void 0, branch)) {
        changed = true
      }
    }
  } else {
    for (let i = 0; i < len2; i++) {
      const key = keys[i]
      if (!key) {
        $1662971556_$2137229723(subs, cb, $keys[i])
        len2--
        i--
        changed = true
      } else {
        if ($1662971556_$4215657123_update(i, $1662971556_$2621634261_getOrigin(t, key), subs, cb, $keys, void 0, branch)) {
          changed = true
        }
      }
    }
  }
  return changed
}
// ------AS OBJECT
const $1662971556_$2247350659_createObject = (key, keys, t, subs, cb, tree) => {
  const len = keys.length
  const $keys = {}
  const branch = tree[key] = { _p: tree, _key: key, $keys }
  for (let i = 0; i < len; i++) {
    let key = keys[i]
    let tt = $1662971556_$2621634261_getOrigin(t, key)
    $1662971556_$4215657123_update(key, tt, subs, cb, $keys, void 0, branch)
  }

  if (subs.$keys && subs.$keys.val) {
    const dKey = '$keys' + key
    const dBranch = branch[dKey] = { _p: branch, _key: dKey }
    $1662971556_$3975723928_diff(t, subs.$keys, cb, dBranch)
  }
}

const $1662971556_$2247350659_removeFieldsObject = (key, subs, branch, cb, tre) => {
  const $keys = branch.$keys
  for (let key$ in $keys) {
    $1662971556_$2137229723(subs, cb, $keys[key$])
  }
}

const $1662971556_$2247350659_updateObject = (key$, keys, t, subs, cb, branch) => {
  var changed
  const $keys = branch.$keys
  const len1 = keys.length
  const marked = {}
  for (let i = 0; i < len1; i++) {
    let key = keys[i]
    marked[key] = true
    let tt = $1662971556_$2621634261_getOrigin(t, key)
    if ($1662971556_$4215657123_update(key, tt, subs, cb, $keys, void 0, branch)) {
      changed = true
    }
  }
  for (let key in $keys) {
    if (!(key in marked)) {
      $1662971556_$2137229723(subs, cb, $keys[key])
    }
  }
  return changed
}

// ---- for composite it is not a difference


var $1662971556_$2247350659_$ALL$ = {
  any: $1662971556_$2247350659_any,
  composite: $1662971556_$2247350659_composite
}
;


var $1662971556_$2032740883 = (t, subs, cb, tree, removed) => {
  var branch = tree.root
  if (t && !removed) {
    if (!branch) {
      branch = tree.root = { _key: 'root', _p: tree }
      $1662971556_$2032740883_composite(tree)
    }
    return $1662971556_$3975723928_diff($1662971556_$1695496138_root(t), subs, cb, branch)
  } else if (branch) {
    $1662971556_$3975723928_diff(branch.$t, subs, cb, branch, true)
    return true
  }
}

const $1662971556_$2032740883_composite = tree => {
  var key = 'root'
  while (
    tree._p &&
    (!(tree.$c) ||
    !(key in tree.$c) ||
    tree.$c[key] !== 'root')
  ) {
    let tkey = tree._key
    if (tkey !== 'parent' && tkey !== 'root') {
      if (!('$c' in tree)) { tree.$c = {} }
      tree.$c[key] = 'root'
    }
    key = tkey
    tree = tree._p
  }
}

;




const $1662971556_$1269477831_CompositeDriverChange = (key, tkey, t, subs, cb, tree, removed, composite) => {
  const branch = tree[key]
  if ($1662971556_$3975723928_diff(t, subs, cb, branch, removed, composite)) {
    return $1662971556_$1269477831_body(tkey, t, subs, cb, tree, removed, subs.val, false, composite)
  }
}

const $1662971556_$1269477831_$switch = (key, t, subs, cb, tree, removed, composite) => {
  var $switch = subs[key]
  if (!$switch) {
    const tkey = key.slice(0, -1) // this means from composite
    $1662971556_$1269477831_CompositeDriverChange(key, tkey, t, subs[tkey], cb, tree, removed, composite)
  } else {
    if ($switch.val) {
      const dKey = key + '*'
      const driverBranch = tree[dKey]
      if (driverBranch) {
        if ($1662971556_$3975723928_diff(t, $switch, cb, driverBranch, removed, composite)) {
          return $1662971556_$1269477831_body(key, t, subs, cb, tree, removed, $switch.val, true, composite)
        } else {
          const branch = tree[key]
          if (branch) { $1662971556_$4215657123_update(key, t, branch.$subs, cb, tree, composite) }
        }
      } else if (!driverBranch) {
        if ($1662971556_$1269477831_create(dKey, t, $switch, cb, tree)) {
          return $1662971556_$1269477831_body(key, t, subs, cb, tree, removed, $switch.val, true, composite)
        }
      }
    } else {
      return $1662971556_$1269477831_body(key, t, subs, cb, tree, removed, $switch, true, composite)
    }
  }
}

const $1662971556_$1269477831_create = (key, t, subs, cb, tree) => {
  const branch = tree[key] = {
    _p: tree,
    _key: key,
    $subs: subs
  }
  return $1662971556_$3975723928_diff(t, subs, cb, branch)
}

const $1662971556_$1269477831_body = (key, t, subs, cb, tree, removed, $switch, diffit, composite) => {
  var result
  if (!removed && t) { result = $switch(t, subs, tree, key) }
  var branch = tree[key]
  if (!result) {
    if (branch) {
      $1662971556_$2137229723(branch.$subs, cb, branch)
      return true
    }
  } else {
    if (!branch) {
      $1662971556_$4215657123_update(key, t, result, cb, tree)
      branch = tree[key]
      branch.$subs = result
      branch.$origin = $1662971556_$958575751_origin(t)
      return true
    } else if ($1662971556_$1269477831_isSwitched(branch.$subs, result, branch, t)) {
      $1662971556_$2137229723(branch.$subs, cb, branch)
      $1662971556_$4215657123_update(key, t, result, cb, tree)
      branch = tree[key]
      branch.$subs = result
      branch.$origin = $1662971556_$958575751_origin(t)
      return true
    } else if (diffit) {
      return $1662971556_$4215657123_update(key, t, result, cb, tree, composite)
    }
  }
}

const $1662971556_$1269477831_isSwitched = (a, b, branch, t) => {
  if (t) {
    const o = $1662971556_$958575751_origin(t)
    const b = branch.$origin
    if (b !== o) {
      branch.$origin = o
      return true
    }
  }
  if (a === b) {
    return false // test
  } else {
    if (a._) {
      return a._ !== b._
    }
    for (let key in a) {
      if (a[key] !== b[key]) {
        if (typeof a[key] === 'function' && typeof b[key] === 'function') {
          if (a[key].toString() !== b[key].toString()) {
            return true
          }
        } else if (typeof a[key] !== 'object' || typeof b[key] !== 'object' || $1662971556_$1269477831_isSwitched(a[key], b[key])) {
          return true
        }
      }
    }
    for (let key in b) {
      if (key !== 'props' && !a[key]) { return true }
    }
  }
}

var $1662971556_$1269477831 = $1662971556_$1269477831_$switch

;



var $1662971556_$3087050025 = (t, subs, cb, tree, removed) => {
  var branch = tree.parent
  if (!removed && t) {
    if (!branch) {
      branch = tree.parent = { _p: tree, _key: 'parent' }
      $1662971556_$3087050025_composite(tree)
    }
    const parente = $1662971556_$3087050025_getParent(t, tree)
    const c = $1662971556_$3975723928_diff(parente, subs, cb, branch)
    return c
  } else if (branch) {
    $1662971556_$3975723928_diff(branch.$t, subs, cb, branch, true)
    return true
  }
}

const $1662971556_$3087050025_get = (t, path) => {
  let i = path.length
  while (i--) {
    if (path[i] === 'root') {
      t = $1662971556_$1695496138_root(t)
    } else {
      // this is dangerous in context!
      t = $1662971556_$2621634261_getOrigin(t, path[i])
    }
  }
  return t
}

const $1662971556_$3087050025_getParent = (t, tree) => {
  var path = []
  var cnt = 1
  var i = 0
  while (tree) {
    if (tree._key !== void 0) {
      if (tree._key[0] !== '$') {
        if (tree._key === 'parent') {
          cnt++
        } else {
          if (cnt) {
            cnt--
          } else {
            path[i++] = tree._key
          }
        }
      } else if (tree._key.indexOf('any') === 1 && path.length) {
        // refactor this a little but later
        path[0] = tree.$keys[path[0]] ? tree.$keys[path[0]].$t.key : path[0]
      }
    }
    tree = tree._p
  }
  return $1662971556_$3087050025_get($1662971556_$1695496138_root(t), path)
}

// const composite = tree => {
//   console.log('-----------------')
//   var key = 'parent'
//   while (
//     tree._p &&
//     (!(tree.$c) ||
//     !(key in tree.$c) ||
//     tree.$c[key] !== 'root')
//   ) {
//     console.log(key)
//     let tkey = tree._key
//     if (tkey !== 'parent' && tkey !== 'root') {
//       if (!('$c' in tree)) { tree.$c = {} }
//       tree.$c[key] = 'parent'
//     }
//     key = tkey
//     tree = tree._p
//   }
// }

const $1662971556_$3087050025_composite = tree => {
  var key = 'parent'
  var parentcounter = 1
  while (tree._p && parentcounter) {
    let tkey = tree._key
    if (tkey !== 'parent') {
      if (parentcounter === 1 && tkey !== 'root') {
        if (!tree.$c) { tree.$c = {} }
        if (!(key in tree.$c) || tree.$c[key] !== 'root') {
          tree.$c[key] = 'parent'
        }
      }
      key = tkey
      tree = tree._p
      if (key[0] !== '$') {
        parentcounter--
      }
    } else {
      parentcounter++
      tree = tree._p
    }
  }
}

;





const $1662971556_$3975723928_diff = (t, subs, cb, tree, removed, composite) => {
  var changed
  if (composite) {
    for (let key in composite) {
      if (key in tree) {
        let branch = tree[key]
        let c = branch.$c
        if (c) {
          if (key.indexOf('$any') === 0) {
            changed = $1662971556_$2247350659_composite(key, t, subs[key], cb, branch, removed, c)
          } else if ($1662971556_$3975723928_parse(key, t, subs, cb, tree, removed, c)) {
            changed = true
          }
        } else {
          if ($1662971556_$3975723928_parse(key, t, subs, cb, tree, removed)) {
            changed = true
          }
        }
      }
    }
  } else {
    for (let key in subs) {
      if (key !== 'val' && key !== 'props' && key !== '_' && key !== '$blockRemove' && key !== '$keys') {
        if ($1662971556_$3975723928_parse(key, t, subs, cb, tree, removed, composite)) {
          changed = true
        }
      }
    }
  }
  return changed
}

const $1662971556_$3975723928_parse = (key, t, subs, cb, tree, removed, composite) => {
  if (key === 'root') {
    return $1662971556_$2032740883(t, subs.root, cb, tree, removed)
  } else if (key === 'parent') {
    return $1662971556_$3087050025(t, subs.parent, cb, tree, removed)
  } else if (key[0] === '$') {
    if (key.indexOf('any') === 1) {
      return $1662971556_$2247350659_any(key, t, subs[key], cb, tree, removed, composite)
    } else if (key.indexOf('switch') === 1) {
      return $1662971556_$1269477831(key, t, subs, cb, tree, removed, composite)
    }
  } else {
    return $1662971556_$4215657123_property(key, t, subs[key], cb, tree, removed, composite)
  }
}




var $1662971556_$3975723928_$ALL$ = {
  diff: $1662971556_$3975723928_diff,
  parse: $1662971556_$3975723928_parse
}
;

const $1662971556_$3203877739_listen = (t, fn) => t.subscriptions.push(fn)

// add ref supports here -- use references field in prop or even simpler
const $1662971556_$3203877739_subscribe = (t, subs, cb, tree) => {
  if (!t.subscriptions) t.subscriptions = []
  if (!tree) tree = {}
  tree.$t = t
  if (subs.val) {
    if (subs.val === true || subs.val === 'shallow') {
      $1662971556_$3203877739_listen(t, () => {
        cb(t, 'update', subs, tree)
        $1662971556_$3975723928_diff(t, subs, cb, tree)
      })
    } else {
      $1662971556_$3203877739_listen(t, () => $1662971556_$3975723928_diff(t, subs, cb, tree))
    }
    cb(t, 'new', subs, tree)
  } else {
    $1662971556_$3203877739_listen(t, () => $1662971556_$3975723928_diff(t, subs, cb, tree))
  }
  $1662971556_$3975723928_diff(t, subs, cb, tree)
  return tree
}

const $1662971556_$3203877739_parse = (subs) => {
  if (subs) {
    if (subs === true) return { val: true }
    const result = {}
    for (let key in subs) {
      let sub = subs[key]
      if (key === 'val' || key === '_' || key === '$blockRemove') {
        result[key] = sub
      } else {
        let type = typeof sub
        if (type === 'object') {
          result[key] = $1662971556_$3203877739_parse(sub)
        } else if (type === 'function') {
          result[key] = sub
        } else {
          result[key] = { val: sub }
        }
      }
    }
    return result
  }
}



var $1662971556_$3203877739_$ALL$ = {
  subscribe: $1662971556_$3203877739_subscribe,
  parse: $1662971556_$3203877739_parse
}
;



const $1662971556_$2664996580_compute = (t, result) => {
  const computed = t.compute()
  return computed !== void 0 && typeof computed !== 'object' ? computed : result
}

const $1662971556_$2664996580_serialize = (t, fn) => {
  var result = {}
  var val = $1662971556_$2621634261_getVal(t)
  const keys = $1662971556_$466859286_getKeys(t)
  if (val && typeof val === 'object' && val.inherits) {
    const p = $1662971556_$1695496138_path(val) // memoized paths later
    val = [ '@', 'root' ]
    let i = p.length
    while (i--) { val[i + 2] = p[i] }
    if (t.root().key) {
      val.splice(2, 1)
    }
  }
  if (keys) {
    let onlyNumbers = true
    for (let i = 0, len = keys.length; i < len; i++) {
      let key = keys[i]
      let keyResult = $1662971556_$2664996580_serialize($1662971556_$2621634261_get(t, key), fn)
      if (isNaN(key)) onlyNumbers = false
      if (keyResult !== void 0) { result[key] = keyResult }
    }
    if (val !== void 0) {
      result.val = val
    } else if (onlyNumbers) {
      const arr = []
      for (let i in result) arr[i] = result[i]
      result = arr
    }
  } else if (val !== void 0) {
    result = val
  }
  return fn ? fn === true ? $1662971556_$2664996580_compute(t, result) : fn(t, result) : result
}

var $1662971556_$2664996580 = $1662971556_$2664996580_serialize

;


const $1662971556_$3707265278_mapper = (t) => ($1662971556_$466859286_getKeys(t) || []).map(key => $1662971556_$2621634261_get(t, key))

var $1662971556_$3707265278 = {
  map (fn, callee) {
    return ($1662971556_$466859286_getKeys(this) || []).map((val, key, array) => fn($1662971556_$2621634261_get(this, val), key, array))
  },
  reduce (fn, start) {
    return $1662971556_$3707265278_mapper(this).reduce(fn, start)
  },
  filter (fn) {
    return $1662971556_$3707265278_mapper(this).filter(fn)
  },
  slice (start, end) {
    return $1662971556_$3707265278_mapper(this).slice(start, end)
  },
  sort (fn) {
    return $1662971556_$3707265278_mapper(this).sort(fn)
  },
  reverse (fn) {
    return $1662971556_$3707265278_mapper(this).reverse(fn)
  },
  find (val) {
    const keys = $1662971556_$466859286_getKeys(this)
    if (keys) {
      for (let i = 0, len = keys.length; i < len; i++) {
        const r = $1662971556_$2621634261_get(this, keys[i])
        if (val(r, i, this)) return r
      }
    }
  },
  some (val) {
    const keys = $1662971556_$466859286_getKeys(this)
    if (keys) {
      for (let i = 0, len = keys.length; i < len; i++) {
        const r = $1662971556_$2621634261_get(this, keys[i])
        if (val(r, i, this)) return true
      }
    }
    return false
  },
  every (val) {
    const keys = $1662971556_$466859286_getKeys(this)
    if (keys) {
      for (let i = 0, len = keys.length; i < len; i++) {
        if (!val($1662971556_$2621634261_get(this, keys[i]), i, this)) return false
      }
    }
    return true
  },
  findIndex (val) {
    const keys = $1662971556_$466859286_getKeys(this)
    if (keys) {
      for (let i = 0, len = keys.length; i < len; i++) {
        if (val($1662971556_$2621634261_get(this, keys[i]), i, this)) return i
      }
    }
    return -1
  },
  indexOf (val) {
    const keys = $1662971556_$466859286_getKeys(this)
    if (keys) {
      for (let i = 0, len = keys.length; i < len; i++) {
        const r = $1662971556_$2621634261_get(this, keys[i])
        if (r.compute() === val || r === val) return i
      }
    }
    return -1
  },
  lastIndexOf (val) {
    const keys = $1662971556_$466859286_getKeys(this)
    if (keys) {
      let i = keys.length
      while (i--) {
        const r = $1662971556_$2621634261_get(this, keys[i])
        if (r.compute() === val || r === val) return i
      }
    }
    return -1
  },
  includes (val, index = 0) {
    const keys = $1662971556_$466859286_getKeys(this)
    if (keys) {
      for (let len = keys.length, i = index > -1 ? index : Math.max(len + index, 0); i < len; i++) {
        const r = $1662971556_$2621634261_get(this, keys[i])
        if (r.compute() === val || r === val) return true
      }
    }
    return false
  },
  forEach (fn) {
    var keys = $1662971556_$466859286_getKeys(this)
    if (keys) {
      keys = keys.concat()  // bit slow but usefull for remove for example
      for (let i = 0, len = keys.length; i < len; i++) {
        const key = keys[i]
        const r = $1662971556_$2621634261_get(this, key)
        if (r) { fn(r, key, this) }
      }
    }
  }
}

;


var $1662971556_$481288723 = struct => {
  if (typeof Symbol !== 'undefined') {
    struct.Constructor.prototype[Symbol.iterator] = function () {
      const keys = $1662971556_$466859286_getKeys(this)
      const t = this
      var i = 0
      return {
        throw: () => {},
        // add handle for removal / change of keys
        next: () => ({
          value: $1662971556_$2621634261_get(t, keys[i++]),
          done: i === keys.length + 1
        })
      }
    }
  }
}

;// dont add this in the browser




const $1662971556_$4025957895_define = {
  inspect () {
    if (this._noInspect_) {
      return this
    }
    var keys = $1662971556_$466859286_getKeys(this)
    var val = this.val
    const p = $1662971556_$1695496138_path(this)
    var type = $1662971556_$2621634261_get(this, 'type').compute()
    const start = type && type[0].toUpperCase() + type.slice(1) + ' ' + (p.length ? `${p.join('.')} ` : '')
    if (val && typeof val === 'object' && val.inherits) {
      val = val.inspect()
    }
    if (keys) {
      if (keys.length > 10) {
        const len = keys.length
        keys = keys.slice(0, 5)
        keys.push('... ' + (len - 5) + ' more items')
      }
      return val
        ? `${start}{ val: ${val}, ${keys.join(', ')} }`
        : `${start}{ ${keys.join(', ')} }`
    } else {
      return val
        ? `${start}{ val: ${val} }`
        : `${start}{ }`
    }
  }
}

var $1662971556_$4025957895 = {
  define: $1662971556_$4025957895_define,
  props: { default: 'self', _noInspect_: true }
}

;














// add puid as default
// never use chain maybe remove it -- lets remove
const $1662971556_$3362410831_chain = (c, t) => c === null || c && c !== true ? c : t

var $1662971556_$3362410831_listenerId = 0

const $1662971556_$3362410831_inject = [ { define: $1662971556_$3707265278 }, $1662971556_$481288723, $1662971556_$4025957895 ]

const $1662971556_$3362410831_define = {
  applyContext (context) { return $1662971556_$2633820941_applyContext(this, context) },
  storeContext () { return $1662971556_$2633820941_storeContext(this) },
  serialize (fn) { return $1662971556_$2664996580(this, fn) },
  root (real) { return $1662971556_$1695496138_root(this, real) },
  path (real) { return $1662971556_$1695496138_path(this, real) },
  parent (fn) {
    if (fn !== void 0) {
      if (typeof fn === 'function') {
        let p = this
        while (p) {
          let result = fn(p)
          if (result) { return result }
          p = $1662971556_$1695496138_parent(p)
        }
      } else {
        let p = this
        while (fn-- && p) { p = $1662971556_$1695496138_parent(p) }
        return p
      }
    } else {
      return $1662971556_$1695496138_parent(this)
    }
  },
  emit (type, val, stamp) {
    if (stamp === void 0) {
      $1662971556_$2092109398_generic(this, type, val, $1662971556_$826337949.create())
      $1662971556_$826337949.close()
    } else {
      $1662971556_$2092109398_generic(this, type, val, stamp)
    }
    return this
  },
  toString () {
    const r = this.compute()
    if (typeof r === 'object' || r === void 0) {
      return ''
    } if (!isNaN(r)) {
      return r + ''
    } else {
      return r
    }
  },
  subscribe (subs, cb, raw, tree) {
    return $1662971556_$3203877739_subscribe(this, !raw ? $1662971556_$3203877739_parse(subs) : subs, cb, tree)
  },
  once (check, callback) {
    return $1662971556_$2030617653(this, check, callback)
  },
  on (type, val, id) {
    if (typeof type === 'function') {
      id = val
      val = type
      type = 'data'
    }
    if (!id) { id = ++$1662971556_$3362410831_listenerId }
    const temp = { on: {} } // problem with bublé cant set [type] : { [id] }
    temp.on[type] = {}
    temp.on[type][id] = val
    return $1662971556_$3362410831_chain($1662971556_$4292174816_set(this, temp), this)
  },
  set: function (val, stamp, reset) { // function fixes buble
    if (stamp === void 0) {
      const ret = $1662971556_$3362410831_chain($1662971556_$4292174816_set(this, val, $1662971556_$826337949.create(), void 0, reset), this)
      $1662971556_$826337949.close()
      return ret
    } else {
      return $1662971556_$3362410831_chain($1662971556_$4292174816_set(this, val, stamp, void 0, reset), this)
    }
  },
  create (val, stamp, reset) { // add all fields here
    if (stamp === void 0) {
      const ret = $1662971556_$4292174816_create(this, val, $1662971556_$826337949.create(), void 0, void 0, reset)
      $1662971556_$826337949.close()
      return ret
    } else {
      return $1662971556_$4292174816_create(this, val, stamp, void 0, void 0, reset)
    }
  },
  // add api as a method perhaps?
  get (key, val, stamp) { return $1662971556_$3815974835(this, key, val, stamp) },
  push (val, stamp) {
    const key = $1662971556_$826337949.create()
    if (stamp === void 0) {
      const ret = $1662971556_$3362410831_chain($1662971556_$4292174816_set(this, { [key]: val }, key), this)[key]
      $1662971556_$826337949.close()
      return ret
    } else {
      return $1662971556_$3362410831_chain($1662971556_$4292174816_set(this, { [key]: val }, stamp), this)[key]
    }
  },
  compute: function (val, passon, arg) { return $1662971556_$958575751_compute(this, val, passon, arg) }, // function fixes buble
  origin () { return $1662971556_$958575751_origin(this) },
  keys () { return $1662971556_$466859286_getKeys(this) || [] }
}

var $1662971556_$3362410831 = { inject: $1662971556_$3362410831_inject, define: $1662971556_$3362410831_define }

;








// // maybe remove cuid




const $1662971556_$3269461964_emitterProperty = $1662971556_$3707563476.props.on.struct.props.default

$1662971556_$4292174816_set($1662971556_$3707563476, { inject: $1662971556_$3362410831 })

const $1662971556_$3269461964_create = (val, stamp, t = $1662971556_$3707563476, parent, key) =>
  $1662971556_$4292174816_create(t, val, stamp, parent, key)


var $1662971556_$3269461964_subscribe = $1662971556_$3203877739_subscribe;var $1662971556_$3269461964_parse = $1662971556_$3203877739_parse;var $1662971556_$3269461964_compute = $1662971556_$958575751_compute;var $1662971556_$3269461964_set = $1662971556_$4292174816_set;var $1662971556_$3269461964_struct = $1662971556_$3707563476;var $1662971556_$3269461964_property = $1662971556_$624523381_property;var $1662971556_$3269461964_contextProperty = $1662971556_$2633820941_contextProperty;var $1662971556_$3269461964_switchInheritance = $1662971556_$2264940719_switchInheritance;var $1662971556_$3269461964_get = $1662971556_$2621634261_get;var $1662971556_$3269461964_getProperty = $1662971556_$624523381_getProp;var $1662971556_$3269461964_getKeys = $1662971556_$466859286_getKeys;var $1662971556_$3269461964_removeContextKey = $1662971556_$466859286_removeContextKey;var $1662971556_$3269461964_addKey = $1662971556_$466859286_addKey;var $1662971556_$3269461964_removeKey = $1662971556_$466859286_removeKey;var $1662971556_$3269461964_getType = $1662971556_$2411079736;var $1662971556_$3269461964_getVal = $1662971556_$2621634261_getVal;var $1662971556_$3269461964_uid = $1662971556_$3258224650_uid;var $1662971556_$3269461964_cuid = $1662971556_$3258224650_cuid;var $1662971556_$3269461964_puid = $1662971556_$3258224650_puid;
var $1662971556_$3269461964_$ALL$ = {
  subscribe: $1662971556_$3203877739_subscribe,
  parse: $1662971556_$3203877739_parse,
  create: $1662971556_$3269461964_create,
  compute: $1662971556_$958575751_compute,
  set: $1662971556_$4292174816_set,
  struct: $1662971556_$3707563476,
  property: $1662971556_$624523381_property,
  contextProperty: $1662971556_$2633820941_contextProperty,
  emitterProperty: $1662971556_$3269461964_emitterProperty,
  switchInheritance: $1662971556_$2264940719_switchInheritance,
  get: $1662971556_$2621634261_get,
  getProperty: $1662971556_$624523381_getProp,
  getKeys: $1662971556_$466859286_getKeys,
  removeContextKey: $1662971556_$466859286_removeContextKey,
  addKey: $1662971556_$466859286_addKey,
  removeKey: $1662971556_$466859286_removeKey,
  getType: $1662971556_$2411079736,
  getVal: $1662971556_$2621634261_getVal,
  uid: $1662971556_$3258224650_uid,
  cuid: $1662971556_$3258224650_cuid,
  puid: $1662971556_$3258224650_puid
}

var $1662971556 = $1662971556_$3269461964_$ALL$
;var $3305006410_exports = {}
/**
 * @function ua
 * Returns an object representing the user agent including data such as browser, device and platform
 * @param {string} _ua - the raw user agent string to be converted
 * @param {string} obj - (optional) object to be merged to the output result
 * @returns {object} object representing your user agent
 */
var $3305006410 = $3305006410_exports = function (_ua, obj) {
  if (!obj) obj = {}
  // _ua = 'webos; linux - large screen'
  var node = 'node.js'
  var _ff = 'firefox'
  var _mac = 'mac'
  var _chrome = 'chrome'
  var _android = 'android'
  var _wrapper = 'wrapper'
  var _mobile = '.+mobile'
  var _webkit = 'webkit'
  var _ps = 'playstation'
  var _xbox = 'xbox'
  var _linux = 'linux'
  var _castDetect = 'crkey'
  var _chromecast = 'cast'
  var _tablet = 'tablet'
  var _windows = 'windows'
  var _phone = 'phone'
  var _facebook = 'facebook'
  var _edge = 'edge'
  var _version = 'version'
  var _samsung = 'samsung'

  var _fullUA = typeof _ua === 'string' ? _ua.toLowerCase() : node
  var _vendorIdx = _fullUA.indexOf('*vg*')
  _ua = ~_vendorIdx ? _fullUA.substring(0, _vendorIdx - 1) : _fullUA

  /**
   * browser detection
   */
  test.call(obj, _ua,
    function (query, arr) {
      obj.browser = arr[2] || query
      var _v = _ua.match(
        new RegExp('((([\\/ ]' + _version + '|' + arr[ 0 ] + '(?!.+' + _version + '))[/ ])| rv:)([0-9]{1,4}\\.[0-9]{0,2})')
      )
      obj[_version] = _v ? Number(_v[4]) : 0
      obj.prefix = arr[1]
      // TODO: add prefix for opera v>12.15;
      // TODO: windows check for ie 11 may be too general;
    },
    [ true, _webkit ],
    [ '\\(' + _windows, 'ms', 'ie' ],
    [ 'safari', _webkit ],
    [ _ff, 'moz' ],
    [ 'opera', 'O' ],
    [ 'msie', 'ms', 'ie' ],
    [ _facebook ],
    [ _chrome + '|crios/', _webkit, _chrome ],
    [ _edge, _webkit, _edge ],
    [ node, false, true ]
  )

  /**
   * platform detection
   */
  test.call(obj, _ua, 'platform',
    [ true, _windows ],
    [ _linux ],
    [ 'lg.{0,3}netcast', 'lg' ], // TODO:propably need to add more!
    [ _ff + _mobile, _ff ],
    [ _mac + ' os x', _mac ],
    [ 'iphone|ipod|ipad', 'ios' ],
    [ _xbox ],
    [ _ps ],
    [ _android ],
    [ _windows ],
    [ _castDetect, _chromecast ],
    [ 'smart-tv;|;' + _samsung + ';smarttv', _samsung ], // SmartTV2013
    [ node ]
  )

  /**
   * device detection
   */
  test.call(obj, _ua, 'device',
    [ true, 'desktop' ],
    [ _windows + '.+touch|ipad|' + _android, _tablet ],
    [
      _phone + '|phone|(' +
      _android + _mobile + ')|(' + _ff + _mobile +
      ')|' + _windows + ' phone|iemobile', _phone
    ],
    [ _xbox + '|' + _ps, 'console' ],
    [ _castDetect, _chromecast ],
    [ _tablet + '|amazon-fireos|nexus (?=[^1-6])\\d{1,2}', _tablet ],
    [ '\\btv\\b|smarttv|googletv|appletv|hbbtv|pov_tv|netcast.tv|webos.+large|viera|aft[bsm]|bravia', 'tv' ],
    [ 'mozilla\\/5.0 \\(compatible; .+http:\\/\\/', 'bot' ],
    [ node, 'server' ]
  )

  /**
   * wrapped webview native app detection
   */
  test.call(obj, _fullUA, 'webview',
    [ true, false ],
    [ 'crosswalk' ],
    [ 'vigour-' + _wrapper, _wrapper ],
    [ 'cordova' ],
    [ 'ploy-native' ]
  )

  return obj

  /**
   * test
   * search for regexps in the userAgent
   * fn is a on success callback
   * check tests in https://github.com/faisalman/ua-parser-js to test for userAgents
   * @method
   */
  function test (_ua, fn) {
    for (
      var tests = arguments, i = tests.length - 1, t = tests[i], query = t[0];
      query !== true && !new RegExp(query).test(_ua) && i > 0;
      t = tests[--i], query = t[0]
    ); //eslint-disable-line
    // this for has no body
    if (fn.slice || fn.call(this, query, t)) {
      this[fn] = t[1] === void 0 ? query : t[1]
    }
  }
}

;var $2244796395 = {}
const $2244796395_ua = $3305006410
$2244796395_ua(typeof window !== 'undefined' && window.navigator.userAgent, $2244796395)

;var $215521817_exports = {}
var $215521817_$1662971556 = $1662971556
;var $215521817_$834129491 = []

;const $215521817_$61209465_getPath = (t, path) => {
  var i = 0
  const len = path.length
  while (i < len && (t = t[path[i++]]));
  return t
}

const $215521817_$61209465_isWidget = t => t.isWidget !== void 0 ? t.isWidget : t.inherits && $215521817_$61209465_isWidget(t.inherits)

// const cache = t => t._cachedNode

const $215521817_$61209465_cache = t => t._cachedNode !== void 0
  ? t._cachedNode
  : !('style' in t) && !('attr' in t) && t.inherits && $215521817_$61209465_cache(t.inherits)

const $215521817_$61209465_tag = t => t.tag || t.inherits && $215521817_$61209465_tag(t.inherits)

const $215521817_$61209465_get$ = t => t.$ !== void 0 ? t.$ : t.inherits && $215521817_$61209465_get$(t.inherits)

const $215521817_$61209465_get$any = t => t.$any !== void 0 ? t.$any : t.inherits && $215521817_$61209465_get$any(t.inherits)

const $215521817_$61209465_get$switch = t => t.$switch !== void 0 ? t.$switch : t.inherits && $215521817_$61209465_get$switch(t.inherits)

const $215521817_$61209465_getType = t => t.subscriptionType || t.inherits && $215521817_$61209465_getType(t.inherits)

const $215521817_$61209465_getClass = t => t.class !== void 0 ? t.class : t.inherits && $215521817_$61209465_getClass(t.inherits)

const $215521817_$61209465_getForce = t => t.forceSubscriptionMethod || t.inherits && $215521817_$61209465_getForce(t.inherits)




var $215521817_$61209465_$ALL$ = {
  getPath: $215521817_$61209465_getPath,
  getForce: $215521817_$61209465_getForce,
  isWidget: $215521817_$61209465_isWidget,
  cache: $215521817_$61209465_cache,
  tag: $215521817_$61209465_tag,
  get$: $215521817_$61209465_get$,
  get$any: $215521817_$61209465_get$any,
  get$switch: $215521817_$61209465_get$switch,
  getType: $215521817_$61209465_getType,
  getClass: $215521817_$61209465_getClass
}
; // better to store on the root -- prevent mismatch


const $215521817_$2717887677_parent = (tree, pid) => (tree._ && tree._[pid]) ? tree
  : tree._p && $215521817_$2717887677_parent(tree._p, pid)

var $215521817_$2717887677 = (t, state, type, subs, tree, id, pid, order) => {
  if (t.isObject && (!t.isElement || t.isText)) {
    const p = $215521817_$2717887677_parent(tree, pid)
    if (!p) {
      // if (type === 'remove')
      // object subs dont work with on remove or widgets yet -- this is why it fires so often for  the h-lists
      // console.log('cannot find parent for', t.path(), pid, subs, state.inspect(), tree)
      return
    }
    tree = p
    state = p.$t
    if (!state) {
      throw new Error('OBJECT SUBS - NO STATE')
    }
  }

  if (type === 'remove') {
    for (let i = $215521817_$834129491.length - 1; i >= 0; i = i - 3) {
      const wtree = $215521817_$834129491[i]
      let ptree = wtree
      while (ptree) {
        if (tree === ptree) {
          $215521817_$2717887677_emitRemove($215521817_$834129491[i - 2], state, wtree, $215521817_$834129491[i - 1])
          $215521817_$834129491.splice(i - 2, 3)
        }
        ptree = ptree._p
      }
    }
    if ($215521817_$2717887677_onRemove(t) && !$215521817_$61209465_isWidget(t)) {
      $215521817_$2717887677_emitRemove(t, state, tree, id)
    }
  } else if (!tree._) {
    tree._ = {}
  }
  if (!t.render) {
    // console.warn(t)
    return
  }
  return t.render.state(t, state, type, subs, tree, id, pid, order)
}

const $215521817_$2717887677_emitRemove = (t, state, tree, id) => {
  const data = { target: tree._ && tree._[id], state }
  t.emit('remove', data, state.stamp)
}

const $215521817_$2717887677_onRemove = (t, key) => t.emitters && t.emitters.remove ||
  t.inherits && $215521817_$2717887677_onRemove(t.inherits)

;

var $215521817_$3029535488 = (state, type, subs, tree) => {
  const _ = subs._
  if (_) {
    if (type !== 'update') {
      const traveler = _.tList
      if (traveler) {
        for (let i = 0, len = traveler.length; i < len; i += 4) {
          // its all abotu this state here
          // console.log(subs) also wrong tree ofc
          $215521817_$2717887677(traveler[i + 3], state, type, subs, tree, traveler[i], traveler[i + 1], traveler[i + 2])
        }
      }
    } else if (_.sList) {
      const specific = _.sList
      for (let i = 0, len = specific.length; i < len; i += 4) {
        // its all abotu this state here
        $215521817_$2717887677(specific[i + 3], state, type, subs, tree, specific[i], specific[i + 1], specific[i + 2])
      }
    }
  }
}

;var $215521817_$2944552032 = (t, subs, tree, key) => {
  const computed = t.compute()
  if (computed) {
    const store = subs.props[key]
    const path = t.origin().path()
    var eligable, level, length
    for (let field in store) {
      if (field[0] !== '$exec' && field[0] !== 'self') {
        if (!length) { length = path.length }
        const glob = field.split('.')
        const l = glob.length
        if (length >= l) {
          if (!level || l >= level) {
            const delta = length - l
            let score = 0
            for (let i = l - 1, weight = 2; i >= 0; i--) {
              const key = glob[i]
              weight++
              if (key === path[i + delta]) {
                score += weight
              } else if (key === '*') {
                score += 1
              } else {
                score = false
                break
              }
            }
            if (score) {
              if (!eligable) { eligable = [] }
              if (!(l in eligable)) { eligable[l] = [] }
              eligable[l][score] = field
              level = l
            }
          }
        }
      }
    }
    if (eligable) {
      const candidates = eligable[level]
      return candidates[candidates.length - 1]
    }
  }
}

;const $215521817_$2138692569_isNull = t => t.val === null || t.inherits && $215521817_$2138692569_isNull(t.inherits)


var $215521817_$2138692569 = (t, map, prevMap) => {
  var changed
  const keys = t.keys()
  if (keys) {
    let i = keys.length
    while (i--) {
      let p = $215521817_$1662971556.get(t, keys[i])
      if (p && !$215521817_$2138692569_isNull(p) && p.$map) {
        if ($215521817_$2138692569_exec(p, map, prevMap)) { changed = true }
        p._blockContext = null
      }
    }
  }
  return changed
}

function $215521817_$2138692569_exec (p, map, prevMap) {
  const change = p.$map(map, prevMap)

  if (change) {
    return true
  } else {
    // this can be removed the 1 thing
    p.isStatic = true
  }
}

;var $215521817_$1479020246 = (a, b) => {
  if (b.t) {
    if (!a.t) { a.t = {} }
    for (let uid in b.t) {
      a.t[uid] = b.t[uid]
    }
    if (!b.s) {
      a.tList = a.tList ? a.tList.concat(b.tList) : b.tList
    }
  }
  if (b.s) {
    if (!a.s) { a.s = {} }
    for (let uid in b.s) {
      a.s[uid] = b.s[uid]
    }
    a.sList = a.sList ? a.sList.concat(b.sList) : b.sList
    a.tList = a.tList ? a.tList.concat(b.tList) : b.tList
  }
}

;var $215521817_$4042634048 = (target, map, val) => {
  if (val && map.val !== true) {
    if (
      val === true ||
      (val === 'switch' && !map.val) ||
      (val === 'switch' && map.val !== true && map.val !== 'shallow') ||
      (val === 'shallow' && map.val !== true)
    ) {
      map.val = val
    }
  }
  return map
}

;

var $215521817_$3434732633 = function set (target, val, map, path) {
  const len = path.length - 1
  if (len === 0) {
    map[path[0]] = val
    val._ = { p: map }
    if (val.val) {
      const subsVal = val.val
      delete val.val
      $215521817_$4042634048(target, val, subsVal)
    }
  } else {
    let m = map
    for (let i = 0, key; i < len; i++) {
      key = path[i]
      if (!m[key]) {
        m[key] = { _: { p: m }, $blockRemove: false } // $blockRemove: false - should not be nessecary
      }
      m = m[key]
    }
    m[path[len]] = val
    val._ = { p: m }
    if (val.val) {
      const subsVal = val.val
      delete val.val
      $215521817_$4042634048(target, val, subsVal)
    }
  }
  return val
}

;




var $215521817_$2174896419 = (t, subs, val, map) => {
  const field = $215521817_$61209465_getPath(map, subs)
  if (field) {
    if (subs.length > 1) {
      for (let i = 0, len = subs.length - 1, m = map, key; i < len; i++) {
        key = subs[i]
        m = m[key]
        if (m.$blockRemove) {
          m.$blockRemove = false
        }
        if (!m.val) m.val = 'switch'
      }
    }
    $215521817_$2174896419_merge(t, field, val)
    return field
  } else {
    return $215521817_$3434732633(t, val, map, subs)
  }
}

const $215521817_$2174896419_merge = (t, a, b) => {
  if (b && typeof b !== 'object') {
    if (!a.val) { a.val = b }
  } else {
    if (typeof b === 'object') {
      if (!b._) {
        b._ = {}
      }
      b._.p = a._.p
    }
    for (let i in b) {
      if (i !== '$keys') {
        if (i === 'props') {
          if (!a.props) {
            a.props = {}
          }
          for (let j in b.props) {
            a.props[j] = b.props[j]
            for (let n in b.props[j]) {
              if (typeof b.props[j][n] === 'object') {
                b.props[j][n]._.p = a._.p
              }
            }
          }
        } else if (i !== '_') {
          if (typeof a[i] === 'object') {
            $215521817_$2174896419_merge(t, a[i], b[i])
          } else if (!a[i]) {
            if (typeof b[i] === 'object' && b[i]._) {
              b[i]._.p = a
            }
            a[i] = b[i]
          } else if (i === 'val') {
            // alse remove this specific true thing
            if (a.val !== b.val) {
              // pretty wrong since i need the info of the t in the def
              $215521817_$4042634048(t, a, b.val)
            }
          } else {
            let prev = a[i]
            // maybe copy sync?
            a[i] = { _: { p: a } }
            $215521817_$4042634048(t, a[i], prev)
            $215521817_$2174896419_merge(t, a[i], b[i])
          }
        } else {
          $215521817_$1479020246(a._, b._)
        }
      }
    }
  }
}

;



var $215521817_$3687913080 = (t, map, prevMap) => {
  const $ = $215521817_$61209465_get$(t)
  let key = '$switch' + $215521817_$1662971556.puid(t)
  $[$.length - 1] = key
  if ($.length !== 1) {
    let val = {}
    map = $215521817_$2174896419(t, $.slice(0, -1), val, map)
    $215521817_$3687913080_mapSwitch(map, key, t, map, $)
  } else {
    $215521817_$3687913080_mapSwitch(map, key, t, map, $)
  }
  return map
}

const $215521817_$3687913080_helper = (struct, subs, tree, key) => {
  const store = subs.props[key]
  const $exec = store.$exec
  var result = $exec(struct, subs, tree, key)
  if (result === true) {
    result = store.self
  } else {
    const type = typeof result
    if (type === 'number' || type === 'string') {
      result = store[result]
    }
  }
  return result
}

function $215521817_$3687913080_mapSwitch (val, pkey, t, pmap, $) {
  const self = t.$map(void 0, pmap, true)
  const props = $215521817_$1662971556.get(t, 'props')
  const types = $215521817_$1662971556.get(t, 'types')
  var blackList
  if (types.element) {
    blackList = types.element.props
  } else {
    blackList = types.struct.props
  }
  const mappedProps = {}
  if (!val.props) { val.props = {} }
  val.props[pkey] = mappedProps

  var $switch = $215521817_$61209465_get$switch(t)
  if (typeof $switch === 'object') {
    $switch = $215521817_$1662971556.parse($switch)
    mappedProps.$exec = $switch.val
    const n = {}
    for (let key in $switch) {
      n[key] = $switch[key]
    }
    n.val = $215521817_$3687913080_helper
    $switch = n
    n.props = val.props // bit weird...
  } else {
    mappedProps.$exec = $switch
    $switch = $215521817_$3687913080_helper
  }

  var len = $.length
  var select = self
  for (let i = 0; i < len; i++) { select = select[$[i]] }
  select._.p = pmap._.p
  mappedProps.self = select
  if (!select.val) select.val = 'switch'

  for (let key in props) {
    const keyO = key[0]
    if (
      keyO !== '$' && keyO !== '_' &&
      (!blackList[key] || blackList[key] !== props[key])
    ) {
      const prop = props[key]
      const struct = prop.struct
      if (struct && struct.$map) { // is element or is property
        struct.key = key
        struct._c = (!t._c || t._cLevel > 1) ? t._p : t._c
        struct._cLevel = 1
        struct.indexProperty = t
        let map = struct.$map(void 0, pmap)
        mappedProps[key] = map
        map._.p = pmap._.p
        if (!map.val) { map.val = 'switch' }
        delete struct.indexProperty
      }
    }
  }

  val[pkey] = $switch
  return val
}

;

var $215521817_$3922121264 = (target, obs, type) => {
  const _ = target._
  var store = _[type] || (_[type] = {})
  var pid, id, parent, index

  id = $215521817_$1662971556.puid(obs)

  // if (obs.isElement) {
    // console.log(obs.path().join('/'), id)
  // }

  parent = $215521817_$3922121264_getParent(obs.parent())
  pid = parent && $215521817_$1662971556.puid(parent)

// }
  index = obs.findIndex(parent)
  if (!store[id]) {
    if (target.$blockRemove !== false) {
      target.$blockRemove = true
    }
    store[id] = obs
    if (type === 's') {
      if (!_.sList) _.sList = []
      _.sList.unshift(id, pid, index, obs)
    }
    if (!_.tList) _.tList = []
    _.tList.unshift(id, pid, index, obs)
  }
  return target
}

const $215521817_$3922121264_getParent = parent => {
  while (parent) {
    if (parent.isElement) {
      return parent
    }
    parent = parent.parent()
  }
}

;






var $215521817_$1460522650 = (t, map) => {
  const props = t.get('props')
  const child = props.default.struct

  const $ = $215521817_$61209465_get$(t)

  child.key = 'default'
  if (t._c || t !== child._p) {
    child._c = t
    child._cLevel = 1
  }

  var key = '$any'
  var $any = $215521817_$61209465_get$any(t)
  var extra

  if (typeof $any === 'function') {
    key = '$any' + $215521817_$1662971556.puid(t)
  } else if (typeof $any === 'object') {
    extra = $215521817_$1662971556.parse($any)

    $any = $any.val
    key = '$any' + $215521817_$1662971556.puid(t)
  } else {
    $any = false
  }

  if ($.length !== 1) {
    const path = $.slice(0, -1)
    const val = { val: 'switch' } // wrong for switch .. what to do
    val[key] = child.$map(void 0, val)

    if ($any) {
      val[key].$keys = $any
    }

    if (!val[key].val) {
      if (!$215521817_$61209465_get$switch(child)) {
        $215521817_$4042634048(child, val[key], 'switch')
      }
    }

    map = $215521817_$2174896419(t, path, val, map)
  } else {
    if (map[key]) {
      $215521817_$2174896419(t, [ key ], child.$map(void 0, map), map)
    } else {
      map[key] = child.$map(void 0, map)
    }

    if (!map[key].val) {
      if (!$215521817_$61209465_get$switch(child)) {
        $215521817_$4042634048(child, map[key], 'switch')
      }
    }

    if ($any) {
      map[key].$keys = $any
    }
  }

  $215521817_$2138692569(t, map)
  $215521817_$3922121264(map, t, 't')

  if (extra) {
    $215521817_$1460522650_mergeExtra(extra, map[key])
    const $keys = map[key].$keys
    for (let field in $keys) {
      // tmp expiriment
      if (field !== '$object' && field !== 'props' && field !== 'val' && field !== 'root') {
        // console.log(field, $keys[field])
        if (!map[key][field]) {
          map[key][field] = $keys[field]
        }
      }
    }
  }

  return map
}

const $215521817_$1460522650_$keys = (map, i, t) => {
  if (typeof map.$keys !== 'object') {
    map.$keys = { val: map.$keys }
  }
  if (i === 'parent') {
    for (let j in t) {
      map.$keys[j] = t[j]
    }
  } else if (i === 'root') {
    map.$keys.root = {}
    for (let j in t) {
      map.$keys.root[j] = t[j]
    }
  } else {
    map.$keys[i] = t
  }
}

const $215521817_$1460522650_mergeExtra = (target, map, deep) => {
  for (let i in target) {
    let t = target[i]
    if (!deep) { //  && (i === 'root' || i === 'parent')
      $215521817_$1460522650_$keys(map, i, t)
    } else {
      let type = typeof t
      if (type !== 'object' && type !== 'function') {
        t = target[i] = { val: t }
      }
      if (i === 'val') {
        if (!deep) {
          if (!map.val) {
            map.val = t
          } else if (t === true && map.val === 'switch') {
            map.val = t
          }
        }
      } else {
        if (!(i in map)) {
          map[i] = t
        } else {
          $215521817_$1460522650_mergeExtra(t, map[i], true)
        }
      }
    }
  }
}

;





var $215521817_$4025610930 = (t, map) => {
  const def = $215521817_$61209465_getType(t)
  const path = $215521817_$61209465_get$(t)
  const force = $215521817_$61209465_getForce(t)
  const type = def === 'switch' ? 't' : 's'
  if (path !== true) {
    map = $215521817_$2174896419(t, path, { val: def }, map)
  } else {
    $215521817_$4042634048(t, map, def)
  }
  $215521817_$2138692569(t, map)
  $215521817_$3922121264(map, t, force || type)
  return map
}

;





const $215521817_$4276047929_parse = (subs, arr, x) => {
  for (let field in subs) {
    let path = x.concat()
    if (field === 'val') {
      path.push(subs[field])
      arr.push(path)
    } else if (typeof subs[field] !== 'object') {
      path.push(field)
      path.push(subs[field])
      arr.push(path)
    } else {
      path.push(field)
      $215521817_$4276047929_parse(subs[field], arr, path)
    }
  }
  return arr
}

var $215521817_$4276047929 = (t, map) => {
  const subs = $215521817_$61209465_get$(t)
  const arr = $215521817_$4276047929_parse(subs, [], [])
  let cnt = false
  t.isObject = true
  const def = $215521817_$61209465_getType(t)
  for (let i = 0, len = arr.length; i < len; i++) {
    let path = arr[i]
    let type = path.pop()
    let prevmap = path.length === 0
      ? $215521817_$4042634048(t, map, type)
      : $215521817_$2174896419(t, path, { val: type }, map)
    if (!cnt) {
      $215521817_$2138692569(t, prevmap || map)
    }
    if (def !== 'switch' || !cnt) {
      $215521817_$3922121264(prevmap || map, t, type === true || type === 'shallow' ? 's' : 't')
    }
    if (!cnt) cnt = true
  }
  if (!cnt) {
    $215521817_$2138692569(t, map)
    $215521817_$3922121264(map, t, def)
    $215521817_$4042634048(t, map, def)
  }
  return map
}


;







// dont define just require
var $215521817_$3846085509 = {
  define: {
    $map (map, prev, ignoreSwitch) {
      var returnValue
      const $ = $215521817_$61209465_get$(this)
      if (!map) {
        returnValue = map = this._$map = { _: { p: prev || false } }
      }
      this.isStatic = null
      if ($) {
        if (typeof $ === 'object' && !($ instanceof Array)) {
          if (!returnValue) { returnValue = true }
          map = $215521817_$4276047929(this, map)
        } else {
          if ($[0] === 'root' && (!map || !map._ || !map._.p)) $.shift()
          if (!returnValue) returnValue = true
          if ($215521817_$61209465_get$switch(this) && !ignoreSwitch) {
            map = $215521817_$3687913080(this, map)
          } else if ($215521817_$61209465_get$any(this)) {
            map = $215521817_$1460522650(this, map)
          } else {
            map = $215521817_$4025610930(this, map)
          }
        }
      } else if ($215521817_$2138692569(this, map) || returnValue) {
        $215521817_$3922121264(map, this, 't')
        if (!returnValue) { returnValue = true }
      }

      return returnValue
    }
  }
}

;


const $215521817_$4133454486_injectable = {}

var $215521817_$4133454486 = $215521817_$4133454486_injectable

$215521817_$4133454486_injectable.props = {
  $ (t, val) {
    if (typeof val === 'number' && !isNaN(val)) {
      val = [ val + '' ]
    } else if (typeof val === 'string') {
      val = val.split('.')
    }
    if (Array.isArray(val)) {
      let length = val.length
      const last = val[length - 1]
      if (last === '$any') {
        if (!t.$any) {
          t.$any = true
        }
        length--
      } else if ($215521817_$61209465_get$any(t)) {
        t.$any = null
      } else if (last === '$switch') {
        if (!$215521817_$61209465_get$switch(t)) { t.$switch = $215521817_$2944552032 }
      } else if ($215521817_$61209465_get$switch(t)) {
        t.$switch = null
      }
      t._$length = length
    } else {
      t._$length = null
    }
    t.$ = val
    return true
  },
  isStatic: true,
  $switch: true,
  $any: true,
  forceSubscriptionMethod: true,
  subscriptionType: true,
  render (t, val) {
    t.set({
      define: {
        render: val
      }
    })
  }
}


$215521817_$4133454486_injectable.subscriptionType = 'switch'
$215521817_$4133454486_injectable.inject = $215521817_$3846085509

/*
more merge tests
*/

;


const $215521817_$2365388884_injectable = {}

var $215521817_$2365388884 = $215521817_$2365388884_injectable

$215521817_$2365388884_injectable.define = {
  findIndex (parent) {
    if (parent) {
      if (this.indexProperty) {
        return this.indexProperty.findIndex(parent)
      } else {
        if (!$215521817_$61209465_get$any(parent)) {
          const key = $215521817_$1662971556.get(this, 'key')
          if (key !== void 0 && key !== null) {
            const keys = parent.keys()
            if (keys) {
              const len = keys.length
              if (len > 1) {
                for (let i = 0; i < len; i++) {
                  if (keys[i] === key) {
                    if ($215521817_$61209465_tag(parent) === 'fragment') {
                      const fraction = ((i + 1) / (len + 1)).toFixed((len + '').length)
                      return (parent.findIndex(parent.parent()) || 1) + fraction
                    } else {
                      return i + 1
                    }
                  }
                }
              }
            }
          }
        }
        if ($215521817_$61209465_tag(parent) === 'fragment') return parent.findIndex(parent.parent())
      }
    }
  }
}

;const $215521817_$1039077650_isStatic = t => t.isStatic !== void 0
  ? t.isStatic
  : t.inherits && $215521817_$1039077650_isStatic(t.inherits)

// optmize these things
const $215521817_$1039077650_staticProps = t => t.staticProps ||
  (t.staticProps = t.filter(t => !t.isElement && $215521817_$1039077650_isStatic(t)))

const $215521817_$1039077650_staticElements = t => t.staticElements ||
  (t.staticElements = t.filter(t => t.isElement && $215521817_$1039077650_isStatic(t)))

const $215521817_$1039077650_property = (t, div, param) => {
  const props = $215521817_$1039077650_staticProps(t)
  for (let i = 0, len = props.length; i < len; i++) {
    props[i].render.static(props[i], div, param)
  }
  return props
}

const $215521817_$1039077650_element = (t, div) => {
  const elements = $215521817_$1039077650_staticElements(t)
  for (let i = 0, len = elements.length; i < len; i++) {
    elements[i].render.static(elements[i], div)
  }
  return elements
}



var $215521817_$1039077650_$ALL$ = {
  isStatic: $215521817_$1039077650_isStatic,
  staticProps: $215521817_$1039077650_staticProps,
  staticElements: $215521817_$1039077650_staticElements,
  property: $215521817_$1039077650_property,
  element: $215521817_$1039077650_element
}
;

var $215521817_$2107281421 = (target, pnode, id, tree) => {
  const arr = [ pnode ]
  $215521817_$1039077650_element(target, arr)
  tree._[id] = arr
  return arr
}

;



const $215521817_$1550875583_style = (t, ctx, width, height, styles) => {
  // padding, margin, top, left, position, border
  if (styles.background) {
    ctx.fillStyle = styles.background
    ctx.fillRect(0, 0, width, height)
  }

  if (styles.image) {
    if (!t._img || styles.image !== t._imgUrl) {
      t._imgUrl = styles.image
      t._img = new global.Image()
      t._img.src = styles.image
      t._loaded = false
      t._img.onload = () => {
        t._loaded = true
        t.requestPaint()
      }
    }
    if (t._loaded) {
      const size = styles.backgroundSize
      if (!size) {
        ctx.drawImage(t._img, 0, 0, t._img.width, t._img.height)
      } else {
        if (size === 'cover') {
          // center by default
          var ratio = width / t._img.width
          var h = t._img.height * ratio
          var x = 0
          var y = 0
          y = (height - h) / 2
          var w = width
          if (h < height) {
            ratio = height / t._img.height
            h = height
            w = t._img.width * ratio
            y = 0
            x = (width - w) / 2
          }
          ctx.drawImage(t._img, x, y, w, h)
        } else {
          const ratio = width / t._img.width
          // split width and height
          // also add position
          ctx.drawImage(t._img, 0, 0, width, t._img.height * ratio)
        }
      }
    }
  }

  if (styles.border) {
    // cache all these string operations
    const match = styles.border.match(/^(\d)+[a-z]+ [a-z]+ (.+)/)
    ctx.lineWidth = match[1]
    ctx.strokeStyle = match[2]
    ctx.strokeRect(0, 0, width, height)// for white background
  }
}

const $215521817_$1550875583_text = (t, ctx, styles) => {
  let { width, height } = t.getDimensions()
  if (styles) {
    $215521817_$1550875583_style(t, ctx, width, height, styles)
    // font properties (add vertical align middle etc)
    // textAlign center
    ctx.textAlign = styles.textAlign || 'left'
    // width
    ctx.fillStyle = styles.color || 'black'
    ctx.fontSize = styles.fontSize || 12
    ctx.fontFamily = styles.fontFamily || 'Verdana'
  } else {
    ctx.fillStyle = 'black' // inheritance :/ add it
  }

      // add lineheight as well
  let lineHeight = (styles && styles.fontSize) || 12

  if (
    t.paddingTop ||
    t.paddingLeft ||
    t.paddingBottom ||
    t.paddingRight
  ) {
    let x = t.paddingLeft || 0
    if (styles && styles.textAlign && styles.textAlign === 'center') {
      x = width / 2
    }
    const y = t.paddingTop || 0
    const data = ctx.breakText(t.text, width - (t.paddingLeft || 0) - (t.paddingRight || 0))
    if (!t._height) {
      // repaint issue fix later...
      const val = lineHeight * (data.lines.length + 1)
      if (t.height !== val) {
        t.height = val
        return
      }
    }
    for (let i = 0; i < data.lines.length; i++) {
      ctx.fillText(data.lines[i], x, (i + 1) * lineHeight + y)
    }
  } else {
    const data = ctx.breakText(t.text, width)
    let x = 0
    if (styles && styles.textAlign && styles.textAlign === 'center') {
      x = width / 2
    }
    if (!t._height) {
      // repaint issue fix later...
      const val = lineHeight * (data.lines.length + 1)
      if (t.height !== val) {
        t.height = val
        return
      }
    }
    for (let i = 0; i < data.lines.length; i++) {
      ctx.fillText(data.lines[i], x, (i + 1) * lineHeight)
    }
  }
}

class Base extends global.Canvas {
  onresize () {

  }
  getBoundingclientRect () {
    return this.getDimensions()
  }
  get parentNode () {
    return this.getParent()
  }
  oncontextlost () {
    this.cx = undefined
  }
  onload () {
    this.cx = this.getContext('2d')
  }
  setText (val, id) {
    // multiple text nodes id
    this.text = val
    // if there is a width calc everything
    this.requestPaint()
  }
  onpaint () {
    const ctx = this.cx
    const styles = this.style
    this.clear()
    if (this.text !== void 0) {
      $215521817_$1550875583_text(this, ctx, styles)
    } else if (styles) {
      const { width, height } = this.getDimensions()
      $215521817_$1550875583_style(this, ctx, width, height, styles)
    }
  }
}

const $215521817_$1550875583_injectable = {}

var $215521817_$1550875583 = $215521817_$1550875583_injectable

$215521817_$1550875583_injectable.state = (t, type, subs, tree, id, pnode, state) => {
  const nodeType = $215521817_$61209465_tag(t)
  if (nodeType === 'fragment') {
    return $215521817_$2107281421(t, pnode, id, tree)
  } else {
    const node = new Base()
    $215521817_$1039077650_property(t, node)
    $215521817_$1039077650_element(t, node)
    tree._[id] = node
    return node
  }
}

$215521817_$1550875583_injectable.static = t => {
  // const nodeType = tag(t)
  const node = new Base()
  $215521817_$1039077650_property(t, node)
  $215521817_$1039077650_element(t, node)
  return node
}


;// TESTBROWSER!!!!???






const $215521817_$2156255699_isNidium = global.__nidium__

const $215521817_$2156255699_injectable = $215521817_$2156255699_isNidium ? $215521817_$1550875583 : {}
const $215521817_$2156255699_xmlns = 'http://www.w3.org/2000/svg'

var $215521817_$2156255699 = $215521817_$2156255699_injectable

if (!$215521817_$2156255699_isNidium) {
  const resolveState = (t, pnode, id, state) => {
    if (!pnode && t.node) {
      t.node.removeAttribute('id')
      return t.node
    } else {
      const children = pnode.childNodes
      if (children) {
      // console.log(state.path(), puid(state))
        id = (id * 33 ^ $215521817_$1662971556.puid(state)) >>> 0
        var i = children.length
        while (i--) {
        if (children[i].id == id) { // eslint-disable-line
          children[i].removeAttribute('id')
          return children[i]
        }
        }
      }
    }
  }

  const hasStateProperties = t => {
    const keys = t.keys()
    if (keys) {
      let i = keys.length
      while (i--) {
        let check = $215521817_$1662971556.get(t, keys[i])
        if (!check.isElement && !$215521817_$1039077650_isStatic(check)) {
          return true
        }
      }
    }
  }

  const staticFromCache = (cached) => {
    const node = cached.cloneNode(true)
    if (cached._index) node._index = cached._index
    if (cached._last) node._last = cached._last
    return node
  }

  const createElement = nodeType => {
    if (nodeType === 'div') {
      return document.createElement(nodeType)
    } else {
      return nodeType === 'svg' ||
      nodeType === 'path' ||
      nodeType === 'g' ||
      nodeType === 'rect' ||
      nodeType === 'circle' ||
      nodeType === 'ellipse' ||
      nodeType === 'polyline' ||
      nodeType === 'polygon' ||
      nodeType === 'linearGradient' ||
      nodeType === 'defs' ||
      nodeType === 'image' ||
      nodeType === 'use' ||
      nodeType === 'mask' ||
      nodeType === 'stop'
      ? document.createElementNS($215521817_$2156255699_xmlns, nodeType)
      : document.createElement(nodeType)
    }
  }

// indexes need to be copied when adding from pre-render
  $215521817_$2156255699_injectable.static = (t, pnode, noResolve) => {
  // the cache node is nto good of course!
  // console.log('static')
    const cached = $215521817_$61209465_cache(t)
    var node
    if (cached && $215521817_$1039077650_isStatic(t)) {
      node = staticFromCache(cached)
    } else {
      if (cached) {
        throw new Error('static but its not static..... very strange....' + t.path())
      } else {
        const nodeType = $215521817_$61209465_tag(t)
        if (nodeType === 'fragment') {
          console.error('not handeling static fragments yet')
        } else {
          node = createElement(nodeType)
          $215521817_$1039077650_property(t, node)
          $215521817_$1039077650_element(t, node, true)
          t._cachedNode = node
        }
      }
    }
    return node
  }

// fn for cached
  $215521817_$2156255699_injectable.state = (t, type, subs, tree, id, pnode, state) => {
  // need to re-add cache ofc
    var cached = $215521817_$61209465_cache(t) //! t.resolve
    var node
  // @todo: this copies unwanted styles / props -- need to add an extra clonenode for this
    if (cached) {
      node = cached.cloneNode(false)
      tree._[id] = node
      if (cached._last) {
        node._last = cached._last
      }
      if (cached._index) {
        node._index = cached._index
      }
      $215521817_$1039077650_element(t, node)
    } else {
      const nodeType = $215521817_$61209465_tag(t)
      if (nodeType === 'fragment') {
        return $215521817_$2107281421(t, pnode, id, tree)
      } else {
        if (t.resolve) {
          if (!tree._p || !tree._p._key !== 'client') {
            node = resolveState(t, pnode, id, state)
          }
          if (!node) {
            node = createElement(nodeType)
            const hasStaticProps = $215521817_$1039077650_staticProps(t).length
            if (hasStaticProps) {
              t._cachedNode = node
              $215521817_$1039077650_property(t, node)
              if (hasStateProperties(t)) {
                node = t._cachedNode.cloneNode(false)
              }
            }
            $215521817_$1039077650_element(t, node)
          }
        } else {
          node = createElement(nodeType)
          const hasStaticProps = $215521817_$1039077650_staticProps(t).length
          if (hasStaticProps) {
            t._cachedNode = node
            $215521817_$1039077650_property(t, node)
            if (hasStateProperties(t)) {
              node = t._cachedNode.cloneNode(false)
            }
          }
          $215521817_$1039077650_element(t, node)
        }
      }
      tree._[id] = node
    }
    return node
  }
}

;const $215521817_$1908772127_parent = (tree, pid) => tree._ && tree._[pid] ||
  tree._p && $215521817_$1908772127_parent(tree._p, pid)

var $215521817_$1908772127 = $215521817_$1908772127_parent

;const $215521817_$2307634410_findParent = node => {
  while ($215521817_$2307634410_isFragment(node)) {
    node = node[0]
  }
  return node
}

const $215521817_$2307634410_isFragment = node => node instanceof Array



var $215521817_$2307634410_$ALL$ = {
  findParent: $215521817_$2307634410_findParent,
  isFragment: $215521817_$2307634410_isFragment
}
;

const $215521817_$2716462886_injectable = {}
const $215521817_$2716462886_isNidium = global.__nidium__

var $215521817_$2716462886 = $215521817_$2716462886_injectable

$215521817_$2716462886_injectable.static = (t, pnode, domNode) => {
  if ($215521817_$2307634410_isFragment(pnode)) {
    pnode.push(domNode)
    pnode = $215521817_$2307634410_findParent(pnode)
  }
  const index = t.findIndex(t.parent())
  if (index !== void 0) {
    pnode._last = index
    domNode._order = index
  }
  if ($215521817_$2716462886_isNidium) {
    pnode.add(domNode)
  } else {
    pnode.appendChild(domNode)
  }
}

$215521817_$2716462886_injectable.state = (t, pnode, node, subs, tree, uid, order) => {
  var fragment
  if ($215521817_$2307634410_isFragment(pnode)) {
    fragment = pnode
    pnode = $215521817_$2307634410_findParent(pnode)
  }
  if (order !== void 0) {
    const next = $215521817_$2716462886_findNode(order, pnode)
    node._order = order
    if (next) {
      if (fragment) { fragment.push(node) }
      pnode.insertBefore(node, next)
    } else {
      pnode._last = order
      if (fragment) { fragment.push(node) }
      if ($215521817_$2716462886_isNidium) {
        pnode.add(node)
      } else {
        pnode.appendChild(node)
      }
    }
  } else {
    if (fragment) { fragment.push(node) }
    if ($215521817_$2716462886_isNidium) {
      pnode.add(node)
    } else {
      pnode.appendChild(node)
    }
  }
}

function $215521817_$2716462886_findNode (order, pnode) {
  const last = pnode._last
  if (order < last) {
    const c = $215521817_$2716462886_isNidium ? pnode.getChildren() : pnode.childNodes
    if (c) {
      let i = c.length
      while (i--) {
        if (c[i] && c[i]._order > order && (!c[i - 1] || c[i - 1]._order <= order)) {
          return c[i]
        }
      }
    }
  }
}

;





const $215521817_$3891062678_renderStatic = $215521817_$2156255699.static
const $215521817_$3891062678_renderState = $215521817_$2156255699.state
const $215521817_$3891062678_appendStatic = $215521817_$2716462886.static
const $215521817_$3891062678_appendState = $215521817_$2716462886.state
const $215521817_$3891062678_injectable = {}

var $215521817_$3891062678 = $215521817_$3891062678_injectable

$215521817_$3891062678_injectable.static = (t, pnode) => {
  const node = $215521817_$3891062678_renderStatic(t, pnode)
  // dont append if you allrdy have a pnode
  if (!node.parentNode) {
    $215521817_$3891062678_appendStatic(t, pnode, node)
  }
  if (t.hasEvents) { node._ = t }
  return node
}

$215521817_$3891062678_injectable.state = (t, state, type, subs, tree, id, pid, order) => {
  const pnode = $215521817_$1908772127(tree, pid)
  const node = $215521817_$3891062678_renderState(t, type, subs, tree, id, pnode, state)
  if (pnode) { // remove this
    if ($215521817_$61209465_tag(t) !== 'fragment' && !node.parentNode) {
      $215521817_$3891062678_appendState(t, pnode, node, subs, tree, id, order)
    } else if ($215521817_$2307634410_isFragment(pnode)) {
      pnode.push(node)
    }
  }
  return node
}

;




const $215521817_$148791133_createStatic = $215521817_$3891062678.static
const $215521817_$148791133_createState = $215521817_$3891062678.state

const $215521817_$148791133_isNidium = global.__nidium__

// check for null as well -- move this to get
const $215521817_$148791133_getRemove = t => t.remove || t.inherits && $215521817_$148791133_getRemove(t.inherits)

const $215521817_$148791133_hasRemove = t => t.emitters && $215521817_$148791133_getRemove(t.emitters) ||
  t.inherits && $215521817_$148791133_hasRemove(t.inherits)

const $215521817_$148791133_getRender = t => t.render || t.inherits && $215521817_$148791133_getRender(t.inherits)

const $215521817_$148791133_hasRender = t => t.emitters && $215521817_$148791133_getRender(t.emitters) ||
  t.inherits && $215521817_$148791133_hasRender(t.inherits)

const $215521817_$148791133_removeFragmentChild = (node, pnode) => {
  for (let i = 1, len = node.length; i < len; i++) {
    if ($215521817_$2307634410_isFragment(node[i])) {
      $215521817_$148791133_removeFragmentChild(node[i], pnode)
    } else {
      if ($215521817_$148791133_isNidium) {
        node[i].removeFromParent()
      } else {
        pnode.removeChild(node[i])
      }
    }
  }
}

const $215521817_$148791133_injectable = {}

var $215521817_$148791133 = $215521817_$148791133_injectable

$215521817_$148791133_injectable.props = {
  staticIndex: true,
  _cachedNode: true
}

$215521817_$148791133_injectable.render = {
  static: $215521817_$148791133_createStatic,
  state (t, s, type, subs, tree, id, pid, order) {
    var node = tree._ && tree._[id]
    var pnode
    if (type === 'remove') {
      if (node) {
        pnode = $215521817_$1908772127(tree, pid)
        if (pnode) {
          if ($215521817_$61209465_tag(t) === 'fragment') {
            if ($215521817_$2307634410_isFragment(pnode)) {
              pnode = $215521817_$2307634410_findParent(pnode)
            }
            $215521817_$148791133_removeFragmentChild(node, pnode)
          } else if (!$215521817_$148791133_hasRemove(t)) {
            if ($215521817_$2307634410_isFragment(pnode)) {
              // add tests for this
              for (let i = 0, len = pnode.length; i < len; i++) {
                if (pnode[i] === node) {
                  pnode.splice(i, 1)
                  break
                }
              }
              pnode = pnode[0]
            }
            if ($215521817_$2307634410_isFragment(pnode)) {
              pnode = $215521817_$2307634410_findParent(pnode)
            }
            if ($215521817_$148791133_isNidium) {
              node.removeFromParent()
            } else {
              node.parentNode.removeChild(node)
            }
          }
        }
        delete tree._[id]
      }
    } else if (!node) {
      node = $215521817_$148791133_createState(t, s, type, subs, tree, id, pid, order)
      const onrender = $215521817_$148791133_hasRender(t)
      if (onrender) {
        t.emit('render', { target: node, state: s })
      }
    }
    return node
  }
}

;


const $215521817_$4188164346_appendStatic = $215521817_$2716462886.static
const $215521817_$4188164346_appendState = $215521817_$2716462886.state
const $215521817_$4188164346_injectable = {}

const $215521817_$4188164346_isNidium = global.__nidium__

var $215521817_$4188164346 = $215521817_$4188164346_injectable

// little bit harder with overtake since you need to check if there is a text value
// if resolve true

if ($215521817_$4188164346_isNidium) {
  $215521817_$4188164346_injectable.types = {
    text: {
      type: 'property',
      render: {
        static (t, pnode) {
          pnode.setText(t.compute())
        },
        state  (t, s, type, subs, tree, id, pid, order) {
          const node = $215521817_$1908772127(tree, pid)
          if (node) {
            const val = t.compute(s, s)
            node.setText(val)
          }
        }
      }
    }
  }
} else {
  $215521817_$4188164346_injectable.types = {
    text: {
      define: { isText: true },
      subscriptionType: 'shallow',
      render: {
        static (t, pnode) {
          $215521817_$4188164346_appendStatic(t, pnode, document.createTextNode(t.compute()))
        },
        state  (t, s, type, subs, tree, id, pid, order) {
          const val = t.compute(s, s)
          var node = tree._[id]
          var pnode
          if (!node) {
            if (typeof val !== 'object' && val !== void 0) {
              pnode = $215521817_$1908772127(tree, pid)
              if (t.resolve) {
                let i = pnode.childNodes.length
                while (i--) {
                if (pnode.childNodes[i].nodeType === 3) { //eslint-disable-line
                  node = tree._[id] = pnode.childNodes[i]
                  const rVal = pnode.childNodes[i].nodeValue
                  if (rVal != val) { //eslint-disable-line
                    if (!~rVal.indexOf(val)) {
                      pnode.childNodes[i].nodeValue = val
                    }
                  }
                  break
                }
                }
              }
              if (!node) {
                node = tree._[id] = document.createTextNode(val)
                $215521817_$4188164346_appendState(t, pnode, node, subs, tree, id, order)
              }
            }
          } else {
          // remove is overhead here (extra compute)
            if (type && type === 'remove' || typeof val === 'object' || val === void 0) {
              pnode = $215521817_$1908772127(tree, pid) || node.parentNode
              if (pnode) {
                try {
                  pnode.removeChild(node)
                } catch (e) {
                  console.error('--000111--', node, s.path(), s.val, t)
                }
              }
            } else {
              if (typeof val !== 'object' || val === 0) {
                node.nodeValue = val
              }
            }
          }
        }
      }
    }
  }
}

$215521817_$4188164346_injectable.props = { text: { type: 'text' } }

;

const $215521817_$390291418_injectable = {}

var $215521817_$390291418 = $215521817_$390291418_injectable

$215521817_$390291418_injectable.types = {
  html: {
    type: 'property',
    render: {
      static (t, node) {
        const val = t.compute()
        node.innerHTML = val === void 0 ? '' : val
      },
      state  (t, s, type, subs, tree, id, pid) {
        const node = $215521817_$1908772127(tree, pid)
        if (type === 'remove') {
          if (node) {
            const nodes = node.childNodes
            let i = nodes.length
            while (i--) {
              node.removeChild(nodes[i])
            }
          }
        } else {
          const val = t.compute(s, s)
          if (val === void 0 || typeof val === 'object') {
            const nodes = node.childNodes
            let i = nodes.length
            while (i--) {
              node.removeChild(nodes[i])
            }
          } else {
            node.innerHTML = val
          }
        }
      }
    }
  }
}

$215521817_$390291418_injectable.props = {
  html: { type: 'html' }
}

;var $215521817_$826337949 = $826337949
;




const $215521817_$2824643288_injectable = {}

// use * to import
var $215521817_$2824643288 = $215521817_$2824643288_injectable

$215521817_$2824643288_injectable.types = {
  group: {
    type: 'property',
    subscriptionType: 1,
    define: {
      render: {
        static (t, pnode) {
          const store = {}
          const parsed = '_' + t.key + 'StaticParsed'
          if (pnode) {
            $215521817_$1039077650_property(t, pnode, store)
            pnode[parsed] = true
          }
          t.groupRender.static(t, pnode, store)
        },
        state (t, s, type, subs, tree, id, pid, order, store) {
          let storeId = pid + t.key
          if (!store) { store = tree._[storeId] || (tree._[storeId] = {}) }
          const pnode = $215521817_$1908772127(tree, pid)
          if (pnode) {
            const parsed = '_' + t.key + 'StaticParsed'
            if (!pnode[parsed]) {
              $215521817_$1039077650_property(t, pnode, store)
              pnode[parsed] = true
            }
            if (!store.inProgress) {
              store.inProgress = true
              $215521817_$826337949.on(() => {
                delete store.inProgress
                t.groupRender.state(t, s, type, subs, tree, id, pid, store)
              })
            }
          }
        }
      }
    },
    props: {
      render (t, val) {
        t.set({ define: { groupRender: val } })
      },
      default: {
        define: {
          getStore (tree, id) {
            const $ = $215521817_$61209465_get$(this)
            if ($) {
              let length = $.length
              // why any lets make a test for this!
              if (this.$any) {
                length--
              }
              while (length) {
                length--
                tree = tree._p
              }
            }
            const _ = tree._ || (tree._ = {})
            const store = _[id] || (_[id] = {})
            return store
          }
        },
        render: {
          static (t, node, store) {
            store[t.key] = t.compute()
          },
          state (t, s, type, subs, tree, id, pid, order) {
            const p = t._p
            const key = p.key
            const store = t.getStore(tree, pid + key)
            if (!s || s.val === null || type === 'remove') {
              if (t.key in store) {
                delete store[t.key]
              }
            } else {
              store[t.key] = t.compute(s, s)
            }
            p.render.state(p, s, type, subs, tree, id, pid, order, store)
          }
        }
      }
    }
  }
}

;


const $215521817_$2300670804_injectable = {}

var $215521817_$2300670804 = $215521817_$2300670804_injectable

if (typeof window === 'undefined') {
  Object.defineProperty(global.Element.prototype, 'value', {
    configurable: true,
    get () { return this.getAttribute('value') },
    set (val) { this.setAttribute('value', val) }
  })
}

/*
element.setAttributeNS(
namespace,
name,
value)

element.removeAttributeNS(
namespace,
attrName);
*/

if (typeof window === 'undefined') {
  global.Element.prototype.setAttributeNS = function (ns, key, value) {
    this.setAttribute(key, value)
  }
  global.Element.prototype.getAttributeNS = function (ns, key) {
    this.getAttribute(key)
  }
  global.Element.prototype.removeAttributeNS = function (ns, key) {
    this.removeAttribute(key)
  }
}

$215521817_$2300670804_injectable.props = {
  attr: {
    type: 'property',
    render: {
      static: $215521817_$1039077650_property,
      state (t, state, type, subs, tree, id, pid) {
        const pnode = $215521817_$1908772127(tree, pid)
        if (pnode && !pnode._propsStaticParsed) {
          $215521817_$1039077650_property(t, pnode)
          pnode._propsStaticParsed = true
        }
      }
    },
    props: {
      type: null, // default to wrong one --- it defaults to element....
      default: {
        props: { name: true },
        render: {
          static (t, pnode) {
            const val = t.compute()
            const key = t.name || t.key
            if (~key.indexOf(':')) {
              const namespace = 'http://www.w3.org/1999/xlink'
              if (val === t || val === void 0) {
                pnode.removeAttributeNS(namespace, key)
              } else {
                pnode.setAttributeNS(namespace, key, val)
              }
            } else {
              if (val === t || val === void 0) {
                pnode.removeAttribute(key)
              } else {
                pnode.setAttribute(key, val)
              }
            }
          },
          state (t, state, type, subs, tree, id, pid) {
            const pnode = $215521817_$1908772127(tree, pid)
            const key = t.name || t.key
            if (~key.indexOf(':')) {
              const namespace = 'http://www.w3.org/1999/xlink'
              if (type === 'remove') {
                if (pnode) {
                  pnode.removeAttributeNS(namespace, key)
                }
              } else {
                let val = t.compute(state, state)
                const type = typeof val
                if (type === 'boolean') { val = val + '' }
                if (val && (type === 'object' && val.inherits) || val === void 0) {
                  if (pnode.getAttributeNS(namespace, key)) {
                    pnode.removeAttribute(namespace, key) // missing
                  }
                } else {
                  if (!val && type === 'object') {
                    if (pnode) pnode.removeAttribute(key)
                  } else if (pnode.getAttributeNS(namespace, key) != val) { // eslint-disable-line
                    pnode.setAttributeNS(namespace, key, val)
                  }
                }
              }
            } else {
              if (type === 'remove') {
                if (pnode) {
                  pnode.removeAttribute(key)
                }
              } else {
                let val = t.compute(state, state)
                const type = typeof val
                if (type === 'boolean') { val = val + '' }
                if ((type === 'object' && (!val || val.inherits)) || val === void 0) {
                  if (pnode.getAttribute(key)) {
                    pnode.removeAttribute(key) // missing
                  }
                } else {
                  if (pnode.getAttribute(key) != val) { // eslint-disable-line
                    pnode.setAttribute(key, val)
                  }
                }
              }
            }
          }
        }
      },
      value: {
        render: {
          static (t, pnode) {
            const val = t.compute() // missing
            pnode.value = val // missing (needs a way on server this does not work)
          },
          state (t, state, type, subs, tree, id, pid) {
            const pnode = $215521817_$1908772127(tree, pid)
            if (type === 'remove') {
              if (pnode) { pnode.value = '' } // missing
            } else {
              const val = t.compute(state, state)
              if (val != pnode.value) { // eslint-disable-line
                pnode.value = val === t ? '' : val
              }
            }
          }
        }
      }
    }
  }
}

;



const $215521817_$2079359529_injectable = {}

var $215521817_$2079359529 = $215521817_$2079359529_injectable

$215521817_$2079359529_injectable.props = {
  class: {
    type: 'group',
    storeContextKey: true,
    subscriptionType: 'shallow',
    render: {
      static (t, node, store) {
        var val = t.compute()
        if (typeof val === 'object') val = ''
        if ($215521817_$1662971556.getKeys(t)) val = $215521817_$2079359529_parseStore(val, store)
        $215521817_$2079359529_setClassName(val, node)
      },
      state (t, s, type, subs, tree, id, pid, store) {
        const node = $215521817_$1908772127(tree, pid)
        if (node) {
          let val = s && $215521817_$61209465_get$(t) ? t.compute(s, s) : t.compute()
          if (typeof val === 'object') val = ''
          if ($215521817_$1662971556.getKeys(t)) val = $215521817_$2079359529_parseStore(val, store)
          $215521817_$2079359529_setClassName(val, node)
        }
      }
    }
  }
}

const $215521817_$2079359529_parseStore = (val, store) => {
  for (let key in store) {
    let fieldval = store[key]
    if (fieldval !== false) {
      if (val) {
        val += ' ' + fieldval
      } else {
        val = fieldval
      }
    }
  }
  return val
}

const $215521817_$2079359529_setClassName = (val, node) => {
  const tron = node.getAttribute('data-style')
  if (val) {
    if (tron) val = val + tron
    node.className = val
  } else if ('className' in node) {
    if (tron) {
      node.className = tron
    } else {
      node.removeAttribute('class')
    }
  }
}

;// these are global properties available


var $215521817_$3689197067 = $215521817_$1662971556.create({
  props: { blockScroll: true },
  isScrolling: false
})

;



const $215521817_$871246922_easingCache = 3
const $215521817_$871246922_easingFraction = 0.95
const $215521817_$871246922_easingAccelerator = 1.5
const $215521817_$871246922_quadraticEasing = 0.5
const $215521817_$871246922_abs = Math.abs

var $215521817_$871246922_scnter = 0

const $215521817_$871246922_bounds = (target, val) => {
  if (val < -target._height) {
    return -target._height
  } else if (val > 0) {
    return 0
  } else {
    return val
  }
}

const $215521817_$871246922_easeOut = (target, distance, original, event, stamp, easingFraction, setVal, prevVal) => {
  if (target._easing) {
    if ($215521817_$3689197067.blockScroll) {
      target._easing = $215521817_$3689197067.isEasing = false
      target._fromEvent = false
      return true
    }
    // maybe stop when 2 ticks are same value
    target._ly = setVal(target, target._ly + distance * (1 - easingFraction), original, event, stamp)
    var d
    if (prevVal === void 0 || (d = prevVal - target._ly) > 0.3 || d < -0.3) {
      prevVal = target._ly
      target._isEasing = global.requestAnimationFrame(() => $215521817_$871246922_easeOut(target, distance * easingFraction, original, event, void 0, easingFraction, setVal, prevVal))
    } else {
      target._easing = $215521817_$3689197067.isEasing = false
      target._fromEvent = false
    }
  }
}

const $215521817_$871246922_setValX = (target, val, original, event, stamp) => {
  val = $215521817_$871246922_bounds(target, val)
  target.style.transform = `translate3d(${val}px, 0, 0)`
  if (!original) {
    original = target
  }
  if (original._ && original._._scrollListener) {
    if (!stamp) {
      original._._scrollListener({ x: val, target: original, scroller: target, state: event.state }, $215521817_$826337949.create())
      $215521817_$826337949.close()
    } else {
      original._._scrollListener({ x: val, target: original, scroller: target, state: event.state }, stamp)
    }
  }
  return val
}

const $215521817_$871246922_setValY = (target, val, original, event, stamp) => {
  val = $215521817_$871246922_bounds(target, val)
  target.style.transform = `translate3d(0, ${val}px, 0)`
  if (!original) {
    original = target
  }
  if (original._ && original._._scrollListener) {
    if (!stamp) {
      original._._scrollListener({ y: val, target: original, scroller: target, state: event.state }, $215521817_$826337949.create())
      $215521817_$826337949.close()
    } else {
      original._._scrollListener({ y: val, target: original, scroller: target, state: event.state }, stamp)
    }
  }
  return val
}

const $215521817_$871246922_touchstart = ({ target, event }, x, y, ch, sh) => {
  global.cancelAnimationFrame(target._isEasing)
  if (ch >= sh) {
    target._block = true
    target.__init = false
    $215521817_$1662971556.set($215521817_$3689197067.isScrolling, false, ++$215521817_$871246922_scnter)
    return true
  }
  target.__init = true
  target._start = y
  target._y = target._ly || 0
  target._easing = $215521817_$3689197067.isEasing = false
  target._prev = [ 1, 0, 0, 0 ]
  target._height = sh - ch
  target._block = ch >= sh
  target._sh = sh
  target._ey = y
  target._ex = x
}

const $215521817_$871246922_touchmove = (event, x, y, stamp, setVal) => {
  const target = event.target
  if (
    target._block ||
    $215521817_$3689197067.blockScroll ||
    $215521817_$871246922_abs(target._ey - y) <= $215521817_$871246922_abs(target._ex - x)
  ) {
    return true
  }
  if (!$215521817_$3689197067.isScrolling.val) $215521817_$1662971556.set($215521817_$3689197067.isScrolling, true, ++$215521817_$871246922_scnter)
  event.prevent = true
  const original = event.original
  const index = target._prev[0]
  target._prev[0]++
  if (target._prev[0] > $215521817_$871246922_easingCache) {
    target._prev[0] = 1
  }
  const val = y - target._start + target._y
  target._prev[index] = val - (target._ly || 0)
  target._ly = setVal(target, val, original, event, stamp)
  target._ey = y
  target._ex = x
}

const $215521817_$871246922_touchend = (event, stamp, setVal) => {
  const target = event.target
  target.__init = false
  $215521817_$1662971556.set($215521817_$3689197067.isScrolling, false, ++$215521817_$871246922_scnter)
  if (!target._prev) return
  const original = event.original
  var delta = 0
  var i = $215521817_$871246922_easingCache
  while (i--) { delta += target._prev[i] || 0 }
  delta = (delta / $215521817_$871246922_easingCache) * $215521817_$871246922_easingAccelerator
  const sing = delta < 0 ? -1 : 1
  var distance = $215521817_$871246922_quadraticEasing * ((delta * delta) * sing)
  if (distance > 750) {
    distance = 750
  }
  target._easing = $215521817_$3689197067.isEasing = true
  $215521817_$871246922_easeOut(target, distance, original, event, stamp, $215521817_$871246922_easingFraction, setVal)
}

const $215521817_$871246922_lookupMode = [1.0, 28.0, 500.0]

const $215521817_$871246922_wheelX = (event, stamp, sh) => {
  if ($215521817_$3689197067.blockScroll) {
    target.__init = false
    $215521817_$1662971556.set($215521817_$3689197067.isScrolling, false, ++$215521817_$871246922_scnter)
    return
  }
  const evt = event.event
  evt.preventDefault()
  if ('deltaX' in evt) {
    if ($215521817_$871246922_abs(evt.deltaX) <= $215521817_$871246922_abs(evt.deltaY)) {
      return
    } else {
      event.prevent = true
    }
    const mode = $215521817_$871246922_lookupMode[evt.deltaMode] || $215521817_$871246922_lookupMode[0]
    event.x = evt.deltaX * mode * -1
  } else {
    event.x = evt.wheelDelta / -3
  }

  const target = event.target
  if (!target.__init) {
    if (!target._ly) { target._ly = 0 }
    if ($215521817_$871246922_touchstart(event, event.y, event.x, event.target.parentNode.clientWidth, sh)) {
      return
    }
  }

  clearTimeout(target._timeout)
  target._timeout = setTimeout(() => {
    if (target.offsetParent !== null) {
      target.__init = false
      $215521817_$1662971556.set($215521817_$3689197067.isScrolling, false, ++$215521817_$871246922_scnter)
    }
  }, 20)
  target._ly = $215521817_$871246922_setValX(target, target._ly + event.x, event.original, event, stamp)
}

const $215521817_$871246922_wheelY = (event, stamp, sh) => {
  if ($215521817_$3689197067.blockScroll) {
    target.__init = false
    $215521817_$1662971556.set($215521817_$3689197067.isScrolling, false, ++$215521817_$871246922_scnter)
    return
  }
  event.prevent = true
  const evt = event.event
  evt.preventDefault()
  if ('deltaY' in evt) {
    if ($215521817_$871246922_abs(evt.deltaX) >= $215521817_$871246922_abs(evt.deltaY)) {
      return
    } else {
      event.prevent = true
      evt.preventDefault()
    }
    const mode = $215521817_$871246922_lookupMode[evt.deltaMode] || $215521817_$871246922_lookupMode[0]
    event.y = evt.deltaY * mode * -1
  } else {
    event.y = evt.wheelDelta / -3
  }
  const target = event.target
  if (!target.__init) {
    if (!target._ly) {
      target._ly = 0
    }
    if ($215521817_$871246922_touchstart(event, event.x, event.y, event.target.parentNode.clientHeight, sh)) {
      return
    }
  }
  clearTimeout(target._timeout)
  target._timeout = setTimeout(() => {
    if (target.offsetParent !== null) {
      target.__init = false
      $215521817_$1662971556.set($215521817_$3689197067.isScrolling, false, ++$215521817_$871246922_scnter)
    }
  }, 20)
  target._ly = $215521817_$871246922_setValY(target, target._ly + event.y, event.original, event, stamp)
}

var $215521817_$871246922 = {
  props: {
    scroll: (t, val) => {
      var fn, target, size, direction

      if (!val) return
      if (typeof val === 'function') {
        fn = val
      } else if (typeof val === 'object') {
        if (val.target) target = val.target
        fn = val.onScroll
        direction = val.direction
        size = val.size
      }

      t.set({ define: { hasScrollY: true } }, false)

      if (fn) {
        t.set({
          define: {
            _scrollListener: fn
          }
        }, false)
      }

      if (!direction) {
        direction = 'y'
      }

      if (!size) {
        size = direction === 'y'
          ? val => val.target.scrollHeight
          : val => val.target.scrollWidth
      }

      if (!target) {
        target = t => t
      }

      t.set({
        define: {
          setScroll (y, t, stamp) {
            const rt = target(t)
            const event = {
              original: t,
              target: rt,
              state: t._s
            }
            global.cancelAnimationFrame(rt._isEasing)
            if (!rt._ly) rt._ly = 0
            if (direction === 'y') {
              rt._sh = size(event)
              rt._height = rt._sh - rt.parentNode.clientHeight
              rt._ly = $215521817_$871246922_setValY(rt, $215521817_$871246922_bounds(rt, -y) - rt._ly, t, event, stamp)
            } else {
              rt._sh = size(event)
              rt._height = rt._sh - rt.parentNode.clientWidth
              rt._ly = $215521817_$871246922_setValX(rt, $215521817_$871246922_bounds(rt, -y) - rt._ly, t, event, stamp)
            }
          },
          easeScroll (y, t, stamp) {
            // if its scrolling from the fingers dont do it
            const rt = target(t)
            const event = {
              original: t,
              target: rt,
              state: t._s
            }
            global.cancelAnimationFrame(rt._isEasing)
            rt._easing = $215521817_$3689197067.isEasing = true
            if (!rt._ly) rt._ly = 0
            if (direction === 'y') {
              rt._sh = size(event)
              rt._height = rt._sh - rt.parentNode.clientHeight
              $215521817_$871246922_easeOut(rt, $215521817_$871246922_bounds(rt, -y) - rt._ly, t, event, stamp, 0.9, $215521817_$871246922_setValY)
            } else {
              rt._sh = size(event)
              rt._height = rt._sh - rt.parentNode.clientWidth
              $215521817_$871246922_easeOut(rt, $215521817_$871246922_bounds(rt, -y) - rt._ly, t, event, stamp, 0.9, $215521817_$871246922_setValX)
            }
          }
        },
        on: {
          touchstart: {
            scroll: direction === 'y' ? (val, stamp) => {
              val.target = target(val.target)
              val.target._fromEvent = true
              $215521817_$871246922_touchstart(val, val.x, val.y, val.target.parentNode.clientHeight, size(val))
            } : (val, stamp) => {
              val.target = target(val.target)
              val.target._fromEvent = true
              $215521817_$871246922_touchstart(val, val.y, val.x, val.target.parentNode.clientWidth, size(val))
            }
          },
          touchmove: {
            scroll: direction === 'y' ? (val, stamp) => {
              val.event.preventDefault()
              val.original = val.target
              val.target = target(val.target)
              $215521817_$871246922_touchmove(val, val.x, val.y, stamp, $215521817_$871246922_setValY)
            } : (val, stamp) => {
              val.event.preventDefault()
              val.original = val.target
              val.target = target(val.target)
              $215521817_$871246922_touchmove(val, val.y, val.x, stamp, $215521817_$871246922_setValX)
            }
          },
          touchend: {
            scroll: direction === 'y' ? (val, stamp) => {
              val.original = val.target
              val.target = target(val.target)
              $215521817_$871246922_touchend(val, stamp, $215521817_$871246922_setValY)
            } : (val, stamp) => {
              val.original = val.target
              val.target = target(val.target)
              $215521817_$871246922_touchend(val, stamp, $215521817_$871246922_setValX)
            }
          },
          wheel: {
            scroll: direction === 'y' ? (val, stamp) => {
              val.original = val.target
              val.target = target(val.target)
              val.target._fromEvent = true
              $215521817_$871246922_wheelY(val, stamp, size(val))
              val.target._fromEvent = false
            } : (val, stamp) => {
              val.original = val.target
              val.target = target(val.target)
              val.target._fromEvent = true
              $215521817_$871246922_wheelX(val, stamp, size(val))
              val.target._fromEvent = false
            }
          }
        }
      }, false)
    }
  }
}

;var $215521817_$3514902010 = node => {
  if (node && node.tagName && node.tagName.toLowerCase() === 'html') { // tmp fix for node.js
    let head
    const children = node.childNodes
    for (let i = 0, len = children.length; i < len; i++) {
      if (children[i].tagName && children[i].tagName.toLowerCase() === 'head') {
        head = children[i]
        break
      }
    }
    if (!head) {
      head = document.createElement('head')
      node.appendChild(head)
    }
    return head
  }
  return node
}

;

const $215521817_$2447655140_parseStyle = (style, target) => {
  for (let rule in style.sheet.cssRules) {
    const cssRule = style.sheet.cssRules[rule]
    if (cssRule.selectorText) {
      let body = cssRule.cssText.match(/.+\{ (.+) \}/)
      let key = cssRule.selectorText.slice(1)
      if (body && body[1]) {
        body = body[1].replace(': ', ':').slice(0, -1)
        if (/:0px/.test(body)) body = body.replace(/:0px/g, ':0')
        target.globalSheet.map[body] = key
        target.map[body] = key
      }
      target.globalSheet.count++
    } else if (cssRule.media) {
      let media = '@media ' + cssRule.conditionText
      if (!target.mediaMap[media]) {
        target.mediaMap[media] = {
          id: ++target.mediaMap.count, count: 0, state: {}
        }
      }
      for (let rule in cssRule.cssRules) {
        if (cssRule.cssRules[rule].selectorText) {
          let body = cssRule.cssRules[rule].cssText.match(/.+\{ (.+) \}/)
          let key = cssRule.cssRules[rule].selectorText.slice(1)
          if (body && body[1]) {
            body = body[1].replace(': ', ':').slice(0, -1)
            if (/:0px/.test(body)) body = body.replace(/:0px/g, ':0')
            target.mediaMap[media][body] = key
          }
        }
      }
    }
  }
}

var $215521817_$2447655140 = class StyleSheet {
  constructor (t, globalSheet) {
    this.map = {}
    this.globalSheet = globalSheet
    this.mediaMap = { count: 0 }
    this.parsed = false
    this.elem = t
    t.stylesheet = this
  }
  parse () {
    var media = ''
    var str = ''
    for (let i in this.map) {
      str += ` .${this.map[i]} {${i};}`
    }
    const mediaMap = this.mediaMap
    for (let key in mediaMap) {
      if (key !== 'count') {
        const mmap = mediaMap[key]
        media += ` ${key} {`
        for (let style in mmap) {
          if (style !== 'count' && style !== 'id') {
            if (style === 'state') {
              for (let id in mmap.state) {
                media += ` .${id} {${mmap.state[id]};}`
              }
            } else {
              media += ` .${mmap[style]} {${style};}`
            }
          }
        }
        media += ' }'
      }
    }
    if (media) str += ' ' + media
    return str + ' '
  }
  exec (node, resolve) {
    if (!this.parsed) {
      var style
      node = $215521817_$3514902010(node)
      if (resolve) {
        const children = node.children
        let i = children.length
        while (i--) {
          if (children[i].getAttribute && children[i].getAttribute('data-style')) {
            style = children[i]
            $215521817_$2447655140_parseStyle(style, this)
            break
          }
        }
      }
      if (!style) {
        style = document.createElement('style')
        style.setAttribute('data-style', true)
        style.innerHTML = this.parse()
        node.appendChild(style)
      }
      this.parsed = style
      return style
    }
  }
  update (rules, map) {
    if (this.parsed) {
      if (!rules) {
        this.parsed.innerHTML = this.parse()
      } else {
        let i = rules.length
        const sheet = this.parsed.sheet
        if (sheet.addRule) {
          while (i--) {
            sheet.addRule('.' + map[rules[i]], rules[i])
          }
        } else {
          while (i--) {
            sheet.insertRule('.' + map[rules[i]] + '{' + rules[i] + '}', i) // fallback for FF
          }
        }
      }
    }
  }
}

;var $215521817_$2244796395 = $2244796395
;// src: http://shouldiprefix.com


const $215521817_$2360589662_prefix = {}

if ($215521817_$2244796395.prefix === 'moz') {
  $215521817_$2360589662_prefix.appearance = 'MozAppearance'
} else if (
  $215521817_$2244796395.prefix === 'webkit' ||
  $215521817_$2244796395.browser === 'ie' ||
  $215521817_$2244796395.browser === 'edge'
) {
  $215521817_$2360589662_prefix.appearance = 'WebkitAppearance'
  $215521817_$2360589662_prefix.clipPath = 'WebkitClipPath'
}

if ($215521817_$2244796395.browser === 'chrome' || $215521817_$2244796395.browser === 'safari') {
  $215521817_$2360589662_prefix.filter = 'WebkitFilter'
}

if ($215521817_$2244796395.platform === 'ios' || $215521817_$2244796395.browser === 'safari') {
  $215521817_$2360589662_prefix.flex = 'WebkitFlex'
} else if ($215521817_$2244796395.browser === 'ie') {
  $215521817_$2360589662_prefix.flex = 'msFlex'
  if ($215521817_$2244796395.version === 10) {
    $215521817_$2360589662_prefix.order = 'msFlexOrder'
  }
}

if (
  ($215521817_$2244796395.browser === 'chrome' && $215521817_$2244796395.version < 36) ||
  ($215521817_$2244796395.browser === 'chrome' && $215521817_$2244796395.version < 36) ||
  ($215521817_$2244796395.browser === 'safari' && $215521817_$2244796395.version > 5.1) ||
  ($215521817_$2244796395.browser === 'safari' && $215521817_$2244796395.device === 'tv') || // webOS
  ($215521817_$2244796395.platform === 'ios' && $215521817_$2244796395.version < 9.2) ||
  ($215521817_$2244796395.platform === 'android' && $215521817_$2244796395.version <= 4.5)// 4.4.4
) {
  $215521817_$2360589662_prefix.transformOrigin = 'WebkitTransformOrigin'
  $215521817_$2360589662_prefix.transform = 'WebkitTransform'
  $215521817_$2360589662_prefix.transition = 'WebkitTransition'
}

if ($215521817_$2244796395.browser === 'firefox' && $215521817_$2244796395.version < 48) {
  $215521817_$2360589662_prefix.transformOrigin = 'MozTransformOrigin'
  $215521817_$2360589662_prefix.transform = 'MozTransform'
  $215521817_$2360589662_prefix.transition = 'MozTransition'
}

var $215521817_$2360589662 = $215521817_$2360589662_prefix

;




const $215521817_$1567623425_reversePrefix = {}
for (let i in $215521817_$2360589662) {
  $215521817_$1567623425_reversePrefix[$215521817_$2360589662[i]] = i
}
var $215521817_$1567623425_inProgress

const $215521817_$1567623425_globalSheet = {
  map: {},
  count: 0
}

const $215521817_$1567623425_isNotEmpty = store => {
  for (let i in store) return true
}

const $215521817_$1567623425_toDash = key => key.replace(/([A-Z])([a-z]|$)/g, '-$1$2').toLowerCase()

// const addKey = (t, key) => {

const $215521817_$1567623425_uid = (num, map) => {
  const div = num / 26 | 0
  var str = String.fromCharCode(97 + num % 26)
  if (div) {
    if (div / 26 | 0) {
      str = str + $215521817_$1567623425_uid(div)
    } else {
      str = str + String.fromCharCode(97 + div % 26)
    }
  }
  return str
}

const $215521817_$1567623425_setStyle = (t, store, elem, pid) => {
  var className = ''
  const style = elem.stylesheet || new $215521817_$2447655140(elem, $215521817_$1567623425_globalSheet)
  const map = style.map
  // const mediaMap = style.mediaMap
  const newStyle = []
  // var mc = 0
  // console.log('DOOO', store)
  let keys = store.keys()
  let i = keys.length
  while (i--) {
    let key = keys[i]
    let val = $215521817_$1662971556.get(store, key)
  // for (let key in store) {
    if (key.indexOf('@media') === 0) {
      // if (!mediaMap[key]) mediaMap[key] = { id: ++mediaMap.count, count: 0, state: {} }
      // const mmap = mediaMap[key]
      // const parsed = val
      // for (let style in parsed) {
      //   const value = parsed[style]
      //   if (typeof value === 'object' && 'inherits' in value) {
      //     const id = uid(++mc) + ((pid * 33 ^ puid(value)) >>> 0)
      //     mmap.state[id] = toDash(style) + ':' + t.get([key, reversePrefix[style] || style]).compute(value, value)
      //     className += ` ${id}`
      //   } else {
      //     const s = toDash(style) + ':' + value
      //     if (!mmap[s]) {
      //       mmap[s] = uid(mmap.count++) + mmap.id
      //     }
      //     className += ` ${mmap[s]}`
      //   }
      //   // this also has to be resolved of course....
      // }
    } else {
      if (val === '0px') val = 0
      let s = $215521817_$1567623425_toDash(key) + ':' + val
      if (!map[s]) {
        let id
        id = $215521817_$1567623425_uid($215521817_$1567623425_globalSheet.count++, $215521817_$1567623425_globalSheet.map)
        if (!$215521817_$1567623425_globalSheet.map[s]) $215521817_$1567623425_globalSheet.map[s] = id
        const rule = $215521817_$1567623425_globalSheet.map[s]
        map[s] = rule
        newStyle.push(s)
      }
      className += ' ' + map[s]
    }
  }
  if (style.parsed) {
    if (newStyle.length) style.update(newStyle, map)
  } else if (!$215521817_$1567623425_inProgress && 'node' in elem) {
    style.exec(elem.node)
  }
  return className
}

const $215521817_$1567623425_s = (t, node) => {
  const store = t
  const elem = $215521817_$1567623425_inProgress || t.root()
  if (!$215521817_$61209465_getClass(t._p)) {
    if ($215521817_$1567623425_isNotEmpty(store)) {
      if (t._p.get('tag') === 'svg') {
        node.setAttribute('class', $215521817_$1567623425_setStyle(t, store, elem))
      } else {
        node.className = $215521817_$1567623425_setStyle(t, store, elem)
      }
    }
  } else {
    const style = node.getAttribute('data-style')
    if ($215521817_$1567623425_isNotEmpty(store)) {
      const newStyle = $215521817_$1567623425_setStyle(t, store, elem)
      if (newStyle) {
        if (style) {
          if (newStyle !== style) {
            if (t._p.get('tag') === 'svg') {
              node.setAttribute('class', node.getAttribute('class').replace(style, newStyle))
            } else {
              node.className = node.className.replace(style, newStyle)
            }
          }
        } else {
          if (t._p.get('tag') === 'svg') {
            node.setAttribute('class', node.getAttribute('class') + newStyle)
          } else {
            node.className = (node.className || '') + newStyle
          }
        }
        node.setAttribute('data-style', newStyle)
        return
      }
    }
    if (style) node.removeAttribute('data-style')
  }
}

// const sheet = {
//   type: 'group',
//   render: {
//     state (t, s, type, subs, tree, id, pid, store) {
//       const node = parent(tree, pid)
//       if (node) t.groupRender.static(t, node, store, pid)
//     },
//     static (t, node, store, pid) { // state gets passed by render.state
//       const elem = inProgress || t.root()
//       if (!getClass(t._p._p)) {
//         if (isNotEmpty(store)) {
//           if (t._p._p.get('tag') === 'svg') {
//             node.setAttribute('class', setStyle(t, store, elem, pid))
//           } else {
//             node.className = setStyle(t, store, elem, pid)
//           }
//         }
//       } else {
//         const style = node.getAttribute('data-style')
//         if (isNotEmpty(store)) {
//           const newStyle = t._cachedNode = setStyle(t, store, elem, pid)
//           if (newStyle) {
//             if (style) {
//               if (newStyle !== style) {
//                 if (t._p._p.get('tag') === 'svg') {
//                   node.setAttribute('class', node.getAttribute('class').replace(style, newStyle))
//                 } else {
//                   node.className = node.className.replace(style, newStyle)
//                 }
//               }
//             } else {
//               if (t._p._p.get('tag') === 'svg') {
//                 node.setAttribute('class', node.getAttribute('class') + newStyle)
//               } else {
//                 node.className = (node.className || '') + newStyle
//               }
//             }
//             node.setAttribute('data-style', newStyle)
//             return
//           }
//         }
//         if (style) node.removeAttribute('data-style')
//       }
//     }
//   },
//   props: {
//     default: {
//       render: {
//         static (t, node, store) {
//           const val = t.compute()
//           const key = t.key
//           if (val === void 0) {
//             property(t, node, store[key] = {})
//           } else {
//             store[key] = prefixVal[key] ? prefixVal[key](val) : val
//           }
//         },
//         state (t, s, type, subs, tree, id, pid, order) {
//           const p = t._p
//           const store = t.getStore(tree, pid + p.key)
//           if (!s || s.val === null || type === 'remove') {
//             if (t.key in store) {
//               delete store[t.key]
//             }
//           } else {
//             const val = t.compute(s, s)
//             if (val !== void 0 && typeof val !== 'object') {
//               store[t.key] = val
//               p.render.state(p, s, type, subs, tree, id, pid, order, store)
//             } else {
//               property(t, false, store[t.key] || (store[t.key] = {}))
//             }
//           }
//         }
//       },
//       props: {
//         default: {
//           render: {
//             static (t, node, store) {
//               const key = t.key
//               store[prefix[key] || key] = prefixVal[key]
//                 ? prefixVal[key](t.compute())
//                 : t.compute()
//             },
//             state (t, s, type, subs, tree, id, pid, order) {
//               const p = t._p
//               const path = [ t.key, p.key ]
//               const pp = p._p
//               const pstore = p.getStore.call(t, tree, pid + pp.key)
//               var store = pstore
//               var i = path.length - 1
//               for (; i >= 1; i--) {
//                 store = store[path[i]]
//               }
//               var key = path[i]
//               if (key in prefix) {
//                 key = prefix[key]
//               }
//               if (!s || s.val === null || type === 'remove') {
//                 if (key in store) {
//                   delete store[key]
//                 }
//               } else {
//                 store[key] = s
//               }
//               pp.render.state(pp, s, type, subs, tree, id, pid, order, pstore)
//             }
//           }
//         }
//       }
//     }
//   }
// }

const $215521817_$1567623425_clear = () => {
  $215521817_$1567623425_globalSheet.count = 0
  $215521817_$1567623425_globalSheet.map = {}
}

const $215521817_$1567623425_done = (elem, resolve, create) => {
  if (create) elem.stylesheet = new $215521817_$2447655140(elem, $215521817_$1567623425_globalSheet)
  if (elem.stylesheet) elem.stylesheet.exec(elem.node, resolve)
  $215521817_$1567623425_inProgress = void 0
}

const $215521817_$1567623425_render = t => { $215521817_$1567623425_inProgress = t }



var $215521817_$1567623425_$ALL$ = {
  clear: $215521817_$1567623425_clear,
  render: $215521817_$1567623425_render,
  done: $215521817_$1567623425_done,
  s: $215521817_$1567623425_s
}
;



const $215521817_$2061619571_transform = $215521817_$2360589662.transform || 'transform'

const $215521817_$2061619571_setTransform = (val, store, node) => {
  if ('x' in store || 'y' in store || 'z' in store) {
    const translate3d = `translate3d(${(store.x
      ? $215521817_$2061619571_unit(store.x, 'px')
      : '0px')}, ${(store.y
        ? $215521817_$2061619571_unit(store.y, 'px')
        : '0px')}, ${(store.z || '0px')})`
    val = val ? (val + ' ' + translate3d) : translate3d
  }

  if ('scale' in store) {
    const scale = `scale(${store.scale})`
    val = val ? (val + ' ' + scale) : scale
  }

  if ('skew' in store) {
    const skew = `skew(${store.skew})`
    val = val ? (val + ' ' + skew) : skew
  }

  if ('rotate' in store) {
    const rotate = `rotate(${store.rotate}deg)`
    val = val ? (val + ' ' + rotate) : rotate
  }

  node.style[$215521817_$2061619571_transform] = val
}

const $215521817_$2061619571_unit = (val, unit) => typeof val === 'number' && !isNaN(val)
  ? val + unit
  : val

var $215521817_$2061619571 = {
  type: 'group',
  render: {
    static (t, node, store) {
      var val = t.compute()
      if (!val || typeof val !== 'string') { val = '' }
      $215521817_$2061619571_setTransform(val, store, node)
    },
    state (t, s, type, subs, tree, id, pid, store) {
      var val = s && $215521817_$61209465_get$(t) ? t.compute(s, s) : t.compute()
      if (!val || typeof val !== 'string') { val = '' }
      const node = $215521817_$1908772127(tree, pid)
      if (node) { $215521817_$2061619571_setTransform(val, store, node) }
    }
  }
}

;// src: http://shouldiprefix.com
// import ua from 'vigour-ua/navigator'


const $215521817_$3236326699_prefix = {}

// if (ua.browser === 'safari' || ua.platform === 'ios') {
//   prefix.display = val => val === 'flex' ? '-webkit-flex' : val
// }

if ($215521817_$2360589662.transform === 'webkitTransform') {
  // prefix.transition = val => val.replace(/\btransform\b/, 'webkit-transform')
}

var $215521817_$3236326699 = $215521817_$3236326699_prefix

;



const $215521817_$1222914797_stripPx = val => {
  if (
    typeof val === 'string' &&
    /(px)$/.test(val)
  ) {
    val = val.slice(0, -2) | 0
  }
  return val
}

const $215521817_$1222914797_inlineStyle = {
  type: 'property',
  props: { name: true },
  render: {
    static (target, node) {
      if (!node.style) node.style = {}
      node.style[target.name || target.key] = $215521817_$1222914797_stripPx(target.compute())
      node.requestPaint()
    },
    state (t, s, type, subs, tree, id, pid) {
      if (type !== 'remove') {
        const node = $215521817_$1908772127(tree, pid)
        if (!node.style) node.style = {}
        var val = $215521817_$1222914797_stripPx(s ? $215521817_$1662971556.compute(t, s, s, tree) : $215521817_$1662971556.compute(t))
        node.style[t.name || (t.key !== 'default' ? t.key : s.key)] = val
        node.requestPaint()
      }
    }
  }
}

const $215521817_$1222914797_canvasStyle = {
  type: 'property',
  render: {
    static (t, node) {
      node[t.key] = t.compute()
    },
    state (t, s, type, subs, tree, id, pid) {
      if (type !== 'remove') {
        $215521817_$1908772127(tree, pid)[t.key] = s.compute()
      }
    }
  }
}

const $215521817_$1222914797_style = {
  type: 'property',
  types: {
    canvasStyle: $215521817_$1222914797_canvasStyle
  },
  render: {
    state (t, s, type, subs, tree, id, pid) {
      if (type !== 'remove') {
        $215521817_$1039077650_property(t, $215521817_$1908772127(tree, pid))
      }
    },
    static: $215521817_$1039077650_property
  },
  props: {
    default: $215521817_$1222914797_inlineStyle,
    top: {
      type: 'property',
      render: {
        state (t, s, type, subs, tree, id, pid) {
          if (type !== 'remove') {
            $215521817_$1908772127(tree, pid).top = $215521817_$1222914797_stripPx(s.compute())
          }
        },
        static (t, node) {
          node.top = $215521817_$1222914797_stripPx(t.compute())
        }
      }
    },
    left: {
      type: 'property',
      render: {
        state (t, s, type, subs, tree, id, pid) {
          if (type !== 'remove') {
            $215521817_$1908772127(tree, pid).left = $215521817_$1222914797_stripPx(s.compute())
          }
        },
        static (t, node) {
          node.left = $215521817_$1222914797_stripPx(t.compute())
        }
      }
    },
    bottom: {
      type: 'property',
      render: {
        state (t, s, type, subs, tree, id, pid) {
          if (type !== 'remove') {
            $215521817_$1908772127(tree, pid).bottom = $215521817_$1222914797_stripPx(s.compute())
          }
        },
        static (t, node) {
          node.bottom = $215521817_$1222914797_stripPx(t.compute())
        }
      }
    },
    right: {
      type: 'property',
      render: {
        state (t, s, type, subs, tree, id, pid) {
          if (type !== 'remove') {
            $215521817_$1908772127(tree, pid).right = $215521817_$1222914797_stripPx(s.compute())
          }
        },
        static (t, node) {
          node.right = $215521817_$1222914797_stripPx(t.compute())
        }
      }
    },
    width: {
      type: 'property',
      render: {
        state (t, s, type, subs, tree, id, pid) {
          if (type !== 'remove') {
            $215521817_$1908772127(tree, pid).width = $215521817_$1222914797_stripPx(s.compute())
          }
        },
        static (t, node) {
          node.width = $215521817_$1222914797_stripPx(t.compute())
        }
      }
    },
    maxWidth: {
      type: 'property',
      render: {
        state (t, s, type, subs, tree, id, pid) {
          if (type !== 'remove') {
            $215521817_$1908772127(tree, pid).maxWidth = $215521817_$1222914797_stripPx(s.compute())
          }
        },
        static (t, node) {
          node.maxWidth = $215521817_$1222914797_stripPx(t.compute())
        }
      }
    },
    maxHeight: {
      type: 'property',
      render: {
        state (t, s, type, subs, tree, id, pid) {
          if (type !== 'remove') {
            $215521817_$1908772127(tree, pid).maxHeight = $215521817_$1222914797_stripPx(s.compute())
          }
        },
        static (t, node) {
          node.maxHeight = $215521817_$1222914797_stripPx(t.compute())
        }
      }
    },
    minWidth: {
      type: 'property',
      render: {
        state (t, s, type, subs, tree, id, pid) {
          if (type !== 'remove') {
            $215521817_$1908772127(tree, pid).minWidth = $215521817_$1222914797_stripPx(s.compute())
          }
        },
        static (t, node) {
          node.minWidth = $215521817_$1222914797_stripPx(t.compute())
        }
      }
    },
    minHeight: {
      type: 'property',
      render: {
        state (t, s, type, subs, tree, id, pid) {
          if (type !== 'remove') {
            $215521817_$1908772127(tree, pid).minHeight = $215521817_$1222914797_stripPx(s.compute())
          }
        },
        static (t, node) {
          node.minHeight = $215521817_$1222914797_stripPx(t.compute())
        }
      }
    },
    marginLeft: {
      type: 'property',
      render: {
        state (t, s, type, subs, tree, id, pid) {
          if (type !== 'remove') {
            $215521817_$1908772127(tree, pid).marginLeft = $215521817_$1222914797_stripPx(s.compute())
          }
        },
        static (t, node) {
          node.marginLeft = $215521817_$1222914797_stripPx(t.compute())
        }
      }
    },
    marginBottom: {
      type: 'property',
      render: {
        state (t, s, type, subs, tree, id, pid) {
          if (type !== 'remove') {
            $215521817_$1908772127(tree, pid).marginBottom = $215521817_$1222914797_stripPx(s.compute())
          }
        },
        static (t, node) {
          node.marginBottom = $215521817_$1222914797_stripPx(t.compute())
        }
      }
    },
    marginRight: {
      type: 'property',
      render: {
        state (t, s, type, subs, tree, id, pid) {
          if (type !== 'remove') {
            $215521817_$1908772127(tree, pid).marginRight = $215521817_$1222914797_stripPx(s.compute())
          }
        },
        static (t, node) {
          node.marginRight = $215521817_$1222914797_stripPx(t.compute())
        }
      }
    },
    paddingTop: {
      type: 'property',
      render: {
        state (t, s, type, subs, tree, id, pid) {
          if (type !== 'remove') {
            const pnode = $215521817_$1908772127(tree, pid)
            pnode.paddingTop = $215521817_$1222914797_stripPx(s.compute())
            if (pnode.text) pnode.requestPaint()
          }
        },
        static (t, node) {
          node.paddingTop = $215521817_$1222914797_stripPx(t.compute())
          if (node.text) {
            node.requestPaint()
          }
        }
      }
    },
    paddingLeft: {
      type: 'property',
      render: {
        state (t, s, type, subs, tree, id, pid) {
          if (type !== 'remove') {
            const pnode = $215521817_$1908772127(tree, pid)
            if (!pnode.style) pnode.style = {}
            pnode.paddingLeft = $215521817_$1222914797_stripPx(s.compute())
            if (pnode.text) pnode.requestPaint()
          }
        },
        static (t, node) {
          if (!node.style) node.style = {}
          node.paddingLeft = $215521817_$1222914797_stripPx(t.compute())
          if (node.text) {
            node.requestPaint()
          }
        }
      }
    },
    paddingBottom: {
      type: 'property',
      render: {
        state (t, s, type, subs, tree, id, pid) {
          if (type !== 'remove') {
            const pnode = $215521817_$1908772127(tree, pid)
            if (!pnode.style) pnode.style = {}
            pnode.paddingBottom = pnode.style.paddingBottom = $215521817_$1222914797_stripPx(s.compute())
            if (pnode.text) pnode.requestPaint()
          }
        },
        static (t, node) {
          node.paddingBottom = $215521817_$1222914797_stripPx(t.compute())
          if (node.text) {
            node.requestPaint()
          }
        }
      }
    },
    overflow: {
      type: 'property',
      render: {
        state (t, s, type, subs, tree, id, pid) {
          if (type !== 'remove') {
            const pnode = $215521817_$1908772127(tree, pid)
            const val = s.compute()
            // true, false
            // scrollable
            // scrollableX
            // scrollableY
            if (val === 'hidden') {
              pnode.overflow = false
            } else {
              pnode.overflow = true
            }
          }
        },
        static (t, node) {
          const val = t.compute()
          if (val === 'hidden') {
            node.overflow = false
          } else {
            node.overflow = true
          }
        }
      }
    },
    paddingRight: {
      type: 'property',
      render: {
        state (t, s, type, subs, tree, id, pid) {
          if (type !== 'remove') {
            const pnode = $215521817_$1908772127(tree, pid)
            pnode.paddingRight = $215521817_$1222914797_stripPx(s.compute())
            if (pnode.text) pnode.requestPaint()
          }
        },
        static (t, node) {
          node.paddingRight = $215521817_$1222914797_stripPx(t.compute())
          if (node.text) {
            node.requestPaint()
          }
        }
      }
    },
    height: {
      type: 'property',
      render: {
        state (t, s, type, subs, tree, id, pid) {
          if (type !== 'remove') {
            const pnode = $215521817_$1908772127(tree, pid)
            pnode.height = pnode._height = $215521817_$1222914797_stripPx(s.compute())
          }
        },
        static (t, node) {
          node.height = node._height = $215521817_$1222914797_stripPx(t.compute())
        }
      }
    },
    position: {
      type: 'property',
      render: {
        state (t, s, type, subs, tree, id, pid) {
          if (type !== 'remove') {
            const pnode = $215521817_$1908772127(tree, pid)
            const val = s.compute()
            pnode.position = val === 'absolute' ? 'relative' : val
          }
        },
        static (t, node) {
          const val = t.compute()
          node.position = val === 'absolute' ? 'relative' : val
        }
      }
    },
    transform: {
      type: 'struct',
      props: {
        x: (t, val) => {
          t.parent().set({ left: val })
        },
        y: (t, val) => {
          t.parent().set({ top: val })
        }
      }
    },
    backgroundColor: (t, val) => {
      t.set({
        background: val
      })
    },
    padding: (t, val) => {
      t.set({
        paddingLeft: val,
        paddingRight: val,
        paddingTop: val,
        paddingBottom: val
      })
    },
    margin: (t, val) => {
      t.set({
        marginLeft: val,
        marginRight: val,
        marginTop: val,
        marginBottom: val
      })
    },
    backgroundImage: (t, val) => {
      const image = val.match(/url\((.*?)\)/)
      if (image) {
        t.set({ image: image[1] })
      }
    },
    sheet: (t, val) => t.parent().set({ sheet: val }),
    opacity: { type: 'canvasStyle' },
    flexDirection: { type: 'canvasStyle' },
    flexGrow: { type: 'canvasStyle' },
    flexWrap: { type: 'canvasStyle' },
    flexShrink: { type: 'canvasStyle' },
    flexBasis: { type: 'canvasStyle' },
    justifyContent: { type: 'canvasStyle' },
    alignItems: { type: 'canvasStyle' },
    alignContent: { type: 'canvasStyle' },
    alignSelf: { type: 'canvasStyle' },
    display: { type: 'canvasStyle' },
    cursor: { type: 'canvasStyle' }
  }
}

var $215521817_$1222914797 = {
  types: { inlineStyle: $215521817_$1222914797_inlineStyle, style: $215521817_$1222914797_style },
  props: {
    style: { type: 'style' },
    sheet: { type: 'style' }
  }
}

;








const $215521817_$2721196033_isNidium = global.__nidium__

var $215521817_$2721196033_module

if ($215521817_$2721196033_isNidium) {
  $215521817_$2721196033_module = $215521817_$1222914797
} else {
  const inlineStyle = {
    type: 'property',
    props: { name: true },
    render: {
      static (target, node) {
        node.style[target.name || target.key] = target.compute()
      },
      state (t, s, type, subs, tree, id, pid) {
        if (type !== 'remove') {
          const node = $215521817_$1908772127(tree, pid)
          node.style[t.name || (t.key !== 'default' ? t.key : s.key)] = s
        ? $215521817_$1662971556.compute(t, s, s, tree)
        : $215521817_$1662971556.compute(t)
        }
      }
    }
  }

  const prefixInlineStyle = {
    type: 'inlineStyle',
    render: {
      static (target, node) {
        const field = target.name || target.key
        node.style[field] = $215521817_$3236326699[field](target.compute())
      },
      state (t, s, type, subs, tree, id, pid) {
        if (type !== 'remove') {
          const node = $215521817_$1908772127(tree, pid)
          const field = t.name || (t.key !== 'default' ? t.key : s.key)
          node.style[field] = $215521817_$3236326699[field](s ? t.compute(s, s) : t.compute())
        }
      }
    }
  }

  const style = {
    type: 'property',
    render: {
      static: $215521817_$1039077650_property,
      state (t, s, type, subs, tree, id, pid) {
        if (type !== 'remove') {
          const pnode = $215521817_$1908772127(tree, pid)
          if (!pnode._styleStaticParsed) {
            $215521817_$1039077650_property(t, pnode)
            pnode._styleStaticParsed = true
          }
        }
      }
    },
    props: {
      transform: $215521817_$2061619571,
      inlineStyle,
      prefixInlineStyle,
      sheet: (t, val) => {
        t.parent().set({ sheet: val })
      }
    },
    inject: t => {
      const inlineStyle = t.props.inlineStyle
      const prefixInlineStyle = t.props.prefixInlineStyle
      const props = {
        default (t, val, key, stamp) {
          if (key in $215521817_$2360589662) {
            key = $215521817_$2360589662[key]
          }
          if (val && val.$ || t.get([key, '$'])) {
            if ($215521817_$3236326699[key]) {
              return prefixInlineStyle(t, val, key, stamp)
            } else {
              return inlineStyle(t, val, key, stamp)
            }
          } else {
            $215521817_$1662971556.set(t.parent(), { sheet: { [key]: val } })
          }
        }
      }
      $215521817_$1662971556.set(t, { props })
    }
  }

  $215521817_$2721196033_module = {
    types: { inlineStyle, style },
    props: {
      style: { type: 'style' },
      sheet: {
        type: 'property',
        props: {
          default: {type: 'struct'}
        },
        render: {
          state: () => {},
          static: (t, node) => {
            $215521817_$1567623425_s(t, node)
          }
        }
      }
    }
  }
}

var $215521817_$2721196033 = $215521817_$2721196033_module

;

const $215521817_$607912786_injectable = {}

var $215521817_$607912786 = $215521817_$607912786_injectable

$215521817_$607912786_injectable.props = {
  isWidget: {
    type: 'property',
    subscriptionType: 'switch',
    $: true,
    render: {
      state (target, s, type, subs, tree, id, pid) {
        if (type === 'new') {
          $215521817_$834129491.push(target.parent(), pid, tree)
        }
      }
    }
  }
}

;var $215521817_$1876423860 = (e, data) => {
  const touch = e.changedTouches
  const ev = touch ? touch[0] : e
  if (data.x !== void 0) {
    data.prevX = data.x
  }
  if (data.y !== void 0) {
    data.prevY = data.y
  }
  if (ev.clientX !== void 0) {
    data.x = ev.clientX
  }
  if (ev.clientY !== void 0) {
    data.y = ev.clientY
  }
  data.event = e
  return data
}

;var $215521817_$4038664887 = data => {
  var target = data.target
  var state = target._s
  if (state) {
    const resolved = state.applyContext(target._sc)
    if (resolved) {
      target._s = state = resolved
      target._sc = state.storeContext()
    } else if (resolved === null) {
      target._s = null
      delete target._sc
      state = null
    }
    data.state = state
  }
}

;



const $215521817_$1472074048_emitter = (t, key) => t.emitters && t.emitters[key] ||
  t.inherits && $215521817_$1472074048_emitter(t.inherits, key)

var $215521817_$1472074048 = (key, e) => {
  var t = e.target
  var stamp
  do {
    let elem = t._
    if (elem) {
      let listener = $215521817_$1472074048_emitter(elem, key)
      if (listener) {
        if (!stamp) stamp = $215521817_$826337949.create()
        let data = { target: t }
        $215521817_$4038664887(data)
        elem.emit(key, $215521817_$1876423860(e, data), stamp)
        if (data.prevent) {
          break
        }
      }
    }
  } while ((t = t.parentNode))
  if (stamp) $215521817_$826337949.close()
}

; // again scope it differently this is bit dirty

// just use hasTouch
const $215521817_$2280123504_touch = typeof window !== 'undefined' && ((('ontouchstart' in global) ||
  global.DocumentTouch &&
  document instanceof global.DocumentTouch) ||
  navigator.msMaxTouchPoints)

// super unreliable check for chrome emulator for development (on mac only)
// const isChromeEmulator = touch &&
//   navigator.vendor === 'Google Inc.' &&
//   navigator.platform === 'MacIntel'

if ($215521817_$2244796395.platform === 'ios' && $215521817_$2280123504_touch) {
  document.documentElement.style.cursor = 'pointer' // ios test...
  document.body.style.cursor = 'pointer'
}

var $215521817_$2280123504 = $215521817_$2280123504_listen

function $215521817_$2280123504_listen () {
  const l = arguments.length
  const a = []
  for (let i = 0; i < l; i++) {
    let key = arguments[i]
    let listener = arguments[++i]
    $215521817_$2280123504_addEventListener(
      key,
      listener,
      key === 'focus' ||
      key === 'scroll' ||
      key === 'blur' ||
      key === 'mouseenter'
    )
    a.push(key, listener)
  }
  return () => {
    for (let i = 0; i < l; i++) { // remove listeners test!
      document.removeEventListener(a[i], a[++i])
    }
  }
}

const $215521817_$2280123504_addEventListener = function addEventListener (key, listener, capture) {
  document.addEventListener(key, listener, capture)
}
// : function addEventListener (key, listener, capture) { // chrome emulator tests
//   const touchEvent = key.indexOf('mouse') === -1
//   if (touchEvent) { document.addEventListener(key, listener, capture) }
// }

;
var $215521817_$2852793488 = $215521817_$2280123504

;



// import { property } from '../render/static'

const $215521817_$985981857_emitterProperty = $215521817_$1662971556.struct.props.on.struct.props.default
const $215521817_$985981857_cache = {}
const $215521817_$985981857_injectable = {}

const $215521817_$985981857_isTouch = typeof window !== 'undefined' && (
  ('ontouchstart' in global ||
    global.DocumentTouch &&
    document instanceof global.DocumentTouch) ||
  navigator.msMaxTouchPoints ||
  false)

// const clear = () => { block = null }
// const blockMouse = () => {
//   if (block) clearTimeout(block)
//   block = setTimeout(clear, 300)
// }
// var block
var $215521817_$985981857_blockClick

var $215521817_$985981857 = $215521817_$985981857_injectable

const $215521817_$985981857_isNidium = global.__nidium__

if ($215521817_$985981857_isNidium) {
  // make seperate file
} else {
  $215521817_$985981857_injectable.on = {
    props: {
      error: {},
      remove: {},
      default: (t, val, key) => {
        if (!$215521817_$985981857_cache[key]) {
          $215521817_$985981857_cache[key] = true
          $215521817_$2852793488(key, e => $215521817_$1472074048(key, e))
        }
        t._p.set({ hasEvents: true }, false)
        $215521817_$985981857_emitterProperty(t, val, key)
      },
      move: (t, val) => {
        t.set({
          mousemove: val,
          touchmove: val
        })
      },
      click: (t, val, key) => {
        if (!$215521817_$985981857_cache[key]) {
          $215521817_$985981857_cache[key] = true
          $215521817_$2852793488(key, e => {
            const d = Date.now() - $215521817_$985981857_blockClick
            return d < 500 && $215521817_$1472074048(key, e)
          })
        }
        t._p.set({ hasEvents: true }, false)
        $215521817_$985981857_emitterProperty(t, val, key)
      },
      down: (t, val, key) => {
        if (!$215521817_$985981857_cache[key]) {
          $215521817_$985981857_cache[key] = true
          if (!$215521817_$985981857_isTouch) {
            $215521817_$2852793488('mousedown', e => {
              $215521817_$985981857_blockClick = Date.now()
            // if (!block) delegate(key, e)
              $215521817_$1472074048(key, e)
            })
          } else {
            $215521817_$2852793488('touchstart', e => {
              $215521817_$985981857_blockClick = Date.now()
            // blockMouse()
              $215521817_$1472074048(key, e)
            })
          }
        }
        t._p.set({ hasEvents: true }, false)
        $215521817_$985981857_emitterProperty(t, val, key)
      }
    // up: (t, val, key) => {
    //   if (!cache[key]) {
    //     cache[key] = true
    //     listen('mouseup', e => {
    //       delegate(key, e)
    //       // !block && delegate(key, e)
    //     })
    //     listen('touchend', e => {
    //       // blockMouse()
    //       delegate(key, e)
    //     })
    //   }
    //   t._p.set({ hasEvents: true }, false)
    //   emitterProperty(t, val, key)
    // }
    }
  }

  if ($215521817_$985981857_isTouch) {
    $215521817_$985981857_injectable.on.props.move = (t, val) => t.set({ touchmove: val })
  // injectable.on.props.down = (t, val) => t.set({ touchstart: val })
    $215521817_$985981857_injectable.on.props.up = (t, val) => t.set({ touchend: val })
  } else {
    $215521817_$985981857_injectable.on.props.move = (t, val) => t.set({ mousemove: val })
  // injectable.on.props.down = (t, val) => t.set({ mousedown: val })
    $215521817_$985981857_injectable.on.props.up = (t, val) => t.set({ mouseup: val })
  }

  $215521817_$985981857_injectable.props = {
    hasEvents: {
      type: 'property',
      subscriptionType: 'switch',
      forceSubscriptionMethod: 's',
      $: true,
      render: {
        state (target, s, type, subs, tree, id, pid) {
          const node = $215521817_$1908772127(tree, pid)
          if (node) {
            if (s) {
              node._sc = s.storeContext()
              node._s = s
            }
            if (!('_' in node)) {
              node._ = target.parent()
            }
          }
        }
      }
    }
  }
}

;

const $215521817_$3443299464_emitterProperty = $215521817_$1662971556.struct.props.on.struct.props.default

const $215521817_$3443299464_props = {
  tab: [ 9, 'Tab', 'U+0009' ],
  enter: [ 13, 'Enter' ],
  escape: [ 27, 'Escape', 'Cancel', 'U+001B' ],
  space: [ 32, 'Space', 'U+0020' ],
  arrowleft: [ 37, 'ArrowLeft', 'Left' ],
  arrowup: [ 38, 'ArrowUp', 'Up' ],
  arrowright: [ 39, 'ArrowRight', 'Right' ],
  arrowdown: [ 40, 'ArrowDown', 'Down' ],
  back: [ 8, 461, 10009, 'XF86Back', 'Backspace' ],
  select: [ 'Select' ]
}

for (let key in $215521817_$3443299464_props) {
  const ids = new RegExp(`(^${$215521817_$3443299464_props[key].join('$|^')}$)`)
  $215521817_$3443299464_props[key] = (t, val) => {
    t.set({
      keydown: {
        [key] (e, stamp, elem) {
          if (
            ids.test(e.event.keyCode) ||
            ids.test(e.event.key) ||
            ids.test(e.event.keyIdentifier)
          ) {
            elem.emit(key, e, stamp)
          }
        }
      }
    })
    $215521817_$3443299464_emitterProperty(t, val, key)
  }
}

var $215521817_$3443299464 = { on: { props: $215521817_$3443299464_props } }

;



var $215521817_$2380829049 = $215521817_$1662971556.create({
  type: 'property',
  inject: [
    $215521817_$2365388884,
    $215521817_$4133454486
  ],
  instances: false,
  props: {
    storeContextKey: true,
    default: 'self'
  },
  on: {
    data: (val, stamp, t) => {
      if (t._p && t._p._cachedNode === void 0) {
        t._p._cachedNode = null
      }
    }
  },
  subscriptionType: 'shallow'
  // noReference: true,
}, false)

;















// const isNidium = global.__nidium__

const $215521817_$2216717553_element = $215521817_$1662971556.create({
  type: 'element',
  types: {
    property: $215521817_$2380829049,
    element: 'self'
  },
  define: {
    instances: false,
    isElement: true,
    resolve: false,
    noResolve (val = true) {
      $215521817_$2216717553_element._c = null
      $215521817_$2216717553_element._cLevel = null
      $215521817_$1662971556.set($215521817_$2216717553_element, { define: { _noResolve_: val } })
    },
    resolveNodes () {
      // find real inherits
      $215521817_$2216717553_element._c = null
      $215521817_$2216717553_element._cLevel = null
      $215521817_$2216717553_element.set({ define: { resolve: true } })
    },
    removeUnresolved () {
      if (typeof window !== 'undefined') {
        setTimeout(() => {
          var d = Date.now()
          const elems = this.node.querySelectorAll('[id]')
          var i = elems.length
          var l = 0
          while (i--) {
            if ((elems[i].id | 0) > 1e6) {
              l++
              elems[i].parentNode.removeChild(elems[i])
            }
          }
          $215521817_$2216717553_element._c = null
          $215521817_$2216717553_element._cLevel = null
          $215521817_$2216717553_element.set({ define: { resolve: false } })
          console.log(`REMOVE ${l} UN-RESOLVED`, Date.now() - d, 'ms')
        })
      }
    }
  }, // unnesecary code
  props: {
    subscription: {
      type: 'property',
      render: { state () {}, static () {} }
    },
    resolveAttr: (t, val, key, stamp) => {
      var f = t
      var props
      while (!props && f) {
        props = f.props
        f = f.inherits
      }
      const setObj = {}
      for (let key in val) {
        if (key in props && key !== 'type') {
          setObj[key] = val[key]
        } else {
          if (!setObj.attr) setObj.attr = {}
          setObj.attr[key] = val[key]
        }
      }
      $215521817_$1662971556.set(t, setObj, stamp)
    },
    tag: true,
    resolveHash: true,
    default: 'self'
  },
  on: {
    resolve: (val, stamp, element) => {
      if (val) {
        element.resolveNodes()
      } else {
        // element.removeUnresolved()
      }
    }
  },
  tag: 'div',
  inject: [
    $215521817_$4133454486,
    $215521817_$2365388884,
    $215521817_$148791133,
    $215521817_$4188164346,
    $215521817_$390291418,
    $215521817_$2824643288,
    $215521817_$2300670804,
    $215521817_$2079359529,
    $215521817_$871246922,
    $215521817_$2721196033,
    $215521817_$607912786,
    $215521817_$985981857,
    $215521817_$3443299464
  ]
}, false)

$215521817_$2216717553_element._elem_ = true

$215521817_$2216717553_element.set({
  props: {
    resolve: val => {
      // console.log('lets go prerender!')
    }
  }
}, false)

$215521817_$1662971556.set($215521817_$2216717553_element, {
  define: {
    set (val) {
      if (typeof window !== 'undefined') {
        // console.log('SET', this.path(), val)
      }
      return $215521817_$1662971556.set(this, val, false)
    }
  }
})

var $215521817_$2216717553 = $215521817_$2216717553_element

;






const $215521817_$3307881524_renderStyle = $215521817_$1567623425_render

const $215521817_$3307881524_isNidium = global.__nidium__

global.d = Date.now()

var $215521817_$3307881524 = (elem, state, cb, cb2) => {
  console.log('now lets render', Date.now() - global.d, 'ms')
  var dom, node, t
  if (!$215521817_$3307881524_isNidium && elem instanceof global.Element) {
    dom = elem
    elem = state
    state = cb
    cb = cb2
  }

  if (!elem.inherits) {
    elem = $215521817_$2216717553.create(elem, false)
  }

  if (dom) {
    elem.node = dom
    $215521817_$1567623425_done(elem, true, true)
    elem.emit('resolve', true)
  }

  $215521817_$3307881524_renderStyle(elem)

  var x = Date.now()
  const subs = elem.$map()
  const tree = t = {}
  const uid = $215521817_$1662971556.puid(elem)
  console.log('map subs', Date.now() - x, 'ms')

  if (state === void 0) {
    $215521817_$3029535488(state, 'new', subs, tree)
    if (cb) { cb(subs, tree, elem) }
  } else {
    if (!state || !state.inherits) { state = $215521817_$1662971556.create(state) }
    $215521817_$3029535488(state, 'new', subs, tree)
    if (cb) {
      $215521817_$1662971556.subscribe(state, subs, (s, type, su, t) => {
        $215521817_$3029535488(s, type, su, t)
        cb(subs, tree, elem, s, type, su, t)
      }, tree)
      cb(subs, tree, elem)
    } else {
      state.subscribe(subs, $215521817_$3029535488, true, tree)
    }
  }

  $215521817_$826337949.close()

  const $ = $215521817_$61209465_get$(elem)

  if ($) {
    // need to do this as well
    let path = $
    if ($215521817_$61209465_get$any(elem)) {
      if (elem.$.length === 1) {
        path = []
        t = tree
      } else {
        path = $.slice(0, -1)
        t = tree
        t = $215521817_$61209465_getPath(tree, path)
      }
    } else {
      t = $215521817_$61209465_getPath(tree, $)
    }
    if (!t) {
      const obj = {}
      let len = path.length
      let i = 0
      let s = obj
      while (i < len && (s = s[path[i++]] = {}));
      state.set(obj)
      t = $215521817_$61209465_getPath(tree, path)
    }
  }

  // make setting resolve optional
  node = elem.node = t._[uid]
  $215521817_$1567623425_done(elem, node)
  if (dom) elem.emit('resolve', false)
  return node
}

;// stub file (needs this content)

;







/*
window.getDevicePixelRatio = function () {
    var ratio = 1;
    // To account for zoom, change to use deviceXDPI instead of systemXDPI
    if (window.screen.systemXDPI !== undefined && window.screen.logicalXDPI       !== undefined && window.screen.systemXDPI > window.screen.logicalXDPI) {
        // Only allow for values > 1
        ratio = window.screen.systemXDPI / window.screen.logicalXDPI;
    }
    else if (window.devicePixelRatio !== undefined) {
        ratio = window.devicePixelRatio;
    }
    return ratio;
}
*/

if (!global.devicePixelRatio) {
  global.devicePixelRatio = 1
}



if (typeof __filename !== 'undefined') console.log('brisky-render:', __filename)


var $215521817_$4202851505_render = $215521817_$3307881524;var $215521817_$4202851505_element = $215521817_$2216717553;var $215521817_$4202851505_parent = $215521817_$1908772127;var $215521817_$4202851505_attr = $215521817_$2300670804;var $215521817_$4202851505_clearStyleCache = $215521817_$1567623425_clear;var $215521817_$4202851505_prefix = $215521817_$2360589662;var $215521817_$4202851505_eventStatus = $215521817_$3689197067;
var $215521817_$4202851505_$ALL$ = {
  render: $215521817_$3307881524,
  element: $215521817_$2216717553,
  parent: $215521817_$1908772127,
  attr: $215521817_$2300670804,
  clearStyleCache: $215521817_$1567623425_clear,
  prefix: $215521817_$2360589662,
  eventStatus: $215521817_$3689197067
}

var $215521817 = $215521817_$4202851505_$ALL$
;var $1546195150_exports = {}
var $1546195150_$1662971556 = $1662971556
;var $1546195150_$826337949 = $826337949
;

const $1546195150_$1094503762_next = typeof window === 'undefined'
  ? process.nextTick
  : global.requestAnimationFrame

const $1546195150_$1094503762_serialize = (hub, t, struct, val, level) => {
  if (!struct.isHub || struct.key === 'clients' || (struct._p && struct._p.key === 'clients')) {
    return
  }

  const path = struct.path() // cached version (later)
  const len = path.length

  if (struct.val !== void 0 || val === null) {
    var s = t[0] || (t[0] = {})

    for (let i = level; i < len; i++) {
      let t = s[path[i]]
      if (!t) {
        s = s[path[i]] = {}
      } else {
        s = t
        if (s.val === null) { return }
      }
    }

    s.stamp = struct.stamp

    if (val === null) {
      for (let key in s) {
        if (key !== 'stamp') {
          delete s[key]
        }
      }
      s.val = null
    } else if (struct.val && struct.val.inherits) {
      s.val = struct.val.path()
      s.val.unshift('@', 'root')
      $1546195150_$1094503762_serialize(hub, t, struct.val, val, level)
    } else if (struct.val !== void 0) {
      s.val = struct.val
    }
  }
}

const $1546195150_$1094503762_meta = hub => {
  if (!hub.receiveOnly) {
    const store = $1546195150_$1094503762_inProgress(hub, $1546195150_$826337949.inProgress ? $1546195150_$826337949.on : $1546195150_$1094503762_next)

    let keys = hub.client.keys()
    if (keys) {
      let i = keys.length
      while (i--) {
        hub.client.forEach((val, key) => {
          if (
            key !== 'device' &&
            key !== 'ua' &&
            key !== 'platform' &&
            key !== 'browser' &&
            key !== 'version' &&
            key !== 'prefix' &&
            key !== 'webview'
          ) {
            $1546195150_$1094503762_serialize(hub, store, val, void 0, hub.urlIndex)
          }
        })
      }
    }

    if (!store[1]) store[1] = {}
    if (hub.context) {
      if (hub.context.keys().length > 0) {
        store[1].context = hub.context.compute() ? hub.context.serialize() : false
      } else {
        store[1].context = hub.context.compute() || false
      }
    }
    store[1].id = hub.client.key
    if (hub.upstreamSubscriptions) {
      store[1].s = Object.keys(hub.upstreamSubscriptions)
    }
  } else if (hub.upstreamSubscriptions) {
    let override
    for (let key in hub.upstreamSubscriptions) {
      if (hub.upstreamSubscriptions[key].__force__) {
        if (!override) override = []
        override.push(key)
      }
    }
    if (override) {
      const store = $1546195150_$1094503762_inProgress(hub, $1546195150_$826337949.inProgress ? $1546195150_$826337949.on : $1546195150_$1094503762_next)
      if (!store[1]) store[1] = {}
      const obj = {}
      let i = override.length
      while (i--) {
        obj[override[i]] = hub.upstreamSubscriptions[override[i]]
      }
      store[1].s = Object.keys(obj)
    }
  }
}

const $1546195150_$1094503762_send = (val, stamp, struct) => {
  // also check for removal
  if (stamp < 0 && val === null && struct.parent(t => {
    if (t.key === 'clients') {
      // console.log('🎋🎋🎋🎋', struct.val, val)
      return true
    }
  })) {
    return
  }
  let hub
  let p = struct
  while (p) {
    if (p._url_ && !p._c) hub = p
    p = p.parent() // needs to walk over context (for multi server)
  }

  if (hub) {
    if (!hub.receiveOnly) {
      if (struct === hub) {
        if (val === null) {
          return
        }
      } else if (struct._p.key === 'clients') {
        if (struct.key !== hub.client.key) {
          return
        }
      }
      $1546195150_$1094503762_serialize(hub, $1546195150_$1094503762_inProgress(hub, $1546195150_$826337949.on), struct, val, hub.urlIndex)
    }
  }
}

// need to know if created by myself
// else starts correcting wrong stamps
const $1546195150_$1094503762_applyDifference = (val, diff) => {
  for (let key in val) {
    if (typeof val[key] === 'object') {
      $1546195150_$1094503762_applyDifference(val[key], diff)
    } else if (key === 'stamp') {
      val[key] = val[key] + diff
    }
  }
}

const $1546195150_$1094503762_inProgress = (hub, tick) => {
  if (!hub.inProgress) {
    hub.inProgress = []
    tick(() => {
      if (hub.connected.compute() === true) {
        $1546195150_$1094503762_out(hub)
      } else {
        var offset = $1546195150_$826337949.offset
        hub.connected.once(true, () => {
          if ($1546195150_$826337949.offset && Math.abs($1546195150_$826337949.offset - offset) > 1000) {
            $1546195150_$1094503762_applyDifference(hub.inProgress[0], $1546195150_$826337949.offset - offset)
          }
          $1546195150_$1094503762_out(hub)
        })
      }
    })
  }
  return hub.inProgress
}

const $1546195150_$1094503762_out = t => {
  // if (typeof window !== 'undefined') {
    // console.log('SEND', JSON.stringify(t.inProgress, false, 2))
  // }
  t.socket.send(JSON.stringify(t.inProgress))
  t.inProgress = false
}

const $1546195150_$1094503762_sendSubscriptions = (socket, subs, hub) => {
  let i = subs.length
  const m = {}
  while (i--) {
    const key = subs[i]
    m[key] = hub.upstreamSubscriptions[key]
  }
  const payload = []
  payload[1] = { s: subs, m }
  socket.send(JSON.stringify(payload))
}



var $1546195150_$1094503762_$ALL$ = {
  meta: $1546195150_$1094503762_meta,
  send: $1546195150_$1094503762_send,
  sendSubscriptions: $1546195150_$1094503762_sendSubscriptions
}
;var $1546195150_$1704955210 = global.WebSocket
// if ! native websocket construct a fallback (can use exception builder)

;const $1546195150_$3851780354_isEmpty = t => {
  for (let i in t) { return false }
  return true
}

const $1546195150_$3851780354_parse = (struct, obj, key, root) => {
  const result = {}
  if (!root) { root = result }
  if (obj.type) result.type = $1546195150_$3851780354_parse(struct, obj.type, 'type')
  for (let i in obj) {
    if (i !== '_' && i !== 'type') {
      if (typeof obj[i] === 'function') {
        let val = obj[i].toString()
        if (!/^(function|\()/.test(val)) {
          // this can all be done on the hub itself of course
          // hash will also be used for sec purposes
          // this will just be send up and done on the hub -- not here!

          if (/^.+=>/.test(val)) {
            if (!/^(\(){0, 1}.+(\)){0, 1} +=>/.test(val)) {
              val = val.replace(/^(.*?)( +=>)/, '($1)$2')
            }
            if (!/^(.*?)+=> +{(.*?)}$/.test(val) && val.indexOf('return ') === -1) {
              val = val.replace(/^(.+=> *?)(.*?)/, '$1 { return $2') + ' }'
            }
            val = val.replace('=>', '')
          }
          val = 'function ' + val
        }
        result['$fn|' + i] = val
        // also here we need to rewrite client to use client id
      } else if (typeof obj[i] !== 'object') {
        result[i] = obj[i]
      } else {
        let parsed = $1546195150_$3851780354_parse(struct, obj[i], i, root)
        if (parsed !== void 0) { result[i] = parsed }
      }
    }
  }
  // if result is empty ignore -- may not be a good idea
  return $1546195150_$3851780354_isEmpty(result) ? void 0 : result
}

var $1546195150_$3851780354 = $1546195150_$3851780354_parse

;var $1546195150_$2180032073 = $2180032073
;var $1546195150_$3305006410 = $3305006410
;
const $1546195150_$1384736615_uniq = global.navigator.userAgent +
  global.navigator.userLanguage +
  global.navigator.language
var $1546195150_$1384736615 = () => $1546195150_$2180032073(`b-${Date.now()}-${(Math.random() * 10000) | 0}-${$1546195150_$1384736615_uniq}`)

;


var $1546195150_$2828932010 = (t, val, stamp, useragent, id) => {
  if (!id) id = t._uid_ || $1546195150_$1384736615()
  $1546195150_$3305006410(useragent, val)
  val.ua = useragent || false
  t.set({ clients: { [id]: val } }, stamp)
  return t.clients[id]
}

;var $1546195150_$1385737091 = 1e7 // byteLength -- has to be like 10mb

;

// TODO: implement send

var $1546195150_$2003515468_blobArray = false

const $1546195150_$2003515468_receiveLarge = (data, cb) => {
  if (!$1546195150_$2003515468_blobArray) $1546195150_$2003515468_blobArray = []
  $1546195150_$2003515468_blobArray.push(data)

  if (data.size < $1546195150_$1385737091) {
    let i = $1546195150_$2003515468_blobArray.length
    let done = i
    let stringArray = []

    while (i--) {
      const reader = new FileReader() // eslint-disable-line

      const onLoadEnd = ((i, e) => {
        reader.removeEventListener('loadend', onLoadEnd, false)
        if (!e.error) {
          stringArray[i] = reader.result
          if (--done === 0) cb(stringArray.join(''))
        }
      }).bind(null, i)

      reader.addEventListener('loadend', onLoadEnd, false)
      reader.readAsText($1546195150_$2003515468_blobArray[i])
    }

    $1546195150_$2003515468_blobArray = false
  }
}



var $1546195150_$2003515468_$ALL$ = {
  receiveLarge: $1546195150_$2003515468_receiveLarge
}
;








const $1546195150_$3357289264_isNode = typeof window === 'undefined'

// want to use for upsteream
const $1546195150_$3357289264_next = $1546195150_$3357289264_isNode
  ? fn => setTimeout(fn, 18)
  : global.requestAnimationFrame

// const cancel = isNode
//   ? clearTimeout
//   : global.cancelAnimationFrame

const $1546195150_$3357289264_connect = (hub, url, reconnect) => {
  // use outside function non anon since its slower (according to uws)

  const socket = new $1546195150_$1704955210(url)
  const client = hub.client || $1546195150_$2828932010(hub, {}, false)
  // var inProgress, queue

  hub.set({ client }, false)

  hub.reconnect = null

  const close = () => {
    const stamp = $1546195150_$826337949.create()
    hub.socket = false
    hub.set({ connected: false }, stamp)
    $1546195150_$826337949.close()
    if (!socket.blockReconnect && hub._url_) {
      reconnect = Math.min((reconnect * 1.5), 2000)
      hub.reconnect = setTimeout($1546195150_$3357289264_connect, reconnect, hub, url, reconnect)
    }
  }

  socket.onclose = close

  socket.onerror = $1546195150_$3357289264_isNode ? close : () => socket.close()

  socket.onopen = () => {
    hub.socket = socket
    if (hub.emitters && hub.emitters.incoming) {
      $1546195150_$3357289264_enableIncomingListener(socket, hub)
    }
  }

  socket.onmessage = (data) => {
    data = data.data

    if (
      typeof data !== 'string' &&
      (data instanceof ArrayBuffer ||
        (!$1546195150_$3357289264_isNode &&
          ((('Blob' in global) && data instanceof Blob) || // eslint-disable-line
          (('WebkitBlob' in global) && data instanceof WebkitBlob)) // eslint-disable-line
        )
      )
    ) {
      $1546195150_$2003515468_receiveLarge(data, set)
    // just use array! remove this nonsense
    } else if (data[0] === '#') {
      if (data[1] === '1') {
        // same here
        $1546195150_$1094503762_sendSubscriptions(socket, JSON.parse(data.slice(2)), hub)
      } else {
        // call it events -- emit {} etc
        // need to fix this on send used in phoenix else it breaks
        // [ 1 ] emit: { [type]: [], }
        // [ 1 ] subscriptions: { [type]: [] }
        hub.emit('error', JSON.parse(data.slice(1)))
      }
    } else {
      // the result of a context switch
      set(data)
    }
  }

  const set = data => $1546195150_$3357289264_receive(hub, JSON.parse(data)[0], JSON.parse(data)[1])
}

// raf
const $1546195150_$3357289264_receive = (hub, data, info) => {
  const stamp = hub._incomingStamp = $1546195150_$826337949.create()
  $1546195150_$826337949.setOffset((info.stamp | 0) - ((stamp | 0) - $1546195150_$826337949.offset))

  if (info && info.connect) {
    hub.set({ connected: true }, $1546195150_$826337949.create())
    $1546195150_$1094503762_meta(hub)
    $1546195150_$826337949.close()
  }
  // hub._receiving =  handle this!
  // this will help /w heavy computation on incoming
  if (data) {
    $1546195150_$3357289264_next(() => {
      // delete info.reset // tmp
      const stamp = $1546195150_$826337949.create()
      if (!hub.receiveOnly) {
        hub.receiveOnly = true
        hub.set(data, stamp, info.reset)
        hub.receiveOnly = null
      } else {
        hub.set(data, stamp, info.reset)
      }
      $1546195150_$826337949.close()
    })
  }
}

const $1546195150_$3357289264_removeUrl = hub => {
  hub.url = hub._url_ = hub.urlIndex = null
  hub.emitters.set({ data: { url$: null } }, false)
}

const $1546195150_$3357289264_removeSocket = hub => {
  if (hub.reconnect) {
    clearTimeout(hub.reconnect)
    hub.reconnect = null
  }
  if (hub.socket) {
    hub.socket.blockReconnect = true
    hub.socket.close()
  }
  hub.socket = false
}

const $1546195150_$3357289264_url = (hub, val, key, stamp) => {
  hub.on((val, stamp, t) => {
    if (val === null && !t._c && t === hub) {
      hub.subscriptions = []
      $1546195150_$3357289264_removeUrl(hub)
      $1546195150_$3357289264_removeSocket(hub)
    }
  }, 'url$')

  if (!val) val = null
  if ((!hub.url && val) || (hub.url.compute() !== val)) {
    $1546195150_$3357289264_removeSocket(hub)
    if (!val) {
      hub.set({ connected: false }, stamp)
      hub._url_ = null
      if (hub.url) hub.url.set(null, stamp)
    } else {
      if (!hub.url) {
        $1546195150_$1662971556.create({
          on: {
            data: {
              url: (val, stamp, struct) => {
                val = struct.compute()
                if (val) {
                  hub.set({ connected: false }, stamp)
                  let i = -1
                  if (hub.key) i++
                  hub.parent(() => { i++ })
                  hub.urlIndex = i // use this for checks
                  hub._url_ = val
                  $1546195150_$3357289264_connect(hub, val, 50)
                } else {
                  hub._url_ = null
                }
              }
            }
          }
        }, stamp, $1546195150_$1662971556.struct, hub, key)
      }
      if (/^https?/.test(val)) val = val.replace(/^http/, 'ws')
      hub.url.set(val, stamp)
    }
  }
}

const $1546195150_$3357289264_removeClients = (hub, stamp) => {
  const clients = hub.clients
  if (clients && clients.keys().length > 1) {
    clients.forEach((client, key) => {
      if (
        client.val !== null &&
        client !== hub.client
      ) {
        client.set(null, -stamp)
        delete clients[key]
      }
    })
  }
}

const $1546195150_$3357289264_connectedStruct = $1546195150_$1662971556.create({
  on: {
    data: {
      removeClients: (val, stamp, t) => {
        if (t.compute() === false) {
          $1546195150_$3357289264_removeClients(t._p, stamp)
        }
      }
    }
  }
})

const $1546195150_$3357289264_connected = (hub, val, key, stamp) => {
  if (!hub.connected) {
    $1546195150_$1662971556.create(val, stamp, $1546195150_$3357289264_connectedStruct, hub, key)
  } else {
    hub.connected.set(val, stamp)
  }
}

const $1546195150_$3357289264_contextStruct = $1546195150_$1662971556.struct.create({
  props: {
    default: {
      on: {
        data: {
          updateParent: (val, stamp, t) => {
            t.parent().emit('data', val, stamp)
          }
        }
      }
    }
  }
})

const $1546195150_$3357289264_contextIsNotEqual = (val, context) => {
  if (val && typeof val === 'object') {
    for (let field in val) {
      if (!context[field] || (context[field].compute && context[field].compute()) !== val[field]) {
        return true
      }
    }
  } else {
    return val !== context.compute()
  }
}

const $1546195150_$3357289264_context = (hub, val, key, stamp) => {
  if ((!hub.context && val) || (hub.context && $1546195150_$3357289264_contextIsNotEqual(val, hub.context))) {
    if (!hub.context) {
      $1546195150_$1662971556.create(val, stamp, $1546195150_$3357289264_contextStruct, hub, key)
    } else {
      $1546195150_$3357289264_removeClients(hub, stamp)
      hub.context.set(val, stamp)
    }
    if (hub.connected && hub.connected.compute() === true) $1546195150_$1094503762_meta(hub)
  }
}

const $1546195150_$3357289264_props = {
  reconnect: true,
  socket: true,
  urlIndex: true,
  upstreamSubscriptions: true,
  receiveOnly: true,
  url: $1546195150_$3357289264_url,
  context: $1546195150_$3357289264_context,
  connected: $1546195150_$3357289264_connected
}

const $1546195150_$3357289264_stub = () => {}

const $1546195150_$3357289264_define = {
  subscribe (subs, cb, raw, tree, forceUpstream) {
    if (!raw) subs = $1546195150_$1662971556.parse(subs)
    if (!this.receiveOnly || forceUpstream) {
      const parsed = $1546195150_$3851780354(this, subs)
      if (parsed) {
        if (forceUpstream) {
          parsed.__force__ = true
        }
        // why not keep it stringified? -- saves lots of speed
        const key = $1546195150_$2180032073(JSON.stringify(parsed))
        if (!this.upstreamSubscriptions) {
          this.upstreamSubscriptions = {}
          this.upstreamSubscriptions[key] = parsed
          if (this.url) $1546195150_$1094503762_meta(this)
        } else if (!this.upstreamSubscriptions[key]) {
          this.upstreamSubscriptions[key] = parsed
          if (this.url) $1546195150_$1094503762_meta(this)
        }
      }
    }
    return $1546195150_$1662971556.subscribe(this, subs, cb || $1546195150_$3357289264_stub, tree)
  }
}

const $1546195150_$3357289264_enableIncomingListener = (socket, hub) => {
  if (!socket.incomingOverride) {
    socket.incomingOverride = true
    const field = typeof window === 'undefined'
      ? 'internalOnMessage'
      : 'onmessage'
    const msg = hub.socket[field]
    socket[field] = (data) => {
      hub.emit('incoming', data)
      msg(data)
    }
  }
}

const $1546195150_$3357289264_on = {
  data: { send: $1546195150_$1094503762_send },
  props: {
    incoming: (t, val, key, stamp) => {
      const hub = t._p
      if (hub.socket) $1546195150_$3357289264_enableIncomingListener(hub.socket, hub)
      return $1546195150_$1662971556.emitterProperty(t, val, key, stamp)
    }
  }
}



var $1546195150_$3357289264_$ALL$ = {
  props: $1546195150_$3357289264_props,
  on: $1546195150_$3357289264_on,
  define: $1546195150_$3357289264_define
}
;var $1546195150_$2549126471 = {
  props: {
    contextKey: true,
    getContext: (t, fn) => {
      t.set({
        define: {
          getContext (key, socket) {
            return fn(key, key => $1546195150_$2549126471_createContext(this, key), this, socket)
          }
        }
      })
    }
  },
  getContext: (key, context) => context(key)
}

const $1546195150_$2549126471_createContext = (hub, val) => {
  var result = $1546195150_$2549126471_find(hub, val)
  if (!result) {
    result = hub.create({ contextKey: val }, false)
  }
  return result
}

const $1546195150_$2549126471_find = (hub, val) => {
  const instances = hub.instances
  if (instances) {
    let i = instances.length
    while (i--) {
      if (instances[i].contextKey === val) return instances[i]
    }
  }
}

;// no server in the browser -- yet
var $1546195150_$899748844 = {}

;




const $1546195150_$4043401927_types = $1546195150_$1662971556.struct.props.types

const $1546195150_$4043401927_hub = $1546195150_$1662971556.create({
  type: 'hub',
  instances: false,
  define: {
    isHub: true,
    listen (port) {
      this.set({ port })
      return this
    },
    connect (url) {
      this.set({ url })
      return this
    }
  },
  props: {
    default: 'self',
    _uid_: (t, val) => { t.set({ define: { _uid_: val } }) },
    types: $1546195150_$4043401927_types.bind(), // to not interfere with struct type
    type: $1546195150_$1662971556.struct.props.type.bind(),
    client: true
  }
})

$1546195150_$4043401927_hub.props.types.struct = $1546195150_$4043401927_hub.create({
  props: { default: $1546195150_$4043401927_types.struct.props.default.bind() }
}, false)

$1546195150_$4043401927_hub.props.types.struct.props.default.struct = $1546195150_$4043401927_hub.props.type.struct = $1546195150_$4043401927_hub

$1546195150_$4043401927_hub.set({
  types: {
    hub: 'self',
    clients: {
      type: 'struct',
      instances: false,
      props: {
        default: $1546195150_$4043401927_hub.create({
          instances: false,
          props: {
            cache: true,
            upstreamSubscriptions: true,
            resolve: true,
            socket: true,
            context: true
          }
        }, false)
      }
    }
  },
  props: {
    clients: (t, val, key, stamp) => {
      if (!t.clients) {
        const clients = $1546195150_$1662971556.getType(t, key)
        t.clients = $1546195150_$1662971556.create(val, stamp, clients, t, key)
      } else {
        $1546195150_$1662971556.set(t.clients, val, stamp)
      }
    }
  },
  inject: [ $1546195150_$899748844, $1546195150_$3357289264_$ALL$, $1546195150_$2549126471 ]
}, false)

$1546195150_$4043401927_hub.types._ks = void 0

var $1546195150_$4043401927 = $1546195150_$4043401927_hub

;
const $1546195150_$3474573222_fn = (val, stamp) => $1546195150_$4043401927.create(val, stamp)
var $1546195150_$3474573222 = $1546195150_$3474573222_fn


var $1546195150 = $1546195150_$3474573222
;


const $3230953054_hub = $1546195150({
  url: 'ws://localhost:3030'
})

const $3230953054_app = $215521817.render({
    field: {
      text: { $: 'title' },
      style: {
        padding: '20px',
        backgroundColor: 'blue',
        color: 'red',
        height: '400px',
        fontFamily: 'Comic sans ms',
        fontSize: { $: 'root.fontSize' },
        backgroundSize: 'cover',
        transform: {
          x: 20,
          y: 120
        },
        // boxShadow: '10px 10px 20px',
        backgroundImage: 'url(https://www.petfinder.com/wp-content/uploads/2012/11/91615172-find-a-lump-on-cats-skin-632x475.jpg)'
      }
    },
    list: {
      $: 'items.$any',
      style: {
        border: '1px solid blue',
        padding: '100px'
      },
      props: {
       default: {
        style: {
          top: 20,
          // height: 80,
          opacity: 0.5,
          border: '2px solid red',
          textAlign: 'center'
        },
        text: {
          $: 'title'
        }
      }
    }
  }
}, $3230953054_hub)

console.log('???', $3230953054_app.position)

document.canvas.add($3230953054_app)

;
 })(window, {})