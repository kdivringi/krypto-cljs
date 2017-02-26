// Compiled by ClojureScript 1.9.473 {}
goog.provide('cljs.spec.impl.gen');
goog.require('cljs.core');
goog.require('cljs.core');

/**
* @constructor
 * @implements {cljs.core.IDeref}
*/
cljs.spec.impl.gen.LazyVar = (function (f,cached){
this.f = f;
this.cached = cached;
this.cljs$lang$protocol_mask$partition0$ = 32768;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.impl.gen.LazyVar.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(!((self__.cached == null))){
return self__.cached;
} else {
var x = self__.f.call(null);
if((x == null)){
} else {
self__.cached = x;
}

return x;
}
});

cljs.spec.impl.gen.LazyVar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),cljs.core.with_meta(new cljs.core.Symbol(null,"cached","cached",-1216707864,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

cljs.spec.impl.gen.LazyVar.cljs$lang$type = true;

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorStr = "cljs.spec.impl.gen/LazyVar";

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorPrWriter = (function (this__58459__auto__,writer__58460__auto__,opt__58461__auto__){
return cljs.core._write.call(null,writer__58460__auto__,"cljs.spec.impl.gen/LazyVar");
});

cljs.spec.impl.gen.__GT_LazyVar = (function cljs$spec$impl$gen$__GT_LazyVar(f,cached){
return (new cljs.spec.impl.gen.LazyVar(f,cached));
});

cljs.spec.impl.gen.quick_check_ref = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check.quick_check !== 'undefined')){
return clojure.test.check.quick_check;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
cljs.spec.impl.gen.quick_check = (function cljs$spec$impl$gen$quick_check(var_args){
var args__58968__auto__ = [];
var len__58961__auto___62299 = arguments.length;
var i__58962__auto___62300 = (0);
while(true){
if((i__58962__auto___62300 < len__58961__auto___62299)){
args__58968__auto__.push((arguments[i__58962__auto___62300]));

var G__62301 = (i__58962__auto___62300 + (1));
i__58962__auto___62300 = G__62301;
continue;
} else {
}
break;
}

var argseq__58969__auto__ = ((((0) < args__58968__auto__.length))?(new cljs.core.IndexedSeq(args__58968__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__58969__auto__);
});

cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.quick_check_ref),args);
});

cljs.spec.impl.gen.quick_check.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.quick_check.cljs$lang$applyTo = (function (seq62298){
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq62298));
});

cljs.spec.impl.gen.for_all_STAR__ref = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.properties.for_all_STAR_ !== 'undefined')){
return clojure.test.check.properties.for_all_STAR_;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Dynamically loaded clojure.test.check.properties/for-all*.
 */
cljs.spec.impl.gen.for_all_STAR_ = (function cljs$spec$impl$gen$for_all_STAR_(var_args){
var args__58968__auto__ = [];
var len__58961__auto___62303 = arguments.length;
var i__58962__auto___62304 = (0);
while(true){
if((i__58962__auto___62304 < len__58961__auto___62303)){
args__58968__auto__.push((arguments[i__58962__auto___62304]));

var G__62305 = (i__58962__auto___62304 + (1));
i__58962__auto___62304 = G__62305;
continue;
} else {
}
break;
}

var argseq__58969__auto__ = ((((0) < args__58968__auto__.length))?(new cljs.core.IndexedSeq(args__58968__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__58969__auto__);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.for_all_STAR__ref),args);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$applyTo = (function (seq62302){
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq62302));
});

var g_QMARK__62306 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
var g_62307 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__62306){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
});})(g_QMARK__62306))
,null));
var mkg_62308 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__62306,g_62307){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
});})(g_QMARK__62306,g_62307))
,null));
cljs.spec.impl.gen.generator_QMARK_ = ((function (g_QMARK__62306,g_62307,mkg_62308){
return (function cljs$spec$impl$gen$generator_QMARK_(x){
return cljs.core.deref.call(null,g_QMARK__62306).call(null,x);
});})(g_QMARK__62306,g_62307,mkg_62308))
;

cljs.spec.impl.gen.generator = ((function (g_QMARK__62306,g_62307,mkg_62308){
return (function cljs$spec$impl$gen$generator(gfn){
return cljs.core.deref.call(null,mkg_62308).call(null,gfn);
});})(g_QMARK__62306,g_62307,mkg_62308))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.impl.gen.generate = ((function (g_QMARK__62306,g_62307,mkg_62308){
return (function cljs$spec$impl$gen$generate(generator){
return cljs.core.deref.call(null,g_62307).call(null,generator);
});})(g_QMARK__62306,g_62307,mkg_62308))
;
cljs.spec.impl.gen.delay_impl = (function cljs$spec$impl$gen$delay_impl(gfnd){
return cljs.spec.impl.gen.generator.call(null,(function (rnd,size){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gfnd)).call(null,rnd,size);
}));
});
var g__60195__auto___62328 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.impl.gen.hash_map = ((function (g__60195__auto___62328){
return (function cljs$spec$impl$gen$hash_map(var_args){
var args__58968__auto__ = [];
var len__58961__auto___62329 = arguments.length;
var i__58962__auto___62330 = (0);
while(true){
if((i__58962__auto___62330 < len__58961__auto___62329)){
args__58968__auto__.push((arguments[i__58962__auto___62330]));

var G__62331 = (i__58962__auto___62330 + (1));
i__58962__auto___62330 = G__62331;
continue;
} else {
}
break;
}

var argseq__58969__auto__ = ((((0) < args__58968__auto__.length))?(new cljs.core.IndexedSeq(args__58968__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__58969__auto__);
});})(g__60195__auto___62328))
;

cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__60195__auto___62328){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__60195__auto___62328),args);
});})(g__60195__auto___62328))
;

cljs.spec.impl.gen.hash_map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.hash_map.cljs$lang$applyTo = ((function (g__60195__auto___62328){
return (function (seq62309){
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq62309));
});})(g__60195__auto___62328))
;


var g__60195__auto___62332 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.impl.gen.list = ((function (g__60195__auto___62332){
return (function cljs$spec$impl$gen$list(var_args){
var args__58968__auto__ = [];
var len__58961__auto___62333 = arguments.length;
var i__58962__auto___62334 = (0);
while(true){
if((i__58962__auto___62334 < len__58961__auto___62333)){
args__58968__auto__.push((arguments[i__58962__auto___62334]));

var G__62335 = (i__58962__auto___62334 + (1));
i__58962__auto___62334 = G__62335;
continue;
} else {
}
break;
}

var argseq__58969__auto__ = ((((0) < args__58968__auto__.length))?(new cljs.core.IndexedSeq(args__58968__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(argseq__58969__auto__);
});})(g__60195__auto___62332))
;

cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__60195__auto___62332){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__60195__auto___62332),args);
});})(g__60195__auto___62332))
;

cljs.spec.impl.gen.list.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.list.cljs$lang$applyTo = ((function (g__60195__auto___62332){
return (function (seq62310){
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq62310));
});})(g__60195__auto___62332))
;


var g__60195__auto___62336 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.impl.gen.map = ((function (g__60195__auto___62336){
return (function cljs$spec$impl$gen$map(var_args){
var args__58968__auto__ = [];
var len__58961__auto___62337 = arguments.length;
var i__58962__auto___62338 = (0);
while(true){
if((i__58962__auto___62338 < len__58961__auto___62337)){
args__58968__auto__.push((arguments[i__58962__auto___62338]));

var G__62339 = (i__58962__auto___62338 + (1));
i__58962__auto___62338 = G__62339;
continue;
} else {
}
break;
}

var argseq__58969__auto__ = ((((0) < args__58968__auto__.length))?(new cljs.core.IndexedSeq(args__58968__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(argseq__58969__auto__);
});})(g__60195__auto___62336))
;

cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__60195__auto___62336){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__60195__auto___62336),args);
});})(g__60195__auto___62336))
;

cljs.spec.impl.gen.map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.map.cljs$lang$applyTo = ((function (g__60195__auto___62336){
return (function (seq62311){
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq62311));
});})(g__60195__auto___62336))
;


var g__60195__auto___62340 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.impl.gen.not_empty = ((function (g__60195__auto___62340){
return (function cljs$spec$impl$gen$not_empty(var_args){
var args__58968__auto__ = [];
var len__58961__auto___62341 = arguments.length;
var i__58962__auto___62342 = (0);
while(true){
if((i__58962__auto___62342 < len__58961__auto___62341)){
args__58968__auto__.push((arguments[i__58962__auto___62342]));

var G__62343 = (i__58962__auto___62342 + (1));
i__58962__auto___62342 = G__62343;
continue;
} else {
}
break;
}

var argseq__58969__auto__ = ((((0) < args__58968__auto__.length))?(new cljs.core.IndexedSeq(args__58968__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__58969__auto__);
});})(g__60195__auto___62340))
;

cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__60195__auto___62340){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__60195__auto___62340),args);
});})(g__60195__auto___62340))
;

cljs.spec.impl.gen.not_empty.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.not_empty.cljs$lang$applyTo = ((function (g__60195__auto___62340){
return (function (seq62312){
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq62312));
});})(g__60195__auto___62340))
;


var g__60195__auto___62344 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.impl.gen.set = ((function (g__60195__auto___62344){
return (function cljs$spec$impl$gen$set(var_args){
var args__58968__auto__ = [];
var len__58961__auto___62345 = arguments.length;
var i__58962__auto___62346 = (0);
while(true){
if((i__58962__auto___62346 < len__58961__auto___62345)){
args__58968__auto__.push((arguments[i__58962__auto___62346]));

var G__62347 = (i__58962__auto___62346 + (1));
i__58962__auto___62346 = G__62347;
continue;
} else {
}
break;
}

var argseq__58969__auto__ = ((((0) < args__58968__auto__.length))?(new cljs.core.IndexedSeq(args__58968__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(argseq__58969__auto__);
});})(g__60195__auto___62344))
;

cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__60195__auto___62344){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__60195__auto___62344),args);
});})(g__60195__auto___62344))
;

cljs.spec.impl.gen.set.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.set.cljs$lang$applyTo = ((function (g__60195__auto___62344){
return (function (seq62313){
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq62313));
});})(g__60195__auto___62344))
;


var g__60195__auto___62348 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.impl.gen.vector = ((function (g__60195__auto___62348){
return (function cljs$spec$impl$gen$vector(var_args){
var args__58968__auto__ = [];
var len__58961__auto___62349 = arguments.length;
var i__58962__auto___62350 = (0);
while(true){
if((i__58962__auto___62350 < len__58961__auto___62349)){
args__58968__auto__.push((arguments[i__58962__auto___62350]));

var G__62351 = (i__58962__auto___62350 + (1));
i__58962__auto___62350 = G__62351;
continue;
} else {
}
break;
}

var argseq__58969__auto__ = ((((0) < args__58968__auto__.length))?(new cljs.core.IndexedSeq(args__58968__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__58969__auto__);
});})(g__60195__auto___62348))
;

cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__60195__auto___62348){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__60195__auto___62348),args);
});})(g__60195__auto___62348))
;

cljs.spec.impl.gen.vector.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector.cljs$lang$applyTo = ((function (g__60195__auto___62348){
return (function (seq62314){
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq62314));
});})(g__60195__auto___62348))
;


var g__60195__auto___62352 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.impl.gen.vector_distinct = ((function (g__60195__auto___62352){
return (function cljs$spec$impl$gen$vector_distinct(var_args){
var args__58968__auto__ = [];
var len__58961__auto___62353 = arguments.length;
var i__58962__auto___62354 = (0);
while(true){
if((i__58962__auto___62354 < len__58961__auto___62353)){
args__58968__auto__.push((arguments[i__58962__auto___62354]));

var G__62355 = (i__58962__auto___62354 + (1));
i__58962__auto___62354 = G__62355;
continue;
} else {
}
break;
}

var argseq__58969__auto__ = ((((0) < args__58968__auto__.length))?(new cljs.core.IndexedSeq(args__58968__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__58969__auto__);
});})(g__60195__auto___62352))
;

cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__60195__auto___62352){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__60195__auto___62352),args);
});})(g__60195__auto___62352))
;

cljs.spec.impl.gen.vector_distinct.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector_distinct.cljs$lang$applyTo = ((function (g__60195__auto___62352){
return (function (seq62315){
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq62315));
});})(g__60195__auto___62352))
;


var g__60195__auto___62356 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.impl.gen.fmap = ((function (g__60195__auto___62356){
return (function cljs$spec$impl$gen$fmap(var_args){
var args__58968__auto__ = [];
var len__58961__auto___62357 = arguments.length;
var i__58962__auto___62358 = (0);
while(true){
if((i__58962__auto___62358 < len__58961__auto___62357)){
args__58968__auto__.push((arguments[i__58962__auto___62358]));

var G__62359 = (i__58962__auto___62358 + (1));
i__58962__auto___62358 = G__62359;
continue;
} else {
}
break;
}

var argseq__58969__auto__ = ((((0) < args__58968__auto__.length))?(new cljs.core.IndexedSeq(args__58968__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__58969__auto__);
});})(g__60195__auto___62356))
;

cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__60195__auto___62356){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__60195__auto___62356),args);
});})(g__60195__auto___62356))
;

cljs.spec.impl.gen.fmap.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.fmap.cljs$lang$applyTo = ((function (g__60195__auto___62356){
return (function (seq62316){
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq62316));
});})(g__60195__auto___62356))
;


var g__60195__auto___62360 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.impl.gen.elements = ((function (g__60195__auto___62360){
return (function cljs$spec$impl$gen$elements(var_args){
var args__58968__auto__ = [];
var len__58961__auto___62361 = arguments.length;
var i__58962__auto___62362 = (0);
while(true){
if((i__58962__auto___62362 < len__58961__auto___62361)){
args__58968__auto__.push((arguments[i__58962__auto___62362]));

var G__62363 = (i__58962__auto___62362 + (1));
i__58962__auto___62362 = G__62363;
continue;
} else {
}
break;
}

var argseq__58969__auto__ = ((((0) < args__58968__auto__.length))?(new cljs.core.IndexedSeq(args__58968__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__58969__auto__);
});})(g__60195__auto___62360))
;

cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__60195__auto___62360){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__60195__auto___62360),args);
});})(g__60195__auto___62360))
;

cljs.spec.impl.gen.elements.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.elements.cljs$lang$applyTo = ((function (g__60195__auto___62360){
return (function (seq62317){
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq62317));
});})(g__60195__auto___62360))
;


var g__60195__auto___62364 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.impl.gen.bind = ((function (g__60195__auto___62364){
return (function cljs$spec$impl$gen$bind(var_args){
var args__58968__auto__ = [];
var len__58961__auto___62365 = arguments.length;
var i__58962__auto___62366 = (0);
while(true){
if((i__58962__auto___62366 < len__58961__auto___62365)){
args__58968__auto__.push((arguments[i__58962__auto___62366]));

var G__62367 = (i__58962__auto___62366 + (1));
i__58962__auto___62366 = G__62367;
continue;
} else {
}
break;
}

var argseq__58969__auto__ = ((((0) < args__58968__auto__.length))?(new cljs.core.IndexedSeq(args__58968__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__58969__auto__);
});})(g__60195__auto___62364))
;

cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__60195__auto___62364){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__60195__auto___62364),args);
});})(g__60195__auto___62364))
;

cljs.spec.impl.gen.bind.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.bind.cljs$lang$applyTo = ((function (g__60195__auto___62364){
return (function (seq62318){
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq62318));
});})(g__60195__auto___62364))
;


var g__60195__auto___62368 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.impl.gen.choose = ((function (g__60195__auto___62368){
return (function cljs$spec$impl$gen$choose(var_args){
var args__58968__auto__ = [];
var len__58961__auto___62369 = arguments.length;
var i__58962__auto___62370 = (0);
while(true){
if((i__58962__auto___62370 < len__58961__auto___62369)){
args__58968__auto__.push((arguments[i__58962__auto___62370]));

var G__62371 = (i__58962__auto___62370 + (1));
i__58962__auto___62370 = G__62371;
continue;
} else {
}
break;
}

var argseq__58969__auto__ = ((((0) < args__58968__auto__.length))?(new cljs.core.IndexedSeq(args__58968__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__58969__auto__);
});})(g__60195__auto___62368))
;

cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__60195__auto___62368){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__60195__auto___62368),args);
});})(g__60195__auto___62368))
;

cljs.spec.impl.gen.choose.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.choose.cljs$lang$applyTo = ((function (g__60195__auto___62368){
return (function (seq62319){
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq62319));
});})(g__60195__auto___62368))
;


var g__60195__auto___62372 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.impl.gen.one_of = ((function (g__60195__auto___62372){
return (function cljs$spec$impl$gen$one_of(var_args){
var args__58968__auto__ = [];
var len__58961__auto___62373 = arguments.length;
var i__58962__auto___62374 = (0);
while(true){
if((i__58962__auto___62374 < len__58961__auto___62373)){
args__58968__auto__.push((arguments[i__58962__auto___62374]));

var G__62375 = (i__58962__auto___62374 + (1));
i__58962__auto___62374 = G__62375;
continue;
} else {
}
break;
}

var argseq__58969__auto__ = ((((0) < args__58968__auto__.length))?(new cljs.core.IndexedSeq(args__58968__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__58969__auto__);
});})(g__60195__auto___62372))
;

cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__60195__auto___62372){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__60195__auto___62372),args);
});})(g__60195__auto___62372))
;

cljs.spec.impl.gen.one_of.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.one_of.cljs$lang$applyTo = ((function (g__60195__auto___62372){
return (function (seq62320){
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq62320));
});})(g__60195__auto___62372))
;


var g__60195__auto___62376 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.impl.gen.such_that = ((function (g__60195__auto___62376){
return (function cljs$spec$impl$gen$such_that(var_args){
var args__58968__auto__ = [];
var len__58961__auto___62377 = arguments.length;
var i__58962__auto___62378 = (0);
while(true){
if((i__58962__auto___62378 < len__58961__auto___62377)){
args__58968__auto__.push((arguments[i__58962__auto___62378]));

var G__62379 = (i__58962__auto___62378 + (1));
i__58962__auto___62378 = G__62379;
continue;
} else {
}
break;
}

var argseq__58969__auto__ = ((((0) < args__58968__auto__.length))?(new cljs.core.IndexedSeq(args__58968__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__58969__auto__);
});})(g__60195__auto___62376))
;

cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__60195__auto___62376){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__60195__auto___62376),args);
});})(g__60195__auto___62376))
;

cljs.spec.impl.gen.such_that.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.such_that.cljs$lang$applyTo = ((function (g__60195__auto___62376){
return (function (seq62321){
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq62321));
});})(g__60195__auto___62376))
;


var g__60195__auto___62380 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.impl.gen.tuple = ((function (g__60195__auto___62380){
return (function cljs$spec$impl$gen$tuple(var_args){
var args__58968__auto__ = [];
var len__58961__auto___62381 = arguments.length;
var i__58962__auto___62382 = (0);
while(true){
if((i__58962__auto___62382 < len__58961__auto___62381)){
args__58968__auto__.push((arguments[i__58962__auto___62382]));

var G__62383 = (i__58962__auto___62382 + (1));
i__58962__auto___62382 = G__62383;
continue;
} else {
}
break;
}

var argseq__58969__auto__ = ((((0) < args__58968__auto__.length))?(new cljs.core.IndexedSeq(args__58968__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__58969__auto__);
});})(g__60195__auto___62380))
;

cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__60195__auto___62380){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__60195__auto___62380),args);
});})(g__60195__auto___62380))
;

cljs.spec.impl.gen.tuple.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.tuple.cljs$lang$applyTo = ((function (g__60195__auto___62380){
return (function (seq62322){
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq62322));
});})(g__60195__auto___62380))
;


var g__60195__auto___62384 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.impl.gen.sample = ((function (g__60195__auto___62384){
return (function cljs$spec$impl$gen$sample(var_args){
var args__58968__auto__ = [];
var len__58961__auto___62385 = arguments.length;
var i__58962__auto___62386 = (0);
while(true){
if((i__58962__auto___62386 < len__58961__auto___62385)){
args__58968__auto__.push((arguments[i__58962__auto___62386]));

var G__62387 = (i__58962__auto___62386 + (1));
i__58962__auto___62386 = G__62387;
continue;
} else {
}
break;
}

var argseq__58969__auto__ = ((((0) < args__58968__auto__.length))?(new cljs.core.IndexedSeq(args__58968__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__58969__auto__);
});})(g__60195__auto___62384))
;

cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__60195__auto___62384){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__60195__auto___62384),args);
});})(g__60195__auto___62384))
;

cljs.spec.impl.gen.sample.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.sample.cljs$lang$applyTo = ((function (g__60195__auto___62384){
return (function (seq62323){
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq62323));
});})(g__60195__auto___62384))
;


var g__60195__auto___62388 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.impl.gen.return$ = ((function (g__60195__auto___62388){
return (function cljs$spec$impl$gen$return(var_args){
var args__58968__auto__ = [];
var len__58961__auto___62389 = arguments.length;
var i__58962__auto___62390 = (0);
while(true){
if((i__58962__auto___62390 < len__58961__auto___62389)){
args__58968__auto__.push((arguments[i__58962__auto___62390]));

var G__62391 = (i__58962__auto___62390 + (1));
i__58962__auto___62390 = G__62391;
continue;
} else {
}
break;
}

var argseq__58969__auto__ = ((((0) < args__58968__auto__.length))?(new cljs.core.IndexedSeq(args__58968__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__58969__auto__);
});})(g__60195__auto___62388))
;

cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__60195__auto___62388){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__60195__auto___62388),args);
});})(g__60195__auto___62388))
;

cljs.spec.impl.gen.return$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.return$.cljs$lang$applyTo = ((function (g__60195__auto___62388){
return (function (seq62324){
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq62324));
});})(g__60195__auto___62388))
;


var g__60195__auto___62392 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.impl.gen.large_integer_STAR_ = ((function (g__60195__auto___62392){
return (function cljs$spec$impl$gen$large_integer_STAR_(var_args){
var args__58968__auto__ = [];
var len__58961__auto___62393 = arguments.length;
var i__58962__auto___62394 = (0);
while(true){
if((i__58962__auto___62394 < len__58961__auto___62393)){
args__58968__auto__.push((arguments[i__58962__auto___62394]));

var G__62395 = (i__58962__auto___62394 + (1));
i__58962__auto___62394 = G__62395;
continue;
} else {
}
break;
}

var argseq__58969__auto__ = ((((0) < args__58968__auto__.length))?(new cljs.core.IndexedSeq(args__58968__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__58969__auto__);
});})(g__60195__auto___62392))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__60195__auto___62392){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__60195__auto___62392),args);
});})(g__60195__auto___62392))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$applyTo = ((function (g__60195__auto___62392){
return (function (seq62325){
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq62325));
});})(g__60195__auto___62392))
;


var g__60195__auto___62396 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double_STAR_ !== 'undefined')){
return clojure.test.check.generators.double_STAR_;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/double*
 */
cljs.spec.impl.gen.double_STAR_ = ((function (g__60195__auto___62396){
return (function cljs$spec$impl$gen$double_STAR_(var_args){
var args__58968__auto__ = [];
var len__58961__auto___62397 = arguments.length;
var i__58962__auto___62398 = (0);
while(true){
if((i__58962__auto___62398 < len__58961__auto___62397)){
args__58968__auto__.push((arguments[i__58962__auto___62398]));

var G__62399 = (i__58962__auto___62398 + (1));
i__58962__auto___62398 = G__62399;
continue;
} else {
}
break;
}

var argseq__58969__auto__ = ((((0) < args__58968__auto__.length))?(new cljs.core.IndexedSeq(args__58968__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__58969__auto__);
});})(g__60195__auto___62396))
;

cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__60195__auto___62396){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__60195__auto___62396),args);
});})(g__60195__auto___62396))
;

cljs.spec.impl.gen.double_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double_STAR_.cljs$lang$applyTo = ((function (g__60195__auto___62396){
return (function (seq62326){
return cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq62326));
});})(g__60195__auto___62396))
;


var g__60195__auto___62400 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.frequency !== 'undefined')){
return clojure.test.check.generators.frequency;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/frequency
 */
cljs.spec.impl.gen.frequency = ((function (g__60195__auto___62400){
return (function cljs$spec$impl$gen$frequency(var_args){
var args__58968__auto__ = [];
var len__58961__auto___62401 = arguments.length;
var i__58962__auto___62402 = (0);
while(true){
if((i__58962__auto___62402 < len__58961__auto___62401)){
args__58968__auto__.push((arguments[i__58962__auto___62402]));

var G__62403 = (i__58962__auto___62402 + (1));
i__58962__auto___62402 = G__62403;
continue;
} else {
}
break;
}

var argseq__58969__auto__ = ((((0) < args__58968__auto__.length))?(new cljs.core.IndexedSeq(args__58968__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.frequency.cljs$core$IFn$_invoke$arity$variadic(argseq__58969__auto__);
});})(g__60195__auto___62400))
;

cljs.spec.impl.gen.frequency.cljs$core$IFn$_invoke$arity$variadic = ((function (g__60195__auto___62400){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__60195__auto___62400),args);
});})(g__60195__auto___62400))
;

cljs.spec.impl.gen.frequency.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.frequency.cljs$lang$applyTo = ((function (g__60195__auto___62400){
return (function (seq62327){
return cljs.spec.impl.gen.frequency.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq62327));
});})(g__60195__auto___62400))
;

var g__60208__auto___62425 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.impl.gen.any = ((function (g__60208__auto___62425){
return (function cljs$spec$impl$gen$any(var_args){
var args__58968__auto__ = [];
var len__58961__auto___62426 = arguments.length;
var i__58962__auto___62427 = (0);
while(true){
if((i__58962__auto___62427 < len__58961__auto___62426)){
args__58968__auto__.push((arguments[i__58962__auto___62427]));

var G__62428 = (i__58962__auto___62427 + (1));
i__58962__auto___62427 = G__62428;
continue;
} else {
}
break;
}

var argseq__58969__auto__ = ((((0) < args__58968__auto__.length))?(new cljs.core.IndexedSeq(args__58968__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(argseq__58969__auto__);
});})(g__60208__auto___62425))
;

cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__60208__auto___62425){
return (function (args){
return cljs.core.deref.call(null,g__60208__auto___62425);
});})(g__60208__auto___62425))
;

cljs.spec.impl.gen.any.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any.cljs$lang$applyTo = ((function (g__60208__auto___62425){
return (function (seq62404){
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq62404));
});})(g__60208__auto___62425))
;


var g__60208__auto___62429 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.impl.gen.any_printable = ((function (g__60208__auto___62429){
return (function cljs$spec$impl$gen$any_printable(var_args){
var args__58968__auto__ = [];
var len__58961__auto___62430 = arguments.length;
var i__58962__auto___62431 = (0);
while(true){
if((i__58962__auto___62431 < len__58961__auto___62430)){
args__58968__auto__.push((arguments[i__58962__auto___62431]));

var G__62432 = (i__58962__auto___62431 + (1));
i__58962__auto___62431 = G__62432;
continue;
} else {
}
break;
}

var argseq__58969__auto__ = ((((0) < args__58968__auto__.length))?(new cljs.core.IndexedSeq(args__58968__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__58969__auto__);
});})(g__60208__auto___62429))
;

cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__60208__auto___62429){
return (function (args){
return cljs.core.deref.call(null,g__60208__auto___62429);
});})(g__60208__auto___62429))
;

cljs.spec.impl.gen.any_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any_printable.cljs$lang$applyTo = ((function (g__60208__auto___62429){
return (function (seq62405){
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq62405));
});})(g__60208__auto___62429))
;


var g__60208__auto___62433 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.impl.gen.boolean$ = ((function (g__60208__auto___62433){
return (function cljs$spec$impl$gen$boolean(var_args){
var args__58968__auto__ = [];
var len__58961__auto___62434 = arguments.length;
var i__58962__auto___62435 = (0);
while(true){
if((i__58962__auto___62435 < len__58961__auto___62434)){
args__58968__auto__.push((arguments[i__58962__auto___62435]));

var G__62436 = (i__58962__auto___62435 + (1));
i__58962__auto___62435 = G__62436;
continue;
} else {
}
break;
}

var argseq__58969__auto__ = ((((0) < args__58968__auto__.length))?(new cljs.core.IndexedSeq(args__58968__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__58969__auto__);
});})(g__60208__auto___62433))
;

cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__60208__auto___62433){
return (function (args){
return cljs.core.deref.call(null,g__60208__auto___62433);
});})(g__60208__auto___62433))
;

cljs.spec.impl.gen.boolean$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.boolean$.cljs$lang$applyTo = ((function (g__60208__auto___62433){
return (function (seq62406){
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq62406));
});})(g__60208__auto___62433))
;


var g__60208__auto___62437 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.impl.gen.char$ = ((function (g__60208__auto___62437){
return (function cljs$spec$impl$gen$char(var_args){
var args__58968__auto__ = [];
var len__58961__auto___62438 = arguments.length;
var i__58962__auto___62439 = (0);
while(true){
if((i__58962__auto___62439 < len__58961__auto___62438)){
args__58968__auto__.push((arguments[i__58962__auto___62439]));

var G__62440 = (i__58962__auto___62439 + (1));
i__58962__auto___62439 = G__62440;
continue;
} else {
}
break;
}

var argseq__58969__auto__ = ((((0) < args__58968__auto__.length))?(new cljs.core.IndexedSeq(args__58968__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__58969__auto__);
});})(g__60208__auto___62437))
;

cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__60208__auto___62437){
return (function (args){
return cljs.core.deref.call(null,g__60208__auto___62437);
});})(g__60208__auto___62437))
;

cljs.spec.impl.gen.char$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char$.cljs$lang$applyTo = ((function (g__60208__auto___62437){
return (function (seq62407){
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq62407));
});})(g__60208__auto___62437))
;


var g__60208__auto___62441 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.impl.gen.char_alpha = ((function (g__60208__auto___62441){
return (function cljs$spec$impl$gen$char_alpha(var_args){
var args__58968__auto__ = [];
var len__58961__auto___62442 = arguments.length;
var i__58962__auto___62443 = (0);
while(true){
if((i__58962__auto___62443 < len__58961__auto___62442)){
args__58968__auto__.push((arguments[i__58962__auto___62443]));

var G__62444 = (i__58962__auto___62443 + (1));
i__58962__auto___62443 = G__62444;
continue;
} else {
}
break;
}

var argseq__58969__auto__ = ((((0) < args__58968__auto__.length))?(new cljs.core.IndexedSeq(args__58968__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__58969__auto__);
});})(g__60208__auto___62441))
;

cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__60208__auto___62441){
return (function (args){
return cljs.core.deref.call(null,g__60208__auto___62441);
});})(g__60208__auto___62441))
;

cljs.spec.impl.gen.char_alpha.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alpha.cljs$lang$applyTo = ((function (g__60208__auto___62441){
return (function (seq62408){
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq62408));
});})(g__60208__auto___62441))
;


var g__60208__auto___62445 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.impl.gen.char_alphanumeric = ((function (g__60208__auto___62445){
return (function cljs$spec$impl$gen$char_alphanumeric(var_args){
var args__58968__auto__ = [];
var len__58961__auto___62446 = arguments.length;
var i__58962__auto___62447 = (0);
while(true){
if((i__58962__auto___62447 < len__58961__auto___62446)){
args__58968__auto__.push((arguments[i__58962__auto___62447]));

var G__62448 = (i__58962__auto___62447 + (1));
i__58962__auto___62447 = G__62448;
continue;
} else {
}
break;
}

var argseq__58969__auto__ = ((((0) < args__58968__auto__.length))?(new cljs.core.IndexedSeq(args__58968__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__58969__auto__);
});})(g__60208__auto___62445))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__60208__auto___62445){
return (function (args){
return cljs.core.deref.call(null,g__60208__auto___62445);
});})(g__60208__auto___62445))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$applyTo = ((function (g__60208__auto___62445){
return (function (seq62409){
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq62409));
});})(g__60208__auto___62445))
;


var g__60208__auto___62449 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.impl.gen.char_ascii = ((function (g__60208__auto___62449){
return (function cljs$spec$impl$gen$char_ascii(var_args){
var args__58968__auto__ = [];
var len__58961__auto___62450 = arguments.length;
var i__58962__auto___62451 = (0);
while(true){
if((i__58962__auto___62451 < len__58961__auto___62450)){
args__58968__auto__.push((arguments[i__58962__auto___62451]));

var G__62452 = (i__58962__auto___62451 + (1));
i__58962__auto___62451 = G__62452;
continue;
} else {
}
break;
}

var argseq__58969__auto__ = ((((0) < args__58968__auto__.length))?(new cljs.core.IndexedSeq(args__58968__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__58969__auto__);
});})(g__60208__auto___62449))
;

cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__60208__auto___62449){
return (function (args){
return cljs.core.deref.call(null,g__60208__auto___62449);
});})(g__60208__auto___62449))
;

cljs.spec.impl.gen.char_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_ascii.cljs$lang$applyTo = ((function (g__60208__auto___62449){
return (function (seq62410){
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq62410));
});})(g__60208__auto___62449))
;


var g__60208__auto___62453 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.impl.gen.double$ = ((function (g__60208__auto___62453){
return (function cljs$spec$impl$gen$double(var_args){
var args__58968__auto__ = [];
var len__58961__auto___62454 = arguments.length;
var i__58962__auto___62455 = (0);
while(true){
if((i__58962__auto___62455 < len__58961__auto___62454)){
args__58968__auto__.push((arguments[i__58962__auto___62455]));

var G__62456 = (i__58962__auto___62455 + (1));
i__58962__auto___62455 = G__62456;
continue;
} else {
}
break;
}

var argseq__58969__auto__ = ((((0) < args__58968__auto__.length))?(new cljs.core.IndexedSeq(args__58968__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__58969__auto__);
});})(g__60208__auto___62453))
;

cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__60208__auto___62453){
return (function (args){
return cljs.core.deref.call(null,g__60208__auto___62453);
});})(g__60208__auto___62453))
;

cljs.spec.impl.gen.double$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double$.cljs$lang$applyTo = ((function (g__60208__auto___62453){
return (function (seq62411){
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq62411));
});})(g__60208__auto___62453))
;


var g__60208__auto___62457 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.impl.gen.int$ = ((function (g__60208__auto___62457){
return (function cljs$spec$impl$gen$int(var_args){
var args__58968__auto__ = [];
var len__58961__auto___62458 = arguments.length;
var i__58962__auto___62459 = (0);
while(true){
if((i__58962__auto___62459 < len__58961__auto___62458)){
args__58968__auto__.push((arguments[i__58962__auto___62459]));

var G__62460 = (i__58962__auto___62459 + (1));
i__58962__auto___62459 = G__62460;
continue;
} else {
}
break;
}

var argseq__58969__auto__ = ((((0) < args__58968__auto__.length))?(new cljs.core.IndexedSeq(args__58968__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__58969__auto__);
});})(g__60208__auto___62457))
;

cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__60208__auto___62457){
return (function (args){
return cljs.core.deref.call(null,g__60208__auto___62457);
});})(g__60208__auto___62457))
;

cljs.spec.impl.gen.int$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.int$.cljs$lang$applyTo = ((function (g__60208__auto___62457){
return (function (seq62412){
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq62412));
});})(g__60208__auto___62457))
;


var g__60208__auto___62461 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.impl.gen.keyword = ((function (g__60208__auto___62461){
return (function cljs$spec$impl$gen$keyword(var_args){
var args__58968__auto__ = [];
var len__58961__auto___62462 = arguments.length;
var i__58962__auto___62463 = (0);
while(true){
if((i__58962__auto___62463 < len__58961__auto___62462)){
args__58968__auto__.push((arguments[i__58962__auto___62463]));

var G__62464 = (i__58962__auto___62463 + (1));
i__58962__auto___62463 = G__62464;
continue;
} else {
}
break;
}

var argseq__58969__auto__ = ((((0) < args__58968__auto__.length))?(new cljs.core.IndexedSeq(args__58968__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__58969__auto__);
});})(g__60208__auto___62461))
;

cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__60208__auto___62461){
return (function (args){
return cljs.core.deref.call(null,g__60208__auto___62461);
});})(g__60208__auto___62461))
;

cljs.spec.impl.gen.keyword.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword.cljs$lang$applyTo = ((function (g__60208__auto___62461){
return (function (seq62413){
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq62413));
});})(g__60208__auto___62461))
;


var g__60208__auto___62465 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.impl.gen.keyword_ns = ((function (g__60208__auto___62465){
return (function cljs$spec$impl$gen$keyword_ns(var_args){
var args__58968__auto__ = [];
var len__58961__auto___62466 = arguments.length;
var i__58962__auto___62467 = (0);
while(true){
if((i__58962__auto___62467 < len__58961__auto___62466)){
args__58968__auto__.push((arguments[i__58962__auto___62467]));

var G__62468 = (i__58962__auto___62467 + (1));
i__58962__auto___62467 = G__62468;
continue;
} else {
}
break;
}

var argseq__58969__auto__ = ((((0) < args__58968__auto__.length))?(new cljs.core.IndexedSeq(args__58968__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__58969__auto__);
});})(g__60208__auto___62465))
;

cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__60208__auto___62465){
return (function (args){
return cljs.core.deref.call(null,g__60208__auto___62465);
});})(g__60208__auto___62465))
;

cljs.spec.impl.gen.keyword_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword_ns.cljs$lang$applyTo = ((function (g__60208__auto___62465){
return (function (seq62414){
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq62414));
});})(g__60208__auto___62465))
;


var g__60208__auto___62469 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.impl.gen.large_integer = ((function (g__60208__auto___62469){
return (function cljs$spec$impl$gen$large_integer(var_args){
var args__58968__auto__ = [];
var len__58961__auto___62470 = arguments.length;
var i__58962__auto___62471 = (0);
while(true){
if((i__58962__auto___62471 < len__58961__auto___62470)){
args__58968__auto__.push((arguments[i__58962__auto___62471]));

var G__62472 = (i__58962__auto___62471 + (1));
i__58962__auto___62471 = G__62472;
continue;
} else {
}
break;
}

var argseq__58969__auto__ = ((((0) < args__58968__auto__.length))?(new cljs.core.IndexedSeq(args__58968__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__58969__auto__);
});})(g__60208__auto___62469))
;

cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__60208__auto___62469){
return (function (args){
return cljs.core.deref.call(null,g__60208__auto___62469);
});})(g__60208__auto___62469))
;

cljs.spec.impl.gen.large_integer.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer.cljs$lang$applyTo = ((function (g__60208__auto___62469){
return (function (seq62415){
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq62415));
});})(g__60208__auto___62469))
;


var g__60208__auto___62473 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.impl.gen.ratio = ((function (g__60208__auto___62473){
return (function cljs$spec$impl$gen$ratio(var_args){
var args__58968__auto__ = [];
var len__58961__auto___62474 = arguments.length;
var i__58962__auto___62475 = (0);
while(true){
if((i__58962__auto___62475 < len__58961__auto___62474)){
args__58968__auto__.push((arguments[i__58962__auto___62475]));

var G__62476 = (i__58962__auto___62475 + (1));
i__58962__auto___62475 = G__62476;
continue;
} else {
}
break;
}

var argseq__58969__auto__ = ((((0) < args__58968__auto__.length))?(new cljs.core.IndexedSeq(args__58968__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__58969__auto__);
});})(g__60208__auto___62473))
;

cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__60208__auto___62473){
return (function (args){
return cljs.core.deref.call(null,g__60208__auto___62473);
});})(g__60208__auto___62473))
;

cljs.spec.impl.gen.ratio.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.ratio.cljs$lang$applyTo = ((function (g__60208__auto___62473){
return (function (seq62416){
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq62416));
});})(g__60208__auto___62473))
;


var g__60208__auto___62477 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.impl.gen.simple_type = ((function (g__60208__auto___62477){
return (function cljs$spec$impl$gen$simple_type(var_args){
var args__58968__auto__ = [];
var len__58961__auto___62478 = arguments.length;
var i__58962__auto___62479 = (0);
while(true){
if((i__58962__auto___62479 < len__58961__auto___62478)){
args__58968__auto__.push((arguments[i__58962__auto___62479]));

var G__62480 = (i__58962__auto___62479 + (1));
i__58962__auto___62479 = G__62480;
continue;
} else {
}
break;
}

var argseq__58969__auto__ = ((((0) < args__58968__auto__.length))?(new cljs.core.IndexedSeq(args__58968__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__58969__auto__);
});})(g__60208__auto___62477))
;

cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__60208__auto___62477){
return (function (args){
return cljs.core.deref.call(null,g__60208__auto___62477);
});})(g__60208__auto___62477))
;

cljs.spec.impl.gen.simple_type.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type.cljs$lang$applyTo = ((function (g__60208__auto___62477){
return (function (seq62417){
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq62417));
});})(g__60208__auto___62477))
;


var g__60208__auto___62481 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.impl.gen.simple_type_printable = ((function (g__60208__auto___62481){
return (function cljs$spec$impl$gen$simple_type_printable(var_args){
var args__58968__auto__ = [];
var len__58961__auto___62482 = arguments.length;
var i__58962__auto___62483 = (0);
while(true){
if((i__58962__auto___62483 < len__58961__auto___62482)){
args__58968__auto__.push((arguments[i__58962__auto___62483]));

var G__62484 = (i__58962__auto___62483 + (1));
i__58962__auto___62483 = G__62484;
continue;
} else {
}
break;
}

var argseq__58969__auto__ = ((((0) < args__58968__auto__.length))?(new cljs.core.IndexedSeq(args__58968__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__58969__auto__);
});})(g__60208__auto___62481))
;

cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__60208__auto___62481){
return (function (args){
return cljs.core.deref.call(null,g__60208__auto___62481);
});})(g__60208__auto___62481))
;

cljs.spec.impl.gen.simple_type_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type_printable.cljs$lang$applyTo = ((function (g__60208__auto___62481){
return (function (seq62418){
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq62418));
});})(g__60208__auto___62481))
;


var g__60208__auto___62485 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.impl.gen.string = ((function (g__60208__auto___62485){
return (function cljs$spec$impl$gen$string(var_args){
var args__58968__auto__ = [];
var len__58961__auto___62486 = arguments.length;
var i__58962__auto___62487 = (0);
while(true){
if((i__58962__auto___62487 < len__58961__auto___62486)){
args__58968__auto__.push((arguments[i__58962__auto___62487]));

var G__62488 = (i__58962__auto___62487 + (1));
i__58962__auto___62487 = G__62488;
continue;
} else {
}
break;
}

var argseq__58969__auto__ = ((((0) < args__58968__auto__.length))?(new cljs.core.IndexedSeq(args__58968__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(argseq__58969__auto__);
});})(g__60208__auto___62485))
;

cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__60208__auto___62485){
return (function (args){
return cljs.core.deref.call(null,g__60208__auto___62485);
});})(g__60208__auto___62485))
;

cljs.spec.impl.gen.string.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string.cljs$lang$applyTo = ((function (g__60208__auto___62485){
return (function (seq62419){
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq62419));
});})(g__60208__auto___62485))
;


var g__60208__auto___62489 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.impl.gen.string_ascii = ((function (g__60208__auto___62489){
return (function cljs$spec$impl$gen$string_ascii(var_args){
var args__58968__auto__ = [];
var len__58961__auto___62490 = arguments.length;
var i__58962__auto___62491 = (0);
while(true){
if((i__58962__auto___62491 < len__58961__auto___62490)){
args__58968__auto__.push((arguments[i__58962__auto___62491]));

var G__62492 = (i__58962__auto___62491 + (1));
i__58962__auto___62491 = G__62492;
continue;
} else {
}
break;
}

var argseq__58969__auto__ = ((((0) < args__58968__auto__.length))?(new cljs.core.IndexedSeq(args__58968__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__58969__auto__);
});})(g__60208__auto___62489))
;

cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__60208__auto___62489){
return (function (args){
return cljs.core.deref.call(null,g__60208__auto___62489);
});})(g__60208__auto___62489))
;

cljs.spec.impl.gen.string_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_ascii.cljs$lang$applyTo = ((function (g__60208__auto___62489){
return (function (seq62420){
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq62420));
});})(g__60208__auto___62489))
;


var g__60208__auto___62493 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.impl.gen.string_alphanumeric = ((function (g__60208__auto___62493){
return (function cljs$spec$impl$gen$string_alphanumeric(var_args){
var args__58968__auto__ = [];
var len__58961__auto___62494 = arguments.length;
var i__58962__auto___62495 = (0);
while(true){
if((i__58962__auto___62495 < len__58961__auto___62494)){
args__58968__auto__.push((arguments[i__58962__auto___62495]));

var G__62496 = (i__58962__auto___62495 + (1));
i__58962__auto___62495 = G__62496;
continue;
} else {
}
break;
}

var argseq__58969__auto__ = ((((0) < args__58968__auto__.length))?(new cljs.core.IndexedSeq(args__58968__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__58969__auto__);
});})(g__60208__auto___62493))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__60208__auto___62493){
return (function (args){
return cljs.core.deref.call(null,g__60208__auto___62493);
});})(g__60208__auto___62493))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$applyTo = ((function (g__60208__auto___62493){
return (function (seq62421){
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq62421));
});})(g__60208__auto___62493))
;


var g__60208__auto___62497 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.impl.gen.symbol = ((function (g__60208__auto___62497){
return (function cljs$spec$impl$gen$symbol(var_args){
var args__58968__auto__ = [];
var len__58961__auto___62498 = arguments.length;
var i__58962__auto___62499 = (0);
while(true){
if((i__58962__auto___62499 < len__58961__auto___62498)){
args__58968__auto__.push((arguments[i__58962__auto___62499]));

var G__62500 = (i__58962__auto___62499 + (1));
i__58962__auto___62499 = G__62500;
continue;
} else {
}
break;
}

var argseq__58969__auto__ = ((((0) < args__58968__auto__.length))?(new cljs.core.IndexedSeq(args__58968__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__58969__auto__);
});})(g__60208__auto___62497))
;

cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__60208__auto___62497){
return (function (args){
return cljs.core.deref.call(null,g__60208__auto___62497);
});})(g__60208__auto___62497))
;

cljs.spec.impl.gen.symbol.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol.cljs$lang$applyTo = ((function (g__60208__auto___62497){
return (function (seq62422){
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq62422));
});})(g__60208__auto___62497))
;


var g__60208__auto___62501 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.impl.gen.symbol_ns = ((function (g__60208__auto___62501){
return (function cljs$spec$impl$gen$symbol_ns(var_args){
var args__58968__auto__ = [];
var len__58961__auto___62502 = arguments.length;
var i__58962__auto___62503 = (0);
while(true){
if((i__58962__auto___62503 < len__58961__auto___62502)){
args__58968__auto__.push((arguments[i__58962__auto___62503]));

var G__62504 = (i__58962__auto___62503 + (1));
i__58962__auto___62503 = G__62504;
continue;
} else {
}
break;
}

var argseq__58969__auto__ = ((((0) < args__58968__auto__.length))?(new cljs.core.IndexedSeq(args__58968__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__58969__auto__);
});})(g__60208__auto___62501))
;

cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__60208__auto___62501){
return (function (args){
return cljs.core.deref.call(null,g__60208__auto___62501);
});})(g__60208__auto___62501))
;

cljs.spec.impl.gen.symbol_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol_ns.cljs$lang$applyTo = ((function (g__60208__auto___62501){
return (function (seq62423){
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq62423));
});})(g__60208__auto___62501))
;


var g__60208__auto___62505 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.impl.gen.uuid = ((function (g__60208__auto___62505){
return (function cljs$spec$impl$gen$uuid(var_args){
var args__58968__auto__ = [];
var len__58961__auto___62506 = arguments.length;
var i__58962__auto___62507 = (0);
while(true){
if((i__58962__auto___62507 < len__58961__auto___62506)){
args__58968__auto__.push((arguments[i__58962__auto___62507]));

var G__62508 = (i__58962__auto___62507 + (1));
i__58962__auto___62507 = G__62508;
continue;
} else {
}
break;
}

var argseq__58969__auto__ = ((((0) < args__58968__auto__.length))?(new cljs.core.IndexedSeq(args__58968__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__58969__auto__);
});})(g__60208__auto___62505))
;

cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__60208__auto___62505){
return (function (args){
return cljs.core.deref.call(null,g__60208__auto___62505);
});})(g__60208__auto___62505))
;

cljs.spec.impl.gen.uuid.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.uuid.cljs$lang$applyTo = ((function (g__60208__auto___62505){
return (function (seq62424){
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq62424));
});})(g__60208__auto___62505))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.impl.gen.cat = (function cljs$spec$impl$gen$cat(var_args){
var args__58968__auto__ = [];
var len__58961__auto___62511 = arguments.length;
var i__58962__auto___62512 = (0);
while(true){
if((i__58962__auto___62512 < len__58961__auto___62511)){
args__58968__auto__.push((arguments[i__58962__auto___62512]));

var G__62513 = (i__58962__auto___62512 + (1));
i__58962__auto___62512 = G__62513;
continue;
} else {
}
break;
}

var argseq__58969__auto__ = ((((0) < args__58968__auto__.length))?(new cljs.core.IndexedSeq(args__58968__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__58969__auto__);
});

cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.impl.gen.fmap.call(null,(function (p1__62509_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__62509_SHARP_);
}),cljs.core.apply.call(null,cljs.spec.impl.gen.tuple,gens));
});

cljs.spec.impl.gen.cat.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.cat.cljs$lang$applyTo = (function (seq62510){
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq62510));
});

cljs.spec.impl.gen.qualified_QMARK_ = (function cljs$spec$impl$gen$qualified_QMARK_(ident){
return !((cljs.core.namespace.call(null,ident) == null));
});
cljs.spec.impl.gen.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.impl.gen.simple_type_printable.call(null);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.any_QMARK_,cljs.core.boolean_QMARK_,cljs.core.char_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.float_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.double_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.keyword_ns.call(null)),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.any_printable.call(null)], null)),cljs.spec.impl.gen.boolean$.call(null),cljs.spec.impl.gen.char$.call(null),cljs.spec.impl.gen.fmap.call(null,((function (simple){
return (function (p1__62514_SHARP_){
return (new Date(p1__62514_SHARP_));
});})(simple))
,cljs.spec.impl.gen.large_integer.call(null)),cljs.spec.impl.gen.symbol.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple)], null)),cljs.spec.impl.gen.double$.call(null),cljs.spec.impl.gen.set.call(null,simple),cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.elements.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.List.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentHashSet.EMPTY], null)),cljs.spec.impl.gen.string_alphanumeric.call(null),cljs.spec.impl.gen.double$.call(null),cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.vector.call(null,simple)], null)),cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.return$.call(null,(0)),cljs.spec.impl.gen.keyword.call(null),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max","max",61366548),(-1)], null)),cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.symbol_ns.call(null)], null)),cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.symbol_ns.call(null)], null))),cljs.spec.impl.gen.return$.call(null,true),cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(0)], null)),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(1)], null)),cljs.spec.impl.gen.uuid.call(null),cljs.spec.impl.gen.return$.call(null,false),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword.call(null),cljs.spec.impl.gen.symbol.call(null)], null)),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.double$.call(null)], null)),cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.symbol_ns.call(null)),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.set.call(null,simple),cljs.spec.impl.gen.string_alphanumeric.call(null)], null)),cljs.spec.impl.gen.symbol_ns.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.set.call(null,simple)], null))]);
}),null));
/**
 * Given a predicate, returns a built-in generator if one exists.
 */
cljs.spec.impl.gen.gen_for_pred = (function cljs$spec$impl$gen$gen_for_pred(pred){
if(cljs.core.set_QMARK_.call(null,pred)){
return cljs.spec.impl.gen.elements.call(null,pred);
} else {
return cljs.core.get.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.gen_builtins),pred);
}
});

//# sourceMappingURL=gen.js.map