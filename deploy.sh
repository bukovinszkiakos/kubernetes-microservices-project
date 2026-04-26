#!/bin/bash

echo "Applying all Kubernetes manifests..."

kubectl apply -f k8s/

echo "Done!"
