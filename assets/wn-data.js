/* Dati del Nisab 2026 (estratti da index.html). Nessun dato personale. */
(function(){
function t(en,it,ur){return {en:en,it:it,ur:ur}}
var S={ /* surah names */
baq:t('Al-Baqarah','Al-Baqarah','البقرہ'),ak:t('Ayatul Kursi','Ayatul Kursi','آیت الکرسی'),fil:t('Al-Fil','Al-Fil','الفیل'),
ali:t("Ali 'Imran",'Ali Imran','آل عمران'),ana:t("Al-An'am",'Al-An\'am','الانعام'),lah:t('Al-Lahab','Al-Lahab','اللہب'),qur:t('Quraish','Quraysh','قریش'),
nas:t('An-Nasr','An-Nasr','النصر'),kaf:t('Al-Kafirun','Al-Kafirun','الکافرون'),mao:t("Al-Ma'un",'Al-Ma\'un','الماعون'),rad:t("Ar-Ra'd",'Ar-Ra\'d','الرعد'),
nah:t('An-Nahl','An-Nahl','النحل'),isr:t("Bani Isra'il",'Bani Isra\'il','بنی اسرائیل'),saj:t('Ha-Mim As-Sajdah','Ha-Mim As-Sajdah','حم السجدہ'),
qar:t("Al-Qari'ah",'Al-Qari\'ah','القارعۃ'),tak:t('At-Takathur','At-Takathur','التکاثر'),qad:t('Al-Qadr','Al-Qadr','القدر'),zil:t('Az-Zilzal','Az-Zilzal','الزلزال'),
tin:t('At-Tin','At-Tin','التین'),ins:t('Al-Inshirah','Al-Inshirah','الانشراح'),duh:t('Ad-Duha','Ad-Duha','الضحیٰ'),kah:t('Al-Kahf','Al-Kahf','الکہف'),
ahz:t('Al-Ahzab','Al-Ahzab','الاحزاب'),has:t('Al-Hashr','Al-Hashr','الحشر'),gha:t('Al-Ghashiyah','Al-Ghashiyah','الغاشیہ'),ala:t("Al-A'la",'Al-A\'la','الاعلیٰ'),
bur:t('Al-Buruj','Al-Buruj','البروج'),tar:t('At-Tariq','At-Tariq','الطارق'),dah:t('Ad-Dahr','Ad-Dahr','الدہر'),saf:t('As-Saff','As-Saff','الصف'),
jum:t("Al-Jumu'ah",'Al-Jumu\'ah','الجمعہ'),rah:t('Ar-Rahman','Ar-Rahman','الرحمٰن')};
var SURAH_NUMBER={baq:2,ak:2,fil:105,ali:3,ana:6,lah:111,qur:106,nas:110,kaf:109,mao:107,rad:13,nah:16,isr:17,saj:41,qar:101,tak:102,qad:97,zil:99,tin:95,ins:94,duh:93,kah:18,ahz:33,has:59,gha:88,ala:87,bur:85,tar:86,dah:76,saf:61,jum:62,rah:55};
function H(k,v){return {s:S[k],v:v,n:SURAH_NUMBER[k]}}
var HIFZ={
8:[H('baq','1–5'),H('ak',''),H('baq','6–10')],
9:[H('baq','11–17'),H('fil','')],
10:[H('baq','1–17'),H('ak','')],
12:[H('ali','26–28, 191–195'),H('ana','96–109')],
13:[H('lah',''),H('qur',''),H('nas',''),H('kaf',''),H('mao',''),H('rad','9–14'),H('nah','67–71'),H('isr','79–85'),H('saj','31–36')],
14:[H('qar',''),H('tak',''),H('qad',''),H('zil',''),H('tin',''),H('ins',''),H('duh',''),H('kah','1–11, 103–111'),H('ahz','70–74'),H('has','19–25')],
15:[H('gha',''),H('ala','')],16:[H('bur','')],17:[H('tar','')],18:[H('dah','')],19:[H('saf','')],20:[H('jum',''),H('rah','')]};
var NAMAZ={
7:[t('Adhan; Wudu and its prayer; the method of Salat','Adhan; Wudu e la sua preghiera; il modo di eseguire la Salat','اذان؛ وضو اور اس کی دعا؛ نماز کا طریقہ')],
8:[t('Complete Salat with translation','Salat completa con traduzione','مکمل نماز مع ترجمہ')],
9:[t('Dua-e-Qunoot; funeral prayer; Tayammum; prayer for travelling','Dua-e-Qunoot; preghiera funebre; Tayammum; preghiera per il viaggio','دعائے قنوت؛ نمازِ جنازہ؛ تیمم؛ سفر کی دعا')],
10:[t('The 9 prayers (duas) of the Nisab; full Salat revision','Le 9 preghiere (dua) del Nisab; ripasso della Salat completa','نصاب کی 9 دعائیں؛ مکمل نماز کی دہرائی')],
11:[t('Prayers on entering and leaving home; prayer after the Adhan','Preghiere per entrare e uscire di casa; preghiera dopo l\'Adhan','گھر میں داخل ہونے اور نکلنے کی دعا؛ اذان کے بعد کی دعا')]};
var NAMAZ12=[t('Complete Salat with translation, word by word, from Takbir to Salam','Salat completa con traduzione, parola per parola, dal Takbir al Salam','مکمل نماز مع ترجمہ، لفظ بہ لفظ، تکبیر سے سلام تک'),t('Adhan; Dua-e-Qunoot and funeral prayer (revision)','Adhan; Dua-e-Qunoot e preghiera funebre (ripasso)','اذان؛ دعائے قنوت اور نمازِ جنازہ (دہرائی)')];
var NAMAZX={12:t('Prayer for a journey; prayer when visiting the sick','Preghiera per il viaggio; preghiera per visitare un malato','سفر کی دعا؛ عیادتِ مریض کی دعا'),15:t("The Qur'anic prayers listed in the Nisab",'Le preghiere coraniche indicate nel Nisab','نصاب میں درج قرآنی دعائیں')};
var HAD={
7:t('2 hadith · 4 Names of Allah','2 hadith · 4 Nomi di Allah','2 احادیث · اللہ کے 4 نام'),
8:t('2 hadith · 6 Names of Allah','2 hadith · 6 Nomi di Allah','2 احادیث · اللہ کے 6 نام'),
9:t('2 hadith · 5 Names of Allah','2 hadith · 5 Nomi di Allah','2 احادیث · اللہ کے 5 نام'),
10:t('10 hadith · 15 Names of Allah (including those of ages 7, 8, 9)','10 hadith · 15 Nomi di Allah (compresi quelli dei 7, 8, 9 anni)','10 احادیث · اللہ کے 15 نام (7، 8، 9 سال کے نام سمیت)'),
11:t('10 hadith · Names of Allah for age 11','10 hadith · Nomi di Allah per i 11 anni','10 احادیث · 11 سال کے اللہ کے نام'),
12:t('10 hadith · Names of Allah for age 12','10 hadith · Nomi di Allah per i 12 anni','10 احادیث · 12 سال کے اللہ کے نام'),
13:t('7 hadith · Names of Allah for age 13','7 hadith · Nomi di Allah per i 13 anni','7 احادیث · 13 سال کے اللہ کے نام'),
14:t('Hadith of the Nisab + Forty Gems 1–20 · Names of Allah for age 14','Hadith del Nisab + Forty Gems 1–20 · Nomi di Allah per i 14 anni','نصاب کی احادیث + چالیس جواہر پارے 1–20 · 14 سال کے اللہ کے نام'),
15:t('Hadith on the Nisab page for age 15','Hadith della pagina del Nisab per i 15 anni','نصاب میں 15 سال کے صفحے کی احادیث'),
17:t('The «Kaifa antum» hadith','Il hadith «Kaifa antum»','حدیث «کیف انتم»'),
18:t('Revision of all hadith above','Ripasso di tutti i hadith precedenti','اوپر کی تمام احادیث کی دہرائی'),19:null,20:null};
HAD[19]=HAD[18];HAD[20]=HAD[18];
var QAS={
13:t('Couplets 1–20','Distici 1–20','اشعار 1–20'),14:t('Revise couplets 1–20','Ripasso dei distici 1–20','اشعار 1–20 کی دہرائی'),
15:t('Couplets 21–30','Distici 21–30','اشعار 21–30'),16:t('Couplets 31–40 · first 9 couplets of «Salam ba-Huzoor»','Distici 31–40 · primi 9 distici di «Salam ba-Huzoor»','اشعار 31–40 · «سلام بحضور» کے پہلے 9 اشعار'),
17:t('Couplets 41–50','Distici 41–50','اشعار 41–50'),18:t('Couplets 51–60','Distici 51–60','اشعار 51–60'),19:t('Couplets 51–60','Distici 51–60','اشعار 51–60'),20:t('Couplets 61–70','Distici 61–70','اشعار 61–70')};
var PRES=t('Presentation on the book «Messaggio di Pace» (Payghām-e Ṣulḥ): prepared at home, worth 10 of the 70 points','Presentazione sul libro «Messaggio di Pace» (Payghām-e Ṣulḥ): preparata a casa, vale 10 dei 70 punti','کتاب «پیغامِ صلح» پر پریزنٹیشن: گھر پر تیار کریں، 70 میں سے 10 نمبر');
var IJTEMA_QUIZ={
 A:[
  ["Come si chiama il nostro amato Profeta?", ["Hazrat Isa (as)", "Hazrat Musa (as)", "Hazrat Muhammad (saw)"], 2],
  ["In quale città è nato il Santo Profeta (saw)?", ["Medina", "Mecca", "Gerusalemme"], 1],
  ["Come si chiama il libro sacro dell'Islam?", ["Il Vangelo", "La Torah", "Il Sacro Corano"], 2],
  ["Quante preghiere obbligatorie (namaz) facciamo ogni giorno?", ["5", "3", "7"], 0],
  ["Come si chiama la preghiera dell'alba?", ["Fajr", "Maghrib", "Isha"], 0],
  ["Come si chiama il Messia Promesso (as)?", ["Hazrat Mirza Tahir Ahmad (rh)", "Hazrat Hakim Nur-ud-Din (ra)", "Hazrat Mirza Ghulam Ahmad (as)"], 2],
  ["In quale villaggio è nato il Messia Promesso (as)?", ["Rabwah", "Qadian", "Lahore"], 1],
  ["Come si chiama il nostro Khalifa di oggi?", ["Hazrat Mirza Bashir-ud-Din Mahmud Ahmad (ra)", "Hazrat Mirza Nasir Ahmad (rh)", "Hazrat Mirza Masroor Ahmad (aba)"], 2],
  ["Chi è stato il primo Khalifa dopo il Santo Profeta (saw)?", ["Hazrat Ali (ra)", "Hazrat Umar (ra)", "Hazrat Abu Bakr (ra)"], 2],
  ["Quanti sono i pilastri dell'Islam?", ["4", "6", "5"], 2],
  ["Che cosa diciamo prima di cominciare a mangiare?", ["Bismillahir Rahmanir Rahim", "Alhamdulillah", "Insha'Allah"], 0],
  ["Come salutiamo un altro musulmano?", ["Masha'Allah", "Jazakallah", "Assalamo alaikum wa rahmatullah"], 2]
 ],
 B:[
  ["Quante sure ci sono nel Sacro Corano?", ["114", "120", "99"], 0],
  ["Qual è la prima sura del Sacro Corano?", ["Al-Fatiha", "An-Nas", "Al-Baqarah"], 0],
  ["In quale grotta il Santo Profeta (saw) ricevette la prima rivelazione?", ["La grotta di Thaur", "La grotta di Hira", "La grotta di Badr"], 1],
  ["Qual è stata la prima parola rivelata del Sacro Corano?", ["«Iqra'» (Leggi / Recita)", "«Bismillah»", "«Alhamdulillah»"], 0],
  ["Che cos'è l'Hijra?", ["Il viaggio del Profeta (saw) in Siria da ragazzo", "Il pellegrinaggio dell'ultimo anno di vita del Profeta (saw)", "La migrazione del Santo Profeta (saw) da Mecca a Medina, nel 622 d.C."], 2],
  ["Chi crebbe il Santo Profeta (saw) dopo la morte del nonno ʿAbdul Muttalib?", ["Lo zio Abu Talib", "Lo zio Hazrat Hamza (ra)", "Lo zio Abu Lahab"], 0],
  ["Quando è nato il Messia Promesso (as)?", ["Il 26 maggio 1908", "Il 23 marzo 1889", "Il 13 febbraio 1835"], 2],
  ["Quando e dove ebbe luogo la prima Bai'at (fondazione della Jamaʿat)?", ["Nel 1908, a Lahore", "Nel 1835, a Qadian", "Il 23 marzo 1889, a Ludhiana"], 2],
  ["Chi fu il primo Khalifa del Messia Promesso (as)?", ["Hazrat Hakim Maulvi Nur-ud-Din (ra)", "Hazrat Mirza Nasir Ahmad (rh)", "Hazrat Mirza Bashir-ud-Din Mahmud Ahmad (ra)"], 0],
  ["Chi è il Khalifatul Masih IV?", ["Hazrat Hakim Maulvi Nur-ud-Din (ra)", "Hazrat Mirza Tahir Ahmad (rh)", "Hazrat Mirza Masroor Ahmad (aba)"], 1],
  ["Chi ha lanciato lo schema Waqf-e-Nau, e quando?", ["Hazrat Khalifatul Masih IV (rh), il 3 aprile 1987", "Hazrat Khalifatul Masih V (aba), nel 2003", "Hazrat Khalifatul Masih II (ra), nel 1934"], 0],
  ["Che cosa significa «Waqf-e-Nau»?", ["«Nuova moschea»: un progetto di costruzione", "«Nuovo anno»: la festa di inizio anno", "«Nuova dedicazione»: una vita offerta al servizio dell'Islam, dedicata dai genitori già prima della nascita"], 2],
  ["Quanti sono gli articoli di fede (Arkan-e-Iman)?", ["6", "5", "10"], 0],
  ["In quale mese digiunano i musulmani?", ["Ramadan", "Muharram", "Shawwal"], 0],
  ["Dove vive oggi Hazrat Khalifatul Masih V (aba)?", ["A Islamabad, Tilford (Regno Unito)", "A Rabwah (Pakistan)", "A Qadian (India)"], 0]
 ],
 C:[
  ["In che anno il Messia Promesso (as) annunciò di essere il Messia Promesso e il Mahdi?", ["1882", "1891", "1905"], 1],
  ["Quando e dove morì il Messia Promesso (as)?", ["Nel 1905, a Qadian", "Il 26 maggio 1908, a Lahore", "Nel 1889, a Ludhiana"], 1],
  ["Quando ebbe inizio la Khilafat-e-Ahmadiyya?", ["Nel 1914", "Nel 1889", "Il 27 maggio 1908"], 2],
  ["Quale libro del Messia Promesso (as) è nel Nisab di quest'anno (dai 13 anni)?", ["«Il Testamento» (Al-Wasiyyat)", "«Messaggio di Pace» (Paigham-e-Sulh)", "«La filosofia degli insegnamenti dell'Islam»"], 1],
  ["Che cosa ha di particolare «Messaggio di Pace»?", ["È l'ultimo scritto del Messia Promesso (as), completato pochi giorni prima della sua morte, nel 1908", "È il suo primo libro, scritto da giovane", "È una raccolta di sue poesie in persiano"], 0],
  ["Qual è la proposta centrale di «Messaggio di Pace»?", ["Che tutte le religioni si uniscano in una sola", "Che indù e musulmani rispettino a vicenda i propri profeti e fondatori e smettano di offenderli, per vivere in pace", "Che l'India venga divisa in due Stati"], 1],
  ["In che anno il Messia Promesso (as) scrisse «Al-Wasiyyat» (Il Testamento)?", ["1908", "1905", "1891"], 1],
  ["Quante sono le condizioni della Bai'at?", ["12", "5", "10"], 2],
  ["Quale Khalifa guidò la Jamaʿat per oltre 50 anni (1914–1965)?", ["Hazrat Mirza Bashir-ud-Din Mahmud Ahmad (ra), Khalifatul Masih II", "Hazrat Mirza Nasir Ahmad (rh), Khalifatul Masih III", "Hazrat Mirza Tahir Ahmad (rh), Khalifatul Masih IV"], 0],
  ["Chi fondò la Tahrik-e-Jadid, e quando?", ["Hazrat Khalifatul Masih II (ra), nel 1934", "Hazrat Khalifatul Masih III (rh), nel 1965", "Hazrat Khalifatul Masih IV (rh), nel 1987"], 0],
  ["In che anno fu fondata la Majlis Khuddam-ul-Ahmadiyya?", ["1938", "1922", "1957"], 0],
  ["Quando fu eletto Hazrat Khalifatul Masih V (aba)?", ["Il 22 aprile 2003", "Nel 1982", "Nel 2008"], 0],
  ["«Wa mā Muḥammadun illā rasūl, qad khalat min qablihir-rusul» (3:145): che cosa dimostra?", ["Che tutti i profeti venuti prima del Santo Profeta (saw), compreso Gesù (as), sono morti", "Che Gesù (as) è ancora vivo in cielo", "Che il Corano fu rivelato in un solo giorno"], 0],
  ["Che cosa significa «Khatam-un-Nabiyyin» (33:41)?", ["«Sigillo dei Profeti»: il Santo Profeta (saw) è il più alto in rango, e nessun profeta può venire se non come suo seguace", "«Il profeta dei soli arabi»", "«Il primo dei profeti»"], 0],
  ["Perché Hazrat Khalifatul Masih IV (rh) lanciò lo schema Waqf-e-Nau nel 1987?", ["Per organizzare il primo Jalsa Salana", "Per raccogliere fondi per nuove moschee", "Per preparare una generazione di servitori dell'Islam per il secondo secolo dell'Ahmadiyyat (dal 1989)"], 2]
 ]
};
window.WN_DATA={t:t,S:S,HIFZ:HIFZ,NAMAZ:NAMAZ,NAMAZ12:NAMAZ12,NAMAZX:NAMAZX,HAD:HAD,QAS:QAS,PRES:PRES,QUIZ:IJTEMA_QUIZ,SURAH_NUMBER:SURAH_NUMBER};
})();
