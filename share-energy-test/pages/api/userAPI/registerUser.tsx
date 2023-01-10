import { registerUser } from  '../../../services/userAPI'

export default function handler(req: { body: { email: any; password: any } }, res: { status: (arg0: number) => { (): any; new(): any; json: { (arg0: string): void; new(): any } } }) {
    try {
        const newUser = registerUser(req.body)
        res.status(201).json(newUser)
    } catch(e: any){
        res.status(400).json(e.message)
    }
}