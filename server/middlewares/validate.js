export const validate = (schema) => (req, res, next) =>{
    try{
        const result = schema.parse({
            params: req.params,
            body: req.body, 
            query: req.query
        })

        req.params = result.params
        req.body = result.body
        req.query = result.query

        next()
    }catch(error){
        return req.status(400).json({
            error: error.errors
        })
    }
}