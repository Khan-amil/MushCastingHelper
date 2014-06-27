// ==UserScript==
// @name        Mush Aide casting
// @namespace   Mush Aide casting
// @description Analyse du profil d'un joueur
// @downloadURL https://raw.github.com/Khan-amil/MushCastingHelper/release/MushCastingHelper.user.js
// @include     http://mush.vg/g/*/center
// @include     http://mush.vg/g/*
// @version     1.1
// ==/UserScript==


//ajout nombre de personnes dans le casting
var number = $('#castingFeed > div.boxMargin.boxMaxWidth > div.twinstyle > div.bgtablesummar > ul >li ').size();
var max = $('#castingFeed > div.boxMargin > div.twinstyle > ul.boxContent > li:nth-child(5)').clone();
max.find('span').remove();
//var mail= '<a href="#" onclick="_tid.askDiscuss([7307496,255952]); return false;"><img src="http://data.twinoid.com/img/icons/mail.png" alt="">Envoyer message</a>';
var link = $('div > a');
var tab = new Array(number);
var i = 0;
$('#castingFeed > div.boxMargin.boxMaxWidth > div.twinstyle > div.bgtablesummar > ul >li ').each(function (index, elem) {
    //var pseudo=$(this).$('div > a').attr("tid_id");
    var pseudo = $(this).find(link).attr("tid_id");
    tab[i] = pseudo;
    i++;
});
alert("test");
var mail = '<a href="#" onclick="_tid.askDiscuss([' + tab + ']); return false;"><img src="http://data.twinoid.com/img/icons/mail.png" alt="">Envoyer message</a>';
$('#castingFeed > div.boxMargin.boxMaxWidth > div.twinstyle > h3').text('Effectifs : ' + number + ' sur ' + max.text()).after(mail);