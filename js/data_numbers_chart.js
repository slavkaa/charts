
var numbers_comparison_amount_4_plus_bar_d = jQuery.extend({}, IW_Page, {
    alias: 'numbers_comparison_amount_4_plus_bar_d',
    type: IW_CONSTANTS.DIAGRAM,
    choiceBigText: [
        '1'
    ],
    choiceSmallText: [
        ''
    ],
    imagesUrls: [
        'img/chart_illustrations/bar.png'
    ],
    titleSmallText: [
        ''
    ],
    titleBigText: [
        ''
    ],
    suggestions: [
        IW_Suggestions.importantOnly,
        IW_Suggestions.mainElement,
        IW_Suggestions.contrast
    ]
});

// ----------------------------------------------

var numbers_comparison_amount_4_plus_too_much_s = jQuery.extend({}, IW_Page, {
    alias: 'numbers_comparison_amount_4_plus_too_much_s',
    type: IW_CONSTANTS.STEP,
    choiceBigText: [
        '2+'
    ],
    choiceSmallText: [
        'Люди будуть плутатись у безлічі стовпчиків.',
        'Треба спростити: або прибрати непотрібні стовпчики,',
        'або виділити 2-3 думки які ви хочете донести',
        'і сробити декілька слайдів'
    ],
    titleSmallText: [
        ''
    ],
    titleBigText: [
        ''
    ],
    isUserCanFollow: false
});

// ----------------------------------------------

var numbers_comparison_amount_4_plus_s = jQuery.extend({}, IW_Page, {
    alias: 'numbers_comparison_amount_4_plus_s',
    type: IW_CONSTANTS.STEP,
    titleSmallText: [
        ''
    ],
    titleBigText: [
        ''
    ],
    choiceBigText: [
        '4+'
    ],
    choiceSmallText: [
        'Они точно не нужны все.',
        'Сделать 3 главных + прочее.'
    ],
    choices: [
        numbers_comparison_amount_4_plus_bar_d,
        numbers_comparison_amount_4_plus_too_much_s
    ]
});

// ----------------------------------------------

var numbers_comparison_amount_2_3_histogram_d = jQuery.extend({}, IW_Page, {
    alias: 'numbers_comparison_amount_2_3_histogram_d',
    type: IW_CONSTANTS.DIAGRAM,
    choiceBigText: [
        '2-6'
    ],
    choiceSmallText: [
        ''
    ],
    imagesUrls: [
        'img/chart_illustrations/histogramm.png'
    ],
    titleSmallText: [
        ''
    ],
    titleBigText: [
        'гістограмма'
    ],
    suggestions: [
        IW_Suggestions.importantOnly,
        IW_Suggestions.mainElement,
        IW_Suggestions.contrast
    ]
});

// ----------------------------------------------

var numbers_comparison_amount_2_3_linear_d = jQuery.extend({}, IW_Page, {
    alias: 'numbers_comparison_amount_2_3_linear_d',
    type: IW_CONSTANTS.DIAGRAM,
    choiceBigText: [
        '6-20'
    ],
    choiceSmallText: [
        ''
    ],
    imagesUrls: [
        'img/chart_illustrations/linear.png'
    ],
    titleSmallText: [
        ''
    ],
    titleBigText: [
        'график'
    ],
    suggestions: [
        IW_Suggestions.importantOnly,
        IW_Suggestions.mainElement,
        IW_Suggestions.contrast
    ]
});

// ----------------------------------------------

var numbers_comparison_amount_2_3_too_much_d = jQuery.extend({}, IW_Page, {
    alias: 'numbers_comparison_amount_2_3_too_much_d',
    type: IW_CONSTANTS.STEP,
    choiceBigText: [
        '20+'
    ],
    choiceSmallText: [
        'Они точно не  нужны все.',
        'Укрупнить периоды чтобы их стало 2-20'
    ],
    titleSmallText: [
        ''
    ],
    titleBigText: [
        'график'
    ],
    isUserCanFollow: false
});

// ----------------------------------------------

var numbers_comparison_amount_2_3_s = jQuery.extend({}, IW_Page, {
    alias: 'numbers_comparison_amount_2_3_s',
    type: IW_CONSTANTS.STEP,
    titleSmallText: [
        '2..3'
    ],
    titleBigText: [
        'кількість значеннь?'
    ],
    choiceBigText: [
        '2-3'
    ],
    choiceSmallText: [
        ''
    ],
    choices: [
        numbers_comparison_amount_2_3_histogram_d,
        numbers_comparison_amount_2_3_linear_d,
        numbers_comparison_amount_2_3_too_much_d
    ]
});

// ----------------------------------------------

var numbers_comparison_amount_1_crater_d = jQuery.extend({}, IW_Page, {
    alias: 'numbers_comparison_amount_1_crater_d',
    type: IW_CONSTANTS.DIAGRAM,
    titleSmallText: [
        ''
    ],
    titleBigText: [
        'Воронка'
    ],
    choiceBigText: [
        'Уменьшение параметра от этапа к этапу'
    ],
    choiceSmallText: [
        ''
    ],
    imagesUrls: [
        'img/chart_illustrations/voronka.png'
    ],
    suggestions: [
        IW_Suggestions.importantOnly,
        IW_Suggestions.mainElement,
        IW_Suggestions.contrast
    ]
});

// ----------------------------------------------

var numbers_comparison_amount_1_comparison_bar_d = jQuery.extend({}, IW_Page, {
    alias: 'numbers_comparison_amount_1_comparison_bar_d',
    type: IW_CONSTANTS.DIAGRAM,
    titleSmallText: [
        ''
    ],
    titleBigText: [
        ''
    ],
    choiceBigText: [
        'Так'
    ],
    choiceSmallText: [
        ''
    ],
    imagesUrls: [
        'img/chart_illustrations/bar.png'
    ],
    suggestions: [
        IW_Suggestions.importantOnly,
        IW_Suggestions.mainElement,
        IW_Suggestions.contrast
    ]
});

// ----------------------------------------------

var numbers_comparison_amount_1_comparison_short_titles_histogram_d = jQuery.extend({}, IW_Page, {
    alias: 'numbers_comparison_amount_1_comparison_short_titles_histogram_d',
    type: IW_CONSTANTS.DIAGRAM,
    titleSmallText: [
        ''
    ],
    titleBigText: [
        'Гістограмма'
    ],
    choiceBigText: [
        '2-6'
    ],
    choiceSmallText: [
        ''
    ],
    imagesUrls: [
        'img/chart_illustrations/histogramm.png'
    ],
    suggestions: [
        IW_Suggestions.importantOnly,
        IW_Suggestions.mainElement,
        IW_Suggestions.contrast
    ]
});

// ----------------------------------------------

var numbers_comparison_amount_1_comparison_short_titles_linear_d = jQuery.extend({}, IW_Page, {
    alias: 'numbers_comparison_amount_1_comparison_short_titles_linear_d',
    type: IW_CONSTANTS.DIAGRAM,
    titleSmallText: [
        ''
    ],
    titleBigText: [
        'График'
    ],
    choiceBigText: [
        '6-20'
    ],
    choiceSmallText: [
        ''
    ],
    imagesUrls: [
        'img/chart_illustrations/linear.png'
    ],
    suggestions: [
        IW_Suggestions.importantOnly,
        IW_Suggestions.mainElement,
        IW_Suggestions.contrast
    ]
});

// ----------------------------------------------

var numbers_comparison_amount_1_comparison_short_titles_20_plus_d = jQuery.extend({}, IW_Page, {
    alias: 'numbers_comparison_amount_1_comparison_short_titles_20_plus_d',
    type: IW_CONSTANTS.DIAGRAM,
    titleSmallText: [
        ''
    ],
    titleBigText: [
        ''
    ],
    choiceBigText: [
        '20+'
    ],
    choiceSmallText: [
        'Они точно не  нужны все.',
        'Укрупнить периоды чтобы их стало 2-20'
    ],
    isUserCanFollow: false
});

// ----------------------------------------------

var numbers_comparison_amount_1_comparison_short_titles_s = jQuery.extend({}, IW_Page, {
    alias: 'numbers_comparison_amount_1_comparison_short_titles_s',
    type: IW_CONSTANTS.STEP,
    titleSmallText: [
        ''
    ],
    titleBigText: [
        'кількість значеннь?'
    ],
    choiceBigText: [
        'Ні'
    ],
    choiceSmallText: [
        ''
    ],
    choices: [
        numbers_comparison_amount_1_comparison_short_titles_histogram_d,
        numbers_comparison_amount_1_comparison_short_titles_linear_d,
        numbers_comparison_amount_1_comparison_short_titles_20_plus_d
    ]
});

// ----------------------------------------------

var numbers_comparison_amount_1_comparison_s = jQuery.extend({}, IW_Page, {
    alias: 'numbers_comparison_amount_1_comparison_s',
    type: IW_CONSTANTS.STEP,
    titleSmallText: [
        ''
    ],
    titleBigText: [
        'Длинные подписи у колонок?'
    ],
    choiceBigText: [
        'разницу в значениях'
    ],
    choiceSmallText: [
        ''
    ],
    choices: [
        numbers_comparison_amount_1_comparison_bar_d,
        numbers_comparison_amount_1_comparison_short_titles_s
    ]
});

// ----------------------------------------------

var numbers_comparison_amount_1_s = jQuery.extend({}, IW_Page, {
    alias: 'numbers_comparison_amount_1_s',
    type: IW_CONSTANTS.STEP,
    titleSmallText: [
        '1'
    ],
    titleBigText: [
        'надо подчеркнуть...'
    ],
    choiceBigText: [
        '1'
    ],
    choiceSmallText: [
        ''
    ],
    choices: [
        numbers_comparison_amount_1_comparison_s,
        numbers_comparison_amount_1_crater_d
    ]
});

// ----------------------------------------------

var numbers_comparison_s = jQuery.extend({}, IW_Page, {
    alias: 'numbers_comparison_s',
    type: IW_CONSTANTS.STEP,
    titleSmallText: [
        ''
    ],
    titleBigText: [
        'Количество сравниваемых объектов?'
    ],
    choiceBigText: [
        'Сравнить между собой'
    ],
    choiceSmallText: [
        ''
    ],
    choices: [
        numbers_comparison_amount_1_s,
        numbers_comparison_amount_2_3_s,
        numbers_comparison_amount_4_plus_s
    ]
});

// ----------------------------------------------

var numbers_parts_pie_with_precision_d = jQuery.extend({}, IW_Page, {
    alias: 'numbers_parts_pie_with_precision_d',
    type: IW_CONSTANTS.DIAGRAM,
    choiceBigText: [
        'Вхождение частей в целое,',
        'с детализацией одного сектора'
    ],
    choiceSmallText: [
        ''
    ],
    imagesUrls: [
        ''
    ],
    titleSmallText: [
        ''
    ],
    titleBigText: [
        ''
    ],
    suggestions: [
        IW_Suggestions.importantOnly
    ]
});

// ----------------------------------------------

var numbers_parts_pie_d = jQuery.extend({}, IW_Page, {
    alias: 'numbers_parts_pie_d',
    type: IW_CONSTANTS.DIAGRAM,
    choiceBigText: [
        'Просто вхождение частей в целое'
    ],
    choiceSmallText: [
        ''
    ],
    imagesUrls: [
        'img/chart_illustrations/pie.png'
    ],
    titleSmallText: [
        ''
    ],
    titleBigText: [
        ''
    ],
    suggestions: [
        IW_Suggestions.importantOnly,
        IW_Suggestions.mainElement,
        IW_Suggestions.contrast
    ]
});

// ----------------------------------------------

var numbers_parts_percents_d = jQuery.extend({}, IW_Page, {
    alias: 'numbers_parts_percents_d',
    type: IW_CONSTANTS.DIAGRAM,
    choiceBigText: [
        '% соотношение меняется во времени'
    ],
    choiceSmallText: [
        ''
    ],
    imagesUrls: [
        'img/chart_illustrations/summarizing-histogramm.png'
    ],
    titleSmallText: [
        ''
    ],
    titleBigText: [
        ''
    ],
    suggestions: [
        IW_Suggestions.importantOnly,
        IW_Suggestions.mainElement,
        IW_Suggestions.contrast
    ]
});

// ----------------------------------------------

var numbers_parts_s = jQuery.extend({}, IW_Page, {
    alias: 'numbers_parts_s',
    type: IW_CONSTANTS.STEP,
    titleSmallText: [
        ''
    ],
    titleBigText: [
        'Надо показать что ...'
    ],
    choiceBigText: [
        'Показать вхождение',
        'частей в целое'
    ],
    choiceSmallText: [
        ''
    ],
    choices: [
        numbers_parts_percents_d,
        numbers_parts_pie_d,
        numbers_parts_pie_with_precision_d
    ]
});

// ----------------------------------------------

var numbers_changes_in_time_timing_d = jQuery.extend({}, IW_Page, {
    alias: 'numbers_changes_in_time_timing_d',
    type: IW_CONSTANTS.DIAGRAM,
    titleSmallText: [
        ''
    ],
    titleBigText: [
        'Таймінг'
    ],
    choiceBigText: [
        'подчеркнуть соотношения',
        'времени затрачиваемое',
        'на каждый этап'
    ],
    choiceSmallText: [
        ''
    ],
    imagesUrls: [
        'img/chart_illustrations/timeing.png'
    ],
    suggestions: [
        IW_Suggestions.importantOnly,
        IW_Suggestions.mainElement,
        IW_Suggestions.contrast
    ]
});

// ----------------------------------------------

var numbers_changes_in_time_crater_d = jQuery.extend({}, IW_Page, {
    alias: 'numbers_changes_in_time_crater_d',
    type: IW_CONSTANTS.DIAGRAM,
    titleSmallText: [
        ''
    ],
    titleBigText: [
        'Воронка'
    ],
    choiceBigText: [
        'подчеркнуть что параметр',
        'уменьшается/растёт',
        'от этапа к этапу'
    ],
    choiceSmallText: [
        ''
    ],
    imagesUrls: [
        'img/chart_illustrations/voronka.png'
    ],
    suggestions: [
        IW_Suggestions.importantOnly,
        IW_Suggestions.mainElement,
        IW_Suggestions.contrast
    ]
});

// ----------------------------------------------

var numbers_changes_in_time_parameters_amount_1_linear_d = jQuery.extend({}, IW_Page, {
    alias: 'numbers_changes_in_time_parameters_amount_1_linear_d',
    type: IW_CONSTANTS.DIAGRAM,
    titleSmallText: [
        ''
    ],
    titleBigText: [
        'Графік'
    ],
    choiceBigText: [
        'Нет'
    ],
    choiceSmallText: [
        ''
    ],
    imagesUrls: [
        'img/chart_illustrations/linear.png'
    ],
    suggestions: []
});

// ----------------------------------------------

var numbers_changes_in_time_parameters_amount_1_bar_d = jQuery.extend({}, IW_Page, {
    alias: 'numbers_changes_in_time_parameters_amount_1_bar_d',
    type: IW_CONSTANTS.DIAGRAM,
    titleSmallText: [
        ''
    ],
    titleBigText: [
        'Вертикальна гістограмма'
    ],
    choiceBigText: [
        'Да'
    ],
    choiceSmallText: [
        ''
    ],
    imagesUrls: [
        'img/chart_illustrations/bar.png'
    ],
    suggestions: []
});

// ----------------------------------------------

var numbers_changes_in_time_parameters_amount_1_s = jQuery.extend({}, IW_Page, {
    alias: 'numbers_changes_in_time_parameters_amount_1_s',
    type: IW_CONSTANTS.STEP,
    titleSmallText: [
        ''
    ],
    titleBigText: [
        'У колонок длинные подписи?'
    ],
    choiceBigText: [
        '1'
    ],
    choiceSmallText: [
        ''
    ],
    choices: [
        numbers_changes_in_time_parameters_amount_1_bar_d,
        numbers_changes_in_time_parameters_amount_1_linear_d
    ]
});

// ----------------------------------------------

var numbers_changes_in_time_parameters_amount_2_3_histogram_d = jQuery.extend({}, IW_Page, {
    alias: 'numbers_changes_in_time_parameters_amount_2_3_histogram_d',
    type: IW_CONSTANTS.DIAGRAM,
    titleSmallText: [
        ''
    ],
    titleBigText: [
        'Гістограмма'
    ],
    choiceBigText: [
        '2-6'
    ],
    choiceSmallText: [
        ''
    ],
    imagesUrls: [
        'img/chart_illustrations/histogramm.png'
    ]
});

// ----------------------------------------------

var numbers_changes_in_time_parameters_amount_2_3_graphic_d = jQuery.extend({}, IW_Page, {
    alias: 'numbers_changes_in_time_parameters_amount_2_3_graphic_d',
    type: IW_CONSTANTS.DIAGRAM,
    titleSmallText: [
        ''
    ],
    titleBigText: [
        'График'
    ],
    choiceBigText: [
        '6+'
    ],
    choiceSmallText: [
        ''
    ],
    imagesUrls: [
        'img/chart_illustrations/linear.png'
    ]
});

// ----------------------------------------------

var numbers_changes_in_time_parameters_amount_2_3_s = jQuery.extend({}, IW_Page, {
    alias: 'numbers_changes_in_time_parameters_amount_2_3_s',
    type: IW_CONSTANTS.STEP,
    titleSmallText: [
        ''
    ],
    titleBigText: [
        'кількість значеннь?'
    ],
    choiceBigText: [
        '2-3'
    ],
    choiceSmallText: [
        ''
    ],
    choices: [
        numbers_changes_in_time_parameters_amount_2_3_histogram_d,
        numbers_changes_in_time_parameters_amount_2_3_graphic_d
    ]
});

// ----------------------------------------------

var numbers_changes_in_time_parameters_amount_4_plus_s = jQuery.extend({}, IW_Page, {
    alias: 'numbers_changes_in_time_parameters_amount_4_plus_s',
    type: IW_CONSTANTS.STEP,
    titleSmallText: [
        ''
    ],
    titleBigText: [
        ''
    ],
    choiceBigText: [
        '4 і більше'
    ],
    choiceSmallText: [
        'Відкиньте зайве.',
        'Глядачам буде важко щось розгледіти у мішаніні ліній.',
        'Напевне головною є одна лінія. Вона порівнюється з іншими.',
        'З множини інших значень можні вибрати 1-2 най важливіших.',
        'Якщо "інші" значення мають схожі графіки можна замінини їх одним - усередненим.'
    ],
    isUserCanFollow: false
});

// ----------------------------------------------

var numbers_changes_in_time_parameters_amount_s = jQuery.extend({}, IW_Page, {
    alias: 'numbers_changes_in_time_parameters_amount_s',
    type: IW_CONSTANTS.STEP,
    titleSmallText: [
        ''
    ],
    titleBigText: [
        'количество параметров (компаний) для сравнения?'
    ],
    choiceBigText: [
        'показать направление изменения параметра (-ов),',
        'вверх/вних/кривая'
    ],
    choiceSmallText: [
        ''
    ],
    choices: [
        numbers_changes_in_time_parameters_amount_1_s,
        numbers_changes_in_time_parameters_amount_2_3_s,
        numbers_changes_in_time_parameters_amount_4_plus_s
    ]
});

// ----------------------------------------------

var numbers_changes_in_time_s = jQuery.extend({}, IW_Page, {
    alias: 'numbers_changes_in_time_s',
    type: IW_CONSTANTS.STEP,
    titleSmallText: [
        ''
    ],
    titleBigText: [
        'Надо...'
    ],
    choiceBigText: [
        'Показать изменения',
        'во времени',
        'или от этапа к этапу'
    ],
    choiceSmallText: [
        ''
    ],
    choices: [
        numbers_changes_in_time_crater_d,
        numbers_changes_in_time_timing_d,
        numbers_changes_in_time_parameters_amount_s
    ]
});

// ----------------------------------------------

var numbers_s = jQuery.extend({}, IW_Page, {
    alias: 'numbers_s',
    type: IW_CONSTANTS.STEP,
    titleSmallText: [
        'Главная идея?'
    ],
    titleBigText: [
        ''
    ],
    choiceBigText: [
        'Цифри'
    ],
    choiceSmallText: [
        'Тексти є просто підписами колонок.',
        /*'Ви хочете показати порівнняння двох або декількох величин, співвіднощення між частинами цілого.'*/
    ],
    choiceMinHeaderHeight: 150,
    choices: [
        numbers_changes_in_time_s,
        numbers_parts_s,
        numbers_comparison_s
    ]
});
