from transformers import MarianMTModel, MarianTokenizer

_model_cache = {}

def get_model_name(src, tgt):
    return f'Helsinki-NLP/opus-mt-{src}-{tgt}'

def load_model_tokenizer(src, tgt):
    model_name = get_model_name(src, tgt)
    if model_name not in _model_cache:
        tokenizer = MarianTokenizer.from_pretrained(model_name)
        model = MarianMTModel.from_pretrained(model_name)
        _model_cache[model_name] = (tokenizer, model)
    return _model_cache[model_name]

def translate_text(text, src_lang, tgt_lang):
    tokenizer, model = load_model_tokenizer(src_lang, tgt_lang)
    tokens = tokenizer([text], return_tensors='pt', padding=True)
    translated = model.generate(**tokens)
    return tokenizer.decode(translated[0], skip_special_tokens=True)
