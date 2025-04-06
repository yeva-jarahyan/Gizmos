import React from "react";
import CreatedRecContext from "./recomendedContext";
import './recomendeted_products.css'
import UseRecProdsContext_fun from "./recomendedChild";
const Create_recomendedProds = () => {
    const recomendatedProductsBaza = [
        {
            id:1,
            img: 'https://cdn.pixabay.com/photo/2015/05/15/03/31/macbook-767806_1280.jpg',
            name: 'MacBook Pro',
            price: 2600,
            information: 'macbook for bussines ',
            bigInfo:'A laptop computer or notebook computer, also known as a laptop or notebook, is a small, portable personal computer (PC). Laptops typically have a clamshell form factor with a flat-panel screen on the inside of the upper lid and an alphanumeric keyboard and pointing device on the inside of the lower lid.[1][2] Most of the computers internal hardware is in the lower part, under the keyboard,'
        },
        {
            id:2,
            img: 'https://www.noxogaming.eu/wp-content/uploads/2021/12/Pyre-2.jpg',
            name: 'gameing headphones',
            price: 560,
            information: 'headphone for games',
            bogInfo:'They are electroacoustic transducers, which convert an electrical signal to a corresponding sound. Headphones let a single user listen to an audio source privately, in contrast to a loudspeaker, which emits sound into the open air for anyone nearby to hear. Headphones are also known as earphones or, colloquially, cans.'
        },
        {
            id:3,
            img: 'https://img.freepik.com/premium-photo/3d-illustration-black-pendrive-isolated-black-background_351397-357.jpg',
            name: 'Fleshka',
            price: 160,
            information: '2gb fleshka for a lot og information',
            bigInfo:'A computer mouse (plural mice, also mouses) is a hand-held pointing device that detects two-dimensional motion relative to a surface. This motion is typically translated into the motion of the pointer (called a cursor) on a display, which allows a smooth control of the graphical user interface of a computer.'
        },
        {
            id:4,
            img: 'https://guide-images.cdn.ifixit.com/igi/rpYL1sVdJsDcQBEV.large',
            name: 'Apple Mouse ',
            price: 120,
            information: 'Apple Mouse for mac computers',
            bigInfo:'A computer mouse (plural mice, also mouses) is a hand-held pointing device that detects two-dimensional motion relative to a surface. This motion is typically translated into the motion of the pointer (called a cursor) on a display, which allows a smooth control of the graphical user interface of a computer.'
        },
        {
            id:5,
            img: 'https://i.pinimg.com/736x/a5/c7/99/a5c7997ca72d6754c217b779f2a37dcd.jpg',
            name: 'computer case',
            price: 15610,
            information: 'huge computer case for gameing',
            bigInfo:'They are electroacoustic transducers, which convert an electrical signal to a corresponding sound. Headphones let a single user listen to an audio source privately, in contrast to a loudspeaker, which emits sound into the open air for anyone nearby to hear. Headphones are also known as earphones or, colloquially, cans.'
        },   
         {
            id:6,
            img: 'https://c8.alamy.com/zooms/9/dba0c9b3f3964fd69e44e9ec02b9f5c5/2be034e.jpg',
            name: 'plaing jostic',
            price: 260,
            information: 'jostic for plastation games ',
            bigInfo:'They are electroacoustic transducers, which convert an electrical signal to a corresponding sound. Headphones let a single user listen to an audio source privately, in contrast to a loudspeaker, which emits sound into the open air for anyone nearby to hear. Headphones are also known as earphones or, colloquially, cans.'
        },
        {
            id:7,
            img: 'https://media.idownloadblog.com/wp-content/uploads/2020/12/twelve-south-airfly-pro-airpods-max-hero-005.jpg',
            name: 'AirPods Max Gaming',
            price: 1500,
            information: 'AirPods Max for comfortable listening',
            bigInfo:'They are electroacoustic transducers, which convert an electrical signal to a corresponding sound. Headphones let a single user listen to an audio source privately, in contrast to a loudspeaker, which emits sound into the open air for anyone nearby to hear. Headphones are also known as earphones or, colloquially, cans.'
        }
    ]

    return(
        <>
            <div className="mainRecProductsBox">
                <div className="recomendedTextBox"><p>RECOMENDED PRODUCTS OF ALL</p></div>
                <div className="recomendedProdsBox">
                <CreatedRecContext.Provider value={recomendatedProductsBaza}><UseRecProdsContext_fun/></CreatedRecContext.Provider>
                    
                </div>
            </div>

        </>
    )
}


export default Create_recomendedProds