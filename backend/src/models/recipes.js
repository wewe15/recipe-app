import client from "../database.js";


export class RecipeModel {
    async findAll(){
        try {
            const conn = await client.connect()
            const sql = 'SELECT * FROM recipes'
            const result = await conn.query(sql)
            conn.release()
            
            return result.rows
        } catch (err) {
            throw new Error(`Couldn't get recipes. Error: ${err}`)
        }
    }

    async findById(id){
        try {
            const sql = 'SELECT * FROM recipes WHERE id=$1'
            const conn = await client.connect()
            const result = await conn.query(sql, [id])
            conn.release()

            return result.rows[0]
        } catch (err) {
            throw new Error(`Couldn't find recipe ${id}. Error: ${err}`)
        }
    }

    async create(r){
        try {
            const sql = 'INSERT INTO recipes (title, ingredient_id, image) VALUES($1, $2, $3)\
                         RETURNING *'
            const conn = await client.connect()
            const result = await conn
                .query(sql, [r.title, r.ingredient_id, r.image])
            const recipe = result.rows[0]
            conn.release()

            return recipe
        } catch (err) {
            throw new Error(`Could not add new recipe ${r.title}. Error: ${err}`)
        }
    }

    async updateById(r){
        try{
            const sql = 'UPDATE recipes SET title=$1, ingredient_id=$2, image=$3\
                         WHERE id=$4 RETURNING *'
            const conn = await client.connect()
            const result = await conn.query(sql, [r.title, r.ingredient_id, r.image, r.id])
            const recipe = result.rows[0]
            conn.release()
    
            return recipe
        } catch (err) {
            throw new Error(`Could not update recipe ${i.name}. Error: ${err}`)
        }
       
    }

    async delete(id){
        try {
            const sql = 'DELETE FROM recipes WHERE id=$1 RETURNING *'
            const conn = await client.connect()
            const result = await conn.query(sql, [id])
            const recipe = result.rows[0]
            conn.release()
        
            return recipe
        } catch (err) {
            throw new Error(`Could not delete recipe ${id}. Error: ${err}`)
        }
    }
}