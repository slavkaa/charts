var texts_list_d = jQuery.extend({}, IW_Page, {
    alias: 'texts_list_d',
    type: IW_CONSTANTS.DIAGRAM,
    choiceBigText: [
        'Перелік'
    ],
    choiceSmallText: [
        'Вам просто потрібно показати що дані елементи існують.',
        'Немає ніяких акцентів, ні послідовності, ні структури.'
    ],
    imagesUrls: [
        'img/chart_illustrations/list.png'
    ],
    titleSmallText: [
        '"Ви маєте текстові данні, що є простим переліком."'
    ],
    titleBigText: [
        'Перелік'
    ],
    suggestions: [
        IW_Suggestions.importantOnly
    ]
});

// ----------------------------------------------

var texts_structure_hierarchy_complex_d = jQuery.extend({}, IW_Page, {
    alias: 'texts_structure_hierarchy_complex_d',
    type: IW_CONSTANTS.DIAGRAM,
    choiceBigText: [
        'Ні, складна.'
    ],
    choiceSmallText: [
        'На одномі рівні ієрархії може бути як один, так і декілька параметрів.'
    ],
    imagesUrls: [
        'img/chart_illustrations/schema.png'
    ],
    titleSmallText: [
        ''
    ],
    titleBigText: [
        'Структура'
    ],
    suggestions: [
        IW_Suggestions.importantOnly,
        IW_Suggestions.tooManyElements,
        IW_Suggestions.mainElement,
        IW_Suggestions.padding,
        IW_Suggestions.contrast,
        IW_Suggestions.textSize
    ]
});

// ----------------------------------------------

var texts_structure_parts_circle_d = jQuery.extend({}, IW_Page, {
    alias: 'texts_structure_parts_circle_d',
    type: IW_CONSTANTS.DIAGRAM,
    choiceBigText: [
        'Від 2 до 8.'
    ],
    choiceSmallText: [
        'Якщо більше теж обирайте цей варіант.',
        'Далі дубе порада, що робити з зайвим.'
    ],
    imagesUrls: [
        'img/chart_illustrations/pie.png'
    ],
    titleSmallText: [
        '"Ви маєте текстові данні і хочете підкреслити, що елементи складають одне ціле."'
    ],
    titleBigText: [
        'Колова діаграмма, сектори однакового розміру'
    ],
    suggestions: [
        IW_Suggestions.importantOnly,
        IW_Suggestions.tooManyElements,
        IW_Suggestions.mainElement,
        IW_Suggestions.equalSizePie,
        IW_Suggestions.footnotesPie,
        IW_Suggestions.contrast
    ]
});

// ----------------------------------------------

var texts_structure_parts_puzzle_d = jQuery.extend({}, IW_Page, {
    alias: 'texts_structure_parts_puzzle_d',
    type: IW_CONSTANTS.DIAGRAM,
    choiceBigText: [
        'Рівно 4, 6, 9.'
    ],
    choiceSmallText: [
        ''
    ],
    imagesUrls: [
        'img/chart_illustrations/puzzle.png'
    ],
    titleSmallText: [
        '"Ви маєте текстові данні і хочете підкреслити, що елементи складають одне ціле."'
    ],
    titleBigText: [
        'Пазл'
    ],
    suggestions: [
        IW_Suggestions.importantOnly,
        IW_Suggestions.tooManyElements,
        IW_Suggestions.mainElement,
        IW_Suggestions.padding,
        IW_Suggestions.contrast
    ]
});

// ----------------------------------------------

var texts_structure_parts_s = jQuery.extend({}, IW_Page, {
    alias: 'texts_structure_parts_s',
    type: IW_CONSTANTS.STEP,
    titleSmallText: [
        '"Ви маєте текстові данні і хочете підкреслити, що елементи складають одне ціле."'
    ],
    titleBigText: [
        'Скільки у вас елементів?'
    ],
    choiceBigText: [
        'Частини одного цілого'
    ],
    choiceSmallText: [
        'Вам треба акцентувати увагу на тому, що всі елементи діаграмми складають одне ціле.',
        'Частини одного цілого.'
    ],
    choices: [
        texts_structure_parts_puzzle_d,
        texts_structure_parts_circle_d
    ]
});

// ----------------------------------------------

var texts_structure_hierarchy_simple_pyramid_d = jQuery.extend({}, IW_Page, {
    alias: 'texts_structure_hierarchy_simple_pyramid_d',
    type: IW_CONSTANTS.DIAGRAM,
    choiceBigText: [
        'Ні, в мене ж нема цифр'
    ],
    choiceSmallText: [
        'Мені просто треба показіти декілька рівнів ієрархічної структури.'
    ],
    imagesUrls: [
        'img/chart_illustrations/piramid.png'
    ],
    titleSmallText: [
        '"Елементи мають (лінійно) слідувати один за одним, важливо показати підпорядкованість."'
    ],
    titleBigText: [
        'Піраміда'
    ],
    suggestions: [
        IW_Suggestions.equalHeightLayers,
        IW_Suggestions.footnotesPyramid,
        IW_Suggestions.mainElement,
        IW_Suggestions.tooManyElements,
        IW_Suggestions.textSize
    ]
});

// ----------------------------------------------

var texts_structure_hierarchy_simple_box_d = jQuery.extend({}, IW_Page, {
    alias: 'texts_structure_hierarchy_simple_box_d',
    type: IW_CONSTANTS.DIAGRAM,
    choiceBigText: [
        'Так, співвідношення важливе'
    ],
    choiceSmallText: [
        'Я не просто хочу показати ієрархію, але й наочно відобразити співвідношенні між різними шарами у ієрархії.'
    ],
    imagesUrls: [
        'img/chart_illustrations/summarizing-histogramm.png'
    ],
    titleSmallText: [
        '"Елементи мають (лінійно) слідувати один за одним, важливо показати підпорядкованість. Також ви хочете наочно показати відсодкове співвідношення шарів."',
        '',
        'Ця діаграмма чудово показує пропорції.',
        'Не має значення будуть ваші глядачі порівнювати площі елементів чи їх висоту',
        '- їх співвідношення буде математично вірним.',
        'Так як одна з цілей показати структуру - послідовність шарів має відповідати їх ієрархії.',
        'Головніші шари маєють бути вище.'
    ],
    titleBigText: [
        'Стовпчата діаграмма з накопиченням'
    ],
    suggestions: [
        IW_Suggestions.footnotesSum,
        IW_Suggestions.mainElement,
        IW_Suggestions.tooManyElements,
        IW_Suggestions.textSize
    ]
});

// ----------------------------------------------

var texts_structure_hierarchy_simple_s = jQuery.extend({}, IW_Page, {
    alias: 'texts_structure_hierarchy_simple_s',
    type: IW_CONSTANTS.STEP,
    titleSmallText: [
        '"Ви маєте текстові данні, хочете підкреслити відносини підпорядкування між елементами, елементі підпорядковани одмн одному напряму."'
    ],
    titleBigText: [
        'Вам потрібно показати співвідношення між різними шарами діаграмми?'
    ],
    choiceBigText: [
        'Так, проста.'
    ],
    choiceSmallText: [
        'На одномі рівні ієрархії може бути тільки один елемент.'
    ],
    choices: [
        texts_structure_hierarchy_simple_box_d,
        texts_structure_hierarchy_simple_pyramid_d
    ]
});

// ----------------------------------------------

var texts_structure_hierarchy_s = jQuery.extend({}, IW_Page, {
    alias: 'texts_structure_hierarchy_s',
    type: IW_CONSTANTS.STEP,
    titleSmallText: [
        '"Ви маєте текстові данні і хочете підкреслити відносини підпорядкування між елементами."'
    ],
    titleBigText: [
        'Підпорядкованість проста?'
    ],
    choiceBigText: [
        'Ієрархією'
    ],
    choiceSmallText: [
        'Ви хочете акцентувати увагу на відносинах підпорядкування.'
    ],
    choices: [
        texts_structure_hierarchy_simple_s,
        texts_structure_hierarchy_complex_d
    ]
});

// ----------------------------------------------

var texts_structure_chain_long_d = jQuery.extend({}, IW_Page, {
    alias: 'texts_structure_chain_long_d',
    type: IW_CONSTANTS.DIAGRAM,
    choiceBigText: [
        'Широкі'
    ],
    choiceSmallText: [
        'Написи широкі або ви хочете зобразити більше 3-х елементів.',
        'Є написси з 4-х і більше слів, 50-ти і більше літер.',
        'Для того щоб напис було гарно видно, його треба розмістити у декількох рядках чи, при наймі, на всю ширину одного рядка.'
    ],
    imagesUrls: [
        'img/chart_illustrations/algorithm.png'
    ],
    titleSmallText: [
        '"Елементи мають (лінійно) слідувати один за одним, важливо показати що це послідовність, діаграмма містить широкі або довгі тексти."'
    ],
    titleBigText: [
        'Лінійна вертикальна послідовність'
    ],
    suggestions: [
        IW_Suggestions.importantOnly,
        IW_Suggestions.mainElement,
        IW_Suggestions.contrast,
        IW_Suggestions.padding
    ]
});

// ----------------------------------------------

var texts_structure_chain_wide_d = jQuery.extend({}, IW_Page, {
    alias: 'texts_structure_chain_wide_d',
    type: IW_CONSTANTS.DIAGRAM,
    choiceBigText: [
        'Вузькі'
    ],
    choiceSmallText: [
        'Написи вузькі і елементів не більше 3-х.',
        'Найбільший напис складається з 3-х і менше слів, менше 50-ти літер.'
    ],
    imagesUrls: [
        'img/chart_illustrations/algorithm-linear.png'
    ],
    titleSmallText: [
        '"Елементи мають (лінійно) слідувати один за одним, важливо показати що це послідовність, діаграмма містить тільки короткі тексти."'
    ],
    titleBigText: [
        'Лінійна горизонтальна послідовність'
    ],
    suggestions: [
        IW_Suggestions.importantOnly,
        IW_Suggestions.mainElement,
        IW_Suggestions.contrast,
        IW_Suggestions.padding
    ]
});

// ----------------------------------------------

var texts_structure_chain_s = jQuery.extend({}, IW_Page, {
    alias: 'texts_structure_chain_s',
    type: IW_CONSTANTS.STEP,
    titleSmallText: [
        '"Ви маєте текстові данні. Елементи мають (лінійно) слідувати один за одним, важливо показати що це послідовність."'
    ],
    titleBigText: [
        'Якої ширини ваші тексти?'
    ],
    choiceBigText: [
        'Послідовністтю'
    ],
    choiceSmallText: [
        'Треба акцентувати увагу на послідовності елементів.',
        'Ви хочете проіллюструвати, що єтап Б слідує за етапом А.'
    ],
    choices: [
        texts_structure_chain_long_d,
        texts_structure_chain_wide_d
    ]
});

// ----------------------------------------------

var texts_reason_result_timing_d = jQuery.extend({}, IW_Page, {
    alias: 'texts_reason_result_timing_d',
    type: IW_CONSTANTS.DIAGRAM,
    choiceBigText: [
        'тривалість у часі'
    ],
    choiceSmallText: [
        ''
    ],
    imagesUrls: [
        'img/chart_illustrations/timeing.png'
    ],
    titleSmallText: [
        '"Ви маєте текстові данні. Елементи мають (лінійно) слідувати один за одним. Треба акценувати увагу на тривалості кажного елеменат у часі."'
    ],
    titleBigText: [
        'Таймінг'
    ],
    suggestions: [
        IW_Suggestions.importantOnly,
        IW_Suggestions.mainElement,
        IW_Suggestions.contrast
    ]
});

// ----------------------------------------------

var texts_reason_result_crater_d = jQuery.extend({}, IW_Page, {
    alias: 'texts_reason_result_crater_d',
    type: IW_CONSTANTS.DIAGRAM,
    choiceBigText: [
        'зменшенні параметру'
    ],
    choiceSmallText: [
        ''
    ],
    imagesUrls: [
        'img/chart_illustrations/voronka.png'
    ],
    titleSmallText: [
        '"Ви маєте текстові данні. Елементи мають (лінійно) слідувати один за одним. З кожним кроком значення певного параметру зменшується."'
    ],
    titleBigText: [
        'Воронка'
    ],
    suggestions: [
        IW_Suggestions.importantOnly,
        IW_Suggestions.mainElement,
        IW_Suggestions.contrast
    ]
});

// ----------------------------------------------

var texts_reason_result_s = jQuery.extend({}, IW_Page, {
    alias: 'texts_reason_result_s',
    type: IW_CONSTANTS.STEP,
    titleSmallText: [
        '"Ви маєте текстові данні. Елементи мають (лінійно) слідувати один за одним,"'
    ],
    titleBigText: [
        'і ви бажаєте зробити акцент на ...'
    ],
    choiceBigText: [
        'Причина-наслідок'
    ],
    choiceSmallText: [
        'Ви хочете акцентувати увагу глядача на тому, що об’екти на сайді є єтапами первного процессу.',
        'Головна думка не ієрархія, а причинно-наслідковий зв’язок між обьектами.'
    ],
    choices: [
        texts_reason_result_crater_d,
        texts_structure_chain_s,
        texts_reason_result_timing_d
    ]
});

// ----------------------------------------------

var texts_structure_s = jQuery.extend({}, IW_Page, {
    alias: 'texts_structure_s',
    type: IW_CONSTANTS.STEP,
    titleSmallText: [
        '"Ви маєте текстові данні. Елементи мають (лінійно) слідувати один за одним,"'
    ],
    titleBigText: [
        'головним є те що елементи э ...'
    ],
    choiceBigText: [
        'Структура'
    ],
    choiceSmallText: [
        'Ієрархія.',
        'Вам важливо показати підпорядкованість елементів один одному.'
    ],
    choices: [
        texts_structure_chain_s,
        texts_structure_hierarchy_s,
        texts_structure_parts_s
    ]
});

// ----------------------------------------------

var texts_s = jQuery.extend({}, IW_Page, {
    alias: 'texts_s',
    type: IW_CONSTANTS.STEP,
    titleSmallText: [
        '"Ви маєте текстові данні."'
    ],
    titleBigText: [
        'Що ви хочете показати графіком?'
    ],
    choiceBigText: [
        'Тексти'
    ],
    choiceSmallText: [
        'Цифр немає взагалі.',
        'Ви хочете показати порівнняння двох або декількох величин, співвіднощення між частинами цілого.'
    ],
    choices: [
        texts_structure_s,
        texts_reason_result_s,
        texts_list_d
    ]
});