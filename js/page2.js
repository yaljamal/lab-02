'use strict ';
$(document).ready(function () {
    let picArr2 = [];
    let allKeywords2 = [];
    getData('./data/page01.json');
    function getData(getdata) {
        $.get(getdata)
            .then(data => {
                allKeywords2 = [];
                picArr2 = [];
                data.forEach((val) => {
                    var renderPic = new Data2(val.image_url, val.title, val.description, val.keyword, val.horns);

                    renderPic.renderAll();

                });
                renderList();
                sortHourns();
            });
    }
    function Data2(img_url, title, description, keyword, horns) {
        this.img_url = img_url;
        this.title = title;
        this.description = description;
        this.keyword = keyword;
        this.horns = horns;
        picArr2.push(this);
    }
    // render the dropdowen list 
    function renderList() {
        allKeywords2=[];
        console.log(allKeywords2)
        picArr2.forEach(val => {
            if (!allKeywords2.includes(val.keyword)) {
                allKeywords2.push(val.keyword);
            }
        })
        allKeywords2.forEach((val) => {
            $('#cataloge').append(`<option> ${val} </option>`);
        })
        console.log(allKeywords2)
    }
    Data2.prototype.renderAll = function () {
        let templete = $('#page2-temp').html();
        let html = Mustache.render(templete, this);
        $('#showMustach').append(html);
    }
    // on click function to add the keyword 
    $('button').on('click', function () {
        let bid = $(this).attr('id');
        console.log(bid);
        $('#showMustach').html(" ");
        $('opp').empty();
        picArr2 = [];

        getData(`./data/${bid}.json`);
        renderList();
    })
    // sort alphapatical in title 
    function sortHourns() {
        $('select').on('change', function () {

            if ($('#sort').val() === 'numHourns') {
                sortAlgorithem(picArr2,'horns');

            } else if ($('#sort').val() === 'title') {
                sortAlgorithem(picArr2,'title');

            }
        });
    }
    function sortAlgorithem(arry, key) {
        console.log('dvdfvf');
        arry.sort(function (a, b) {
            let i = a[key];
            let j = b[key];
            // console.log(i);
            // return ((i<j) ? 1  :(i<j) ? -1 :0);
            if (i > j) return 1;
            else if (i < j) return -1;
            else return 0;
        });
        $('#showMustach').html(" ");
        picArr2.forEach(val => {
            val.renderAll();
        })
    }
});