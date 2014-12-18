IW_Page = {
    type: null,

    alias: null,

    titleSmallText: [],

    titleBigText: [],

    choiceBigText: [],

    choiceSmallText: [],

    choiceMinHeight: 210,

    choiceMinHeaderHeight: 60,

    choiceMinHeightForImages: 80,

    diagramUrl: null,

    imagesUrls: null,

    choices: [],

    parentAlias: null,

    isUserCanFollow: true,

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
            'Це єдиний спосіб зберегти співвідношення елементів і підписати їх рівноовеликими підписами.',
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

    // ----------------------------------------------

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
            'img/chart_illustrations/pie_detailed.png'
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
            'Ви хочете показати порівнняння двох або декількох величин, співвіднощення між частинами цілого.'
        ],
        choiceMinHeaderHeight: 150,
        choices: [
            numbers_changes_in_time_s,
            numbers_parts_s,
            numbers_comparison_s
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
        'texts_reason_result_timing_d': texts_reason_result_timing_d,
        'numbers_changes_in_time_s': numbers_changes_in_time_s,
        'numbers_parts_s': numbers_parts_s,
        'numbers_comparison_s': numbers_comparison_s,
        'numbers_changes_in_time_crater_d': numbers_changes_in_time_crater_d,
        'numbers_changes_in_time_timing_d': numbers_changes_in_time_timing_d,
        'numbers_changes_in_time_parameters_amount_s': numbers_changes_in_time_parameters_amount_s,
        'numbers_changes_in_time_parameters_amount_4_plus_s': numbers_changes_in_time_parameters_amount_4_plus_s,
        'numbers_changes_in_time_parameters_amount_1_s': numbers_changes_in_time_parameters_amount_1_s,
        'numbers_changes_in_time_parameters_amount_2_3_s': numbers_changes_in_time_parameters_amount_2_3_s,
        'numbers_changes_in_time_parameters_amount_1_linear_d': numbers_changes_in_time_parameters_amount_1_linear_d,
        'numbers_changes_in_time_parameters_amount_1_bar_d': numbers_changes_in_time_parameters_amount_1_bar_d,
        'numbers_changes_in_time_parameters_amount_2_3_histogram_d': numbers_changes_in_time_parameters_amount_2_3_histogram_d,
        'numbers_changes_in_time_parameters_amount_2_3_graphic_d': numbers_changes_in_time_parameters_amount_2_3_graphic_d,
        'numbers_parts_percents_d': numbers_parts_percents_d,
        'numbers_parts_pie_d': numbers_parts_pie_d,
        'numbers_parts_pie_with_precision_d': numbers_parts_pie_with_precision_d,
        'numbers_comparison_amount_1_s': numbers_comparison_amount_1_s,
        'numbers_comparison_amount_2_3_s': numbers_comparison_amount_2_3_s,
        'numbers_comparison_amount_4_plus_s': numbers_comparison_amount_4_plus_s,
        'numbers_comparison_amount_1_comparison_s': numbers_comparison_amount_1_comparison_s,
        'numbers_comparison_amount_1_crater_d': numbers_comparison_amount_1_crater_d,
        'numbers_comparison_amount_1_comparison_bar_d': numbers_comparison_amount_1_comparison_bar_d,
        'numbers_comparison_amount_1_comparison_short_titles_s': numbers_comparison_amount_1_comparison_short_titles_s,
        'numbers_comparison_amount_1_comparison_short_titles_histogram_d': numbers_comparison_amount_1_comparison_short_titles_histogram_d,
        'numbers_comparison_amount_1_comparison_short_titles_linear_d': numbers_comparison_amount_1_comparison_short_titles_linear_d,
        'numbers_comparison_amount_1_comparison_short_titles_20_plus_d': numbers_comparison_amount_1_comparison_short_titles_20_plus_d,
        'numbers_comparison_amount_2_3_histogram_d': numbers_comparison_amount_2_3_histogram_d,
        'numbers_comparison_amount_2_3_linear_d': numbers_comparison_amount_2_3_linear_d,
        'numbers_comparison_amount_2_3_too_much_d': numbers_comparison_amount_2_3_too_much_d,
        'numbers_comparison_amount_4_plus_bar_d': numbers_comparison_amount_4_plus_bar_d,
        'numbers_comparison_amount_4_plus_too_much_s': numbers_comparison_amount_4_plus_too_much_s
    };
})();
