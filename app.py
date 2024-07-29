from flask import Flask, render_template, url_for
from python.projetos import listaProjetosPessoais, listaProjetosProfissionais

app = Flask(__name__)

@app.route('/')
def home():
    " home "
    pessoais = listaProjetosPessoais()
    profissionais = listaProjetosProfissionais()
    return render_template('index.html', pessoais=pessoais, profissionais=profissionais)

if __name__ == "__main__":
    app.run(debug=True)
