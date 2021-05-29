import { ConnectionOptionsReader, getRepository } from 'typeorm'
import { quadrinho } from '../entity/quadrinho'
import { Request, Response } from 'express'

export const getQuadrinho = async (request: Request, response: Response) => {
    try {
        const quad = await getRepository(quadrinho).find()
        return response.json(quad)
    } catch(error) {
        return response.status(500).json({ message: 'Error' })
    }
};

export const getQuad = async (request: Request, response: Response) => {
    const { id } = request.params
    
    try {
        const quad = await getRepository(quadrinho).findOne(id)
        return response.json(quad)
    } catch(error) {
        return response.status(500).json({ message: 'Error' })
    }
};

export const saveQuad = async (request: Request, response: Response) => {
    try {
        const quad = await getRepository(quadrinho).save(request.body)
        return response.json(quad)
    } catch(error) {
        return response.status(500).json({ message: "Erro"})
    }
};

export const updateQuad = async (request: Request, response: Response) => {
    const { id } = request.params

    try {
        const quad = await getRepository(quadrinho).update(id, request.body)
    
        if (quad.affected === 1) {
            const taskUpdated = await getRepository(quadrinho).findOne(id)
            return response.json(taskUpdated)
        }

        return response.status(404).json({ message: 'Quadrinho não Encontrado!' })
    } catch(error) {
        return response.status(500).json({ message: 'Error' })
    }
    
};


export const removeQuad = async (request: Request, response: Response) => {
    const { id } = request.params

    try {

        const quad = await getRepository(quadrinho).delete(id)
    
        if (quad.affected === 1) {
            const taskUpdated = await getRepository(quadrinho).findOne(id)
            return response.json({ message: 'Removido!' })
        }

        return response.status(404).json({ message: 'Quadrinho não Encontrado!' })

    } catch(error) {
        return response.status(500).json({ message: 'Error' })
    }
};
