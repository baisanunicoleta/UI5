sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("books.rentbooks.controller.Checkouts", {
            onInit: function () {

            },

            checkOut: function () {
                var oRent = {
                    "Isbn"  : this.getView().byId("isbn")
                }
    
                this.getOwnerComponent().getModel().create("/CheckOutSet", oRent, payLoad, {
                    success: function (odata, Response) {
    
                        if (odata !== "" || odata !== undefined) {
                            // read msg from i18n model
                            var oBundle = this.getView().getModel("i18n").getResourceBundle();
                            var sRecipient = this.getView().getModel().getProperty("/recipient/name");
                            var sMsg = oBundle.getText("Book Rented!", [sRecipient]);
                            // show message
                            sap.m.MessageToast.show(sMsg);
                        } else {
                            // read msg from i18n model
                            var oBundle = this.getView().getModel("i18n").getResourceBundle();
                            var sRecipient = this.getView().getModel().getProperty("/recipient/name");
                            var sMsg = oBundle.getText("Error Renting Book", [sRecipient]);
                            // show message
                            sap.m.MessageToast.show(sMsg);
                        }
                    },
                    error: function (cc, vv) {
    
                    }
                });
    
            }
        });
    });
