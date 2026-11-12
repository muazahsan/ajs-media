import subprocess
import os

ASSETS = "/home/muaz/projects/07-ajs-media/01-teast-01/jumma-bayan/assets"
VOICE = "ta-IN-ValluvarNeural"

# New structured script requested by user:
# Opening: Upcoming Jumma (அஸ்ஸலாமு அலைக்கும். வரும் ஜும்மா சிறப்பு பயான்)
# Each Mosque:
#   Speaker Screen: Place, Speaker then Speaker Name (இடம் மஸ்ஜிதே..., கத்தீப் சகோதரர்...)
#   Topic Screen: Topic then Topic Name (தலைப்பு: ...)
# Outro: Prayer time & Organizer
clips = [
    # 1. Opening Hook (Upcoming Jumma)
    ("vo-hook.mp3", "அஸ்ஸலாமு அலைக்கும். வரும் ஜும்மா சிறப்பு பயான்.", "+8%", "-6Hz"),
    
    # 2. Mosque 1 - Speaker
    ("vo-m1-speaker.mp3", "இடம் மஸ்ஜிதே முஹம்மதியா, கத்தீப் சகோதரர் கோவை பக்கீர் முஹம்மத்.", "+16%", "-5Hz"),
    # 3. Mosque 1 - Topic
    ("vo-m1-topic.mp3", "தலைப்பு, நபி வழியில் ஜும்மா.", "+14%", "-5Hz"),
    
    # 4. Mosque 2 - Speaker
    ("vo-m2-speaker.mp3", "இடம் மஸ்ஜிதே தவ்ஹீத், கத்தீப் சகோதரர் கோவை உமர்.", "+16%", "-5Hz"),
    # 5. Mosque 2 - Topic
    ("vo-m2-topic.mp3", "தலைப்பு, அண்ணலாரின் அற்புத அரசியல்.", "+14%", "-5Hz"),
    
    # 6. Mosque 3 - Speaker
    ("vo-m3-speaker.mp3", "இடம் மஸ்ஜிதே ரஹ்மானியா, கத்தீப் மவ்லவி நாஸிர் உமரி.", "+16%", "-5Hz"),
    # 7. Mosque 3 - Topic
    ("vo-m3-topic.mp3", "தலைப்பு, வியக்க வைக்கும் விசாரணை நாள்.", "+14%", "-5Hz"),
    
    # 8. Mosque 4 - Speaker
    ("vo-m4-speaker.mp3", "இடம் மஸ்ஜிதே ஹபீப், கத்தீப் மவ்லவி அபூ அலிஃப் பாதுஷா.", "+16%", "-5Hz"),
    # 9. Mosque 4 - Topic
    ("vo-m4-topic.mp3", "தலைப்பு, மழையை மையப்படுத்தி சொல்லப்பட்ட செய்திகள்.", "+16%", "-5Hz"),
    
    # 10. Outro
    ("vo-outro.mp3", "பாங்கு பன்னிரண்டு ஐம்பத்தைந்து. அன்புடன் அழைக்கிறது அல் ஜம்யதுஸ் ஸலப்பியா பேர்ணாம்பட்டு.", "+16%", "-5Hz")
]

for filename, text, rate, pitch in clips:
    raw_path = f"/tmp/raw_{filename}"
    out_path = os.path.join(ASSETS, filename)
    
    # Generate deep male voice via Edge-TTS
    tts_cmd = f'~/.local/bin/edge-tts --voice "{VOICE}" --rate="{rate}" --pitch="{pitch}" --text "{text}" --write-media "{raw_path}"'
    subprocess.run(tts_cmd, shell=True, check=True)
    
    # Process audio with warm low-end boost, clarity EQ and compressor for radio-grade depth
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

print("\nAll deep-voice structured clips generated successfully!")
