import styles from './Banner.module.scss'

const Banner = () => {
    return (
        <div className={styles.banner}>
            <div className="container">
                <div className={styles.conteudo}>
                    <h1>
                        VIAJAR É VIVER, SINTA ESSE PRAZER
                    </h1>
                    <h2>
                        Você está pronto para embarcar em uma aventura com a "VIAGENS FABULOSAS"?
                    </h2>
                </div>
            </div>
        </div>
    )
}

export default Banner