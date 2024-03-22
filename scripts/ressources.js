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
let pv = 3; // Nombre de vies, si ce compteur tombe à 0, le jeu s'arrête
// Sons
const sonUp = new Audio("sounds/nani.mp3");
const sonMort = new Audio("sounds/omae.mp3")
const sonGOver = new Audio("sounds/gameover.ogg");
const sonWin = new Audio("sounds/Sword4.m4a");
const sonLoose = new Audio("sounds/Buzzer1.m4a")
// Déclaration des caractères contenant les listes des mots proposés à l'utilisateur
const lettreA = { hiragana: "あ", katakana: "ア", romaji: "a", secondaire: "a" }
const lettreE = { hiragana: "え", katakana: "エ", romaji: "e", secondaire: "e" }
const lettreU = { hiragana: "う", katakana: "ウ", romaji: "u", secondaire: "u" }
const lettreO = { hiragana: "お", katakana: "オ", romaji: "o", secondaire: "o" }
const lettreI = { hiragana: "い", katakana: "イ", romaji: "i", secondaire: "i" }
const lettreKa = { hiragana: "か", katakana: "カ", romaji: "ka", secondaire: "ka" }
const lettreKe = { hiragana: "け", katakana: "ケ", romaji: "ke", secondaire: "ke" }
const lettreKu = { hiragana: "く", katakana: "ク", romaji: "ku", secondaire: "ku" }
const lettreKo = { hiragana: "こ", katakana: "コ", romaji: "ko", secondaire: "ko" }
const lettreKi = { hiragana: "き", katakana: "キ", romaji: "ki", secondaire: "ki" }
const lettreSa = { hiragana: "さ", katakana: "サ", romaji: "sa", secondaire: "sa" }
const lettreSe = { hiragana: "せ", katakana: "セ", romaji: "se", secondaire: "se" }
const lettreSu = { hiragana: "す", katakana: "ス", romaji: "su", secondaire: "su" }
const lettreSo = { hiragana: "そ", katakana: "ソ", romaji: "so", secondaire: "so" }
const lettreSi = { hiragana: "し", katakana: "シ", romaji: "shi", secondaire: "shi" }
const lettreTa = { hiragana: "た", katakana: "タ", romaji: "ta", secondaire: "ta" }
const lettreTe = { hiragana: "て", katakana: "テ", romaji: "te", secondaire: "te" }
const lettreTo = { hiragana: "と", katakana: "ト", romaji: "to", secondaire: "to" }
const lettreTi = { hiragana: "ち", katakana: "チ", romaji: "chi", secondaire: "chi" }
const lettreTu = { hiragana: "つ", katakana: "ツ", romaji: "tsu", secondaire: "tsu" }
const lettreNa = { hiragana: "な", katakana: "ナ", romaji: "na", secondaire: "na" }
const lettreNe = { hiragana: "ね", katakana: "ネ", romaji: "ne", secondaire: "ne" }
const lettreNu = { hiragana: "ぬ", katakana: "ヌ", romaji: "nu", secondaire: "nu" }
const lettreNo = { hiragana: "の", katakana: "ノ", romaji: "no", secondaire: "no" }
const lettreNi = { hiragana: "に", katakana: "ニ", romaji: "ni", secondaire: "ni" }
const lettreHa = { hiragana: "は", katakana: "ハ", romaji: "ha", secondaire: "wa" }
const lettreHe = { hiragana: "へ", katakana: "ヘ", romaji: "he", secondaire: "he" }
const lettreHu = { hiragana: "ふ", katakana: "フ", romaji: "fu", secondaire: "fu" }
const lettreHo = { hiragana: "ほ", katakana: "ホ", romaji: "ho", secondaire: "ho" }
const lettreHi = { hiragana: "ひ", katakana: "ヒ", romaji: "hi", secondaire: "hi" }
const lettreMa = { hiragana: "ま", katakana: "マ", romaji: "ma", secondaire: "ma" }
const lettreMe = { hiragana: "め", katakana: "メ", romaji: "me", secondaire: "me" }
const lettreMu = { hiragana: "む", katakana: "ム", romaji: "mu", secondaire: "mu" }
const lettreMo = { hiragana: "も", katakana: "モ", romaji: "mo", secondaire: "mo" }
const lettreMi = { hiragana: "み", katakana: "ミ", romaji: "mi", secondaire: "mi" }
const lettreRa = { hiragana: "ら", katakana: "ラ", romaji: "ra", secondaire: "ra" }
const lettreRe = { hiragana: "れ", katakana: "レ", romaji: "re", secondaire: "re" }
const lettreRu = { hiragana: "る", katakana: "ル", romaji: "ru", secondaire: "ru" }
const lettreRo = { hiragana: "ろ", katakana: "ロ", romaji: "ro", secondaire: "ro" }
const lettreRi = { hiragana: "り", katakana: "リ", romaji: "ri", secondaire: "ri"}
const lettreYa = { hiragana: "や", katakana: "ヤ", romaji: "ya", secondaire: "ya" }
const lettreYu = { hiragana: "ゆ", katakana: "ユ", romaji: "yu", secondaire: "yu" }
const lettreYo = { hiragana: "ょ", katakana: "ヨ", romaji: "yo", secondaire: "yo" }
const lettreWa = { hiragana: "わ", katakana: "ワ", romaji: "wa", secondaire: "wa" }
const lettreWo = { hiragana: "を", katakana: "ヲ", romaji: "wo", secondaire: "o" }
const lettreN = { hiragana: "ん", katakana: "ン", romaji: "n", secondaire: "n" }
const lettreGa = { hiragana: "が", katakana: "ガ", romaji: "ga", secondaire: "ga" }
const lettreGe = { hiragana: "げ", katakana: "ゲ", romaji: "ge", secondaire: "ge" }
const lettreGu = { hiragana: "ぐ", katakana: "グ", romaji: "gu", secondaire: "gu" }
const lettreGo = { hiragana: "ご", katakana: "ゴ", romaji: "go", secondaire: "go" }
const lettreGi = { hiragana: "ぎ", katakana: "ギ", romaji: "gi", secondaire: "gi" }
const lettreZa = { hiragana: "ざ", katakana: "ザ", romaji: "za", secondaires: "za" }
const lettreZe = { hiragana: "ぜ", katakana: "ゼ", romaji: "ze", secondaires: "ze" }
const lettreZu = { hiragana: "ぞ", katakana: "ズ", romaji: "zu", secondaires: "zu" }
const lettreZo = { hiragana: "ぞ", katakana: "ズ", romaji: "zo", secondaires: "zo" }
const lettreZi = { hiragana: "ぎ", katakana: "ギ", romaji: "ji", secondaires: "ji" }
const lettreDa = { hiragana: "だ", katakana: "ダ", romaji: "da", secondaires: "da" }
const lettreDe = { hiragana: "で", katakana: "デ", romaji: "de", secondaires: "de" }
const lettreDo = { hiragana: "ど", katakana: "ド", romaji: "do", secondaires: "do" }
const lettreDi = { hiragana: "ぢ", katakana: "ヂ", romaji: "ji", secondaires: "ji" }
const lettreDu = { hiragana: "づ", katakana: "ヅ", romaji: "zu", secondaires: "zu" }
const lettreBa = { hiragana: "ば", katakana: "バ", romaji: "ba", secondaires: "ba" }
const lettreBe = { hiragana: "べ", katakana: "ベ", romaji: "be", secondaires: "be" }
const lettreBu = { hiragana: "ぶ", katakana: "ブ", romaji: "bu", secondaires: "bu" }
const lettreBo = { hiragana: "ぼ", katakana: "ボ", romaji: "bo", secondaires: "bo" }
const lettreBi = { hiragana: "び", katakana: "ビ", romaji: "bi", secondaires: "bi" }
const lettrePa = { hiragana: "ぱ", katakana: "パ", romaji: "pa", secondaires: "pa" }
const lettrePe = { hiragana: "ぺ", katakana: "ペ", romaji: "pe", secondaires: "pe" }
const lettrePu = { hiragana: "ぷ", katakana: "プ", romaji: "pu", secondaires: "pu" }
const lettrePo = { hiragana: "ぽ", katakana: "ポ", romaji: "po", secondaires: "po" }
const lettrePi = { hiragana: "ぴ", katakana: "ピ", romaji: "pi", secondaires: "pi" }


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