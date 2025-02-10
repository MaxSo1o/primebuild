"use client"
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

function Body({ links } : {links: []}) {
    const [move, setMove] = useState(0);
    return (
        <div className="body-links">
            {links.map(({id, link, title, url}:{id: number, link: string, title: string, url: string}) => (
                <Link key={id} href={link} className="link"
                      onMouseEnter={() => setMove(id)}
                      onMouseLeave={() => setMove(0)}>
                    <Image className={`background ${move === id ? "show" : ""}`} src={'http://79.174.86.248:1337'+ url} alt="background" width={1792} height={1024} />
                    <div className={`title ${move === id ? "show" : ""}`}>{title}</div>
                    <div className={`more ${move === id ? "show" : ""}`}>
                        <span>&laquo; Подробнее</span>
                    </div>
                </Link>
            ))}
        </div>
    );
}

export default Body;