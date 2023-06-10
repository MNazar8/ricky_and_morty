const URL = "https://rickandmortyapi.com/api/character";
const axios = require('axios');

const getCharById = async (req, res) => {
try {
    const { id } = req.params;
    const { data } = await axios(`${URL}/${id}`) 

            if(!data.name) throw new Error(`Faltan datos del personaje con ID: ${id} `);
                const character = {
                    id: data.id,
                    name: data.name,
                    species: data.species,
                    image:data.image,
                    origin:data.origin,
                    gender:data.gender,
                    status:data.status
                }
                return res.status(200).json(character)
        // return res.status(404).send('Not Found');
        
} catch (error) {
    return error.message.includes('ID')
    ?res.status(404).send(error.message)
    :res.status(500).send(error.response.data.error)
} 
}

module.exports = {
    getCharById
}