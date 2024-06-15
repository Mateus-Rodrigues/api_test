
const db = require('../database/connection');

module.exports = {
    async listarUsuarios(request, response){
        try{

            // instruções SQL
            const sql = `SELECT 
            id, nome, email, ddd, telefone
            FROM usuarios;`;
            // executa instruções SQL e armazenao resultado na variavél usuários
            const usuarios = await db.query(sql);


            return response.status(200).json({
                sucesso: true,
                menssagem: 'Listar Usuarios.',
                dados: usuarios
            });
        } catch (error) {
            return response.status(500).json({
                sucesso: false,
                message: 'Erro na requisição.',
                dados: error.message
            })
        }
    },
    async cadastrarUsuarios(request, response){
        try{
            return response.status(200).json({
                sucesso: true,
                menssagem: 'usuario cadastrado',
                dados: null
            });
        } catch (error) {
            return response.status(500).json({
                sucesso: false,
                message: 'Erro na requisição.',
                dados: error.message
            })
        }
    },
    async editarUsuarios(request, response){
        try{
            return response.status(200).json({
                sucesso: true,
                menssagem: 'Usuario editado.',
                dados: null
            });
        } catch (error) {
            return response.status(500).json({
                sucesso: false,
                message: 'Erro na requisição.',
                dados: error.message
            })
        }
    },
    async apagarUsuarios(request, response){
        try{
            return response.status(200).json({
                sucesso: true,
                menssagem: 'Usuario deletado.',
                dados: null
            });
        } catch (error) {
            return response.status(500).json({
                sucesso: false,
                message: 'Erro na requisição.',
                dados: error.message
            })
        }
    },
}
