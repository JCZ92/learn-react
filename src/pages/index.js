// import Head from 'next/head'
// import Image from 'next/image'
// import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Profile from './components/profile'
// import Gallery from "./qcomps/state"
import Gallery from './components/whyState'
import PersonData from './components/stateObj'
// import Form from './components/snapshot2'
import Form from './components/updObjects'
import FeedbackForm from './qcomps/thankYouCrash'
import Counter from './components/snapshot'
import RequestTracker from './qcomps/shoppingCart'
import Scoreboard from './qcomps/updObjectsForm'
import List from './qcomps/artistsRemoveArr'
import BucketList from './qcomps/arrObj'


export default function Home() {
  return (
    <div className={styles.main}>
        
        <BucketList />
        <List />
        <Scoreboard />
        <Form />
        <RequestTracker />
        {/* <Form /> */}
        <Counter />
        <FeedbackForm />
        {/* <Form /> */}
        <PersonData />
        <Profile />
        <Gallery />
    </div>
  )
}
