from flask import Flask, request, jsonify
from flask_cors import CORS
from translator import translate_text

app = Flask(__name__)
CORS(app)

@app.route('/translate', methods=['POST'])
def translate():
    data = request.get_json()
    text = data['text']
    source = data['source']
    target = data['target']
    try:
        translated = translate_text(text, source, target)
        return jsonify({"translated_text": translated})
    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)
