import React from 'react'
import { Helmet } from "react-helmet";
const PageTitle = ({title, discription}) => {
  return (
    <Helmet>
    <title>داشبورد مدیریت</title>
    <meta name={title} content={discription}/>
    </Helmet>
  )
}

export default PageTitle
