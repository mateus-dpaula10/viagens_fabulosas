import React, { useEffect, useState } from 'react'
import styles from './Instagram.module.scss'
import axios from 'axios'

const Instagram = () => {
    const [feedList, setFeedList] = useState([])
    const [user, setUser] = useState(null)
    const token = 'IGQWRNaWRfbjFLYUdKQXA2RG5KNnY4bEQ1ZAW5jYkNUdkJVY1dENE9YaEZABWmUtWnI2TzY0WE9VUVZAvV1RtcTIySTVIN281MEk5NGRXeUhmdUdMUzVqSnJlWDZAQMnl4M2Q4YjVScDBpZAnU1ZAXZATaXp5dzE4Y0hXRkUZD'

    async function getInstaFeed() {
        const fields = 'media_url,media_type,permalink,caption'
        const url = `https://graph.instagram.com/me/media?access_token=${token}&fields=${fields}`
        const { data } = await axios.get(url)
        setFeedList(data.data)
    }

    async function getInstaUser() {
        const fields = 'id,username,account_type,name,media_count,profile_picture_url'
        const url = `https://graph.instagram.com/me/media?access_token=${token}&fields=${fields}`
        const { data } = await axios.get(url)
        setUser(data.data[0].username)
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