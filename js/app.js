'use strict ';
let picArr = [];
let drpoarr = [];
$.get('./data/page01.json')
    .then(data => {
        data.forEach((val, ind) => {
            let pic = new Data(val.image_url, val.title, val.description, val.keyword, val.horns);
            // console.log(pic);
            pic.renderImg();

        });
        renderList();
        fillterByKeyword();

    });

// the constructor 
function Data(img_url, title, description, keyword, horns) {
    this.img_url = img_url;
    this.title = title;
    this.description = description;
    this.keyword = keyword;
    this.horns = horns;
    picArr.push(this);
}
// render the dropdowen list 
function renderList() {
    let allKeywords = [];
    picArr.forEach(val => {
        if (!allKeywords.includes(val.keyword)) {
            allKeywords.push(val.keyword);
        }
    })
    allKeywords.forEach((val) => {
        $('#cataloge').append(`<option value="${val}"> ${val} </option>`);

    })
}


// render the imeges 
Data.prototype.renderImg = function () {
    let picClone = $('.photo-template').clone();
    picClone.removeClass('photo-template');
    picClone.find('h2').text(this.title);
    picClone.find('img').attr('src', this.img_url);
    picClone.find('p').text(this.description);
    picClone.attr('calss', this.keyword);
    $('main').append(picClone);
    // $('main').append('<section></section>');
    // $('section').append(`<h1>${this.title}</h1>`);
    // $('section').append(`<img src ="${this.img_url}"></img>`);
    // $('section').append(`<p>${this.description}</p>`);
}
console.log(picArr);
// code for chose element 
function fillterByKeyword() {
    $('select').on('change', function () {
        // console.log('stop');
        $('section').hide();
        let selected = $(this).val();
        console.log(selected);
        // $(`.${selected}`).show();
        picArr.forEach(val => {
            if (val.keyword === selected) {
                $(`section[class='${selected}']`).fadeIn();
            }
        })
    })
}
