import {Helmet} from "react-helmet-async";
import styles from './Article.module.css';
import ArticleItem from "../../Components/ArticleItem/ArticleItem.jsx";
import RightPanel from "../../Components/RightPanel/RightPanel.jsx";
import ArticleComment, {renderComments} from "../../Components/ArticleComment/ArticleComment.jsx";
import {useNavigate, useParams} from "react-router-dom";
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
    const navigate = useNavigate();

    const fetchArticleAndComments = async () => {
        setLoading(true);
        try {
            // Fetch artykuł
            const articleResponse = await fetch(`${ApiUrls.mainUrl}posts/${id}/`);
            const articleData = await articleResponse.json();
            setArticle(articleData);

            // Fetch komentarze
            const commentsResponse = await fetch(`${ApiUrls.mainUrl}post-comments/?post=${id}`);
            const commentsData = await commentsResponse.json();
            const commentTree = buildTreeData(commentsData, 'parent'); // Budujemy drzewo komentarzy
            setComments(commentTree);
        } catch (error) {
            console.error('Error fetching data:', error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        const fetchData = async () => {
            await fetchArticleAndComments();
        };
        fetchData();
    }, [id]);

    useEffect(() => {
        if (article && article.slug) {
            if (window.location.pathname !== `/artykul/${id}-${article.slug}`) {
                navigate(`/artykul/${id}-${article.slug}`);
            }
        }
    }, [article]);





    return (
        <>

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
                                    showConent={true}
                                />
                                {renderComments(comments, article.id)}
                        <ArticleCommentForm articleId={article.id} onCommentAdded={fetchArticleAndComments}  />
                            </>
                    )
                    }

        </>
    );
}

export default Article;