function getvalue(num) {
    document.getElementById('screen').value += num;
    


}
function clearscreen() {
    document.getElementById('screen').value = '';
    
}
function calculate() {
    document.getElementById('screen').value = eval(document.getElementById('screen').value) ;

}