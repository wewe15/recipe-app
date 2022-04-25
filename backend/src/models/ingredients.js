import client from "../database.js";


export class IngredientModel {
    async findAll(){
        try {
            const conn = await client.connect()
            const sql = 'SELECT * FROM ingredients'
            const result = await conn.query(sql)
            conn.release()
            
            return result.rows
        } catch (err) {
            throw new Error(`Couldn't get ingredients. Error: ${err}`)
        }
    }

    async findById(id){
        try {
            const sql = 'SELECT * FROM ingredients WHERE id=$1'
            const conn = await client.connect()
            const result = await conn.query(sql, [id])
            conn.release()

            return result.rows[0]
        } catch (err) {
            throw new Error(`Couldn't find ingredient ${id}. Error: ${err}`)
        }
    }

    async create(i){
        try {
            const sql = 'INSERT INTO ingredients (name) VALUES($1) RETURNING *'
            const conn = await client.connect()
            const result = await conn
                .query(sql, [i.name])
            const ingredient = result.rows[0]
            conn.release()

            return ingredient
        } catch (err) {
            throw new Error(`Could not add new ingredient ${i.name}. Error: ${err}`)
        }
    }

    async updateById(i){
        try{
            const sql = 'UPDATE ingredients SET name=$1 WHERE id=$2 RETURNING *'
            const conn = await client.connect()
            const result = await conn.query(sql, [i.name, i.id])
            const ingredient = result.rows[0]
            conn.release()
    
            return ingredient
        } catch (err) {
            throw new Error(`Could not update ingredient ${i.name}. Error: ${err}`)
        }
       
    }

    async delete(id){
        try {
            const sql = 'DELETE FROM ingredients WHERE id=$1 RETURNING *'
            const conn = await client.connect()
            const result = await conn.query(sql, [id])
            const ingredient = result.rows[0]
            conn.release()
        
            return ingredient
        } catch (err) {
            throw new Error(`Could not delete ingredient ${id}. Error: ${err}`)
        }
    }
}