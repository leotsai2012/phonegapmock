if(window.navigator == undefined) {
    window.navigator = { };
}
setTimeout(function () {
    var event = new Event('deviceready');
    document.dispatchEvent(event);
}, 2000);
if (window.cordova == undefined) {
    window.cordova = {
        exec: function (success, fail, className, methodName, paras) {
            if (success != null) {
                success();
            }
        }
    };
}
navigator.contacts = {
    find: function(contactFields, contactSuccess, contactError, contactFindOptions) {
        var contacts = [
            {
                displayName: "Mike",
                name: {
                    familyName: 'Capewell',
                    formatted:'Mike Capewell'
                },
                phoneNumbers: [
                    {
                        type: "string",
                        value: "0722829323123",
                        pref: false
                    }
                ]
            },
            {
                displayName: "Leo",
                name: {
                    familyName: 'Cai',
                    formatted:'Leo Cai'
                },
                phoneNumbers: [
                    {
                        type: "string",
                        value: "03837234343",
                        pref: false
                    },
                    {
                        type: "string",
                        value: "005543834",
                        pref: true
                    }
                ]
            }
        ];
        contactSuccess(contacts);
    }
};

var ContactFindOptions = function() {
    this.filter = "";
    this.multiple = false;
};