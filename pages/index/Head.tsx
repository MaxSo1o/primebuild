import Image from "next/image";

export default function Head({logo} : {logo: string}) {
    return (
        <div className="header">
            <div className="left">
                <div className="logo">
                    <Image src={logo} alt="logo" style={{width: "100%", height: "100%"}} />
                </div>
                <div className="info">
                    <span className="title">Прайм Строй</span>
                    <span className="tag">Мы строим будущее</span>
                </div>
            </div>
            <div className="right">
                <a href="tel:89805550701">+7 (980) 555-07-01</a>
                <a href="tel:89805550702">+7 (980) 555-07-02</a>
            </div>
        </div>
    )
}