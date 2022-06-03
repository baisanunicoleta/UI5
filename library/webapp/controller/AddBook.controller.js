sap.ui.define(["sap/ui/core/mvc/Controller"], 
function(Controller) {  
    "use strict";  
    return Controller.extend("view.AddBook", {  
        onBack: function()
        {
            var or = this.getOwnerComponent().getRouter();
            or.navTo("first");
        },

        commonFunc: function () {
			var empIDC = this.getView().byId("isbn").getValue();
			var empNameC = this.getView().byId("author").getValue();
			var empNumC = this.getView().byId("title").getValue();
			var payLoad = {
				"Isbn"  : this.getView().byId("isbn"),
                "Author": this.getView().byId("author"),
                "Title" : this.getView().byId("title")
			};
			this.getOwnerComponent().getModel().create("/BookSet", payLoad, {
				success: function (odata, Response) {

					if (odata !== "" || odata !== undefined) {
						// read msg from i18n model
                        var oBundle = this.getView().getModel("i18n").getResourceBundle();
                        var sRecipient = this.getView().getModel().getProperty("/recipient/name");
                        var sMsg = oBundle.getText("Book Added!", [sRecipient]);
                        // show message
                        sap.m.MessageToast.show(sMsg);
					} else {
						// read msg from i18n model
                        var oBundle = this.getView().getModel("i18n").getResourceBundle();
                        var sRecipient = this.getView().getModel().getProperty("/recipient/name");
                        var sMsg = oBundle.getText("Error Adding Book", [sRecipient]);
                        // show message
                        sap.m.MessageToast.show(sMsg);
					}
				},
				error: function (cc, vv) {

				}
			});
		},

        onProcess: function()
        {
            var oBook = {
                "Isbn"  : this.getView().byId("isbn"),
                "Author": this.getView().byId("author"),
                "Title" : this.getView().byId("title")
            }

            var isbn =  this.getView().byId("isbn");
            var author =  this.getView().byId("author");
            var title = this.getView().byId("title");

            this.getOwnerComponent().getModel().create("/BookSet", oBook, {
                success: function (oData, oResponse) {
                    var vFlag = false;
                    var sParam = "";
                    for (var i = 0; i < oData.results.length; i++) {
                        if (oData.results[i].Isbn === isbn) {
                            vFlag = true;
                            sParam = "Isbn";
                            break;

                        } else if (oData.results[i].Title === title) {
                            vFlag = true;
                            sParam = sParam + "Title";
                            break;
                        } else if (oData.results[i].Author === author) {
                            vFlag = true;
                            sParam = sParam + "Author";
                            break;
                        }
                    }
                    if (vFlag) {
                        MessageBox.error("Record with the same " + sParam + " already exists. Please select a unique value");
                    } else {
                        this.commonFunc();
                    }
                }.bind(this),
                error: oError => reject(oError)
            });

            var or = this.getOwnerComponent().getRouter();
            or.navTo("first");
        }
    });  
  });  