 $(function () {   
    $('#birthday, #birth-date').datetimepicker({
      format: 'D/M/YYYY',
      toolbarPlacement: 'top',
      showClose: true,
      useCurrent: false,
      locale: 'uk'
    });

 
    $('#startPR,').datetimepicker({
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
    $("#startPR").on("dp.change", function (e) {
        $('#therapyEnd').data("DateTimePicker").minDate(e.date);
    });
    $("#endPR").on("dp.change", function (e) {
        $('#therapyStart').data("DateTimePicker").maxDate(e.date);
    });
    /////
 
 
    $('#patientDieInput').datetimepicker({
        format: 'D/M/YYYY H:mm',
        toolbarPlacement: 'top',
        showClose: true,
        useCurrent: false,
        locale: 'uk'
    });

    ////

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
    $('#start-trpy, 
        #start-trpy-1, 
        #start-trpy-2, 
        #start-trpy-3, 
        #start-trpy-4, 
        #start-trpy-5').datetimepicker({
        format: 'D/M/YYYY H:mm',
        toolbarPlacement: 'top',
        showClose: true,
        useCurrent: false,
        locale: 'uk'
    });
    $('#end-trpy,
        #end-trpy-1,
        #end-trpy-2,
        #end-trpy-3,
        #end-trpy-4,
        #end-trpy-5').datetimepicker({
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
