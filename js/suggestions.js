var IW_Suggestions = {};

IW_Suggestions.importantOnly = {
    label: [
        'Приберіть не важливе взагалі'
    ],
    text: [
        'Зробіть діаграмму.',
        'Потім подивіться на неї - може є зайва інформація?',
        'Якісь елементи які є на схемі, але про які ви не збираєьась говорити.',
        'зайва інформація має декалька недоліків:',
        '- вона займають місце',
        '- ви витрачаєте час на те щоб знайти,назвати, розмістити її,',
        '- вона обьв’язково викличє питання уважного слухача (людина буде певна що допомагає вам, бо ви нічого не сказали який елемент - забули?)'
    ]
};
IW_Suggestions.tooManyElements = {
    label: [
        'Об’єднайте не важливі елементи,',
        'які не можна прибрати'
    ],
    text: [
        'Ви бачите що діаграмма має багато дрібних показників?.',
        'До того ж ви збираєтесь говорити тільки про одни - головний, чи декілька найбільших?',
        'Залиште до 7 елементів.',
        'Об’єднайте все не важливе у один елемент і підпішить його "Інше".',
        'Це:',
        '- зменшить кількість підписів на сторінці, а отже звільнить місце для важливого тесту/малюнків',
        '- збереже ваш час на пошук і підписування (вигадування підписів)',
        '- зменшить кількість питань на які ви не знаєте відповідь, або обговорення яких тільки відволіче час аудіторії'
    ]
};
IW_Suggestions.mainElement = {
    label: [
        'Виділіть головний елемент'
    ],
    text: [
        'Можливо у вас є один головний елемент, про який ві будете розповідати. Все інше - фон.',
        'Виділіть цей елемент кольором. Це з оріентує гладачів, вони не будуть відволікатися на другоряді елементи.'
    ]
};
IW_Suggestions.contrast = {
    label: [
        'Зробіть конрасний (відносно літер) фон'
    ],
    text: [
        'Впевніться що пишете темними літерами по світлому тлу, чи світлими по темному.',
        'Не використовуйте фоновій градієнт - якісь літери обов’язково буде не зручно читати.',
        'Якщо все і так гарно читається - нічого не міняйте! :)'
    ]
};
IW_Suggestions.padding = {
    label: [
        'Зробіть відстань від рамки до текстів '
    ],
    text: [
        'Відстань від рамки до тексту має бути більше вісоти заголовної літери (наприклад "М").',
        'Не ліпіть текст до рамки, читачам буде важко розгледіти літери - лінія нижньої рамки буде сприйматися як частина літери.',
        'Наприклад якшо нижній рядок ліпиться но нижньї рамки, то "П" і "О" бідуть схожі, а також "М-Ш-Щ", "В-Р-Е" т.п.'
    ]
};
IW_Suggestions.footnotesPyramid = {
    label: [
        'Зробіть зноски'
    ],
    text: [
        'У комірки данної діаграмми важко вписати написи.',
        'Особливо у верхні шари. І це спотворює діаграмму.',
        'Змістіть діаграмму трохи ліворуч чи праворуч від центру малюнка',
        'та зробить виносні лінії до підписів.',
        'Ви зможете вирівняти підписи і зберегти структуру шарів піраміди рівномірною.',
        'Це зробитьдіаграмму привабливішою'
    ]
};
IW_Suggestions.footnotesSum = {
    label: [
        'Зробіть зноски'
    ],
    text: [
        'Якщо у вас є малі за висотою/плошею елементи - зробіть зноски.',
        'Це єдиний спосіб зберегти співвідношення елементів і підписати їх рівноовеликими підписами.',
        'Змістіть діаграмму трохи ліворуч чи праворуч від центру малюнка',
        'та зробить виносні лінії до підписів.'
    ]
};
IW_Suggestions.footnotesPie = {
    label: [
        'Зробіть зноски'
    ],
    text: [
        'Якщо у вас є малі за висотою/плошею елементи - зробіть зноски.',
        'Це єдиний спосіб зберегти співвідношення елементів і підписати їх рівноовеликими підписами.'
    ]
};
IW_Suggestions.equalHeightLayers = {
    label: [
        'Зробіть шари однаковими'
    ],
    text: [
        'Дана діаграма не призначена для відображеня пропорцій.',
        'Її похилі краї спотворюють співвідношення.',
        'До того ж не зрозуміло, що співвідносити - висоту шарів, чи іх прощу.',
        'Кожен глядач буде порівнювати шари, як вважає за потрібне.',
        'Можливо варто зазначити устно, що дана діаграмма показує структуру, а не співвіднощення',
        'щоб глядачі одразу зконцентрувалися на найважливішому.'
    ]
};
IW_Suggestions.equalSizePie = {
    label: [
        'Зробіть сектори однаковими'
    ],
    text: [
        'Дана діаграма призначена для відображеня пропорцій, але це не є вашою метою.',
        'Зробіть сертори рівного розміру.',
        'Скажіть усно, що діаграмма не відображає пропорції, щою уникнути зайвих запитаннь.'
    ]
};
IW_Suggestions.textSize = {
    label: [
        'Зробіть текст оптимального розміру'
    ],
    text: [
        'Оптимальний розмір тексту залежить від висоти екрану, на який проктується слайд',
        'та відстані від екрану до кінця зали.',
        'Якщо ви можете перевірити презентацію зазадалегіть,',
        'Зробіть тестовий слайд з чотирма написами шрифтом Аріал різного розміру: 18, 24, 30, 36 pt.',
        'Сядьте у кінці залу і подивіться який, мінімальній за розміром шрифта, напис вам зручно читати.',
        'Використовуйте данній шрифт для всіх написів.',
        'Якщо ви не можете спробувати - використовуйте шрифт 24pt.'
    ]
};
