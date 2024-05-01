import React from 'react'
import { siteText } from '../constants'

const Site = () => {
  return (
    <section id="site">
        <dive className="site__inner">
            <h2 className="site__title">Site Coding<em>내 작업물</em></h2>
            <div className="site__wrap">
                {siteText.map((site, key) => (
                    <article className={`site__item s${key+1}`} key={key}>
                        <span className="num">{key+1}.</span>
                        <div className="text">
                            <div>{site.text[0]}</div>
                            <div>{site.text[1]}</div>
                            <div>{site.text[2]}</div>
                        </div>
                        <h3 className="title">
                            {site.title}
                        </h3>
                        <div className="btn">
                            <a href={site.code}>code</a>
                            <a href={site.view}>view</a>
                        </div>
                        <div className="info">
                            <span>{site.info[0]}</span>
                            <span>{site.info[1]}</span>
                            <span>{site.info[2]}</span>
                        </div>
                    </article>
                ))}
            </div>  
        </dive>
    </section>
  )
}

export default Site