import VkIcon from '@/public/image/social/VK_white.svg'
import TelegramIcon from '@/public/image/social/Telegram_white.svg'
import Image from "next/image";

const urlTelegram = "https://telegram.org";
const urlVK = "https://telegram.org";
const urlAuthor = "https://telegram.org";

export default function Footer() {
    return (
        <div className="footer-container">
            <div className="info">
                <span>ООО &#34;Прайм Строй&#34; - Строительная компания.</span>
            </div>
            <div className="social">
                <a href={urlVK} target="_blank" rel="noopener noreferrer">
                    <Image className="icon" src={VkIcon} alt="VK" style={{width: 'auto', height: 'auto'}} />
                </a>
                <a href={urlTelegram} target="_blank" rel="noopener noreferrer">
                    <Image className="icon" src={TelegramIcon} alt="Telegram" style={{width: 'auto', height: 'auto'}} />
                </a>
            </div>
            <div className="copyright">
                &copy; ООО &#34;Прайм Строй&#34;. Все права защищены. <br/>
                Разработка сайта - <a href={urlAuthor}>SECRET</a>
            </div>
        </div>
    )
}