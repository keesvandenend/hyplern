﻿/* globals console,document,window,cordova */
var wordHash = {};
wordHash["8_211"] = "droite,right,4,droite,rootfrequency";
wordHash["8_294"] = "manger,eat,6,manger,rootfrequency";
wordHash["8_359"] = "manger,eat,6,manger,rootfrequency";
wordHash["8_378"] = "for&#234;t,forest,5,for&#234;t,rootfrequency";
wordHash["8_14"] = "vu,seen,1,vu,rootfrequency";
wordHash["8_184"] = "tambour,drum,1,tambour,rootfrequency";
wordHash["8_53"] = "une,a,57,une,rootfrequency";
wordHash["8_99"] = "une,a,57,une,rootfrequency";
wordHash["8_102"] = "une,a,57,une,rootfrequency";
wordHash["8_104"] = "une,a,57,une,rootfrequency";
wordHash["8_106"] = "une,a,57,une,rootfrequency";
wordHash["8_129"] = "une,a,57,une,rootfrequency";
wordHash["8_140"] = "une,a,57,une,rootfrequency";
wordHash["8_226"] = "une,an,57,une,rootfrequency";
wordHash["8_324"] = "une,a,57,une,rootfrequency";
wordHash["8_339"] = "signifier,mean,1,signifier,rootfrequency";
wordHash["8_109"] = "voulut,wanted,3,voulut,rootfrequency";
wordHash["8_347"] = "a,has,12,a,rootfrequency";
wordHash["8_128"] = "pr&#233;par&#232;rent,prepared,1,pr&#233;par&#232;rent,rootfrequency";
wordHash["8_114"] = "casquettes,helmets,1,casquettes,rootfrequency";
wordHash["8_376"] = "vache,cow,2,vache,rootfrequency";
wordHash["8_124"] = "cornes,hornes,2,cornes,rootfrequency";
wordHash["8_160"] = "par,by,9,par,rootfrequency";
wordHash["8_40"] = "pas,not,31,pas,rootfrequency";
wordHash["8_411"] = "colonies,colonies,1,colonies,rootfrequency";
wordHash["8_274"] = "dire,to&nbsp;say,6,dire,rootfrequency";
wordHash["8_299"] = "dire,to&nbsp;say,6,dire,rootfrequency";
wordHash["8_332"] = "dire,to&nbsp;say,6,dire,rootfrequency";
wordHash["8_133"] = "jardin,garden,4,jardin,rootfrequency";
wordHash["8_204"] = "d'aller,of&nbsp;to&nbsp;go,1,d'aller,rootfrequency";
wordHash["8_173"] = "aucune,none,3,aucune,rootfrequency";
wordHash["8_258"] = "se mirent,set&nbsp;off,2,se mirent,rootfrequency";
wordHash["8_214"] = "gauche,left,4,gauche,rootfrequency";
wordHash["8_338"] = "peut,can,3,peut,rootfrequency";
wordHash["8_369"] = "poisson,fish,1,poisson,rootfrequency";
wordHash["8_5"] = "&#233;taient,were,8,&#233;taient,rootfrequency";
wordHash["8_88"] = "apporta,brought,2,apporta,rootfrequency";
wordHash["8_206"] = "devant,ahead&nbsp;of,8,devant,rootfrequency";
wordHash["8_361"] = "l'univers,the&nbsp;universe,4,l'univers,rootfrequency";
wordHash["8_367"] = "l'univers,the&nbsp;universe,4,l'univers,rootfrequency";
wordHash["8_373"] = "l'univers,the&nbsp;universe,4,l'univers,rootfrequency";
wordHash["8_380"] = "l'univers,the&nbsp;universe,4,l'univers,rootfrequency";
wordHash["8_417"] = "saurez,would,2,saurez,rootfrequency";
wordHash["8_424"] = "saurez,will,2,saurez,rootfrequency";
wordHash["8_103"] = "jaune,yellow,2,jaune,rootfrequency";
wordHash["8_392"] = "vous,you,22,vous,rootfrequency";
wordHash["8_397"] = "vous,you,22,vous,rootfrequency";
wordHash["8_416"] = "vous,you,22,vous,rootfrequency";
wordHash["8_423"] = "vous,you,22,vous,rootfrequency";
wordHash["8_39"] = "n'avons,not&nbsp;have,1,n'avons,rootfrequency";
wordHash["8_82"] = "escargots,snails,4,escargots,rootfrequency";
wordHash["8_117"] = "escargots,snails,4,escargots,rootfrequency";
wordHash["8_163"] = "escargots,snails,4,escargots,rootfrequency";
wordHash["8_398"] = "serez,will&nbsp;be,1,serez,rootfrequency";
wordHash["8_120"] = "merci,thank&nbsp;you,1,merci,rootfrequency";
wordHash["8_22"] = "beaucoup,much,11,beaucoup,rootfrequency";
wordHash["8_197"] = "se d&#233;cid&#232;rent,decided,1,se d&#233;cid&#232;rent,rootfrequency";
wordHash["8_7"] = "aux,to&nbsp;the,7,aux,rootfrequency";
wordHash["8_172"] = "h&#233;las,alas,1,h&#233;las,rootfrequency";
wordHash["8_1"] = "Jean,Jean,10,jean,rootfrequency";
wordHash["8_26"] = "Jean,Jean,10,jean,rootfrequency";
wordHash["8_87"] = "Jean,Jean,10,jean,rootfrequency";
wordHash["8_165"] = "Jean,Jean,10,jean,rootfrequency";
wordHash["8_224"] = "Jean,Jean,10,jean,rootfrequency";
wordHash["8_265"] = "Jean,Jean,10,jean,rootfrequency";
wordHash["8_250"] = "Quand,When,19,quand,rootfrequency";
wordHash["8_396"] = "quand,when,19,quand,rootfrequency";
wordHash["8_119"] = "Non,No,1,non,rootfrequency";
wordHash["8_11"] = "parents,parents,7,parents,rootfrequency";
wordHash["8_291"] = "lui,her,24,lui,rootfrequency";
wordHash["8_152"] = "&#233;l&#233;gantes,elegant,2,&#233;l&#233;gantes,rootfrequency";
wordHash["8_316"] = "&#233;l&#233;gantes,elegant,2,&#233;l&#233;gantes,rootfrequency";
wordHash["8_221"] = "m&#234;me,even,10,m&#234;me,rootfrequency";
wordHash["8_303"] = "m&#234;me,even,10,m&#234;me,rootfrequency";
wordHash["8_409"] = "&#238;les,islands,1,&#238;les,rootfrequency";
wordHash["8_58"] = "peuvent,can,1,peuvent,rootfrequency";
wordHash["8_70"] = "Chaque,Every,3,chaque,rootfrequency";
wordHash["8_97"] = "chaque,every,3,chaque,rootfrequency";
wordHash["8_138"] = "bout,end,4,bout,rootfrequency";
wordHash["8_240"] = "bout,end,4,bout,rootfrequency";
wordHash["8_30"] = "fr&#232;res,brothers,4,fr&#232;res,rootfrequency";
wordHash["8_23"] = "amus&#233;s,entertained,1,amus&#233;s,rootfrequency";
wordHash["8_71"] = "enfant,child,2,enfant,rootfrequency";
wordHash["8_289"] = "r&#233;compense,reward,1,r&#233;compense,rootfrequency";
wordHash["8_149"] = "figuraient,represented,2,figuraient,rootfrequency";
wordHash["8_313"] = "figuraient,represented,2,figuraient,rootfrequency";
wordHash["8_178"] = "bougea,moved,1,bougea,rootfrequency";
wordHash["8_90"] = "bo&#238;te,box,1,bo&#238;te,rootfrequency";
wordHash["8_198"] = "enfin,finally,4,enfin,rootfrequency";
wordHash["8_200"] = "partir,to&nbsp;set&nbsp;off,1,partir,rootfrequency";
wordHash["8_73"] = "donc,so,4,donc,rootfrequency";
wordHash["8_354"] = "heureux,happy,3,heureux,rootfrequency";
wordHash["8_207"] = "elles,them,13,elles,rootfrequency";
wordHash["8_208"] = "elles,they,13,elles,rootfrequency";
wordHash["8_257"] = "elles,they,13,elles,rootfrequency";
wordHash["8_321"] = "grand,big,7,grand,rootfrequency";
wordHash["8_401"] = "sera,will&nbsp;be,5,sera,rootfrequency";
wordHash["8_404"] = "enti&#232;re,whole,1,enti&#232;re,rootfrequency";
wordHash["8_283"] = "premi&#232;re,first,2,premi&#232;re,rootfrequency";
wordHash["8_72"] = "alla,went,9,alla,rootfrequency";
wordHash["8_353"] = "est,is,18,est,rootfrequency";
wordHash["8_360"] = "est,is,18,est,rootfrequency";
wordHash["8_366"] = "est,is,18,est,rootfrequency";
wordHash["8_372"] = "est,is,18,est,rootfrequency";
wordHash["8_379"] = "est,is,18,est,rootfrequency";
wordHash["8_388"] = "est,is,18,est,rootfrequency";
wordHash["8_255"] = "app&#233;tissante,appetizing,1,app&#233;tissante,rootfrequency";
wordHash["8_187"] = "chatouilla,tickled,1,chatouilla,rootfrequency";
wordHash["8_349"] = "habitudes,usual&nbsp;live,1,habitudes,rootfrequency";
wordHash["8_2"] = "Pierre,Pierre,3,pierre,rootfrequency";
wordHash["8_44"] = "Pierre,Pierre,3,pierre,rootfrequency";
wordHash["8_180"] = "Pierre,Pierre,3,pierre,rootfrequency";
wordHash["8_13"] = "avaient,had,2,avaient,rootfrequency";
wordHash["8_155"] = "align&#232;rent,aligned,1,align&#232;rent,rootfrequency";
wordHash["8_225"] = "eut,had,8,eut,rootfrequency";
wordHash["8_98"] = "escargot,snail,16,escargot,rootfrequency";
wordHash["8_276"] = "escargot,snail,16,escargot,rootfrequency";
wordHash["8_32"] = "nous,we,14,nous,rootfrequency";
wordHash["8_35"] = "nous,we,14,nous,rootfrequency";
wordHash["8_38"] = "nous,we,14,nous,rootfrequency";
wordHash["8_50"] = "Nous,We,14,nous,rootfrequency";
wordHash["8_229"] = "nous,we,14,nous,rootfrequency";
wordHash["8_81"] = "beaux,nice,6,beaux,rootfrequency";
wordHash["8_122"] = "rentr&#232;rent,pulled&nbsp;back,1,rentr&#232;rent,rootfrequency";
wordHash["8_37"] = "Mais,But,48,mais,rootfrequency";
wordHash["8_115"] = "Mais,But,48,mais,rootfrequency";
wordHash["8_171"] = "Mais,But,48,mais,rootfrequency";
wordHash["8_201"] = "Mais,but,48,mais,rootfrequency";
wordHash["8_336"] = "Mais,But,48,mais,rootfrequency";
wordHash["8_12"] = "Ils,They,19,ils,rootfrequency";
wordHash["8_78"] = "ils,they,19,ils,rootfrequency";
wordHash["8_154"] = "ils,they,19,ils,rootfrequency";
wordHash["8_51"] = "avons,have,2,avons,rootfrequency";
wordHash["8_263"] = "celle,the&nbsp;one,2,celle,rootfrequency";
wordHash["8_205"] = "droit,straight,1,droit,rootfrequency";
wordHash["8_45"] = "Qu'est,What&nbsp;is,1,qu'est,rootfrequency";
wordHash["8_384"] = "village,village,2,village,rootfrequency";
wordHash["8_261"] = "seules,alone,1,seules,rootfrequency";
wordHash["8_74"] = "chercher,look&nbsp;for,4,chercher,rootfrequency";
wordHash["8_182"] = "chercher,to&nbsp;seek,4,chercher,rootfrequency";
wordHash["8_327"] = "chose,thing,2,chose,rootfrequency";
wordHash["8_79"] = "choisirent,chose,1,choisirent,rootfrequency";
wordHash["8_393"] = "mes,my,11,mes,rootfrequency";
wordHash["8_344"] = "vit,lives,5,vit,rootfrequency";
wordHash["8_189"] = "queue,tail,12,queue,rootfrequency";
wordHash["8_144"] = "roses,roses,2,roses,rootfrequency";
wordHash["8_305"] = "roses,roses,2,roses,rootfrequency";
wordHash["8_24"] = "Rentr&#233;s,Having&nbsp;come&nbsp;back,1,rentr&#233;s,rootfrequency";
wordHash["8_84"] = "seraient,would&nbsp;be,1,seraient,rootfrequency";
wordHash["8_17"] = "chevaux,horses,3,chevaux,rootfrequency";
wordHash["8_42"] = "chevaux,horses,3,chevaux,rootfrequency";
wordHash["8_65"] = "chevaux,horses,3,chevaux,rootfrequency";
wordHash["8_194"] = "brindilles,twigs,1,brindilles,rootfrequency";
wordHash["8_279"] = "terre,ground,1,terre,rootfrequency";
wordHash["8_67"] = "lentement,slowly,1,lentement,rootfrequency";
wordHash["8_179"] = "Alors,Then,12,alors,rootfrequency";
wordHash["8_223"] = "Alors,Then,12,alors,rootfrequency";
wordHash["8_227"] = "id&#233;e,idea,2,id&#233;e,rootfrequency";
wordHash["8_43"] = "r&#233;pondit,answered,7,r&#233;pondit,rootfrequency";
wordHash["8_112"] = "fabriquer,make,1,fabriquer,rootfrequency";
wordHash["8_52"] = "chacun,each,2,chacun,rootfrequency";
wordHash["8_16"] = "des,of&nbsp;the,60,des,rootfrequency";
wordHash["8_56"] = "des,of&nbsp;the,60,des,rootfrequency";
wordHash["8_64"] = "des,of&nbsp;the,60,des,rootfrequency";
wordHash["8_113"] = "des,of&nbsp;the,60,des,rootfrequency";
wordHash["8_135"] = "des,of&nbsp;the,60,des,rootfrequency";
wordHash["8_143"] = "des,of&nbsp;the,60,des,rootfrequency";
wordHash["8_146"] = "des,of&nbsp;the,60,des,rootfrequency";
wordHash["8_174"] = "des,of&nbsp;the,60,des,rootfrequency";
wordHash["8_190"] = "des,of&nbsp;the,60,des,rootfrequency";
wordHash["8_193"] = "des,of&nbsp;the,60,des,rootfrequency";
wordHash["8_231"] = "des,of&nbsp;the,60,des,rootfrequency";
wordHash["8_118"] = "dirent,said,2,dirent,rootfrequency";
wordHash["8_248"] = "belles,beautiful,1,belles,rootfrequency";
wordHash["8_365"] = "L'&#233;tang,The&nbsp;pond,1,l'&#233;tang,rootfrequency";
wordHash["8_287"] = "pour,for,30,pour,rootfrequency";
wordHash["8_141"] = "tribune,tribune,2,tribune,rootfrequency";
wordHash["8_311"] = "tribune,tribune,2,tribune,rootfrequency";
wordHash["8_403"] = "France,France,2,france,rootfrequency";
wordHash["8_357"] = "salle,room,1,salle,rootfrequency";
wordHash["8_147"] = "&#156;illets,carnations,2,&#156;illets,rootfrequency";
wordHash["8_308"] = "&#156;illets,carnations,2,&#156;illets,rootfrequency";
wordHash["8_281"] = "arriva,arrived,4,arriva,rootfrequency";
wordHash["8_36"] = "aussi,also,11,aussi,rootfrequency";
wordHash["8_60"] = "aussi,as,11,aussi,rootfrequency";
wordHash["8_110"] = "aussi,also,11,aussi,rootfrequency";
wordHash["8_328"] = "aussi,also,11,aussi,rootfrequency";
wordHash["8_340"] = "aussi,also,11,aussi,rootfrequency";
wordHash["8_343"] = "l'on,there&nbsp;one,4,l'on,rootfrequency";
wordHash["8_346"] = "l'on,the&nbsp;one,4,l'on,rootfrequency";
wordHash["8_352"] = "l'on,the&nbsp;one,4,l'on,rootfrequency";
wordHash["8_15"] = "courir,run,3,courir,rootfrequency";
wordHash["8_34"] = "courir,run,3,courir,rootfrequency";
wordHash["8_62"] = "courir,run,3,courir,rootfrequency";
wordHash["8_6"] = "all&#233;s,gone,1,all&#233;s,rootfrequency";
wordHash["8_105"] = "rouge,red,1,rouge,rootfrequency";
wordHash["8_27"] = "dit,said,32,dit,rootfrequency";
wordHash["8_222"] = "en arri&#232;re,backwards,2,en arri&#232;re,rootfrequency";
wordHash["8_382"] = "lapin,rabbit,2,lapin,rootfrequency";
wordHash["8_232"] = "salades,salads,3,salades,rootfrequency";
wordHash["8_249"] = "salades,salads,3,salades,rootfrequency";
wordHash["8_301"] = "salades,salads,3,salades,rootfrequency";
wordHash["8_131"] = "dans,in,47,dans,rootfrequency";
wordHash["8_203"] = "lieu,place,2,lieu,rootfrequency";
wordHash["8_234"] = "lieu,place,2,lieu,rootfrequency";
wordHash["8_33"] = "faisions,shall&nbsp;make,1,faisions,rootfrequency";
wordHash["8_271"] = "jockey,jockey,1,jockey,rootfrequency";
wordHash["8_0"] = "Tortue,Tortoise,5,tortue,rootfrequency";
wordHash["8_54"] = "tortue,tortoise,5,tortue,rootfrequency";
wordHash["8_76"] = "tortue,tortoise,5,tortue,rootfrequency";
wordHash["8_217"] = "tortue,tortoise,5,tortue,rootfrequency";
wordHash["8_151"] = "dames,ladies,2,dames,rootfrequency";
wordHash["8_315"] = "dames,ladies,2,dames,rootfrequency";
wordHash["8_425"] = "comprendre,understand,1,comprendre,rootfrequency";
wordHash["8_259"] = "en marche,moving,1,en marche,rootfrequency";
wordHash["8_159"] = "mont&#233;es,mounted,1,mont&#233;es,rootfrequency";
wordHash["8_137"] = "au,at&nbsp;the,34,au,rootfrequency";
wordHash["8_202"] = "au,at&nbsp;the,34,au,rootfrequency";
wordHash["8_233"] = "au,in&nbsp;the,34,au,rootfrequency";
wordHash["8_239"] = "au,at&nbsp;the,34,au,rootfrequency";
wordHash["8_284"] = "au,at&nbsp;the,34,au,rootfrequency";
wordHash["8_322"] = "mot,word,1,mot,rootfrequency";
wordHash["8_77"] = "Puis,Then,15,puis,rootfrequency";
wordHash["8_153"] = "Puis,Then,15,puis,rootfrequency";
wordHash["8_331"] = "veut,wants,1,veut,rootfrequency";
wordHash["8_21"] = "avait,had,18,avait,rootfrequency";
wordHash["8_273"] = "veux,want,2,veux,rootfrequency";
wordHash["8_298"] = "veux,want,2,veux,rootfrequency";
wordHash["8_92"] = "couleurs,colors,2,couleurs,rootfrequency";
wordHash["8_260"] = "toutes,all,9,toutes,rootfrequency";
wordHash["8_61"] = "bien,well,22,bien,rootfrequency";
wordHash["8_320"] = "bien,well,22,bien,rootfrequency";
wordHash["8_325"] = "bien,very,22,bien,rootfrequency";
wordHash["8_166"] = "donna,gave,5,donna,rootfrequency";
wordHash["8_292"] = "donna,gave,5,donna,rootfrequency";
wordHash["8_317"] = "Univers,Univers,3,univers,rootfrequency";
wordHash["8_390"] = "univers,universe,3,univers,rootfrequency";
wordHash["8_46"] = "ce,it,33,ce,rootfrequency";
wordHash["8_400"] = "ce,this,33,ce,rootfrequency";
wordHash["8_414"] = "ce,that,33,ce,rootfrequency";
wordHash["8_421"] = "ce,that,33,ce,rootfrequency";
wordHash["8_19"] = "cela,that,11,cela,rootfrequency";
wordHash["8_48"] = "cela,that,11,cela,rootfrequency";
wordHash["8_330"] = "cela,that,11,cela,rootfrequency";
wordHash["8_337"] = "cela,that,11,cela,rootfrequency";
wordHash["8_68"] = "voil&#224;,see&nbsp;there,5,voil&#224;,rootfrequency";
wordHash["8_41"] = "de,of,184,de,rootfrequency";
wordHash["8_218"] = "de,of,184,de,rootfrequency";
wordHash["8_235"] = "de,of,184,de,rootfrequency";
wordHash["8_241"] = "de,of,184,de,rootfrequency";
wordHash["8_264"] = "de,of,184,de,rootfrequency";
wordHash["8_309"] = "de,of,184,de,rootfrequency";
wordHash["8_362"] = "de,of,184,de,rootfrequency";
wordHash["8_374"] = "de,of,184,de,rootfrequency";
wordHash["8_246"] = "plant&#232;rent,planted,1,plant&#232;rent,rootfrequency";
wordHash["8_277"] = "roula,rolled,1,roula,rootfrequency";
wordHash["8_9"] = "avec,with,28,avec,rootfrequency";
wordHash["8_134"] = "avec,with,28,avec,rootfrequency";
wordHash["8_142"] = "avec,with,28,avec,rootfrequency";
wordHash["8_192"] = "avec,with,28,avec,rootfrequency";
wordHash["8_405"] = "avec,with,28,avec,rootfrequency";
wordHash["8_169"] = "du,of&nbsp;the,40,du,rootfrequency";
wordHash["8_368"] = "du,of&nbsp;the,40,du,rootfrequency";
wordHash["8_381"] = "du,of&nbsp;the,40,du,rootfrequency";
wordHash["8_111"] = "leur,for&nbsp;them,22,leur,rootfrequency";
wordHash["8_355"] = "Ainsi,Thus,5,ainsi,rootfrequency";
wordHash["8_280"] = "Elle,She,54,elle,rootfrequency";
wordHash["8_3"] = "et,and,195,et,rootfrequency";
wordHash["8_18"] = "et,and,195,et,rootfrequency";
wordHash["8_55"] = "et,and,195,et,rootfrequency";
wordHash["8_93"] = "et,and,195,et,rootfrequency";
wordHash["8_121"] = "et,and,195,et,rootfrequency";
wordHash["8_139"] = "et,and,195,et,rootfrequency";
wordHash["8_145"] = "et,and,195,et,rootfrequency";
wordHash["8_164"] = "et,and,195,et,rootfrequency";
wordHash["8_185"] = "et,and,195,et,rootfrequency";
wordHash["8_215"] = "et,and,195,et,rootfrequency";
wordHash["8_237"] = "Et,And,195,et,rootfrequency";
wordHash["8_262"] = "et,and,195,et,rootfrequency";
wordHash["8_286"] = "et,and,195,et,rootfrequency";
wordHash["8_302"] = "et,and,195,et,rootfrequency";
wordHash["8_306"] = "et,and,195,et,rootfrequency";
wordHash["8_323"] = "et,and,195,et,rootfrequency";
wordHash["8_350"] = "et,and,195,et,rootfrequency";
wordHash["8_395"] = "et,and,195,et,rootfrequency";
wordHash["8_412"] = "et,and,195,et,rootfrequency";
wordHash["8_419"] = "et,and,195,et,rootfrequency";
wordHash["8_285"] = "but,goal,1,but,rootfrequency";
wordHash["8_95"] = "peignit,painted,1,peignit,rootfrequency";
wordHash["8_136"] = "poteaux,posts,3,poteaux,rootfrequency";
wordHash["8_236"] = "poteaux,posts,3,poteaux,rootfrequency";
wordHash["8_296"] = "poteaux,posts,3,poteaux,rootfrequency";
wordHash["8_364"] = "mouche,fly,2,mouche,rootfrequency";
wordHash["8_49"] = "fait,does,8,fait,rootfrequency";
wordHash["8_407"] = "mers,seas,1,mers,rootfrequency";
wordHash["8_101"] = "diff&#233;rente,different,2,diff&#233;rente,rootfrequency";
wordHash["8_29"] = "ses,his,30,ses,rootfrequency";
wordHash["8_348"] = "ses,her,30,ses,rootfrequency";
wordHash["8_406"] = "ses,her,30,ses,rootfrequency";
wordHash["8_408"] = "ses,her,30,ses,rootfrequency";
wordHash["8_410"] = "ses,her,30,ses,rootfrequency";
wordHash["8_318"] = "C'est,It&nbsp;is,15,c'est,rootfrequency";
wordHash["8_94"] = "il,he,66,il,rootfrequency";
wordHash["8_108"] = "Il,He,66,il,rootfrequency";
wordHash["8_168"] = "signal,signal,1,signal,rootfrequency";
wordHash["8_272"] = "je,I,39,je,rootfrequency";
wordHash["8_297"] = "je,I,39,je,rootfrequency";
wordHash["8_181"] = "courut,ran,3,courut,rootfrequency";
wordHash["8_100"] = "casaque,jersey,1,casaque,rootfrequency";
wordHash["8_342"] = "o&#249;,where,10,o&#249;,rootfrequency";
wordHash["8_345"] = "o&#249;,where,10,o&#249;,rootfrequency";
wordHash["8_351"] = "o&#249;,where,10,o&#249;,rootfrequency";
wordHash["8_220"] = "revint,returned,2,revint,rootfrequency";
wordHash["8_335"] = "entier,whole,1,entier,rootfrequency";
wordHash["8_188"] = "la,the,139,la,rootfrequency";
wordHash["8_216"] = "la,the,139,la,rootfrequency";
wordHash["8_242"] = "la,the,139,la,rootfrequency";
wordHash["8_282"] = "la,the,139,la,rootfrequency";
wordHash["8_310"] = "la,the,139,la,rootfrequency";
wordHash["8_356"] = "la,the,139,la,rootfrequency";
wordHash["8_363"] = "la,the,139,la,rootfrequency";
wordHash["8_370"] = "La,The,139,la,rootfrequency";
wordHash["8_375"] = "la,the,139,la,rootfrequency";
wordHash["8_377"] = "La,The,139,la,rootfrequency";
wordHash["8_386"] = "la,the,139,la,rootfrequency";
wordHash["8_402"] = "la,the,139,la,rootfrequency";
wordHash["8_230"] = "mettions,place,1,mettions,rootfrequency";
wordHash["8_132"] = "le,the,129,le,rootfrequency";
wordHash["8_167"] = "le,the,129,le,rootfrequency";
wordHash["8_333"] = "le,the,129,le,rootfrequency";
wordHash["8_383"] = "Le,The,129,le,rootfrequency";
wordHash["8_387"] = "ville,city,3,ville,rootfrequency";
wordHash["8_253"] = "virent,saw,1,virent,rootfrequency";
wordHash["8_238"] = "vite,quickly,5,vite,rootfrequency";
wordHash["8_326"] = "grande,big,4,grande,rootfrequency";
wordHash["8_399"] = "grands,big,1,grands,rootfrequency";
wordHash["8_256"] = "verdure,greenery,1,verdure,rootfrequency";
wordHash["8_130"] = "piste,racecourse,2,piste,rootfrequency";
wordHash["8_243"] = "piste,course,2,piste,rootfrequency";
wordHash["8_127"] = "enfants,children,16,enfants,rootfrequency";
wordHash["8_245"] = "enfants,children,16,enfants,rootfrequency";
wordHash["8_394"] = "enfants,children,16,enfants,rootfrequency";
wordHash["8_177"] = "ne,not,42,ne,rootfrequency";
wordHash["8_107"] = "verte,green,1,verte,rootfrequency";
wordHash["8_57"] = "tortues,tortoises,6,tortues,rootfrequency";
wordHash["8_158"] = "tortues,tortoises,6,tortues,rootfrequency";
wordHash["8_176"] = "tortues,turtles,6,tortues,rootfrequency";
wordHash["8_191"] = "tortues,tortoises,6,tortues,rootfrequency";
wordHash["8_196"] = "tortues,tortoises,6,tortues,rootfrequency";
wordHash["8_252"] = "tortues,tortoises,6,tortues,rootfrequency";
wordHash["8_86"] = "jockeys,jockeys,1,jockeys,rootfrequency";
wordHash["8_290"] = "on,they,20,on,rootfrequency";
wordHash["8_212"] = "ou,or,5,ou,rootfrequency";
wordHash["8_385"] = "ou,or,5,ou,rootfrequency";
wordHash["8_389"] = "votre,your,6,votre,rootfrequency";
wordHash["8_4"] = "Paul,Paul,3,paul,rootfrequency";
wordHash["8_186"] = "Paul,Paul,3,paul,rootfrequency";
wordHash["8_219"] = "Paul,Paul,3,paul,rootfrequency";
wordHash["8_25"] = "&#224; la maison,at&nbsp;the&nbsp;house,1,&#224; la maison,rootfrequency";
wordHash["8_10"] = "leurs,their,14,leurs,rootfrequency";
wordHash["8_123"] = "leurs,their,14,leurs,rootfrequency";
wordHash["8_156"] = "leurs,their,14,leurs,rootfrequency";
wordHash["8_268"] = "rapidement,quickly,1,rapidement,rootfrequency";
wordHash["8_371"] = "prairie,meadow,1,prairie,rootfrequency";
wordHash["8_8"] = "courses,races,1,courses,rootfrequency";
wordHash["8_66"] = "plus,more,24,plus,rootfrequency";
wordHash["8_170"] = "d&#233;part,departure,1,d&#233;part,rootfrequency";
wordHash["8_334"] = "monde,world,6,monde,rootfrequency";
wordHash["8_329"] = "car,because,8,car,rootfrequency";
wordHash["8_20"] = "les,them,126,les,rootfrequency";
wordHash["8_85"] = "les,the,126,les,rootfrequency";
wordHash["8_116"] = "les,the,126,les,rootfrequency";
wordHash["8_125"] = "Les,The,126,les,rootfrequency";
wordHash["8_150"] = "les,the,126,les,rootfrequency";
wordHash["8_161"] = "les,the,126,les,rootfrequency";
wordHash["8_195"] = "Les,The,126,les,rootfrequency";
wordHash["8_244"] = "les,the,126,les,rootfrequency";
wordHash["8_251"] = "les,the,126,les,rootfrequency";
wordHash["8_295"] = "les,the,126,les,rootfrequency";
wordHash["8_300"] = "les,the,126,les,rootfrequency";
wordHash["8_304"] = "les,the,126,les,rootfrequency";
wordHash["8_307"] = "les,the,126,les,rootfrequency";
wordHash["8_314"] = "les,the,126,les,rootfrequency";
wordHash["8_47"] = "que,what,60,que,rootfrequency";
wordHash["8_63"] = "que,as,60,que,rootfrequency";
wordHash["8_269"] = "que,that,60,que,rootfrequency";
wordHash["8_415"] = "que,what,60,que,rootfrequency";
wordHash["8_422"] = "que,what,60,que,rootfrequency";
wordHash["8_75"] = "sa,his,36,sa,rootfrequency";
wordHash["8_89"] = "sa,his,36,sa,rootfrequency";
wordHash["8_288"] = "sa,her,36,sa,rootfrequency";
wordHash["8_183"] = "son,his,41,son,rootfrequency";
wordHash["8_270"] = "son,her,41,son,rootfrequency";
wordHash["8_275"] = "son,her,41,son,rootfrequency";
wordHash["8_83"] = "qui,who,60,qui,rootfrequency";
wordHash["8_148"] = "qui,who,60,qui,rootfrequency";
wordHash["8_312"] = "qui,who,60,qui,rootfrequency";
wordHash["8_31"] = "Si,If,31,si,rootfrequency";
wordHash["8_228"] = "Si,If,31,si,rootfrequency";
wordHash["8_267"] = "si,so,31,si,rootfrequency";
wordHash["8_418"] = "voir,see,6,voir,rootfrequency";
wordHash["8_254"] = "cette,this,4,cette,rootfrequency";
wordHash["8_209"] = "allaient,went,1,allaient,rootfrequency";
wordHash["8_59"] = "tous,all,9,tous,rootfrequency";
wordHash["8_69"] = "tout,all,25,tout,rootfrequency";
wordHash["8_413"] = "tout,all,25,tout,rootfrequency";
wordHash["8_420"] = "tout,all,25,tout,rootfrequency";
wordHash["8_28"] = "&#224;,to,81,&#224;,rootfrequency";
wordHash["8_91"] = "&#224;,to,81,&#224;,rootfrequency";
wordHash["8_96"] = "&#224;,onto,81,&#224;,rootfrequency";
wordHash["8_199"] = "&#224;,to,81,&#224;,rootfrequency";
wordHash["8_210"] = "&#224;,to,81,&#224;,rootfrequency";
wordHash["8_213"] = "&#224;,to,81,&#224;,rootfrequency";
wordHash["8_278"] = "&#224;,onto,81,&#224;,rootfrequency";
wordHash["8_293"] = "&#224;,to,81,&#224;,rootfrequency";
wordHash["8_358"] = "&#224;,to,81,&#224;,rootfrequency";
wordHash["8_391"] = "&#224;,to,81,&#224;,rootfrequency";
wordHash["8_266"] = "avan&#231;a,advanced,1,avan&#231;a,rootfrequency";
wordHash["8_341"] = "l'endroit,the&nbsp;place,1,l'endroit,rootfrequency";
wordHash["8_80"] = "trois,three,8,trois,rootfrequency";
wordHash["8_126"] = "trois,three,8,trois,rootfrequency";
wordHash["8_157"] = "trois,three,8,trois,rootfrequency";
wordHash["8_162"] = "trois,three,8,trois,rootfrequency";
wordHash["8_175"] = "trois,three,8,trois,rootfrequency";
wordHash["8_247"] = "trois,three,8,trois,rootfrequency";
wordHash["8_319"] = "un,a,83,un,rootfrequency";
