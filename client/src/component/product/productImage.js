import React, { useEffect } from 'react'
import ImageGallery from 'react-image-gallery';


function ProductImage(props) {
    const [Images, setImages] = useState([]);

    useEffect(() => {
        if (props.detail.images && props.detail.images.length > 0) {
            let images = [];

            props.detail.images &&
                props.detail.images.map((item) => {
                    images.push({
                        original: "http://localhost:8080/${item}",
                        thumbnail: "http://localhost:8080/${item}",
                    });
                });

            setImage(images);
        }
    }, [props.detail]);

    return (
        <div>
            <ProductImage items={Image} />
        </div>
    );
}

export default ProductImage;