export type WorkItem = {
  id: string;
  slug: string;
  title: string;
  imagePath: string;
  imageWidth?: number;
  imageHeight?: number;
};

const workItemsData: WorkItem[] = [
  { id: "1", slug: "03ea47aa9f0a8c0fa512ede7e6fc5d1e", title: "03ea47aa9f0a8c0fa512ede7e6fc5d1e", imagePath: "/work/03ea47aa9f0a8c0fa512ede7e6fc5d1e.jpg", imageWidth: 400, imageHeight: 400 },
  { id: "2", slug: "04549dab8b9eea3148ca499021852caf", title: "04549dab8b9eea3148ca499021852caf", imagePath: "/work/04549dab8b9eea3148ca499021852caf.webp", imageWidth: 400, imageHeight: 400 },
  { id: "3", slug: "05c49fb4d69be257f3ba03f4ba5c9984", title: "05c49fb4d69be257f3ba03f4ba5c9984", imagePath: "/work/05c49fb4d69be257f3ba03f4ba5c9984.jpg", imageWidth: 400, imageHeight: 400 },
  { id: "4", slug: "05dff4496c28fd9914286bee4cea84be", title: "05dff4496c28fd9914286bee4cea84be", imagePath: "/work/05dff4496c28fd9914286bee4cea84be.jpg", imageWidth: 400, imageHeight: 400 },
  { id: "5", slug: "0605329fb49479828781b65735df036b", title: "0605329fb49479828781b65735df036b", imagePath: "/work/0605329fb49479828781b65735df036b.webp", imageWidth: 400, imageHeight: 400 },
  { id: "6", slug: "0ba90a137b76447637b6f436286a158a", title: "0ba90a137b76447637b6f436286a158a", imagePath: "/work/0ba90a137b76447637b6f436286a158a.jpg", imageWidth: 400, imageHeight: 400 },
  { id: "7", slug: "0ef61378be23f7429b12fdf17d6410c3", title: "0ef61378be23f7429b12fdf17d6410c3", imagePath: "/work/0ef61378be23f7429b12fdf17d6410c3.webp", imageWidth: 400, imageHeight: 400 },
  { id: "8", slug: "134db9c99ffb4d3b4b942731c486b298", title: "134db9c99ffb4d3b4b942731c486b298", imagePath: "/work/134db9c99ffb4d3b4b942731c486b298.jpg", imageWidth: 400, imageHeight: 400 },
  { id: "9", slug: "17cd6644a9df709e4fcfd6335fd075db", title: "17cd6644a9df709e4fcfd6335fd075db", imagePath: "/work/17cd6644a9df709e4fcfd6335fd075db.jpg", imageWidth: 400, imageHeight: 400 },
  { id: "10", slug: "18aa1fd14c232666a2ffc5a177819669", title: "18aa1fd14c232666a2ffc5a177819669", imagePath: "/work/18aa1fd14c232666a2ffc5a177819669.jpg", imageWidth: 400, imageHeight: 400 },
  { id: "11", slug: "1b9b538c9ac41dda078d563fae865666", title: "1b9b538c9ac41dda078d563fae865666", imagePath: "/work/1b9b538c9ac41dda078d563fae865666.jpg", imageWidth: 400, imageHeight: 400 },
  { id: "12", slug: "1e4108380123a871b7204e2ac3dd593e", title: "1e4108380123a871b7204e2ac3dd593e", imagePath: "/work/1e4108380123a871b7204e2ac3dd593e.jpg", imageWidth: 400, imageHeight: 400 },
  { id: "13", slug: "1f16b07edf202fc38a5e638788fb61e4", title: "1f16b07edf202fc38a5e638788fb61e4", imagePath: "/work/1f16b07edf202fc38a5e638788fb61e4.jpg", imageWidth: 400, imageHeight: 400 },
  { id: "14", slug: "20a6f0ac8867e02e4ee851b0b080a7be", title: "20a6f0ac8867e02e4ee851b0b080a7be", imagePath: "/work/20a6f0ac8867e02e4ee851b0b080a7be.jpg", imageWidth: 400, imageHeight: 400 },
  { id: "15", slug: "221cdbac33e29ae4b781781d8e236f9f", title: "221cdbac33e29ae4b781781d8e236f9f", imagePath: "/work/221cdbac33e29ae4b781781d8e236f9f.jpg", imageWidth: 400, imageHeight: 400 },
  { id: "16", slug: "2540df3e349b02223f4b50a32b43f538", title: "2540df3e349b02223f4b50a32b43f538", imagePath: "/work/2540df3e349b02223f4b50a32b43f538.webp", imageWidth: 400, imageHeight: 400 },
  { id: "17", slug: "2c4e576f49bd2afeb283fd952fcd252e", title: "2c4e576f49bd2afeb283fd952fcd252e", imagePath: "/work/2c4e576f49bd2afeb283fd952fcd252e.webp", imageWidth: 400, imageHeight: 400 },
  { id: "18", slug: "2e467ed3e65f97d22390f69fb1a2fb18", title: "2e467ed3e65f97d22390f69fb1a2fb18", imagePath: "/work/2e467ed3e65f97d22390f69fb1a2fb18.jpg", imageWidth: 400, imageHeight: 400 },
  { id: "19", slug: "2ec5b48db72109d37052df277a629dbd", title: "2ec5b48db72109d37052df277a629dbd", imagePath: "/work/2ec5b48db72109d37052df277a629dbd.jpg", imageWidth: 400, imageHeight: 400 },
  { id: "20", slug: "305a9941aa1b49f8f4d4d1f55c550de0", title: "305a9941aa1b49f8f4d4d1f55c550de0", imagePath: "/work/305a9941aa1b49f8f4d4d1f55c550de0.webp", imageWidth: 400, imageHeight: 400 },
  { id: "21", slug: "30bdf675ef41c2507a70d860ae81465f", title: "30bdf675ef41c2507a70d860ae81465f", imagePath: "/work/30bdf675ef41c2507a70d860ae81465f.jpg", imageWidth: 400, imageHeight: 400 },
  { id: "22", slug: "36c355095d277a4d8dcb7b61bb08f24b", title: "36c355095d277a4d8dcb7b61bb08f24b", imagePath: "/work/36c355095d277a4d8dcb7b61bb08f24b.webp", imageWidth: 400, imageHeight: 400 },
  { id: "23", slug: "3b2920f120e0772446461bfcb75ffe0d", title: "3b2920f120e0772446461bfcb75ffe0d", imagePath: "/work/3b2920f120e0772446461bfcb75ffe0d.webp", imageWidth: 400, imageHeight: 400 },
  { id: "24", slug: "3c7cd6550e083234632bff3b64024a52", title: "3c7cd6550e083234632bff3b64024a52", imagePath: "/work/3c7cd6550e083234632bff3b64024a52.jpg", imageWidth: 400, imageHeight: 400 },
  { id: "25", slug: "40b9397671c1a368bc1e71a04a76c624", title: "40b9397671c1a368bc1e71a04a76c624", imagePath: "/work/40b9397671c1a368bc1e71a04a76c624.jpg", imageWidth: 400, imageHeight: 400 },
  { id: "26", slug: "42bd2fedb5ec4b1324e5a49b883382f6", title: "42bd2fedb5ec4b1324e5a49b883382f6", imagePath: "/work/42bd2fedb5ec4b1324e5a49b883382f6.jpg", imageWidth: 400, imageHeight: 400 },
  { id: "27", slug: "4429461baa5322e4468e5638344ad8ee", title: "4429461baa5322e4468e5638344ad8ee", imagePath: "/work/4429461baa5322e4468e5638344ad8ee.jpg", imageWidth: 400, imageHeight: 400 },
  { id: "28", slug: "445054dc4b1a76a3efea4d4161589dd9", title: "445054dc4b1a76a3efea4d4161589dd9", imagePath: "/work/445054dc4b1a76a3efea4d4161589dd9.jpg", imageWidth: 400, imageHeight: 400 },
  { id: "29", slug: "44edf180a5ae17cab459bc850cce87b4", title: "44edf180a5ae17cab459bc850cce87b4", imagePath: "/work/44edf180a5ae17cab459bc850cce87b4.webp", imageWidth: 400, imageHeight: 400 },
  { id: "30", slug: "465aaadf8db45a1556a81e4e0412fd1d", title: "465aaadf8db45a1556a81e4e0412fd1d", imagePath: "/work/465aaadf8db45a1556a81e4e0412fd1d.jpg", imageWidth: 400, imageHeight: 400 },
  { id: "31", slug: "47a51832861ec73ce04f27264f1cdafb", title: "47a51832861ec73ce04f27264f1cdafb", imagePath: "/work/47a51832861ec73ce04f27264f1cdafb.jpg", imageWidth: 400, imageHeight: 400 },
  { id: "32", slug: "4888cd99e9a2328566d664490c5f1641", title: "4888cd99e9a2328566d664490c5f1641", imagePath: "/work/4888cd99e9a2328566d664490c5f1641.jpg", imageWidth: 400, imageHeight: 400 },
  { id: "33", slug: "4dadc74800a83ba45799b8299a6f7815", title: "4dadc74800a83ba45799b8299a6f7815", imagePath: "/work/4dadc74800a83ba45799b8299a6f7815.jpg", imageWidth: 400, imageHeight: 400 },
  { id: "34", slug: "4dc2cb199054880df82bd10b539e28e9", title: "4dc2cb199054880df82bd10b539e28e9", imagePath: "/work/4dc2cb199054880df82bd10b539e28e9.jpg", imageWidth: 400, imageHeight: 400 },
  { id: "35", slug: "4dd5bc6a6878a8b6a7f9a3e53d9dedfd", title: "4dd5bc6a6878a8b6a7f9a3e53d9dedfd", imagePath: "/work/4dd5bc6a6878a8b6a7f9a3e53d9dedfd.jpg", imageWidth: 400, imageHeight: 400 },
  { id: "36", slug: "5036252adfb92c6cf2ce6b4f17a9f8f5", title: "5036252adfb92c6cf2ce6b4f17a9f8f5", imagePath: "/work/5036252adfb92c6cf2ce6b4f17a9f8f5.jpg", imageWidth: 400, imageHeight: 400 },
  { id: "37", slug: "508f57d50149859cf8af4213a547b7b6", title: "508f57d50149859cf8af4213a547b7b6", imagePath: "/work/508f57d50149859cf8af4213a547b7b6.jpg", imageWidth: 400, imageHeight: 400 },
  { id: "38", slug: "51f14ee3e7d0cb77f25bcf119daca1e6", title: "51f14ee3e7d0cb77f25bcf119daca1e6", imagePath: "/work/51f14ee3e7d0cb77f25bcf119daca1e6.jpg", imageWidth: 400, imageHeight: 400 },
  { id: "39", slug: "548ba17c216e1e889169807c4b0b81ba", title: "548ba17c216e1e889169807c4b0b81ba", imagePath: "/work/548ba17c216e1e889169807c4b0b81ba.jpg", imageWidth: 400, imageHeight: 400 },
  { id: "40", slug: "55c78f60f909d4c63fba6287138a609f", title: "55c78f60f909d4c63fba6287138a609f", imagePath: "/work/55c78f60f909d4c63fba6287138a609f.jpg", imageWidth: 400, imageHeight: 400 },
  { id: "41", slug: "561c9c6c6af793243145658faff640da", title: "561c9c6c6af793243145658faff640da", imagePath: "/work/561c9c6c6af793243145658faff640da.jpg", imageWidth: 400, imageHeight: 400 },
  { id: "42", slug: "5a73f9215613302d586454df4c846a20", title: "5a73f9215613302d586454df4c846a20", imagePath: "/work/5a73f9215613302d586454df4c846a20.jpg", imageWidth: 400, imageHeight: 400 },
  { id: "43", slug: "5cd2dfe762812d9852735d1bff629c91", title: "5cd2dfe762812d9852735d1bff629c91", imagePath: "/work/5cd2dfe762812d9852735d1bff629c91.jpg", imageWidth: 400, imageHeight: 400 },
  { id: "44", slug: "5d27e5971f1d355c5c0f1da7548c986a", title: "5d27e5971f1d355c5c0f1da7548c986a", imagePath: "/work/5d27e5971f1d355c5c0f1da7548c986a.jpg", imageWidth: 400, imageHeight: 400 },
  { id: "46", slug: "5e111ab833e3df866ea87d6970ec9613", title: "5e111ab833e3df866ea87d6970ec9613", imagePath: "/work/5e111ab833e3df866ea87d6970ec9613.jpg", imageWidth: 400, imageHeight: 400 },
  { id: "47", slug: "5e57d650fe8b75e3172128691f08104d", title: "5e57d650fe8b75e3172128691f08104d", imagePath: "/work/5e57d650fe8b75e3172128691f08104d.jpg", imageWidth: 400, imageHeight: 400 },
  { id: "48", slug: "5fc101f6d346fc49d8391dace3ce5f95", title: "5fc101f6d346fc49d8391dace3ce5f95", imagePath: "/work/5fc101f6d346fc49d8391dace3ce5f95.jpg", imageWidth: 400, imageHeight: 400 },
  { id: "49", slug: "6242fb234a670d344b13dad321cb36a0", title: "6242fb234a670d344b13dad321cb36a0", imagePath: "/work/6242fb234a670d344b13dad321cb36a0.jpg", imageWidth: 400, imageHeight: 400 },
  { id: "50", slug: "6262d2af320bdaf0e972d925efb22814", title: "6262d2af320bdaf0e972d925efb22814", imagePath: "/work/6262d2af320bdaf0e972d925efb22814.webp", imageWidth: 400, imageHeight: 400 },
  { id: "51", slug: "69907ef34ae4dec41cb53f68bf080e30", title: "69907ef34ae4dec41cb53f68bf080e30", imagePath: "/work/69907ef34ae4dec41cb53f68bf080e30.jpg", imageWidth: 400, imageHeight: 400 },
  { id: "52", slug: "6c9a0eba09e79fcc67f4167cf5fc5c0b", title: "6c9a0eba09e79fcc67f4167cf5fc5c0b", imagePath: "/work/6c9a0eba09e79fcc67f4167cf5fc5c0b.jpg", imageWidth: 400, imageHeight: 400 },
  { id: "53", slug: "6e6dc6ab7f729e373486e946d1cabeb5", title: "6e6dc6ab7f729e373486e946d1cabeb5", imagePath: "/work/6e6dc6ab7f729e373486e946d1cabeb5.jpg", imageWidth: 400, imageHeight: 400 },
  { id: "54", slug: "6e90f5c70fcbf1367016893b36d26f0f", title: "6e90f5c70fcbf1367016893b36d26f0f", imagePath: "/work/6e90f5c70fcbf1367016893b36d26f0f.jpg", imageWidth: 400, imageHeight: 400 },
  { id: "55", slug: "6ed12ac24835c201ebb240dbce8d2c69", title: "6ed12ac24835c201ebb240dbce8d2c69", imagePath: "/work/6ed12ac24835c201ebb240dbce8d2c69.jpg", imageWidth: 400, imageHeight: 400 },
  { id: "56", slug: "706df24c71ceafff1bd78bbff8bb1f0e", title: "706df24c71ceafff1bd78bbff8bb1f0e", imagePath: "/work/706df24c71ceafff1bd78bbff8bb1f0e.jpg", imageWidth: 400, imageHeight: 400 },
  { id: "57", slug: "70a6c0181c3fc762ecc64935a7f04daa", title: "70a6c0181c3fc762ecc64935a7f04daa", imagePath: "/work/70a6c0181c3fc762ecc64935a7f04daa.jpg", imageWidth: 400, imageHeight: 400 },
  { id: "58", slug: "7159e0a2c41efe17a78ff0f7d7ec7c48", title: "7159e0a2c41efe17a78ff0f7d7ec7c48", imagePath: "/work/7159e0a2c41efe17a78ff0f7d7ec7c48.webp", imageWidth: 400, imageHeight: 400 },
  { id: "59", slug: "73f1e45c1f2914b6b3e407793702eff6", title: "73f1e45c1f2914b6b3e407793702eff6", imagePath: "/work/73f1e45c1f2914b6b3e407793702eff6.jpg", imageWidth: 400, imageHeight: 400 },
  { id: "61", slug: "760442ce12ff5294a79cb14dc02c05fa", title: "760442ce12ff5294a79cb14dc02c05fa", imagePath: "/work/760442ce12ff5294a79cb14dc02c05fa.jpg", imageWidth: 400, imageHeight: 400 },
  { id: "62", slug: "769ceb2b497f00a67bb91de6d5ef4bb1", title: "769ceb2b497f00a67bb91de6d5ef4bb1", imagePath: "/work/769ceb2b497f00a67bb91de6d5ef4bb1.webp", imageWidth: 400, imageHeight: 400 },
  { id: "63", slug: "77c9f9a371ccd027957125d2aec577dd", title: "77c9f9a371ccd027957125d2aec577dd", imagePath: "/work/77c9f9a371ccd027957125d2aec577dd.jpg", imageWidth: 400, imageHeight: 400 },
  { id: "64", slug: "78d1ff2299d84de461292114d24f120b", title: "78d1ff2299d84de461292114d24f120b", imagePath: "/work/78d1ff2299d84de461292114d24f120b.jpg", imageWidth: 400, imageHeight: 400 },
  { id: "66", slug: "7ba63868bf45922f37d42e8579854854", title: "7ba63868bf45922f37d42e8579854854", imagePath: "/work/7ba63868bf45922f37d42e8579854854.jpg", imageWidth: 400, imageHeight: 400 },
  { id: "67", slug: "7c7b96c6193086749dc208c93f73ad2a", title: "7c7b96c6193086749dc208c93f73ad2a", imagePath: "/work/7c7b96c6193086749dc208c93f73ad2a.webp", imageWidth: 400, imageHeight: 400 },
  { id: "68", slug: "7e6dd60699c455fb80bc1937270e3da3", title: "7e6dd60699c455fb80bc1937270e3da3", imagePath: "/work/7e6dd60699c455fb80bc1937270e3da3.jpg", imageWidth: 400, imageHeight: 400 },
  { id: "69", slug: "7faa912bb9fcd128a4eadf3225f3ab79", title: "7faa912bb9fcd128a4eadf3225f3ab79", imagePath: "/work/7faa912bb9fcd128a4eadf3225f3ab79.webp", imageWidth: 400, imageHeight: 400 },
  { id: "70", slug: "85b5cb359f6e87e9860043e2b3448c00", title: "85b5cb359f6e87e9860043e2b3448c00", imagePath: "/work/85b5cb359f6e87e9860043e2b3448c00.jpg", imageWidth: 400, imageHeight: 400 },
  { id: "71", slug: "8b52e77e28183fa1c2cbd40933ab55e4", title: "8b52e77e28183fa1c2cbd40933ab55e4", imagePath: "/work/8b52e77e28183fa1c2cbd40933ab55e4.jpg", imageWidth: 400, imageHeight: 400 },
  { id: "72", slug: "8e14db53061e4ef7ecec39fc4312c5c6", title: "8e14db53061e4ef7ecec39fc4312c5c6", imagePath: "/work/8e14db53061e4ef7ecec39fc4312c5c6.webp", imageWidth: 400, imageHeight: 400 },
  { id: "73", slug: "8f0c39f2227df28f7654821fb7b07146", title: "8f0c39f2227df28f7654821fb7b07146", imagePath: "/work/8f0c39f2227df28f7654821fb7b07146.jpg", imageWidth: 400, imageHeight: 400 },
  { id: "74", slug: "8fa84e99071db1dd1308c35b056f6405", title: "8fa84e99071db1dd1308c35b056f6405", imagePath: "/work/8fa84e99071db1dd1308c35b056f6405.jpg", imageWidth: 400, imageHeight: 400 },
  { id: "75", slug: "8fef07ca709ae0d3730ccd759dadeb74", title: "8fef07ca709ae0d3730ccd759dadeb74", imagePath: "/work/8fef07ca709ae0d3730ccd759dadeb74.jpg", imageWidth: 400, imageHeight: 400 },
  { id: "76", slug: "91e493965bea7dbd6e5f96f71dbf0ba0", title: "91e493965bea7dbd6e5f96f71dbf0ba0", imagePath: "/work/91e493965bea7dbd6e5f96f71dbf0ba0.jpg", imageWidth: 400, imageHeight: 400 },
  { id: "77", slug: "9386845657dc87f648273cd6b4c1a307", title: "9386845657dc87f648273cd6b4c1a307", imagePath: "/work/9386845657dc87f648273cd6b4c1a307.webp", imageWidth: 400, imageHeight: 400 },
  { id: "79", slug: "9718de62f3278786996d594fec7afdf3", title: "9718de62f3278786996d594fec7afdf3", imagePath: "/work/9718de62f3278786996d594fec7afdf3.jpg", imageWidth: 400, imageHeight: 400 },
  { id: "80", slug: "97a462a909e171dd528abadfd2574ce2", title: "97a462a909e171dd528abadfd2574ce2", imagePath: "/work/97a462a909e171dd528abadfd2574ce2.jpg", imageWidth: 400, imageHeight: 400 },
  { id: "81", slug: "99d76a0ebaaf3fe805e9dc682e64156d", title: "99d76a0ebaaf3fe805e9dc682e64156d", imagePath: "/work/99d76a0ebaaf3fe805e9dc682e64156d.webp", imageWidth: 400, imageHeight: 400 },
  { id: "82", slug: "9b3490677bf4e2b46b829efa58d90569", title: "9b3490677bf4e2b46b829efa58d90569", imagePath: "/work/9b3490677bf4e2b46b829efa58d90569.jpg", imageWidth: 400, imageHeight: 400 },
  { id: "83", slug: "9eb53fe86aec587255a218974a2a6de9", title: "9eb53fe86aec587255a218974a2a6de9", imagePath: "/work/9eb53fe86aec587255a218974a2a6de9.jpg", imageWidth: 400, imageHeight: 400 },
  { id: "84", slug: "a06ed09e80bafc39dce0bcbf60792a73", title: "a06ed09e80bafc39dce0bcbf60792a73", imagePath: "/work/a06ed09e80bafc39dce0bcbf60792a73.webp", imageWidth: 400, imageHeight: 400 },
  { id: "85", slug: "a1d24433de1b6d7c827abf703326a004", title: "a1d24433de1b6d7c827abf703326a004", imagePath: "/work/a1d24433de1b6d7c827abf703326a004.jpg", imageWidth: 400, imageHeight: 400 },
  { id: "86", slug: "a24ac9fea205bc28df0d71b894a7dceb", title: "a24ac9fea205bc28df0d71b894a7dceb", imagePath: "/work/a24ac9fea205bc28df0d71b894a7dceb.jpg", imageWidth: 400, imageHeight: 400 },
  { id: "87", slug: "a665786e9fe81e98c1e1684c07b3d016", title: "a665786e9fe81e98c1e1684c07b3d016", imagePath: "/work/a665786e9fe81e98c1e1684c07b3d016.jpg", imageWidth: 400, imageHeight: 400 },
  { id: "88", slug: "a7f5252605f0640e7e6eae984c89e8aa", title: "a7f5252605f0640e7e6eae984c89e8aa", imagePath: "/work/a7f5252605f0640e7e6eae984c89e8aa.jpg", imageWidth: 400, imageHeight: 400 },
  { id: "89", slug: "aaadda69cb82ce5a185a6d62b610cf2d", title: "aaadda69cb82ce5a185a6d62b610cf2d", imagePath: "/work/aaadda69cb82ce5a185a6d62b610cf2d.jpg", imageWidth: 400, imageHeight: 400 },
  { id: "90", slug: "aef7a0ecfac5462e0906c82910b27ba6", title: "aef7a0ecfac5462e0906c82910b27ba6", imagePath: "/work/aef7a0ecfac5462e0906c82910b27ba6.jpg", imageWidth: 400, imageHeight: 400 },
  { id: "91", slug: "b10fb4f99b34acbf519daadb2866ec70", title: "b10fb4f99b34acbf519daadb2866ec70", imagePath: "/work/b10fb4f99b34acbf519daadb2866ec70.jpg", imageWidth: 400, imageHeight: 400 },
  { id: "92", slug: "b1bd0031fa23c5a5fd241f3988343567", title: "b1bd0031fa23c5a5fd241f3988343567", imagePath: "/work/b1bd0031fa23c5a5fd241f3988343567.jpg", imageWidth: 400, imageHeight: 400 },
  { id: "94", slug: "b21581355caf3a74e200fda7dd8b1e15", title: "b21581355caf3a74e200fda7dd8b1e15", imagePath: "/work/b21581355caf3a74e200fda7dd8b1e15.jpg", imageWidth: 400, imageHeight: 400 },
  { id: "95", slug: "b2d09d5245516a2c826fad73620845f3", title: "b2d09d5245516a2c826fad73620845f3", imagePath: "/work/b2d09d5245516a2c826fad73620845f3.jpg", imageWidth: 400, imageHeight: 400 },
  { id: "96", slug: "b42ae2b8900f492557b7c3347e6bb09d", title: "b42ae2b8900f492557b7c3347e6bb09d", imagePath: "/work/b42ae2b8900f492557b7c3347e6bb09d.jpg", imageWidth: 400, imageHeight: 400 },
  { id: "97", slug: "b54fc72d38d5f1a51a0576371551c40a", title: "b54fc72d38d5f1a51a0576371551c40a", imagePath: "/work/b54fc72d38d5f1a51a0576371551c40a.jpg", imageWidth: 400, imageHeight: 400 },
  { id: "98", slug: "b96f6e651a4e4f8391b10321ab014190", title: "b96f6e651a4e4f8391b10321ab014190", imagePath: "/work/b96f6e651a4e4f8391b10321ab014190.jpg", imageWidth: 400, imageHeight: 400 },
  { id: "99", slug: "ba7e258a7f01154c63ee0fa5170b46cb", title: "ba7e258a7f01154c63ee0fa5170b46cb", imagePath: "/work/ba7e258a7f01154c63ee0fa5170b46cb.jpg", imageWidth: 400, imageHeight: 400 },
  { id: "100", slug: "be353d0e769db385ebbb180e5fbd0975", title: "be353d0e769db385ebbb180e5fbd0975", imagePath: "/work/be353d0e769db385ebbb180e5fbd0975.webp", imageWidth: 400, imageHeight: 400 },
  { id: "101", slug: "c12cab08cb545a670d8d8b1632404df3", title: "c12cab08cb545a670d8d8b1632404df3", imagePath: "/work/c12cab08cb545a670d8d8b1632404df3.webp", imageWidth: 400, imageHeight: 400 },
  { id: "102", slug: "c190ef99a79dd67dc41e0fa13ebfa4f7", title: "c190ef99a79dd67dc41e0fa13ebfa4f7", imagePath: "/work/c190ef99a79dd67dc41e0fa13ebfa4f7.jpg", imageWidth: 400, imageHeight: 400 },
  { id: "103", slug: "c1c4cb7bef667c763347756cb481587a", title: "c1c4cb7bef667c763347756cb481587a", imagePath: "/work/c1c4cb7bef667c763347756cb481587a.jpg", imageWidth: 400, imageHeight: 400 },
  { id: "104", slug: "c51a76d70d5c6e817f85c1793a63706b", title: "c51a76d70d5c6e817f85c1793a63706b", imagePath: "/work/c51a76d70d5c6e817f85c1793a63706b.jpg", imageWidth: 400, imageHeight: 400 },
  { id: "105", slug: "c6ed13113c9b0c8c76c46cf5fc50da6b", title: "c6ed13113c9b0c8c76c46cf5fc50da6b", imagePath: "/work/c6ed13113c9b0c8c76c46cf5fc50da6b.jpg", imageWidth: 400, imageHeight: 400 },
  { id: "106", slug: "c8d74b88d854d9e73fe1b61989050bea", title: "c8d74b88d854d9e73fe1b61989050bea", imagePath: "/work/c8d74b88d854d9e73fe1b61989050bea.jpg", imageWidth: 400, imageHeight: 400 },
  { id: "107", slug: "ccb09cfef08bb1401d92cacdb79ab9e3", title: "ccb09cfef08bb1401d92cacdb79ab9e3", imagePath: "/work/ccb09cfef08bb1401d92cacdb79ab9e3.jpg", imageWidth: 400, imageHeight: 400 },
  { id: "108", slug: "cf33aaec03f42b24a528c5151ec04391", title: "cf33aaec03f42b24a528c5151ec04391", imagePath: "/work/cf33aaec03f42b24a528c5151ec04391.jpg", imageWidth: 400, imageHeight: 400 },
  { id: "109", slug: "d12cab88118ba328b3492a72d2eb76ba", title: "d12cab88118ba328b3492a72d2eb76ba", imagePath: "/work/d12cab88118ba328b3492a72d2eb76ba.webp", imageWidth: 400, imageHeight: 400 },
  { id: "110", slug: "d2d6a5085720110e10a6d336b8178ece", title: "d2d6a5085720110e10a6d336b8178ece", imagePath: "/work/d2d6a5085720110e10a6d336b8178ece.jpg", imageWidth: 400, imageHeight: 400 },
  { id: "111", slug: "d32828e7f59d44466deceeed0d6ef3ff", title: "d32828e7f59d44466deceeed0d6ef3ff", imagePath: "/work/d32828e7f59d44466deceeed0d6ef3ff.webp", imageWidth: 400, imageHeight: 400 },
  { id: "112", slug: "d4159b3d2bad781a6fd3261f92f0e7d6", title: "d4159b3d2bad781a6fd3261f92f0e7d6", imagePath: "/work/d4159b3d2bad781a6fd3261f92f0e7d6.webp", imageWidth: 400, imageHeight: 400 },
  { id: "113", slug: "d467fb2f31e8221fe287244e5753ab39", title: "d467fb2f31e8221fe287244e5753ab39", imagePath: "/work/d467fb2f31e8221fe287244e5753ab39.jpg", imageWidth: 400, imageHeight: 400 },
  { id: "114", slug: "d4dcecf0d24dbce79a4050cbb30b2132", title: "d4dcecf0d24dbce79a4050cbb30b2132", imagePath: "/work/d4dcecf0d24dbce79a4050cbb30b2132.webp", imageWidth: 400, imageHeight: 400 },
  { id: "115", slug: "d5b305f0a264ecc3b4fda7acd8c5c5a0", title: "d5b305f0a264ecc3b4fda7acd8c5c5a0", imagePath: "/work/d5b305f0a264ecc3b4fda7acd8c5c5a0.jpg", imageWidth: 400, imageHeight: 400 },
  { id: "116", slug: "d5c74a78e9889683903725d2126ffdc4", title: "d5c74a78e9889683903725d2126ffdc4", imagePath: "/work/d5c74a78e9889683903725d2126ffdc4.webp", imageWidth: 400, imageHeight: 400 },
  { id: "117", slug: "dc12a9d546a644431948087c99041e1f", title: "dc12a9d546a644431948087c99041e1f", imagePath: "/work/dc12a9d546a644431948087c99041e1f.webp", imageWidth: 400, imageHeight: 400 },
  { id: "118", slug: "e2334541fe60b21640e3430b49f750a6", title: "e2334541fe60b21640e3430b49f750a6", imagePath: "/work/e2334541fe60b21640e3430b49f750a6.webp", imageWidth: 400, imageHeight: 400 },
  { id: "119", slug: "e23db149aecc30773334965832cfc5d8", title: "e23db149aecc30773334965832cfc5d8", imagePath: "/work/e23db149aecc30773334965832cfc5d8.webp", imageWidth: 400, imageHeight: 400 },
  { id: "120", slug: "e2910232efd15179cb75efb2ec422d98", title: "e2910232efd15179cb75efb2ec422d98", imagePath: "/work/e2910232efd15179cb75efb2ec422d98.jpg", imageWidth: 400, imageHeight: 400 },
  { id: "122", slug: "e768f328557cf00950f0693ad34962ec", title: "e768f328557cf00950f0693ad34962ec", imagePath: "/work/e768f328557cf00950f0693ad34962ec.jpg", imageWidth: 400, imageHeight: 400 },
  { id: "123", slug: "edffcef4aa49d0d30ef6f3f3a49a5b3e", title: "edffcef4aa49d0d30ef6f3f3a49a5b3e", imagePath: "/work/edffcef4aa49d0d30ef6f3f3a49a5b3e.jpg", imageWidth: 400, imageHeight: 400 },
  { id: "124", slug: "f0e224481e847de0c6fa8a9fb94c2297", title: "f0e224481e847de0c6fa8a9fb94c2297", imagePath: "/work/f0e224481e847de0c6fa8a9fb94c2297.jpg", imageWidth: 400, imageHeight: 400 },
  { id: "125", slug: "f63987a4239956b313d2e684a591bf19", title: "f63987a4239956b313d2e684a591bf19", imagePath: "/work/f63987a4239956b313d2e684a591bf19.jpg", imageWidth: 400, imageHeight: 400 },
  { id: "126", slug: "fa663ce4193062ce45535478a4d9eee9", title: "fa663ce4193062ce45535478a4d9eee9", imagePath: "/work/fa663ce4193062ce45535478a4d9eee9.jpg", imageWidth: 400, imageHeight: 400 },
  { id: "127", slug: "fd8697e72dbe5d963c766f642bd3708f", title: "fd8697e72dbe5d963c766f642bd3708f", imagePath: "/work/fd8697e72dbe5d963c766f642bd3708f.jpg", imageWidth: 400, imageHeight: 400 },
  { id: "128", slug: "fde54dbd57ae4df594530aae7b17008a", title: "fde54dbd57ae4df594530aae7b17008a", imagePath: "/work/fde54dbd57ae4df594530aae7b17008a.jpg", imageWidth: 400, imageHeight: 400 },
  { id: "129", slug: "fe338641586b3394283c49966790260b", title: "fe338641586b3394283c49966790260b", imagePath: "/work/fe338641586b3394283c49966790260b.jpg", imageWidth: 400, imageHeight: 400 },
];

export const workItems: WorkItem[] = workItemsData.map((item, index) => ({
  ...item,
  title: `Logo Project ${index + 1}`,
}));

/** Slugs for the "Work that speaks first" section (home), in display order. */
export const workPreviewSlugs = [
  "a1d24433de1b6d7c827abf703326a004",
  "5e57d650fe8b75e3172128691f08104d",
  "a665786e9fe81e98c1e1684c07b3d016",
  "aaadda69cb82ce5a185a6d62b610cf2d",
  "77c9f9a371ccd027957125d2aec577dd",
  "548ba17c216e1e889169807c4b0b81ba",
] as const;

/** Tags for each preview item (same order as workPreviewSlugs). */
export const workPreviewTags = [
  "Clipping Platform",
  "web3 platform",
  "Investors Club",
  "Transport company",
  "Designer brand",
  "Clothing Line",
] as const;

export function getWorkBySlug(slug: string): WorkItem | undefined {
  return workItems.find((w) => w.slug === slug);
}

export function getWorkPreview(limitOrSlugOrder: number | readonly string[] = 6): WorkItem[] {
  if (Array.isArray(limitOrSlugOrder)) {
    return limitOrSlugOrder
      .map((slug) => workItems.find((w) => w.slug === slug))
      .filter((w): w is WorkItem => w != null);
  }
  const limit = limitOrSlugOrder as number;
  return workItems.slice(0, limit);
}
