import React from "react";
import TrendingContext from "./trendingProdContext";
import UseTrendingProdContext from "./trendingChild";
import { useState } from "react";

import './trendingProds.css'
const ShowTrendingProds = () => {
    const [filteredProds, setFilteredProds] = useState([]);

    const trendingProdsBaza = [
        {
            id: 8,
            name: 'streto Gameing headphones',
            price: 300,
            img: "https://i.pinimg.com/1200x/67/af/43/67af43263ce57e66bc9152c9438f2b7a.jpg",
            information: 'made in Germany',
            Style: '--extrenalSSD: true',
            bigInfo: "A microphone is a device that translates sound vibrations in the air into electronic signals and scribes them to a recording medium or over a loudspeakericrophones enable many types of audio recording devices for purposes including communications of many kinds, as well as music vocals, speech and sound recording."
        },
        {
            id: 9,
            name: 'huge air cooler',
            price: 3000,
            img: "https://media.istockphoto.com/id/1490123533/photo/cpu-cooler-with-heatpipes-on-black-background.jpg?s=170667a&w=0&k=20&c=RQz1EZQkWRVefJ8YfgyPWqAZ7KLTVFxNt-WOQTSn7TA=",
            information: 'made in Germany',
            Style: '--internalSSD: true',
            bigInfo: "A microphone is a device that translates sound vibrations in the air into electronic signals and scribes them to a recording medium or over a loudspeaker.icrophones enable many types of audio recording devices for purposes including communications of many kinds, as well as music vocals, speech and sound recording."
        },
        {
            id: 10,
            name: 'air cooler',
            price: 390,
            img: "https://media.istockphoto.com/id/1486855473/photo/cpu-cooler-with-heatpipes-on-black-background.jpg?s=1024x1024&w=is&k=20&c=RxjJOI5Y_CkMFHfIIVAY3hQittPF3qzBqZpPgIB6LFM=",
            information: 'made in Germany',
            Style: '--extrenalSSD: true',
            bigInfo: "Drones are an excellent way to detect the presence of rats and mice. With quality imaging and sensors, drones can gather immense amounts of data. They can photograph and map areas of high rodent concentration, locate rat & mouse burrows, and even calculate biomass to predict the probability of rodent presence."

        },
        {
            id: 11,
            name: 'big web camera',
            price: 690,
            img: "https://5.imimg.com/data5/SELLER/Default/2023/10/357101064/CP/ZG/HB/38300970/frontech-ft-2251-webcam-500x500.png",
            information: 'made in Austrelia',
            Style: '--internalSSD: true',
            bigInfo: "Drones are an excellent way to detect the presence of rats and mice. With quality imaging and sensors, drones can gather immense amounts of data. They can photograph and map areas of high rodent concentration, locate rat & mouse burrows, and even calculate biomass to predict the probability of rodent presence."

        },
        {
            id: 12,
            name: 'web camera',
            price: 850,
            img: "https://st3.depositphotos.com/16122460/33070/i/450/depositphotos_330704690-stock-photo-modern-professional-video-camera-black.jpg",
            information: 'made in Germany',
            Style: '--extrenalSSD: true',
            bigInfo: "Drones are an excellent way to detect the presence of rats and mice. With quality imaging and sensors, drones can gather immense amounts of data. They can photograph and map areas of high rodent concentration, locate rat & mouse burrows, and even calculate biomass to predict the probability of rodent presence."

        },
        {
            id: 13,
            name: 'street drone',
            price: 1250,
            img: "https://img.pikbest.com/ai/illus_our/20230425/d8669b4c2f697d56d0267c87e2d26562.jpg!w700wp",
            information: 'made in Moldova',
            Style: '--internalSSD: true',
            bigInfo: "Drones are an excellent way to detect the presence of rats and mice. With quality imaging and sensors, drones can gather immense amounts of data. They can photograph and map areas of high rodent concentration, locate rat & mouse burrows, and even calculate biomass to predict the probability of rodent presence."
        },
        {
            id: 14,
            name: 'white microphone',
            price: 3250,
            img: "https://us.123rf.com/450wm/rodrusoleg/rodrusoleg1506/rodrusoleg150600019/41087880-vintage-metal-silver-microphone-on-black-background.jpg?ver=6",
            information: 'made in Germany',
            Style: '--internalSSD: true',
            bigInfo: "A microphone is a device that translates sound vibrations in the air into electronic signals and scribes them to a recording medium or over a loudspeaker.icrophones enable many types of audio recording devices for purposes including communications of many kinds, as well as music vocals, speech and sound recording."
        },
    ]
    const FiltredeByStyle = (style) => {
        const filtred = trendingProdsBaza.filter((e) => e.Style.includes(style))
        setFilteredProds(filtred)
    }

    const showAllTrendingProds = () => {
        setFilteredProds(trendingProdsBaza);
    };

    return (
        <>
            <div className="allTrendingBox">
                <div className="trendingBoxHeader">
                    <div className="trendingTitle">
                        <p>TRENDING PRODUCTS ONLY</p>
                    </div>
                    <div className="trendingBtns">
                        <button onClick={showAllTrendingProds}>show all</button>
                        <button onClick={() => FiltredeByStyle('--extrenalSSD: true')}>extrenal SSD</button>
                        <button onClick={() => FiltredeByStyle('--internalSSD: true')}>internal SSD</button>
                    </div>
                </div>
                <div className="trendingProdsPart">
                    <TrendingContext.Provider value={filteredProds.length ? filteredProds : trendingProdsBaza}>
                        <UseTrendingProdContext />
                    </TrendingContext.Provider>

                </div>
            </div>
        </>
    )

}


export default ShowTrendingProds