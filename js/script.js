var songs = [
    "Soy peor",
    "Drip to hard",
    "Redbone",
    "Demon Seed",
];

var artists = [
    "Bad Bunny",
    "Lil baby",
    "Childish Gambino",
    "YoungBoy",
];

var images = [
    "https://m.media-amazon.com/images/I/71GsDJ8lLkL._SS500_.jpg",
    "https://i.ytimg.com/vi/THcVOf1kNh0/maxresdefault.jpg",
    "https://i.ytimg.com/vi/Kp7eSUU9oy8/maxresdefault.jpg",
    "https://i.ytimg.com/vi/fGoXwtXPU-Q/maxresdefault.jpg",
];

var links = [
    "https://www.youtube.com/watch?v=3DkDi8eHrK8",
    "https://www.youtube.com/watch?v=THcVOf1kNh0",
    "https://www.youtube.com/watch?v=Kp7eSUU9oy8",
    "https://www.youtube.com/watch?v=Kp7eSUU9oy8",
];

var lengths = [
    "04:17",
    "02.:27",
    "05:27",
    "02:58",
];

function displaySongInfo(){
    images.forEach(function(image) {
        $("#images").append("<img src='" + image + "'>");   
    });

    songs.forEach(function(song) {
        $("#songs").append("<p>" + song + "</p>"); 
    });

    artists.forEach(function(artist) {
        $("#artists").append("<p> By: " + artist + "</p>");   
    });

    lengths.forEach(function(length) {
        $("#lengths").append("<p>" + length + "</p>"); 
    });

    links.forEach(function(link) {
        $("#links").append("<a href='" + link + "'> Listen </a>"); 
    });
}

function emptySongInfo(){
    $("#images").empty();
    $("#songs").empty();
    $("#artists").empty();
    $("#lengths").empty();
    $("#links").empty();
}

$("#add").click(function() {
    var songName = $("#song").val();
    var imageUrl = $("#image").val();
    var artistName = $("#artist").val();
    var songLength = $("#length").val();
    var link = $("#links").val();

    songs.push(songName);
    artists.push(artistName);
    images.push(imageUrl);
    lengths.push(songLength);
    links.push(link);

    emptySongInfo()
    displaySongInfo();
});

displaySongInfo();

