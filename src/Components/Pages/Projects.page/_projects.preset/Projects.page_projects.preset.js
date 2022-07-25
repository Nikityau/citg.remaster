import {nanoid} from "nanoid";

import spaceman_img from 'assets/images/projects/ready/spaceman.png'
import db_img from 'assets/images/projects/ready/db.png'
import learn_img from 'assets/images/projects/ready/learn.png'
import hungry_frog_img from 'assets/images/projects/ready/hungry-frog.png'
import navigation_img from 'assets/images/projects/ready/navigation.png'

import nav_img from 'assets/images/projects/inDev/nav.png'
import A_img from 'assets/images/projects/inDev/A.png'
import arrow_img from 'assets/images/projects/inDev/arrow.png'
import database_img from 'assets/images/projects/inDev/database.png'

import plug_img from 'assets/images/projects/projects-plug.png'

export const projectsPage_projectsPreset = {
    ready_made_projects: [
        {
            id: nanoid(),
            imgSrc: spaceman_img
        },
        {
            id: nanoid(),
            imgSrc: db_img
        },
        {
            id: nanoid(),
            imgSrc: learn_img
        },
        {
            id: nanoid(),
            imgSrc: hungry_frog_img
        },
        {
            id: nanoid(),
            imgSrc: navigation_img
        },
        {
            id: nanoid(),
            imgSrc: plug_img
        },
    ],
    contest_projects: [
        {
            id: nanoid(),
            imgSrc: db_img
        },
        {
            id: nanoid(),
            imgSrc: learn_img
        },
    ],
    projects_in_dev: [
        {
            id: nanoid(),
            title: 'Project 1',
            description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. ' +
                'Velit officia consequat duis enim velit mollit. ' +
                'Exercitation veniam consequat sunt nostrud amet.',
            imgSrc: nav_img
        },
        {
            id: nanoid(),
            title: 'Project 2',
            description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. ' +
                'Velit officia consequat duis enim velit mollit. ' +
                'Exercitation veniam consequat sunt nostrud amet.',
            imgSrc: A_img
        },
        {
            id: nanoid(),
            title: 'Project 3',
            description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. ' +
                'Velit officia consequat duis enim velit mollit. ' +
                'Exercitation veniam consequat sunt nostrud amet.',
            imgSrc: arrow_img
        },
        {
            id: nanoid(),
            title: 'Project 4',
            description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. ' +
                'Velit officia consequat duis enim velit mollit. ' +
                'Exercitation veniam consequat sunt nostrud amet.',
            imgSrc: database_img
        },
    ],
}