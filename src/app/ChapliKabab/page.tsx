import Image from "next/image";
import ChapliKababphoto from "../../../public/images/chaplikabab.jpg";
import Link from "next/link"; 

export default function ChapliKabab() {
    return (
        <div className="chapli-container">
            <div className="chapli-content">
                {/* Recipe Title */}
                <h1 className="chapli-title">Chapli Kabab Recipe</h1>

                {/* Chapli Kabab Image */}
                <Image 
                    src={ChapliKababphoto} 
                    alt="Chapli Kabab"
                    className="chapli-image"
                />
            
                {/* Ingredients Section */}
                <h2 className="section-heading">Ingredients</h2>
                <ul className="ingredients-list">
                    <li>500g minced beef or lamb</li>
                    <li>1 onion, finely chopped</li>
                    <li>1 tomato, finely chopped</li>
                    <li>2 green chilies, finely chopped</li>
                    <li>1/4 cup fresh coriander leaves, chopped</li>
                    <li>1 tbsp ginger-garlic paste</li>
                    <li>Spices: coriander seeds, cumin seeds, pomegranate seeds, red chili powder, garam masala</li>
                    <li>Salt to taste</li>
                    <li>1 egg (for binding)</li>
                    <li>1/4 cup gram flour (besan), roasted</li>
                    <li>Oil for frying</li>
                </ul>

                {/* Instructions Section */}
                <h2 className="section-heading">Instructions</h2>
                <p className="instructions-text">
                    1. In a large bowl, mix minced meat with onions, tomatoes, green chilies, coriander, ginger-garlic paste, and spices.<br />
                    2. Add the egg and roasted gram flour to the mixture and mix well to bind the ingredients.<br />
                    3. Shape the mixture into flat, round patties (kebabs).<br />
                    4. Heat oil in a pan and fry each kabab on medium heat until golden brown and cooked through.<br />
                    5. Serve hot with naan, raita, and fresh salad.
                </p>

                <p className="instructions-text">
                    For a full step-by-step guide, check out this recipe video.
                </p>

                {/* Watch Recipe Button */}
                <Link href="https://www.youtube.com/watch?v=ZevdQI7u3Wo" target="_blank" rel="noopener noreferrer">
                    <button className="watch-button">Watch Recipe</button>
                </Link>
            </div>
        </div>
    );
}
