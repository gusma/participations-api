## ⚡ Participations API & Frontend

This was a project of a CRUD application both in Front and Backend, using the MERN Stack (Mongo- Express- React- NodeJS) stack.

This application goes back and forth between API and Frontend, allowing for different users participation to be stored and be used for graphing in the application.

This project was built in September 2022 by [Gustavo Malamud](https://www.gustavomalamud.com).

## To install

Install MongoDB on your computer, and create a .env file on your computer with the following information:

```sh
DB_DATABASE="your-cluster-name"
DB_USERNAME="your-user-name"
DB_PASSWORD="your-password"
```

If you plan on using a live Mongo Cloud DB, consider that the connection thread commonly used for connecting your database to the application will look like this:

```
mongodb+srv://<user-name>:<password>@<cluster-name>.jnxdaql.mongodb.net/?retryWrites=true&w=majority
```

If not, in local mode your connection string should be something like this:

```mongodb://localhost:27017/<your-db-name>```

After fetching your database information, head on over to the base of this folder and run 

```npm run install``` (be patient, it takes a little bit)

and after that 

```npm run start``` 

and it shall start the frontend and backend at the same time (thanks to concurrently).

### Comprised Technologies

In backend, this application uses:

* NodeJS,
* Express,
* MongoDB & Mongoose,
* CORS 
* Environment Variables

In Frontend this application uses:

* ReactJS (through Create-React-App in this case),
* React Hooks,
* Axios (for fetching the API information),
* Formik & Yup (For forms and Form validation),
* Chart.JS and react-chart-js
* Lazy Loading Components
* Styled Components (For unique id'ing the Application id's)
* PostCSS + TailwindCSS

### Possible to-dos for the future

* Expand on further functionalities and more information (perhaps enhance on information by adding modals to the table rows),
* Add unit and E2E testing,
* Add authentication on both sides,
* Move frontend to NextJS.


