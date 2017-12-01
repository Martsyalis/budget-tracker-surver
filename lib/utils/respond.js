module.exports = function respond(handler) {
    return async (req, res, next) => {
        try {
            const result = await handler(req);
            setTimeout( () =>res.json(result),500);
        }
        catch(err) {
            next(err);
        }
    };
};