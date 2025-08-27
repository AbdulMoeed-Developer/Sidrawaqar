const express = require('express');
const path = require('path');
const app = express();
const ejs = require('ejs');
const ejsMate = require('ejs-mate');
const helmet = require('helmet')
const homeRoutes = require('./routes/homeRoutes')


app.engine('ejs' , ejsMate);
// telling express that we want to use ejsMate instead of default one its relying on
app.set('views' , path.join(__dirname,'views'));
app.set('view engine' , 'ejs');
app.use(express.static(path.join(__dirname, 'public')));
app.use(
  helmet({
    contentSecurityPolicy: {
      directives: {
        defaultSrc: ["'self'"],
        styleSrc: [
          "'self'",
          "https://cdn.jsdelivr.net",
          "https://cdnjs.cloudflare.com",
          "'unsafe-inline'", // inline styles if needed
        ],
        scriptSrc: [
          "'self'",
          "https://cdn.jsdelivr.net",
          "https://cdn.emailjs.com",
          "'unsafe-inline'", // inline scripts if needed
        ],
        imgSrc: ["'self'", "data:", "https:"],
        fontSrc: [
          "'self'",
          "https://cdn.jsdelivr.net",
          "https://cdnjs.cloudflare.com",
        ],
        connectSrc: [
          "'self'",
          "https://api.emailjs.com", // ✅ allow EmailJS API calls
        ],
      },
    },
  })
);







app.use('/' , homeRoutes);






app.use((req, res, next) => {
    res.status(404).render('app/error', { message: "Page Not Found" });
});

app.use((err, req, res, next) => {
    console.error(err.stack); // Log the error (optional)
    res.status(err.status || 500).render('app/error', { message: "Something went wrong!" });
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});