import { nanoid } from "nanoid";

import preview_img from 'assets/images/project/preview.png'
import background_img from 'assets/images/project/background.png'

import img_1 from 'assets/images/project/img_1.png'
import img_2 from 'assets/images/project/img_2.png'
import img_3 from 'assets/images/project/img_3.png'

import android_icon from 'assets/icons/devices-icons/android.svg'
import apple_icon from 'assets/icons/devices-icons/apple.svg'

import appstore_icon from 'assets/icons/soc-nets/appstore.svg'
import github_icon from 'assets/icons/soc-nets/github.svg'
import playmarket_icon from 'assets/icons/soc-nets/playmarket.svg'

export const projectPage_projectPreset = {
    id: nanoid(),
    project_name: 'Cosmic Driver',
    preview_img: preview_img,
    background_img: background_img,
    description: 'Play online or over local WiFi with 4-15 players as you attempt to prep your spaceship for departure, but beware as one will be an impostor bent on killing everyone!\n' +
        'Crewmates can win by completing all tasks or discovering and voting the impostor off the ship.\n' +
        'Play online or over local WiFi with 4-15 players as you attempt to prep your spaceship for departure, but beware as one will be an impostor bent on killing everyone!Crewmates can win by completing all tasks or discovering and voting the impostor off the ship. Play online or over local WiFi with 4-15 players as you attempt to prep your spaceship for departure, but beware as one will be an impostor bent on killing everyone!\n' +
        'Crewmates can win by completing all tasks or discovering and voting the impostor off the ship.\n' +
        '\n' +
        '\n' +
        '\n' +
        '\n' +
        '\n',
    project_images: [
        {
            id: nanoid(),
            imgSrc: img_1
        },
        {
            id: nanoid(),
            imgSrc: img_2
        },
        {
            id: nanoid(),
            imgSrc: img_3
        },
    ],
    supported_devices: [
        {
            id: nanoid(),
            device_icon: android_icon,
            device_name: 'android',
            device_version: '5+'
        },
        {
            id: nanoid(),
            device_icon: apple_icon,
            device_name: 'ios',
            device_version: '13+'
        },
    ],
    links_on_projects: [
        {
            id: nanoid(),
            link: '',
            image_link: ''
        }
    ]
}