// Doppelpass – Demodaten. ALLE Personen, Vereine und Szenen sind frei erfunden.
window.DEMO = {
  skills: [
    { id: "doppel",   name: "Doppelbelastung organisieren", gruppe: "methodisch", lp21: "methodische Kompetenzen", bivo: "Lernstrategien, eigenverantwortliches Handeln", kurz: "Training, Wettkampf und Schule planen, Stoff selbstständig nachholen." },
    { id: "druck",    name: "Druck aushalten",              gruppe: "personal",   lp21: "personale Kompetenzen",   bivo: "Belastbarkeit (Begriff zu prüfen)",   kurz: "Im entscheidenden Moment handlungsfähig bleiben." },
    { id: "rueck",    name: "Aus Rückschlägen lernen",      gruppe: "personal",   lp21: "personale Kompetenzen",   bivo: "lebenslanges Lernen",                kurz: "Eine Niederlage analysieren und daraus etwas verändern." },
    { id: "ziele",    name: "Ziele setzen und dranbleiben", gruppe: "personal",   lp21: "personale Kompetenzen",   bivo: "eigenverantwortliches Handeln",      kurz: "Saisonziele formulieren und überprüfen." },
    { id: "team",     name: "Im Team eine Rolle tragen",    gruppe: "sozial",     lp21: "soziale Kompetenzen",     bivo: "Teamfähigkeit",                      kurz: "Captain-, Ersatz- oder Helferrolle bewusst übernehmen." },
    { id: "fair",     name: "Fair und respektvoll handeln", gruppe: "sozial",     lp21: "soziale Kompetenzen",     bivo: "Umgangsformen, Konfliktfähigkeit",  kurz: "Entscheide akzeptieren, Gegner:innen respektieren." },
    { id: "komm",     name: "Mit Erwachsenen professionell kommunizieren", gruppe: "sozial", lp21: "soziale Kompetenzen", bivo: "Kommunikationsfähigkeit", kurz: "Mit Trainer:innen über Belastung sprechen, sich selbst vertreten." },
    { id: "foerdern", name: "Andere fördern",               gruppe: "sozial",     lp21: "soziale Kompetenzen",     bivo: "Verantwortung (Begriff zu prüfen)",  kurz: "Jüngere mittrainieren, Wissen weitergeben." }
  ],
  gruppen: {
    personal:   { name: "Persönlich",  farbe: "#ffd644", ink: "#6b5300" },
    sozial:     { name: "Sozial",      farbe: "#c95097", ink: "#ffffff" },
    methodisch: { name: "Methodisch",  farbe: "#00b0ea", ink: "#ffffff" }
  },
  bereiche: ["Training", "Wettkampf", "Schule", "Verein", "Zuhause"],
  quests: [
    { id: "druck",  ico: "🎯", name: "Wettkampf & Druck",            text: "Entscheidende Momente, Nervosität, Finals" },
    { id: "rueck",  ico: "🩹", name: "Rückschlag & Pause",            text: "Niederlage, Nicht-Selektion, Verletzungspause" },
    { id: "doppel", ico: "📚", name: "Schule & Training unter einem Hut", text: "Prüfungen, Trainingslager, Stoff nachholen" },
    { id: "team",   ico: "🤝", name: "Team & Rolle",                  text: "Captain, Ersatz, Stimmung im Team" },
    { id: "fair",   ico: "🫱", name: "Fairplay & Verantwortung",      text: "Schiedsrichterentscheid, Gegner:innen, Regeln" },
    { id: "foerdern", ico: "🌱", name: "Jüngere & Verein",            text: "Nachwuchs betreuen, im Verein helfen" }
  ],
  einsatz: ["Alltag", "Wichtig", "Echte Challenge", "Grosser Druck", "Entscheidungsspiel"],
  phasen: [
    { id: "situation",   name: "Situation",   frage: "Was war los? Beschreibe die Szene in zwei, drei Sätzen." },
    { id: "entscheidung", name: "Entscheidung", frage: "Was hast du konkret getan?" },
    { id: "wirkung",     name: "Wirkung",     frage: "Was hat es bewirkt – bei dir, im Team, im Resultat?" },
    { id: "transfer",    name: "Transfer",    frage: "Wo hilft dir das in der Schule oder später im Beruf?" }
  ],
  // Vorformulierte Vorschläge des simulierten Assistenten (keine KI)
  vorschlaege: {
    druck:    ["Es stand viel auf dem Spiel und ich war nervös.", "Ich habe mich auf meine Routine konzentriert und den nächsten Schritt geplant.", "Ich konnte meine Leistung abrufen, obwohl der Druck hoch war.", "Auch vor Prüfungen kann ich mich mit einer Routine beruhigen."],
    rueck:    ["Es ist nicht gelaufen wie geplant.", "Ich habe analysiert, woran es lag, und mit meiner Trainerin besprochen, was ich ändere.", "Ich habe neue Ziele gesetzt und weitertrainiert.", "Wenn etwas schiefgeht, suche ich nach dem, was ich beeinflussen kann."],
    doppel:   ["Training und Schule kamen sich in die Quere.", "Ich habe einen Plan gemacht und den Stoff selbstständig nachgeholt.", "Ich war für Prüfung und Wettkampf vorbereitet.", "Ich kann mehrere Aufgaben planen und Prioritäten setzen."],
    team:     ["Im Team brauchte es jemanden, der eine bestimmte Rolle übernimmt.", "Ich habe diese Rolle bewusst übernommen.", "Das Team konnte sich auf mich verlassen.", "In Gruppenarbeiten kann ich Verantwortung für eine Rolle übernehmen."],
    fair:     ["Es gab eine Situation, in der Fairness gefragt war.", "Ich habe den Entscheid akzeptiert und respektvoll reagiert.", "Die Stimmung blieb gut, und wir konnten weiterspielen.", "Auch bei Meinungsverschiedenheiten bleibe ich respektvoll."],
    foerdern: ["Jüngere im Verein brauchten Unterstützung.", "Ich habe ihnen gezeigt, wie es geht, und sie ermutigt.", "Sie haben Fortschritte gemacht und hatten Freude.", "Ich kann anderen etwas erklären und Geduld haben."]
  },
  person: { id: "nina", name: "Nina Frei", klasse: "2. Oberstufe, Sportklasse", sport: "Kunstturnen", verein: "Turnverein Thurtal (fiktiv)" },
  klasse: [
    { id: "nina", name: "Nina Frei", sport: "Kunstturnen" },
    { id: "luca", name: "Luca Meier", sport: "Fussball" },
    { id: "sara", name: "Sara Keller", sport: "Judo" },
    { id: "jan", name: "Jan Gerber", sport: "Unihockey" },
    { id: "elif", name: "Elif Demir", sport: "Leichtathletik" },
    { id: "noah", name: "Noah Baumann", sport: "Ski alpin" },
    { id: "mia", name: "Mia Schmid", sport: "Schwimmen" },
    { id: "leo", name: "Leo Huber", sport: "Eishockey" },
    { id: "zoe", name: "Zoe Widmer", sport: "Tennis" }
  ],
  saison: [
    { name: "Vorbereitung", von: "2026-08-01", bis: "2026-10-15", farbe: "#5ab57a" },
    { name: "Wettkampf",    von: "2026-10-16", bis: "2027-03-31", farbe: "#c95097" },
    { name: "Pause & Aufbau", von: "2027-04-01", bis: "2027-07-31", farbe: "#00b0ea" }
  ],
  szenen: [
    { id: "s1", titel: "Sturz am Balken – und trotzdem weitergeturnt", quest: "druck", bereich: "Wettkampf", datum: "2026-10-25", einsatz: 4, status: "analysiert", sichtbar: "geteilt", skills: ["druck", "rueck"],
      roh: "Regionalmeisterschaft, Balken. Beim zweiten Element gefallen. 30 Sekunden Zeit, wieder aufzusteigen.",
      analyse: { situation: "An der Regionalmeisterschaft bin ich beim zweiten Element vom Balken gefallen. Ich hatte 30 Sekunden, um wieder aufzusteigen.", entscheidung: "Ich habe dreimal tief geatmet, an meine Routine gedacht und die Übung ohne das schwierige Element sauber zu Ende geturnt.", wirkung: "Ich habe den Final am Boden trotzdem erreicht. Meine Trainerin hat gesagt, dass sie stolz auf meine Reaktion ist.", transfer: "Wenn mir in einer Prüfung etwas misslingt, kann ich mich beruhigen und die nächste Aufgabe konzentriert lösen." } },
    { id: "s2", titel: "Prüfungswoche während des Trainingslagers", quest: "doppel", bereich: "Schule", datum: "2026-09-14", einsatz: 3, status: "analysiert", sichtbar: "geteilt", skills: ["doppel", "ziele"],
      roh: "Trainingslager in Tenero, gleichzeitig zwei Prüfungen. Mit Lehrerinnen abgesprochen.",
      analyse: { situation: "Das Trainingslager fiel genau in eine Woche mit zwei Prüfungen.", entscheidung: "Ich habe mit beiden Lehrerinnen einen Ersatztermin vereinbart und jeden Abend eine Stunde gelernt.", wirkung: "Ich habe beide Prüfungen bestanden und im Lager voll trainiert.", transfer: "Ich kann Termine früh absprechen und mir die Zeit einteilen, auch in einer Lehre mit Berufsschule." } },
    { id: "s3", titel: "Jüngere Turnerinnen am Mittwoch betreut", quest: "foerdern", bereich: "Verein", datum: "2026-11-04", einsatz: 2, status: "analysiert", sichtbar: "geteilt", skills: ["foerdern", "komm"],
      roh: "Jeden Mittwoch 1 Stunde mit der Jugi. Handstand erklärt.",
      analyse: { situation: "Im Verein fehlte eine Leiterin für die Jüngsten.", entscheidung: "Ich habe jeden Mittwoch eine Stunde übernommen und den Handstand in kleinen Schritten erklärt.", wirkung: "Drei Mädchen können jetzt einen Handstand an der Wand halten.", transfer: "Ich kann etwas Schwieriges in kleine Schritte zerlegen und geduldig erklären." } },
    { id: "s4", titel: "Nicht für die Regionalauswahl selektioniert", quest: "rueck", bereich: "Wettkampf", datum: "2026-08-28", einsatz: 5, status: "analysiert", sichtbar: "privat", skills: ["rueck", "ziele"],
      roh: "Selektion verpasst. Sehr enttäuscht.",
      analyse: { situation: "Ich wurde nicht für die Regionalauswahl selektioniert, obwohl ich darauf hingearbeitet hatte.", entscheidung: "Nach ein paar Tagen habe ich mit meiner Trainerin besprochen, woran es lag, und drei konkrete Ziele für den Boden gesetzt.", wirkung: "Ich trainiere gezielter und habe ein neues Element gelernt.", transfer: "Auch wenn ich etwas nicht erreiche, kann ich mir neue Ziele setzen und weitermachen." } },
    { id: "s5", titel: "Mit der Trainerin über Belastung gesprochen", quest: "doppel", bereich: "Training", datum: "2026-10-02", einsatz: 3, status: "analysiert", sichtbar: "geteilt", skills: ["komm", "doppel"],
      roh: "Zu müde für Schule. Gespräch gesucht.",
      analyse: { situation: "Ich war nach den Trainings so müde, dass ich mich in der Schule kaum konzentrieren konnte.", entscheidung: "Ich habe das Gespräch mit meiner Trainerin gesucht und einen Vorschlag mitgebracht.", wirkung: "Wir haben ein Training pro Woche kürzer gemacht, dafür intensiver.", transfer: "Ich kann ein Problem bei einer erwachsenen Person ansprechen und eine Lösung vorschlagen." } },
    { id: "s6", titel: "Teamwettkampf: als Ersatz eingesprungen", quest: "team", bereich: "Wettkampf", datum: "2026-11-08", einsatz: 4, status: "offen", sichtbar: "privat", skills: ["team"],
      roh: "Eine Kollegin krank, ich musste am Reck turnen, das ist nicht mein Gerät." },
    { id: "s7", titel: "Mein Saisonziel am Boden", quest: "druck", bereich: "Training", datum: "2026-11-10", einsatz: 2, status: "offen", sichtbar: "privat", skills: ["ziele"],
      roh: "Ziel: Doppelsalto rückwärts bis März." }
  ],
  stimmen: [
    { id: "f1", szene: "s1", von: "Marco Brunner", rolle: "Trainer Kunstturnen (fiktiv)", text: "Nina hat nach dem Sturz keine Sekunde gezögert, ist ruhig wieder aufgestiegen und hat die Übung sauber beendet. Das hat das ganze Team beruhigt.", status: "angenommen", datum: "2026-10-27" },
    { id: "f2", szene: "s2", von: "Andrea Frei", rolle: "Mutter (fiktiv)", text: "Nina hat sich vor dem Lager selbst einen Lernplan gemacht und ihn jeden Abend durchgezogen.", status: "angenommen", datum: "2026-09-20" },
    { id: "f3", szene: "s3", von: "Marco Brunner", rolle: "Trainer Kunstturnen (fiktiv)", text: "Die Jüngsten freuen sich jeden Mittwoch auf Nina. Sie erklärt geduldig und lobt viel.", status: "offen", datum: "2026-11-06" }
  ],
  anfragen: [
    { id: "a1", szene: "s6", an: "trainer", text: "Kannst du bestätigen, wie ich am Teamwettkampf als Ersatz eingesprungen bin?" },
    { id: "a2", szene: "s7", an: "eltern",  text: "Kannst du beschreiben, wie ich zu Hause an meinem Saisonziel arbeite?" }
  ],
  feedback: [
    { szene: "s2", von: "Frau Ammann (Lernbegleitung, fiktiv)", text: "Sehr gut organisiert! Genau so zeigt sich, dass du Schule und Sport selbst steuerst." }
  ],
  vorlagen: [
    { id: "v1", titel: "Halbzeit-Reflexion", dauer: "15 Min", text: "Am Ende einer Saisonphase: Was hat sich verändert? Welche Szene war am wichtigsten?", status: "geprüft" },
    { id: "v2", titel: "Wettkampf-Notiz in 2 Minuten", dauer: "2 Min", text: "Direkt nach dem Wettkampf per Sprachmemo festhalten, später analysieren.", status: "geprüft" },
    { id: "v3", titel: "Rückschlag-Analyse", dauer: "20 Min", text: "Was lag in meiner Hand, was nicht? Was ändere ich?", status: "geprüft" }
  ],
  aufgaben: [ { vorlage: "v1", von: "Frau Ammann (Lernbegleitung, fiktiv)", bis: "2026-11-30" } ],
  freigaben: [
    { id: "x7k2pq", empfaenger: "Schnupperlehre Fachfrau Gesundheit (Beispielbetrieb)", szenen: ["s1", "s2", "s3"], bis: "2026-12-31", aufrufe: 2 }
  ],
  pruefungen: [
    { id: "p1", typ: "Reflexionsvorlage", titel: "Trainingslager-Tagebuch", von: "Lernbegleitung Sportklasse 2", version: "1.0", notiz: "Drei Fragen pro Tag: Was lief gut, was war schwierig, was nehme ich mit?", status: "offen" },
    { id: "p2", typ: "Kompetenzmodell", titel: "Skill «Andere fördern»: Beschreibung geschärft", von: "Trainer:innen-Vertretung", version: "1.1", notiz: "Neu: «gibt Wissen so weiter, dass andere selbstständig weiterüben können».", status: "offen" }
  ],
  geprueft: [
    { titel: "Halbzeit-Reflexion", version: "1.0", entscheid: "freigegeben", datum: "2026-10-01", begruendung: "Klar, kurz, passt zur Saisonlogik." }
  ]
};
