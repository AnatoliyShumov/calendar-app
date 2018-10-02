import { assert } from 'chai';
import { addReminder, editReminder, deleteReminder } from './actions.js';
import { reminders } from './reducers.js'; 

describe("Reminders' Reducer", () => {
    var state = {}; 
    beforeEach(() => {
        state = {
            "d122": {
                id: 'd122',
                title: 'Interview',
                date: '2018-10-03',
                time: '12:30:00',
                color: 'BLUE'
            },
            "d123": {
                id: 'd123',
                title: 'This is a title',
                date: '2018-10-01',
                time: '12:30:00',
                color: 'BLUE'
            },
            "d124": {
                id: 'd124',
                title: 'This is a new item',
                date: '2018-10-01',
                time: '1:00:00',
                color: 'RED'
            },
        }
    });

    describe("Performing an ADD_REMINDER action", () => {
        var newReminder = {
            id: 'd126',
            title: 'Go to the corner store',
            date: '2018-10-01',
            time: '5:00:00',
            color: 'Green'
        }; 

        var action = addReminder(newReminder); 

        it('should increase the size of reminders by 1', () => {
            state = reminders(state, action); 
            var size = Object.keys(state).length; 

            assert.strictEqual(size, 4);
        });

        it('should have a new reminder with the id in the ADD_ACTION object', () => {
            state = reminders(state, action); 
            assert.property(state, 'd126');
        });
    });

    describe("Performing an EDIT_REMINDER action", () => {
        it("should not affect the size of the state", () => {
            var action = editReminder({
                id: "d122", 
                title: "A dogs best friend"
            });
            state = reminders(state, action); 

            assert.strictEqual(Object.keys(state).length, 3);
        });

        it("should only change the values specified", () => {
            var actionEditReminder = editReminder({
                id: "d122", 
                title: "A dogs best friend"
            });

            var expected = {
                id: 'd122',
                title: "A dogs best friend",
                date: '2018-10-03',
                time: '12:30:00',
                color: 'BLUE'
            };

            state = reminders(state, actionEditReminder); 
            assert.deepEqual(state["d122"], expected);
        });
    });
    describe("Performing a DELETE_REMINDER action", () => {
        it("should decrease the reminders by 1", () => {
            var actionDeleteReminder = deleteReminder("d122");
            state = reminders(state, actionDeleteReminder);

            assert.strictEqual(Object.keys(state).length, 2);
        });

        it("should remove the reminder from the reminders object", () => {
            var actionDeleteReminder = deleteReminder("d122");
            state = reminders(state, actionDeleteReminder);

            assert.notExists(state["d122"]);
        });
    });
});
