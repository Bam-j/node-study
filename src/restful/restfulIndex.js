async function getUser() {
    try {
        const res = await axios.get('/users');
        const users = res.data;
        const list = document.getElementById('list');

        list.innerHTML = '';

        Object.keys(users).map(key => {
            const userDiv = document.createElement('div');
            const span = document.createElement('span');
            const edit = document.createElement('button');
            const remove = document.createElement('button');

            span.textContent = users[key];
            edit.textContent = 'edit';
            edit.addEventListener('click', async () => {
                const name = prompt('바꿀 이름을 입력');

                if (!name) {
                    return alert('이름을 반드시 입력해주세요.');
                }

                try {
                    await axios.put('/user/' + key, {name});
                    await getUser();
                }
                catch (e) {
                    console.error(e);
                }
            });
            remove.textContent = 'remove';
            remove.addEventListener('click', async () => {
                try {
                    await axios.delete('/user/' + key);
                    await getUser();
                }
                catch (e) {
                    console.error(e);
                }
            });
            userDiv.appendChild(span);
            userDiv.appendChild(edit);
            userDiv.appendChild(remove);
            list.appendChild(userDiv);

            console.log(res.data);
        });
    }
    catch (e) {
        console.error(e);
    }
}

window.onload = getUser();

document.getElementById('form').addEventListener('submit', async (e) => {
    e.preventDefault();

    const name = e.target.username.value;

    if (!name) {
        return alert('이름을 입력하세요.');
    }

    try {
        await axios.post('/user', {name});
        await getUser();
    }
    catch (err) {
        console.error(err);
    }
    e.target.username.value = '';
});