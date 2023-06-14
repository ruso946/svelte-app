<script>
    export let registrosMesActual;
    export let sumaValorPagoPorPaciente;
    import { idPacienteSeleccionado } from "../store";
</script>

<p id="totalGeneral">total general:{registrosMesActual}</p>
      <p>
        total por paciente:{sumaValorPagoPorPaciente($idPacienteSeleccionado)}
      </p>