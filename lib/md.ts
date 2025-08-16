export function stripFrontMatter(md: string) {
  return md.replace(/^---[\s\S]*?---\n/, '');
}

export function mdToHtml(md: string) {
  const esc = (s: string) =>
    s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  let html = md
    .replace(/^### (.*)$/gm, '<h3>$1</h3>')
    .replace(/^## (.*)$/gm, '<h2>$1</h2>')
    .replace(/^# (.*)$/gm, '<h1>$1</h1>')
    .replace(/```([\s\S]*?)```/gm, (_m, code) => `<pre><code>${esc(code)}</code></pre>`)
    .replace(/^- (.*)$/gm, '<li>$1</li>')
    .replace(/^(?!<h\d|<pre|<li|<ul|<p|\s*$)(.+)$/gm, '<p>$1</p>')
    .replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2" class="underline" target="_blank" rel="noopener">$1</a>');
  html = html.replace(/(<li>.*<\/li>)/gs, (m) => `<ul>${m}</ul>`);
  return html;
}


