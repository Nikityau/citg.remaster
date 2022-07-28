import { nanoid } from "nanoid";

import bredihin from 'assets/images/team/bredihin.png'

import figma_img from 'assets/icons/software/figma.svg'
import ps_img from 'assets/icons/software/ps.svg'
import ai_img from 'assets/icons/software/ai.svg'

import vk_white_img from 'assets/icons/soc-nets/vk-white.svg'
import telegram_white_img from 'assets/icons/soc-nets/telegram-white.svg'
import be_white_img from 'assets/icons/soc-nets/be-white.svg'

import certificate_img from 'assets/images/certificates/certificat-plug-black.png'

import citg_plug from 'assets/images/projects/projects-plug.png'

import samurai_img from 'assets/images/myWorksExample/samurai.png'
import robo_woman_img from 'assets/images/myWorksExample/robo-woman.png'
import magic_img from 'assets/images/myWorksExample/magic.png'
import ronin_img from 'assets/images/myWorksExample/ronin.png'
import jinx_img from 'assets/images/myWorksExample/jinx.png'
import cyber_man_img from 'assets/images/myWorksExample/cyber-man.png'
import shootout_img from 'assets/images/myWorksExample/shootout.png'
import fight_img from 'assets/images/myWorksExample/fight.png'
import navigation_img from 'assets/images/projects/ready/navigation.png'

import ref_1 from 'assets/images/myWorksProjectRefs/ref_1.png'
import ref_2 from 'assets/images/myWorksProjectRefs/ref_2.png'
import ref_3 from 'assets/images/myWorksProjectRefs/ref_3.png'
import ref_4 from 'assets/images/myWorksProjectRefs/ref_4.png'
import ref_5 from 'assets/images/myWorksProjectRefs/ref_5.png'

export const memberPage_memberPreset = {
    id: nanoid(),
    photo: bredihin,
    full_name: 'Бредихин Андрей',
    hard_skills: [
        {
            id: nanoid(),
            skill_name: 'illustrator',
        },
        {
            id: nanoid(),
            skill_name: 'UI/UX-designer'
        },
    ],
    software_used: [
        {
            id: nanoid(),
            software_name: 'figma',
            software_icon: figma_img
        },
        {
            id: nanoid(),
            software_name: 'photoshop',
            software_icon: ps_img
        },
        {
            id: nanoid(),
            software_name: 'illustrator',
            software_icon: ai_img
        },
    ],
    soc_nets_links: [
        {
            id: nanoid(),
            soc_net_name: 'vk',
            soc_net_icon: vk_white_img,
            soc_net_link: 'https://vk.com'
        },
        {
            id: nanoid(),
            soc_net_name: 'telegram',
            soc_net_icon: telegram_white_img,
            soc_net_link: 'https://telegram.org'
        },
        {
            id: nanoid(),
            soc_net_name: 'behance',
            soc_net_icon: be_white_img,
            soc_net_link: 'https://behance.com'
        },
    ],
    certificates: [
        {
            id: nanoid(),
            certificate: certificate_img
        },
        {
            id: nanoid(),
            certificate: certificate_img
        },
        {
            id: nanoid(),
            certificate: certificate_img
        },
    ],
    participated_in_projects: [
        {
           id: nanoid(),
           project_name: 'citg_plug',
           project_img: citg_plug
        },
        {
            id: nanoid(),
            project_name: 'citg_plug',
            project_img: citg_plug
        },
        {
            id: nanoid(),
            project_name: 'citg_plug',
            project_img: citg_plug
        },
    ],
    my_works: [
        {
            id: nanoid(),
            project_name: 'samurai',
            project_description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
            main_img: samurai_img,
            project_refs: [
                {
                    id: nanoid(),
                    imgSrc: ref_1,
                },
                {
                    id: nanoid(),
                    imgSrc: ref_2,
                },
                {
                    id: nanoid(),
                    imgSrc: ref_3,
                },
                {
                    id: nanoid(),
                    imgSrc: ref_4,
                },
                {
                    id: nanoid(),
                    imgSrc: ref_5,
                },
            ],
            software_used: [
                {
                    id: nanoid(),
                    software_name: 'figma',
                    software_icon: figma_img
                },
                {
                    id: nanoid(),
                    software_name: 'photoshop',
                    software_icon: ps_img
                },
                {
                    id: nanoid(),
                    software_name: 'illustrator',
                    software_icon: ai_img
                },
            ]

        },
        {
            id: nanoid(),
            project_name: 'robo-woman',
            project_description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
            main_img: robo_woman_img,
            project_refs: [
                {
                    id: nanoid(),
                    imgSrc: ref_1,
                },
                {
                    id: nanoid(),
                    imgSrc: ref_2,
                },
                {
                    id: nanoid(),
                    imgSrc: ref_3,
                },
                {
                    id: nanoid(),
                    imgSrc: ref_4,
                },
                {
                    id: nanoid(),
                    imgSrc: ref_5,
                },
            ],
            software_used: [
                {
                    id: nanoid(),
                    software_name: 'figma',
                    software_icon: figma_img
                },
                {
                    id: nanoid(),
                    software_name: 'photoshop',
                    software_icon: ps_img
                },
                {
                    id: nanoid(),
                    software_name: 'illustrator',
                    software_icon: ai_img
                },
            ]

        },
        {
            id: nanoid(),
            project_name: 'magic',
            project_description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
            main_img: magic_img,
            project_refs: [
                {
                    id: nanoid(),
                    imgSrc: ref_1,
                },
                {
                    id: nanoid(),
                    imgSrc: ref_2,
                },
                {
                    id: nanoid(),
                    imgSrc: ref_3,
                },
                {
                    id: nanoid(),
                    imgSrc: ref_4,
                },
                {
                    id: nanoid(),
                    imgSrc: ref_5,
                },
            ],
            software_used: [
                {
                    id: nanoid(),
                    software_name: 'figma',
                    software_icon: figma_img
                },
                {
                    id: nanoid(),
                    software_name: 'photoshop',
                    software_icon: ps_img
                },
                {
                    id: nanoid(),
                    software_name: 'illustrator',
                    software_icon: ai_img
                },
            ]

        },
        {
            id: nanoid(),
            project_name: 'ronin',
            project_description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
            main_img: ronin_img,
            project_refs: [
                {
                    id: nanoid(),
                    imgSrc: ref_1,
                },
                {
                    id: nanoid(),
                    imgSrc: ref_2,
                },
                {
                    id: nanoid(),
                    imgSrc: ref_3,
                },
                {
                    id: nanoid(),
                    imgSrc: ref_4,
                },
                {
                    id: nanoid(),
                    imgSrc: ref_5,
                },
            ],
            software_used: [
                {
                    id: nanoid(),
                    software_name: 'figma',
                    software_icon: figma_img
                },
                {
                    id: nanoid(),
                    software_name: 'photoshop',
                    software_icon: ps_img
                },
                {
                    id: nanoid(),
                    software_name: 'illustrator',
                    software_icon: ai_img
                },
            ]

        },
        {
            id: nanoid(),
            project_name: 'samurai',
            project_description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
            main_img: samurai_img,
            project_refs: [
                {
                    id: nanoid(),
                    imgSrc: ref_1,
                },
                {
                    id: nanoid(),
                    imgSrc: ref_2,
                },
                {
                    id: nanoid(),
                    imgSrc: ref_3,
                },
                {
                    id: nanoid(),
                    imgSrc: ref_4,
                },
                {
                    id: nanoid(),
                    imgSrc: ref_5,
                },
            ],
            software_used: [
                {
                    id: nanoid(),
                    software_name: 'figma',
                    software_icon: figma_img
                },
                {
                    id: nanoid(),
                    software_name: 'photoshop',
                    software_icon: ps_img
                },
                {
                    id: nanoid(),
                    software_name: 'illustrator',
                    software_icon: ai_img
                },
            ]

        },
        {
            id: nanoid(),
            project_name: 'jinx',
            project_description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
            main_img: jinx_img,
            project_refs: [
                {
                    id: nanoid(),
                    imgSrc: ref_1,
                },
                {
                    id: nanoid(),
                    imgSrc: ref_2,
                },
                {
                    id: nanoid(),
                    imgSrc: ref_3,
                },
                {
                    id: nanoid(),
                    imgSrc: ref_4,
                },
                {
                    id: nanoid(),
                    imgSrc: ref_5,
                },
            ],
            software_used: [
                {
                    id: nanoid(),
                    software_name: 'figma',
                    software_icon: figma_img
                },
                {
                    id: nanoid(),
                    software_name: 'photoshop',
                    software_icon: ps_img
                },
                {
                    id: nanoid(),
                    software_name: 'illustrator',
                    software_icon: ai_img
                },
            ]

        },
        {
            id: nanoid(),
            project_name: 'cyber-man',
            project_description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
            main_img: cyber_man_img,
            project_refs: [
                {
                    id: nanoid(),
                    imgSrc: ref_1,
                },
                {
                    id: nanoid(),
                    imgSrc: ref_2,
                },
                {
                    id: nanoid(),
                    imgSrc: ref_3,
                },
                {
                    id: nanoid(),
                    imgSrc: ref_4,
                },
                {
                    id: nanoid(),
                    imgSrc: ref_5,
                },
            ],
            software_used: [
                {
                    id: nanoid(),
                    software_name: 'figma',
                    software_icon: figma_img
                },
                {
                    id: nanoid(),
                    software_name: 'photoshop',
                    software_icon: ps_img
                },
                {
                    id: nanoid(),
                    software_name: 'illustrator',
                    software_icon: ai_img
                },
            ]

        },{
            id: nanoid(),
            project_name: 'shootout',
            project_description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
            main_img: shootout_img,
            project_refs: [
                {
                    id: nanoid(),
                    imgSrc: ref_1,
                },
                {
                    id: nanoid(),
                    imgSrc: ref_2,
                },
                {
                    id: nanoid(),
                    imgSrc: ref_3,
                },
                {
                    id: nanoid(),
                    imgSrc: ref_4,
                },
                {
                    id: nanoid(),
                    imgSrc: ref_5,
                },
            ],
            software_used: [
                {
                    id: nanoid(),
                    software_name: 'figma',
                    software_icon: figma_img
                },
                {
                    id: nanoid(),
                    software_name: 'photoshop',
                    software_icon: ps_img
                },
                {
                    id: nanoid(),
                    software_name: 'illustrator',
                    software_icon: ai_img
                },
            ]

        },
        {
            id: nanoid(),
            project_name: 'fight',
            project_description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
            main_img: fight_img,
            project_refs: [
                {
                    id: nanoid(),
                    imgSrc: ref_1,
                },
                {
                    id: nanoid(),
                    imgSrc: ref_2,
                },
                {
                    id: nanoid(),
                    imgSrc: ref_3,
                },
                {
                    id: nanoid(),
                    imgSrc: ref_4,
                },
                {
                    id: nanoid(),
                    imgSrc: ref_5,
                },
            ],
            software_used: [
                {
                    id: nanoid(),
                    software_name: 'figma',
                    software_icon: figma_img
                },
                {
                    id: nanoid(),
                    software_name: 'photoshop',
                    software_icon: ps_img
                },
                {
                    id: nanoid(),
                    software_name: 'illustrator',
                    software_icon: ai_img
                },
            ]

        },
        {
            id: nanoid(),
            project_name: 'navigation',
            project_description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
            main_img: navigation_img,
            project_refs: [
                {
                    id: nanoid(),
                    imgSrc: ref_1,
                },
                {
                    id: nanoid(),
                    imgSrc: ref_2,
                },
                {
                    id: nanoid(),
                    imgSrc: ref_3,
                },
                {
                    id: nanoid(),
                    imgSrc: ref_4,
                },
                {
                    id: nanoid(),
                    imgSrc: ref_5,
                },
            ],
            software_used: [
                {
                    id: nanoid(),
                    software_name: 'figma',
                    software_icon: figma_img
                },
                {
                    id: nanoid(),
                    software_name: 'photoshop',
                    software_icon: ps_img
                },
                {
                    id: nanoid(),
                    software_name: 'illustrator',
                    software_icon: ai_img
                },
            ]

        },
    ],
    summary_link: 'https://www.thecarguys.net/v8_engine.pdf'
}