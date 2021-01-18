const express = require("express")
const router = express.Router()
const axios = require("axios").default;

router.get("/", (req,res) =>{
    res.render("index")
})

router.get("/cadastro", (req,res) =>{
    res.render("cadastro")
})


router.get("/simulado_explicacao", (req,res) =>{
    res.render("simulado_explicacao")
})


router.post("/simulado_question", (req,res) =>{
    res.render("simulado_question")
})


router.get("/simulado_question", (req,res) =>{
    res.render("simulado_question")
})

router.get("/simulado", (req,res) =>{
    res.render("simulado")
})

router.get("/terminado", (req,res) =>{
    res.render("terminado")
})



router.get("/dashboard", (req,res) =>{
    res.render("dashboard")
})
router.post("/dashboard", (req,res) =>{
    res.render("dashboard")
})



router.get("/login", (req,res) =>{
    res.render("login")
})

router.post("/login", (req,res) =>{
    // console.log(req.body)
    // axios.post("http://localhost:5000/auth/login",{
    //         email: req.body.email,
    //         password: req.body.password
    //     }
    //     ).then((response) =>{
    //     const currentUser = response.data.data
    //     const currentToken = response.data.token
        
    //     if(currentUser == undefined){
    //         res.redirect("/login")
    //     }else{
    //         res.redirect("/simulado_question")
    //     }
    // })

    res.render("simulado_question")

})

module.exports = router;