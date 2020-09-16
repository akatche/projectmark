    var Ziggy = {
        namedRoutes: {"login":{"uri":"login","methods":["GET","HEAD"],"domain":null},"generated::7NpjUoDcADD3kLUw":{"uri":"login","methods":["POST"],"domain":null},"two-factor.login":{"uri":"two-factor-challenge","methods":["GET","HEAD"],"domain":null},"generated::qe6pBSdCA6iZgLWN":{"uri":"two-factor-challenge","methods":["POST"],"domain":null},"logout":{"uri":"logout","methods":["POST"],"domain":null},"password.request":{"uri":"forgot-password","methods":["GET","HEAD"],"domain":null},"password.email":{"uri":"forgot-password","methods":["POST"],"domain":null},"password.reset":{"uri":"reset-password\/{token}","methods":["GET","HEAD"],"domain":null},"password.update":{"uri":"reset-password","methods":["POST"],"domain":null},"register":{"uri":"register","methods":["GET","HEAD"],"domain":null},"generated::XQNxo5QI5KiQAyMX":{"uri":"register","methods":["POST"],"domain":null},"generated::ThdAquTQpTErb41M":{"uri":"user\/profile-information","methods":["PUT"],"domain":null},"generated::iXVqHkTELdqI96sH":{"uri":"user\/password","methods":["PUT"],"domain":null},"password.confirm":{"uri":"user\/confirm-password","methods":["GET","HEAD"],"domain":null},"generated::i9LOuPw8nfJ0nVti":{"uri":"user\/confirm-password","methods":["POST"],"domain":null},"password.confirmation":{"uri":"user\/confirmed-password-status","methods":["GET","HEAD"],"domain":null},"generated::uBoYqpB7vSdthhk5":{"uri":"user\/two-factor-authentication","methods":["POST"],"domain":null},"generated::QVPq2Z4xus9tTQhO":{"uri":"user\/two-factor-authentication","methods":["DELETE"],"domain":null},"generated::2VyuQ7G16uh0ZBJp":{"uri":"user\/two-factor-qr-code","methods":["GET","HEAD"],"domain":null},"generated::wDY7kXexqdsT4XBi":{"uri":"user\/two-factor-recovery-codes","methods":["GET","HEAD"],"domain":null},"generated::O52qAQxHhouqqEzF":{"uri":"user\/two-factor-recovery-codes","methods":["POST"],"domain":null},"profile.show":{"uri":"user\/profile","methods":["GET","HEAD"],"domain":null},"other-browser-sessions.destroy":{"uri":"user\/other-browser-sessions","methods":["DELETE"],"domain":null},"current-user.destroy":{"uri":"user","methods":["DELETE"],"domain":null},"current-user-photo.destroy":{"uri":"user\/profile-photo","methods":["DELETE"],"domain":null},"generated::ydIgSfmgG8RoXhQF":{"uri":"sanctum\/csrf-cookie","methods":["GET","HEAD"],"domain":null},"homepage":{"uri":"\/","methods":["GET","HEAD"],"domain":null},"post.show":{"uri":"post\/{post}","methods":["GET","HEAD"],"domain":null},"author":{"uri":"author\/{author}","methods":["GET","HEAD"],"domain":null},"dashboard":{"uri":"dashboard","methods":["GET","HEAD"],"domain":null},"posts.index":{"uri":"dashboard\/posts","methods":["GET","HEAD"],"domain":null},"posts.create":{"uri":"dashboard\/posts\/create","methods":["GET","HEAD"],"domain":null},"posts.store":{"uri":"dashboard\/posts","methods":["POST"],"domain":null},"generated::otm28SJZXQUEO74P":{"uri":"api\/user","methods":["GET","HEAD"],"domain":null}},
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
