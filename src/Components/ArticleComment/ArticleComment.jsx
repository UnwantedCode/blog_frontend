import styles from './ArticleComment.module.css';
import {formatDate} from "../Helpers/Functions.jsx";
import ArticleCommentForm from "../ArticleCommentForm/ArticleCommentForm.jsx";
import {useState} from "react";

export const renderComments = (comments, articleId) => {
    return comments.map(comment => (
        <div key={comment.id} className={styles.commentWrapper}>
            <ArticleComment item={comment} articleId={articleId} />
            {comment.children.length > 0 && (
                <div className={styles.childComments}>
                    {renderComments(comment.children, articleId)}
                </div>
            )}
        </div>
    ));
};

function ArticleComment({item, articleId}) {
    const [showReplyForm, setShowReplyForm] = useState(false);

    const handleReplyClick = () => {
        setShowReplyForm(!showReplyForm);
    };


    return (
        <>
            <div className={styles.item}>
                <div className={styles.name}>{item.name}</div>
                <div className={styles.date}>{formatDate(item.created_at)}</div>
                <div className={styles.text} dangerouslySetInnerHTML={{__html: item.content}}></div>
                <div className={styles.addCommentWrapper}>
                    <button className={styles.button} onClick={handleReplyClick}>ODPOWIEDZ</button>
                </div>
            </div>
            {showReplyForm && (
                <div className={styles.replyForm}>
                    <ArticleCommentForm
                        articleId={articleId}
                        parentId={item.id} // Przekazujemy id komentarza jako parentId
                    />
                </div>
            )}
        </>
    )
        ;
}

export default ArticleComment;