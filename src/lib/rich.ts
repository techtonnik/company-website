const escape = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

/** Escapes text and turns **segments** into accent-highlighted <strong> tags. */
export const rich = (s: string) => escape(s).replace(/\*\*(.+?)\*\*/g, '<strong class="hl">$1</strong>');

export const isExternal = (href: string) => /^https?:\/\//.test(href);
