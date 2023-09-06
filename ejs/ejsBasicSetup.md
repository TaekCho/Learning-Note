<h1>EJS basic setup</h1>

<code>
import express from "express";

const app = express();
const port = 3000;

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index.ejs");
});


app.get("/about", (req, res) => {
  res.render("about.ejs");
});

app.get("/contact", (req, res) => {
  res.render("contact.ejs");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
</code>

<h2>header.ejs File</h2>

        <li class="nav-item">
        here, the href link will add the routes to handle the render of get methods.
          <a class="nav-link" href="/"><i class="far fa-copy"></i>Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/about" ><i class="far fa-clone"></i>About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/contact"><i class="far fa-calendar-alt"></i>Contact</a>
        </li>

<h2>contact.ejs File</h2>
It is important to take a close look at include method, and how it locates directory.

```
<%- include('partials/header.ejs') %>
<h1>Contact Me</h1>
<form>
  <input name="name" type="text" class="feedback-input" placeholder="Name" />
  <input name="email" type="text" class="feedback-input" placeholder="Email" />
  <textarea name="text" class="feedback-input" placeholder="Comment"></textarea>
  <input type="submit" value="SUBMIT" />
</form>
<%- include('partials/footer.ejs') %>
```
