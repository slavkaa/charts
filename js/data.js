IW_Page = {
    type: null,

    alias: null,

    titleSmallText: [],

    titleBigText: [],

    choiceBigText: [],

    choiceSmallText: [],

    choiceMinHeight: 210,

    choiceMinHeightForImages: 80,

    diagramUrl: null,

    imagesUrls: null,

    choices: [],

    fatherAlias: null,

    suggestions: [],

    /**
     * @returns {Array} of String
     */
    getImagesUrls: function() {

        if (null == this.imagesUrls) {
            this.imagesUrls = [];

            if (0 == this.choices.length) {
                this.imagesUrls = [];
            } else {
                for (var i in this.choices) {
                    var images = this.choices[i].getImagesUrls();
                    if (null != images && 0 < images.length) {
                        for (j in images) {
                            this.imagesUrls.push(images[j]);
                        }
                    }
                }
            }
        }

        return this.unique(this.imagesUrls);
    },

    /**
     * @param alias String
     * @param level Number, default 0
     * @returns null|Number
     */
    getStepNumber: function(alias, level)
    {
        level = level + 1;
        if (alias == this.alias) {
            return level
        } else {
            for (i in this.choices) {
                var deepLevel = this.choices[i].getStepNumber(alias, level);
                if (null != deepLevel) {
                    return deepLevel;
                }
            }
        }

        return null;
    },

    /**
     * @returns {number} in pixels
     */
    getChildrenMinHeight: function()
    {
        var minHeight = 100;
        for (i in this.choices) {
            if (minHeight < this.choices[i].choiceMinHeight) {
                minHeight = this.choices[i].choiceMinHeight;
            }
        }

        return minHeight;
    },

    unique: function (array) {
        var r = [];
        o:for(var i = 0, n = array.length; i < n; i++)
        {
            for(var x = 0, y = r.length; x < y; x++)
            {
                if(r[x] == array[i])
                {
                    // alert('this is a DUPE!');
                    continue o;
                }
            }
            r[r.length] = array[i];
        }

        return r;
    }
};

(function() {
    IW_CONSTANTS = {
        HOME: 'home',

        STEP: 'step',

        DIAGRAM: 'diagram'
    };

    // ----------------------------------------------

    var IW_Suggestions = [];
    IW_Suggestions['important_only'] = {
        label: [
            'Залиште тільки важливе'
        ],
        text: [
            'Зробіть діаграмму.',
            'Потім подивіться на неї - може є зайва інформація?',
            'Якісь елементи які є на схемі але про які ви не збираєьась говорити.',
            'зайва інформація має декалька недоліків:',
            '- вона займають місце',
            '- ви витрачаєте час на те щоб знайти,назвати, розмістити її,',
            '- вона обьв’язково викличє питання уважного слухача (людина буде певна що допомагає вам, бо ви нічого не сказали який елемент - забули?)'
        ]
    };
    IW_Suggestions['main_element'] = {
        label: [
            'Виділіть головний елемент'
        ],
        text: [
            'Можливо у вас є один головний елемент, про який ві будете розповідати. Все інше - фон.',
            'Виділіть цей елемент кольором. Це з оріентує гладачів, вони не будуть відволікатися на другоряді елементи.'
        ]
    };
    IW_Suggestions['contrast'] = {
        label: [
            'Зробіть конрасний (відносно літер) фон'
        ],
        text: [
            'Впевніться що пишете темними літерами по світлому тлу, чи світлими по темному.',
            'Не використовуйте фоновій градієнт - якісь літери обов’язково буде не зручно читати.'
        ]
    };
    IW_Suggestions['padding'] = {
        label: [
            'Зробіть відстань від рамки до текстів '
        ],
        text: [
            'Відстань від рамки до тексту має бути більше вісоти заголовної літери (наприклад "М").',
            'Не ліпіть текст до рамки, читачам буде важко розгледіти літери - лінія нижньої рамки буде сприйматися як частина літери.',
            'Наприклад якшо нижній рядок ліпиться но нижньї рамки, то "П" і "О" бідуть схожі, а також "М-Ш-Щ", "В-Р-Е" т.п.'
        ]
    };

    // ----------------------------------------------

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
            IW_Suggestions['important_only']
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
            'Структура.'
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
            IW_Suggestions['important_only']
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
            IW_Suggestions['important_only'],
            IW_Suggestions['padding'],
            IW_Suggestions['contrast']
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
            IW_Suggestions['important_only'],
            IW_Suggestions['padding'],
            IW_Suggestions['contrast']
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
            ''
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
            IW_Suggestions['important_only']
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
            ''
        ],
        imagesUrls: [
            'img/chart_illustrations/summarizing-histogramm.png'
        ],
        titleSmallText: [
            '"Елементи мають (лінійно) слідувати один за одним, важливо показати підпорядкованість. Також ви хочете наочно показати відсодкове співвідношення шарів."'
        ],
        titleBigText: [
            'Стовпчата діаграмма з накопиченням'
        ],
        suggestions: [
            IW_Suggestions['important_only']
        ]
    });

    // ----------------------------------------------

    var texts_structure_hierarchy_simple_s = jQuery.extend({}, IW_Page, {
        alias: 'texts_structure_hierarchy_simple_s',
        type: IW_CONSTANTS.STEP,
        titleSmallText: [
            '"Ви маєте текстові данні і хочете підкреслити відносини підпорядкування між елементами."'
        ],
        titleBigText: [
            'Вам потрібно показати співвідношення між різними шарами діаграмми?'
        ],
        choiceBigText: [
            'Так, проста.'
        ],
        choiceSmallText: [
            'Лінійна.',
            'Піраміда.'
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
            IW_Suggestions['important_only'],
            IW_Suggestions['main_element'],
            IW_Suggestions['contrast'],
            IW_Suggestions['padding']
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
            IW_Suggestions['important_only'],
            IW_Suggestions['main_element'],
            IW_Suggestions['contrast'],
            IW_Suggestions['padding']
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
            IW_Suggestions['important_only'],
            IW_Suggestions['main_element'],
            IW_Suggestions['contrast']
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
            IW_Suggestions['important_only'],
            IW_Suggestions['main_element'],
            IW_Suggestions['contrast']
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

    // ----------------------------------------------

    var numbers_s = jQuery.extend({}, IW_Page, {
        alias: 'numbers_s',
        type: IW_CONSTANTS.STEP,
        titleBigText: [
            ''
        ],
        choiceBigText: [
            'Цифри'
        ],
        choiceSmallText: [
            'Тексти є просто підписами колонок.',
            'Ви хочете показати порівнняння двох або декількох величин, співвіднощення між частинами цілого.'
        ]
    });

    // ----------------------------------------------

    var home = jQuery.extend({}, IW_Page, {
        alias: 'home',
        type: IW_CONSTANTS.HOME,
        titleBigText: [
            'Помічник вибору діаграмм:',
            'Що переважає у вашій діаграммі? '
        ],
        choices: [
            numbers_s,
            texts_s
        ]
    });

    // ===============================================

    IW_Pages = {
        'home': home,

        'numbers_s': numbers_s,

        'texts_s': texts_s,
        'texts_list_d': texts_list_d,
        'texts_structure_s': texts_structure_s,
        'texts_reason_result_s': texts_reason_result_s,
        'texts_structure_chain_s': texts_structure_chain_s,
        'texts_structure_hierarchy_s': texts_structure_hierarchy_s,
        'texts_structure_parts_s': texts_structure_parts_s,
        'texts_structure_chain_long_d': texts_structure_chain_long_d,
        'texts_structure_chain_wide_d': texts_structure_chain_wide_d,
        'texts_structure_hierarchy_simple_s': texts_structure_hierarchy_simple_s,
        'texts_structure_hierarchy_complex_d': texts_structure_hierarchy_complex_d,
        'texts_structure_hierarchy_simple_box_d': texts_structure_hierarchy_simple_box_d,
        'texts_structure_hierarchy_simple_pyramid_d': texts_structure_hierarchy_simple_pyramid_d,
        'texts_structure_parts_puzzle_d': texts_structure_parts_puzzle_d,
        'texts_structure_parts_circle_d': texts_structure_parts_circle_d,
        'texts_reason_result_crater_d': texts_reason_result_crater_d,
        'texts_reason_result_timing_d': texts_reason_result_timing_d
    };
})();