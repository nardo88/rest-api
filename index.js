import express from 'express' 

// указываем на каком порту будет подниматься сервер
const PORT = 5000
// сооздаем экземпляр express
const app = express()
// добавляем поддержку json
app.use(express.json())
// запускаем сервер
app.listen(PORT, () => {
    console.log('Server started')
})