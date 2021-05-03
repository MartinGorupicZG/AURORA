import React from 'react'
import './Companies.scss'
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

const query = graphql`
  {
    allFile(filter: {name: {ne: "logo"}}) {
      nodes {
        childImageSharp {
          gatsbyImageData(
            layout: FIXED
            placeholder: BLURRED
           
            
          )
        }
      }
    }
  }
`






const Companies= () => {

    const data =useStaticQuery(query)
   const nodes =data.allFile.nodes


    return (
        <section className="companies">
            <div className="companies__text">
                <h3>Some of the companies we have helped grow</h3>
                <p>We have worked with 100+ big and small clients in the past 4 years</p>
            </div>
            <div className="companies__grid">
                {nodes.map((image,index)=>{
                    
                    return (
                        <div className="companies__grid__img" key={index}>
                    <GatsbyImage image={image.childImageSharp.gatsbyImageData} alt={`image${index}`}/>
                    </div>
                    )
                   
                })}
        </div>
            </section>
    )
}

export default Companies
