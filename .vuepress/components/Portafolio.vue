<template>
<div>
  <div>
   <div class="card-group">
  <div class="card">
    <img src="/img/w1.jpg" class="card-img-top" alt="web">
    <div class="card-body">
      <h5 class="card-title">Efectivo Clic</h5>
      <p class="card-text">Website fintech, portal principal</p>
    </div>
  </div>
  <div class="card">
    <img src="/img/w2.jpg" class="card-img-top" alt="landing">
    <div class="card-body">
      <h5 class="card-title">Efectivo Clic</h5>
      <p class="card-text">Landing Page, para Google Adwords</p>
    </div>
  </div>
  <div class="card">
    <img src="/img/w3.jpg" class="card-img-top" alt="landing">
    <div class="card-body">
      <h5 class="card-title">Efectivo Clic</h5>
      <p class="card-text">Landing Page, Tarjeta Prepago</p>
    </div>
  </div>
</div>
<div class="card-group">
  <div class="card">
    <img src="/img/w4.jpg" class="card-img-top" alt="landing">
    <div class="card-body">
      <h5 class="card-title">Efectivo Clic</h5>
      <p class="card-text">Landing Page, Solicitud de Credito</p>
    </div>
  </div>
  <div class="card">
    <img src="/img/w5.jpg" class="card-img-top" alt="e-commerce">
    <div class="card-body">
      <h5 class="card-title">TodoClic</h5>
      <p class="card-text">E-commerce, tienda online de variedades</p>
    </div>
  </div>
  <div class="card">
    <img src="/img/w6.jpg" class="card-img-top" alt="One Page">
    <div class="card-body">
      <h5 class="card-title">MiBiciOk</h5>
      <p class="card-text">One Page, pagina comercial responsiva</p>
    </div>
  </div>
</div>
  <div class="card-group">
  <div class="card">
    <img src="/img/w7.jpg" class="card-img-top" alt="One Page">
    <div class="card-body">
      <h5 class="card-title">Explorando</h5>
      <p class="card-text">One Page, pagina turistica responsiva</p>
    </div>
  </div>
  <div class="card">
    <img src="/img/w8.jpg" class="card-img-top" alt="cms">
    <div class="card-body">
      <h5 class="card-title">LaburApp</h5>
      <p class="card-text">Website CMS, blog para especialistas</p>
    </div>
  </div>
  <div class="card">
    <img src="/img/w9.jpg" class="card-img-top" alt="website">
    <div class="card-body">
      <h5 class="card-title">HF Digital</h5>
      <p class="card-text">Website, agencia de marketing digital.</p>
    </div>
  </div>
</div>
</div>
</div>
</template>

<style lang="stylus" scoped>
.grid-gallery {
  display: grid;
  grid-auto-rows: 200px;
  grid-gap: 1rem;
  grid-auto-flow: row dense;
}

@media all and (min-width: 320px) {
  .grid-gallery {
    grid-template-columns: repeat(1, 1fr);
  }
}

@media all and (min-width: 768px) {
  .grid-gallery {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media all and (min-width: 1024px) {
  .grid-gallery {
    grid-template-columns: repeat(6, 1fr);
  }
}

.grid-gallery__item:nth-child(11n+1) {
  grid-column: span 1;
}

.grid-gallery__item:nth-child(11n+4) {
  grid-column: span 2;
  grid-row: span 1;
}

.grid-gallery__item:nth-child(11n+6) {
  grid-column: span 3;
  grid-row: span 1;
}

.grid-gallery__item:nth-child(11n+7) {
  grid-column: span 1;
  grid-row: span 2;
}

.grid-gallery__item:nth-child(11n+8) {
  grid-column: span 2;
  grid-row: span 2;
}

.grid-gallery__item:nth-child(11n+9) {
  grid-row: span 3;
}

.grid-gallery__image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
