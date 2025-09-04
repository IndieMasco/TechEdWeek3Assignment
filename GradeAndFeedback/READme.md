Thank you for your submission, Sam!

This assignment clearly “clicked” for you! What an incredible piece of work!!
You javascript features are all working like a charm and you’ve really gone above and beyond for your styling this week.
This assignment is real proof that you’re efforts on the bootcamp are paying off, as this task was not easy in the slightest! Let’s check out some of your lovely implementations!

## HTML:

Your HTML is well-structured and your element choices are generally fit-for-purpose, all good in my book! As we tend to write less and lees HTML as the course continues it's still worth paying attention to semantic element best practices alongside naming conventions.

Some things to consider:

- Mismatched IDs / dead ref -> JS queries #rockButton, but there’s no element with that id!

- Inline click handler -> You use onclick="clickRocks()" on the `<img>`. While this works, at this stage I'd suggest handling it in JS with addEventListener to keep JS behavior out of the markup.

- Semantics / landmarks -> We should be wrapping main content in `<main>`! The title area could be `<header>` instead of a `<div class="header">`.

- Counts not announced -> If you add aria-live="polite" to #rockAmount and #cps, screen readers hear and announce the updates.

- Upgrade container unused -> You create `<div id="upgrades"></div>` but append buttons to document.body.

- Inline sizing -> The image’s width/height are inline styles, let's move those to CSS for consistency!


## CSS:

You’re really spoiling us with this level of styling excellence! You’ve clearly considered the user experience when designing your UI and then gone further to add some lovely features to add some real polish! Your personality runs though this project and it better for it! I especially love the clear site layout and the good contrast on your text elements!
If this is the level of quality you’re producing after just 3 short weeks then those recruiting and hiring managers better prepare themselves!

Some things to consider:

- Invalid value: background-size -> fill; isn’t valid. Try using cover or contain!

- Fixed layout / responsiveness -> Fixed widths/heights (width: 922px, the absolutely positioned rock) may break on small screens. Try some fluid widths and centering via layout (grid/flex) instead of absolute positioning.

- Button as flex container -> .upgradeButtons { display: flex; flex-direction: column; } on a button is bit unusual! Make sure you really need it (it can affect text layout)!

- Hover motion -> #animerock:active changes transform so ensure the base rule also sets both X and Y (like when you did include both on :active).

## Javascript:

I am astounded at how quickly you’re taking to these complex Javascript implementations! POWERFUL!!!! I’m seeing robust learning outcomes alongside confidence and fluency in your coding! I especially like how you’ve animated your rock and given it sound effects! Also you've made excellent used of the screen space and avoided any boring 'dead' areas! Outstanding work, Sam!!

Some things to consider:

- LocalStorage null-guard -> If there’s no save performed yet, JSON.parse(null) returns null, then loadData.rockCount will throw an error!

- Display/save after purchase -> In the upgrade click handler you update state but don’t immediately refresh UI or save. Make sure you call your updater and save so the change is visible right away!

- Append target -> You’re appending upgrade buttons to document.body, append them to #upgrades so they live in the intended container.

- Init audio volume: How about setting rockSound.volume = volumeBar.value on load so it matches the slider’s initial position. Neat huh!

- Consistency: You mix inline onclick with JS listeners elsewhere, I would definitely stick to the JS approach. Also, consider textContent over innerText for better performance/consistency.


## Reflection:

A superb reflection once again! I really enjoy reading your thoughts and insights, they are so valuable for us both to look back on and realise just how much you have progressed in such a short amount of time!

From your reflection:

Favicon 404 (what it is & how to fix):

Browsers auto-request /favicon.ico at the site root. If your game isn’t served from the domain root (e.g., GitHub Pages subfolder) that absolute request 404s.

- Fixes:

    - Put a favicon in your project and reference it with a relative path that matches your file:
    `<link rel="icon" href="./favicon.ico" sizes="any">`

    - If you’re using PNG/ICO variants, include them explicitly (browsers fall back nicely):
    `<link rel="icon" type="image/png" sizes="32x32" href="./favicon-32x32.png">`

    - Make sure the file actually exists at that path, then hard refresh (cache can keep old 404s).

    - Optional: also add `<link rel="shortcut icon" href="./favicon.ico">` for older browsers.

Changing upgrade names to fit your theme:

- Easiest way: map API names to themed labels when you render buttons.

    - Create a const nameMap = { "Grandma": "Stone Grandma", "Factory": "Quarry", ... }

    - When you build the button text, display nameMap[upgrade.name] ?? upgrade.name.

    - The double ?? is something called Nullish Coalescing and is a very handy trick! [Nullish coalescing operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing)

- If you want fully custom copy (e.g., different descriptions), do the same with a displayName/blurb map.

This is an outstanding submission that really highlights you strong understanding of the concepts at work. Superb job!!!
All of the core cookie clicker features are present but you’ve also gone beyond with features like your volume control and sound/animation! This is a true portfolio-ready piece that you should be excited to show friends, family and most importantly interviewers!
I’m giving you a massive 4 for this assignment as you’ve shown that you are able to implement all of the core goals we were looking for, as well as some of the extra stretch goals too! You’re really impressing us with your skills and I can’t wait to see what’s next!!!

 ~Joe