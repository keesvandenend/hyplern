﻿/* globals console,document,window,cordova */
var wordHash = {};
wordHash["2_3"] = "uma,one,84,uma,rootfrequency";
wordHash["2_42"] = "uma,a,84,uma,rootfrequency";
wordHash["2_55"] = "amava,loved,1,amava,rootfrequency";
wordHash["2_59"] = "fabricar,to&nbsp;manufacture,2,fabricar,rootfrequency";
wordHash["2_18"] = "a,the,242,a,rootfrequency";
wordHash["2_23"] = "a,to,242,a,rootfrequency";
wordHash["2_48"] = "a,the,242,a,rootfrequency";
wordHash["2_112"] = "a,to,242,a,rootfrequency";
wordHash["2_116"] = "a,the,242,a,rootfrequency";
wordHash["2_137"] = "a,the,242,a,rootfrequency";
wordHash["2_157"] = "a,the,242,a,rootfrequency";
wordHash["2_160"] = "a,the,242,a,rootfrequency";
wordHash["2_190"] = "A,The,242,a,rootfrequency";
wordHash["2_29"] = "e,and,254,e,rootfrequency";
wordHash["2_39"] = "e,and,254,e,rootfrequency";
wordHash["2_53"] = "e,and,254,e,rootfrequency";
wordHash["2_65"] = "e,and,254,e,rootfrequency";
wordHash["2_72"] = "e,and,254,e,rootfrequency";
wordHash["2_127"] = "e,and,254,e,rootfrequency";
wordHash["2_162"] = "e,and,254,e,rootfrequency";
wordHash["2_159"] = "nem,nor,14,nem,rootfrequency";
wordHash["2_0"] = "O,The,353,o,rootfrequency";
wordHash["2_25"] = "o,the,353,o,rootfrequency";
wordHash["2_30"] = "o,the,353,o,rootfrequency";
wordHash["2_56"] = "o,the,353,o,rootfrequency";
wordHash["2_74"] = "o,the,353,o,rootfrequency";
wordHash["2_97"] = "o,the,353,o,rootfrequency";
wordHash["2_122"] = "o,the,353,o,rootfrequency";
wordHash["2_90"] = "porque,because,13,porque,rootfrequency";
wordHash["2_161"] = "sede,thirst,2,sede,rootfrequency";
wordHash["2_8"] = "tendo,having,1,tendo,rootfrequency";
wordHash["2_130"] = "melhor,better,10,melhor,rootfrequency";
wordHash["2_168"] = "al&#233;m,beyond,3,al&#233;m,rootfrequency";
wordHash["2_84"] = "com,with,84,com,rootfrequency";
wordHash["2_6"] = "rei,king,3,rei,rootfrequency";
wordHash["2_75"] = "rei,king,3,rei,rootfrequency";
wordHash["2_142"] = "cansa,tires,1,cansa,rootfrequency";
wordHash["2_179"] = "havia,had,11,havia,rootfrequency";
wordHash["2_14"] = "minas,mines,3,minas,rootfrequency";
wordHash["2_28"] = "minas,mines,3,minas,rootfrequency";
wordHash["2_149"] = "minas,mines,3,minas,rootfrequency";
wordHash["2_94"] = "princ&#237;pio,beginning,2,princ&#237;pio,rootfrequency";
wordHash["2_144"] = "produzir,to&nbsp;produce,1,produzir,rootfrequency";
wordHash["2_133"] = "seus,his,17,seus,rootfrequency";
wordHash["2_87"] = "ficou,grew,9,ficou,rootfrequency";
wordHash["2_181"] = "converter-se,to&nbsp;convert&nbsp;itself,1,converter-se,rootfrequency";
wordHash["2_102"] = "vendo,seeing,7,vendo,rootfrequency";
wordHash["2_4"] = "vez,time,15,vez,rootfrequency";
wordHash["2_98"] = "sentido,intention,1,sentido,rootfrequency";
wordHash["2_38"] = "cultivar,to&nbsp;cultivate,2,cultivar,rootfrequency";
wordHash["2_136"] = "cultivar,to&nbsp;cultivate,2,cultivar,rootfrequency";
wordHash["2_174"] = "dada,given,1,dada,rootfrequency";
wordHash["2_44"] = "fome,hunger,4,fome,rootfrequency";
wordHash["2_158"] = "fome,hunger,4,fome,rootfrequency";
wordHash["2_27"] = "dessas,of&nbsp;these,1,dessas,rootfrequency";
wordHash["2_138"] = "terra,land,6,terra,rootfrequency";
wordHash["2_192"] = "tinha,had,28,tinha,rootfrequency";
wordHash["2_175"] = "pelos,by&nbsp;the,4,pelos,rootfrequency";
wordHash["2_183"] = "desprezo,disdain,2,desprezo,rootfrequency";
wordHash["2_9"] = "achado,found,3,achado,rootfrequency";
wordHash["2_147"] = "traz&#234;-los,fetched&nbsp;them,1,traz&#234;-los,rootfrequency";
wordHash["2_89"] = "satisfeito,satisfied,4,satisfeito,rootfrequency";
wordHash["2_95"] = "qual,what,6,qual,rootfrequency";
wordHash["2_140"] = "nunca,never,8,nunca,rootfrequency";
wordHash["2_22"] = "vassalos,vassals,2,vassalos,rootfrequency";
wordHash["2_134"] = "vassalos,vassals,2,vassalos,rootfrequency";
wordHash["2_131"] = "empregar,to&nbsp;employ,1,empregar,rootfrequency";
wordHash["2_1"] = "OURO,Gold,14,ouro,rootfrequency";
wordHash["2_16"] = "ouro,gold,14,ouro,rootfrequency";
wordHash["2_26"] = "ouro,gold,14,ouro,rootfrequency";
wordHash["2_70"] = "ouro,gold,14,ouro,rootfrequency";
wordHash["2_83"] = "ouro,gold,14,ouro,rootfrequency";
wordHash["2_123"] = "ouro,gold,14,ouro,rootfrequency";
wordHash["2_153"] = "ouro,gold,14,ouro,rootfrequency";
wordHash["2_186"] = "ouro,gold,14,ouro,rootfrequency";
wordHash["2_21"] = "dos,of&nbsp;the,24,dos,rootfrequency";
wordHash["2_115"] = "ent&#227;o,then,14,ent&#227;o,rootfrequency";
wordHash["2_31"] = "resultado,resulted,1,resultado,rootfrequency";
wordHash["2_80"] = "essas,these,1,essas,rootfrequency";
wordHash["2_76"] = "quis,wanted,4,quis,rootfrequency";
wordHash["2_11"] = "seu,his,24,seu,rootfrequency";
wordHash["2_106"] = "traziam,brought,1,traziam,rootfrequency";
wordHash["2_110"] = "comer,to&nbsp;eat,2,comer,rootfrequency";
wordHash["2_170"] = "estima&#231;&#227;o,esteem,2,estima&#231;&#227;o,rootfrequency";
wordHash["2_177"] = "estima&#231;&#227;o,esteem,2,estima&#231;&#227;o,rootfrequency";
wordHash["2_189"] = "abund&#226;ncia,abundance,1,abund&#226;ncia,rootfrequency";
wordHash["2_17"] = "empregou,employed,2,empregou,rootfrequency";
wordHash["2_184"] = "logo,soon,4,logo,rootfrequency";
wordHash["2_176"] = "homens,men,3,homens,rootfrequency";
wordHash["2_105"] = "lhe,him,23,lhe,rootfrequency";
wordHash["2_172"] = "lhe,it,23,lhe,rootfrequency";
wordHash["2_114"] = "Pediu-lhe,Asked&nbsp;him,1,pediu-lhe,rootfrequency";
wordHash["2_19"] = "maior,bigger,2,maior,rootfrequency";
wordHash["2_78"] = "mandou-lhe,ordered,1,mandou-lhe,rootfrequency";
wordHash["2_167"] = "valor,value,2,valor,rootfrequency";
wordHash["2_187"] = "aparecesse,appeared,1,aparecesse,rootfrequency";
wordHash["2_62"] = "frangos,chickens,2,frangos,rootfrequency";
wordHash["2_66"] = "outras,other,3,outras,rootfrequency";
wordHash["2_12"] = "reino,kingdom,2,reino,rootfrequency";
wordHash["2_71"] = "fino,fine,2,fino,rootfrequency";
wordHash["2_129"] = "seria,would&nbsp;be,6,seria,rootfrequency";
wordHash["2_86"] = "ele,which,29,ele,rootfrequency";
wordHash["2_63"] = "pombos,pigeons,1,pombos,rootfrequency";
wordHash["2_13"] = "algumas,some,2,algumas,rootfrequency";
wordHash["2_41"] = "houve,had,1,houve,rootfrequency";
wordHash["2_37"] = "por,for,39,por,rootfrequency";
wordHash["2_67"] = "iguarias,dishes,2,iguarias,rootfrequency";
wordHash["2_81"] = "iguarias,dishes,2,iguarias,rootfrequency";
wordHash["2_2"] = "Era,was,31,era,rootfrequency";
wordHash["2_51"] = "era,was,31,era,rootfrequency";
wordHash["2_96"] = "era,was,31,era,rootfrequency";
wordHash["2_125"] = "era,was,31,era,rootfrequency";
wordHash["2_165"] = "tem,has,2,tem,rootfrequency";
wordHash["2_77"] = "jantar,supper,4,jantar,rootfrequency";
wordHash["2_166"] = "outro,another,12,outro,rootfrequency";
wordHash["2_107"] = "mais,more,35,mais,rootfrequency";
wordHash["2_108"] = "nada,nothing,15,nada,rootfrequency";
wordHash["2_47"] = "Mas,But,48,mas,rootfrequency";
wordHash["2_101"] = "mas,but,48,mas,rootfrequency";
wordHash["2_120"] = "bem,well,19,bem,rootfrequency";
wordHash["2_151"] = "busca,search,2,busca,rootfrequency";
wordHash["2_58"] = "mandou,ordered,5,mandou,rootfrequency";
wordHash["2_68"] = "todas,all,8,todas,rootfrequency";
wordHash["2_20"] = "parte,part,2,parte,rootfrequency";
wordHash["2_49"] = "rainha,queen,4,rainha,rootfrequency";
wordHash["2_100"] = "rainha,queen,4,rainha,rootfrequency";
wordHash["2_117"] = "rainha,queen,4,rainha,rootfrequency";
wordHash["2_191"] = "rainha,queen,4,rainha,rootfrequency";
wordHash["2_156"] = "mata,kills,1,mata,rootfrequency";
wordHash["2_57"] = "povo,people,3,povo,rootfrequency";
wordHash["2_64"] = "galinhas,hens,1,galinhas,rootfrequency";
wordHash["2_35"] = "terras,lands,1,terras,rootfrequency";
wordHash["2_46"] = "pa&#237;s,country,1,pa&#237;s,rootfrequency";
wordHash["2_93"] = "ao,to&nbsp;&nbsp;the,62,ao,rootfrequency";
wordHash["2_34"] = "as,the,59,as,rootfrequency";
wordHash["2_193"] = "ju&#237;zo,good&nbsp;sense,1,ju&#237;zo,rootfrequency";
wordHash["2_88"] = "todo,all,14,todo,rootfrequency";
wordHash["2_73"] = "quando,when,18,quando,rootfrequency";
wordHash["2_99"] = "da,of&nbsp;the,78,da,rootfrequency";
wordHash["2_169"] = "da,of,78,da,rootfrequency";
wordHash["2_15"] = "de,of,175,de,rootfrequency";
wordHash["2_69"] = "de,of,175,de,rootfrequency";
wordHash["2_82"] = "de,of,175,de,rootfrequency";
wordHash["2_109"] = "de,of,175,de,rootfrequency";
wordHash["2_143"] = "de,of,175,de,rootfrequency";
wordHash["2_180"] = "de,of,175,de,rootfrequency";
wordHash["2_145"] = "do,than,80,do,rootfrequency";
wordHash["2_152"] = "do,of,80,do,rootfrequency";
wordHash["2_60"] = "em,in,45,em,rootfrequency";
wordHash["2_135"] = "em,in,45,em,rootfrequency";
wordHash["2_182"] = "em,in,45,em,rootfrequency";
wordHash["2_188"] = "em,in,45,em,rootfrequency";
wordHash["2_79"] = "servir,to&nbsp;serve,1,servir,rootfrequency";
wordHash["2_24"] = "extrair,extract,1,extrair,rootfrequency";
wordHash["2_119"] = "visse,saw,1,visse,rootfrequency";
wordHash["2_126"] = "alimento,food,1,alimento,rootfrequency";
wordHash["2_111"] = "come&#231;ou,started,7,come&#231;ou,rootfrequency";
wordHash["2_32"] = "foi,was,19,foi,rootfrequency";
wordHash["2_92"] = "compreendeu,understood,2,compreendeu,rootfrequency";
wordHash["2_52"] = "prudente,prudent,2,prudente,rootfrequency";
wordHash["2_113"] = "zangar-se,irritate&nbsp;himself,1,zangar-se,rootfrequency";
wordHash["2_43"] = "grande,great,11,grande,rootfrequency";
wordHash["2_10"] = "no,in,39,no,rootfrequency";
wordHash["2_45"] = "no,in&nbsp;the,39,no,rootfrequency";
wordHash["2_91"] = "n&#227;o,not,96,n&#227;o,rootfrequency";
wordHash["2_104"] = "n&#227;o,not,96,n&#227;o,rootfrequency";
wordHash["2_124"] = "n&#227;o,not,96,n&#227;o,rootfrequency";
wordHash["2_155"] = "n&#227;o,not,96,n&#227;o,rootfrequency";
wordHash["2_164"] = "n&#227;o,not,96,n&#227;o,rootfrequency";
wordHash["2_36"] = "ficaram,remained,2,ficaram,rootfrequency";
wordHash["2_61"] = "segredo,secret,1,segredo,rootfrequency";
wordHash["2_7"] = "que,that,252,que,rootfrequency";
wordHash["2_33"] = "que,that,252,que,rootfrequency";
wordHash["2_40"] = "que,that,252,que,rootfrequency";
wordHash["2_50"] = "que,that,252,que,rootfrequency";
wordHash["2_54"] = "que,that,252,que,rootfrequency";
wordHash["2_85"] = "que,the,252,que,rootfrequency";
wordHash["2_103"] = "que,that,252,que,rootfrequency";
wordHash["2_118"] = "que,that,252,que,rootfrequency";
wordHash["2_121"] = "que,that,252,que,rootfrequency";
wordHash["2_128"] = "que,that,252,que,rootfrequency";
wordHash["2_139"] = "que,that,252,que,rootfrequency";
wordHash["2_146"] = "que,what,252,que,rootfrequency";
wordHash["2_154"] = "que,that,252,que,rootfrequency";
wordHash["2_163"] = "que,that,252,que,rootfrequency";
wordHash["2_171"] = "que,that,252,que,rootfrequency";
wordHash["2_178"] = "que,that,252,que,rootfrequency";
wordHash["2_185"] = "que,that,252,que,rootfrequency";
wordHash["2_141"] = "se,itself,55,se,rootfrequency";
wordHash["2_150"] = "&#224;,in&nbsp;the,34,&#224;,rootfrequency";
wordHash["2_173"] = "&#233;,is,32,&#233;,rootfrequency";
wordHash["2_148"] = "nas,the,6,nas,rootfrequency";
wordHash["2_5"] = "um,a,92,um,rootfrequency";