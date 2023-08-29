import React from 'react'
import PropTypes from 'prop-types'

function Content (props) {

    const {allMemes} = props;

    const [memeData, setMemeData] = React.useState({
        textTop: "",
        textBottom: "",
        memeURL: "http://i.imgflip.com/1bij.jpg"
    });

    function upDateMemeData(event) {
        const{name, value} = event.target
        setMemeData (prevMemeData => ({
            ...prevMemeData,
            [name]: value
        }));
    }

    function getRandomUrl(event) {
        event.preventDefault();
        let randomNum = Math.floor(Math.random()*allMemes.length);
        setMemeData (prevMemeData => ({
            ...prevMemeData,
            textTop: "",
            textBottom: "",
            memeURL: allMemes[randomNum].url
        }));
        console.log(memeData.memeURL)
    }


    return(
        <>
            <main className="meme">
                <form className="flex-container" onSubmit={getRandomUrl}>
                    <div className="user-inputs">
                        <input 
                            type="text" 
                            onChange={upDateMemeData} 
                            className="user-text input-one" 
                            placeholder="TOP TEXT"
                            value={memeData.textTop}
                            name="textTop"
                        />
                        <input 
                            type="text" onChange={upDateMemeData} 
                            className="user-text input-two" 
                            placeholder="BOTTOM TEXT"
                            value={memeData.textBottom}
                            name="textBottom"
                        />
                    </div>
                    <div className="submit-container">
                        <button className="text-submit">
                        Get a new Meme image <span className="">🖼</span>
                        </button>
                    </div>
                </form>
                <div className="memeImage-container">
                    <h6 className="top--text">{memeData.textTop}</h6>
                    <h6 className="bottom--text">{memeData.textBottom}</h6>
                    <img src={memeData.memeURL} className="meme-image" alt="meme img"/>
                </div>
            </main>
        </>
    )

}

Content.propTypes = {
    allMemes: PropTypes.array.isRequired,
};

export default Content