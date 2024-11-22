import oracledb
import json
from datetime import datetime

'''
Integrantes:

NOME: Gabriel Yuji Suzuki	 			RM: 556588
NOME: Gustavo de Aguiar Lima Silva	 	RM: 557707
NOME: Nathan Magno Gustavo Consolo	RM: 558987
'''

def exportar_json(cursor):
    sql = f"SELECT * FROM tbl_resultados"
    cursor.execute(sql)
    
    columns = [col[0] for col in cursor.description]
    resultados = cursor.fetchall()

    dic_resultados = {col: [] for col in columns}

    for row in resultados:
        for col, value in zip(columns, row):
            if isinstance(value, datetime):  
                value = value.strftime("%d/%m/%Y") 
            dic_resultados[col].append(value)

    consulta_json = json.dumps(dic_resultados, sort_keys=True, indent=2)

    with open('consulta.json', 'w') as file:
        file.write(consulta_json)

    cursor.close()
    

        
def entrada_valor_numerico():
    try:
        entrada = int(input(f"\n"))
    except ValueError as texto:
        print(f"Insira apenas valores numéricos! - {texto}")
        entrada = entrada_valor_numerico()
    except:
        print(f"Algum erro ocorreu durante a execução do código")
        entrada = entrada_valor_numerico()
    finally:
        return entrada


def erro_entrada(entrada, qtdAlternativas):
    try:
        if qtdAlternativas == 2:
            while entrada != 1 and entrada != 2 :
                entrada = int(input(f"Entrada inválida\n"))
        elif qtdAlternativas == 3:
            while entrada != 1 and entrada != 2 and entrada != 3  :
                entrada = int(input(f"Entrada inválida\n"))
        else:
            pass
    except ValueError as texto:
        print(f"Insira apenas valores numéricos! - {texto}")
        erro_entrada(entrada, qtdAlternativas)
    except:
        print(f"Algum errou ocorreu durante a execução do código")
        erro_entrada(entrada, qtdAlternativas)
    finally:
        return entrada
        
def  conecta_db():
    try:
        connection = oracledb.connect("rm558987/111204@oracle.fiap.com.br:1521/ORCL")
        return connection
    except Exception as e:
        return f"Erro ao conectar ao banco de dados: {e}"
    

def calcular_emissao():
    try:

        consumo_eletricidade = float(input("Digite o consumo de eletricidade (kWh): "))
        consumo_gas = float(input("Digite o consumo de gás (m³): "))
        

        fatores_emissao = {"eletricidade": 0.85, "gas": 1.88}
        

        emissao_eletricidade = consumo_eletricidade * fatores_emissao["eletricidade"]
        emissao_gas = consumo_gas * fatores_emissao["gas"]

        total_CO2 = emissao_eletricidade + emissao_gas
        

        print(f"Sua pegada de carbono é {total_CO2:.2f} kgCO₂ por mês.")

        print(f"\nDeseja salvar este resultado?")
        print(f"1 - Sim\n2 - Não")
        salvar = entrada_valor_numerico()
        salvar = erro_entrada(salvar, 2)
        
        if salvar == 1:

            connection = conecta_db()
            cursor = connection.cursor()
            
            sql = "INSERT INTO tbl_resultados (gasto_energia, gasto_gas, resultado) VALUES (:gasto_luz, :gasto_gas, :resultado_calculo)"
            cursor.execute(sql, {
                "gasto_luz": consumo_eletricidade,
                "gasto_gas": consumo_gas,
                "resultado_calculo": total_CO2
            })
            
            connection.commit()
            print("Resultado salvo com sucesso!")
            
            cursor.close()
            connection.close()
        else:
            print("\nResultado não salvo.")
        
    except ValueError:
        print("Por favor, insira valores numéricos válidos.")
    except Exception as e:
        print(f"Ocorreu um erro ao calcular a emissão de carbono: {e}")


def menu_inicial():
    print(f"\nBem-vindo ao Carbon Track!\n\n1 - Calcular minha emissão de Carbono\t2 - Consultar meus resultados")
    
    entrada = entrada_valor_numerico()
    
    entrada = erro_entrada(entrada, 2)
    
    match entrada:
        case 1: calcular_emissao()
        case 2: consultar_resultados()
        case 3: pass
        
    print("\n\nDeseja continuar na plataforma?\n1 - Sim\t2 - Não")    
    
    escolha = entrada_valor_numerico()
    
    escolha = erro_entrada(escolha, 2)
    
    if escolha == 1: 
        menu_inicial()
    else:
        exit()

def alterar_resultado(id_resultado, cursor, connection):
    try:
       
        print(f"\nInsira os novos valores de seu cálculo\n")
       
        consumo_eletricidade = float(input("\nDigite o consumo de eletricidade (kWh): "))
        consumo_gas = float(input("\nDigite o consumo de gás (m³): "))
        

        fatores_emissao = {"eletricidade": 0.85, "gas": 1.88}
        
        emissao_eletricidade = consumo_eletricidade * fatores_emissao["eletricidade"]
        emissao_gas = consumo_gas * fatores_emissao["gas"]

        total_CO2 = emissao_eletricidade + emissao_gas
       
        sql = "UPDATE tbl_resultados SET gasto_energia = :energia, gasto_gas = :gas, resultado = :resultado WHERE id_resultado = :id"
        cursor.execute(sql, {"id": id_resultado, "energia": consumo_eletricidade, "gas": consumo_gas, "resultado": total_CO2})
        
        connection.commit()
        
        print(f"\nOs dados do resultado de ID {id_resultado} foram alterados" )
        
    except Exception as e:
        print(f"Erro ao atualizar o resultado: {e}")
        
    finally:
        cursor.close()
        connection.close()

def  deletar_resultado(id_resultado, cursor, connection):
    try:
       
        sql = "DELETE FROM tbl_resultados WHERE id_resultado = :id"
        cursor.execute(sql, {"id": id_resultado})
        
        connection.commit()
        
        print(f"\nO resultado com ID {id_resultado} foi deletado" )
        
    except Exception as e:
        print(f"Erro ao deletar o resultado: {e}")
        
    finally:
        cursor.close()
        connection.close()
            
def selecionar_resultado():
    try:

        id_resultado = int(input("Digite o ID do resultado que deseja consultar: "))
        
        connection = conecta_db()
        cursor = connection.cursor()

        sql = "SELECT * FROM tbl_resultados WHERE id_resultado = :id"
        cursor.execute(sql, {"id": id_resultado})
        resultado = cursor.fetchone()

        if resultado:
            columns = ["ID", "Data do Cálculo", "Gasto de Energia (kWh)", "Gasto de Gás (m³)", "Resultado (kg CO₂)"]
            data_formatada = resultado[1].strftime("%d/%m/%Y")
            print(f"\nResultado selecionado (ID: {resultado[0]}):")
            print(f"{columns[0]}: {resultado[0]}")
            print(f"{columns[1]}: {data_formatada}")
            print(f"{columns[2]}: {resultado[2]} kWh")
            print(f"{columns[3]}: {resultado[3]} m³")
            print(f"{columns[4]}: {resultado[4]} kg CO₂")
            
            print(f"\n1 - Deletar resultado\t2 - Alterar valores do cálculo\n\n")
            
            escolha = entrada_valor_numerico()
            escolha = erro_entrada(escolha, 2)
            
            if escolha == 1:
                deletar_resultado(id_resultado, cursor, connection)
            else:
        
                alterar_resultado(id_resultado, cursor, connection)
            
        else:
            print("\nNenhum resultado encontrado com o ID informado.")
            

    except ValueError:
        print("Por favor, insira um ID válido (número inteiro).")
    except Exception as e:
        print(f"Erro ao consultar o resultado: {e}")


def consultar_resultados():
    
    connection = conecta_db()
    cursor = connection.cursor()
    
    try:

        sql = "SELECT * FROM tbl_resultados"
        cursor.execute(sql)


        columns = ["ID","Data do Cálculo", "Gasto de Energia (kWh)", "Gasto de Gás (m³)", "Resultado (kg CO₂)"]


        resultados = cursor.fetchall()

        if not resultados:
            print("Nenhum resultado encontrado!")
            menu_inicial()

  
        print("\nResultados de Emissões de Carbono:")
        
        for row in resultados:

            data_formatada = row[1].strftime("%d/%m/%Y")
            valores = [row[0], data_formatada, row[2], row[3], row[4]]
            print(f"\n\n{columns[0]}: {valores[0]}")
            print(f"{columns[1]}: {valores[1]}")
            print(f"{columns[2]}: {valores[2]} kWh")
            print(f"{columns[3]}: {valores[3]} m³")
            print(f"{columns[4]}: {valores[4]} kg CO₂\n")
            
        print(f"\n\nVocê deseja exportar as informações obtidas para um arquivo json?\n1 - Sim\t2 - Não")
            
        escolha = entrada_valor_numerico()
        escolha = erro_entrada(escolha, 2)
        
        if (escolha == 1):
            exportar_json(cursor)
        
        else: 
            cursor.close()
            connection.close()
         
         
    except Exception as e:
        print(f"\n\nErro ao consultar os resultados: {e}")

    finally:
        print(f"\nVocê deseja manipular algum resultado específico?\n1 - Sim\t2 - Não")
              
        escolha = entrada_valor_numerico()
        escolha = erro_entrada(escolha, 2)
        
        if escolha == 1:
            selecionar_resultado()
        else:
            pass



menu_inicial()