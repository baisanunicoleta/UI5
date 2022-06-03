sap.ui.define(["sap/ui/core/mvc/Controller"], 
function(Controller) {  
    "use strict";  
    return Controller.extend("view.UpdateBook", {  
        onBack: function()
        {
            var or = this.getOwnerComponent().getRouter();
            or.navTo("first");
        },

        onProcess: function()
        {
            var oBook = {
                "Isbn"  : this.getView().byId("isbn"),
                "Author": this.getView().byId("author"),
                "Title" : this.getView().byId("title"),
                "DatePublished" : this.getView().byId("pub"),
                "Language" : this.getView().byId("lan"),
                "NumberOfBooks" : this.getView().byId("nrbooks"),
                "NumberAvailable" : this.getView().byId("nravab")
            }

            var isbn =  this.getView().byId("isbn");
            var author =  this.getView().byId("author");
            var title = this.getView().byId("title");

            this.getOwnerComponent().getModel().update("/BookSet('" + oBook + "')", payLoad, {
                method: "PUT",
                success: function (oData, oResponse) {
                    if (odata !== "" || odata !== undefined) {
						// read msg from i18n model
                        var oBundle = this.getView().getModel("i18n").getResourceBundle();
                        var sRecipient = this.getView().getModel().getProperty("/recipient/name");
                        var sMsg = oBundle.getText("Book Updated!", [sRecipient]);
                        // show message
                        sap.m.MessageToast.show(sMsg);
					} else {
						// read msg from i18n model
                        var oBundle = this.getView().getModel("i18n").getResourceBundle();
                        var sRecipient = this.getView().getModel().getProperty("/recipient/name");
                        var sMsg = oBundle.getText("Error Updating Book", [sRecipient]);
                        // show message
                        sap.m.MessageToast.show(sMsg);
					}
                },
                error: oError => reject(oError)
            });

            var or = this.getOwnerComponent().getRouter();
            or.navTo("first");
        }
    });  
  });  