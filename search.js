const query = document.getElementById('query');
const search = document.getElementById('search');
const results = document.getElementById('results');
const phrasesHTMLCollection = results.children;
let phrases = [];
for (let i = 0; i < phrasesHTMLCollection.length; i++) {
    phrases.push(phrasesHTMLCollection[i].textContent);
}
let newPhrases = [];
search.addEventListener('click', () => {
    results.innerHTML = "";
    newPhrases = [];
    for (let i = 0; i < phrases.length; i++) {
        if (phrases[i].toUpperCase().includes(query.value.toUpperCase())) {
            newPhrases.push(phrases[i]);
        }
    }
    for (let i = 0; i < newPhrases.length; i++) {
        let listItem = document.createElement('li');
        listItem.textContent = newPhrases[i];
        results.append(listItem);
    }
});