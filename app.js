const express = require('express')

const app = express()

const port = process.env.port || 8080

const data = { 
	dogs: [
		{ name: 'Sauce', image_src: 'https://placedog.net/200'},
		{ name: 'Bingo' , image_src: 'https://placedog.net/200'},
		{ name: 'Kirby', image_src: "https://placedog.net/200"},
		{ name: 'Pestilence', image_src: "https://placedog.net/200"}
	]
}

app.use(express.static(__dirname + '/public'))

app.set('view engine', 'pug')
app.set('views', './views')

app.get('/', (req, res) => {
	res.render('index', data)
})

app.listen(port, () => {
	console.log(`Server is listening on ${port}`)
})