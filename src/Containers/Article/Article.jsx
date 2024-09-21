import {Helmet} from "react-helmet-async";
import styles from './Article.module.css';
import ArticleItem from "../../Components/ArticleItem/ArticleItem.jsx";
import RightPanel from "../../Components/RightPanel/RightPanel.jsx";
import ArticleComment from "../../Components/ArticleComment/ArticleComment.jsx";
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import ArticleCommentForm from "../../Components/ArticleCommentForm/ArticleCommentForm.jsx";
import {ApiUrls} from "../../assets/Api/ApiUrls.js";


function Article() {

     let {id} = useParams();
     id = parseInt(id);
    const [article, setArticle] = useState(null);
    const [loading, setLoading] = useState(true);
    const [comments, setComments] = useState([]);
    useEffect(() => {

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
                setComments(data);
            })
            .catch(error => {
                console.error('Error fetching comments:', error);
            });


        Promise.all([fetchArticle, fetchComments])
            .finally(() => setLoading(false));
    }, [id]);





    return (
        <>
            <Helmet>
                <title>Strona glówna</title>
            </Helmet>
            <div className={styles.container}>
                <div className={styles.mainLeft}>
                    {loading ? (
                            <></>
                        ) : (
                            <>
                        <ArticleItem
                        key={article.id}
                        item={article}
                    />
                        {comments.map(comment => (
                            <ArticleComment
                                key={comment.id}
                                item={comment}
                            />
                        ))}
                        <ArticleCommentForm articleId={article.id} />
                            </>
                    )
                    }




                </div>
                <RightPanel/>
            </div>


            {/*<MainPageSlider />*/}
        </>
    );
}

export default Article;