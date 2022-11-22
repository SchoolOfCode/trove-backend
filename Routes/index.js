const express = require ("express");
const router = express.Router();
const { getAllLinks } = require ("../Models");

router.get("/", async function (req, res) {
    const linksObj = await getAllLinks();
    res.json({success:true, payload: linksObj});
    console.log(res)});


module.exports = router;