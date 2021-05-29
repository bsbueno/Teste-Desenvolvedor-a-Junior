import {Router, Response, Request } from 'express' 
import { getQuad,getQuadrinho, saveQuad , updateQuad, removeQuad} from './controller/quadrinhoController'
const routes = Router()


routes.get('/api/quad',getQuadrinho)
routes.get('/api/quad/:id', getQuad)
routes.post('/api/quad', saveQuad)
routes.put('/api/quad/:id', updateQuad)
routes.delete('/api/quad/:id', removeQuad)




export default routes