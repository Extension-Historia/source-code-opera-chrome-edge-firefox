$(document).ready(function () {
    $('#example').DataTable({
    	 "ajax": 'data.json',
       columns: [
      {
        orderable: false,
        data: null,
        "render": function(data, type, full, meta) {
          return "<a href=\"" + full.link + "\" target=\"_blank\">" + full.title + " " + full.language + "<br>" + "<p>" + full.description + "</p>" + "</a>";
        }
      },
      {
        data: 'title',
        title: 'Title'
      },
      {
        data: 'description',
        title: 'Description'
      },
      {
        data: 'language',
        title: 'Language'
      },
      {
        data: 'link',
        title: 'Link'
      }
    ],
    columnDefs: [{
        target: 0,
        visible: true,
      },
      {
        target: 1,
        visible: false,
      },
      {
        target: 2,
        visible: false,
      },
      {
        target: 3,
        visible: false,
      },
      {
        target: 4,
        visible: false,
      }
    ],
    paging: false,
    ordering: false,
    info: true,
    "language": {
    "search": "",
		"searchPlaceholder": "Search...",
      "info": "<h2>Showing _TOTAL_ of _MAX_ entries</h2>",
      "infoFiltered": "",
      "infoEmpty": ""
    },
        dom: 'ip'

    });
});

$(document).ready(function() {

  var table = $('#example').DataTable();

  oTable = $('#example').DataTable();
  $('#custom_searchbox').keyup(function() {
    oTable.search($(this).val()).draw();
  })

});
