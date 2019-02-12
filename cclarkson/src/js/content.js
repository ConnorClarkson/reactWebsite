$(document).ready(function(){

  var div = document.getElementsByClassName('content')[0],
    data = {
        "items": [
            {
            "title": "sample 1",
            "author": "author 1"},
        {
            "title": "sample 2",
            "author": "author 2"},
        {
            "title": "sample 3",
            "author": "author 3"},
        {
            "title": "sample 4",
            "author": "author 4"}
        ]
    },
    html;

var jsonLength = Object.keys(data[Object.keys(data)[0]]).length;
html = '<div class="row">'
html += data.items.map(function(v,i) {


    return '<div class="col-xs-12 col-sm-12 col-md-6 col-lg-4">' +
           '<div class="box-row">' +
           '<div class="box-row-img" >' + v.title + '</div>' +
           '<div class="box-row-text">' + v.author + '</div>' +
           '</div>' + '</div>';
}).join('');
html += '</div>'
div.innerHTML = html + div.innerHTML ;
})
