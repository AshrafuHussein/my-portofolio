'use client';

import { useState } from 'react';
import { gooeyToast } from 'goey-toast';
import { Check, Copy, Terminal } from 'lucide-react';

interface ProjectCodeSnippetProps {
  code: string;
  language: 'dart' | 'sql' | 'typescript' | 'json';
  filename?: string;
  title?: string;
}

export function ProjectCodeSnippet({
  code,
  language,
  filename,
  title,
}: ProjectCodeSnippetProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      const firstLine = code.trim().split('\n')[0];
      const preview = firstLine.length > 50 ? firstLine.substring(0, 50) + '...' : firstLine;
      gooeyToast.success('Copied snippet to clipboard', {
        description: preview,
        preset: 'bouncy',
      });
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy code: ', err);
    }
  };

  const lines = code.trim().split('\n');

  return (
    <div className="rounded-xl overflow-hidden border border-emerald-500/20 bg-[#090d0b] text-xs font-mono shadow-2xl">
      {/* Header bar */}
      <div className="flex items-center justify-between px-3.5 py-2.5 bg-[#0e1410] border-b border-emerald-500/15">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5 mr-1">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/30 border border-emerald-500/40" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/20 border border-emerald-500/30" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/15 border border-emerald-500/20" />
          </div>
          <Terminal className="w-3.5 h-3.5 text-emerald-400" />
          <span className="text-slate-300 font-medium text-[11px]">
            {filename || (language === 'dart' ? 'bloc_handler.dart' : 'schema_rls.sql')}
          </span>
          {title && (
            <span className="text-slate-500 text-[10px] hidden sm:inline-block">
              · {title}
            </span>
          )}
        </div>

        <button
          type="button"
          onClick={handleCopy}
          className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-emerald-950/40 hover:bg-emerald-900/50 border border-emerald-500/25 text-[11px] text-emerald-300 hover:text-emerald-200 transition-all duration-150 active:scale-95"
          title="Copy snippet to clipboard"
          aria-label="Copy snippet"
        >
          {copied ? (
            <>
              <Check className="w-3 h-3 text-emerald-400" />
              <span>Copied</span>
            </>
          ) : (
            <>
              <Copy className="w-3 h-3 text-emerald-400" />
              <span>Copy</span>
            </>
          )}
        </button>
      </div>

      {/* Code Area */}
      <div className="p-3.5 overflow-x-auto max-h-64 sm:max-h-72 select-text scrollbar-thin scrollbar-thumb-emerald-900/40">
        <table className="border-collapse w-full">
          <tbody>
            {lines.map((line, idx) => (
              <tr key={idx} className="hover:bg-emerald-500/5 transition-colors">
                <td className="pr-4 select-none text-slate-600 text-right w-6 text-[10px] align-top">
                  {idx + 1}
                </td>
                <td className="text-slate-200 whitespace-pre font-mono leading-relaxed">
                  {formatSyntax(line, language)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

// Lightweight syntax token colorizer for dark Supabase aesthetic
function formatSyntax(line: string, lang: 'dart' | 'sql' | 'typescript' | 'json') {
  if (line.trim().startsWith('//') || line.trim().startsWith('--')) {
    return <span className="text-emerald-400/60 italic">{line}</span>;
  }

  // Keywords
  const dartKeywords = /\b(final|await|async|void|class|extends|super|return|import|from|context|read|add|select|where|create|policy|function|returns|security|definer|as|order|by|table|schema)\b/g;
  
  if (lang === 'dart' || lang === 'sql') {
    const parts = line.split(dartKeywords);
    return (
      <>
        {parts.map((part, i) => {
          if (part.match(dartKeywords)) {
            return (
              <span key={i} className="text-emerald-400 font-semibold">
                {part}
              </span>
            );
          }
          if (part.includes("'") || part.includes('"')) {
            return (
              <span key={i} className="text-emerald-200">
                {part}
              </span>
            );
          }
          return <span key={i}>{part}</span>;
        })}
      </>
    );
  }

  return <span>{line}</span>;
}

export default ProjectCodeSnippet;
