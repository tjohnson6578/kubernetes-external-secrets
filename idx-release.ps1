Write-Host "Building kubernetes-external-secrets image..."
docker build -t nexus.eyediagnosis.local/kubernetes-external-secrets:ssm .
docker push nexus.eyediagnosis.local/kubernetes-external-secrets:ssm