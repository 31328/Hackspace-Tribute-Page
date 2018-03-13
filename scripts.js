var listOfNames = [
  "Chris Dell",
  "Owen Conniss",
  "Andrew Wade",
  "Arran Francis",
  "Daryl Knight",
  "Jayd Lawrence",
  "Stephen Mullen",
  "Andrew Pye"
];

var thankyous = [
  "Thank You",
  "AFRIKAANS – dankie",
  "ALBANIAN – faleminderit",
  "ARABIC – shukran",
  "ARMENIAN – Շնորհակալություն / chnorakaloutioun",
  "BOSNIAN – hvala (HVAH-lah)",
  "BULGARIAN – благодаря / blagodaria",
  "CATALAN – gràcies (GRAH-syuhs)",
  "CANTONESE – M̀h’gōi ",
  "CROATIAN – hvala (HVAH-lah)",
  "CZECH – děkuji (Dyekooyih)",
  "DANISH – tak (tahg)",
  "DUTCH – dank u",
  'ESTONIAN – tänan (TA-nahn)',
  'FINNISH – kiitos (KEE-tohss)',
  'FRENCH – merci', 'GERMAN – danke',
  'GREEK – ευχαριστώ (ef-hah-rees-TOH)',
  'HAWAIIAN – mahalo (ma-HA-lo)',
  'HEBREW – .תודה  / todah (toh-DAH)',
  'HINDI – dhanyavād / shukriya',
  'HUNGARIAN – köszönöm (KØ-sø-nøm)',
  'ICELANDIC – takk (tahk) ',
  'INDONESIAN – terima kasih. (tuh-REE-mah KAH-see)',
  'ITALIAN – grazie (GRAHT-tsyeh)',
  'JAPANESE – arigatô (ah-ree-GAH-toh)',
  'KOREAN – 감사합니다 (gamsahamnida)',
  'LATVIAN – paldies (PUHL-dyehs)',
  'LEBANESE – choukrane', 'LITHUANIAN – ačiū (AH-choo)',
  'Skopijan– Благодарам / blagodaram (blah-GOH-dah-rahm)',
  'MALAY – terima kasih (TREE-muh KAH-seh)',
  'MALTESE – grazzi (GRUTS-ee)',
  'MANDARIN – 谢谢 Xièxiè',
  'MONGOLIAN – Баярлалаа (bayarlalaa)',
  'NORWEGIAN – takk',
  'POLISH – dziękuję (Jenkoo-yen)',
  'PORTUGUESE – obrigado',
  'ROMANIAN – mulţumesc (mool-tzoo-MESK)',
  'RUSSIAN – спасибо (spuh-SEE-buh)',
  'SERBIAN – xвала / hvala (HVAH-lah)',
  'SLOVAK – Ďakujem (JAH-koo-yehm)',
  'SLOVENIAN – hvala (HVAA-lah)',
  'SPANISH – gracias (GRAH-syahs)',
  'SWEDISH – tack', 'TAMIL – nandri',
  'THAI – kop khun',
  'TURKISH – teşekkür ederim (teh shek uer eh der eem)',
  'UKRAINIAN – Дякую (DYAH-koo-yoo)',
  'WELSH – diolch (DEE-ol’ch)',
  'YIDDISH – a dank',
  'ZULU – ngiyabonga'
]

var rejections = [
  "Are you sure you are a founding memeber or fellow of the Hackspace",
  "Why are you insist?",
  "Come ooon, give it a rest!",
  "Ok, that's enought...",
  "Just let the page alone and don't push your luck",
  "Why are you doing this?",
  "Haven't you had enough yet?",
  "You need to take 'NO' as an answer",
  "I'm not going to 'thank' random people, no way!",
  "Well, since you insist I'll think about it...",
  "You truly are persistent!",
  "Just let me think what you can do to say 'thank you'",
  "Would you like to make a donation?",
  "If yes, then get in touch with us!",
  "If you do you I'll add you to the 'thank you list' - promise...",
  "No other way - donation first!",
]

var indexRejection = 0;

function thankyou() {
  var nameInput = document.getElementById('name');
  var name = nameInput.value;

  // Is the name in the array listOfNames?

  //yes
  if (listOfNames.indexOf(name) !== -1) {
    var index = (Math.random() * thankyous.length) | 0;
    var thankyou = thankyous[index];

    alert(thankyou + " " + name + "!");

    //no  
  } else {

    // Reset to 0 if we get to end of the array
    if (indexRejection > rejections.length - 1) {
      indexRejection = 0;
    }

    var rejection = rejections[indexRejection];

    alert(rejection + " " + name + "!");

    // Increment by 1
    indexRejection++;
  }
}
