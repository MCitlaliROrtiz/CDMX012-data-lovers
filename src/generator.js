
export default function generatorHtml(card){
    return `<article class="item"><img src="${card.poster}">
    <h2>${card.title}(${card.release_date})</h2>
    <h3>${card.rt_score}</h3></article>`
}