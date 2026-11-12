import subprocess
import os

ASSETS = "/home/muaz/projects/07-ajs-media/01-teast-01/jumma-bayan/assets"
VOICE = "ta-IN-ValluvarNeural"

# Target durations for snappy, tight kinetic cuts:
# Hook: ~2.8s
# Speakers: ~2.0s
# Topics: ~2.0s
# Outro: ~3.2s
clips = [
    # Scene 1: Hook (Target <= 3.0s)
    ("vo-hook.mp3", "அஸ்ஸலாமு அலைக்கும். நபி வழியில் ஜும்மா.", "+18%"),
    
    # Mosque 1 (Target <= 2.2s each)
    ("vo-m1-speaker.mp3", "மஸ்ஜிதே முஹம்மதியா, கோவை பக்கீர் முஹம்மத்.", "+18%"),
    ("vo-m1-topic.mp3", "நபி வழியில் ஜும்மா.", "+15%"),
    
    # Mosque 2 (Target <= 2.2s each)
    ("vo-m2-speaker.mp3", "மஸ்ஜிதே தவ்ஹீத், கோவை உமர்.", "+18%"),
    ("vo-m2-topic.mp3", "அண்ணலாரின் அற்புத அரசியல்.", "+15%"),
    
    # Mosque 3 (Target <= 2.2s each)
    ("vo-m3-speaker.mp3", "மஸ்ஜிதே ரஹ்மானியா, மவ்லவி நாஸிர் உமரி.", "+18%"),
    ("vo-m3-topic.mp3", "வியக்க வைக்கும் விசாரணை நாள்.", "+15%"),
    
    # Mosque 4 (Target <= 2.5s each)
    ("vo-m4-speaker.mp3", "மஸ்ஜிதே ஹபீப், மவ்லவி அபூ அலிஃப் பாதுஷா.", "+18%"),
    ("vo-m4-topic.mp3", "மழையை மையப்படுத்தி சொல்லப்பட்ட செய்திகள்.", "+18%"),
    
    # Outro (Target <= 3.0s)
    ("vo-outro.mp3", "பாங்கு பன்னிரண்டு ஐம்பத்தைந்து. அல் ஜம்யதுஸ் ஸலப்பியா பேர்ணாம்பட்டு.", "+18%")
]

for filename, text, rate in clips:
    filepath = os.path.join(ASSETS, filename)
    cmd = f'~/.local/bin/edge-tts --voice "{VOICE}" --rate="{rate}" --pitch="-1Hz" --text "{text}" --write-media "{filepath}"'
    subprocess.run(cmd, shell=True, check=True)
    dur = float(subprocess.check_output(f'ffprobe -i "{filepath}" -show_entries format=duration -v quiet -of csv="p=0"', shell=True).decode().strip())
    print(f"{filename}: {dur:.2f}s -> {text}")

print("\nAll concise voiceover clips generated!")
