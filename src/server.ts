import  express from "express";

const app = express();

/**
 * Métodos HTTP
 * GET - Busca
 * Post - Criação
 * Put -  Alteração
 * Delete - Deletar
 * Patch -Alterar informação específica
 */

//Rotas Get
app.get("/", (request, response) => {
    //return response.send(" Hello NLW Aplication Node.JS") Return view

    //Retorno foomato Json trocar o parametro response.Retorno foomato Json trocar o parametro response.
   return response.json({message:" Hello Aplication Node.js "}); 
});

//Rotas  Post
app.post("/", (request, response) => {
    return response.json({message: " Usuario salvo com sucesso! "});
});

app.listen(3333, () => console.log(" Server is running on port 3333 "));