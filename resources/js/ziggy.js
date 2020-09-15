    var Ziggy = {
        namedRoutes: {"login":{"uri":"login","methods":["GET","HEAD"],"domain":null},"generated::49Ll8P8dwlx9IMJC":{"uri":"login","methods":["POST"],"domain":null},"two-factor.login":{"uri":"two-factor-challenge","methods":["GET","HEAD"],"domain":null},"generated::vqGMtO0mPnWR2I4A":{"uri":"two-factor-challenge","methods":["POST"],"domain":null},"logout":{"uri":"logout","methods":["POST"],"domain":null},"password.request":{"uri":"forgot-password","methods":["GET","HEAD"],"domain":null},"password.email":{"uri":"forgot-password","methods":["POST"],"domain":null},"password.reset":{"uri":"reset-password\/{token}","methods":["GET","HEAD"],"domain":null},"password.update":{"uri":"reset-password","methods":["POST"],"domain":null},"register":{"uri":"register","methods":["GET","HEAD"],"domain":null},"generated::sDTsuLtILNDG1lej":{"uri":"register","methods":["POST"],"domain":null},"generated::8IAOaPxBIlEqtpgK":{"uri":"user\/profile-information","methods":["PUT"],"domain":null},"generated::ToeAzKo5PqlpL000":{"uri":"user\/password","methods":["PUT"],"domain":null},"password.confirm":{"uri":"user\/confirm-password","methods":["GET","HEAD"],"domain":null},"generated::Wx1BBCIOLF1YoAoG":{"uri":"user\/confirm-password","methods":["POST"],"domain":null},"generated::Fic1hKFOAQIDs24S":{"uri":"user\/two-factor-authentication","methods":["POST"],"domain":null},"generated::IbpS6Fv62K4ZAmQy":{"uri":"user\/two-factor-authentication","methods":["DELETE"],"domain":null},"generated::hm8XXFV2WnvlQqTj":{"uri":"user\/two-factor-qr-code","methods":["GET","HEAD"],"domain":null},"generated::5ft5cUIsCdtDKaMb":{"uri":"user\/two-factor-recovery-codes","methods":["GET","HEAD"],"domain":null},"generated::9zB7Rd0JzonXC0Me":{"uri":"user\/two-factor-recovery-codes","methods":["POST"],"domain":null},"profile.show":{"uri":"user\/profile","methods":["GET","HEAD"],"domain":null},"other-browser-sessions.destroy":{"uri":"user\/other-browser-sessions","methods":["DELETE"],"domain":null},"current-user.destroy":{"uri":"user","methods":["DELETE"],"domain":null},"generated::Li0NV7kHrKakDOlw":{"uri":"sanctum\/csrf-cookie","methods":["GET","HEAD"],"domain":null},"homepage":{"uri":"\/","methods":["GET","HEAD"],"domain":null},"post.show":{"uri":"post\/{post}","methods":["GET","HEAD"],"domain":null},"dashboard":{"uri":"dashboard","methods":["GET","HEAD"],"domain":null},"posts.index":{"uri":"dashboard\/posts","methods":["GET","HEAD"],"domain":null},"posts.create":{"uri":"dashboard\/posts\/create","methods":["GET","HEAD"],"domain":null},"posts.store":{"uri":"dashboard\/posts","methods":["POST"],"domain":null},"generated::ho6srERVgOYvzwJH":{"uri":"api\/user","methods":["GET","HEAD"],"domain":null}},
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
