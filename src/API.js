import React from 'react'
import AdmissionForm from './AdmissionForm'
import {isEmpty} from 'validator'

let data =
    [
        {
            id: '1',
            message: 'Assalam O Alaikum',
            trigger: 'greeting',
        },
        {
            id: 'greeting',
            message: 'What is your name?',
            trigger: 'name',
        },
        {
            id: 'name',
            user: true,
            trigger: '3',
            validator: (value) => {
                if (isEmpty(value)) {
                    return 'Enter name';
                } else if (parseInt(value)) {
                    return 'value must be a number';
                }
                return true;
            },
        },
        {
            id: '3',
            message: '{previousValue}! What is your gender?',
            trigger: 'gender',
        },
        {
            id: 'gender',
            options: [
                { value: 'male', label: 'Male', trigger: '5' },
                { value: 'female', label: 'Female', trigger: '5' },
            ],
        },
        {
            id: '5',
            message: 'How old are you?',
            trigger: 'age',
        },
        {
            id: 'age',
            user: true,
            trigger: '7',
            validator: (value) => {
                if (isEmpty(value)) {
                    return 'Enter age';
                } else if (isNaN(value)) {
                    return 'value must be a number';
                } else if (value < 0) {
                    return 'value must be positive';
                } else if (value < 18){
                    return 'You are too young!!!';
                } else if (value > 40) {
                    return `${value}? You are too Old!!!`;
                }

                return true;
            },
        },
        {
            id: '7',
            message: 'Which Program would you like to select?',
            trigger: 'programs',
        },
        {
            id: 'programs',
            options: [
                { value: 'bscs', label: 'BSCS', trigger: '8' },
                { value: 'bba', label: 'BBA', trigger: '8' },
                { value: 'bcom', label: 'BCOM', trigger: '8' },
                { value: 'BEd', label: 'BEd', trigger: '8' },
            ],
        },
        {
            id: '8',
            message: 'Which shift do you want to select?',
            trigger: 'shift',
        },
        {
            id: 'shift',
            options: [
                { value: 'morning', label: 'Morning', trigger: '9' },
                { value: 'evening', label: 'Evening', trigger: '9' }
            ],
        },
        {
            id: '9',
            message: 'Please mention your previous qualifications?',
            trigger: 'qualification',
        },
        {
            id: 'qualification',
            user: true,
            trigger: '10',
            validator: (value) => {
                if (isEmpty(value)) {
                    return 'Enter qualification';
                } else if (parseInt(value)) {
                    return 'value must be a number';
                }
                return true;
            },
        },
        {
            id: '10',
            message: 'Please mention your percentage?',
            trigger: 'percentage'
        },
        {
            id: 'percentage',
            user: true,
            trigger: '11',
            validator: (value) => {
                if (isEmpty(value)) {
                    return 'provide percentage';
                } else if (isNaN(value)) {
                    return 'value must be a number';
                }  else if (value < 0) {
                    return 'value must be positive';
                } else if (value < 40){
                    return 'You are not allowed to take addmission';
                } else if (value > 100) {
                    return `${value}? Come on!!!`;
                }

                return true;
            },
        },
        {
            id: '11',
            message: 'Great! Check out your summary',
            trigger: 'review',
        },
        {
            id: 'review',
            component: <AdmissionForm />,
            asMessage: true,
            trigger: 'update',
        },
        {
            id: 'update',
            message: 'Would you like to update some field?',
            trigger: 'update-question',
        },
        {
            id: 'update-question',
            options: [
                { value: 'yes', label: 'Yes', trigger: 'update-yes' },
                { value: 'no', label: 'No', trigger: 'end-message' },
            ],
        },
        {
            id: 'update-yes',
            message: 'What field would you like to update?',
            trigger: 'update-fields',
        },
        {
            id: 'update-fields',
            options: [
                { value: 'name', label: 'Name', trigger: 'update-name' },
                { value: 'gender', label: 'Gender', trigger: 'update-gender' },
                { value: 'age', label: 'Age', trigger: 'update-age' },
                { value: 'programs', label: 'Programs', trigger: 'update-programs' },
                { value: 'shift', label: 'Shift', trigger: 'update-shift' },
                { value: 'qualification', label: 'Qualification', trigger: 'update-qualification' },
                { value: 'percentage', label: 'percentage', trigger: 'update-percentage' },
            ],
        },
        {
            id: 'update-name',
            update: 'name',
            trigger: '11',
        },
        {
            id: 'update-gender',
            update: 'gender',
            trigger: '11',
        },
        {
            id: 'update-age',
            update: 'age',
            trigger: '11',
        },
        {
            id: 'update-programs',
            update: 'programs',
            trigger: '11',
        },
        {
            id: 'update-shift',
            update: 'shift',
            trigger: '11',
        },
        {
            id: 'update-qualification',
            update: 'qualification',
            trigger: '11',
        },
        {
            id: 'update-percentage',
            update: 'percentage',
            trigger: '11',
        },
        {
            id: 'end-message',
            message: 'Thanks! Your data was submitted successfully!',
            end: true,
        },
    ]
    export default data;