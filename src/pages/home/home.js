import React from "react"
import ArticleContent from "../../commons/components/article-content/article-content"

function Home () {

return(
<div >

    {[1,2,1,1,1].map((i,key)=><ArticleContent id={key} key={key}/>)}
    </div>
)}


export default Home; 