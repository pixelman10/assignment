import Image from "next/image";
import daalchawalphoto from "../../../public/images/daalchawal.jpg";
import Link from "next/link"; 

export default function DaalChawal() {
    return (
        <div className="daalchawal-container">
            <div className="daalchawal-content">
                {/* Recipe Title */}
                <h1 className="recipe-title">Daal Chawal Recipe</h1>

                {/* Daal Chawal Image */}
                <Image 
                    src={daalchawalphoto}
                    alt="Daal Chawal"
                    className="recipe-image"
                />
            
                {/* Ingredients Section */}
                <h2 className="section-heading">Ingredients</h2>
                <ul className="ingredients-list">
                    <li>1 cup yellow lentils (moong or masoor daal), soaked for 30 minutes</li>
                    <li>1 cup Basmati rice, soaked for 20 minutes</li>
                    <li>1 onion, sliced</li>
                    <li>2 tomatoes, chopped</li>
                    <li>2 green chilies, chopped</li>
                    <li>1 tbsp ginger-garlic paste</li>
                    <li>Spices: cumin, turmeric, red chili powder, garam masala</li>
                    <li>Salt to taste</li>
                    <li>Fresh coriander leaves for garnish</li>
                    <li>Oil or ghee for cooking</li>
                    <li>Water as needed</li>
                </ul>

                {/* Instructions Section */}
                <h2 className="section-heading">Instructions</h2>
                <p className="instructions-text">
                    1. Heat oil in a pot, add sliced onions, and cook until golden brown.<br />
                    2. Add ginger-garlic paste, tomatoes, green chilies, and spices. Cook until the tomatoes soften.<br />
                    3. Add soaked lentils, salt, and water. Cook until the lentils are soft and have a soupy consistency.<br />
                    4. In another pot, cook rice in boiling water with a pinch of salt until fully cooked.<br />
                    5. Serve the daal over rice, garnished with fresh coriander. Enjoy with pickles or salad.
                </p>

                <p className="instructions-text">
                    For a full step-by-step guide, check out this recipe video.
                </p>

                {/* Watch Recipe Button */}
                <Link href="https://www.youtube.com/watch?v=sK3-PJHHzwc" target="_blank" rel="noopener noreferrer">
                    <button className="watch-button">Watch Recipe</button>
                </Link>
            </div>
        </div>
    );
}
