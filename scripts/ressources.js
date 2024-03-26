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
// Déclaration des caractères contenant les listes des mots proposés à l'utilisateur
const lettreA = { hiragana: "あ", katakana: "ア", romaji: "a", secondaire: "a", compteur: 0 }
const lettreI = { hiragana: "い", katakana: "イ", romaji: "i", secondaire: "i", compteur: 0 }
const lettreU = { hiragana: "う", katakana: "ウ", romaji: "u", secondaire: "u", compteur: 0 }
const lettreE = { hiragana: "え", katakana: "エ", romaji: "e", secondaire: "e", compteur: 0 }
const lettreO = { hiragana: "お", katakana: "オ", romaji: "o", secondaire: "o", compteur: 0 }
const lettreKa = { hiragana: "か", katakana: "カ", romaji: "ka", secondaire: "ka", compteur: 0 }
const lettreKi = { hiragana: "き", katakana: "キ", romaji: "ki", secondaire: "ki", compteur: 0 }
const lettreKu = { hiragana: "く", katakana: "ク", romaji: "ku", secondaire: "ku", compteur: 0 }
const lettreKe = { hiragana: "け", katakana: "ケ", romaji: "ke", secondaire: "ke", compteur: 0 }
const lettreKo = { hiragana: "こ", katakana: "コ", romaji: "ko", secondaire: "ko", compteur: 0 }
const lettreSa = { hiragana: "さ", katakana: "サ", romaji: "sa", secondaire: "sa", compteur: 0 }
const lettreSi = { hiragana: "し", katakana: "シ", romaji: "shi", secondaire: "shi", compteur: 0 }
const lettreSu = { hiragana: "す", katakana: "ス", romaji: "su", secondaire: "su", compteur: 0 }
const lettreSe = { hiragana: "せ", katakana: "セ", romaji: "se", secondaire: "se", compteur: 0 }
const lettreSo = { hiragana: "そ", katakana: "ソ", romaji: "so", secondaire: "so", compteur: 0 }
const lettreTa = { hiragana: "た", katakana: "タ", romaji: "ta", secondaire: "ta", compteur: 0 }
const lettreTi = { hiragana: "ち", katakana: "チ", romaji: "chi", secondaire: "chi", compteur: 0 }
const lettreTu = { hiragana: "つ", katakana: "ツ", romaji: "tsu", secondaire: "tsu", compteur: 0 }
const lettreTe = { hiragana: "て", katakana: "テ", romaji: "te", secondaire: "te", compteur: 0 }
const lettreTo = { hiragana: "と", katakana: "ト", romaji: "to", secondaire: "to", compteur: 0 }
const lettreNa = { hiragana: "な", katakana: "ナ", romaji: "na", secondaire: "na", compteur: 0 }
const lettreNi = { hiragana: "に", katakana: "ニ", romaji: "ni", secondaire: "ni", compteur: 0 }
const lettreNu = { hiragana: "ぬ", katakana: "ヌ", romaji: "nu", secondaire: "nu", compteur: 0 }
const lettreNe = { hiragana: "ね", katakana: "ネ", romaji: "ne", secondaire: "ne", compteur: 0 }
const lettreNo = { hiragana: "の", katakana: "ノ", romaji: "no", secondaire: "no", compteur: 0 }
const lettreHa = { hiragana: "は", katakana: "ハ", romaji: "ha", secondaire: "wa", compteur: 0 }
const lettreHi = { hiragana: "ひ", katakana: "ヒ", romaji: "hi", secondaire: "hi", compteur: 0 }
const lettreHu = { hiragana: "ふ", katakana: "フ", romaji: "fu", secondaire: "fu", compteur: 0 }
const lettreHe = { hiragana: "へ", katakana: "ヘ", romaji: "he", secondaire: "he", compteur: 0 }
const lettreHo = { hiragana: "ほ", katakana: "ホ", romaji: "ho", secondaire: "ho", compteur: 0 }
const lettreMa = { hiragana: "ま", katakana: "マ", romaji: "ma", secondaire: "ma", compteur: 0 }
const lettreMi = { hiragana: "み", katakana: "ミ", romaji: "mi", secondaire: "mi", compteur: 0 }
const lettreMu = { hiragana: "む", katakana: "ム", romaji: "mu", secondaire: "mu", compteur: 0 }
const lettreMe = { hiragana: "め", katakana: "メ", romaji: "me", secondaire: "me", compteur: 0 }
const lettreMo = { hiragana: "も", katakana: "モ", romaji: "mo", secondaire: "mo", compteur: 0 }
const lettreRa = { hiragana: "ら", katakana: "ラ", romaji: "ra", secondaire: "ra", compteur: 0 }
const lettreRi = { hiragana: "り", katakana: "リ", romaji: "ri", secondaire: "ri", compteur: 0 }
const lettreRu = { hiragana: "る", katakana: "ル", romaji: "ru", secondaire: "ru", compteur: 0 }
const lettreRe = { hiragana: "れ", katakana: "レ", romaji: "re", secondaire: "re", compteur: 0 }
const lettreRo = { hiragana: "ろ", katakana: "ロ", romaji: "ro", secondaire: "ro", compteur: 0 }
const lettreYa = { hiragana: "や", katakana: "ヤ", romaji: "ya", secondaire: "ya", compteur: 0 }
const lettreYu = { hiragana: "ゆ", katakana: "ユ", romaji: "yu", secondaire: "yu", compteur: 0 }
const lettreYo = { hiragana: "ょ", katakana: "ヨ", romaji: "yo", secondaire: "yo", compteur: 0 }
const lettreWa = { hiragana: "わ", katakana: "ワ", romaji: "wa", secondaire: "wa", compteur: 0 }
const lettreWo = { hiragana: "を", katakana: "ヲ", romaji: "wo", secondaire: "o", compteur: 0 }
const lettreN = { hiragana: "ん", katakana: "ン", romaji: "n", secondaire: "n", compteur: 0 }
const lettreGa = { hiragana: "が", katakana: "ガ", romaji: "ga", secondaire: "ga", compteur: 0 }
const lettreGi = { hiragana: "ぎ", katakana: "ギ", romaji: "gi", secondaire: "gi", compteur: 0 }
const lettreGu = { hiragana: "ぐ", katakana: "グ", romaji: "gu", secondaire: "gu", compteur: 0 }
const lettreGe = { hiragana: "げ", katakana: "ゲ", romaji: "ge", secondaire: "ge", compteur: 0 }
const lettreGo = { hiragana: "ご", katakana: "ゴ", romaji: "go", secondaire: "go", compteur: 0 }
const lettreZa = { hiragana: "ざ", katakana: "ザ", romaji: "za", secondaires: "za", compteur: 0 }
const lettreZi = { hiragana: "じ", katakana: "ji", romaji: "ji", secondaires: "ji", compteur: 0 }
const lettreZu = { hiragana: "ず", katakana: "ズ", romaji: "zu", secondaires: "zu", compteur: 0 }
const lettreZe = { hiragana: "ぜ", katakana: "ゼ", romaji: "ze", secondaires: "ze", compteur: 0 }
const lettreZo = { hiragana: "ぞ", katakana: "ゾ", romaji: "zo", secondaires: "zo", compteur: 0 }
const lettreDa = { hiragana: "だ", katakana: "ダ", romaji: "da", secondaires: "da", compteur: 0 }
const lettreDi = { hiragana: "ぢ", katakana: "ヂ", romaji: "ji", secondaires: "ji", compteur: 0 }
const lettreDu = { hiragana: "づ", katakana: "ヅ", romaji: "zu", secondaires: "zu", compteur: 0 }
const lettreDe = { hiragana: "で", katakana: "デ", romaji: "de", secondaires: "de", compteur: 0 }
const lettreDo = { hiragana: "ど", katakana: "ド", romaji: "do", secondaires: "do", compteur: 0 }
const lettreBa = { hiragana: "ば", katakana: "バ", romaji: "ba", secondaires: "ba", compteur: 0 }
const lettreBi = { hiragana: "び", katakana: "ビ", romaji: "bi", secondaires: "bi", compteur: 0 }
const lettreBu = { hiragana: "ぶ", katakana: "ブ", romaji: "bu", secondaires: "bu", compteur: 0 }
const lettreBe = { hiragana: "べ", katakana: "ベ", romaji: "be", secondaires: "be", compteur: 0 }
const lettreBo = { hiragana: "ぼ", katakana: "ボ", romaji: "bo", secondaires: "bo", compteur: 0 }
const lettrePa = { hiragana: "ぱ", katakana: "パ", romaji: "pa", secondaires: "pa", compteur: 0 }
const lettrePi = { hiragana: "ぴ", katakana: "ピ", romaji: "pi", secondaires: "pi", compteur: 0 }
const lettrePu = { hiragana: "ぷ", katakana: "プ", romaji: "pu", secondaires: "pu", compteur: 0 }
const lettrePe = { hiragana: "ぺ", katakana: "ペ", romaji: "pe", secondaires: "pe", compteur: 0 }
const lettrePo = { hiragana: "ぽ", katakana: "ポ", romaji: "po", secondaires: "po", compteur: 0 }


// Déclaration des tables contenant les listes des caractères proposés à l'utilisateur
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