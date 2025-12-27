const questions = [
    {
        id: 1,
        text: "Светка заходит в комнату. Что происходит?",
        sticker: "./светка.webp",
        answers: [
            { text: "Обстановка становится нормальной", value: "a" },
            { text: "Обстановка становится лучше", value: "b", correct: true },
            { text: "Неизвестно, но что-то меняется", value: "c" }
        ],
        feedback: {
            default: "Ответ принят"
        }
    },
    {
        id: 2,
        text: "Как часто Светка оказывается права?",
        answers: [
            { text: "Иногда", value: "a" },
            { text: "Часто", value: "b" },
            { text: "Подозрительно часто", value: "c", correct: true, special: "warning" }
        ],
        feedback: {
            default: "",
            c: "⚠️ Вы выбрали популярный вариант"
        }
    },
    {
        id: 3,
        text: "Уровень харизмы Светки:",
        sticker: "./да_я_сучка.webp",
        answers: [
            { text: "В пределах нормы", value: "a" },
            { text: "Выше среднего", value: "b" },
            { text: "Требует отдельной шкалы", value: "c", correct: true }
        ],
        feedback: {
            default: ""
        }
    },
    {
        id: 4,
        text: "Как часто Светка оказывается смелой после одного бокала пива?",
        sticker: "./пиво.webp",
        answers: [
            { text: "Часто", value: "1" },
            { text: "Очень часто", value: "2" },
            { text: "Постоянно", value: "3", correct: true },
            { text: "Никогда", value: "4" }
        ],
        feedback: {
            default: ""
        }
    },
    {
        id: 5,
        text: "Как часто Светка смущается, если на неё пристально смотреть?",
        answers: [
            { text: "Всегда", value: "1" },
            { text: "Никогда", value: "2" },
            { text: "Зависит кто смотрит", value: "3", correct: true }
        ],
        feedback: {
            default: ""
        }
    },
    {
        id: 6,
        text: "От чего у Светки слетают трусы?",
        sticker: "./ебать_ты_сосочка.webp",
        answers: [
            { text: "Рыбные палки", value: "1", correct: true },
            { text: "2-х метровый вампир-миллионер", value: "2" },
            { text: "Молочный шоколад", value: "3" }
        ],
        feedback: {
            default: "",
            "1": "А че нет"
        }
    },
    {
        id: 7,
        text: "В конкурсе мисс вселенная Светка занимает место под номером?",
        sticker: "./удостоверение_стервы.webp",
        answers: [
            { text: "Один", value: "1", correct: true, special: "correct" },
            { text: "Два", value: "2", special: "explode" },
            { text: "Три", value: "3", special: "explode" }
        ],
        feedback: {
            default: ""
        },
        warning: "⚠️ Если нажать на другой вариант, телефон взорвётся"
    },
    {
        id: 8,
        text: "Светка говорит «щас». Это сколько?",
        sticker: "./гусеница_курит.webp",
        answers: [
            { text: "1 минута", value: "1" },
            { text: "Минут 10", value: "2" },
            { text: "Когда захочет", value: "3", correct: true, special: "warning" }
        ],
        feedback: { 
            default: "",
            "3": "⏰ Время — понятие относительное"
        }
    },
    {
        id: 9,
        text: "Светка в хорошем настроении. Как понять?",
        answers: [
            { text: "Она улыбается", value: "1" },
            { text: "Она шутит", value: "2" },
            { text: "Она перестала хейтить всё подряд", value: "3", correct: true }
        ],
        feedback: { 
            default: "",
            "3": "А хуй знает, почему это правильный ответ"
        }
    },
    {
        id: 10,
        text: "Если Светка сказала «пошли», то…",
        sticker: "./как_вы_все_заебали.webp",
        answers: [
            { text: "Надо идти", value: "1", correct: true, special: "correct" },
            { text: "Можно ещё посидеть", value: "2", special: "explode" }
        ],
        feedback: { default: "" },
        warning: "Выбор неправильного ответа вызывает осуждение"
    },
    {
        id: 11,
        text: "Заведка Кожвена",
        sticker: "./котенок_шлха.webp",
        answers: [
            { text: "Шлюха", value: "1", correct: true, special: "correct" },
            { text: "Шлюха", value: "2", special: "explode" },
            { text: "Шлюха", value: "3", special: "explode" }
        ],
        feedback: { 
            default: "",
            "1": "✨ Правильная шлюха выбрана"
        }
    },
    {
        id: 12,
        text: "На работе обосрался очередной дед. Реакция Светки?",
        sticker: "./шрек_снимает.webp",
        answers: [
            { text: "Шок и ужас", value: "1" },
            { text: "Обычное дело", value: "2", correct: true },
            { text: "Позвонить в скорую", value: "3" },
            { text: "Сфоткать и отправить в чат", value: "4" }
        ],
        feedback: {
            default: "",
            "2": "Рабочие будни как они есть",
            "4": "Хоть и не правильно, но логично"
        }
    }
];

const results = [
    {
        minScore: 0,
        maxScore: 3,
        title: "Кто вы вообще?",
        subtitle: "Вы точно знаете Светку?",
        sticker: "./ого_ну_и_хуйня.webp",
        details: [
            "❌ Знание Светки — критически низкое",
            "❌ Вайб — не считан",
            "❌ Требуется повторное знакомство",
            "⚠️ Рекомендация: проведите больше времени со Светкой"
        ]
    },
    {
        minScore: 4,
        maxScore: 6,
        title: "Начинающий светковед",
        subtitle: "Есть потенциал, но нужна практика",
        sticker: "./котенок_матерится.webp",
        details: [
            "✔️ Базовые знания — присутствуют",
            "⚠️ Глубина понимания — средняя",
            "❌ Некоторые нюансы упущены",
            "💡 Совет: внимательнее слушайте Светку"
        ]
    },
    {
        minScore: 7,
        maxScore: 9,
        title: "Продвинутый светковед",
        subtitle: "Вы неплохо разбираетесь в Светке!",
        sticker: "./котенок_стреляет.webp",
        details: [
            "✔️ Харизма Светки — понята",
            "✔️ Вайб — считывается",
            "✔️ Основные триггеры — известны",
            "⚠️ До идеала осталось чуть-чуть"
        ]
    },
    {
        minScore: 10,
        maxScore: 12,
        title: "Эксперт по Светке",
        subtitle: "Вы отлично знаете все нюансы!",
        sticker: "./да_я_сучка.webp",
        details: [
            "✔️ Харизма Светки — понята",
            "✔️ Вайб — считывается",
            "✔️ Основные триггеры — известны",
            "✔️ Рабочие ситуации — изучены",
            "⚠️ До идеала осталось чуть-чуть"
        ]
    },
    {
        minScore: 13,
        maxScore: 13,
        title: "Светка — классная",
        subtitle: "(подтверждено экспертом)",
        sticker: "./светка.webp",
        details: [
            "✔️ Харизма — выше нормы",
            "✔️ Вайб — стабильный",
            "✔️ Скучно — не обнаружено",
            "✔️ Рабочие будни — приняты",
            "⚠️ Возможна недооценка себя",
            "🏆 Вы — настоящий светковед!"
        ]
    }
];

let currentQuestion = 0;
let userAnswers = [];
let score = 0;
let lastClickTime = 0;
let clickCount = 0;
let retryCount = 0;

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('start-btn').addEventListener('click', startTest);
    document.getElementById('retry-btn').addEventListener('click', retryTest);
    document.getElementById('add-argument-btn').addEventListener('click', addArgument);
    document.getElementById('close-modal').addEventListener('click', closeModal);
});

function startTest() {
    currentQuestion = 0;
    userAnswers = [];
    score = 0;
    showQuestion();
}

function showQuestion() {
    const question = questions[currentQuestion];
    const questionScreen = document.getElementById('question-screen');
    const welcomeScreen = document.getElementById('welcome-screen');
    const resultScreen = document.getElementById('result-screen');
    
    welcomeScreen.classList.remove('active');
    resultScreen.classList.remove('active');
    questionScreen.classList.add('active');
    
    document.getElementById('question-number').textContent = `Вопрос ${question.id} из ${questions.length}`;
    const progress = ((currentQuestion) / questions.length) * 100;
    document.getElementById('progress-bar').style.width = `${progress}%`;
    
    const stickerContainer = document.getElementById('question-sticker');
    if (question.sticker) {
        stickerContainer.innerHTML = `<img src="${question.sticker}" alt="sticker" class="question-sticker-img">`;
        stickerContainer.style.display = 'block';
    } else {
        stickerContainer.style.display = 'none';
    }
    
    document.getElementById('question-text').textContent = question.text;
    
    const answersContainer = document.getElementById('answers');
    answersContainer.innerHTML = '';
    
    question.answers.forEach((answer, index) => {
        const btn = document.createElement('button');
        btn.className = 'answer-btn';
        btn.textContent = answer.text;
        btn.addEventListener('click', () => selectAnswer(answer, question, btn));
        answersContainer.appendChild(btn);
    });
    
    const feedback = document.getElementById('answer-feedback');
    if (question.warning) {
        feedback.textContent = question.warning;
        feedback.className = 'answer-feedback warning';
    } else {
        feedback.textContent = '';
        feedback.className = 'answer-feedback';
    }
    
    clickCount = 0;
    lastClickTime = Date.now();
}

function selectAnswer(answer, question, button) {
    const now = Date.now();
    const timeSinceLastClick = now - lastClickTime;
    
    if (timeSinceLastClick < 300) {
        clickCount++;
        if (clickCount >= 3) {
            showEasterEgg("⚠️ Пожалуйста, не мешайте тесту\nОн и так знает результат", "./котенок_матерится.webp");
            clickCount = 0;
            return;
        }
    } else {
        clickCount = 0;
    }
    lastClickTime = now;
    
    if (answer.special === 'explode') {
        handleExplosion(button, question);
        return;
    }
    
    document.querySelectorAll('.answer-btn').forEach(btn => {
        btn.classList.remove('selected');
    });
    button.classList.add('selected');
    
    const isCorrect = answer.correct === true;
    if (isCorrect) {
        score++;
        button.classList.add('correct');
    } else {
        button.classList.add('incorrect');
        const correctAnswer = question.answers.find(a => a.correct);
        if (correctAnswer) {
            const allBtns = document.querySelectorAll('.answer-btn');
            allBtns.forEach(btn => {
                if (btn.textContent === correctAnswer.text) {
                    btn.classList.add('correct-hint');
                }
            });
        }
    }
    
    const feedback = document.getElementById('answer-feedback');
    let feedbackText = question.feedback[answer.value] || question.feedback.default || '';
    
    if (isCorrect) {
        feedbackText = feedbackText || "✅ Правильно!";
    } else {
        feedbackText = feedbackText || "❌ Неправильно!";
    }
    
    feedback.textContent = feedbackText;
    feedback.className = isCorrect ? 'answer-feedback correct' : 'answer-feedback incorrect';
    
    userAnswers.push({
        questionId: question.id,
        answer: answer.value,
        correct: isCorrect
    });
    
    document.querySelectorAll('.answer-btn').forEach(btn => {
        btn.disabled = true;
    });
    
    setTimeout(() => {
        currentQuestion++;
        if (currentQuestion < questions.length) {
            showQuestion();
        } else {
            showLoading();
        }
    }, 1500);
}

function handleExplosion(button, question) {
    button.classList.add('explode');
    button.textContent = '💥 БУМ! 💥';
    
    const container = document.querySelector('.container');
    container.classList.add('shake');
    
    let message = "💥 Что-то веселое произошло!";
    let sticker = "./котенок_стреляет.webp";
    
    if (question.id === 7) {
        message = "💥 Телефон взорвался!\n(Но правильный ответ всё равно 'Один' 😉)";
    } else if (question.id === 10) {
        message = "😤 Светка осуждает ваш выбор!\nКогда она говорит 'пошли' — надо идти!";
        sticker = "./как_вы_все_заебали.webp";
    } else if (question.id === 11) {
        message = "🎰 Вы выбрали не ту шлюху!\nНо все варианты были одинаковые...";
        sticker = "./котенок_шлха.webp";
    }
    
    setTimeout(() => {
        showEasterEgg(message, sticker);
        container.classList.remove('shake');
        
        setTimeout(() => {
            const correctAnswer = question.answers.find(a => a.correct);
            const allBtns = document.querySelectorAll('.answer-btn');
            allBtns.forEach(btn => {
                if (btn.textContent === correctAnswer.text && !btn.classList.contains('explode')) {
                    btn.classList.add('selected', 'correct');
                }
            });
            
            score++;
            userAnswers.push({
                questionId: question.id,
                answer: correctAnswer.value,
                correct: true
            });
            
            allBtns.forEach(btn => btn.disabled = true);
            
            setTimeout(() => {
                currentQuestion++;
                if (currentQuestion < questions.length) {
                    showQuestion();
                } else {
                    showLoading();
                }
            }, 1500);
        }, 1000);
    }, 600);
}

function showLoading() {
    const questionScreen = document.getElementById('question-screen');
    const loadingScreen = document.getElementById('loading-screen');
    
    questionScreen.classList.remove('active');
    loadingScreen.classList.add('active');
    
    const progressBar = document.getElementById('loading-progress');
    const progressText = document.getElementById('progress-text');
    const loadingNote = document.getElementById('loading-note');
    
    const intervals = [12, 47, 99, 100];
    let intervalIndex = 0;
    
    const updateProgress = () => {
        if (intervalIndex < intervals.length) {
            const progress = intervals[intervalIndex];
            progressBar.style.setProperty('--progress', `${progress}%`);
            progressText.textContent = `${progress}%`;
            
            if (progress === 99) {
                setTimeout(() => {
                    intervalIndex++;
                    updateProgress();
                }, 1500);
            } else {
                intervalIndex++;
                if (intervalIndex < intervals.length) {
                    setTimeout(updateProgress, 600);
                } else {
                    loadingNote.textContent = "(сервер немного устал)";
                    setTimeout(() => {
                        showResults();
                    }, 1000);
                }
            }
        }
    };
    
    updateProgress();
}

function showResults() {
    const loadingScreen = document.getElementById('loading-screen');
    const resultScreen = document.getElementById('result-screen');
    
    loadingScreen.classList.remove('active');
    resultScreen.classList.add('active');
    
    const result = results.find(r => score >= r.minScore && score <= r.maxScore) || results[results.length - 1];
    
    document.getElementById('result-title').textContent = 'РЕЗУЛЬТАТ:';
    document.getElementById('result-main').textContent = result.title;
    document.getElementById('result-subtitle').textContent = result.subtitle;

    const stickerContainer = document.getElementById('result-sticker');
    stickerContainer.innerHTML = `<img src="${result.sticker}" alt="result" class="result-sticker-img">`;
    
    document.getElementById('score-display').textContent = `Правильных ответов: ${score} из ${questions.length}`;
    
    const detailsContainer = document.getElementById('result-details');
    detailsContainer.innerHTML = result.details.map(detail => {
        let className = 'result-item';
        if (detail.startsWith('❌')) className += ' error';
        if (detail.startsWith('⚠️')) className += ' warning';
        if (detail.startsWith('🏆') || detail.startsWith('💡')) className += ' special';
        return `<div class="${className}">${detail}</div>`;
    }).join('');
}

function retryTest() {
    retryCount++;
    if (retryCount === 1) {
        showEasterEgg("Результат не изменился\n(что вы ожидали?)", "./гусеница_курит.webp");
    } else if (retryCount === 2) {
        showEasterEgg("Результат всё ещё не изменился\n(вы упорный, это хорошо)", "./плачет.webp");
    } else {
        retryCount = 0;
        startTest();
    }
}

function addArgument() {
    const args = [
        { text: "Аргумент добавлен в базу данных", sticker: "./гусеница_курит.webp" },
        { text: "Ваш аргумент принят к сведению", sticker: "./котенок_матерится.webp" },
        { text: "Аргумент обработан нейросетью", sticker: "./ого_ну_и_хуйня.webp" },
        { text: "Аргумент отправлен на рассмотрение", sticker: "./котенок_стреляет.webp" },
        { text: "Аргумент добавлен.\nРезультат не изменился 😉", sticker: "./да_я_сучка.webp" }
    ];
    const randomArg = args[Math.floor(Math.random() * args.length)];
    showEasterEgg(randomArg.text, randomArg.sticker);
}

function showEasterEgg(text, sticker = null) {
    const modal = document.getElementById('easter-egg-modal');
    const modalText = document.getElementById('easter-egg-text');
    const modalSticker = document.getElementById('modal-sticker');
    
    modalText.textContent = text;
    
    if (sticker) {
        modalSticker.innerHTML = `<img src="${sticker}" alt="sticker" class="modal-sticker-img">`;
        modalSticker.style.display = 'block';
    } else {
        modalSticker.style.display = 'none';
    }
    
    modal.classList.add('active');
}

function closeModal() {
    const modal = document.getElementById('easter-egg-modal');
    modal.classList.remove('active');
}

document.getElementById('easter-egg-modal').addEventListener('click', (e) => {
    if (e.target.id === 'easter-egg-modal') {
        closeModal();
    }
});
