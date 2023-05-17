import React, { useEffect } from 'react'
import ImageGallery from 'react-image-gallery';


function productImage(props) {

    const [Images, setImages] = useState([])

    useEffect(() => {

        if (props.detail.images && props.detail.images.length > 0) {
            let images = [];

            props.detail.images && props.detail.images.map(item => {
                images.push({
                    original: 'http://localhost:5000/${item}',
                    thumbnail: 'http://localhost:5000/${item}'                    
                })
            })

            setImage(images)

        }
    }, [props.detail])


  return (
    <div><productImage items={Image}/></div>
  )
}

export default productImage