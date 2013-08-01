if(window.navigator == undefined) {
    window.navigator = { };
}
navigator.contacts = {
    find: function(contactFields, contactSuccess, contactError, contactFindOptions) {
        var contacts = [
            {
                displayName: "Mike",
                name: {
                    familyName: 'Hein',
                    formatted:'Mike Hein'
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