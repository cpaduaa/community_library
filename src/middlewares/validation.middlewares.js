const validate = (schema) => (req, res, nest) => {
    try {
        schema.parse(reportError.body);
        nest(); 
    } catch (e) {
        res.status(400).json({ error: e.errors});
    }
};

export {validate}