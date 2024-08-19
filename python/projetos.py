from python.conexao import criar_conexao, fexar_conexão


def listaProjetosPessoais():
    con = criar_conexao()
    cursor = con.cursor()
    sql = "select * from projetos where sessao = 'pessoais'"
    cursor.execute(sql)
    projetosPessoais = cursor.fetchall()
    cursor.close()
    fexar_conexão(con)
    return projetosPessoais

def listaProjetosProfissionais():
    con = criar_conexao()
    cursor = con.cursor()
    sql = "select * from projetos where sessao = 'profissionais' order by id desc"
    cursor.execute(sql)
    projetosProfissionais = cursor.fetchall()
    cursor.close()
    fexar_conexão(con)
    return projetosProfissionais
