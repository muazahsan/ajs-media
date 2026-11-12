import os, json, base64, urllib.request, sys
key = [l.split("=",1)[1].strip() for l in open(".env") if l.startswith("SARVAM_API_KEY")][0]
SPEAKER = sys.argv[1] if len(sys.argv) > 1 else "abhilash"
MODEL = sys.argv[2] if len(sys.argv) > 2 else "bulbul:v2"
script = json.load(open("audio-src/script.json"))
for name, text in script.items():
    body = {"text": text, "target_language_code": "ta-IN", "speaker": SPEAKER, "model": MODEL, "pace": 0.95, "speech_sample_rate": 44100}
    if MODEL == "bulbul:v2": body.update({"pitch": -0.1, "loudness": 1.1})
    req = urllib.request.Request("https://api.sarvam.ai/text-to-speech", data=json.dumps(body).encode(),
        headers={"api-subscription-key": key, "Content-Type": "application/json"})
    try:
        r = json.load(urllib.request.urlopen(req))
    except urllib.error.HTTPError as e:
        print(name, e.code, e.read().decode()); sys.exit(1)
    open(f"audio-src/raw-{name}.wav", "wb").write(base64.b64decode("".join(r["audios"])))
    print("ok", name)
