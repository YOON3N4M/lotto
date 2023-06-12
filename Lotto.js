export default class Lotto {
    constructor(target){
        this.target = target;
        this.numArr;
        this.gameArr = []
        this.selectedNumArr = [];
        this.setNumArr();
        this.init();
    }
    
    init() {
        this.template();
        this.render();
        this.addEvent();
    
     }

     render() {
        this.target.innerHTML = this.template();
     }

     template(){
        
        return`
        <ul class="num-ul">
        ${this.selectedNumArr.map((num)=>`<li>${num}</li>`).join("")}
        </ul>
        <button class="get-six-number">6개 번호 한번에 받기 (1게임)</button>
        <ul>
        <span>현재(${this.gameArr.length}게임)</span>
        ${this.gameArr.map((arr)=>`<li>${arr}</li>` ).join("")}
        </ul>
        `
     }

     addEvent(){
        const getSixNumBtn = document.querySelector(".get-six-number")
        console.log(getSixNumBtn)
        getSixNumBtn.addEventListener("click", ()=> {this.getSixNum()});
     }

    setNumArr(){
        let numArrTemp = []
        // 1~45
        for(var i = 1; i<46;i++){
            numArrTemp.push(i);
        }
        this.numArr = numArrTemp
    }

    
    getSixNum(){
       let sixNumArrTemp = []
       while(true){
               const numTemp = this.getNum()
               const isDuple = sixNumArrTemp.includes(numTemp)
               if(!isDuple){
                sixNumArrTemp.push(numTemp)
               }
        if(sixNumArrTemp.length === 6){
            this.selectedNumArr = sixNumArrTemp
            this.gameArr.push(sixNumArrTemp)
            break;
        }
    }
    this.init()
    }

    getNum(){
        return this.numArr[Math.floor(Math.random() * this.numArr.length)]
    }
}