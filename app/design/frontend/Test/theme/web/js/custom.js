require(['jquery'],function($){   
  $(document).ready(function(){
    $('.search-toggle-icon').on('click', function(){
      $(this).siblings('.block.block-search').toggleClass('active');
      $(this).toggleClass('active');
    });

    $('.nav-toggle--mobile').on('click', function(){
      $('.main_navigation_tablet').toggleClass('active');
      $('.main_navigation_tablet--overlay').toggleClass('active');
      $('body').addClass('sidebar--open');
    });

    $('.mobile_menu_head span.close, .main_navigation_tablet--overlay').on('click', function() {
      $('.main_navigation_tablet').removeClass('active');
      $('.main_navigation_tablet--overlay').removeClass('active');
      $('body').removeClass('sidebar--open');
    });
  });
});