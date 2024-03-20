document.getElementById('ageForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    var dob = parseInt(document.getElementById('dob').value);
    var month = parseInt(document.getElementById('month').value) - 1; // Month is zero-based index in JavaScript
    var year = parseInt(document.getElementById('year').value);

    var today = new Date();
    var birthDate = new Date(year, month, dob);
    
    var age = today.getFullYear() - birthDate.getFullYear();
    var monthDiff = today.getMonth() - birthDate.getMonth();
    
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    
    document.getElementById('result').innerText = "Your age is: " + age + " years";
});