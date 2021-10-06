import React, {useState} from 'react'
import {BoxUpload, Container, Layout, ImagePreview} from "./styles";
import CloseIcon from './assets/x.svg'

function App() {

    const [image, setImage] = useState('')
    const [isUploaded, setIsUploaded] = useState(false)

    function handleImageChange(e) {
        if (e.target.files && e.target.files[0]) {
            let reader = new FileReader()

            reader.onload = function (e) {
                setImage(e.target.result)
                setIsUploaded(true)
            }
            reader.readAsDataURL(e.target.files[0])
        }
    }

    return (
        <Layout>
            <Container>
                <h3> Upload Image </h3>
                <p> preview image below.</p>
                <BoxUpload>
                    <div className={"image-upload"}>
                        {
                            !isUploaded ? (
                                <><label htmlFor={"upload-input"}>
                                    <img src="https://cdn-icons-png.flaticon.com/512/760/760759.png" draggable={'false'}
                                         height={"90px"} width={"90px"} alt={'folder icon'}/>
                                    <p style={{color: '#7d7d7d'}}>
                                        Click to upload image
                                    </p>
                                </label>
                                    <input id={"upload-input"} type={"file"}
                                           accept={".jpg, .jpeg, .gif, .png, .mov, .mp4"}
                                           onChange={handleImageChange}/></>
                            ) : (
                                <ImagePreview>
                                    <img className={"close-icon"}
                                         src={CloseIcon}
                                         alt={"Close the icon"}
                                         onClick={
                                             () => {
                                                 setIsUploaded(false)
                                                 setImage(null)
                                             }}/>
                                    <img src={image}
                                         draggable={false}
                                         id={"uploaded-image"}
                                         alt={"uploaded img"}/>
                                </ImagePreview>
                            )
                        }

                    </div>
                </BoxUpload>
            </Container>
        </Layout>
    );
}

export default App;
