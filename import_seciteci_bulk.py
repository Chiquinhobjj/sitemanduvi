#!/usr/bin/env python3
import csv
import sys
import os

def process_csv_to_sql():
    csv_file = '/Users/chiquinho/sites_bestgov/sitemanduvi/public/documents/rel_matriculas_Dep.csv'
    sql_file = '/Users/chiquinho/sites_manduvi/sitemanduvi/insert_seciteci.sql'
    
    with open(csv_file, 'r', encoding='utf-8') as f:
        reader = csv.reader(f, delimiter=';')
        next(reader)  # Skip header
        next(reader)  # Skip column names
        
        with open(sql_file, 'w', encoding='utf-8') as sql:
            sql.write("-- Inserção em lote dos dados SECITECI\n")
            sql.write("INSERT INTO core.seciteci_matriculas (nome, cpf, rg, nascimento, login, senha, rua, bairro, cidade, estado, numero, cpf_responsavel, status) VALUES\n")
            
            rows = []
            count = 0
            
            for row in reader:
                if len(row) >= 13:
                    nome = row[0].strip() if row[0] and row[0] != '0' else 'NULL'
                    cpf = f"'{row[1]}'" if row[1] and row[1] != '0' else 'NULL'
                    rg = f"'{row[2]}'" if row[2] and row[2] != '0' else 'NULL'
                    login = f"'{row[3]}'" if row[3] and row[3] != '0' else 'NULL'
                    senha = f"'{row[4]}'" if row[4] and row[4] != '0' else 'NULL'
                    rua = f"'{row[5]}'" if row[5] and row[5] != '0' else 'NULL'
                    bairro = f"'{row[6]}'" if row[6] and row[6] != '0' else 'NULL'
                    cidade = f"'{row[7]}'" if row[7] and row[7] != '0' else 'NULL'
                    estado = f"'{row[8]}'" if row[8] and row[8] != '0' else 'NULL'
                    numero = f"'{row[9]}'" if row[9] and row[9] != '0' else 'NULL'
                    
                    # Processar data de nascimento
                    nascimento = 'NULL'
                    if row[10] and row[10] != '0':
                        try:
                            date_part = row[10].split('T')[0]
                            nascimento = f"'{date_part}'"
                        except:
                            nascimento = 'NULL'
                    
                    cpf_responsavel = f"'{row[11]}'" if row[11] and row[11] != '0' else 'NULL'
                    status = f"'{row[12]}'" if row[12] else "'ATIVO'"
                    
                    # Escapar aspas simples no nome
                    nome = nome.replace("'", "''")
                    
                    rows.append(f"('{nome}', {cpf}, {rg}, {nascimento}, {login}, {senha}, {rua}, {bairro}, {cidade}, {estado}, {numero}, {cpf_responsavel}, {status})")
                    count += 1
                    
                    if count % 1000 == 0:
                        print(f"Processados {count} registros...")
            
            sql.write(',\n'.join(rows))
            sql.write(';\n')
            
            print(f"Total de {count} registros processados para {sql_file}")

if __name__ == "__main__":
    process_csv_to_sql()
