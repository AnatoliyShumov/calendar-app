//payloads of information that send data from the view to the store

// action types 
export const EDIT_REMINDER = 'EDIT_REMINDER'; 
export const DELETE_REMINDER = 'DELETE_REMINDER'; 
export const ADD_REMINDER = 'ADD_REMINDER'; 
export const SET_CALENDAR_EXPANSION = 'SET_CALENDAR_EXPANSION'; 
export const OPEN_REMINDER_FORM = 'OPEN_REMINDER_FORM';
export const CLOSE_REMINDER_FORM = 'CLOSE_REMINDER_FORM';

// filter constants
export const ExpansionFilters = {
    BY_YEAR: 'BY_YEAR',
    BY_MONTH: 'BY_MONTH'
}

export function closeReminderForm() {
    return {
        type: CLOSE_REMINDER_FORM
    }
}

export function openReminderForm() {
    return {
        type: OPEN_REMINDER_FORM
    }
}

// action creators - functions that create action
export function addReminder(reminder) {
    return {
        type: ADD_REMINDER, 
        reminder
    }
}

export function editReminder(reminder) {
    return {
        type: EDIT_REMINDER, 
        reminder
    };
}

export function deleteReminder(id) {
    return {
        type: DELETE_REMINDER, 
        id
    };
}

export function setCalendarExpansionFilter(expansion) {
    return {
        type: SET_CALENDAR_EXPANSION, 
        expansion
    };
}

