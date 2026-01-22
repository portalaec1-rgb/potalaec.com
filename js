// Данные пользователя (пока храним тут)
let user = {
    name: "Ерсултан",
    coins: 1250,
    rank: "Активист КДМ",
    completed: 5
};

function showPage(pageId, element) {
    const contentArea = document.getElementById('content-area');
    
    // Обновляем активную кнопку в меню
    document.querySelectorAll('.nav-item').forEach(item => item.classList.remove('active'));
    if(element) element.classList.add('active');

    if (pageId === 'home') {
        contentArea.innerHTML = `
            <h1>Движ КДМ</h1>
            <div class="quest-card accent-border">
                <h3>🔥 Срочная новость</h3>
                <p>Завтра в 15:00 общее собрание в актовом зале. Быть всем!</p>
            </div>
        `;
    } 
    
    else if (pageId === 'quests') {
        contentArea.innerHTML = `
            <h1>Квесты</h1>
            <div class="quest-card">
                <h3>📸 Фото-отчет</h3>
                <p>Сделай селфи с председателем КДМ.</p>
                <b style="color:var(--accent)">+300 🪙</b>
            </div>
        `;
    } 
    
    else if (pageId === 'top') {
        contentArea.innerHTML = `
            <h1>ТОП-10</h1>
            <div class="quest-card">
                <p>1. Ерсултан — 5000 🪙</p>
                <p>2. Админ — 4999 🪙</p>
            </div>
        `;
    } 
    
    else if (pageId === 'profile') {
        contentArea.innerHTML = `
            <h1>Мой профиль</h1>
            <div class="profile-card" style="text-align: center;">
                <span class="material-icons" style="font-size: 80px; color: var(--accent);">account_circle</span>
                <h2>${user.name}</h2>
                <p style="color: var(--dim);">${user.rank}</p>
                <hr style="border: 0.5px solid #222; margin: 20px 0;">
                <div style="display: flex; justify-content: space-around;">
                    <div>
                        <h3 style="margin:0;">${user.coins}</h3>
                        <small style="color: var(--dim);">Монеты</small>
                    </div>
                    <div>
                        <h3 style="margin:0;">${user.completed}</h3>
                        <small style="color: var(--dim);">Квесты</small>
                    </div>
                </div>
            </div>
        `;
    }
}

// При запуске показываем главную
window.onload = () => {
    document.getElementById('coins-top').innerText = user.coins;
    document.getElementById('username').innerText = user.name;
    showPage('home');
};
