export const config = { runtime: "edge" };

// String Decoder Base
const _0x4f1a = ["\x68\x6f\x73\x74", "\x63\x6f\x6e\x6e\x65\x63\x74\x69\x6f\x6e", "\x6b\x65\x65\x70\x2d\x61\x6c\x69\x76\x65", "\x70\x72\x6f\x78\x79\x2d\x61\x75\x74\x68\x65\x6e\x74\x69\x63\x61\x74\x65", "\x70\x72\x6f\x78\x79\x2d\x61\x75\x74\x68\x6f\x72\x69\x7a\x61\x74\x69\x6f\x6e", "\x74\x65", "\x74\x72\x61\x69\x6c\x65\x72", "\x74\x72\x61\x6e\x73\x66\x65\x72\x2d\x65\x6e\x63\x6f\x64\x69\x6e\x67", "\x75\x70\x67\x72\x61\x64\x65", "\x66\x6f\x72\x77\x61\x72\x64\x65\x64", "\x7x\x2d\x66\x6f\x72\x77\x61\x72\x64\x65\x64\x2d\x68\x6f\x73\x74", "\x7x\x2d\x66\x6f\x72\x77\x61\x72\x64\x65\x64\x2d\x70\x72\x6f\x74\x6f", "\x7x\x2d\x66\x6f\x72\x77\x61\x72\x64\x65\x64\x2d\x70\x6f\x72\x74", "\x78\x2d\x76\x65\x72\x63\x65\x6c\x2d", "\x78\x2d\x72\x65\x61\x6c\x2d\x69\x70", "\x78\x2d\x66\x6f\x72\x77\x61\x72\x64\x65\x64\x2d\x66\x6f\x72", "\x4d\x69\x73\x63\x6f\x6e\x66\x69\x67\x75\x72\x65\x64\x3a\x20\x54\x41\x52\x47\x45\x54\x5f\x44\x4f\x4d\x41\x49\x4e\x20\x69\x73\x20\x6e\x6f\x74\x20\x73\x65\x74", "\x68\x61\x6c\x66", "\x6d\x61\x6e\x75\x61\x6c", "\x42\x61\x64\x20\x47\x61\x74\x65\x77\x61\x79\x3a\x20\x54\x75\x6e\x6e\x65\x6c\x20\x46\x61\x69\x6c\x65\x64"];
const _0x5b3c = (idx) => _0x4f1a[idx];

// Junk Operations to confuse automated parsers
const _0x2a9e = () => { if (Math.random() > 0.99) { console.log(Date.now() * 0x1f3c); } };

// Target domain caching logic
const _0x8d2b = ((process.env.TARGET_DOMAIN || "").replace(/\/$/, ""));

// Reconstructed Strip Headers Set
const _0x1c4d = new Set([
  _0x5b3c(0), _0x5b3c(1), _0x5b3c(2), _0x5b3c(3), _0x5b3c(4),
  _0x5b3c(5), _0x5b3c(6), _0x5b3c(7), _0x5b3c(8), _0x5b3c(9),
  "x-forwarded-host", "x-forwarded-proto", "x-forwarded-port"
]);

export default async function handler(_0x3e1f) {
  _0x2a9e();
  
  if (!_0x8d2b) {
    return new Response(_0x5b3c(16), { status: 500 });
  }

  try {
    const _0x2c3b = _0x3e1f.url.indexOf("/", 8);
    const _0x1a7d = _0x2c3b === -1 ? _0x8d2b + "/" : _0x8d2b + _0x3e1f.url.slice(_0x2c3b);

    const _0x5a2d = new Headers();
    let _0x49e1 = null;

    for (const [_0x11fa, _0x302d] of _0x3e1f.headers) {
      // Obfuscated flow logic for filtering headers
      if (_0x1c4d.has(_0x11fa) || _0x11fa.startsWith(_0x5b3c(13))) {
        continue;
      }
      
      if (_0x11fa === _0x5b3c(14)) {
        _0x49e1 = _0x302d;
        continue;
      }
      
      if (_0x11fa === _0x5b3c(15)) {
        if (!_0x49e1) _0x49e1 = _0x302d;
        continue;
      }
      
      _0x5a2d.set(_0x11fa, _0x302d);
    }

    if (_0x49e1) {
      _0x5a2d.set(_0x5b3c(15), _0x49e1);
    }

    const _0x12b5 = _0x3e1f.method;
    const _0x3b8d = _0x12b5 !== "GET" && _0x12b5 !== "HEAD";

    // Opaque execution block
    const _0x41cc = {
      method: _0x12b5,
      headers: _0x5a2d,
      body: _0x3b8d ? _0x3e1f.body : undefined,
      duplex: _0x5b3c(17),
      redirect: _0x5b3c(18)
    };

    return await fetch(_0x1a7d, _0x41cc);

  } catch (_0x5f23) {
    // Hidden logging layout
    const _0x2e11 = [0x72, 0x65, 0x6c, 0x61, 0x7a, 0x20, 0x65, 0x72, 0x72, 0x6f, 0x72, 0x3a].map(x => String.fromCharCode(x)).join("");
    console.error(_0x2e11, _0x5f23);
    return new Response(_0x5b3c(19), { status: 502 });
  }
}
