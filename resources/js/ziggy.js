    var Ziggy = {
        namedRoutes: {"login":{"uri":"login","methods":["GET","HEAD"],"domain":null},"generated::D0MlEaefJ6tSab26":{"uri":"login","methods":["POST"],"domain":null},"two-factor.login":{"uri":"two-factor-challenge","methods":["GET","HEAD"],"domain":null},"generated::QWyOTqKBD71G7u1q":{"uri":"two-factor-challenge","methods":["POST"],"domain":null},"logout":{"uri":"logout","methods":["POST"],"domain":null},"password.request":{"uri":"forgot-password","methods":["GET","HEAD"],"domain":null},"password.email":{"uri":"forgot-password","methods":["POST"],"domain":null},"password.reset":{"uri":"reset-password\/{token}","methods":["GET","HEAD"],"domain":null},"password.update":{"uri":"reset-password","methods":["POST"],"domain":null},"register":{"uri":"register","methods":["GET","HEAD"],"domain":null},"generated::zQkt0G6Y9bzyNyvz":{"uri":"register","methods":["POST"],"domain":null},"generated::1S6twKFpXhn7ZEIS":{"uri":"user\/profile-information","methods":["PUT"],"domain":null},"generated::ByNcgqMGkyszLmBJ":{"uri":"user\/password","methods":["PUT"],"domain":null},"password.confirm":{"uri":"user\/confirm-password","methods":["GET","HEAD"],"domain":null},"generated::pqRuZyJq1RcrdDu6":{"uri":"user\/confirm-password","methods":["POST"],"domain":null},"generated::uOTwsIvJFTfvdBMc":{"uri":"user\/two-factor-authentication","methods":["POST"],"domain":null},"generated::jPix6fWDVASFhOPy":{"uri":"user\/two-factor-authentication","methods":["DELETE"],"domain":null},"generated::P2O92BukTQ88beRs":{"uri":"user\/two-factor-qr-code","methods":["GET","HEAD"],"domain":null},"generated::rl6Uxu6UtEVTaYFB":{"uri":"user\/two-factor-recovery-codes","methods":["GET","HEAD"],"domain":null},"generated::776aNnCc9thiKns4":{"uri":"user\/two-factor-recovery-codes","methods":["POST"],"domain":null},"profile.show":{"uri":"user\/profile","methods":["GET","HEAD"],"domain":null},"other-browser-sessions.destroy":{"uri":"user\/other-browser-sessions","methods":["DELETE"],"domain":null},"current-user.destroy":{"uri":"user","methods":["DELETE"],"domain":null},"generated::eomwoU5DEYKrKgQ0":{"uri":"sanctum\/csrf-cookie","methods":["GET","HEAD"],"domain":null},"homepage":{"uri":"\/","methods":["GET","HEAD"],"domain":null},"post.show":{"uri":"post\/{post}","methods":["GET","HEAD"],"domain":null},"author":{"uri":"author\/{author}","methods":["GET","HEAD"],"domain":null},"dashboard":{"uri":"dashboard","methods":["GET","HEAD"],"domain":null},"posts.index":{"uri":"dashboard\/posts","methods":["GET","HEAD"],"domain":null},"posts.create":{"uri":"dashboard\/posts\/create","methods":["GET","HEAD"],"domain":null},"posts.store":{"uri":"dashboard\/posts","methods":["POST"],"domain":null},"generated::FZyhJSfMBMMmOCf2":{"uri":"api\/user","methods":["GET","HEAD"],"domain":null}},
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
