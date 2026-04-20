# Script para hacer el deploy directamente a Azure Container Apps usando el código local y Docker

# 1. Asegúrate de haber iniciado sesión en Azure:
# az login

# 2. Comando para construir la imagen Docker y actualizar tu Container App:
az containerapp up `
  --name deploy-jorge-bustos `
  --resource-group deploy-azure-jorge_group `
  --source . `
  --ingress external `
  --target-port 3000 `
  --env-vars PORT=3000
