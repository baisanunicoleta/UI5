sap.ui.define(["sap/ui/core/mvc/Controller"], 
function(Controller) {  
    "use strict";  
    return Controller.extend("view.DeleteBook", {  
        onBack: function()
        {
            var or = this.getOwnerComponent().getRouter();
            or.navTo("first");
        },

        onProcess: function()
        {
            var oBook = {
                "Isbn"  : this.getView().byId("isbn"),
            }

            this.getOwnerComponent().getModel().remove("/BookSet('" + oBook + "')", {
                method: "DELETE",
				success: function (odata, Response) {

					if (odata !== "" || odata !== undefined) {
						// read msg from i18n model
                        var oBundle = this.getView().getModel("i18n").getResourceBundle();
                        var sRecipient = this.getView().getModel().getProperty("/recipient/name");
                        var sMsg = oBundle.getText("Book Deleted!", [sRecipient]);
                        // show message
                        sap.m.MessageToast.show(sMsg);
					} else {
						// read msg from i18n model
                        var oBundle = this.getView().getModel("i18n").getResourceBundle();
                        var sRecipient = this.getView().getModel().getProperty("/recipient/name");
                        var sMsg = oBundle.getText("Error Deleting Book", [sRecipient]);
                        // show message
                        sap.m.MessageToast.show(sMsg);
					}

				},
				error: function (cc, vv) {

				}
            });

            var or = this.getOwnerComponent().getRouter();
            or.navTo("first");
        }
    });  
  });  