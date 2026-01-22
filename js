// Функция для смены страниц (экранов)
function showPage(pageId) {
    const contentArea = document.getElementById('content-area');
    
    // Убираем активный класс у всех кнопок меню
    document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.remove('active');
    });

    // Добавляем активный класс нажатой кнопке (через поиск по тексту или иконке)
    // Но для простоты пока просто сменим контент
    
    if (pageId === 'home') {
        contentArea.innerHTML = `
            <h1>Движ КДМ</h1>
            <div class="quest-card" style="background: var(--card-bg); padding: 15px; border-radius: 15px; border-left: 4px solid var(--accent);">
                <h3>Событие недели</h3>
                <p>Готовимся к большому квесту для первокурсников!</p>
            </div>
        `;
    } else if (pageId === 'quests') {
        contentArea.innerHTML = `
            <h1>Доступные Квесты</h1>
            <div class="quest-card" style="background: var(--card-bg); padding: 15px; border-radius: 15px; margin-bottom: 10px;">
                <h3>📸 Фото-охота</h3>
                <p>Сделай фото с 3-мя активистами КДМ.</p>
                <button onclick="alert('Задание принято!')" style="background: var(--accent); border: none; padding: 10px; border-radius: 5px; color: white;">Принять</button>
            </div>
        `;
    } else if (pageId === 'top') {
        contentArea.innerHTML = `
            <h1>ТОП-10 Активистов</h1>
            <ol style="background: var(--card-bg); padding: 20px; border-radius: 15px;">
                <li>Ерсултан (Легенда) — 5000 🪙</li>
                <li>Алексей — 4200 🪙</li>
                <li>Мария — 3800 🪙</li>
            </ol>
            <p style="color: var(--accent); text-align: center;">Борись за бесплатный обед!</p>
        `;
    } else if (pageId === 'admin') {
        contentArea.innerHTML = `
            <h1>Вход для КДМ</h1>
            <input type="password" id="adminPass" placeholder="Введите код доступа" style="width: 100%; padding: 10px; margin-bottom: 10px; border-radius: 5px; border: none;">
            <button onclick="checkAdmin()" style="width: 100%; background: var(--accent); border: none; padding: 10px; border-radius: 5px; color: white;">Войти в панель</button>
        `;
    }
}

// Загружаем главную страницу при старте
window.onload = () => {
    showPage('home');
};

function checkAdmin() {
    const pass = document.getElementById('adminPass').value;
    if (pass === '1234') { // Временный пароль
        alert('Доступ разрешен! Здесь будет управление квестами.');
    } else {
        alert('Неверный код доступа!');
    }
}

