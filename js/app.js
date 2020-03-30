'use strict ';
let picArr=[];
let drpoarr=[];
$.get('./data/page01.json')
    .then(data => {
        data.forEach((val, ind) => {
            let pic = new Data(val.image_url, val.title, val.description, val.keyword, val.horns);
            // console.log(pic);
            pic.renderList();
            pic.renderImg();
        });
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
Data.prototype.renderList = function () {
    $('#cataloge').append(`<option> ${this.keyword} </option>`);
}


// render the imeges 
Data.prototype.renderImg = function () {
    let picClone = $('.photo-template').clone();
    picClone.removeClass('photo-template');
    picClone.find('h2').text(this.title);
    picClone.find('img').attr('src',this.img_url);
    picClone.find('p').text(this.description);
    $('main').append(picClone);
}
console.log(picArr);
// code for chose element 
function chose() {
    let choseitem=$()


}
chose();
