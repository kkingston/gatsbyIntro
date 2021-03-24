import React from 'react'
import styled from '@emotion/styled'
import { Link, graphql, useStaticQuery } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'

const ImageBackground = styled(BackgroundImage)`
  background-position: bottom center;
  background-size: cover;
  height: 50vw;

  + * {
    margin-top: 0;
  }
`

const TextBox = styled('div')`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: flex-end;
  padding: 0 calc((100vw - 550px) / 2) 2rem;
  width: 100%;

  h1 {
   font-size: 2.25rem; 
   color: #f8f8f3;
  }

  p,
  a {
    color: #f8f8f3;
    margin-top: 0;
  }

  a {
    margin-top: 0.5rem;
  }
`

const Hero = () => {
  const { image } = useStaticQuery(graphql`
    query {
      image: file(relativePath: {
        eq: "jason-blackeye.jpg"
      }) {
        sharp: childImageSharp {
          fluid {
           ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)
  return (
    <ImageBackground Tag="section" fluid={image.sharp.fluid}>
      <TextBox>
      <h1>Frontend Masters + Gatsby &hearts;</h1>
      <p>
        Hello Seattle! <Link to='/about/'>Learn about me &larr;</Link>
      </p>
      </TextBox>
    </ImageBackground>
  )
}

export default Hero;


