if(!self.define){let e,i={};const c=(c,a)=>(c=new URL(c+".js",a).href,i[c]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=c,e.onload=i,document.head.appendChild(e)}else e=c,importScripts(c),i()})).then((()=>{let e=i[c];if(!e)throw new Error(`Module ${c} didn’t register its module`);return e})));self.define=(a,d)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(i[r])return;let s={};const f=e=>c(e,r),b={module:{uri:r},exports:s,require:f};i[r]=Promise.all(a.map((e=>b[e]||f(e)))).then((e=>(d(...e),s)))}}define(["./workbox-d249b2c8"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"2022/05/03/NPF工具箱下载/index.html",revision:"ff3e28d262a06f40c01c14d4cfbf4fe5"},{url:"2022/05/03/VIP视频解析器下载/index.html",revision:"7e1581ec1d17ae4231148d5544eb62f6"},{url:"2022/05/03/欢迎/index.html",revision:"3d5324d152047ca593bb709656cc752f"},{url:"2022/05/03/视频播放器下载/index.html",revision:"eaa7e2c69098fcb546479cadfae74f6a"},{url:"2022/05/04/喝杯下午茶/index.html",revision:"73a7313dcce20955b3a1b5940580298a"},{url:"2022/08/28/90句毒鸡汤/index.html",revision:"4cd07f2e95c535e70857971d6a1fa882"},{url:"2022/11/06/hello-world/index.html",revision:"4fa26800e51f8cf9f04a265e64f700bf"},{url:"404.html",revision:"388ea66b9b76dc97cb64a7dc6fbb6ba0"},{url:"about/index.html",revision:"ab696e2556e3c382add8939b2f5f6bd6"},{url:"archives/2022/05/index.html",revision:"c33c53d77debacbc36c812d836ddbbc5"},{url:"archives/2022/08/index.html",revision:"0e7f8d3e1cfb3ca3446834cac6372244"},{url:"archives/2022/11/index.html",revision:"35614b0066b7ab359cd0b695f81549d0"},{url:"archives/2022/index.html",revision:"a76f9b04500b8b54851d076aa3a986c7"},{url:"archives/index.html",revision:"d2a513478c14598e73ba2505d428251c"},{url:"assets/algolia/algoliasearch.js",revision:"d5d2500bfe8443b42baaefe4996ee532"},{url:"assets/algolia/algoliasearch.min.js",revision:"9c5e51e57e2b1d888950bf4cb5708c49"},{url:"assets/algolia/algoliasearchLite.js",revision:"ce9b0e62645c036a143f639b92e7789f"},{url:"assets/algolia/algoliasearchLite.min.js",revision:"c2d71f042c879659dbc97f8853b62f21"},{url:"categories/index.html",revision:"fbd7c6e88c1eb707e35a503986e009cc"},{url:"categories/其他/index.html",revision:"62437a17426153b7cd5b32dd24911575"},{url:"categories/实用手机软件/index.html",revision:"71152a0a1219c48be54c2b14f70a09f5"},{url:"categories/实用电脑软件/index.html",revision:"06b26d72585d6375b5e973a69cb69274"},{url:"css/hbe.style.css",revision:"a8bc819e01e001d3bc6ae03a2afad957"},{url:"css/index.css",revision:"e16c66b6b6783daebac248eda167030f"},{url:"css/progress_bar.css",revision:"ab7bbd8e0f95cc8028fce0bb4b10bb1f"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"fengjing/index.html",revision:"93493e2dbcc0ced17bdb19176b17fc31"},{url:"font/font.css",revision:"aef188cea414ce7e2860625b60f63c2a"},{url:"img/113958-153525479855be.jpg",revision:"d6313ed729722202f0a8d56d2f7dfb2e"},{url:"img/154125-1657006885e9be.jpg",revision:"074e95c71f4c101cd5cc415ea60cfcfd"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/favicon.png",revision:"7a8c47cb5a2149c1a1af21e90ecd9ca7"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"img/风景/0011024012205742_b.jpg",revision:"0236d2245a20f32dc283f48602f936f1"},{url:"img/风景/20150124214400596900_0.jpg",revision:"8e1fc807ae3135c9b2252ac2a5bab4df"},{url:"img/风景/202001160801158167.jpg",revision:"838fab5759d12d367452b515ef93822c"},{url:"img/风景/365.jpg",revision:"9c53d371133eef9115a15d827e3e3fe4"},{url:"img/风景/39036241_2.jpg",revision:"820fc9e0f908302de5655d8db61f0d81"},{url:"img/风景/477cf4aa0efd15f9235e2d520dccbed3.jpg",revision:"477cf4aa0efd15f9235e2d520dccbed3"},{url:"img/风景/jvparicbw5c.jpg",revision:"0ac8df257eed8b0fe033882900210fae"},{url:"img/风景/lansehaibianfengjingtupian-26541507_1.jpg",revision:"107750d57cd7d5b8ce4566626901afb5"},{url:"img/风景/t0108769b3b1fc023f1.jpg",revision:"0cb1f61d437f01652f4b1a4affe2b5a2"},{url:"img/风景/t010b60121daeafec53.jpg",revision:"2c2dfc5c08b8bfcbd3811f7eaae44448"},{url:"img/风景/t019706ca3c503c9589.jpg",revision:"43c056148a7e2ec1b1ac09ae3129a2e6"},{url:"img/风景/t01aad52e9b54574ae2.jpg",revision:"ef7b1713c1e77a311c7286f83d9d9fda"},{url:"img/风景/v2-2efcc372e4cd2dad02e6b93b3224aeac_r.jpg",revision:"67c798dda8ce30c3cf49057b28a17588"},{url:"img/风景/WuEyByBEdF_small.jpg",revision:"e7e92d1bd094418485c72b4fd6bfd704"},{url:"index.html",revision:"dd34020785b567f1bb0743b35f5d4efe"},{url:"js/main.js",revision:"b28662bf81abe2838d20faf2980f0034"},{url:"js/player.js",revision:"483ff470691395a595a376aa27e8313f"},{url:"js/search/algolia.js",revision:"308de383b932f321e04751fd1f79cffb"},{url:"js/search/local-search.js",revision:"149fcc60c1de0a818e111978d01cbd87"},{url:"js/tw_cn.js",revision:"58cb9443474ea5d84a1c4ac806c8b4b7"},{url:"js/utils.js",revision:"24971090b8b1bd5d3f538d414e270fd3"},{url:"lib/hbe.js",revision:"4a7e94ac7224adfce4b0572ca5c57fef"},{url:"link/index.html",revision:"1403b1ae795e0058462f550afc9f3f01"},{url:"music/index.html",revision:"2268ec20d1c669c9dc0d551a6a0ec9df"},{url:"photo/index.html",revision:"1b7a8135abb6971bdd612c409bf5b925"},{url:"tags/index.html",revision:"237211797276f2008e7a99e60faadab1"},{url:"tags/其他/index.html",revision:"2e5003d55b008cb2afdfaffc0f7030af"},{url:"tags/实用工具/index.html",revision:"4a09f10a4d56839a0d7e367625e072c6"},{url:"tags/毒鸡汤/index.html",revision:"20670566987691e481112fb1fb106d1b"}],{})}));
//# sourceMappingURL=service-worker.js.map
