param(
  [Parameter(Mandatory=$true)][string]$Source,
  [Parameter(Mandatory=$true)][string]$Origin,
  [Parameter(Mandatory=$true)][string]$OutputDir
)
$ErrorActionPreference = 'Stop'
$sourceFile = (Resolve-Path -LiteralPath $Source).Path
if (-not (Test-Path -LiteralPath $sourceFile -PathType Leaf)) { throw 'Source must be a file.' }
New-Item -ItemType Directory -Path $OutputDir -Force | Out-Null
$destDir = (Resolve-Path -LiteralPath $OutputDir).Path
$originalDir = Join-Path $destDir 'original'
$workDir = Join-Path $destDir 'work'
New-Item -ItemType Directory -Path $originalDir,$workDir -Force | Out-Null
$name = Split-Path -Path $sourceFile -Leaf
$preserved = Join-Path $originalDir $name
$working = Join-Path $workDir $name
if ((Test-Path -LiteralPath $preserved) -or (Test-Path -LiteralPath $working)) { throw 'Destination exists. Preserve earlier evidence; choose another OutputDir.' }
Copy-Item -LiteralPath $sourceFile -Destination $preserved
Copy-Item -LiteralPath $preserved -Destination $working
$sourceHash = (Get-FileHash -LiteralPath $sourceFile -Algorithm SHA256).Hash
$preservedHash = (Get-FileHash -LiteralPath $preserved -Algorithm SHA256).Hash
$workHash = (Get-FileHash -LiteralPath $working -Algorithm SHA256).Hash
if (($sourceHash -ne $preservedHash) -or ($sourceHash -ne $workHash)) { throw 'Hash mismatch; do not analyze.' }
$size = (Get-Item -LiteralPath $sourceFile).Length
$stamp = Get-Date -Format 'yyyy-MM-ddTHH:mm:ssK'
@(
  "source=$sourceFile"
  "preserved=$preserved"
  "working=$working"
  "origin=$Origin"
  "analysis_date=$stamp"
  "size_bytes=$size"
  "sha256=$sourceHash"
) | Set-Content -LiteralPath (Join-Path $destDir 'hashes.txt') -Encoding UTF8
Write-Output "Preserved and verified SHA-256: $sourceHash"
Write-Output "Analyze only: $working"
