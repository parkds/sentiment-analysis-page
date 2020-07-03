function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    
    let validInput = Client.checkForName(formText)
    console.log("::: Input: ", formText, "validity check", validInput," :::")
    if (validInput==true) {
        console.log("::: Form Submitted :::")
        fetch(__APIHOST__+'analyze',{
            method: 'POST',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({'text': formText}),
        })
        .then(res => res.json())
        .then(function(res) {
            document.getElementById('sentimentDisplay').innerHTML = "Sentiment = " +res.polarity
            document.getElementById('sentimentScoreDisplay').innerHTML = "Sentiment Score = "+res.polarity_confidence.toFixed(2)
            document.getElementById('subjectivityDisplay').innerHTML = "Subjectivity = "+res.subjectivity
            document.getElementById('subjectivityScoreDisplay').innerHTML = "Subjectivity Score = "+res.subjectivity_confidence.toFixed(2)

        })
    }
}

export { handleSubmit }
