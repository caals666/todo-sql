# 📝 todo-sql

A simple command-line todo manager backed by PostgreSQL.

## Prerequisites

- Node.js v18+
- A PostgreSQL database

### Setting up the database

```sql
CREATE TABLE todos (
    id SERIAL PRIMARY KEY,
    description TEXT NOT NULL,
    status VARCHAR(20) DEFAULT 'pending'
);
```

## Installation

### Global (recommended)

Install directly from npm to use the `todo-sql` command anywhere:

```bash
npm install -g todo-sql
```

### Local (from source)

```bash
git clone https://github.com/caals666/todo-sql.git
cd todo-sql
npm install
npm link        # makes the `todo-sql` command available globally
```

## Configuration

Create a `.env` file in the project root (or your working directory):

```env
pg_url=postgresql://user:password@localhost:5432/yourdbname
```

## Usage

```bash
todo-sql <command> [arguments]
```

### Commands

| Command | Description | Example |
|---|---|---|
| `--new <text>` | Add a new todo | `todo-sql --new Buy groceries` |
| `--list` | List all todos | `todo-sql --list` |
| `--list pending` | List only pending todos | `todo-sql --list pending` |
| `--list done` | List only completed todos | `todo-sql --list done` |
| `--done <id>` | Mark a todo as done | `todo-sql --done 3` |
| `--delete <id>` | Delete a todo | `todo-sql --delete 3` |
| `--help` | Show help menu | `todo-sql --help` |
| `--version` | Show version | `todo-sql --version` |

## License

MIT — see [LICENSE](./LICENSE) for details.

## Links

- [GitHub](https://github.com/caals666/todo-sql)
- [Issues](https://github.com/caals666/todo-sql/issues)