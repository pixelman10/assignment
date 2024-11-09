import Image from "next/image";
import Nihariphoto from "../../../public/images/nihari.jpg";
import Link from "next/link"; 

export default function Nihari() {
    return (
        <div className="recipe-container bg-nihari-gradient">
            <div className="recipe-content">
                {/* Recipe Title */}
                <h1 className="recipe-title">Nihari Recipe</h1>

                {/* Nihari Image with hover zoom effect */}
                <Image 
                    src={Nihariphoto} 
                    alt="Nihari"
                    className="recipe-image"
                />
            
                {/* Ingredients Section */}
                <h2 className="section-heading">Ingredients</h2>
                <ul className="ingredients-list">
                    <li>500g beef or mutton shank pieces</li>
                    <li>2 large onions, thinly sliced</li>
                    <li>2 tbsp ginger-garlic paste</li>
                    <li>1/2 cup yogurt</li>
                    <li>Spices: nihari masala (or a mix of coriander powder, fennel, nutmeg, clove, cardamom, cumin, and cinnamon)</li>
                    <li>Salt to taste</li>
                    <li>6-8 cups water</li>
                    <li>1/4 cup flour mixed with water (to thicken)</li>
                    <li>Fresh coriander and green chilies for garnish</li>
                </ul>

                {/* Instructions Section */}
                <h2 className="section-heading">Instructions</h2>
                <p className="instructions-text">
                    1. In a large pot, heat oil and fry onions until golden brown. Add ginger-garlic paste and cook until fragrant.<br />
                    2. Add meat and yogurt, and cook until meat is browned and the mixture is well combined.<br />
                    3. Add nihari masala and salt, then pour in water. Cover and simmer on low heat until the meat is tender.<br />
                    4. Add the flour mixture to thicken the gravy, then cook for another 10-15 minutes.<br />
                    5. Garnish with fresh coriander and green chilies. Serve hot with naan.
                </p>

                <p className="instructions-text">
                    For a full step-by-step guide, check out this recipe video.
                </p>

                {/* Watch Recipe Button */}
                <Link href="https://www.youtube.com/watch?v=mk6z0fVOhr0" target="_blank" rel="noopener noreferrer">
                    <button className="watch-button">Watch Recipe</button>
                </Link>
            </div>
        </div>
    );
}
