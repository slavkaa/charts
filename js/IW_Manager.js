
//location.hash = "noBack";
$(window).on('hashchange', function() {
//    location.hash = "noBack";
    var hash = location.hash.replace('#', '');
    if (hash != IW_Manager.currentPageAlias) {
        // is location.hash valid page alias
        if (IW_Pages.hasOwnProperty(hash)) {
            IW_Manager.currentPageAlias = hash;
        }
    }

    IW_Manager.currentStep = IW_Pages['home'].getStepNumber(hash, 0);

    IW_Manager.renderCurrentPage();
    IW_Manager.updateProgressSteps();
});

IW_Manager = {

    currentStep: 1,

    currentPageAlias: 'home',

    updateProgressSteps: function()
    {
        $('.locator-progress-steps span.label-info')
            .removeClass('label-info')
            .addClass('label-default');

        $('.locator-progress-steps span').eq(this.currentStep - 1).addClass('label-info');

        $('.action-go-to')
            .unbind()
            .click(function() {
                if ('undefined' != typeof $(this).attr('data-page-name')) {
                    IW_Manager.currentStep = $(this).attr('data-id');
                    IW_Manager.currentPageAlias = $(this).attr('data-page-name');

                    location.hash = IW_Manager.currentPageAlias;
//                    IW_Manager.updateProgressSteps();
//                    IW_Manager.renderCurrentPage();
                }
            });

        $('.locator-progress-step-number').each(function(i, el) {
            if ('undefined' != typeof $(el).attr('data-page-name')) {
                $(el).addClass('interactive');
            } else {
                $(el).removeClass('interactive');
            }
        })
    },

    renderCurrentPage: function()
    {
        var page = IW_Pages[this.currentPageAlias];

        $('.locator-hide-for-' + page.type).hide();
        $('.locator-show-for-' + page.type).show();

        // render title block {
        // top text {
        var newHtml = '';
        for (var i in page.titleSmallText) {
            newHtml += page.titleSmallText[i];
            if (i != page.titleSmallText.length - 1) {
                newHtml += '<br/>';
            }
        }
        if ('' == newHtml) {
            $('.locator-title h4').hide();
        } else {
            $('.locator-title h4').html(newHtml).show();
        }
        // top text }

        // bottom text {
        newHtml = '';
        for (i in page.titleBigText) {
            newHtml += page.titleBigText[i];
            if (i != page.titleBigText.length - 1) {
                newHtml += '<br/>';
            }
        }
        if ('' == newHtml) {
            $('.locator-title h2').hide();
        } else {
            $('.locator-title h2').html(newHtml).show();
        }
        // bottom text }

        // image {
        newHtml = '';
        var images = page.getImagesUrls();
        $('.locator-title img').remove();

        if (page.type == IW_CONSTANTS.DIAGRAM && null != images && 0 < images.length) {
            for (i in images) {
                newHtml += '<br/><img src="' + images[i] + '" class="full-diagram"/>';
            }
            if ('' != newHtml) {
                $('.locator-title h2').after(newHtml);
            }
        }
        // image }
        // render title block }

        // render choices {
        // width {
         if (0 == page.choices.length) {
            $('.locator-choice-box').hide();
        } else if (1 == page.choices.length) {
            $('.locator-choice-box')
                .removeClass('col-md-6')
                .removeClass('col-md-4')
                .removeClass('col-md-3')
                .addClass('col-md-6');
            $('.locator-choice-box:eq(0)').show();
            $('.locator-choice-box:eq(1)').hide();
            $('.locator-choice-box:eq(2)').hide();
            $('.locator-choice-box:eq(3)').hide();
        } else if (2 == page.choices.length) {
            $('.locator-choice-box')
                .removeClass('col-md-6')
                .removeClass('col-md-4')
                .removeClass('col-md-3')
                .addClass('col-md-6');
            $('.locator-choice-box:eq(0)').show();
            $('.locator-choice-box:eq(1)').show();
            $('.locator-choice-box:eq(2)').hide();
            $('.locator-choice-box:eq(3)').hide();
        } else if (3 == page.choices.length) {
            $('.locator-choice-box')
                .removeClass('col-md-6')
                .removeClass('col-md-4')
                .removeClass('col-md-3')
                .addClass('col-md-4');
            $('.locator-choice-box:eq(0)').show();
            $('.locator-choice-box:eq(1)').show();
            $('.locator-choice-box:eq(2)').show();
            $('.locator-choice-box:eq(3)').hide();
        } else if (4 == page.choices.length) {
            $('.locator-choice-box')
                .removeClass('col-md-6')
                .removeClass('col-md-4')
                .removeClass('col-md-3')
                .addClass('col-md-3')
                .show();
        } else {
            $('.locator-choice-box')
                .hide();
        }
        // width }

        // min-height {
        $('.locator-choice-box .panel-body').css('min-height', page.choiceMinHeight + 'px');
        // min-height }

        // choices top text {
        for (var j in page.choices) {
            choice = page.choices[j];
            newHtml = '';
            for (i in choice.choiceBigText) {
                newHtml += choice.choiceBigText[i];
                if (i != choice.choiceBigText.length - 1) {
                    newHtml += '<br/>';
                }
            }
            $('.locator-choice-box .panel-heading h2').eq(j).html('');
            if ('' == newHtml) {
                $('.locator-choice-box .panel-heading h2').eq(j).hide();
            } else {
                $('.locator-choice-box .panel-heading h2').eq(j).html(newHtml).show();
            }
        }
        // choices top text }

        // choices bottom text {
        for (j in page.choices) {
            choice = page.choices[j];
            newHtml = '';
            for (i in choice.choiceSmallText) {
                newHtml += choice.choiceSmallText[i];
                if (i != choice.choiceSmallText.length - 1) {
                    newHtml += '<br/>';
                }
            }
            if ('' == newHtml) {
                $('.locator-choice-box .locator-choice-small-text').eq(j).hide();
            } else {
                $('.locator-choice-box .locator-choice-small-text').eq(j).html(newHtml).show();
            }
        }
        // choices bottom text }

        // render diagrams {
        for (j in page.choices) {
            choice = page.choices[j];
            newHtml = '<br/>';
            var images = choice.getImagesUrls();
            if (null != images) {
                for (i in images) {
                    newHtml += '<img src="' + images[i] + '" class="small-diagram"/>';
                }

                if ('' == newHtml) {
                    $('.locator-choice-box .locator-choice-images').eq(j).hide();
                } else {
                    $('.locator-choice-box .locator-choice-images').eq(j).html(newHtml).show();
                }
            }
        }
        // render diagrams }

        // render suggestions {
        $('.locator-suggestions-box table tr').hide();
        for (j in page.suggestions) {
            suggestion = page.suggestions[j];

            newHtmlLabel = '';
            var label = suggestion.label;
            if (null != label) {
                for (i in label) {
                    newHtmlLabel += label[i];
                    if (i != label.length - 1) {
                        newHtmlLabel += '<br/>';
                    }
                }
            }

            newHtmlText = '';
            var text = suggestion.text;
            if (null != text) {
                for (i in text) {
                    newHtmlText += text[i];
                    if (i != text.length - 1) {
                        newHtmlText += '<br/>';
                    }
                }
            }

            if ('' != newHtml) {
                $('.locator-suggestions-box table tr:eq(' + j + ') td.locator-suggestion-label')
                    .html(newHtmlLabel);
                $('.locator-suggestions-box table tr:eq(' + j + ') td.locator-suggestion-text')
                    .html(newHtmlText);
                $('.locator-suggestions-box table tr').eq(j).show();
            }
        }
        // render suggestions }

        // init next button {
        $('.action-next').attr('data-page-name', '');
        for (j in page.choices) {
            $('.action-next').eq(j).attr('data-page-name', page.choices[j].alias);
        }
        // init next button }
        // render choices }

        $('.action-next')
            .unbind()
            .click(function() {
            $('.locator-progress-step-number').eq(IW_Manager.currentStep - 1).attr('data-page-name', IW_Manager.currentPageAlias);

            IW_Manager.currentStep = IW_Manager.currentStep + 1;
            IW_Manager.currentPageAlias = $(this).attr('data-page-name');

//            IW_Manager.renderCurrentPage();
//            IW_Manager.updateProgressSteps();
            location.hash = IW_Manager.currentPageAlias;
        });


    },

    /**
     * @param fatherAlias String
     */
    buildTree: function(fatherAlias)
    {
        var page = IW_Pages[fatherAlias];

        if (0 < page.choices.length)
        for (var i in page.choices) {
            page.choices[i].fatherAlias = fatherAlias;
            this.buildTree(page.choices[i].alias);
        }
    }
};

$(document).ready(function()
{
    IW_Manager.buildTree('home');

    var hash = location.hash.replace('#', '');
    if ('' == hash) {
        hash = 'home';
    }
    if (hash != IW_Manager.currentPageAlias) {
        // is location.hash valid page alias
        if (IW_Pages.hasOwnProperty(hash)) {
            IW_Manager.currentPageAlias = hash;
        }

        // todo: get current step is necessary
        IW_Manager.currentStep = IW_Pages['home'].getStepNumber(hash, 0);
    }

    IW_Manager.renderCurrentPage();
    IW_Manager.updateProgressSteps();
});