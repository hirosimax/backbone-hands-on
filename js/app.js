window.App = {};

$(function() {
  var schedules = new App.Schedules();

  schedules.add([
    { title: '打ち合わせ1', datetime: moment('2013-10-01 13:00') },
    { title: '打ち合わせ2', datetime: moment('2013-10-02 15:00') },
    { title: '打ち合わせ3', datetime: moment('2013-10-02 13:00') },
    { title: '打ち合わせ4', datetime: moment('2013-10-05 13:00') },
    { title: '打ち合わせ5', datetime: moment('2013-10-10 14:00') }
  ]);

  var createFormView = new App.CreateFormView({
    el: '.createForm',
    collection: schedules
  });

  var calendarView = new App.CalendarView({
    el: '.calendar',
    collection: schedules
  });

  $('.calendar-prevBtn').click(function() {
    calendarView.toPrev();
  });

  $('.calendar-nextBtn').click(function() {
    calendarView.toNext();
  });

  $('.calendar-todayBtn').click(function() {
    calendarView.toToday();
  });
});
