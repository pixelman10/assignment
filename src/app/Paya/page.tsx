import Image from "next/image";
import payaphoto from "../../../public/images/paya.jpg";
import Link from "next/link"; 

export default function Paya() {
    return (
        <div className="recipe-container bg-paya-gradient">
            <div className="recipe-content">
                {/* Recipe Title */}
                <h1 className="recipe-title">Paya Recipe</h1>

                {/* Paya Image with hover zoom effect */}
                <Image 
                    src={payaphoto} 
                    alt="Paya"
                    className="recipe-image"
                />
            
                {/* Ingredients Section */}
                <h2 className="section-heading">Ingredients</h2>
                <ul className="ingredients-list">
                    <li>4 lamb or goat trotters (paya), cleaned thoroughly</li>
                    <li>2 large onions, finely sliced</li>
                    <li>2 tomatoes, chopped</li>
                    <li>2 tbsp ginger-garlic paste</li>
                    <li>1 cup yogurt</li>
                    <li>Spices: cumin, coriander powder, turmeric, red chili powder, garam masala</li>
                    <li>Salt to taste</li>
                    <li>Fresh coriander leaves and ginger slices for garnish</li>
                    <li>Oil for cooking</li>
                    <li>6-8 cups water</li>
                </ul>

                {/* Instructions Section */}
                <h2 className="section-heading">Instructions</h2>
                <p className="instructions-text">
                    1. Heat oil in a large pot, add sliced onions, and cook until golden brown.<br />
                    2. Add ginger-garlic paste and trotters, and cook for a few minutes until fragrant.<br />
                    3. Add tomatoes, yogurt, and spices, then cook until oil separates from the masala.<br />
                    4. Add water and bring it to a boil, then cover and simmer on low heat for 3-4 hours, until trotters are tender and the broth is rich.<br />
                    5. Garnish with fresh coriander leaves and ginger slices. Serve hot with naan or rice.
                </p>

                <p className="instructions-text">
                    For a full step-by-step guide, check out this recipe video.
                </p>

                {/* Watch Recipe Button */}
                <Link href="https://www.youtube.com/watch?v=VDMLnqbvvSc" target="_blank" rel="noopener noreferrer">
                    <button className="watch-button">Watch Recipe</button>
                </Link>
            </div>
        </div>
    );
}
