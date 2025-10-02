import { createClient } from '@vercel/postgres';
import { sql } from '@vercel/postgres'
import {unstable_noStore as noStore} from 'next/cache'

export async  function connectToDB(){
    const client = createClient({
        connectionString: process.env.POSTGRES_URL_NON_POOLING,
    });
    try {
        if (client){
            return client
        }

    }catch(error){
        console.error('ERROR::',error)
    }
}

export async function getPosts() {
    try {
        noStore();
        const data = await sql`SELECT * FROM posts`;
        return data.rows
    } catch (err) {
        console.error('ERROR::', err);
    }
}