function llenar() {
    for (let index = 0; index < 2; index++) {
        let table = document.getElementById('table').innerHTML;
        document.getElementById('table').innerHTML = table + 
        `<tr>
            <td>hola${index}</td>
            <td>queTal${index}</td>
            <td>nombre${index}</td>			
        </tr>`;             
    }
}
setInterval(()=>{llenar()}, 3000);