import { useDispatch, useSelector } from "react-redux"
import { AddImage, getImageData, getImageStatus } from "./imageSlice"
import { useEffect } from "react"
import { GetImagesThunk } from "../features/imagesThunk"
import { AddImage, getImageData, getImageStatus } from "../features/imageSlice"



export const ImageCreate = () => {

    const dispatch = useDispatch()

    const ImageList = useSelector(getImageData)
    const ImageLoading = useSelector(getImageStatus)


    const handleFormSend = (event) => {
        event.preventDefault()
        const imageName = event.target.id.value
        dispatch(AddImage(imageName))
    }

    useEffect(() => {
        console.log(getImageStatus)
        if (ImageLoading === "idle"){
            dispatch(GetImagesThunk())
        }
        else if(ImageLoading === "fulfilled"){

        }
        else if(ImageLoading === "rejected"){
            alert("Error en la api")
        }
    },[ImageLoading])
    return <>
        {ImageLoading === "pending" ? <p>Loading---</p>: ImageList.map((imageName,id) => <p>{imageName.name}</p>)}
        <form style={{margin: "3em"}} onSubmit={handleFormSend}>
            <input type="text" name="name"/>
            <input type="submit"/>
        </form>
    </>
}