import MapYandex from "@/pages/comp/MapYandex";
import Image from "next/image";
import VkIcon from '@/public/image/social/VK_white.svg'
import TelegramIcon from '@/public/image/social/Telegram_white.svg'

export default function Contacts() {
    return (
        <div id="contacts" className="contacts-main">
            <div className="container">
                <span className="title">Контакты</span>
                <div className="content">
                    <div className="contacts">
                        <div className="adress">
                            <span className="title-tags">Адрес:</span>
                            <span className="tags">
                                394036<br/>
                                г. Воронеж, ул. Максима Горького,<br/>д. 53, оф. 10</span>
                        </div>
                        <div className="number">
                            <span className="title-tags">Телефоны:</span>
                            <span className="tags"><a href="tel:89805550701">+7 (980) 555-0701</a></span>
                            <span className="tags"><a href="tel:89805550702">+7 (980) 555-0702</a></span>
                        </div>
                        <div className="time-job">
                            <span className="title-tags">Время работы:</span>
                            <span className="tags">9:00 - 18:00 (Без выходных)</span>
                        </div>
                        <div className="social">
                            <span className="title-tags">Социальные сети:</span>
                            <div className="socials-icon">
                                <a href="https://telegram.org/"><Image className="icon" src={TelegramIcon} alt="telegram"/></a>
                                <a href="https://vk.com/"><Image className="icon" src={VkIcon} alt="telegram"/></a>
                            </div>
                        </div>
                    </div>
                    <div className="map">
                        <MapYandex/>
                    </div>
                </div>
            </div>
        </div>
    )
}