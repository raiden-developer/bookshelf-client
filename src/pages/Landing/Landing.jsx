import Header from '../../components/common/Header/Header'

import styles from './Landing.module.scss'
import notebookImage from '../../assets/images/landing/notebook.svg'
import booksLoverImage from '../../assets/images/landing/books_lover.svg'
import Heading from '../../components/ui/Heading/Heading'

function Landing() {
  return (
    <>
      <Header />
      <section className={`${styles.hero}`}>
        <div className={`${styles['hero__inner']} container`}>
          <div className={`${styles['hero__content']}`}>
            <Heading level="h1" type='h1'>
              Books Impact - ваш лучший книжный менеджер
            </Heading>
            <p>
              Books Impact  - удобный менеджер книг, который позволяет вам хранить списки прочитанных книг, просматривать статистику, создавать свои подборки книг или смотреть подборки книг других людей.
            </p>
          </div>
          <div className={`${styles['hero__image']}`}>
            <img src={notebookImage} alt="Notebook with girl" />
          </div>
        </div>
      </section>
      <section className={`${styles.hero}`}>
        <div className={`${styles['hero__inner']} container`}>
          <div className={`${styles['hero__image']}`}>
            <img src={booksLoverImage} alt="Notebook with girl" />
          </div>
          <div className={`${styles['hero__content']}`}>
            <Heading type='h1'>
              Почему так важно читать в современном мире
            </Heading>

            <p>
              Чтение книг способствует расширению словарного запаса, повышению грамотности, а также развитию кругозора, фантазии, воображения. Также регулярное знакомство с литературой улучшает память и навыки восприятия текстовой информации, что очень помогает в учебе.
            </p>

            <p>
              Одно из важных преимуществ чтения книг — это тот положительный эффект, который оно оказывает на наше мышление. При чтении мы больше рассуждаем, чтобы понять ту или иную идею произведения. Это тренирует память и логику.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
export default Landing
