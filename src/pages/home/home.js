import React from 'react';
import Banner from '../../components/banner';
import '../../App.css'
import Create_recomendedProds from './HomeComponents/recomendeted_products';
import RenderMediumProds from './HomeComponents/mediumProd';
import ShoeBrands from './HomeComponents/brands';
import ShowTrendingProds from './HomeComponents/trendingProds';
import Show_second_banner from '../../components/sec_banner';
import Createing_products from './HomeComponents/topProducts';
const Home = ()=>{
    return(
        <>
        <Banner/>
        <Createing_products/>
        <RenderMediumProds/>
        <Create_recomendedProds/>
        <Show_second_banner/>
        <ShowTrendingProds/>
        <ShoeBrands/>
        </>
    )
}

export default Home