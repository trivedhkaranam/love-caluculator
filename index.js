document.getElementById('calculateBtn').addEventListener('click', function() {
    const name1 = document.getElementById('name1').value;
    const name2 = document.getElementById('name2').value;

    if (name1 && name2) {
        const loveScore = Math.floor(Math.random() * 101); // Random score between 0 and 100
        let message = '';

        if (loveScore > 80) {
            message = 'You two are a perfect match!';
        } else if (loveScore > 50) {
            message = 'You have a good chance of love!';
        } else {
            message = 'Better luck next time!';
        }

        document.getElementById('loveScore').innerText = `Love Score: ${loveScore}%`;
        document.getElementById('message').innerText = message;
        document.getElementById('result').style.display = 'block';
    } else {
        alert('Please enter both names!');
    }
});