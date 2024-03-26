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
    niveau++;
    compteur = 0;
    if(pv <= 2 && pv > 0 && cheat2 === 1) {
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
        if(apprentissage.checked === false) {
          console.log("Omae wa mou shindeiru !")
        }
    }
    if(cheat1 === 0){
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

  if(cheat3 === 1) {
    if(table[compteur] === lettreA || table[compteur] === lettreI || table[compteur] === lettreU || table[compteur] === lettreE || table[compteur] === lettreO ){
      spanFamille.innerHTML = 'Famille : a, i, u, e, o';
    }
    if(table[compteur] === lettreKa || table[compteur] === lettreKi || table[compteur] === lettreKu || table[compteur] === lettreKe || table[compteur] === lettreKo ){
      spanFamille.innerHTML = 'Famille : ka, ki, ku, ke, ko';
    }
    if(table[compteur] === lettreSa || table[compteur] === lettreSi || table[compteur] === lettreSu || table[compteur] === lettreSe || table[compteur] === lettreSo ){
      spanFamille.innerHTML = 'Famille : sa, shi, su, se, so';
    }
    if(table[compteur] === lettreTa || table[compteur] === lettreTi || table[compteur] === lettreTu || table[compteur] === lettreTe || table[compteur] === lettreTo ){
      spanFamille.innerHTML = 'Famille : ta, chi, tsu, te, to';
    }
    if(table[compteur] === lettreNa || table[compteur] === lettreNi || table[compteur] === lettreNu || table[compteur] === lettreNe || table[compteur] === lettreNo ){
      spanFamille.innerHTML = 'Famille : na, ni, nu, ne, no';
    }
    if(table[compteur] === lettreHa || table[compteur] === lettreHi || table[compteur] === lettreHu || table[compteur] === lettreHe || table[compteur] === lettreHo ){
      spanFamille.innerHTML = 'Famille : ha, hi, fu, he, ho';
    }
    if(table[compteur] === lettreMa || table[compteur] === lettreMi || table[compteur] === lettreMu || table[compteur] === lettreMe || table[compteur] === lettreMo ){
      spanFamille.innerHTML = 'Famille : ma, mi, mu, me, mo';
    }
    if(table[compteur] === lettreRa || table[compteur] === lettreRi || table[compteur] === lettreRu || table[compteur] === lettreRe || table[compteur] === lettreRo ){
      spanFamille.innerHTML = 'Famille : ra, ri, ru, re, ro';
    }
    if(table[compteur] === lettreYa || table[compteur] === lettreYu || table[compteur] === lettreYo || table[compteur] === lettreWa || table[compteur] === lettreWo || table[compteur] === lettreN ){
      spanFamille.innerHTML = 'Famille : ya, yu, o, wa, wo, n';
    }
    if(table[compteur] === lettreGa || table[compteur] === lettreGi || table[compteur] === lettreGu || table[compteur] === lettreGe || table[compteur] === lettreGo ){
      spanFamille.innerHTML = 'Famille : ga, gi, gu, ge, go';
    }
    if(table[compteur] === lettreZa || table[compteur] === lettreZi || table[compteur] === lettreZu || table[compteur] === lettreZe || table[compteur] === lettreZo ){
      spanFamille.innerHTML = 'Famille : za, ji, zu, ze, zo';
    }
    if(table[compteur] === lettreDa || table[compteur] === lettreDi || table[compteur] === lettreDu || table[compteur] === lettreDe || table[compteur] === lettreDo ){
      spanFamille.innerHTML = 'Famille : da, ji, zu, de, do';
    }
    if(table[compteur] === lettreBa || table[compteur] === lettreBi || table[compteur] === lettreBu || table[compteur] === lettreBe || table[compteur] === lettreBo ){
      spanFamille.innerHTML = 'Famille : ba, bi, bu, be, bo';
    }
    if(table[compteur] === lettrePa || table[compteur] === lettrePi || table[compteur] === lettrePu || table[compteur] === lettrePe || table[compteur] === lettrePo ){
      spanFamille.innerHTML = 'Famille : pa, pi, pu, pe, po';
    }
  }else{
    spanFamille.innerHTML = '';
  }

}

/**
 * Vérifie si le caractère tapé par l'utilisateur est le bon, elle a besoin de la saisie de l'utilisateur, du tableau, de son type, et le nombre de bonne réponse
 * @param {string} saisie - La saisie de l'utilisateur 
 */
function verify(input, kana, type, cheat1, cheat2, cheat3) {
  let divErreurs = document.getElementById("erreurs");
  let scoreCheat = cheat1 + cheat2 + cheat3;

  if (input.value.toLowerCase() === kana[compteur].romaji) {
    sonWin.play();
    sonWin.volume = 0.8;
    if(scoreCheat === 0) {
        score += niveau;
    }else{
        score += (niveau / scoreCheat);
    }
    nbSyllabesTrouvees++;
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
    sonGOver.play();
    input.value = "死";
    input.disabled = true;
    affichage.innerHTML = "<span title='kanji Mort'>死</span>";
    bouton.textContent = "Game Over";
    bouton.disabled = true;
  }
}

function jouons(tableauType, drapeau, btnValider, saisiePerso, triche1, triche2, triche3) {
  let kanaTemp = ""; // Ancien caractère affiché

  verify(saisiePerso, niveau1, tableauType, triche1, triche2, triche3);
  kanaTemp = niveau1[compteur];
  levelUp(niveau1, triche1, triche2);
  affichageKanas(drapeau, niveau1, tableauType, triche3);
  affichageResult(kanaTemp, tableauType);
  saisie.value = "";
  verifGameOver(saisiePerso, drapeau, btnValider);
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
    if(saisie.value !== "") {
      jouons(typeTableau, flag, valider, saisie, apprentissage, coeurPlus, famille);
      btnApprentissage.disabled = "disabled";
      btnCoeurPlus.disabled = "disabled";
      btnFamille.disabled = "disabled";
      if(apprentissage === 1) {
        labelApprentissage.style.backgroundColor = "rgba(85, 23, 45, 0.5)"
      }else{
        labelApprentissage.style.backgroundColor = "silver"
      }
      if(coeurPlus === 1) {
        labelCoeurPlus.style.backgroundColor = "rgba(85, 23, 45, 0.5)"
      }else{
        labelCoeurPlus.style.backgroundColor = "silver"
      }
      if(famille === 1) {
        labelFamille.style.backgroundColor = "rgba(85, 23, 45, 0.5)"
      }else{
        labelFamille.style.backgroundColor = "silver"
      }
    }
  })
  saisie.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
      saisie.value = saisie.value.trim();
      if(saisie.value !== "") {
        jouons(typeTableau, flag, valider, saisie, apprentissage, coeurPlus, famille);
        btnApprentissage.disabled = "disabled";
        btnCoeurPlus.disabled = "disabled";
        btnFamille.disabled = "disabled";
        if(apprentissage === 1) {
          labelApprentissage.style.backgroundColor = "rgba(85, 23, 45, 0.5)"
        }else{
          labelApprentissage.style.backgroundColor = "silver"
        }
        if(coeurPlus === 1) {
          labelCoeurPlus.style.backgroundColor = "rgba(85, 23, 45, 0.5)"
        }else{
          labelCoeurPlus.style.backgroundColor = "silver"
        }
        if(famille === 1) {
          labelFamille.style.backgroundColor = "rgba(85, 23, 45, 0.5)"
        }else{
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
  
  btnApprentissage.addEventListener('change', () =>{
    if(btnApprentissage.checked){
      apprentissage = 1;
    }else{
      apprentissage = 0;
    }
  })
  
  btnCoeurPlus.addEventListener('change', () =>{
    if(btnCoeurPlus.checked){
      coeurPlus = 1;
    }else{
      coeurPlus = 0;
    }
  })
  
  btnFamille.addEventListener('change', () =>{
    if(btnFamille.checked){
      famille = 1;
      affichageKanas(flag, niveau1, typeTableau, famille);
    }else{
      famille = 0;
      affichageKanas(flag, niveau1, typeTableau, famille);
    }
  })

  recommencer.addEventListener("click", () => {
    location.reload();
  })

}
