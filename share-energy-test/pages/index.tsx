import express from "express";
import userController from '../controller/user'
import bodyParser from "body-parser";

const app = express()
const port = 3000

app.use(bodyParser.json())
app.use('/user', userController)

app.listen(port, () => {
  console.log(`App rodando em http://localhost:${port}`)
})

const Index = () => {
  return (
    <div>Home</div>
  );
}

export default Index