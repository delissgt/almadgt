// import Head from 'next/head'
// import Image from 'next/image'
// import styles from '../styles/Home.module.css'
// import 'antd/dist/antd.css';


import {Layout} from 'antd';
import HeaderNavigation from "../src/components/layout/HeaderNavigation";


const { Header, Footer, Content } = Layout;

export default function Home(props) {
  return (
    <>
      <Layout className={'layout'}>
        <Header>
         <HeaderNavigation/>
        </Header>
        <Content>
          {props.children}
        </Content>
        <Footer>
          footer
        </Footer>
      </Layout>

    </>
  )
}
