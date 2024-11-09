import Image from "next/image";
import muttonkormaphoto from "../../../public/images/muttonkorma.jpg";
import Link from "next/link"; 

export default function MuttonKorma() {
    return (
        <div className="recipe-container bg-mutton-korma-gradient">
            <div className="recipe-content">
                {/* Recipe Title */}
                <h1 className="recipe-title">Mutton Korma Recipe</h1>

                {/* Mutton Korma Image with hover zoom effect */}
                <Image 
                    src={muttonkormaphoto} 
                    alt="Mutton Korma"
                    className="recipe-image"
                />
            
                {/* Ingredients Section */}
                <h2 className="section-heading">Ingredients</h2>
                <ul className="ingredients-list">
                    <li>500g mutton pieces, bone-in</li>
                    <li>1 cup yogurt</li>
                    <li>2 large onions, thinly sliced and fried until golden brown</li>
                    <li>2 tbsp ginger-garlic paste</li>
                    <li>2-3 green cardamoms</li>
                    <li>2-3 cloves</li>
                    <li>1 cinnamon stick</li>
                    <li>Spices: cumin powder, coriander powder, turmeric, red chili powder, garam masala</li>
                    <li>Salt to taste</li>
                    <li>Fresh coriander leaves for garnish</li>
                    <li>Oil or ghee for cooking</li>
                </ul>

                {/* Instructions Section */}
                <h2 className="section-heading">Instructions</h2>
                <p className="instructions-text">
                    1. Heat oil or ghee in a pot, add whole spices (cardamom, cloves, cinnamon) and let them sizzle.<br />
                    2. Add ginger-garlic paste and mutton, cook until the mutton changes color.<br />
                    3. Add yogurt, fried onions, and spices. Cook until oil separates and the gravy thickens.<br />
                    4. Add water, cover, and simmer until the mutton is tender and the korma has a rich, thick consistency.<br />
                    5. Garnish with fresh coriander leaves and serve hot with naan or rice.
                </p>

                <p className="instructions-text">
                    For a full step-by-step guide, check out this recipe video.
                </p>

                {/* Watch Recipe Button */}
                <Link href="https://www.youtube.com/watch?v=dFaCpIOljwE" target="_blank" rel="noopener noreferrer">
                    <button className="watch-button">Watch Recipe</button>
                </Link>
            </div>
        </div>
    );
}
