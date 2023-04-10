'use strict';

const helpers = require('../helpers');
const user = require('../../user');
const db = require('../../database');

const Career = module.exports;

Career.register = async (req, res) => {
    const userData = req.body;
    try {
        const userCareerData = {
            student_id: userData.student_id,
            major: userData.major,
            age: userData.age,
            gender: userData.gender,
            gpa: userData.gpa,
            extra_curricular: userData.extra_curricular,
            num_programming_languages: userData.num_programming_languages,
            num_past_internships: userData.num_past_internships,
        };
        // userCareerData.prediction = Math.round(Math.random());
        // TODO: Change this line to
        const response = await fetch('https://ml-micro.fly.dev/students/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userCareerData),
        });
        if (response.ok) {
            const prediction = await response.json();
            userCareerData.prediction = prediction.result;
            console.log(prediction);
        } else {
            throw new Error(`Failed to fetch prediction: ${response.status}`);
        }
        await user.setCareerData(req.uid, userCareerData);
        db.sortedSetAdd('users:career', req.uid, req.uid);
        res.json({});
    } catch (err) {
        console.log(err);
        helpers.noScriptErrors(req, res, err.message, 400);
    }
};
