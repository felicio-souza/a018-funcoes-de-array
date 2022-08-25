const objeto = {
    nome: "astrodev",
    profissao: "Dev das estrelas",
    username: "astrodev_labenu",
    senha: "melhorDeTodos"
}



const caixaAlta = (objeto) => {

return {

    ...objeto,
    nome: "ASTRODEV",
    profissao: "DEV DAS ESTRELAS",
    username: "ASTRODEV_LABENU",
    senha: "MELHORDETODOS"
   

}

}

const textoCorrido = (objeto) => {
    
 
    return string = `${objeto.nome} ${objeto.profissao} ${objeto.username} ${objeto.senha}`
    
 
    }
   
    const imprime = (objeto, callback) =>{
        
        const retorno = callback(objeto)
        console.log(retorno)
    }
    
    
   
      
 imprime(objeto, caixaAlta)
 imprime(objeto, textoCorrido)

