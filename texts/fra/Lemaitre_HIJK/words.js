﻿/* globals console,document,window,cordova */
var wordHash = {};
wordHash["4_4"] = "sait,knows,1,sait,rootfrequency";
wordHash["4_18"] = "printemps,spring,2,printemps,rootfrequency";
wordHash["4_130"] = "printemps,spring,2,printemps,rootfrequency";
wordHash["4_378"] = "chers,expensive,2,chers,rootfrequency";
wordHash["4_462"] = "inutiles,useless,1,inutiles,rootfrequency";
wordHash["4_509"] = "longueur,length,3,longueur,rootfrequency";
wordHash["4_43"] = "jour,day,13,jour,rootfrequency";
wordHash["4_393"] = "jour,day,13,jour,rootfrequency";
wordHash["4_601"] = "ces,these,6,ces,rootfrequency";
wordHash["4_33"] = "une,a,57,une,rootfrequency";
wordHash["4_99"] = "une,a,57,une,rootfrequency";
wordHash["4_351"] = "une,one,57,une,rootfrequency";
wordHash["4_453"] = "une,an,57,une,rootfrequency";
wordHash["4_471"] = "acheta,bought,1,acheta,rootfrequency";
wordHash["4_128"] = "retour,return,1,retour,rootfrequency";
wordHash["4_311"] = "nez,nose,1,nez,rootfrequency";
wordHash["4_243"] = "envie,envy,1,envie,rootfrequency";
wordHash["4_534"] = "fruits,fruits,3,fruits,rootfrequency";
wordHash["4_586"] = "fruits,fruits,3,fruits,rootfrequency";
wordHash["4_620"] = "y,there,2,y,rootfrequency";
wordHash["4_9"] = "l'hiver,the&nbsp;winter,1,l'hiver,rootfrequency";
wordHash["4_239"] = "sur,on,29,sur,rootfrequency";
wordHash["4_350"] = "sur,on,29,sur,rootfrequency";
wordHash["4_544"] = "sur,on,29,sur,rootfrequency";
wordHash["4_606"] = "sur,on,29,sur,rootfrequency";
wordHash["4_347"] = "tenait,kept,1,tenait,rootfrequency";
wordHash["4_22"] = "long,long,6,long,rootfrequency";
wordHash["4_259"] = "long,long,6,long,rootfrequency";
wordHash["4_185"] = "par,by,9,par,rootfrequency";
wordHash["4_54"] = "pas,not,31,pas,rootfrequency";
wordHash["4_409"] = "pas,not,31,pas,rootfrequency";
wordHash["4_560"] = "pas,not,31,pas,rootfrequency";
wordHash["4_537"] = "ensuite,subsequently,1,ensuite,rootfrequency";
wordHash["4_386"] = "souvent,often,5,souvent,rootfrequency";
wordHash["4_71"] = "s'&#233;loigner,move&nbsp;away,1,s'&#233;loigner,rootfrequency";
wordHash["4_308"] = "moquait,made&nbsp;fun&nbsp;of,1,moquait,rootfrequency";
wordHash["4_503"] = "derri&#232;re,behind,8,derri&#232;re,rootfrequency";
wordHash["4_607"] = "l'image,the&nbsp;picture,1,l'image,rootfrequency";
wordHash["4_41"] = "nid,nest,1,nid,rootfrequency";
wordHash["4_432"] = "pailles,straws,1,pailles,rootfrequency";
wordHash["4_506"] = "cause,cause,2,cause,rootfrequency";
wordHash["4_546"] = "ventre,belly,9,ventre,rootfrequency";
wordHash["4_613"] = "ventre,belly,9,ventre,rootfrequency";
wordHash["4_270"] = "Nil,Nile,2,nil,rootfrequency";
wordHash["4_358"] = "Nil,Nile,2,nil,rootfrequency";
wordHash["4_497"] = "&#233;taient,were,8,&#233;taient,rootfrequency";
wordHash["4_515"] = "&#233;taient,were,8,&#233;taient,rootfrequency";
wordHash["4_488"] = "vivaient,lived,2,vivaient,rootfrequency";
wordHash["4_229"] = "&#233;l&#233;gante,elegant,1,&#233;l&#233;gante,rootfrequency";
wordHash["4_621"] = "cacher,hide,1,cacher,rootfrequency";
wordHash["4_496"] = "devant,front,8,devant,rootfrequency";
wordHash["4_572"] = "devant,before,8,devant,rootfrequency";
wordHash["4_593"] = "devant,front,8,devant,rootfrequency";
wordHash["4_317"] = "l'impertinence,the&nbsp;impertinence,1,l'impertinence,rootfrequency";
wordHash["4_253"] = "ripolin,ripolin,1,ripolin,rootfrequency";
wordHash["4_343"] = "coin,corner,3,coin,rootfrequency";
wordHash["4_50"] = "peu,bit,9,peu,rootfrequency";
wordHash["4_287"] = "peu,little,9,peu,rootfrequency";
wordHash["4_289"] = "peu,little,9,peu,rootfrequency";
wordHash["4_107"] = "nourrirent,fed,1,nourrirent,rootfrequency";
wordHash["4_23"] = "voyage,journey,1,voyage,rootfrequency";
wordHash["4_255"] = "Flatt&#233;,Flattered,1,flatt&#233;,rootfrequency";
wordHash["4_13"] = "chauds,warm,2,chauds,rootfrequency";
wordHash["4_140"] = "chauds,warm,2,chauds,rootfrequency";
wordHash["4_604"] = "vous,you,22,vous,rootfrequency";
wordHash["4_174"] = "sortes,kinds,1,sortes,rootfrequency";
wordHash["4_491"] = "paradis,paradise,2,paradis,rootfrequency";
wordHash["4_553"] = "paradis,paradise,2,paradis,rootfrequency";
wordHash["4_420"] = "canons,cannons,1,canons,rootfrequency";
wordHash["4_205"] = "Aussit&#244;t,As&nbsp;soon,3,aussit&#244;t,rootfrequency";
wordHash["4_418"] = "sifflets,whistles,1,sifflets,rootfrequency";
wordHash["4_199"] = "beaucoup,a&nbsp;lot,11,beaucoup,rootfrequency";
wordHash["4_104"] = "po&#234;le,stove,1,po&#234;le,rootfrequency";
wordHash["4_438"] = "amusant,fun,1,amusant,rootfrequency";
wordHash["4_17"] = "qu'au,than&nbsp;at&nbsp;the,1,qu'au,rootfrequency";
wordHash["4_454"] = "vieille,old,5,vieille,rootfrequency";
wordHash["4_65"] = "bord,edge,4,bord,rootfrequency";
wordHash["4_187"] = "fils,son,8,fils,rootfrequency";
wordHash["4_517"] = "extr&#234;mement,extremely,1,extr&#234;mement,rootfrequency";
wordHash["4_451"] = "vendit,sold,1,vendit,rootfrequency";
wordHash["4_132"] = "quand,when,19,quand,rootfrequency";
wordHash["4_457"] = "bric-&#224;-brac,odds&nbsp;and&nbsp;ends,1,bric-&#224;-brac,rootfrequency";
wordHash["4_277"] = "minarets,minarets,2,minarets,rootfrequency";
wordHash["4_363"] = "minarets,minarets,2,minarets,rootfrequency";
wordHash["4_151"] = "m&#232;re,mother,23,m&#232;re,rootfrequency";
wordHash["4_134"] = "parents,parents,7,parents,rootfrequency";
wordHash["4_406"] = "parents,parents,7,parents,rootfrequency";
wordHash["4_319"] = "lui,him,24,lui,rootfrequency";
wordHash["4_325"] = "lui,to&nbsp;him,24,lui,rootfrequency";
wordHash["4_329"] = "lui,him,24,lui,rootfrequency";
wordHash["4_415"] = "lui,him,24,lui,rootfrequency";
wordHash["4_448"] = "lui,him,24,lui,rootfrequency";
wordHash["4_573"] = "lui,him,24,lui,rootfrequency";
wordHash["4_481"] = "app&#233;tit,appetite,1,app&#233;tit,rootfrequency";
wordHash["4_76"] = "serait,would&nbsp;be,3,serait,rootfrequency";
wordHash["4_296"] = "m&#234;me,same,10,m&#234;me,rootfrequency";
wordHash["4_416"] = "m&#234;me,self,10,m&#234;me,rootfrequency";
wordHash["4_302"] = "col&#232;re,anger,1,col&#232;re,rootfrequency";
wordHash["4_27"] = "rassemblent,gather,1,rassemblent,rootfrequency";
wordHash["4_25"] = "m&#232;res,mothers,1,m&#232;res,rootfrequency";
wordHash["4_58"] = "fr&#232;res,brothers,4,fr&#232;res,rootfrequency";
wordHash["4_73"] = "famille,family,3,famille,rootfrequency";
wordHash["4_35"] = "petite,little,13,petite,rootfrequency";
wordHash["4_147"] = "petite,little,13,petite,rootfrequency";
wordHash["4_429"] = "d'abricots,of&nbsp;apricots,1,d'abricots,rootfrequency";
wordHash["4_323"] = "baguettes,little&nbsp;sticks,1,baguettes,rootfrequency";
wordHash["4_149"] = "reconnut,recognized,1,reconnut,rootfrequency";
wordHash["4_91"] = "maison,house,5,maison,rootfrequency";
wordHash["4_190"] = "maison,house,5,maison,rootfrequency";
wordHash["4_119"] = "tr&#232;s,very,14,tr&#232;s,rootfrequency";
wordHash["4_377"] = "tr&#232;s,very,14,tr&#232;s,rootfrequency";
wordHash["4_385"] = "tr&#232;s,very,14,tr&#232;s,rootfrequency";
wordHash["4_29"] = "petits,little&nbsp;ones,15,petits,rootfrequency";
wordHash["4_623"] = "petits,little&nbsp;ones,15,petits,rootfrequency";
wordHash["4_326"] = "servaient,served,1,servaient,rootfrequency";
wordHash["4_312"] = "d'ivrogne,of&nbsp;drunkard,1,d'ivrogne,rootfrequency";
wordHash["4_219"] = "dirait,would&nbsp;say,1,dirait,rootfrequency";
wordHash["4_182"] = "&#233;t&#233;,been,1,&#233;t&#233;,rootfrequency";
wordHash["4_584"] = "voler,to&nbsp;steal,1,voler,rootfrequency";
wordHash["4_380"] = "fallait,needed&nbsp;to,1,fallait,rootfrequency";
wordHash["4_414"] = "fabriquait,constructed,1,fabriquait,rootfrequency";
wordHash["4_292"] = "qu'il,that&nbsp;he,19,qu'il,rootfrequency";
wordHash["4_379"] = "qu'il,that&nbsp;it,19,qu'il,rootfrequency";
wordHash["4_467"] = "qu'il,that&nbsp;he,19,qu'il,rootfrequency";
wordHash["4_578"] = "qu'il,that&nbsp;it,19,qu'il,rootfrequency";
wordHash["4_234"] = "canards,ducks,2,canards,rootfrequency";
wordHash["4_213"] = "roucoulaient,cooed,1,roucoulaient,rootfrequency";
wordHash["4_45"] = "grand,big,7,grand,rootfrequency";
wordHash["4_193"] = "grand,great,7,grand,rootfrequency";
wordHash["4_480"] = "grand,large,7,grand,rootfrequency";
wordHash["4_441"] = "Apprends,Teach,1,apprends,rootfrequency";
wordHash["4_526"] = "attraper,to&nbsp;catch,2,attraper,rootfrequency";
wordHash["4_402"] = "Mathieu,Mathieu,2,mathieu,rootfrequency";
wordHash["4_446"] = "Mathieu,Mathieu,2,mathieu,rootfrequency";
wordHash["4_364"] = "Jouets,Toys,5,jouets,rootfrequency";
wordHash["4_374"] = "jouets,toys,5,jouets,rootfrequency";
wordHash["4_411"] = "jouets,toys,5,jouets,rootfrequency";
wordHash["4_459"] = "jouets,toys,5,jouets,rootfrequency";
wordHash["4_616"] = "sert,serves,1,sert,rootfrequency";
wordHash["4_384"] = "se cassaient,broke,1,se cassaient,rootfrequency";
wordHash["4_168"] = "cour,courtyard,2,cour,rootfrequency";
wordHash["4_225"] = "poules,hens,2,poules,rootfrequency";
wordHash["4_245"] = "longues,long,3,longues,rootfrequency";
wordHash["4_499"] = "longues,long,3,longues,rootfrequency";
wordHash["4_268"] = "l'&#201;gypte,the&nbsp;Egypt,1,l'&#201;gypte,rootfrequency";
wordHash["4_120"] = "bonne,good,1,bonne,rootfrequency";
wordHash["4_330"] = "avaient,had,2,avaient,rootfrequency";
wordHash["4_518"] = "voleurs,thieves,1,voleurs,rootfrequency";
wordHash["4_267"] = "patrie,homeland,1,patrie,rootfrequency";
wordHash["4_198"] = "eut,had,8,eut,rootfrequency";
wordHash["4_371"] = "Robert,Robert,3,robert,rootfrequency";
wordHash["4_440"] = "Robert,Robert,3,robert,rootfrequency";
wordHash["4_450"] = "Robert,Robert,3,robert,rootfrequency";
wordHash["4_183"] = "rapport&#233;,taken&nbsp;along,1,rapport&#233;,rootfrequency";
wordHash["4_300"] = "disait,said,5,disait,rootfrequency";
wordHash["4_170"] = "ch&#226;teau,castle,3,ch&#226;teau,rootfrequency";
wordHash["4_163"] = "ailes,wings,4,ailes,rootfrequency";
wordHash["4_210"] = "ailes,wings,4,ailes,rootfrequency";
wordHash["4_238"] = "bas,low,3,bas,rootfrequency";
wordHash["4_390"] = "l'amusaient,him&nbsp;amused,1,l'amusaient,rootfrequency";
wordHash["4_207"] = "l'ibis,the&nbsp;ibis,3,l'ibis,rootfrequency";
wordHash["4_248"] = "l'ibis,the&nbsp;ibis,3,l'ibis,rootfrequency";
wordHash["4_256"] = "l'ibis,the&nbsp;ibis,3,l'ibis,rootfrequency";
wordHash["4_196"] = "commencement,beginning,2,commencement,rootfrequency";
wordHash["4_291"] = "trouva,found,4,trouva,rootfrequency";
wordHash["4_78"] = "morte,died,1,morte,rootfrequency";
wordHash["4_316"] = "poussa,pushed,2,poussa,rootfrequency";
wordHash["4_533"] = "beaux,beautiful,6,beaux,rootfrequency";
wordHash["4_53"] = "put,could,3,put,rootfrequency";
wordHash["4_240"] = "pattes,legs,8,pattes,rootfrequency";
wordHash["4_494"] = "pattes,paws,8,pattes,rootfrequency";
wordHash["4_512"] = "pattes,paws,8,pattes,rootfrequency";
wordHash["4_591"] = "pattes,paws,8,pattes,rootfrequency";
wordHash["4_32"] = "Mais,But,48,mais,rootfrequency";
wordHash["4_286"] = "mais,but,48,mais,rootfrequency";
wordHash["4_412"] = "mais,but,48,mais,rootfrequency";
wordHash["4_504"] = "Mais,But,48,mais,rootfrequency";
wordHash["4_100"] = "cage,cage,3,cage,rootfrequency";
wordHash["4_145"] = "cage,cage,3,cage,rootfrequency";
wordHash["4_95"] = "Ils,They,19,ils,rootfrequency";
wordHash["4_105"] = "ils,they,19,ils,rootfrequency";
wordHash["4_519"] = "Ils,They,19,ils,rootfrequency";
wordHash["4_548"] = "ils,they,19,ils,rootfrequency";
wordHash["4_7"] = "hirondelles,swallows,2,hirondelles,rootfrequency";
wordHash["4_26"] = "hirondelles,swallows,2,hirondelles,rootfrequency";
wordHash["4_217"] = "beau,beautiful,4,beau,rootfrequency";
wordHash["4_172"] = "parmi,among,3,parmi,rootfrequency";
wordHash["4_594"] = "Depuis,Since,2,depuis,rootfrequency";
wordHash["4_605"] = "voyez,see,3,voyez,rootfrequency";
wordHash["4_38"] = "&#233;tait,was,20,&#233;tait,rootfrequency";
wordHash["4_117"] = "&#233;tait,was,20,&#233;tait,rootfrequency";
wordHash["4_192"] = "&#233;tait,was,20,&#233;tait,rootfrequency";
wordHash["4_376"] = "m&#233;canique,mechanism,2,m&#233;canique,rootfrequency";
wordHash["4_246"] = "jambes,legs,4,jambes,rootfrequency";
wordHash["4_328"] = "jambes,legs,4,jambes,rootfrequency";
wordHash["4_541"] = "poche,pocket,2,poche,rootfrequency";
wordHash["4_610"] = "poche,pocket,2,poche,rootfrequency";
wordHash["4_232"] = "bec,beak,2,bec,rootfrequency";
wordHash["4_563"] = "se plaignirent,complained,1,se plaignirent,rootfrequency";
wordHash["4_257"] = "marchait,marched,2,marchait,rootfrequency";
wordHash["4_320"] = "demander,to&nbsp;ask,3,demander,rootfrequency";
wordHash["4_208"] = "d&#233;ployait,unfolded,1,d&#233;ployait,rootfrequency";
wordHash["4_297"] = "chose,thing,2,chose,rootfrequency";
wordHash["4_0"] = "Hirondelle,Swallow,4,hirondelle,rootfrequency";
wordHash["4_36"] = "hirondelle,swallow,4,hirondelle,rootfrequency";
wordHash["4_148"] = "hirondelle,swallow,4,hirondelle,rootfrequency";
wordHash["4_428"] = "noyaux,kernels,1,noyaux,rootfrequency";
wordHash["4_204"] = "&#233;tranger,stranger,1,&#233;tranger,rootfrequency";
wordHash["4_228"] = "courbe,curve,1,courbe,rootfrequency";
wordHash["4_559"] = "pouvaient,could,2,pouvaient,rootfrequency";
wordHash["4_160"] = "jeta,threw,2,jeta,rootfrequency";
wordHash["4_70"] = "vit,saw,5,vit,rootfrequency";
wordHash["4_331"] = "co&#251;t&#233;,cost,1,co&#251;t&#233;,rootfrequency";
wordHash["4_571"] = "venir,come,1,venir,rootfrequency";
wordHash["4_306"] = "pintade,guinea&nbsp;fowl,1,pintade,rootfrequency";
wordHash["4_279"] = "Caire,Cairo,1,caire,rootfrequency";
wordHash["4_241"] = "regardaient,watched,3,regardaient,rootfrequency";
wordHash["4_535"] = "qu'ils,that&nbsp;they,5,qu'ils,rootfrequency";
wordHash["4_542"] = "qu'ils,that&nbsp;they,5,qu'ils,rootfrequency";
wordHash["4_334"] = "Alors,Then,12,alors,rootfrequency";
wordHash["4_30"] = "autour,around,4,autour,rootfrequency";
wordHash["4_524"] = "bras,arm,4,bras,rootfrequency";
wordHash["4_46"] = "vent,wind,1,vent,rootfrequency";
wordHash["4_226"] = "admiraient,admired,1,admiraient,rootfrequency";
wordHash["4_138"] = "des,from&nbsp;the,60,des,rootfrequency";
wordHash["4_154"] = "des,of&nbsp;the,60,des,rootfrequency";
wordHash["4_220"] = "des,of&nbsp;the,60,des,rootfrequency";
wordHash["4_271"] = "des,of&nbsp;the,60,des,rootfrequency";
wordHash["4_273"] = "des,of&nbsp;the,60,des,rootfrequency";
wordHash["4_276"] = "des,of&nbsp;the,60,des,rootfrequency";
wordHash["4_359"] = "des,of&nbsp;the,60,des,rootfrequency";
wordHash["4_362"] = "des,of&nbsp;the,60,des,rootfrequency";
wordHash["4_373"] = "des,of&nbsp;the,60,des,rootfrequency";
wordHash["4_417"] = "des,of&nbsp;the,60,des,rootfrequency";
wordHash["4_419"] = "des,of&nbsp;the,60,des,rootfrequency";
wordHash["4_422"] = "des,of&nbsp;the,60,des,rootfrequency";
wordHash["4_427"] = "des,of&nbsp;the,60,des,rootfrequency";
wordHash["4_431"] = "des,of&nbsp;the,60,des,rootfrequency";
wordHash["4_472"] = "des,of&nbsp;the,60,des,rootfrequency";
wordHash["4_85"] = "chagrin,sorrow,2,chagrin,rootfrequency";
wordHash["4_264"] = "parlait,spoke,2,parlait,rootfrequency";
wordHash["4_19"] = "Pour,for,30,pour,rootfrequency";
wordHash["4_201"] = "pour,for,30,pour,rootfrequency";
wordHash["4_525"] = "pour,for,30,pour,rootfrequency";
wordHash["4_577"] = "pour,for,30,pour,rootfrequency";
wordHash["4_619"] = "pour,for,30,pour,rootfrequency";
wordHash["4_164"] = "Ibis,Ibis,4,ibis,rootfrequency";
wordHash["4_178"] = "ibis,ibis,4,ibis,rootfrequency";
wordHash["4_337"] = "ibis,ibis,4,ibis,rootfrequency";
wordHash["4_47"] = "boitait,limped,2,boitait,rootfrequency";
wordHash["4_124"] = "boitait,limped,2,boitait,rootfrequency";
wordHash["4_143"] = "ouvrirent,opened,1,ouvrirent,rootfrequency";
wordHash["4_16"] = "reviennent,come&nbsp;back,1,reviennent,rootfrequency";
wordHash["4_521"] = "qu'&#224;,but&nbsp;to,1,qu'&#224;,rootfrequency";
wordHash["4_498"] = "aussi,as,11,aussi,rootfrequency";
wordHash["4_482"] = "Kangourou,Kangaroo,2,kangourou,rootfrequency";
wordHash["4_582"] = "difficile,difficult,1,difficile,rootfrequency";
wordHash["4_8"] = "s'en vont,themselves&nbsp;of&nbsp;it&nbsp;go,1,s'en vont,rootfrequency";
wordHash["4_112"] = "vers,worms,5,vers,rootfrequency";
wordHash["4_250"] = "semblaient,appeared,1,semblaient,rootfrequency";
wordHash["4_565"] = "bon,good,8,bon,rootfrequency";
wordHash["4_568"] = "bon,good,8,bon,rootfrequency";
wordHash["4_439"] = "dit,said,32,dit,rootfrequency";
wordHash["4_251"] = "peintes,painted,1,peintes,rootfrequency";
wordHash["4_589"] = "raccourcit,shortened,1,raccourcit,rootfrequency";
wordHash["4_561"] = "en faire,of&nbsp;it&nbsp;do,1,en faire,rootfrequency";
wordHash["4_274"] = "pyramides,pyramids,2,pyramides,rootfrequency";
wordHash["4_360"] = "pyramides,pyramids,2,pyramides,rootfrequency";
wordHash["4_352"] = "patte,paw,6,patte,rootfrequency";
wordHash["4_10"] = "dans,in,47,dans,rootfrequency";
wordHash["4_98"] = "dans,in,47,dans,rootfrequency";
wordHash["4_161"] = "dans,in,47,dans,rootfrequency";
wordHash["4_165"] = "Dans,In,47,dans,rootfrequency";
wordHash["4_341"] = "dans,in,47,dans,rootfrequency";
wordHash["4_489"] = "dans,in,47,dans,rootfrequency";
wordHash["4_538"] = "dans,in,47,dans,rootfrequency";
wordHash["4_487"] = "kangourous,kangaroos,4,kangourous,rootfrequency";
wordHash["4_514"] = "kangourous,kangaroos,4,kangourous,rootfrequency";
wordHash["4_575"] = "kangourous,kangaroos,4,kangourous,rootfrequency";
wordHash["4_599"] = "kangourous,kangaroos,4,kangourous,rootfrequency";
wordHash["4_401"] = "campagne,countryside,1,campagne,rootfrequency";
wordHash["4_321"] = "combien,how&nbsp;much,1,combien,rootfrequency";
wordHash["4_299"] = "dindon,turkey,1,dindon,rootfrequency";
wordHash["4_203"] = "noble,noble,1,noble,rootfrequency";
wordHash["4_293"] = "racontait,told,1,racontait,rootfrequency";
wordHash["4_349"] = "raide,stiff,1,raide,rootfrequency";
wordHash["4_382"] = "remonter,repair,2,remonter,rootfrequency";
wordHash["4_442"] = "moi,me,6,moi,rootfrequency";
wordHash["4_443"] = "comment,how,3,comment,rootfrequency";
wordHash["4_64"] = "au,at&nbsp;the,34,au,rootfrequency";
wordHash["4_127"] = "au,at&nbsp;the,34,au,rootfrequency";
wordHash["4_195"] = "Au,At&nbsp;the,34,au,rootfrequency";
wordHash["4_252"] = "au,at&nbsp;the,34,au,rootfrequency";
wordHash["4_564"] = "au,with&nbsp;the,34,au,rootfrequency";
wordHash["4_176"] = "volailles,fowl,1,volailles,rootfrequency";
wordHash["4_181"] = "avait,had,18,avait,rootfrequency";
wordHash["4_372"] = "avait,had,18,avait,rootfrequency";
wordHash["4_173"] = "toutes,all,9,toutes,rootfrequency";
wordHash["4_114"] = "bien,well,22,bien,rootfrequency";
wordHash["4_21"] = "ce,this,33,ce,rootfrequency";
wordHash["4_202"] = "ce,this,33,ce,rootfrequency";
wordHash["4_595"] = "ce,this,33,ce,rootfrequency";
wordHash["4_261"] = "large,wide,1,large,rootfrequency";
wordHash["4_303"] = "Quel,What,3,quel,rootfrequency";
wordHash["4_340"] = "retira,withdrew,3,retira,rootfrequency";
wordHash["4_469"] = "retira,got&nbsp;out,3,retira,rootfrequency";
wordHash["4_44"] = "de,of,184,de,rootfrequency";
wordHash["4_79"] = "de,of,184,de,rootfrequency";
wordHash["4_81"] = "de,of,184,de,rootfrequency";
wordHash["4_84"] = "de,of,184,de,rootfrequency";
wordHash["4_89"] = "de,of,184,de,rootfrequency";
wordHash["4_108"] = "de,of,184,de,rootfrequency";
wordHash["4_111"] = "de,of,184,de,rootfrequency";
wordHash["4_135"] = "de,of,184,de,rootfrequency";
wordHash["4_156"] = "de,of,184,de,rootfrequency";
wordHash["4_175"] = "de,of,184,de,rootfrequency";
wordHash["4_188"] = "de,of,184,de,rootfrequency";
wordHash["4_230"] = "de,of,184,de,rootfrequency";
wordHash["4_247"] = "de,of,184,de,rootfrequency";
wordHash["4_258"] = "de,of,184,de,rootfrequency";
wordHash["4_265"] = "de,of,184,de,rootfrequency";
wordHash["4_309"] = "de,of,184,de,rootfrequency";
wordHash["4_327"] = "de,of,184,de,rootfrequency";
wordHash["4_354"] = "de,of,184,de,rootfrequency";
wordHash["4_368"] = "de,of,184,de,rootfrequency";
wordHash["4_399"] = "de,of,184,de,rootfrequency";
wordHash["4_410"] = "de,of,184,de,rootfrequency";
wordHash["4_456"] = "de,of,184,de,rootfrequency";
wordHash["4_479"] = "de,with,184,de,rootfrequency";
wordHash["4_495"] = "de,of,184,de,rootfrequency";
wordHash["4_502"] = "de,of,184,de,rootfrequency";
wordHash["4_507"] = "de,of,184,de,rootfrequency";
wordHash["4_510"] = "de,of,184,de,rootfrequency";
wordHash["4_583"] = "de,of,184,de,rootfrequency";
wordHash["4_592"] = "de,of,184,de,rootfrequency";
wordHash["4_611"] = "de,of,184,de,rootfrequency";
wordHash["4_97"] = "mirent,set,2,mirent,rootfrequency";
wordHash["4_48"] = "encore,still,3,encore,rootfrequency";
wordHash["4_56"] = "avec,with,28,avec,rootfrequency";
wordHash["4_153"] = "avec,with,28,avec,rootfrequency";
wordHash["4_242"] = "avec,with,28,avec,rootfrequency";
wordHash["4_284"] = "avec,with,28,avec,rootfrequency";
wordHash["4_301"] = "avec,with,28,avec,rootfrequency";
wordHash["4_424"] = "avec,with,28,avec,rootfrequency";
wordHash["4_464"] = "avec,with,28,avec,rootfrequency";
wordHash["4_40"] = "du,from&nbsp;the,40,du,rootfrequency";
wordHash["4_66"] = "du,of&nbsp;the,40,du,rootfrequency";
wordHash["4_103"] = "du,of&nbsp;the,40,du,rootfrequency";
wordHash["4_129"] = "du,of&nbsp;the,40,du,rootfrequency";
wordHash["4_269"] = "du,of&nbsp;the,40,du,rootfrequency";
wordHash["4_278"] = "du,of&nbsp;the,40,du,rootfrequency";
wordHash["4_357"] = "du,of&nbsp;the,40,du,rootfrequency";
wordHash["4_425"] = "du,of&nbsp;the,40,du,rootfrequency";
wordHash["4_483"] = "Du,Of&nbsp;the,40,du,rootfrequency";
wordHash["4_552"] = "du,of&nbsp;the,40,du,rootfrequency";
wordHash["4_263"] = "leur,to&nbsp;them,22,leur,rootfrequency";
wordHash["4_579"] = "leur,for&nbsp;them,22,leur,rootfrequency";
wordHash["4_588"] = "leur,of&nbsp;them,22,leur,rootfrequency";
wordHash["4_612"] = "leur,their,22,leur,rootfrequency";
wordHash["4_615"] = "leur,them,22,leur,rootfrequency";
wordHash["4_455"] = "marchande,merchant,1,marchande,rootfrequency";
wordHash["4_547"] = "Ainsi,This&nbsp;way,5,ainsi,rootfrequency";
wordHash["4_116"] = "l'hirondelle,the&nbsp;swallow,2,l'hirondelle,rootfrequency";
wordHash["4_136"] = "l'hirondelle,the&nbsp;swallow,2,l'hirondelle,rootfrequency";
wordHash["4_118"] = "en,in,45,en,rootfrequency";
wordHash["4_222"] = "en,in,45,en,rootfrequency";
wordHash["4_260"] = "en,in,45,en,rootfrequency";
wordHash["4_468"] = "en,of&nbsp;it,45,en,rootfrequency";
wordHash["4_570"] = "fit,made,7,fit,rootfrequency";
wordHash["4_61"] = "Elle,She,54,elle,rootfrequency";
wordHash["4_69"] = "elle,she,54,elle,rootfrequency";
wordHash["4_75"] = "elle,she,54,elle,rootfrequency";
wordHash["4_158"] = "elle,she,54,elle,rootfrequency";
wordHash["4_14"] = "et,and,195,et,rootfrequency";
wordHash["4_51"] = "et,and,195,et,rootfrequency";
wordHash["4_59"] = "et,and,195,et,rootfrequency";
wordHash["4_74"] = "et,and,195,et,rootfrequency";
wordHash["4_83"] = "et,and,195,et,rootfrequency";
wordHash["4_110"] = "et,and,195,et,rootfrequency";
wordHash["4_122"] = "et,and,195,et,rootfrequency";
wordHash["4_131"] = "Et,And,195,et,rootfrequency";
wordHash["4_152"] = "et,and,195,et,rootfrequency";
wordHash["4_275"] = "et,and,195,et,rootfrequency";
wordHash["4_313"] = "et,and,195,et,rootfrequency";
wordHash["4_344"] = "Et,And,195,et,rootfrequency";
wordHash["4_361"] = "et,and,195,et,rootfrequency";
wordHash["4_387"] = "et,and,195,et,rootfrequency";
wordHash["4_430"] = "et,and,195,et,rootfrequency";
wordHash["4_437"] = "et,and,195,et,rootfrequency";
wordHash["4_463"] = "et,and,195,et,rootfrequency";
wordHash["4_529"] = "et,and,195,et,rootfrequency";
wordHash["4_576"] = "et,and,195,et,rootfrequency";
wordHash["4_608"] = "et,and,195,et,rootfrequency";
wordHash["4_31"] = "d'elles,of&nbsp;them,1,d'elles,rootfrequency";
wordHash["4_179"] = "rose,pink,3,rose,rootfrequency";
wordHash["4_254"] = "rose,pink,3,rose,rootfrequency";
wordHash["4_338"] = "rose,pink,3,rose,rootfrequency";
wordHash["4_551"] = "arbres,trees,2,arbres,rootfrequency";
wordHash["4_522"] = "&#233;tendre,extend,1,&#233;tendre,rootfrequency";
wordHash["4_194"] = "voyageur,traveller,1,voyageur,rootfrequency";
wordHash["4_282"] = "l'avait,him&nbsp;had,4,l'avait,rootfrequency";
wordHash["4_80"] = "faim,hunger,2,faim,rootfrequency";
wordHash["4_600"] = "ont,have,1,ont,rootfrequency";
wordHash["4_445"] = "fais,do,2,fais,rootfrequency";
wordHash["4_236"] = "sont,are,5,sont,rootfrequency";
wordHash["4_82"] = "froid,cold,2,froid,rootfrequency";
wordHash["4_484"] = "temps,time,7,temps,rootfrequency";
wordHash["4_596"] = "temps,time,7,temps,rootfrequency";
wordHash["4_318"] = "jusqu'&#224;,up&nbsp;to,2,jusqu'&#224;,rootfrequency";
wordHash["4_562"] = "autant,as&nbsp;much,1,autant,rootfrequency";
wordHash["4_121"] = "sant&#233;,health,1,sant&#233;,rootfrequency";
wordHash["4_67"] = "toit,roof,1,toit,rootfrequency";
wordHash["4_528"] = "branches,branches,3,branches,rootfrequency";
wordHash["4_597"] = "l&#224;,there,2,l&#224;,rootfrequency";
wordHash["4_423"] = "pompes,pomps,1,pompes,rootfrequency";
wordHash["4_492"] = "terrestre,earthly,1,terrestre,rootfrequency";
wordHash["4_60"] = "s&#156;urs,sisters,2,s&#156;urs,rootfrequency";
wordHash["4_155"] = "cris,cries,1,cris,rootfrequency";
wordHash["4_109"] = "mouches,flies,1,mouches,rootfrequency";
wordHash["4_556"] = "b&#234;tes,animals,4,b&#234;tes,rootfrequency";
wordHash["4_57"] = "ses,her,30,ses,rootfrequency";
wordHash["4_162"] = "ses,her,30,ses,rootfrequency";
wordHash["4_209"] = "ses,its,30,ses,rootfrequency";
wordHash["4_405"] = "ses,his,30,ses,rootfrequency";
wordHash["4_458"] = "ses,his,30,ses,rootfrequency";
wordHash["4_62"] = "resta,remained,1,resta,rootfrequency";
wordHash["4_216"] = "c'est,it&nbsp;is,15,c'est,rootfrequency";
wordHash["4_435"] = "c'est,it&nbsp;is,15,c'est,rootfrequency";
wordHash["4_68"] = "d'o&#249;,from&nbsp;where,3,d'o&#249;,rootfrequency";
wordHash["4_180"] = "Il,He,66,il,rootfrequency";
wordHash["4_262"] = "Il,He,66,il,rootfrequency";
wordHash["4_345"] = "il,he,66,il,rootfrequency";
wordHash["4_394"] = "il,he,66,il,rootfrequency";
wordHash["4_470"] = "il,he,66,il,rootfrequency";
wordHash["4_587"] = "il,he,66,il,rootfrequency";
wordHash["4_171"] = "se trouva,was&nbsp;found,1,se trouva,rootfrequency";
wordHash["4_473"] = "g&#226;teaux,cakes,3,g&#226;teaux,rootfrequency";
wordHash["4_157"] = "joie,joy,3,joie,rootfrequency";
wordHash["4_102"] = "c&#244;t&#233;,side,2,c&#244;t&#233;,rootfrequency";
wordHash["4_55"] = "s'envoler,fly&nbsp;away,1,s'envoler,rootfrequency";
wordHash["4_501"] = "celles,those,3,celles,rootfrequency";
wordHash["4_212"] = "pigeons,doves,1,pigeons,rootfrequency";
wordHash["4_93"] = "l'avaient,her&nbsp;had,2,l'avaient,rootfrequency";
wordHash["4_34"] = "pauvre,poor,11,pauvre,rootfrequency";
wordHash["4_336"] = "pauvre,poor,11,pauvre,rootfrequency";
wordHash["4_391"] = "pas du tout,not&nbsp;at&nbsp;all,3,pas du tout,rootfrequency";
wordHash["4_285"] = "respect,respect,1,respect,rootfrequency";
wordHash["4_426"] = "sureau,elderberry&#8209;wood,1,sureau,rootfrequency";
wordHash["4_449"] = "apprit,taught,2,apprit,rootfrequency";
wordHash["4_294"] = "toujours,always,4,toujours,rootfrequency";
wordHash["4_381"] = "toujours,always,4,toujours,rootfrequency";
wordHash["4_485"] = "o&#249;,where,10,o&#249;,rootfrequency";
wordHash["4_461"] = "devenus,become,2,devenus,rootfrequency";
wordHash["4_516"] = "devenus,become,2,devenus,rootfrequency";
wordHash["4_184"] = "d'&#201;gypte,from&nbsp;Egypt,1,d'&#201;gypte,rootfrequency";
wordHash["4_90"] = "la,the,139,la,rootfrequency";
wordHash["4_96"] = "la,her,139,la,rootfrequency";
wordHash["4_106"] = "la,her,139,la,rootfrequency";
wordHash["4_144"] = "la,the,139,la,rootfrequency";
wordHash["4_146"] = "La,The,139,la,rootfrequency";
wordHash["4_166"] = "la,the,139,la,rootfrequency";
wordHash["4_189"] = "la,the,139,la,rootfrequency";
wordHash["4_227"] = "la,the,139,la,rootfrequency";
wordHash["4_295"] = "la,the,139,la,rootfrequency";
wordHash["4_305"] = "La,The,139,la,rootfrequency";
wordHash["4_369"] = "la,the,139,la,rootfrequency";
wordHash["4_400"] = "la,the,139,la,rootfrequency";
wordHash["4_539"] = "la,the,139,la,rootfrequency";
wordHash["4_609"] = "la,the,139,la,rootfrequency";
wordHash["4_333"] = "centim&#232;tre,centimeter,1,centim&#232;tre,rootfrequency";
wordHash["4_2"] = "le,the,129,le,rootfrequency";
wordHash["4_186"] = "le,the,129,le,rootfrequency";
wordHash["4_298"] = "Le,The,129,le,rootfrequency";
wordHash["4_332"] = "le,the,129,le,rootfrequency";
wordHash["4_335"] = "le,the,129,le,rootfrequency";
wordHash["4_447"] = "le,it,129,le,rootfrequency";
wordHash["4_490"] = "le,the,129,le,rootfrequency";
wordHash["4_523"] = "le,the,129,le,rootfrequency";
wordHash["4_545"] = "le,the,129,le,rootfrequency";
wordHash["4_567"] = "Le,The,129,le,rootfrequency";
wordHash["4_370"] = "ville,town,3,ville,rootfrequency";
wordHash["4_540"] = "grande,large,4,grande,rootfrequency";
wordHash["4_366"] = "petit,little,28,petit,rootfrequency";
wordHash["4_397"] = "petit,little,28,petit,rootfrequency";
wordHash["4_167"] = "basse,low,2,basse,rootfrequency";
wordHash["4_436"] = "joli,pretty,5,joli,rootfrequency";
wordHash["4_88"] = "enfants,children,16,enfants,rootfrequency";
wordHash["4_142"] = "enfants,children,16,enfants,rootfrequency";
wordHash["4_477"] = "enfants,children,16,enfants,rootfrequency";
wordHash["4_304"] = "rab&#226;cheur,bore,1,rab&#226;cheur,rootfrequency";
wordHash["4_395"] = "rencontra,met,1,rencontra,rootfrequency";
wordHash["4_466"] = "sous,pennies,6,sous,rootfrequency";
wordHash["4_15"] = "ne,not,42,ne,rootfrequency";
wordHash["4_52"] = "ne,not,42,ne,rootfrequency";
wordHash["4_92"] = "ne,not,42,ne,rootfrequency";
wordHash["4_123"] = "ne,not,42,ne,rootfrequency";
wordHash["4_389"] = "ne,not,42,ne,rootfrequency";
wordHash["4_407"] = "ne,not,42,ne,rootfrequency";
wordHash["4_558"] = "ne,not,42,ne,rootfrequency";
wordHash["4_614"] = "ne,not,42,ne,rootfrequency";
wordHash["4_566"] = "Dieu,God,2,dieu,rootfrequency";
wordHash["4_569"] = "Dieu,God,2,dieu,rootfrequency";
wordHash["4_137"] = "revinrent,came&nbsp;back,1,revinrent,rootfrequency";
wordHash["4_214"] = "Oh,Oh,6,oh,rootfrequency";
wordHash["4_433"] = "Oh,Oh,6,oh,rootfrequency";
wordHash["4_197"] = "on,they,20,on,rootfrequency";
wordHash["4_218"] = "On,One,20,on,rootfrequency";
wordHash["4_281"] = "on,they,20,on,rootfrequency";
wordHash["4_290"] = "on,they,20,on,rootfrequency";
wordHash["4_478"] = "mang&#232;rent,ate,1,mang&#232;rent,rootfrequency";
wordHash["4_421"] = "ou,or,5,ou,rootfrequency";
wordHash["4_580"] = "f&#251;t,was,2,f&#251;t,rootfrequency";
wordHash["4_223"] = "fleur,bloom,2,fleur,rootfrequency";
wordHash["4_221"] = "p&#234;chers,peach&nbsp;trees,1,p&#234;chers,rootfrequency";
wordHash["4_28"] = "leurs,their,14,leurs,rootfrequency";
wordHash["4_493"] = "leurs,their,14,leurs,rootfrequency";
wordHash["4_511"] = "leurs,their,14,leurs,rootfrequency";
wordHash["4_622"] = "leurs,their,14,leurs,rootfrequency";
wordHash["4_536"] = "enfouissaient,hid,1,enfouissaient,rootfrequency";
wordHash["4_549"] = "d&#233;pouillaient,stripped,1,d&#233;pouillaient,rootfrequency";
wordHash["4_353"] = "r&#234;vant,dreaming,1,r&#234;vant,rootfrequency";
wordHash["4_555"] = "autres,other,6,autres,rootfrequency";
wordHash["4_367"] = "gar&#231;on,boy,4,gar&#231;on,rootfrequency";
wordHash["4_398"] = "gar&#231;on,boy,4,gar&#231;on,rootfrequency";
wordHash["4_543"] = "portent,carry,1,portent,rootfrequency";
wordHash["4_125"] = "plus,more,24,plus,rootfrequency";
wordHash["4_532"] = "plus,most,24,plus,rootfrequency";
wordHash["4_581"] = "plus,more,24,plus,rootfrequency";
wordHash["4_617"] = "plus,more,24,plus,rootfrequency";
wordHash["4_283"] = "&#233;cout&#233;,listened&nbsp;to,2,&#233;cout&#233;,rootfrequency";
wordHash["4_94"] = "recueillie,gathered&nbsp;up,1,recueillie,rootfrequency";
wordHash["4_520"] = "n'avaient,not&nbsp;had,2,n'avaient,rootfrequency";
wordHash["4_3"] = "monde,world,6,monde,rootfrequency";
wordHash["4_169"] = "d'un,of&nbsp;a,4,d'un,rootfrequency";
wordHash["4_6"] = "les,the,126,les,rootfrequency";
wordHash["4_11"] = "les,the,126,les,rootfrequency";
wordHash["4_24"] = "les,the,126,les,rootfrequency";
wordHash["4_87"] = "les,the,126,les,rootfrequency";
wordHash["4_133"] = "les,the,126,les,rootfrequency";
wordHash["4_141"] = "les,the,126,les,rootfrequency";
wordHash["4_211"] = "les,the,126,les,rootfrequency";
wordHash["4_224"] = "Les,The,126,les,rootfrequency";
wordHash["4_233"] = "Les,The,126,les,rootfrequency";
wordHash["4_244"] = "les,the,126,les,rootfrequency";
wordHash["4_322"] = "les,the,126,les,rootfrequency";
wordHash["4_465"] = "les,the,126,les,rootfrequency";
wordHash["4_475"] = "les,the,126,les,rootfrequency";
wordHash["4_486"] = "les,the,126,les,rootfrequency";
wordHash["4_513"] = "les,the,126,les,rootfrequency";
wordHash["4_527"] = "les,the,126,les,rootfrequency";
wordHash["4_531"] = "les,the,126,les,rootfrequency";
wordHash["4_550"] = "les,the,126,les,rootfrequency";
wordHash["4_554"] = "Les,The,126,les,rootfrequency";
wordHash["4_574"] = "les,the,126,les,rootfrequency";
wordHash["4_585"] = "les,the,126,les,rootfrequency";
wordHash["4_590"] = "les,the,126,les,rootfrequency";
wordHash["4_598"] = "les,the,126,les,rootfrequency";
wordHash["4_5"] = "que,that,60,que,rootfrequency";
wordHash["4_115"] = "que,that,60,que,rootfrequency";
wordHash["4_206"] = "que,that,60,que,rootfrequency";
wordHash["4_215"] = "que,what,60,que,rootfrequency";
wordHash["4_434"] = "que,what,60,que,rootfrequency";
wordHash["4_474"] = "que,that,60,que,rootfrequency";
wordHash["4_500"] = "que,as,60,que,rootfrequency";
wordHash["4_603"] = "que,that,60,que,rootfrequency";
wordHash["4_618"] = "que,than,60,que,rootfrequency";
wordHash["4_72"] = "sa,her,36,sa,rootfrequency";
wordHash["4_150"] = "sa,her,36,sa,rootfrequency";
wordHash["4_266"] = "sa,his,36,sa,rootfrequency";
wordHash["4_476"] = "deux,two,5,deux,rootfrequency";
wordHash["4_231"] = "son,its,41,son,rootfrequency";
wordHash["4_310"] = "son,his,41,son,rootfrequency";
wordHash["4_355"] = "son,his,41,son,rootfrequency";
wordHash["4_37"] = "qui,who,60,qui,rootfrequency";
wordHash["4_191"] = "qui,who,60,qui,rootfrequency";
wordHash["4_235"] = "qui,who,60,qui,rootfrequency";
wordHash["4_249"] = "qui,that,60,qui,rootfrequency";
wordHash["4_324"] = "qui,that,60,qui,rootfrequency";
wordHash["4_383"] = "qui,that,60,qui,rootfrequency";
wordHash["4_388"] = "qui,which,60,qui,rootfrequency";
wordHash["4_404"] = "qui,whom,60,qui,rootfrequency";
wordHash["4_413"] = "qui,who,60,qui,rootfrequency";
wordHash["4_557"] = "qui,which,60,qui,rootfrequency";
wordHash["4_159"] = "se,herself,38,se,rootfrequency";
wordHash["4_307"] = "se,herself,38,se,rootfrequency";
wordHash["4_339"] = "se,himself,38,se,rootfrequency";
wordHash["4_346"] = "se,himself,38,se,rootfrequency";
wordHash["4_77"] = "certainement,certainly,1,certainement,rootfrequency";
wordHash["4_272"] = "autruches,ostriches,1,autruches,rootfrequency";
wordHash["4_86"] = "si,if,31,si,rootfrequency";
wordHash["4_113"] = "si,so,31,si,rootfrequency";
wordHash["4_237"] = "si,so,31,si,rootfrequency";
wordHash["4_602"] = "moignons,stumps,1,moignons,rootfrequency";
wordHash["4_508"] = "cette,this,4,cette,rootfrequency";
wordHash["4_1"] = "Tout,All,25,tout,rootfrequency";
wordHash["4_348"] = "tout,all,25,tout,rootfrequency";
wordHash["4_126"] = "du tout,at&nbsp;all,1,du tout,rootfrequency";
wordHash["4_460"] = "m&#233;caniques,mechanical,1,m&#233;caniques,rootfrequency";
wordHash["4_200"] = "d'&#233;gards,of&nbsp;politeness,1,d'&#233;gards,rootfrequency";
wordHash["4_315"] = "caneton,male&nbsp;duck,3,caneton,rootfrequency";
wordHash["4_12"] = "pays,countries,5,pays,rootfrequency";
wordHash["4_139"] = "pays,countries,5,pays,rootfrequency";
wordHash["4_356"] = "pays,country,5,pays,rootfrequency";
wordHash["4_408"] = "donnaient,gave,1,donnaient,rootfrequency";
wordHash["4_101"] = "&#224;,at,81,&#224;,rootfrequency";
wordHash["4_288"] = "&#224;,by,81,&#224;,rootfrequency";
wordHash["4_375"] = "&#224;,at,81,&#224;,rootfrequency";
wordHash["4_403"] = "&#224;,to,81,&#224;,rootfrequency";
wordHash["4_452"] = "&#224;,to,81,&#224;,rootfrequency";
wordHash["4_505"] = "&#224;,by,81,&#224;,rootfrequency";
wordHash["4_444"] = "tu,you,19,tu,rootfrequency";
wordHash["4_39"] = "tomb&#233;e,fallen,1,tomb&#233;e,rootfrequency";
wordHash["4_530"] = "cueillir,pick,1,cueillir,rootfrequency";
wordHash["4_20"] = "faire,to&nbsp;make,3,faire,rootfrequency";
wordHash["4_280"] = "D'abord,Initially,2,d'abord,rootfrequency";
wordHash["4_63"] = "tristement,sadly,2,tristement,rootfrequency";
wordHash["4_42"] = "un,one,83,un,rootfrequency";
wordHash["4_49"] = "un,a,83,un,rootfrequency";
wordHash["4_177"] = "un,an,83,un,rootfrequency";
wordHash["4_314"] = "un,a,83,un,rootfrequency";
wordHash["4_342"] = "un,a,83,un,rootfrequency";
wordHash["4_365"] = "Un,A,83,un,rootfrequency";
wordHash["4_392"] = "Un,One,83,un,rootfrequency";
wordHash["4_396"] = "un,a,83,un,rootfrequency";
