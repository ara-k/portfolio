import { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>荒開発 | 4r4.dev</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>About</h1>
        <p className={styles.description}>
          荒 圭亮(Keisuke Ara)
          <br />
          屋号: 荒開発
        </p>

        <h2>Me</h2>
        <ul>
          <li>Webプログラマーをしています。</li>
          <li>フルタイム正社員、個人事業主、大学院生をしています。</li>
          <li>
            フロントエンド/バックエンドの開発が可能ですが、今後はフロントエンドを中心に開発していきたいです。
          </li>
        </ul>

        <h2>Personality</h2>
        <h3>Birthday</h3>
        <ul>
          <li>1993/12/06</li>
        </ul>
        <h3>Hometown</h3>
        <ul>
          <li>福島県相馬市</li>
        </ul>
        <h3>Hobby</h3>
        <ul>
          <li>
            音楽
            <ul>
              <li>ギター</li>
              <li>ベース</li>
              <li>ライブ</li>
            </ul>
          </li>
          <li>
            食事
            <ul>
              <li>自炊</li>
              <li>外食</li>
            </ul>
          </li>
          <li>
            ゲーム
            <ul>
              <li>FPS</li>
            </ul>
          </li>
        </ul>

        <h2>Educational background</h2>
        <ul>
          <li>2009/04 福島県立相馬高等学校 理数科 入学</li>
          <li>2012/03 福島県立相馬高等学校 理数科 卒業</li>
          <li>
            2012/04 首都大学東京 都市教養学部 都市教養学科 経営学系 経営学コース
            入学
          </li>
          <li>
            2016/03 首都大学東京 都市教養学部 都市教養学科 経営学系 経営学コース
            卒業
          </li>
          <li>
            2020/04 東京都立産業技術大学院大学 産業技術専攻 創造技術コース 入学
          </li>
        </ul>

        <h2>Career</h2>
        <ul>
          <li>2016/04 大手ERPパッケージベンダ 入社</li>
          <li>2017/11 大手ERPパッケージベンダ 退社</li>
          <li>2018/02 不動産テック系SaaSベンダ 入社</li>
        </ul>

        <h2>Skill</h2>
        <h3>Programming language</h3>
        <ul>
          <li>TypeScript</li>
          <li>Go</li>
          <li>Ruby</li>
          <li>Python</li>
        </ul>
        <h3>Library/Framework</h3>
        <ul>
          <li>React</li>
          <li>Next.js</li>
          <li>React Native</li>
          <li>Gin</li>
          <li>GORM</li>
          <li>Ruby on Rails</li>
          <li>Pandas</li>
          <li>scikit-learn</li>
          <li>keras</li>
        </ul>
        <h3>Database</h3>
        <ul>
          <li>MySQL</li>
          <li>PostgreSQL</li>
          <li>Redis</li>
        </ul>
        <h3>Development environment</h3>
        <ul>
          <li>Docker</li>
          <li>AWS</li>
          <li>Heroku</li>
          <li>Swagger</li>
          <li>GraphQL</li>
          <li>REST API</li>
          <li>CircleCi</li>
          <li>Netlify</li>
          <li>Vercel</li>
          <li>SendGrid</li>
          <li>Shopify</li>
        </ul>
        <h3>Tool</h3>
        <ul>
          <li>Github</li>
          <li>Notion</li>
          <li>Miro</li>
          <li>ClickUp</li>
          <li>Asana</li>
          <li>Trello</li>
          <li>Sketch</li>
          <li>Figma</li>
        </ul>

        <h2>Contact</h2>
        <ul>
          <li>
            <a
              className={styles.link}
              href="https://www.facebook.com/ara.keisuke/"
            >
              Facebook
            </a>
          </li>
          <li>
            <a className={styles.link} href="https://twitter.com/This_is_4R4">
              Twitter
            </a>
          </li>
          <li>
            <a className={styles.link} href="https://github.com/ara-k">
              Github
            </a>
          </li>
        </ul>
      </main>

      <footer className={styles.footer}>
        <p>Copyright (C) 2021 荒開発. All Rights Reserved.</p>
      </footer>
    </div>
  )
}

export default Home
