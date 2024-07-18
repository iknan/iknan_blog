"use strict";(self.webpackChunkvuepress_theme_hope_template=self.webpackChunkvuepress_theme_hope_template||[]).push([[5552],{9874:(e,t)=>{t.A=(e,t)=>{const a=e.__vccOpts||e;for(const[e,n]of t)a[e]=n;return a}},5046:(e,t,a)=>{a.r(t),a.d(t,{comp:()=>i,data:()=>c});var n=a(2360);const o=(0,n.Lk)("h1",{id:"区块链实现效果",tabindex:"-1"},[(0,n.Lk)("a",{class:"header-anchor",href:"#区块链实现效果"},[(0,n.Lk)("span",null,"区块链实现效果")])],-1),r=(0,n.Fv)('<pre><code>可以通过编写test.sol文件或者结合项目前后端结合进行测试\n</code></pre><p>在命令行窗口对区块链智能合约进行测试通常涉及以下步骤。这些步骤假设您已经配置好了 Truffle 环境并且有一个基本的智能合约可以用于测试。</p><h2 id="_1-启动测试网络或连接到现有网络" tabindex="-1"><a class="header-anchor" href="#_1-启动测试网络或连接到现有网络"><span>1. 启动测试网络或连接到现有网络</span></a></h2><p>首先，您需要启动一个区块链测试网络（如 Ganache）或连接到现有的开发/测试网络（如 Ropsten、Rinkeby 等）。</p><h2 id="启动-ganache-本地测试网络" tabindex="-1"><a class="header-anchor" href="#启动-ganache-本地测试网络"><span>启动 Ganache（本地测试网络）</span></a></h2><p>打开软件启动即可 这将启动本地 Ganache 测试网络，默认监听在 <code>127.0.0.1:7545</code>。</p><h2 id="_2-编译智能合约" tabindex="-1"><a class="header-anchor" href="#_2-编译智能合约"><span>2. 编译智能合约</span></a></h2><p>在智能合约项目的根目录下，使用 Truffle 编译您的智能合约。</p><pre><code>```bash\ntruffle compile\n```\n</code></pre><p>这将编译 Solidity 合约，并生成相应的 ABI 和 bytecode。</p><h2 id="_3-部署智能合约到测试网络" tabindex="-1"><a class="header-anchor" href="#_3-部署智能合约到测试网络"><span>3. 部署智能合约到测试网络</span></a></h2><p>使用 Truffle 进行智能合约的部署。确保在 <code>truffle-config.js</code> 中配置了正确的网络连接选项（如 Ganache 的 localhost）。</p><pre><code>```bash\ntruffle migrate --network development\n```\n</code></pre><p>这会将编译后的合约部署到指定的开发网络（这里使用的是 Ganache，也可以是其他网络）。</p><h2 id="_4-编写和运行测试脚本" tabindex="-1"><a class="header-anchor" href="#_4-编写和运行测试脚本"><span>4. 编写和运行测试脚本</span></a></h2><p>在 Truffle 项目中，测试用例位于 <code>test</code> 目录中。您可以编写各种测试来验证智能合约的各种功能和边界条件。</p><h2 id="创建测试用例" tabindex="-1"><a class="header-anchor" href="#创建测试用例"><span>创建测试用例</span></a></h2><p>在 <code>test</code> 目录中创建 JavaScript 测试脚本，例如 <code>DataStorage.test.js</code>。</p><pre><code>    ```javascript\n// DataStorage.test.js\n\nconst DataStorage = artifacts.require(&quot;DataStorage&quot;);\n\ncontract(&quot;DataStorage&quot;, (accounts) =&gt; {\n let dataStorageInstance;\n\n before(async () =&gt; {\n   dataStorageInstance = await DataStorage.deployed();\n });\n\nit(&quot;should store data correctly&quot;, async () =&gt; {\n  const result = await dataStorageInstance.storeData(\n   &quot;Type&quot;,\n   &quot;Way&quot;,\n   &quot;AcqTime&quot;,\n   &quot;Place&quot;,\n   &quot;Temperature&quot;,\n   &quot;Pressure&quot;,\n    &quot;Altitude&quot;,\n    { from: accounts[0] }\n   );\n\n   assert.equal(result.logs[0].event, &quot;DataStored&quot;, &quot;DataStored event should be emitted&quot;);\n   // Add more assertions as needed\n });\n\n it(&quot;should retrieve stored data&quot;, async () =&gt; {\n   const dataId = 1; // Assuming you know the ID of the stored data\n  const data = await dataStorageInstance.retrieveData(dataId, { from: accounts  [0] });\n\n  assert.equal(data.id.toNumber(), dataId, &quot;Retrieved data ID should match&quot;);\n // Add more assertions as needed\n });\n});\n```\n</code></pre><h4 id="运行测试" tabindex="-1"><a class="header-anchor" href="#运行测试"><span>运行测试</span></a></h4><p>运行您的测试脚本以验证智能合约的各种功能和预期行为。</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">truffle</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> test</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>这将运行 <code>test</code> 目录中的所有测试脚本，并输出测试结果。这里会有记录 <img src="/blockchain/4.png" alt="测试结果" loading="lazy"></p>',23),s={},i=(0,a(9874).A)(s,[["render",function(e,t){return(0,n.uX)(),(0,n.CE)("div",null,[o,(0,n.Q3)(" more "),r])}]]),c=JSON.parse('{"path":"/posts/%E6%8A%80%E6%9C%AF%E6%96%87%E6%A1%A3/%E5%8C%BA%E5%9D%97%E9%93%BE/%E5%AE%9E%E7%8E%B0%E6%95%88%E6%9E%9C.html","title":"区块链实现效果","lang":"zh-CN","frontmatter":{"icon":"eos-icons:blockchain","date":"2024-06-25T00:00:00.000Z","category":["区块链","后端","技术文档","指南"],"tag":["区块链","后端","技术文档","指南"],"star":true,"head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/posts/%E6%8A%80%E6%9C%AF%E6%96%87%E6%A1%A3/%E5%8C%BA%E5%9D%97%E9%93%BE/%E5%AE%9E%E7%8E%B0%E6%95%88%E6%9E%9C.html"}],["meta",{"property":"og:site_name","content":"ik楠の空间"}],["meta",{"property":"og:title","content":"区块链实现效果"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://mister-hope.github.io/blockchain/4.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-07-18T08:19:39.000Z"}],["meta",{"property":"article:author","content":"iknan"}],["meta",{"property":"article:tag","content":"区块链"}],["meta",{"property":"article:tag","content":"后端"}],["meta",{"property":"article:tag","content":"技术文档"}],["meta",{"property":"article:tag","content":"指南"}],["meta",{"property":"article:published_time","content":"2024-06-25T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-07-18T08:19:39.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"区块链实现效果\\",\\"image\\":[\\"https://mister-hope.github.io/blockchain/4.png\\"],\\"datePublished\\":\\"2024-06-25T00:00:00.000Z\\",\\"dateModified\\":\\"2024-07-18T08:19:39.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"iknan\\",\\"url\\":\\"https://iknan.love\\"}]}"]]},"headers":[{"level":2,"title":"1. 启动测试网络或连接到现有网络","slug":"_1-启动测试网络或连接到现有网络","link":"#_1-启动测试网络或连接到现有网络","children":[]},{"level":2,"title":"启动 Ganache（本地测试网络）","slug":"启动-ganache-本地测试网络","link":"#启动-ganache-本地测试网络","children":[]},{"level":2,"title":"2. 编译智能合约","slug":"_2-编译智能合约","link":"#_2-编译智能合约","children":[]},{"level":2,"title":"3. 部署智能合约到测试网络","slug":"_3-部署智能合约到测试网络","link":"#_3-部署智能合约到测试网络","children":[]},{"level":2,"title":"4. 编写和运行测试脚本","slug":"_4-编写和运行测试脚本","link":"#_4-编写和运行测试脚本","children":[]},{"level":2,"title":"创建测试用例","slug":"创建测试用例","link":"#创建测试用例","children":[]}],"git":{"createdTime":1720258608000,"updatedTime":1721290779000,"contributors":[{"name":"iknan","email":"149158995+iknan@users.noreply.github.com","commits":3}]},"readingTime":{"minutes":1.92,"words":577},"filePathRelative":"posts/技术文档/区块链/实现效果.md","localizedDate":"2024年6月25日","excerpt":"\\n"}')}}]);