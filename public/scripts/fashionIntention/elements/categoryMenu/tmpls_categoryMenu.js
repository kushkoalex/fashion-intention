(function (fin) {
    var tmpls = fin.tmpls,
        a9 = fin.global.A9,
        l10n = a9.l10n,
        u;

    tmpls.categoryMenu = function () {
        return {
            c: 'category-menu-wrapper hidden', n: 'categoryMenuWrapper'
        }
    };


    tmpls.categoryMenuWrapper = function (tags) {
        var tagList = [];

        a9.each(tags, function (tag) {
            tagList.push({
                e: 'a',
                h: '/tag/' + tag.id,
                t: tag.title
            });
        });

        return [
            {c: 'category-menu-triangle'},
            {
                c: 'category-menu', C: [
                {c: 'line'},
                {c: 'tagList', C: tagList},
                {c: 'line'}]
            }
        ]
    };


}(FIN));