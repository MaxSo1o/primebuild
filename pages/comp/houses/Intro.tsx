import Image from "next/image";
import intoImg from "@/./public/image/intro.jpg";

export default function Intro() {
    return (
        <div className="intro-container">
            <div className="intro">
                <Image className="into-image" src={intoImg} alt='Интро' style={{ width: "100%" }} />
            </div>
            <div className="container">
                <div className="intro-info">
                    Проектируем и строим дома, <br/>в которых хочется жить
                </div>
            </div>
        </div>
    )
}