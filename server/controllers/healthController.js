import { HealthService } from "../services/healthService.js"

export const healthController = async (req, res) =>{
    const result = await new HealthService().check()

    if(result.ok){
        res.status(200).json(result)
    }else{
        res.status(500).json(result)
    }
}