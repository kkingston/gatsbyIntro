import React from 'react' 
import { Link } from 'gatsby' 
import Layout from '../components/layout'
import Insta from '../components/insta'


export default () => (
  <Layout>
    <h1>About Me</h1>
    <p>This is my personal website!</p>
    <Link to="/">&larr; Back to Home</Link>
    <Insta/>
  </Layout>
)