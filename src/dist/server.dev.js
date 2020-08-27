"use strict";

var express = require("express");

var patternMock = require("pattern-mock");

var cors = require("cors");

var app = express();
var mockData = patternMock({
  articles: [{
    id: "COUNTER",
    title: "SENTENCE",
    content: "PARAGRAPH",
    tags: ["WORD"],
    author: "FULL_NAME",
    publishedDate: "DATE",
    rating: "CUSTOM_NUMBER_0-5",
    comments: [{
      id: "COUNTER",
      author: "FULL_NAME",
      comment: "SENTENCE"
    }]
  }]
});
var port = 8080;
app.use(cors());
app.use(express.json());
app.get("/articles", function (req, res) {
  res.send(mockData.articles.map(function (article) {
    return {
      id: article.id,
      title: article.title,
      content: article.content,
      tags: article.tags,
      author: article.author,
      publishedDate: article.publishedDate,
      rating: article.rating,
      commentsCount: article.comments.length
    };
  }));
});
app.get("/articles/:id", function (req, res) {
  var id = parseInt(req.params.id);
  var article = mockData.articles.find(function (article) {
    return article.id === id;
  }) || {};
  res.send(article);
});
app.get("/comments/:articleId", function (req, res) {
  var id = parseInt(req.params.id);
  var article = mockData.articles.find(function (article) {
    return article.id === id;
  }) || {};
  res.send(article.comments);
});
app.post("/comments", function (req, res) {
  var _req$body = req.body,
      articleId = _req$body.articleId,
      author = _req$body.author,
      comment = _req$body.comment;
  mockData.articles.forEach(function (article) {
    if (article.id === articleId) {
      article.comments.push({
        author: author,
        comment: comment,
        id: Date.now()
      });
    }
  });
  console.log(req.body);
  res.send();
});
app.listen(port, function () {
  return console.log("Listening on port ".concat(port));
});