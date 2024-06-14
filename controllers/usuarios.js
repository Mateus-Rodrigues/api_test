
const db = require('../database/connection');

module.experts = {
    async listarUsuarios(request, response){
        try{
            return response.status(200).json({
                sucesso: true,
                menssagem: 'Lista de usuários.',
                dados: null
            });
        } catch (error) {
            return response.ststus(500).json({
                sucesso: false,
                message: 'Erro na requisição.',
                dados: error.message
            })
        }
    }
}