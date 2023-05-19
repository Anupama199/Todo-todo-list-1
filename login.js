function login(callback) {
    var username = document.getElementById('username').value;
    var password = document.getElementById('pwd').value;

    if (username === 'admin' && password === '12345') {
      callback(); 
    } else {
      alert('Invalid login credentials');
    }
  }

  function todopage() {
    window.location.href = 'index.html';
  }