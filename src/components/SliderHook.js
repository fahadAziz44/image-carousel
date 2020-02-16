import React, { useState } from 'react';


function SliderHook (defaultSelPos, propChildren) {
    const [centered, setCenter] = useState(defaultSelPos);
    const [totalSlides] = useState(React.Children.count(propChildren));

    const moveNext = () => {
        setCenter((centered + 1) % totalSlides)
    }

    const movePrev = () => {
        if (centered <= 0) {
            setCenter(totalSlides - 1)
        } else {
            setCenter(centered - 1)
        }
    }

    return { centered, totalSlides, moveNext, movePrev }
}


export default SliderHook