const  express  = require ('express');
const  morgan  = require ('morgan');

const app = express();

const port = process.env.PORT || 3000

app.use(morgan('dev'));
app.use(express.static('public'));
app.use(express.json());

app.listen(port, () => {console.log(`App listening on port ${port}`)})