import{_ as a,o,c as p,a as c,b as e,w as s,e as i,d as n,r}from"./app.784f51bb.js";var l="/deploy-files-to-repo/assets/deploy-files-to-repo-workflow.beae6eeb.svg?raw=true";const d={},u=i('<h1 id="deploy-files-to-repo" tabindex="-1"><a class="header-anchor" href="#deploy-files-to-repo" aria-hidden="true">#</a> Deploy-Files-to-Repo</h1><p><img src="https://github.com/neohsu/deploy-files-to-repo/actions/workflows/lint.yml/badge.svg" alt="lint"> <img src="https://img.shields.io/badge/license-MIT-brightgreen" alt="license"></p><h2 id="introduction" tabindex="-1"><a class="header-anchor" href="#introduction" aria-hidden="true">#</a> Introduction</h2><p><code>Deploy-Files-to-Repo</code> is a GitHub action that helps to deploy files to target repository &amp; automatically creates pull request on it.</p><h2 id="how-it-works" tabindex="-1"><a class="header-anchor" href="#how-it-works" aria-hidden="true">#</a> How It Works</h2><p><code>Deploy-Files-to-Repo</code> will clone target repository to <code>__${TARGET_REPO}__clone__</code> folder on <code>$GITHUB_WORKSPACE</code>.</p><p>It will copy files/folders from source repository to target repository and make corresponding commits.</p><p>After pushing git commits, this action will automatically create pull request to target repository.</p><h3 id="deploy-files-to-repo-workflow" tabindex="-1"><a class="header-anchor" href="#deploy-files-to-repo-workflow" aria-hidden="true">#</a> Deploy-Files-to-Repo workflow</h3><p><img src="'+l+`" alt="Deploy-Files-to-Repo workflow"></p><h2 id="getting-started" tabindex="-1"><a class="header-anchor" href="#getting-started" aria-hidden="true">#</a> Getting Started</h2><h3 id="dependencies" tabindex="-1"><a class="header-anchor" href="#dependencies" aria-hidden="true">#</a> Dependencies</h3><p>Before use <code>Deploy-Files-to-Repo</code> action, please use <code>actions/checkout</code> action firstly because <code>Deploy-Files-to-Repo</code> action need source code workspace.</p><h3 id="configuration" tabindex="-1"><a class="header-anchor" href="#configuration" aria-hidden="true">#</a> Configuration</h3><table><thead><tr><th>Input</th><th>required</th><th>description</th></tr></thead><tbody><tr><td>source_dir</td><td><code>false</code></td><td>Deploy file or folder from this repository.<br> eg. <code>README.md</code></td></tr><tr><td>target_dir</td><td><code>false</code></td><td>Deploy target file or folder path into target GitHub repository.<br>eg. <code>doc/README.md</code> of <code>.elastic_runner</code></td></tr><tr><td>target_github_domain</td><td><code>false</code></td><td>Target GitHub domain.<br><code>default</code>: <code>github.com</code></td></tr><tr><td>target_github_api</td><td><code>false</code></td><td>Target GitHub API URL.<br><code>default</code>: <code>https://api.github.com</code></td></tr><tr><td>target_personal_access_token</td><td><code>true</code></td><td>Target GitHub personal access token</td></tr><tr><td>target_owner</td><td><code>true</code></td><td>Target GitHub owner</td></tr><tr><td>target_repo</td><td><code>true</code></td><td>Target GitHub repository</td></tr><tr><td>target_branch</td><td><code>false</code></td><td>Target GitHub repository&#39;s branch. <br><code>default</code>: <code>main</code></td></tr><tr><td>target_pre_copy_command</td><td><code>false</code></td><td>Run command on target repository before copy files flow.<br>This command path is on <code>$GITHUB_WORKSPACE</code></td></tr><tr><td>target_pre_commit_command</td><td><code>false</code></td><td>Run command on target repository before git commit.<br>This command path is on <code>$GITHUB_WORKSPACE/__\${TARGET_REPO}__clone__</code></td></tr><tr><td>commit_msg</td><td><code>false</code></td><td>Custom git commit message.<br><code>default</code>: <code>Deployed $SOURCE_DIR into $TARGET_DIR from $GITHUB_REPOSITORY@\${GIT_SHA_SHORT}</code></td></tr><tr><td>pr_title</td><td><code>false</code></td><td>Custom PR title.<br><code>default</code>: <code>Deployed files from \${GITHUB_REPOSITORY}</code></td></tr><tr><td>target_pr_branch</td><td><code>false</code></td><td>Custom PR branch.<br><code>default</code>: <code>deploy-files-to-repo--branches</code></td></tr></tbody></table><h3 id="usage" tabindex="-1"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h3><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">name</span><span class="token punctuation">:</span> deploy<span class="token punctuation">-</span>files
<span class="token key atrule">on</span><span class="token punctuation">:</span>
  <span class="token key atrule">workflow_dispatch</span><span class="token punctuation">:</span>
    <span class="token key atrule">inputs</span><span class="token punctuation">:</span>
      <span class="token key atrule">source_dir</span><span class="token punctuation">:</span>
        <span class="token key atrule">description</span><span class="token punctuation">:</span> <span class="token string">&quot;Deploy file or folder from this repo&quot;</span>
        <span class="token key atrule">required</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
      <span class="token key atrule">target_dir</span><span class="token punctuation">:</span>
        <span class="token key atrule">description</span><span class="token punctuation">:</span> <span class="token string">&quot;Deploy target file or folder path into target GitHub repository&quot;</span>
        <span class="token key atrule">required</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
      <span class="token key atrule">target_personal_access_token</span><span class="token punctuation">:</span>
        <span class="token key atrule">description</span><span class="token punctuation">:</span> <span class="token string">&quot;Target GitHub personal access token&quot;</span>
        <span class="token key atrule">required</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
      <span class="token key atrule">target_owner</span><span class="token punctuation">:</span>
        <span class="token key atrule">description</span><span class="token punctuation">:</span> <span class="token string">&quot;Target GitHub owner&quot;</span>
        <span class="token key atrule">required</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
      <span class="token key atrule">target_repo</span><span class="token punctuation">:</span>
        <span class="token key atrule">description</span><span class="token punctuation">:</span> <span class="token string">&quot;Target GitHub repository&quot;</span>
        <span class="token key atrule">required</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
      <span class="token key atrule">target_branch</span><span class="token punctuation">:</span>
        <span class="token key atrule">description</span><span class="token punctuation">:</span> <span class="token string">&quot;Target GitHub repository branch&quot;</span>
        <span class="token key atrule">default</span><span class="token punctuation">:</span> <span class="token string">&quot;main&quot;</span>
        <span class="token key atrule">required</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>
<span class="token key atrule">jobs</span><span class="token punctuation">:</span>
  <span class="token key atrule">deploy</span><span class="token punctuation">:</span>
    <span class="token key atrule">strategy</span><span class="token punctuation">:</span>
      <span class="token key atrule">matrix</span><span class="token punctuation">:</span>
        <span class="token key atrule">runner</span><span class="token punctuation">:</span>
          <span class="token punctuation">-</span> deploy<span class="token punctuation">-</span>runner
    <span class="token key atrule">runs-on</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span><span class="token punctuation">{</span> matrix.runner <span class="token punctuation">}</span><span class="token punctuation">}</span>
    <span class="token key atrule">steps</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/checkout@v2
      <span class="token punctuation">-</span> <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/deploy<span class="token punctuation">-</span>files<span class="token punctuation">-</span>to<span class="token punctuation">-</span>repo@main
        <span class="token key atrule">with</span><span class="token punctuation">:</span>
          <span class="token key atrule">source_dir</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span><span class="token punctuation">{</span> github.event.inputs.source_dir <span class="token punctuation">}</span>
          <span class="token key atrule">target_dir</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span><span class="token punctuation">{</span> github.event.inputs.target_dir <span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">}</span>
          <span class="token key atrule">target_owner</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span><span class="token punctuation">{</span> github.event.inputs.target_owner <span class="token punctuation">}</span><span class="token punctuation">}</span>
          <span class="token key atrule">target_repo</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span><span class="token punctuation">{</span> github.event.inputs.target_repo <span class="token punctuation">}</span><span class="token punctuation">}</span>
          <span class="token key atrule">target_branch</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span><span class="token punctuation">{</span> github.event.inputs.target_branch <span class="token punctuation">}</span><span class="token punctuation">}</span>
          <span class="token key atrule">target_personal_access_token</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span><span class="token punctuation">{</span> github.event.inputs.target_personal_access_token <span class="token punctuation">}</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="contribute" tabindex="-1"><a class="header-anchor" href="#contribute" aria-hidden="true">#</a> Contribute</h2>`,18),k=n("See "),h=n("CONTRIBUTING.md in the repo"),m=n(" or the "),b=n("Contributing section on the docs site"),_=n(".");function g(v,y){const t=r("RouterLink");return o(),p("div",null,[u,c("p",null,[k,e(t,{to:"/CONTRIBUTING.html"},{default:s(()=>[h]),_:1}),m,e(t,{to:"/DOCUMENTATION.html"},{default:s(()=>[b]),_:1}),_])])}var T=a(d,[["render",g],["__file","index.html.vue"]]);export{T as default};
