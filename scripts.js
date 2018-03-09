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

var thankyou = [
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
  "DUTCH – dank u", 'ESTONIAN – tänan (TA-nahn)', 'FINNISH – kiitos (KEE-tohss)', 'FRENCH – merci', 'GERMAN – danke', 'GREEK – ευχαριστώ (ef-hah-rees-TOH)', 'HAWAIIAN – mahalo (ma-HA-lo)', 'HEBREW – .תודה  / todah (toh-DAH)', 'HINDI – dhanyavād / shukriya', 'HUNGARIAN – köszönöm (KØ-sø-nøm)', 'ICELANDIC – takk (tahk) ', 'INDONESIAN – terima kasih. (tuh-REE-mah KAH-see)', 'ITALIAN – grazie (GRAHT-tsyeh)', 'JAPANESE – arigatô (ah-ree-GAH-toh)', 'KOREAN – 감사합니다 (gamsahamnida)', 'LATVIAN – paldies (PUHL-dyehs)', 'LEBANESE – choukrane', 'LITHUANIAN – ačiū (AH-choo)', 'Skopijan– Благодарам / blagodaram (blah-GOH-dah-rahm)', 'MALAY – terima kasih (TREE-muh KAH-seh)', 'MALTESE – grazzi (GRUTS-ee)', 'MANDARIN – 谢谢 Xièxiè', 'MONGOLIAN – Баярлалаа (bayarlalaa)', 'NORWEGIAN – takk', 'POLISH – dziękuję (Jenkoo-yen)', 'PORTUGUESE – obrigado', 'ROMANIAN – mulţumesc (mool-tzoo-MESK)', 'RUSSIAN – спасибо (spuh-SEE-buh)', 'SERBIAN – xвала / hvala (HVAH-lah)', 'SLOVAK – Ďakujem (JAH-koo-yehm)', 'SLOVENIAN – hvala (HVAA-lah)', 'SPANISH – gracias (GRAH-syahs)', 'SWEDISH – tack', 'TAMIL – nandri', 'THAI – kop khun', 'TURKISH – teşekkür ederim (teh shek uer eh der eem)', 'UKRAINIAN – Дякую (DYAH-koo-yoo)', 'WELSH – diolch (DEE-ol’ch)', 'YIDDISH – a dank', 'ZULU – ngiyabonga'
];

function thankyou(name) {
  if (listOfNames.indexOf(name) !== -1) {
    var index = (Math.random() * hellos.length) | 0;
    var thankyou = thankyous[index];

    console.log(thankyous + " " + name + "!");
  } else {
    console.log(
      "Are you sure you are a founding member or fellow of the Preston Hackspace???"
    );
  }
}

sayHello("Chris Dell");
