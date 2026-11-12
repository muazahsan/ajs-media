import subprocess
import os

ASSETS = "/home/muaz/projects/07-ajs-media/01-teast-01/jumma-bayan/assets"
VOICE = "ta-IN-ValluvarNeural"

# Crisp, natural speed (+12% rate) to match tight kinetic screen transitions perfectly
clips = [
    # Beat 1: Hook (0s - 4.5s) -> target 3.8s
    ("vo-hook.mp3", "அஸ்ஸலாமு அலைக்கும். வரும் வெள்ளிக்கிழமை பதிமூன்று நவம்பர். நபி வழியில் ஜும்மா சிறப்பு பயான்."),
    
    # M1 Speaker (4.2s - 8.2s) -> target ~3.6s
    ("vo-m1-speaker.mp3", "மஸ்ஜிதே முஹம்மதியா. சகோதரர் கோவை பக்கீர் முஹம்மத்."),
    # M1 Topic (8.0s - 12.0s) -> target ~2.6s
    ("vo-m1-topic.mp3", "தலைப்பு: நபி வழியில் ஜும்மா."),
    
    # M2 Speaker (11.8s - 15.8s) -> target ~3.4s
    ("vo-m2-speaker.mp3", "மஸ்ஜிதே தவ்ஹீத். சகோதரர் கோவை உமர்."),
    # M2 Topic (15.6s - 19.6s) -> target ~2.8s
    ("vo-m2-topic.mp3", "தலைப்பு: அண்ணலாரின் அற்புத அரசியல்."),
    
    # M3 Speaker (19.4s - 23.4s) -> target ~3.4s
    ("vo-m3-speaker.mp3", "மஸ்ஜிதே ரஹ்மானியா. மவ்லவி நாஸிர் உமரி."),
    # M3 Topic (23.2s - 27.2s) -> target ~2.8s
    ("vo-m3-topic.mp3", "தலைப்பு: வியக்க வைக்கும் விசாரணை நாள்."),
    
    # M4 Speaker (27.0s - 31.0s) -> target ~3.4s
    ("vo-m4-speaker.mp3", "மஸ்ஜிதே ஹபீப். மவ்லவி அபூ அலிஃப் பாதுஷா."),
    # M4 Topic (30.8s - 34.8s) -> target ~3.0s
    ("vo-m4-topic.mp3", "தலைப்பு: மழையை மையப்படுத்தி சொல்லப்பட்ட செய்திகள்."),
    
    # Outro (34.5s - 39.0s) -> target ~4.0s
    ("vo-outro.mp3", "பாங்கு பன்னிரண்டு ஐம்பத்தைந்து. அன்புடன் அழைக்கிறது அல் ஜம்யதுஸ் ஸலப்பியா பேர்ணாம்பட்டு.")
]

for filename, text in clips:
    filepath = os.path.join(ASSETS, filename)
    cmd = f'~/.local/bin/edge-tts --voice "{VOICE}" --rate="+14%" --pitch="-1Hz" --text "{text}" --write-media "{filepath}"'
    subprocess.run(cmd, shell=True, check=True)
    dur = float(subprocess.check_output(f'ffprobe -i "{filepath}" -show_entries format=duration -v quiet -of csv="p=0"', shell=True).decode().strip())
    print(f"{filename}: {dur:.2f}s -> {text}")

print("\nAll synchronized voiceover clips regenerated successfully!")
