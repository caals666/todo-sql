# 📝 Todo CLI

A simple command-line todo manager backed by PostgreSQL.

## Prerequisites

- Node.js v18+
- A PostgreSQL database
- A `todos` table with at least `id`, `description`, and `status` columns

### Setting up the database

```sql
CREATE TABLE todos (
    id SERIAL PRIMARY KEY,
    description TEXT NOT NULL,
    status VARCHAR(20) DEFAULT 'pending'
);
```

## Installation

1. Clone the repo and install dependencies:

```bash
npm install
```

2. Create a `.env` file in the root directory:

```env
pg_url=postgresql://user:password@localhost:5432/yourdbname
```

## Usage

```bash
node todo.js <command> [arguments]
```

### Commands

| Command | Description | Example |
|---|---|---|
| `--new <text>` | Add a new todo | `node todo.js --new Buy groceries` |
| `--list` | List all todos | `node todo.js --list` |
| `--list pending` | List only pending todos | `node todo.js --list pending` |
| `--list done` | List only completed todos | `node todo.js --list done` |
| `--done <id>` | Mark a todo as done | `node todo.js --done 3` |
| `--delete <id>` | Delete a todo | `node todo.js --delete 3` |
| `--help` | Show help menu | `node todo.js --help` |
| `--version` | Show version | `node todo.js --version` |

## Dependencies

- [`pg`](https://www.npmjs.com/package/pg) — PostgreSQL client for Node.js
- [`dotenv`](https://www.npmjs.com/package/dotenv) — Loads environment variables from `.env`