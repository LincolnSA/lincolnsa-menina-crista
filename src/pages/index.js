import { FiInstagram, FiMail } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import Image from 'next/image'
import styles from '../../styles/Home.module.css'

const Home = () => {

  return (
    <>
      <main className={styles.container}>

        <div className={styles.social}>
          <a href=" https://wa.me/5585986426055?text=Olá,%20tudo%20bem?">
            <FaWhatsapp size={28} color="#444053" />
          </a>

          <a href="https://www.instagram.com/lojinhameninacrista/">
            <FiInstagram size={28} color="#444053" />
          </a>

          <a href="mailto:cristmenina28@gmail.com?subject=Olá,%20tudo%20bem?">
            <FiMail size={28} color="#444053" />
          </a>
        </div>

        <div className={styles.home}>

          <p>Amor em cada <br /> <strong>Palavrinha</strong></p>

          <Image src="/svg-reading.svg" alt="Menina lendo" width={500} height={500} />

        </div>

        <div className={styles.about}>

          <span>Sobre</span>

          <div>
            <Image src="/svg-about.svg" alt="Sobre nos" width={500} height={500} />

            <p>Somos uma empresa online voltada ao público de todas as idades, visando contribuir
            para o crescimento em conhecimento religioso de toda família cristã.

                <br />

                Além disso, somos apaixonados pelo que fazemos e essa paixão se traduz numa experiência
                única com cada um de nossos clientes. Assim, dia após  dia, buscamos levar conhecimento,
                 diversão, amizade, união e muito amor para cada lar alcançado.
              </p>
          </div>

        </div>

        <div className={styles.products}>
          <span>Nossos produtos</span>

          <div className={styles.card}>
            {
              [1, 2, 3, 4, 5, 6, 7, 8].map(item => (
                <Image key={item} src={`/product-${item}.jpeg`} alt={`Product-${item}`} width={300} height={300} />
              ))

            }
          </div>
        </div>

        <div className={styles.contact}>
          <span>Mais informações</span>

          <Image src="/svg-contact.svg" alt="Contato" width={500} height={500} />

          <div>

            <a href=" https://wa.me/5585986426055?text=Olá,%20tudo%20bem?">
              <FaWhatsapp size={28} color="#444053" />
            </a>

            <a href="https://www.instagram.com/lojinhameninacrista/">
              <FiInstagram size={28} color="#444053" />
            </a>

            <a href="mailto:cristmenina28@gmail.com?subject=Olá,%20tudo%20bem?">
              <FiMail size={28} color="#444053" />
            </a>

          </div>
        </div>
      </main>
      <footer className={styles.footer}>
        <span>© 2021 Menina Cristã - Criado por Lincoln Silva</span>
      </footer>
    </>
  )
}

export default Home;
