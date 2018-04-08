$('.table-responsive').on('show.bs.dropdown', '.dropdown', function(e) {

    var $dropdown = $(this).children('.dropdown-menu'),
        $toggle   = $(this).children('.dropdown-toggle'),
        yPos      = $(this).offset().top + $toggle.outerHeight(true,true);

    $(this).data('dropdown-menu', $dropdown);

    $dropdown.appendTo('body');

    window.setTimeout(function() {
        // Get the third arg of the transform:
        var t   = $dropdown.css('transform').split(','),
            tY  = parseInt( t[ (t.length - 1) ] ),
            top = Math.max(0, (yPos - tY));

        $dropdown.css('top', top);
    }, 1);    

}).on('hidden.bs.dropdown', '.dropdown', function() {
    $(this).data('dropdown-menu').appendTo( $(this) );
});
