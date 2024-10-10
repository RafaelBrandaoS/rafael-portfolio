from flask import Flask, render_template, redirect, request, flash
from flask_mail import Mail, Message
from python.projetos import listaProjetosPessoais, listaProjetosProfissionais
import os
from dotenv import load_dotenv

load_dotenv()
MAIL_PASSWORD = os.getenv('MAIL_PASSWORD')

sk = os.urandom(24)

app = Flask(__name__)
app.secret_key = sk

app.config['MAIL_SERVER'] = 'smtp.gmail.com'
app.config['MAIL_PORT'] = 587
app.config['MAIL_USE_TLS'] = True
app.config['MAIL_USERNAME'] = 'rafaelbrandao431@gmail.com'
app.config['MAIL_PASSWORD'] = MAIL_PASSWORD
app.config['MAIL_DEFAULT_SENDER'] = 'rafaelbrandao431@gmail.com'

mail = Mail(app)

@app.route('/')
def home():
    " home "
    pessoais = listaProjetosPessoais()
    profissionais = listaProjetosProfissionais()
    return render_template('index.html', pessoais=pessoais, profissionais=profissionais)

@app.route('/enviarMensagem', methods=['POST'])
def enviarMensagem():
    if request.method == 'POST':
        name = request.form['nome']
        email = request.form['email']
        assunto = request.form['assunto']
        message = request.form['mensagem']

        msg = Message(f"Assunto: {assunto}", recipients=['rafaelbrandao431@gmail.com'])
        msg.body = f"Nome: {name}\nEmail: {email}\n\nAssunto: {assunto}\n\nMensagem:\n{message}"
        
        try:
            mail.send(msg)
            flash('Sua mensagem foi enviada com sucesso!', 'sucesso')
        except Exception as e:
            flash(f'Ocorreu um erro ao enviar sua mensagem: {str(e)}', 'erro')
        return redirect('/#contato')


if __name__ == "__main__":
    app.run(debug=True)
