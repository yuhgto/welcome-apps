const english = [
  "aboard",
  "about",
  "above",
  "across",
  "after",
  "against",
  "along",
  "amid",
  "among",
  "anti",
  "around",
  "as",
  "at",
  "before",
  "behind",
  "below",
  "beneath",
  "beside",
  "besides",
  "between",
  "beyond",
  "but",
  "by",
  "concerning",
  "considering",
  "despite",
  "down",
  "during",
  "except",
  "excepting",
  "excluding",
  "following",
  "for",
  "from",
  "in",
  "inside",
  "into",
  "like",
  "minus",
  "near",
  "of",
  "off",
  "on",
  "onto",
  "opposite",
  "outside",
  "over",
  "past",
  "per",
  "plus",
  "regarding",
  "round",
  "save",
  "since",
  "than",
  "through",
  "to",
  "toward",
  "towards",
  "under",
  "underneath",
  "unlike",
  "until",
  "up",
  "upon",
  "versus",
  "via",
  "with",
  "within",
  "all",
  "another",
  "any",
  "anybody",
  "anyone",
  "anything",
  "as",
  "aught",
  "both",
  "each",
  "each other",
  "either",
  "enough",
  "everybody",
  "everyone",
  "everything",
  "few",
  "he",
  "her",
  "hers",
  "herself",
  "him",
  "himself",
  "his",
  "I",
  "idem",
  "it",
  "its",
  "itself",
  "many",
  "me",
  "mine",
  "most",
  "my",
  "myself",
  "naught",
  "neither",
  "no one",
  "nobody",
  "none",
  "nothing",
  "nought",
  "one",
  "one another",
  "other",
  "others",
  "ought",
  "our",
  "ours",
  "ourself",
  "ourselves",
  "several",
  "she",
  "some",
  "somebody",
  "someone",
  "something",
  "somewhat",
  "such",
  "suchlike",
  "that",
  "thee",
  "their",
  "theirs",
  "theirself",
  "theirselves",
  "them",
  "themself",
  "themselves",
  "there",
  "these",
  "they",
  "thine",
  "this",
  "those",
  "thou",
  "thy",
  "thyself",
  "us",
  "we",
  "what",
  "whatever",
  "whatnot",
  "whatsoever",
  "whence",
  "where",
  "whereby",
  "wherefrom",
  "wherein",
  "whereinto",
  "whereof",
  "whereon",
  "wherever",
  "wheresoever",
  "whereto",
  "whereunto",
  "wherewith",
  "wherewithal",
  "whether",
  "which",
  "whichever",
  "whichsoever",
  "who",
  "whoever",
  "whom",
  "whomever",
  "whomso",
  "whomsoever",
  "whose",
  "whosever",
  "whosesoever",
  "whoso",
  "whosoever",
  "ye",
  "yon",
  "yonder",
  "you",
  "your",
  "yours",
  "yourself",
  "yourselves",
  "i",
  "me",
  "my",
  "myself",
  "we",
  "our",
  "ours",
  "ourselves",
  "you",
  "your",
  "yours",
  "yourself",
  "yourselves",
  "he",
  "him",
  "his",
  "himself",
  "she",
  "her",
  "hers",
  "herself",
  "it",
  "its",
  "itself",
  "they",
  "them",
  "their",
  "theirs",
  "themselves",
  "what",
  "which",
  "who",
  "whom",
  "this",
  "that",
  "these",
  "those",
  "am",
  "is",
  "are",
  "was",
  "were",
  "be",
  "been",
  "being",
  "have",
  "has",
  "had",
  "having",
  "do",
  "does",
  "did",
  "doing",
  "a",
  "an",
  "the",
  "and",
  "but",
  "if",
  "or",
  "because",
  "as",
  "until",
  "while",
  "of",
  "at",
  "by",
  "for",
  "with",
  "about",
  "against",
  "between",
  "into",
  "through",
  "during",
  "before",
  "after",
  "above",
  "below",
  "to",
  "from",
  "up",
  "down",
  "in",
  "out",
  "on",
  "off",
  "over",
  "under",
  "again",
  "further",
  "then",
  "once",
  "here",
  "there",
  "when",
  "where",
  "why",
  "how",
  "all",
  "any",
  "both",
  "each",
  "few",
  "more",
  "most",
  "other",
  "some",
  "such",
  "no",
  "nor",
  "not",
  "only",
  "own",
  "same",
  "so",
  "than",
  "too",
  "very",
  "s",
  "t",
  "can",
  "will",
  "just",
  "don",
  "should",
  "now"
];

const spanish = [
  "a",
  "bajo",
  "contra",
  "desde",
  "en",
  "hacia",
  "para",
  "según",
  "sobre",
  "ante",
  "con",
  "de",
  "detrás (de)",
  "entre",
  "hasta",
  "por",
  "sin",
  "tras"
];

const german = [
  "Bis",
  "Durch",
  "Entlang",
  "Für",
  "Gegen",
  "Ohne",
  "Um",
  "Aus",
  "Bei",
  "Mit",
  "Nach",
  "Seit",
  "Von",
  "Zu",
  "An",
  "Auf",
  "Hinter",
  "In",
  "Neben"
];

const words = [...english, ...spanish, ...german];

export const stopWords = {};
words.forEach(word => (stopWords[word] = true));