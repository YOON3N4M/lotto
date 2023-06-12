import Lotto from "./Lotto.js";

class App {
    constructor(){
        const target = document.querySelector(".lotto-container");
        console.log()
        new Lotto(target);
    }
}

new App