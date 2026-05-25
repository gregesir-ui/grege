export const config = { runtime: "edge" };

// Advanced Hex Array
const _0x1a2b = [
  "\x68\x6f\x73\x74", "\x63\x6f\x6e\x6e\x65\x63\x74\x69\x6f\x6e", 
  "\x6b\x65\x65\x70\x2d\x61\x6c\x69\x76\x65", "\x70\x72\x6f\x78\x79\x2d\x61\x75\x74\x68\x65\x6e\x74\x69\x63\x61\x74\x65", 
  "\x70\x72\x6f\x78\x79\x2d\x61\x75\x74\x68\x6f\x72\x69\x7a\x61\x74\x69\x6f\x6e", "\x74\x65", 
  "\x74\x72\x61\x69\x6c\x65\x72", "\x74\x72\x61\x6e\x73\x66\x65\x72\x2d\x65\x6e\x63\x6f\x64\x69\x6e\x67", 
  "\x75\x70\x67\x72\x61\x64\x65", "\x66\x6f\x72\x77\x61\x72\x64\x65\x64", "\x78\x2d\x76\x65\x72\x63\x65\x6c\x2d", 
  "\x78\x2d\x72\x65\x61\x6c\x2d\x69\x70", "\x78\x2d\x66\x6f\x72\x77\x61\x72\x64\x65\x64\x2d\x66\x6f\x72", 
  "\x4d\x69\x73\x63\x6f\x6e\x66\x69\x67\x75\x72\x65\x64\x3a\x20\x54\x41\x52\x47\x45\x54\x5f\x44\x4f\x4d\x41\x49\x4e\x20\x69\x73\x20\x6e\x6f\x74\x20\x73\x65\x74", 
  "\x68\x61\x6c\x66", "\x6d\x61\x6e\x75\x61\x6c", "\x42\x61\x64\x20\x47\x61\x74\x65\x77\x61\x79\x3a\x20\x54\x75\x6e\x6e\x65\x6c\x20\x46\x61\x69\x6c\x65\x64"
];

const _0x55ec = (_0x4c31) => _0x1a2b[_0x4c31];

// High-speed static caching for global variables
const _0x39ef = (process.env.TARGET_DOMAIN || "").replace(/\/$/, "");
const _0x4bd2 = new Set([
  _0x55ec(0), _0x55ec(1), _0x55ec(2), _0x55ec(3), _0x55ec(4),
  _0x55ec(5), _0x55ec(6), _0x55ec(7), _0x55ec(8), _0x55ec(9),
  "x-forwarded-host", "x-forwarded-proto", "x-forwarded-port"
]);

export default async function handler(_0x22a1) {
  // Anti-Analysis Trap
  if (typeof _0x39ef !== "string") return;

  if (!_0x39ef) {
    return new Response(_0x55ec(13), { status: 500 });
  }

  try {
    const _0x5071 = _0x22a1.url.indexOf("/", 8);
    const _0x4dfc = _0x5071 === -1 ? _0x39ef + "/" : _0x39ef + _0x22a1.url.slice(_0x5071);

    const _0x100a = new Headers();
    let _0x3901 = null;

    // Control Flow Flattening Loop for Header Processing
    const _0x77ab = Array.from(_0x22a1.headers);
    let _0x2d1b = 0;
    
    while (_0x2d1b < _0x77ab.length) {
      const [_0x5cf1, _0x2f0e] = _0x77ab[_0x2d1b];
      let _0x1b4a = 0;

      // Internal State Machine
      while (_0x1b4a !== 5) {
        switch (_0x1b4a) {
          case 0:
            if (_0x4bd2.has(_0x5cf1) || _0x5cf1.startsWith(_0x55ec(10))) {
              _0x1b4a = 5; // skip
            } else {
              _0x1b4a = 1;
            }
            break;
          case 1:
            if (_0x5cf1 === _0x55ec(11)) {
              _0x3901 = _0x2f0e;
              _0x1b4a = 5;
            } else {
              _0x1b4a = 2;
            }
            break;
          case 2:
            if (_0x5cf1 === _0x55ec(12)) {
              if (!_0x3901) _0x3901 = _0x2f0e;
              _0x1b4a = 5;
            } else {
              _0x1b4a = 3;
            }
            break;
          case 3:
            _0x100a.set(_0x5cf1, _0x2f0e);
            _0x1b4a = 5;
            break;
        }
      }
      _0x2d1b++;
    }

    if (_0x3901) {
      _0x100a.set(_0x55ec(12), _0x3901);
    }

    const _0x1fc3 = _0x22a1.method;
    const _0x23a1 = _0x1fc3 !== "GET" && _0x1fc3 !== "HEAD";

    return await fetch(_0x4dfc, {
      method: _0x1fc3,
      headers: _0x100a,
      body: _0x23a1 ? _0x22a1.body : undefined,
      duplex: _0x55ec(14),
      redirect: _0x55ec(15)
    });

  } catch (_0x3da4) {
    // Dynamic obfuscated log string assembly
    const _0x5f11 = [114, 101, 108, 97, 121, 32, 101, 114, 114, 111, 112].map(c => String.fromCharCode(c)).join("");
    console.error(_0x5f11, _0x3da4);
    return new Response(_0x55ec(16), { status: 502 });
  }
}
