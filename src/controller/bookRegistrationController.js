const Book = require('../models/book');

async function tryToRegisterBook (req, res) {

    if (!req.body)
        return res.status(400).send({ error: 'Cannot find body into the request' });

    const {
        title,
        isbn,
        author,
        edition,
        publisher,
        language,
        category,
        user_name,
        user_id,
        user_phone,
        user_cep,
        user_addressNumber
    } = req.body.userData;

    if (!title || !isbn || !author || !edition || !publisher || !language || !category || !user_name || 
        !user_id || !user_phone || !user_cep || !user_addressNumber)
        return res.status(400).send({ error: 'Campos obrigatórios não informados' });

    const book = new Book({
        title,
        isbn,
        author,
        edition,
        publisher,
        language,
        category,
        user_name,
        user_id,
        user_phone,
        user_cep,
        user_addressNumber
    });

    try {

        await book.save();
        return res.status(201).send({ success: 'Livro cadastrado com sucesso', book });
  
     } catch (err) {
        return res.status(400).send({ error: 'Problems when trying to save into bd: ' + err});
     }
}

module.exports = tryToRegisterBook;