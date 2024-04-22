/*********************************************************************************
 * 
 * Ce fichier contient toutes les constantes nécessaires au fonctionnement du jeu.
 * Les listes de caractères proposés à l'utilisateur
 * 
 *********************************************************************************/


let score = 0
let compteur = 0
let compteurErreurs = 0
let niveau = 1
let nbSyllabesTrouvees = 0
let pv = 3; // Nombre de vies, si ce compteur tombe à 0, le jeu s'arrête
// Sons
const volume = document.querySelector("#volume");
const sonUp = new Audio("sounds/nani.mp3");
const sonMort = new Audio("sounds/omae.mp3")
const sonGOver = new Audio("sounds/gameover.ogg");
const sonWin = new Audio("sounds/Sword4.m4a");
const sonLoose = new Audio("sounds/Buzzer1.m4a")
// Déclaration des compteurs de caractère réussis
lettreA = 0 
lettreI = 0 
lettreU = 0 
lettreE = 0 
lettreO = 0 
lettreKa = 0 
lettreKi = 0 
lettreKu = 0 
lettreKe = 0 
lettreKo = 0 
lettreSa = 0 
lettreSi = 0 
lettreSu = 0 
lettreSe = 0 
lettreSo = 0 
lettreTa = 0 
lettreTi = 0 
lettreTu = 0 
lettreTe = 0 
lettreTo = 0 
lettreNa = 0 
lettreNi = 0 
lettreNu = 0 
lettreNe = 0 
lettreNo = 0 
lettreHa = 0 
lettreHi = 0 
lettreHu = 0 
lettreHe = 0 
lettreHo = 0
lettreMa = 0 
lettreMi = 0 
lettreMu = 0 
lettreMe = 0 
lettreMo = 0 
lettreRa = 0 
lettreRi = 0 
lettreRu = 0 
lettreRe = 0 
lettreRo = 0 
lettreYa = 0 
lettreYu = 0 
lettreYo = 0 
lettreWa = 0 
lettreWo = 0 
lettreN = 0 
lettreGa = 0 
lettreGi = 0 
lettreGu = 0 
lettreGe = 0 
lettreGo = 0 
lettreZa = 0 
lettreZi = 0 
lettreZu = 0 
lettreZe = 0 
lettreZo = 0 
lettreDa = 0 
lettreDi = 0 
lettreDu = 0 
lettreDe = 0 
lettreDo = 0 
lettreBa = 0 
lettreBi = 0 
lettreBu = 0 
lettreBe = 0 
lettreBo = 0 
lettrePa = 0 
lettrePi = 0 
lettrePu = 0 
lettrePe = 0 
lettrePo = 0 


// Déclaration des tables contenant les listes des caractères proposés à l'utilisateur
const niveau1origine = [
  lettreA, lettreI, lettreU, lettreE, lettreO
]

const niveau1 = [
  lettreA, lettreI, lettreU, lettreE, lettreO
]

const niveau2 = [
  lettreKa, lettreKi, lettreKu, lettreKe, lettreKo
]

const niveau3 = [
  lettreSa, lettreSi, lettreSu, lettreSe, lettreSo
]

const niveau4 = [
  lettreTa, lettreTi, lettreTu, lettreTe, lettreTo
]

const niveau5 = [
  lettreNa, lettreNi, lettreNu, lettreNe, lettreNo
]

const niveau6 = [
  lettreHa, lettreHi, lettreHu, lettreHe, lettreHo
]

const niveau7 = [
  lettreMa, lettreMi, lettreMu, lettreMe, lettreMo
]

const niveau8 = [
  lettreRa, lettreRi, lettreRu, lettreRe, lettreRo
]

const niveau9 = [
  lettreYa, lettreYu, lettreYo, lettreWa, lettreWo, lettreN
]

const niveau10 = [
  lettreGa, lettreGi, lettreGu, lettreGe, lettreGo
]

const niveau11 = [
  lettreZa, lettreZi, lettreZu, lettreZe, lettreZo
]

const niveau12 = [
  lettreDa, lettreDi, lettreDu, lettreDe, lettreDo
]

const niveau13 = [
  lettreBa, lettreBi, lettreBu, lettreBe, lettreBo
]

const niveau14 = [
  lettrePa, lettrePi, lettrePu, lettrePe, lettrePo
]