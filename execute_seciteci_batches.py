#!/usr/bin/env python3
import os
import glob

def execute_batches():
    # Listar todos os arquivos de partes
    parts = sorted(glob.glob('/Users/chiquinho/sites_manduvi/sitemanduvi/seciteci_part_*'))
    
    print(f"Encontrados {len(parts)} arquivos para processar")
    
    for i, part_file in enumerate(parts):
        print(f"Processando parte {i+1}/{len(parts)}: {os.path.basename(part_file)}")
        
        with open(part_file, 'r', encoding='utf-8') as f:
            content = f.read()
            
        # Salvar em arquivo temporário para execução
        temp_file = f'/tmp/seciteci_batch_{i}.sql'
        with open(temp_file, 'w', encoding='utf-8') as f:
            f.write(content)
        
        print(f"Arquivo {temp_file} criado com {len(content)} caracteres")
        
        # Aqui você pode executar o SQL via psql ou outra ferramenta
        # Por enquanto, vamos apenas mostrar o progresso
        print(f"✓ Parte {i+1} preparada para execução")

if __name__ == "__main__":
    execute_batches()
