import { nanoid } from "nanoid";

import whats_app_icon from 'assets/icons/soc-nets/whats-app.svg'
import vk_icon from 'assets/icons/soc-nets/vk.svg'
import telegram_icon from 'assets/icons/soc-nets/telegram.svg'

export const Footer_soc_netsPreset = [
    {
        id: nanoid(),
        imgSrc: whats_app_icon,
        link: 'https://www.whatsapp.com/?lang=ru'
    },
    {
        id: nanoid(),
        imgSrc: telegram_icon,
        link: 'https://telegram.org/'
    },
    {
        id: nanoid(),
        imgSrc: vk_icon,
        link: 'https://vk.com/'
    },
]