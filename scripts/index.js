// Die Karte und Grundeinstellungen

var bounds = [[0,0], [1000,1000]];

var map = L.map('map', {
    crs: L.CRS.Simple,
    minZoom: 0,
    maxZoom: 2,
    maxBounds: bounds,
    zoomDelta: 0.33,
    zoomSnap: 0.3,
    wheelPxPerZoomLevel: 100,
    maxBoundsViscosity: 0.75
});

var image = L.imageOverlay(
    './assets/bilder/WebsiteLayoutFINAL4.png', 
    bounds
    ).addTo(map);

map.fitBounds(bounds);

map.setView([550, 480], 0.8)

map.zoomControl.setPosition('topright');

map.addControl(new L.Control.Fullscreen().setPosition('topright'));

L.easyButton('fa-bars', function() {
    sidebar.toggle();
  }).addTo(map);

var sidebar = L.control.sidebar('sidebar', {
    position: 'left',
    autoPan: false,
    closeButton: false
});

map.addControl(sidebar);



var makerLila = L.icon({
    iconUrl: './assets/marker/marker_lila.png',
    iconSize: [10, 10]
    
});

var makerRot = L.icon({
    iconUrl: './assets/marker/marker_rot.png',
    iconSize: [10, 10]
});

// flyto Funktion 

function fly(punkt) {
    map.closePopup(); 
    map.flyTo(punkt, 3);
}


// Text4: Spezifisches Wissen und spezifische Erfahrung; Punkt: [331, 370]

let text4;

fetch('../assets/txts/4.html', {mode: 'no-cors'})
    .then(res => res.text())
    .then(data => text4 = data)
    .then(() => L.marker([331, 370], {
        icon: makerRot
    }).addTo(map).bindPopup(text4, {
        maxWidth: 800,
        keepInView: true,
        maxHeight: 500
    }))

// Text5: Klar formulierte Ziele und Interessen (307,322)

var text5;

fetch('../assets/txts/5.html', {mode: 'no-cors'})
    .then(res => res.text())
    .then(data => text5 = data)
    .then(() => 
        L.marker([307, 322], {
            icon: makerRot
    }).addTo(map).bindPopup(text5, {
        maxWidth: 800,
        keepInView: true,
        maxHeight: 500
    }))

// Text6: Vernetzung; Punkt: [273, 244]

let text6;

fetch('../assets/txts/6.html', {mode: 'no-cors'})
    .then(res => res.text())
    .then(data => text6 = data)
    .then(() => L.marker([273, 244], {
        icon: makerRot
    }).addTo(map).bindPopup(text6, {
        maxWidth: 800,
        keepInView: true,
        maxHeight: 500
    }))

    // Verbindung zu: Kontakt zu widerständiger Praxis

    // Text7: Selbstorganisiertes und selbstbestimmtes Arbeiten von Menschen mit Diskriminierungserfahrungen; Punkt: [241, 327]

let text7;

fetch('../assets/txts/7.html', {mode: 'no-cors'})
    .then(res => res.text())
    .then(data => text7 = data)
    .then(() => L.marker([241, 327], {
        icon: makerRot
    }).addTo(map).bindPopup(text7, {
        maxWidth: 800,
        keepInView: true,
        maxHeight: 500
    }))

    // Verbindung zu: Ressourcenverteilung

    // Text8: Erfahrung mit Öffentlichkeit; Punkt: [249, 244]

let text8;

fetch('../assets/txts/8.html', {mode: 'no-cors'})
    .then(res => res.text())
    .then(data => text8 = data)
    .then(() => L.marker([249, 244], {
        icon: makerRot
    }).addTo(map).bindPopup(text8, {
        maxWidth: 800,
        keepInView: true,
        maxHeight: 500
    }))

    // Verbindung zu: Ressourcenverteilung

    // Text9: Spezifische Zugänge und Ambivalenz; Punkt: [276, 462]

let text9;

fetch('../assets/txts/9.html', {mode: 'no-cors'})
    .then(res => res.text())
    .then(data => text9 = data)
    .then(() => L.marker([276, 462], {
        icon: makerRot
    }).addTo(map).bindPopup(text9, {
        maxWidth: 800,
        keepInView: true,
        maxHeight: 500
    }))

    // Verbindung zu: Kunst als Möglichkeitsraum, Subjektivität, Umgang mit Emotionalität und Nachhaltigkeit und Flexibilität

    // Text10: Künstler*in/ Bürger*in; Punkt: [237, 507]

    let text10;

fetch('../assets/txts/10.html', {mode: 'no-cors'})
    .then(res => res.text())
    .then(data => text10 = data)
    .then(() => L.marker([237, 507], {
        icon: makerRot
    }).addTo(map).bindPopup(text10, {
        maxWidth: 800,
        keepInView: true,
        maxHeight: 500
    }))

    // Verbindung zu: Kunst als Möglichkeitsraum, Subjektivität, Umgang mit Emotionalität

    // Text11: Schwarze*r Künstler*in; Punkt: [276, 462]

    let text11;

fetch('../assets/txts/11.html', {mode: 'no-cors'})
    .then(res => res.text())
    .then(data => text11 = data)
    .then(() => L.marker([248, 536], {
        icon: makerRot
    }).addTo(map).bindPopup(text11, {
        maxWidth: 800,
        keepInView: true,
        maxHeight: 500
    }))

    // Verbindung zu: Kunst als Möglichkeitsraum, Subjektivität, Erbe des Museums und Umgang mit Emotionalität

    // Text12: Ressourcen; Punkt: [307, 690]

    let text12;

fetch('../assets/txts/12.html', {mode: 'no-cors'})
    .then(res => res.text())
    .then(data => text12 = data)
    .then(() => L.marker([307, 690], {
        icon: makerRot
    }).addTo(map).bindPopup(text12, {
        maxWidth: 800,
        keepInView: true,
        maxHeight: 500
    }))
     
    // Verbindung zu: Ressourcenverteilung, Museum verorten und Museumspraxis

    // Text13: Deutungsmacht; Punkt: [286, 728]

    let text13;

fetch('../assets/txts/13.html', {mode: 'no-cors'})
    .then(res => res.text())
    .then(data => text13 = data)
    .then(() => L.marker([286, 728], {
        icon: makerRot
    }).addTo(map).bindPopup(text13, {
        maxWidth: 800,
        keepInView: true,
        maxHeight: 500
    }))
     
    // Verbindung zu: Dezentralisierung

    // Text14: Vermittlungsarbeit/ Outreach; Punkt: [296, 594]

    let text14;

fetch('../assets/txts/14.html', {mode: 'no-cors'})
    .then(res => res.text())
    .then(data => text14 = data)
    .then(() => L.marker([296, 594], {
        icon: makerRot
    }).addTo(map).bindPopup(text14, {
        maxWidth: 800,
        keepInView: true,
        maxHeight: 500
    }))
     
    // Verbindung zu: Priorisierung seitens des Museums, Privilegien und strukturelle Ausschlüsse

    // Text15: Brücken bauen/ "access curator"; Punkt: [279, 661]

    let text15;

fetch('../assets/txts/15.html', {mode: 'no-cors'})
    .then(res => res.text())
    .then(data => text15 = data)
    .then(() => L.marker([279, 661], {
        icon: makerRot
    }).addTo(map).bindPopup(text15, {
        maxWidth: 800,
        keepInView: true,
        maxHeight: 500
    }))

    // Verbindung zu: Learning Institution und Outreach

    // Text16: Ambivalente Position(ierung); Punkt: [334, 691]

let text16;

fetch('../assets/txts/16.html', {mode: 'no-cors'})
    .then(res => res.text())
    .then(data => text16 = data)
    .then(() => L.marker([334, 691], {
        icon: makerRot
    }).addTo(map).bindPopup(text16, {
        maxWidth: 800,
        keepInView: true,
        maxHeight: 500
    }))
     
    // Text17: Rolle des Museums; Punkt: [405, 614]

let text17;

fetch('../assets/txts/17.html', {mode: 'no-cors'})
    .then(res => res.text())
    .then(data => text17 = data)
    .then(() => L.marker([405, 614], {
        icon: makerRot
    }).addTo(map).bindPopup(text17, {
        maxWidth: 800,
        keepInView: true,
        maxHeight: 500
    }))
     
    // Text18: Gegenwart irritieren und Utopien erschaffen; Punkt: [382, 617]

let text18;

fetch('../assets/txts/18.html', {mode: 'no-cors'})
    .then(res => res.text())
    .then(data => text18 = data)
    .then(() => L.marker([382, 617], {
        icon: makerRot
    }).addTo(map).bindPopup(text18, {
        maxWidth: 800,
        keepInView: true,
        maxHeight: 500
    }))

    // Verbindung zu: Kollaboratives Arbeiten und Machtstrukturen, Priorisierung seitens des Museums, Kunst als Möglichkeitsraum und Dezentralisierung

    // Text19: Bildungsarbeit und Vermittlung; Punkt: [445, 593]

let text19;

fetch('../assets/txts/19.html', {mode: 'no-cors'})
    .then(res => res.text())
    .then(data => text19 = data)
    .then(() => L.marker([445, 593], {
        icon: makerRot
    }).addTo(map).bindPopup(text19, {
        maxWidth: 800,
        keepInView: true,
        maxHeight: 500
    }))

    // Verbindung zu: Selbst- und Fremdrepräsentation, Erinnerungskultur und Umgang mit Emotionalität

    // Text20: Kritik vom institutionellen Außen; Punkt: [550, 804]

let text20;

fetch('../assets/txts/20.html', {mode: 'no-cors'})
    .then(res => res.text())
    .then(data => text20 = data)
    .then(() => L.marker([550, 804], {
        icon: makerRot
    }).addTo(map).bindPopup(text20, {
        maxWidth: 800,
        keepInView: true,
        maxHeight: 500
    }))

    // Verbindung zu: Kollaboratives Arbeiten und Machtstrukturen, Learning Institution und Spezifisches Wissen und spezifische Erfahrung

    // Text21: Bestehende Verbindungen Kunst/ Wissenschaft/ Aktivismus; Punkt: [501, 836]

let Text21;

fetch('../assets/txts/21.html', {mode: 'no-cors'})
    .then(res => res.text())
    .then(data => text21 = data)
    .then(() => L.marker([501, 836], {
        icon: makerRot
    }).addTo(map).bindPopup(text21, {
        maxWidth: 800,
        keepInView: true,
        maxHeight: 500
    }))

    // Verbindung zu: Outreach und Verantwortung

    // Text22: Zusammenarbeit normalisieren; Punkt: [466, 864]

let Text22;

fetch('../assets/txts/22.html', {mode: 'no-cors'})
    .then(res => res.text())
    .then(data => text22 = data)
    .then(() => L.marker([466, 864], {
        icon: makerRot
    }).addTo(map).bindPopup(text22, {
        maxWidth: 800,
        keepInView: true,
        maxHeight: 500
    }))

    // Verbindung zu: Kollaboratives Arbeiten und Machtstrukturen, Widerstände, "How to act in a decolonial fashion" und Zeitmanagement/ Koordination

    // Text23: Kollaboratives Arbeiten in Dekolonisierungsprozess; Punkt: [567, 647]

let Text23;

fetch('../assets/txts/23.html', {mode: 'no-cors'})
    .then(res => res.text())
    .then(data => text23 = data)
    .then(() => L.marker([567, 647], {
        icon: makerRot
    }).addTo(map).bindPopup(text23, {
        maxWidth: 800,
        keepInView: true,
        maxHeight: 500
    }))

    // Verbindung zu: Selbst- und Fremdrepräsentation

    // Text24: Kritik und Lethargie; Punkt: [550, 804]

let Text24;

fetch('../assets/txts/24.html', {mode: 'no-cors'})
    .then(res => res.text())
    .then(data => text24 = data)
    .then(() => L.marker([692, 399], {
        icon: makerRot
    }).addTo(map).bindPopup(text24, {
        maxWidth: 800,
        keepInView: true,
        maxHeight: 500
    }))

    // Verbindung zu: Kollaboratives Arbeiten und Machtstrukturen, Learning Institution und Priorisierung seitens des Museums

    // Text25: Inreach und Outreach; Punkt: [724, 384]

let Text25;

fetch('../assets/txts/25.html', {mode: 'no-cors'})
    .then(res => res.text())
    .then(data => text25 = data)
    .then(() => L.marker([724, 384], {
        icon: makerRot
    }).addTo(map).bindPopup(text25, {
        maxWidth: 800,
        keepInView: true,
        maxHeight: 500
    }))

    // Verbindung zu: Learning Institution

    // Text26: Offener Lernprozess für Alle; Punkt: [751, 431]

let Text26;

fetch('../assets/txts/26.html', {mode: 'no-cors'})
    .then(res => res.text())
    .then(data => text26 = data)
    .then(() => L.marker([751, 431], {
        icon: makerRot
    }).addTo(map).bindPopup(text26, {
        maxWidth: 800,
        keepInView: true,
        maxHeight: 500
    }))

    // Verbindung zu: Transdizsiplinäres Arbeiten, Kollaboratives Arbeiten und Machtstrukturen und Umgang mit Wissens- und Erfahrungswerten

    // Text27: Aushandlungsprozesse und gegenseitige Einflussnahme; Punkt: [742, 536]

let Text27;

fetch('../assets/txts/27.html', {mode: 'no-cors'})
    .then(res => res.text())
    .then(data => text27 = data)
    .then(() => L.marker([742, 536], {
        icon: makerRot
    }).addTo(map).bindPopup(text27, {
        maxWidth: 800,
        keepInView: true,
        maxHeight: 500
    }))

    // Verbindung zu: Kontakt zu widerständiger Praxis und "How to act in a decolonial fashion"

    // Text28: Museum als Ort produktiver Reibung und Veränderbarkeit; Punkt: [794, 472]

let Text28;

fetch('../assets/txts/28.html', {mode: 'no-cors'})
    .then(res => res.text())
    .then(data => text28 = data)
    .then(() => L.marker([794, 472], {
        icon: makerRot
    }).addTo(map).bindPopup(text28, {
        maxWidth: 800,
        keepInView: true,
        maxHeight: 500
    }))

    // Verbindung zu: Kunst als Möglichkeitsraum

    // Text29: Kollaboratives Arbeiten und Machtstrukturen; Punkt: [646, 633]

let Text29;

fetch('../assets/txts/29.html', {mode: 'no-cors'})
    .then(res => res.text())
    .then(data => text29 = data)
    .then(() => L.marker([646, 633], {
        icon: makerRot
    }).addTo(map).bindPopup(text29, {
        maxWidth: 800,
        keepInView: true,
        maxHeight: 500
    }))

    // Text30: Ressourcenverteilung; Punkt: [683, 579]

let Text30;

fetch('../assets/txts/30.html', {mode: 'no-cors'})
    .then(res => res.text())
    .then(data => text30 = data)
    .then(() => L.marker([683, 579], {
        icon: makerRot
    }).addTo(map).bindPopup(text30, {
        maxWidth: 800,
        keepInView: true,
        maxHeight: 500
    }))

    // Text31: Marginalisierte Perspektiven; Punkt: [709, 592]

let Text31;

fetch('../assets/txts/31.html', {mode: 'no-cors'})
    .then(res => res.text())
    .then(data => text31 = data)
    .then(() => L.marker([709, 592], {
        icon: makerRot
    }).addTo(map).bindPopup(text31, {
        maxWidth: 800,
        keepInView: true,
        maxHeight: 500
    }))

    // Text32: Entscheidungskompetenzen und Macht teilen; Punkt: [752, 621]

let Text32;

fetch('../assets/txts/32.html', {mode: 'no-cors'})
    .then(res => res.text())
    .then(data => text32 = data)
    .then(() => L.marker([752, 621], {
        icon: makerRot
    }).addTo(map).bindPopup(text32, {
        maxWidth: 800,
        keepInView: true,
        maxHeight: 500
    }))

    // Text33: Nachhaltige und umfassende Bearbeitung; Punkt: [723, 690]

let Text33;

fetch('../assets/txts/33.html', {mode: 'no-cors'})
    .then(res => res.text())
    .then(data => text33 = data)
    .then(() => L.marker([723, 690], {
        icon: makerRot
    }).addTo(map).bindPopup(text33, {
        maxWidth: 800,
        keepInView: true,
        maxHeight: 500
    }))

    // Verbindung zu: Nachhaltigkeit und Flexibilität

    // Text34: Rahmenbedingungen festlegen; Punkt: [768, 668]

let Text34;

fetch('../assets/txts/34.html', {mode: 'no-cors'})
    .then(res => res.text())
    .then(data => text34 = data)
    .then(() => L.marker([768, 668], {
        icon: makerRot
    }).addTo(map).bindPopup(text34, {
        maxWidth: 800,
        keepInView: true,
        maxHeight: 500
    }))

    // Verbindung zu: Nachhaltigkeit und Flexibilität

    // Text35: Institutionalisierung; Punkt: [678, 759]

let Text35;

fetch('../assets/txts/35.html', {mode: 'no-cors'})
    .then(res => res.text())
    .then(data => text35 = data)
    .then(() => L.marker([678, 759], {
        icon: makerRot
    }).addTo(map).bindPopup(text35, {
        maxWidth: 800,
        keepInView: true,
        maxHeight: 500
    }))

    // Verbindung zu: Kritik und Lethargie, Kollaboratives Arbeiten und Machtstrukturen, Multiperspektivisches Archiv

    // Text36: Transfer und Abgrenzung; Punkt: [668, 707]

let Text36;

fetch('../assets/txts/36.html', {mode: 'no-cors'})
    .then(res => res.text())
    .then(data => text36 = data)
    .then(() => L.marker([668, 707], {
        icon: makerRot
    }).addTo(map).bindPopup(text36, {
        maxWidth: 800,
        keepInView: true,
        maxHeight: 500
    }))

    // Verbindung zu: Rahmenbedingungen festlegen, Subjektivität, Selbstorganisiertes und selbstbestimmtes Arbeiten von Menschen mit Diskriminierungserfahrungen

    // Text37: Transdisziplinäres Arbeiten; Punkt: [641, 761]

let Text37;

fetch('../assets/txts/37.html', {mode: 'no-cors'})
    .then(res => res.text())
    .then(data => text37 = data)
    .then(() => L.marker([641, 761], {
        icon: makerRot
    }).addTo(map).bindPopup(text37, {
        maxWidth: 800,
        keepInView: true,
        maxHeight: 500
    }))

    // Verbindung zu: Interdisziplinarität, Gemeinsamer Lernprozess, Erinnerungskultur

    // Text38: Verbindungen herstellen; Punkt: [643, 910]

let Text38;

fetch('../assets/txts/38.html', {mode: 'no-cors'})
    .then(res => res.text())
    .then(data => text38 = data)
    .then(() => L.marker([643, 910], {
        icon: makerRot
    }).addTo(map).bindPopup(text38, {
        maxWidth: 800,
        keepInView: true,
        maxHeight: 500
    }))

    // Verbindung zu: Spezifisches Wissen und spezifische Erfahrung

    // Text39: Multiperspektivisches Archiv; Punkt: [604, 874]

let Text39;

fetch('../assets/txts/39.html', {mode: 'no-cors'})
    .then(res => res.text())
    .then(data => text39 = data)
    .then(() => L.marker([604, 874], {
        icon: makerRot
    }).addTo(map).bindPopup(text39, {
        maxWidth: 800,
        keepInView: true,
        maxHeight: 500
    }))

    // Verbindung zu: Institutionalisierung, Transnationales Arbeiten, Kontextzualisierung

    // Text41: Gegenseitiger Einfluss; Punkt: [719, 825]

let Text41;

fetch('../assets/txts/41.html', {mode: 'no-cors'})
    .then(res => res.text())
    .then(data => text41 = data)
    .then(() => L.marker([719, 825], {
        icon: makerRot
    }).addTo(map).bindPopup(text41, {
        maxWidth: 800,
        keepInView: true,
        maxHeight: 500
    }))

    // Text42: Forschungsbedarf; Punkt: [702, 860]

let Text42;

fetch('../assets/txts/42.html', {mode: 'no-cors'})
    .then(res => res.text())
    .then(data => text42 = data)
    .then(() => L.marker([702, 860], {
        icon: makerRot
    }).addTo(map).bindPopup(text42, {
        maxWidth: 800,
        keepInView: true,
        maxHeight: 500
    }))

    // Verbindung zu: Erinnerungskultur

    // Text43: Perspektiven im Volontariat; Punkt: [699, 923]

let Text43;

fetch('../assets/txts/43.html', {mode: 'no-cors'})
    .then(res => res.text())
    .then(data => text43 = data)
    .then(() => L.marker([699, 923], {
        icon: makerRot
    }).addTo(map).bindPopup(text43, {
        maxWidth: 800,
        keepInView: true,
        maxHeight: 500
    }))

    // Text44: Transnationales Arbeiten; Punkt: [564, 759]

let Text44;

fetch('../assets/txts/44.html', {mode: 'no-cors'})
    .then(res => res.text())
    .then(data => text44 = data)
    .then(() => L.marker([564, 756], {
        icon: makerRot
    }).addTo(map).bindPopup(text44, {
        maxWidth: 800,
        keepInView: true,
        maxHeight: 500
    }))

    // Text45: Transnationale Identitäten; Punkt: [596, 803]

let Text45;

fetch('../assets/txts/45.html', {mode: 'no-cors'})
    .then(res => res.text())
    .then(data => text45 = data)
    .then(() => L.marker([596, 803], {
        icon: makerRot
    }).addTo(map).bindPopup(text45, {
        maxWidth: 800,
        keepInView: true,
        maxHeight: 500
    }))

// Text46: Transnationale Kollaboration; Punkt: [574, 849]

let Text46;

fetch('../assets/txts/46.html', {mode: 'no-cors'})
    .then(res => res.text())
    .then(data => text46 = data)
    .then(() => L.marker([574, 849], {
        icon: makerRot
    }).addTo(map).bindPopup(text46, {
        maxWidth: 800,
        keepInView: true,
        maxHeight: 500
    }))

    // Verbindung zu: Museum verorten

    // Text47: Abhängigkeit/ Beeinflussbarkeit von politischen Mehrheiten; Punkt: [402, 712]

let Text47;

fetch('../assets/txts/47.html', {mode: 'no-cors'})
    .then(res => res.text())
    .then(data => text47 = data)
    .then(() => L.marker([401, 712], {
        icon: makerRot
    }).addTo(map).bindPopup(text47, {
        maxWidth: 800,
        keepInView: true,
        maxHeight: 500
    }))

    // Text48: Langjährige politische Kämpfe; Punkt: [336, 755]

let Text48;

fetch('../assets/txts/48.html', {mode: 'no-cors'})
    .then(res => res.text())
    .then(data => text48 = data)
    .then(() => L.marker([336, 755], {
        icon: makerRot
    }).addTo(map).bindPopup(text48, {
        maxWidth: 800,
        keepInView: true,
        maxHeight: 500
    }))

    // Text49: Politische Vorsätze vs. konkrete Maßnahmen; Punkt: [402, 827]

let Text49;

fetch('../assets/txts/49.html', {mode: 'no-cors'})
    .then(res => res.text())
    .then(data => text49 = data)
    .then(() => L.marker([402, 827], {
        icon: makerRot
    }).addTo(map).bindPopup(text49, {
        maxWidth: 800,
        keepInView: true,
        maxHeight: 500
    }))

    // Verbindung zu: Erinnerungskultur

    // Text50: Abhängigkeit von Fördergeldern; Punkt: [362, 811]

let Text50;

fetch('../assets/txts/50.html', {mode: 'no-cors'})
    .then(res => res.text())
    .then(data => text50 = data)
    .then(() => L.marker([362, 811], {
        icon: makerRot
    }).addTo(map).bindPopup(text50, {
        maxWidth: 800,
        keepInView: true,
        maxHeight: 500
    }))

    // Text51: Umgang mit rassistischem Erbe; Punkt: [428, 672]

let Text51;

fetch('../assets/txts/51.html', {mode: 'no-cors'})
    .then(res => res.text())
    .then(data => text51 = data)
    .then(() => L.marker([428, 672], {
        icon: makerRot
    }).addTo(map).bindPopup(text51, {
        maxWidth: 800,
        keepInView: true,
        maxHeight: 500
    }))

    // Verbindung zu: "how to act in a decolonial fashion"

    // Text52: Kritik und Verlernungsprozesse; Punkt: [428, 760]

let Text52;

fetch('../assets/txts/52.html', {mode: 'no-cors'})
    .then(res => res.text())
    .then(data => text52 = data)
    .then(() => L.marker([428, 760], {
        icon: makerRot
    }).addTo(map).bindPopup(text52, {
        maxWidth: 800,
        keepInView: true,
        maxHeight: 500
    }))

    // Verbindung zu: Gemeinsamer Lernprozess, Kollaboratives Arbeiten und Machtstrukturen, Subjektivität, Widerstände

    // Text53: Zugänglichkeit und Vermittelbarkeit durch Emotionen; Punkt: [486, 758]

let Text53;

fetch('../assets/txts/53.html', {mode: 'no-cors'})
    .then(res => res.text())
    .then(data => text53 = data)
    .then(() => L.marker([486, 758], {
        icon: makerRot
    }).addTo(map).bindPopup(text53, {
        maxWidth: 800,
        keepInView: true,
        maxHeight: 500
    }))

    // Verbindung zu: Kunst als Möglichkeitsraum

    // Text54: Zeitmanagement/ Koordination; Punkt: [486, 758]

let Text54;

fetch('../assets/txts/54.html', {mode: 'no-cors'})
    .then(res => res.text())
    .then(data => text54 = data)
    .then(() => L.marker([568, 573], {
        icon: makerRot
    }).addTo(map).bindPopup(text54, {
        maxWidth: 800,
        keepInView: true,
        maxHeight: 500
    }))

    // Text55: Priorisierung seitens des Museums; Punkt: [593, 397]

let Text55;

fetch('../assets/txts/55.html', {mode: 'no-cors'})
    .then(res => res.text())
    .then(data => text55 = data)
    .then(() => L.marker([593, 397], {
        icon: makerRot
    }).addTo(map).bindPopup(text55, {
        maxWidth: 800,
        keepInView: true,
        maxHeight: 500
    }))

    // Verbindung zu: Nachhaltige und umfassende Bearbeitung

    // Text56: Priorisierung der anderen Kooperationspartner*inner; Punkt: [628, 442]

let Text56;

fetch('../assets/txts/56.html', {mode: 'no-cors'})
    .then(res => res.text())
    .then(data => text56 = data)
    .then(() => L.marker([628, 442], {
        icon: makerRot
    }).addTo(map).bindPopup(text56, {
        maxWidth: 800,
        keepInView: true,
        maxHeight: 500
    }))

    // Text57: Unterschiedliche Logiken und Arbeitsansätze; Punkt: [596, 515]

let Text57;

fetch('../assets/txts/57.html', {mode: 'no-cors'})
    .then(res => res.text())
    .then(data => text57 = data)
    .then(() => L.marker([596, 515], {
        icon: makerRot
    }).addTo(map).bindPopup(text57, {
        maxWidth: 800,
        keepInView: true,
        maxHeight: 500
    }))

    // Verbindung zu: Nachhaltigkeit und Flexibilität, Kunst als Möglichkeitsraum

    // Text58: Museum verorten; Punkt: [485, 282]

let Text58;

fetch('../assets/txts/58.html', {mode: 'no-cors'})
    .then(res => res.text())
    .then(data => text58 = data)
    .then(() => L.marker([485, 282], {
        icon: makerLila
    }).addTo(map).bindPopup(text58, {
        maxWidth: 800,
        keepInView: true,
        maxHeight: 500
    }))

    // Verbindung zu: Transnationales Arbeiten, Museumspraxis

    // Text59: Outreach; Punkt: [484, 236]

let Text59;

fetch('../assets/txts/59.html', {mode: 'no-cors'})
    .then(res => res.text())
    .then(data => text59 = data)
    .then(() => L.marker([484, 236], {
        icon: makerLila
    }).addTo(map).bindPopup(text59, {
        maxWidth: 800,
        keepInView: true,
        maxHeight: 500
    }))

    // Verbindung zu: Kontakt zu widerständiger Praxis

    // Text60: Diskurspraxis; Punkt: [526, 208]

let Text60;

fetch('../assets/txts/60.html', {mode: 'no-cors'})
    .then(res => res.text())
    .then(data => text60 = data)
    .then(() => L.marker([526, 208], {
        icon: makerLila
    }).addTo(map).bindPopup(text60, {
        maxWidth: 800,
        keepInView: true,
        maxHeight: 500
    }))

    // Verbindung zu: Spefifisches Wissen und spezifische Erfahrung

    // Text61: Erinnerungskultur; Punkt: [564, 234]

let Text61;

fetch('../assets/txts/61.html', {mode: 'no-cors'})
    .then(res => res.text())
    .then(data => text61 = data)
    .then(() => L.marker([564, 134], {
        icon: makerLila
    }).addTo(map).bindPopup(text61, {
        maxWidth: 800,
        keepInView: true,
        maxHeight: 500
    }))

    // Verbindung zu: Erbe des Museums

    // Text62: Dekolonisierung normalisieren; Punkt: [530, 211]

let Text62;

fetch('../assets/txts/62.html', {mode: 'no-cors'})
    .then(res => res.text())
    .then(data => text62 = data)
    .then(() => L.marker([548, 146], {
        icon: makerLila
    }).addTo(map).bindPopup(text62, {
        maxWidth: 800,
        keepInView: true,
        maxHeight: 500
    }))

    // Verbindung zu: Umgang mit Wissens- und Erfahrungswerten, Transidziplinäres Arbeiten, Kollaboratives Arbeiten und Machtstrukturen

    // Text63: Subjektivität; Punkt: [518, 90]

let Text63;

fetch('../assets/txts/63.html', {mode: 'no-cors'})
    .then(res => res.text())
    .then(data => text63 = data)
    .then(() => L.marker([518, 90], {
        icon: makerLila
    }).addTo(map).bindPopup(text63, {
        maxWidth: 800,
        keepInView: true,
        maxHeight: 500
    }))

    // Text64: Selbst- und Fremdrepräsentation; Punkt: [495, 174]

let Text64;

fetch('../assets/txts/64.html', {mode: 'no-cors'})
    .then(res => res.text())
    .then(data => text64 = data)
    .then(() => L.marker([495, 174], {
        icon: makerLila
    }).addTo(map).bindPopup(text64, {
        maxWidth: 800,
        keepInView: true,
        maxHeight: 500
    }))

    // Text65: Sprache und Bilder; Punkt: [465, 141]

let Text65;

fetch('../assets/txts/65.html', {mode: 'no-cors'})
    .then(res => res.text())
    .then(data => text65 = data)
    .then(() => L.marker([465, 141], {
        icon: makerLila
    }).addTo(map).bindPopup(text65, {
        maxWidth: 800,
        keepInView: true,
        maxHeight: 500
    }))

    // Verbindung zu: Kunst als Möglichkeitsraum, Erbe des Museums

    // Text66: Museumspraxis; Punkt: [602, 304]

let Text66;

fetch('../assets/txts/66.html', {mode: 'no-cors'})
    .then(res => res.text())
    .then(data => text66 = data)
    .then(() => L.marker([602, 304], {
        icon: makerLila
    }).addTo(map).bindPopup(text66, {
        maxWidth: 800,
        keepInView: true,
        maxHeight: 500
    }))

    // Verbindung zu: Deutungsmacht, Umgang mit Wissens- und Erfahrungswerten

    // Text67: Erbe des Museums; Punkt: [635, 215]

let Text67;

fetch('../assets/txts/67.html', {mode: 'no-cors'})
    .then(res => res.text())
    .then(data => text67 = data)
    .then(() => L.marker([635, 215], {
        icon: makerLila
    }).addTo(map).bindPopup(text67, {
        maxWidth: 800,
        keepInView: true,
        maxHeight: 500
    }))

    // Verbindung zu: Learning Institution, Umgang mit rassistischem Erbe, Schwarze*r Künstler*in
    
    // Text68: "How to act in a decolonial fashion"; Punkt: [614, 186]

let Text68;

fetch('../assets/txts/68.html', {mode: 'no-cors'})
    .then(res => res.text())
    .then(data => text68 = data)
    .then(() => L.marker([614, 186], {
        icon: makerLila
    }).addTo(map).bindPopup(text68, {
        maxWidth: 800,
        keepInView: true,
        maxHeight: 500
    }))

    // Verbindung zu: Umgang mit rassistischem Erbe
    
    // Text69: Nachhaltigkeit und Flexibilität; Punkt: [583, 168]

let Text69;

fetch('../assets/txts/69.html', {mode: 'no-cors'})
    .then(res => res.text())
    .then(data => text69 = data)
    .then(() => L.marker([583, 168], {
        icon: makerLila
    }).addTo(map).bindPopup(text69, {
        maxWidth: 800,
        keepInView: true,
        maxHeight: 500
    }))

    // Verbindung zu: Umgang mit rassistischem Erbe, Unterschiedliche Logiken und Arbeitsansätze, Nachhaltige und umfassende Bearbeitung, Priorisierung seitens des Museums

    // Text70: Widerstände; Punkt: [673, 265]

let Text70;

fetch('../assets/txts/70.html', {mode: 'no-cors'})
    .then(res => res.text())
    .then(data => text70 = data)
    .then(() => L.marker([673, 265], {
        icon: makerLila
    }).addTo(map).bindPopup(text70, {
        maxWidth: 800,
        keepInView: true,
        maxHeight: 500
    }))

    // Text71: Überforderung/ Resignation; Punkt: [714, 275]

let Text71;

fetch('../assets/txts/71.html', {mode: 'no-cors'})
    .then(res => res.text())
    .then(data => text71 = data)
    .then(() => L.marker([714, 275], {
        icon: makerLila
    }).addTo(map).bindPopup(text71, {
        maxWidth: 800,
        keepInView: true,
        maxHeight: 500
    }))

    // Verbindung zu: Umgang mit Emotionalität

    // Text72: Unübliche Themen und Arbeitsweise; Punkt: [687, 375]

let Text72;

fetch('../assets/txts/72.html', {mode: 'no-cors'})
    .then(res => res.text())
    .then(data => text72 = data)
    .then(() => L.marker([687, 375], {
        icon: makerLila
    }).addTo(map).bindPopup(text72, {
        maxWidth: 800,
        keepInView: true,
        maxHeight: 500
    }))

    // Verbindung zu: Unterschiedliche Logiken und Arbeitsansätze

    // Text73: Fehlendes Wissen und Verständnis; Punkt: [655, 369]

let Text73;

fetch('../assets/txts/73.html', {mode: 'no-cors'})
    .then(res => res.text())
    .then(data => text73 = data)
    .then(() => L.marker([655, 369], {
        icon: makerLila
    }).addTo(map).bindPopup(text73, {
        maxWidth: 800,
        keepInView: true,
        maxHeight: 500
    }))

    // Verbindung zu: Forschungsbedarf, Kritik vom institutionellen Außen, Diskurspraxis, Entscheidungskompetenzen und Macht teilen

    // Text74: Keine konreten Handlungsstrategien; Punkt: [712, 353]

let Text74;

fetch('../assets/txts/74.html', {mode: 'no-cors'})
    .then(res => res.text())
    .then(data => text74 = data)
    .then(() => L.marker([712, 353], {
        icon: makerLila
    }).addTo(map).bindPopup(text74, {
        maxWidth: 800,
        keepInView: true,
        maxHeight: 500
    }))

    // Verbindung zu: Rolle des Museums, Gemeinsamer Lernprozess

    // Text75: Größe des Hauses; Punkt: [633, 311]

let Text75;

fetch('../assets/txts/75.html', {mode: 'no-cors'})
    .then(res => res.text())
    .then(data => text75 = data)
    .then(() => L.marker([633, 311], {
        icon: makerLila
    }).addTo(map).bindPopup(text75, {
        maxWidth: 800,
        keepInView: true,
        maxHeight: 500
    }))

    // Verbindung zu: Priorisierung seitens des Museums, Inreach und Outreach

    // Text76: Sich als Institution antastbar machen; Punkt: [680, 240]

let Text76;

fetch('../assets/txts/76.html', {mode: 'no-cors'})
    .then(res => res.text())
    .then(data => text76 = data)
    .then(() => L.marker([680, 240], {
        icon: makerLila
    }).addTo(map).bindPopup(text76, {
        maxWidth: 800,
        keepInView: true,
        maxHeight: 500
    }))

    // Verbindung zu: Rolle des Museums

    // Text77: Privilegien und strukturelle Ausschlüsse; Punkt: [711, 200]

let Text77;

fetch('../assets/txts/77.html', {mode: 'no-cors'})
    .then(res => res.text())
    .then(data => text77 = data)
    .then(() => L.marker([711, 200], {
        icon: makerLila
    }).addTo(map).bindPopup(text77, {
        maxWidth: 800,
        keepInView: true,
        maxHeight: 500
    }))

    // Verbindung zu: Ambivalente Position(ierung), Inreach und Outreach, Entscheidungskompetenzen und Macht teilen

    // Text78: Interne Hierarchien und Arbeitsweise; Punkt: [583, 168]

let Text78;

fetch('../assets/txts/78.html', {mode: 'no-cors'})
    .then(res => res.text())
    .then(data => text78 = data)
    .then(() => L.marker([694, 149], {
        icon: makerLila
    }).addTo(map).bindPopup(text78, {
        maxWidth: 800,
        keepInView: true,
        maxHeight: 500
    }))

    // Verbindung zu: Nachhaltigkeit umfassende Bearbeitung

    // Text79: Verantwortung; Punkt: [662, 86]

let Text79;

fetch('../assets/txts/79.html', {mode: 'no-cors'})
    .then(res => res.text())
    .then(data => text79 = data)
    .then(() => L.marker([662, 86], {
        icon: makerLila
    }).addTo(map).bindPopup(text79, {
        maxWidth: 800,
        keepInView: true,
        maxHeight: 500
    }))

    // Verbindung zu: Outreach, Inreach und Outreach, Subjektivität

    // Text80: "Blank/ open/ preliminary space"; Punkt: [432, 251]

let Text80;

fetch('../assets/txts/80.html', {mode: 'no-cors'})
    .then(res => res.text())
    .then(data => text80 = data)
    .then(() => L.marker([432, 251], {
        icon: makerLila
    }).addTo(map).bindPopup(text80, {
        maxWidth: 800,
        keepInView: true,
        maxHeight: 500
    }))

    // Verbindung zu: Gegenwart irritieren und Utopien erschaffen, Spezifische Zugänge und Ambivalenz

    // Text81: Museum als...; Punkt: [439, 176]

let Text81;

fetch('../assets/txts/81.html', {mode: 'no-cors'})
    .then(res => res.text())
    .then(data => text81 = data)
    .then(() => L.marker([439, 176], {
        icon: makerLila
    }).addTo(map).bindPopup(text81, {
        maxWidth: 800,
        keepInView: true,
        maxHeight: 500
    }))

    // Verbindung zu: Unterschiedliche Logiken und Arbeitsansätze, Nachhaltigkeit und Flexibilität, Kontextualisierung, Selbst- und Fremdrepräsentation, Multiperspektivisches Archiv

    // Text82: Thematisierung/ Problematisierung; Punkt: [408, 295]

let Text82;

fetch('../assets/txts/82.html', {mode: 'no-cors'})
    .then(res => res.text())
    .then(data => text82 = data)
    .then(() => L.marker([408, 295], {
        icon: makerLila
    }).addTo(map).bindPopup(text82, {
        maxWidth: 800,
        keepInView: true,
        maxHeight: 500
    }))

    // Verbindung zu: Umgang mit rassistsichem Erbe, "How to act in a decolonial fashion"

    // Text83: Performance und "hightened Presence"; Punkt: [368, 317]

let Text83;

fetch('../assets/txts/83.html', {mode: 'no-cors'})
    .then(res => res.text())
    .then(data => text83 = data)
    .then(() => L.marker([368, 317], {
        icon: makerLila
    }).addTo(map).bindPopup(text83, {
        maxWidth: 800,
        keepInView: true,
        maxHeight: 500
    }))

    // Text84: Zugang zu Räumen/ Türöffner*in; Punkt: [416, 358]

let Text84;

fetch('../assets/txts/84.html', {mode: 'no-cors'})
    .then(res => res.text())
    .then(data => text84 = data)
    .then(() => L.marker([416, 358], {
        icon: makerLila
    }).addTo(map).bindPopup(text84, {
        maxWidth: 800,
        keepInView: true,
        maxHeight: 500
    }))

    // Verbindung zu: Umgang mit rassistischem Erbe

    // Text85: Interdisziplinarität: [438, 479]

let Text85;

fetch('../assets/txts/85.html', {mode: 'no-cors'})
    .then(res => res.text())
    .then(data => text85 = data)
    .then(() => L.marker([438, 479], {
        icon: makerRot
    }).addTo(map).bindPopup(text85, {
        maxWidth: 800,
        keepInView: true,
        maxHeight: 500
    }))

    // Text86: Umgang mit Emotionalität: [483, 666]

let Text86;

fetch('../assets/txts/86.html', {mode: 'no-cors'})
    .then(res => res.text())
    .then(data => text86 = data)
    .then(() => L.marker([483, 666], {
        icon: makerRot
    }).addTo(map).bindPopup(text86, {
        maxWidth: 800,
        keepInView: true,
        maxHeight: 500
    }))

    // Text87: Möglichkeitsraum: [501, 372]

let Text87;

fetch('../assets/txts/87.html', {mode: 'no-cors'})
    .then(res => res.text())
    .then(data => text87 = data)
    .then(() => L.marker([501, 372], {
        icon: makerLila
    }).addTo(map).bindPopup(text87, {
        maxWidth: 800,
        keepInView: true,
        maxHeight: 500
    }))

    // Text88: Kontaktzone: [480, 400]

let Text88;

fetch('../assets/txts/88.html', {mode: 'no-cors'})
    .then(res => res.text())
    .then(data => text88 = data)
    .then(() => L.marker([480, 400], {
        icon: makerRot
    }).addTo(map).bindPopup(text88, {
        maxWidth: 800,
        keepInView: true,
        maxHeight: 500
    }))

    // Text89: Kontextualisierung: [507, 216]

let Text89;

fetch('../assets/txts/89.html', {mode: 'no-cors'})
    .then(res => res.text())
    .then(data => text89 = data)
    .then(() => L.marker([507, 216], {
        icon: makerLila
    }).addTo(map).bindPopup(text89, {
        maxWidth: 800,
        keepInView: true,
        maxHeight: 500
    }))

    // Text90: Meine Positionierung: [715, 773]

let Text90;

fetch('../assets/txts/90.html', {mode: 'no-cors'})
    .then(res => res.text())
    .then(data => text90 = data)
    .then(() => L.marker([715, 773], {
        icon: makerRot
    }).addTo(map).bindPopup(text90, {
        maxWidth: 800,
        keepInView: true,
        maxHeight: 500
    }))

    // Text91: Künstler*innen: [315, 511]

let Text91;

fetch('../assets/txts/91.html', {mode: 'no-cors'})
    .then(res => res.text())
    .then(data => text91 = data)
    .then(() => L.marker([315, 511], {
        icon: makerRot
    }).addTo(map).bindPopup(text91, {
        maxWidth: 800,
        keepInView: true,
        maxHeight: 500
    }))

    // Text92: Ort demokratischer Aushandlunsgprozesse: [521, 518]

let Text92;

fetch('../assets/txts/92.html', {mode: 'no-cors'})
    .then(res => res.text())
    .then(data => text92 = data)
    .then(() => L.marker([521, 518], {
        icon: makerRot
    }).addTo(map).bindPopup(text92, {
        maxWidth: 800,
        keepInView: true,
        maxHeight: 500
    }))

    // Text93: Kontakt zu widerständiger Praxis: [528, 654]

let Text93;

fetch('../assets/txts/93.html', {mode: 'no-cors'})
    .then(res => res.text())
    .then(data => text93 = data)
    .then(() => L.marker([528, 654], {
        icon: makerRot
    }).addTo(map).bindPopup(text93, {
        maxWidth: 800,
        keepInView: true,
        maxHeight: 500
    }))

     // Text94: Gemeinsamer Lernprozess: [660, 535]

let Text94;

fetch('../assets/txts/94.html', {mode: 'no-cors'})
    .then(res => res.text())
    .then(data => text94 = data)
    .then(() => L.marker([660, 535], {
        icon: makerRot
    }).addTo(map).bindPopup(text94, {
        maxWidth: 800,
        keepInView: true,
        maxHeight: 500
    }))

    // Text95: Umgang mit Wissens- und Erfahrungswerten: [648, 680]

let Text95;

fetch('../assets/txts/95.html', {mode: 'no-cors'})
    .then(res => res.text())
    .then(data => text95 = data)
    .then(() => L.marker([648, 680], {
        icon: makerRot
    }).addTo(map).bindPopup(text95, {
        maxWidth: 800,
        keepInView: true,
        maxHeight: 500
    }))

    // Text96: Dezentralisierung: [555, 334]

let Text96;

fetch('../assets/txts/96.html', {mode: 'no-cors'})
    .then(res => res.text())
    .then(data => text96 = data)
    .then(() => L.marker([555, 334], {
        icon: makerLila
    }).addTo(map).bindPopup(text96, {
        maxWidth: 800,
        keepInView: true,
        maxHeight: 500
    }))

    // Text97: Learning Institution: [649, 276]

let Text97;

fetch('../assets/txts/97.html', {mode: 'no-cors'})
    .then(res => res.text())
    .then(data => text97 = data)
    .then(() => L.marker([649, 276], {
        icon: makerLila
    }).addTo(map).bindPopup(text97, {
        maxWidth: 800,
        keepInView: true,
        maxHeight: 500
    }))

    // Text98: Kunst als Möglichkeitsraum: [453, 331]

let Text98;

fetch('../assets/txts/98.html', {mode: 'no-cors'})
    .then(res => res.text())
    .then(data => text98 = data)
    .then(() => L.marker([453, 331], {
        icon: makerLila
    }).addTo(map).bindPopup(text98, {
        maxWidth: 800,
        keepInView: true,
        maxHeight: 500
    }))

     // Text99: Spezifische Positionierung: [293, 517]

let Text99;

fetch('../assets/txts/99.html', {mode: 'no-cors'})
    .then(res => res.text())
    .then(data => text99 = data)
    .then(() => L.marker([293, 517], {
        icon: makerRot
    }).addTo(map).bindPopup(text99, {
        maxWidth: 800,
        keepInView: true,
        maxHeight: 500
    }))

      // Text100: Alleinstellungsmerkmale: [381, 448]

let Text100;

fetch('../assets/txts/100.html', {mode: 'no-cors'})
    .then(res => res.text())
    .then(data => text100 = data)
    .then(() => L.marker([381, 448], {
        icon: makerRot
    }).addTo(map).bindPopup(text100, {
        maxWidth: 800,
        keepInView: true,
        maxHeight: 500
    }))

    // Text101: Museumsmitarbeitende: [330, 550]

let Text101;

fetch('../assets/txts/101.html', {mode: 'no-cors'})
    .then(res => res.text())
    .then(data => text101 = data)
    .then(() => L.marker([330, 550], {
        icon: makerRot
    }).addTo(map).bindPopup(text101, {
        maxWidth: 800,
        keepInView: true,
        maxHeight: 500
    }))


    