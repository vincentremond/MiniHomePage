set-alias inkscape "C:\Program Files\Inkscape\inkscape.exe"
$sizes = @(16,48,128)
foreach($size in $sizes) {
    $src = ".\src\img\icons\source.svg"
    $dst = ".\extension\img\icons\$($size).png"
    "inkscape -f $($src) -e $($dst) --export-width $size --export-height $size"
    inkscape -f "$($src)" -e "$($dst)" --export-width "$size" --export-height "$size"
}

Set-Alias sevenzip "C:\Program Files\7-Zip\7z.exe"
Set-Location .\extension
$timestamp = (Get-Date -Format "yyyyMMddHHmmss")
sevenzip a -tzip "..\result\MiniHomePage-$timestamp.zip"
Set-Location ..
