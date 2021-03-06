///USER DEFINED FUNCTIONS

function getWords(text) {
    //REMOVE ALL WEIRD CHARACTERS FROM TEXT
    text = text.replace(/\./g, '')
    text = text.replace(/:/g, '')
    text = text.replace(/,/g, '')
    text = text.toLowerCase()

    //CONVERT TEXT TO ARRAY
    let words = text.split(' ')
    //SORT ARRAY IN ALPHA ORDER
    words.sort()
    //RETURN ARRAY
    return words

}
function getUniqueWords(words) {
    //CREATE EMPTY ARRAY TO STORE UNIQUE WORDS W/IN
    let uniqueWords = []
    //LOOP THRU WORDS & EXTRACT ONLY UNIQUE OCCRENCES OF THOSE WORDS
    for (let i = 0; i < words.length; i++) {
        if (words[i] !== words[i - 1]) {
            uniqueWords.push(words[i])
        }
    }
    //RETURN ARRAY OF UNIQUE WORDS
    return uniqueWords
}
function init() {
    let text = 'With innovative approaches and advanced methodologies, Vecta Corporation provides scalable business solutions to help companies achieve success through revenue increase, cost management, and user satisfaction. Our approach stems from the three most important business growth aspects: helping companies reach prospects, assist in converting prospects to customers, and assist in retaining those customers. This is accomplished through our interactive solutions and expertise in providing a memorable and positive user experience.'
    
    console.log('Welcome to the WordList Application!\n\n')

    //GET WORDS
    let words = getWords(text)

    //GET UNIQUE WORDS
    let uniqueWords = getUniqueWords(words)

    //DISPLAY NUMBER OF WORDS & UNIQUE WORDS
    console.log(`Number of words: ${words.length}`)
    console.log(`Number of unique words: ${uniqueWords.length}`)

    //DISPLAY WORDS & THEIR COUNTS
    console.log(`Unique word occurences:`)
    for (let word of uniqueWords) {
        console.log(`${word}\n`)
    }
}
init()