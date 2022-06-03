sap.ui.define(
    [
        "sap/ui/core/mvc/Controller"
    ],
    function(BaseController) {
      "use strict";
  
      return BaseController.extend("booklist.library.controller.controller.App", {
        onInit() {
        },

        addBook: function() {
          var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
          oRouter.navTo("second");
        },

        updateBook: function() {
          var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
          oRouter.navTo("third");
        },

        deleteBook: function() {
          var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
          oRouter.navTo("fourth");
        }

      });
    }
  );
  