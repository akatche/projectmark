    var Ziggy = {
        namedRoutes: {"login":{"uri":"login","methods":["GET","HEAD"],"domain":null},"generated::IAc6OwehmHRV64Fy":{"uri":"login","methods":["POST"],"domain":null},"two-factor.login":{"uri":"two-factor-challenge","methods":["GET","HEAD"],"domain":null},"generated::OouE5h2zv3AkEhrs":{"uri":"two-factor-challenge","methods":["POST"],"domain":null},"logout":{"uri":"logout","methods":["POST"],"domain":null},"password.request":{"uri":"forgot-password","methods":["GET","HEAD"],"domain":null},"password.email":{"uri":"forgot-password","methods":["POST"],"domain":null},"password.reset":{"uri":"reset-password\/{token}","methods":["GET","HEAD"],"domain":null},"password.update":{"uri":"reset-password","methods":["POST"],"domain":null},"register":{"uri":"register","methods":["GET","HEAD"],"domain":null},"generated::HpyYEZjKNubOroMo":{"uri":"register","methods":["POST"],"domain":null},"generated::uzwfbjdp0Jl578Cj":{"uri":"user\/profile-information","methods":["PUT"],"domain":null},"generated::9OW4f5OzOD2JeMWB":{"uri":"user\/password","methods":["PUT"],"domain":null},"password.confirm":{"uri":"user\/confirm-password","methods":["GET","HEAD"],"domain":null},"generated::kZvCcqbpK6T3yW4S":{"uri":"user\/confirm-password","methods":["POST"],"domain":null},"generated::9WxGP1uG3JtBCslK":{"uri":"user\/two-factor-authentication","methods":["POST"],"domain":null},"generated::jj0aAV0j4kXnDEMp":{"uri":"user\/two-factor-authentication","methods":["DELETE"],"domain":null},"generated::jwgObOi5q7NCHKrT":{"uri":"user\/two-factor-qr-code","methods":["GET","HEAD"],"domain":null},"generated::rK5m9xKYtjK4edwY":{"uri":"user\/two-factor-recovery-codes","methods":["GET","HEAD"],"domain":null},"generated::OGhtwdddEmkk4Rs7":{"uri":"user\/two-factor-recovery-codes","methods":["POST"],"domain":null},"profile.show":{"uri":"user\/profile","methods":["GET","HEAD"],"domain":null},"other-browser-sessions.destroy":{"uri":"user\/other-browser-sessions","methods":["DELETE"],"domain":null},"current-user.destroy":{"uri":"user","methods":["DELETE"],"domain":null},"generated::CqyiEQ3BaMj7RKdN":{"uri":"sanctum\/csrf-cookie","methods":["GET","HEAD"],"domain":null},"homepage":{"uri":"\/","methods":["GET","HEAD"],"domain":null},"post.show":{"uri":"post\/{post}","methods":["GET","HEAD"],"domain":null},"dashboard":{"uri":"dashboard","methods":["GET","HEAD"],"domain":null},"posts.index":{"uri":"dashboard\/posts","methods":["GET","HEAD"],"domain":null},"posts.create":{"uri":"dashboard\/posts\/create","methods":["GET","HEAD"],"domain":null},"posts.store":{"uri":"dashboard\/posts","methods":["POST"],"domain":null},"generated::CC8Bpdu2yHiFDT4Z":{"uri":"api\/user","methods":["GET","HEAD"],"domain":null}},
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
