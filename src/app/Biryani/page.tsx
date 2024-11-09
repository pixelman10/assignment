import Image from "next/image";
import biryaniphoto from "../../../public/images/biryanui.jpg";
import Link from "next/link";

export default function Biryani() {
    return (
        <div className="biryani-container">
            <div className="biryani-content">
                {/* Recipe Title */}
                <h1 className="biryani-title">Biryani Recipe</h1>

                {/* Biryani Image */}
                <Image 
                    src={biryaniphoto}
                    alt="Biryani"
                    className="biryani-image"
                />
            
                {/* Ingredients Section */}
                <h2 className="section-heading">Ingredients</h2>
                <ul className="ingredients-list">
                    <li>2 cups Basmati rice, soaked for 30 minutes</li>
                    <li>500g chicken or mutton, marinated with yogurt, ginger, garlic, and spices</li>
                    <li>2 large onions, thinly sliced and fried until golden brown</li>
                    <li>3-4 tomatoes, chopped</li>
                    <li>1/2 cup fresh coriander and mint leaves, chopped</li>
                    <li>Spices: cumin, coriander powder, turmeric, garam masala, red chili powder</li>
                    <li>Salt to taste</li>
                    <li>4 cups water or as needed</li>
                </ul>

                {/* Instructions Section */}
                <h2 className="section-heading">Instructions</h2>
                <p className="instructions-text">
                    1. Cook the marinated meat in a pot until tender. Add chopped tomatoes, fried onions, coriander, and mint leaves.<br />
                    2. Partially cook the soaked rice in boiling water with a pinch of salt.<br />
                    3. Layer the cooked meat and rice in a pot, adding fried onions and herbs between layers. Cover and cook on low heat for 15-20 minutes until rice is fully cooked.<br />
                    4. Serve hot with raita or salad.
                </p>

                <p className="instructions-text">
                    For a full step-by-step guide, check out this recipe video.
                </p>

                {/* Watch Recipe Button */}
                <Link href="https://www.youtube.com/watch?v=TwzSmMXMAyo" target="_blank" rel="noopener noreferrer">
                    <button className="watch-button">Watch Recipe</button>
                </Link>
            </div>
        </div>
    );
}
