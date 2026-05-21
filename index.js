#!/usr/bin/env node

import pg from 'pg'
import dotenv from 'dotenv'
const {Pool} = pg;
dotenv.config();
const pool = new Pool({
    connectionString:process.env.pg_url
})
const cmd = process.argv[2];

if(cmd=="--new"){
    const newTodo = process.argv.slice(3).join(' ');
    const res=await pool.query(`INSERT INTO todos (description) VALUES($1)`,[newTodo]);
    console.log("created todo");
}

if(cmd == "--list"){
    let opt = ""
    if(process.argv[3] == "pending" || process.argv[3] == "done"){
        opt = process.argv[3];
    }
    
    let result;
    if(opt) {
        result = await pool.query('SELECT * FROM todos WHERE status = $1 ORDER BY id', [opt]);
    } else {
        result = await pool.query('SELECT * FROM todos ORDER BY id');
    }

    if (result.rows.length === 0) {
        console.log('No todos found')
    } else {
        result.rows.forEach(todo => {
            console.log(`${todo.id}. ${todo.description} - ${todo.status}`)
        })
    }
}
if(cmd=="--done"){
    const id = process.argv[3];
    const res = await pool.query(`UPDATE todos SET status='done' WHERE id=($1)`,[id]);
    try{
        console.log("updated todo")
    }
    catch(e){
        console.log("failed");
    }
}
if(cmd=="--delete"){
    const id = process.argv[3];
    const res = await pool.query(`DELETE FROM todos WHERE id=($1)`,[id]);
    try{
        console.log("deleted todo")
    }
    catch(e){
        console.log("failed");
    }
}
if(cmd=="--help"){
       console.log(`
┌─────────────────────────────────────────────────┐
│              TODO CLI COMMANDS                  │
├─────────────────────────────────────────────────┤
│ --new                    Add a new todo item    │
│ --list [all|pending|done] List todo items       │
│ --done [id]              Mark todo as done      │
│ --delete [id]            Delete a todo item     │
│ --help                   Show help menu         │
│ --version                Show version info      │
└─────────────────────────────────────────────────┘
`);
}
if(cmd=="--version"){
    console.log("V69.69.69")
}

await pool.end()