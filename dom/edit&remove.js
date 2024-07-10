const addNewHero =  (heroName) => {
    let li = document.createElement("li");
    li.appendChild(document.createTextNode(heroName))
    document.querySelector(".marvelHeroes").appendChild(li)
}

addNewHero("thor")