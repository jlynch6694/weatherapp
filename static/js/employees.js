setTimeout(function() {
$("#home_link").removeClass("active");
$("#emp_link").addClass("active");
}, 5);

$.getJSON("../../assets/employees.json",
function (data) {
    var tr;
    for (var i = 0; i < data.length; i++) {
        tr = $('<tr/>');
        tr.append("<td>" + data[i].name+ "</td>");
        tr.append("<td>" + data[i].salary + "</td>");
        tr.append("<td>" + data[i].title + "</td>");
        tr.append("<td>" + data[i].attendance + "</td>")
        $('table').append(tr);
    }
});
