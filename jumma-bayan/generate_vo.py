import urllib.request
import urllib.parse
import os
import subprocess

def get_tts(text, lang, out):
    url = f"https://translate.google.com/translate_tts?ie=UTF-8&q={urllib.parse.quote(text)}&tl={lang}&client=tw-ob"
    req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64)"})
    with urllib.request.urlopen(req) as resp:
        with open(out, "wb") as f:
            f.write(resp.read())

assets = "/home/muaz/projects/07-ajs-media/01-teast-01/jumma-bayan/assets"
os.makedirs(assets, exist_ok=True)

# 4 Consolidated clips for 18-second timeline:
clips = [
    ("vo-scene1.mp3", "Assalamu Alaikum. Jumma Bayan, coming this Friday.", "en"),
    ("vo-scene2.mp3", "Guest Speaker Brother K. Mohammed Nasir Umari, on Raising Children.", "en"),
    ("vo-scene3.mp3", "Friday, 13th November at Masjide Muhammadiya, Pernambut.", "en"),
    ("vo-scene4.mp3", "Cordially invited by Al Jam'iyyathus Salafiyya. All are welcome.", "en"),
]

for name, text, lang in clips:
    path = os.path.join(assets, name)
    get_tts(text, lang, path)
    dur = float(subprocess.check_output(f'ffprobe -i "{path}" -show_entries format=duration -v quiet -of csv="p=0"', shell=True).decode().strip())
    print(f"{name}: {dur:.2f}s ({text})")

print("All 4 consolidated voiceover clips generated successfully!")
