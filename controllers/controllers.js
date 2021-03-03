const corsProxy = (req, res, next) => {
    res.status(200).json({
        body: 'Hola'
    });
};

module.exports.corsProxy = corsProxy;