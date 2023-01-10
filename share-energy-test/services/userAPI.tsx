import jwt from 'jsonwebtoken'

let users: { 
    email: any,
    password: any }[] = []

    const SECRET:any = process.env.JWT_SECRET

    function createToken(user: any){
        return jwt.sign({email: user.email, name: user.name}, SECRET)
    }

    function readToken(token: any){
        try{
            return jwt.verify(token, SECRET)
        }catch (err){
            throw new Error('Token Inválido')
        }
    }

    export function verify(token:any){
        return readToken(token)
    }
    
    export function registerUser(body: { email: any, password: any }) {
        const user = users.find(({email}) => email === body.email)
        if(user) throw new Error('Usuário já cadastrado')
    
        users.push(body)
        
        const token = createToken(body)
        return token
    }
    
    export function loginUser(body: { email: any; password: any }) {
        const user = users.find(({email}) => email === body.email)
        if(!user) throw new Error('Usuário não encontrado')
        if(user.password !== body.password) throw new Error('Senha Incorreta')
    
        const token = createToken(user)
        return token
    }