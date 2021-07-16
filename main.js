// ==UserScript==
// @name         Exile Section Hider
// @version      1.0
// @description  Hide individual forum sections from the index page.
// @author       Sarno
// @match        https://*.pathofexile.com/forum
// @require      https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js
// ==/UserScript==


section_list = [1,307];

$('.forumIndexTable > tbody > tr').each(function() {
    var section = $(this).attr('data-id');
    for (var j = 0 ; j < section_list.length; j++){
        if (section_list[j]==section){
            console.log("Found section " + section + ", hiding...\n");
            $(this).hide();
        }
    }
});


//
// PARTIAL LIST OF ENGLISH LANGUAGE SECTION IDS BELOW
//

// Valued Poster Lounge - 596
//
// Announcements - 54
// Developer Manifesto - 419
// Patch Notes - 366
//
// Help and Information - 584
// Technical Support - 248
//
// Bug Reports - 413
// Feedback and Suggestions - 307
// Skill Gem Feedback - 201
// Support Gem Feedback - 204
// Art and Audio Feedback - 57
//
// General Discussion - 1
// Off Topic - 2
//
// Gameplay Help and Discussion - 107
// Item Display Cabinet - 471
//
// Duelist - 40
// Marauder - 23
// Ranger - 24
// Scion - 436
// Shadow - 303
// Templar - 41
// Witch - 22
//
// Guilds - 469
// Community Streaming - 470
// Communities - 585
// Hideout Showcase - 556
// Community Showcase - 573
//
// Race Events and League Ladders - 365
// EU PvP Events - 572
// EU PvP Ratings - 569
// US PvP Events - 571
// US PvP Ratings - 568
// Private League Discussion - 755
// Race and Season Feedback - 422
// PvP Feedback - 411
// Race Discussion - 574
// PvP Discussion - 559
//
// Console Announcements - 732
// Console Bug Reports - 715
// Console Events and League Ladders - 1381
// Xbox Patch Notes - 723
// PlayStation Patch Notes - 1374
// Console Gameplay Discussion - 722
// Console Feedback and Suggestions - 716