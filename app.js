const express = require('express')
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const rabbitmq = require('./utils/rabbitmq')
const main = async () => {
    const broker = await rabbitmq.getInstance()

    broker.consume('ngok_event', (msg) => {
        console.log(`Pesan datang ${msg}`)
    })

    broker.consume('ngok_event_baru', (msg) => {
        console.log(`Pesan datang ngok_event_baru ${msg}`)
    })

    broker.consume('ngok_event_tiga', (msg) => {
        console.log(`Pesan datang ngok_event_tiga ${msg}`)
    })


    app.get('/trigger', (req, res) => {
        console.log('mengaowkawko  .. triggered ')
        broker.publish('ngok_event_tiga', `Ini dapet dari hatinya ${req.body.name}.. oakoawkoawkkawk`)
    })
    
    app.listen(5000, () => console.log('AWOKWAOKWOK Listen to 5000'))
}

main()
