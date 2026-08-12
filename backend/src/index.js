require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { SecretClient } = require("@azure/keyvault-secrets");
const { DefaultAzureCredential } = require("@azure/identity");

const postRoutes = require('./routes/posts');
const commentRoutes = require('./routes/comments');
const db = require('./db');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Root route
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to ThoughtCanvas API.' });
});

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'ThoughtCanvas API is online 🚀' });
});

// Routes
app.use('/api/posts', postRoutes);
app.use('/api/comments', commentRoutes);

// Function to load secrets from Azure Key Vault if configured
async function loadSecretsFromKeyVault() {
  if (process.env.KEY_VAULT_NAME) {
    console.log("🔒 Connecting to Azure Key Vault...");
    try {
      const credential = new DefaultAzureCredential();
      const vaultName = process.env.KEY_VAULT_NAME;
      const url = `https://${vaultName}.vault.azure.net`;
      const client = new SecretClient(url, credential);

      // Fetch secrets and map them to process.env for the database module
      process.env.DB_USER = (await client.getSecret("DB-USER")).value;
      process.env.DB_PASSWORD = (await client.getSecret("DB-PASSWORD")).value;
      process.env.DB_HOST = (await client.getSecret("DB-HOST")).value;
      
      console.log("✅ Secrets loaded successfully from Azure Key Vault.");
    } catch (err) {
      console.error("❌ Failed to load secrets from Azure Key Vault:", err);
      process.exit(1);
    }
  } else {
    console.log("🛠️ No KEY_VAULT_NAME provided. Using local environment variables.");
  }
}

// Initialize database, load secrets, and start server
async function start() {
  try {
    await loadSecretsFromKeyVault();
    await db.initDB();
    
    app.listen(PORT, '0.0.0.0', () => {
      console.log(`🚀 ThoughtCanvas backend running on port ${PORT}`);
    });
  } catch (err) {
    console.error('Failed to start server:', err);
    process.exit(1);
  }
}

start();