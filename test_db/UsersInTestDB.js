/**
 * 
 * Das ist nur eine vorübergehende Datei, um Userdaten zu speichern. Sobald sich die User in der Datenbank befinden
 * wird diese Datei gelöscht.
 * 
 */

const users = [
  {
    id: 1,
    name: "Eric S Kunze",
    alter: 24,
    wohnort: "Butzbach",
    bild: "pics/person1.jpg",
    beschreibung:
      "Hallo, ich habe einen Labrador und wir gehen gerne nach Feierabend große Runden spazieren.",
    kontakt: {
      telefon: "123456789",
      email: "zess.ess.73@rfd-mauritanie.org"
    },
    location: {
      lat: 50.463565,
      lng: 8.646123
    }
  },
  {
    id: 2,
    name: "Juliane M Sommer",
    alter: 37,
    wohnort: "Friedberg (Hessen)",
    bild: "pics/person2.jpg",
    beschreibung:
      "Hallo, ich habe einen Labrador und wir gehen gerne nach Feierabend große Runden spazieren.",
    kontakt: {
      telefon: "123456789",
      email: "2ehab.hassan.921t@epiar.net"
    },
    location: {
      lat: 50.331543,
      lng: 8.744858
    }
  },
  {
    id: 3,
    name: "Michael A Weisz",
    alter: 41,
    wohnort: "Sinn",
    bild: "pics/person4.jpg",
    beschreibung:
      "Hallo, ich habe einen Labrador und wir gehen gerne nach Feierabend große Runden spazieren.",
    kontakt: {
      telefon: "123456789",
      email: "8grandon.tho@qaaw.ga"
    },
    location: {
      lat: 50.663565,
      lng: 8.346123
    }
  },
  {
    id: 4,
    name: "Sophia A König",
    alter: 33,
    wohnort: "Florstadt",
    bild: "pics/person3.jpg",
    beschreibung:
      "Hallo, ich habe einen Labrador und wir gehen gerne nach Feierabend große Runden spazieren.",
    kontakt: {
      telefon: "123456789",
      email: "3arbi.daifiz@moskow-lottery.org"
    },
    location: {
      lat: 50.3245,
      lng: 8.918653
    }
  },
  {
    id: 5,
    name: "Jens F Frey",
    alter: 56,
    wohnort: "Bad Nauheim",
    bild: "pics/person5.jpg",
    beschreibung:
      "Hallo, ich habe einen Labrador und wir gehen gerne nach Feierabend große Runden spazieren.",
    kontakt: {
      telefon: "123456789",
      email: "pmanolaroshn@mineralka1.cf"
    },
    location: {
      lat: 50.364077,
      lng: 8.737274
    }
  },
  {
    id: 6,
    name: "Michelle W Daecher",
    alter: 21,
    wohnort: "Koblenz",
    bild: "pics/person6.jpg",
    beschreibung:
      "Hallo, ich habe einen Labrador und wir gehen gerne nach Feierabend große Runden spazieren.",
    kontakt: {
      telefon: "123456789",
      email: "JuergenHerzog@einrot.com "
    },
    location: {
      lat: 50.405723,
      lng: 10.530908
    }
  },
  {
    id: 7,
    name: "Sara Wechsler",
    alter: 39,
    wohnort: "Usingen",
    bild: "pics/person7.jpg",
    beschreibung:
      "Hallo, ich habe einen Labrador und wir gehen gerne nach Feierabend große Runden spazieren.",
    kontakt: {
      telefon: "123456789",
      email: "JuergenHerzog@einrot.com "
    },
    location: {
      lat: 50.363565,
      lng: 8.546123
    }
  },
  {
    id: 8,
    name: "Dominik Grunwald",
    alter: 35,
    wohnort: "Rosbach vor der Höhe",
    bild: "pics/person8.jpg",
    beschreibung:
      "Hallo, ich habe einen Labrador und wir gehen gerne nach Feierabend große Runden spazieren.",
    kontakt: {
      telefon: "123456789",
      email: "JuergenHerzog@einrot.com "
    },
    location: {
      lat: 50.262381,
      lng: 8.732838
    }
  },
  {
    id: 9,
    name: "Mandy Herrmann",
    alter: 46,
    wohnort: "Münchhausen",
    bild: "pics/person9.jpg",
    beschreibung:
      "Hallo, ich habe einen Labrador und wir gehen gerne nach Feierabend große Runden spazieren.",
    kontakt: {
      telefon: "123456789",
      email: "JuergenHerzog@einrot.com "
    },
    location: {
      lat: 50.963565,
      lng: 8.646123
    }
  },
  {
    id: 10,
    name: "Max Bar",
    alter: 39,
    wohnort: "Schwalbach am Taunus",
    bild: "pics/person10.jpg",
    beschreibung:
      "Hallo, ich habe einen Labrador und wir gehen gerne nach Feierabend große Runden spazieren.",
    kontakt: {
      telefon: "123456789",
      email: "JuergenHerzog@einrot.com "
    },
    location: {
      lat: 50.152741,
      lng: 8.526385
    }
  },
  {
    id: 11,
    name: "Katja Bachmeier",
    alter: 27,
    wohnort: "Klein-Karben",
    bild: "pics/person11.jpg",
    beschreibung:
      "Hallo, ich habe einen Labrador und wir gehen gerne nach Feierabend große Runden spazieren.",
    kontakt: {
      telefon: "123456789",
      email: "JuergenHerzog@einrot.com "
    },
    location: {
      lat: 50.226647,
      lng: 8.770711
    }
  },
  {
    id: 12,
    name: "Michael Thalberg",
    alter: 31,
    wohnort: "Münchhausen",
    bild: "pics/person12.jpg",
    beschreibung:
      "Hallo, ich habe einen Labrador und wir gehen gerne nach Feierabend große Runden spazieren.",
    kontakt: {
      telefon: "123456789",
      email: "JuergenHerzog@einrot.com "
    },
    location: {
      lat: 50.963565,
      lng: 8.646123
    }
  },
  {
    id: 13,
    name: "Lena Mauer",
    alter: 34,
    wohnort: "Heidelberg",
    bild: "pics/person13.jpg",
    beschreibung:
      "Hallo, ich habe einen Labrador und wir gehen gerne nach Feierabend große Runden spazieren.",
    kontakt: {
      telefon: "123456789",
      email: "JuergenHerzog@einrot.com "
    },
    location: {
      lat: 49.400526,
      lng: 8.66151
    }
  },
  {
    id: 14,
    name: "Diana Meyer",
    alter: 29,
    wohnort: "Würzburg",
    bild: "pics/person14.jpg",
    beschreibung:
      "Hallo, ich habe einen Labrador und wir gehen gerne nach Feierabend große Runden spazieren.",
    kontakt: {
      telefon: "123456789",
      email: "JuergenHerzog@einrot.com "
    },
    location: {
      lat: 49.789898,
      lng: 9.954421
    }
  },
  {
    id: 15,
    name: "Wolfgang Shuster",
    alter: 38,
    wohnort: "Hildburghausen",
    bild: "pics/person15.jpg",
    beschreibung:
      "Hallo, ich habe einen Labrador und wir gehen gerne nach Feierabend große Runden spazieren.",
    kontakt: {
      telefon: "123456789",
      email: "JuergenHerzog@einrot.com "
    },
    location: {
      lat: 50.405723,
      lng: 10.530908
    }
  }
];

module.exports = users;
