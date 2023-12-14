# Design and Sandbox
**Key**

<pre>
    <!DOCTYPE html>: Declares the document type and version of HTML.
    <html lang="en">: Defines the root element of the HTML document with the language attribute set to English.
    <head>: Contains meta-information about the HTML document, such as character set, viewport settings, and the title of the page.
    <meta charset="UTF-8">: Sets the character encoding to UTF-8.
    <meta name="viewport" content="width=device-width, initial-scale=1.0">: Configures the viewport for better responsiveness on various devices.
    <title>Your Website Title</title>: Sets the title of the web page.
    <style>: Contains internal CSS styles for the document.
    body: Defines styles for the body of the document.
    header, main, and footer: Structural elements for the header, main content area, and footer of the web page.
    <h1>, <h2>, <p>: Heading and paragraph elements for text content. 
<pre>

<pre>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Phenom Forever 2024.</title>
    <style>
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif, sans-serif;
            margin: 20px;
        }

        header, footer {
            background-color: #333;
            color: #fff;
            padding: 10px;
            text-align: center;
        }

        main {
            padding: 20px;
        }

        .artist {
            margin-bottom: 30px;
            padding: 20px;
            border: 1px solid #ccc;
            border-radius: 8px;
        }

        audio {
            width: 100%;
            margin-top: 10px;
        }

        /* Styling for the News button */
        .news-button {
            display: inline-block;
            padding: 10px 20px;
            font-size: 16px;
            background-color: #4285f4;
            color: #fff;
            text-decoration: none;
            border-radius: 5px;
            transition: background-color 0.3s;
        }

        .news-button:hover {
            background-color: #2556a7;
        }
    </style>
</head>
<body>

    <header>
        <h1>Phenom Forever 2024.</h1>
    </header>

    <main>

        <div class="artist">
            <h2>Kammeron Frost</h2>
            <p>• Singer | Songwriter • Phenom Forever Media Collective • Berklee BSU VP 🤎 • 21

                Inspired by the experiences of myself, my loved ones, and the world around me. I write to feel, process, and connect. Most importantly, I write to voice words that sometimes go unheard when I only speak .</p>
            <audio controls>
                <source src="audio/artist1_track1.mp3" type="audio/mp3">
                Your browser does not support the audio tag.
            </audio>
        </div>

        <div class="artist">
            <h2>RYWH!T</h2>
            <p>Producer, Artist, and Elite Skater.</p>
            <audio controls>
                <source src="audio/artist2_track1.mp3" type="audio/mp3">
                Your browser does not support the audio tag.
            </audio>
        </div>

        <div class="artist">
            <h2>Designer Dave</h2>
            <p>Your Local Lyricist</p>
            <audio controls>
                <source src="audio/artist3_track1.mp3" type="audio/mp3">
                Your browser does not support the audio tag.
            </audio>
        </div>

        <div class="artist">
            <h2>Mark Hacz</h2>
            <p>Mix Engineer, Producer, and Mastering Engineer</p>
            <audio controls>
                <source src="audio/artist4_track1.mp3" type="audio/mp3">
                Your browser does not support the audio tag.
            </audio>
        </div>

        <div class="artist">
            <h2>Worthy</h2>
            <p>New York Drill Rapper.</p>
            <audio controls>
                <source src="audio/artist5_track1.mp3" type="audio/mp3">
                Your browser does not support the audio tag.
            </audio>
        </div>

        <div class="artist">
            <h2>Esenadre</h2>
            <p>Logics Protoge</p>
            <audio controls>
                <source src="audio/artist6_track1.mp3" type="audio/mp3">
                Your browser does not support the audio tag.
            </audio>
        </div>

        <div class="artist">
            <h2>Olas</h2>
            <p>Needs Help</p>
            <audio controls>
                <source src="audio/artist7_track1.mp3" type="audio/mp3">
                Your browser does not support the audio tag.
            </audio>
        </div>

        <div class="artist">
            <h2>Roman Ricardo</h2>
            <p>Artist and PruDucaaaa</p>
            <audio controls>
                <source src="audio/artist8_track1.mp3" type="audio/mp3">
                Your browser does not support the audio tag.
            </audio>
        </div>

    </main>

    <footer>
        <p>&copy; 2023 Phenom Forever. All rights reserved.</p>
        <!-- Use a button for the News link -->
        <button class="news-button"><a href="news.html" style="color: inherit; text-decoration: none;">News</a></button>
    </footer>

</body>
</html>
<pre>