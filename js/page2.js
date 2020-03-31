'use strict ';
let picArr2 = [];
$.get('./data/page02.json')
    .then(data => {
        data.forEach((val) => {
            new Data2(val.image_url, val.title, val.description, val.keyword, val.horns);
            // console.log(pic);
        });
        renderList();
        fillterByKeyword();
    });
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
    let allKeywords2 = [];
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
// render the imeges using mustache 
picArr2.forEach(val => {
    var renderM = val.toHTML();
    $('#showMustach').append(renderM);
})
Data2.prototype.toHtml = function () {
    let templete = $('#page2-temp').html();
    let html = Mustache.render(templete, this);
    return html;

}
// code for chose element 
function fillterByKeyword() {
    $('select').on('change', function () {
        // console.log('stop');
        $('section').hide();
        let selected = $(this).val();
        console.log(selected);
        // $(`.${selected}`).show();
        picArr2.forEach(val => {
            if (val.keyword === selected) {
                $(`section[class='${selected}']`).fadeIn();
            }
        })
    })
}
// sort alphapatical in title 
$('select').on('change',function(){
    picArr2.sort((a,b)=>{
       return a.horns>b.horns;
    })
    console.log("picArr2");
})
$('select').on('change',function(){
    // picArr2.sort((a,b)=>{
    //    return a.horns>b.horns;
    // })
    console.log("sdsdgdfbdv");
})
