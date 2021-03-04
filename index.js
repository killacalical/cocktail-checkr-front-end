let config = {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
    },
    body: JSON.stringify({
        title: "Fantastic",
        content: "So delicious and refreshing. I could drink 10",
        rating: 5
    })
}

fetch("http://localhost:3000/cocktails/1/reviews", config)
 .then( res => res.json() )
 .then( res => console.log(res) )