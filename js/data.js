IW_Page = {
    type: null,

    alias: null,

    titleSmallText: [],

    titleBigText: [],

    choiceBigText: [],

    choiceSmallText: [],

    choiceMinHeight: 0,

    diagramUrl: null,

    imagesUrls: null,

    choices: [],

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
                for (i in this.choices) {
                    var images = this.choices[i].getImagesUrls();
                    if (null != images && 0 < images.length) {
                        for (j in images) {
                            this.imagesUrls.push(images[j]);
                        }
                    }
                }
            }
        }

        return this.imagesUrls;
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
    }
};

(function() {
    IW_CONSTANTS = {
        HOME: 'home',

        STEP: 'step',

        DIAGRAM: 'diagram'
    };

    // ----------------------------------------------

    var text_list = jQuery.extend({}, IW_Page);
    text_list.alias = 'text_list';
    text_list.type = IW_CONSTANTS.DIAGRAM;
    text_list.choiceBigText = ['Перелік'];
    text_list.choiceSmallText = [
        'Вам просто потрібно показати що дані елементи існують.',
        'Немає ніяких акцентів, ні послідовності, ні структури.'
    ];
    text_list.imagesUrls = [
        'img/chart_illustrations/list.png'
    ];
    text_list.titleSmallText = [
        '"Ви маєте текстові данні, що є простим переліком."'
    ];
    text_list.titleBigText = [
        'Перелік'
    ];

    text_list.suggestions = [
         {
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
         }
    ];

    // ----------------------------------------------

    var texts = jQuery.extend({}, IW_Page);
    texts.alias = 'texts';
    texts.type = IW_CONSTANTS.STEP;
    texts.titleSmallText = [
        '"Ви маєте текстові данні."'
    ];texts.titleBigText = [
        'Що ви хочете показати графіком?'
    ];
    texts.choiceBigText = ['Тексти'];
    texts.choiceSmallText = [
        'Цифр немає взагалі.',
        'Ви хочете показати порівнняння двох або декількох величин, співвіднощення між частинами цілого.'
    ];
    texts.choices = [text_list];

    // ----------------------------------------------

    var numbers = jQuery.extend({}, IW_Page);
    numbers.alias = 'numbers';
    numbers.type = IW_CONSTANTS.STEP;
    numbers.titleBigText = [
        ''
    ];
    numbers.choiceBigText = ['Цифри'];
    numbers.choiceSmallText = [
        'Тексти є просто підписами колонок.',
        'Ви хочете показати порівнняння двох або декількох величин, співвіднощення між частинами цілого.'
    ];

    // ----------------------------------------------

    var home = jQuery.extend({}, IW_Page);
    home.alias = 'home';
    home.type = IW_CONSTANTS.HOME;
    home.titleBigText = [
        'Помічник вибору діаграмм:',
        'Що переважає у вашій діаграммі? '
    ];
    home.choices = [numbers, texts];

    // ===============================================

    IW_Pages = {
        'home': home,
        'numbers': numbers,
        'texts': texts,
        'text_list': text_list
    };
})();