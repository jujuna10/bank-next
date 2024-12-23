
const { Client } = require("pg");
import { useContext } from "react";
import { UserContext } from '../context/emailData.js';


const { email } = useContext(UserContext);

const client = new Client({
  host: "localhost",         
  user: "postgres",          
  password: "jujuna10",      
  port: 5432,                
  database: "bank", 
});

client.connect();

client.query(`INSERT INTO email (email) VALUES(dkoodkd@gmail.com)`,(err,res) => {
  if(!err){
    console.log(res.rows);
  }else{
    console.log(err.message);
  }

  client.end()
})

// pages/api/insertEmail.ts
// import { NextApiRequest, NextApiResponse } from 'next';
// import { Client } from 'pg';

// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//   if (req.method === 'POST') {
//     const { email } = req.body;

//     const client = new Client({
//       host: 'localhost',
//       user: 'postgres',
//       password: 'your_password',
//       port: 5432,
//       database: 'bank',
//     });

//     try {
//       await client.connect();
//       const result = await client.query(`INSERT INTO email (email) VALUES ($1)`, [email]);
//       res.status(200).json({ message: 'Email inserted successfully', result });
//     } catch (error) {
//       console.error('Error inserting email:', error);
//       res.status(500).json({ error: 'Error inserting email' });
//     } finally {
//       client.end();
//     }
//   } else {
//     res.status(405).json({ error: 'Method Not Allowed' });
//   }
// }


