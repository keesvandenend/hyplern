﻿/* globals console,document,window,cordova */
var wordHash = {};
wordHash["3_472"] = "&#233;paules,shoulders,1,&#233;paules,rootfrequency";
wordHash["3_423"] = "suite,following,1,suite,rootfrequency";
wordHash["3_114"] = "manquait,missed,1,manquait,rootfrequency";
wordHash["3_260"] = "va,goes,2,va,rootfrequency";
wordHash["3_17"] = "habite,lives,1,habite,rootfrequency";
wordHash["3_453"] = "n'avan&#231;ait,not&nbsp;advanced,1,n'avan&#231;ait,rootfrequency";
wordHash["3_117"] = "jour,day,13,jour,rootfrequency";
wordHash["3_212"] = "afin,so,2,afin,rootfrequency";
wordHash["3_443"] = "bavant,drooling,1,bavant,rootfrequency";
wordHash["3_382"] = "prie,request,1,prie,rootfrequency";
wordHash["3_8"] = "Une,A,57,une,rootfrequency";
wordHash["3_11"] = "une,a,57,une,rootfrequency";
wordHash["3_25"] = "une,a,57,une,rootfrequency";
wordHash["3_81"] = "une,one,57,une,rootfrequency";
wordHash["3_86"] = "une,a,57,une,rootfrequency";
wordHash["3_206"] = "une,a,57,une,rootfrequency";
wordHash["3_295"] = "une,a,57,une,rootfrequency";
wordHash["3_344"] = "une,a,57,une,rootfrequency";
wordHash["3_464"] = "une,a,57,une,rootfrequency";
wordHash["3_518"] = "une,a,57,une,rootfrequency";
wordHash["3_97"] = "gras,fat,2,gras,rootfrequency";
wordHash["3_184"] = "gras,fat,2,gras,rootfrequency";
wordHash["3_36"] = "taille,waist,2,taille,rootfrequency";
wordHash["3_262"] = "vient,comes,2,vient,rootfrequency";
wordHash["3_34"] = "a,has,12,a,rootfrequency";
wordHash["3_333"] = "A,At,12,a,rootfrequency";
wordHash["3_354"] = "a,has,12,a,rootfrequency";
wordHash["3_79"] = "I,I,1,i,rootfrequency";
wordHash["3_196"] = "ami,friend,3,ami,rootfrequency";
wordHash["3_160"] = "M,Mr,2,m,rootfrequency";
wordHash["3_375"] = "M,Mr,2,m,rootfrequency";
wordHash["3_467"] = "porteur,carrier,1,porteur,rootfrequency";
wordHash["3_24"] = "sur,on,29,sur,rootfrequency";
wordHash["3_91"] = "sur,on,29,sur,rootfrequency";
wordHash["3_265"] = "sur,on,29,sur,rootfrequency";
wordHash["3_470"] = "sur,on,29,sur,rootfrequency";
wordHash["3_557"] = "puisqu'il,because&nbsp;it,1,puisqu'il,rootfrequency";
wordHash["3_547"] = "J'aime,I&nbsp;love,1,j'aime,rootfrequency";
wordHash["3_513"] = "Partagez,Share,1,partagez,rootfrequency";
wordHash["3_243"] = "peuple,people,3,peuple,rootfrequency";
wordHash["3_249"] = "peuple,people,3,peuple,rootfrequency";
wordHash["3_257"] = "peuple,people,3,peuple,rootfrequency";
wordHash["3_543"] = "mangerai,shall&nbsp;eat,1,mangerai,rootfrequency";
wordHash["3_523"] = "ans,years,3,ans,rootfrequency";
wordHash["3_530"] = "ans,years,3,ans,rootfrequency";
wordHash["3_263"] = "sans,without,6,sans,rootfrequency";
wordHash["3_427"] = "sans,without,6,sans,rootfrequency";
wordHash["3_448"] = "long,length,6,long,rootfrequency";
wordHash["3_136"] = "questionn&#232;rent,questioned,1,questionn&#232;rent,rootfrequency";
wordHash["3_109"] = "pas,not,31,pas,rootfrequency";
wordHash["3_294"] = "pas,not,31,pas,rootfrequency";
wordHash["3_370"] = "pas,not,31,pas,rootfrequency";
wordHash["3_454"] = "pas,not,31,pas,rootfrequency";
wordHash["3_58"] = "souvent,often,5,souvent,rootfrequency";
wordHash["3_496"] = "fianc&#233;,fianc&#233;,1,fianc&#233;,rootfrequency";
wordHash["3_77"] = "miroir,mirror,1,miroir,rootfrequency";
wordHash["3_95"] = "&#233;taient,were,8,&#233;taient,rootfrequency";
wordHash["3_517"] = "&#233;taient,were,8,&#233;taient,rootfrequency";
wordHash["3_171"] = "embrasser,to&nbsp;embrace,1,embrasser,rootfrequency";
wordHash["3_90"] = "vivaient,lived,2,vivaient,rootfrequency";
wordHash["3_276"] = "gens,people,1,gens,rootfrequency";
wordHash["3_432"] = "adoptif,adopted,1,adoptif,rootfrequency";
wordHash["3_176"] = "peu,little,9,peu,rootfrequency";
wordHash["3_6"] = "qu'une,that&nbsp;a,2,qu'une,rootfrequency";
wordHash["3_2"] = "vous,you,22,vous,rootfrequency";
wordHash["3_331"] = "vous,you,22,vous,rootfrequency";
wordHash["3_381"] = "vous,you,22,vous,rootfrequency";
wordHash["3_341"] = "vieux,old,4,vieux,rootfrequency";
wordHash["3_401"] = "vieux,old,4,vieux,rootfrequency";
wordHash["3_434"] = "vieux,old,4,vieux,rootfrequency";
wordHash["3_435"] = "escargots,snails,4,escargots,rootfrequency";
wordHash["3_363"] = "toute,all,4,toute,rootfrequency";
wordHash["3_143"] = "Aussit&#244;t,At&nbsp;once,3,aussit&#244;t,rootfrequency";
wordHash["3_235"] = "balcon,balcony,2,balcon,rootfrequency";
wordHash["3_315"] = "balcon,balcony,2,balcon,rootfrequency";
wordHash["3_115"] = "beaucoup,a&nbsp;lot,11,beaucoup,rootfrequency";
wordHash["3_274"] = "beaucoup,many,11,beaucoup,rootfrequency";
wordHash["3_282"] = "beaucoup,many,11,beaucoup,rootfrequency";
wordHash["3_165"] = "presque,almost,3,presque,rootfrequency";
wordHash["3_52"] = "robes,robes,1,robes,rootfrequency";
wordHash["3_60"] = "bord,edge,4,bord,rootfrequency";
wordHash["3_482"] = "plusieurs,several,1,plusieurs,rootfrequency";
wordHash["3_30"] = "l'appelle,call&nbsp;her,1,l'appelle,rootfrequency";
wordHash["3_174"] = "fils,son,8,fils,rootfrequency";
wordHash["3_201"] = "fils,son,8,fils,rootfrequency";
wordHash["3_390"] = "fils,son,8,fils,rootfrequency";
wordHash["3_431"] = "fils,son,8,fils,rootfrequency";
wordHash["3_288"] = "aux,to&nbsp;the,7,aux,rootfrequency";
wordHash["3_84"] = "monsieur,gentleman,5,monsieur,rootfrequency";
wordHash["3_388"] = "monsieur,mr,5,monsieur,rootfrequency";
wordHash["3_267"] = "routes,roads,1,routes,rootfrequency";
wordHash["3_245"] = "fourmis,ants,7,fourmis,rootfrequency";
wordHash["3_251"] = "fourmis,ants,7,fourmis,rootfrequency";
wordHash["3_289"] = "fourmis,ants,7,fourmis,rootfrequency";
wordHash["3_322"] = "fourmis,ants,7,fourmis,rootfrequency";
wordHash["3_324"] = "fourmis,ants,7,fourmis,rootfrequency";
wordHash["3_392"] = "fourmis,ants,7,fourmis,rootfrequency";
wordHash["3_458"] = "fourmis,ants,7,fourmis,rootfrequency";
wordHash["3_189"] = "m&#232;re,mother,23,m&#232;re,rootfrequency";
wordHash["3_359"] = "parents,parents,7,parents,rootfrequency";
wordHash["3_407"] = "parents,parents,7,parents,rootfrequency";
wordHash["3_489"] = "parents,parents,7,parents,rootfrequency";
wordHash["3_37"] = "fine,fine,2,fine,rootfrequency";
wordHash["3_204"] = "lui,him,24,lui,rootfrequency";
wordHash["3_280"] = "courant,running,1,courant,rootfrequency";
wordHash["3_529"] = "quatre,four,2,quatre,rootfrequency";
wordHash["3_426"] = "m&#234;me,even,10,m&#234;me,rootfrequency";
wordHash["3_164"] = "sortit,stuck&nbsp;out,1,sortit,rootfrequency";
wordHash["3_154"] = "l'adoptions,adopt&nbsp;him,1,l'adoptions,rootfrequency";
wordHash["3_450"] = "chemin,path,1,chemin,rootfrequency";
wordHash["3_441"] = "marche,march,1,marche,rootfrequency";
wordHash["3_272"] = "doit,must,2,doit,rootfrequency";
wordHash["3_286"] = "allons,go,2,allons,rootfrequency";
wordHash["3_12"] = "longue,long,2,longue,rootfrequency";
wordHash["3_519"] = "petite,little,13,petite,rootfrequency";
wordHash["3_534"] = "petite,little,13,petite,rootfrequency";
wordHash["3_32"] = "parce,because,3,parce,rootfrequency";
wordHash["3_54"] = "parce,because,3,parce,rootfrequency";
wordHash["3_169"] = "maison,house,5,maison,rootfrequency";
wordHash["3_96"] = "gros,big,10,gros,rootfrequency";
wordHash["3_183"] = "gros,big,10,gros,rootfrequency";
wordHash["3_505"] = "gros,large,10,gros,rootfrequency";
wordHash["3_546"] = "gros,big,10,gros,rootfrequency";
wordHash["3_551"] = "gros,big,10,gros,rootfrequency";
wordHash["3_564"] = "gros,big,10,gros,rootfrequency";
wordHash["3_258"] = "actif,active,1,actif,rootfrequency";
wordHash["3_298"] = "digne,worthy,1,digne,rootfrequency";
wordHash["3_481"] = "apr&#232;s,after,3,apr&#232;s,rootfrequency";
wordHash["3_208"] = "fille,girl,12,fille,rootfrequency";
wordHash["3_297"] = "fille,girl,12,fille,rootfrequency";
wordHash["3_520"] = "fille,girl,12,fille,rootfrequency";
wordHash["3_535"] = "fille,girl,12,fille,rootfrequency";
wordHash["3_373"] = "s'&#233;cri&#232;rent,exclaimed,1,s'&#233;cri&#232;rent,rootfrequency";
wordHash["3_140"] = "qu'il,that&nbsp;he,19,qu'il,rootfrequency";
wordHash["3_330"] = "qu'il,what&nbsp;it,19,qu'il,rootfrequency";
wordHash["3_398"] = "arriv&#232;rent,arrived,1,arriv&#232;rent,rootfrequency";
wordHash["3_105"] = "heureux,happy,3,heureux,rootfrequency";
wordHash["3_186"] = "luisant,shining,1,luisant,rootfrequency";
wordHash["3_23"] = "&#233;tangs,ponds,1,&#233;tangs,rootfrequency";
wordHash["3_352"] = "dont,of&nbsp;which,4,dont,rootfrequency";
wordHash["3_291"] = "elles,they,13,elles,rootfrequency";
wordHash["3_10"] = "est,is,18,est,rootfrequency";
wordHash["3_255"] = "est,is,18,est,rootfrequency";
wordHash["3_362"] = "est,is,18,est,rootfrequency";
wordHash["3_558"] = "est,is,18,est,rootfrequency";
wordHash["3_563"] = "est,is,18,est,rootfrequency";
wordHash["3_536"] = "prends,take,3,prends,rootfrequency";
wordHash["3_0"] = "Demoiselle,Dragonfly,6,demoiselle,rootfrequency";
wordHash["3_7"] = "demoiselle,dragonfly,6,demoiselle,rootfrequency";
wordHash["3_9"] = "demoiselle,dragonfly,6,demoiselle,rootfrequency";
wordHash["3_31"] = "demoiselle,damsel,6,demoiselle,rootfrequency";
wordHash["3_345"] = "demoiselle,miss,6,demoiselle,rootfrequency";
wordHash["3_374"] = "ensemble,together,2,ensemble,rootfrequency";
wordHash["3_78"] = "Escargot,Snail,16,escargot,rootfrequency";
wordHash["3_88"] = "Escargot,Snail,16,escargot,rootfrequency";
wordHash["3_128"] = "escargot,snail,16,escargot,rootfrequency";
wordHash["3_145"] = "Escargot,Snail,16,escargot,rootfrequency";
wordHash["3_161"] = "Escargot,Snail,16,escargot,rootfrequency";
wordHash["3_181"] = "escargot,snail,16,escargot,rootfrequency";
wordHash["3_190"] = "Escargot,Snail,16,escargot,rootfrequency";
wordHash["3_194"] = "Escargot,Snail,16,escargot,rootfrequency";
wordHash["3_239"] = "Escargot,Snail,16,escargot,rootfrequency";
wordHash["3_254"] = "Escargot,Snail,16,escargot,rootfrequency";
wordHash["3_309"] = "Escargot,Snail,16,escargot,rootfrequency";
wordHash["3_346"] = "Escargot,Snail,16,escargot,rootfrequency";
wordHash["3_378"] = "Escargot,Snail,16,escargot,rootfrequency";
wordHash["3_246"] = "Fourmi,Ant,2,fourmi,rootfrequency";
wordHash["3_153"] = "nous,we,14,nous,rootfrequency";
wordHash["3_214"] = "nous,we,14,nous,rootfrequency";
wordHash["3_229"] = "nous,us,14,nous,rootfrequency";
wordHash["3_285"] = "Nous,We,14,nous,rootfrequency";
wordHash["3_327"] = "nous,we,14,nous,rootfrequency";
wordHash["3_264"] = "cesse,stop,1,cesse,rootfrequency";
wordHash["3_44"] = "ailes,wings,4,ailes,rootfrequency";
wordHash["3_93"] = "chou,cabbage,3,chou,rootfrequency";
wordHash["3_124"] = "chou,cabbage,3,chou,rootfrequency";
wordHash["3_485"] = "chou,cabbage,3,chou,rootfrequency";
wordHash["3_335"] = "m&#232;tres,meters,1,m&#232;tres,rootfrequency";
wordHash["3_217"] = "beaux,beautiful,6,beaux,rootfrequency";
wordHash["3_488"] = "beaux,in&nbsp;law,6,beaux,rootfrequency";
wordHash["3_408"] = "qu'on,that&nbsp;they,5,qu'on,rootfrequency";
wordHash["3_218"] = "petits-enfants,grandchildren,1,petits-enfants,rootfrequency";
wordHash["3_284"] = "choses,things,2,choses,rootfrequency";
wordHash["3_425"] = "main,hand,4,main,rootfrequency";
wordHash["3_133"] = "l'aum&#244;ne,the&nbsp;alm,1,l'aum&#244;ne,rootfrequency";
wordHash["3_106"] = "Mais,But,48,mais,rootfrequency";
wordHash["3_226"] = "Mais,But,48,mais,rootfrequency";
wordHash["3_451"] = "Mais,But,48,mais,rootfrequency";
wordHash["3_556"] = "Mais,But,48,mais,rootfrequency";
wordHash["3_561"] = "mais,but,48,mais,rootfrequency";
wordHash["3_94"] = "Ils,They,19,ils,rootfrequency";
wordHash["3_101"] = "ils,they,19,ils,rootfrequency";
wordHash["3_107"] = "ils,they,19,ils,rootfrequency";
wordHash["3_134"] = "Ils,They,19,ils,rootfrequency";
wordHash["3_138"] = "ils,they,19,ils,rootfrequency";
wordHash["3_357"] = "cuire,cook,2,cuire,rootfrequency";
wordHash["3_411"] = "cuire,cook,2,cuire,rootfrequency";
wordHash["3_82"] = "fois,time,6,fois,rootfrequency";
wordHash["3_328"] = "avons,have,2,avons,rootfrequency";
wordHash["3_141"] = "&#233;tait,was,20,&#233;tait,rootfrequency";
wordHash["3_369"] = "restera,will&nbsp;remain,1,restera,rootfrequency";
wordHash["3_104"] = "&#234;tre,to&nbsp;be,12,&#234;tre,rootfrequency";
wordHash["3_278"] = "&#234;tre,be,12,&#234;tre,rootfrequency";
wordHash["3_139"] = "apprirent,learned,1,apprirent,rootfrequency";
wordHash["3_14"] = "jolie,pretty,6,jolie,rootfrequency";
wordHash["3_207"] = "jolie,nice,6,jolie,rootfrequency";
wordHash["3_350"] = "jolie,pretty,6,jolie,rootfrequency";
wordHash["3_26"] = "feuille,leaf,3,feuille,rootfrequency";
wordHash["3_63"] = "feuille,leaf,3,feuille,rootfrequency";
wordHash["3_512"] = "disant,saying,1,disant,rootfrequency";
wordHash["3_469"] = "charg&#232;rent,put&nbsp;on,1,charg&#232;rent,rootfrequency";
wordHash["3_205"] = "chercher,to&nbsp;seek,4,chercher,rootfrequency";
wordHash["3_199"] = "marier,to&nbsp;marry&nbsp;off,1,marier,rootfrequency";
wordHash["3_318"] = "femme,wife,4,femme,rootfrequency";
wordHash["3_49"] = "mousseline,muslin,1,mousseline,rootfrequency";
wordHash["3_287"] = "demander,to&nbsp;ask,3,demander,rootfrequency";
wordHash["3_384"] = "demander,to&nbsp;ask,3,demander,rootfrequency";
wordHash["3_193"] = "p&#232;re,father,4,p&#232;re,rootfrequency";
wordHash["3_308"] = "p&#232;re,father,4,p&#232;re,rootfrequency";
wordHash["3_351"] = "coquille,shell,1,coquille,rootfrequency";
wordHash["3_343"] = "vit,lives,5,vit,rootfrequency";
wordHash["3_339"] = "trou,hole,3,trou,rootfrequency";
wordHash["3_182"] = "devint,became,3,devint,rootfrequency";
wordHash["3_28"] = "n&#233;nuphar,water&nbsp;lily,1,n&#233;nuphar,rootfrequency";
wordHash["3_296"] = "jeune,young,5,jeune,rootfrequency";
wordHash["3_415"] = "heureuse,happy,1,heureuse,rootfrequency";
wordHash["3_57"] = "pose,sets,1,pose,rootfrequency";
wordHash["3_187"] = "Alors,Then,12,alors,rootfrequency";
wordHash["3_456"] = "Alors,Then,12,alors,rootfrequency";
wordHash["3_483"] = "jours,days,3,jours,rootfrequency";
wordHash["3_159"] = "r&#233;pondit,answered,7,r&#233;pondit,rootfrequency";
wordHash["3_223"] = "r&#233;pondit,answered,7,r&#233;pondit,rootfrequency";
wordHash["3_493"] = "bras,arms,4,bras,rootfrequency";
wordHash["3_142"] = "orphelin,orphan,2,orphelin,rootfrequency";
wordHash["3_151"] = "mari,husband,2,mari,rootfrequency";
wordHash["3_225"] = "mari,husband,2,mari,rootfrequency";
wordHash["3_19"] = "des,of&nbsp;the,60,des,rootfrequency";
wordHash["3_22"] = "des,of&nbsp;the,60,des,rootfrequency";
wordHash["3_43"] = "des,of&nbsp;the,60,des,rootfrequency";
wordHash["3_244"] = "des,of&nbsp;the,60,des,rootfrequency";
wordHash["3_250"] = "des,of&nbsp;the,60,des,rootfrequency";
wordHash["3_433"] = "des,of&nbsp;the,60,des,rootfrequency";
wordHash["3_461"] = "des,of&nbsp;the,60,des,rootfrequency";
wordHash["3_439"] = "mit,set,2,mit,rootfrequency";
wordHash["3_64"] = "pour,for,30,pour,rootfrequency";
wordHash["3_170"] = "pour,for,30,pour,rootfrequency";
wordHash["3_231"] = "pour,for,30,pour,rootfrequency";
wordHash["3_319"] = "pour,for,30,pour,rootfrequency";
wordHash["3_387"] = "pour,for,30,pour,rootfrequency";
wordHash["3_80"] = "Il y avait,It&nbsp;there&nbsp;had,10,il y avait,rootfrequency";
wordHash["3_312"] = "descendit,came&nbsp;down,2,descendit,rootfrequency";
wordHash["3_269"] = "France,France,2,france,rootfrequency";
wordHash["3_301"] = "escargoton,little&nbsp;snail,1,escargoton,rootfrequency";
wordHash["3_46"] = "d&#233;licates,delicate,1,d&#233;licates,rootfrequency";
wordHash["3_51"] = "vos,your,2,vos,rootfrequency";
wordHash["3_480"] = "arriva,arrived,4,arriva,rootfrequency";
wordHash["3_45"] = "aussi,as,11,aussi,rootfrequency";
wordHash["3_326"] = "Justement,Exactly,2,justement,rootfrequency";
wordHash["3_500"] = "donn&#233;,given,1,donn&#233;,rootfrequency";
wordHash["3_66"] = "regarder,to&nbsp;look&nbsp;at,1,regarder,rootfrequency";
wordHash["3_42"] = "vert,green,2,vert,rootfrequency";
wordHash["3_236"] = "vert,green,2,vert,rootfrequency";
wordHash["3_144"] = "Mme,Madam,4,mme,rootfrequency";
wordHash["3_238"] = "Mme,Madam,4,mme,rootfrequency";
wordHash["3_253"] = "Mme,Madam,4,mme,rootfrequency";
wordHash["3_377"] = "Mme,Madam,4,mme,rootfrequency";
wordHash["3_200"] = "notre,our,4,notre,rootfrequency";
wordHash["3_210"] = "notre,our,4,notre,rootfrequency";
wordHash["3_300"] = "notre,our,4,notre,rootfrequency";
wordHash["3_389"] = "notre,our,4,notre,rootfrequency";
wordHash["3_459"] = "fabriqu&#232;rent,manufactured,1,fabriqu&#232;rent,rootfrequency";
wordHash["3_148"] = "dit,said,32,dit,rootfrequency";
wordHash["3_191"] = "dit,said,32,dit,rootfrequency";
wordHash["3_237"] = "dit,said,32,dit,rootfrequency";
wordHash["3_252"] = "dit,said,32,dit,rootfrequency";
wordHash["3_306"] = "dit,said,32,dit,rootfrequency";
wordHash["3_532"] = "dit,said,32,dit,rootfrequency";
wordHash["3_552"] = "dit,said,32,dit,rootfrequency";
wordHash["3_67"] = "dans,in,47,dans,rootfrequency";
wordHash["3_75"] = "dans,in,47,dans,rootfrequency";
wordHash["3_337"] = "dans,in,47,dans,rootfrequency";
wordHash["3_491"] = "dans,in,47,dans,rootfrequency";
wordHash["3_33"] = "qu'elle,that&nbsp;she,7,qu'elle,rootfrequency";
wordHash["3_55"] = "qu'elle,that&nbsp;she,7,qu'elle,rootfrequency";
wordHash["3_419"] = "qu'elle,that&nbsp;she,7,qu'elle,rootfrequency";
wordHash["3_437"] = "qu'elle,that&nbsp;she,7,qu'elle,rootfrequency";
wordHash["3_166"] = "enti&#232;rement,wholly,2,enti&#232;rement,rootfrequency";
wordHash["3_541"] = "Moi,Me,6,moi,rootfrequency";
wordHash["3_59"] = "au,at&nbsp;the,34,au,rootfrequency";
wordHash["3_192"] = "au,to&nbsp;the,34,au,rootfrequency";
wordHash["3_279"] = "au,at&nbsp;the,34,au,rootfrequency";
wordHash["3_365"] = "au,in&nbsp;the,34,au,rootfrequency";
wordHash["3_430"] = "au,to&nbsp;the,34,au,rootfrequency";
wordHash["3_484"] = "au,at&nbsp;the,34,au,rootfrequency";
wordHash["3_195"] = "Mon,My,9,mon,rootfrequency";
wordHash["3_234"] = "mon,my,9,mon,rootfrequency";
wordHash["3_409"] = "avait,had,18,avait,rootfrequency";
wordHash["3_499"] = "avait,had,18,avait,rootfrequency";
wordHash["3_293"] = "conna&#238;traient,would&nbsp;know,1,conna&#238;traient,rootfrequency";
wordHash["3_405"] = "pleurait,cried,1,pleurait,rootfrequency";
wordHash["3_379"] = "Allez,Go,2,allez,rootfrequency";
wordHash["3_71"] = "vraies,true,1,vraies,rootfrequency";
wordHash["3_3"] = "ce,this,33,ce,rootfrequency";
wordHash["3_329"] = "ce,that,33,ce,rootfrequency";
wordHash["3_537"] = "ce,this,33,ce,rootfrequency";
wordHash["3_544"] = "ce,this,33,ce,rootfrequency";
wordHash["3_112"] = "cela,that,11,cela,rootfrequency";
wordHash["3_232"] = "cela,that,11,cela,rootfrequency";
wordHash["3_72"] = "demoiselles,damsels,1,demoiselles,rootfrequency";
wordHash["3_27"] = "de,of,184,de,rootfrequency";
wordHash["3_40"] = "de,of,184,de,rootfrequency";
wordHash["3_50"] = "de,of,184,de,rootfrequency";
wordHash["3_61"] = "de,of,184,de,rootfrequency";
wordHash["3_122"] = "de,of,184,de,rootfrequency";
wordHash["3_167"] = "de,from,184,de,rootfrequency";
wordHash["3_177"] = "de,of,184,de,rootfrequency";
wordHash["3_209"] = "de,of,184,de,rootfrequency";
wordHash["3_216"] = "de,of,184,de,rootfrequency";
wordHash["3_233"] = "De,From,184,de,rootfrequency";
wordHash["3_268"] = "de,of,184,de,rootfrequency";
wordHash["3_275"] = "de,of,184,de,rootfrequency";
wordHash["3_281"] = "de,of,184,de,rootfrequency";
wordHash["3_283"] = "de,of,184,de,rootfrequency";
wordHash["3_313"] = "de,from,184,de,rootfrequency";
wordHash["3_347"] = "de,of,184,de,rootfrequency";
wordHash["3_416"] = "de,of,184,de,rootfrequency";
wordHash["3_422"] = "de,of,184,de,rootfrequency";
wordHash["3_444"] = "de,of,184,de,rootfrequency";
wordHash["3_486"] = "de,of,184,de,rootfrequency";
wordHash["3_494"] = "de,of,184,de,rootfrequency";
wordHash["3_521"] = "de,of,184,de,rootfrequency";
wordHash["3_528"] = "de,of,184,de,rootfrequency";
wordHash["3_155"] = "J'allais,I&nbsp;went,3,j'allais,rootfrequency";
wordHash["3_219"] = "J'allais,I&nbsp;went,3,j'allais,rootfrequency";
wordHash["3_302"] = "J'allais,I&nbsp;went,3,j'allais,rootfrequency";
wordHash["3_394"] = "mirent,set&nbsp;off,2,mirent,rootfrequency";
wordHash["3_420"] = "accorda,gave,1,accorda,rootfrequency";
wordHash["3_316"] = "avec,with,28,avec,rootfrequency";
wordHash["3_460"] = "avec,with,28,avec,rootfrequency";
wordHash["3_400"] = "du,of&nbsp;the,40,du,rootfrequency";
wordHash["3_449"] = "du,of&nbsp;the,40,du,rootfrequency";
wordHash["3_76"] = "leur,their,22,leur,rootfrequency";
wordHash["3_113"] = "leur,them,22,leur,rootfrequency";
wordHash["3_123"] = "leur,their,22,leur,rootfrequency";
wordHash["3_131"] = "leur,them,22,leur,rootfrequency";
wordHash["3_511"] = "leur,them,22,leur,rootfrequency";
wordHash["3_99"] = "luisants,shining,1,luisants,rootfrequency";
wordHash["3_475"] = "ainsi,thus,5,ainsi,rootfrequency";
wordHash["3_215"] = "ayons,have,1,ayons,rootfrequency";
wordHash["3_531"] = "Tiens,Hold,2,tiens,rootfrequency";
wordHash["3_173"] = "nouveau,new,3,nouveau,rootfrequency";
wordHash["3_175"] = "En,In,45,en,rootfrequency";
wordHash["3_385"] = "en,in,45,en,rootfrequency";
wordHash["3_395"] = "en,on,45,en,rootfrequency";
wordHash["3_440"] = "en,in,45,en,rootfrequency";
wordHash["3_442"] = "en,in,45,en,rootfrequency";
wordHash["3_510"] = "en,while,45,en,rootfrequency";
wordHash["3_367"] = "Elle,She,54,elle,rootfrequency";
wordHash["3_412"] = "Elle,She,54,elle,rootfrequency";
wordHash["3_452"] = "elle,she,54,elle,rootfrequency";
wordHash["3_13"] = "et,and,195,et,rootfrequency";
wordHash["3_21"] = "et,and,195,et,rootfrequency";
wordHash["3_53"] = "et,and,195,et,rootfrequency";
wordHash["3_85"] = "et,and,195,et,rootfrequency";
wordHash["3_98"] = "et,and,195,et,rootfrequency";
wordHash["3_100"] = "et,and,195,et,rootfrequency";
wordHash["3_111"] = "et,and,195,et,rootfrequency";
wordHash["3_137"] = "et,and,195,et,rootfrequency";
wordHash["3_162"] = "Et,And,195,et,rootfrequency";
wordHash["3_185"] = "et,and,195,et,rootfrequency";
wordHash["3_261"] = "et,and,195,et,rootfrequency";
wordHash["3_270"] = "et,and,195,et,rootfrequency";
wordHash["3_277"] = "et,and,195,et,rootfrequency";
wordHash["3_310"] = "Et,And,195,et,rootfrequency";
wordHash["3_376"] = "et,and,195,et,rootfrequency";
wordHash["3_397"] = "et,and,195,et,rootfrequency";
wordHash["3_436"] = "et,and,195,et,rootfrequency";
wordHash["3_473"] = "Et,And,195,et,rootfrequency";
wordHash["3_490"] = "et,and,195,et,rootfrequency";
wordHash["3_507"] = "et,and,195,et,rootfrequency";
wordHash["3_524"] = "et,and,195,et,rootfrequency";
wordHash["3_548"] = "mieux,better,1,mieux,rootfrequency";
wordHash["3_129"] = "maigre,thin,1,maigre,rootfrequency";
wordHash["3_132"] = "demanda,asked,4,demanda,rootfrequency";
wordHash["3_15"] = "mouche,fly,2,mouche,rootfrequency";
wordHash["3_468"] = "qu'elles,that&nbsp;they,4,qu'elles,rootfrequency";
wordHash["3_386"] = "mariage,marriage,2,mariage,rootfrequency";
wordHash["3_356"] = "fait,made,8,fait,rootfrequency";
wordHash["3_410"] = "fait,made,8,fait,rootfrequency";
wordHash["3_118"] = "vint,came,2,vint,rootfrequency";
wordHash["3_178"] = "temps,time,7,temps,rootfrequency";
wordHash["3_342"] = "mur,wall,2,mur,rootfrequency";
wordHash["3_402"] = "mur,wall,2,mur,rootfrequency";
wordHash["3_418"] = "proposition,proposition,1,proposition,rootfrequency";
wordHash["3_158"] = "proposer,propose,3,proposer,rootfrequency";
wordHash["3_222"] = "proposer,propose,3,proposer,rootfrequency";
wordHash["3_305"] = "proposer,propose,3,proposer,rootfrequency";
wordHash["3_463"] = "d'herbe,of&nbsp;grass,2,d'herbe,rootfrequency";
wordHash["3_120"] = "passer,pass,1,passer,rootfrequency";
wordHash["3_406"] = "ses,her,30,ses,rootfrequency";
wordHash["3_487"] = "ses,her,30,ses,rootfrequency";
wordHash["3_247"] = "II,II,1,ii,rootfrequency";
wordHash["3_5"] = "c'est,it&nbsp;is,15,c'est,rootfrequency";
wordHash["3_474"] = "c'est,it&nbsp;is,15,c'est,rootfrequency";
wordHash["3_163"] = "il,he,66,il,rootfrequency";
wordHash["3_197"] = "il,it,66,il,rootfrequency";
wordHash["3_202"] = "Il,It,66,il,rootfrequency";
wordHash["3_311"] = "il,he,66,il,rootfrequency";
wordHash["3_562"] = "il,it,66,il,rootfrequency";
wordHash["3_355"] = "derni&#232;rement,recently,1,derni&#232;rement,rootfrequency";
wordHash["3_445"] = "joie,joy,3,joie,rootfrequency";
wordHash["3_240"] = "je,I,39,je,rootfrequency";
wordHash["3_380"] = "je,I,39,je,rootfrequency";
wordHash["3_542"] = "je,I,39,je,rootfrequency";
wordHash["3_74"] = "regardent,look&nbsp;at,1,regardent,rootfrequency";
wordHash["3_465"] = "chaise,chair,4,chaise,rootfrequency";
wordHash["3_126"] = "pauvre,poor,11,pauvre,rootfrequency";
wordHash["3_478"] = "pauvre,poor,11,pauvre,rootfrequency";
wordHash["3_325"] = "r&#233;pondirent,answered,1,r&#233;pondirent,rootfrequency";
wordHash["3_110"] = "d'enfant,of&nbsp;child,1,d'enfant,rootfrequency";
wordHash["3_497"] = "G&#226;teau,Cake,4,g&#226;teau,rootfrequency";
wordHash["3_506"] = "g&#226;teau,cake,4,g&#226;teau,rootfrequency";
wordHash["3_540"] = "g&#226;teau,cake,4,g&#226;teau,rootfrequency";
wordHash["3_403"] = "o&#249;,where,10,o&#249;,rootfrequency";
wordHash["3_35"] = "la,the,139,la,rootfrequency";
wordHash["3_48"] = "la,the,139,la,rootfrequency";
wordHash["3_188"] = "la,the,139,la,rootfrequency";
wordHash["3_348"] = "la,the,139,la,rootfrequency";
wordHash["3_360"] = "La,The,139,la,rootfrequency";
wordHash["3_383"] = "la,her,139,la,rootfrequency";
wordHash["3_417"] = "la,the,139,la,rootfrequency";
wordHash["3_477"] = "la,the,139,la,rootfrequency";
wordHash["3_533"] = "la,the,139,la,rootfrequency";
wordHash["3_135"] = "le,him,129,le,rootfrequency";
wordHash["3_157"] = "le,it,129,le,rootfrequency";
wordHash["3_179"] = "le,the,129,le,rootfrequency";
wordHash["3_221"] = "le,it,129,le,rootfrequency";
wordHash["3_224"] = "le,the,129,le,rootfrequency";
wordHash["3_242"] = "le,the,129,le,rootfrequency";
wordHash["3_248"] = "Le,The,129,le,rootfrequency";
wordHash["3_304"] = "le,it,129,le,rootfrequency";
wordHash["3_307"] = "le,the,129,le,rootfrequency";
wordHash["3_338"] = "le,the,129,le,rootfrequency";
wordHash["3_428"] = "le,him,129,le,rootfrequency";
wordHash["3_447"] = "le,the,129,le,rootfrequency";
wordHash["3_549"] = "le,the,129,le,rootfrequency";
wordHash["3_553"] = "le,the,129,le,rootfrequency";
wordHash["3_455"] = "vite,fast,5,vite,rootfrequency";
wordHash["3_396"] = "route,way,1,route,rootfrequency";
wordHash["3_127"] = "petit,small,28,petit,rootfrequency";
wordHash["3_180"] = "petit,little,28,petit,rootfrequency";
wordHash["3_509"] = "petit,small,28,petit,rootfrequency";
wordHash["3_526"] = "petit,small,28,petit,rootfrequency";
wordHash["3_539"] = "petit,little,28,petit,rootfrequency";
wordHash["3_554"] = "petit,little,28,petit,rootfrequency";
wordHash["3_538"] = "joli,pretty,5,joli,rootfrequency";
wordHash["3_230"] = "adresser,to&nbsp;address,1,adresser,rootfrequency";
wordHash["3_560"] = "Oui,Yes,5,oui,rootfrequency";
wordHash["3_522"] = "six,six,6,six,rootfrequency";
wordHash["3_503"] = "enfants,children,16,enfants,rootfrequency";
wordHash["3_516"] = "enfants,children,16,enfants,rootfrequency";
wordHash["3_292"] = "ne,not,42,ne,rootfrequency";
wordHash["3_368"] = "ne,not,42,ne,rootfrequency";
wordHash["3_336"] = "d'ici,from&nbsp;here,1,d'ici,rootfrequency";
wordHash["3_102"] = "auraient,would&nbsp;have,1,auraient,rootfrequency";
wordHash["3_320"] = "interroger,to&nbsp;question,1,interroger,rootfrequency";
wordHash["3_87"] = "madame,lady,2,madame,rootfrequency";
wordHash["3_479"] = "orpheline,orphan&nbsp;girl,1,orpheline,rootfrequency";
wordHash["3_18"] = "pr&#232;s,close,5,pr&#232;s,rootfrequency";
wordHash["3_121"] = "pr&#232;s,near,5,pr&#232;s,rootfrequency";
wordHash["3_399"] = "pr&#232;s,near,5,pr&#232;s,rootfrequency";
wordHash["3_404"] = "l'orpheline,the&nbsp;orphan,1,l'orpheline,rootfrequency";
wordHash["3_29"] = "On,They,20,on,rootfrequency";
wordHash["3_353"] = "on,one,20,on,rootfrequency";
wordHash["3_498"] = "On,One,20,on,rootfrequency";
wordHash["3_372"] = "longtemps,a&nbsp;long&nbsp;time,4,longtemps,rootfrequency";
wordHash["3_471"] = "leurs,their,14,leurs,rootfrequency";
wordHash["3_103"] = "pu,been&nbsp;able,2,pu,rootfrequency";
wordHash["3_364"] = "seule,alone,3,seule,rootfrequency";
wordHash["3_371"] = "seule,alone,3,seule,rootfrequency";
wordHash["3_273"] = "conna&#238;tre,know,2,conna&#238;tre,rootfrequency";
wordHash["3_429"] = "conna&#238;tre,to&nbsp;know,2,conna&#238;tre,rootfrequency";
wordHash["3_68"] = "l'eau,the&nbsp;water,1,l'eau,rootfrequency";
wordHash["3_462"] = "brins,strands,1,brins,rootfrequency";
wordHash["3_413"] = "fut,was,13,fut,rootfrequency";
wordHash["3_39"] = "corselet,bodice,1,corselet,rootfrequency";
wordHash["3_527"] = "gar&#231;on,boy,4,gar&#231;on,rootfrequency";
wordHash["3_555"] = "gar&#231;on,boy,4,gar&#231;on,rootfrequency";
wordHash["3_41"] = "satin,satin,1,satin,rootfrequency";
wordHash["3_349"] = "plus,most,24,plus,rootfrequency";
wordHash["3_108"] = "n'avaient,not&nbsp;had,2,n'avaient,rootfrequency";
wordHash["3_211"] = "monde,world,6,monde,rootfrequency";
wordHash["3_366"] = "monde,world,6,monde,rootfrequency";
wordHash["3_361"] = "pauvrette,poor&nbsp;thing,1,pauvrette,rootfrequency";
wordHash["3_198"] = "faut,is&nbsp;necessary,5,faut,rootfrequency";
wordHash["3_203"] = "faut,is&nbsp;necessary,5,faut,rootfrequency";
wordHash["3_332"] = "faut,is&nbsp;necessary,5,faut,rootfrequency";
wordHash["3_340"] = "d'un,of&nbsp;an,4,d'un,rootfrequency";
wordHash["3_70"] = "les,the,126,les,rootfrequency";
wordHash["3_266"] = "les,the,126,les,rootfrequency";
wordHash["3_321"] = "les,the,126,les,rootfrequency";
wordHash["3_323"] = "Les,The,126,les,rootfrequency";
wordHash["3_358"] = "les,the,126,les,rootfrequency";
wordHash["3_391"] = "Les,The,126,les,rootfrequency";
wordHash["3_457"] = "les,the,126,les,rootfrequency";
wordHash["3_492"] = "les,the,126,les,rootfrequency";
wordHash["3_514"] = "Les,The,126,les,rootfrequency";
wordHash["3_4"] = "que,what,60,que,rootfrequency";
wordHash["3_47"] = "que,as,60,que,rootfrequency";
wordHash["3_213"] = "que,that,60,que,rootfrequency";
wordHash["3_476"] = "que,that,60,que,rootfrequency";
wordHash["3_62"] = "sa,her,36,sa,rootfrequency";
wordHash["3_168"] = "sa,his,36,sa,rootfrequency";
wordHash["3_317"] = "sa,his,36,sa,rootfrequency";
wordHash["3_424"] = "sa,her,36,sa,rootfrequency";
wordHash["3_502"] = "deux,two,5,deux,rootfrequency";
wordHash["3_515"] = "deux,two,5,deux,rootfrequency";
wordHash["3_150"] = "son,her,41,son,rootfrequency";
wordHash["3_172"] = "son,his,41,son,rootfrequency";
wordHash["3_314"] = "son,his,41,son,rootfrequency";
wordHash["3_495"] = "son,her,41,son,rootfrequency";
wordHash["3_16"] = "qui,who,60,qui,rootfrequency";
wordHash["3_89"] = "qui,who,60,qui,rootfrequency";
wordHash["3_130"] = "qui,that,60,qui,rootfrequency";
wordHash["3_228"] = "qui,whom,60,qui,rootfrequency";
wordHash["3_259"] = "qui,that,60,qui,rootfrequency";
wordHash["3_271"] = "qui,who,60,qui,rootfrequency";
wordHash["3_56"] = "se,herself,38,se,rootfrequency";
wordHash["3_65"] = "se,herself,38,se,rootfrequency";
wordHash["3_73"] = "se,themselves,38,se,rootfrequency";
wordHash["3_393"] = "se,themselves,38,se,rootfrequency";
wordHash["3_438"] = "se,herself,38,se,rootfrequency";
wordHash["3_147"] = "attendrie,softened,1,attendrie,rootfrequency";
wordHash["3_152"] = "Si,If,31,si,rootfrequency";
wordHash["3_290"] = "si,if,31,si,rootfrequency";
wordHash["3_414"] = "si,so,31,si,rootfrequency";
wordHash["3_241"] = "vois,see,1,vois,rootfrequency";
wordHash["3_69"] = "comme,as,14,comme,rootfrequency";
wordHash["3_299"] = "d'&#233;pouser,of&nbsp;to&nbsp;marry,1,d'&#233;pouser,rootfrequency";
wordHash["3_146"] = "tout,all,25,tout,rootfrequency";
wordHash["3_421"] = "tout,everything,25,tout,rootfrequency";
wordHash["3_446"] = "tout,all,25,tout,rootfrequency";
wordHash["3_156"] = "te,to&nbsp;you,4,te,rootfrequency";
wordHash["3_220"] = "te,yourself,4,te,rootfrequency";
wordHash["3_303"] = "te,to&nbsp;you,4,te,rootfrequency";
wordHash["3_1"] = "Savez,Know,2,savez,rootfrequency";
wordHash["3_119"] = "&#224;,to,81,&#224;,rootfrequency";
wordHash["3_149"] = "&#224;,to,81,&#224;,rootfrequency";
wordHash["3_227"] = "&#224;,to,81,&#224;,rootfrequency";
wordHash["3_466"] = "&#224;,to,81,&#224;,rootfrequency";
wordHash["3_501"] = "&#224;,to,81,&#224;,rootfrequency";
wordHash["3_334"] = "quelques,some,2,quelques,rootfrequency";
wordHash["3_20"] = "ruisseaux,streams,1,ruisseaux,rootfrequency";
wordHash["3_545"] = "vilain,ugly,8,vilain,rootfrequency";
wordHash["3_550"] = "vilain,ugly,8,vilain,rootfrequency";
wordHash["3_559"] = "vilain,ugly,8,vilain,rootfrequency";
wordHash["3_38"] = "un,a,83,un,rootfrequency";
wordHash["3_83"] = "un,one,83,un,rootfrequency";
wordHash["3_92"] = "un,a,83,un,rootfrequency";
wordHash["3_116"] = "Un,One,83,un,rootfrequency";
wordHash["3_125"] = "un,a,83,un,rootfrequency";
wordHash["3_256"] = "un,a,83,un,rootfrequency";
wordHash["3_504"] = "un,a,83,un,rootfrequency";
wordHash["3_508"] = "un,a,83,un,rootfrequency";
wordHash["3_525"] = "un,a,83,un,rootfrequency";
