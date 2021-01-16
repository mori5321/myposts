module.exports = {
  presets: ['next/babel'],
  plugins: [
    [
      'prismjs',
      {
        languages: [
          'javascript',
          'typescript',
          'css',
          'html',
          'rust',
          'ruby',
          'haskell',
          'c',
          'cpp',
          'elixir',
          'elm',
          'git',
          'go',
          'graphql',
          'http',
          'json',
          'java',
          'latex',
          'nim',
          'ocaml',
          'python',
          'shell-session',
          'sql',
          'wasm',
          'yaml',
        ],
        plugins: ['line-numbers', 'show-language'],
        theme: 'default',
        css: true
      }
    ]
  ]
}
