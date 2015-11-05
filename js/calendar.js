 $(function () {   
    $('#birthday, #birth-dateб').datetimepicker({
      format: 'D/M/YYYY',
      toolbarPlacement: 'top',
      showClose: true,
      useCurrent: false,
      locale: 'uk'
    });


    $('#patientDieInput').datetimepicker({
        format: 'D/M/YYYY H:mm',
        toolbarPlacement: 'top',
        showClose: true,
        useCurrent: false,
        locale: 'uk'
    });
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
    $("#startPR").on("dp.change", function (e) {
        $('#endPR').data("DateTimePicker").minDate(e.date);
    });
    $("#endPR").on("dp.change", function (e) {
        $('#startPR').data("DateTimePicker").maxDate(e.date);
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

$(function (){
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

$(function (){
    $('#start-trpy-1').datetimepicker({
        format: 'D/M/YYYY H:mm',
        toolbarPlacement: 'top',
        showClose: true,
        useCurrent: false,
        locale: 'uk'
    });
    $('#end-trpy-1').datetimepicker({
        format: 'D/M/YYYY H:mm',
        useCurrent: false,
        toolbarPlacement: 'top',
        showClose: true,
        useCurrent: false,
        locale: 'uk'
    });
     $("#start-trpy-1").on("dp.change", function (e) {
        $('#end-trpy-1').data("DateTimePicker").minDate(e.date);
    });
    $("#end-trpy-1").on("dp.change", function (e) {
        $('#start-trpy-1').data("DateTimePicker").maxDate(e.date);
    });
});

$(function (){
    $('#start-trpy-2').datetimepicker({
        format: 'D/M/YYYY H:mm',
        toolbarPlacement: 'top',
        showClose: true,
        useCurrent: false,
        locale: 'uk'
    });
    $('#end-trpy-2').datetimepicker({
        format: 'D/M/YYYY H:mm',
        useCurrent: false,
        toolbarPlacement: 'top',
        showClose: true,
        useCurrent: false,
        locale: 'uk'
    });
     $("#start-trpy-2").on("dp.change", function (e) {
        $('#end-trpy-2').data("DateTimePicker").minDate(e.date);
    });
    $("#end-trpy-2").on("dp.change", function (e) {
        $('#start-trpy-2').data("DateTimePicker").maxDate(e.date);
    });
});
$(function (){
    $('#start-trpy-3').datetimepicker({
        format: 'D/M/YYYY H:mm',
        toolbarPlacement: 'top',
        showClose: true,
        useCurrent: false,
        locale: 'uk'
    });
    $('#end-trpy-3').datetimepicker({
        format: 'D/M/YYYY H:mm',
        useCurrent: false,
        toolbarPlacement: 'top',
        showClose: true,
        useCurrent: false,
        locale: 'uk'
    });
     $("#start-trpy-3").on("dp.change", function (e) {
        $('#end-trpy-3').data("DateTimePicker").minDate(e.date);
    });
    $("#end-trpy-3").on("dp.change", function (e) {
        $('#start-trpy-3').data("DateTimePicker").maxDate(e.date);
    });
});
$(function (){
    $('#start-trpy-4').datetimepicker({
        format: 'D/M/YYYY H:mm',
        toolbarPlacement: 'top',
        showClose: true,
        useCurrent: false,
        locale: 'uk'
    });
    $('#end-trpy-4').datetimepicker({
        format: 'D/M/YYYY H:mm',
        useCurrent: false,
        toolbarPlacement: 'top',
        showClose: true,
        useCurrent: false,
        locale: 'uk'
    });
     $("#start-trpy-4").on("dp.change", function (e) {
        $('#end-trpy-4').data("DateTimePicker").minDate(e.date);
    });
    $("#end-trpy-4").on("dp.change", function (e) {
        $('#start-trpy-4').data("DateTimePicker").maxDate(e.date);
    });
});
$(function (){
    $('#start-trpy-5').datetimepicker({
        format: 'D/M/YYYY H:mm',
        toolbarPlacement: 'top',
        showClose: true,
        useCurrent: false,
        locale: 'uk'
    });
    $('#end-trpy-5').datetimepicker({
        format: 'D/M/YYYY H:mm',
        useCurrent: false,
        toolbarPlacement: 'top',
        showClose: true,
        useCurrent: false,
        locale: 'uk'
    });
    $("#start-trpy-5").on("dp.change", function (e) {
        $('#end-trpy-5').data("DateTimePicker").minDate(e.date);
    });
    $("#end-trpy-5").on("dp.change", function (e) {
        $('#start-trpy-5').data("DateTimePicker").maxDate(e.date);
    });
});
