import Image from "next/image";
import karahiphoto from "../../../public/images/karahi.jpg";
import Link from "next/link";

export default function Karahi() {
    return (
        <div className="karahi-container">
            <div className="karahi-content">
                {/* Recipe Title */}
                <h1 className="recipe-title">Karahi Recipe</h1>

                {/* Karahi Image with hover zoom effect */}
                <Image 
                    src={karahiphoto} 
                    alt="Karahi"
                    className="recipe-image"
                />
            
                {/* Ingredients Section */}
                <h2 className="section-heading">Ingredients</h2>
                <ul className="ingredients-list">
                    <li>500g chicken or mutton, cut into pieces</li>
                    <li>3-4 tomatoes, chopped</li>
                    <li>2-3 green chilies, sliced</li>
                    <li>1 tbsp ginger-garlic paste</li>
                    <li>1/2 cup yogurt</li>
                    <li>Spices: cumin, coriander powder, red chili powder, garam masala</li>
                    <li>Salt to taste</li>
                    <li>Fresh coriander leaves and julienned ginger for garnish</li>
                    <li>1/4 cup cooking oil</li>
                </ul>

                {/* Instructions Section */}
                <h2 className="section-heading">Instructions</h2>
                <p className="instructions-text">
                    1. Heat oil in a large pan or wok, add chicken/mutton and ginger-garlic paste, and cook until the meat changes color.<br />
                    2. Add tomatoes, green chilies, and spices, and cook until the tomatoes soften and the oil separates.<br />
                    3. Stir in yogurt and cook until the gravy thickens and coats the meat.<br />
                    4. Simmer on low heat until the meat is tender and flavors meld together.<br />
                    5. Garnish with fresh coriander leaves and julienned ginger. Serve hot with naan or roti.
                </p>

                <p className="instructions-text">
                    For a full step-by-step guide, check out this recipe video.
                </p>

                {/* Watch Recipe Button */}
                <Link href="https://www.youtube.com/watch?v=3d6DrdOEuY4" target="_blank" rel="noopener noreferrer">
                    <button className="watch-button">Watch Recipe</button>
                </Link>
            </div>
        </div>
    );
}

