# Livres - backend

The steps to run the backend:

Clone the project if you haven't

```bash
git clone git@github.com:Arelera/livres.git
```

Change directory to backend

```bash
cd backend
```

Install dependencies

```bash
npm install
```

Store the database credentials in a `.env` file in the `/src/config` directory. The variable names should be:

```
DB=database_name
DB_HOST=database_host
DB_USERNAME=database_username
DB_PASSWORD=database_user_password
```

Start the project

```bash
npm start
```

This will start a server on `http://localhost:3001`. You can just run the app using the backend without running the frontend seperately as the backend already sends the frontend build using `express.static`.

## How to use the api

| Path                      | Description                                                  |
| ------------------------- | ------------------------------------------------------------ |
| `/api/books`              | Get a list of 10 books                                       |
| Query Parameters          |                                                              |
| `page`                    | Offset the list by page x 10                                 |
|                           |                                                              |
| `/api/books/search`       | Get a list of 10 books by a search query                     |
| Query parameters          |                                                              |
| `query`                   | The query to look for in the data                            |
| `by`                      | What the data will be searched by (title, description, isbn) |
| `page`                    | Offset the list by page x 10                                 |
|                           |                                                              |
| `/api/bookmarks`          | Get a list of 10 bookmarked books                            |
| Query parameters          |                                                              |
| `page`                    | Offset the list by page x 10                                 |
|                           |                                                              |
| `/api/bookmarks/:book_id` | Bookmarks the book with the book_id if it's not bookmarked   |
|                           |                                                              |

**Technologies:** Express, Sequelize
