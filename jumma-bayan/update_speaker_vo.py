import subprocess
import os

ASSETS = "/home/muaz/projects/07-ajs-media/01-teast-01/jumma-bayan/assets"
VOICE = "ta-IN-ValluvarNeural"

# Replacing "கத்தீப்" with "பேச்சாளர்"
clips = [
    ("vo-m1-speaker.mp3", "இடம் மஸ்ஜிதே முஹம்மதியா, பேச்சாளர் சகோதரர் கோவை பக்கீர் முஹம்மத்.", "+16%", "-5Hz"),
    ("vo-m2-speaker.mp3", "இடம் மஸ்ஜிதே தவ்ஹீத், பேச்சாளர் சகோதரர் கோவை உமர்.", "+16%", "-5Hz"),
    ("vo-m3-speaker.mp3", "இடம் மஸ்ஜிதே ரஹ்மானியா, பேச்சாளர் மவ்லவி நாஸிர் உமரி.", "+16%", "-5Hz"),
    ("vo-m4-speaker.mp3", "இடம் மஸ்ஜிதே ஹபீப், பேச்சாளர் மவ்லவி அபூ அலிஃப் பாதுஷா.", "+16%", "-5Hz"),
]

for filename, text, rate, pitch in clips:
    raw_path = f"/tmp/raw_{filename}"
    out_path = os.path.join(ASSETS, filename)
    
    tts_cmd = f'~/.local/bin/edge-tts --voice "{VOICE}" --rate="{rate}" --pitch="{pitch}" --text "{text}" --write-media "{raw_path}"'
    subprocess.run(tts_cmd, shell=True, check=True)
    
    eq_cmd = (
        f'ffmpeg -y -i "{raw_path}" -af '
        f'"equalizer=f=110:width_type=o:width=1.2:g=5.5,'
        f'equalizer=f=2800:width_type=o:width=1.0:g=2.0,'
        f'acompressor=threshold=-12dB:ratio=3:attack=10:release=120" '
        f'"{out_path}"'
    )
    subprocess.run(eq_cmd, shell=True, check=True)
    
    dur = float(subprocess.check_output(f'ffprobe -i "{out_path}" -show_entries format=duration -v quiet -of csv="p=0"', shell=True).decode().strip())
    print(f"{filename} ({dur:.2f}s): {text}")

print("\nUpdated speaker clips with 'பேச்சாளர்' successfully!")
