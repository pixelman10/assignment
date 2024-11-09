import Image from "next/image";
import AlooKeemaphoto from "../../../public/images/alookeema.jpg"; 
import Link from "next/link"; 

export default function AlooKeema() {
    return (
        <div className="recipe-container">
            <div className="recipe-content">
                {/* Recipe Title */}
                <h1 className="recipe-title">Aloo Keema Recipe</h1>

                {/* Aloo Keema Image */}
                <Image 
                    src={AlooKeemaphoto}
                    alt="Aloo Keema"
                    className="recipe-image"
                />
            
                {/* Ingredients Section */}
                <h2 className="section-heading">Ingredients</h2>
                <ul className="ingredients-list">
                    <li>500g minced beef or mutton</li>
                    <li>2 medium potatoes, peeled and cubed</li>
                    <li>1 large onion, finely chopped</li>
                    <li>2 tomatoes, chopped</li>
                    <li>2 green chilies, chopped</li>
                    <li>1 tbsp ginger-garlic paste</li>
                    <li>Spices: cumin, coriander powder, turmeric, red chili powder, garam masala</li>
                    <li>Salt to taste</li>
                    <li>Fresh coriander leaves for garnish</li>
                    <li>Oil for cooking</li>
                </ul>

                {/* Instructions Section */}
                <h2 className="section-heading">Instructions</h2>
                <p className="instructions-text">
                    1. Heat oil in a pot, add chopped onions, and cook until golden brown.<br />
                    2. Add ginger-garlic paste, minced meat, and spices. Cook until the meat changes color.<br />
                    3. Add tomatoes and cook until they soften and oil separates from the mixture.<br />
                    4. Add potatoes and a little water, cover, and cook until the potatoes are tender and keema is fully cooked.<br />
                    5. Garnish with fresh coriander and green chilies. Serve hot with naan or roti.
                </p>

                <p className="instructions-text">
                    For a full step-by-step guide, check out this recipe video.
                </p>

                {/* Watch Recipe Button */}
                <Link href="https://www.youtube.com/watch?v=ewat8Dt52l8" target="_blank" rel="noopener noreferrer">
                    <button className="watch-button">Watch Recipe</button>
                </Link>
            </div>
        </div>
    );
}
