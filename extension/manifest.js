{
    "name": "IPinfo",
    "description" : "an extension that uses the vpnapi.io to collect data on IP addresses",
    "version": "0.2",
    "manifest_version": 2,
    "browser_action": {
        "default_icon": "light_icon.png",
        "default_title": "IPinfo",
        "default_popup": "popup.html"
    },

    "permissions": [
        "https://vpnapi.io/",
        "storage"
    ],

    "options_ui": {
        "page": "options.html"
    }
}
