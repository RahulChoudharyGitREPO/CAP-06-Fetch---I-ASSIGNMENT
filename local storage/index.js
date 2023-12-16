document.getElementById('userDataForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    if (!name || !age) {
      return alert('Please enter both name and age.');
    }
    localStorage.setItem('userData', JSON.stringify({ name, age }));
    alert('User data has been stored in Local Storage.');
  });
  
  document.getElementById('retrieveDataBtn').addEventListener('click', function() {
    const userData = JSON.parse(localStorage.getItem('userData'));
    if (!userData) {
      return alert('No user data found in Local Storage.');
    }
    const table = document.getElementById('userDataTable');
    table.innerHTML = `<tr><th>Name</th><th>Age</th></tr><tr><td>${userData.name}</td><td>${userData.age}</td></tr>`;
  });