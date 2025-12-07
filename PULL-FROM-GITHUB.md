# How to Pull Updates from GitHub on Unraid

Your MASH game files with the Unraid Docker configuration are now on GitHub. Here's how to pull them on your Unraid server.

## Current Status
- Repository: https://github.com/elysium38711/MASH
- Branch with updates: `dev`
- Files added:
  - `docker-compose.yml` (updated with Unraid labels)
  - `mash-game.xml` (Unraid template)
  - `UNRAID-SETUP.md` (setup guide)

## Method 1: Pull Updates to Existing Setup

If you already have the code on your Unraid server:

1. **SSH into your Unraid server**
   ```bash
   ssh root@YOUR-UNRAID-IP
   ```

2. **Navigate to your project directory**
   ```bash
   cd /mnt/user/appdata/mash-game
   # Or wherever you have the code
   ```

3. **Pull the latest changes from GitHub**
   ```bash
   git pull origin dev
   ```

4. **Rebuild the Docker container with new labels**
   ```bash
   docker-compose down
   docker-compose up -d --build
   ```

5. **Verify in Unraid**
   - Go to Docker tab
   - Click on mash-game container icon
   - You should now see WebUI, Edit, and all other options

## Method 2: Fresh Clone

If you don't have the code on Unraid yet:

1. **SSH into Unraid**
   ```bash
   ssh root@YOUR-UNRAID-IP
   ```

2. **Navigate to appdata directory**
   ```bash
   cd /mnt/user/appdata
   ```

3. **Clone the repository**
   ```bash
   git clone https://github.com/elysium38711/MASH.git mash-game
   cd mash-game
   ```

4. **Switch to dev branch** (where the updates are)
   ```bash
   git checkout dev
   ```

5. **Build and run the container**
   ```bash
   docker-compose up -d --build
   ```

## Method 3: Download as ZIP (No Git Required)

If you don't want to use git:

1. **Download from GitHub**
   - Go to: https://github.com/elysium38711/MASH
   - Click "Code" → "Download ZIP"
   - Switch to `dev` branch first (dropdown at top left)

2. **Upload to Unraid**
   - Extract the ZIP on your computer
   - Use WinSCP or similar to upload files to `/mnt/user/appdata/mash-game`

3. **SSH into Unraid and build**
   ```bash
   cd /mnt/user/appdata/mash-game
   docker-compose up -d --build
   ```

## Troubleshooting

### "Permission denied" when pulling
```bash
# Make sure you own the directory
chown -R root:root /mnt/user/appdata/mash-game
```

### "fatal: not a git repository"
```bash
# You need to clone first
cd /mnt/user/appdata
git clone https://github.com/elysium38711/MASH.git mash-game
cd mash-game
git checkout dev
```

### Changes not showing in Unraid
```bash
# Force rebuild without cache
docker-compose down
docker-compose build --no-cache
docker-compose up -d
```

### Container won't start
```bash
# Check logs
docker-compose logs

# Check if port 3000 is already in use
netstat -tulpn | grep 3000
```

## Verifying the Update

After pulling and rebuilding, verify you have the new features:

1. **Check docker-compose.yml has labels**
   ```bash
   grep -A 5 "labels:" docker-compose.yml
   ```
   Should show Unraid WebUI and metadata labels

2. **Check container labels**
   ```bash
   docker inspect mash-game | grep -A 20 Labels
   ```

3. **Check Unraid Docker tab**
   - Click mash-game icon
   - Should see: WebUI, Console, Start, Stop, Pause, Restart, Logs, Edit, Remove, etc.

## Keeping Updated

To get future updates:

```bash
cd /mnt/user/appdata/mash-game
git pull origin dev
docker-compose up -d --build
```

## Merging to Main Branch

Currently updates are on `dev` branch. If you want them on `main`:

```bash
git checkout main
git merge dev
git push origin main
```

Then use `main` branch for pulling in the future.
