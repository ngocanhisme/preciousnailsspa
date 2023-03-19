function colorChange(id) {
    colorChange3();
    colorChange1(id);
}
function colorChange3() {
    let id1 = 'aa';
    let id2 = 'bb';
    let id3 = 'cc'; 
    let idList = [id1, id2, id3];
    idList.forEach(function (ID) {
        colorChange2(ID);
    });
}
function colorChange1(id) {
    document.getElementById(id).style.backgroundColor = 'green';
}
function colorChange2(id) {
    document.getElementById(id).style.backgroundColor = null;
}