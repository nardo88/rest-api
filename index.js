import express from 'express'
import mongoose from 'mongoose'
import router from './router.js'
// указываем на каком порту будет подниматься сервер
const PORT = 5000
// URL до mongoDb
const MONGO_URL = 'mongodb+srv://admin:admin@cluster0.7g8i9.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
// сооздаем экземпляр express
const app = express()
// добавляем поддержку json
app.use(express.json())
// обрабатываем маршрут
app.use('/api', router)

async function startApp() {
    try {
        // подключаемся к mongo
        await mongoose.connect(MONGO_URL, {useUnifiedTopology: true, useNewUrlParser: true})

        // запускаем сервер
        app.listen(PORT, () => {
            console.log('Server started')
        })

    } catch (e) {

    }
}

startApp()