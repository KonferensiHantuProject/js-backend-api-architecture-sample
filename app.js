const express = require('express')
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

    app.listen(5000, () => console.log('AWOKWAOKWOK Listen to 5000'))
