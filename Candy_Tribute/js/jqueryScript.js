// Animating teh CSS transitions

$(document).ready(function(){



    let $animation_elements = $('.animation-element');
    let $window = $(window);
    
    $window.on('scroll resize', check_if_in_view);
    
    $window.trigger('scroll');
    
    function check_if_in_view() {
      let window_height = $window.height();
      let window_top_position = $window.scrollTop();
      let window_bottom_position = (window_top_position + window_height);
    
      $.each($animation_elements, function() {
        let $element = $(this);
        let element_height = $element.outerHeight();
        let element_top_position = $element.offset().top;
        let element_bottom_position = (element_top_position + element_height);
        console.log(element_height);
    
        //check to see if this current container is within viewport
        if ((element_bottom_position >= window_top_position) &&
            (element_top_position <= window_bottom_position)) {
          $element.addClass('in-view');
        } else {
          $element.removeClass('in-view');
        }
      });
    }
});
// to play youtube videos on hover

