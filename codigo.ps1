Write-Host "`n=== COMMITS RECENTES ==="
git log --oneline -8

Write-Host "`n=== RESUMO DAS ALTERACOES ==="
git diff --stat

Write-Host "`n=== ARQUIVOS EM src, scripts e docs ==="
Get-ChildItem -Recurse -File .\src, .\scripts, .\docs -ErrorAction SilentlyContinue |
  ForEach-Object { "{0,8}  {1}" -f $_.Length, (Resolve-Path -Relative $_.FullName) }

Write-Host "`n=== ARQUIVO 'd' (primeiras linhas) ==="
Get-Content .\d -TotalCount 5

Write-Host "`n=== BASELINE ==="
npm run check
npm run build