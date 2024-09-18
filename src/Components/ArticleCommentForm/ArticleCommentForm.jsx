import styles from './ArticleCommentForm.module.css';
import { useState } from 'react';
function ArticleCommentForm({articleId, parentId = null }) {

    const [comment, setComment] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);
    const isValidEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);
        setSuccess(false);

        // Sprawdzenie czy wymagane pola są uzupełnione
        if (!comment || !name || !email) {
            setError('Proszę wypełnić wszystkie wymagane pola.');
            setLoading(false);
            return;
        }
        if (!isValidEmail(email)) {
            setError('Proszę podać prawidłowy adres e-mail.');
            setLoading(false);
            return;
        }

        // Dane do wysłania
        const commentData = {
            post: articleId,   // Id artykułu
            parent: parentId,    // Id rodzica (dla odpowiedzi na komentarz)
            content: comment,     // Treść komentarza
            name,        // Nazwa użytkownika
            email,       // Email użytkownika
        };

        try {
            // Wysyłanie komentarza do API (zastąp URL adresem swojego API)
            const response = await fetch('http://localhost:8000/api/post-comments/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(commentData),
            });

            if (!response.ok) {
                throw new Error('Nie udało się wysłać komentarza.');
            }

            // Jeśli wszystko się udało
            setSuccess(true);
            setComment('');
            setName('');
            setEmail('');
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };
    return (
        <>
            <div className={styles.comment}>
                <div className={styles.title}>Dodaj komentarz</div>
                <div className={styles.description}>
                    Twój adres e-mail nie zostanie opublikowany. Wymagane pola są oznaczone *
                </div>
                <form className={styles.form} onSubmit={handleSubmit}>
                    <div className={styles.label}>Komentarz *</div>
                    <textarea
                        className={styles.textarea}
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                    ></textarea>
                    <div className={styles.label}>Nazwa *</div>
                    <input
                        className={styles.input}
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <div className={styles.label}>E-mail *</div>
                    <input
                        className={styles.input}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <p>
                        <button className={styles.button} type="submit" disabled={loading}>
                            {loading ? 'Wysyłanie...' : 'Wyślij komentarz'}
                        </button>
                    </p>
                    {error && <div className={styles.error}>{error}</div>}
                    {success && <div className={styles.success}>Komentarz został wysłany!</div>}
                </form>
            </div>
        </>
    );

}

export default ArticleCommentForm;