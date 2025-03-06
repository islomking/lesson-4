const userimg = document.getElementById('user-image');
const username = document.getElementById('user-name');
const userphone = document.getElementById('user-phone');
const usercity = document.getElementById('user-city');
const userage = document.getElementById('user-age');
const useremail = document.getElementById('user-email');
const userchange = document.getElementById('change-user')

async function fetchUser() {
    try {
        const response = await fetch('https://randomuser.me/api/');
        const data = await response.json();
        const user = data.results[0];
        userimg.src = user.picture.large;
        username.textContent = `${user.name.first} ${user.name.last}`;
        userphone.textContent = user.phone;
        usercity.textContent = user.location.city;
        userage.textContent = user.dob.age;
        useremail.textContent = user.email;
    } catch (error) {
        console.log('Ошибка загрузки данных:', error);
    }
}

userchange.addEventListener('click', fetchUser);
fetchUser();