import React from "react";
import './team.css'

const teamBaza = [
    {
        name: 'Anna Cooper',
        profeccion: 'ceo',
        img: 'https://gizmos.qodeinteractive.com/wp-content/uploads/2022/10/team-img1.jpg'
    },
    {
        name: 'Slave Curise',
        profeccion: 'web-programmer',
        img: 'https://gizmos.qodeinteractive.com/wp-content/uploads/2022/10/team-img2.jpg'
    },
    {
        name: 'Theresa Moo',
        profeccion: 'Meneger',
        img: 'https://gizmos.qodeinteractive.com/wp-content/uploads/2022/10/team-img3.jpg'
    },
    {
        name: 'Marry Smith',
        profeccion: 'developer',
        img: 'https://gizmos.qodeinteractive.com/wp-content/uploads/2022/10/team-img5.jpg'
    },
    {
        name: 'nate kolpe',
        profeccion: 'team Leader',
        img: 'https://gizmos.qodeinteractive.com/wp-content/uploads/2022/10/team-img6.jpg'
    },
    {
        name: 'Tom Lusacs',
        profeccion: 'designer',
        img: 'https://gizmos.qodeinteractive.com/wp-content/uploads/2022/10/team-img4.jpg'
    },
]
const ShowTeam = () => {
    return (
        <>
            <div className="allTeamBox">
                <div className="teamTitle"><h2>SEE OUR TEAM</h2></div>
                <div className="teamPeople">{
                    teamBaza.map((e) => {
                        return (
                            <>
                                <div className="oneTeamPersone">
                                    <div className="teamImgPart"> <img src={e.img}></img></div>
                                    <div className="teamInfoPart">
                                        <span>{e.profeccion}</span>
                                        <p>{e.name}</p>
                                    </div>
                                </div>

                            </>
                        )
                    })
                }</div>
            </div>
        </>
    )
}
export default ShowTeam