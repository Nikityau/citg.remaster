import {nanoid} from "nanoid";

//READY PROJECTS
import spaceman_img from "assets/images/projects/ready/spaceman.png";
import hungry_frog_img from 'assets/images/projects/ready/hungry-frog.png'
import nav_img from 'assets/images/projects/ready/navigation.png'


//CONTEST PROJECTS
import db_img from 'assets/images/projects/ready/db.png'


//IN DEVELOPING PROJECTS
import A_img from 'assets/images/projects/inDev/A.png'
import arrow_img from 'assets/images/projects/inDev/arrow.png'

import project_img_1 from 'assets/images/project/img_1.png'
import project_img_2 from 'assets/images/project/img_2.png'
import project_img_3 from 'assets/images/project/img_3.png'
import project_back_img from 'assets/images/project/background.png'

import android_img from 'assets/icons/devices-icons/android.svg'
import apple_img from 'assets/icons/devices-icons/apple.svg'

import appstore_img from 'assets/icons/soc-nets/appstore.svg'
import github_img from 'assets/icons/soc-nets/github.svg'
import playmarket_img from 'assets/icons/soc-nets/playmarket.svg'

export const PROJECT_TYPE_READY_MADE = 'PROJECT_TYPE_READY_MADE';
export const PROJECT_TYPE_CONTEST = 'PROJECT_TYPE_CONTEST';
export const PROJECT_TYPE_IN_DEVELOPING = 'PROJECT_TYPE_IN_DEVELOPING';

export const projects = [
    {
        name: 'Cosmic Driver',
        project_type: PROJECT_TYPE_READY_MADE,
        preview_img: spaceman_img,
        project_addition_preview_img: project_back_img,
        description: 'Play online or over local WiFi with 4-15 players as you attempt to prep your spaceship for departure, but beware as one will be an impostor bent on killing everyone! ' +
            'Crewmates can win by completing all tasks or discovering and voting the impostor off the ship.',
        screenshots: [
            {
                id: nanoid(),
                image: project_img_1
            },
            {
                id: nanoid(),
                image: project_img_2
            },
            {
                id: nanoid(),
                image: project_img_3
            },
        ],
        supported_devices: [
            {
                id:nanoid(),
                device_name: 'android',
                device_version: '5.0+',
                device_icon: android_img
            },
            {
                id:nanoid(),
                device_name: 'ios',
                device_version: '13+',
                device_icon: apple_img
            },
        ],
        links_on_project: [
            {
                id:nanoid(),
                link: 'https://apple.com',
                link_image: appstore_img,
            },
            {
                id:nanoid(),
                link: 'https://github.com',
                link_image: github_img,
            },
            {
                id:nanoid(),
                link: 'https://googplay.com',
                link_image: playmarket_img,
            },
        ]
    },
    {
        name: 'Hungry Frog',
        project_type: PROJECT_TYPE_READY_MADE,
        preview_img: hungry_frog_img,
        project_addition_preview_img: project_back_img,
        description: 'Play online or over local WiFi with 4-15 players as you attempt to prep your spaceship for departure, but beware as one will be an impostor bent on killing everyone! ' +
            'Crewmates can win by completing all tasks or discovering and voting the impostor off the ship.',
        screenshots: [
            {
                id: nanoid(),
                image: project_img_1
            },
            {
                id: nanoid(),
                image: project_img_2
            },
            {
                id: nanoid(),
                image: project_img_3
            },
        ],
        supported_devices: [
            {
                id:nanoid(),
                device_name: 'android',
                device_version: '5.0+',
                device_icon: android_img
            },
            {
                id:nanoid(),
                device_name: 'ios',
                device_version: '13+',
                device_icon: apple_img
            },
        ],
        links_on_project: [
            {
                id:nanoid(),
                link: 'https://apple.com',
                link_image: appstore_img,
            },
            {
                id:nanoid(),
                link: 'https://github.com',
                link_image: github_img,
            },
            {
                id:nanoid(),
                link: 'https://googplay.com',
                link_image: playmarket_img,
            },
        ]
    },
    {
        name: 'Navigation',
        project_type: PROJECT_TYPE_READY_MADE,
        preview_img: nav_img,
        project_addition_preview_img: project_back_img,
        description: 'Play online or over local WiFi with 4-15 players as you attempt to prep your spaceship for departure, but beware as one will be an impostor bent on killing everyone! ' +
            'Crewmates can win by completing all tasks or discovering and voting the impostor off the ship.',
        screenshots: [
            {
                id: nanoid(),
                image: project_img_1
            },
            {
                id: nanoid(),
                image: project_img_2
            },
            {
                id: nanoid(),
                image: project_img_3
            },
        ],
        supported_devices: [
            {
                id:nanoid(),
                device_name: 'android',
                device_version: '5.0+',
                device_icon: android_img
            },
            {
                id:nanoid(),
                device_name: 'ios',
                device_version: '13+',
                device_icon: apple_img
            },
        ],
        links_on_project: [
            {
                id:nanoid(),
                link: 'https://apple.com',
                link_image: appstore_img,
            },
            {
                id:nanoid(),
                link: 'https://github.com',
                link_image: github_img,
            },
            {
                id:nanoid(),
                link: 'https://googplay.com',
                link_image: playmarket_img,
            },
        ]
    },
    {
        name: 'DB Testing',
        project_type: PROJECT_TYPE_CONTEST,
        preview_img: db_img,
        project_addition_preview_img: project_back_img,
        description: 'Play online or over local WiFi with 4-15 players as you attempt to prep your spaceship for departure, but beware as one will be an impostor bent on killing everyone! ' +
            'Crewmates can win by completing all tasks or discovering and voting the impostor off the ship.',
        screenshots: [
            {
                id: nanoid(),
                image: project_img_1
            },
            {
                id: nanoid(),
                image: project_img_2
            },
            {
                id: nanoid(),
                image: project_img_3
            },
        ],
        supported_devices: [
            {
                id:nanoid(),
                device_name: 'android',
                device_version: '5.0+',
                device_icon: android_img
            },
            {
                id:nanoid(),
                device_name: 'ios',
                device_version: '13+',
                device_icon: apple_img
            },
        ],
        links_on_project: [
            {
                id:nanoid(),
                link: 'https://apple.com',
                link_image: appstore_img,
            },
            {
                id:nanoid(),
                link: 'https://github.com',
                link_image: github_img,
            },
            {
                id:nanoid(),
                link: 'https://googplay.com',
                link_image: playmarket_img,
            },
        ]
    },
    {
        name: 'A Project',
        project_type: PROJECT_TYPE_IN_DEVELOPING,
        preview_img: A_img,
        project_addition_preview_img: project_back_img,
        description: 'Play online or over local WiFi with 4-15 players as you attempt to prep your spaceship for departure, but beware as one will be an impostor bent on killing everyone! ' +
            'Crewmates can win by completing all tasks or discovering and voting the impostor off the ship.',
        screenshots: [
            {
                id: nanoid(),
                image: project_img_1
            },
            {
                id: nanoid(),
                image: project_img_2
            },
            {
                id: nanoid(),
                image: project_img_3
            },
        ],
        supported_devices: [
            {
                id:nanoid(),
                device_name: 'android',
                device_version: '5.0+',
                device_icon: android_img
            },
            {
                id:nanoid(),
                device_name: 'ios',
                device_version: '13+',
                device_icon: apple_img
            },
        ],
        links_on_project: [
            {
                id:nanoid(),
                link: 'https://apple.com',
                link_image: appstore_img,
            },
            {
                id:nanoid(),
                link: 'https://github.com',
                link_image: github_img,
            },
            {
                id:nanoid(),
                link: 'https://googplay.com',
                link_image: playmarket_img,
            },
        ]
    },
    {
        name: 'Arrow Project',
        project_type: PROJECT_TYPE_IN_DEVELOPING,
        preview_img: arrow_img,
        project_addition_preview_img: project_back_img,
        description: 'Play online or over local WiFi with 4-15 players as you attempt to prep your spaceship for departure, but beware as one will be an impostor bent on killing everyone! ' +
            'Crewmates can win by completing all tasks or discovering and voting the impostor off the ship.',
        screenshots: [
            {
                id: nanoid(),
                image: project_img_1
            },
            {
                id: nanoid(),
                image: project_img_2
            },
            {
                id: nanoid(),
                image: project_img_3
            },
        ],
        supported_devices: [
            {
                id:nanoid(),
                device_name: 'android',
                device_version: '5.0+',
                device_icon: android_img
            },
            {
                id:nanoid(),
                device_name: 'ios',
                device_version: '13+',
                device_icon: apple_img
            },
        ],
        links_on_project: [
            {
                id:nanoid(),
                link: 'https://apple.com',
                link_image: appstore_img,
            },
            {
                id:nanoid(),
                link: 'https://github.com',
                link_image: github_img,
            },
            {
                id:nanoid(),
                link: 'https://googplay.com',
                link_image: playmarket_img,
            },
        ]
    },
]