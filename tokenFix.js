function fun18_token(f18p0, f18p1, f18p2, f18p3) {
    const v0fun18_token = (~(59259 & f18p0) & f18p0) | (~(f18p0 & 59259) & 59259);
    const v1fun18_token = (~(f18p1 & 56097) & f18p1) | (~(f18p1 & 56097) & 56097);
    const v2fun18_token = ((1664525 * (43315 + f18p2)) + 1013904223) % 4294967296;
    const v3fun18_token = (((8 << ((f18p3 >> 24) & 255)) + (32 << ((f18p3 >> 32) & 255))) + (24 << ((f18p3 >> 8) & 255))) + (16 << ((f18p3 >> 16) & 255));
    const v4fun18_token = fun19_token(v0fun18_token, v1fun18_token, v2fun18_token, v3fun18_token, v0fun18_token, v1fun18_token);
    const v5fun18_token = fun22_token(v2fun18_token, v3fun18_token, v0fun18_token, v1fun18_token, v2fun18_token);
    const v6fun18_token = fun20_token(v3fun18_token, v0fun18_token, v1fun18_token, v2fun18_token, v3fun18_token, v0fun18_token);
    const v7fun18_token = (1013904223 + (1664525 * ((v4fun18_token ^ v5fun18_token) + 26191))) % 4294967296;
    const v8fun18_token = (v7fun18_token | 38630) & ~(38630 & v7fun18_token);
    return v8fun18_token;
};

function fun13_token(f13p0, f13p1, f13p2, f13p3, f13p4, f13p5) {
    const v0fun13_token = ((214013 * (39488 + f13p0)) + 2531011) % 4294967296;
    const v1fun13_token = (~(49976 & f13p1) & f13p1) | (~(f13p1 & 49976) & 49976);
    const v2fun13_token = (~(f13p2 & 35856) & f13p2) | (~(f13p2 & 35856) & 35856);
    const v3fun13_token = 52219 ^ f13p3;
    const v4fun13_token = (f13p4 + 3575) % 65503;
    const v5fun13_token = (~(6932 & f13p5) & f13p5) | (~(f13p5 & 6932) & 6932);
    const v6fun13_token = fun15_token(v0fun13_token, v1fun13_token, v2fun13_token, v3fun13_token, v4fun13_token);
    const v7fun13_token = fun14_token(v5fun13_token, v0fun13_token, v1fun13_token, v2fun13_token, v3fun13_token, v4fun13_token);
    const v8fun13_token = fun35_token(v5fun13_token, v0fun13_token, v1fun13_token, v2fun13_token, v3fun13_token, v4fun13_token);
    const v9fun13_token = (1013904223 + (1664525 * ((v6fun13_token ^ v7fun13_token) + 60709))) % 4294967296;
    const v10fun13_token = (~(v9fun13_token & 42138) & v9fun13_token) | (~(v9fun13_token & 42138) & 42138);
    return v10fun13_token;
};

function fun16_token(f16p0, f16p1, f16p2, f16p3, f16p4) {
    const v0fun16_token = (((f16p0 + 14772) * 2147483629) + 2147483587) % 2147483647;
    const v1fun16_token = 63080 ^ f16p1;
    const v2fun16_token = ((22695477 * (f16p2 + 60304)) + 1) % 4294967296;
    const v3fun16_token = (~(5467 & f16p3) & 5467) | (~(5467 & f16p3) & f16p3);
    const v4fun16_token = (f16p4 | 40165) & ~(40165 & f16p4);
    const v5fun16_token = fun17_token(v0fun16_token, v1fun16_token, v2fun16_token, v3fun16_token);
    const v6fun16_token = fun22_token(v4fun16_token, v0fun16_token, v1fun16_token, v2fun16_token, v3fun16_token);
    const v7fun16_token = fun33_token(v4fun16_token, v0fun16_token, v1fun16_token, v2fun16_token, v3fun16_token, v4fun16_token);
    const v8fun16_token = (((16 << (((v5fun16_token ^ v6fun16_token) >> 24) & 255)) + (8 << (((v5fun16_token ^ v6fun16_token) >> 16) & 255))) + (24 << (((v5fun16_token ^ v6fun16_token) >> 32) & 255))) + (32 << (((v5fun16_token ^ v6fun16_token) >> 8) & 255));
    const v9fun16_token = ((1664525 * (28765 + (v8fun16_token ^ v7fun16_token))) + 1013904223) % 4294967296;
    return v9fun16_token;
};

function fun11_token(f11p0, f11p1) {
    const v0fun11_token = (~(41406 & f11p0) & f11p0) | (~(f11p0 & 41406) & 41406);
    const v1fun11_token = (((f11p1 + 17922) * 1103515245) + 12345) % 2147483648;
    const v2fun11_token = fun25_token(v0fun11_token, v1fun11_token, v0fun11_token);
    const v3fun11_token = fun12_token(v1fun11_token, v0fun11_token, v1fun11_token, v0fun11_token);
    const v4fun11_token = fun31_token(v1fun11_token, v0fun11_token, v1fun11_token, v0fun11_token, v1fun11_token);
    const v5fun11_token = v2fun11_token ^ 18573;
    const v6fun11_token = ((2147483629 * (42346 + (v5fun11_token ^ v4fun11_token))) + 2147483587) % 2147483647;
    return v6fun11_token;
};

function fun9_token(f9p0, f9p1, f9p2, f9p3, f9p4) {
    const v0fun9_token = (12345 + ((23101 + f9p0) * 1103515245)) % 2147483648;
    const v1fun9_token = 58614 ^ f9p1;
    const v2fun9_token = (((f9p2 + 45267) * 214013) + 2531011) % 4294967296;
    const v3fun9_token = f9p3 ^ 40810;
    const v4fun9_token = (((24 << ((f9p4 >> 24) & 255)) + (8 << ((f9p4 >> 32) & 255))) + (32 << ((f9p4 >> 8) & 255))) + (16 << ((f9p4 >> 16) & 255));
    const v5fun9_token = fun23_token(v0fun9_token, v1fun9_token);
    const v6fun9_token = fun18_token(v2fun9_token, v3fun9_token, v4fun9_token, v0fun9_token);
    const v7fun9_token = fun10_token(v1fun9_token, v2fun9_token, v3fun9_token, v4fun9_token);
    const v8fun9_token = (((24 << (((v5fun9_token ^ v6fun9_token) >> 24) & 255)) + (32 << (((v5fun9_token ^ v6fun9_token) >> 16) & 255))) + (8 << (((v5fun9_token ^ v6fun9_token) >> 32) & 255))) + (16 << (((v5fun9_token ^ v6fun9_token) >> 8) & 255));
    const v9fun9_token = (~(13644 & v8fun9_token) & v8fun9_token) | (~(v8fun9_token & 13644) & 13644);
    return v9fun9_token;
};

function fun36_token(f36p0, f36p1, f36p2, f36p3) {
    const v0fun36_token = 11762 ^ f36p0;
    const v1fun36_token = (~(f36p1 & 19425) & 19425) | (~(19425 & f36p1) & f36p1);
    const v2fun36_token = (((32 << ((f36p2 >> 16) & 255)) + (8 << ((f36p2 >> 32) & 255))) + (24 << ((f36p2 >> 24) & 255))) + (16 << ((f36p2 >> 8) & 255));
    const v3fun36_token = (~(259 & f36p3) & 259) | (~(259 & f36p3) & f36p3);
    const v4fun36_token = (((32 << (((v0fun36_token ^ v1fun36_token) >> 32) & 255)) + (8 << (((v0fun36_token ^ v1fun36_token) >> 8) & 255))) + (24 << (((v0fun36_token ^ v1fun36_token) >> 24) & 255))) + (16 << (((v0fun36_token ^ v1fun36_token) >> 16) & 255));
    const v5fun36_token = (((17757 + (v4fun36_token ^ v2fun36_token)) * 1664525) + 1013904223) % 4294967296;
    const v6fun36_token = ((1664525 * (55182 + (v5fun36_token ^ v3fun36_token))) + 1013904223) % 4294967296;
    return v6fun36_token;
};

function fun31_token(f31p0, f31p1, f31p2, f31p3, f31p4) {
    const v0fun31_token = (((32 << ((f31p0 >> 24) & 255)) + (16 << ((f31p0 >> 8) & 255))) + (24 << ((f31p0 >> 16) & 255))) + (8 << ((f31p0 >> 32) & 255));
    const v1fun31_token = (f31p1 + 39144) % 65406;
    const v2fun31_token = f31p2 ^ 34575;
    const v3fun31_token = (~(37841 & f31p3) & f31p3) | (~(f31p3 & 37841) & 37841);
    const v4fun31_token = (25975 | f31p4) & ~(25975 & f31p4);
    const v5fun31_token = fun36_token(v0fun31_token, v1fun31_token, v2fun31_token, v3fun31_token);
    const v6fun31_token = fun32_token(v4fun31_token, v0fun31_token, v1fun31_token, v2fun31_token, v3fun31_token);
    const v7fun31_token = fun35_token(v4fun31_token, v0fun31_token, v1fun31_token, v2fun31_token, v3fun31_token, v4fun31_token);
    const v8fun31_token = (19326 | v5fun31_token) & ~(19326 & v5fun31_token);
    const v9fun31_token = 36297 ^ v8fun31_token;
    return v9fun31_token;
};

function fun26_token(f26p0, f26p1, f26p2, f26p3, f26p4) {
    const v0fun26_token = (((24 << ((f26p0 >> 24) & 255)) + (32 << ((f26p0 >> 16) & 255))) + (16 << ((f26p0 >> 8) & 255))) + (8 << ((f26p0 >> 32) & 255));
    const v1fun26_token = (12345 + (1103515245 * (f26p1 + 3024))) % 2147483648;
    const v2fun26_token = (((8 << ((f26p2 >> 8) & 255)) + (32 << ((f26p2 >> 32) & 255))) + (24 << ((f26p2 >> 16) & 255))) + (16 << ((f26p2 >> 24) & 255));
    const v3fun26_token = (1 + ((f26p3 + 41324) * 22695477)) % 4294967296;
    const v4fun26_token = (19607 | f26p4) & ~(f26p4 & 19607);
    const v5fun26_token = fun27_token(v0fun26_token, v1fun26_token);
    const v6fun26_token = fun32_token(v2fun26_token, v3fun26_token, v4fun26_token, v0fun26_token, v1fun26_token);
    const v7fun26_token = fun30_token(v2fun26_token, v3fun26_token, v4fun26_token, v0fun26_token, v1fun26_token, v2fun26_token);
    const v8fun26_token = (~(49323 & v5fun26_token) & 49323) | (~(49323 & v5fun26_token) & v5fun26_token);
    const v9fun26_token = ~(v8fun26_token & 46567) & (46567 | v8fun26_token);
    return v9fun26_token;
};

function fun17_token(f17p0, f17p1, f17p2, f17p3) {
    const v0fun17_token = (57611 | f17p0) & ~(f17p0 & 57611);
    const v1fun17_token = ((1664525 * (f17p1 + 56889)) + 1013904223) % 4294967296;
    const v2fun17_token = f17p2 ^ 62842;
    const v3fun17_token = (~(f17p3 & 1179) & f17p3) | (~(f17p3 & 1179) & 1179);
    const v4fun17_token = fun36_token(v0fun17_token, v1fun17_token, v2fun17_token, v3fun17_token);
    const v5fun17_token = fun21_token(v0fun17_token, v1fun17_token, v2fun17_token, v3fun17_token);
    const v6fun17_token = fun18_token(v0fun17_token, v1fun17_token, v2fun17_token, v3fun17_token);
    const v7fun17_token = (((24 << (((v4fun17_token ^ v5fun17_token) >> 24) & 255)) + (8 << (((v4fun17_token ^ v5fun17_token) >> 16) & 255))) + (16 << (((v4fun17_token ^ v5fun17_token) >> 32) & 255))) + (32 << (((v4fun17_token ^ v5fun17_token) >> 8) & 255));
    const v8fun17_token = ~(63304 & v7fun17_token) & (v7fun17_token | 63304);
    return v8fun17_token;
};

function fun0_token(f0p0, f0p1, f0p2, f0p3, f0p4, f0p5) {
    const v0fun0_token = (1013904223 + ((f0p0 + 28824) * 1664525)) % 4294967296;
    const v1fun0_token = (1013904223 + (1664525 * (13210 + f0p1))) % 4294967296;
    const v2fun0_token = (~(32165 & f0p2) & 32165) | (~(32165 & f0p2) & f0p2);
    const v3fun0_token = (((24 << ((f0p3 >> 24) & 255)) + (16 << ((f0p3 >> 8) & 255))) + (8 << ((f0p3 >> 16) & 255))) + (32 << ((f0p3 >> 32) & 255));
    const v4fun0_token = (1 + ((39199 + f0p4) * 22695477)) % 4294967296;
    const v5fun0_token = 33037 ^ f0p5;
    const v6fun0_token = fun1_token(v0fun0_token, v1fun0_token, v2fun0_token);
    const v7fun0_token = fun21_token(v3fun0_token, v4fun0_token, v5fun0_token, v0fun0_token);
    const v8fun0_token = fun7_token(v1fun0_token, v2fun0_token, v3fun0_token, v4fun0_token);
    const v9fun0_token = v6fun0_token ^ 2959;
    const v10fun0_token = ((1103515245 * (34159 + (v9fun0_token ^ v8fun0_token))) + 12345) % 2147483648;
    return v10fun0_token;
};

function fun19_token(f19p0, f19p1, f19p2, f19p3, f19p4, f19p5) {
    const v0fun19_token = 10715 ^ f19p0;
    const v1fun19_token = (((24 << ((f19p1 >> 16) & 255)) + (16 << ((f19p1 >> 32) & 255))) + (32 << ((f19p1 >> 8) & 255))) + (8 << ((f19p1 >> 24) & 255));
    const v2fun19_token = (((8 << ((f19p2 >> 16) & 255)) + (32 << ((f19p2 >> 24) & 255))) + (16 << ((f19p2 >> 8) & 255))) + (24 << ((f19p2 >> 32) & 255));
    const v3fun19_token = f19p3 ^ 40782;
    const v4fun19_token = f19p4 ^ 41301;
    const v5fun19_token = ~(f19p5 & 12091) & (12091 | f19p5);
    const v6fun19_token = fun20_token(v0fun19_token, v1fun19_token, v2fun19_token, v3fun19_token, v4fun19_token, v5fun19_token);
    const v7fun19_token = fun20_token(v0fun19_token, v1fun19_token, v2fun19_token, v3fun19_token, v4fun19_token, v5fun19_token);
    const v8fun19_token = fun29_token(v0fun19_token, v1fun19_token, v2fun19_token, v3fun19_token, v4fun19_token);
    const v9fun19_token = (v6fun19_token | 3006) & ~(v6fun19_token & 3006);
    const v10fun19_token = ~(24460 & v9fun19_token) & (v9fun19_token | 24460);
    return v10fun19_token;
};

function fun7_token(f7p0, f7p1, f7p2, f7p3) {
    const v0fun7_token = ~(33107 & f7p0) & (33107 | f7p0);
    const v1fun7_token = (((24 << ((f7p1 >> 32) & 255)) + (32 << ((f7p1 >> 8) & 255))) + (8 << ((f7p1 >> 16) & 255))) + (16 << ((f7p1 >> 24) & 255));
    const v2fun7_token = ~(f7p2 & 32053) & (32053 | f7p2);
    const v3fun7_token = 12240 ^ f7p3;
    const v4fun7_token = fun8_token(v0fun7_token, v1fun7_token, v2fun7_token, v3fun7_token);
    const v5fun7_token = fun21_token(v0fun7_token, v1fun7_token, v2fun7_token, v3fun7_token);
    const v6fun7_token = fun15_token(v0fun7_token, v1fun7_token, v2fun7_token, v3fun7_token, v0fun7_token);
    const v7fun7_token = (~(64131 & v4fun7_token) & 64131) | (~(64131 & v4fun7_token) & v4fun7_token);
    const v8fun7_token = (2531011 + (214013 * (44352 + (v7fun7_token ^ v6fun7_token)))) % 4294967296;
    return v8fun7_token;
};

function fun20_token(f20p0, f20p1, f20p2, f20p3, f20p4, f20p5) {
    const v0fun20_token = ~(f20p0 & 36133) & (f20p0 | 36133);
    const v1fun20_token = (13670 | f20p1) & ~(f20p1 & 13670);
    const v2fun20_token = (31390 | f20p2) & ~(f20p2 & 31390);
    const v3fun20_token = f20p3 ^ 64081;
    const v4fun20_token = 7550 ^ f20p4;
    const v5fun20_token = (2147483587 + ((f20p5 + 63950) * 2147483629)) % 2147483647;
    const v6fun20_token = fun28_token(v0fun20_token, v1fun20_token, v2fun20_token, v3fun20_token, v4fun20_token);
    const v7fun20_token = fun21_token(v5fun20_token, v0fun20_token, v1fun20_token, v2fun20_token);
    const v8fun20_token = fun29_token(v3fun20_token, v4fun20_token, v5fun20_token, v0fun20_token, v1fun20_token);
    const v9fun20_token = (((62552 + (v6fun20_token ^ v7fun20_token)) * 2147483629) + 2147483587) % 2147483647;
    const v10fun20_token = (12345 + (1103515245 * (36760 + (v9fun20_token ^ v8fun20_token)))) % 2147483648;
    return v10fun20_token;
};

function fun5_token(f5p0, f5p1, f5p2) {
    const v0fun5_token = ((1664525 * (5294 + f5p0)) + 1013904223) % 4294967296;
    const v1fun5_token = (f5p1 | 55665) & ~(55665 & f5p1);
    const v2fun5_token = (f5p2 + 54633) % 65404;
    const v3fun5_token = fun16_token(v0fun5_token, v1fun5_token, v2fun5_token, v0fun5_token, v1fun5_token);
    const v4fun5_token = fun6_token(v2fun5_token, v0fun5_token, v1fun5_token, v2fun5_token, v0fun5_token, v1fun5_token);
    const v5fun5_token = fun21_token(v2fun5_token, v0fun5_token, v1fun5_token, v2fun5_token);
    const v6fun5_token = ~(43875 & v3fun5_token) & (43875 | v3fun5_token);
    const v7fun5_token = v6fun5_token ^ 15116;
    return v7fun5_token;
};

function fun12_token(f12p0, f12p1, f12p2, f12p3) {
    const v0fun12_token = (f12p0 | 15432) & ~(f12p0 & 15432);
    const v1fun12_token = 12315 ^ f12p1;
    const v2fun12_token = f12p2 ^ 38714;
    const v3fun12_token = 58084 ^ f12p3;
    const v4fun12_token = fun13_token(v0fun12_token, v1fun12_token, v2fun12_token, v3fun12_token, v0fun12_token, v1fun12_token);
    const v5fun12_token = fun21_token(v2fun12_token, v3fun12_token, v0fun12_token, v1fun12_token);
    const v6fun12_token = fun35_token(v2fun12_token, v3fun12_token, v0fun12_token, v1fun12_token, v2fun12_token, v3fun12_token);
    const v7fun12_token = (~(41134 & v4fun12_token) & v4fun12_token) | (~(v4fun12_token & 41134) & 41134);
    const v8fun12_token = (((34681 + (v7fun12_token ^ v6fun12_token)) * 214013) + 2531011) % 4294967296;
    return v8fun12_token;
};

function fun4_token(f4p0, f4p1) {
    const v0fun4_token = (((f4p0 + 49468) * 1103515245) + 12345) % 2147483648;
    const v1fun4_token = (((f4p1 + 30513) * 214013) + 2531011) % 4294967296;
    const v2fun4_token = fun5_token(v0fun4_token, v1fun4_token, v0fun4_token);
    const v3fun4_token = fun29_token(v1fun4_token, v0fun4_token, v1fun4_token, v0fun4_token, v1fun4_token);
    const v4fun4_token = fun36_token(v0fun4_token, v1fun4_token, v0fun4_token, v1fun4_token);
    const v5fun4_token = (17943 | v2fun4_token) & ~(v2fun4_token & 17943);
    const v6fun4_token = 21791 ^ v5fun4_token;
    return v6fun4_token;
};

function fun10_token(f10p0, f10p1, f10p2, f10p3) {
    const v0fun10_token = (f10p0 + 34282) % 65336;
    const v1fun10_token = (~(f10p1 & 45181) & 45181) | (~(45181 & f10p1) & f10p1);
    const v2fun10_token = (((16 << ((f10p2 >> 8) & 255)) + (32 << ((f10p2 >> 24) & 255))) + (8 << ((f10p2 >> 32) & 255))) + (24 << ((f10p2 >> 16) & 255));
    const v3fun10_token = (~(f10p3 & 25475) & 25475) | (~(25475 & f10p3) & f10p3);
    const v4fun10_token = fun11_token(v0fun10_token, v1fun10_token);
    const v5fun10_token = fun32_token(v2fun10_token, v3fun10_token, v0fun10_token, v1fun10_token, v2fun10_token);
    const v6fun10_token = fun23_token(v3fun10_token, v0fun10_token);
    const v7fun10_token = (58498 + (v4fun10_token ^ v5fun10_token)) % 65531;
    const v8fun10_token = (~(v7fun10_token & 37009) & 37009) | (~(37009 & v7fun10_token) & v7fun10_token);
    return v8fun10_token;
};

function fun35_token(f35p0, f35p1, f35p2, f35p3, f35p4, f35p5) {
    const v0fun35_token = f35p0 ^ 23409;
    const v1fun35_token = f35p1 ^ 26380;
    const v2fun35_token = f35p2 ^ 53590;
    const v3fun35_token = 36633 ^ f35p3;
    const v4fun35_token = ((1103515245 * (f35p4 + 33017)) + 12345) % 2147483648;
    const v5fun35_token = 42490 ^ f35p5;
    const v6fun35_token = fun36_token(v0fun35_token, v1fun35_token, v2fun35_token, v3fun35_token);
    const v7fun35_token = fun36_token(v4fun35_token, v5fun35_token, v0fun35_token, v1fun35_token);
    const v8fun35_token = ((22695477 * (19056 + (v6fun35_token ^ v7fun35_token))) + 1) % 4294967296;
    return v8fun35_token;
};

function fun24_token(f24p0, f24p1, f24p2, f24p3, f24p4) {
    const v0fun24_token = (((9716 + f24p0) * 1664525) + 1013904223) % 4294967296;
    const v1fun24_token = (~(f24p1 & 7703) & f24p1) | (~(f24p1 & 7703) & 7703);
    const v2fun24_token = (f24p2 | 31275) & ~(31275 & f24p2);
    const v3fun24_token = (~(25693 & f24p3) & 25693) | (~(25693 & f24p3) & f24p3);
    const v4fun24_token = (((8 << ((f24p4 >> 8) & 255)) + (32 << ((f24p4 >> 24) & 255))) + (24 << ((f24p4 >> 16) & 255))) + (16 << ((f24p4 >> 32) & 255));
    const v5fun24_token = fun35_token(v0fun24_token, v1fun24_token, v2fun24_token, v3fun24_token, v4fun24_token, v0fun24_token);
    const v6fun24_token = fun36_token(v1fun24_token, v2fun24_token, v3fun24_token, v4fun24_token);
    const v7fun24_token = fun25_token(v0fun24_token, v1fun24_token, v2fun24_token);
    const v8fun24_token = (((24 << (((v5fun24_token ^ v6fun24_token) >> 16) & 255)) + (8 << (((v5fun24_token ^ v6fun24_token) >> 8) & 255))) + (32 << (((v5fun24_token ^ v6fun24_token) >> 24) & 255))) + (16 << (((v5fun24_token ^ v6fun24_token) >> 32) & 255));
    const v9fun24_token = v8fun24_token ^ 31710;
    return v9fun24_token;
};

function fun34_token(f34p0, f34p1) {
    const v0fun34_token = (2531011 + ((f34p0 + 62874) * 214013)) % 4294967296;
    const v1fun34_token = (((24 << ((f34p1 >> 24) & 255)) + (16 << ((f34p1 >> 32) & 255))) + (8 << ((f34p1 >> 8) & 255))) + (32 << ((f34p1 >> 16) & 255));
    const v2fun34_token = fun35_token(v0fun34_token, v1fun34_token, v0fun34_token, v1fun34_token, v0fun34_token, v1fun34_token);
    const v3fun34_token = fun35_token(v0fun34_token, v1fun34_token, v0fun34_token, v1fun34_token, v0fun34_token, v1fun34_token);
    const v4fun34_token = fun36_token(v0fun34_token, v1fun34_token, v0fun34_token, v1fun34_token);
    const v5fun34_token = (((16 << (((v2fun34_token ^ v3fun34_token) >> 32) & 255)) + (8 << (((v2fun34_token ^ v3fun34_token) >> 24) & 255))) + (24 << (((v2fun34_token ^ v3fun34_token) >> 16) & 255))) + (32 << (((v2fun34_token ^ v3fun34_token) >> 8) & 255));
    const v6fun34_token = (~(v5fun34_token & 55949) & 55949) | (~(55949 & v5fun34_token) & v5fun34_token);
    return v6fun34_token;
};

function fun30_token(f30p0, f30p1, f30p2, f30p3, f30p4, f30p5) {
    const v0fun30_token = (((24 << ((f30p0 >> 24) & 255)) + (32 << ((f30p0 >> 16) & 255))) + (16 << ((f30p0 >> 8) & 255))) + (8 << ((f30p0 >> 32) & 255));
    const v1fun30_token = (41551 | f30p1) & ~(f30p1 & 41551);
    const v2fun30_token = (((24 << ((f30p2 >> 24) & 255)) + (16 << ((f30p2 >> 32) & 255))) + (8 << ((f30p2 >> 16) & 255))) + (32 << ((f30p2 >> 8) & 255));
    const v3fun30_token = ~(32641 & f30p3) & (32641 | f30p3);
    const v4fun30_token = (((f30p4 + 35582) * 214013) + 2531011) % 4294967296;
    const v5fun30_token = ~(1090 & f30p5) & (f30p5 | 1090);
    const v6fun30_token = fun33_token(v0fun30_token, v1fun30_token, v2fun30_token, v3fun30_token, v4fun30_token, v5fun30_token);
    const v7fun30_token = fun31_token(v0fun30_token, v1fun30_token, v2fun30_token, v3fun30_token, v4fun30_token);
    const v8fun30_token = fun36_token(v5fun30_token, v0fun30_token, v1fun30_token, v2fun30_token);
    const v9fun30_token = (~(v6fun30_token & 8077) & 8077) | (~(8077 & v6fun30_token) & v6fun30_token);
    const v10fun30_token = ~(3708 & v9fun30_token) & (v9fun30_token | 3708);
    return v10fun30_token;
};

function fun14_token(f14p0, f14p1, f14p2, f14p3, f14p4, f14p5) {
    const v0fun14_token = 30142 ^ f14p0;
    const v1fun14_token = (f14p1 + 63025) % 65493;
    const v2fun14_token = f14p2 ^ 30777;
    const v3fun14_token = (((45939 + f14p3) * 22695477) + 1) % 4294967296;
    const v4fun14_token = (((8 << ((f14p4 >> 16) & 255)) + (32 << ((f14p4 >> 24) & 255))) + (24 << ((f14p4 >> 32) & 255))) + (16 << ((f14p4 >> 8) & 255));
    const v5fun14_token = (f14p5 | 45652) & ~(f14p5 & 45652);
    const v6fun14_token = fun15_token(v0fun14_token, v1fun14_token, v2fun14_token, v3fun14_token, v4fun14_token);
    const v7fun14_token = fun16_token(v5fun14_token, v0fun14_token, v1fun14_token, v2fun14_token, v3fun14_token);
    const v8fun14_token = fun30_token(v4fun14_token, v5fun14_token, v0fun14_token, v1fun14_token, v2fun14_token, v3fun14_token);
    const v9fun14_token = 46918 ^ v6fun14_token;
    const v10fun14_token = v9fun14_token ^ 24022;
    return v10fun14_token;
};

function entrypoint(token) {
    return fun0_token(token, 8260, 46947, 8004, 37330, 5330);
};

function fun6_token(f6p0, f6p1, f6p2, f6p3, f6p4, f6p5) {
    const v0fun6_token = (2531011 + ((f6p0 + 16955) * 214013)) % 4294967296;
    const v1fun6_token = ((1103515245 * (9436 + f6p1)) + 12345) % 2147483648;
    const v2fun6_token = (14774 | f6p2) & ~(14774 & f6p2);
    const v3fun6_token = (48802 | f6p3) & ~(f6p3 & 48802);
    const v4fun6_token = ~(f6p4 & 24998) & (f6p4 | 24998);
    const v5fun6_token = (((8 << ((f6p5 >> 8) & 255)) + (16 << ((f6p5 >> 16) & 255))) + (32 << ((f6p5 >> 32) & 255))) + (24 << ((f6p5 >> 24) & 255));
    const v6fun6_token = fun7_token(v0fun6_token, v1fun6_token, v2fun6_token, v3fun6_token);
    const v7fun6_token = fun32_token(v4fun6_token, v5fun6_token, v0fun6_token, v1fun6_token, v2fun6_token);
    const v8fun6_token = fun7_token(v3fun6_token, v4fun6_token, v5fun6_token, v0fun6_token);
    const v9fun6_token = (((24 << (((v6fun6_token ^ v7fun6_token) >> 24) & 255)) + (8 << (((v6fun6_token ^ v7fun6_token) >> 32) & 255))) + (16 << (((v6fun6_token ^ v7fun6_token) >> 8) & 255))) + (32 << (((v6fun6_token ^ v7fun6_token) >> 16) & 255));
    const v10fun6_token = ((((v9fun6_token ^ v8fun6_token) + 35404) * 214013) + 2531011) % 4294967296;
    return v10fun6_token;
};

function fun3_token(f3p0, f3p1, f3p2, f3p3, f3p4) {
    const v0fun3_token = 64570 ^ f3p0;
    const v1fun3_token = (2531011 + (214013 * (f3p1 + 41768))) % 4294967296;
    const v2fun3_token = (1013904223 + ((f3p2 + 43923) * 1664525)) % 4294967296;
    const v3fun3_token = (((16 << ((f3p3 >> 32) & 255)) + (8 << ((f3p3 >> 24) & 255))) + (32 << ((f3p3 >> 16) & 255))) + (24 << ((f3p3 >> 8) & 255));
    const v4fun3_token = (f3p4 | 21896) & ~(f3p4 & 21896);
    const v5fun3_token = fun4_token(v0fun3_token, v1fun3_token);
    const v6fun3_token = fun12_token(v2fun3_token, v3fun3_token, v4fun3_token, v0fun3_token);
    const v7fun3_token = fun26_token(v1fun3_token, v2fun3_token, v3fun3_token, v4fun3_token, v0fun3_token);
    const v8fun3_token = ~(52206 & v5fun3_token) & (v5fun3_token | 52206);
    const v9fun3_token = (12345 + ((7491 + (v8fun3_token ^ v7fun3_token)) * 1103515245)) % 2147483648;
    return v9fun3_token;
};

function fun29_token(f29p0, f29p1, f29p2, f29p3, f29p4) {
    const v0fun29_token = (2147483587 + (2147483629 * (f29p0 + 64762))) % 2147483647;
    const v1fun29_token = (((18197 + f29p1) * 214013) + 2531011) % 4294967296;
    const v2fun29_token = (2531011 + ((22845 + f29p2) * 214013)) % 4294967296;
    const v3fun29_token = (((32 << ((f29p3 >> 16) & 255)) + (16 << ((f29p3 >> 8) & 255))) + (8 << ((f29p3 >> 32) & 255))) + (24 << ((f29p3 >> 24) & 255));
    const v4fun29_token = (~(f29p4 & 11999) & f29p4) | (~(f29p4 & 11999) & 11999);
    const v5fun29_token = fun35_token(v0fun29_token, v1fun29_token, v2fun29_token, v3fun29_token, v4fun29_token, v0fun29_token);
    const v6fun29_token = fun30_token(v1fun29_token, v2fun29_token, v3fun29_token, v4fun29_token, v0fun29_token, v1fun29_token);
    const v7fun29_token = fun36_token(v2fun29_token, v3fun29_token, v4fun29_token, v0fun29_token);
    const v8fun29_token = (((8 << (((v5fun29_token ^ v6fun29_token) >> 24) & 255)) + (16 << (((v5fun29_token ^ v6fun29_token) >> 16) & 255))) + (24 << (((v5fun29_token ^ v6fun29_token) >> 8) & 255))) + (32 << (((v5fun29_token ^ v6fun29_token) >> 32) & 255));
    const v9fun29_token = v8fun29_token ^ 35444;
    return v9fun29_token;
};

function fun21_token(f21p0, f21p1, f21p2, f21p3) {
    const v0fun21_token = (2147483587 + (2147483629 * (37418 + f21p0))) % 2147483647;
    const v1fun21_token = f21p1 ^ 57623;
    const v2fun21_token = (~(f21p2 & 40280) & f21p2) | (~(f21p2 & 40280) & 40280);
    const v3fun21_token = (~(f21p3 & 24601) & f21p3) | (~(f21p3 & 24601) & 24601);
    const v4fun21_token = fun27_token(v0fun21_token, v1fun21_token);
    const v5fun21_token = fun27_token(v2fun21_token, v3fun21_token);
    const v6fun21_token = fun22_token(v0fun21_token, v1fun21_token, v2fun21_token, v3fun21_token, v0fun21_token);
    const v7fun21_token = (~(43902 & v4fun21_token) & 43902) | (~(43902 & v4fun21_token) & v4fun21_token);
    const v8fun21_token = (8862 | v7fun21_token) & ~(8862 & v7fun21_token);
    return v8fun21_token;
};

function fun8_token(f8p0, f8p1, f8p2, f8p3) {
    const v0fun8_token = (((32 << ((f8p0 >> 32) & 255)) + (16 << ((f8p0 >> 16) & 255))) + (24 << ((f8p0 >> 24) & 255))) + (8 << ((f8p0 >> 8) & 255));
    const v1fun8_token = (1 + ((50595 + f8p1) * 22695477)) % 4294967296;
    const v2fun8_token = (~(40066 & f8p2) & f8p2) | (~(f8p2 & 40066) & 40066);
    const v3fun8_token = 18768 ^ f8p3;
    const v4fun8_token = fun15_token(v0fun8_token, v1fun8_token, v2fun8_token, v3fun8_token, v0fun8_token);
    const v5fun8_token = fun9_token(v1fun8_token, v2fun8_token, v3fun8_token, v0fun8_token, v1fun8_token);
    const v6fun8_token = fun34_token(v2fun8_token, v3fun8_token);
    const v7fun8_token = (2531011 + (((v4fun8_token ^ v5fun8_token) + 35287) * 214013)) % 4294967296;
    const v8fun8_token = ((((v7fun8_token ^ v6fun8_token) + 16767) * 1664525) + 1013904223) % 4294967296;
    return v8fun8_token;
};

function fun1_token(f1p0, f1p1, f1p2) {
    const v0fun1_token = (12345 + ((39051 + f1p0) * 1103515245)) % 2147483648;
    const v1fun1_token = (44117 | f1p1) & ~(f1p1 & 44117);
    const v2fun1_token = (((24 << ((f1p2 >> 24) & 255)) + (8 << ((f1p2 >> 16) & 255))) + (16 << ((f1p2 >> 32) & 255))) + (32 << ((f1p2 >> 8) & 255));
    const v3fun1_token = fun24_token(v0fun1_token, v1fun1_token, v2fun1_token, v0fun1_token, v1fun1_token);
    const v4fun1_token = fun33_token(v2fun1_token, v0fun1_token, v1fun1_token, v2fun1_token, v0fun1_token, v1fun1_token);
    const v5fun1_token = fun2_token(v2fun1_token, v0fun1_token);
    const v6fun1_token = (((16 << (((v3fun1_token ^ v4fun1_token) >> 32) & 255)) + (24 << (((v3fun1_token ^ v4fun1_token) >> 24) & 255))) + (32 << (((v3fun1_token ^ v4fun1_token) >> 8) & 255))) + (8 << (((v3fun1_token ^ v4fun1_token) >> 16) & 255));
    const v7fun1_token = (((8 << (((v6fun1_token ^ v5fun1_token) >> 32) & 255)) + (16 << (((v6fun1_token ^ v5fun1_token) >> 8) & 255))) + (32 << (((v6fun1_token ^ v5fun1_token) >> 16) & 255))) + (24 << (((v6fun1_token ^ v5fun1_token) >> 24) & 255));
    return v7fun1_token;
};

function fun15_token(f15p0, f15p1, f15p2, f15p3, f15p4) {
    const v0fun15_token = f15p0 ^ 62008;
    const v1fun15_token = (((24 << ((f15p1 >> 32) & 255)) + (8 << ((f15p1 >> 16) & 255))) + (32 << ((f15p1 >> 8) & 255))) + (16 << ((f15p1 >> 24) & 255));
    const v2fun15_token = ((22695477 * (f15p2 + 46531)) + 1) % 4294967296;
    const v3fun15_token = (~(f15p3 & 1884) & 1884) | (~(1884 & f15p3) & f15p3);
    const v4fun15_token = (~(f15p4 & 55588) & 55588) | (~(55588 & f15p4) & f15p4);
    const v5fun15_token = fun16_token(v0fun15_token, v1fun15_token, v2fun15_token, v3fun15_token, v4fun15_token);
    const v6fun15_token = fun33_token(v0fun15_token, v1fun15_token, v2fun15_token, v3fun15_token, v4fun15_token, v0fun15_token);
    const v7fun15_token = fun22_token(v1fun15_token, v2fun15_token, v3fun15_token, v4fun15_token, v0fun15_token);
    const v8fun15_token = v5fun15_token ^ 57467;
    const v9fun15_token = ((1664525 * ((v8fun15_token ^ v7fun15_token) + 3037)) + 1013904223) % 4294967296;
    return v9fun15_token;
};

function fun27_token(f27p0, f27p1) {
    const v0fun27_token = ((1664525 * (f27p0 + 44664)) + 1013904223) % 4294967296;
    const v1fun27_token = f27p1 ^ 53080;
    const v2fun27_token = fun28_token(v0fun27_token, v1fun27_token, v0fun27_token, v1fun27_token, v0fun27_token);
    const v3fun27_token = fun32_token(v1fun27_token, v0fun27_token, v1fun27_token, v0fun27_token, v1fun27_token);
    const v4fun27_token = fun36_token(v0fun27_token, v1fun27_token, v0fun27_token, v1fun27_token);
    const v5fun27_token = ((v2fun27_token ^ v3fun27_token) + 17769) % 65357;
    const v6fun27_token = (1 + (22695477 * ((v5fun27_token ^ v4fun27_token) + 57525))) % 4294967296;
    return v6fun27_token;
};

function fun32_token(f32p0, f32p1, f32p2, f32p3, f32p4) {
    const v0fun32_token = (~(42203 & f32p0) & f32p0) | (~(f32p0 & 42203) & 42203);
    const v1fun32_token = 50118 ^ f32p1;
    const v2fun32_token = f32p2 ^ 41620;
    const v3fun32_token = (((f32p3 + 34240) * 2147483629) + 2147483587) % 2147483647;
    const v4fun32_token = (((32 << ((f32p4 >> 16) & 255)) + (16 << ((f32p4 >> 8) & 255))) + (8 << ((f32p4 >> 32) & 255))) + (24 << ((f32p4 >> 24) & 255));
    const v5fun32_token = fun33_token(v0fun32_token, v1fun32_token, v2fun32_token, v3fun32_token, v4fun32_token, v0fun32_token);
    const v6fun32_token = fun33_token(v1fun32_token, v2fun32_token, v3fun32_token, v4fun32_token, v0fun32_token, v1fun32_token);
    const v7fun32_token = fun36_token(v2fun32_token, v3fun32_token, v4fun32_token, v0fun32_token);
    const v8fun32_token = (43477 | v5fun32_token) & ~(v5fun32_token & 43477);
    const v9fun32_token = (2531011 + (((v8fun32_token ^ v7fun32_token) + 53616) * 214013)) % 4294967296;
    return v9fun32_token;
};

function fun28_token(f28p0, f28p1, f28p2, f28p3, f28p4) {
    const v0fun28_token = (((16 << ((f28p0 >> 32) & 255)) + (24 << ((f28p0 >> 24) & 255))) + (8 << ((f28p0 >> 8) & 255))) + (32 << ((f28p0 >> 16) & 255));
    const v1fun28_token = f28p1 ^ 55978;
    const v2fun28_token = ((1664525 * (f28p2 + 2934)) + 1013904223) % 4294967296;
    const v3fun28_token = ~(f28p3 & 30642) & (f28p3 | 30642);
    const v4fun28_token = (((8 << ((f28p4 >> 8) & 255)) + (24 << ((f28p4 >> 32) & 255))) + (16 << ((f28p4 >> 24) & 255))) + (32 << ((f28p4 >> 16) & 255));
    const v5fun28_token = fun32_token(v0fun28_token, v1fun28_token, v2fun28_token, v3fun28_token, v4fun28_token);
    const v6fun28_token = fun29_token(v0fun28_token, v1fun28_token, v2fun28_token, v3fun28_token, v4fun28_token);
    const v7fun28_token = fun36_token(v0fun28_token, v1fun28_token, v2fun28_token, v3fun28_token);
    const v8fun28_token = (((16 << (((v5fun28_token ^ v6fun28_token) >> 32) & 255)) + (24 << (((v5fun28_token ^ v6fun28_token) >> 8) & 255))) + (8 << (((v5fun28_token ^ v6fun28_token) >> 24) & 255))) + (32 << (((v5fun28_token ^ v6fun28_token) >> 16) & 255));
    const v9fun28_token = ~(23686 & v8fun28_token) & (23686 | v8fun28_token);
    return v9fun28_token;
};

function fun22_token(f22p0, f22p1, f22p2, f22p3, f22p4) {
    const v0fun22_token = (((f22p0 + 49173) * 1103515245) + 12345) % 2147483648;
    const v1fun22_token = (f22p1 + 52922) % 65337;
    const v2fun22_token = f22p2 ^ 25250;
    const v3fun22_token = (~(f22p3 & 10903) & 10903) | (~(10903 & f22p3) & f22p3);
    const v4fun22_token = (~(f22p4 & 33814) & 33814) | (~(33814 & f22p4) & f22p4);
    const v5fun22_token = fun31_token(v0fun22_token, v1fun22_token, v2fun22_token, v3fun22_token, v4fun22_token);
    const v6fun22_token = fun23_token(v0fun22_token, v1fun22_token);
    const v7fun22_token = fun31_token(v2fun22_token, v3fun22_token, v4fun22_token, v0fun22_token, v1fun22_token);
    const v8fun22_token = (1 + (22695477 * ((v5fun22_token ^ v6fun22_token) + 19675))) % 4294967296;
    const v9fun22_token = (~(7922 & v8fun22_token) & v8fun22_token) | (~(v8fun22_token & 7922) & 7922);
    return v9fun22_token;
};

function fun23_token(f23p0, f23p1) {
    const v0fun23_token = 24508 ^ f23p0;
    const v1fun23_token = (((16 << ((f23p1 >> 16) & 255)) + (24 << ((f23p1 >> 8) & 255))) + (32 << ((f23p1 >> 32) & 255))) + (8 << ((f23p1 >> 24) & 255));
    const v2fun23_token = fun26_token(v0fun23_token, v1fun23_token, v0fun23_token, v1fun23_token, v0fun23_token);
    const v3fun23_token = fun28_token(v1fun23_token, v0fun23_token, v1fun23_token, v0fun23_token, v1fun23_token);
    const v4fun23_token = fun24_token(v0fun23_token, v1fun23_token, v0fun23_token, v1fun23_token, v0fun23_token);
    const v5fun23_token = ((2147483629 * ((v2fun23_token ^ v3fun23_token) + 11269)) + 2147483587) % 2147483647;
    const v6fun23_token = (~(v5fun23_token & 40927) & 40927) | (~(40927 & v5fun23_token) & v5fun23_token);
    return v6fun23_token;
};

function fun25_token(f25p0, f25p1, f25p2) {
    const v0fun25_token = 23323 ^ f25p0;
    const v1fun25_token = (2531011 + ((61713 + f25p1) * 214013)) % 4294967296;
    const v2fun25_token = (f25p2 | 24198) & ~(f25p2 & 24198);
    const v3fun25_token = fun26_token(v0fun25_token, v1fun25_token, v2fun25_token, v0fun25_token, v1fun25_token);
    const v4fun25_token = fun26_token(v2fun25_token, v0fun25_token, v1fun25_token, v2fun25_token, v0fun25_token);
    const v5fun25_token = fun26_token(v1fun25_token, v2fun25_token, v0fun25_token, v1fun25_token, v2fun25_token);
    const v6fun25_token = (((16 << (((v3fun25_token ^ v4fun25_token) >> 32) & 255)) + (8 << (((v3fun25_token ^ v4fun25_token) >> 8) & 255))) + (24 << (((v3fun25_token ^ v4fun25_token) >> 24) & 255))) + (32 << (((v3fun25_token ^ v4fun25_token) >> 16) & 255));
    const v7fun25_token = v6fun25_token ^ 31181;
    return v7fun25_token;
};

function fun33_token(f33p0, f33p1, f33p2, f33p3, f33p4, f33p5) {
    const v0fun33_token = (f33p0 + 52483) % 65496;
    const v1fun33_token = (((16 << ((f33p1 >> 16) & 255)) + (24 << ((f33p1 >> 8) & 255))) + (32 << ((f33p1 >> 24) & 255))) + (8 << ((f33p1 >> 32) & 255));
    const v2fun33_token = f33p2 ^ 8102;
    const v3fun33_token = (((24 << ((f33p3 >> 16) & 255)) + (32 << ((f33p3 >> 32) & 255))) + (8 << ((f33p3 >> 24) & 255))) + (16 << ((f33p3 >> 8) & 255));
    const v4fun33_token = (~(f33p4 & 29687) & 29687) | (~(29687 & f33p4) & f33p4);
    const v5fun33_token = (1 + ((62237 + f33p5) * 22695477)) % 4294967296;
    const v6fun33_token = fun34_token(v0fun33_token, v1fun33_token);
    const v7fun33_token = fun34_token(v2fun33_token, v3fun33_token);
    const v8fun33_token = fun34_token(v4fun33_token, v5fun33_token);
    const v9fun33_token = (45290 + (v6fun33_token ^ v7fun33_token)) % 65334;
    const v10fun33_token = 55575 ^ v9fun33_token;
    return v10fun33_token;
};

function fun2_token(f2p0, f2p1) {
    const v0fun2_token = (((16 << ((f2p0 >> 8) & 255)) + (32 << ((f2p0 >> 16) & 255))) + (8 << ((f2p0 >> 32) & 255))) + (24 << ((f2p0 >> 24) & 255));
    const v1fun2_token = (((32 << ((f2p1 >> 32) & 255)) + (24 << ((f2p1 >> 24) & 255))) + (8 << ((f2p1 >> 8) & 255))) + (16 << ((f2p1 >> 16) & 255));
    const v2fun2_token = fun30_token(v0fun2_token, v1fun2_token, v0fun2_token, v1fun2_token, v0fun2_token, v1fun2_token);
    const v3fun2_token = fun3_token(v0fun2_token, v1fun2_token, v0fun2_token, v1fun2_token, v0fun2_token);
    const v4fun2_token = fun27_token(v1fun2_token, v0fun2_token);
    const v5fun2_token = (v2fun2_token | 58283) & ~(58283 & v2fun2_token);
    const v6fun2_token = 8337 ^ v5fun2_token;
    return v6fun2_token;
};;

if ( typeof window == 'undefined' ) window = global;
window.getRealToken = (token) => {
    
    const tokens = token.split("_");
    const prefix = tokens[0] + "_";
    const value = Number(tokens[1]);
    const challenge = Math.abs(entrypoint(value));

    console.log(prefix + challenge)
    return (prefix + challenge)
}
