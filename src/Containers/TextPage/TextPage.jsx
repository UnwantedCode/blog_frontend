import {Helmet} from "react-helmet-async";
import styles from './TextPage.module.css';
import RightPanel from "../../Components/RightPanel/RightPanel.jsx";
import {useEffect, useState} from "react";
import {ApiUrls} from "../../assets/Api/ApiUrls.js";
import {changeHelmetTitle, stripHtml} from "../../Components/Helpers/Functions.jsx";


function TextPage({id}) {
    console.log(id)
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    useEffect(() => {
        fetch(`${ApiUrls.mainUrl}text-pages/${id}/`)
            .then(response => response.json())
            .then(data => {
                setData(data)
                setLoading(false)
            })
            .catch(error => {
                setError(error)
                setLoading(false)
            })
    }, [id])


    return (
        <>
                    {loading ? (
                        <></>
                    ) : (
                        <>
                            {changeHelmetTitle(data.title)}
                            <Helmet>
                                <meta name={"description"} content={stripHtml(data.content)}/>
                            </Helmet>
                            <div className={styles.wrapper}>
                            <h1 className={styles.title}>{data.title}</h1>
                            <div className={styles.content} dangerouslySetInnerHTML={{__html: data.content}}/>
                            </div>
                        </>
                    )}



            {/*<MainPageSlider />*/}
        </>
    );
}

export default TextPage;