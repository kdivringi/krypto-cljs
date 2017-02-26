// Compiled by ClojureScript 1.9.473 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__61243){
var map__61268 = p__61243;
var map__61268__$1 = ((((!((map__61268 == null)))?((((map__61268.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61268.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__61268):map__61268);
var m = map__61268__$1;
var n = cljs.core.get.call(null,map__61268__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__61268__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4657__auto__)){
var ns = temp__4657__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),cljs.core.str.cljs$core$IFn$_invoke$arity$1("/")].join('');
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__61270_61292 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__61271_61293 = null;
var count__61272_61294 = (0);
var i__61273_61295 = (0);
while(true){
if((i__61273_61295 < count__61272_61294)){
var f_61296 = cljs.core._nth.call(null,chunk__61271_61293,i__61273_61295);
cljs.core.println.call(null,"  ",f_61296);

var G__61297 = seq__61270_61292;
var G__61298 = chunk__61271_61293;
var G__61299 = count__61272_61294;
var G__61300 = (i__61273_61295 + (1));
seq__61270_61292 = G__61297;
chunk__61271_61293 = G__61298;
count__61272_61294 = G__61299;
i__61273_61295 = G__61300;
continue;
} else {
var temp__4657__auto___61301 = cljs.core.seq.call(null,seq__61270_61292);
if(temp__4657__auto___61301){
var seq__61270_61302__$1 = temp__4657__auto___61301;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__61270_61302__$1)){
var c__58667__auto___61303 = cljs.core.chunk_first.call(null,seq__61270_61302__$1);
var G__61304 = cljs.core.chunk_rest.call(null,seq__61270_61302__$1);
var G__61305 = c__58667__auto___61303;
var G__61306 = cljs.core.count.call(null,c__58667__auto___61303);
var G__61307 = (0);
seq__61270_61292 = G__61304;
chunk__61271_61293 = G__61305;
count__61272_61294 = G__61306;
i__61273_61295 = G__61307;
continue;
} else {
var f_61308 = cljs.core.first.call(null,seq__61270_61302__$1);
cljs.core.println.call(null,"  ",f_61308);

var G__61309 = cljs.core.next.call(null,seq__61270_61302__$1);
var G__61310 = null;
var G__61311 = (0);
var G__61312 = (0);
seq__61270_61292 = G__61309;
chunk__61271_61293 = G__61310;
count__61272_61294 = G__61311;
i__61273_61295 = G__61312;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_61313 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__57848__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__57848__auto__)){
return or__57848__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_61313);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_61313)))?cljs.core.second.call(null,arglists_61313):arglists_61313));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n  Please see http://clojure.org/"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n  Please see http://clojure.org/special_forms#"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__61274_61314 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__61275_61315 = null;
var count__61276_61316 = (0);
var i__61277_61317 = (0);
while(true){
if((i__61277_61317 < count__61276_61316)){
var vec__61278_61318 = cljs.core._nth.call(null,chunk__61275_61315,i__61277_61317);
var name_61319 = cljs.core.nth.call(null,vec__61278_61318,(0),null);
var map__61281_61320 = cljs.core.nth.call(null,vec__61278_61318,(1),null);
var map__61281_61321__$1 = ((((!((map__61281_61320 == null)))?((((map__61281_61320.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61281_61320.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__61281_61320):map__61281_61320);
var doc_61322 = cljs.core.get.call(null,map__61281_61321__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_61323 = cljs.core.get.call(null,map__61281_61321__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_61319);

cljs.core.println.call(null," ",arglists_61323);

if(cljs.core.truth_(doc_61322)){
cljs.core.println.call(null," ",doc_61322);
} else {
}

var G__61324 = seq__61274_61314;
var G__61325 = chunk__61275_61315;
var G__61326 = count__61276_61316;
var G__61327 = (i__61277_61317 + (1));
seq__61274_61314 = G__61324;
chunk__61275_61315 = G__61325;
count__61276_61316 = G__61326;
i__61277_61317 = G__61327;
continue;
} else {
var temp__4657__auto___61328 = cljs.core.seq.call(null,seq__61274_61314);
if(temp__4657__auto___61328){
var seq__61274_61329__$1 = temp__4657__auto___61328;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__61274_61329__$1)){
var c__58667__auto___61330 = cljs.core.chunk_first.call(null,seq__61274_61329__$1);
var G__61331 = cljs.core.chunk_rest.call(null,seq__61274_61329__$1);
var G__61332 = c__58667__auto___61330;
var G__61333 = cljs.core.count.call(null,c__58667__auto___61330);
var G__61334 = (0);
seq__61274_61314 = G__61331;
chunk__61275_61315 = G__61332;
count__61276_61316 = G__61333;
i__61277_61317 = G__61334;
continue;
} else {
var vec__61283_61335 = cljs.core.first.call(null,seq__61274_61329__$1);
var name_61336 = cljs.core.nth.call(null,vec__61283_61335,(0),null);
var map__61286_61337 = cljs.core.nth.call(null,vec__61283_61335,(1),null);
var map__61286_61338__$1 = ((((!((map__61286_61337 == null)))?((((map__61286_61337.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61286_61337.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__61286_61337):map__61286_61337);
var doc_61339 = cljs.core.get.call(null,map__61286_61338__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_61340 = cljs.core.get.call(null,map__61286_61338__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_61336);

cljs.core.println.call(null," ",arglists_61340);

if(cljs.core.truth_(doc_61339)){
cljs.core.println.call(null," ",doc_61339);
} else {
}

var G__61341 = cljs.core.next.call(null,seq__61274_61329__$1);
var G__61342 = null;
var G__61343 = (0);
var G__61344 = (0);
seq__61274_61314 = G__61341;
chunk__61275_61315 = G__61342;
count__61276_61316 = G__61343;
i__61277_61317 = G__61344;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__4657__auto__ = cljs.spec.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__4657__auto__)){
var fnspec = temp__4657__auto__;
cljs.core.print.call(null,"Spec");

var seq__61288 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__61289 = null;
var count__61290 = (0);
var i__61291 = (0);
while(true){
if((i__61291 < count__61290)){
var role = cljs.core._nth.call(null,chunk__61289,i__61291);
var temp__4657__auto___61345__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___61345__$1)){
var spec_61346 = temp__4657__auto___61345__$1;
cljs.core.print.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(":")].join(''),cljs.spec.describe.call(null,spec_61346));
} else {
}

var G__61347 = seq__61288;
var G__61348 = chunk__61289;
var G__61349 = count__61290;
var G__61350 = (i__61291 + (1));
seq__61288 = G__61347;
chunk__61289 = G__61348;
count__61290 = G__61349;
i__61291 = G__61350;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__61288);
if(temp__4657__auto____$1){
var seq__61288__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__61288__$1)){
var c__58667__auto__ = cljs.core.chunk_first.call(null,seq__61288__$1);
var G__61351 = cljs.core.chunk_rest.call(null,seq__61288__$1);
var G__61352 = c__58667__auto__;
var G__61353 = cljs.core.count.call(null,c__58667__auto__);
var G__61354 = (0);
seq__61288 = G__61351;
chunk__61289 = G__61352;
count__61290 = G__61353;
i__61291 = G__61354;
continue;
} else {
var role = cljs.core.first.call(null,seq__61288__$1);
var temp__4657__auto___61355__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___61355__$2)){
var spec_61356 = temp__4657__auto___61355__$2;
cljs.core.print.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(":")].join(''),cljs.spec.describe.call(null,spec_61356));
} else {
}

var G__61357 = cljs.core.next.call(null,seq__61288__$1);
var G__61358 = null;
var G__61359 = (0);
var G__61360 = (0);
seq__61288 = G__61357;
chunk__61289 = G__61358;
count__61290 = G__61359;
i__61291 = G__61360;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map