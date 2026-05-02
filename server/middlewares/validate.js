import z from "zod"
import { BadRequestError } from "../errors/appError"

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
        next(new BadRequestError("Request mal formada"))
    }
}

export const validateQuery = (schema) => validate(z.object({ query: schema }))