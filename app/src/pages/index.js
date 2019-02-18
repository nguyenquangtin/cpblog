import React from "react"
//import { Link } from "gatsby"

import Layout from "../components/layout";
import Image from "../components/image";
import SEO from "../components/seo";
import Feature from "../components/feature";
import Services from "../components/services";
import Team from "../components/team";
import Client from "../components/clients";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Feature />
    <Services />
    <Team />
    <Client />
  </Layout>
)

export default IndexPage
