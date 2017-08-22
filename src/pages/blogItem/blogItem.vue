<template>
    <div class="blog-item-wrap">
        <div class="container">
            <div class="row">
                <div class="col-md-10 col-md-offset-1">
                    <div class="title-wrap">
                        <div class="h2">嘻嘻嘻嘻</div>
                        <div class="desc">chichichichichihcihcichichichichichihcihchichichichichihcihcihciicchichichihcihcihciicchihcihcihciiccihciicchichichihcihcihciicchihcihcihciichciicchichichihcihcihciicchihcihcihciic</div>
                        <div class="post-time">Posted by mingrutough on July 12, 2017</div>
                    </div>
                    <div class="content-wrap">
<div class="">

				<p><img src="/img/node_express.png"></p>
<h2>从Node开始</h2>
<p>Node所提供的范式跟传统的Web服务器不同：你写的程序就是Web服务器。Node只是给你提供了一个构建Web服务器的框架。</p>

<div class="language-js highlighter-rouge"><pre class="highlight"><code>    <span class="kd">var</span> <span class="nx">http</span> <span class="o">=</span> <span class="nx">require</span><span class="p">(</span><span class="s1">'http'</span><span class="p">);</span>
    <span class="nx">http</span><span class="p">.</span><span class="nx">createServer</span><span class="p">(</span><span class="kd">function</span> <span class="p">(</span><span class="nx">req</span><span class="p">,</span><span class="nx">res</span><span class="p">)</span> <span class="p">{</span> 
        <span class="nx">res</span><span class="p">.</span><span class="nx">writeHead</span><span class="p">(</span><span class="mi">200</span><span class="p">,</span> <span class="p">{</span> <span class="s1">'Content-Type'</span><span class="p">:</span> <span class="s1">'text-plain'</span> <span class="p">});</span>
        <span class="nx">res</span><span class="p">.</span><span class="nx">end</span><span class="p">(</span><span class="s1">'hello world!'</span><span class="p">);</span>
    <span class="p">}).</span><span class="nx">listen</span><span class="p">(</span><span class="mi">3000</span><span class="p">);</span>
</code></pre>
</div>
<p>上面的js代码构建了一个简单的web服务器，之后在该文件目录下输入 node name.js就可以运行了。</p>
<h4>路由</h4>
<p>路由是指客户端提供它所发出的请求内容的机制。对基于Web的客户端/服务端程序而言，客户端在URL中指明它想要的内容，具体来说就是路径和查询字符串。
<br>
_dirname会被解析为正在执行的脚本所在的目录。所以如果你的脚本放在/home/sites/app.js中，则_dirname会被解析为/home/sites。</p>

<h2>第三章、省时省力的Express</h2>
<div class="language-js highlighter-rouge"><pre class="highlight"><code><span class="kd">var</span> <span class="nx">express</span> <span class="o">=</span> <span class="nx">require</span><span class="p">(</span><span class="s1">'express'</span><span class="p">);</span>
<span class="kd">var</span> <span class="nx">app</span> <span class="o">=</span> <span class="nx">express</span><span class="p">();</span>
<span class="kd">var</span> <span class="nx">handlebars</span> <span class="o">=</span> <span class="nx">require</span><span class="p">(</span><span class="s1">'express3-handlebars'</span><span class="p">).</span><span class="nx">create</span><span class="p">({</span><span class="na">defaultLayout</span><span class="p">:</span> <span class="s1">'main'</span><span class="p">});</span>
<span class="nx">app</span><span class="p">.</span><span class="nx">engine</span><span class="p">(</span><span class="s1">'handlebars'</span><span class="p">,</span> <span class="nx">handlebars</span><span class="p">.</span><span class="nx">engine</span><span class="p">);</span>
<span class="nx">app</span><span class="p">.</span><span class="nx">set</span><span class="p">(</span><span class="s1">'view engine'</span><span class="p">,</span> <span class="s1">'handlebars'</span><span class="p">);</span>
<span class="c1">//这段代码创建了一个视图引擎，并对Express进行了配置，将其作为默认的视图引擎。</span>

<span class="nx">app</span><span class="p">.</span><span class="nx">use</span><span class="p">(</span><span class="nx">express</span><span class="p">.</span><span class="kr">static</span><span class="p">(</span><span class="nx">_dirname</span><span class="o">+</span><span class="s1">'/public'</span><span class="p">));</span>
<span class="c1">//static中间件可以将一个或多个目录指派为包含静态资源的目录。其中的资源不经过任何处理直接发送到客户端。</span>

<span class="nx">app</span><span class="p">.</span><span class="nx">set</span><span class="p">(</span><span class="s1">'port'</span><span class="p">,</span> <span class="nx">process</span><span class="p">.</span><span class="nx">env</span><span class="p">.</span><span class="nx">PORT</span> <span class="o">||</span> <span class="mi">3000</span><span class="p">);</span>
<span class="c1">//这样我们可以在启动服务器之前通过设置环境变量覆盖端口。</span>

<span class="nx">app</span><span class="p">.</span><span class="nx">get</span><span class="p">(</span><span class="s1">'/'</span><span class="p">,</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">req</span><span class="p">,</span> <span class="nx">res</span><span class="p">)</span> <span class="p">{</span> 
    <span class="nx">res</span><span class="p">.</span><span class="nx">type</span><span class="p">(</span><span class="s1">'text/plain'</span><span class="p">);</span>
    <span class="nx">res</span><span class="p">.</span><span class="nx">send</span><span class="p">(</span><span class="s1">'index'</span><span class="p">);</span>
<span class="p">});</span>
<span class="c1">//app.get是我们添加路由的方法。在express文档中写的是app.VERB。VERB是用来指代http动词的（比如get, post...）。</span>

<span class="nx">app</span><span class="p">.</span><span class="nx">get</span><span class="p">(</span><span class="s1">'/about'</span><span class="p">,</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">req</span><span class="p">,</span> <span class="nx">res</span><span class="p">)</span> <span class="p">{</span> 
    <span class="nx">res</span><span class="p">.</span><span class="nx">type</span><span class="p">(</span><span class="s1">'text/plain'</span><span class="p">);</span>
    <span class="nx">res</span><span class="p">.</span><span class="nx">send</span><span class="p">(</span><span class="s1">'about'</span><span class="p">);</span>
<span class="p">});</span>
<span class="c1">//定制404页面</span>
<span class="nx">app</span><span class="p">.</span><span class="nx">use</span><span class="p">(</span><span class="kd">function</span> <span class="p">(</span><span class="nx">req</span><span class="p">,</span> <span class="nx">res</span><span class="p">)</span> <span class="p">{</span> 
    <span class="nx">res</span><span class="p">.</span><span class="nx">type</span><span class="p">(</span><span class="s1">'text/plain'</span><span class="p">);</span>
    <span class="nx">res</span><span class="p">.</span><span class="nx">status</span><span class="p">(</span><span class="mi">404</span><span class="p">);</span>
    <span class="nx">res</span><span class="p">.</span><span class="nx">send</span><span class="p">(</span><span class="s1">'404 - Not Found'</span><span class="p">);</span>
<span class="p">});</span>
<span class="c1">// app.use是express中添加中间件的一种方法。</span>

<span class="c1">//定制500页面</span>
<span class="nx">app</span><span class="p">.</span><span class="nx">use</span><span class="p">(</span><span class="kd">function</span> <span class="p">(</span><span class="nx">err</span><span class="p">,</span> <span class="nx">req</span><span class="p">,</span> <span class="nx">res</span><span class="p">,</span> <span class="nx">next</span><span class="p">)</span> <span class="p">{</span> 
    <span class="nx">console</span><span class="p">.</span><span class="nx">log</span><span class="p">(</span><span class="nx">err</span><span class="p">.</span><span class="nx">stack</span><span class="p">);</span>
    <span class="nx">res</span><span class="p">.</span><span class="nx">type</span><span class="p">(</span><span class="s1">'text/plain'</span><span class="p">);</span>
    <span class="nx">res</span><span class="p">.</span><span class="nx">status</span><span class="p">(</span><span class="mi">500</span><span class="p">);</span>
    <span class="nx">res</span><span class="p">.</span><span class="nx">send</span><span class="p">(</span><span class="s1">'500 - Server Error'</span><span class="p">);</span>
<span class="p">});</span>

<span class="nx">app</span><span class="p">.</span><span class="nx">listen</span><span class="p">(</span><span class="nx">app</span><span class="p">.</span><span class="nx">get</span><span class="p">(</span><span class="s1">'port'</span><span class="p">),</span> <span class="kd">function</span> <span class="p">()</span> <span class="p">{</span> 
    <span class="nx">console</span><span class="p">.</span><span class="nx">log</span><span class="p">(</span><span class="s1">'express started on 00000000'</span><span class="p">);</span>
<span class="p">});</span>
</code></pre>
</div>
<h2>第六章、请求和相应对象</h2>
<h4>请求对象</h4>
<p>请求对象(通常传递到回调方法，这意味着你可以随意命名，通常命名为req或request)的生命周期始于Node的一个核心对象http.IncomingMessage的实例。下面是一些请求对象中的属性和方法：<br></p>
<ul>
    <li>req.params
        <br>
        一个数组，包含命名过的路由参数。
    </li>
    <li>
        req.query
        <br>
        一个对象，包含以键值对存放的查询字符串参数。
    </li>
    <li>
        req.headers
        <br>
        从客户端收到的请求报头。
        <br>
        .........
    </li>
</ul>
<h4>响应对象</h4>
<p>响应对象(通常传递到回调方法，这意味着你可以随意命名，通常命名为res或resp或response)的生命周期始于Node的一个核心对象http.ServerResponse的实例。下面是一些请求对象中的属性和方法：<br></p>
<ul>
    <li>res.status(code)
        <br>
        设置http状态代码。Express默认为200（成功）。
    </li>
    <li>res.set(name,value)
        <br>
        设置响应头，这通常不需要手动设置。
    </li>
    <li>res.redirect([status],url)
        <br>
        重定向浏览器，默认重定向代码是302（建立）。
    </li>
    <li>res.send(body),res.send(status,body)
        <br>
        向客户端发送响应以及可选的状态码。Express默认内容类型是text/html。
    </li>
    <li>res.json(status,body)
        <br>
        向客户端发送JSON以及可选的状态码。
    </li>
    <li>res.type(type)
        <br>
        相当于res.set('Content-Type', 'type')。
        <br>
        。。。。。
    </li>
    
</ul>
<h4>内容渲染应用</h4>
<p>大多数情况下，渲染内容用res.render，它最大程度地根据布局渲染视图。如果你想写一个快速测试页，也许会用到res.send。你可以使用req.query得到查询字符串的值，使用req.session得到会话值，或使用req.cookie得到cookies值。<br></p>
<div class="language-js highlighter-rouge"><pre class="highlight"><code><span class="c1">//基本用法</span>
<span class="nx">app</span><span class="p">.</span><span class="nx">get</span><span class="p">(</span><span class="s1">'/about'</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span><span class="nx">req</span><span class="p">,</span> <span class="nx">res</span><span class="p">){</span>
    <span class="nx">res</span><span class="p">.</span><span class="nx">render</span><span class="p">(</span><span class="s1">'about'</span><span class="p">);</span>
<span class="p">});</span>
</code></pre>
</div>
<div class="language-js highlighter-rouge"><pre class="highlight"><code><span class="c1">//200以外的响应代码</span>
<span class="nx">app</span><span class="p">.</span><span class="nx">get</span><span class="p">(</span><span class="s1">'/error'</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span><span class="nx">req</span><span class="p">,</span> <span class="nx">res</span><span class="p">){</span>
    <span class="nx">res</span><span class="p">.</span><span class="nx">status</span><span class="p">(</span><span class="mi">500</span><span class="p">);</span>
    <span class="nx">res</span><span class="p">.</span><span class="nx">render</span><span class="p">(</span><span class="s1">'error'</span><span class="p">);</span>
<span class="p">});</span>
<span class="c1">//或是一行。。。。。</span>
<span class="nx">app</span><span class="p">.</span><span class="nx">get</span><span class="p">(</span><span class="s1">'/error'</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span><span class="nx">req</span><span class="p">,</span> <span class="nx">res</span><span class="p">){</span>
    <span class="nx">res</span><span class="p">.</span><span class="nx">status</span><span class="p">(</span><span class="mi">500</span><span class="p">).</span><span class="nx">render</span><span class="p">(</span><span class="s1">'error'</span><span class="p">);</span>
<span class="p">});</span>
</code></pre>
</div>
<div class="language-js highlighter-rouge"><pre class="highlight"><code><span class="c1">//将上下文传递给视图，包括查询字符串、cookie和session值。</span>
<span class="nx">app</span><span class="p">.</span><span class="nx">get</span><span class="p">(</span><span class="s1">'/greeting'</span><span class="p">,</span><span class="kd">function</span><span class="p">(</span><span class="nx">req</span><span class="p">,</span> <span class="nx">res</span><span class="p">){</span>
    <span class="nx">res</span><span class="p">.</span><span class="nx">render</span><span class="p">(</span><span class="s1">'about'</span><span class="p">,{</span>
        <span class="na">message</span><span class="p">:</span> <span class="s1">'welcome'</span><span class="p">,</span>
        <span class="na">style</span><span class="p">:</span> <span class="nx">req</span><span class="p">.</span><span class="nx">query</span><span class="p">.</span><span class="nx">style</span><span class="p">,</span>
        <span class="na">userid</span><span class="p">:</span> <span class="nx">req</span><span class="p">.</span><span class="nx">cookie</span><span class="p">.</span><span class="nx">userid</span><span class="p">,</span>
        <span class="na">username</span><span class="p">:</span> <span class="nx">req</span><span class="p">.</span><span class="nx">sesion</span><span class="p">.</span><span class="nx">username</span><span class="p">,</span>
    <span class="p">});</span>
<span class="p">});</span>
</code></pre>
</div>
<div class="language-js highlighter-rouge"><pre class="highlight"><code><span class="c1">//没有布局的视图渲染.下面的layout没有布局文件，即views/no-layout.handlebars,必须包含必要的HTML</span>
<span class="nx">app</span><span class="p">.</span><span class="nx">get</span><span class="p">(</span><span class="s1">'/no-layout'</span><span class="p">,</span><span class="kd">function</span><span class="p">(</span><span class="nx">req</span><span class="p">,</span> <span class="nx">res</span><span class="p">){</span>
    <span class="nx">res</span><span class="p">.</span><span class="nx">render</span><span class="p">(</span><span class="s1">'no-layout'</span><span class="p">,{</span><span class="na">layout</span><span class="p">:</span><span class="kc">null</span><span class="p">});</span>
<span class="p">});</span>
</code></pre>
</div>
<div class="language-js highlighter-rouge"><pre class="highlight"><code><span class="c1">//使用定制布局渲染。使用布局文件views/layouts/custom.handlebars</span>
<span class="nx">app</span><span class="p">.</span><span class="nx">get</span><span class="p">(</span><span class="s1">'/custom-layout'</span><span class="p">,</span><span class="kd">function</span><span class="p">(</span><span class="nx">req</span><span class="p">,</span> <span class="nx">res</span><span class="p">){</span>
    <span class="nx">res</span><span class="p">.</span><span class="nx">render</span><span class="p">(</span><span class="s1">'custom-layout'</span><span class="p">,{</span><span class="na">layout</span><span class="p">:</span><span class="s1">'custom'</span><span class="p">});</span>
<span class="p">});</span>
</code></pre>
</div>
<div class="language-js highlighter-rouge"><pre class="highlight"><code><span class="c1">//渲染纯文本输出</span>
<span class="nx">app</span><span class="p">.</span><span class="nx">get</span><span class="p">(</span><span class="s1">'/test'</span><span class="p">,</span><span class="kd">function</span><span class="p">(</span><span class="nx">req</span><span class="p">,</span> <span class="nx">res</span><span class="p">){</span>
    <span class="nx">res</span><span class="p">.</span><span class="nx">type</span><span class="p">(</span><span class="s1">'text/plain'</span><span class="p">);</span>
    <span class="nx">res</span><span class="p">.</span><span class="nx">send</span><span class="p">(</span><span class="s1">'this is a test'</span><span class="p">);</span>
<span class="p">});</span>
</code></pre>
</div>
<div class="language-js highlighter-rouge"><pre class="highlight"><code><span class="c1">//添加错误处理程序。这应该出现在所有路由方法的结尾。</span>
<span class="nx">app</span><span class="p">.</span><span class="nx">use</span><span class="p">(</span><span class="kd">function</span><span class="p">(</span><span class="nx">err</span><span class="p">,</span> <span class="nx">req</span><span class="p">,</span> <span class="nx">res</span><span class="p">,</span> <span class="nx">next</span><span class="p">){</span>
    <span class="nx">console</span><span class="p">.</span><span class="nx">log</span><span class="p">(</span><span class="nx">err</span><span class="p">.</span><span class="nx">stack</span><span class="p">);</span>
    <span class="nx">res</span><span class="p">.</span><span class="nx">status</span><span class="p">(</span><span class="mi">500</span><span class="p">).</span><span class="nx">render</span><span class="p">(</span><span class="s1">'error'</span><span class="p">);</span>
<span class="p">});</span>
</code></pre>
</div>
<div class="language-js highlighter-rouge"><pre class="highlight"><code><span class="c1">//添加一个404处理程序</span>
<span class="nx">app</span><span class="p">.</span><span class="nx">use</span><span class="p">(</span><span class="kd">function</span><span class="p">(</span><span class="nx">req</span><span class="p">,</span> <span class="nx">res</span><span class="p">){</span>
    <span class="nx">res</span><span class="p">.</span><span class="nx">status</span><span class="p">(</span><span class="mi">404</span><span class="p">).</span><span class="nx">render</span><span class="p">(</span><span class="s1">'not-found'</span><span class="p">);</span>
<span class="p">});</span>
</code></pre>
</div>

<h4>处理表单</h4>
<p>当你处理表单时，表单信息一般在req.body中（或者偶尔在req.query中）。你可以使用req.xhr来判断是AJAX请求还是浏览器请求。<br>  <br>
基本表单处理</p>
<div class="language-js highlighter-rouge"><pre class="highlight"><code><span class="c1">// 必须引入中间件body-parser</span>
<span class="nx">app</span><span class="p">.</span><span class="nx">post</span><span class="p">(</span><span class="s1">'/process-contact'</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span><span class="nx">req</span><span class="p">,</span> <span class="nx">res</span><span class="p">){</span>
    <span class="nx">console</span><span class="p">.</span><span class="nx">log</span><span class="p">(</span><span class="s1">'Received contact from'</span> <span class="o">+</span> <span class="nx">req</span><span class="p">.</span><span class="nx">body</span><span class="p">.</span><span class="nx">name</span><span class="o">+</span><span class="s1">'&lt;'</span><span class="o">+</span><span class="nx">req</span><span class="p">.</span><span class="nx">body</span><span class="p">.</span><span class="nx">email</span><span class="o">+</span><span class="s1">'&gt;'</span><span class="p">);</span>
    <span class="k">try</span><span class="p">{</span>
        <span class="c1">//保存到数据库...</span>
        <span class="k">return</span> <span class="nx">res</span><span class="p">.</span><span class="nx">xhr</span> <span class="p">?</span>  <span class="nx">res</span><span class="p">.</span><span class="nx">render</span><span class="p">({</span><span class="na">success</span><span class="p">:</span><span class="kc">true</span><span class="p">})</span> <span class="p">:</span> <span class="nx">res</span><span class="p">.</span><span class="nx">redirect</span><span class="p">(</span><span class="mi">303</span><span class="p">,</span><span class="s1">'/thank-you'</span><span class="p">);</span>
    <span class="p">}</span><span class="k">catch</span><span class="p">(</span><span class="nx">ex</span><span class="p">){</span>
        <span class="k">return</span> <span class="nx">res</span><span class="p">.</span><span class="nx">xhr</span> <span class="p">?</span> <span class="nx">res</span><span class="p">.</span><span class="nx">json</span><span class="p">({</span><span class="na">error</span><span class="p">:</span> <span class="s1">'Database error'</span><span class="p">})</span> <span class="p">:</span> <span class="nx">res</span><span class="p">.</span><span class="nx">redirect</span><span class="p">(</span><span class="mi">303</span><span class="p">,</span><span class="s1">'/database-error'</span><span class="p">);</span>
    <span class="p">}</span>
<span class="p">});</span>
</code></pre>
</div>
<h2>第七章 Handlebars模板引擎</h2>
<p>理解模板引擎的关键在于context（上下文环境）。当你渲染一个模板的时候，便会传递给模板引擎一个对象，叫做上下文对象，它能让替换标识运行。<br>
三重大括号}可以关闭html转义。<br>
handlebars的注释看起来像 。该注释如果在服务器模板中是不会被传递到浏览器中的。<br></p>

<h4>块级表达式</h4>
<div class="language-js highlighter-rouge"><pre class="highlight"><code><span class="p">{</span>
    <span class="nl">currency</span><span class="p">:</span> <span class="p">{</span>
                    <span class="nl">name</span><span class="p">:</span> <span class="s1">'United States dollars'</span><span class="p">,</span>
                    <span class="nx">abbrev</span><span class="err">:</span> <span class="s1">'USD'</span><span class="p">,</span>
    <span class="p">},</span> 
    <span class="nx">tours</span><span class="err">:</span> <span class="p">[</span>
                    <span class="p">{</span> <span class="na">name</span><span class="p">:</span> <span class="s1">'Hood River'</span><span class="p">,</span> <span class="na">price</span><span class="p">:</span> <span class="s1">'$99.95'</span> <span class="p">},</span>
                    <span class="p">{</span> <span class="na">name</span><span class="p">:</span> <span class="s1">'Oregon Coast'</span><span class="p">,</span> <span class="nx">price</span><span class="p">,</span> <span class="s1">'$159.95'</span> <span class="p">},</span>
    <span class="p">],</span>
    <span class="nx">specialsUrl</span><span class="err">:</span> <span class="s1">'/january-specials'</span><span class="p">,</span>
    <span class="nx">currencies</span><span class="err">:</span> <span class="p">[</span> <span class="s1">'USD'</span><span class="p">,</span> <span class="s1">'GBP'</span><span class="p">,</span> <span class="s1">'BTC'</span> <span class="p">],</span>
<span class="p">}</span>

</code></pre>
</div>
<p>现在让我们将上下文对象传递到如下模板。</p>
<div class="language-js highlighter-rouge"><pre class="highlight"><code><span class="o">&lt;</span><span class="nx">ul</span><span class="o">&gt;</span>
<span class="o">&lt;</span><span class="sr">/ul</span><span class="err">&gt;
</span>
         
        <span class="o">&lt;</span><span class="nx">li</span><span class="o">&gt;</span>
             <span class="o">-</span> 
            
                    <span class="p">()</span>
            
        <span class="o">&lt;</span><span class="sr">/li</span><span class="err">&gt;
</span>


    <span class="o">&lt;</span><span class="nx">p</span><span class="o">&gt;</span><span class="nx">All</span> <span class="nx">prices</span> <span class="k">in</span> <span class="p">.</span><span class="o">&lt;</span><span class="sr">/p</span><span class="err">&gt;
</span>

        
        <span class="o">&lt;</span><span class="nx">p</span><span class="o">&gt;</span><span class="nx">Check</span> <span class="nx">out</span> <span class="nx">our</span> <span class="o">&lt;</span><span class="nx">a</span> <span class="nx">href</span><span class="o">=</span><span class="s2">""</span><span class="o">&gt;</span><span class="nx">specials</span><span class="o">!&lt;</span><span class="sr">/p&gt;</span><span class="err"> 
</span>
        <span class="o">&lt;</span><span class="nx">p</span><span class="o">&gt;</span><span class="nx">Please</span> <span class="nx">check</span> <span class="nx">back</span> <span class="nx">often</span> <span class="k">for</span> <span class="nx">specials</span><span class="p">.</span><span class="o">&lt;</span><span class="sr">/p&gt;</span><span class="err"> 
</span>
<span class="o">&lt;</span><span class="nx">p</span><span class="o">&gt;</span>
        
        <span class="o">&lt;</span><span class="nx">a</span> <span class="nx">href</span><span class="o">=</span><span class="s2">"#"</span> <span class="kr">class</span><span class="o">=</span><span class="s2">"currency"</span><span class="o">&gt;&lt;</span><span class="sr">/a</span><span class="err">&gt;
</span>        
                <span class="nx">Unfortunately</span><span class="p">,</span> <span class="nx">we</span> <span class="nx">currently</span> <span class="nx">only</span> <span class="nx">accept</span> <span class="p">.</span>
        
<span class="o">&lt;</span><span class="sr">/p</span><span class="err">&gt;
</span></code></pre>
</div>
<p>这个模板很复杂，所以让我们分解一下。它开始于 each 辅助方法，这使我们能够遍历一个数组。理解和之间的东西很重要，这涉及上下文切换。 第一次循环，上下文变成了{ name: ‘Hood River’, price: ‘$99.95’ }，第二次则变成了{ name: ‘Oregon Coast’, price: ‘$159.95’ }。所以在这个块里面，我们可以看到 和 。然而，如果你想访问 currency 对象，就得使用 ../ 来访问上一级上下文。
如果上下文属性本身就是一个对象，我们可以直截了当地访问它的属性，比如 。<br>
if辅助方法有些特殊。在handlebars中，所有的块都会改变上下文，所以在if块中，会产生一个新的上下文。而这正好是上一级上下文的副本。换句话说，在if或者else块中，上下文与上一级上下文是相同的。但是当你在一个each循环中使用if块时就有必要细究一下了。在循环体中，可以使用../访问上级上下文。不过，在块中，又进入了一个新的上下文。所以要获得currency对象，就得使用../../。第一个../获得产品的上下文，第二个获得最外层的上下文。这样会产生许多混乱，最简单的权宜之计就是在each块中避免使用if块。<br>
在 if 和 each 块中都有一个可选的 else 块(对于 each，如果数组中没有任何元素，else 块就会执行)。我们也用到了 unless 辅助方法，它基本上和 if 辅助方法是相反的:只有在 参数为 false 时，它才会执行。<br>
在这个模板中，最后要注意的一点是在块中使用。指向 当前上下文，在这个例子中，当前上下文只是我们想打印出来的数组中的一个字符串。<br></p>
<blockquote cite="">
    访问当前上下文还有另外一种独特的用法:它可以从当前上下文的属性中区分出辅助方法(我们很快就会学到)。例如，如果有一个辅助方法叫作foo， 在当前上下文中有一个属性也叫作foo，则  指向辅助方法， 指向属性。
</blockquote>
<h4>视图和布局</h4>
<p>视图表现为网站上的各个页面。默认情况下，Express会在views子目录中查找视图。布局是一种特殊的视图，事实上，它是一个用于模板的模板。布局是必不可少的，因为站点的大部分页面都会有几乎相同的布局。下面是基本的布局文件：
<img src="/img/node/nodejs_express/1.png"></p>

<p>请注意文本}。这样视图引擎就知道在哪里渲染你的内容了。用三个大括号的原因是不想让handlebars去转义视图中可能存在的html标签。
<img src="/img/node/nodejs_express/2.png">
注意，是视图首先被渲染，之后才是布局。由于执行的顺序，你可以向视图中传递一个叫做body的属性，而且它会在视图中正确渲染。然而，当布局被渲染时，body的值会被已渲染的视图覆盖。</p>

<h4>在Express中使用布局</h4>
<p>当我们创建视图引擎时，可以指定一个默认的布局。</p>
<div class="language-js highlighter-rouge"><pre class="highlight"><code><span class="kd">var</span> <span class="nx">handlebars</span> <span class="o">=</span> <span class="nx">require</span><span class="p">(</span><span class="s1">'express3-handlebars'</span><span class="p">)</span> <span class="p">.</span><span class="nx">create</span><span class="p">({</span> <span class="na">defaultLayout</span><span class="p">:</span> <span class="s1">'main'</span> <span class="p">});</span>
</code></pre>
</div>
<p>默认情况下，Express会在views子目录中查找视图，在views/layouts下查找布局。所以如果有一个叫做views/foo.handlebars的视图。可以这样渲染它：</p>
<div class="language-js highlighter-rouge"><pre class="highlight"><code><span class="nx">app</span><span class="p">.</span><span class="nx">get</span><span class="p">(</span><span class="s1">'/foo'</span><span class="p">,</span><span class="kd">function</span><span class="p">(</span><span class="nx">req</span><span class="p">,</span> <span class="nx">res</span><span class="p">){</span>
    <span class="nx">res</span><span class="p">.</span><span class="nx">render</span><span class="p">(</span><span class="s1">'foo'</span><span class="p">);</span>
<span class="p">});</span>
</code></pre>
</div>
<p>它会使用views/layouts/main.handlebars作为布局。如果你根本不想使用布局，可以在上下文中指定layout:null :</p>
<div class="language-js highlighter-rouge"><pre class="highlight"><code><span class="nx">app</span><span class="p">.</span><span class="nx">get</span><span class="p">(</span><span class="s1">'/foo'</span><span class="p">,</span><span class="kd">function</span><span class="p">(</span><span class="nx">req</span><span class="p">,</span> <span class="nx">res</span><span class="p">){</span>
    <span class="nx">res</span><span class="p">.</span><span class="nx">render</span><span class="p">(</span><span class="s1">'foo'</span><span class="p">,{</span><span class="na">layout</span><span class="p">:</span> <span class="kc">null</span><span class="p">});</span>
<span class="p">});</span>
</code></pre>
</div>
<p>或者你想使用一个不同的模板，可以指定模板名称：</p>
<div class="language-js highlighter-rouge"><pre class="highlight"><code><span class="nx">app</span><span class="p">.</span><span class="nx">get</span><span class="p">(</span><span class="s1">'/foo'</span><span class="p">,</span><span class="kd">function</span><span class="p">(</span><span class="nx">req</span><span class="p">,</span> <span class="nx">res</span><span class="p">){</span>
    <span class="nx">res</span><span class="p">.</span><span class="nx">render</span><span class="p">(</span><span class="s1">'foo'</span><span class="p">,{</span><span class="na">layout</span><span class="p">:</span> <span class="s1">'microsite'</span><span class="p">});</span>
<span class="p">});</span>
</code></pre>
</div>
<p>这样就会使用views/layouts/microsite.handlebars来渲染视图了。</p>

<h4>局部文件</h4>
<p>很多时候，有些组成部分需要在不同的页面重复使用，在前端界通常称为‘组件’。下面创建一个局部文件，views/partials/weather.handlebars。<br>
语法可以让你在视图中包含一个局部文件。express3-handlebars会在views/partials中寻找一个叫做partial_name.handlebars的视图。<br>
express3-handlebars支持子目录，所以如果你有大量的局部文件，可以将它们组织在一起。例如，你有一些社交媒体局部文件，可以将它们放在views/partials/social目录下面，然后使用、 等来引入它们。</p>

<h2>Express表单处理</h2>
<p>如果使用 GET 进行表单处理，表单域在 req.query 对象中。<br>
如果使用 POST(推荐使用的)，需要引入中间件来解析 URL 编码体。首先，安装 body-parser 中间件(npminstall –save body-parser)，然后引入: <br></p>
<div class="language-js highlighter-rouge"><pre class="highlight"><code><span class="nx">app</span><span class="p">.</span><span class="nx">use</span><span class="p">(</span><span class="nx">require</span><span class="p">(</span><span class="s1">'body-parser'</span><span class="p">)());</span>
</code></pre>
</div>
<p>一旦引入了body-parser，你会发现req.body变为可用，这样所有的表单字段将可用。</p>
<blockquote cite=""> 
在表单提交成功之后将地址重定向。在这种情况下使用 303(或 302)重定向，而不是 301 重定向，这一点非常重要。301 重定向是“永久”的，意味着浏览器会缓存重定向目标。如果使用 301 重定向并且试图第二次提交表单，浏览器会绕过整个 /process 处理程序直接进入/thank you页面，因为它正确地认为重定向是永久性的。另一方面，303 重定向告诉浏览器“是的，你的请求有效，可以在这里找到响应”， 并且不会缓存重定向目标。
</blockquote>

<p>Express为ajax提供了两个方便的属性：req.xhr和req.accepts。如果是ajax请求，则req.xhr值为true。req.accepts试图确定返回的最合适的响应类型。这可以根据Accepts HTTP头信息推断出来。</p>

<h2>Cookie与会话</h2>
<h4>Cookie</h4>
<p>在程序中开始设置和访问cookie之前，需要先引入中间件cookie-parser。安装完之后: <br></p>
<div class="language-js highlighter-rouge"><pre class="highlight"><code><span class="nx">app</span><span class="p">.</span><span class="nx">use</span><span class="p">(</span><span class="nx">require</span><span class="p">(</span><span class="s1">'cookie-parser'</span><span class="p">)(</span><span class="nx">credentials</span><span class="p">.</span><span class="nx">cookieSecret</span><span class="p">));</span>
</code></pre>
</div>
<p>完成这个之后，你就可以在任何能访问到响应对象的地方设置 cookie 或签名 cookie: <br></p>
<div class="language-js highlighter-rouge"><pre class="highlight"><code><span class="nx">res</span><span class="p">.</span><span class="nx">cookie</span><span class="p">(</span><span class="s1">'monster'</span><span class="p">,</span> <span class="s1">'nom nom'</span><span class="p">);</span>
<span class="nx">res</span><span class="p">.</span><span class="nx">cookie</span><span class="p">(</span><span class="s1">'signed_monster'</span><span class="p">,</span> <span class="s1">'nom nom'</span><span class="p">,</span> <span class="p">{</span> <span class="na">signed</span><span class="p">:</span> <span class="kc">true</span> <span class="p">});</span>
</code></pre>
</div>
<blockquote cite="">
    签名cookie的优先级高于未签名cookie。如果你将签名cookie命名为 signed_monster，那就不能用这个名字再命名未签名cookie(它返回时会变成undefined)。
</blockquote>
<p>要获取客户端发送过来的cookie的值(如果有的话)，只需访问请求对象的cookie或signedCookie属性:<br></p>
<div class="language-js highlighter-rouge"><pre class="highlight"><code><span class="kd">var</span> <span class="nx">monster</span> <span class="o">=</span> <span class="nx">req</span><span class="p">.</span><span class="nx">cookies</span><span class="p">.</span><span class="nx">monster</span><span class="p">;</span>
<span class="kd">var</span> <span class="nx">signedMonster</span> <span class="o">=</span> <span class="nx">req</span><span class="p">.</span><span class="nx">signedCookies</span><span class="p">.</span><span class="nx">monster</span><span class="p">;</span>
</code></pre>
</div>
<p>要删除cookie，请用res.clearCookie。<br>
设置cookie时可以使用如下这些选项：<br></p>
<ul>
    <li>domain
        <br>
        控制跟cookie关联的域名。这样你可以将cookie分配给特定的子域名。
    </li>
    <li>
        path
        <br>
        控制应用这个cookie的路径。注意，路径会隐含地通配其后的路径。如果你用的路径是/(默认值)，它会应用到网站的所有页面上。
    </li>
    <li>maxAge
        <br>
        指定客户端应该保存cookie多长时间，单位是毫秒。如果你省略了这一选项，浏览器关闭时cookie就会被删掉。
    </li>
    <li>secure
        <br>
        指定该cookie只通过安全(https)连接发送。
    </li>
    <li>httpOnly
        <br>
        将这个选项设为true表明这个cookie只能由服务器修改。也就是说客户端javascript不能修改它，这有助于防范XSS攻击。
    </li>
    <li>signed
        <br>
        设为true会对这个cookie签名，这样就需要用res.signedCookies而不是res.cookies访问它。被篡改的签名cookie会被服务器拒绝，并且cookie值会重置为它的原始值。
    </li>
</ul>

<h4>会话</h4>
<p>从广义上来说，有两种实现会话的方法：把所有东西都存在cookie里，或者只在cookie里存一个唯一标识，其他东西都存在服务器上。<br>
当然，后一种方式更为推荐。入门级的服务器端存储会话信息的选择是内存会话。它们非常容易设置，但也有个巨大的缺陷，重启服务器后会话信息就消失了。更糟的是，如果你扩展了多台服务器，那么每次请求可能是由不同的服务器处理的，所以会话数据有时在那里，有时不在。<br>
使用会话首先安装express-session。然后，在链入cookie-parser之后链入express-session:</p>
<div class="language-js highlighter-rouge"><pre class="highlight"><code><span class="nx">app</span><span class="p">.</span><span class="nx">use</span><span class="p">(</span><span class="nx">require</span><span class="p">(</span><span class="s1">'express-session'</span><span class="p">)());</span>
</code></pre>
</div>
<p>中间件express-session接受带有如下选项的配置对象：</p>
<ul>
    <li>key
        <br>
        存放唯一会话标识的cookie名称。默认为connect.sid。
    </li>
    <li>store
        <br>
        会话存储的实例。默认为一个MemoryStore的实例，可以满足我们当前的要求。
    </li>
    <li>cookie
        <br>
        会话cookie的cookie设置。适用于常规的cookie默认值。
    </li>
</ul>
<p>会话设置好之后，在请求对象上的session对象上操作：<br></p>
<div class="language-js highlighter-rouge"><pre class="highlight"><code><span class="nx">req</span><span class="p">.</span><span class="nx">session</span><span class="p">.</span><span class="nx">username</span><span class="o">=</span><span class="s1">'Anonymous'</span><span class="p">;</span>
<span class="kd">var</span> <span class="nx">colorScheme</span> <span class="o">=</span> <span class="nx">req</span><span class="p">.</span><span class="nx">session</span><span class="p">.</span><span class="nx">colorScheme</span><span class="p">;</span>
</code></pre>
</div>
<p>注意：对于会话而言，我们不是用请求对象获取值，用响应对象设置值，它全部是在请求对象上操作的。(响应对象没有session属性)。要删除会话，可以用javascript的delete操作符。</p>

<h2>中间件</h2>
<blockquote>从概念上讲，中间件是一种功能的封装方式，具体来说就是封装在程序中处理http请求的功能。从实战上讲，中间件只是一个有3个参数的函数：一个请求对象、一个响应对象和一个一个next函数。还有一种4个参数的形式，用来做错误处理。</blockquote>
<p>学习如何灵活地考虑中间件和路由处理器是了解Express如何工作的关键。你应该把下面这些重点铭记于心。</p>
<ul>
    <li>路由处理器(app.get、app.post等，经常被统称为app.VERB)可以被看做是只处理特定http谓词(get、post)的中间件。
        同样，也可以将中间件看做是可以处理全部http谓词的路由处理器（基本上等同于app.all，可以处理任何http谓词）。
    </li>
    <li>路由处理器的第一个参数必须是路径。如果你想让某个路由匹配所有路径，只需用/*。中间件也可以将路径作为第一个参数，但它是可选的(如果忽略这个参数，它会匹配所有路径，就像指定了/*一样)。</li>
    <li>路由处理器和中间件的参数中都有回调函数，这个函数有2个、3个或4个参数。如果有2个或3个参数，头两个参数是请求和响应对象，第三个参数是next函数。如果有4个参数，它就变成了错误处理中间件，第一个参数变成了错误对象，然后依次是请求、响应和next对象。</li>
    <li>如果不调用next()，管道就会被终止。也不会再有处理器或中间件做后续处理。如果你不调用next()，则应该发送一个响应到客户端(res.send、res.json、res.render等)。如果你不这样做，客户端会被挂起并最终导致超时。</li>
    <li>如果调用了next()，一般不宜再发送响应到客户端。如果你发送了，管道中后续的中间件或路由处理器还会执行，但它们发送的任何响应都会被忽略。</li>
</ul>


                <hr>
            </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'blog-item-wrap',
};
</script>

<style lang="less">
.blog-item-wrap {
    .h2{
        text-align: center;
    }
    .desc{
        font-size: 20px;
        color: #999;
        text-align: center;
        word-wrap: break-word
    }
    .post-time{
        font-size: 12px;
        font-family: Lora, 'Times New Roman', serif;
        color: gray;
        line-height: 2em;
        height: 2em;
        text-align: center;
    }
    ul{
        all: initial;
    }
}
</style>