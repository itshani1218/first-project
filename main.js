const names=['PAKIZA','MUHAMMAD','AZKA']
const getname=document.getElementById("names")
 let i=0
function nameR() {
    if (i===0){
        getname.textContent='PAKIZA'
        i++
    } else if (i===1){
        getname.textContent='MUHAMMAD'
        i++
    } else {
        getname.textContent='AZKA'
        i=0
    }
}
setInterval (nameR,1000);