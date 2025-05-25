# TranslateX 🌐

**TranslateX** is a multilingual text translation web app built with React (frontend) and Flask (backend). It uses Hugging Face's MarianMT models to perform real-time translations between multiple languages.

---

## ✨ Features

* Translate text between supported language pairs (e.g., English to Hindi, English to French, etc.)
* Clean and responsive frontend UI
* RESTful API with Flask backend
* MarianMT models from Hugging Face Transformers
* Supports adding more language pairs easily

---

## 🛠️ Tech Stack

* **Frontend:** React.js, Tailwind CSS
* **Backend:** Flask, Transformers (Hugging Face), Python
* **APIs:** Hugging Face MarianMT translation models

---

## 🚀 Getting Started

### Clone the repository

```bash
git clone https://github.com/rHarsh-11/TranslateX.git
cd TranslateX
```

### Backend Setup

```bash
cd backend
python -m venv venv
venv\Scripts\activate       # On Windows
# source venv/bin/activate  # On macOS/Linux
pip install -r requirements.txt
python app.py               # Starts the Flask server
```

### Frontend Setup

```bash
cd frontend
npm install
npm start                   # Starts the React dev server
```

---

## 🧠 How It Works

1.  User enters the text and selects source and target languages in the frontend.
2.  React frontend sends a **POST** request to the Flask backend.
3.  Backend uses Hugging Face MarianMT model to translate the text.
4.  Translated result is sent back and displayed.

---

## 📂 Project Structure

```cpp
TranslateX/
│
├── backend/
│   ├── app.py
│   ├── translator.py
│   ├── requirements.txt
│   └── ...
│
├── frontend/
│   ├── src/
│   ├── public/
│   └── ...
│
└── README.md
```
