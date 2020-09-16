    var Ziggy = {
        namedRoutes: {"login":{"uri":"login","methods":["GET","HEAD"],"domain":null},"generated::3OBMaVKidx5cgjxp":{"uri":"login","methods":["POST"],"domain":null},"two-factor.login":{"uri":"two-factor-challenge","methods":["GET","HEAD"],"domain":null},"generated::vS23kXwdt6VYlDsT":{"uri":"two-factor-challenge","methods":["POST"],"domain":null},"logout":{"uri":"logout","methods":["POST"],"domain":null},"password.request":{"uri":"forgot-password","methods":["GET","HEAD"],"domain":null},"password.email":{"uri":"forgot-password","methods":["POST"],"domain":null},"password.reset":{"uri":"reset-password\/{token}","methods":["GET","HEAD"],"domain":null},"password.update":{"uri":"reset-password","methods":["POST"],"domain":null},"register":{"uri":"register","methods":["GET","HEAD"],"domain":null},"generated::RJe3Tgte6uCag2ho":{"uri":"register","methods":["POST"],"domain":null},"generated::LYA0CdCdE96lxPlF":{"uri":"user\/profile-information","methods":["PUT"],"domain":null},"generated::B7Thn0oA25wSHc8C":{"uri":"user\/password","methods":["PUT"],"domain":null},"password.confirm":{"uri":"user\/confirm-password","methods":["GET","HEAD"],"domain":null},"generated::cVVuEaTVI3N3NwtA":{"uri":"user\/confirm-password","methods":["POST"],"domain":null},"password.confirmation":{"uri":"user\/confirmed-password-status","methods":["GET","HEAD"],"domain":null},"generated::formLobjt0rOcuzY":{"uri":"user\/two-factor-authentication","methods":["POST"],"domain":null},"generated::8oQRl3T0XIqnRsRA":{"uri":"user\/two-factor-authentication","methods":["DELETE"],"domain":null},"generated::Gf1HfuLJ7HMqjfXN":{"uri":"user\/two-factor-qr-code","methods":["GET","HEAD"],"domain":null},"generated::dAkv3unepuZfIBd7":{"uri":"user\/two-factor-recovery-codes","methods":["GET","HEAD"],"domain":null},"generated::dkpdaMOs3WEUFPza":{"uri":"user\/two-factor-recovery-codes","methods":["POST"],"domain":null},"profile.show":{"uri":"user\/profile","methods":["GET","HEAD"],"domain":null},"other-browser-sessions.destroy":{"uri":"user\/other-browser-sessions","methods":["DELETE"],"domain":null},"current-user.destroy":{"uri":"user","methods":["DELETE"],"domain":null},"current-user-photo.destroy":{"uri":"user\/profile-photo","methods":["DELETE"],"domain":null},"generated::FqtnlCOMVNj39boL":{"uri":"sanctum\/csrf-cookie","methods":["GET","HEAD"],"domain":null},"homepage":{"uri":"\/","methods":["GET","HEAD"],"domain":null},"post.show":{"uri":"post\/{post}","methods":["GET","HEAD"],"domain":null},"author":{"uri":"author\/{author}","methods":["GET","HEAD"],"domain":null},"dashboard":{"uri":"dashboard","methods":["GET","HEAD"],"domain":null},"posts.index":{"uri":"dashboard\/posts","methods":["GET","HEAD"],"domain":null},"posts.create":{"uri":"dashboard\/posts\/create","methods":["GET","HEAD"],"domain":null},"posts.store":{"uri":"dashboard\/posts","methods":["POST"],"domain":null},"generated::NDhGntptAp29S2p7":{"uri":"api\/user","methods":["GET","HEAD"],"domain":null}},
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
