<template>
<div>
<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
  ¿Hablamos?
</button>
<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Contactar por WhatsApp</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <p>Puedes contactarme directamente por este medio, y con gusto te atendere, para despejar cualquier duda que tengas.</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
        <a href="https://api.whatsapp.com/send?phone=59899370928">
          <button type="button" class="btn btn-primary">Contactar</button>
        </a>
      </div>
    </div>
  </div>
</div>
</div>
</template>
