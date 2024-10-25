import styles from './Footer.module.scss'

const Footer = () => {
    const year = new Date()
        .getFullYear()
        .toLocaleString()
        .replace(/\./g, '')    

    return (
        <footer className={styles.footer}>
            <div className="container">
                <p>
                    Copyright &copy; {year} - <a href="https://instagram.com/mateuss.dpaula10">Desenvolvido por Mateus De Paula</a>
                </p>
            </div>
        </footer>
    )
}

export default Footer