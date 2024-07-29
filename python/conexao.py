from mysql.connector import connect
import os
from dotenv import load_dotenv

load_dotenv()
DB_HOST = os.getenv('DB_HOST')
DB_PORTA = os.getenv('DB_PORTA')
DB_SENHA = os.getenv('DB_SENHA')
DB_USUARIO = os.getenv('DB_USUARIO')
DB_BANCO = os.getenv('DB_BANCO')


def criar_conexao():
    return connect(host=DB_HOST, password=DB_SENHA, user=DB_USUARIO, database=DB_BANCO, port=DB_PORTA)


def fexar_conexão(con):
    return con.close()