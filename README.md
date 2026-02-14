# 💕 Valentine's Scrapbook Website - Super Aesthetic Edition

A beautiful, handcrafted scrapbook-style website to gift to your special someone on Valentine's Day! Features torn paper effects, magazine cut-out letters, spiral binding, and tons of cute decorations.

## 🌟 Features

### Design Elements
- **Magazine Cut-out Letters**: Colorful, randomly rotated letters for titles
- **Torn Paper Effects**: Realistic torn edges on photos and sections
- **Spiral Binding**: Authentic notebook spiral effect
- **Multiple Photo Frames**: Polaroids, circular frames, heart shapes, phone mockup
- **Decorative Elements**: Gold tape, washi tape, stickers, sparkles
- **Graph Paper Backgrounds**: Authentic scrapbook feel
- **Kraft Paper Textures**: Natural, handmade aesthetic

### Animations & Interactions
- Floating hearts background
- Sparkle effects throughout
- Smooth scroll animations
- Confetti celebration on final section
- Magnetic hover effects on letters
- Photo hover zoom effects
- Double-click heart burst (try it!)
- Touch sparkles on mobile

### Easter Eggs 🥚
- **Double-click anywhere**: Heart burst explosion
- **Konami Code**: ↑↑↓↓←→←→BA for rainbow mode!

### Sections
1. **Landing Page**: Magazine-style title with romantic greeting
2. **When We First Met**: Memory collage with polaroids
3. **Our Adventures**: Travel photos with stickers
4. **Sweet Moments**: Overlapping photo stack
5. **Reasons I Love You**: Cute reason cards
6. **Our Gallery**: Mixed photo frames
7. **Love Letter**: Envelope with handwritten letter
8. **Final Message**: Celebration with confetti

## 🎨 How to Customize

### 1. Add Your Photos

Replace the placeholder gradients with your actual photos. Find lines like this in `index.html`:

```html
<div class="polaroid-image" style="background: linear-gradient(...);">
    <span class="placeholder-text">Our First Photo</span>
</div>
```

Change to:

```html
<div class="polaroid-image" style="background-image: url('photos/your-photo.jpg'); background-size: cover; background-position: center;">
</div>
```

**Tip**: Create a `photos` folder and add all your images there!

### 2. Personalize the Text

Edit the text content in `index.html`:

- **Main title**: Change "Our Love Story" to your own title
- **Captions**: Update photo captions with your memories
- **Love letter**: Rewrite the letter in your own words
- **Reasons**: Add your personal reasons why you love them
- **Signature**: Change "Your Valentine" to your name

### 3. Add Background Music (Optional)

1. Add an MP3 file to the project folder (e.g., `our-song.mp3`)
2. Open `script.js` and find line ~95:
   ```javascript
   // audio.src = 'your-romantic-song.mp3';
   ```
3. Uncomment and update:
   ```javascript
   audio.src = 'our-song.mp3';
   ```

### 4. Color Customization

Edit `styles.css` and modify the CSS variables at the top:

```css
:root {
    --pink: #ffb6c1;        /* Main pink color */
    --pink-dark: #ff69b4;   /* Accent pink */
    --red: #ff4757;         /* Heart/love color */
    --brown: #8b4513;       /* Text color */
    /* ... more colors */
}
```

## 📁 File Structure

```
valentines/
├── index.html      # Main HTML structure
├── styles.css      # All styling
├── script.js       # Animations and interactions
├── README.md       # This file
└── photos/         # Create this folder for your images
    ├── photo1.jpg
    ├── photo2.jpg
    └── ...
```

## 🚀 Deploying to GitHub Pages

1. Create a new repository on GitHub
2. Upload all files to the repository
3. Go to Settings → Pages
4. Select "Deploy from branch" and choose `main` branch
5. Your site will be live at: `https://yourusername.github.io/repository-name`

## 💡 Tips for Best Results

- Use high-quality photos (recommend 500x500px minimum)
- Square photos work best for polaroid frames
- Keep text personal and heartfelt
- Test on mobile before sharing!

## ❤️ Made with Love

This scrapbook was created as a Valentine's Day gift. Feel free to customize it and make it your own!

Happy Valentine's Day! 💕
