IW_CONSTANTS = {
    HOME: 'home',
    STEP: 'step',
    DIAGRAM: 'diagram'
};

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
