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
function levelUp(table) {

  if (compteur >= table.length - 1) {
    sonUp.play();
    niveau++;
    compteur = 0;
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
    melange();
  } else {
    compteur++;
  }
}


/**
 * Affiche les caractères proposés à l'utilisateur, elle a besoin du flag, du tableau principale, et de son type
 */
function affichageKanas(affichage, table, type) {
  if (type === 0) {
    // Affichage des hiraganas
    affichage.innerHTML = table[compteur].hiragana;
  } else {
    // Affichage des katakanas
    affichage.innerHTML = table[compteur].katakana;
  }

}

/**
 * Vérifie si le caractère tapé par l'utilisateur est le bon, elle a besoin de la saisie de l'utilisateur, du tableau, de son type, et le nombre de bonne réponse
 * @param {string} saisie - La saisie de l'utilisateur 
 */
function verify(input, kana, type, nombre) {
  let divErreurs = document.getElementById("erreurs");

  if (input.value.toLowerCase() === kana[compteur].romaji) {
    sonWin.play();
    sonWin.volume = 0.8;
    score += niveau;
    nombre++;
    return nombre;
  } else {
    sonLoose.play();
    sonLoose.volume = 0.8;
    compteurErreurs++;
    input.x += 100;
    if (compteurErreurs > 1) {
      divErreurs.innerHTML += '<br>';
    }
    if (type === 0) {
      divErreurs.innerHTML += '🩶 Erreur ' + compteurErreurs + ' : "' + kana[compteur].hiragana + '" (' + kana[compteur].romaji + '), vous avez saisi "' + input.value + '"';
    } else {
      divErreurs.innerHTML += '🩶 Erreur ' + compteurErreurs + ' : "' + kana[compteur].katakana + '" (' + kana[compteur].romaji + '), vous avez saisi "' + input.value + '"';
    }
    pv--;
    return nombre;
  }
}

/**
 * Fonction pour afficher les résultat de la partie
 * Elle a besoin de l'ancien caractère affiché, le type de tableau et le nombre de bonne réponse
 */
function affichageResult(kanaOld, type, nombre) {
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
  spanScore.innerHTML = score + '. Caractères trouvés : ' + nombre;
  if (type === 0) {
    precedent.innerHTML = "Kana précédent : " + kanaOld.hiragana;
  } else {
    precedent.innerHTML = "Kana précédent : " + kanaOld.katakana;
  }

}

function verifGameOver(input, affichage, bouton) {
  if (pv <= 0) {
    sonMort.play();
    sonGOver.play();
    input.value = "死";
    input.disabled = true;
    affichage.innerHTML = "<span title='kanji Mort'>死</span>";
    bouton.textContent = "Game Over";
    bouton.disabled = true;
  }
}

function jouons(tableauType, nbSyllabes, drapeau, btnValider, saisiePerso) {
  let kanaTemp = ""; // Ancien caractère affiché

  nbSyllabes = verify(saisiePerso, niveau1, tableauType, nbSyllabes);
  kanaTemp = niveau1[compteur];
  levelUp(niveau1);
  affichageKanas(drapeau, niveau1, tableauType);
  affichageResult(kanaTemp, tableauType, nbSyllabes);
  saisie.value = "";
  verifGameOver(saisiePerso, drapeau, btnValider);
  console.log("Pv : " + pv);
}

/**
 * Fonction principale
 */
function lancerJeu() {
  // Initialisation des variables  
  let nbCaracteres = 0; // Nombre de caractères/syllabes japonaises trouvés
  let typeTableau = 0; // Type de tableau, 0 = hiragana, 1 = katakana
  let saisie = document.getElementById("saisie"); // Saisie de l'utilisateur
  let timer = document.getElementById("timer"); // Timer qui s'activera après le niveau 14
  let flag = document.getElementById("flag"); // Affichage du caractère à traduire
  let valider = document.getElementById("valider"); //Bouton Fight !
  let listeCheckbox = document.querySelectorAll("#buttons input"); // Choix Hiragana ou Katakana
  let recommencer = document.getElementById("recommencer");

  affichageKanas(flag, niveau1, typeTableau);

  valider.addEventListener("click", () => {
    jouons(typeTableau, nbCaracteres, flag, valider, saisie);
  })
  saisie.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
      jouons(typeTableau, nbCaracteres, flag, valider, saisie);
    }
  })

  for (let index = 0; index < listeCheckbox.length; index++) {
    listeCheckbox[index].addEventListener("change", (event) => {
      if (event.target.value === "hiragana") {
        typeTableau = 0;
      } else {
        typeTableau = 1;
      }
      affichageKanas(flag, niveau1, typeTableau);
    })

    recommencer.addEventListener("click", () => {
      location.reload();
    })
  }

}