const express = require("express");
const patternMock = require("pattern-mock");
var cors = require("cors");

const app = express();
const mockData = patternMock({
  articles: [
    {
      id: "COUNTER",
      title: "SENTENCE",
      content: "PARAGRAPH",
      tags: ["WORD"],
      author: "FULL_NAME",
      publishedDate: "DATE",
      rating: "CUSTOM_NUMBER_0-5",
      comments: [
        {
          id: "COUNTER",
          author: "FULL_NAME",
          comment: "SENTENCE",
        },
      ],
    },
  ],
});

const port = 8080;

app.use(cors());

app.use(express.json());
app.get("/articles", (req, res) => {
  res.send(
    mockData.articles.map((article) => {
      return {
        id: article.id,
        title: article.title,
        content: article.content,
        tags: article.tags,
        author: article.author,
        publishedDate: article.publishedDate,
        rating: article.rating,
        commentsCount: article.comments.length,
      };
    })
  );
});
app.get("/articles/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const article = mockData.articles.find((article) => article.id === id) || {};
  res.send(article);
});

app.get("/comments/:articleId", (req, res) => {
  const id = parseInt(req.params.id);
  const article = mockData.articles.find((article) => article.id === id) || {};
  res.send(article.comments);
});
app.post("/comments", (req, res) => {
  const { articleId, author, comment } = req.body;
  mockData.articles.forEach((article) => {
    if (article.id === articleId) {
      article.comments.push({ author, comment, id: Date.now() });
    }
  });
  console.log(req.body);
  res.send();
});

app.listen(port, () => console.log(`Listening on port ${port}`));
