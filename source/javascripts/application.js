//= require jquery
//= require bootstrap
//= require_tree .


// $(function(){
//     $('#theCarousel').carousel({
//         interval: 4000,
//         pause: "hover"
//     });

// });


// (function($) {
//   $.fn.carouselVideo = function(options) {
//     // var carousel = $(this);
//     var player;
//     var tag = document.createElement('script');
//     tag.src = "https://www.youtube.com/iframe_api";
//     var firstScriptTag = document.getElementsByTagName('script')[0];
//     firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

//     var height = $(this).height();
//     var width = $(this).width();

//     if(options.full){
//       height = $(window).height();
//       width = $(window).width();
//     }else{
//       if(options.height){
//         height = options.height;
//       }

//       if(options.width){
//         width = options.width;
//       }
//     }

//     // Cycle pra ele rodar, prev pra ele voltar pro primeiro caso for vídeo
//     $(this).on('slid.bs.carousel', function() {
//       // do something…
//       var tipo = $('.carousel-inner > .active').attr('tipo');
//       if (tipo == 'video') {
//         $(this).carousel('pause');
//         var id_video = $('.carousel-inner > .active').attr('id');

//         player = new YT.Player($('.carousel-inner > .active').attr('id'), {
//           height : height,
//           width : width,
//           videoId : $('.carousel-inner > .active').attr('id'),
//           events : {
//             'onReady' : onPlayerReady,
//             'onStateChange' : onPlayerStateChange
//           }
//         });

//       }
//     });
//   };
//   // 4. The API will call this function when the video player is ready.
//   function onPlayerReady(event) {
//     event.target.playVideo();
//   }

//   // 5. The API calls this function when the player's state changes.
//   //    The function indicates that when playing a video (state=1),
//   //    the player should play for six seconds and then stop.
//   var done = false;
//   function onPlayerStateChange(event) {
//     if (event.data == '0') {
//       $('#carousel-example-generic').carousel('next').carousel('cycle');
//       player.destroy()
//     }
//   }

//   function destroi() {
//     player.destroy()
//   }

//   function stopVideo() {
//     player.stopVideo();
//   }
// })(jQuery);

