import img1 from "../assets/1.png"
import img2 from "../assets/2.png"
import img3 from "../assets/3.png"
import img4 from "../assets/4.png"
import img5 from "../assets/5.png"
import img6 from "../assets/6.png"
import img7 from "../assets/7.png"

export const getColorByWeatherId = (weatherId) => {
    if (weatherId === 800) return img1;

    const group = Math.floor(weatherId / 100);

    switch (group) {
        case 2:
            return img2;
        case 3:
            return img3;
        case 5:
            return img4;
        case 6:
            return img5;
        case 7:
            return img6;
        case 8:
            return img7;
        default:
            return img1;
    }
};