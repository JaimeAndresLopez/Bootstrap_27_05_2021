$('.carousel').carousel({
    interval: 3000,
    keyboard: true,
    ride: "true"
  })

  $(function () {
      let plantilla = `<div class="card" style="width: 18rem;">
      <img src="imagenes/wallpapersden.com_void-spirit-dota-2_3850x2166.jpg" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">Hola Mundo</h5>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
    `;

    $('[data-toggle="tooltip"]').tooltip({
        template : plantilla,
        sanitize : false
    })
  })