let artData, userInput;

const $title = $('#title');
const $artist = $('#artist_title');
const $date = $('#date_display');
const $thumbnail = $('#thumbnail')
const $input = $('input[type="text"]');

$('form').on('submit', handleGetData);

function handleGetData(event) {
    event.preventDefault();
    userInput = $input.val();
    $.ajax({
        url: `https://api.artic.edu/api/v1/artworks/${userInput}`
    }).then(
        (data) => {
            artData = data;
            render();
            $input.val("");
        },
        (error) => {
            console.log('bad request', error);
        }
    );
}

function render() {
    $title.text(artData.data.title);
    $artist.text(artData.data.artist_title);
    $date.text(artData.data.date_display);
    $thumbnail.attr("src",`https://www.artic.edu/iiif/2/${artData.data.image_id}/full/843,/0/default.jpg`);
}

 