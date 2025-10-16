#!/usr/bin/env python3
import csv
import psycopg2
from datetime import datetime
import os

# Configuração do Supabase
DB_URL = "postgresql://postgres:[password]@db.ygnxdxkykkdflaswegwn.supabase.co:5432/postgres"

def parse_date(date_str):
    if not date_str or date_str == '0':
        return None
    try:
        return datetime.strptime(date_str.split('T')[0], '%Y-%m-%d').date()
    except:
        return None

def clean_value(value):
    if value == '0' or value == '':
        return None
    return value.strip()

def import_seciteci_data():
    conn = psycopg2.connect(DB_URL)
    cur = conn.cursor()
    
    csv_file = '/Users/chiquinho/sites_bestgov/sitemanduvi/public/documents/rel_matriculas_Dep.csv'
    
    with open(csv_file, 'r', encoding='utf-8') as f:
        reader = csv.reader(f, delimiter=';')
        next(reader)  # Skip header
        next(reader)  # Skip column names
        
        for row in reader:
            if len(row) >= 13:
                nome = clean_value(row[0])
                cpf = clean_value(row[1])
                rg = clean_value(row[2])
                login = clean_value(row[3])
                senha = clean_value(row[4])
                rua = clean_value(row[5])
                bairro = clean_value(row[6])
                cidade = clean_value(row[7])
                estado = clean_value(row[8])
                numero = clean_value(row[9])
                nascimento = parse_date(row[10])
                cpf_responsavel = clean_value(row[11])
                status = clean_value(row[12]) or 'ATIVO'
                
                cur.execute("""
                    INSERT INTO core.seciteci_matriculas 
                    (nome, cpf, rg, nascimento, login, senha, rua, bairro, cidade, estado, numero, cpf_responsavel, status)
                    VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s)
                """, (nome, cpf, rg, nascimento, login, senha, rua, bairro, cidade, estado, numero, cpf_responsavel, status))
    
    conn.commit()
    cur.close()
    conn.close()
    print("Dados importados com sucesso!")

if __name__ == "__main__":
    import_seciteci_data()
