/**
 * fonction qui mélange le tableau, pour que les caractères soient aléatoires
 */
function melange() {
  let y = Math.floor((Math.random() * 51) + 50)
  for (let i = 0; i < y; i++) {
    niveau1.sort(() => Math.random() - 0.5)
  }
  console.log("Le Tableau à été mélangé " + y + " fois")
}

/**
 * Permet de faire passer un niveau, en rendant plus dur le combat en rajoutant des caractères. Elle a besoin du tableau.
 */
function levelUp(table, cheat1, cheat2) {

  if (compteur >= table.length - 1) {
    sonUp.play();
    sonUp.volume = (volume.value / 10);
    niveau++;
    compteur = 0;
    if (pv <= 2 && pv > 0 && cheat2 === 1) {
      pv++;
    }
    switch (niveau) {
      case 2:
        for (let i = 0; i < niveau2.length; i++) {
          table.push(niveau2[i]);
        }
        break;
      case 3:
        for (let i = 0; i < niveau3.length; i++) {
          table.push(niveau3[i]);
        }
        break;
      case 4:
        for (let i = 0; i < niveau4.length; i++) {
          table.push(niveau4[i]);
        }
        break;
      case 5:
        for (let i = 0; i < niveau5.length; i++) {
          table.push(niveau5[i]);
        }
        break;
      case 6:
        for (let i = 0; i < niveau6.length; i++) {
          table.push(niveau6[i]);
        }
        break;
      case 7:
        for (let i = 0; i < niveau7.length; i++) {
          table.push(niveau7[i]);
        }
        break;
      case 8:
        for (let i = 0; i < niveau8.length; i++) {
          table.push(niveau8[i]);
        }
        break;
      case 9:
        for (let i = 0; i < niveau9.length; i++) {
          table.push(niveau9[i]);
        }
        break;
      case 10:
        for (let i = 0; i < niveau10.length; i++) {
          table.push(niveau10[i]);
        }
        break;
      case 11:
        for (let i = 0; i < niveau11.length; i++) {
          table.push(niveau11[i]);
        }
        break;
      case 12:
        for (let i = 0; i < niveau12.length; i++) {
          table.push(niveau12[i]);
        }
        break;
      case 13:
        for (let i = 0; i < niveau13.length; i++) {
          table.push(niveau13[i]);
        }
        break;
      case 14:
        for (let i = 0; i < niveau14.length; i++) {
          table.push(niveau14[i]);
        }
        break;
      default:
        console.log("Omae wa mou shindeiru !")
    }
    if (cheat1 === 0) {
      melange();
    }
  } else {
    compteur++;
  }
}


/**
 * Affiche les caractères proposés à l'utilisateur, elle a besoin du flag, du tableau principale, et de son type
 */
function affichageKanas(affichage, table, type, cheat3) {
  let spanFamille = document.getElementById("famille"); // L'endroit où la famille va s'afficher

  if (type === 0) {
    // Affichage des hiraganas
    affichage.innerHTML = table[compteur].hiragana;
  } else {
    // Affichage des katakanas
    affichage.innerHTML = table[compteur].katakana;
  }

  if (cheat3 === 1) {
    if (table[compteur] === lettreA || table[compteur] === lettreI || table[compteur] === lettreU || table[compteur] === lettreE || table[compteur] === lettreO) {
      spanFamille.innerHTML = 'Famille : a, i, u, e, o';
    }
    if (table[compteur] === lettreKa || table[compteur] === lettreKi || table[compteur] === lettreKu || table[compteur] === lettreKe || table[compteur] === lettreKo) {
      spanFamille.innerHTML = 'Famille : ka, ki, ku, ke, ko';
    }
    if (table[compteur] === lettreSa || table[compteur] === lettreSi || table[compteur] === lettreSu || table[compteur] === lettreSe || table[compteur] === lettreSo) {
      spanFamille.innerHTML = 'Famille : sa, shi, su, se, so';
    }
    if (table[compteur] === lettreTa || table[compteur] === lettreTi || table[compteur] === lettreTu || table[compteur] === lettreTe || table[compteur] === lettreTo) {
      spanFamille.innerHTML = 'Famille : ta, chi, tsu, te, to';
    }
    if (table[compteur] === lettreNa || table[compteur] === lettreNi || table[compteur] === lettreNu || table[compteur] === lettreNe || table[compteur] === lettreNo) {
      spanFamille.innerHTML = 'Famille : na, ni, nu, ne, no';
    }
    if (table[compteur] === lettreHa || table[compteur] === lettreHi || table[compteur] === lettreHu || table[compteur] === lettreHe || table[compteur] === lettreHo) {
      spanFamille.innerHTML = 'Famille : ha, hi, fu, he, ho';
    }
    if (table[compteur] === lettreMa || table[compteur] === lettreMi || table[compteur] === lettreMu || table[compteur] === lettreMe || table[compteur] === lettreMo) {
      spanFamille.innerHTML = 'Famille : ma, mi, mu, me, mo';
    }
    if (table[compteur] === lettreRa || table[compteur] === lettreRi || table[compteur] === lettreRu || table[compteur] === lettreRe || table[compteur] === lettreRo) {
      spanFamille.innerHTML = 'Famille : ra, ri, ru, re, ro';
    }
    if (table[compteur] === lettreYa || table[compteur] === lettreYu || table[compteur] === lettreYo || table[compteur] === lettreWa || table[compteur] === lettreWo || table[compteur] === lettreN) {
      spanFamille.innerHTML = 'Famille : ya, yu, o, wa, wo, n';
    }
    if (table[compteur] === lettreGa || table[compteur] === lettreGi || table[compteur] === lettreGu || table[compteur] === lettreGe || table[compteur] === lettreGo) {
      spanFamille.innerHTML = 'Famille : ga, gi, gu, ge, go';
    }
    if (table[compteur] === lettreZa || table[compteur] === lettreZi || table[compteur] === lettreZu || table[compteur] === lettreZe || table[compteur] === lettreZo) {
      spanFamille.innerHTML = 'Famille : za, ji, zu, ze, zo';
    }
    if (table[compteur] === lettreDa || table[compteur] === lettreDi || table[compteur] === lettreDu || table[compteur] === lettreDe || table[compteur] === lettreDo) {
      spanFamille.innerHTML = 'Famille : da, ji, zu, de, do';
    }
    if (table[compteur] === lettreBa || table[compteur] === lettreBi || table[compteur] === lettreBu || table[compteur] === lettreBe || table[compteur] === lettreBo) {
      spanFamille.innerHTML = 'Famille : ba, bi, bu, be, bo';
    }
    if (table[compteur] === lettrePa || table[compteur] === lettrePi || table[compteur] === lettrePu || table[compteur] === lettrePe || table[compteur] === lettrePo) {
      spanFamille.innerHTML = 'Famille : pa, pi, pu, pe, po';
    }
  } else {
    spanFamille.innerHTML = '';
  }

}

/**
 * Vérifie si le caractère tapé par l'utilisateur est le bon, elle a besoin de la saisie de l'utilisateur, du tableau, de son type, et le nombre de bonne réponse
 * @param {string} saisie - La saisie de l'utilisateur 
 */
function verify(input, kana, type, cheat1, cheat2, cheat3) {
  let divErreurs = document.getElementById("erreurs");
  let scoreCheat = (cheat1 + cheat2 + cheat3) * 2;

  if (input.value.toLowerCase() === kana[compteur].romaji) {
    sonWin.play();
    sonWin.volume = (volume.value / 10);
    if (scoreCheat === 0) {
      score += niveau;
    } else {
      score += (niveau / scoreCheat);
    }
    nbSyllabesTrouvees++;
    niveau1[compteur].compteur++;
  } else {
    sonLoose.play();
    sonLoose.volume = (volume.value / 10);
    compteurErreurs++;
    niveau1[compteur].compteur--;
    if (compteurErreurs > 1) {
      divErreurs.innerHTML += '<br>';
    }
    if (type === 0) {
      divErreurs.innerHTML += '🩶 Erreur ' + compteurErreurs + ' : "' + kana[compteur].hiragana + '" (' + kana[compteur].romaji + '), vous avez saisi "' + input.value + '"';
    } else {
      divErreurs.innerHTML += '🩶 Erreur ' + compteurErreurs + ' : "' + kana[compteur].katakana + '" (' + kana[compteur].romaji + '), vous avez saisi "' + input.value + '"';
    }
    pv--;
  }
}

/**
 * Fonction pour afficher les résultat de la partie
 * Elle a besoin de l'ancien caractère affiché, le type de tableau et le nombre de bonne réponse
 */
function affichageResult(kanaOld, type) {
  let precedent = document.getElementById("precedent");
  let spanScore = document.getElementById("score");
  let spanNiveau = document.getElementById("niveau");
  let spanPv = document.getElementById("pv");

  switch (pv) {
    case 2:
      spanPv.innerHTML = "Cœurs : ❤️❤️🩶";
      break;
    case 1:
      spanPv.innerHTML = "Cœurs : ❤️🩶🩶";
      break;
    case 0:
      spanPv.innerHTML = "<span title='kanji Mort'>死</span> : 🩶🩶🩶";
      break;
    default:
      spanPv.innerHTML = "Cœurs : ❤️❤️❤️";
  }
  spanNiveau.innerHTML = niveau;
  spanScore.innerHTML = score + '. Caractères trouvés : ' + nbSyllabesTrouvees;
  if (type === 0) {
    precedent.innerHTML = "Kana précédent : " + kanaOld.hiragana;
  } else {
    precedent.innerHTML = "Kana précédent : " + kanaOld.katakana;
  }

}

function verifGameOver(input, affichage, bouton) {
  if (pv <= 0) {
    sonMort.play();
    sonMort.volume = (volume.value / 10);
    sonGOver.play();
    sonGOver.volume = (volume.value / 10);
    input.value = "死";
    input.disabled = true;
    affichage.innerHTML = "<span title='kanji Mort'>死</span>";
    bouton.textContent = "Game Over";
    bouton.disabled = true;
  }

  if (niveau1.length < 1) {
    sonMort.play();
    sonMort.volume = (volume.value / 10);
    sonGOver.play();
    sonGOver.volume = (volume.value / 10);
    input.value = "勝";
    input.disabled = true;
    affichage.innerHTML = "<span title='kanji Gagné/Vaincre'>勝</span>";
    bouton.textContent = "Victoire !";
    bouton.disabled = true;


  }
}

function majObjectifs() {
  let spanObjectifA = document.querySelector(".objectifA");
  let spanObjectifI = document.querySelector(".objectifI");
  let spanObjectifU = document.querySelector(".objectifU");
  let spanObjectifE = document.querySelector(".objectifE");
  let spanObjectifO = document.querySelector(".objectifO");
  let spanObjectifKa = document.querySelector(".objectifKa");
  let spanObjectifKi = document.querySelector(".objectifKi");
  let spanObjectifKu = document.querySelector(".objectifKu");
  let spanObjectifKe = document.querySelector(".objectifKe");
  let spanObjectifKo = document.querySelector(".objectifKo");
  let spanObjectifSa = document.querySelector(".objectifSa");
  let spanObjectifShi = document.querySelector(".objectifShi");
  let spanObjectifSu = document.querySelector(".objectifSu");
  let spanObjectifSe = document.querySelector(".objectifSe");
  let spanObjectifSo = document.querySelector(".objectifSo");
  let spanObjectifTa = document.querySelector(".objectifTa");
  let spanObjectifChi = document.querySelector(".objectifChi");
  let spanObjectifTsu = document.querySelector(".objectifTsu");
  let spanObjectifTe = document.querySelector(".objectifTe");
  let spanObjectifTo = document.querySelector(".objectifTo");
  let spanObjectifNa = document.querySelector(".objectifNa");
  let spanObjectifNi = document.querySelector(".objectifNi");
  let spanObjectifNu = document.querySelector(".objectifNu");
  let spanObjectifNe = document.querySelector(".objectifNe");
  let spanObjectifNo = document.querySelector(".objectifNo");
  let spanObjectifHa = document.querySelector(".objectifHa");
  let spanObjectifHi = document.querySelector(".objectifHi");
  let spanObjectifFu = document.querySelector(".objectifFu");
  let spanObjectifHe = document.querySelector(".objectifHe");
  let spanObjectifHo = document.querySelector(".objectifHo");
  let spanObjectifMa = document.querySelector(".objectifMa");
  let spanObjectifMi = document.querySelector(".objectifMi");
  let spanObjectifMu = document.querySelector(".objectifMu");
  let spanObjectifMe = document.querySelector(".objectifMe");
  let spanObjectifMo = document.querySelector(".objectifMo");
  let spanObjectifRa = document.querySelector(".objectifRa");
  let spanObjectifRi = document.querySelector(".objectifRi");
  let spanObjectifRu = document.querySelector(".objectifRu");
  let spanObjectifRe = document.querySelector(".objectifRe");
  let spanObjectifRo = document.querySelector(".objectifRo");
  let spanObjectifYa = document.querySelector(".objectifYa");
  let spanObjectifYu = document.querySelector(".objectifYu");
  let spanObjectifYo = document.querySelector(".objectifYo");
  let spanObjectifWa = document.querySelector(".objectifWa");
  let spanObjectifWo = document.querySelector(".objectifWo");
  let spanObjectifN = document.querySelector(".objectifN");
  let spanObjectifGa = document.querySelector(".objectifGa");
  let spanObjectifGi = document.querySelector(".objectifGi");
  let spanObjectifGu = document.querySelector(".objectifGu");
  let spanObjectifGe = document.querySelector(".objectifGe");
  let spanObjectifGo = document.querySelector(".objectifGo");
  let spanObjectifZa = document.querySelector(".objectifZa");
  let spanObjectifJi = document.querySelector(".objectifJi");
  let spanObjectifZu = document.querySelector(".objectifZu");
  let spanObjectifZe = document.querySelector(".objectifZe");
  let spanObjectifZo = document.querySelector(".objectifZo");
  let spanObjectifDa = document.querySelector(".objectifDa");
  let spanObjectifDi = document.querySelector(".objectifDi");
  let spanObjectifDu = document.querySelector(".objectifDu");
  let spanObjectifDe = document.querySelector(".objectifDe");
  let spanObjectifDo = document.querySelector(".objectifDo");
  let spanObjectifBa = document.querySelector(".objectifBa");
  let spanObjectifBi = document.querySelector(".objectifBi");
  let spanObjectifBu = document.querySelector(".objectifBu");
  let spanObjectifBe = document.querySelector(".objectifBe");
  let spanObjectifBo = document.querySelector(".objectifBo");
  let spanObjectifPa = document.querySelector(".objectifPa");
  let spanObjectifPi = document.querySelector(".objectifPi");
  let spanObjectifPu = document.querySelector(".objectifPu");
  let spanObjectifPe = document.querySelector(".objectifPe");
  let spanObjectifPo = document.querySelector(".objectifPo");

  spanObjectifA.innerHTML = "a : " + lettreA.compteur + " / 3";
  spanObjectifI.innerHTML = "i : " + lettreI.compteur + " / 3";
  spanObjectifU.innerHTML = "u : " + lettreU.compteur + " / 3";
  spanObjectifE.innerHTML = "e : " + lettreE.compteur + " / 3";
  spanObjectifO.innerHTML = "o : " + lettreO.compteur + " / 3";
  spanObjectifKa.innerHTML = "ka : " + lettreKa.compteur + " / 3";
  spanObjectifKi.innerHTML = "ki : " + lettreKi.compteur + " / 3";
  spanObjectifKu.innerHTML = "ku : " + lettreKu.compteur + " / 3";
  spanObjectifKe.innerHTML = "ke : " + lettreKe.compteur + " / 3";
  spanObjectifKo.innerHTML = "ko : " + lettreKo.compteur + " / 3";
  spanObjectifSa.innerHTML = "sa : " + lettreSa.compteur + " / 3";
  spanObjectifShi.innerHTML = "shi : " + lettreSi.compteur + " / 3";
  spanObjectifSu.innerHTML = "su : " + lettreSu.compteur + " / 3";
  spanObjectifSe.innerHTML = "se : " + lettreSe.compteur + " / 3";
  spanObjectifSo.innerHTML = "so : " + lettreSo.compteur + " / 3";
  spanObjectifTa.innerHTML = "ta : " + lettreTa.compteur + " / 3";
  spanObjectifChi.innerHTML = "chi : " + lettreTi.compteur + " / 3";
  spanObjectifTsu.innerHTML = "tsu : " + lettreTu.compteur + " / 3";
  spanObjectifTe.innerHTML = "te : " + lettreTe.compteur + " / 3";
  spanObjectifTo.innerHTML = "to : " + lettreTo.compteur + " / 3";
  spanObjectifNa.innerHTML = "na : " + lettreNa.compteur + " / 3";
  spanObjectifNi.innerHTML = "ni : " + lettreNi.compteur + " / 3";
  spanObjectifNu.innerHTML = "nu : " + lettreNu.compteur + " / 3";
  spanObjectifNe.innerHTML = "ne : " + lettreNe.compteur + " / 3";
  spanObjectifNo.innerHTML = "no : " + lettreNo.compteur + " / 3";
  spanObjectifHa.innerHTML = "ha : " + lettreHa.compteur + " / 3";
  spanObjectifHi.innerHTML = "hi : " + lettreHi.compteur + " / 3";
  spanObjectifFu.innerHTML = "fu : " + lettreHu.compteur + " / 3";
  spanObjectifHe.innerHTML = "he : " + lettreHe.compteur + " / 3";
  spanObjectifHo.innerHTML = "ho : " + lettreHo.compteur + " / 3";
  spanObjectifMa.innerHTML = "ma : " + lettreMa.compteur + " / 3";
  spanObjectifMi.innerHTML = "mi : " + lettreMi.compteur + " / 3";
  spanObjectifMu.innerHTML = "mu : " + lettreMu.compteur + " / 3";
  spanObjectifMe.innerHTML = "me : " + lettreMe.compteur + " / 3";
  spanObjectifMo.innerHTML = "mo : " + lettreMo.compteur + " / 3";
  spanObjectifRa.innerHTML = "ra : " + lettreRa.compteur + " / 3";
  spanObjectifRi.innerHTML = "ri : " + lettreRi.compteur + " / 3";
  spanObjectifRu.innerHTML = "ru : " + lettreRu.compteur + " / 3";
  spanObjectifRe.innerHTML = "re : " + lettreRe.compteur + " / 3";
  spanObjectifRo.innerHTML = "ro : " + lettreRo.compteur + " / 3";
  spanObjectifYa.innerHTML = "ya : " + lettreYa.compteur + " / 3";
  spanObjectifYu.innerHTML = "yu : " + lettreYu.compteur + " / 3";
  spanObjectifYo.innerHTML = "yo : " + lettreYo.compteur + " / 3";
  spanObjectifWa.innerHTML = "wa : " + lettreWa.compteur + " / 3";
  spanObjectifWo.innerHTML = "wo : " + lettreWo.compteur + " / 3";
  spanObjectifN.innerHTML = "n : " + lettreN.compteur + " / 3";
  spanObjectifGa.innerHTML = "ga : " + lettreGa.compteur + " / 3";
  spanObjectifGi.innerHTML = "gi : " + lettreGi.compteur + " / 3";
  spanObjectifGu.innerHTML = "gu : " + lettreGu.compteur + " / 3";
  spanObjectifGe.innerHTML = "ge : " + lettreGe.compteur + " / 3";
  spanObjectifGo.innerHTML = "go : " + lettreGo.compteur + " / 3";
  spanObjectifZa.innerHTML = "za : " + lettreZa.compteur + " / 3";
  spanObjectifJi.innerHTML = "ji : " + lettreZi.compteur + " / 3";
  spanObjectifZu.innerHTML = "zu : " + lettreZu.compteur + " / 3";
  spanObjectifZe.innerHTML = "ze : " + lettreZe.compteur + " / 3";
  spanObjectifZo.innerHTML = "zo : " + lettreZo.compteur + " / 3";
  spanObjectifDa.innerHTML = "da : " + lettreDa.compteur + " / 3";
  spanObjectifDi.innerHTML = "ji : " + lettreDi.compteur + " / 3";
  spanObjectifDu.innerHTML = "zu : " + lettreDu.compteur + " / 3";
  spanObjectifDe.innerHTML = "de : " + lettreDe.compteur + " / 3";
  spanObjectifDo.innerHTML = "do : " + lettreDo.compteur + " / 3";
  spanObjectifBa.innerHTML = "ba : " + lettreBa.compteur + " / 3";
  spanObjectifBi.innerHTML = "bi : " + lettreBi.compteur + " / 3";
  spanObjectifBu.innerHTML = "bu : " + lettreBu.compteur + " / 3";
  spanObjectifBe.innerHTML = "be : " + lettreBe.compteur + " / 3";
  spanObjectifBo.innerHTML = "bo : " + lettreBo.compteur + " / 3";
  spanObjectifPa.innerHTML = "pa : " + lettrePa.compteur + " / 3";
  spanObjectifPi.innerHTML = "pi : " + lettrePi.compteur + " / 3";
  spanObjectifPu.innerHTML = "pu : " + lettrePu.compteur + " / 3";
  spanObjectifPe.innerHTML = "pe : " + lettrePe.compteur + " / 3";
  spanObjectifPo.innerHTML = "po : " + lettrePo.compteur + " / 3";

  if(lettreA.compteur === 3) {
    spanObjectifA.style.color = "green";
  }
  if(lettreI.compteur === 3){
    spanObjectifI.style.color = "green";
  }
  if(lettreU.compteur === 3) {
    spanObjectifU.style.color = "green";
  }
  if(lettreE.compteur === 3) {
    spanObjectifE.style.color = "green";
  }
  if(lettreO.compteur === 3) {
    spanObjectifO.style.color = "green";
  }
  if(lettreKa.compteur === 3) {
    spanObjectifKa.style.color = "green";
  }
  if(lettreKi.compteur === 3) {
    spanObjectifKi.style.color = "green";
  }
  if(lettreKu.compteur === 3) {
    spanObjectifKu.style.color = "green";
  }
  if(lettreKe.compteur === 3) {
    spanObjectifKe.style.color = "green";
  }
  if(lettreKo.compteur === 3) {
    spanObjectifKo.style.color = "green";
  }
  if(lettreSa.compteur === 3) {
    spanObjectifSa.style.color = "green";
  }
  if(lettreSi.compteur === 3) {
    spanObjectifShi.style.color = "green";
  }
  if(lettreSu.compteur === 3) {
    spanObjectifSu.style.color = "green";
  }
  if(lettreSe.compteur === 3) {
    spanObjectifSe.style.color = "green";
  }
  if(lettreSo.compteur === 3) {
    spanObjectifSo.style.color = "green";
  }
  if(lettreTa.compteur === 3) {
    spanObjectifTa.style.color = "green";
  }
  if(lettreTi.compteur === 3) {
    spanObjectifChi.style.color = "green";
  }
  if(lettreTu.compteur === 3) {
    spanObjectifTsu.style.color = "green";
  }
  if(lettreTe.compteur === 3) {
    spanObjectifTe.style.color = "green";
  }
  if(lettreTo.compteur === 3) {
    spanObjectifTo.style.color = "green";
  }
  if(lettreNa.compteur === 3) {
    spanObjectifNa.style.color = "green";
  }
  if(lettreNi.compteur === 3) {
    spanObjectifNi.style.color = "green";
  }
  if(lettreNu.compteur === 3) {
    spanObjectifNu.style.color = "green";
  }
  if(lettreNe.compteur === 3) {
    spanObjectifNe.style.color = "green";
  }
  if(lettreNo.compteur === 3) {
    spanObjectifNo.style.color = "green";
  }
  if(lettreHa.compteur === 3) {
    spanObjectifHa.style.color = "green";
  }
  if(lettreHi.compteur === 3) {
    spanObjectifHi.style.color = "green";
  }
  if(lettreHu.compteur === 3) {
    spanObjectifFu.style.color = "green";
  }
  if(lettreHe.compteur === 3) {
    spanObjectifHe.style.color = "green";
  }
  if(lettreHo.compteur === 3) {
    spanObjectifHo.style.color = "green";
  }
  if(lettreMa.compteur === 3) {
    spanObjectifMa.style.color = "green";
  }
  if(lettreMi.compteur === 3) {
    spanObjectifMi.style.color = "green";
  }
  if(lettreMu.compteur === 3) {
    spanObjectifMu.style.color = "green";
  }
  if(lettreMe.compteur === 3) {
    spanObjectifMe.style.color = "green";
  }
  if(lettreMo.compteur === 3) {
    spanObjectifMo.style.color = "green";
  }
  if(lettreRa.compteur === 3) {
    spanObjectifRa.style.color = "green";
  }
  if(lettreRi.compteur === 3) {
    spanObjectifRi.style.color = "green";
  }
  if(lettreRu.compteur === 3) {
    spanObjectifRu.style.color = "green";
  }
  if(lettreRe.compteur === 3) {
    spanObjectifRe.style.color = "green";
  }
  if(lettreRo.compteur === 3) {
    spanObjectifRo.style.color = "green";
  }
  if(lettreYa.compteur === 3) {
    spanObjectifYa.style.color = "green";
  }
  if(lettreYu.compteur === 3) {
    spanObjectifYu.style.color = "green";
  }
  if(lettreYo.compteur === 3) {
    spanObjectifYo.style.color = "green";
  }
  if(lettreWa.compteur === 3) {
    spanObjectifWa.style.color = "green";
  }
  if(lettreWo.compteur === 3) {
    spanObjectifWo.style.color = "green";
  }
  if(lettreN.compteur === 3) {
    spanObjectifN.style.color = "green";
  }
  if(lettreGa.compteur === 3) {
    spanObjectifGa.style.color = "green";
  }
  if(lettreGi.compteur === 3) {
    spanObjectifGi.style.color = "green";
  }
  if(lettreGu.compteur === 3) {
    spanObjectifGu.style.color = "green";
  }
  if(lettreGe.compteur === 3) {
    spanObjectifGe.style.color = "green";
  }
  if(lettreGo.compteur === 3) {
    spanObjectifGo.style.color = "green";
  }
  if(lettreZa.compteur === 3) {
    spanObjectifZa.style.color = "green";
  }
  if(lettreZi.compteur === 3) {
    spanObjectifJi.style.color = "green";
  }
  if(lettreZu.compteur === 3) {
    spanObjectifZu.style.color = "green";
  }
  if(lettreZe.compteur === 3) {
    spanObjectifZe.style.color = "green";
  }
  if(lettreZo.compteur === 3) {
    spanObjectifZo.style.color = "green";
  }
  if(lettreDa.compteur === 3) {
    spanObjectifDa.style.color = "green";
  }
  if(lettreDi.compteur === 3) {
    spanObjectifDi.style.color = "green";
  }
  if(lettreDu.compteur === 3) {
    spanObjectifDu.style.color = "green";
  }
  if(lettreDe.compteur === 3) {
    spanObjectifDe.style.color = "green";
  }
  if(lettreDo.compteur === 3) {
    spanObjectifDo.style.color = "green";
  }
  if(lettreBa.compteur === 3) {
    spanObjectifBa.style.color = "green";
  }
  if(lettreBi.compteur === 3) {
    spanObjectifBi.style.color = "green";
  }
  if(lettreBu.compteur === 3) {
    spanObjectifBu.style.color = "green";
  }
  if(lettreBe.compteur === 3) {
    spanObjectifBe.style.color = "green";
  }
  if(lettreBo.compteur === 3) {
    spanObjectifBo.style.color = "green";
  }
  if(lettrePa.compteur === 3) {
    spanObjectifPa.style.color = "green";
  }
  if(lettrePi.compteur === 3) {
    spanObjectifPi.style.color = "green";
  }
  if(lettrePu.compteur === 3) {
    spanObjectifPu.style.color = "green";
  }
  if(lettrePe.compteur === 3) {
    spanObjectifPe.style.color = "green";
  }
  if(lettrePo.compteur === 3) {
    spanObjectifPo.style.color = "green";
  }

}

function jouons(tableauType, drapeau, btnValider, saisiePerso, triche1, triche2, triche3) {
  let kanaTemp = ""; // Ancien caractère affiché

  verify(saisiePerso, niveau1, tableauType, triche1, triche2, triche3);
  kanaTemp = niveau1[compteur];
  if (niveau1[compteur].compteur >= 3) {
    niveau1.splice(compteur, 1);
    compteur--;
  }
  verifGameOver(saisiePerso, drapeau, btnValider);
  levelUp(niveau1, triche1, triche2);
  affichageKanas(drapeau, niveau1, tableauType, triche3);
  affichageResult(kanaTemp, tableauType);
  saisie.value = "";
  majObjectifs();
}

/**
 * Fonction principale
 */
function lancerJeu() {
  // Initialisation des variables  
  let typeTableau = 0; // Type de tableau, 0 = hiragana, 1 = katakana
  let saisie = document.getElementById("saisie"); // Saisie de l'utilisateur
  let flag = document.getElementById("flag"); // Affichage du caractère à traduire
  let valider = document.getElementById("valider"); //Bouton Fight !
  let listeCheckbox = document.querySelectorAll("#buttons input"); // Choix Hiragana ou Katakana
  let recommencer = document.getElementById("recommencer"); //Bouton pour rafraichir la page et recommencer le jeu
  let btnApprentissage = document.getElementById("check_apprentissage") //Bouton pour tricher et empêcher le mélange des tables
  let labelApprentissage = document.getElementById("label_apprentissage")
  let apprentissage = 0; // triche 1
  let btnCoeurPlus = document.getElementById("check_coeursPlus") // Bouton pour tricher et regagner un coeur par niveau, max 3
  let labelCoeurPlus = document.getElementById("label_coeursPlus")
  let coeurPlus = 0; // triche 2
  let btnFamille = document.getElementById("check_famille"); // Bouton pour tricher et afficher la famille du caractère
  let labelFamille = document.getElementById("label_famille")
  let famille = 0; // triche 3

  affichageKanas(flag, niveau1, typeTableau);

  valider.addEventListener("click", () => {
    saisie.value = saisie.value.trim();
    if (saisie.value !== "") {
      jouons(typeTableau, flag, valider, saisie, apprentissage, coeurPlus, famille);
      btnApprentissage.disabled = "disabled";
      btnCoeurPlus.disabled = "disabled";
      btnFamille.disabled = "disabled";
      if (apprentissage === 1) {
        labelApprentissage.style.backgroundColor = "rgba(85, 23, 45, 0.5)"
      } else {
        labelApprentissage.style.backgroundColor = "silver"
      }
      if (coeurPlus === 1) {
        labelCoeurPlus.style.backgroundColor = "rgba(85, 23, 45, 0.5)"
      } else {
        labelCoeurPlus.style.backgroundColor = "silver"
      }
      if (famille === 1) {
        labelFamille.style.backgroundColor = "rgba(85, 23, 45, 0.5)"
      } else {
        labelFamille.style.backgroundColor = "silver"
      }
    }
  })
  saisie.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
      saisie.value = saisie.value.trim();
      if (saisie.value !== "") {
        jouons(typeTableau, flag, valider, saisie, apprentissage, coeurPlus, famille);
        btnApprentissage.disabled = "disabled";
        btnCoeurPlus.disabled = "disabled";
        btnFamille.disabled = "disabled";
        if (apprentissage === 1) {
          labelApprentissage.style.backgroundColor = "rgba(85, 23, 45, 0.5)"
        } else {
          labelApprentissage.style.backgroundColor = "silver"
        }
        if (coeurPlus === 1) {
          labelCoeurPlus.style.backgroundColor = "rgba(85, 23, 45, 0.5)"
        } else {
          labelCoeurPlus.style.backgroundColor = "silver"
        }
        if (famille === 1) {
          labelFamille.style.backgroundColor = "rgba(85, 23, 45, 0.5)"
        } else {
          labelFamille.style.backgroundColor = "silver"
        }
      }
    }
  })

  for (let index = 0; index < listeCheckbox.length; index++) {
    listeCheckbox[index].addEventListener("change", (event) => {
      if (event.target.value === "hiragana") {
        typeTableau = 0;
      } else {
        typeTableau = 1;
      }
      affichageKanas(flag, niveau1, typeTableau, famille);
    })
  }

  btnApprentissage.addEventListener('change', () => {
    if (btnApprentissage.checked) {
      apprentissage = 1;
    } else {
      apprentissage = 0;
    }
  })

  btnCoeurPlus.addEventListener('change', () => {
    if (btnCoeurPlus.checked) {
      coeurPlus = 1;
    } else {
      coeurPlus = 0;
    }
  })

  btnFamille.addEventListener('change', () => {
    if (btnFamille.checked) {
      famille = 1;
      affichageKanas(flag, niveau1, typeTableau, famille);
    } else {
      famille = 0;
      affichageKanas(flag, niveau1, typeTableau, famille);
    }
  })

  recommencer.addEventListener("click", () => {
    location.reload();
  })

}