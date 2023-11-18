# ip-info
a sketch of a browser extension to quickly access vpnapi.io API for info on IPs

## description
This homebrew extension provides a popup window to input the IP address you want more info on (press enter to launch the request).
Requests use the vpnapi.io APIs to gather info on that IP, included if it is considered part of a VPN or TOR pool.
The extension then display some of the collected information in the very same popup.

A vpnapi.io API key is needed, which can be se in the extension's options window (in Chrome: puzzle icon > IPinfo menu > Options).

This is currently working in Chrome browser, but not in Firefox.
