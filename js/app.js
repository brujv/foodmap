$(document).ready(function () {
  $('.box-2').delay('4000').fadeIn('slow')


 
});

function funcMap() {

  map = new google.maps.Map(document.getElementById('map'), {
      zoom: 14,
      center: new google.maps.LatLng(-23.5578108, -46.6625469),
      mapTypeId: 'roadmap'
  });


  var features = restaurantes.map(function (r) {
      return {
          position: new google.maps.LatLng(r.latitude, r.longitude),
          type: 'info'
      }
  });


  features.forEach(function (feature) {
      var marker = new google.maps.Marker({
          position: feature.position,
          map: map
      });
  });
}
$(document).ready(function () {

    for (restaurante of restaurantes) {
        var img = $('<img></img>').attr('src', restaurante.image).val(restaurante.type);
        $(".restaurantes").append(img);
    }

    $('.filtrar').click(function () {
        var inputValue = $('.texto-input').val();

        $("img").each(function () {
            if ($(this).val() !== inputValue) {
                $(this).fadeOut('slow');
            } else {
                $(this).fadeIn('slow');
            }
        });
    })

    $('.texto-input').on('input', function () {
        if ($(this).val() === "") {
            $("img").each(function () {
                $(this).fadeIn('slow')
            });


        }
    })
});
