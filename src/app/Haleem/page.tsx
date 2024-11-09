import Image from "next/image";
import Haleemphoto from "../../../public/images/haleem.jpg";
import Link from "next/link"; 

export default function Haleem() {
    return (
        <div className="haleem-container">
            <div className="haleem-content">
                {/* Recipe Title */}
                <h1 className="recipe-title">Haleem Recipe</h1>

                {/* Haleem Image */}
                <Image 
                    src={Haleemphoto} 
                    alt="Haleem"
                    className="recipe-image"
                />
            
                {/* Ingredients Section */}
                <h2 className="section-heading">Ingredients</h2>
                <ul className="ingredients-list">
                    <li>1 cup wheat, soaked overnight</li>
                    <li>1/2 cup barley, soaked overnight</li>
                    <li>1/2 cup split lentils (chana daal, masoor daal, moong daal)</li>
                    <li>500g beef or mutton, cut into pieces</li>
                    <li>2 large onions, sliced and fried until golden</li>
                    <li>2 tbsp ginger-garlic paste</li>
                    <li>Spices: cumin, coriander powder, garam masala, turmeric, red chili powder</li>
                    <li>Salt to taste</li>
                    <li>Fresh coriander, green chilies, ginger slices, and fried onions for garnish</li>
                </ul>

                {/* Instructions Section */}
                <h2 className="section-heading">Instructions</h2>
                <p className="instructions-text">
                    1. Boil the soaked wheat, barley, and lentils until soft, then blend into a thick paste.<br />
                    2. In a separate pot, cook the meat with ginger-garlic paste, fried onions, spices, and salt until tender.<br />
                    3. Shred the meat and mix it with the blended wheat, barley, and lentils.<br />
                    4. Simmer on low heat, stirring continuously, until the mixture is smooth and well combined.<br />
                    5. Garnish with fresh coriander, green chilies, ginger, and fried onions. Serve hot with naan.
                </p>

                <p className="instructions-text">
                    For a full step-by-step guide, check out this recipe video.
                </p>

                {/* Watch Recipe Button */}
                <Link href="https://www.youtube.com/watch?v=msNXcz5jV0I" target="_blank" rel="noopener noreferrer">
                    <button className="watch-button">Watch Recipe</button>
                </Link>
            </div>
        </div>
    );
}
