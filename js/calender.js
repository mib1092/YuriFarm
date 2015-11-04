
$(function() {
    $('.datepicker').datetimepicker({
      format: 'D/M/YYYY',
      toolbarPlacement: 'top',
      showClose: true,
      useCurrent: false,
      locale: 'uk'
    }).show;

  });

 $(function () {
    $('#startPR').datetimepicker({
        format: 'D/M/YYYY H:mm',
        toolbarPlacement: 'top',
        showClose: true,
        useCurrent: false,
        locale: 'uk'
    });
    $('#endPR').datetimepicker({
        format: 'D/M/YYYY H:mm',
        useCurrent: false,
        toolbarPlacement: 'top',
        showClose: true,
        useCurrent: false,
        locale: 'uk'
    });
    
});
 $(function () {
    $('#patientDieInput').datetimepicker({
        format: 'D/M/YYYY H:mm',
        toolbarPlacement: 'top',
        showClose: true,
        useCurrent: false,
        locale: 'uk'
    });
});
  $(function () {
    $('#therapyStart').datetimepicker({
        format: 'D/M/YYYY H:mm',
        toolbarPlacement: 'top',
        showClose: true,
        useCurrent: false,
        locale: 'uk'
    });
    $('#therapyEnd').datetimepicker({
        format: 'D/M/YYYY H:mm',
        useCurrent: false,
        toolbarPlacement: 'top',
        showClose: true,
        useCurrent: false,
        locale: 'uk'
    });
    $("#therapyStart").on("dp.change", function (e) {
        $('#therapyEnd').data("DateTimePicker").minDate(e.date);
    });
    $("#therapyEnd").on("dp.change", function (e) {
        $('#therapyStart').data("DateTimePicker").maxDate(e.date);
    });
});
$(function () {
    $('#start-trpy').datetimepicker({
        format: 'D/M/YYYY H:mm',
        toolbarPlacement: 'top',
        showClose: true,
        useCurrent: false,
        locale: 'uk'
    });
    $('#end-trpy').datetimepicker({
        format: 'D/M/YYYY H:mm',
        useCurrent: false,
        toolbarPlacement: 'top',
        showClose: true,
        useCurrent: false,
        locale: 'uk'
    });
    $("#start-trpy").on("dp.change", function (e) {
        $('#end-trpy').data("DateTimePicker").minDate(e.date);
    });
    $("#end-trpy").on("dp.change", function (e) {
        $('#start-trpy').data("DateTimePicker").maxDate(e.date);
    });
});
