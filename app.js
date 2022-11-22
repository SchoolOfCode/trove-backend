const  express  = require ('express');
const  morgan  = require ('morgan');
const router = express.Router();

const app = express();
const { query } = require ("./db/index.js");
const linksRouter = require("./Routes/index.js")

const port = process.env.PORT || 3000

// const testRoute = router.get("/", async function (req, res) {
//     const results = await query('SELECT * FROM posts');
//     res.json({success:true, payload: results.rows});
//     console.log(res);
// })

app.use(morgan('dev'));
app.use(express.static('public'));
app.use(express.json());

app.use("/api/links", linksRouter);

app.listen(port, () => {console.log(`App listening on port ${port}`)})