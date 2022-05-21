// Select DOM elements to work with
const signInButton = document.getElementById('signIn');
const signOutButton = document.getElementById('signOut')
const titleDiv = document.getElementById('title-div');
const welcomeDiv = document.getElementById('welcome-div');
const editProfileButton = document.getElementById('editProfileButton');
const callApiButton = document.getElementById('callApiButton');
const response = document.getElementById("response");
const label = document.getElementById('label');

export function welcomeUser(username: string) {
    welcomeDiv!.innerHTML = `Welcome ${username}!`

    label!.classList.add('d-none');
    signInButton!.classList.add('d-none');
    titleDiv!.classList.add('d-none');

    signOutButton!.classList.remove('d-none');
    editProfileButton!.classList.remove('d-none');
    welcomeDiv!.classList.remove('d-none');
    callApiButton!.classList.remove('d-none');
}

export function logMessage(s: string) {
    response!.appendChild(document.createTextNode('\n' + s + '\n'));
}