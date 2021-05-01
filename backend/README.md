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

The database credentials need to be stored in a `.env` file in the `/src/config` directory. The variable names should be:

```
- DB=database_name
- DB_HOST=database_host
- DB_USERNAME=database_username
- DB_PASSWORD=database_user_password
```

Start the project

```bash
npm start
```

**Technologies:** Express, Sequelize
