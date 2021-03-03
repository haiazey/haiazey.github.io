const studentId = document.getElementById('studentId');
const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const age = document.getElementById('age');
const weight = document.getElementById('weight');
const kifoz = document.getElementById('kifoz');
const addBtn = document.getElementById('addBtn');
const updateBtn = document.getElementById('updateBtn');
const removeBtn = document.getElementById('removeBtn');
const showBtn = document.getElementById('showBtn');

const database = firebase.database();

addBtn.addEventListener('click', (e) -> {
  e.preventDefault();
  database.ref('/students/' + studentId.value).set({
    first_name: firstName.value,
    last_name: lastName.value,
    age: age.value,
    weight: weight.value
  })
})
