import {Helmet} from "react-helmet-async";
import styles from './Article.module.css';
import ArticleItem from "../../Components/ArticleItem/ArticleItem.jsx";
import RightPanel from "../../Components/RightPanel/RightPanel.jsx";
import ArticleComment, {renderComments} from "../../Components/ArticleComment/ArticleComment.jsx";
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import ArticleCommentForm from "../../Components/ArticleCommentForm/ArticleCommentForm.jsx";
import {ApiUrls} from "../../assets/Api/ApiUrls.js";
import {buildTreeData, changeHelmetTitle, stripHtml} from "../../Components/Helpers/Functions.jsx";


function Article() {

     let {id} = useParams();
     id = parseInt(id);
    const [article, setArticle] = useState(null);
    const [loading, setLoading] = useState(true);
    const [comments, setComments] = useState([]);

    const fetchArticleAndComments = async () => {
        setLoading(true);
        const fetchArticle = fetch(`${ApiUrls.mainUrl}posts/${id}/`)
            .then(response => response.json())
            .then(data => {
                setArticle(data);
            })
            .catch(error => {
                console.error('Error fetching article:', error);
            });

        const fetchComments = fetch(`${ApiUrls.mainUrl}post-comments/?post=${id}`)
            .then(response => response.json())
            .then(data => {
                const commentTree = buildTreeData(data, 'parent'); // Budujemy drzewo komentarzy
                setComments(commentTree);
            })
            .catch(error => {
                console.error('Error fetching comments:', error);
            });


        Promise.all([fetchArticle, fetchComments])
            .finally(() => setLoading(false));
    }

    useEffect(() => {
        fetchArticleAndComments();

    }, [id]);





    return (
        <>
            <div className={styles.container}>
                <div className={styles.mainLeft}>
                    {loading ? (
                            <></>
                        ) : (
                            <>
                                {changeHelmetTitle(article.title)}
                                <Helmet>
                                    <meta name={"description"}
                                          content={stripHtml(article.summary)}/>

                                </Helmet>

                                <ArticleItem
                                    key={article.id}
                                    item={article}
                                />
                        {/*{comments.map(comment => (*/}
                        {/*    <ArticleComment*/}
                        {/*        key={comment.id}*/}
                        {/*        item={comment}*/}
                        {/*        articleId={article.id}*/}
                        {/*    />*/}
                        {/*))}*/}
                                {renderComments(comments, article.id)}
                        <ArticleCommentForm articleId={article.id} onCommentAdded={fetchArticleAndComments}  />
                            </>
                    )
                    }




                </div>
                <RightPanel/>
            </div>
        </>
    );
}

export default Article;