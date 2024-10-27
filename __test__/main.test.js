

import { submitUsername, showUsernames } from '../main';

describe('Username Storage', () => {
    beforeEach(() => {
        localStorage.clear();
    });

    test('should store a single username', () => {
        document.body.innerHTML = `<input id="username" value="testUser" />`;
        submitUsername();

        const storedUsernames = JSON.parse(localStorage.getItem('usernames'));
        expect(storedUsernames).toEqual(['testUser']);
    });

    test('should store multiple usernames', () => {
        document.body.innerHTML = `<input id="username" value="user1" />`;
        submitUsername();
        document.body.innerHTML = `<input id="username" value="user2" />`;
        submitUsername();

        const storedUsernames = JSON.parse(localStorage.getItem('usernames'));
        expect(storedUsernames).toEqual(['user1', 'user2']);
    });

    test('should show stored usernames', () => {
        localStorage.setItem('usernames', JSON.stringify(['user1', 'user2']));
        document.body.innerHTML = `<h1 id="storedUsernames"></h1>`;
        showUsernames();

        const displayedUsernames = document.getElementById('storedUsernames').innerHTML;
        expect(displayedUsernames).toBe('user1<br/>user2');
    });

    test('should show message when no usernames are stored', () => {
        document.body.innerHTML = `<h1 id="storedUsernames"></h1>`;
        showUsernames();

        const displayedUsernames = document.getElementById('storedUsernames').innerHTML;
        expect(displayedUsernames).toBe('No usernames stored.');
    });
});
