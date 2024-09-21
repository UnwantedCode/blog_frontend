import {Helmet} from "react-helmet-async";
import styles from './TextPage.module.css';
import RightPanel from "../../Components/RightPanel/RightPanel.jsx";
import {useEffect, useState} from "react";
import {ApiUrls} from "../../assets/Api/ApiUrls.js";


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
            <Helmet>
                <title>Strona glówna</title>
            </Helmet>
            <div className={styles.container}>
                <div className={styles.mainLeft}>
                    {loading ? (
                        <></>
                    ) : (
                        <>
                            <h1 className={styles.title}>{data.title}</h1>
                            <div className={styles.content} dangerouslySetInnerHTML={{__html: data.content}}/>
                        </>
                    )}

                </div>
                <RightPanel/>
            </div>


            {/*<MainPageSlider />*/}
        </>
    );
}

export default TextPage;