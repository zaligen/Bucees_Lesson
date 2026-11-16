# Buc-ee’s v. Oliver — interactive lesson

This version starts with the user-supplied adjusted project and implements the November 12 lesson. It retains the seven editable case scenes, assets, manual scoring, display/control windows, fixed scene navigation, independent control-panel zoom, and widescreen layout. The hypothetical Oliver lawsuit is labeled as such.

## Start both windows

1. Unzip the entire folder. Keep the assets, HTML, CSS, JavaScript, and PDFs together.
2. In the project folder, run a local server, for example `python3 -m http.server 8000` (on Windows, `python -m http.server 8000` may work). Keep it running. Alternatively use VS Code Live Server.
3. In a modern browser, open `http://localhost:8000/index.html` for the audience display and click **Control panel ↗**, or open `http://localhost:8000/control.html` in a second window. Put the display on the audience screen.
4. Wait for **Display connected**. Both windows must use the same browser profile on the same computer and the same exact server address and port. Use one display and one control panel. The controls use BroadcastChannel; they are not authenticated or designed for remote devices. If it disconnects, reopen both windows at the same address. Do not expose the server to untrusted users.

## Run the lesson

The full instructor script and wrap-ups are included as **Lesson-script-Nov-12.pdf**, also accessible from the control panel. **Changes-for-IT-Nov-12.pdf** is included for reference. The script is spoken by the facilitator; the screen contains concise audience-facing prompts, not a teleprompter. The app follows all 21 live lesson beats, plus a spreadsheet scene; pleadings are pre-read, not a live beat. The first beat contains the specified YouTube Short. YouTube playback requires an internet connection and permission to embed; if it fails, use the YouTube link or select a locally available video. Separate control-panel Play/Pause controls work for an uploaded video or direct MP4/WebM URL; use the embedded YouTube player's own controls for YouTube. Local video selections must be reselected after reloading and are not included in exports.

At each of the six votes, enter a count with the panel's + / − buttons (or number fields on the display), up to seven total: one per team. Click **Reveal result**. Votes 1–4 reconverge on the next beat; the result explains the recovery and updates the key-moment tracker. Vote 5 controls the Fifth Circuit result and who petitions, and Vote 6 controls the Supreme Court result. Votes 5 and 6 must be revealed before advancing. If a vote is tied, choose a tied option explicitly using the facilitator controls; no winner is selected automatically. If the Fifth Circuit vote is edited, its result and the later Supreme Court vote are cleared and must be entered again. Prior reached beats can be revisited.

The enforcement record at beat 9 reveals one of eight rows per click from either window. At beats 14 and 18, the UP / ON DECK cards name both cases; use **Open case file** in the panel to show the first case, or proceed to the next beat for the on-deck case. Placing a presentation and editing its images remains optional. Reference flags can be revealed in the sidebar. The previously supplied images, including `FinalSCOTUSVote.png` and `Buc-OffCourtroom.png`, are retained in assets; the former is not shown automatically because the new final vote is affirm/reverse rather than the old response flow.

## Scene 22: live spreadsheet

After the final lesson beat, advance to **Scene 22 — Live spreadsheet** on the display (or use the control panel). Paste the spreadsheet's **embed URL** into the field and select **Show spreadsheet**. To change it, enter a new URL and select **Update**; clear the field and select **Update** to remove it. The URL is saved in this browser and included in version-3 project JSON exports; it is removed by Reset project. Existing version-3 saves and backups still work.

Use an HTTP(S) URL, not an iframe HTML snippet. For Google Sheets, use its published-to-the-web embed URL when appropriate; for other providers, use their embed link. Publishing or changing sharing settings can expose data, so check the provider's permissions first. A provider may block embedding or require viewers to sign in; if the frame is blank or refused, check sharing and embedding settings or use **Open spreadsheet in a new tab**. The page cannot override provider restrictions. Navigating or using display controls may reload the embedded spreadsheet, so finish any in-progress edits first. The separate control panel navigates to the scene; enter the URL on the display.

## Timing

Votes preset to **2:00**, presentations to **4:00**, and the opening clip to **2:00**. The full lesson script specifies 4:00 on case cards, while the change summary says 5:00; this build follows the more specific full script and includes a **5:00** shortcut in the panel. Timers do not start themselves or advance the lesson. Set another length if desired.

## Panoramic display and horizontal navigation

The audience display is laid out for **7680 × 1080**, at 100% browser zoom. The decision tree occupies the rightmost third of the full display, even when the left sidebar is hidden. Scene headings remain left-aligned; the remaining scene content is centered. Text is enlarged for the screen.

The decision tree wraps into a board-game path and does not scroll. Scene content, reference flags, and long headings can be scrolled sideways. Use a trackpad or shift-wheel, or move the pointer over one of those regions and use the mouse wheel. All reached decision-tree scenes remain visible in their numbered path. The display has no vertical scrolling; longer enforcement records are presented as a horizontal row of cards. On a smaller display, the panoramic canvas scrolls sideways, and on shorter screens it scales to fit the height.

The facilitator panel also places its sections side by side: scroll horizontally to reach scoring, voting, timing and navigation. Panel zoom still changes only the panel. At high zoom or on very short screens, reduce panel zoom if needed. The embedded spreadsheet and video are provided by external sites: their own scrolling, controls, text size and permissions are outside this website's control.

## Saving and compatibility

The display stores the revised lesson in a **new browser database** to avoid silently interpreting the old 21-beat sequence as the new sequence. Old data is not deleted but does not automatically appear. If you need to bring over edits made in the older app, open the old app and use Settings → Export project JSON, then import that JSON in the new app. Older backups import the seven case scenes and team points only; progress, votes and presentation placements reset because the lesson changed. Review imported case titles and descriptions against the new script; old custom text is preserved rather than overwritten. Export a backup before resetting or importing. New exports use version 3 and preserve the new lesson state.

Case scene edits and images are local to the display browser. Settings allows JSON export/import and project reset. `config.js` holds the default titles, scene copy, case descriptions, timing labels and media; the branching logic is in `app.js`. The bundled images may have their own rights and permissions. Helvetica Condensed is requested but not bundled; a fallback is used if unavailable.
