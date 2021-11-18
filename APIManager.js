class APIManager {
    constructor() {
        this.data = {}
    }

    userGeneratorAPI() {
        $.ajax({
            method: "get",
            url: "https://randomuser.me/api/?results=7",
            success: data => {
                const users = data.results
                this.data.user = users[0]
                this.data.friends = users.slice(1)
            },
            error: (xhr, text, error) => {
                alert(text)
                console.log(error)
                    // this.userGeneratorAPI()
            }
        })
    }

    quoteGeneratorAPI() {
        $.ajax({
            method: "get",
            url: "https://api.kanye.rest/",
            success: data => {
                const quote = data.quote
                this.data.quote = quote
            },
            error: (xhr, text, error) => {
                alert(text)
                console.log(error)
                    // this.quoteGeneratorAPI()
            }
        })
    }

    pokeGeneratorAPI() {
        const pokeID = Math.floor(Math.random() * 949)
        $.ajax({
            method: "get",
            url: `https://pokeapi.co/api/v2/pokemon/${pokeID}`,
            success: data => {
                let pokemon = {}
                pokemon.name = data.name[0].toUpperCase() + data.name.slice(1)
                pokemon.picture = data.sprites.front_default
                this.data.pokemon = pokemon
            },
            error: (xhr, text, error) => {
                if (xhr.status === 404) {
                    this.pokeGeneratorAPI()
                } else {
                    alert(text)
                    console.log(error)
                }
            }
        })
    }

    baconLpsumAPI() {
        $.ajax({
            method: "get",
            url: "https://baconipsum.com/api/?type=all-meat&paras=1",
            success: data => {
                const text = data[0]
                this.data.meat = text
            },
            error: (xhr, text, error) => {
                alert(text)
                console.log(error)
                    // this.baconLpsumAPI()
            }
        })
    }

}