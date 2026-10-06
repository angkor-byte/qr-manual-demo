"""見本マニュアルを PDF 化する。{{P}}/{{T}} にページ番号を振り、Chrome headless で docs/m/QR-000123.pdf へ。
Chrome は Desktop 等への直接出力でハングすることがあるので、一時ディレクトリで出力してからコピーする。"""
import os, re, shutil, subprocess, sys, tempfile, time
HERE = os.path.dirname(os.path.abspath(__file__))
CHROME = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
src = open(os.path.join(HERE, "manual-SK200-0001.html"), encoding="utf-8").read()
head, body = src.split("<body>", 1)   # head のコメントにも {{P}} がある
n = body.count('<div class="pg">')
k = iter(range(1, n + 1))
body = re.sub(r"\{\{P\}\}", lambda m: str(next(k)), body).replace("{{T}}", str(n))
src = head + "<body>" + body
tmp = tempfile.mkdtemp()
html, pdf = os.path.join(tmp, "m.html"), os.path.join(tmp, "m.pdf")
open(html, "w", encoding="utf-8").write(src)
p = subprocess.Popen([CHROME, "--headless=new", "--disable-gpu", "--no-pdf-header-footer", "--no-sandbox",
                      "--print-to-pdf=" + pdf, "file://" + html], stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
for _ in range(60):
    if p.poll() is not None: break
    time.sleep(1)
else:
    p.kill(); sys.exit("chrome hung")
out = os.path.join(HERE, "..", "docs", "m", "QR-000123.pdf")
shutil.copy(pdf, out)
print(f"{n} pages -> {os.path.normpath(out)}")
