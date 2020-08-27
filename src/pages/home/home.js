import React,{useEffect,useState} from "react"
import ArticleContent from "../../commons/components/article-content/article-content"

function Home () {
    const [articles, setArticles] = useState([])

    useEffect(() => {
        fetch("http://localhost:8080/articles").then(res=>res.json())
        .then(res=>setArticles(res))
    },[])
return(
<div >

    {articles.map((article)=><ArticleContent 
     key={article.id}
     {...article}
    />)}
    </div>
)}


export default Home; 