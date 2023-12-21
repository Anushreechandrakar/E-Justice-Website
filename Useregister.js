<script>
    document.addEventListener('DOMContentLoaded', function () {
        const submitButton = document.querySelector('.bttn');
        submitButton.addEventListener('click', validateForm);
    });

    function validateForm(event) {
        event.preventDefault();

        var firstName = document.getElementById('first').value.trim();
        var lastName = document.getElementById('last').value.trim();
        var contact = document.getElementById('contact').value.trim();
        var location = document.getElementById('location').value.trim();
        var crimeLocation = document.getElementById('Crime').value.trim();
        var city = document.getElementById('city').value.trim();
        var postalCode = document.getElementById('Postal').value.trim();
        var caseType = document.getElementById('Crime').value.trim();
        var feedback = document.getElementById('area').value.trim();
        const tt = document.getElementById('tt');

        if (
            firstName === '' ||
            lastName === '' ||
            contact === '' ||
            location === '' ||
            crimeLocation === '' ||
            city === '' ||
            postalCode === '' ||
            caseType === '' ||
            feedback === ''
        ) {
            tt.style.display = 'block';
        } else {
            tt.style.display = 'none';
        }
    }
</script>
