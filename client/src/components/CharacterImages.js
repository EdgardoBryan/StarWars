import React from "react";
import { Link } from "react-router-dom";

const CharacterImages = ()=>{
    return (
        <div>
        <Link to="/description">Here for description</Link>    
        <div className="image-container">
            <img className="tiles Luke" src="https://www.themarysue.com/wp-content/uploads/2021/02/luke-skywalker-disney-plus-mandalorian-the-rescue.jpeg" ></img>
            <img className="tiles c3-po" src="https://starwarsblog.starwars.com/wp-content/uploads/2015/07/C-3PO-See-Threepio_68fe125c-1536x864-451079149590.jpeg" ></img>
            <img className="tiles r2"  src="https://lumiere-a.akamaihd.net/v1/images/r2-d2-main_f315b094.jpeg?region=247%2C0%2C951%2C536" ></img>
            <img className="tiles Darth" src="https://wegotthiscovered.com/wp-content/uploads/2022/02/Darth-Vader-Rogue-One-2-1200x900.jpg" ></img>
            <img className="tiles leia" src="https://pbs.twimg.com/media/C0s8bBfVIAA3Ew_.jpg" ></img>
            <img className="tiles guy" src="https://www.starwarsnewsnet.com/wp-content/uploads/2022/05/Obi-Wan-Kenobi-And-Owen-Lars.jpg" ></img>
            <img className="tiles wife" src="https://m.media-amazon.com/images/I/91jFkIKXuhL._AC_SL1500_.jpg" ></img>
            <img className="tiles" src="https://lumiere-a.akamaihd.net/v1/images/r5-d4_main_image_7d5f078e.jpeg?region=374%2C0%2C1186%2C666&width=960" ></img>
            <img className="tiles guy2" src="https://starwarsblog.starwars.com/wp-content/uploads/2015/08/Biggs.png" ></img>
            <img className="tiles Obi-Won" src="https://d.newsweek.com/en/full/2046388/obi-wan-kenobi-timeline.jpg?w=1600&h=1600&q=88&f=a2dd0ab1c60dae4ac27161eafa1ca994" ></img>
        </div>
        </div>
    )
}

export default CharacterImages