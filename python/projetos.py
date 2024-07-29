from python.conexao import criar_conexao

con = criar_conexao()

def listaProjetosPessoais():
    cursor = con.cursor()
    sql = "select * from projetos where sessao = 'pessoais'"
    cursor.execute(sql)
    projetosPessoais = cursor.fetchall()
    return projetosPessoais

def listaProjetosProfissionais():
    cursor = con.cursor()
    sql = "select * from projetos where sessao = 'profissionais'"
    cursor.execute(sql)
    projetosProfissionais = cursor.fetchall()
    return projetosProfissionais
