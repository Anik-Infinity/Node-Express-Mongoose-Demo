const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27018/user-manager-api', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('DB Connected Successfully')
}).catch((e) => {
    console.log('Error!DB Connection failed', e)
})
