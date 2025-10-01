# Cornell DB Group Website Deployment Scripts

This directory contains scripts to deploy and manage the Cornell Database Group website.

## 📋 Scripts

### `deploy-website.sh`
Deploys the website with public access via ngrok tunnel.

**Usage:**
```bash
cd Cornell-DB-Group/scripts
./deploy-website.sh [PORT]
```

**Features:**
- Starts local HTTP server on specified port (default: 8080)
- Creates public ngrok tunnel for external access
- Runs in background (persistent after disconnect)
- No password required for access
- Displays public URL for sharing

**Example:**
```bash
./deploy-website.sh        # Uses default port 8080
./deploy-website.sh 3000   # Uses custom port 3000
```

### `stop-website.sh`
Stops the running website server and ngrok tunnel.

**Usage:**
```bash
cd Cornell-DB-Group/scripts
./stop-website.sh
```

**Features:**
- Gracefully stops HTTP server
- Stops ngrok tunnel
- Cleans up processes and PID files
- Preserves logs for debugging

## 🚀 Quick Start

### Deploy the Website
```bash
cd Cornell-DB-Group/scripts
./deploy-website.sh
```

The script will output:
- 📍 **Public URL**: Share this with anyone (e.g., `https://xxxxx.ngrok.io`)
- 🏠 **Local URL**: Access locally at `http://localhost:8080`
- 📊 **Ngrok Dashboard**: View analytics at `http://localhost:4040`

### Stop the Website
```bash
cd Cornell-DB-Group/scripts
./stop-website.sh
```

## 📝 Logs

Logs are stored in `/tmp/cornelldb_logs/`:
- `server.log` - HTTP server output
- `ngrok.log` - Ngrok tunnel logs

View logs:
```bash
cat /tmp/cornelldb_logs/server.log
cat /tmp/cornelldb_logs/ngrok.log
```

## 🔧 Requirements

### ngrok Installation

**Linux:**
```bash
snap install ngrok
# OR
wget https://bin.equinox.io/c/bNyj1mQVY4c/ngrok-v3-stable-linux-amd64.tgz
tar xvzf ngrok-v3-stable-linux-amd64.tgz
sudo mv ngrok /usr/local/bin/
```

**macOS:**
```bash
brew install ngrok
```

### ngrok Authentication
```bash
ngrok config add-authtoken <your-token>
```

Get your token from: https://dashboard.ngrok.com/get-started/your-authtoken

## 🛡️ Process Management

- **PID Files**: Stored in `/tmp/cornelldb_*.pid`
- **Background Processes**: Use `nohup` for persistence
- **Cleanup**: Automatic cleanup on stop

Check if running:
```bash
ps aux | grep "http.server"
ps aux | grep "ngrok"
```

## 🌐 Access Points

Once deployed, you can access the website via:

1. **Public URL** (ngrok tunnel): Share with anyone
   - Example: `https://abc123.ngrok.io`
   - No VPN required
   - No password needed

2. **Local URL**: For local testing
   - `http://localhost:8080`

3. **Ngrok Dashboard**: View request analytics
   - `http://localhost:4040`

## ⚠️ Important Notes

- ngrok free tier has session limits (check your plan)
- Public URLs change each time you redeploy (unless using static domain)
- Processes continue running after SSH disconnect
- Always use `stop-website.sh` to properly shutdown

## 🐛 Troubleshooting

**Website already running:**
```bash
./stop-website.sh
./deploy-website.sh
```

**Port already in use:**
```bash
./deploy-website.sh 3000  # Use different port
```

**Cannot find ngrok:**
```bash
export PATH="$HOME/bin:$PATH"
which ngrok
```

**View active processes:**
```bash
ps aux | grep -E "(http.server|ngrok)"
```
