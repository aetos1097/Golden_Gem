# Script de PowerShell para copiar archivos del proyecto
Write-Host "Copiando archivos del proyecto..." -ForegroundColor Green

# Ruta origen (relativa)
$sourceBase = "golden-gem-website"
# Ruta destino
$destBase = "C:\Users\Juan Pablo\golden-gem-website"

# Archivos a copiar
$files = @(
    @{
        Source = "golden-gem-website\src\components\Navbar.jsx"
        Dest = "C:\Users\Juan Pablo\golden-gem-website\src\components\Navbar.jsx"
    },
    @{
        Source = "golden-gem-website\src\components\Footer.jsx"
        Dest = "C:\Users\Juan Pablo\golden-gem-website\src\components\Footer.jsx"
    },
    @{
        Source = "golden-gem-website\src\components\Hero.jsx"
        Dest = "C:\Users\Juan Pablo\golden-gem-website\src\components\Hero.jsx"
    },
    @{
        Source = "golden-gem-website\src\components\ProductCard.jsx"
        Dest = "C:\Users\Juan Pablo\golden-gem-website\src\components\ProductCard.jsx"
    },
    @{
        Source = "golden-gem-website\src\components\ProductGrid.jsx"
        Dest = "C:\Users\Juan Pablo\golden-gem-website\src\components\ProductGrid.jsx"
    },
    @{
        Source = "golden-gem-website\src\components\CartDrawer.jsx"
        Dest = "C:\Users\Juan Pablo\golden-gem-website\src\components\CartDrawer.jsx"
    },
    @{
        Source = "golden-gem-website\src\pages\Home.jsx"
        Dest = "C:\Users\Juan Pablo\golden-gem-website\src\pages\Home.jsx"
    },
    @{
        Source = "golden-gem-website\src\pages\Catalog.jsx"
        Dest = "C:\Users\Juan Pablo\golden-gem-website\src\pages\Catalog.jsx"
    },
    @{
        Source = "golden-gem-website\src\pages\Cart.jsx"
        Dest = "C:\Users\Juan Pablo\golden-gem-website\src\pages\Cart.jsx"
    },
    @{
        Source = "golden-gem-website\src\pages\About.jsx"
        Dest = "C:\Users\Juan Pablo\golden-gem-website\src\pages\About.jsx"
    },
    @{
        Source = "golden-gem-website\src\pages\Contact.jsx"
        Dest = "C:\Users\Juan Pablo\golden-gem-website\src\pages\Contact.jsx"
    },
    @{
        Source = "golden-gem-website\src\pages\Guarantees.jsx"
        Dest = "C:\Users\Juan Pablo\golden-gem-website\src\pages\Guarantees.jsx"
    },
    @{
        Source = "golden-gem-website\README.md"
        Dest = "C:\Users\Juan Pablo\golden-gem-website\README.md"
    },
    @{
        Source = "golden-gem-website\PROYECTO-COMPLETADO.md"
        Dest = "C:\Users\Juan Pablo\golden-gem-website\PROYECTO-COMPLETADO.md"
    },
    @{
        Source = "golden-gem-website\INSTRUCCIONES.txt"
        Dest = "C:\Users\Juan Pablo\golden-gem-website\INSTRUCCIONES.txt"
    }
)

foreach ($file in $files) {
    $destDir = Split-Path -Parent $file.Dest
    if (-not (Test-Path $destDir)) {
        New-Item -ItemType Directory -Path $destDir -Force | Out-Null
    }
    
    if (Test-Path $file.Source) {
        Copy-Item -Path $file.Source -Destination $file.Dest -Force
        Write-Host "Copiado: $($file.Source)" -ForegroundColor Cyan
    } else {
        Write-Host "No encontrado: $($file.Source)" -ForegroundColor Yellow
    }
}

Write-Host "`nProceso completado!" -ForegroundColor Green

