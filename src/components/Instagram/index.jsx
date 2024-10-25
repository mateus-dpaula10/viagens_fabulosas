import React, { useEffect, useRef, useState } from 'react'
import styles from './Instagram.module.scss'
import axios from 'axios'

const Instagram = () => {
    const [feedList, setFeedList] = useState([])
    const [user, setUser] = useState(null)
    const token = 'IGQWRPUjRfMXhMR2V3d2FUMEJObGN6NHhzWW9FTURwS3d0NmV0Tk5TZA0lNRXlrX2U0eXlDeDFxYm9SU29pNnhiNF83X0t6bWFRbkFEREJGRDJHVldDUWVZAOWJXUkxQMWV5UFA1NDI4SktYenJucllqZAENHSzFGbkUZD'

    async function getInstaFeed() {
        try {
            const fields = 'media_url,media_type,permalink,caption'
            const url = `https://graph.instagram.com/me/media?access_token=${token}&fields=${fields}`
            const { data } = await axios.get(url)
            setFeedList(data.data)
        } catch (error) {
            console.error('Erro ao buscar: ', error)
        }
    }

    async function getInstaUser() {
        try {
            const fields = 'id,username,account_type,name,media_count,profile_picture_url'
            const url = `https://graph.instagram.com/me/media?access_token=${token}&fields=${fields}`
            const { data } = await axios.get(url)
            setUser(data.data[0].username)
        } catch (error) {
            console.error('Erro ao buscar: ', error)
        }
    }

    useEffect(() => {
        getInstaFeed()
        getInstaUser()
    }, [])

    const LimitaPalavras = ({ texto, limite }) => {
        const txt = (texto, limite) => {
            const palavras = texto.split(' ')
            if (palavras.length > limite) {
                return palavras.slice(0, limite).join(' ') + '...'
            }
            return texto
        }

        return <h5>{txt(texto, limite)}</h5>
    }   

    useEffect(() => {
        const handleFullScreenChange = () => {
            if (document.fullscreenElement) {
                document.querySelectorAll('video').forEach(item => {
                    item.style.objectFit = 'contain'
                })
            } else {
                document.querySelectorAll('video').forEach(item => {
                    item.style.objectFit = 'cover'
                })
            }
        }

        document.addEventListener('fullscreenchange', handleFullScreenChange)

        return () => {
            document.removeEventListener('fullscreenchange', handleFullScreenChange)
        }
    }, [])

    return (
        <div className={"container " + styles.instagram_feed}>
            <h1>INSTAGRAM - <a target='_blank' href={`https://instagram.com/${user}`}>@{user}</a></h1>

            <div className={styles.itens_feed}>
                {feedList
                    .filter(post => post.media_type === "IMAGE" | post.media_type === "VIDEO")
                    .slice(0, 12)
                    .map(post => (
                        <div key={post.id}>
                            <a href={post.permalink} target='_blank' title={"Ver publicação " + `"${post.caption}"` + " no Instagram"}>                          
                                <div className={styles.bg}>
                                    {post.media_type === "IMAGE" ? 
                                        <img src={post.media_url} alt={post.caption} /> :
                                        <video controls>
                                            <source src={post.media_url} />
                                        </video>
                                    }
                                </div>                        
                                {post.caption && <LimitaPalavras texto={post.caption} limite={10} />}                        
                            </a>                    
                        </div>
                    ))
                    }         
            </div>
        </div>
    )
}

export default Instagram