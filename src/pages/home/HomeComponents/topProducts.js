import React from "react";
import { useContext } from "react";
import CreatedContext from './productContext';
import Child_Fun from "./child";
import './top_prod.css'



const Createing_products = () => {

    const top_products_baza = [
        {
            id:15,
            img: 'https://images.moneycontrol.com/static-mcnews/2021/08/Tesla-Bot-770x433.jpg?impolicy=website&width=770&height=431',
            images: [
                'https://d.newsweek.com/en/full/2493228/tesla-optimus-humanoid-robot.png?w=1600&h=1200&q=88&f=bb9304e08b261734627821988b5fccdf',
                'https://w0.peakpx.com/wallpaper/226/649/HD-wallpaper-tesla-bot.jpg',
                'https://images.moneycontrol.com/static-mcnews/2021/08/Tesla-Bot-770x433.jpg?impolicy=website&width=770&height=431'
            ],
            name: 'TESLA ROBOT-HUMAN',
            information: 'human-robot helper',
            price: 236000,
            bigInfo: "Tesla, «Тесла» — американская компания, производитель электромобилей и систем для хранения электроэнергии[4][5][6][7].ания была основана в июле 2003 года Мартином Эберхардом[англ.] и Марком Тарпеннингом, но нынешнее руководство компании называет сооснователями Илона Маска, Джеффри Брайана Страубела и Иэна Райта[8][9]."
        },
        {
            id:16,
            img: 'https://cdn.motor1.com/images/mgl/AkgNYO/s1/tesla-model-y.jpg',
            images: [
                'https://wallpapercave.com/wp/wp9753265.jpg',
                'https://twraps.com/cdn/shop/collections/3E0AAD7E-677C-47DC-84AD-76520B770A0D.jpg?v=1637095286',
                'https://cdn.motor1.com/images/mgl/AkgNYO/s1/tesla-model-y.jpg'
            ],
            name: 'TESLA MODEL X',
            information: 'the modernest auto',
            price: 236000,
            bigInfo: "Our vehicles are some of the safest in the world. After safety, our goal is to make every Tesla the most fun you could possibly have in a vehicle. We build features that make being in your vehicle more enjoyable—from gaming to movies, easter eggs and more. With over-the-air software updates, we regularly introduce features at the push of a button."
        },
        {   
            id:17,
            img: 'https://helios-i.mashable.com/imagery/articles/02cSMSAFgSix8qNGpVxtpER/hero-image.fill.size_1248x702.v1701437668.png',
            images: [
                'https://www.greendrive-accessories.com/blog/wp-content/uploads/2023/11/Tesla-Cybertruck-Leaked-Features-Awards-Controversies.jpg',
                'https://helios-i.mashable.com/imagery/articles/02cSMSAFgSix8qNGpVxtpER/hero-image.fill.size_1248x702.v1701437668.png',
                'https://i.pinimg.com/736x/09/33/3b/09333b96f0f48ffed10511ffe2c1617d.jpg'
            ],
            name: 'TESLA CYBERTRACK',
            information: 'MODER auto',
            price: 256000,
            bigInfo: "Our vehicles are some of the safest in the world. After safety, our goal is to make every Tesla the most fun you could possibly have in a vehicle. We build features that make being in your vehicle more enjoyable—from gaming to movies, easter eggs and more. With over-the-air software updates, we regularly introduce features at the push of a button."
        },
        {
            id:18,
            img: 'https://www.teslarati.com/wp-content/uploads/2024/12/tesla-powerwall-3-puerto-rico.jpg',
            images: [
                'https://www.teslarati.com/wp-content/uploads/2024/12/tesla-powerwall-3-puerto-rico.jpg',
                'https://www.penrithsolar.com.au/wp-content/uploads/Tesla_Powerwall_3_Product_03_AUNZ-1-600x600.png'
            ],
            name: 'TESLA ENERGY',
            information: 'your homes energy',
            price: 56000,
            bigInfo: "Our vehicles are some of the safest in the world. After safety, our goal is to make every Tesla the most fun you could possibly have in a vehicle. We build features that make being in your vehicle more enjoyable—from gaming to movies, easter eggs and more. With over-the-air software updates, we regularly introduce features at the push of a button."
        },
        {
            id:19,
            img: 'https://img.freepik.com/premium-photo/3d-rendering-artificial-intelligence-robot-cyborg-isolated-black-background_493806-12687.jpg',
            images: [
                'https://img.freepik.com/premium-photo/3d-rendering-female-cyborg-robot-thinking-black-background_493806-10376.jpg',
                'https://img.freepik.com/premium-photo/3d-rendering-artificial-intelligence-robot-cyborg-isolated-black-background_493806-12687.jpg'
            ],
            name: 'TESLA Women robot',
            information: 'just buy it',
            price: 560000,
            bigInfo: "Our vehicles are some of the safest in the world. After safety, our goal is to make every Tesla the most fun you could possibly have in a vehicle. We build features that make being in your vehicle more enjoyable—from gaming to movies, easter eggs and more. With over-the-air software updates, we regularly introduce features at the push of a button."
        },
        {
            id:20,
            img: 'https://edgeup.asus.com/wp-content/uploads/2023/08/feature-proart-graphics-cards.jpg',
            images: [
                'https://edgeup.asus.com/wp-content/uploads/2023/08/feature-proart-graphics-cards.jpg',
                'https://assetsio.gnwcdn.com/EVGA-graphics-card.jpg?width=1200&height=1200&fit=bounds&quality=70&format=jpg&auto=webp'
            ],
            name: 'graphik cards',
            information: 'your computer energy',
            price: 1200,
            bigInfo: "Our vehicles are some of the safest in the world. After safety, our goal is to make every Tesla the most fun you could possibly have in a vehicle. We build features that make being in your vehicle more enjoyable—from gaming to movies, easter eggs and more. With over-the-air software updates, we regularly introduce features at the push of a button."
        },
        {
            id:21,
            img: 'https://media.idownloadblog.com/wp-content/uploads/2020/12/twelve-south-airfly-pro-airpods-max-hero-005.jpg',
            images: [
                'https://media.idownloadblog.com/wp-content/uploads/2020/12/twelve-south-airfly-pro-airpods-max-hero-005.jpg',
                'https://i.pinimg.com/736x/46/e8/22/46e8221d9b37fb6e77023660e0c631fb.jpg'
            ],
            name: 'AirPods Max Gaming',
            price: 1500,
            information: 'for comfortable listening',
            bigInfo: "Our vehicles are some of the safest in the world. After safety, our goal is to make every Tesla the most fun you could possibly have in a vehicle. We build features that make being in your vehicle more enjoyable—from gaming to movies, easter eggs and more. With over-the-air software updates, we regularly introduce features at the push of a button."
        }
    ]

    return (
        <div className="top_products_box">
            <div className="top_product_title"><p>TOP     REACTED    PRODUCTS</p></div>
            <div className="allTopProducts">
                <CreatedContext.Provider value={top_products_baza}>
                    <Child_Fun />
                </CreatedContext.Provider>
            </div>
        </div>
    )
}
export default Createing_products