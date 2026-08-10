# Media Manager
A standalone desktop application designed specifically to automate the grueling process of downloading, extracting and organizing video clips and assets 

it's built on top of `yt-dlp` & `gallery-dl`

you can grab the packaged software here: 
watch the full vid tutorial here to see all features in action:

## main ones:
* **Universal Downloader:** Paste links from YouTube, X/Twitter, Instagram, TikTok, Pinterest or Photos from Weverse (I'm a K-pop editor lol) and the app automatically fetches the highest-quality video/audio available
* **Auto-Routing:** Automatically sends downloaded media directly into your designated Project and Subfolder workspaces.
* **Smart ZIP Extraction:** Drag and drop local `.zip` files into the app to instantly extract them and delete the leftover compressed file.
* **Tracking Slots:** A visual grid system to save screenshots and track exactly where your assets came from.
* **100% Local Processing:** No cloud servers, no databases. Everything runs directly on your machine.

## privacy & the "Browser Cookie" setting
To download age-restricted or private posts and have an easier time downloading from Instagram, X/Twitter or Tiktok, the app needs to verify an active session. 
^ **This app does not steal or transmit your cookies.** It operates completely locally. By selecting your "Primary Browser" in the App Settings, you are simply allowing the local `yt-dlp` engine to borrow your active login session to fetch the media directly to your hard drive. 

## for devs:
If you want to read the code or run the app from source:
1. Clone this repository.
2. **important:** download the `.exe` files for `yt-dlp`, `gallery-dl`, `ffmpeg`, and `ffprobe` and drop them into a new folder named `bin` in the root directory.
3. Run `npm install` to grab the Electron dependencies.
4. Run `npm start` to boot the application.
5. Run `npm run build` to package your own `.exe` using electron-builder.

---
*Created by [Yani/Boomb.i] - IG: @boomb.i_ | Email: boomb.ibusiness@gmail.com*
