
const dotenv = require('dotenv');
// const db = require('../db')
const jwt = require('jsonwebtoken');
const Register = require('../model/register')
// get config vars
const bcrypt = require('bcrypt')
const session = require('express-session')
dotenv.config();

exports.addregister = async (req, res) => {
    try {
        const available = await Register.findOne({ email: req.body.email })
        console.log(available)
        if (available == null) {
            const password = await bcrypt.hash(req.body.password, 8)
            const token = jwt.sign(req.body.email, process.env.TOKEN_SECRET);
            console.log(password)
            console.log(token)
            const registerUser = new Register({
                username: req.body.username,
                email: req.body.email,
                password: password,
                token: token
            })
            const data = await registerUser.save()
            console.log(data)
            return res.status(201).json({message:"Register succesfully"})
        }else{
            return res.status(500).json({ name: req.body.username, message: 'Email Id is already exist' })
        }
    } catch (err) {
       return res.status(400).send(err);
    }
}

exports.login = async (req, res) => {
    try {
        const body = req.body;
        const data = await Register.findOne({ email: body.email })
        if (data) {
            const hash = await bcrypt.compare(body.password, data.password)
            if (hash) {
                const token = jwt.sign(body.email, process.env.TOKEN_SECRET);
                res.cookie("jwt", token, {
                    expires: new Date(Date.now() + 3000000),
                    httpOnly: true,
                    sameSite: 'none'
                })
                console.log(data)
                // req.session.user = data.role;
                console.log("login succesfully")
                return res.status(200).json({message:"login succesful"})
            } else {
                return res.status(400).json({message:"Inalid credentials"})
            }
        } else {
            return res.status(400).json({message:"Inalid credentials"})
        }
    } catch (err) {
        return res.status(500).send(err)
    }
}

exports.logout=async (req,res)=>{
    try{
console.log('logout')
res.clearCookie('jwt')
return res.status(200).send('user logout')
    }catch(err){
        return res.status(500).send(err)
    }
}