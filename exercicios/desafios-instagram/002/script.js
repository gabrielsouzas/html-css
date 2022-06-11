const body = document.body;
for (let index = 1; index <= 30; index++) {
    let div = document.createElement('div')
    let texto = document.createTextNode(index);
    div.appendChild(texto) 
    body.appendChild(div);
}