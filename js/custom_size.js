/*
* custom_size.js
* handles custom size menu
*/
(function(){

   var resize = window.resize;

   var custom_size = {

      /**
      * hides custom view menu
      */
      hideCustomMenu: function() {
         $('.custom-size-view').addClass('hidden');
         $('.main-view').removeClass('inactive');
      },

      /**
      * shows custom view menu
      */
      showCustomMenu: function() {
         this.clearCustomValues();
         $('.layout-option #fixed').trigger('click');
         $('.main-view').addClass('inactive');
         $('.custom-size-view').removeClass('hidden').trigger('show');
         $('.custom-size-view input.row').focus();
      },

      /**
      * clears custom row and col values from input fields
      */
      clearCustomValues: function(){
         $('#sizeWidth').val('');
         $('#sizeHeight').val('');
         $('#posX').val('0');
         $('#posY').val('0');
         $('#custom-save-view').addClass('disabled');
      },

      /**
      * performs save of new layout
      */
      handleCustomSave: function(){
         var layoutType,
             sizeWidth = $('#sizeWidth').val(),
             sizeHeight = $('#sizeHeight').val(),
             posX = $('posY').val(),
             posY = $('posX').val();

         this.clearCustomValues();

         if(!Number(sizeWidth) || !Number(sizeHeight) || Number(sizeWidth) < 1 || Number(sizeHeight) < 1){
            //window.alert('Please enter valid input values.');
         } else {
            layoutType = sizeWidth + 'x' + sizeHeight + "px" + posX + "-" + posY;
            resize.layout.addLayout(layoutType);
            resize.layout.processTabInfo($('.layout-' + layoutType));
            this.hideCustomMenu();
         }
      }

   };

   window.resize.custom_size_view = custom_size;

})();