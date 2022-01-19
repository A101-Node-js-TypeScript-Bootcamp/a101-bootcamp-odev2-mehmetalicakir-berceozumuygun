module.exports = errorHandler;

function errorHandler(err, req, res, next) {
    if(err.name === 'UnauthorizedError'){
            return res.status(401).json({ message: "Token mevcut değil!"})
    } //Token yok.
    return res.status(500).json({ message: err.message }) //default
}
