import { error } from '@sveltejs/kit';
import database from './subject-info.json';
/** @type {import('./$types').PageLoad} */
export function load({ params }) {
    let subject = database.subjects[params.subject]
    // return {
    //     post: {
    //         title: subject.titles,
    //         description: subject.description
    //     }
    // };
    return {
        post: {
            titles: subject.titles,
            description: subject.description,
            required_stationary: subject.required_stationary,
            teachers: subject.teachers,
            timetable: subject.timetable,
            internals: subject.internals,
            externals: subject.externals,
            image_path: subject.image_path,
            timetable_path: subject.timetable_path
        }
    };
}