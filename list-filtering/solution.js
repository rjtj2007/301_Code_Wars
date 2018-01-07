function filter_list(l) {

    var array = [];

    for (var i = 0; i < l.length; i++) {
        if (typeof (l[i]) === 'number') {
            array.push(l[i]);
        }
    }
    return array;
}