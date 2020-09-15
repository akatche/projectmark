    var Ziggy = {
        namedRoutes: {"login":{"uri":"login","methods":["GET","HEAD"],"domain":null},"generated::zvebjRrQ1wi5iY22":{"uri":"login","methods":["POST"],"domain":null},"two-factor.login":{"uri":"two-factor-challenge","methods":["GET","HEAD"],"domain":null},"generated::SgA7TqW28OGvonaR":{"uri":"two-factor-challenge","methods":["POST"],"domain":null},"logout":{"uri":"logout","methods":["POST"],"domain":null},"password.request":{"uri":"forgot-password","methods":["GET","HEAD"],"domain":null},"password.email":{"uri":"forgot-password","methods":["POST"],"domain":null},"password.reset":{"uri":"reset-password\/{token}","methods":["GET","HEAD"],"domain":null},"password.update":{"uri":"reset-password","methods":["POST"],"domain":null},"register":{"uri":"register","methods":["GET","HEAD"],"domain":null},"generated::IOKXLWztelNWCJz4":{"uri":"register","methods":["POST"],"domain":null},"generated::jX6gG2DJRCGie3hN":{"uri":"user\/profile-information","methods":["PUT"],"domain":null},"generated::xco9EI4S5kZzLcjl":{"uri":"user\/password","methods":["PUT"],"domain":null},"password.confirm":{"uri":"user\/confirm-password","methods":["GET","HEAD"],"domain":null},"generated::5P1QAXKBHhGvBcNb":{"uri":"user\/confirm-password","methods":["POST"],"domain":null},"generated::jL9lqYObo4WpGsRJ":{"uri":"user\/two-factor-authentication","methods":["POST"],"domain":null},"generated::WpEVnBjV5knOSCP7":{"uri":"user\/two-factor-authentication","methods":["DELETE"],"domain":null},"generated::pUIrj6H468CjgKyc":{"uri":"user\/two-factor-qr-code","methods":["GET","HEAD"],"domain":null},"generated::ltUYX4wrxRSnUtCi":{"uri":"user\/two-factor-recovery-codes","methods":["GET","HEAD"],"domain":null},"generated::NcneJVnjcnSO6Q1j":{"uri":"user\/two-factor-recovery-codes","methods":["POST"],"domain":null},"profile.show":{"uri":"user\/profile","methods":["GET","HEAD"],"domain":null},"other-browser-sessions.destroy":{"uri":"user\/other-browser-sessions","methods":["DELETE"],"domain":null},"current-user.destroy":{"uri":"user","methods":["DELETE"],"domain":null},"generated::bDCPRXtkOfrhQjqb":{"uri":"sanctum\/csrf-cookie","methods":["GET","HEAD"],"domain":null},"generated::Vq3aISgOxxf9aOJI":{"uri":"\/","methods":["GET","HEAD"],"domain":null},"dashboard":{"uri":"dashboard","methods":["GET","HEAD"],"domain":null},"posts.index":{"uri":"dashboard\/posts","methods":["GET","HEAD"],"domain":null},"posts.create":{"uri":"dashboard\/posts\/create","methods":["GET","HEAD"],"domain":null},"posts.store":{"uri":"dashboard\/posts","methods":["POST"],"domain":null},"posts.show":{"uri":"dashboard\/posts\/{post}","methods":["GET","HEAD"],"domain":null},"generated::WrqPsZNHXVxGLkxV":{"uri":"api\/user","methods":["GET","HEAD"],"domain":null}},
        baseUrl: 'http://projectmark.test/',
        baseProtocol: 'http',
        baseDomain: 'projectmark.test',
        basePort: false,
        defaultParameters: []
    };

    if (typeof window.Ziggy !== 'undefined') {
        for (var name in window.Ziggy.namedRoutes) {
            Ziggy.namedRoutes[name] = window.Ziggy.namedRoutes[name];
        }
    }

    export {
        Ziggy
    }
