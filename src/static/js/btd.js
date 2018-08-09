const $ = require('jquery/dist/jquery.min');
$(function(){

    var mathenticate = {
        bounds: {
            lower: 5,
            upper: 50
        },
        first: 0,
        second: 0,
        generate: function()
        {
            this.first = Math.floor(Math.random() * this.bounds.lower) + 1;
            this.second = Math.floor(Math.random() * this.bounds.upper) + 1;
        },
        show: function()
        {
            return this.first + ' + ' + this.second;
        },
        solve: function()
        {
            return this.first + this.second;
        }
    };
    mathenticate.generate();

    var $auth = $('<input type="text" name="name" />');
    var ip1 = document.getElementById('ip1');
    // ip1.style.display = 'none';
    $auth
        .attr('value', mathenticate.show())

        .insertAfter('input[name="confirm_password"]');

    $('#form').on('submit', function(e){
        e.preventDefault();
        if( $auth.val() != mathenticate.solve() )
        {
            alert('wrong answer!');
        }
    });

});