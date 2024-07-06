"use strict";(self.webpackChunkvuepress_theme_hope_template=self.webpackChunkvuepress_theme_hope_template||[]).push([[327],{9874:(e,i)=>{i.A=(e,i)=>{const s=e.__vccOpts||e;for(const[e,a]of i)s[e]=a;return s}},3766:(e,i,s)=>{s.r(i),s.d(i,{comp:()=>l,data:()=>h});var a=s(2360);const n=[(0,a.Fv)('<h1 id="vue的安装与配置" tabindex="-1"><a class="header-anchor" href="#vue的安装与配置"><span>vue的安装与配置</span></a></h1><h2 id="_1-node-js安装" tabindex="-1"><a class="header-anchor" href="#_1-node-js安装"><span>1.node.js安装</span></a></h2><h3 id="_1-网站-下载-node-js-中文网-nodejs-cn" tabindex="-1"><a class="header-anchor" href="#_1-网站-下载-node-js-中文网-nodejs-cn"><span>1.网站：<a href="https://nodejs.cn/download/" target="_blank" rel="noopener noreferrer">下载 | Node.js 中文网 (nodejs.cn)</a></span></a></h3><h3 id="_2-直接下载安装-一直下一步即可-修改安装地址时路径不要有中文" tabindex="-1"><a class="header-anchor" href="#_2-直接下载安装-一直下一步即可-修改安装地址时路径不要有中文"><span>2.直接下载安装，一直下一步即可（修改安装地址时路径不要有中文）</span></a></h3><h3 id="_3-测试是否安装成功-打开cmd窗口" tabindex="-1"><a class="header-anchor" href="#_3-测试是否安装成功-打开cmd窗口"><span>3.测试是否安装成功,打开cmd窗口</span></a></h3><p>输入node -v //显示node.js版本</p><p>输入npm -v //显示npm版本</p><h3 id="_4-在安装路径下创建两个文件夹node-cache和node-global" tabindex="-1"><a class="header-anchor" href="#_4-在安装路径下创建两个文件夹node-cache和node-global"><span>4.在安装路径下创建两个文件夹node_cache和node_global</span></a></h3><h3 id="_5-使用管理员身份打开cmd窗口-输入以下代码" tabindex="-1"><a class="header-anchor" href="#_5-使用管理员身份打开cmd窗口-输入以下代码"><span>5.使用管理员身份打开cmd窗口，输入以下代码</span></a></h3><p>​ (1)npm config set prefix &quot;路径\\node_globle&quot;(替换即可)</p><div class="language-nmp line-numbers-mode" data-highlighter="shiki" data-ext="nmp" data-title="nmp" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>npm config set prefix &quot;D:\\web\\node.js\\node_global&quot;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>(2)npm config set cache &quot;路径\\node_globle&quot;(替换即可)</p><div class="language-npm line-numbers-mode" data-highlighter="shiki" data-ext="npm" data-title="npm" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>npm config set cache &quot;D:\\web\\node.js\\node_cache&quot;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>检查</p><div class="language-npm line-numbers-mode" data-highlighter="shiki" data-ext="npm" data-title="npm" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>npm config get cache</span></span>\n<span class="line"><span>npm config get prefix</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_6-配置环境变量" tabindex="-1"><a class="header-anchor" href="#_6-配置环境变量"><span>6.配置环境变量</span></a></h3><p>(1) 在系统变量中新建![image-20240507152950202]</p><p>如果node_global中没有node_modules,需要创建node_modules文件夹</p><p>然后在Path中添加 <code>%NODE_PATH%</code></p><p>(2)在用户变量中双击Path</p><p>把这个修改成刚刚创建的node_global文件夹</p><h3 id="_7-安装淘宝镜像中央仓库" tabindex="-1"><a class="header-anchor" href="#_7-安装淘宝镜像中央仓库"><span>7.安装淘宝镜像中央仓库</span></a></h3><p>npm是国外服务器，中国用户下载内容速度受限。推荐使用中国镜像cnpm，其内容与npm同步，是淘宝设立的服务器。</p><p>命令行指令：</p><p>npm config set registry <a href="https://registry.npmmirror.com" target="_blank" rel="noopener noreferrer">https://registry.npmmirror.com</a></p><p>验证淘宝镜像命令：npm config get registry</p><h2 id="_2-webpack的安装" tabindex="-1"><a class="header-anchor" href="#_2-webpack的安装"><span>2.webpack的安装</span></a></h2><h3 id="_1-窗口命令" tabindex="-1"><a class="header-anchor" href="#_1-窗口命令"><span>(1)窗口命令</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> install</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> -g</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> webpack</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">     //下载</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> install</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> --save-dev</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> webpack</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">  //安装到devDependencies,运行</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>查看webpack版本</p><p><code>npm list webpack</code></p><p>注意：如果安装的是webpack v4+版本(即比v4高的版本)，则还需要安装webpack-cli或者webpack-command，否则webpack命令运行不了。执行：</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> uninstall</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> webpack-cli</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">    //卸载本地安装的webpack-cli</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> install</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> -g</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> webpack-cli</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">       //全局安装webpack-cli</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> install</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> --save-dev</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> webpack-cli</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">   //把webpack-cli安装到devDependencies</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-安装vue-cli" tabindex="-1"><a class="header-anchor" href="#_3-安装vue-cli"><span>3.安装vue.cli</span></a></h2><p>安装vue Cli</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> install</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> -g</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> vue-cli</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>​</p>',37)],t={},l=(0,s(9874).A)(t,[["render",function(e,i){return(0,a.uX)(),(0,a.CE)("div",null,n)}]]),h=JSON.parse('{"path":"/posts/%E6%8A%80%E6%9C%AF%E6%96%87%E6%A1%A3/vue%E7%9A%84%E5%AE%89%E8%A3%85%E4%B8%8E%E9%85%8D%E7%BD%AE.html","title":"vue的安装与配置","lang":"zh-CN","frontmatter":{"icon":"vscode-icons:file-type-vueconfig","date":"2022-01-02T00:00:00.000Z","category":["vue","前端","技术文档"],"tag":["vue","前端","技术文档"],"star":true,"description":"vue的安装与配置 1.node.js安装 1.网站：下载 | Node.js 中文网 (nodejs.cn) 2.直接下载安装，一直下一步即可（修改安装地址时路径不要有中文） 3.测试是否安装成功,打开cmd窗口 输入node -v //显示node.js版本 输入npm -v //显示npm版本 4.在安装路径下创建两个文件夹node_cache和...","head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/posts/%E6%8A%80%E6%9C%AF%E6%96%87%E6%A1%A3/vue%E7%9A%84%E5%AE%89%E8%A3%85%E4%B8%8E%E9%85%8D%E7%BD%AE.html"}],["meta",{"property":"og:site_name","content":"ik楠の空间"}],["meta",{"property":"og:title","content":"vue的安装与配置"}],["meta",{"property":"og:description","content":"vue的安装与配置 1.node.js安装 1.网站：下载 | Node.js 中文网 (nodejs.cn) 2.直接下载安装，一直下一步即可（修改安装地址时路径不要有中文） 3.测试是否安装成功,打开cmd窗口 输入node -v //显示node.js版本 输入npm -v //显示npm版本 4.在安装路径下创建两个文件夹node_cache和..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-07-06T09:36:48.000Z"}],["meta",{"property":"article:author","content":"iknan"}],["meta",{"property":"article:tag","content":"vue"}],["meta",{"property":"article:tag","content":"前端"}],["meta",{"property":"article:tag","content":"技术文档"}],["meta",{"property":"article:published_time","content":"2022-01-02T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-07-06T09:36:48.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"vue的安装与配置\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2022-01-02T00:00:00.000Z\\",\\"dateModified\\":\\"2024-07-06T09:36:48.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"iknan\\",\\"url\\":\\"https://iknan.love\\"}]}"]]},"headers":[{"level":2,"title":"1.node.js安装","slug":"_1-node-js安装","link":"#_1-node-js安装","children":[{"level":3,"title":"1.网站：下载 | Node.js 中文网 (nodejs.cn)","slug":"_1-网站-下载-node-js-中文网-nodejs-cn","link":"#_1-网站-下载-node-js-中文网-nodejs-cn","children":[]},{"level":3,"title":"2.直接下载安装，一直下一步即可（修改安装地址时路径不要有中文）","slug":"_2-直接下载安装-一直下一步即可-修改安装地址时路径不要有中文","link":"#_2-直接下载安装-一直下一步即可-修改安装地址时路径不要有中文","children":[]},{"level":3,"title":"3.测试是否安装成功,打开cmd窗口","slug":"_3-测试是否安装成功-打开cmd窗口","link":"#_3-测试是否安装成功-打开cmd窗口","children":[]},{"level":3,"title":"4.在安装路径下创建两个文件夹node_cache和node_global","slug":"_4-在安装路径下创建两个文件夹node-cache和node-global","link":"#_4-在安装路径下创建两个文件夹node-cache和node-global","children":[]},{"level":3,"title":"5.使用管理员身份打开cmd窗口，输入以下代码","slug":"_5-使用管理员身份打开cmd窗口-输入以下代码","link":"#_5-使用管理员身份打开cmd窗口-输入以下代码","children":[]},{"level":3,"title":"6.配置环境变量","slug":"_6-配置环境变量","link":"#_6-配置环境变量","children":[]},{"level":3,"title":"7.安装淘宝镜像中央仓库","slug":"_7-安装淘宝镜像中央仓库","link":"#_7-安装淘宝镜像中央仓库","children":[]}]},{"level":2,"title":"2.webpack的安装","slug":"_2-webpack的安装","link":"#_2-webpack的安装","children":[{"level":3,"title":"(1)窗口命令","slug":"_1-窗口命令","link":"#_1-窗口命令","children":[]}]},{"level":2,"title":"3.安装vue.cli","slug":"_3-安装vue-cli","link":"#_3-安装vue-cli","children":[]}],"git":{"createdTime":1717659009000,"updatedTime":1720258608000,"contributors":[{"name":"iknan","email":"149158995+iknan@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":1.6,"words":479},"filePathRelative":"posts/技术文档/vue的安装与配置.md","localizedDate":"2022年1月2日","excerpt":"\\n<h2>1.node.js安装</h2>\\n<h3><a class=\\"header-anchor\\" href=\\"#_1-网站-下载-node-js-中文网-nodejs-cn\\"><span>1.网站：</span></a><a href=\\"https://nodejs.cn/download/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">下载 | Node.js 中文网 (nodejs.cn)</a></h3>\\n<h3>2.直接下载安装，一直下一步即可（修改安装地址时路径不要有中文）</h3>\\n<h3>3.测试是否安装成功,打开cmd窗口</h3>\\n","autoDesc":true}')}}]);