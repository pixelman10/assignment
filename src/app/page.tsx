import Image from "next/image";
import Link from "next/link";

import biryanphoto from "../../public/images/biryanui.jpg";
import nihariphoto from "../../public/images/nihari.jpg";
import haleemphoto from "../../public/images/haleem.jpg";
import karahiphoto from "../../public/images/karahi.jpg";
import ChapliKababphoto from "../../public/images/chaplikabab.jpg";
import AlooKeemaphoto from "../../public/images/alookeema.jpg";
import payaphoto from "../../public/images/paya.jpg";
import daalchawalphoto from "../../public/images/daalchawal.jpg";
import muttonkormaphoto from "../../public/images/muttonkorma.jpg";

export default function Home() {
    return (
        <div className="home-container">
            <h1 className="main-title">Delight in Every Bite</h1>
            <p className="subtitle">Explore the authentic flavors of Pakistani cuisine</p>

            <div className="grid-container">
                <div className="food-card biryani-card">
                    <Image src={biryanphoto} alt="Biryani" className="food-image" />
                    <h2 className="food-title">Biryani</h2>
                    <p className="food-description">
                        A fragrant rice dish layered with marinated meat, spices, and herbs. Karachi and Sindhi biryanis are especially popular.
                    </p>
                    <Link href="/Biryani">
                        <button className="read-more-btn">Read More</button>
                    </Link>
                </div>

                <div className="food-card nihari-card">
                    <Image src={nihariphoto} alt="Nihari" className="food-image" />
                    <h2 className="food-title">Nihari</h2>
                    <p className="food-description">
                        A slow-cooked stew with tender meat and spices, often enjoyed with naan for a hearty breakfast.
                    </p>
                    <Link href="/Nihari">
                        <button className="read-more-btn">Read More</button>
                    </Link>
                </div>

                <div className="food-card haleem-card">
                    <Image src={haleemphoto} alt="Haleem" className="food-image" />
                    <h2 className="food-title">Haleem</h2>
                    <p className="food-description">
                        A thick stew made from wheat, barley, and meat, cooked to a smooth, flavorful blend.
                    </p>
                    <Link href="/Haleem">
                        <button className="read-more-btn">Read More</button>
                    </Link>
                </div>

                <div className="food-card karahi-card">
                    <Image src={karahiphoto} alt="Karahi" className="food-image" />
                    <h2 className="food-title">Karahi</h2>
                    <p className="food-description">
                        A tangy dish with chicken or mutton, tomatoes, green chilies, and spices cooked in a wok.
                    </p>
                    <Link href="/Karahi">
                        <button className="read-more-btn">Read More</button>
                    </Link>
                </div>

                <div className="food-card chapli-kabab-card">
                    <Image src={ChapliKababphoto} alt="Chapli Kabab" className="food-image" />
                    <h2 className="food-title">Chapli Kabab</h2>
                    <p className="food-description">
                        A spicy minced meat patty, best served with naan or paratha.
                    </p>
                    <Link href="/ChapliKabab">
                        <button className="read-more-btn">Read More</button>
                    </Link>
                </div>

                <div className="food-card aloo-keema-card">
                    <Image src={AlooKeemaphoto} alt="Aloo Keema" className="food-image" />
                    <h2 className="food-title">Aloo Keema</h2>
                    <p className="food-description">
                        Minced meat cooked with potatoes and spices, a household favorite with roti or naan.
                    </p>
                    <Link href="/AlooKeema">
                        <button className="read-more-btn">Read More</button>
                    </Link>
                </div>

                <div className="food-card paya-card">
                    <Image src={payaphoto} alt="Paya" className="food-image" />
                    <h2 className="food-title">Paya</h2>
                    <p className="food-description">
                        A flavorful dish made with slow-cooked trotters, spices, and herbs, enjoyed with naan.
                    </p>
                    <Link href="/Paya">
                        <button className="read-more-btn">Read More</button>
                    </Link>
                </div>

                <div className="food-card daal-chawal-card">
                    <Image src={daalchawalphoto} alt="Daal Chawal" className="food-image" />
                    <h2 className="food-title">Daal Chawal</h2>
                    <p className="food-description">
                        A classic combo of spiced lentils and rice, a simple yet wholesome meal.
                    </p>
                    <Link href="/Daalchawal">
                        <button className="read-more-btn">Read More</button>
                    </Link>
                </div>

                <div className="food-card mutton-korma-card">
                    <Image src={muttonkormaphoto} alt="Mutton Korma" className="food-image" />
                    <h2 className="food-title">Mutton Korma</h2>
                    <p className="food-description">
                        A rich, creamy curry with tender mutton, slow-cooked with aromatic spices.
                    </p>
                    <Link href="/MuttonKorma">
                        <button className="read-more-btn">Read More</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
