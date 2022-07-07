export const translate = (englishWord, language) => {

    const frenchDictionary = { hello: "bonjour", bye: "au revoir", food: "aliments", car: "auto"};
    const spanishDictionary = { hello: "hola", bye: "adios", food: "comida", car: "coche"};

    if (language == "french") return frenchDictionary[englishWord]
    else if (language == "spanish") return spanishDictionary[englishWord]
    
}
