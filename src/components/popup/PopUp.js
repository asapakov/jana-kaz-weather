import {PopUpCloseBtn, PopUpContainer, PopUpContent, PopUpHeader, PopUpTitle} from "./styles";
import {useCallback, useState} from "react";
import {deleteCity, getListCities} from "../../storage/useLocalStorage";
import City from "./City";

const PopUp = (props) => {
    const cities = getListCities();
    const [visible, setVisible] = useState(false);
    const handleShowPopup = () => {
        !visible ? setVisible(true) : setVisible(false);
    }
    const handleRemoveFromList = useCallback ((id) => {
        deleteCity(id);
        setVisible(false)
    }, [])

    return (
        <div className="popUp">
            <h3 onClick={handleShowPopup}>{props.label}</h3>
            {visible &&
                <PopUpContainer>
                    <PopUpHeader>
                        <PopUpTitle><h4>My cities list</h4></PopUpTitle>
                        <PopUpCloseBtn onClick={handleShowPopup}/>
                    </PopUpHeader>
                    <PopUpContent>
                        {cities.length > 0 ? cities.map(city =>
                            <City city={city} key={city.id} remove={handleRemoveFromList} />
                        ) :
                            <p style={{opacity: 0.54}}>List is empty</p>
                        }
                    </PopUpContent>

                </PopUpContainer>
            }
        </div>
    )
}

export default PopUp;