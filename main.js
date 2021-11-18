const apiManager = new APIManager()
const renderer = new Renderer()
let user

$('#load-data').on('click', function() {
    generateUser()
    $('#display-data').prop('disabled', true)
    setTimeout(function() {
        $('#display-data').prop('disabled', false)
    }, 500)
})

$('#display-data').on('click', function() {
    user = getUser()
    renderer.render(user)
})

$('#save-data').on('click', function() {
    localStorage.user = JSON.stringify(user)
})

$('#restore-data').on('click', function() {
    user = JSON.parse(localStorage.user)
    renderer.render(user)
})

const generateUser = function() {
    apiManager.userGeneratorAPI()
    apiManager.quoteGeneratorAPI()
    apiManager.pokeGeneratorAPI()
    apiManager.baconLpsumAPI()
}

const getUser = function() {
    let user = {}
    user.info = apiManager.data.user
    user.friends = apiManager.data.friends
    user.quote = apiManager.data.quote
    user.pokemon = apiManager.data.pokemon
    user.meat = apiManager.data.meat
    return user
}