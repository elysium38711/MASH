# Unraid Setup Guide for MASH Game

This guide explains how to get the WebUI and full Docker menu options working in Unraid.

## What Was Updated

I've added the necessary configuration to enable all Unraid Docker features:

### 1. docker-compose.yml
Added Docker labels that Unraid uses to display:
- **WebUI button** - Direct link to access the game
- **Project metadata** - Project page, support links, description
- **Category** - Proper categorization in Unraid

### 2. mash-game.xml
Created an Unraid template file that provides:
- Full container configuration
- Port mappings
- WebUI URL configuration
- Support and project links
- Category assignment

## How to Use in Unraid

### Method 1: Using docker-compose (Recommended)

1. **Stop and remove the existing container**:
   - In Unraid Docker tab, click the mash-game icon
   - Select "Remove"
   - Confirm removal

2. **Rebuild with updated labels**:
   ```bash
   cd /mnt/user/appdata/mash-game
   docker-compose down
   docker-compose up -d --build
   ```

3. **Verify in Unraid**:
   - Go to Docker tab
   - Click on mash-game container icon
   - You should now see: Start, WebUI, Console, Edit, Logs, Remove, etc.

### Method 2: Using Unraid Template

1. **Copy the XML template**:
   ```bash
   cp mash-game.xml /boot/config/plugins/dockerMan/templates-user/
   ```

2. **Remove existing container** (if any)

3. **Add container via Unraid UI**:
   - Go to Docker tab
   - Click "Add Container"
   - Select "mash-game" from template dropdown
   - Configure ports if needed (default is 3000)
   - Click "Apply"

4. **Access WebUI**:
   - Click the mash-game icon
   - Select "WebUI" to open the game in your browser

## Customization

### Update URLs and Metadata

Edit the labels in `docker-compose.yml` to match your setup:

```yaml
labels:
  net.unraid.docker.icon: "YOUR_ICON_URL"
  org.opencontainers.image.url: "YOUR_PROJECT_URL"
  org.opencontainers.image.vendor: "YOUR_NAME"
```

### Change Port

To use a different port, update both:
1. `docker-compose.yml` - ports section
2. `mash-game.xml` - WebUI and Config sections

## Features You'll Get

Once configured, your mash-game container will have:

- **WebUI** - One-click access to the game interface
- **Console** - Terminal access to the container
- **Start/Stop/Pause/Restart** - Full container controls
- **Logs** - View container logs
- **Edit** - Modify container settings
- **Update** - Update the container image
- **Project Page** - Link to source code
- **Support** - Link to issue tracker

## Troubleshooting

### WebUI button not showing
- Make sure you rebuilt the container after updating docker-compose.yml
- Check that port 3000 is accessible: `curl http://localhost:3000`

### Edit option missing
- The Edit option only appears when you click the container icon (not when running)
- Try stopping the container first

### No options showing
- Verify labels are applied: `docker inspect mash-game | grep -A 20 Labels`
- Restart the Docker service in Unraid Settings

## Technical Details

**Port**: 3000 (maps to internal port 80)
**Base Image**: nginx:alpine
**Build**: Node.js 20 Alpine (multi-stage build)
**WebUI Path**: http://[SERVER_IP]:3000

The container serves a static React application built with Vite and served by Nginx.
