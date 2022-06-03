sap.ui.define(
    [
        "sap/ui/core/mvc/Controller"
    ],
    function(BaseController) {
      "use strict";
  
      return BaseController.extend("books.rentbooks.controller.controller.App", {
        onInit() {
        },

        onSearch: function (oEvent) {
          // add filter for search
          var aFilters = [];
          var sQuery = oEvent.getSource().getValue();
          if (sQuery && sQuery.length > 0) {
            var filter = new Filter("Title", FilterOperator.Contains, sQuery);
            aFilters.push(filter);
          }
    
          // update list binding
          var oList = this.byId("idBooksTable");
          var oBinding = oList.getBinding("items");
          oBinding.filter(aFilters);
        }
      });
    }
  );
  