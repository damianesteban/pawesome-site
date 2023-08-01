import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
      <img src="img/pawesome.png" alt="" />
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <i>{"Pawesome is an open-source web application that simplifies and optimizes animal shelter and rescue management. It handles everything from intake records to adoption processing, featuring an intuitive interface that tracks an animal's journey. With capabilities like volunteer coordination and donor management, Pawesome caters to all shelter needs, fostering a collaborative environment that evolves with the animal welfare community. Ideal for all scales of operations, Pawesome streamlines animal rescue management, facilitating a more effective and compassionate approach."}</i>
        <div>
          
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
