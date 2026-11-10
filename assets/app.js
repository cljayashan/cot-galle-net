(function () {
  "use strict";
  var SITE = window.SITE || { chapters: [] };
  var Q = window.QUESTIONS || null;
  var body = document.body;
  var page = body.getAttribute("data-page") || "index.html";
  var ROOT = body.getAttribute("data-root") || "";
  var isHome = page === "index.html";
  var PRE = isHome ? "pages/" : "";
  var LOGO = '<rect x="9" y="2" width="6" height="6" rx="1"/><rect x="2" y="16" width="6" height="6" rx="1"/><rect x="16" y="16" width="6" height="6" rx="1"/><path d="M5 16v-4h14v4M12 12V8"/>';

  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; });
  }
  function icon(path, size) {
    return '<svg class="ico" width="' + size + '" height="' + size + '" viewBox="0 0 24 24" fill="none" stroke="currentColor" ' +
      'stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">' + path + "</svg>";
  }
  function fileOf(href) { return (href || "").split("/").pop(); }
  function isUnit(ch) { return ch.kind === "unit"; }
  function sideNum(ch) { return isUnit(ch) ? ch.n : ch.badge || ch.label.charAt(0); }

  /* ---------- page lookup ---------- */
  var order = [], byFile = {}, byNum = {};
  SITE.chapters.forEach(function (ch) {
    var cp = { file: ch.file, label: ch.title, ch: ch, kind: "chapter" };
    order.push(cp);
    byFile[ch.file] = cp;
    ch.topics.forEach(function (t) {
      var tp = { file: t.file, label: t.num + " " + t.title, num: t.num, ch: ch, kind: "topic" };
      order.push(tp);
      byFile[t.file] = tp;
      byNum[t.num] = tp;
    });
  });
  var cur = byFile[page] || null;

  /* ---------- shared layout: header, sidebar, breadcrumbs, pager, footer ---------- */
  (function buildLayout() {
    var main = document.getElementById("content");
    if (!main) return;
    if (cur) body.style.setProperty("--accent", cur.ch.color);

    var header = document.createElement("header");
    header.className = "topbar";
    header.innerHTML = '<button class="menu-btn" id="menu-btn" aria-label="Open menu">☰</button>' +
      '<a class="brand" href="' + ROOT + 'index.html"><span class="logo">' + icon(LOGO, 22) + '</span><span class="brand-text">' + esc(SITE.title) + "</span></a>" +
      '<div class="search"><input id="q" type="search" placeholder="' + esc(SITE.searchHint || "Search topics") + '" autocomplete="off" aria-label="Search">' +
      '<div id="results" class="results"></div></div>';

    var li = function (file, text) {
      return '<li><a href="' + PRE + file + '" class="' + (file === page ? "active" : "") + '">' + text + "</a></li>";
    };
    var nav = '<nav class="sidebar" id="sidebar"><div class="side-inner"><a class="side-home' + (isHome ? " active" : "") +
      '" href="' + ROOT + 'index.html">🏠 Course home</a>';
    SITE.chapters.forEach(function (ch) {
      nav += '<details class="side-ch"' + (cur && cur.ch === ch ? " open" : "") + ' style="--c:' + ch.color + '"><summary>' +
        '<span class="side-num">' + sideNum(ch) + "</span><span>" + esc(ch.title) + "</span></summary><ul>" + li(ch.file, "Overview");
      ch.topics.forEach(function (t) {
        var sn = t.num.replace("Practical ", "P").replace("Appendix ", "");
        nav += li(t.file, '<span class="side-sn">' + esc(sn) + "</span>" + esc(t.title));
      });
      nav += "</ul></details>";
    });
    nav += "</div></nav>";

    var layout = document.createElement("div");
    layout.className = "layout";
    main.parentNode.insertBefore(layout, main);
    layout.innerHTML = nav;
    layout.appendChild(main);
    body.insertBefore(header, body.firstChild);

    if (cur) {
      var crumbs = '<a href="' + ROOT + 'index.html">Home</a><span>›</span>' + (cur.kind === "chapter" ? esc(cur.ch.label)
        : '<a href="' + cur.ch.file + '">' + esc(cur.ch.label) + "</a><span>›</span>" + esc(cur.num));
      main.insertAdjacentHTML("afterbegin", '<div class="crumbs">' + crumbs + "</div>");
      var i = order.indexOf(cur), prev = order[i - 1], next = order[i + 1];
      main.insertAdjacentHTML("beforeend", '<nav class="pager">' +
        (prev ? '<a class="prev" href="' + prev.file + '"><small>Previous</small><span>' + esc(prev.label) + "</span></a>" : "<span></span>") +
        (next ? '<a class="next" href="' + next.file + '"><small>Next</small><span>' + esc(next.label) + "</span></a>" : "<span></span>") + "</nav>");
    }

    main.insertAdjacentHTML("beforeend", '<footer class="foot"><span class="course">' + esc(SITE.course) + "<br>" + esc(SITE.level) + "</span><br>" +
      esc(SITE.tagline) + " · " + esc(SITE.title) + '<br><span class="copyright">© ' + new Date().getFullYear() + " " + esc(SITE.author) + ". " +
      esc(SITE.credentials) + ".<br>All Rights Reserved.</span></footer>");
    body.insertAdjacentHTML("beforeend", '<button class="to-top" id="to-top" aria-label="Back to top">↑</button>');
  })();

  document.querySelectorAll("[data-site]").forEach(function (el) {
    var v = SITE[el.getAttribute("data-site")];
    if (v) el.textContent = v;
  });

  /* ---------- home page: stats and unit cards ---------- */
  function countQuestions(kind) {
    return Q ? Q[kind].reduce(function (n, s) { return n + s.items.length; }, 0) : 0;
  }
  (function buildHome() {
    var stats = document.getElementById("home-stats"), grid = document.getElementById("chapter-grid");
    if (!stats || !grid) return;
    var units = SITE.chapters.filter(isUnit), topics = 0;
    units.forEach(function (ch) { topics += ch.topics.length; });
    var nq = countQuestions("mcq") + countQuestions("structured");
    stats.innerHTML = [[units.length, "units"], [topics, "short topics"], [(SITE.counts || {}).figures || 0, "diagrams"], [nq, "practice questions"]]
      .map(function (s) { return '<div class="stat"><b>' + s[0] + "</b><span>" + s[1] + "</span></div>"; }).join("");
    grid.innerHTML = SITE.chapters.map(function (ch) {
      var files = ch.topics.map(function (t) { return t.file; }).join(" ");
      return '<a class="chapter-card" href="pages/' + ch.file + '" style="--c:' + ch.color + '" data-files="' + files + '">' +
        '<div class="cc-top"><span class="cc-icon">' + icon(ch.icon, 26) + '</span><span class="cc-num">' + esc(ch.label) + "</span></div>" +
        "<h3>" + esc(ch.title) + "</h3><p>" + ch.topics.length + " topics</p>" +
        '<div class="progress"><i></i></div><span class="cc-pct">Not started</span></a>';
    }).join("");
  })();

  /* ---------- Final Revision questions (from questions.js) ---------- */
  function topicLink(num, text) {
    var p = byNum[num];
    return p && p.file !== page ? '<a class="xref" href="' + PRE + p.file + '">' + text + "</a>" : text;
  }
  function autolink(s) {
    return s
      .replace(/\bPractical ([12])\b/g, function (m) { return topicLink(m, m); })
      .replace(/\b[Ss]ection (\d{1,2}\.\d{1,2}(?:\.\d{1,2})?)\b/g, function (m, n) { return topicLink(n, m); })
      .replace(/\(see (\d{1,2}\.\d{1,2}(?:\.\d{1,2})?)\)/g, function (m, n) { return "(see " + topicLink(n, n) + ")"; })
      .replace(/\bUnit (\d{1,2})\b(?! to)/g, function (m, n) {
        var ch = SITE.chapters.filter(function (c) { return isUnit(c) && String(c.n) === n; })[0];
        return ch ? '<a class="xref" href="' + PRE + ch.file + '">' + m + "</a>" : m;
      });
  }
  function inline(t) {
    return String(t).split("`").map(function (part, i) {
      if (i % 2) return "<code>" + esc(part) + "</code>";
      return autolink(esc(part)).replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");
    }).join("");
  }
  var LANGS = { shell: "Terminal", cisco: "Cisco IOS CLI", yaml: "YAML", zone: "DNS zone file", conf: "Configuration file",
    powershell: "PowerShell", ini: "Configuration file", text: "Text" };
  function renderCode(code) {
    var lang = "text", m = /^([a-z]+)\n/.exec(code);
    if (m && LANGS[m[1]]) { lang = m[1]; code = code.slice(m[0].length); }
    code = code.replace(/^\n/, "");
    return '<div class="code" data-lang="' + lang + '"><div class="code-head"><span class="lang lang-' + lang + '">' + LANGS[lang] +
      '</span><span class="code-actions"><button class="copy" type="button">Copy</button></span></div>' +
      '<pre><code class="lang-' + lang + '">' + esc(code) + "</code></pre></div>";
  }
  function renderTable(rows) {
    var head = rows[0], data = rows.slice(1);
    var h = '<div class="table-wrap"><table class="data"><thead><tr>' +
      head.map(function (c) { return "<th>" + inline(c) + "</th>"; }).join("") + "</tr></thead><tbody>";
    data.forEach(function (r) { h += "<tr>" + r.map(function (c) { return "<td>" + inline(c) + "</td>"; }).join("") + "</tr>"; });
    return h + "</tbody></table></div>";
  }
  function renderAnswer(text) {
    var out = "";
    String(text).split(/```([a-z]*\n)?([\s\S]*?)\n?```/).forEach(function (part, i, arr) {
      if (i % 3 === 1) return;
      if (i % 3 === 2) { out += renderCode((arr[i - 1] || "") + (part || "")); return; }
      part.trim().split(/\n\s*\n/).forEach(function (para) {
        var lines = para.split("\n").filter(function (l) { return l.trim(); });
        var all = function (re) { return lines.every(function (l) { return re.test(l); }); };
        if (!lines.length) return;
        if (all(/^\|/)) {
          out += renderTable(lines.map(function (l) { return l.slice(1).split(" | ").map(function (c) { return c.trim(); }); }));
        } else if (all(/^- /)) {
          out += "<ul>" + lines.map(function (l) { return "<li>" + inline(l.slice(2)) + "</li>"; }).join("") + "</ul>";
        } else if (all(/^\d+\. /)) {
          out += "<ol>" + lines.map(function (l) { return "<li>" + inline(l.replace(/^\d+\. /, "")) + "</li>"; }).join("") + "</ol>";
        } else {
          out += "<p>" + lines.map(inline).join("<br>") + "</p>";
        }
      });
    });
    return out;
  }
  function addToc(items) {
    var article = document.querySelector("article.prose");
    if (!article || items.length < 3) return;
    article.insertAdjacentHTML("beforebegin", '<details class="mini-toc" open><summary>On this page</summary><ol>' +
      items.map(function (t) { return '<li><a href="#' + t[0] + '">' + esc(t[1]) + "</a></li>"; }).join("") + "</ol></details>");
  }
  (function buildMcq() {
    var app = document.getElementById("mcq-app");
    if (!app || !Q) return;
    var total = countQuestions("mcq"), n = 1, toc = [], key = "";
    var h = '<p class="quiz-intro">' + total + " questions in " + Q.mcq.length + " sets. Click an option to check it straight away; " +
      "your running score is shown at the bottom of the screen. Each answer links to the topic to review.</p>" + '<div class="quiz" id="quiz">';
    Q.mcq.forEach(function (set, si) {
      var id = "mcq-set-" + (si + 1), rng = "Q" + n + "–" + (n + set.items.length - 1);
      toc.push([id, set.title + " (" + rng + ")"]);
      h += '<h2 id="' + id + '" class="set-head">' + esc(set.title) + " <small>" + rng + "</small></h2>";
      set.items.forEach(function (it) {
        h += '<div class="q" data-answer="' + esc(it.a) + '"><p class="q-stem"><span class="q-n">' + n + "</span>" + inline(it.q) + '</p><div class="opts">';
        it.o.forEach(function (o, j) {
          var l = "abcd".charAt(j);
          h += '<button type="button" class="opt" data-l="' + l + '"><b>' + l + "</b><span>" + inline(o) + "</span></button>";
        });
        h += '</div><div class="q-feedback"><span class="verdict"></span> ' + inline(it.e) +
          ' <span class="q-review">' + (it.r ? topicLink(it.r, "Review " + esc(it.r)) : "") + "</span></div></div>";
        key += "<tr><td>" + n + "</td><td><b>" + esc(it.a) + "</b></td><td>" + inline(it.e) + "</td><td>" + (it.r ? topicLink(it.r, esc(it.r)) : "") + "</td></tr>";
        n++;
      });
    });
    h += '<div class="quiz-score" id="quiz-score">Answer the questions to see your score.</div>' +
      '<button type="button" class="btn ghost" id="quiz-reset">Reset quiz</button></div>';
    h += '<details class="answers"><summary>Show the full answer key (' + total + ' questions)</summary><div class="answers-body">' +
      '<div class="table-wrap"><table class="data"><thead><tr><th>Q</th><th>Answer</th><th>Explanation</th><th>Review</th></tr></thead><tbody>' +
      key + "</tbody></table></div></div></details>";
    app.innerHTML = h;
    addToc(toc);
  })();
  (function buildStructured() {
    var app = document.getElementById("sq-app");
    if (!app || !Q) return;
    var total = countQuestions("structured"), n = 1, toc = [];
    var h = '<p class="quiz-intro">' + total + " exam-style questions with marks. Write your answer first, then open " +
      "“Show model answer” to check it. Each answer links to the topic to review.</p>";
    Q.structured.forEach(function (set, si) {
      var id = "sq-set-" + (si + 1), rng = "S" + n + "–S" + (n + set.items.length - 1);
      toc.push([id, set.title + " (" + rng + ")"]);
      h += '<h2 id="' + id + '" class="set-head">' + esc(set.title) + " <small>" + rng + "</small></h2>";
      set.items.forEach(function (it) {
        var marks = it.m ? ' <span class="marks">[' + it.m + " mark" + (it.m > 1 ? "s" : "") + "]</span>" : "";
        h += '<div class="sq"><div class="sq-stem"><span class="q-n">S' + n + '</span><div class="sq-q">' + renderAnswer(it.q).replace(/<\/p>$/, marks + "</p>") + "</div></div>" +
          '<details class="answers"><summary>Show model answer</summary><div class="answers-body">' + renderAnswer(it.a) +
          (it.r ? '<p class="q-review">' + topicLink(it.r, "Review " + esc(it.r)) + "</p>" : "") + "</div></details></div>";
        n++;
      });
    });
    app.innerHTML = h;
    addToc(toc);
  })();

  /* ---------- storage ---------- */
  var store = {
    get: function (k, d) { try { return JSON.parse(localStorage.getItem(k)) || d; } catch (e) { return d; } },
    set: function (k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) { /* storage disabled */ } }
  };
  var KEY = "net-";

  /* ---------- mobile menu ---------- */
  var menuBtn = document.getElementById("menu-btn");
  if (menuBtn) {
    menuBtn.addEventListener("click", function () { body.classList.toggle("nav-open"); });
    document.querySelector(".content").addEventListener("click", function () { body.classList.remove("nav-open"); });
  }
  var active = document.querySelector(".side-ch a.active");
  if (active) active.scrollIntoView({ block: "center" });

  /* ---------- progress ---------- */
  var visited = store.get(KEY + "visited", {});
  if (!isHome) { visited[page] = 1; store.set(KEY + "visited", visited); }
  document.querySelectorAll(".side-ch li a").forEach(function (a) {
    if (visited[fileOf(a.getAttribute("href"))]) a.classList.add("done");
  });
  document.querySelectorAll(".topic-card").forEach(function (c) {
    if (visited[c.getAttribute("data-file")]) c.classList.add("done");
  });
  document.querySelectorAll(".chapter-card").forEach(function (c) {
    var files = (c.getAttribute("data-files") || "").split(" ").filter(Boolean);
    var n = files.filter(function (f) { return visited[f]; }).length;
    var pct = files.length ? Math.round((n / files.length) * 100) : 0;
    c.querySelector(".progress i").style.width = pct + "%";
    c.querySelector(".cc-pct").textContent = pct === 0 ? "Not started" : pct === 100 ? "Completed ✓" : pct + "% of topics opened";
  });

  /* ---------- back to top ---------- */
  var top = document.getElementById("to-top");
  if (top) {
    window.addEventListener("scroll", function () { top.classList.toggle("show", window.scrollY > 600); });
    top.addEventListener("click", function () { window.scrollTo({ top: 0, behavior: "smooth" }); });
  }

  /* ---------- search ---------- */
  var q = document.getElementById("q"), box = document.getElementById("results"), sel = -1;
  function search(term) {
    var words = term.toLowerCase().split(/\s+/).filter(Boolean);
    if (!words.length) return [];
    return (window.SEARCH_INDEX || []).map(function (p) {
      var t = p.t.toLowerCase(), x = p.x.toLowerCase(), score = 0;
      for (var i = 0; i < words.length; i++) {
        var w = words[i], inT = t.indexOf(w) >= 0, inX = x.indexOf(w);
        if (!inT && inX < 0) return null;
        score += (inT ? 10 : 0) + (inX >= 0 ? 1 + Math.min(5, x.split(w).length - 1) : 0);
      }
      return { p: p, score: score };
    }).filter(Boolean).sort(function (a, b) { return b.score - a.score; }).slice(0, 12);
  }
  function snippet(text, w) {
    var i = text.toLowerCase().indexOf(w);
    if (i < 0) return esc(text.slice(0, 110)) + "…";
    var s = Math.max(0, i - 50), part = text.slice(s, i + 80);
    return (s ? "…" : "") + esc(part).replace(new RegExp("(" + esc(w).replace(/[.*+?^${}()|[\]\\]/g, "\\$&") + ")", "ig"), "<mark>$1</mark>") + "…";
  }
  if (q) {
    q.addEventListener("input", function () {
      var term = q.value.trim(), res = search(term);
      sel = -1;
      if (!term) { box.classList.remove("open"); return; }
      box.innerHTML = res.length ? res.map(function (r) {
        return '<a href="' + PRE + r.p.u + '"><b>' + esc(r.p.t) + "</b><small>" + esc(r.p.c) + " · " + snippet(r.p.x, term.toLowerCase().split(/\s+/)[0]) + "</small></a>";
      }).join("") : '<div class="none">No matching topics.</div>';
      box.classList.add("open");
    });
    q.addEventListener("keydown", function (e) {
      var links = box.querySelectorAll("a");
      if (e.key === "ArrowDown" || e.key === "ArrowUp") {
        e.preventDefault();
        sel = (sel + (e.key === "ArrowDown" ? 1 : -1) + links.length) % links.length;
        links.forEach(function (l, i) { l.classList.toggle("sel", i === sel); });
      } else if (e.key === "Enter" && links.length) {
        window.location.href = links[Math.max(sel, 0)].getAttribute("href");
      } else if (e.key === "Escape") { box.classList.remove("open"); q.blur(); }
    });
    document.addEventListener("click", function (e) { if (!e.target.closest(".search")) box.classList.remove("open"); });
    document.addEventListener("keydown", function (e) {
      if (e.key === "/" && document.activeElement !== q && !/input|select|textarea/i.test(document.activeElement.tagName)) { e.preventDefault(); q.focus(); }
    });
  }

  /* ---------- syntax highlighting (terminal, Cisco IOS, YAML, DNS zone files, configuration files, PowerShell) ---------- */
  function words(s) { var o = {}; s.split(" ").forEach(function (w) { o[w] = 1; }); return o; }
  function span(cls, text) { return cls ? '<span class="' + cls + '">' + esc(text) + "</span>" : esc(text); }
  function lex(src, rules) {
    var re = new RegExp(rules.map(function (r) { return "(" + r[0] + ")"; }).join("|"), "gm");
    var out = "", last = 0, m;
    while ((m = re.exec(src))) {
      if (!m[0]) { re.lastIndex++; continue; }
      var cls = "";
      for (var i = 0; i < rules.length; i++) { if (m[i + 1] !== undefined) { cls = rules[i][1]; break; } }
      if (typeof cls === "function") cls = cls(m[0], src, m.index, re.lastIndex);
      if (cls === false) { re.lastIndex = m.index + 1; continue; }
      out += esc(src.slice(last, m.index)) + (cls && cls.html !== undefined ? cls.html : span(cls, m[0]));
      last = re.lastIndex;
    }
    return out + esc(src.slice(last));
  }
  var STR = "'(?:\\\\.|[^'\\\\\\n])*'|\"(?:\\\\.|[^\"\\\\\\n])*\"";
  var IP = "\\b(?:\\d{1,3}\\.){3}\\d{1,3}(?:\\/\\d{1,2})?\\b|\\b[0-9a-fA-F]{1,4}(?::[0-9a-fA-F]{0,4}){2,7}(?:\\/\\d{1,3})?(?![\\w:])";
  var SHELL_CMD = words("sudo");
  function shellCmd(m) {
    var w = m.replace(/^\s+/, "");
    return { html: esc(m.slice(0, m.length - w.length)) + span(SHELL_CMD[w] ? "tk-kw" : "tk-fn", w) };
  }
  var SHELL_RULES = [
    ["(?:^|\\s)#[^\\n]*", "tk-com"],
    [STR, "tk-str"],
    ["(?:^|&&|\\|\\||[|;])\\s*[\\w./-]+", function (m) {
      var lead = /^(?:&&|\|\||[|;])?\s*/.exec(m)[0], w = m.slice(lead.length);
      return { html: esc(lead) + span(SHELL_CMD[w] ? "tk-kw" : "tk-fn", w) };
    }],
    ["\\bsudo\\s+[\\w.-]+", function (m) { var p = m.split(/(\s+)/); return { html: span("tk-kw", p[0]) + esc(p[1]) + span("tk-fn", p[2]) }; }],
    ["\\s-{1,2}[A-Za-z][\\w=+-]*", "tk-attr"],
    [IP, "tk-num"],
    ["\\$\\w+|\\$\\{[^}]+\\}", "tk-var"]
  ];
  var CISCO_RULES = [
    ["^\\s*!.*$", "tk-com"],
    ["^[\\w-]+(?:\\([\\w-]+\\))?[#>]", "tk-pre"],
    ["\\b(?:no|show|interface|ip|address|route|hostname|enable|secret|password|login|local|line|vty|vlan|name|switchport|mode|access|trunk|shutdown|exit|end|configure|terminal|copy|running-config|startup-config|banner|motd|service|password-encryption|transport|input|ssh|default-gateway|domain-name|crypto|key|generate|rsa|modulus|username|version|allowed|encapsulation|dot1q|permit|deny|any|host|eq|access-list|access-group|in|out)\\b", "tk-kw"],
    [IP, "tk-num"],
    ["\\b(?:gigabitEthernet|fastEthernet|GigabitEthernet|FastEthernet)\\s*[\\d/]+", "tk-type"],
    ["#[^#\\n]+#", "tk-str"]
  ];
  var YAML_RULES = [
    ["#[^\\n]*", "tk-com"],
    [STR, "tk-str"],
    ["^\\s*-?\\s*[\\w.-]+(?=\\s*:)", "tk-prop"],
    [IP, "tk-num"],
    ["\\b(?:true|false|yes|no|null|default)\\b", "tk-const"],
    ["\\b\\d+\\b", "tk-num"]
  ];
  var ZONE_RULES = [
    [";[^\\n]*", "tk-com"],
    ["\\$(?:TTL|ORIGIN|INCLUDE)\\b", "tk-pre"],
    [STR, "tk-str"],
    ["\\b(?:IN|SOA|NS|A|AAAA|CNAME|MX|PTR|TXT|SRV|CAA)\\b", "tk-kw"],
    [IP, "tk-num"],
    ["\\b\\d+\\b", "tk-num"],
    ["[\\w.-]+\\.(?=\\s|$)", "tk-str"],
    ["^@|^[\\w-]+", "tk-var"]
  ];
  var CONF_RULES = [
    ["(?:\\/\\/|#)[^\\n]*", "tk-com"],
    [STR, "tk-str"],
    ["^\\s*\\[[^\\]]+\\]", "tk-tag"],
    ["^\\s*[\\w]+(?=\\s*=)", "tk-prop"],
    ["\\b(?:zone|type|master|slave|primary|secondary|file|options|forwarders|allow-transfer|allow-query|recursion|listen-on)\\b", "tk-kw"],
    [IP, "tk-num"]
  ];
  var PS_RULES = [
    ["#[^\\n]*", "tk-com"],
    [STR, "tk-str"],
    ["\\b[A-Z][a-z]+-[A-Za-z]+\\b", "tk-fn"],
    ["\\s-[A-Za-z]+", "tk-attr"],
    ["\\$\\w+", "tk-var"],
    [IP, "tk-num"]
  ];
  function highlight(src, lang) {
    var rules = { shell: SHELL_RULES, cisco: CISCO_RULES, yaml: YAML_RULES, zone: ZONE_RULES, conf: CONF_RULES, ini: CONF_RULES, powershell: PS_RULES }[lang];
    return rules ? lex(src, rules) : esc(src);
  }
  function highlightAll(root) {
    root.querySelectorAll("pre code[class*='lang-']").forEach(function (c) {
      if (c.getAttribute("data-hl")) return;
      c.innerHTML = highlight(c.textContent, (/lang-(\w+)/.exec(c.className) || [])[1]);
      c.setAttribute("data-hl", "1");
    });
  }
  highlightAll(document);
  function copyText(text, b) {
    var done = function () { b.textContent = "Copied ✓"; setTimeout(function () { b.textContent = "Copy"; }, 1500); };
    if (navigator.clipboard && window.isSecureContext) navigator.clipboard.writeText(text).then(done);
    else { var t = document.createElement("textarea"); t.value = text; body.appendChild(t); t.select(); document.execCommand("copy"); t.remove(); done(); }
  }
  document.querySelectorAll(".code .copy").forEach(function (b) {
    b.addEventListener("click", function () { copyText(b.closest(".code").querySelector("code").textContent, b); });
  });

  /* ---------- quiz ---------- */
  var quiz = document.getElementById("quiz");
  if (quiz) {
    var qs = quiz.querySelectorAll(".q"), scoreEl = document.getElementById("quiz-score");
    var update = function () {
      var done = quiz.querySelectorAll(".q.done").length, ok = quiz.querySelectorAll(".q.ok").length;
      scoreEl.textContent = done ? "Score: " + ok + " / " + done + " answered" + (done === qs.length ? "  (" + Math.round(ok * 100 / qs.length) + "%)" : "") : "Answer the questions to see your score.";
    };
    qs.forEach(function (qq) {
      qq.querySelectorAll(".opt").forEach(function (o) {
        o.addEventListener("click", function () {
          if (qq.classList.contains("done")) return;
          var right = o.getAttribute("data-l") === qq.getAttribute("data-answer");
          qq.classList.add("done", right ? "ok" : "bad");
          o.classList.add(right ? "right" : "wrong");
          var correct = qq.querySelector('.opt[data-l="' + qq.getAttribute("data-answer") + '"]');
          if (correct) correct.classList.add("right");
          qq.querySelector(".verdict").textContent = right ? "Correct!" : "Not quite. The answer is (" + qq.getAttribute("data-answer") + ").";
          update();
        });
      });
    });
    document.getElementById("quiz-reset").addEventListener("click", function () {
      qs.forEach(function (qq) {
        qq.classList.remove("done", "ok", "bad");
        qq.querySelectorAll(".opt").forEach(function (o) { o.classList.remove("right", "wrong"); });
      });
      update();
    });
  }

  /* ---------- topic checklist ---------- */
  var skills = store.get(KEY + "skills", {});
  document.querySelectorAll(".checklist input").forEach(function (cb) {
    var k = cb.getAttribute("data-key");
    cb.checked = !!skills[k];
    cb.addEventListener("change", function () { skills[k] = cb.checked; store.set(KEY + "skills", skills); });
  });

  /* ---------- networking labs ---------- */
  function ipToInt(s) {
    var m = /^\s*(\d{1,3})\.(\d{1,3})\.(\d{1,3})\.(\d{1,3})\s*$/.exec(s);
    if (!m) return null;
    var p = [+m[1], +m[2], +m[3], +m[4]];
    if (p.some(function (o) { return o > 255; })) return null;
    return ((p[0] << 24) >>> 0) + (p[1] << 16) + (p[2] << 8) + p[3];
  }
  function intToIp(n) { return [n >>> 24, (n >>> 16) & 255, (n >>> 8) & 255, n & 255].join("."); }
  function maskOf(p) { return p === 0 ? 0 : (0xFFFFFFFF << (32 - p)) >>> 0; }
  function parseCidr(s) {
    var m = /^\s*([\d.]+)\s*(?:\/\s*(\d{1,2})|\s+([\d.]+))?\s*$/.exec(s || "");
    if (!m) return null;
    var ip = ipToInt(m[1]);
    if (ip === null) return null;
    var p = 24;
    if (m[2] !== undefined) p = +m[2];
    else if (m[3]) {
      var mk = ipToInt(m[3]);
      if (mk === null) return null;
      p = 0;
      while (p < 32 && ((mk >>> (31 - p)) & 1)) p++;
      if (maskOf(p) !== mk) return null;
    }
    if (p > 32) return null;
    return { ip: ip, p: p };
  }
  function addrType(n) {
    var a = n >>> 24, b = (n >>> 16) & 255;
    if (a === 10 || (a === 172 && b >= 16 && b <= 31) || (a === 192 && b === 168)) return "Private (RFC 1918)";
    if (a === 127) return "Loopback";
    if (a === 169 && b === 254) return "Link-local (APIPA)";
    if (a === 100 && b >= 64 && b <= 127) return "Shared address space (carrier-grade NAT)";
    if (a === 0) return "\"This network\" (not usable)";
    if (a >= 224 && a <= 239) return "Multicast (class D)";
    if (a >= 240) return "Reserved (class E)";
    return "Public";
  }
  function addrClass(n) {
    var a = n >>> 24;
    return a < 128 ? "A" : a < 192 ? "B" : a < 224 ? "C" : a < 240 ? "D" : "E";
  }
  function bits(n, p) {
    var h = "";
    for (var i = 0; i < 32; i++) {
      if (i && i % 8 === 0) h += '<span class="bit-dot">.</span>';
      h += '<span class="' + (i < p ? "nb" : "hb") + '">' + ((n >>> (31 - i)) & 1) + "</span>";
    }
    return h;
  }
  function rows(list) {
    return '<div class="table-wrap"><table class="data lab-table"><tbody>' + list.map(function (r) {
      return "<tr><th>" + r[0] + "</th><td>" + r[1] + "</td></tr>";
    }).join("") + "</tbody></table></div>";
  }
  function presetButtons(list) {
    return '<div class="lab-presets">' + list.map(function (p, i) { return '<button type="button" data-i="' + i + '">' + esc(p) + "</button>"; }).join("") + "</div>";
  }

  /* subnet calculator (4.4) */
  var sn = document.getElementById("subnet-lab");
  if (sn) {
    var snPre = ["192.168.10.77/26", "10.1.1.200/27", "172.16.5.4/20", "192.168.1.130 255.255.255.224", "203.0.113.9/30"];
    sn.innerHTML = '<h4>Subnet calculator</h4><p class="lab-hint">Type an IPv4 address with a prefix (<code>/26</code>) or a dotted mask. ' +
      "Work the answer out by hand first, then use the calculator to check it.</p>" + presetButtons(snPre) +
      '<label class="lab-field">Address and prefix<input type="text" class="sn-in" spellcheck="false"></label><div class="sn-out"></div>';
    var snIn = sn.querySelector(".sn-in"), snOut = sn.querySelector(".sn-out");
    var calc = function () {
      var c = parseCidr(snIn.value);
      if (!c) { snOut.innerHTML = '<div class="lab-msg err">Enter an address such as 192.168.10.77/26 or 192.168.10.77 255.255.255.192.</div>'; return; }
      var mask = maskOf(c.p), net = (c.ip & mask) >>> 0, bc = (net | (~mask >>> 0)) >>> 0, size = Math.pow(2, 32 - c.p);
      var hosts = c.p === 32 ? 1 : c.p === 31 ? 2 : size - 2;
      var first = c.p >= 31 ? net : net + 1, last = c.p >= 31 ? bc : bc - 1;
      var octet = c.p === 32 ? 4 : Math.floor(c.p / 8) + 1, block = c.p % 8 ? 256 - ((mask >>> (8 * (4 - octet))) & 255) : 0;
      snOut.innerHTML = rows([
        ["Address", "<code>" + intToIp(c.ip) + "</code> (" + addrType(c.ip) + ", class " + addrClass(c.ip) + ")"],
        ["Prefix and mask", "<code>/" + c.p + "</code> = <code>" + intToIp(mask) + "</code>" + (block ? " &nbsp;(block size " + block + " in octet " + octet + ")" : "")],
        ["Wildcard mask", "<code>" + intToIp(~mask >>> 0) + "</code>"],
        ["Network address", "<code>" + intToIp(net) + "/" + c.p + "</code>"],
        ["Broadcast address", c.p >= 31 ? "none (" + (c.p === 31 ? "/31 point-to-point link" : "single host route") + ")" : "<code>" + intToIp(bc) + "</code>"],
        ["Usable host range", "<code>" + intToIp(first) + "</code> to <code>" + intToIp(last) + "</code>"],
        ["Usable hosts", c.p >= 31 ? String(hosts) : "2<sup>" + (32 - c.p) + "</sup> − 2 = <b>" + hosts.toLocaleString() + "</b>"]
      ]) + '<div class="bits-view"><div><span class="bits-label">Address</span><code>' + bits(c.ip, c.p) + "</code></div>" +
        '<div><span class="bits-label">Mask</span><code>' + bits(mask, c.p) + "</code></div>" +
        '<div><span class="bits-label">Network</span><code>' + bits(net, c.p) + '</code></div><p class="bits-key"><span class="nb">network bits</span> <span class="hb">host bits</span></p></div>';
    };
    sn.querySelectorAll(".lab-presets button").forEach(function (b) { b.addEventListener("click", function () { snIn.value = snPre[+b.getAttribute("data-i")]; calc(); }); });
    snIn.addEventListener("input", calc);
    snIn.value = snPre[0];
    calc();
  }

  /* binary and decimal converter (4.2) */
  var bl = document.getElementById("binary-lab");
  if (bl) {
    var vals = [128, 64, 32, 16, 8, 4, 2, 1];
    bl.innerHTML = '<h4>Binary octet converter</h4><p class="lab-hint">Click the bits to switch them on and off, or type a decimal number from 0 to 255.</p>' +
      '<div class="bit-row">' + vals.map(function (v, i) { return '<button type="button" class="bit" data-i="' + i + '"><small>' + v + "</small><b>0</b></button>"; }).join("") + "</div>" +
      '<label class="lab-field">Decimal<input type="text" class="bl-dec" value="172" spellcheck="false"></label><div class="bl-out lab-css"></div>';
    var dec = bl.querySelector(".bl-dec"), bout = bl.querySelector(".bl-out"), btns = bl.querySelectorAll(".bit");
    var show = function (n) {
      var on = [];
      btns.forEach(function (b, i) {
        var set = (n & vals[i]) !== 0;
        b.classList.toggle("on", set);
        b.querySelector("b").textContent = set ? "1" : "0";
        if (set) on.push(vals[i]);
      });
      var bin = ("00000000" + n.toString(2)).slice(-8);
      bout.textContent = "Binary  " + bin + "\nDecimal " + (on.length ? on.join(" + ") + " = " : "") + n + "\nHex     " + ("0" + n.toString(16).toUpperCase()).slice(-2) +
        "  (" + bin.slice(0, 4) + " = " + parseInt(bin.slice(0, 4), 2).toString(16).toUpperCase() + ", " + bin.slice(4) + " = " + parseInt(bin.slice(4), 2).toString(16).toUpperCase() + ")";
    };
    btns.forEach(function (b, i) {
      b.addEventListener("click", function () {
        var n = (parseInt(dec.value, 10) || 0) ^ vals[i];
        dec.value = n;
        dec.classList.remove("bad");
        show(n);
      });
    });
    dec.addEventListener("input", function () {
      var n = Number(dec.value);
      var ok = /^\d{1,3}$/.test(dec.value.trim()) && n <= 255;
      dec.classList.toggle("bad", !ok);
      if (ok) show(n);
    });
    show(172);
  }

  /* transfer time calculator (1.7) */
  var tl = document.getElementById("transfer-lab");
  if (tl) {
    var su = { KB: 1e3, MB: 1e6, GB: 1e9 }, ru = { Kbps: 1e3, Mbps: 1e6, Gbps: 1e9 };
    var opt = function (o, d) { return Object.keys(o).map(function (k) { return "<option" + (k === d ? " selected" : "") + ">" + k + "</option>"; }).join(""); };
    tl.innerHTML = '<h4>Transfer time calculator</h4><p class="lab-hint">File sizes are in <b>bytes</b> (B) but link speeds are in <b>bits</b> per second (b). ' +
      "Multiply by 8 to convert bytes to bits, then divide by the speed. The result is the ideal time: real throughput is lower.</p>" +
      '<div class="lab-controls"><label>File size<input type="text" class="tl-size" value="10"></label><label>unit<select class="tl-su">' + opt(su, "MB") + "</select></label>" +
      '<label>Link speed<input type="text" class="tl-rate" value="8"></label><label>unit<select class="tl-ru">' + opt(ru, "Mbps") + "</select></label></div>" +
      '<pre class="lab-css tl-out"></pre>';
    var tout = tl.querySelector(".tl-out");
    var fmt = function (s) {
      if (s < 1) return (s * 1000).toFixed(1) + " ms";
      if (s < 120) return (Math.round(s * 100) / 100) + " seconds";
      if (s < 7200) return (Math.round(s / 6) / 10) + " minutes";
      return (Math.round(s / 360) / 10) + " hours";
    };
    var run = function () {
      var size = parseFloat(tl.querySelector(".tl-size").value), rate = parseFloat(tl.querySelector(".tl-rate").value);
      var sU = tl.querySelector(".tl-su").value, rU = tl.querySelector(".tl-ru").value;
      if (!(size > 0) || !(rate > 0)) { tout.textContent = "Enter a positive file size and link speed."; return; }
      var bitsN = size * su[sU] * 8, secs = bitsN / (rate * ru[rU]);
      tout.textContent = "Size in bits  " + size + " " + sU + " x 8 = " + (size * 8) + " " + sU.charAt(0) + "b\n" +
        "Time          " + (bitsN / 1e6).toLocaleString() + " Mb / " + (rate * ru[rU] / 1e6).toLocaleString() + " Mbps = " + fmt(secs);
    };
    tl.addEventListener("input", run);
    tl.addEventListener("change", run);
    run();
  }

  /* IPv6 shortener (4.6) */
  var v6 = document.getElementById("ipv6-lab");
  if (v6) {
    var v6Pre = ["2001:0db8:0000:0000:0000:ff00:0042:8329", "fe80:0000:0000:0000:02aa:00ff:fe28:9c5a", "2001:db8::1", "ff02::1", "0000:0000:0000:0000:0000:0000:0000:0001"];
    v6.innerHTML = '<h4>IPv6 shortener and expander</h4><p class="lab-hint">Type an IPv6 address in full or short form to see both forms. ' +
      "The short form drops leading zeros in each group and replaces the longest run of zero groups with <code>::</code> (only once).</p>" + presetButtons(v6Pre) +
      '<label class="lab-field">IPv6 address<input type="text" class="v6-in" spellcheck="false"></label><div class="v6-out"></div>';
    var vin = v6.querySelector(".v6-in"), vout = v6.querySelector(".v6-out");
    var expand = function (s) {
      s = s.trim().toLowerCase().replace(/\/\d+$/, "");
      if (!/^[0-9a-f:]+$/.test(s) || (s.match(/::/g) || []).length > 1) return null;
      var parts;
      if (s.indexOf("::") >= 0) {
        var lr = s.split("::"), l = lr[0] ? lr[0].split(":") : [], r = lr[1] ? lr[1].split(":") : [];
        if (l.length + r.length > 7) return null;
        parts = l.concat(new Array(8 - l.length - r.length + 1).join("0").split(""), r);
      } else parts = s.split(":");
      if (parts.length !== 8 || parts.some(function (g) { return !/^[0-9a-f]{1,4}$/.test(g); })) return null;
      return parts.map(function (g) { return ("0000" + g).slice(-4); });
    };
    var compress = function (full) {
      var g = full.map(function (x) { return x.replace(/^0+(?=.)/, ""); }), best = -1, len = 0;
      for (var i = 0; i < 8; i++) {
        var j = i;
        while (j < 8 && g[j] === "0") j++;
        if (j - i > len && j - i >= 2) { best = i; len = j - i; }
        if (j > i) i = j;
      }
      if (best < 0) return { stripped: g.join(":"), short: g.join(":") };
      var s = g.slice(0, best).join(":") + "::" + g.slice(best + len).join(":");
      return { stripped: g.join(":"), short: s };
    };
    var v6type = function (full) {
      var f = parseInt(full[0], 16);
      if (full.join("") === "00000000000000000000000000000001") return "Loopback (::1)";
      if (full.join("") === "00000000000000000000000000000000") return "Unspecified (::)";
      if (full[0] === "2001" && full[1] === "0db8") return "Documentation (2001:db8::/32), used in examples";
      if ((f & 0xffc0) === 0xfe80) return "Link-local (fe80::/10)";
      if ((f & 0xfe00) === 0xfc00) return "Unique local (fc00::/7)";
      if ((f & 0xff00) === 0xff00) return "Multicast (ff00::/8)";
      if ((f & 0xe000) === 0x2000) return "Global unicast (2000::/3)";
      return "Other / reserved";
    };
    var conv = function () {
      var full = expand(vin.value);
      if (!full) { vout.innerHTML = '<div class="lab-msg err">Not a valid IPv6 address. Use up to eight groups of 1 to 4 hex digits, with at most one <code>::</code>.</div>'; return; }
      var c = compress(full);
      vout.innerHTML = rows([["Full form", "<code>" + full.join(":") + "</code>"], ["Leading zeros removed", "<code>" + c.stripped + "</code>"],
        ["Shortest form", "<code>" + c.short + "</code>"], ["Address type", v6type(full)]]);
    };
    v6.querySelectorAll(".lab-presets button").forEach(function (b) { b.addEventListener("click", function () { vin.value = v6Pre[+b.getAttribute("data-i")]; conv(); }); });
    vin.addEventListener("input", conv);
    vin.value = v6Pre[0];
    conv();
  }

  /* VLSM planner (4.5.1) */
  var vl = document.getElementById("vlsm-lab");
  if (vl) {
    vl.innerHTML = '<h4>VLSM planner</h4><p class="lab-hint">Enter the address block and one requirement per line (<code>name hosts</code>). ' +
      "The planner sorts the requirements from largest to smallest and gives each the smallest subnet that fits.</p>" +
      '<label class="lab-field">Address block<input type="text" class="vl-net" value="192.168.5.0/24" spellcheck="false"></label>' +
      '<label class="lab-field">Requirements<textarea class="vl-req" rows="5" spellcheck="false">LAN A 100\nLAN B 50\nLAN C 20\nRouter link 2</textarea></label><div class="vl-out"></div>';
    var vout2 = vl.querySelector(".vl-out");
    var plan = function () {
      var c = parseCidr(vl.querySelector(".vl-net").value);
      if (!c) { vout2.innerHTML = '<div class="lab-msg err">Enter the block as network/prefix, for example 192.168.5.0/24.</div>'; return; }
      var reqs = vl.querySelector(".vl-req").value.split("\n").map(function (l) {
        var m = /^\s*(.*?)\s+(\d+)\s*$/.exec(l);
        return m ? { name: m[1] || "Subnet", n: +m[2] } : null;
      }).filter(function (r) { return r && r.n > 0; });
      reqs.sort(function (a, b) { return b.n - a.n; });
      var base = (c.ip & maskOf(c.p)) >>> 0, end = base + Math.pow(2, 32 - c.p), ptr = base, html = "", ok = true;
      reqs.forEach(function (r) {
        var h = 2;
        while (Math.pow(2, h) - 2 < r.n) h++;
        var p = 32 - h, size = Math.pow(2, h);
        if (ptr % size) ptr += size - (ptr % size);
        if (ptr + size > end || p < c.p) { ok = false; html += "<tr><td>" + esc(r.name) + "</td><td>" + r.n + '</td><td colspan="4" class="lab-bad">Does not fit in the remaining space</td></tr>'; return; }
        html += "<tr><td>" + esc(r.name) + "</td><td>" + r.n + "</td><td><code>" + intToIp(ptr) + "/" + p + "</code></td><td><code>" + intToIp(ptr + 1) + " – " + intToIp(ptr + size - 2) +
          "</code></td><td><code>" + intToIp(ptr + size - 1) + "</code></td><td>" + (size - 2) + "</td></tr>";
        ptr += size;
      });
      vout2.innerHTML = '<div class="table-wrap"><table class="data"><thead><tr><th>Subnet</th><th>Hosts needed</th><th>Network</th><th>Usable range</th><th>Broadcast</th><th>Usable</th></tr></thead><tbody>' +
        html + "</tbody></table></div>" + '<div class="lab-msg ' + (ok ? "ok" : "err") + '">' + (ok ? "All subnets fit. " : "Some subnets do not fit: use a larger block. ") +
        (ptr < end ? "Unused space: " + intToIp(ptr) + " to " + intToIp(end - 1) + " (" + (end - ptr) + " addresses)." : "No space left.") + "</div>";
    };
    vl.addEventListener("input", plan);
    plan();
  }

  /* port quiz (5.7) */
  var pl = document.getElementById("ports-lab");
  if (pl) {
    var PORTS = [["FTP (control)", "21"], ["SSH", "22"], ["Telnet", "23"], ["SMTP", "25"], ["DNS", "53"], ["DHCP (server)", "67"], ["HTTP", "80"],
      ["POP3", "110"], ["IMAP", "143"], ["SNMP", "161"], ["LDAP", "389"], ["HTTPS", "443"], ["SMB", "445"], ["LDAPS", "636"], ["MySQL", "3306"], ["RDP", "3389"]];
    pl.innerHTML = '<h4>Port number quiz</h4><p class="lab-hint">Type the port number for each service and press Enter. Learn these by heart: they appear in firewall rules, troubleshooting and exams.</p>' +
      '<div class="pq-card"><span class="pq-q"></span><input type="text" class="pq-in" inputmode="numeric" spellcheck="false" aria-label="Port number">' +
      '<button type="button" class="btn pq-check">Check</button><button type="button" class="btn ghost pq-next">Next</button></div><div class="lab-msg pq-msg"></div><p class="pq-score"></p>';
    var cur2 = 0, right = 0, asked = 0, done = false, deck = [];
    var pq = pl.querySelector(".pq-q"), pin = pl.querySelector(".pq-in"), pmsg = pl.querySelector(".pq-msg"), psc = pl.querySelector(".pq-score");
    var next = function () {
      if (!deck.length) deck = PORTS.map(function (p, i) { return i; }).sort(function () { return Math.random() - 0.5; });
      cur2 = deck.pop();
      done = false;
      pq.innerHTML = "Port for <b>" + PORTS[cur2][0] + "</b>?";
      pin.value = "";
      pmsg.className = "lab-msg pq-msg";
      pmsg.textContent = "";
      pin.focus({ preventScroll: true });
    };
    var check = function () {
      if (done || !pin.value.trim()) return;
      done = true;
      asked++;
      var ok = pin.value.trim() === PORTS[cur2][1];
      if (ok) right++;
      pmsg.className = "lab-msg pq-msg " + (ok ? "ok" : "err");
      pmsg.textContent = (ok ? "✓ Correct: " : "✗ Not quite: ") + PORTS[cur2][0] + " uses port " + PORTS[cur2][1] + ".";
      psc.textContent = "Score: " + right + " / " + asked;
    };
    pl.querySelector(".pq-check").addEventListener("click", check);
    pl.querySelector(".pq-next").addEventListener("click", next);
    pin.addEventListener("keydown", function (e) { if (e.key === "Enter") { if (done) next(); else check(); } });
    deck = PORTS.map(function (p, i) { return i; }).sort(function () { return Math.random() - 0.5; });
    cur2 = deck.pop();
    pq.innerHTML = "Port for <b>" + PORTS[cur2][0] + "</b>?";
  }
})();
