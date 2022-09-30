function getDB() {
    fetch(`http://localhost:3000/test`)
        .then((response) => response.json())
        .then((data) => {
            document.getElementById('table').innerHTML = ''
            data.forEach(row => {
                console.log(row)
                var template = document.getElementById('rowTemplate');
                var clone = template.content.cloneNode(true);
                clone.getElementById('elevid').textContent = row.elevid
                clone.getElementById('fornavn').textContent = row.fornavn
                clone.getElementById('etternavn').textContent = row.etternavn
                clone.getElementById('hobby').textContent = row.hobby
                clone.getElementById('kjonn').textContent = row.kjonn
                clone.getElementById('klasse').textContent = row.klasse
                clone.getElementById('datamaskin').textContent = row.datamaskin
                document.getElementById('table').appendChild(clone)
            })
        })
}
getDB()

document.getElementById('test').addEventListener('click', e => {
    getDB()
}) 


document.getElementById('delete').addEventListener('click', e => {

}) 

// template og clone er noe folk ikke pleier å bruke som jeg burde bruke oftere i framtiden (NOTAT)

// document.getElementById('knappId').addEventListener('click', e => {
    
// })



function deleteRow() {

  var input_elevid = document.getElementById("hvilken_elev").value;

  var url = 'http://localhost:3000/deleterow/' + input_elevid;
  
  fetch(url)
  .then((response) => response.json())
  .then((data) => console.log(data));


}