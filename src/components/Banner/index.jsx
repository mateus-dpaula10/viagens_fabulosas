import styles from './Banner.module.scss'
import banner from '../../assets/banner.avif'

const Banner = () => {
    return (
        <div className={styles.banner}>
            <img src={banner} />
        </div>
    )
}

export default Banner