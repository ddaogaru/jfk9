#!/bin/bash

# Cloud Run deployment script for Joint Forces K9 Group website
# Make sure you're logged into gcloud CLI: gcloud auth login

# Configuration
PROJECT_ID="jfk9-474116"
SERVICE_NAME="joint-forces-k9"
REGION="us-central1"
IMAGE_NAME="gcr.io/$PROJECT_ID/$SERVICE_NAME"

echo "🚀 Deploying Joint Forces K9 Group to Cloud Run..."

# Set the project
gcloud config set project $PROJECT_ID

# Build and push the Docker image
echo "📦 Building Docker image..."
gcloud builds submit --tag $IMAGE_NAME .

# Deploy to Cloud Run
echo "🚀 Deploying to Cloud Run..."
gcloud run deploy $SERVICE_NAME \
  --image $IMAGE_NAME \
  --platform managed \
  --region $REGION \
  --allow-unauthenticated \
  --port 3000 \
  --memory 2Gi \
  --cpu 2 \
  --min-instances 1 \
  --max-instances 20 \
  --timeout 300 \
  --concurrency 100 \
  --cpu-throttling \
  --execution-environment gen2

# Get the service URL
SERVICE_URL=$(gcloud run services describe $SERVICE_NAME --region=$REGION --format='value(status.url)')

echo "✅ Deployment complete!"
echo "🌐 Service URL: $SERVICE_URL"
echo "📊 View logs: gcloud logging read 'resource.type=cloud_run_revision AND resource.labels.service_name=$SERVICE_NAME' --limit 50"
