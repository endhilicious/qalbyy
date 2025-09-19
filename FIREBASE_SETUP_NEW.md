# Firebase Setup Guide - Qalbyy (New Project)

## Reset Complete ✅

Firebase has been completely reset and is ready for setup with new account.

## New Firebase Project Details

- **Project ID**: qalbyy-13696
- **Auth Domain**: qalbyy-13696.firebaseapp.com
- **Storage Bucket**: qalbyy-13696.firebasestorage.app
- **Hosting URL**: https://qalbyy-13696.web.app

## Setup Steps

### 1. Login with New Firebase Account
```bash
npx firebase login
```

### 2. Initialize Firebase Hosting
```bash
npx firebase init hosting
```

**Setup Options:**
- Select project: `qalbyy-13696`
- Public directory: `out`
- Single-page app: `No`
- Overwrite index.html: `No`

### 3. Build and Deploy
```bash
npm run deploy
```

## Files Configuration

### Firebase Config Updated
`src/lib/firebase.ts` - Already configured with new credentials

### Next.js Config Ready
`next.config.ts` - Already configured for static export

### Build Scripts Ready
`package.json` - All deployment scripts available:
- `npm run build:static` - Build static files
- `npm run deploy` - Build and deploy
- `npm run firebase:serve` - Local testing

## What Was Reset

✅ **Logged out** from previous Firebase account
✅ **Deleted** firebase.json (will be recreated during init)
✅ **Deleted** .firebaserc (will be recreated during init)  
✅ **Cleared** Firebase CLI cache
✅ **Updated** Firebase configuration with new project credentials
✅ **Removed** old documentation files

## Ready for Fresh Setup

Your project is now completely clean and ready for:
1. Login with new Firebase account
2. Initialize hosting with new project
3. Deploy to new Firebase project

The application code and build configuration remain intact - only Firebase account/project associations have been reset.
