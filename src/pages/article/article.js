import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ArticleContent from "../../commons/components/article-content/article-content";

function Article() {
  const [article, setArticle] = useState();
  let { id } = useParams();

  console.log(id);
  useEffect(() => {
    fetch(`http://localhost:8080/articles/${id}`)
      .then((res) => res.json())
      .then((res) => setArticle(res));
  }, [id]);

  return article ? (
    <ArticleContent {...article} shouldDisplayComments={true} />
  ) : null;
}

export default Article;
