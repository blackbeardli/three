langs.on('change', function() {
    //console.log(langs.prop('checked'));
    var checked = true;
    langs.map(function() {
        if (!($(this).prop('checked'))) checked = false;
    })
    if (checked) {
        selectAll.prop('checked', true);
        selectAllLabel.hide();
        deselectAllLabel.show();
    }
    else {
        selectAll.prop('checked', false);
        selectAllLabel.show();
        deselectAllLabel.hide();
    }
 });