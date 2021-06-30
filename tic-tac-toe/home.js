let cnt=0;
document.querySelector("#butt").addEventListener("click",update);
let tile=document.querySelectorAll(".c");
let clone=tile;
let game=new Array(9).fill(null);
let winner=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
function decideWinner(g){
    for(combination of winner){
        const [a,b,c]=combination;
        if(g[a]=="X"){
            if(g[a]==g[b]&&g[a]==g[c]&&g[c]==g[b]){
                tile[a].style.color="yellow";
                tile[b].style.color="yellow";
                tile[c].style.color="yellow";
                return 1;
            }
        }
        if(g[a]=="O"){
            if(g[a]==g[b]&&g[a]==g[c]&&g[c]==g[b]){
                tile[a].style.color="yellow";
                tile[b].style.color="yellow";
                tile[c].style.color="yellow";
                return 2;
            }
        }
    }
    return 0;
}
clone.forEach((t)=>{
    t.addEventListener("click",()=>{
        if(t.textContent==""&&decideWinner(game)!=1&&decideWinner(game)!=2){
            makeMove(t.dataset.index);
        }
        else if(decideWinner(game)==1){
            console.log("X");
        }
        else if(decideWinner(game)==2){
            console.log("O");
        }
    })
})
function update(){
    cnt=0;
    for(let i=0;i<tile.length;i++){
        tile[i].textContent="";
        game[i]=null;
    }
}
function makeMove(i){
    if(cnt%2==0){
        tile[i].textContent="X";
        game[i]="X";
        tile[i].style.color="red";
        cnt++;
    }
    else if(cnt%2){
        tile[i].textContent="O"; 
        tile[i].style.color="blue";
        game[i]="O";
        cnt++;
    } 
}